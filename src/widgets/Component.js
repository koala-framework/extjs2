/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.Component
 * @extends Ext2.util.Observable
 * <p>Base class for all Ext2 components.  All subclasses of Component may participate in the automated
 * Ext2 component lifecycle of creation, rendering and destruction which is provided by the {@link Ext2.Container Container} class.
 * Components may be added to a Container through the {@link Ext2.Container#items items} config option at the time the Container is created,
 * or they may be added dynamically via the {@link Ext2.Container#add add} method.</p>
 * <p>The Component base class has built-in support for basic hide/show and enable/disable behavior.</p>
 * <p>All Components are registered with the {@link Ext2.ComponentMgr} on construction so that they can be referenced at any time via
 * {@link Ext#getCmp}, passing the {@link #id}.</p>
 * <p>All user-developed visual widgets that are required to participate in automated lifecycle and size management should subclass Component (or
 * {@link Ext2.BoxComponent} if managed box model handling is required, ie height and width management).</p>
 * <p>See the <a href="http://extjs.com/learn/Tutorial:Creating_new_UI_controls">Creating new UI controls</a> tutorial for details on how
 * and to either extend or augment ExtJs base classes to create custom Components.</p>
 * <p>Every component has a specific xtype, which is its Ext-specific type name, along with methods for checking the
 * xtype like {@link #getXType} and {@link #isXType}. This is the list of all valid xtypes:</p>
 * <pre>
xtype            Class
-------------    ------------------
box              Ext2.BoxComponent
button           Ext2.Button
colorpalette     Ext2.ColorPalette
component        Ext2.Component
container        Ext2.Container
cycle            Ext2.CycleButton
dataview         Ext2.DataView
datepicker       Ext2.DatePicker
editor           Ext2.Editor
editorgrid       Ext2.grid.EditorGridPanel
grid             Ext2.grid.GridPanel
paging           Ext2.PagingToolbar
panel            Ext2.Panel
progress         Ext2.ProgressBar
propertygrid     Ext2.grid.PropertyGrid
slider           Ext2.Slider
splitbutton      Ext2.SplitButton
statusbar        Ext2.StatusBar
tabpanel         Ext2.TabPanel
treepanel        Ext2.tree.TreePanel
viewport         Ext2.Viewport
window           Ext2.Window

Toolbar components
---------------------------------------
toolbar          Ext2.Toolbar
tbbutton         Ext2.Toolbar.Button
tbfill           Ext2.Toolbar.Fill
tbitem           Ext2.Toolbar.Item
tbseparator      Ext2.Toolbar.Separator
tbspacer         Ext2.Toolbar.Spacer
tbsplit          Ext2.Toolbar.SplitButton
tbtext           Ext2.Toolbar.TextItem

Form components
---------------------------------------
form             Ext2.FormPanel
checkbox         Ext2.form.Checkbox
combo            Ext2.form.ComboBox
datefield        Ext2.form.DateField
field            Ext2.form.Field
fieldset         Ext2.form.FieldSet
hidden           Ext2.form.Hidden
htmleditor       Ext2.form.HtmlEditor
label            Ext2.form.Label
numberfield      Ext2.form.NumberField
radio            Ext2.form.Radio
textarea         Ext2.form.TextArea
textfield        Ext2.form.TextField
timefield        Ext2.form.TimeField
trigger          Ext2.form.TriggerField
</pre>
 * @constructor
 * @param {Ext2.Element/String/Object} config The configuration options.  If an element is passed, it is set as the internal
 * element and its id used as the component id.  If a string is passed, it is assumed to be the id of an existing element
 * and is used as the component id.  Otherwise, it is assumed to be a standard config object and is applied to the component.
 */
Ext2.Component = function(config){
    config = config || {};
    if(config.initialConfig){
        if(config.isAction){           // actions
            this.baseAction = config;
        }
        config = config.initialConfig; // component cloning / action set up
    }else if(config.tagName || config.dom || typeof config == "string"){ // element object
        config = {applyTo: config, id: config.id || config};
    }

    /**
     * This Component's initial configuration specification. Read-only.
     * @type Object
     * @property initialConfig
     */
    this.initialConfig = config;

    Ext2.apply(this, config);
    this.addEvents(
        /**
         * @event disable
         * Fires after the component is disabled.
	     * @param {Ext2.Component} this
	     */
        'disable',
        /**
         * @event enable
         * Fires after the component is enabled.
	     * @param {Ext2.Component} this
	     */
        'enable',
        /**
         * @event beforeshow
         * Fires before the component is shown. Return false to stop the show.
	     * @param {Ext2.Component} this
	     */
        'beforeshow',
        /**
         * @event show
         * Fires after the component is shown.
	     * @param {Ext2.Component} this
	     */
        'show',
        /**
         * @event beforehide
         * Fires before the component is hidden. Return false to stop the hide.
	     * @param {Ext2.Component} this
	     */
        'beforehide',
        /**
         * @event hide
         * Fires after the component is hidden.
	     * @param {Ext2.Component} this
	     */
        'hide',
        /**
         * @event beforerender
         * Fires before the component is rendered. Return false to stop the render.
	     * @param {Ext2.Component} this
	     */
        'beforerender',
        /**
         * @event render
         * Fires after the component is rendered.
	     * @param {Ext2.Component} this
	     */
        'render',
        /**
         * @event beforedestroy
         * Fires before the component is destroyed. Return false to stop the destroy.
	     * @param {Ext2.Component} this
	     */
        'beforedestroy',
        /**
         * @event destroy
         * Fires after the component is destroyed.
	     * @param {Ext2.Component} this
	     */
        'destroy',
        /**
         * @event beforestaterestore
         * Fires before the state of the component is restored. Return false to stop the restore.
	     * @param {Ext2.Component} this
	     * @param {Object} state The hash of state values
	     */
        'beforestaterestore',
        /**
         * @event staterestore
         * Fires after the state of the component is restored.
	     * @param {Ext2.Component} this
	     * @param {Object} state The hash of state values
	     */
        'staterestore',
        /**
         * @event beforestatesave
         * Fires before the state of the component is saved to the configured state provider. Return false to stop the save.
	     * @param {Ext2.Component} this
	     * @param {Object} state The hash of state values
	     */
        'beforestatesave',
        /**
         * @event statesave
         * Fires after the state of the component is saved to the configured state provider.
	     * @param {Ext2.Component} this
	     * @param {Object} state The hash of state values
	     */
        'statesave'
    );
    this.getId();
    Ext2.ComponentMgr.register(this);
    Ext2.Component.superclass.constructor.call(this);

    if(this.baseAction){
        this.baseAction.addComponent(this);
    }

    this.initComponent();

    if(this.plugins){
        if(Ext2.isArray(this.plugins)){
            for(var i = 0, len = this.plugins.length; i < len; i++){
                this.plugins[i] = this.initPlugin(this.plugins[i]);
            }
        }else{
            this.plugins = this.initPlugin(this.plugins);
        }
    }

    if(this.stateful !== false){
        this.initState(config);
    }

    if(this.applyTo){
        this.applyToMarkup(this.applyTo);
        delete this.applyTo;
    }else if(this.renderTo){
        this.render(this.renderTo);
        delete this.renderTo;
    }
};

// private
Ext2.Component.AUTO_ID = 1000;

Ext2.extend(Ext2.Component, Ext2.util.Observable, {
    // Configs below are used for all Components when rendered by FormLayout.
    /**
     * @cfg {String} fieldLabel The label text to display next to this Component (defaults to '')
     * <p><b>This config is only used when this Component is rendered by a Container which has been
     * configured to use the {@link Ext2.form.FormLayout FormLayout} layout manager.</b></p>
     * Example use:<pre><code>
new Ext2.FormPanel({
    height: 100,
    renderTo: Ext2.getBody(),
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name'
    }]
});
</code></pre>
     */
    /**
     * @cfg {String} labelStyle A CSS style specification to apply directly to this field's label (defaults to the
     * container's labelStyle value if set, or '').<code></code>.
     * <p><b>This config is only used when this Component is rendered by a Container which has been
     * configured to use the {@link Ext2.form.FormLayout FormLayout} layout manager.</b></p>
     * Example use:<pre><code>
new Ext2.FormPanel({
    height: 100,
    renderTo: Ext2.getBody(),
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        labelStyle: 'font-weight:bold;'
    }]
});
</code></pre>
     */
    /**
     * @cfg {String} labelSeparator The standard separator to display after the text of each form label (defaults
     * to the value of {@link Ext2.layout.FormLayout#labelSeparator}, which is a colon ':' by default).  To display
     * no separator for this field's label specify empty string ''.
     * <p><b>This config is only used when this Component is rendered by a Container which has been
     * configured to use the {@link Ext2.form.FormLayout FormLayout} layout manager.</b></p>
     * Example use:<pre><code>
new Ext2.FormPanel({
    height: 100,
    renderTo: Ext2.getBody(),
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        labelSeparator: '...'
    }]
});
</code></pre>
     */
    /**
     * @cfg {Boolean} hideLabel True to completely hide the label element (defaults to false).  By default, even if
     * you do not specify a {@link fieldLabel} the space will still be reserved so that the field will line up with
     * other fields that do have labels. Setting this to true will cause the field to not reserve that space.
     * <p><b>This config is only used when this Component is rendered by a Container which has been
     * configured to use the {@link Ext2.form.FormLayout FormLayout} layout manager.</b></p>
     * Example use:<pre><code>
new Ext2.FormPanel({
    height: 100,
    renderTo: Ext2.getBody(),
    items: [{
        xtype: 'textfield'
        hideLabel: true
    }]
});
</code></pre>
     */
    /**
     * @cfg {String} clearCls The CSS class used to provide field clearing (defaults to 'x2-form-clear-left').
     * <p><b>This config is only used when this Component is rendered by a Container which has been
     * configured to use the {@link Ext2.form.FormLayout FormLayout} layout manager.</b></p>
     */
    /**
     * @cfg {String} itemCls An additional CSS class to apply to the wrapper's form item element of this field (defaults
     * to the container's itemCls value if set, or '').  Since it is applied to the item wrapper, it allows you to write
     * standard CSS rules that can apply to the field, the label (if specified) or any other element within the markup for
     * the field.
     * <p><b>This config is only used when this Component is rendered by a Container which has been
     * configured to use the {@link Ext2.form.FormLayout FormLayout} layout manager.</b></p>
     * Example use:<pre><code>
// Apply a style to the field's label:
&lt;style>
    .required .x2-form-item-label {font-weight:bold;color:red;}
&lt;/style>

new Ext2.FormPanel({
    height: 100,
    renderTo: Ext2.getBody(),
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        itemCls: 'required' //this label will be styled
    },{
        xtype: 'textfield',
        fieldLabel: 'Favorite Color'
    }]
});
</code></pre>
     */

    /**
     * @cfg {String} id
     * The unique id of this component (defaults to an auto-assigned id). You should assign an id if you need to
     * be able to access the component later and you do not have an object reference available (e.g., using
     * {@link Ext2.ComponentMgr#getCmp}). Note that this id will also be used as the element id for the containing
     * HTML element that is rendered to the page for this component. This allows you to write id-based CSS rules to
     * style the specific instance of this component uniquely, and also to select sub-elements using this
     * component's id as the parent.
     */
    /**
     * @cfg {Mixed} autoEl
     * <p>A tag name or {@link Ext2.DomHelper DomHelper} spec used to create the {@link #getEl Element} which will
     * encapsulate this Component.</p>
     * <p>You only need to specify this when creating or subclassing the base classes {@link Ext2.Component}, {@link Ext2.BoxComponent},
     * and {@link Ext2.Container}. The more complex Ext2 classes use a more complex DOM structure created by their own
     * onRender methods.</p>
     * <p>This is intended to allow the developer to create application-specific utility Components encapsulated by
     * different DOM elements. Example usage:</p><pre><code>
{
    xtype: 'box',
    autoEl: {
        tag: 'img',
        src: 'http://www.example.com/example.jpg'
    }
}, {
    xtype: 'box',
    autoEl: {
        tag: 'blockquote',
        html: 'autoEl is cool!'
    }
}, {
    xtype: 'container',
    autoEl: 'ul',
    cls: 'ux-unordered-list',
    items: {
        xtype: 'box',
        autoEl: 'li',
        html: 'First list item'
    }
}
</code></pre>
     */
    /**
     * @cfg {String} xtype
     * The registered xtype to create. This config option is not used when passing
     * a config object into a constructor. This config option is used only when
     * lazy instantiation is being used, and a child item of a Container is being
     * specified not as a fully instantiated Component, but as a <i>Component config
     * object</i>. The xtype will be looked up at render time up to determine what
     * type of child Component to create.<br><br>
     * The predefined xtypes are listed {@link Ext2.Component here}.
     * <br><br>
     * If you subclass Components to create your own Components, you may register
     * them using {@link Ext2.ComponentMgr#registerType} in order to be able to
     * take advantage of lazy instantiation and rendering.
     */
    /**
     * @cfg {String} cls
     * An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be
     * useful for adding customized styles to the component or any of its children using standard CSS rules.
     */
    /**
     * @cfg {String} overCls
     * An optional extra CSS class that will be added to this component's Element when the mouse moves
     * over the Element, and removed when the mouse moves out. (defaults to '').  This can be
     * useful for adding customized "active" or "hover" styles to the component or any of its children using standard CSS rules.
     */
    /**
     * @cfg {String} style
     * A custom style specification to be applied to this component's Element.  Should be a valid argument to
     * {@link Ext2.Element#applyStyles}.
     */
    /**
     * @cfg {String} ctCls
     * An optional extra CSS class that will be added to this component's container (defaults to '').  This can be
     * useful for adding customized styles to the container or any of its children using standard CSS rules.
     */
    /**
     * @cfg {Boolean} disabled
     * Render this component disabled (default is false).
     */
    /**
     * @cfg {Boolean} hidden
     * Render this component hidden (default is false).
     */
    /**
     * @cfg {Object/Array} plugins
     * An object or array of objects that will provide custom functionality for this component.  The only
     * requirement for a valid plugin is that it contain an init method that accepts a reference of type Ext2.Component.
     * When a component is created, if any plugins are available, the component will call the init method on each
     * plugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the
     * component as needed to provide its functionality.
     */
    /**
     * @cfg {Mixed} applyTo
     * The id of the element, a DOM element or an existing Element corresponding to a DIV that is already present in
     * the document that specifies some structural markup for this component.  When applyTo is used, constituent parts of
     * the component can also be specified by id or CSS class name within the main element, and the component being created
     * may attempt to create its subcomponents from that markup if applicable. Using this config, a call to render() is
     * not required.  If applyTo is specified, any value passed for {@link #renderTo} will be ignored and the target
     * element's parent node will automatically be used as the component's container.
     */
    /**
     * @cfg {Mixed} renderTo
     * <p>The id of the element, a DOM element or an existing Element that this component will be rendered into.
     * When using this config, a call to render() is not required.<p>
     * <p>If this Component needs to be managed by a {@link Ext2.Container Container}'s
     * {@link Ext2.Component#layout layout manager}, do not use this option. It is the responsiblity
     * of the Container's layout manager to perform rendering. See {@link #render}.</p>
     */

    /**
     * @cfg {Boolean} stateful
     * <p>A flag which causes the Component to attempt to restore the state of internal properties
     * from a saved state on startup. The component must have either a {@link #stateId} or {@link #id}
     * assigned for state to be managed.  Auto-generated ids are not guaranteed to be stable across page
     * loads and cannot be relied upon to save and restore the same state for a component.<p>
     * For state saving to work, the state manager's provider must have been set to an implementation
     * of {@link Ext2.state.Provider} which overrides the {@link Ext2.state.Provider#set set}
     * and {@link Ext2.state.Provider#get get} methods to save and recall name/value pairs.
     * A built-in implementation, {@link Ext2.state.CookieProvider} is available.</p>
     * <p>To set the state provider for the current page:</p>
     * <pre><code>
Ext2.state.Manager.setProvider(new Ext2.state.CookieProvider());
</code></pre>
     * <p>Components attempt to save state when one of the events listed in the {@link #stateEvents}
     * configuration fires.</p>
     * <p>You can perform extra processing on state save and restore by attaching handlers to the
     * {@link #beforestaterestore}, {@link #staterestore}, {@link #beforestatesave} and {@link #statesave} events</p>
     */
    /**
     * @cfg {String} stateId
     * The unique id for this component to use for state management purposes (defaults to the component id if one was
     * set, otherwise null if the component is using a generated id).
     * <p>See {@link #stateful} for an explanation of saving and restoring Component state.</p>
     */
    /* //internal - to be set by subclasses
     * @cfg {Array} stateEvents
     * An array of events that, when fired, should trigger this component to save its state (defaults to none).
     * These can be any types of events supported by this component, including browser or custom events (e.g.,
     * ['click', 'customerchange']).
     * <p>See {@link #stateful} for an explanation of saving and restoring Component state.</p>
     */

    /**
     * @cfg {String} disabledClass
     * CSS class added to the component when it is disabled (defaults to "x2-item-disabled").
     */
    disabledClass : "x2-item-disabled",
	/**
	 * @cfg {Boolean} allowDomMove
	 * Whether the component can move the Dom node when rendering (defaults to true).
	 */
    allowDomMove : true,
	/**
	 * @cfg {Boolean} autoShow
	 * True if the component should check for hidden classes (e.g. 'x2-hidden' or 'x2-hide-display') and remove
	 * them on render (defaults to false).
	 */
    autoShow : false,
    /**
     * @cfg {String} hideMode
     * <p>How this component should be hidden. Supported values are "visibility" (css visibility), "offsets" (negative
     * offset position) and "display" (css display) - defaults to "display".</p>
     * <p>For Containers which may be hidden and shown as part of a {@link Ext2.layout.CardLayout card layout} Container such as a
     * {@link Ext2.TabPanel TabPanel}, it is recommended that hideMode is configured as "offsets". This ensures
     * that hidden Components still have height and width so that layout managers can perform measurements when
     * calculating layouts.</p>
     */
    hideMode: 'display',
    /**
     * @cfg {Boolean} hideParent
     * True to hide and show the component's container when hide/show is called on the component, false to hide
     * and show the component itself (defaults to false).  For example, this can be used as a shortcut for a hide
     * button on a window by setting hide:true on the button when adding it to its parent container.
     */
    hideParent: false,

    /**
     * The component's owner {@link Ext2.Container} (defaults to undefined, and is set automatically when
     * the component is added to a container).  Read-only.
     * @type Ext2.Container
     * @property ownerCt
     */
    /**
     * True if this component is hidden. Read-only.
     * @type Boolean
     * @property
     */
    hidden : false,
    /**
     * True if this component is disabled. Read-only.
     * @type Boolean
     * @property
     */
    disabled : false,
    /**
     * True if this component has been rendered. Read-only.
     * @type Boolean
     * @property
     */
    rendered : false,

    // private
    ctype : "Ext2.Component",

    // private
    actionMode : "el",

    // private
    getActionEl : function(){
        return this[this.actionMode];
    },

    initPlugin : function(p){
        p.init(this);
        return p;
    },

    /* // protected
     * Function to be implemented by Component subclasses to be part of standard component initialization flow (it is empty by default).
     * <pre><code>
// Traditional constructor:
Ext2.Foo = function(config){
	// call superclass constructor:
    Ext2.Foo.superclass.constructor.call(this, config);

    this.addEvents({
		// add events
    });
};
Ext2.extend(Ext2.Foo, Ext2.Bar, {
   // class body
}

// initComponent replaces the constructor:
Ext2.Foo = Ext2.extend(Ext2.Bar, {
    initComponent : function(){
		// call superclass initComponent
        Ext2.Container.superclass.initComponent.call(this);

        this.addEvents({
            // add events
        });
    }
}
</code></pre>
     */
    initComponent : Ext2.emptyFn,

    /**
     * <p>Render this Component into the passed HTML element.</p>
     * <p><b>If you are using a {@link Ext2.Container Container} object to house this Component, then
     * do not use the render method.</b></p>
     * <p>A Container's child Components are rendered by that Container's
     * {@link Ext2.Container#layout layout} manager when the Container is first rendered.</p>
     * <p>Certain layout managers allow dynamic addition of child components. Those that do
     * include {@link Ext2.layout.CardLayout}, {@link Ext2.layout.AnchorLayout},
     * {@link Ext2.layout.FormLayout}, {@link Ext2.layout.TableLayout}.</p>
     * <p>If the Container is already rendered when a new child Component is added, you may need to call
     * the Container's {@link Ext2.Container#doLayout doLayout} to refresh the view which causes any
     * unrendered child Components to be rendered. This is required so that you can add multiple
     * child components if needed while only refreshing the layout once.</p>
     * <p>When creating complex UIs, it is important to remember that sizing and positioning
     * of child items is the responsibility of the Container's {@link Ext2.Container#layout layout} manager.
     * If you expect child items to be sized in response to user interactions, you must
     * configure the Container with a layout manager which creates and manages the type of layout you
     * have in mind.</p>
     * <p><b>Omitting the Container's {@link Ext2.Container#layout layout} config means that a basic
     * layout manager is used which does nothing but render child components sequentially into the
     * Container. No sizing or positioning will be performed in this situation.</b></p>
     * @param {Element/HTMLElement/String} container (optional) The element this Component should be
     * rendered into. If it is being created from existing markup, this should be omitted.
     * @param {String/Number} position (optional) The element ID or DOM node index within the container <b>before</b>
     * which this component will be inserted (defaults to appending to the end of the container)
     */
    render : function(container, position){
        if(!this.rendered && this.fireEvent("beforerender", this) !== false){
            if(!container && this.el){
                this.el = Ext2.get(this.el);
                container = this.el.dom.parentNode;
                this.allowDomMove = false;
            }
            this.container = Ext2.get(container);
            if(this.ctCls){
                this.container.addClass(this.ctCls);
            }
            this.rendered = true;
            if(position !== undefined){
                if(typeof position == 'number'){
                    position = this.container.dom.childNodes[position];
                }else{
                    position = Ext2.getDom(position);
                }
            }
            this.onRender(this.container, position || null);
            if(this.autoShow){
                this.el.removeClass(['x2-hidden','x2-hide-' + this.hideMode]);
            }
            if(this.cls){
                this.el.addClass(this.cls);
                delete this.cls;
            }
            if(this.style){
                this.el.applyStyles(this.style);
                delete this.style;
            }
            if(this.overCls){
                this.el.addClassOnOver(this.overCls);
            }
            this.fireEvent("render", this);
            this.afterRender(this.container);
            if(this.hidden){
                this.hide();
            }
            if(this.disabled){
                this.disable();
            }

            if(this.stateful !== false){
                this.initStateEvents();
            }
        }
        return this;
    },

    // private
    initState : function(config){
        if(Ext2.state.Manager){
            var id = this.getStateId();
            if(id){
                var state = Ext2.state.Manager.get(id);
                if(state){
                    if(this.fireEvent('beforestaterestore', this, state) !== false){
                        this.applyState(state);
                        this.fireEvent('staterestore', this, state);
                    }
                }
            }
        }
    },

    // private
    getStateId : function(){
        return this.stateId || ((this.id.indexOf('ext-comp-') == 0 || this.id.indexOf('ext-gen') == 0) ? null : this.id);
    },

    // private
    initStateEvents : function(){
        if(this.stateEvents){
            for(var i = 0, e; e = this.stateEvents[i]; i++){
                this.on(e, this.saveState, this, {delay:100});
            }
        }
    },

    // private
    applyState : function(state, config){
        if(state){
            Ext2.apply(this, state);
        }
    },

    // private
    getState : function(){
        return null;
    },

    // private
    saveState : function(){
        if(Ext2.state.Manager && this.stateful !== false){
            var id = this.getStateId();
            if(id){
                var state = this.getState();
                if(this.fireEvent('beforestatesave', this, state) !== false){
                    Ext2.state.Manager.set(id, state);
                    this.fireEvent('statesave', this, state);
                }
            }
        }
    },

    /**
     * Apply this component to existing markup that is valid. With this function, no call to render() is required.
     * @param {String/HTMLElement} el
     */
    applyToMarkup : function(el){
        this.allowDomMove = false;
        this.el = Ext2.get(el);
        this.render(this.el.dom.parentNode);
    },

    /**
     * Adds a CSS class to the component's underlying element.
     * @param {string} cls The CSS class name to add
     */
    addClass : function(cls){
        if(this.el){
            this.el.addClass(cls);
        }else{
            this.cls = this.cls ? this.cls + ' ' + cls : cls;
        }
    },

    /**
     * Removes a CSS class from the component's underlying element.
     * @param {string} cls The CSS class name to remove
     */
    removeClass : function(cls){
        if(this.el){
            this.el.removeClass(cls);
        }else if(this.cls){
            this.cls = this.cls.split(' ').remove(cls).join(' ');
        }
    },

    // private
    // default function is not really useful
    onRender : function(ct, position){
        if(this.autoEl){
            if(typeof this.autoEl == 'string'){
                this.el = document.createElement(this.autoEl);
            }else{
                var div = document.createElement('div');
                Ext2.DomHelper.overwrite(div, this.autoEl);
                this.el = div.firstChild;
            }
            if (!this.el.id) {
            	this.el.id = this.getId();
            }
        }
        if(this.el){
            this.el = Ext2.get(this.el);
            if(this.allowDomMove !== false){
                ct.dom.insertBefore(this.el.dom, position);
            }
        }
    },

    // private
    getAutoCreate : function(){
        var cfg = typeof this.autoCreate == "object" ?
                      this.autoCreate : Ext2.apply({}, this.defaultAutoCreate);
        if(this.id && !cfg.id){
            cfg.id = this.id;
        }
        return cfg;
    },

    // private
    afterRender : Ext2.emptyFn,

    /**
     * Destroys this component by purging any event listeners, removing the component's element from the DOM,
     * removing the component from its {@link Ext2.Container} (if applicable) and unregistering it from
     * {@link Ext2.ComponentMgr}.  Destruction is generally handled automatically by the framework and this method
     * should usually not need to be called directly.
     */
    destroy : function(){
        if(this.fireEvent("beforedestroy", this) !== false){
            this.beforeDestroy();
            if(this.rendered){
                this.el.removeAllListeners();
                this.el.remove();
                if(this.actionMode == "container"){
                    this.container.remove();
                }
            }
            this.onDestroy();
            Ext2.ComponentMgr.unregister(this);
            this.fireEvent("destroy", this);
            this.purgeListeners();
        }
    },

	// private
    beforeDestroy : Ext2.emptyFn,

	// private
    onDestroy  : Ext2.emptyFn,

    /**
     * Returns the underlying {@link Ext2.Element}.
     * @return {Ext2.Element} The element
     */
    getEl : function(){
        return this.el;
    },

    /**
     * Returns the id of this component.
     * @return {String}
     */
    getId : function(){
        return this.id || (this.id = "ext-comp-" + (++Ext2.Component.AUTO_ID));
    },

    /**
     * Returns the item id of this component.
     * @return {String}
     */
    getItemId : function(){
        return this.itemId || this.getId();
    },

    /**
     * Try to focus this component.
     * @param {Boolean} selectText (optional) If applicable, true to also select the text in this component
     * @param {Boolean/Number} delay (optional) Delay the focus this number of milliseconds (true for 10 milliseconds)
     * @return {Ext2.Component} this
     */
    focus : function(selectText, delay){
        if(delay){
            this.focus.defer(typeof delay == 'number' ? delay : 10, this, [selectText, false]);
            return;
        }
        if(this.rendered){
            this.el.focus();
            if(selectText === true){
                this.el.dom.select();
            }
        }
        return this;
    },

    // private
    blur : function(){
        if(this.rendered){
            this.el.blur();
        }
        return this;
    },

    /**
     * Disable this component.
     * @return {Ext2.Component} this
     */
    disable : function(){
        if(this.rendered){
            this.onDisable();
        }
        this.disabled = true;
        this.fireEvent("disable", this);
        return this;
    },

	// private
    onDisable : function(){
        this.getActionEl().addClass(this.disabledClass);
        this.el.dom.disabled = true;
    },

    /**
     * Enable this component.
     * @return {Ext2.Component} this
     */
    enable : function(){
        if(this.rendered){
            this.onEnable();
        }
        this.disabled = false;
        this.fireEvent("enable", this);
        return this;
    },

	// private
    onEnable : function(){
        this.getActionEl().removeClass(this.disabledClass);
        this.el.dom.disabled = false;
    },

    /**
     * Convenience function for setting disabled/enabled by boolean.
     * @param {Boolean} disabled
     */
    setDisabled : function(disabled){
        this[disabled ? "disable" : "enable"]();
    },

    /**
     * Show this component.
     * @return {Ext2.Component} this
     */
    show: function(){
        if(this.fireEvent("beforeshow", this) !== false){
            this.hidden = false;
            if(this.autoRender){
                this.render(typeof this.autoRender == 'boolean' ? Ext2.getBody() : this.autoRender);
            }
            if(this.rendered){
                this.onShow();
            }
            this.fireEvent("show", this);
        }
        return this;
    },

    // private
    onShow : function(){
        if(this.hideParent){
            this.container.removeClass('x2-hide-' + this.hideMode);
        }else{
            this.getActionEl().removeClass('x2-hide-' + this.hideMode);
        }

    },

    /**
     * Hide this component.
     * @return {Ext2.Component} this
     */
    hide: function(){
        if(this.fireEvent("beforehide", this) !== false){
            this.hidden = true;
            if(this.rendered){
                this.onHide();
            }
            this.fireEvent("hide", this);
        }
        return this;
    },

    // private
    onHide : function(){
        if(this.hideParent){
            this.container.addClass('x2-hide-' + this.hideMode);
        }else{
            this.getActionEl().addClass('x2-hide-' + this.hideMode);
        }
    },

    /**
     * Convenience function to hide or show this component by boolean.
     * @param {Boolean} visible True to show, false to hide
     * @return {Ext2.Component} this
     */
    setVisible: function(visible){
        if(visible) {
            this.show();
        }else{
            this.hide();
        }
        return this;
    },

    /**
     * Returns true if this component is visible.
     * @return {Boolean} True if this component is visible, false otherwise.
     */
    isVisible : function(){
        return this.rendered && this.getActionEl().isVisible();
    },

    /**
     * Clone the current component using the original config values passed into this instance by default.
     * @param {Object} overrides A new config containing any properties to override in the cloned version.
     * An id property can be passed on this object, otherwise one will be generated to avoid duplicates.
     * @return {Ext2.Component} clone The cloned copy of this component
     */
    cloneConfig : function(overrides){
        overrides = overrides || {};
        var id = overrides.id || Ext2.id();
        var cfg = Ext2.applyIf(overrides, this.initialConfig);
        cfg.id = id; // prevent dup id
        return new this.constructor(cfg);
    },

    /**
     * Gets the xtype for this component as registered with {@link Ext2.ComponentMgr}. For a list of all
     * available xtypes, see the {@link Ext2.Component} header. Example usage:
     * <pre><code>
var t = new Ext2.form.TextField();
alert(t.getXType());  // alerts 'textfield'
</code></pre>
     * @return {String} The xtype
     */
    getXType : function(){
        return this.constructor.xtype;
    },

    /**
     * <p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended
     * from the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>
     * <p><b>If using your own subclasses, be aware that a Component must register its own xtype
     * to participate in determination of inherited xtypes.</b></p>
     * <p>For a list of all available xtypes, see the {@link Ext2.Component} header.</p>
     * <p>Example usage:</p>
     * <pre><code>
var t = new Ext2.form.TextField();
var isText = t.isXType('textfield');        // true
var isBoxSubclass = t.isXType('box');       // true, descended from BoxComponent
var isBoxInstance = t.isXType('box', true); // false, not a direct BoxComponent instance
</code></pre>
     * @param {String} xtype The xtype to check for this Component
     * @param {Boolean} shallow (optional) False to check whether this Component is descended from the xtype (this is
     * the default), or true to check whether this Component is directly of the specified xtype.
     * @return {Boolean} True if this component descends from the specified xtype, false otherwise.
     */
    isXType : function(xtype, shallow){
        //assume a string by default
        if (typeof xtype == 'function'){
            xtype = xtype.xtype; //handle being passed the class, eg. Ext2.Component
        }else if (typeof xtype == 'object'){
            xtype = xtype.constructor.xtype; //handle being passed an instance
        }
            
        return !shallow ? ('/' + this.getXTypes() + '/').indexOf('/' + xtype + '/') != -1 : this.constructor.xtype == xtype;
    },

    /**
     * <p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all
     * available xtypes, see the {@link Ext2.Component} header.</p>
     * <p><b>If using your own subclasses, be aware that a Component must register its own xtype
     * to participate in determination of inherited xtypes.</b></p>
     * <p>Example usage:</p>
     * <pre><code>
var t = new Ext2.form.TextField();
alert(t.getXTypes());  // alerts 'component/box/field/textfield'
</pre></code>
     * @return {String} The xtype hierarchy string
     */
    getXTypes : function(){
        var tc = this.constructor;
        if(!tc.xtypes){
            var c = [], sc = this;
            while(sc && sc.constructor.xtype){
                c.unshift(sc.constructor.xtype);
                sc = sc.constructor.superclass;
            }
            tc.xtypeChain = c;
            tc.xtypes = c.join('/');
        }
        return tc.xtypes;
    },

    /**
     * Find a container above this component at any level by a custom function. If the passed function returns
     * true, the container will be returned. The passed function is called with the arguments (container, this component).
     * @param {Function} fcn
     * @param {Object} scope (optional)
     * @return {Ext2.Container} The first Container for which the custom function returns true
     */
    findParentBy: function(fn) {
        for (var p = this.ownerCt; (p != null) && !fn(p, this); p = p.ownerCt);
        return p || null;
    },

    /**
     * Find a container above this component at any level by xtype or class
     * @param {String/Class} xtype The xtype string for a component, or the class of the component directly
     * @return {Ext2.Container} The first Container which matches the given xtype or class
     */
    findParentByType: function(xtype) {
        return typeof xtype == 'function' ?
            this.findParentBy(function(p){
                return p.constructor === xtype;
            }) :
            this.findParentBy(function(p){
                return p.constructor.xtype === xtype;
            });
    },

    // internal function for auto removal of assigned event handlers on destruction
    mon : function(item, ename, fn, scope, opt){
        if(!this.mons){
            this.mons = [];
            this.on('beforedestroy', function(){
                for(var i= 0, len = this.mons.length; i < len; i++){
                    var m = this.mons[i];
                    m.item.un(m.ename, m.fn, m.scope);
                }
            }, this);
        }
        this.mons.push({
            item: item, ename: ename, fn: fn, scope: scope
        });
        item.on(ename, fn, scope, opt);
    }
});

Ext2.reg('component', Ext2.Component);
