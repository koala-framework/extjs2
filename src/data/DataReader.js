/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.data.DataReader
 * Abstract base class for reading structured data from a data source and converting
 * it into an object containing {@link Ext2.data.Record} objects and metadata for use
 * by an {@link Ext2.data.Store}.  This class is intended to be extended and should not
 * be created directly. For existing implementations, see {@link Ext2.data.ArrayReader},
 * {@link Ext2.data.JsonReader} and {@link Ext2.data.XmlReader}.
 * @constructor Create a new DataReader
 * @param {Object} meta Metadata configuration options (implementation-specific)
 * @param {Object} recordType Either an Array of field definition objects as specified
 * in {@link Ext2.data.Record#create}, or an {@link Ext2.data.Record} object created
 * using {@link Ext2.data.Record#create}.
 */
Ext2.data.DataReader = function(meta, recordType){
    /**
     * This DataReader's configured metadata as passed to the constructor.
     * @type Mixed
     * @property meta
     */
    this.meta = meta;
    this.recordType = Ext2.isArray(recordType) ? 
        Ext2.data.Record.create(recordType) : recordType;
};

Ext2.data.DataReader.prototype = {
    
};