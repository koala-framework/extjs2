/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

/**
 * @class Ext2.CompositeElement
 * Standard composite class. Creates a Ext2.Element for every element in the collection.
 * <br><br>
 * <b>NOTE: Although they are not listed, this class supports all of the set/update methods of Ext2.Element. All Ext2.Element
 * actions will be performed on all the elements in this collection.</b>
 * <br><br>
 * All methods return <i>this</i> and can be chained.
 <pre><code>
 var els = Ext2.select("#some-el div.some-class", true);
 // or select directly from an existing element
 var el = Ext2.get('some-el');
 el.select('div.some-class', true);

 els.setWidth(100); // all elements become 100 width
 els.hide(true); // all elements fade out and hide
 // or
 els.setWidth(100).hide(true);
 </code></pre>
 */
Ext2.CompositeElement = function(els){
    this.elements = [];
    this.addElements(els);
};
Ext2.CompositeElement.prototype = {
    isComposite: true,
    addElements : function(els){
        if(!els) return this;
        if(typeof els == "string"){
            els = Ext2.Element.selectorFunction(els);
        }
        var yels = this.elements;
        var index = yels.length-1;
        for(var i = 0, len = els.length; i < len; i++) {
        	yels[++index] = Ext2.get(els[i]);
        }
        return this;
    },

    /**
    * Clears this composite and adds the elements returned by the passed selector.
    * @param {String/Array} els A string CSS selector, an array of elements or an element
    * @return {CompositeElement} this
    */
    fill : function(els){
        this.elements = [];
        this.add(els);
        return this;
    },

    /**
    * Filters this composite to only elements that match the passed selector.
    * @param {String} selector A string CSS selector
    * @return {CompositeElement} this
    */
    filter : function(selector){
        var els = [];
        this.each(function(el){
            if(el.is(selector)){
                els[els.length] = el.dom;
            }
        });
        this.fill(els);
        return this;
    },

    invoke : function(fn, args){
        var els = this.elements;
        for(var i = 0, len = els.length; i < len; i++) {
        	Ext2.Element.prototype[fn].apply(els[i], args);
        }
        return this;
    },
    /**
    * Adds elements to this composite.
    * @param {String/Array} els A string CSS selector, an array of elements or an element
    * @return {CompositeElement} this
    */
    add : function(els){
        if(typeof els == "string"){
            this.addElements(Ext2.Element.selectorFunction(els));
        }else if(els.length !== undefined){
            this.addElements(els);
        }else{
            this.addElements([els]);
        }
        return this;
    },
    /**
    * Calls the passed function passing (el, this, index) for each element in this composite.
    * @param {Function} fn The function to call
    * @param {Object} scope (optional) The <i>this</i> object (defaults to the element)
    * @return {CompositeElement} this
    */
    each : function(fn, scope){
        var els = this.elements;
        for(var i = 0, len = els.length; i < len; i++){
            if(fn.call(scope || els[i], els[i], this, i) === false) {
                break;
            }
        }
        return this;
    },

    /**
     * Returns the Element object at the specified index
     * @param {Number} index
     * @return {Ext2.Element}
     */
    item : function(index){
        return this.elements[index] || null;
    },

    /**
     * Returns the first Element
     * @return {Ext2.Element}
     */
    first : function(){
        return this.item(0);
    },

    /**
     * Returns the last Element
     * @return {Ext2.Element}
     */
    last : function(){
        return this.item(this.elements.length-1);
    },

    /**
     * Returns the number of elements in this composite
     * @return Number
     */
    getCount : function(){
        return this.elements.length;
    },

    /**
     * Returns true if this composite contains the passed element
     * @param el {Mixed} The id of an element, or an Ext2.Element, or an HtmlElement to find within the composite collection.
     * @return Boolean
     */
    contains : function(el){
        return this.indexOf(el) !== -1;
    },

    /**
     * Find the index of the passed element within the composite collection.
     * @param el {Mixed} The id of an element, or an Ext2.Element, or an HtmlElement to find within the composite collection.
     * @return Number The index of the passed Ext2.Element in the composite collection, or -1 if not found.
     */
    indexOf : function(el){
        return this.elements.indexOf(Ext2.get(el));
    },


    /**
    * Removes the specified element(s).
    * @param {Mixed} el The id of an element, the Element itself, the index of the element in this composite
    * or an array of any of those.
    * @param {Boolean} removeDom (optional) True to also remove the element from the document
    * @return {CompositeElement} this
    */
    removeElement : function(el, removeDom){
        if(Ext2.isArray(el)){
            for(var i = 0, len = el.length; i < len; i++){
                this.removeElement(el[i]);
            }
            return this;
        }
        var index = typeof el == 'number' ? el : this.indexOf(el);
        if(index !== -1 && this.elements[index]){
            if(removeDom){
                var d = this.elements[index];
                if(d.dom){
                    d.remove();
                }else{
                    Ext2.removeNode(d);
                }
            }
            this.elements.splice(index, 1);
        }
        return this;
    },

    /**
    * Replaces the specified element with the passed element.
    * @param {Mixed} el The id of an element, the Element itself, the index of the element in this composite
    * to replace.
    * @param {Mixed} replacement The id of an element or the Element itself.
    * @param {Boolean} domReplace (Optional) True to remove and replace the element in the document too.
    * @return {CompositeElement} this
    */
    replaceElement : function(el, replacement, domReplace){
        var index = typeof el == 'number' ? el : this.indexOf(el);
        if(index !== -1){
            if(domReplace){
                this.elements[index].replaceWith(replacement);
            }else{
                this.elements.splice(index, 1, Ext2.get(replacement))
            }
        }
        return this;
    },

    /**
     * Removes all elements.
     */
    clear : function(){
        this.elements = [];
    }
};
(function(){
Ext2.CompositeElement.createCall = function(proto, fnName){
    if(!proto[fnName]){
        proto[fnName] = function(){
            return this.invoke(fnName, arguments);
        };
    }
};
for(var fnName in Ext2.Element.prototype){
    if(typeof Ext2.Element.prototype[fnName] == "function"){
        Ext2.CompositeElement.createCall(Ext2.CompositeElement.prototype, fnName);
    }
};
})();

