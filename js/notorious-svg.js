/*
notorious-svg - v - 2013-08-02
Barrel Creative Days project by Jessie Frazelle, Isha Kasliwal, Matt Ortega, Diane Wang, and Molly Sugar.
Lovingly coded by The Nortorious SVG  - http://barrelny.com 
*/
(function() {var b=void 0,f=!0,h=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function r(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");document.createElement("track");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.va[a])return u.va[a];a=u.r(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.C(a,c,d)}var v=u;
window.Bd=window.Cd=u;u.Qb="4.1";u.yc="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}}};"GENERATED_CDN_VSN"!==u.Qb&&(v.options.flash.swf=u.yc+"vjs.zencdn.net/"+u.Qb+"/video-js.swf");u.va={};u.ka=u.CoreObject=m();
u.ka.extend=function(a){var c,d;a=a||{};c=a.init||a.g||this.prototype.init||this.prototype.g||m();d=function(){c.apply(this,arguments)};d.prototype=u.i.create(this.prototype);d.prototype.constructor=d;d.extend=u.ka.extend;d.create=u.ka.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};u.ka.create=function(){var a=u.i.create(this.prototype);this.apply(a,arguments);return a};
u.d=function(a,c,d){var e=u.getData(a);e.z||(e.z={});e.z[c]||(e.z[c]=[]);d.u||(d.u=u.u++);e.z[c].push(d);e.T||(e.disabled=l,e.T=function(c){if(!e.disabled){c=u.hc(c);var d=e.z[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.nc();k++)d[k].call(a,c)}});1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.T,l):document.attachEvent&&a.attachEvent("on"+c,e.T))};
u.t=function(a,c,d){if(u.mc(a)){var e=u.getData(a);if(e.z)if(c){var g=e.z[c];if(g){if(d){if(d.u)for(e=0;e<g.length;e++)g[e].u===d.u&&g.splice(e--,1)}else e.z[c]=[];u.ec(a,c)}}else for(g in e.z)c=g,e.z[c]=[],u.ec(a,c)}};u.ec=function(a,c){var d=u.getData(a);0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.T,l):document.detachEvent&&a.detachEvent("on"+c,d.T));u.Bb(d.z)&&(delete d.z,delete d.T,delete d.disabled);u.Bb(d)&&u.sc(a)};
u.hc=function(a){function c(){return f}function d(){return l}if(!a||!a.Cb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&"layerY"!==g&&(a[g]=e[g]);a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.Ab=c};a.Ab=d;a.stopPropagation=function(){e.stopPropagation&&e.stopPropagation();a.cancelBubble=f;a.Cb=c};a.Cb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&
e.stopImmediatePropagation();a.nc=c;a.stopPropagation()};a.nc=d;if(a.clientX!=h){g=document.documentElement;var j=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=h&&(a.button=a.button&1?0:a.button&4?1:a.button&2?2:0)}return a};
u.k=function(a,c){var d=u.mc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.hc(c);d.T&&d.T.call(a,c);if(e&&!c.Cb())u.k(e,c);else if(!e&&!c.Ab()&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.Ab()};u.R=function(a,c,d){u.d(a,c,function(){u.t(a,c,arguments.callee);d.apply(this,arguments)})};var w=Object.prototype.hasOwnProperty;
u.e=function(a,c){var d=document.createElement(a||"div"),e;for(e in c)w.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.Z=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.i={};u.i.create=Object.create||function(a){function c(){}c.prototype=a;return new c};u.i.ra=function(a,c,d){for(var e in a)w.call(a,e)&&c.call(d||this,e,a[e])};u.i.B=function(a,c){if(!c)return a;for(var d in c)w.call(c,d)&&(a[d]=c[d]);return a};
u.i.gc=function(a,c){var d,e,g;a=u.i.copy(a);for(d in c)w.call(c,d)&&(e=a[d],g=c[d],a[d]=u.i.oc(e)&&u.i.oc(g)?u.i.gc(e,g):c[d]);return a};u.i.copy=function(a){return u.i.B({},a)};u.i.oc=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.u||(c.u=u.u++);e.u=d?d+"_"+c.u:c.u;return e};u.pa={};u.u=1;u.expando="vdata"+(new Date).getTime();
u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.u++,u.pa[c]={});return u.pa[c]};u.mc=function(a){a=a[u.expando];return!(!a||u.Bb(u.pa[a]))};u.sc=function(a){var c=a[u.expando];if(c){delete u.pa[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h}}};u.Bb=function(a){for(var c in a)if(a[c]!==h)return l;return f};u.p=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};
u.w=function(a,c){if(-1!=a.className.indexOf(c)){for(var d=a.className.split(" "),e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.ma=u.e("video");u.G=navigator.userAgent;u.Cc=/iPhone/i.test(u.G);u.Bc=/iPad/i.test(u.G);u.Dc=/iPod/i.test(u.G);u.Ub=u.Cc||u.Bc||u.Dc;var aa=u,x;var y=u.G.match(/OS (\d+)_/i);x=y&&y[1]?y[1]:b;aa.td=x;u.ab=/Android/i.test(u.G);var ba=u,z;var A=u.G.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),B,C;
A?(B=A[1]&&parseFloat(A[1]),C=A[2]&&parseFloat(A[2]),z=B&&C?parseFloat(A[1]+"."+A[2]):B?B:h):z=h;ba.zc=z;u.Ec=u.ab&&/webkit/i.test(u.G)&&2.3>u.zc;u.Ac=/Firefox/i.test(u.G);u.ud=/Chrome/i.test(u.G);u.xb=function(a){var c={};if(a&&a.attributes&&0<a.attributes.length)for(var d=a.attributes,e,g,j=d.length-1;0<=j;j--){e=d[j].name;g=d[j].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==h?f:l;c[e]=g}return c};
u.xd=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.zb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Ob={};u.r=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};
u.Ka=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600),g=0<g||0<k?g+":":"";return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.Ic=function(){document.body.focus();document.onselectstart=r(l)};u.od=function(){document.onselectstart=r(f)};u.trim=function(a){return a.toString().replace(/^\s+/,"").replace(/\s+$/,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};
u.tb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};
u.get=function(a,c,d){var e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});var g=new XMLHttpRequest;try{g.open("GET",a)}catch(j){d(j)}g.onreadystatechange=
function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())};try{g.send()}catch(k){d&&d(k)}};u.gd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.kc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};
u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.Qc=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0),top:c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0)}};
u.c=u.ka.extend({g:function(a,c,d){this.a=a;this.f=u.i.copy(this.f);c=this.options(c);this.O=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.u++);this.Vc=c.name||h;this.b=c.el||this.e();this.H=[];this.rb={};this.S={};if((a=this.f)&&a.children){var e=this;u.i.ra(a.children,function(a,c){c!==l&&!c.loadEvent&&(e[a]=e.Y(a,c))})}this.P(d)}});t=u.c.prototype;
t.D=function(){if(this.H)for(var a=this.H.length-1;0<=a;a--)this.H[a].D&&this.H[a].D();this.S=this.rb=this.H=h;this.t();this.b.parentNode&&this.b.parentNode.removeChild(this.b);u.sc(this.b);this.b=h};t.bd=p("a");t.options=function(a){return a===b?this.f:this.f=u.i.gc(this.f,a)};t.e=function(a,c){return u.e(a,c)};t.r=p("b");t.id=p("O");t.name=p("Vc");t.children=p("H");
t.Y=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.Z(e),c.name=e,d=new window.videojs[d](this.a||this,c)):d=a;this.H.push(d);"function"===typeof d.id&&(this.rb[d.id()]=d);(e=e||d.name&&d.name())&&(this.S[e]=d);"function"===typeof d.el&&d.el()&&(this.qa||this.b).appendChild(d.el());return d};
t.removeChild=function(a){"string"===typeof a&&(a=this.S[a]);if(a&&this.H){for(var c=l,d=this.H.length-1;0<=d;d--)if(this.H[d]===a){c=f;this.H.splice(d,1);break}c&&(this.rb[a.id]=h,this.S[a.name]=h,(c=a.r())&&c.parentNode===(this.qa||this.b)&&(this.qa||this.b).removeChild(a.r()))}};t.Q=r("");t.d=function(a,c){u.d(this.b,a,u.bind(this,c));return this};t.t=function(a,c){u.t(this.b,a,c);return this};t.R=function(a,c){u.R(this.b,a,u.bind(this,c));return this};t.k=function(a,c){u.k(this.b,a,c);return this};
t.P=function(a){a&&(this.aa?a.call(this):(this.Ra===b&&(this.Ra=[]),this.Ra.push(a)));return this};t.Ta=function(){this.aa=f;var a=this.Ra;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Ra=[];this.k("ready")}};t.p=function(a){u.p(this.b,a);return this};t.w=function(a){u.w(this.b,a);return this};t.show=function(){this.b.style.display="block";return this};t.v=function(){this.b.style.display="none";return this};t.$=function(){this.w("vjs-fade-out");this.p("vjs-fade-in");return this};
t.ta=function(){this.w("vjs-fade-in");this.p("vjs-fade-out");return this};t.pc=function(){this.p("vjs-lock-showing");return this};t.Ua=function(){this.w("vjs-lock-showing");return this};t.disable=function(){this.v();this.show=m();this.$=m()};t.width=function(a,c){return D(this,"width",a,c)};t.height=function(a,c){return D(this,"height",a,c)};t.Mc=function(a,c){return this.width(a,f).height(c)};
function D(a,c,d,e){if(d!==b)return a.b.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.k("resize"),a;if(!a.b)return 0;d=a.b.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.b["offset"+u.Z(c)],10)}
u.o=u.c.extend({g:function(a,c){u.c.call(this,a,c);var d=l;this.d("touchstart",function(){d=f});this.d("touchmove",function(){d=l});var e=this;this.d("touchend",function(a){d&&e.n(a);a.preventDefault();a.stopPropagation()});this.d("click",this.n);this.d("focus",this.Na);this.d("blur",this.Ma)}});t=u.o.prototype;
t.e=function(a,c){c=u.i.B({className:this.Q(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.oa||"Need Text")+"</span></div>",dd:"button","aria-live":"polite",tabIndex:0},c);return u.c.prototype.e.call(this,a,c)};t.Q=function(){return"vjs-control "+u.c.prototype.Q.call(this)};t.n=m();t.Na=function(){u.d(document,"keyup",u.bind(this,this.ba))};t.ba=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.n()};
t.Ma=function(){u.t(document,"keyup",u.bind(this,this.ba))};u.M=u.c.extend({g:function(a,c){u.c.call(this,a,c);this.Hc=this.S[this.f.barName];this.handle=this.S[this.f.handleName];a.d(this.qc,u.bind(this,this.update));this.d("mousedown",this.Oa);this.d("touchstart",this.Oa);this.d("focus",this.Na);this.d("blur",this.Ma);this.d("click",this.n);this.a.d("controlsvisible",u.bind(this,this.update));a.P(u.bind(this,this.update));this.N={}}});t=u.M.prototype;
t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.i.B({dd:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.c.prototype.e.call(this,a,c)};t.Oa=function(a){a.preventDefault();u.Ic();this.N.move=u.bind(this,this.Hb);this.N.end=u.bind(this,this.Ib);u.d(document,"mousemove",this.N.move);u.d(document,"mouseup",this.N.end);u.d(document,"touchmove",this.N.move);u.d(document,"touchend",this.N.end);this.Hb(a)};
t.Ib=function(){u.od();u.t(document,"mousemove",this.N.move,l);u.t(document,"mouseup",this.N.end,l);u.t(document,"touchmove",this.N.move,l);u.t(document,"touchend",this.N.end,l);this.update()};t.update=function(){if(this.b){var a,c=this.yb(),d=this.handle,e=this.Hc;isNaN(c)&&(c=0);a=c;if(d){a=this.b.offsetWidth;var g=d.r().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.r().style.left=u.round(100*c,2)+"%"}e.r().style.width=u.round(100*a,2)+"%"}};
function E(a,c){var d,e,g,j;d=a.b;e=u.Qc(d);j=g=d.offsetWidth;d=a.handle;if(a.f.pd)return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.r().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.r().offsetWidth,g+=d/2,j-=d);return Math.max(0,Math.min(1,(e-g)/j))}t.Na=function(){u.d(document,"keyup",u.bind(this,this.ba))};
t.ba=function(a){37==a.which?(a.preventDefault(),this.vc()):39==a.which&&(a.preventDefault(),this.wc())};t.Ma=function(){u.t(document,"keyup",u.bind(this,this.ba))};t.n=function(a){a.stopImmediatePropagation();a.preventDefault()};u.ga=u.c.extend();u.ga.prototype.defaultValue=0;u.ga.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.i.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.c.prototype.e.call(this,"div",c)};u.la=u.c.extend();
function ca(a,c){a.Y(c);c.d("click",u.bind(a,function(){this.Ua()}))}u.la.prototype.e=function(){var a=this.options().Kc||"ul";this.qa=u.e(a,{className:"vjs-menu-content"});a=u.c.prototype.e.call(this,"div",{append:this.qa,className:"vjs-menu"});a.appendChild(this.qa);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.L=u.o.extend({g:function(a,c){u.o.call(this,a,c);this.selected(c.selected)}});
u.L.prototype.e=function(a,c){return u.o.prototype.e.call(this,"li",u.i.B({className:"vjs-menu-item",innerHTML:this.f.label},c))};u.L.prototype.n=function(){this.selected(f)};u.L.prototype.selected=function(a){a?(this.p("vjs-selected"),this.b.setAttribute("aria-selected",f)):(this.w("vjs-selected"),this.b.setAttribute("aria-selected",l))};
u.ea=u.o.extend({g:function(a,c){u.o.call(this,a,c);this.ua=this.Ja();this.Y(this.ua);this.J&&0===this.J.length&&this.v();this.d("keyup",this.ba);this.b.setAttribute("aria-haspopup",f);this.b.setAttribute("role","button")}});t=u.ea.prototype;t.na=l;t.Ja=function(){var a=new u.la(this.a);this.options().title&&a.r().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),md:-1}));if(this.J=this.sb())for(var c=0;c<this.J.length;c++)ca(a,this.J[c]);return a};t.sb=m();
t.Q=function(){return this.className+" vjs-menu-button "+u.o.prototype.Q.call(this)};t.Na=m();t.Ma=m();t.n=function(){this.R("mouseout",u.bind(this,function(){this.ua.Ua();this.b.blur()}));this.na?F(this):G(this)};t.ba=function(a){a.preventDefault();32==a.which||13==a.which?this.na?F(this):G(this):27==a.which&&this.na&&F(this)};function G(a){a.na=f;a.ua.pc();a.b.setAttribute("aria-pressed",f);a.J&&0<a.J.length&&a.J[0].r().focus()}function F(a){a.na=l;a.ua.Ua();a.b.setAttribute("aria-pressed",l)}
u.C=u.c.extend({g:function(a,c,d){this.F=a;c=u.i.B(da(a),c);this.s={};this.rc=c.poster;this.Ia=c.controls;c.customControlsOnMobile!==f&&(u.Ub||u.ab)?(a.controls=c.controls,this.Ia=l):a.controls=l;u.c.call(this,this,c,d);this.R("play",function(a){u.k(this.b,{type:"firstplay",target:this.b})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())});this.d("ended",this.Xc);this.d("play",this.Kb);this.d("firstplay",this.Yc);this.d("pause",this.Jb);this.d("progress",this.$c);this.d("durationchange",
this.Wc);this.d("error",this.Gb);this.d("fullscreenchange",this.Zc);u.va[this.O]=this;c.plugins&&u.i.ra(c.plugins,function(a,c){this[a](c)},this)}});t=u.C.prototype;t.f=u.options;t.D=function(){u.va[this.O]=h;this.F&&this.F.player&&(this.F.player=h);this.b&&this.b.player&&(this.b.player=h);clearInterval(this.Qa);this.xa();this.h&&this.h.D();u.c.prototype.D.call(this)};
function da(a){var c={sources:[],tracks:[]};u.i.B(c,u.xb(a));if(a.hasChildNodes()){var d,e,g,j;a=a.childNodes;g=0;for(j=a.length;g<j;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.xb(d)):"track"===e&&c.tracks.push(u.xb(d))}return c}
t.e=function(){var a=this.b=u.c.prototype.e.call(this,"div"),c=this.F;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var d,e,g,j,k;d=c.childNodes;e=d.length;for(k=[];e--;)g=d[e],j=g.nodeName.toLowerCase(),("source"===j||"track"===j)&&k.push(g);for(d=0;d<k.length;d++)c.removeChild(k[d])}c.id=c.id||"vjs_video_"+u.u++;a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.p("vjs-paused");this.width(this.f.width,f);this.height(this.f.height,
f);c.parentNode&&c.parentNode.insertBefore(a,c);u.zb(c,a);return a};
function H(a,c,d){a.h?(a.aa=l,a.h.D(),a.Eb&&(a.Eb=l,clearInterval(a.Qa)),a.Fb&&I(a),a.h=l):"Html5"!==c&&a.F&&(a.b.removeChild(a.F),a.F.player=h,a.F=h);a.ya=c;a.aa=l;var e=u.i.B({source:d,parentEl:a.b},a.f[c.toLowerCase()]);d&&(d.src==a.s.src&&0<a.s.currentTime&&(e.startTime=a.s.currentTime),a.s.src=d.src);a.h=new window.videojs[c](a,e);a.h.P(function(){this.a.Ta();if(!this.j.Mb){var a=this.a;a.Eb=f;a.Qa=setInterval(u.bind(a,function(){this.s.mb<this.buffered().end(0)?this.k("progress"):1==this.Ha()&&
(clearInterval(this.Qa),this.k("progress"))}),500);a.h.R("progress",function(){this.j.Mb=f;var a=this.a;a.Eb=l;clearInterval(a.Qa)})}this.j.Pb||(a=this.a,a.Fb=f,a.d("play",a.xc),a.d("pause",a.xa),a.h.R("timeupdate",function(){this.j.Pb=f;I(this.a)}))})}function I(a){a.Fb=l;a.xa();a.t("play",a.xc);a.t("pause",a.xa)}t.xc=function(){this.fc&&this.xa();this.fc=setInterval(u.bind(this,function(){this.k("timeupdate")}),250)};t.xa=function(){clearInterval(this.fc)};
t.Xc=function(){this.f.loop&&(this.currentTime(0),this.play())};t.Kb=function(){u.w(this.b,"vjs-paused");u.p(this.b,"vjs-playing")};t.Yc=function(){this.f.starttime&&this.currentTime(this.f.starttime)};t.Jb=function(){u.w(this.b,"vjs-playing");u.p(this.b,"vjs-paused")};t.$c=function(){1==this.Ha()&&this.k("loadedalldata")};t.Wc=function(){this.duration(J(this,"duration"))};t.Gb=function(a){u.log("Video Error",a)};t.Zc=function(){this.I?this.p("vjs-fullscreen"):this.w("vjs-fullscreen")};
function K(a,c,d){if(a.h&&!a.h.aa)a.h.P(function(){this[c](d)});else try{a.h[c](d)}catch(e){throw u.log(e),e;}}function J(a,c){if(a.h.aa)try{return a.h[c]()}catch(d){throw a.h[c]===b?u.log("Video.js: "+c+" method not defined for "+a.ya+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.ya+" playback technology element.",d),a.h.aa=l):u.log(d),d;}}t.play=function(){K(this,"play");return this};t.pause=function(){K(this,"pause");return this};
t.paused=function(){return J(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(this.s.zd=a,K(this,"setCurrentTime",a),this.Fb&&this.k("timeupdate"),this):this.s.currentTime=J(this,"currentTime")||0};t.duration=function(a){return a!==b?(this.s.duration=parseFloat(a),this):this.s.duration};t.buffered=function(){var a=J(this,"buffered"),c=this.s.mb=this.s.mb||0;a&&(0<a.length&&a.end(0)!==c)&&(c=a.end(0),this.s.mb=c);return u.tb(0,c)};
t.Ha=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.s.volume=a,K(this,"setVolume",a),u.gd(a),this;a=parseFloat(J(this,"volume"));return isNaN(a)?1:a};t.muted=function(a){return a!==b?(K(this,"setMuted",a),this):J(this,"muted")||l};t.Sa=function(){return J(this,"supportsFullScreen")||l};
t.wa=function(){var a=u.Ob.wa;this.I=f;a?(u.d(document,a.vb,u.bind(this,function(c){this.I=document[a.I];this.I===l&&u.t(document,a.vb,arguments.callee);this.k("fullscreenchange")})),this.b[a.tc]()):this.h.Sa()?K(this,"enterFullScreen"):(this.Sc=f,this.Nc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.ic)),document.documentElement.style.overflow="hidden",u.p(document.body,"vjs-full-window"),this.k("enterFullWindow"),this.k("fullscreenchange"));return this};
t.pb=function(){var a=u.Ob.wa;this.I=l;if(a)document[a.ob]();else this.h.Sa()?K(this,"exitFullScreen"):(L(this),this.k("fullscreenchange"));return this};t.ic=function(a){27===a.keyCode&&(this.I===f?this.pb():L(this))};function L(a){a.Sc=l;u.t(document,"keydown",a.ic);document.documentElement.style.overflow=a.Nc;u.w(document.body,"vjs-full-window");a.k("exitFullWindow")}
t.src=function(a){if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.f.techOrder;d<e.length;d++){var g=u.Z(e[d]),j=window.videojs[g];if(j.isSupported())for(var k=0,q=c;k<q.length;k++){var n=q[k];if(j.canPlaySource(n)){c={source:n,h:g};break a}}}c=l}c?(a=c.source,c=c.h,c==this.ya?this.src(a):H(this,c,a)):this.b.appendChild(u.e("p",{innerHTML:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'}))}else a instanceof
Object?window.videojs[this.ya].canPlaySource(a)?this.src(a.src):this.src([a]):(this.s.src=a,this.aa?(K(this,"src",a),"auto"==this.f.preload&&this.load(),this.f.autoplay&&this.play()):this.P(function(){this.src(a)}));return this};t.load=function(){K(this,"load");return this};t.currentSrc=function(){return J(this,"currentSrc")||this.s.src||""};t.Pa=function(a){return a!==b?(K(this,"setPreload",a),this.f.preload=a,this):J(this,"preload")};
t.autoplay=function(a){return a!==b?(K(this,"setAutoplay",a),this.f.autoplay=a,this):J(this,"autoplay")};t.loop=function(a){return a!==b?(K(this,"setLoop",a),this.f.loop=a,this):J(this,"loop")};t.poster=function(a){a!==b&&(this.rc=a);return this.rc};t.controls=function(a){a!==b&&this.Ia!==a&&(this.Ia=!!a,this.k("controlschange"));return this.Ia};t.error=function(){return J(this,"error")};var M,N,O;O=document.createElement("div");N={};
O.vd!==b?(N.tc="requestFullscreen",N.ob="exitFullscreen",N.vb="fullscreenchange",N.I="fullScreen"):(document.mozCancelFullScreen?(M="moz",N.I=M+"FullScreen"):(M="webkit",N.I=M+"IsFullScreen"),O[M+"RequestFullScreen"]&&(N.tc=M+"RequestFullScreen",N.ob=M+"CancelFullScreen"),N.vb=M+"fullscreenchange");document[N.ob]&&(u.Ob.wa=N);
u.da=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.controls()||this.disable();a.R("play",u.bind(this,function(){var a,c=u.bind(this,this.$),g=u.bind(this,this.ta);this.$();"ontouchstart"in window||(this.a.d("mouseover",c),this.a.d("mouseout",g),this.a.d("pause",u.bind(this,this.pc)),this.a.d("play",u.bind(this,this.Ua)));a=l;this.a.d("touchstart",function(){a=f});this.a.d("touchmove",function(){a=l});this.a.d("touchend",u.bind(this,function(c){var e;a&&(e=this.r().className.search("fade-in"),-1!==
e?this.ta():this.$());a=l;this.a.paused()||c.preventDefault()}))}))}});u.da.prototype.f={Ad:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.da.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.da.prototype.$=function(){u.c.prototype.$.call(this);this.a.k("controlsvisible")};u.da.prototype.ta=function(){u.c.prototype.ta.call(this);this.a.k("controlshidden")};
u.Xb=u.o.extend({g:function(a,c){u.o.call(this,a,c);a.d("play",u.bind(this,this.Kb));a.d("pause",u.bind(this,this.Jb))}});t=u.Xb.prototype;t.oa="Play";t.Q=function(){return"vjs-play-control "+u.o.prototype.Q.call(this)};t.n=function(){this.a.paused()?this.a.play():this.a.pause()};t.Kb=function(){u.w(this.b,"vjs-paused");u.p(this.b,"vjs-playing");this.b.children[0].children[0].innerHTML="Pause"};
t.Jb=function(){u.w(this.b,"vjs-playing");u.p(this.b,"vjs-paused");this.b.children[0].children[0].innerHTML="Play"};u.Ya=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.Ba))}});
u.Ya.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};
u.Ya.prototype.Ba=function(){var a=this.a.Nb?this.a.s.currentTime:this.a.currentTime();this.content.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.Ka(a,this.a.duration())};u.Za=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.Ba))}});
u.Za.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};u.Za.prototype.Ba=function(){this.a.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.Ka(this.a.duration()))};
u.ac=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});u.ac.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.gb=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("timeupdate",u.bind(this,this.Ba))}});
u.gb.prototype.e=function(){var a=u.c.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.content=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(u.e("div").appendChild(this.content));return a};
u.gb.prototype.Ba=function(){this.a.duration()&&this.a.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.Ka(this.a.duration()-this.a.currentTime()))};u.Da=u.o.extend({g:function(a,c){u.o.call(this,a,c)}});u.Da.prototype.oa="Fullscreen";u.Da.prototype.Q=function(){return"vjs-fullscreen-control "+u.o.prototype.Q.call(this)};
u.Da.prototype.n=function(){this.a.I?(this.a.pb(),this.b.children[0].children[0].innerHTML="Fullscreen"):(this.a.wa(),this.b.children[0].children[0].innerHTML="Non-Fullscreen")};u.fb=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});u.fb.prototype.f={children:{seekBar:{}}};u.fb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Yb=u.M.extend({g:function(a,c){u.M.call(this,a,c);a.d("timeupdate",u.bind(this,this.Aa));a.P(u.bind(this,this.Aa))}});
t=u.Yb.prototype;t.f={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.qc="timeupdate";t.e=function(){return u.M.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};t.Aa=function(){var a=this.a.Nb?this.a.s.currentTime:this.a.currentTime();this.b.setAttribute("aria-valuenow",u.round(100*this.yb(),2));this.b.setAttribute("aria-valuetext",u.Ka(a,this.a.duration()))};
t.yb=function(){return this.a.currentTime()/this.a.duration()};t.Oa=function(a){u.M.prototype.Oa.call(this,a);this.a.Nb=f;this.qd=!this.a.paused();this.a.pause()};t.Hb=function(a){a=E(this,a)*this.a.duration();a==this.a.duration()&&(a-=0.1);this.a.currentTime(a)};t.Ib=function(a){u.M.prototype.Ib.call(this,a);this.a.Nb=l;this.qd&&this.a.play()};t.wc=function(){this.a.currentTime(this.a.currentTime()+5)};t.vc=function(){this.a.currentTime(this.a.currentTime()-5)};
u.bb=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.bb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};u.bb.prototype.update=function(){this.b.style&&(this.b.style.width=u.round(100*this.a.Ha(),2)+"%")};u.Wb=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});
u.Wb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.hb=u.ga.extend();u.hb.prototype.defaultValue="00:00";u.hb.prototype.e=function(){return u.ga.prototype.e.call(this,"div",{className:"vjs-seek-handle"})};u.jb=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.h&&(a.h.j&&a.h.j.U===l)&&this.p("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.j&&a.h.j.U===l?this.p("vjs-hidden"):this.w("vjs-hidden")}))}});
u.jb.prototype.f={children:{volumeBar:{}}};u.jb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.ib=u.M.extend({g:function(a,c){u.M.call(this,a,c);a.d("volumechange",u.bind(this,this.Aa));a.P(u.bind(this,this.Aa));setTimeout(u.bind(this,this.update),0)}});t=u.ib.prototype;t.Aa=function(){this.b.setAttribute("aria-valuenow",u.round(100*this.a.volume(),2));this.b.setAttribute("aria-valuetext",u.round(100*this.a.volume(),2)+"%")};
t.f={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.qc="volumechange";t.e=function(){return u.M.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Hb=function(a){this.a.volume(E(this,a))};t.yb=function(){return this.a.muted()?0:this.a.volume()};t.wc=function(){this.a.volume(this.a.volume()+0.1)};t.vc=function(){this.a.volume(this.a.volume()-0.1)};u.bc=u.c.extend({g:function(a,c){u.c.call(this,a,c)}});
u.bc.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.kb=u.ga.extend();u.kb.prototype.defaultValue="00:00";u.kb.prototype.e=function(){return u.ga.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};
u.fa=u.o.extend({g:function(a,c){u.o.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.h&&(a.h.j&&a.h.j.U===l)&&this.p("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.j&&a.h.j.U===l?this.p("vjs-hidden"):this.w("vjs-hidden")}))}});u.fa.prototype.e=function(){return u.o.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.fa.prototype.n=function(){this.a.muted(this.a.muted()?l:f)};
u.fa.prototype.update=function(){var a=this.a.volume(),c=3;0===a||this.a.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.a.muted()?"Unmute"!=this.b.children[0].children[0].innerHTML&&(this.b.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.b.children[0].children[0].innerHTML&&(this.b.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.w(this.b,"vjs-vol-"+a);u.p(this.b,"vjs-vol-"+c)};
u.Fa=u.ea.extend({g:function(a,c){u.ea.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.h&&(a.h.j&&a.h.j.U===l)&&this.p("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.h.j&&a.h.j.U===l?this.p("vjs-hidden"):this.w("vjs-hidden")}));this.p("vjs-menu-button")}});u.Fa.prototype.Ja=function(){var a=new u.la(this.a,{Kc:"div"}),c=new u.ib(this.a,u.i.B({pd:f},this.f.Dd));a.Y(c);return a};u.Fa.prototype.n=function(){u.fa.prototype.n.call(this);u.ea.prototype.n.call(this)};
u.Fa.prototype.e=function(){return u.o.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.Fa.prototype.update=u.fa.prototype.update;u.eb=u.o.extend({g:function(a,c){u.o.call(this,a,c);(!a.poster()||!a.controls())&&this.v();a.d("play",u.bind(this,this.v))}});
u.eb.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1}),c=this.a.poster();c&&("backgroundSize"in a.style?a.style.backgroundImage='url("'+c+'")':a.appendChild(u.e("img",{src:c})));return a};u.eb.prototype.n=function(){this.a.play()};
u.Vb=u.c.extend({g:function(a,c){u.c.call(this,a,c);a.d("canplay",u.bind(this,this.v));a.d("canplaythrough",u.bind(this,this.v));a.d("playing",u.bind(this,this.v));a.d("seeked",u.bind(this,this.v));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.v));a.d("error",u.bind(this,this.show));a.d("waiting",u.bind(this,this.show))}});u.Vb.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};
u.Wa=u.o.extend({g:function(a,c){u.o.call(this,a,c);a.controls()||this.v();a.d("play",u.bind(this,this.v))}});u.Wa.prototype.e=function(){return u.o.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:"<span></span>","aria-label":"play video"})};u.Wa.prototype.n=function(){this.a.play()};u.q=u.c.extend({g:function(a,c,d){u.c.call(this,a,c,d)}});u.q.prototype.n=u.ab?m():function(){this.a.controls()&&(this.a.paused()?this.a.play():this.a.pause())};u.q.prototype.j={U:f,jc:l,Mb:l,Pb:l};
u.media={};u.media.Va="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
function ea(){var a=u.media.Va[i];return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API");}}for(var i=u.media.Va.length-1;0<=i;i--)u.q.prototype[u.media.Va[i]]=ea();
u.m=u.q.extend({g:function(a,c,d){this.j.U=u.m.Jc();this.j.Uc=!u.Ub;this.j.jc=f;u.q.call(this,a,c,d);(c=c.source)&&this.b.currentSrc==c.src?a.k("loadstart"):c&&(this.b.src=c.src);a.P(function(){this.F&&(this.f.autoplay&&this.paused())&&(delete this.F.poster,this.play())});this.d("click",this.n);for(a=u.m.$a.length-1;0<=a;a--)u.d(this.b,u.m.$a[a],u.bind(this.a,this.Pc));this.Ta()}});t=u.m.prototype;t.D=function(){u.q.prototype.D.call(this)};
t.e=function(){var a=this.a,c=a.F;if(!c||this.j.Uc===l)c?(c.player=h,a.F=h,a.r().removeChild(c),c=c.cloneNode(l)):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.zb(c,a.r());for(var d=["autoplay","preload","loop","muted"],e=d.length-1;0<=e;e--){var g=d[e];a.f[g]!==h&&(c[g]=a.f[g])}return c};t.Pc=function(a){this.k(a);a.stopPropagation()};t.play=function(){this.b.play()};t.pause=function(){this.b.pause()};t.paused=function(){return this.b.paused};t.currentTime=function(){return this.b.currentTime};
t.fd=function(a){try{this.b.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.b.duration||0};t.buffered=function(){return this.b.buffered};t.volume=function(){return this.b.volume};t.ld=function(a){this.b.volume=a};t.muted=function(){return this.b.muted};t.jd=function(a){this.b.muted=a};t.width=function(){return this.b.offsetWidth};t.height=function(){return this.b.offsetHeight};
t.Sa=function(){return"function"==typeof this.b.webkitEnterFullScreen&&(/Android/.test(u.G)||!/Chrome|Mac OS X 10.5/.test(u.G))?f:l};t.src=function(a){this.b.src=a};t.load=function(){this.b.load()};t.currentSrc=function(){return this.b.currentSrc};t.Pa=function(){return this.b.Pa};t.kd=function(a){this.b.Pa=a};t.autoplay=function(){return this.b.autoplay};t.ed=function(a){this.b.autoplay=a};t.loop=function(){return this.b.loop};t.hd=function(a){this.b.loop=a};t.error=function(){return this.b.error};
u.m.isSupported=function(){return!!u.ma.canPlayType};u.m.nb=function(a){try{return!!u.ma.canPlayType(a.type)}catch(c){return""}};u.m.Jc=function(){var a=u.ma.volume;u.ma.volume=a/2+0.1;return a!==u.ma.volume};u.m.$a="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
u.Ec&&(document.createElement("video").constructor.prototype.canPlayType=function(a){return a&&-1!=a.toLowerCase().indexOf("video/mp4")?"maybe":""});
u.l=u.q.extend({g:function(a,c,d){u.q.call(this,a,c,d);d=c.source;var e=c.parentEl,g=this.b=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";a=a.f;var k=u.i.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Pa,loop:a.loop,muted:a.muted},c.flashVars),q=u.i.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.i.B({id:j,name:j,"class":"vjs-tech"},c.attributes);d&&(k.src=encodeURIComponent(u.kc(d.src)));
u.zb(g,e);c.startTime&&this.P(function(){this.load();this.play();this.currentTime(c.startTime)});if(c.iFrameMode===f&&!u.Ac){var s=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(s,"load",u.bind(this,function(){var a,d=s.contentWindow;a=s.contentDocument?s.contentDocument:s.contentWindow.document;a.write(u.l.lc(c.swf,k,q,n));d.player=
this.a;d.ready=u.bind(this.a,function(c){c=a.getElementById(c);var d=this.h;d.b=c;u.d(c,"click",d.bind(d.n));u.l.qb(d)});d.events=u.bind(this.a,function(a,c){this&&"flash"===this.ya&&this.k(c)});d.errors=u.bind(this.a,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(s,g)}else u.l.Oc(c.swf,g,k,q,n)}});t=u.l.prototype;t.D=function(){u.q.prototype.D.call(this)};t.play=function(){this.b.vjs_play()};t.pause=function(){this.b.vjs_pause()};
t.src=function(a){a=u.kc(a);this.b.vjs_src(a);if(this.a.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.load=function(){this.b.vjs_load()};t.poster=function(){this.b.vjs_getProperty("poster")};t.buffered=function(){return u.tb(0,this.b.vjs_getProperty("buffered"))};t.Sa=r(l);var P=u.l.prototype,Q="preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),R="error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");
function fa(){var a=Q[S],c=a.charAt(0).toUpperCase()+a.slice(1);P["set"+c]=function(c){return this.b.vjs_setProperty(a,c)}}function T(a){P[a]=function(){return this.b.vjs_getProperty(a)}}var S;for(S=0;S<Q.length;S++)T(Q[S]),fa();for(S=0;S<R.length;S++)T(R[S]);u.l.isSupported=function(){return 10<=u.l.version()[0]};u.l.nb=function(a){if(a.type in u.l.Rc)return"maybe"};u.l.Rc={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};
u.l.onReady=function(a){a=u.r(a);var c=a.player||a.parentNode.player,d=c.h;a.player=c;d.b=a;d.d("click",d.n);u.l.qb(d)};u.l.qb=function(a){a.r().vjs_getProperty?a.Ta():setTimeout(function(){u.l.qb(a)},50)};u.l.onEvent=function(a,c){u.r(a).player.k(c)};u.l.onError=function(a,c){u.r(a).player.k("error");u.log("Flash Error",c,a)};
u.l.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};
u.l.Oc=function(a,c,d,e,g){a=u.l.lc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var j=d.childNodes[0];setTimeout(function(){j.style.display="block"},1E3)};
u.l.lc=function(a,c,d,e){var g="",j="",k="";c&&u.i.ra(c,function(a,c){g+=a+"="+c+"&amp;"});d=u.i.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.i.ra(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'});e=u.i.B({data:a,width:"100%",height:"100%"},e);u.i.ra(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"};
u.Fc=u.c.extend({g:function(a,c,d){u.c.call(this,a,c,d);if(!a.f.sources||0===a.f.sources.length){c=0;for(d=a.f.techOrder;c<d.length;c++){var e=u.Z(d[c]),g=window.videojs[e];if(g&&g.isSupported()){H(a,e);break}}}else a.src(a.f.sources)}});function U(a){a.za=a.za||[];return a.za}function V(a,c,d){for(var e=a.za,g=0,j=e.length,k,q;g<j;g++)k=e[g],k.id()===c?(k.show(),q=k):d&&(k.K()==d&&0<k.mode())&&k.disable();(c=q?q.K():d?d:l)&&a.k(c+"trackchange")}
u.V=u.c.extend({g:function(a,c){u.c.call(this,a,c);this.O=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.u++;this.uc=c.src;this.Lc=c["default"]||c.dflt;this.nd=c.title;this.yd=c.srclang;this.Tc=c.label;this.ha=[];this.cc=[];this.ia=this.ja=0;this.a.d("fullscreenchange",u.bind(this,this.Gc))}});t=u.V.prototype;t.K=p("A");t.src=p("uc");t.ub=p("Lc");t.title=p("nd");t.label=p("Tc");t.readyState=p("ja");t.mode=p("ia");t.Gc=function(){this.b.style.fontSize=this.a.I?140*(screen.width/this.a.width())+"%":""};
t.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){W(this);this.ia=2;u.c.prototype.show.call(this)};t.v=function(){W(this);this.ia=1;u.c.prototype.v.call(this)};t.disable=function(){2==this.ia&&this.v();this.a.t("timeupdate",u.bind(this,this.update,this.O));this.a.t("ended",u.bind(this,this.reset,this.O));this.reset();this.a.S.textTrackDisplay.removeChild(this);this.ia=0};
function W(a){0===a.ja&&a.load();0===a.ia&&(a.a.d("timeupdate",u.bind(a,a.update,a.O)),a.a.d("ended",u.bind(a,a.reset,a.O)),("captions"===a.A||"subtitles"===a.A)&&a.a.S.textTrackDisplay.Y(a))}t.load=function(){0===this.ja&&(this.ja=1,u.get(this.uc,u.bind(this,this.ad),u.bind(this,this.Gb)))};t.Gb=function(a){this.error=a;this.ja=3;this.k("error")};
t.ad=function(a){var c,d;a=a.split("\n");for(var e="",g=1,j=a.length;g<j;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.ha.length;c={id:c,index:this.ha.length};d=e.split(" --\x3e ");c.startTime=X(d[0]);c.sa=X(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.ha.push(c)}this.ja=2;this.k("loaded")};
function X(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}
t.update=function(){if(0<this.ha.length){var a=this.a.currentTime();if(this.Lb===b||a<this.Lb||this.La<=a){var c=this.ha,d=this.a.duration(),e=0,g=l,j=[],k,q,n,s;a>=this.La||this.La===b?s=this.wb!==b?this.wb:0:(g=f,s=this.Db!==b?this.Db:c.length-1);for(;;){n=c[s];if(n.sa<=a)e=Math.max(e,n.sa),n.Ga&&(n.Ga=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ga&&(n.Ga=l),!g)break}else g?(j.splice(0,0,n),q===b&&(q=s),k=s):(j.push(n),k===b&&(k=s),q=s),d=Math.min(d,n.sa),e=Math.max(e,n.startTime),
n.Ga=f;if(g)if(0===s)break;else s--;else if(s===c.length-1)break;else s++}this.cc=j;this.La=d;this.Lb=e;this.wb=k;this.Db=q;a=this.cc;c="";d=0;for(e=a.length;d<e;d++)c+='<span class="vjs-tt-cue">'+a[d].text+"</span>";this.b.innerHTML=c;this.k("cuechange")}}};t.reset=function(){this.La=0;this.Lb=this.a.duration();this.Db=this.wb=0};u.Rb=u.V.extend();u.Rb.prototype.A="captions";u.Zb=u.V.extend();u.Zb.prototype.A="subtitles";u.Tb=u.V.extend();u.Tb.prototype.A="chapters";
u.$b=u.c.extend({g:function(a,c,d){u.c.call(this,a,c,d);if(a.f.tracks&&0<a.f.tracks.length){c=this.a;a=a.f.tracks;var e;for(d=0;d<a.length;d++){e=a[d];var g=c,j=e.kind,k=e.label,q=e.language,n=e;e=g.za=g.za||[];n=n||{};n.kind=j;n.label=k;n.language=q;j=u.Z(j||"subtitles");g=new window.videojs[j+"Track"](g,n);e.push(g)}}}});u.$b.prototype.e=function(){return u.c.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};
u.X=u.L.extend({g:function(a,c){var d=this.ca=c.track;c.label=d.label();c.selected=d.ub();u.L.call(this,a,c);this.a.d(d.K()+"trackchange",u.bind(this,this.update))}});u.X.prototype.n=function(){u.L.prototype.n.call(this);V(this.a,this.ca.O,this.ca.K())};u.X.prototype.update=function(){this.selected(2==this.ca.mode())};u.cb=u.X.extend({g:function(a,c){c.track={K:function(){return c.kind},bd:a,label:function(){return c.kind+" off"},ub:r(l),mode:r(l)};u.X.call(this,a,c);this.selected(f)}});
u.cb.prototype.n=function(){u.X.prototype.n.call(this);V(this.a,this.ca.O,this.ca.K())};u.cb.prototype.update=function(){for(var a=U(this.a),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.K()==this.ca.K()&&2==e.mode()&&(g=l);this.selected(g)};u.W=u.ea.extend({g:function(a,c){u.ea.call(this,a,c);1>=this.J.length&&this.v()}});u.W.prototype.sb=function(){var a=[],c;a.push(new u.cb(this.a,{kind:this.A}));for(var d=0;d<U(this.a).length;d++)c=U(this.a)[d],c.K()===this.A&&a.push(new u.X(this.a,{track:c}));return a};
u.Ca=u.W.extend({g:function(a,c,d){u.W.call(this,a,c,d);this.b.setAttribute("aria-label","Captions Menu")}});u.Ca.prototype.A="captions";u.Ca.prototype.oa="Captions";u.Ca.prototype.className="vjs-captions-button";u.Ea=u.W.extend({g:function(a,c,d){u.W.call(this,a,c,d);this.b.setAttribute("aria-label","Subtitles Menu")}});u.Ea.prototype.A="subtitles";u.Ea.prototype.oa="Subtitles";u.Ea.prototype.className="vjs-subtitles-button";
u.Sb=u.W.extend({g:function(a,c,d){u.W.call(this,a,c,d);this.b.setAttribute("aria-label","Chapters Menu")}});t=u.Sb.prototype;t.A="chapters";t.oa="Chapters";t.className="vjs-chapters-button";t.sb=function(){for(var a=[],c,d=0;d<U(this.a).length;d++)c=U(this.a)[d],c.K()===this.A&&a.push(new u.X(this.a,{track:c}));return a};
t.Ja=function(){for(var a=U(this.a),c=0,d=a.length,e,g,j=this.J=[];c<d;c++)if(e=a[c],e.K()==this.A&&e.ub()){if(2>e.readyState()){this.wd=e;e.d("loaded",u.bind(this,this.Ja));return}g=e;break}a=this.ua=new u.la(this.a);a.b.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),md:-1}));if(g){e=g.ha;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.Xa(this.a,{track:g,cue:k}),j.push(k),a.Y(k)}0<this.J.length&&this.show();return a};
u.Xa=u.L.extend({g:function(a,c){var d=this.ca=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.sa;u.L.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.Xa.prototype.n=function(){u.L.prototype.n.call(this);this.a.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Xa.prototype.update=function(){var a=this.cue,c=this.a.currentTime();this.selected(a.startTime<=c&&c<a.sa)};
u.i.B(u.da.prototype.f.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Y=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,q,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(q=d(n,k),q!==b?n[k]=q:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Y.lastIndex=0;Y.test(a)&&(a=a.replace(Y,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}
u.dc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),v(c,a)));else{u.lb();break}else u.rd||u.lb()};u.lb=function(){setTimeout(u.dc,1)};u.R(window,"load",function(){u.rd=f});u.lb();u.cd=function(a,c){u.C.prototype[a]=c};var Z=this;Z.sd=f;function $(a,c){var d=a.split("."),e=Z;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.va);$("videojs.cache",u.pa);$("videojs.Component",u.c);u.c.prototype.dispose=u.c.prototype.D;u.c.prototype.createEl=u.c.prototype.e;u.c.prototype.el=u.c.prototype.r;u.c.prototype.addChild=u.c.prototype.Y;u.c.prototype.children=u.c.prototype.children;u.c.prototype.on=u.c.prototype.d;u.c.prototype.off=u.c.prototype.t;u.c.prototype.one=u.c.prototype.R;u.c.prototype.trigger=u.c.prototype.k;u.c.prototype.triggerReady=u.c.prototype.Ta;
u.c.prototype.show=u.c.prototype.show;u.c.prototype.hide=u.c.prototype.v;u.c.prototype.width=u.c.prototype.width;u.c.prototype.height=u.c.prototype.height;u.c.prototype.dimensions=u.c.prototype.Mc;u.c.prototype.ready=u.c.prototype.P;u.c.prototype.fadeIn=u.c.prototype.$;u.c.prototype.fadeOut=u.c.prototype.ta;$("videojs.Player",u.C);u.C.prototype.dispose=u.C.prototype.D;u.C.prototype.requestFullScreen=u.C.prototype.wa;u.C.prototype.cancelFullScreen=u.C.prototype.pb;u.C.prototype.bufferedPercent=u.C.prototype.Ha;
$("videojs.MediaLoader",u.Fc);$("videojs.TextTrackDisplay",u.$b);$("videojs.ControlBar",u.da);$("videojs.Button",u.o);$("videojs.PlayToggle",u.Xb);$("videojs.FullscreenToggle",u.Da);$("videojs.BigPlayButton",u.Wa);$("videojs.LoadingSpinner",u.Vb);$("videojs.CurrentTimeDisplay",u.Ya);$("videojs.DurationDisplay",u.Za);$("videojs.TimeDivider",u.ac);$("videojs.RemainingTimeDisplay",u.gb);$("videojs.Slider",u.M);$("videojs.ProgressControl",u.fb);$("videojs.SeekBar",u.Yb);$("videojs.LoadProgressBar",u.bb);
$("videojs.PlayProgressBar",u.Wb);$("videojs.SeekHandle",u.hb);$("videojs.VolumeControl",u.jb);$("videojs.VolumeBar",u.ib);$("videojs.VolumeLevel",u.bc);$("videojs.VolumeHandle",u.kb);$("videojs.MuteToggle",u.fa);$("videojs.PosterImage",u.eb);$("videojs.Menu",u.la);$("videojs.MenuItem",u.L);$("videojs.SubtitlesButton",u.Ea);$("videojs.CaptionsButton",u.Ca);$("videojs.ChaptersButton",u.Sb);$("videojs.MediaTechController",u.q);u.q.prototype.features=u.q.prototype.j;u.q.prototype.j.volumeControl=u.q.prototype.j.U;
u.q.prototype.j.fullscreenResize=u.q.prototype.j.jc;u.q.prototype.j.progressEvents=u.q.prototype.j.Mb;u.q.prototype.j.timeupdateEvents=u.q.prototype.j.Pb;$("videojs.Html5",u.m);u.m.Events=u.m.$a;u.m.isSupported=u.m.isSupported;u.m.canPlaySource=u.m.nb;u.m.prototype.setCurrentTime=u.m.prototype.fd;u.m.prototype.setVolume=u.m.prototype.ld;u.m.prototype.setMuted=u.m.prototype.jd;u.m.prototype.setPreload=u.m.prototype.kd;u.m.prototype.setAutoplay=u.m.prototype.ed;u.m.prototype.setLoop=u.m.prototype.hd;
$("videojs.Flash",u.l);u.l.isSupported=u.l.isSupported;u.l.canPlaySource=u.l.nb;u.l.onReady=u.l.onReady;$("videojs.TextTrack",u.V);u.V.prototype.label=u.V.prototype.label;$("videojs.CaptionsTrack",u.Rb);$("videojs.SubtitlesTrack",u.Zb);$("videojs.ChaptersTrack",u.Tb);$("videojs.autoSetup",u.dc);$("videojs.plugin",u.cd);$("videojs.createTimeRange",u.tb);})();//@ sourceMappingURL=video.js.map
(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
        if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

        // New school wheel delta (wheel event)
        if ( orgEvent.deltaY ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( orgEvent.deltaX ) {
            deltaX = orgEvent.deltaX;
            delta  = deltaX * -1;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta  = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));var notorioussvg = {
	currentScroll: 0,
	scrolling: false,
	lastScroll: 0,
	windowWidth: $(window).width(),
	windowHeight: $(window).height(),
	device: false,
	currentlyScrolling: false,
	changingSlide: false,
	url: 'http://gotham-nyc.co',
	swiped: 0,
	animating: false,
	totalFaces: $('.left .face').length,
	onFace: 0,
	verbs: ['powerful', 'safe', 'explosive', 'fierce', 'universal', 'serendipitous', 'home', 'inspiring', 'overwhelming', 'unique', 'beautiful'],
	videos: function(){
		var metropolis = _V_("metropolis");
		
		metropolis.width(notorioussvg.windowWidth);
		metropolis.height(notorioussvg.windowHeight);
	},
	startVideo: function(next_element){
		if (next_element.find('video').length){
			if (next_element.find('article').length && next_element.hasClass('scrolling-section')){
				next_element.find('article').css('position', 'relative');
			}
			var video_id = next_element.find('video').attr('id');
			_V_(video_id).play();
		}
	},
	resize: function(){
		notorioussvg.windowHeight = $(window).height();
		notorioussvg.windowWidth = $(window).width();
		
		$('.scrolling-section article').css('margin-top', notorioussvg.windowHeight);
		$('.facts-holder').css('margin-bottom', notorioussvg.windowHeight);
		$('.face').css('height', notorioussvg.windowHeight);
		
		$('.col.left').css('top', -notorioussvg.windowHeight*(notorioussvg.totalFaces-1));
		$('.col.right').css('top', 0);
		$('.col').height(notorioussvg.windowHeight*notorioussvg.totalFaces);

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			notorioussvg.device = true;
			// alert if phone
			if (/Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				alert('This site is best experienced on a desktop, or tablet in landscape. Haters gonna hate.');
			}
		} else {
			notorioussvg.device = false;
		}	
		
		notorioussvg.videos();
	},
	scrollTo: function(elHref) {
		notorioussvg.currentlyScrolling = true;

		$('html, body').animate({ scrollTop: offset}, 400, function(){
			notorioussvg.currentlyScrolling = false;
			notorioussvg.currentScroll = offset;
		});
	},
	goTo: function(sectionName){
		if ($("#container").find("[data-section='" + sectionName + "']").length){
			notorioussvg.changingSlide = true;
			var $currentactive = $('.content.active');
			if ($currentactive.data('section') !== sectionName){
				var $gotosection = $("#container").find("[data-section='" + sectionName + "']");
				notorioussvg.changeSlide($gotosection, $currentactive, false);
			} else {
				notorioussvg.changingSlide = false;
			}
		}
	},
	changeSlide: function(nextElement, currentElement, isPrev){
		var delay_time = 500;
		if(isPrev){
			delay_time = 300;
		}
		nextElement.addClass('active');
		notorioussvg.startVideo(nextElement);
		setTimeout(function(){
			currentElement.removeClass('active');
			notorioussvg.changingSlide = false;
			window.location.hash = nextElement.data('section');
		}, delay_time);
	},
	moveStrip: function(direction) {
        if (!notorioussvg.animating) {
            notorioussvg.animating = true;
            if (direction) {
                if (direction == "down" && notorioussvg.onFace < notorioussvg.totalFaces - 1) {
					$('#verb').fadeOut(250, function(){
						$('#verb').removeClass().addClass('verb-'+(notorioussvg.onFace+1));
						$('#verb').html(notorioussvg.verbs[(notorioussvg.onFace+1)]);
						$('#verb').fadeIn(250);
					});
                    $('.col.left').animate({top: -notorioussvg.windowHeight*(notorioussvg.totalFaces-notorioussvg.onFace -2) }, 500, function(){
                    });
                    $('.col.right').animate({top: -notorioussvg.windowHeight*(notorioussvg.onFace+1) }, 500, function(){
						notorioussvg.onFace++;
                    });
					$('.face-pairing .arrow').removeClass('show');
                } else if (direction == "up" && notorioussvg.onFace!=0){
					$('#verb').fadeOut(250, function(){
						$('#verb').removeClass().addClass('verb-'+(notorioussvg.onFace-1));
						$('#verb').html(notorioussvg.verbs[(notorioussvg.onFace-1)]);
						$('#verb').fadeIn(250);
					});
					if (direction == "down" && notorioussvg.onFace == notorioussvg.totalFaces - 2){
	                	$('.face-pairing .arrow').addClass('show');
	                }
                    $('.col.left').animate({top: -notorioussvg.windowHeight*(notorioussvg.totalFaces-notorioussvg.onFace) }, 500, function(){
                    });
                    $('.col.right').animate({top: -notorioussvg.windowHeight*(notorioussvg.onFace-1) }, 500, function(){
						notorioussvg.onFace--;
                    });
					$('.face-pairing .arrow').removeClass('show');
                }
				
				setTimeout(function(){
					notorioussvg.animating = false;
				}, 2000);
            }
        }
    },
	mouseWheel: function(change){
		if (Math.abs(change) >= 0.6) {
			if (change > 0) {
				notorioussvg.moveStrip("up");
			} else {
				console.log('down');
				notorioussvg.moveStrip("down");
			}
		}
	},
	onScroll: function(scrollY) {
		var change = scrollY - this.lastScroll;
		var difference = Math.abs(change);

		if (change > 0 && this.currentScroll > 0){
			$('header').addClass('scroll-hide');
		} else {
			$('header').removeClass('scroll-hide');
		}
		
		this.currentScroll = scrollY;
		this.lastScroll = scrollY;
	},
	init: function() {
		notorioussvg.resize();

		// Bind window events
		$(window).on("scroll", function(e) {
			notorioussvg.onScroll($(this).scrollTop());
		}).on("resize", function() {
			notorioussvg.resize();
		}).on("mousewheel", function(e, delta, deltaX, deltaY){
			if ($('.content.face-pairing').hasClass('active')){
				notorioussvg.mouseWheel(delta);
				e.preventDefault();
			}
		});
		
		// Initialize tap or click calls
		var oncall;
		if (notorioussvg.device){
			oncall = 'touchstart';
		} else {
			oncall = 'click';	
		}
		
		/* check hash */
		if (window.location.hash !== "" && window.location.hash !== '#intro') {
			var hash = window.location.hash.substring(1);
			notorioussvg.goTo(hash);
		}

		/* menu events */
		$('.menu-toggle').bind(oncall, function(e){
			e.preventDefault();
			if ($('nav.dropdown').hasClass('open')){
				$('nav.dropdown').removeClass('open');
			} else {
				$('nav.dropdown').addClass('open');
			}
		});
		
		$('.menu-item').bind(oncall, function(e){
			notorioussvg.goTo($(this).attr('href').substring(1));
			$('nav.dropdown').removeClass('open');
		});
		
		/*  menu tap off event */
		$('body').bind(oncall, function(e){
			var $target = $(e.target);
			if ($target.hasClass('menu-toggle') || $target.parents().hasClass('menu-toggle') || $target.hasClass('dropdown') || $target.parents().hasClass('dropdown')){
				return;
			} else {
				$('nav.dropdown').removeClass('open');
			}
		});

		/* arrow next section events */
		$('.arrow').bind(oncall, function(e){
			e.preventDefault();
			if(!notorioussvg.changingSlide){
				notorioussvg.changingSlide = true;
				$currentactive = $('.content.active');
				
				if ($currentactive.find('video').length){
					var video_id = $currentactive.find('video').attr('id');
					_V_(video_id).pause();
					
					if ($currentactive.hasClass('scrolling-section')){
						$currentactive.find('article').css('position','absolute')
					}
				}
				
				if ($(this).hasClass('arrow-right')){
					if ($('.content.active').next('.content').length){
						notorioussvg.changeSlide($currentactive.next(), $currentactive, false);
					} else {
						notorioussvg.changeSlide($('.content').first(), $currentactive, false);
					}
				} else if ($(this).hasClass('arrow-left')) {
					if ($('.content.active').prev('.content').length){
						notorioussvg.changeSlide($('.content.active').prev(), $currentactive, true);
					} else {
						notorioussvg.changeSlide($('.content').last(), $currentactive, true);
					}
				}
			}
		});
		
		/* right and left keyboard keys */
		$(document).keyup(function(e) {
			if (e.keyCode == 37){ // left
				$('.arrow-left').trigger('click');
			} else if (e.keyCode == 39){ // right
				$('.arrow-right').trigger('click');
			}
		});
		
		/* tweet button */
		$('.tweet').bind(oncall, function(){
			window.open( 'https://twitter.com/intent/tweet?url='+notorioussvg.url+'&via=barrelny&text='+encodeURIComponent($('.shout').val())+'&hashtags=gothamis,nycis,barrelny', '_blank');
		});
		
		/* flash backups for videos */
		videojs.options.flash.swf = "js/lib/video-js.swf";
	}
};

$(function(){
	notorioussvg.init();
});

