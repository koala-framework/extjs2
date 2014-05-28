/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.layout.AbsoluteLayout
 * @extends Ext2.layout.AnchorLayout
 * <p>Inherits the anchoring of {@link Ext2.layout.AnchorLayout} and adds the ability for x/y positioning using the
 * standard x and y component config options.</p>
 */
Ext2.layout.AbsoluteLayout = Ext2.extend(Ext2.layout.AnchorLayout, {
    /**
     * @cfg {String} extraCls
     * An optional extra CSS class that will be added to the container (defaults to 'x2-abs-layout-item').  This can be useful for
     * adding customized styles to the container or any of its children using standard CSS rules.
     */
    extraCls: 'x2-abs-layout-item',
    isForm: false,
    // private
    setContainer : function(ct){
        Ext2.layout.AbsoluteLayout.superclass.setContainer.call(this, ct);
        if(ct.isXType('form')){
            this.isForm = true;
        }
    },

    onLayout : function(ct, target){
        if(this.isForm){ ct.body.position(); } else { target.position(); }
        Ext2.layout.AbsoluteLayout.superclass.onLayout.call(this, ct, target);
    },

    // private
    getAnchorViewSize : function(ct, target){
        return this.isForm ? ct.body.getStyleSize() : Ext2.layout.AbsoluteLayout.superclass.getAnchorViewSize.call(this, ct, target);
    },

    // private
    isValidParent : function(c, target){
        return this.isForm ? true : Ext2.layout.AbsoluteLayout.superclass.isValidParent.call(this, c, target);
    },

    // private
    adjustWidthAnchor : function(value, comp){
        return value ? value - comp.getPosition(true)[0] : value;
    },

    // private
    adjustHeightAnchor : function(value, comp){
        return  value ? value - comp.getPosition(true)[1] : value;
    }
    /**
     * @property activeItem
     * @hide
     */
});
Ext2.Container.LAYOUTS['absolute'] = Ext2.layout.AbsoluteLayout;