/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.menu.DateItem
 * @extends Ext2.menu.Adapter
 * A menu item that wraps the {@link Ext2.DatePicker} component.
 * @constructor
 * Creates a new DateItem
 * @param {Object} config Configuration options
 */
Ext2.menu.DateItem = function(config){
    Ext2.menu.DateItem.superclass.constructor.call(this, new Ext2.DatePicker(config), config);
    /** The Ext2.DatePicker object @type Ext2.DatePicker */
    this.picker = this.component;
    this.picker.purgeListeners();
    this.addEvents('select');
    
    this.picker.on("render", function(picker){
        picker.getEl().swallowEvent("click");
        picker.container.addClass("x2-menu-date-item");
    });

    this.picker.on("select", this.onSelect, this);
};

Ext2.extend(Ext2.menu.DateItem, Ext2.menu.Adapter, {
    // private
    onSelect : function(picker, date){
        this.fireEvent("select", this, date, picker);
        Ext2.menu.DateItem.superclass.handleClick.call(this);
    }
});