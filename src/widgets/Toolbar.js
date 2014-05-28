/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.Toolbar
 * @extends Ext2.BoxComponent
 * Basic Toolbar class. Toolbar elements can be created explicitly via their constructors, or implicitly
 * via their xtypes.  Some items also have shortcut strings for creation (see <tt>{@link #add}</tt>).
 * @constructor
 * Creates a new Toolbar
 * @param {Object/Array} config A config object or an array of buttons to <tt>{@link #add}</tt>
 */ 
 Ext2.Toolbar = function(config){
    if(Ext2.isArray(config)){
        config = {buttons:config};
    }
    Ext2.Toolbar.superclass.constructor.call(this, config);
};

(function(){

var T = Ext2.Toolbar;

Ext2.extend(T, Ext2.BoxComponent, {

    trackMenus : true,

    // private
    initComponent : function(){
        T.superclass.initComponent.call(this);

        if(this.items){
            this.buttons = this.items;
        }
        /**
         * A MixedCollection of this Toolbar's items
         * @property items
         * @type Ext2.util.MixedCollection
         */
        this.items = new Ext2.util.MixedCollection(false, function(o){
            return o.itemId || o.id || Ext2.id();
        });
    },

    // private
    autoCreate: {
        cls:'x2-toolbar x2-small-editor',
        html:'<table cellspacing="0"><tr></tr></table>'
    },

    // private
    onRender : function(ct, position){
        this.el = ct.createChild(Ext2.apply({ id: this.id },this.autoCreate), position);
        this.tr = this.el.child("tr", true);
    },

    // private
    afterRender : function(){
        T.superclass.afterRender.call(this);
        if(this.buttons){
            this.add.apply(this, this.buttons);
            delete this.buttons;
        }
    },

    /**
     * Adds element(s) to the toolbar -- this function takes a variable number of
     * arguments of mixed type and adds them to the toolbar.
     * @param {Mixed} arg1 The following types of arguments are all valid:<br />
     * <ul>
     * <li>{@link Ext2.Toolbar.Button} config: A valid button config object (equivalent to {@link #addButton})</li>
     * <li>HtmlElement: Any standard HTML element (equivalent to {@link #addElement})</li>
     * <li>Field: Any form field (equivalent to {@link #addField})</li>
     * <li>Item: Any subclass of {@link Ext2.Toolbar.Item} (equivalent to {@link #addItem})</li>
     * <li>String: Any generic string (gets wrapped in a {@link Ext2.Toolbar.TextItem}, equivalent to {@link #addText}).
     * Note that there are a few special strings that are treated differently as explained next.</li>
     * <li>'separator' or '-': Creates a separator element (equivalent to {@link #addSeparator})</li>
     * <li>' ': Creates a spacer element (equivalent to {@link #addSpacer})</li>
     * <li>'->': Creates a fill element (equivalent to {@link #addFill})</li>
     * </ul>
     * @param {Mixed} arg2
     * @param {Mixed} etc.
     */
    add : function(){
        var a = arguments, l = a.length;
        for(var i = 0; i < l; i++){
            var el = a[i];
            if(el.isFormField){ // some kind of form field
                this.addField(el);
            }else if(el.render){ // some kind of Toolbar.Item
                this.addItem(el);
            }else if(typeof el == "string"){ // string
                if(el == "separator" || el == "-"){
                    this.addSeparator();
                }else if(el == " "){
                    this.addSpacer();
                }else if(el == "->"){
                    this.addFill();
                }else{
                    this.addText(el);
                }
            }else if(el.tagName){ // element
                this.addElement(el);
            }else if(typeof el == "object"){ // must be button config?
                if(el.xtype){
                    this.addField(Ext2.ComponentMgr.create(el, 'button'));
                }else{
                    this.addButton(el);
                }
            }
        }
    },
    
    /**
     * Adds a separator
     * @return {Ext2.Toolbar.Item} The separator item
     */
    addSeparator : function(){
        return this.addItem(new T.Separator());
    },

    /**
     * Adds a spacer element
     * @return {Ext2.Toolbar.Spacer} The spacer item
     */
    addSpacer : function(){
        return this.addItem(new T.Spacer());
    },

    /**
     * Adds a fill element that forces subsequent additions to the right side of the toolbar
     * @return {Ext2.Toolbar.Fill} The fill item
     */
    addFill : function(){
        return this.addItem(new T.Fill());
    },

    /**
     * Adds any standard HTML element to the toolbar
     * @param {Mixed} el The element or id of the element to add
     * @return {Ext2.Toolbar.Item} The element's item
     */
    addElement : function(el){
        return this.addItem(new T.Item(el));
    },
    
    /**
     * Adds any Toolbar.Item or subclass
     * @param {Ext2.Toolbar.Item} item
     * @return {Ext2.Toolbar.Item} The item
     */
    addItem : function(item){
        var td = this.nextBlock();
        this.initMenuTracking(item);
        item.render(td);
        this.items.add(item);
        return item;
    },
    
    /**
     * Adds a button (or buttons). See {@link Ext2.Toolbar.Button} for more info on the config.
     * @param {Object/Array} config A button config or array of configs
     * @return {Ext2.Toolbar.Button/Array}
     */
    addButton : function(config){
        if(Ext2.isArray(config)){
            var buttons = [];
            for(var i = 0, len = config.length; i < len; i++) {
                buttons.push(this.addButton(config[i]));
            }
            return buttons;
        }
        var b = config;
        if(!(config instanceof T.Button)){
            b = config.split ? 
                new T.SplitButton(config) :
                new T.Button(config);
        }
        var td = this.nextBlock();
        this.initMenuTracking(b);
        b.render(td);
        this.items.add(b);
        return b;
    },

    // private
    initMenuTracking : function(item){
        if(this.trackMenus && item.menu){
            item.on({
                'menutriggerover' : this.onButtonTriggerOver,
                'menushow' : this.onButtonMenuShow,
                'menuhide' : this.onButtonMenuHide,
                scope: this
            })
        }
    },

    /**
     * Adds text to the toolbar
     * @param {String} text The text to add
     * @return {Ext2.Toolbar.Item} The element's item
     */
    addText : function(text){
        return this.addItem(new T.TextItem(text));
    },
    
    /**
     * Inserts any {@link Ext2.Toolbar.Item}/{@link Ext2.Toolbar.Button} at the specified index.
     * @param {Number} index The index where the item is to be inserted
     * @param {Object/Ext2.Toolbar.Item/Ext2.Toolbar.Button/Array} item The button, or button config object to be
     * inserted, or an array of buttons/configs.
     * @return {Ext2.Toolbar.Button/Item}
     */
    insertButton : function(index, item){
        if(Ext2.isArray(item)){
            var buttons = [];
            for(var i = 0, len = item.length; i < len; i++) {
               buttons.push(this.insertButton(index + i, item[i]));
            }
            return buttons;
        }
        if (!(item instanceof T.Button)){
           item = new T.Button(item);
        }
        var td = document.createElement("td");
        this.tr.insertBefore(td, this.tr.childNodes[index]);
        this.initMenuTracking(item);
        item.render(td);
        this.items.insert(index, item);
        return item;
    },
    
    /**
     * Adds a new element to the toolbar from the passed {@link Ext2.DomHelper} config
     * @param {Object} config
     * @return {Ext2.Toolbar.Item} The element's item
     */
    addDom : function(config, returnEl){
        var td = this.nextBlock();
        Ext2.DomHelper.overwrite(td, config);
        var ti = new T.Item(td.firstChild);
        ti.render(td);
        this.items.add(ti);
        return ti;
    },

    /**
     * Adds a dynamically rendered Ext2.form field (TextField, ComboBox, etc). Note: the field should not have
     * been rendered yet. For a field that has already been rendered, use {@link #addElement}.
     * @param {Ext2.form.Field} field
     * @return {Ext2.Toolbar.Item}
     */
    addField : function(field){
        var td = this.nextBlock();
        field.render(td);
        var ti = new T.Item(td.firstChild);
        ti.render(td);
        this.items.add(field);
        return ti;
    },

    // private
    nextBlock : function(){
        var td = document.createElement("td");
        this.tr.appendChild(td);
        return td;
    },

    // private
    onDestroy : function(){
        Ext2.Toolbar.superclass.onDestroy.call(this);
        if(this.rendered){
            if(this.items){ // rendered?
                Ext2.destroy.apply(Ext, this.items.items);
            }
            Ext2.Element.uncache(this.tr);
        }
    },

    // private
    onDisable : function(){
        this.items.each(function(item){
             if(item.disable){
                 item.disable();
             }
        });
    },

    // private
    onEnable : function(){
        this.items.each(function(item){
             if(item.enable){
                 item.enable();
             }
        });
    },

    // private
    onButtonTriggerOver : function(btn){
        if(this.activeMenuBtn && this.activeMenuBtn != btn){
            this.activeMenuBtn.hideMenu();
            btn.showMenu();
            this.activeMenuBtn = btn;
        }
    },

    // private
    onButtonMenuShow : function(btn){
        this.activeMenuBtn = btn;
    },

    // private
    onButtonMenuHide : function(btn){
        delete this.activeMenuBtn;
    }

    /**
     * @cfg {String} autoEl @hide
     */
});
Ext2.reg('toolbar', Ext2.Toolbar);

/**
 * @class Ext2.Toolbar.Item
 * The base class that other classes should extend in order to get some basic common toolbar item functionality.
 * @constructor
 * Creates a new Item
 * @param {HTMLElement} el 
 */
T.Item = function(el){
    this.el = Ext2.getDom(el);
    this.id = Ext2.id(this.el);
    this.hidden = false;
};

T.Item.prototype = {
    
    /**
     * Get this item's HTML Element
     * @return {HTMLElement}
     */
    getEl : function(){
       return this.el;  
    },

    // private
    render : function(td){
        this.td = td;
        td.appendChild(this.el);
    },
    
    /**
     * Removes and destroys this item.
     */
    destroy : function(){
        if(this.el){
            var el = Ext2.get(this.el);
            Ext2.destroy(el);
        }
        Ext2.removeNode(this.td);
    },
    
    /**
     * Shows this item.
     */
    show: function(){
        this.hidden = false;
        this.td.style.display = "";
    },
    
    /**
     * Hides this item.
     */
    hide: function(){
        this.hidden = true;
        this.td.style.display = "none";
    },
    
    /**
     * Convenience function for boolean show/hide.
     * @param {Boolean} visible true to show/false to hide
     */
    setVisible: function(visible){
        if(visible) {
            this.show();
        }else{
            this.hide();
        }
    },
    
    /**
     * Try to focus this item
     */
    focus : function(){
        Ext2.fly(this.el).focus();
    },
    
    /**
     * Disables this item.
     */
    disable : function(){
        Ext2.fly(this.td).addClass("x2-item-disabled");
        this.disabled = true;
        this.el.disabled = true;
    },
    
    /**
     * Enables this item.
     */
    enable : function(){
        Ext2.fly(this.td).removeClass("x2-item-disabled");
        this.disabled = false;
        this.el.disabled = false;
    }
};
Ext2.reg('tbitem', T.Item);


/**
 * @class Ext2.Toolbar.Separator
 * @extends Ext2.Toolbar.Item
 * A simple class that adds a vertical separator bar between toolbar items.  Example usage:
 * <pre><code>
new Ext2.Panel({
	tbar : [
		'Item 1',
		{xtype: 'tbseparator'}, // or '-'
		'Item 2'
	]
});
</code></pre>
 * @constructor
 * Creates a new Separator
 */
T.Separator = function(){
    var s = document.createElement("span");
    s.className = "ytb-sep";
    T.Separator.superclass.constructor.call(this, s);
};
Ext2.extend(T.Separator, T.Item, {
    enable:Ext2.emptyFn,
    disable:Ext2.emptyFn,
    focus:Ext2.emptyFn
});
Ext2.reg('tbseparator', T.Separator);

/**
 * @class Ext2.Toolbar.Spacer
 * @extends Ext2.Toolbar.Item
 * A simple element that adds extra horizontal space between items in a toolbar.
 * <pre><code>
new Ext2.Panel({
	tbar : [
		'Item 1',
		{xtype: 'tbspacer'}, // or ' '
		'Item 2'
	]
});
</code></pre>
 * @constructor
 * Creates a new Spacer
 */
T.Spacer = function(){
    var s = document.createElement("div");
    s.className = "ytb-spacer";
    T.Spacer.superclass.constructor.call(this, s);
};
Ext2.extend(T.Spacer, T.Item, {
    enable:Ext2.emptyFn,
    disable:Ext2.emptyFn,
    focus:Ext2.emptyFn
});

Ext2.reg('tbspacer', T.Spacer);

/**
 * @class Ext2.Toolbar.Fill
 * @extends Ext2.Toolbar.Spacer
 * A simple element that adds a greedy (100% width) horizontal space between items in a toolbar.
 * <pre><code>
new Ext2.Panel({
	tbar : [
		'Item 1',
		{xtype: 'tbfill'}, // or '->'
		'Item 2'
	]
});
</code></pre>
 * @constructor
 * Creates a new Spacer
 */
T.Fill = Ext2.extend(T.Spacer, {
    // private
    render : function(td){
        td.style.width = '100%';
        T.Fill.superclass.render.call(this, td);
    }
});
Ext2.reg('tbfill', T.Fill);

/**
 * @class Ext2.Toolbar.TextItem
 * @extends Ext2.Toolbar.Item
 * A simple class that renders text directly into a toolbar.
 * <pre><code>
new Ext2.Panel({
	tbar : [
		{xtype: 'tbtext', text: 'Item 1'} // or simply 'Item 1'
	]
});
</code></pre>
 * @constructor
 * Creates a new TextItem
 * @param {String/Object} text A text string, or a config object containing a <tt>text</tt> property
 */
T.TextItem = function(t){
    var s = document.createElement("span");
    s.className = "ytb-text";
    s.innerHTML = t.text ? t.text : t;
    T.TextItem.superclass.constructor.call(this, s);
};
Ext2.extend(T.TextItem, T.Item, {
    enable:Ext2.emptyFn,
    disable:Ext2.emptyFn,
    focus:Ext2.emptyFn
});
Ext2.reg('tbtext', T.TextItem);


/**
 * @class Ext2.Toolbar.Button
 * @extends Ext2.Button
 * A button that renders into a toolbar. Use the <tt>handler</tt> config to specify a callback function
 * to handle the button's click event.
 * <pre><code>
new Ext2.Panel({
	tbar : [
		{text: 'OK', handler: okHandler} // tbbutton is the default xtype if not specified
	]
});
</code></pre>
 * @constructor
 * Creates a new Button
 * @param {Object} config A standard {@link Ext2.Button} config object
 */
T.Button = Ext2.extend(Ext2.Button, {
    hideParent : true,

    onDestroy : function(){
        T.Button.superclass.onDestroy.call(this);
        if(this.container){
            this.container.remove();
        }
    }
});
Ext2.reg('tbbutton', T.Button);

/**
 * @class Ext2.Toolbar.SplitButton
 * @extends Ext2.SplitButton
 * A split button that renders into a toolbar.
 * <pre><code>
new Ext2.Panel({
	tbar : [
		{
			xtype: 'tbsplit',
		   	text: 'Options',
		   	handler: optionsHandler, // handle a click on the button itself
		   	menu: new Ext2.menu.Menu({
		        items: [
		        	// These items will display in a dropdown menu when the split arrow is clicked
			        {text: 'Item 1', handler: item1Handler},
			        {text: 'Item 2', handler: item2Handler}
		        ]
		   	})
		}
	]
});
</code></pre>
 * @constructor
 * Creates a new SplitButton
 * @param {Object} config A standard {@link Ext2.SplitButton} config object
 */
T.SplitButton = Ext2.extend(Ext2.SplitButton, {
    hideParent : true,

    onDestroy : function(){
        T.SplitButton.superclass.onDestroy.call(this);
        if(this.container){
            this.container.remove();
        }
    }
});

Ext2.reg('tbsplit', T.SplitButton);
// backwards compat
T.MenuButton = T.SplitButton;

})();
