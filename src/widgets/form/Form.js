/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.form.FormPanel
 * @extends Ext2.Panel
 * Standard form container.
 * <p><b>Although they are not listed, this class also accepts all the config options required to configure its internal {@link Ext2.form.BasicForm}</b></p>
 * <p>The BasicForm is configured using the {@link #initialConfig} of the FormPanel - that is the configuration object passed to the constructor.
 * This means that if you subclass FormPanel, and you wish to configure the BasicForm, you will need to insert any configuration options
 * for the BasicForm into the <tt><b>initialConfig</b></tt> property. Applying BasicForm configuration settings to <b><tt>this</tt></b> will
 * not affect the BasicForm's configuration.</p>
 * <p>By default, FormPanel uses an {@link Ext2.layout.FormLayout} layout manager, which styles and renders fields and labels correctly.
 * When nesting additional Containers within a FormPanel, you should ensure that any descendant Containers which
 * host input Fields use the {@link Ext2.layout.FormLayout} layout manager.</p>
 * <p>By default, Ext2 Forms are submitted through Ajax, using {@link Ext2.form.Action}.
 * To enable normal browser submission of the Ext2 Form contained in this FormPanel,
 * use the {@link Ext2.form.BasicForm#standardSubmit standardSubmit) option:</p><pre><code>
var myForm = new Ext2.form.FormPanel({
    standardSubmit: true,
    items: myFieldset
});</code></pre>
 * @constructor
 * @param {Object} config Configuration options
 */
Ext2.FormPanel = Ext2.extend(Ext2.Panel, {
	/**
	 * @cfg {String} formId (optional) The id of the FORM tag (defaults to an auto-generated id).
	 */
    /**
     * @cfg {Number} labelWidth The width of labels. This property cascades to child containers and can be overridden
     * on any child container (e.g., a fieldset can specify a different labelWidth for its fields).
     */
    /**
     * @cfg {String} itemCls A css class to apply to the x2-form-item of fields. This property cascades to child containers.
     */
    /**
     * @cfg {Array} buttons
     * An array of {@link Ext2.Button}s or {@link Ext2.Button} configs used to add buttons to the footer of this FormPanel.<br>
     * <p>Buttons in the footer of a FormPanel may be configured with the option <tt>formBind: true</tt>. This causes
     * the form's {@link #monitorValid valid state monitor task} to enable/disable those Buttons depending on
     * the form's valid/invalid state.</p>
     */
    /**
     * @cfg {String} buttonAlign Valid values are "left," "center" and "right" (defaults to "center")
     */
    buttonAlign:'center',

    /**
     * @cfg {Number} minButtonWidth Minimum width of all buttons in pixels (defaults to 75)
     */
    minButtonWidth:75,

    /**
     * @cfg {String} labelAlign Valid values are "left," "top" and "right" (defaults to "left").
     * This property cascades to child containers and can be overridden on any child container 
     * (e.g., a fieldset can specify a different labelAlign for its fields).
     */
    labelAlign:'left',

    /**
     * @cfg {Boolean} monitorValid If true, the form monitors its valid state <b>client-side</b> and
     * regularly fires the {@link #clientvalidation} event passing that state.<br>
     * <p>When monitoring valid state, the FormPanel enables/disables any of its configured
     * {@link #button}s which have been configured with <tt>formBind: true</tt> depending
     * on whether the form is valid or not.</p>
     */
    monitorValid : false,

    /**
     * @cfg {Number} monitorPoll The milliseconds to poll valid state, ignored if monitorValid is not true (defaults to 200)
     */
    monitorPoll : 200,

    /**
     * @cfg {String} layout @hide
     */
    layout: 'form',

    // private
    initComponent :function(){
        this.form = this.createForm();

        this.bodyCfg = {
            tag: 'form',
            cls: this.baseCls + '-body',
            method : this.method || 'POST',
            id : this.formId || Ext2.id()
        };
        if(this.fileUpload) {
            this.bodyCfg.enctype = 'multipart/form-data';
        }

        Ext2.FormPanel.superclass.initComponent.call(this);

        this.initItems();

        this.addEvents(
            /**
             * @event clientvalidation
             * If the monitorValid config option is true, this event fires repetitively to notify of valid state
             * @param {Ext2.form.FormPanel} this
             * @param {Boolean} valid true if the form has passed client-side validation
             */
            'clientvalidation'
        );

        this.relayEvents(this.form, ['beforeaction', 'actionfailed', 'actioncomplete']);
    },

    // private
    createForm: function(){
        var config = Ext2.applyIf({listeners: {}}, this.initialConfig);
        return new Ext2.form.BasicForm(null, config);
    },

    // private
    initFields : function(){
        var f = this.form;
        var formPanel = this;
        var fn = function(c){
            if(c.isFormField){
                f.add(c);
            }else if(c.doLayout && c != formPanel){
                Ext2.applyIf(c, {
                    labelAlign: c.ownerCt.labelAlign,
                    labelWidth: c.ownerCt.labelWidth,
                    itemCls: c.ownerCt.itemCls
                });
                if(c.items){
                    c.items.each(fn);
                }
            }
        }
        this.items.each(fn);
    },

    // private
    getLayoutTarget : function(){
        return this.form.el;
    },

    /**
     * Provides access to the {@link Ext2.form.BasicForm Form} which this Panel contains.
     * @return {Ext2.form.BasicForm} The {@link Ext2.form.BasicForm Form} which this Panel contains.
     */
    getForm : function(){
        return this.form;
    },

    // private
    onRender : function(ct, position){
        this.initFields();

        Ext2.FormPanel.superclass.onRender.call(this, ct, position);
        this.form.initEl(this.body);
    },
    
    // private
    beforeDestroy: function(){
        this.stopMonitoring();
        Ext2.FormPanel.superclass.beforeDestroy.call(this);
        /*
         * Clear the items here to prevent them being destroyed again.
         * Don't move this behaviour to BasicForm because it can be used
         * on it's own.
         */
        this.form.items.clear();
        Ext2.destroy(this.form);
    },

    // private
    initEvents : function(){
        Ext2.FormPanel.superclass.initEvents.call(this);
        this.items.on('remove', this.onRemove, this);
		this.items.on('add', this.onAdd, this);
        if(this.monitorValid){ // initialize after render
            this.startMonitoring();
        }
    },
    
    // private
	onAdd : function(ct, c) {
		if (c.isFormField) {
			this.form.add(c);
		}
	},
	
	// private
	onRemove : function(c) {
		if (c.isFormField) {
			Ext2.destroy(c.container.up('.x2-form-item'));
			this.form.remove(c);
		}
	},

    /**
     * Starts monitoring of the valid state of this form. Usually this is done by passing the config
     * option "monitorValid"
     */
    startMonitoring : function(){
        if(!this.validTask){
            this.validTask = new Ext2.util.TaskRunner();
            this.validTask.start({
                run : this.bindHandler,
                interval : this.monitorPoll || 200,
                scope: this
            });
        }
    },

    /**
     * Stops monitoring of the valid state of this form
     */
    stopMonitoring : function(){
        if(this.validTask){
            this.validTask.stopAll();
            this.validTask = null;
        }
    },

    /**
     * This is a proxy for the underlying BasicForm's {@link Ext2.form.BasicForm#load} call.
     * @param {Object} options The options to pass to the action (see {@link Ext2.form.BasicForm#doAction} for details)
     */
    load : function(){
        this.form.load.apply(this.form, arguments);  
    },

    // private
    onDisable : function(){
        Ext2.FormPanel.superclass.onDisable.call(this);
        if(this.form){
            this.form.items.each(function(){
                 this.disable();
            });
        }
    },

    // private
    onEnable : function(){
        Ext2.FormPanel.superclass.onEnable.call(this);
        if(this.form){
            this.form.items.each(function(){
                 this.enable();
            });
        }
    },

    // private
    bindHandler : function(){
        var valid = true;
        this.form.items.each(function(f){
            if(!f.isValid(true)){
                valid = false;
                return false;
            }
        });
        if(this.buttons){
            for(var i = 0, len = this.buttons.length; i < len; i++){
                var btn = this.buttons[i];
                if(btn.formBind === true && btn.disabled === valid){
                    btn.setDisabled(!valid);
                }
            }
        }
        this.fireEvent('clientvalidation', this, valid);
    }
});
Ext2.reg('form', Ext2.FormPanel);

Ext2.form.FormPanel = Ext2.FormPanel;

