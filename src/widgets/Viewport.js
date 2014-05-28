/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.Viewport
 * @extends Ext2.Container
 * A specialized container representing the viewable application area (the browser viewport).
 * <p> The Viewport renders itself to the document body, and automatically sizes itself to the size of
 * the browser viewport and manages window resizing. There may only be one Viewport created
 * in a page. Inner layouts are available by virtue of the fact that all {@link Ext2.Panel Panel}s
 * added to the Viewport, either through its {@link #items}, or through the items, or the {@link #add}
 * method of any of its child Panels may themselves have a layout.</p>
 * <p>The Viewport does not provide scrolling, so child Panels within the Viewport should provide
 * for scrolling if needed using the {@link #autoScroll} config.</p>
 * Example showing a classic application border layout :<pre><code>
new Ext2.Viewport({
    layout: 'border',
    items: [{
        region: 'north',
        html: '&lt;h1 class="x2-panel-header">Page Title&lt;/h1>',
        autoHeight: true,
        border: false,
        margins: '0 0 5 0'
    }, {
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        xtype: 'treepanel',
        width: 200,
        autoScroll: true,
        split: true,
        loader: new Ext2.tree.TreeLoader(),
        root: new Ext2.tree.AsyncTreeNode({
            expanded: true,
            children: [{
                text: 'Menu Option 1',
                leaf: true
            }, {
                text: 'Menu Option 2',
                leaf: true
            }, {
                text: 'Menu Option 3',
                leaf: true
            }]
        }),
        rootVisible: false,
        listeners: {
            click: function(n) {
                Ext2.Msg.alert('Navigation Tree Click', 'You clicked: "' + n.attributes.text + '"');
            }
        }
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: {
            title: 'Default Tab',
            html: 'The first tab\'s content. Others may be added dynamically'
        }
    }, {
        region: 'south',
        title: 'Information',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100
    }]
});
</code></pre>
 * @constructor
 * Create a new Viewport
 * @param {Object} config The config object
 */
Ext2.Viewport = Ext2.extend(Ext2.Container, {
	/*
	 * Privatize config options which, if used, would interfere with the
	 * correct operation of the Viewport as the sole manager of the
	 * layout of the document body.
	 */
    /**
     * @cfg {Mixed} applyTo @hide
	 */
    /**
     * @cfg {Boolean} allowDomMove @hide
	 */
    /**
     * @cfg {Boolean} hideParent @hide
	 */
    /**
     * @cfg {Mixed} renderTo @hide
	 */
    /**
     * @cfg {Boolean} hideParent @hide
	 */
    /**
     * @cfg {Number} height @hide
	 */
    /**
     * @cfg {Number} width @hide
	 */
    /**
     * @cfg {Boolean} autoHeight @hide
	 */
    /**
     * @cfg {Boolean} autoWidth @hide
	 */
    /**
     * @cfg {Boolean} deferHeight @hide
	 */
    /**
     * @cfg {Boolean} monitorResize @hide
	 */
    initComponent : function() {
        Ext2.Viewport.superclass.initComponent.call(this);
        document.getElementsByTagName('html')[0].className += ' x2-viewport';
        this.el = Ext2.getBody();
        this.el.setHeight = Ext2.emptyFn;
        this.el.setWidth = Ext2.emptyFn;
        this.el.setSize = Ext2.emptyFn;
        this.el.dom.scroll = 'no';
        this.allowDomMove = false;
        this.autoWidth = true;
        this.autoHeight = true;
        Ext2.EventManager.onWindowResize(this.fireResize, this);
        this.renderTo = this.el;
    },

    fireResize : function(w, h){
        this.fireEvent('resize', this, w, h, w, h);
    }
});
Ext2.reg('viewport', Ext2.Viewport);