/**
 * @class Ext2.CompositeElementLite
 * @extends Ext2.CompositeElement
 * Flyweight composite class. Reuses the same Ext2.Element for element operations.
 <pre><code>
 var els = Ext2.select("#some-el div.some-class");
 // or select directly from an existing element
 var el = Ext2.get('some-el');
 el.select('div.some-class');

 els.setWidth(100); // all elements become 100 width
 els.hide(true); // all elements fade out and hide
 // or
 els.setWidth(100).hide(true);
 </code></pre><br><br>
 * <b>NOTE: Although they are not listed, this class supports all of the set/update methods of Ext2.Element. All Ext2.Element
 * actions will be performed on all the elements in this collection.</b>
 */
Ext2.CompositeElementLite = function(els){
    Ext2.CompositeElementLite.superclass.constructor.call(this, els);
    this.el = new Ext2.Element.Flyweight();
};
Ext2.extend(Ext2.CompositeElementLite, Ext2.CompositeElement, {
    addElements : function(els){
        if(els){
            if(Ext2.isArray(els)){
                this.elements = this.elements.concat(els);
            }else{
                var yels = this.elements;
                var index = yels.length-1;
                for(var i = 0, len = els.length; i < len; i++) {
                    yels[++index] = els[i];
                }
            }
        }
        return this;
    },
    invoke : function(fn, args){
        var els = this.elements;
        var el = this.el;
        for(var i = 0, len = els.length; i < len; i++) {
            el.dom = els[i];
        	Ext2.Element.prototype[fn].apply(el, args);
        }
        return this;
    },
    /**
     * Returns a flyweight Element of the dom element object at the specified index
     * @param {Number} index
     * @return {Ext2.Element}
     */
    item : function(index){
        if(!this.elements[index]){
            return null;
        }
        this.el.dom = this.elements[index];
        return this.el;
    },

    // fixes scope with flyweight
    addListener : function(eventName, handler, scope, opt){
        var els = this.elements;
        for(var i = 0, len = els.length; i < len; i++) {
            Ext2.EventManager.on(els[i], eventName, handler, scope || els[i], opt);
        }
        return this;
    },

    /**
    * Calls the passed function passing (el, this, index) for each element in this composite. <b>The element
    * passed is the flyweight (shared) Ext2.Element instance, so if you require a
    * a reference to the dom node, use el.dom.</b>
    * @param {Function} fn The function to call
    * @param {Object} scope (optional) The <i>this</i> object (defaults to the element)
    * @return {CompositeElement} this
    */
    each : function(fn, scope){
        var els = this.elements;
        var el = this.el;
        for(var i = 0, len = els.length; i < len; i++){
            el.dom = els[i];
        	if(fn.call(scope || el, el, this, i) === false){
                break;
            }
        }
        return this;
    },

    indexOf : function(el){
        return this.elements.indexOf(Ext2.getDom(el));
    },

    replaceElement : function(el, replacement, domReplace){
        var index = typeof el == 'number' ? el : this.indexOf(el);
        if(index !== -1){
            replacement = Ext2.getDom(replacement);
            if(domReplace){
                var d = this.elements[index];
                d.parentNode.insertBefore(replacement, d);
                Ext2.removeNode(d);
            }
            this.elements.splice(index, 1, replacement);
        }
        return this;
    }
});
Ext2.CompositeElementLite.prototype.on = Ext2.CompositeElementLite.prototype.addListener;
if(Ext2.DomQuery){
    Ext2.Element.selectorFunction = Ext2.DomQuery.select;
}

Ext2.Element.select = function(selector, unique, root){
    var els;
    if(typeof selector == "string"){
        els = Ext2.Element.selectorFunction(selector, root);
    }else if(selector.length !== undefined){
        els = selector;
    }else{
        throw "Invalid selector";
    }
    if(unique === true){
        return new Ext2.CompositeElement(els);
    }else{
        return new Ext2.CompositeElementLite(els);
    }
};
/**
 * Selects elements based on the passed CSS selector to enable working on them as 1.
 * @param {String/Array} selector The CSS selector or an array of elements
 * @param {Boolean} unique (optional) true to create a unique Ext2.Element for each element (defaults to a shared flyweight object)
 * @param {HTMLElement/String} root (optional) The root element of the query or id of the root
 * @return {CompositeElementLite/CompositeElement}
 * @member Ext
 * @method select
 */
Ext2.select = Ext2.Element.select;