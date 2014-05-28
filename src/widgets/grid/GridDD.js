/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.grid.GridDragZone
 * @extends Ext2.dd.DragZone
 * <p>A customized implementation of a {@link Ext2.dd.DragZone DragZone} which provides default implementations of two of the
 * template methods of DragZone to enable dragging of the selected rows of a GridPanel.</p>
 * <p>A cooperating {@link Ext2.dd.DropZone DropZone} must be created who's template method implementations of
 * {@link Ext2.dd.DropZone#onNodeEnter onNodeEnter}, {@link Ext2.dd.DropZone#onNodeOver onNodeOver},
 * {@link Ext2.dd.DropZone#onNodeOut onNodeOut} and {@link Ext2.dd.DropZone#onNodeDrop onNodeDrop}</p> are able
 * to process the {@link #getDragData data} which is provided.
 */
Ext2.grid.GridDragZone = function(grid, config){
    this.view = grid.getView();
    Ext2.grid.GridDragZone.superclass.constructor.call(this, this.view.mainBody.dom, config);
    if(this.view.lockedBody){
        this.setHandleElId(Ext2.id(this.view.mainBody.dom));
        this.setOuterHandleElId(Ext2.id(this.view.lockedBody.dom));
    }
    this.scroll = false;
    this.grid = grid;
    this.ddel = document.createElement('div');
    this.ddel.className = 'x2-grid-dd-wrap';
};

Ext2.extend(Ext2.grid.GridDragZone, Ext2.dd.DragZone, {
    ddGroup : "GridDD",

    /**
     * <p>The provided implementation of the getDragData method which collects the data to be dragged from the GridPanel on mousedown.</p>
     * <p>This data is available for processing in the {@link Ext2.dd.DropZone#onNodeEnter onNodeEnter}, {@link Ext2.dd.DropZone#onNodeOver onNodeOver},
     * {@link Ext2.dd.DropZone#onNodeOut onNodeOut} and {@link Ext2.dd.DropZone#onNodeDrop onNodeDrop} methods of a cooperating {@link Ext2.dd.DropZone DropZone}.</p>
     * <p>The data object contains the following properties:<ul>
     * <li><b>grid</b> : Ext2.Grid.GridPanel<div class="sub-desc">The GridPanel from which the data is being dragged.</div></li>
     * <li><b>ddel</b> : htmlElement<div class="sub-desc">An htmlElement which provides the "picture" of the data being dragged.</div></li>
     * <li><b>rowIndex</b> : Number<div class="sub-desc">The index of the row which receieved the mousedown gesture which triggered the drag.</div></li>
     * <li><b>selections</b> : Array<div class="sub-desc">An Array of the selected Records which are being dragged from the GridPanel.</div></li>
     * </ul></p>
     */
    getDragData : function(e){
        var t = Ext2.lib.Event.getTarget(e);
        var rowIndex = this.view.findRowIndex(t);
        if(rowIndex !== false){
            var sm = this.grid.selModel;
            if(!sm.isSelected(rowIndex) || e.hasModifier()){
                sm.handleMouseDown(this.grid, rowIndex, e);
            }
            return {grid: this.grid, ddel: this.ddel, rowIndex: rowIndex, selections:sm.getSelections()};
        }
        return false;
    },

    /**
     * <p>The provided implementation of the onInitDrag method. Sets the <tt>innerHTML</tt> of the drag proxy which provides the "picture"
     * of the data being dragged.</p>
     * <p>The <tt>innerHTML</tt> data is found by calling the owning GridPanel's {@link Ext2.grid.GridPanel#getDragDropText getDragDropText}.</p>
     */
    onInitDrag : function(e){
        var data = this.dragData;
        this.ddel.innerHTML = this.grid.getDragDropText();
        this.proxy.update(this.ddel);
        // fire start drag?
    },

    /**
     * An empty immplementation. Implement this to provide behaviour after a repair of an invalid drop. An implementation might highlight
     * the selected rows to show that they have not been dragged.
     */
    afterRepair : function(){
        this.dragging = false;
    },

    /**
     * <p>An empty implementation. Implement this to provide coordinates for the drag proxy to slide back to after an invalid drop.</p>
     * <p>Called before a repair of an invalid drop to get the XY to animate to.</p>
     * @param {EventObject} e The mouse up event
     * @return {Array} The xy location (e.g. [100, 200])
     */
    getRepairXY : function(e, data){
        return false;
    },

    onEndDrag : function(data, e){
        // fire end drag?
    },

    onValidDrop : function(dd, e, id){
        // fire drag drop?
        this.hideProxy();
    },

    beforeInvalidDrop : function(e, id){

    }
});
