/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.menu.TextItem
 * @extends Ext2.menu.BaseItem
 * Adds a static text string to a menu, usually used as either a heading or group separator.
 * @constructor
 * Creates a new TextItem
 * @param {Object/String} config If config is a string, it is used as the text to display, otherwise it
 * is applied as a config object (and should contain a <tt>text</tt> property).
 */
Ext2.menu.TextItem = function(cfg){
    if(typeof cfg == 'string'){
        cfg = {text: cfg}
    }
    Ext2.menu.TextItem.superclass.constructor.call(this, cfg);
};

Ext2.extend(Ext2.menu.TextItem, Ext2.menu.BaseItem, {
    /**
     * @cfg {String} text The text to display for this item (defaults to '')
     */
    /**
     * @cfg {Boolean} hideOnClick True to hide the containing menu after this item is clicked (defaults to false)
     */
    hideOnClick : false,
    /**
     * @cfg {String} itemCls The default CSS class to use for text items (defaults to "x2-menu-text")
     */
    itemCls : "x2-menu-text",

    // private
    onRender : function(){
        var s = document.createElement("span");
        s.className = this.itemCls;
        s.innerHTML = this.text;
        this.el = s;
        Ext2.menu.TextItem.superclass.onRender.apply(this, arguments);
    }
});