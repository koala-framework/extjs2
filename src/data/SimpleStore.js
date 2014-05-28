/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.data.SimpleStore
 * @extends Ext2.data.Store
 * Small helper class to make creating Stores from Array data easier.
 * @cfg {Number} id The array index of the record id. Leave blank to auto generate ids.
 * @cfg {Array} fields An array of field definition objects, or field name string as specified to {@link Ext2.data.Record#create}
 * @cfg {Array} data The multi-dimensional array of data.
 * @constructor
 * @param {Object} config
 */
Ext2.data.SimpleStore = function(config){
    Ext2.data.SimpleStore.superclass.constructor.call(this, Ext2.apply(config, {
        reader: new Ext2.data.ArrayReader({
                id: config.id
            },
            Ext2.data.Record.create(config.fields)
        )
    }));
};
Ext2.extend(Ext2.data.SimpleStore, Ext2.data.Store, {
    loadData : function(data, append){
        if(this.expandData === true){
            var r = [];
            for(var i = 0, len = data.length; i < len; i++){
                r[r.length] = [data[i]];
            }
            data = r;
        }
        Ext2.data.SimpleStore.superclass.loadData.call(this, data, append);
    }
});