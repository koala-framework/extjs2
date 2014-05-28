/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.layout.FitLayout
 * @extends Ext2.layout.ContainerLayout
 * <p>This is a base class for layouts that contain a single item that automatically expands to fill the layout's
 * container.  This class is intended to be extended or created via the layout:'fit' {@link Ext2.Container#layout}
 * config, and should generally not need to be created directly via the new keyword.</p>
 * <p>FitLayout does not have any direct config options (other than inherited ones).  To fit a panel to a container
 * using FitLayout, simply set layout:'fit' on the container and add a single panel to it.  If the container has
 * multiple panels, only the first one will be displayed.  Example usage:</p>
 * <pre><code>
var p = new Ext2.Panel({
    title: 'Fit Layout',
    layout:'fit',
    items: {
        title: 'Inner Panel',
        html: '&lt;p&gt;This is the inner panel content&lt;/p&gt;',
        border: false
    }
});
</code></pre>
 */
Ext2.layout.FitLayout = Ext2.extend(Ext2.layout.ContainerLayout, {
    // private
    monitorResize:true,

    // private
    onLayout : function(ct, target){
        Ext2.layout.FitLayout.superclass.onLayout.call(this, ct, target);
        if(!this.container.collapsed){
            var sz = (Ext2.isIE6 && Ext2.isStrict && target.dom == document.body) ? target.getViewSize() : target.getStyleSize();
            this.setItemSize(this.activeItem || ct.items.itemAt(0), sz);
        }
    },

    // private
    setItemSize : function(item, size){
        if(item && size.height > 0){ // display none?
            item.setSize(size);
        }
    }
});
Ext2.Container.LAYOUTS['fit'] = Ext2.layout.FitLayout;