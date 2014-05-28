/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.SplitButton
 * @extends Ext2.Button
 * A split button that provides a built-in dropdown arrow that can fire an event separately from the default
 * click event of the button.  Typically this would be used to display a dropdown menu that provides additional
 * options to the primary button action, but any custom handler can provide the arrowclick implementation.  Example usage:
 * <pre><code>
// display a dropdown menu:
new Ext2.SplitButton({
	renderTo: 'button-ct', // the container id
   	text: 'Options',
   	handler: optionsHandler, // handle a click on the button itself
   	menu: new Ext2.menu.Menu({
        items: [
        	// these items will render as dropdown menu items when the arrow is clicked:
	        {text: 'Item 1', handler: item1Handler},
	        {text: 'Item 2', handler: item2Handler}
        ]
   	})
});

// Instead of showing a menu, you provide any type of custom
// functionality you want when the dropdown arrow is clicked:
new Ext2.SplitButton({
	renderTo: 'button-ct',
   	text: 'Options',
   	handler: optionsHandler,
   	arrowHandler: myCustomHandler
});
</code></pre>
 * @cfg {Function} arrowHandler A function called when the arrow button is clicked (can be used instead of click event)
 * @cfg {String} arrowTooltip The title attribute of the arrow
 * @constructor
 * Create a new menu button
 * @param {Object} config The config object
 */
Ext2.SplitButton = Ext2.extend(Ext2.Button, {
	// private
    arrowSelector : 'button:last',

    // private
    initComponent : function(){
        Ext2.SplitButton.superclass.initComponent.call(this);
        /**
         * @event arrowclick
         * Fires when this button's arrow is clicked
         * @param {MenuButton} this
         * @param {EventObject} e The click event
         */
        this.addEvents("arrowclick");
    },

    // private
    onRender : function(ct, position){
        // this is one sweet looking template!
        var tpl = new Ext2.Template(
            '<table cellspacing="0" class="x2-btn-menu-wrap x2-btn"><tr><td>',
            '<table cellspacing="0" class="x2-btn-wrap x2-btn-menu-text-wrap"><tbody>',
            '<tr><td class="x2-btn-left"><i>&#160;</i></td><td class="x2-btn-center"><button class="x2-btn-text" type="{1}">{0}</button></td></tr>',
            "</tbody></table></td><td>",
            '<table cellspacing="0" class="x2-btn-wrap x2-btn-menu-arrow-wrap"><tbody>',
            '<tr><td class="x2-btn-center"><button class="x2-btn-menu-arrow-el" type="button">&#160;</button></td><td class="x2-btn-right"><i>&#160;</i></td></tr>',
            "</tbody></table></td></tr></table>"
        );
        var btn, targs = [this.text || '&#160;', this.type];
        if(position){
            btn = tpl.insertBefore(position, targs, true);
        }else{
            btn = tpl.append(ct, targs, true);
        }
        var btnEl = this.btnEl = btn.child(this.buttonSelector);

        this.initButtonEl(btn, btnEl);
        this.arrowBtnTable = btn.child("table:last");
        this.arrowEl = btn.child(this.arrowSelector);
        if(this.arrowTooltip){
            this.arrowEl.dom[this.tooltipType] = this.arrowTooltip;
        }
    },

    // private
    autoWidth : function(){
        if(this.el){
            var tbl = this.el.child("table:first");
            var tbl2 = this.el.child("table:last");
            this.el.setWidth("auto");
            tbl.setWidth("auto");
            if(Ext2.isIE7 && Ext2.isStrict){
                var ib = this.btnEl;
                if(ib && ib.getWidth() > 20){
                    ib.clip();
                    ib.setWidth(Ext2.util.TextMetrics.measure(ib, this.text).width+ib.getFrameWidth('lr'));
                }
            }
            if(this.minWidth){
                if((tbl.getWidth()+tbl2.getWidth()) < this.minWidth){
                    tbl.setWidth(this.minWidth-tbl2.getWidth());
                }
            }
            this.el.setWidth(tbl.getWidth()+tbl2.getWidth());
        } 
    },

    /**
     * Sets this button's arrow click handler.
     * @param {Function} handler The function to call when the arrow is clicked
     * @param {Object} scope (optional) Scope for the function passed above
     */
    setArrowHandler : function(handler, scope){
        this.arrowHandler = handler;
        this.scope = scope;  
    },

    // private
    onClick : function(e){
        e.preventDefault();
        if(!this.disabled){
            if(e.getTarget(".x2-btn-menu-arrow-wrap")){
                if(this.menu && !this.menu.isVisible() && !this.ignoreNextClick){
                    this.showMenu();
                }
                this.fireEvent("arrowclick", this, e);
                if(this.arrowHandler){
                    this.arrowHandler.call(this.scope || this, this, e);
                }
            }else{
                if(this.enableToggle){
                    this.toggle();
                }
                this.fireEvent("click", this, e);
                if(this.handler){
                    this.handler.call(this.scope || this, this, e);
                }
            }
        }
    },

    // private
    getClickEl : function(e, isUp){
        if(!isUp){
            return (this.lastClickEl = e.getTarget("table", 10, true));
        }
        return this.lastClickEl;
    },
    
    onDisableChange: function(disabled){
        Ext2.SplitButton.superclass.onDisableChange.call(this, disabled);
        if(this.arrowEl){
            this.arrowEl.dom.disabled = disabled;
        }
    },

    // private
    isMenuTriggerOver : function(e){
        return this.menu && e.within(this.arrowBtnTable) && !e.within(this.arrowBtnTable, true);
    },

    // private
    isMenuTriggerOut : function(e, internal){
        return this.menu && !e.within(this.arrowBtnTable);
    },

    // private
    onDestroy : function(){
        Ext2.destroy(this.arrowBtnTable);
        Ext2.SplitButton.superclass.onDestroy.call(this);
    }
});

// backwards compat
Ext2.MenuButton = Ext2.SplitButton;


Ext2.reg('splitbutton', Ext2.SplitButton);
