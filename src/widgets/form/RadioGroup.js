/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.form.RadioGroup
 * @extends Ext2.form.CheckboxGroup
 * A grouping container for {@link Ext2.form.Radio} controls.
 * @constructor
 * Creates a new RadioGroup
 * @param {Object} config Configuration options
 */
Ext2.form.RadioGroup = Ext2.extend(Ext2.form.CheckboxGroup, {
    /**
     * @cfg {Boolean} allowBlank True to allow every item in the group to be blank (defaults to false). If allowBlank = 
     * false and no items are selected at validation time, {@link @blankText} will be used as the error text.
     */
    allowBlank : true,
    /**
     * @cfg {String} blankText Error text to display if the {@link #allowBlank} validation fails (defaults to "You must 
     * select one item in this group")
     */
    blankText : "You must select one item in this group",
    
    // private
    defaultType : 'radio',
    
    // private
    groupCls: 'x2-form-radio-group',
    
    // private
    initComponent: function(){
        this.addEvents(
            /**
             * @event change
             * Fires when the state of a child radio changes.
             * @param {Ext2.form.RadioGroup} this
             * @param {Ext2.form.Radio} checked The checked radio
             */
            'change'
        );   
        Ext2.form.RadioGroup.superclass.initComponent.call(this);
    },
    
    // private
    fireChecked: function(){
        if(!this.checkTask){
            this.checkTask = new Ext2.util.DelayedTask(this.bufferChecked, this);
        }
        this.checkTask.delay(10);
    },
    
    // private
    bufferChecked: function(){
        var out = null;
        this.items.each(function(item){
            if(item.checked){
                out = item;
                return false;
            }
        });
        this.fireEvent('change', this, out);
    },
    
    onDestroy: function(){
        if(this.checkTask){
            this.checkTask.cancel();
            this.checkTask = null;
        }
        Ext2.form.RadioGroup.superclass.onDestroy.call(this);
    }
});

Ext2.reg('radiogroup', Ext2.form.RadioGroup);
