/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.menu.DateMenu
 * @extends Ext2.menu.Menu
 * A menu containing a {@link Ext2.menu.DateItem} component (which provides a date picker).
 * @constructor
 * Creates a new DateMenu
 * @param {Object} config Configuration options
 */
Ext2.menu.DateMenu = function(config){
    Ext2.menu.DateMenu.superclass.constructor.call(this, config);
    this.plain = true;
    var di = new Ext2.menu.DateItem(config);
    this.add(di);
    /**
     * The {@link Ext2.DatePicker} instance for this DateMenu
     * @type DatePicker
     */
    this.picker = di.picker;
    /**
     * @event select
     * @param {DatePicker} picker
     * @param {Date} date
     */
    this.relayEvents(di, ["select"]);

    this.on('beforeshow', function(){
        if(this.picker){
            this.picker.hideMonthPicker(true);
        }
    }, this);
};
Ext2.extend(Ext2.menu.DateMenu, Ext2.menu.Menu, {
    cls:'x2-date-menu',

    // private
    beforeDestroy : function() {
        this.picker.destroy();
    }
});