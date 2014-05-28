/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.History
 * @extends Ext2.util.Observable
 * History management component that allows you to register arbitrary tokens that signify application
 * history state on navigation actions.  You can then handle the history {@link #change} event in order
 * to reset your application UI to the appropriate state when the user navigates forward or backward through
 * the browser history stack.
 * @singleton
 */
Ext2.History = (function () {
    var iframe, hiddenField;
    var ready = false;
    var currentToken;

    function getHash() {
        var href = top.location.href, i = href.indexOf("#");
        return i >= 0 ? href.substr(i + 1) : null;
    }

    function doSave() {
        hiddenField.value = currentToken;
    }

    function handleStateChange(token) {
        currentToken = token;
        Ext2.History.fireEvent('change', token);
    }

    function updateIFrame (token) {
        var html = ['<html><body><div id="state">',token,'</div></body></html>'].join('');
        try {
            var doc = iframe.contentWindow.document;
            doc.open();
            doc.write(html);
            doc.close();
            return true;
        } catch (e) {
            return false;
        }
    }

    function checkIFrame() {
        if (!iframe.contentWindow || !iframe.contentWindow.document) {
            setTimeout(checkIFrame, 10);
            return;
        }

        var doc = iframe.contentWindow.document;
        var elem = doc.getElementById("state");
        var token = elem ? elem.innerText : null;

        var hash = getHash();

        setInterval(function () {

            doc = iframe.contentWindow.document;
            elem = doc.getElementById("state");

            var newtoken = elem ? elem.innerText : null;

            var newHash = getHash();

            if (newtoken !== token) {
                token = newtoken;
                handleStateChange(token);
                top.location.hash = token;
                hash = token;
                doSave();
            } else if (newHash !== hash) {
                hash = newHash;
                updateIFrame(newHash);
            }

        }, 50);

        ready = true;

        Ext2.History.fireEvent('ready', Ext2.History);
    }

    function startUp() {
        currentToken = hiddenField.value ? hiddenField.value : getHash();
        
        if (Ext2.isIE6 || Ext2.isIE7) {
            checkIFrame();
        } else {
            var hash = getHash();
            setInterval(function () {
                var newHash = getHash();
                if (newHash !== hash) {
                    hash = newHash;
                    handleStateChange(hash);
                    doSave();
                }
            }, 50);
            ready = true;
            Ext2.History.fireEvent('ready', Ext2.History);
        }
    }

    return {
        /**
         * The id of the hidden field required for storing the current history token.
         * @type String
         * @property
         */
        fieldId: 'x2-history-field',
        /**
         * The id of the iframe required by IE to manage the history stack.
         * @type String
         * @property
         */
        iframeId: 'x2-history-frame',
        
        events:{},

        /**
         * Initialize the global History instance.
         * @param {Boolean} onReady (optional) A callback function that will be called once the history
         * component is fully initialized.
         * @param {Object} scope (optional) The callback scope
         */
        init: function (onReady, scope) {
            if(ready) {
                Ext2.callback(onReady, scope, [this]);
                return;
            }
            if(!Ext2.isReady){
                Ext2.onReady(function(){
                    Ext2.History.init(onReady, scope);
                });
                return;
            }
            hiddenField = Ext2.getDom(Ext2.History.fieldId);
			if (Ext2.isIE6 || Ext2.isIE7) {
                iframe = Ext2.getDom(Ext2.History.iframeId);
            }
            this.addEvents('ready', 'change');
            if(onReady){
                this.on('ready', onReady, scope, {single:true});
            }
            startUp();
        },

        /**
         * Add a new token to the history stack. This can be any arbitrary value, although it would
         * commonly be the concatenation of a component id and another id marking the specifc history
         * state of that component.  Example usage:
         * <pre><code>
// Handle tab changes on a TabPanel
tabPanel.on('tabchange', function(tabPanel, tab){
    Ext2.History.add(tabPanel.id + ':' + tab.id);
});
</code></pre>
         * @param {String} token The value that defines a particular application-specific history state
         * @param {Boolean} preventDuplicates When true, if the passed token matches the current token
         * it will not save a new history step. Set to false if the same state can be saved more than once
         * at the same history stack location (defaults to true).
         */
        add: function (token, preventDup) {
            if(preventDup !== false){
                if(this.getToken() == token){
                    return true;
                }
            }
            if (Ext2.isIE6 || Ext2.isIE7) {
                return updateIFrame(token);
            } else {
                top.location.hash = token;
                return true;
            }
        },

        /**
         * Programmatically steps back one step in browser history (equivalent to the user pressing the Back button).
         */
        back: function(){
            history.go(-1);
        },

        /**
         * Programmatically steps forward one step in browser history (equivalent to the user pressing the Forward button).
         */
        forward: function(){
            history.go(1);
        },

        /**
         * Retrieves the currently-active history token.
         * @return {String} The token
         */
        getToken: function() {
            return ready ? currentToken : getHash();
        }
    };
})();
Ext2.apply(Ext2.History, new Ext2.util.Observable());