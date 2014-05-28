/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.form.CheckboxGroup
 * @extends Ext2.form.Field
 * A grouping container for {@link Ext2.form.Checkbox} controls.
 * @constructor
 * Creates a new CheckboxGroup
 * @param {Object} config Configuration options
 */
Ext2.form.CheckboxGroup = Ext2.extend(Ext2.form.Field, {
    /**
     * @cfg {Array} items An Array of {@link Ext2.form.Checkbox Checkbox}es or Checkbox config objects
     * to arrange in the group.
     */
    /**
     * @cfg {String/Number/Array} columns Specifies the number of columns to use when displaying grouped
     * checkbox/radio controls using automatic layout.  This config can take several types of values:
     * <ul><li><b>'auto'</b> : <p class="sub-desc">The controls will be rendered one per column on one row and the width
     * of each column will be evenly distributed based on the width of the overall field container. This is the default.</p></li>
     * <li><b>Number</b> : <p class="sub-desc">If you specific a number (e.g., 3) that number of columns will be 
     * created and the contained controls will be automatically distributed based on the value of {@link #vertical}.</p></li>
     * <li><b>Array</b> : Object<p class="sub-desc">You can also specify an array of column widths, mixing integer
     * (fixed width) and float (percentage width) values as needed (e.g., [100, .25, .75]). Any integer values will
     * be rendered first, then any float values will be calculated as a percentage of the remaining space. Float
     * values do not have to add up to 1 (100%) although if you want the controls to take up the entire field
     * container you should do so.</p></li></ul>
     */
    columns : 'auto',
    /**
     * @cfg {Boolean} vertical True to distribute contained controls across columns, completely filling each column 
     * top to bottom before starting on the next column.  The number of controls in each column will be automatically
     * calculated to keep columns as even as possible.  The default value is false, so that controls will be added
     * to columns one at a time, completely filling each row left to right before starting on the next row.
     */
    vertical : false,
    /**
     * @cfg {Boolean} allowBlank False to validate that at least one item in the group is checked (defaults to true).
     * If no items are selected at validation time, {@link @blankText} will be used as the error text.
     */
    allowBlank : true,
    /**
     * @cfg {String} blankText Error text to display if the {@link #allowBlank} validation fails (defaults to "You must 
     * select at least one item in this group")
     */
    blankText : "You must select at least one item in this group",
    
    // private
    defaultType : 'checkbox',
    
    // private
    groupCls: 'x2-form-check-group',
    
    // private
    initComponent: function(){
        this.addEvents(
            /**
             * @event change
             * Fires when the state of a child checkbox changes.
             * @param {Ext2.form.CheckboxGroup} this
             * @param {Array} checked An array containing the checked boxes.
             */
            'change'
        );   
        Ext2.form.CheckboxGroup.superclass.initComponent.call(this);
    },
    
    // private
    onRender : function(ct, position){
        if(!this.el){
            var panelCfg = {
                cls: this.groupCls,
                layout: 'column',
                border: false,
                renderTo: ct
            };
            var colCfg = {
                defaultType: this.defaultType,
                layout: 'form',
                border: false,
                defaults: {
                    hideLabel: true,
                    anchor: '100%'
                }
            }
            
            if(this.items[0].items){
                
                // The container has standard ColumnLayout configs, so pass them in directly
                
                Ext2.apply(panelCfg, {
                    layoutConfig: {columns: this.items.length},
                    defaults: this.defaults,
                    items: this.items
                })
                for(var i=0, len=this.items.length; i<len; i++){
                    Ext2.applyIf(this.items[i], colCfg);
                };
                
            }else{
                
                // The container has field item configs, so we have to generate the column
                // panels first then move the items into the columns as needed.
                
                var numCols, cols = [];
                
                if(typeof this.columns == 'string'){ // 'auto' so create a col per item
                    this.columns = this.items.length;
                }
                if(!Ext2.isArray(this.columns)){
                    var cs = [];
                    for(var i=0; i<this.columns; i++){
                        cs.push((100/this.columns)*.01); // distribute by even %
                    }
                    this.columns = cs;
                }
                
                numCols = this.columns.length;
                
                // Generate the column configs with the correct width setting
                for(var i=0; i<numCols; i++){
                    var cc = Ext2.apply({items:[]}, colCfg);
                    cc[this.columns[i] <= 1 ? 'columnWidth' : 'width'] = this.columns[i];
                    if(this.defaults){
                        cc.defaults = Ext2.apply(cc.defaults || {}, this.defaults)
                    }
                    cols.push(cc);
                };
                
                // Distribute the original items into the columns
                if(this.vertical){
                    var rows = Math.ceil(this.items.length / numCols), ri = 0;
                    for(var i=0, len=this.items.length; i<len; i++){
                        if(i>0 && i%rows==0){
                            ri++;
                        }
                        if(this.items[i].fieldLabel){
                            this.items[i].hideLabel = false;
                        }
                        cols[ri].items.push(this.items[i]);
                    };
                }else{
                    for(var i=0, len=this.items.length; i<len; i++){
                        var ci = i % numCols;
                        if(this.items[i].fieldLabel){
                            this.items[i].hideLabel = false;
                        }
                        cols[ci].items.push(this.items[i]);
                    };
                }
                
                Ext2.apply(panelCfg, {
                    layoutConfig: {columns: numCols},
                    items: cols
                });
            }
            
            this.panel = new Ext2.Panel(panelCfg);
            this.panel.ownerCt = this;
            this.el = this.panel.getEl();
            
            if(this.forId && this.itemCls){
                var l = this.el.up(this.itemCls).child('label', true);
                if(l){
                    l.setAttribute('htmlFor', this.forId);
                }
            }
            
            var fields = this.panel.findBy(function(c){
                return c.isFormField;
            }, this);
            
            this.items = new Ext2.util.MixedCollection();
            this.items.addAll(fields);
        }
        Ext2.form.CheckboxGroup.superclass.onRender.call(this, ct, position);
    },
    
    afterRender : function(){
        Ext2.form.CheckboxGroup.superclass.afterRender.call(this);
        this.items.each(function(item){
            item.on('check', this.fireChecked, this);
        }, this);
    },
    
    // private
    fireChecked: function(){
        var arr = [];
        this.items.each(function(item){
            if(item.checked){
                arr.push(item);
            }
        });
        this.fireEvent('change', this, arr);
    },
    
    // private
    validateValue : function(value){
        if(!this.allowBlank){
            var blank = true;
            this.items.each(function(f){
                if(f.checked){
                    return blank = false;
                }
            }, this);
            if(blank){
                this.markInvalid(this.blankText);
                return false;
            }
        }
        return true;
    },
    
    // private
    onDestroy: function() {
        Ext2.destroy(this.panel);
        Ext2.form.CheckboxGroup.superclass.onDestroy.call(this);
    },
    
    // private
    onDisable : function(){
        this.items.each(function(item){
            item.disable();
        })
    },

    // private
    onEnable : function(){
        this.items.each(function(item){
            item.enable();
        })
    },
    
    isDirty: function(){
        //override the behaviour to check sub items.
        if (this.disabled || !this.rendered) {
            return false;
        }

        var dirty = false;
        this.items.each(function(item){
            if(item.isDirty()){
                dirty = true;
                return false;
            }
        });
        return dirty;
    },
    
    // private
    onResize : function(w, h){
        this.panel.setSize(w, h);
        this.panel.doLayout();
    },
    
    // inherit docs from Field
    reset : function(){
        Ext2.form.CheckboxGroup.superclass.reset.call(this);
        this.items.each(function(c){
            if(c.reset){
                c.reset();
            }
        }, this);
    },
    
    /**
     * @cfg {String} name
     * @hide
     */
    /**
     * @method initValue
     * @hide
     */
    initValue : Ext2.emptyFn,
    /**
     * @method getValue
     * @hide
     */
    getValue : Ext2.emptyFn,
    /**
     * @method getRawValue
     * @hide
     */
    getRawValue : Ext2.emptyFn,
    /**
     * @method setValue
     * @hide
     */
    setValue : Ext2.emptyFn,
    /**
     * @method setRawValue
     * @hide
     */
    setRawValue : Ext2.emptyFn
    
});

Ext2.reg('checkboxgroup', Ext2.form.CheckboxGroup);
