/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.form.Hidden
 * @extends Ext2.form.Field
 * A basic hidden field for storing hidden values in forms that need to be passed in the form submit.
 * @constructor
 * Create a new Hidden field.
 * @param {Object} config Configuration options
 */
Ext2.form.Hidden = Ext2.extend(Ext2.form.Field, {
    // private
    inputType : 'hidden',

    // private
    onRender : function(){
        Ext2.form.Hidden.superclass.onRender.apply(this, arguments);
    },

    // private
    initEvents : function(){
        this.originalValue = this.getValue();
    },

    // These are all private overrides
    setSize : Ext2.emptyFn,
    setWidth : Ext2.emptyFn,
    setHeight : Ext2.emptyFn,
    setPosition : Ext2.emptyFn,
    setPagePosition : Ext2.emptyFn,
    markInvalid : Ext2.emptyFn,
    clearInvalid : Ext2.emptyFn
});
Ext2.reg('hidden', Ext2.form.Hidden);