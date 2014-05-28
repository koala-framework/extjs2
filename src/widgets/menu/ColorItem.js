/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.menu.ColorItem
 * @extends Ext2.menu.Adapter
 * A menu item that wraps the {@link Ext2.ColorPalette} component.
 * @constructor
 * Creates a new ColorItem
 * @param {Object} config Configuration options
 */
Ext2.menu.ColorItem = function(config){
    Ext2.menu.ColorItem.superclass.constructor.call(this, new Ext2.ColorPalette(config), config);
    /** The Ext2.ColorPalette object @type Ext2.ColorPalette */
    this.palette = this.component;
    this.palette.purgeListeners();
    this.relayEvents(this.palette, ["select"]);
    if(this.selectHandler){
        this.on('select', this.selectHandler, this.scope);
    }
};
Ext2.extend(Ext2.menu.ColorItem, Ext2.menu.Adapter);