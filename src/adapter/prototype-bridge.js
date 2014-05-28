/*
 * Ext JS Library 2.3.0
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

(function(){

var libFlyweight;

Ext2.lib.Dom = {
    getViewWidth : function(full){
        return full ? this.getDocumentWidth() : this.getViewportWidth();
    },

    getViewHeight : function(full){
        return full ? this.getDocumentHeight() : this.getViewportHeight();
    },

    getDocumentHeight: function() { // missing from prototype?
        var scrollHeight = (document.compatMode != "CSS1Compat") ? document.body.scrollHeight : document.documentElement.scrollHeight;
        return Math.max(scrollHeight, this.getViewportHeight());
    },

    getDocumentWidth: function() { // missing from prototype?
        var scrollWidth = (document.compatMode != "CSS1Compat") ? document.body.scrollWidth : document.documentElement.scrollWidth;
        return Math.max(scrollWidth, this.getViewportWidth());
    },

    getViewportHeight: function() { // missing from prototype?
        var height = self.innerHeight;
        var mode = document.compatMode;

        if ( (mode || Ext2.isIE) && !Ext2.isOpera ) {
            height = (mode == "CSS1Compat") ?
                    document.documentElement.clientHeight : // Standards
                    document.body.clientHeight; // Quirks
        }

        return height;
    },

    getViewportWidth: function() { // missing from prototype?
        var width = self.innerWidth;  // Safari
        var mode = document.compatMode;

        if (mode || Ext2.isIE) { // IE, Gecko, Opera
            width = (mode == "CSS1Compat") ?
                    document.documentElement.clientWidth : // Standards
                    document.body.clientWidth; // Quirks
        }
        return width;
    },

    isAncestor : function(p, c){ // missing from prototype?
        p = Ext2.getDom(p);
        c = Ext2.getDom(c);
        if (!p || !c) {return false;}

        if(p.contains && !Ext2.isWebKit) {
            return p.contains(c);
        }else if(p.compareDocumentPosition) {
            return !!(p.compareDocumentPosition(c) & 16);
        }else{
            var parent = c.parentNode;
            while (parent) {
                if (parent == p) {
                    return true;
                }
                else if (!parent.tagName || parent.tagName.toUpperCase() == "HTML") {
                    return false;
                }
                parent = parent.parentNode;
            }
            return false;
        }
    },

    getRegion : function(el){
        return Ext2.lib.Region.getRegion(el);
    },

    getY : function(el){
        return this.getXY(el)[1];
    },

    getX : function(el){
        return this.getXY(el)[0];
    },

    getXY : function(el){ // this initially used Position.cumulativeOffset but it is not accurate enough
        var p, pe, b, scroll, bd = (document.body || document.documentElement);
        el = Ext2.getDom(el);

        if(el == bd){
            return [0, 0];
        }

        if (el.getBoundingClientRect) {
            b = el.getBoundingClientRect();
            scroll = fly(document).getScroll();
            return [b.left + scroll.left, b.top + scroll.top];
        }
        var x = 0, y = 0;

        p = el;

        var hasAbsolute = fly(el).getStyle("position") == "absolute";

        while (p) {

            x += p.offsetLeft;
            y += p.offsetTop;

            if (!hasAbsolute && fly(p).getStyle("position") == "absolute") {
                hasAbsolute = true;
            }

            if (Ext2.isGecko) {
                pe = fly(p);

                var bt = parseInt(pe.getStyle("borderTopWidth"), 10) || 0;
                var bl = parseInt(pe.getStyle("borderLeftWidth"), 10) || 0;


                x += bl;
                y += bt;


                if (p != el && pe.getStyle('overflow') != 'visible') {
                    x += bl;
                    y += bt;
                }
            }
            p = p.offsetParent;
        }

        if (Ext2.isWebKit && hasAbsolute) {
            x -= bd.offsetLeft;
            y -= bd.offsetTop;
        }

        if (Ext2.isGecko && !hasAbsolute) {
            var dbd = fly(bd);
            x += parseInt(dbd.getStyle("borderLeftWidth"), 10) || 0;
            y += parseInt(dbd.getStyle("borderTopWidth"), 10) || 0;
        }

        p = el.parentNode;
        while (p && p != bd) {
            if (!Ext2.isOpera || (p.tagName != 'TR' && fly(p).getStyle("display") != "inline")) {
                x -= p.scrollLeft;
                y -= p.scrollTop;
            }
            p = p.parentNode;
        }
        return [x, y];
    },

    setXY : function(el, xy){ // this initially used Position.cumulativeOffset but it is not accurate enough
        el = Ext2.fly(el, '_setXY');
        el.position();
        var pts = el.translatePoints(xy);
        if(xy[0] !== false){
            el.dom.style.left = pts.left + "px";
        }
        if(xy[1] !== false){
            el.dom.style.top = pts.top + "px";
        }
    },

    setX : function(el, x){
        this.setXY(el, [x, false]);
    },

    setY : function(el, y){
        this.setXY(el, [false, y]);
    }
};

Ext2.lib.Event = {
    getPageX : function(e){
        return Event.pointerX(e.browserEvent || e);
    },

    getPageY : function(e){
        return Event.pointerY(e.browserEvent || e);
    },

    getXY : function(e){
        e = e.browserEvent || e;
        return [Event.pointerX(e), Event.pointerY(e)];
    },

    getTarget : function(e){
        return Event.element(e.browserEvent || e);
    },

    resolveTextNode: function(node) {
        if (node && 3 == node.nodeType) {
            return node.parentNode;
        } else {
            return node;
        }
    },

    getRelatedTarget: function(ev) { // missing from prototype?
        ev = ev.browserEvent || ev;
        var t = ev.relatedTarget;
        if (!t) {
            if (ev.type == "mouseout") {
                t = ev.toElement;
            } else if (ev.type == "mouseover") {
                t = ev.fromElement;
            }
        }

        return this.resolveTextNode(t);
    },

    on : function(el, eventName, fn){
        Event.observe(el, eventName, fn, false);
    },

    un : function(el, eventName, fn){
        Event.stopObserving(el, eventName, fn, false);
    },

    purgeElement : function(el){
        // no equiv?
    },

    preventDefault : function(e){   // missing from prototype?
        e = e.browserEvent || e;
        if(e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },

    stopPropagation : function(e){   // missing from prototype?
        e = e.browserEvent || e;
        if(e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    stopEvent : function(e){
        Event.stop(e.browserEvent || e);
    },

    onAvailable : function(id, fn, scope){  // no equiv
        var start = new Date(), iid;
        var f = function(){
            if(start.getElapsed() > 10000){
                clearInterval(iid);
            }
            var el = document.getElementById(id);
            if(el){
                clearInterval(iid);
                fn.call(scope||window, el);
            }
        };
        iid = setInterval(f, 50);
    }
};

Ext2.lib.Ajax = function(){
    var createSuccess = function(cb){
         return cb.success ? function(xhr){
            cb.success.call(cb.scope||window, {
                responseText: xhr.responseText,
                responseXML : xhr.responseXML,
                argument: cb.argument
            });
         } : Ext2.emptyFn;
    };
    var createFailure = function(cb){
         return cb.failure ? function(xhr){
            cb.failure.call(cb.scope||window, {
                responseText: xhr.responseText,
                responseXML : xhr.responseXML,
                argument: cb.argument
            });
         } : Ext2.emptyFn;
    };
    return {
        request : function(method, uri, cb, data, options){
            var o = {
                method: method,
                parameters: data || '',
                timeout: cb.timeout,
                onSuccess: createSuccess(cb),
                onFailure: createFailure(cb)
            };
            if(options){
                var hs = options.headers;
                if(hs){
                    o.requestHeaders = hs;
                }
                if(options.xmlData){
                    method = (method ? method : (options.method ? options.method : 'POST'));
                    if (!hs || !hs['Content-Type']){
                        o.contentType = 'text/xml';
                    }
                    o.postBody = options.xmlData;
                    delete o.parameters;
                }
                if(options.jsonData){
                    method = (method ? method : (options.method ? options.method : 'POST'));
                    if (!hs || !hs['Content-Type']){
                        o.contentType = 'application/json';
                    }
                    o.postBody = typeof options.jsonData == 'object' ? Ext2.encode(options.jsonData) : options.jsonData;
                    delete o.parameters;
                }
            }
            new Ajax.Request(uri, o);
        },

        formRequest : function(form, uri, cb, data, isUpload, sslUri){
            new Ajax.Request(uri, {
                method: Ext2.getDom(form).method ||'POST',
                parameters: Form.serialize(form)+(data?'&'+data:''),
                timeout: cb.timeout,
                onSuccess: createSuccess(cb),
                onFailure: createFailure(cb)
            });
        },

        isCallInProgress : function(trans){
            return false;
        },

        abort : function(trans){
            return false;
        },
        
        serializeForm : function(form){
            return Form.serialize(form.dom||form);
        }
    };
}();


Ext2.lib.Anim = function(){
    
    var easings = {
        easeOut: function(pos) {
            return 1-Math.pow(1-pos,2);
        },
        easeIn: function(pos) {
            return 1-Math.pow(1-pos,2);
        }
    };
    var createAnim = function(cb, scope){
        return {
            stop : function(skipToLast){
                this.effect.cancel();
            },

            isAnimated : function(){
                return this.effect.state == 'running';
            },

            proxyCallback : function(){
                Ext2.callback(cb, scope);
            }
        };
    };
    return {
        scroll : function(el, args, duration, easing, cb, scope){
            // not supported so scroll immediately?
            var anim = createAnim(cb, scope);
            el = Ext2.getDom(el);
            if(typeof args.scroll.to[0] == 'number'){
                el.scrollLeft = args.scroll.to[0];
            }
            if(typeof args.scroll.to[1] == 'number'){
                el.scrollTop = args.scroll.to[1];
            }
            anim.proxyCallback();
            return anim;
        },

        motion : function(el, args, duration, easing, cb, scope){
            return this.run(el, args, duration, easing, cb, scope);
        },

        color : function(el, args, duration, easing, cb, scope){
            return this.run(el, args, duration, easing, cb, scope);
        },

        run : function(el, args, duration, easing, cb, scope, type){
            var o = {};
            for(var k in args){
                switch(k){   // scriptaculous doesn't support, so convert these
                    case 'points':
                        var by, pts, e = Ext2.fly(el, '_animrun');
                        e.position();
                        if(by = args.points.by){
                            var xy = e.getXY();
                            pts = e.translatePoints([xy[0]+by[0], xy[1]+by[1]]);
                        }else{
                            pts = e.translatePoints(args.points.to);
                        }
                        o.left = pts.left+'px';
                        o.top = pts.top+'px';
                    break;
                    case 'width':
                        o.width = args.width.to+'px';
                    break;
                    case 'height':
                        o.height = args.height.to+'px';
                    break;
                    case 'opacity':
                        o.opacity = String(args.opacity.to);
                    break;
                    default:
                        o[k] = String(args[k].to);
                    break;
                }
            }
            var anim = createAnim(cb, scope);
            anim.effect = new Effect.Morph(Ext2.id(el), {
                duration: duration,
                afterFinish: anim.proxyCallback,
                transition: easings[easing] || Effect.Transitions.linear,
                style: o
            });
            return anim;
        }
    };
}();


// all lib flyweight calls use their own flyweight to prevent collisions with developer flyweights
function fly(el){
    if(!libFlyweight){
        libFlyweight = new Ext2.Element.Flyweight();
    }
    libFlyweight.dom = el;
    return libFlyweight;
}
    
Ext2.lib.Region = function(t, r, b, l) {
    this.top = t;
    this[1] = t;
    this.right = r;
    this.bottom = b;
    this.left = l;
    this[0] = l;
};

Ext2.lib.Region.prototype = {
    contains : function(region) {
        return ( region.left   >= this.left   &&
                 region.right  <= this.right  &&
                 region.top    >= this.top    &&
                 region.bottom <= this.bottom    );

    },

    getArea : function() {
        return ( (this.bottom - this.top) * (this.right - this.left) );
    },

    intersect : function(region) {
        var t = Math.max( this.top,    region.top    );
        var r = Math.min( this.right,  region.right  );
        var b = Math.min( this.bottom, region.bottom );
        var l = Math.max( this.left,   region.left   );

        if (b >= t && r >= l) {
            return new Ext2.lib.Region(t, r, b, l);
        } else {
            return null;
        }
    },
    union : function(region) {
        var t = Math.min( this.top,    region.top    );
        var r = Math.max( this.right,  region.right  );
        var b = Math.max( this.bottom, region.bottom );
        var l = Math.min( this.left,   region.left   );

        return new Ext2.lib.Region(t, r, b, l);
    },

    constrainTo : function(r) {
            this.top = this.top.constrain(r.top, r.bottom);
            this.bottom = this.bottom.constrain(r.top, r.bottom);
            this.left = this.left.constrain(r.left, r.right);
            this.right = this.right.constrain(r.left, r.right);
            return this;
    },

    adjust : function(t, l, b, r){
        this.top += t;
        this.left += l;
        this.right += r;
        this.bottom += b;
        return this;
    }
};

Ext2.lib.Region.getRegion = function(el) {
    var p = Ext2.lib.Dom.getXY(el);

    var t = p[1];
    var r = p[0] + el.offsetWidth;
    var b = p[1] + el.offsetHeight;
    var l = p[0];

    return new Ext2.lib.Region(t, r, b, l);
};

Ext2.lib.Point = function(x, y) {
   if (Ext2.isArray(x)) {
      y = x[1];
      x = x[0];
   }
    this.x = this.right = this.left = this[0] = x;
    this.y = this.top = this.bottom = this[1] = y;
};

Ext2.lib.Point.prototype = new Ext2.lib.Region();


// prevent IE leaks
if(Ext2.isIE) {
    function fnCleanUp() {
        var p = Function.prototype;
        delete p.createSequence;
        delete p.defer;
        delete p.createDelegate;
        delete p.createCallback;
        delete p.createInterceptor;

        window.detachEvent("onunload", fnCleanUp);
    }
    window.attachEvent("onunload", fnCleanUp);
}
})();