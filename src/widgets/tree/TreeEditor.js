/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.tree.TreeEditor
 * @extends Ext2.Editor
 * Provides editor functionality for inline tree node editing.  Any valid {@link Ext2.form.Field} subclass can be used
 * as the editor field.
 * @constructor
 * @param {TreePanel} tree
 * @param {Object} fieldConfig (optional) Either a prebuilt {@link Ext2.form.Field} instance or a Field config object
 * that will be applied to the default field instance (defaults to a {@link Ext2.form.TextField}).
 * @param {Object} config (optional) A TreeEditor config object
 */
Ext2.tree.TreeEditor = function(tree, fc, config){
    fc = fc || {};
    var field = fc.events ? fc : new Ext2.form.TextField(fc);
    Ext2.tree.TreeEditor.superclass.constructor.call(this, field, config);

    this.tree = tree;

    if(!tree.rendered){
        tree.on('render', this.initEditor, this);
    }else{
        this.initEditor(tree);
    }
};

Ext2.extend(Ext2.tree.TreeEditor, Ext2.Editor, {
    /**
     * @cfg {String} alignment
     * The position to align to (see {@link Ext2.Element#alignTo} for more details, defaults to "l-l").
     */
    alignment: "l-l",
    // inherit
    autoSize: false,
    /**
     * @cfg {Boolean} hideEl
     * True to hide the bound element while the editor is displayed (defaults to false)
     */
    hideEl : false,
    /**
     * @cfg {String} cls
     * CSS class to apply to the editor (defaults to "x2-small-editor x2-tree-editor")
     */
    cls: "x2-small-editor x2-tree-editor",
    /**
     * @cfg {Boolean} shim
     * True to shim the editor if selects/iframes could be displayed beneath it (defaults to false)
     */
    shim:false,
    // inherit
    shadow:"frame",
    /**
     * @cfg {Number} maxWidth
     * The maximum width in pixels of the editor field (defaults to 250).  Note that if the maxWidth would exceed
     * the containing tree element's size, it will be automatically limited for you to the container width, taking
     * scroll and client offsets into account prior to each edit.
     */
    maxWidth: 250,
    /**
     * @cfg {Number} editDelay The number of milliseconds between clicks to register a double-click that will trigger
     * editing on the current node (defaults to 350).  If two clicks occur on the same node within this time span,
     * the editor for the node will display, otherwise it will be processed as a regular click.
     */
    editDelay : 350,

    initEditor : function(tree){
        tree.on('beforeclick', this.beforeNodeClick, this);
        tree.on('dblclick', this.onNodeDblClick, this);
        this.on('complete', this.updateNode, this);
        this.on('beforestartedit', this.fitToTree, this);
        this.on('startedit', this.bindScroll, this, {delay:10});
        this.on('specialkey', this.onSpecialKey, this);
    },

    // private
    fitToTree : function(ed, el){
        var td = this.tree.getTreeEl().dom, nd = el.dom;
        if(td.scrollLeft >  nd.offsetLeft){ // ensure the node left point is visible
            td.scrollLeft = nd.offsetLeft;
        }
        var w = Math.min(
                this.maxWidth,
                (td.clientWidth > 20 ? td.clientWidth : td.offsetWidth) - Math.max(0, nd.offsetLeft-td.scrollLeft) - /*cushion*/5);
        this.setSize(w, '');
    },

    /**
     * Edit the text of the passed {@link Ext2.tree.TreeNode TreeNode}.
     * @param node {Ext2.tree.TreeNode} The TreeNode to edit. The TreeNode must be {@link Ext2.tree.TreeNode#editable editable}.
     */
    triggerEdit : function(node, defer){
        this.completeEdit();
		if(node.attributes.editable !== false){
           /**
            * The {@link Ext2.tree.TreeNode TreeNode} this editor is bound to. Read-only.
            * @type Ext2.tree.TreeNode
            * @property editNode
            */
			this.editNode = node;
            if(this.tree.autoScroll){
                Ext2.fly(node.ui.getEl()).scrollIntoView(this.tree.body);
            }
            var value = node.text || '';
            if (!Ext2.isGecko && Ext2.isEmpty(node.text)){
                node.setText('&nbsp;');
            }
            this.autoEditTimer = this.startEdit.defer(this.editDelay, this, [node.ui.textNode, value]);
            return false;
        }
    },

    // private
    bindScroll : function(){
        this.tree.getTreeEl().on('scroll', this.cancelEdit, this);
    },

    // private
    beforeNodeClick : function(node, e){
        clearTimeout(this.autoEditTimer);
        if(this.tree.getSelectionModel().isSelected(node)){
            e.stopEvent();
            return this.triggerEdit(node);
        }
    },

    onNodeDblClick : function(node, e){
        clearTimeout(this.autoEditTimer);
    },

    // private
    updateNode : function(ed, value){
        this.tree.getTreeEl().un('scroll', this.cancelEdit, this);
        this.editNode.setText(value);
    },

    // private
    onHide : function(){
        Ext2.tree.TreeEditor.superclass.onHide.call(this);
        if(this.editNode){
            this.editNode.ui.focus.defer(50, this.editNode.ui);
        }
    },

    // private
    onSpecialKey : function(field, e){
        var k = e.getKey();
        if(k == e.ESC){
            e.stopEvent();
            this.cancelEdit();
        }else if(k == e.ENTER && !e.hasModifier()){
            e.stopEvent();
            this.completeEdit();
        }
    }
});
