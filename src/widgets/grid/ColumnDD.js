/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

// private
// This is a support class used internally by the Grid components
Ext2.grid.HeaderDragZone = function(grid, hd, hd2){
    this.grid = grid;
    this.view = grid.getView();
    this.ddGroup = "gridHeader" + this.grid.getGridEl().id;
    Ext2.grid.HeaderDragZone.superclass.constructor.call(this, hd);
    if(hd2){
        this.setHandleElId(Ext2.id(hd));
        this.setOuterHandleElId(Ext2.id(hd2));
    }
    this.scroll = false;
};
Ext2.extend(Ext2.grid.HeaderDragZone, Ext2.dd.DragZone, {
    maxDragWidth: 120,
    getDragData : function(e){
        var t = Ext2.lib.Event.getTarget(e);
        var h = this.view.findHeaderCell(t);
        if(h){
            return {ddel: h.firstChild, header:h};
        }
        return false;
    },

    onInitDrag : function(e){
        this.view.headersDisabled = true;
        var clone = this.dragData.ddel.cloneNode(true);
        clone.id = Ext2.id();
        clone.style.width = Math.min(this.dragData.header.offsetWidth,this.maxDragWidth) + "px";
        this.proxy.update(clone);
        return true;
    },

    afterValidDrop : function(){
        var v = this.view;
        setTimeout(function(){
            v.headersDisabled = false;
        }, 50);
    },

    afterInvalidDrop : function(){
        var v = this.view;
        setTimeout(function(){
            v.headersDisabled = false;
        }, 50);
    }
});

// private
// This is a support class used internally by the Grid components
Ext2.grid.HeaderDropZone = function(grid, hd, hd2){
    this.grid = grid;
    this.view = grid.getView();
    // split the proxies so they don't interfere with mouse events
    this.proxyTop = Ext2.DomHelper.append(document.body, {
        cls:"col-move-top", html:"&#160;"
    }, true);
    this.proxyBottom = Ext2.DomHelper.append(document.body, {
        cls:"col-move-bottom", html:"&#160;"
    }, true);
    this.proxyTop.hide = this.proxyBottom.hide = function(){
        this.setLeftTop(-100,-100);
        this.setStyle("visibility", "hidden");
    };
    this.ddGroup = "gridHeader" + this.grid.getGridEl().id;
    // temporarily disabled
    //Ext2.dd.ScrollManager.register(this.view.scroller.dom);
    Ext2.grid.HeaderDropZone.superclass.constructor.call(this, grid.getGridEl().dom);
};
Ext2.extend(Ext2.grid.HeaderDropZone, Ext2.dd.DropZone, {
    proxyOffsets : [-4, -9],
    fly: Ext2.Element.fly,

    getTargetFromEvent : function(e){
        var t = Ext2.lib.Event.getTarget(e);
        var cindex = this.view.findCellIndex(t);
        if(cindex !== false){
            return this.view.getHeaderCell(cindex);
        }
    },

    nextVisible : function(h){
        var v = this.view, cm = this.grid.colModel;
        h = h.nextSibling;
        while(h){
            if(!cm.isHidden(v.getCellIndex(h))){
                return h;
            }
            h = h.nextSibling;
        }
        return null;
    },

    prevVisible : function(h){
        var v = this.view, cm = this.grid.colModel;
        h = h.prevSibling;
        while(h){
            if(!cm.isHidden(v.getCellIndex(h))){
                return h;
            }
            h = h.prevSibling;
        }
        return null;
    },

    positionIndicator : function(h, n, e){
        var x = Ext2.lib.Event.getPageX(e);
        var r = Ext2.lib.Dom.getRegion(n.firstChild);
        var px, pt, py = r.top + this.proxyOffsets[1];
        if((r.right - x) <= (r.right-r.left)/2){
            px = r.right+this.view.borderWidth;
            pt = "after";
        }else{
            px = r.left;
            pt = "before";
        }
        var oldIndex = this.view.getCellIndex(h);
        var newIndex = this.view.getCellIndex(n);

        if(this.grid.colModel.isFixed(newIndex)){
            return false;
        }

        var locked = this.grid.colModel.isLocked(newIndex);

        if(pt == "after"){
            newIndex++;
        }
        if(oldIndex < newIndex){
            newIndex--;
        }
        if(oldIndex == newIndex && (locked == this.grid.colModel.isLocked(oldIndex))){
            return false;
        }
        px +=  this.proxyOffsets[0];
        this.proxyTop.setLeftTop(px, py);
        this.proxyTop.show();
        if(!this.bottomOffset){
            this.bottomOffset = this.view.mainHd.getHeight();
        }
        this.proxyBottom.setLeftTop(px, py+this.proxyTop.dom.offsetHeight+this.bottomOffset);
        this.proxyBottom.show();
        return pt;
    },

    onNodeEnter : function(n, dd, e, data){
        if(data.header != n){
            this.positionIndicator(data.header, n, e);
        }
    },

    onNodeOver : function(n, dd, e, data){
        var result = false;
        if(data.header != n){
            result = this.positionIndicator(data.header, n, e);
        }
        if(!result){
            this.proxyTop.hide();
            this.proxyBottom.hide();
        }
        return result ? this.dropAllowed : this.dropNotAllowed;
    },

    onNodeOut : function(n, dd, e, data){
        this.proxyTop.hide();
        this.proxyBottom.hide();
    },

    onNodeDrop : function(n, dd, e, data){
        var h = data.header;
        if(h != n){
            var cm = this.grid.colModel;
            var x = Ext2.lib.Event.getPageX(e);
            var r = Ext2.lib.Dom.getRegion(n.firstChild);
            var pt = (r.right - x) <= ((r.right-r.left)/2) ? "after" : "before";
            var oldIndex = this.view.getCellIndex(h);
            var newIndex = this.view.getCellIndex(n);
            var locked = cm.isLocked(newIndex);
            if(pt == "after"){
                newIndex++;
            }
            if(oldIndex < newIndex){
                newIndex--;
            }
            if(oldIndex == newIndex && (locked == cm.isLocked(oldIndex))){
                return false;
            }
            cm.setLocked(oldIndex, locked, true);
            cm.moveColumn(oldIndex, newIndex);
            this.grid.fireEvent("columnmove", oldIndex, newIndex);
            return true;
        }
        return false;
    }
});


Ext2.grid.GridView.ColumnDragZone = function(grid, hd){
    Ext2.grid.GridView.ColumnDragZone.superclass.constructor.call(this, grid, hd, null);
    this.proxy.el.addClass('x2-grid3-col-dd');
};

Ext2.extend(Ext2.grid.GridView.ColumnDragZone, Ext2.grid.HeaderDragZone, {
    handleMouseDown : function(e){

    },

    callHandleMouseDown : function(e){
        Ext2.grid.GridView.ColumnDragZone.superclass.handleMouseDown.call(this, e);
    }
});