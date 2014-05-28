/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.form.TriggerField
 * @extends Ext2.form.TextField
 * Provides a convenient wrapper for TextFields that adds a clickable trigger button (looks like a combobox by default).
 * The trigger has no default action, so you must assign a function to implement the trigger click handler by
 * overriding {@link #onTriggerClick}. You can create a TriggerField directly, as it renders exactly like a combobox
 * for which you can provide a custom implementation.  For example:
 * <pre><code>
var trigger = new Ext2.form.TriggerField();
trigger.onTriggerClick = myTriggerFn;
trigger.applyToMarkup('my-field');
</code></pre>
 *
 * However, in general you will most likely want to use TriggerField as the base class for a reusable component.
 * {@link Ext2.form.DateField} and {@link Ext2.form.ComboBox} are perfect examples of this.
 * @cfg {String} triggerClass An additional CSS class used to style the trigger button.  The trigger will always get the
 * class 'x2-form-trigger' by default and triggerClass will be <b>appended</b> if specified.
 * @constructor
 * Create a new TriggerField.
 * @param {Object} config Configuration options (valid {@Ext2.form.TextField} config options will also be applied
 * to the base TextField)
 */
Ext2.form.TriggerField = Ext2.extend(Ext2.form.TextField,  {
    /**
     * @cfg {Mixed} triggerConfig<p>A {@link Ext2.DomHelper DomHelper} config object specifying the structure of the
     * trigger element for this Field. (Optional).</p>
     * <p>Specify this when you need a customized element to act as the trigger button for a TriggerField.</p>
     * <p>Note that when using this option, it is the developer's responsibility to ensure correct sizing, positioning
     * and appearance of the trigger.</p>
     */
    /**
     * @cfg {String} triggerClass A CSS class to apply to the trigger
     */
    /**
     * @cfg {String/Object} autoCreate A DomHelper element spec, or true for a default element spec (defaults to
     * {tag: "input", type: "text", size: "16", autocomplete: "off"})
     */
    defaultAutoCreate : {tag: "input", type: "text", size: "16", autocomplete: "off"},
    /**
     * @cfg {Boolean} hideTrigger True to hide the trigger element and display only the base text field (defaults to false)
     */
    hideTrigger:false,

    /**
     * @hide 
     * @method autoSize
     */
    autoSize: Ext2.emptyFn,
    // private
    monitorTab : true,
    // private
    deferHeight : true,
    // private
    mimicing : false,
    
    actionMode: 'wrap',

    // private
    onResize : function(w, h){
        Ext2.form.TriggerField.superclass.onResize.call(this, w, h);
        if(typeof w == 'number'){
            this.el.setWidth(this.adjustWidth('input', w - this.trigger.getWidth()));
        }
        this.wrap.setWidth(this.el.getWidth()+this.trigger.getWidth());
    },

    // private
    adjustSize : Ext2.BoxComponent.prototype.adjustSize,

    // private
    getResizeEl : function(){
        return this.wrap;
    },

    // private
    getPositionEl : function(){
        return this.wrap;
    },

    // private
    alignErrorIcon : function(){
        if(this.wrap){
            this.errorIcon.alignTo(this.wrap, 'tl-tr', [2, 0]);
        }
    },

    // private
    onRender : function(ct, position){
        Ext2.form.TriggerField.superclass.onRender.call(this, ct, position);
        this.wrap = this.el.wrap({cls: "x2-form-field-wrap"});
        this.trigger = this.wrap.createChild(this.triggerConfig ||
                {tag: "img", src: Ext2.BLANK_IMAGE_URL, cls: "x2-form-trigger " + this.triggerClass});
        if(this.hideTrigger){
            this.trigger.setDisplayed(false);
        }
        this.initTrigger();
        if(!this.width){
            this.wrap.setWidth(this.el.getWidth()+this.trigger.getWidth());
        }
    },

    afterRender : function(){
        Ext2.form.TriggerField.superclass.afterRender.call(this);
        var y;
        if(Ext2.isIE && !this.hideTrigger && this.el.getY() != (y = this.trigger.getY())){
            this.el.position();
            this.el.setY(y);
        }
    },

    // private
    initTrigger : function(){
        this.trigger.on("click", this.onTriggerClick, this, {preventDefault:true});
        this.trigger.addClassOnOver('x2-form-trigger-over');
        this.trigger.addClassOnClick('x2-form-trigger-click');
    },

    // private
    onDestroy : function(){
        if(this.trigger){
            this.trigger.removeAllListeners();
            this.trigger.remove();
        }
        if(this.wrap){
            this.wrap.remove();
        }
        if (this.mimicing){
            Ext2.get(Ext2.isIE ? document.body : document).un("mousedown", this.mimicBlur, this);
        }
        Ext2.form.TriggerField.superclass.onDestroy.call(this);
    },

    // private
    onFocus : function(){
        Ext2.form.TriggerField.superclass.onFocus.call(this);
        if(!this.mimicing){
            this.wrap.addClass('x2-trigger-wrap-focus');
            this.mimicing = true;
            Ext2.get(Ext2.isIE ? document.body : document).on("mousedown", this.mimicBlur, this, {delay: 10});
            if(this.monitorTab){
                this.el.on("keydown", this.checkTab, this);
            }
        }
    },

    // private
    checkTab : function(e){
        if(e.getKey() == e.TAB){
            this.triggerBlur();
        }
    },

    // private
    onBlur : function(){
        // do nothing
    },

    // private
    mimicBlur : function(e){
        if(!this.wrap.contains(e.target) && this.validateBlur(e)){
            this.triggerBlur();
        }
    },

    // private
    triggerBlur : function(){
        this.mimicing = false;
        Ext2.get(Ext2.isIE ? document.body : document).un("mousedown", this.mimicBlur, this);
        if(this.monitorTab && this.el){
            this.el.un("keydown", this.checkTab, this);
        }
        Ext2.form.TriggerField.superclass.onBlur.call(this);
        if(this.wrap){
            this.wrap.removeClass('x2-trigger-wrap-focus');
        }
    },

    beforeBlur : Ext2.emptyFn, 

    // private
    // This should be overriden by any subclass that needs to check whether or not the field can be blurred.
    validateBlur : function(e){
        return true;
    },

    /**
     * The function that should handle the trigger's click event.  This method does nothing by default until overridden
     * by an implementing function.
     * @method
     * @param {EventObject} e
     */
    onTriggerClick : Ext2.emptyFn

    /**
     * @cfg {Boolean} grow @hide
     */
    /**
     * @cfg {Number} growMin @hide
     */
    /**
     * @cfg {Number} growMax @hide
     */
});

// TwinTriggerField is not a public class to be used directly.  It is meant as an abstract base class
// to be extended by an implementing class.  For an example of implementing this class, see the custom
// SearchField implementation here: http://extjs.com/deploy/ext/examples/form/custom.html
Ext2.form.TwinTriggerField = Ext2.extend(Ext2.form.TriggerField, {
    /**
     * @cfg {Mixed} triggerConfig<p>A {@link Ext2.DomHelper DomHelper} config object specifying the structure of the
     * trigger elements for this Field. (Optional).</p>
     * <p>Specify this when you need a customized element to contain the two trigger elements for this Field. Each
     * trigger element must be marked by the CSS class <tt>x2-form-trigger</tt>.</p>
     * <p>Note that when using this option, it is the developer's responsibility to ensure correct sizing, positioning
     * and appearance of the triggers.</p>
     */
    initComponent : function(){
        Ext2.form.TwinTriggerField.superclass.initComponent.call(this);

        this.triggerConfig = {
            tag:'span', cls:'x2-form-twin-triggers', cn:[
            {tag: "img", src: Ext2.BLANK_IMAGE_URL, cls: "x2-form-trigger " + this.trigger1Class},
            {tag: "img", src: Ext2.BLANK_IMAGE_URL, cls: "x2-form-trigger " + this.trigger2Class}
        ]};
    },

    getTrigger : function(index){
        return this.triggers[index];
    },

    initTrigger : function(){
        var ts = this.trigger.select('.x2-form-trigger', true);
        this.wrap.setStyle('overflow', 'hidden');
        var triggerField = this;
        ts.each(function(t, all, index){
            t.hide = function(){
                var w = triggerField.wrap.getWidth();
                this.dom.style.display = 'none';
                triggerField.el.setWidth(w-triggerField.trigger.getWidth());
            };
            t.show = function(){
                var w = triggerField.wrap.getWidth();
                this.dom.style.display = '';
                triggerField.el.setWidth(w-triggerField.trigger.getWidth());
            };
            var triggerIndex = 'Trigger'+(index+1);

            if(this['hide'+triggerIndex]){
                t.dom.style.display = 'none';
            }
            t.on("click", this['on'+triggerIndex+'Click'], this, {preventDefault:true});
            t.addClassOnOver('x2-form-trigger-over');
            t.addClassOnClick('x2-form-trigger-click');
        }, this);
        this.triggers = ts.elements;
    },
    
    // private
    onDestroy : function() {
        Ext2.destroy.apply(this, this.triggers);
        Ext2.form.TwinTriggerField.superclass.onDestroy.call(this);
    },


    onTrigger1Click : Ext2.emptyFn,
    onTrigger2Click : Ext2.emptyFn
});
Ext2.reg('trigger', Ext2.form.TriggerField);
