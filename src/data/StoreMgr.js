/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.StoreMgr
 * @extends Ext2.util.MixedCollection
 * The default global group of stores.
 * @singleton
 */
Ext2.StoreMgr = Ext2.apply(new Ext2.util.MixedCollection(), {
    /**
     * @cfg {Object} listeners @hide
     */

    /**
     * Registers one or more Stores with the StoreMgr. You do not normally need to register stores
     * manually.  Any store initialized with a {@link Ext2.data.Store#storeId} will be auto-registered. 
     * @param {Ext2.data.Store} store1 A Store instance
     * @param {Ext2.data.Store} store2 (optional)
     * @param {Ext2.data.Store} etc... (optional)
     */
    register : function(){
        for(var i = 0, s; s = arguments[i]; i++){
            this.add(s);
        }
    },

    /**
     * Unregisters one or more Stores with the StoreMgr
     * @param {String/Object} id1 The id of the Store, or a Store instance
     * @param {String/Object} id2 (optional)
     * @param {String/Object} etc... (optional)
     */
    unregister : function(){
        for(var i = 0, s; s = arguments[i]; i++){
            this.remove(this.lookup(s));
        }
    },

    /**
     * Gets a registered Store by id
     * @param {String/Object} id The id of the Store, or a Store instance
     * @return {Ext2.data.Store}
     */
    lookup : function(id){
        return typeof id == "object" ? id : this.get(id);
    },

    // getKey implementation for MixedCollection
    getKey : function(o){
         return o.storeId || o.id;
    }
});