/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.data.DataProxy
 * @extends Ext2.util.Observable
 * This class is an abstract base class for implementations which provide retrieval of
 * unformatted data objects.<br>
 * <p>
 * DataProxy implementations are usually used in conjunction with an implementation of Ext2.data.DataReader
 * (of the appropriate type which knows how to parse the data object) to provide a block of
 * {@link Ext2.data.Records} to an {@link Ext2.data.Store}.<br>
 * <p>
 * Custom implementations must implement the load method as described in
 * {@link Ext2.data.HttpProxy#load}.
 */
Ext2.data.DataProxy = function(){
    this.addEvents(
        /**
         * @event beforeload
         * Fires before a network request is made to retrieve a data object.
         * @param {Object} this
         * @param {Object} params The params object passed to the {@link #load} function
         */
        'beforeload',
        /**
         * @event load
         * Fires before the load method's callback is called.
         * @param {Object} this
         * @param {Object} o The data object
         * @param {Object} arg The callback's arg object passed to the {@link #load} function
         */
        'load'
    );
    Ext2.data.DataProxy.superclass.constructor.call(this);
};

Ext2.extend(Ext2.data.DataProxy, Ext2.util.Observable, {
    /**
     * Destroys the proxy by purging any event listeners and cancelling any active requests.
     */
    destroy: function(){
        this.purgeListeners();
    }
});