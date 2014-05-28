/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

// private
// This is a support class used internally by the Grid components
Ext2.grid.GridEditor = function(field, config){
    Ext2.grid.GridEditor.superclass.constructor.call(this, field, config);
    field.monitorTab = false;
};

Ext2.extend(Ext2.grid.GridEditor, Ext2.Editor, {
    alignment: "tl-tl",
    autoSize: "width",
    hideEl : false,
    cls: "x2-small-editor x2-grid-editor",
    shim:false,
    shadow:false
});
