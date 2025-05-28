/*! For license information please see main.9271dd76.js.LICENSE.txt */
(()=>{var e={9002:e=>{var t=.1,n="function"===typeof Float32Array;function i(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function a(e){return 3*e}function s(e,t,n){return((i(t,n)*e+r(t,n))*e+a(t))*e}function o(e,t,n){return 3*i(t,n)*e*e+2*r(t,n)*e+a(t)}function l(e){return e}e.exports=function(e,i,r,a){if(!(0<=e&&e<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===i&&r===a)return l;for(var c=n?new Float32Array(11):new Array(11),d=0;d<11;++d)c[d]=s(d*t,e,r);function u(n){for(var i=0,a=1;10!==a&&c[a]<=n;++a)i+=t;--a;var l=i+(n-c[a])/(c[a+1]-c[a])*t,d=o(l,e,r);return d>=.001?function(e,t,n,i){for(var r=0;r<4;++r){var a=o(t,n,i);if(0===a)return t;t-=(s(t,n,i)-e)/a}return t}(n,l,e,r):0===d?l:function(e,t,n,i,r){var a,o,l=0;do{(a=s(o=t+(n-t)/2,i,r)-e)>0?n=o:t=o}while(Math.abs(a)>1e-7&&++l<10);return o}(n,i,i+t,e,r)}return function(e){return 0===e?0:1===e?1:s(u(e),i,a)}}},381:(e,t,n)=>{var i="Expected a function",r=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,h="object"==typeof self&&self&&self.Object===Object&&self,p=u||h||Function("return this")(),f=Object.prototype.toString,m=Math.max,g=Math.min,x=function(){return p.Date.now()};function v(e,t,n){var r,a,s,o,l,c,d=0,u=!1,h=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function f(t){var n=r,i=a;return r=a=void 0,d=t,o=e.apply(i,n)}function v(e){var n=e-c;return void 0===c||n>=t||n<0||h&&e-d>=s}function b(){var e=x();if(v(e))return j(e);l=setTimeout(b,function(e){var n=t-(e-c);return h?g(n,s-(e-d)):n}(e))}function j(e){return l=void 0,p&&r?f(e):(r=a=void 0,o)}function A(){var e=x(),n=v(e);if(r=arguments,a=this,c=e,n){if(void 0===l)return function(e){return d=e,l=setTimeout(b,t),u?f(e):o}(c);if(h)return l=setTimeout(b,t),f(c)}return void 0===l&&(l=setTimeout(b,t)),o}return t=w(t)||0,y(n)&&(u=!!n.leading,s=(h="maxWait"in n)?m(w(n.maxWait)||0,t):s,p="trailing"in n?!!n.trailing:p),A.cancel=function(){void 0!==l&&clearTimeout(l),d=0,r=c=a=l=void 0},A.flush=function(){return void 0===l?o:j(x())},A}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==a}(e))return r;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=l.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):o.test(e)?r:+e}e.exports=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),v(e,t,{leading:r,maxWait:t,trailing:a})}},1497:(e,t,n)=>{"use strict";var i=n(3218);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,s){if(s!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2730:(e,t,n)=>{"use strict";var i=n(5043),r=n(8853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(o[e]=t,e=0;e<t.length;e++)s.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},f={};function m(e,t,n,i,r,a,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,i){var r=g.hasOwnProperty(t)?g[t]:null;(null!==r?0!==r.type:i||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,i){if(null===t||"undefined"===typeof t||function(e,t,n,i){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!i&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,i))return!0;if(i)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,i)&&(n=null),i||null===r?function(e){return!!u.call(f,e)||!u.call(p,e)&&(h.test(e)?f[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,i=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),j=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var D=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var _=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=_&&e[_]||e["@@iterator"])?e:null}var O,N=Object.assign;function R(e){if(void 0===O)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var L=!1;function F(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&"string"===typeof c.stack){for(var r=c.stack.split("\n"),a=i.stack.split("\n"),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(1!==s||1!==o)do{if(s--,0>--o||r[s]!==a[o]){var l="\n"+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=o);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function U(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case A:return"Fragment";case j:return"Portal";case k:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case B:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return V(e(t))}catch(n){}}return null}function Y(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function H(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){i=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(e){i=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=W(e)?e.checked?"true":"false":e.value),(e=i)!==n&&(t.setValue(e),!0)}function $(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,i=null!=t.checked?t.checked:t.defaultChecked;n=Q(null!=t.value?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){q(e,t);var n=Q(t.value),i=t.type;if(null!=n)"number"===i?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===i||"reset"===i)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,Q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!("submit"!==i&&"reset"!==i||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&$(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Q(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(i&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Q(n)}}function ae(e,t){var n=Q(t.value),i=Q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=i&&(e.defaultValue=""+i)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function oe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?oe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,i){MSApp.execUnsafeLocalFunction((function(){return de(e,t)}))}:de);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var i=0===n.indexOf("--"),r=me(n,t[n],i);"float"===n&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}Object.keys(pe).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var xe=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var je=null,Ae=null,Se=null;function ke(e){if(e=yr(e)){if("function"!==typeof je)throw Error(a(280));var t=e.stateNode;t&&(t=br(t),je(e.stateNode,e.type,t))}}function Ee(e){Ae?Se?Se.push(e):Se=[e]:Ae=e}function Ce(){if(Ae){var e=Ae,t=Se;if(Se=Ae=null,ke(e),t)for(e=0;e<t.length;e++)ke(t[e])}}function Te(e,t){return e(t)}function Pe(){}var Ie=!1;function Be(e,t,n){if(Ie)return e(t,n);Ie=!0;try{return Te(e,t,n)}finally{Ie=!1,(null!==Ae||null!==Se)&&(Pe(),Ce())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var i=br(n);if(null===i)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var De=!1;if(d)try{var _e={};Object.defineProperty(_e,"passive",{get:function(){De=!0}}),window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch(de){De=!1}function Me(e,t,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Oe=!1,Ne=null,Re=!1,Le=null,Fe={onError:function(e){Oe=!0,Ne=e}};function Ue(e,t,n,i,r,a,s,o,l){Oe=!1,Ne=null,Me.apply(Fe,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ye(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Qe(e){if(Ve(e)!==e)throw Error(a(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(null===r)break;var s=r.alternate;if(null===s){if(null!==(i=r.return)){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Qe(r),e;if(s===i)return Qe(r),t;s=s.sibling}throw Error(a(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(a(189))}}if(n.alternate!==i)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?He(e):null}function He(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=He(e);if(null!==t)return t;e=e.sibling}return null}var Ge=r.unstable_scheduleCallback,$e=r.unstable_cancelCallback,Xe=r.unstable_shouldYield,Ke=r.unstable_requestPaint,qe=r.unstable_now,Je=r.unstable_getCurrentPriorityLevel,Ze=r.unstable_ImmediatePriority,et=r.unstable_UserBlockingPriority,tt=r.unstable_NormalPriority,nt=r.unstable_LowPriority,it=r.unstable_IdlePriority,rt=null,at=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ot(e)/lt|0)|0},ot=Math.log,lt=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,s=268435455&n;if(0!==s){var o=s&~r;0!==o?i=ut(o):0!==(a&=s)&&(i=ut(a))}else 0!==(s=n&~r)?i=ut(s):0!==a&&(i=ut(a));if(0===i)return 0;if(0!==t&&t!==i&&0===(t&r)&&((r=i&-i)>=(a=t&-t)||16===r&&0!==(4194240&a)))return t;if(0!==(4&i)&&(i|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=i;0<t;)r=1<<(n=31-st(t)),i|=e[n],t&=~r;return i}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-st(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var yt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var bt,jt,At,St,kt,Et=!1,Ct=[],Tt=null,Pt=null,It=null,Bt=new Map,zt=new Map,Dt=[],_t="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Bt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Ot(e,t,n,i,r,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},null!==t&&(null!==(t=yr(t))&&jt(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function Nt(e){var t=vr(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ye(n)))return e.blockedOn=t,void kt(e.priority,(function(){At(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Rt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yr(n))&&jt(t),e.blockedOn=n,!1;var i=new(n=e.nativeEvent).constructor(n.type,n);we=i,n.target.dispatchEvent(i),we=null,t.shift()}return!0}function Lt(e,t,n){Rt(e)&&n.delete(t)}function Ft(){Et=!1,null!==Tt&&Rt(Tt)&&(Tt=null),null!==Pt&&Rt(Pt)&&(Pt=null),null!==It&&Rt(It)&&(It=null),Bt.forEach(Lt),zt.forEach(Lt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ft)))}function Vt(e){function t(t){return Ut(t,e)}if(0<Ct.length){Ut(Ct[0],e);for(var n=1;n<Ct.length;n++){var i=Ct[n];i.blockedOn===e&&(i.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==Pt&&Ut(Pt,e),null!==It&&Ut(It,e),Bt.forEach(t),zt.forEach(t),n=0;n<Dt.length;n++)(i=Dt[n]).blockedOn===e&&(i.blockedOn=null);for(;0<Dt.length&&null===(n=Dt[0]).blockedOn;)Nt(n),null===n.blockedOn&&Dt.shift()}var Yt=w.ReactCurrentBatchConfig,Qt=!0;function Wt(e,t,n,i){var r=yt,a=Yt.transition;Yt.transition=null;try{yt=1,Gt(e,t,n,i)}finally{yt=r,Yt.transition=a}}function Ht(e,t,n,i){var r=yt,a=Yt.transition;Yt.transition=null;try{yt=4,Gt(e,t,n,i)}finally{yt=r,Yt.transition=a}}function Gt(e,t,n,i){if(Qt){var r=Xt(e,t,n,i);if(null===r)Qi(e,t,i,$t,n),Mt(e,i);else if(function(e,t,n,i,r){switch(t){case"focusin":return Tt=Ot(Tt,e,t,n,i,r),!0;case"dragenter":return Pt=Ot(Pt,e,t,n,i,r),!0;case"mouseover":return It=Ot(It,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Bt.set(a,Ot(Bt.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,zt.set(a,Ot(zt.get(a)||null,e,t,n,i,r)),!0}return!1}(r,e,t,n,i))i.stopPropagation();else if(Mt(e,i),4&t&&-1<_t.indexOf(e)){for(;null!==r;){var a=yr(r);if(null!==a&&bt(a),null===(a=Xt(e,t,n,i))&&Qi(e,t,i,$t,n),a===r)break;r=a}null!==r&&i.stopPropagation()}else Qi(e,t,i,null,n)}}var $t=null;function Xt(e,t,n,i){if($t=null,null!==(e=vr(e=be(i))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ye(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $t=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,i=n.length,r="value"in qt?qt.value:qt.textContent,a=r.length;for(e=0;e<i&&n[e]===r[e];e++);var s=i-e;for(t=1;t<=s&&n[i-t]===r[a-t];t++);return Zt=r.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,i,r,a){for(var s in this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var sn,on,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=an(cn),un=N({},cn,{view:0,detail:0}),hn=an(un),pn=N({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(sn=e.screenX-ln.screenX,on=e.screenY-ln.screenY):on=sn=0,ln=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:on}}),fn=an(pn),mn=an(N({},pn,{dataTransfer:0})),gn=an(N({},un,{relatedTarget:0})),xn=an(N({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=N({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),wn=an(N({},cn,{data:0})),bn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},An={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=An[e])&&!!t[e]}function kn(){return Sn}var En=N({},un,{key:function(e){if(e.key){var t=bn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?jn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=an(En),Tn=an(N({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(N({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kn})),In=an(N({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=N({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=an(Bn),Dn=[9,13,27,32],_n=d&&"CompositionEvent"in window,Mn=null;d&&"documentMode"in document&&(Mn=document.documentMode);var On=d&&"TextEvent"in window&&!Mn,Nn=d&&(!_n||Mn&&8<Mn&&11>=Mn),Rn=String.fromCharCode(32),Ln=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Dn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Yn[e.type]:"textarea"===t}function Wn(e,t,n,i){Ee(i),0<(t=Hi(t,"onChange")).length&&(n=new dn("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Hn=null,Gn=null;function $n(e){Ri(e,0)}function Xn(e){if(G(wr(e)))return e}function Kn(e,t){if("change"===e)return t}var qn=!1;if(d){var Jn;if(d){var Zn="oninput"in document;if(!Zn){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),Zn="function"===typeof ei.oninput}Jn=Zn}else Jn=!1;qn=Jn&&(!document.documentMode||9<document.documentMode)}function ti(){Hn&&(Hn.detachEvent("onpropertychange",ni),Gn=Hn=null)}function ni(e){if("value"===e.propertyName&&Xn(Gn)){var t=[];Wn(t,Gn,e,be(e)),Be($n,t)}}function ii(e,t,n){"focusin"===e?(ti(),Gn=n,(Hn=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ri(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(Gn)}function ai(e,t){if("click"===e)return Xn(t)}function si(e,t){if("input"===e||"change"===e)return Xn(t)}var oi="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function li(e,t){if(oi(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!u.call(t,r)||!oi(e[r],t[r]))return!1}return!0}function ci(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function di(e,t){var n,i=ci(e);for(e=0;i;){if(3===i.nodeType){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ci(i)}}function ui(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ui(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hi(){for(var e=window,t=$();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(i){n=!1}if(!n)break;t=$((e=t.contentWindow).document)}return t}function pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fi(e){var t=hi(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ui(n.ownerDocument.documentElement,n)){if(null!==i&&pi(n))if(t=i.start,void 0===(e=i.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=void 0===i.end?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=di(n,a);var s=di(n,i);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mi=d&&"documentMode"in document&&11>=document.documentMode,gi=null,xi=null,vi=null,yi=!1;function wi(e,t,n){var i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yi||null==gi||gi!==$(i)||("selectionStart"in(i=gi)&&pi(i)?i={start:i.selectionStart,end:i.selectionEnd}:i={anchorNode:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset},vi&&li(vi,i)||(vi=i,0<(i=Hi(xi,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gi)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ji={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},Ai={},Si={};function ki(e){if(Ai[e])return Ai[e];if(!ji[e])return e;var t,n=ji[e];for(t in n)if(n.hasOwnProperty(t)&&t in Si)return Ai[e]=n[t];return e}d&&(Si=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);var Ei=ki("animationend"),Ci=ki("animationiteration"),Ti=ki("animationstart"),Pi=ki("transitionend"),Ii=new Map,Bi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zi(e,t){Ii.set(e,t),l(t,[e])}for(var Di=0;Di<Bi.length;Di++){var _i=Bi[Di];zi(_i.toLowerCase(),"on"+(_i[0].toUpperCase()+_i.slice(1)))}zi(Ei,"onAnimationEnd"),zi(Ci,"onAnimationIteration"),zi(Ti,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(Pi,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function Ni(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,i,r,s,o,l,c){if(Ue.apply(this,arguments),Oe){if(!Oe)throw Error(a(198));var d=Ne;Oe=!1,Ne=null,Re||(Re=!0,Le=d)}}(i,t,void 0,e),e.currentTarget=null}function Ri(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Ni(r,o,c),a=l}else for(s=0;s<i.length;s++){if(l=(o=i[s]).instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Ni(r,o,c),a=l}}}if(Re)throw e=Le,Re=!1,Le=null,e}function Li(e,t){var n=t[mr];void 0===n&&(n=t[mr]=new Set);var i=e+"__bubble";n.has(i)||(Yi(t,e,2,!1),n.add(i))}function Fi(e,t,n){var i=0;t&&(i|=4),Yi(n,e,i,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[Ui]){e[Ui]=!0,s.forEach((function(t){"selectionchange"!==t&&(Oi.has(t)||Fi(t,!1,e),Fi(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ui]||(t[Ui]=!0,Fi("selectionchange",!1,t))}}function Yi(e,t,n,i){switch(Kt(t)){case 1:var r=Wt;break;case 4:r=Ht;break;default:r=Gt}n=r.bind(null,t,n,e),r=void 0,!De||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),i?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Qi(e,t,n,i,r){var a=i;if(0===(1&t)&&0===(2&t)&&null!==i)e:for(;;){if(null===i)return;var s=i.tag;if(3===s||4===s){var o=i.stateNode.containerInfo;if(o===r||8===o.nodeType&&o.parentNode===r)break;if(4===s)for(s=i.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===r||8===l.nodeType&&l.parentNode===r))return;s=s.return}for(;null!==o;){if(null===(s=vr(o)))return;if(5===(l=s.tag)||6===l){i=a=s;continue e}o=o.parentNode}}i=i.return}Be((function(){var i=a,r=be(n),s=[];e:{var o=Ii.get(e);if(void 0!==o){var l=dn,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Cn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pn;break;case Ei:case Ci:case Ti:l=xn;break;case Pi:l=In;break;case"scroll":l=hn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var d=0!==(4&t),u=!d&&"scroll"===e,h=d?null!==o?o+"Capture":null:o;d=[];for(var p,f=i;null!==f;){var m=(p=f).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==h&&(null!=(m=ze(f,h))&&d.push(Wi(f,m,p)))),u)break;f=f.return}0<d.length&&(o=new l(o,c,null,n,r),s.push({event:o,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===we||!(c=n.relatedTarget||n.fromElement)||!vr(c)&&!c[fr])&&(l||o)&&(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=i,null!==(c=(c=n.relatedTarget||n.toElement)?vr(c):null)&&(c!==(u=Ve(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=i),l!==c)){if(d=fn,m="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(d=Tn,m="onPointerLeave",h="onPointerEnter",f="pointer"),u=null==l?o:wr(l),p=null==c?o:wr(c),(o=new d(m,f+"leave",l,n,r)).target=u,o.relatedTarget=p,m=null,vr(r)===i&&((d=new d(h,f+"enter",c,n,r)).target=p,d.relatedTarget=u,m=d),u=m,l&&c)e:{for(h=c,f=0,p=d=l;p;p=Gi(p))f++;for(p=0,m=h;m;m=Gi(m))p++;for(;0<f-p;)d=Gi(d),f--;for(;0<p-f;)h=Gi(h),p--;for(;f--;){if(d===h||null!==h&&d===h.alternate)break e;d=Gi(d),h=Gi(h)}d=null}else d=null;null!==l&&$i(s,o,l,d,!1),null!==c&&null!==u&&$i(s,u,c,d,!0)}if("select"===(l=(o=i?wr(i):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=Kn;else if(Qn(o))if(qn)g=si;else{g=ri;var x=ii}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=ai);switch(g&&(g=g(e,i))?Wn(s,g,n,r):(x&&x(e,o,i),"focusout"===e&&(x=o._wrapperState)&&x.controlled&&"number"===o.type&&ee(o,"number",o.value)),x=i?wr(i):window,e){case"focusin":(Qn(x)||"true"===x.contentEditable)&&(gi=x,xi=i,vi=null);break;case"focusout":vi=xi=gi=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,wi(s,n,r);break;case"selectionchange":if(mi)break;case"keydown":case"keyup":wi(s,n,r)}var v;if(_n)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Vn?Fn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Nn&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Vn&&(v=en()):(Jt="value"in(qt=r)?qt.value:qt.textContent,Vn=!0)),0<(x=Hi(i,y)).length&&(y=new wn(y,e,null,n,r),s.push({event:y,listeners:x}),v?y.data=v:null!==(v=Un(n))&&(y.data=v))),(v=On?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Ln=!0,Rn);case"textInput":return(e=t.data)===Rn&&Ln?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!_n&&Fn(e,t)?(e=en(),Zt=Jt=qt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(i=Hi(i,"onBeforeInput")).length&&(r=new wn("onBeforeInput","beforeinput",null,n,r),s.push({event:r,listeners:i}),r.data=v))}Ri(s,t)}))}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",i=[];null!==e;){var r=e,a=r.stateNode;5===r.tag&&null!==a&&(r=a,null!=(a=ze(e,n))&&i.unshift(Wi(e,a,r)),null!=(a=ze(e,t))&&i.push(Wi(e,a,r))),e=e.return}return i}function Gi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function $i(e,t,n,i,r){for(var a=t._reactName,s=[];null!==n&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(null!==l&&l===i)break;5===o.tag&&null!==c&&(o=c,r?null!=(l=ze(n,a))&&s.unshift(Wi(n,l,o)):r||null!=(l=ze(n,a))&&s.push(Wi(n,l,o))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var Xi=/\r\n?/g,Ki=/\u0000|\uFFFD/g;function qi(e){return("string"===typeof e?e:""+e).replace(Xi,"\n").replace(Ki,"")}function Ji(e,t,n){if(t=qi(t),qi(e)!==t&&n)throw Error(a(425))}function Zi(){}var er=null,tr=null;function nr(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ir="function"===typeof setTimeout?setTimeout:void 0,rr="function"===typeof clearTimeout?clearTimeout:void 0,ar="function"===typeof Promise?Promise:void 0,sr="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ar?function(e){return ar.resolve(null).then(e).catch(or)}:ir;function or(e){setTimeout((function(){throw e}))}function lr(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===i)return e.removeChild(r),void Vt(t);i--}else"$"!==n&&"$?"!==n&&"$!"!==n||i++;n=r}while(n);Vt(t)}function cr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function dr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),hr="__reactFiber$"+ur,pr="__reactProps$"+ur,fr="__reactContainer$"+ur,mr="__reactEvents$"+ur,gr="__reactListeners$"+ur,xr="__reactHandles$"+ur;function vr(e){var t=e[hr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[hr]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=dr(e);null!==e;){if(n=e[hr])return n;e=dr(e)}return t}n=(e=n).parentNode}return null}function yr(e){return!(e=e[hr]||e[fr])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wr(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function br(e){return e[pr]||null}var jr=[],Ar=-1;function Sr(e){return{current:e}}function kr(e){0>Ar||(e.current=jr[Ar],jr[Ar]=null,Ar--)}function Er(e,t){Ar++,jr[Ar]=e.current,e.current=t}var Cr={},Tr=Sr(Cr),Pr=Sr(!1),Ir=Cr;function Br(e,t){var n=e.type.contextTypes;if(!n)return Cr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r,a={};for(r in n)a[r]=t[r];return i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zr(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Dr(){kr(Pr),kr(Tr)}function _r(e,t,n){if(Tr.current!==Cr)throw Error(a(168));Er(Tr,t),Er(Pr,n)}function Mr(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,"function"!==typeof i.getChildContext)return n;for(var r in i=i.getChildContext())if(!(r in t))throw Error(a(108,Y(e)||"Unknown",r));return N({},n,i)}function Or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Ir=Tr.current,Er(Tr,e),Er(Pr,Pr.current),!0}function Nr(e,t,n){var i=e.stateNode;if(!i)throw Error(a(169));n?(e=Mr(e,t,Ir),i.__reactInternalMemoizedMergedChildContext=e,kr(Pr),kr(Tr),Er(Tr,e)):kr(Pr),Er(Pr,n)}var Rr=null,Lr=!1,Fr=!1;function Ur(e){null===Rr?Rr=[e]:Rr.push(e)}function Vr(){if(!Fr&&null!==Rr){Fr=!0;var e=0,t=yt;try{var n=Rr;for(yt=1;e<n.length;e++){var i=n[e];do{i=i(!0)}while(null!==i)}Rr=null,Lr=!1}catch(r){throw null!==Rr&&(Rr=Rr.slice(e+1)),Ge(Ze,Vr),r}finally{yt=t,Fr=!1}}return null}var Yr=[],Qr=0,Wr=null,Hr=0,Gr=[],$r=0,Xr=null,Kr=1,qr="";function Jr(e,t){Yr[Qr++]=Hr,Yr[Qr++]=Wr,Wr=e,Hr=t}function Zr(e,t,n){Gr[$r++]=Kr,Gr[$r++]=qr,Gr[$r++]=Xr,Xr=e;var i=Kr;e=qr;var r=32-st(i)-1;i&=~(1<<r),n+=1;var a=32-st(t)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Kr=1<<32-st(t)+r|n<<r|i,qr=a+e}else Kr=1<<a|n<<r|i,qr=e}function ea(e){null!==e.return&&(Jr(e,1),Zr(e,1,0))}function ta(e){for(;e===Wr;)Wr=Yr[--Qr],Yr[Qr]=null,Hr=Yr[--Qr],Yr[Qr]=null;for(;e===Xr;)Xr=Gr[--$r],Gr[$r]=null,qr=Gr[--$r],Gr[$r]=null,Kr=Gr[--$r],Gr[$r]=null}var na=null,ia=null,ra=!1,aa=null;function sa(e,t){var n=Bc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ia=cr(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xr?{id:Kr,overflow:qr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Bc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ia=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ra){var t=ia;if(t){var n=t;if(!oa(e,t)){if(la(e))throw Error(a(418));t=cr(n.nextSibling);var i=na;t&&oa(e,t)?sa(i,n):(e.flags=-4097&e.flags|2,ra=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ra=!1,na=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function ua(e){if(e!==na)return!1;if(!ra)return da(e),ra=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nr(e.type,e.memoizedProps)),t&&(t=ia)){if(la(e))throw ha(),Error(a(418));for(;t;)sa(e,t),t=cr(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ia=cr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ia=null}}else ia=na?cr(e.stateNode.nextSibling):null;return!0}function ha(){for(var e=ia;e;)e=cr(e.nextSibling)}function pa(){ia=na=null,ra=!1}function fa(e){null===aa?aa=[e]:aa.push(e)}var ma=w.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var i=n.stateNode}if(!i)throw Error(a(147,e));var r=i,s=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=r.refs;null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var i=t.deletions;null===i?(t.deletions=[n],t.flags|=16):i.push(n)}}function n(n,i){if(!e)return null;for(;null!==i;)t(n,i),i=i.sibling;return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t){return(e=Dc(e,t)).index=0,e.sibling=null,e}function s(t,n,i){return t.index=i,e?null!==(i=t.alternate)?(i=i.index)<n?(t.flags|=2,n):i:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,i){return null===t||6!==t.tag?((t=Nc(n,e.mode,i)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,i){var a=n.type;return a===A?u(e,t,n.props.children,i,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===z&&va(a)===t.type)?((i=r(t,n.props)).ref=ga(e,t,n),i.return=e,i):((i=_c(n.type,n.key,n.props,null,e.mode,i)).ref=ga(e,t,n),i.return=e,i)}function d(e,t,n,i){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Rc(n,e.mode,i)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function u(e,t,n,i,a){return null===t||7!==t.tag?((t=Mc(n,e.mode,i,a)).return=e,t):((t=r(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case b:return(n=_c(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case j:return(t=Rc(t,e.mode,n)).return=e,t;case z:return h(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mc(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function p(e,t,n,i){var r=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==r?null:l(e,t,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case b:return n.key===r?c(e,t,n,i):null;case j:return n.key===r?d(e,t,n,i):null;case z:return p(e,t,(r=n._init)(n._payload),i)}if(te(n)||M(n))return null!==r?null:u(e,t,n,i,null);xa(e,n)}return null}function f(e,t,n,i,r){if("string"===typeof i&&""!==i||"number"===typeof i)return l(t,e=e.get(n)||null,""+i,r);if("object"===typeof i&&null!==i){switch(i.$$typeof){case b:return c(t,e=e.get(null===i.key?n:i.key)||null,i,r);case j:return d(t,e=e.get(null===i.key?n:i.key)||null,i,r);case z:return f(e,t,n,(0,i._init)(i._payload),r)}if(te(i)||M(i))return u(t,e=e.get(n)||null,i,r,null);xa(t,i)}return null}function m(r,a,o,l){for(var c=null,d=null,u=a,m=a=0,g=null;null!==u&&m<o.length;m++){u.index>m?(g=u,u=null):g=u.sibling;var x=p(r,u,o[m],l);if(null===x){null===u&&(u=g);break}e&&u&&null===x.alternate&&t(r,u),a=s(x,a,m),null===d?c=x:d.sibling=x,d=x,u=g}if(m===o.length)return n(r,u),ra&&Jr(r,m),c;if(null===u){for(;m<o.length;m++)null!==(u=h(r,o[m],l))&&(a=s(u,a,m),null===d?c=u:d.sibling=u,d=u);return ra&&Jr(r,m),c}for(u=i(r,u);m<o.length;m++)null!==(g=f(u,r,m,o[m],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?m:g.key),a=s(g,a,m),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach((function(e){return t(r,e)})),ra&&Jr(r,m),c}function g(r,o,l,c){var d=M(l);if("function"!==typeof d)throw Error(a(150));if(null==(l=d.call(l)))throw Error(a(151));for(var u=d=null,m=o,g=o=0,x=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var y=p(r,m,v.value,c);if(null===y){null===m&&(m=x);break}e&&m&&null===y.alternate&&t(r,m),o=s(y,o,g),null===u?d=y:u.sibling=y,u=y,m=x}if(v.done)return n(r,m),ra&&Jr(r,g),d;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=h(r,v.value,c))&&(o=s(v,o,g),null===u?d=v:u.sibling=v,u=v);return ra&&Jr(r,g),d}for(m=i(r,m);!v.done;g++,v=l.next())null!==(v=f(m,r,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),o=s(v,o,g),null===u?d=v:u.sibling=v,u=v);return e&&m.forEach((function(e){return t(r,e)})),ra&&Jr(r,g),d}return function e(i,a,s,l){if("object"===typeof s&&null!==s&&s.type===A&&null===s.key&&(s=s.props.children),"object"===typeof s&&null!==s){switch(s.$$typeof){case b:e:{for(var c=s.key,d=a;null!==d;){if(d.key===c){if((c=s.type)===A){if(7===d.tag){n(i,d.sibling),(a=r(d,s.props.children)).return=i,i=a;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&va(c)===d.type){n(i,d.sibling),(a=r(d,s.props)).ref=ga(i,d,s),a.return=i,i=a;break e}n(i,d);break}t(i,d),d=d.sibling}s.type===A?((a=Mc(s.props.children,i.mode,l,s.key)).return=i,i=a):((l=_c(s.type,s.key,s.props,null,i.mode,l)).ref=ga(i,a,s),l.return=i,i=l)}return o(i);case j:e:{for(d=s.key;null!==a;){if(a.key===d){if(4===a.tag&&a.stateNode.containerInfo===s.containerInfo&&a.stateNode.implementation===s.implementation){n(i,a.sibling),(a=r(a,s.children||[])).return=i,i=a;break e}n(i,a);break}t(i,a),a=a.sibling}(a=Rc(s,i.mode,l)).return=i,i=a}return o(i);case z:return e(i,a,(d=s._init)(s._payload),l)}if(te(s))return m(i,a,s,l);if(M(s))return g(i,a,s,l);xa(i,s)}return"string"===typeof s&&""!==s||"number"===typeof s?(s=""+s,null!==a&&6===a.tag?(n(i,a.sibling),(a=r(a,s)).return=i,i=a):(n(i,a),(a=Nc(s,i.mode,l)).return=i,i=a),o(i)):n(i,a)}}var wa=ya(!0),ba=ya(!1),ja=Sr(null),Aa=null,Sa=null,ka=null;function Ea(){ka=Sa=Aa=null}function Ca(e){var t=ja.current;kr(ja),e._currentValue=t}function Ta(e,t,n){for(;null!==e;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==i&&(i.childLanes|=t)):null!==i&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){Aa=e,ka=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yo=!0),e.firstContext=null)}function Ia(e){var t=e._currentValue;if(ka!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===Aa)throw Error(a(308));Sa=e,Aa.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var Ba=null;function za(e){null===Ba?Ba=[e]:Ba.push(e)}function Da(e,t,n,i){var r=t.interleaved;return null===r?(n.next=n,za(t)):(n.next=r.next,r.next=n),t.interleaved=n,_a(e,i)}function _a(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ma=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ra(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var i=e.updateQueue;if(null===i)return null;if(i=i.shared,0!==(2&Tl)){var r=i.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),i.pending=t,_a(e,n)}return null===(r=i.interleaved)?(t.next=t,za(i)):(t.next=r.next,r.next=t),i.interleaved=t,_a(e,n)}function Fa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ua(e,t){var n=e.updateQueue,i=e.alternate;if(null!==i&&n===(i=i.updateQueue)){var r=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?r=a=s:a=a.next=s,n=n.next}while(null!==n);null===a?r=a=t:a=a.next=t}else r=a=t;return n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,i){var r=e.updateQueue;Ma=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(null!==o){r.shared.pending=null;var l=o,c=l.next;l.next=null,null===s?a=c:s.next=c,s=l;var d=e.alternate;null!==d&&((o=(d=d.updateQueue).lastBaseUpdate)!==s&&(null===o?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(null!==a){var u=r.baseState;for(s=0,d=c=l=null,o=a;;){var h=o.lane,p=o.eventTime;if((i&h)===h){null!==d&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var f=e,m=o;switch(h=t,p=n,m.tag){case 1:if("function"===typeof(f=m.payload)){u=f.call(p,u,h);break e}u=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(h="function"===typeof(f=m.payload)?f.call(p,u,h):f)||void 0===h)break e;u=N({},u,h);break e;case 2:Ma=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(h=r.effects)?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===d?(c=d=p,l=u):d=d.next=p,s|=h;if(null===(o=o.next)){if(null===(o=r.shared.pending))break;o=(h=o).next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}if(null===d&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,null!==(t=r.shared.interleaved)){r=t;do{s|=r.lane,r=r.next}while(r!==t)}else null===a&&(r.shared.lanes=0);Ol|=s,e.lanes=s,e.memoizedState=u}}function Ya(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(null!==r){if(i.callback=null,i=n,"function"!==typeof r)throw Error(a(191,r));r.call(i)}}}var Qa={},Wa=Sr(Qa),Ha=Sr(Qa),Ga=Sr(Qa);function $a(e){if(e===Qa)throw Error(a(174));return e}function Xa(e,t){switch(Er(Ga,t),Er(Ha,e),Er(Wa,Qa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}kr(Wa),Er(Wa,t)}function Ka(){kr(Wa),kr(Ha),kr(Ga)}function qa(e){$a(Ga.current);var t=$a(Wa.current),n=le(t,e.type);t!==n&&(Er(Ha,e),Er(Wa,n))}function Ja(e){Ha.current===e&&(kr(Wa),kr(Ha))}var Za=Sr(0);function es(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function ns(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var is=w.ReactCurrentDispatcher,rs=w.ReactCurrentBatchConfig,as=0,ss=null,os=null,ls=null,cs=!1,ds=!1,us=0,hs=0;function ps(){throw Error(a(321))}function fs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!oi(e[n],t[n]))return!1;return!0}function ms(e,t,n,i,r,s){if(as=s,ss=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=null===e||null===e.memoizedState?Js:Zs,e=n(i,r),ds){s=0;do{if(ds=!1,us=0,25<=s)throw Error(a(301));s+=1,ls=os=null,t.updateQueue=null,is.current=eo,e=n(i,r)}while(ds)}if(is.current=qs,t=null!==os&&null!==os.next,as=0,ls=os=ss=null,cs=!1,t)throw Error(a(300));return e}function gs(){var e=0!==us;return us=0,e}function xs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ls?ss.memoizedState=ls=e:ls=ls.next=e,ls}function vs(){if(null===os){var e=ss.alternate;e=null!==e?e.memoizedState:null}else e=os.next;var t=null===ls?ss.memoizedState:ls.next;if(null!==t)ls=t,os=e;else{if(null===e)throw Error(a(310));e={memoizedState:(os=e).memoizedState,baseState:os.baseState,baseQueue:os.baseQueue,queue:os.queue,next:null},null===ls?ss.memoizedState=ls=e:ls=ls.next=e}return ls}function ys(e,t){return"function"===typeof t?t(e):t}function ws(e){var t=vs(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=os,r=i.baseQueue,s=n.pending;if(null!==s){if(null!==r){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(null!==r){s=r.next,i=i.baseState;var l=o=null,c=null,d=s;do{var u=d.lane;if((as&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=h,o=i):c=c.next=h,ss.lanes|=u,Ol|=u}d=d.next}while(null!==d&&d!==s);null===c?o=i:c.next=l,oi(i,t.memoizedState)||(yo=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=c,n.lastRenderedState=i}if(null!==(e=n.interleaved)){r=e;do{s=r.lane,ss.lanes|=s,Ol|=s,r=r.next}while(r!==e)}else null===r&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bs(e){var t=vs(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(null!==r){n.pending=null;var o=r=r.next;do{s=e(s,o.action),o=o.next}while(o!==r);oi(s,t.memoizedState)||(yo=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function js(){}function As(e,t){var n=ss,i=vs(),r=t(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,yo=!0),i=i.queue,Ms(Es.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||null!==ls&&1&ls.memoizedState.tag){if(n.flags|=2048,Is(9,ks.bind(null,n,i,r,t),void 0,null),null===Pl)throw Error(a(349));0!==(30&as)||Ss(n,t,r)}return r}function Ss(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ks(e,t,n,i){t.value=n,t.getSnapshot=i,Cs(t)&&Ts(e)}function Es(e,t,n){return n((function(){Cs(t)&&Ts(e)}))}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!oi(e,n)}catch(i){return!0}}function Ts(e){var t=_a(e,1);null!==t&&nc(t,e,1,-1)}function Ps(e){var t=xs();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t.queue=e,e=e.dispatch=Gs.bind(null,ss,e),[t.memoizedState,e]}function Is(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Bs(){return vs().memoizedState}function zs(e,t,n,i){var r=xs();ss.flags|=e,r.memoizedState=Is(1|t,n,void 0,void 0===i?null:i)}function Ds(e,t,n,i){var r=vs();i=void 0===i?null:i;var a=void 0;if(null!==os){var s=os.memoizedState;if(a=s.destroy,null!==i&&fs(i,s.deps))return void(r.memoizedState=Is(t,n,a,i))}ss.flags|=e,r.memoizedState=Is(1|t,n,a,i)}function _s(e,t){return zs(8390656,8,e,t)}function Ms(e,t){return Ds(2048,8,e,t)}function Os(e,t){return Ds(4,2,e,t)}function Ns(e,t){return Ds(4,4,e,t)}function Rs(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ls(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ds(4,4,Rs.bind(null,t,e),n)}function Fs(){}function Us(e,t){var n=vs();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&fs(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Vs(e,t){var n=vs();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&fs(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Ys(e,t,n){return 0===(21&as)?(e.baseState&&(e.baseState=!1,yo=!0),e.memoizedState=n):(oi(n,t)||(n=mt(),ss.lanes|=n,Ol|=n,e.baseState=!0),t)}function Qs(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var i=rs.transition;rs.transition={};try{e(!1),t()}finally{yt=n,rs.transition=i}}function Ws(){return vs().memoizedState}function Hs(e,t,n){var i=tc(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$s(e))Xs(t,n);else if(null!==(n=Da(e,t,n,i))){nc(n,e,i,ec()),Ks(n,t,i)}}function Gs(e,t,n){var i=tc(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($s(e))Xs(t,r);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var s=t.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,s)){var l=t.interleaved;return null===l?(r.next=r,za(t)):(r.next=l.next,l.next=r),void(t.interleaved=r)}}catch(c){}null!==(n=Da(e,t,r,i))&&(nc(n,e,i,r=ec()),Ks(n,t,i))}}function $s(e){var t=e.alternate;return e===ss||null!==t&&t===ss}function Xs(e,t){ds=cs=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ks(e,t,n){if(0!==(4194240&n)){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,vt(e,n)}}var qs={readContext:Ia,useCallback:ps,useContext:ps,useEffect:ps,useImperativeHandle:ps,useInsertionEffect:ps,useLayoutEffect:ps,useMemo:ps,useReducer:ps,useRef:ps,useState:ps,useDebugValue:ps,useDeferredValue:ps,useTransition:ps,useMutableSource:ps,useSyncExternalStore:ps,useId:ps,unstable_isNewReconciler:!1},Js={readContext:Ia,useCallback:function(e,t){return xs().memoizedState=[e,void 0===t?null:t],e},useContext:Ia,useEffect:_s,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zs(4194308,4,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return zs(4,2,e,t)},useMemo:function(e,t){var n=xs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=xs();return t=void 0!==n?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Hs.bind(null,ss,e),[i.memoizedState,e]},useRef:function(e){return e={current:e},xs().memoizedState=e},useState:Ps,useDebugValue:Fs,useDeferredValue:function(e){return xs().memoizedState=e},useTransition:function(){var e=Ps(!1),t=e[0];return e=Qs.bind(null,e[1]),xs().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ss,r=xs();if(ra){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Pl)throw Error(a(349));0!==(30&as)||Ss(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,_s(Es.bind(null,i,s,e),[e]),i.flags|=2048,Is(9,ks.bind(null,i,s,n,t),void 0,null),n},useId:function(){var e=xs(),t=Pl.identifierPrefix;if(ra){var n=qr;t=":"+t+"R"+(n=(Kr&~(1<<32-st(Kr)-1)).toString(32)+n),0<(n=us++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=hs++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zs={readContext:Ia,useCallback:Us,useContext:Ia,useEffect:Ms,useImperativeHandle:Ls,useInsertionEffect:Os,useLayoutEffect:Ns,useMemo:Vs,useReducer:ws,useRef:Bs,useState:function(){return ws(ys)},useDebugValue:Fs,useDeferredValue:function(e){return Ys(vs(),os.memoizedState,e)},useTransition:function(){return[ws(ys)[0],vs().memoizedState]},useMutableSource:js,useSyncExternalStore:As,useId:Ws,unstable_isNewReconciler:!1},eo={readContext:Ia,useCallback:Us,useContext:Ia,useEffect:Ms,useImperativeHandle:Ls,useInsertionEffect:Os,useLayoutEffect:Ns,useMemo:Vs,useReducer:bs,useRef:Bs,useState:function(){return bs(ys)},useDebugValue:Fs,useDeferredValue:function(e){var t=vs();return null===os?t.memoizedState=e:Ys(t,os.memoizedState,e)},useTransition:function(){return[bs(ys)[0],vs().memoizedState]},useMutableSource:js,useSyncExternalStore:As,useId:Ws,unstable_isNewReconciler:!1};function to(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function no(e,t,n,i){n=null===(n=n(i,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var io={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ec(),r=tc(e),a=Ra(i,r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nc(t,e,r,i),Fa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ec(),r=tc(e),a=Ra(i,r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nc(t,e,r,i),Fa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),i=tc(e),r=Ra(n,i);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=La(e,r,i))&&(nc(t,e,i,n),Fa(t,e,i))}};function ro(e,t,n,i,r,a,s){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(i,a,s):!t.prototype||!t.prototype.isPureReactComponent||(!li(n,i)||!li(r,a))}function ao(e,t,n){var i=!1,r=Cr,a=t.contextType;return"object"===typeof a&&null!==a?a=Ia(a):(r=zr(t)?Ir:Tr.current,a=(i=null!==(i=t.contextTypes)&&void 0!==i)?Br(e,r):Cr),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=io,e.stateNode=t,t._reactInternals=e,i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function so(e,t,n,i){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,i),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function oo(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Oa(e);var a=t.contextType;"object"===typeof a&&null!==a?r.context=Ia(a):(a=zr(t)?Ir:Tr.current,r.context=Br(e,a)),r.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(no(e,t,a,n),r.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof r.getSnapshotBeforeUpdate||"function"!==typeof r.UNSAFE_componentWillMount&&"function"!==typeof r.componentWillMount||(t=r.state,"function"===typeof r.componentWillMount&&r.componentWillMount(),"function"===typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&io.enqueueReplaceState(r,r.state,null),Va(e,n,r,i),r.state=e.memoizedState),"function"===typeof r.componentDidMount&&(e.flags|=4194308)}function lo(e,t){try{var n="",i=t;do{n+=U(i),i=i.return}while(i);var r=n}catch(a){r="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:r,digest:null}}function co(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function uo(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ho="function"===typeof WeakMap?WeakMap:Map;function po(e,t,n){(n=Ra(-1,n)).tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ql||(Ql=!0,Wl=i),uo(0,t)},n}function fo(e,t,n){(n=Ra(-1,n)).tag=3;var i=e.type.getDerivedStateFromError;if("function"===typeof i){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){uo(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){uo(0,t),"function"!==typeof i&&(null===Hl?Hl=new Set([this]):Hl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function mo(e,t,n){var i=e.pingCache;if(null===i){i=e.pingCache=new ho;var r=new Set;i.set(t,r)}else void 0===(r=i.get(t))&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=kc.bind(null,e,t,n),t.then(e,e))}function go(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xo(e,t,n,i,r){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ra(-1,1)).tag=2,La(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var vo=w.ReactCurrentOwner,yo=!1;function wo(e,t,n,i){t.child=null===e?ba(t,null,n,i):wa(t,e.child,n,i)}function bo(e,t,n,i,r){n=n.render;var a=t.ref;return Pa(t,r),i=ms(e,t,n,i,a,r),n=gs(),null===e||yo?(ra&&n&&ea(t),t.flags|=1,wo(e,t,i,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Qo(e,t,r))}function jo(e,t,n,i,r){if(null===e){var a=n.type;return"function"!==typeof a||zc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=_c(n.type,null,i,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ao(e,t,a,i,r))}if(a=e.child,0===(e.lanes&r)){var s=a.memoizedProps;if((n=null!==(n=n.compare)?n:li)(s,i)&&e.ref===t.ref)return Qo(e,t,r)}return t.flags|=1,(e=Dc(a,i)).ref=t.ref,e.return=t,t.child=e}function Ao(e,t,n,i,r){if(null!==e){var a=e.memoizedProps;if(li(a,i)&&e.ref===t.ref){if(yo=!1,t.pendingProps=i=a,0===(e.lanes&r))return t.lanes=e.lanes,Qo(e,t,r);0!==(131072&e.flags)&&(yo=!0)}}return Eo(e,t,n,i,r)}function So(e,t,n){var i=t.pendingProps,r=i.children,a=null!==e?e.memoizedState:null;if("hidden"===i.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Er(Dl,zl),zl|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Er(Dl,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=null!==a?a.baseLanes:n,Er(Dl,zl),zl|=i}else null!==a?(i=a.baseLanes|n,t.memoizedState=null):i=n,Er(Dl,zl),zl|=i;return wo(e,t,r,n),t.child}function ko(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eo(e,t,n,i,r){var a=zr(n)?Ir:Tr.current;return a=Br(t,a),Pa(t,r),n=ms(e,t,n,i,a,r),i=gs(),null===e||yo?(ra&&i&&ea(t),t.flags|=1,wo(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Qo(e,t,r))}function Co(e,t,n,i,r){if(zr(n)){var a=!0;Or(t)}else a=!1;if(Pa(t,r),null===t.stateNode)Yo(e,t),ao(t,n,i),oo(t,n,i,r),i=!0;else if(null===e){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ia(c):c=Br(t,c=zr(n)?Ir:Tr.current);var d=n.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof s.getSnapshotBeforeUpdate;u||"function"!==typeof s.UNSAFE_componentWillReceiveProps&&"function"!==typeof s.componentWillReceiveProps||(o!==i||l!==c)&&so(t,s,i,c),Ma=!1;var h=t.memoizedState;s.state=h,Va(t,i,s,r),l=t.memoizedState,o!==i||h!==l||Pr.current||Ma?("function"===typeof d&&(no(t,n,d,i),l=t.memoizedState),(o=Ma||ro(t,n,o,i,h,l,c))?(u||"function"!==typeof s.UNSAFE_componentWillMount&&"function"!==typeof s.componentWillMount||("function"===typeof s.componentWillMount&&s.componentWillMount(),"function"===typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"===typeof s.componentDidMount&&(t.flags|=4194308)):("function"===typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):("function"===typeof s.componentDidMount&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Na(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:to(t.type,o),s.props=c,u=t.pendingProps,h=s.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ia(l):l=Br(t,l=zr(n)?Ir:Tr.current);var p=n.getDerivedStateFromProps;(d="function"===typeof p||"function"===typeof s.getSnapshotBeforeUpdate)||"function"!==typeof s.UNSAFE_componentWillReceiveProps&&"function"!==typeof s.componentWillReceiveProps||(o!==u||h!==l)&&so(t,s,i,l),Ma=!1,h=t.memoizedState,s.state=h,Va(t,i,s,r);var f=t.memoizedState;o!==u||h!==f||Pr.current||Ma?("function"===typeof p&&(no(t,n,p,i),f=t.memoizedState),(c=Ma||ro(t,n,c,i,h,f,l)||!1)?(d||"function"!==typeof s.UNSAFE_componentWillUpdate&&"function"!==typeof s.componentWillUpdate||("function"===typeof s.componentWillUpdate&&s.componentWillUpdate(i,f,l),"function"===typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(i,f,l)),"function"===typeof s.componentDidUpdate&&(t.flags|=4),"function"===typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof s.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),s.props=i,s.state=f,s.context=l,i=c):("function"!==typeof s.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return To(e,t,n,i,a,r)}function To(e,t,n,i,r,a){ko(e,t);var s=0!==(128&t.flags);if(!i&&!s)return r&&Nr(t,n,!1),Qo(e,t,a);i=t.stateNode,vo.current=t;var o=s&&"function"!==typeof n.getDerivedStateFromError?null:i.render();return t.flags|=1,null!==e&&s?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,o,a)):wo(e,t,o,a),t.memoizedState=i.state,r&&Nr(t,n,!0),t.child}function Po(e){var t=e.stateNode;t.pendingContext?_r(0,t.pendingContext,t.pendingContext!==t.context):t.context&&_r(0,t.context,!1),Xa(e,t.containerInfo)}function Io(e,t,n,i,r){return pa(),fa(r),t.flags|=256,wo(e,t,n,i),t.child}var Bo,zo,Do,_o,Mo={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function No(e,t,n){var i,r=t.pendingProps,s=Za.current,o=!1,l=0!==(128&t.flags);if((i=l)||(i=(null===e||null!==e.memoizedState)&&0!==(2&s)),i?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Er(Za,1&s),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},0===(1&r)&&null!==o?(o.childLanes=0,o.pendingProps=l):o=Oc(l,r,0,null),e=Mc(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Oo(n),t.memoizedState=Mo,e):Ro(t,l));if(null!==(s=e.memoizedState)&&null!==(i=s.dehydrated))return function(e,t,n,i,r,s,o){if(n)return 256&t.flags?(t.flags&=-257,Lo(e,t,o,i=co(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=i.fallback,r=t.mode,i=Oc({mode:"visible",children:i.children},r,0,null),(s=Mc(s,r,o,null)).flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,0!==(1&t.mode)&&wa(t,e.child,null,o),t.child.memoizedState=Oo(o),t.memoizedState=Mo,s);if(0===(1&t.mode))return Lo(e,t,o,null);if("$!"===r.data){if(i=r.nextSibling&&r.nextSibling.dataset)var l=i.dgst;return i=l,Lo(e,t,o,i=co(s=Error(a(419)),i,void 0))}if(l=0!==(o&e.childLanes),yo||l){if(null!==(i=Pl)){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}0!==(r=0!==(r&(i.suspendedLanes|o))?0:r)&&r!==s.retryLane&&(s.retryLane=r,_a(e,r),nc(i,e,r,-1))}return mc(),Lo(e,t,o,i=co(Error(a(421))))}return"$?"===r.data?(t.flags|=128,t.child=e.child,t=Cc.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,ia=cr(r.nextSibling),na=t,ra=!0,aa=null,null!==e&&(Gr[$r++]=Kr,Gr[$r++]=qr,Gr[$r++]=Xr,Kr=e.id,qr=e.overflow,Xr=t),t=Ro(t,i.children),t.flags|=4096,t)}(e,t,l,r,i,s,n);if(o){o=r.fallback,l=t.mode,i=(s=e.child).sibling;var c={mode:"hidden",children:r.children};return 0===(1&l)&&t.child!==s?((r=t.child).childLanes=0,r.pendingProps=c,t.deletions=null):(r=Dc(s,c)).subtreeFlags=14680064&s.subtreeFlags,null!==i?o=Dc(i,o):(o=Mc(o,l,n,null)).flags|=2,o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=null===(l=e.child.memoizedState)?Oo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Mo,r}return e=(o=e.child).sibling,r=Dc(o,{mode:"visible",children:r.children}),0===(1&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ro(e,t){return(t=Oc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Lo(e,t,n,i){return null!==i&&fa(i),wa(t,e.child,null,n),(e=Ro(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fo(e,t,n){e.lanes|=t;var i=e.alternate;null!==i&&(i.lanes|=t),Ta(e.return,t,n)}function Uo(e,t,n,i,r){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Vo(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(wo(e,t,i.children,n),0!==(2&(i=Za.current)))i=1&i|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fo(e,n,t);else if(19===e.tag)Fo(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Er(Za,i),0===(1&t.mode))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===es(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Uo(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===es(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Uo(t,!0,n,null,a);break;case"together":Uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qo(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ol|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Dc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wo(e,t){if(!ra)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;null!==n;)null!==n.alternate&&(i=n),n=n.sibling;null===i?t||null===e.tail?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ho(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=14680064&r.subtreeFlags,i|=14680064&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Go(e,t,n){var i=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ho(t),null;case 1:case 17:return zr(t.type)&&Dr(),Ho(t),null;case 3:return i=t.stateNode,Ka(),kr(Pr),kr(Tr),ns(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(sc(aa),aa=null))),zo(e,t),Ho(t),null;case 5:Ja(t);var r=$a(Ga.current);if(n=t.type,null!==e&&null!=t.stateNode)Do(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(null===t.stateNode)throw Error(a(166));return Ho(t),null}if(e=$a(Wa.current),ua(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[hr]=t,i[pr]=s,e=0!==(1&t.mode),n){case"dialog":Li("cancel",i),Li("close",i);break;case"iframe":case"object":case"embed":Li("load",i);break;case"video":case"audio":for(r=0;r<Mi.length;r++)Li(Mi[r],i);break;case"source":Li("error",i);break;case"img":case"image":case"link":Li("error",i),Li("load",i);break;case"details":Li("toggle",i);break;case"input":K(i,s),Li("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Li("invalid",i);break;case"textarea":re(i,s),Li("invalid",i)}for(var l in ve(n,s),r=null,s)if(s.hasOwnProperty(l)){var c=s[l];"children"===l?"string"===typeof c?i.textContent!==c&&(!0!==s.suppressHydrationWarning&&Ji(i.textContent,c,e),r=["children",c]):"number"===typeof c&&i.textContent!==""+c&&(!0!==s.suppressHydrationWarning&&Ji(i.textContent,c,e),r=["children",""+c]):o.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Li("scroll",i)}switch(n){case"input":H(i),Z(i,s,!0);break;case"textarea":H(i),se(i);break;case"select":case"option":break;default:"function"===typeof s.onClick&&(i.onclick=Zi)}i=r,t.updateQueue=i,null!==i&&(t.flags|=4)}else{l=9===r.nodeType?r:r.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=oe(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof i.is?e=l.createElement(n,{is:i.is}):(e=l.createElement(n),"select"===n&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,n),e[hr]=t,e[pr]=i,Bo(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,i),n){case"dialog":Li("cancel",e),Li("close",e),r=i;break;case"iframe":case"object":case"embed":Li("load",e),r=i;break;case"video":case"audio":for(r=0;r<Mi.length;r++)Li(Mi[r],e);r=i;break;case"source":Li("error",e),r=i;break;case"img":case"image":case"link":Li("error",e),Li("load",e),r=i;break;case"details":Li("toggle",e),r=i;break;case"input":K(e,i),r=X(e,i),Li("invalid",e);break;case"option":default:r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=N({},i,{value:void 0}),Li("invalid",e);break;case"textarea":re(e,i),r=ie(e,i),Li("invalid",e)}for(s in ve(n,r),c=r)if(c.hasOwnProperty(s)){var d=c[s];"style"===s?ge(e,d):"dangerouslySetInnerHTML"===s?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===s?"string"===typeof d?("textarea"!==n||""!==d)&&he(e,d):"number"===typeof d&&he(e,""+d):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(o.hasOwnProperty(s)?null!=d&&"onScroll"===s&&Li("scroll",e):null!=d&&y(e,s,d,l))}switch(n){case"input":H(e),Z(e,i,!1);break;case"textarea":H(e),se(e);break;case"option":null!=i.value&&e.setAttribute("value",""+Q(i.value));break;case"select":e.multiple=!!i.multiple,null!=(s=i.value)?ne(e,!!i.multiple,s,!1):null!=i.defaultValue&&ne(e,!!i.multiple,i.defaultValue,!0);break;default:"function"===typeof r.onClick&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ho(t),null;case 6:if(e&&null!=t.stateNode)_o(e,t,e.memoizedProps,i);else{if("string"!==typeof i&&null===t.stateNode)throw Error(a(166));if(n=$a(Ga.current),$a(Wa.current),ua(t)){if(i=t.stateNode,n=t.memoizedProps,i[hr]=t,(s=i.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Ji(i.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ji(i.nodeValue,n,0!==(1&e.mode))}s&&(t.flags|=4)}else(i=(9===n.nodeType?n:n.ownerDocument).createTextNode(i))[hr]=t,t.stateNode=i}return Ho(t),null;case 13:if(kr(Za),i=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ra&&null!==ia&&0!==(1&t.mode)&&0===(128&t.flags))ha(),pa(),t.flags|=98560,s=!1;else if(s=ua(t),null!==i&&null!==i.dehydrated){if(null===e){if(!s)throw Error(a(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(a(317));s[hr]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ho(t),s=!1}else null!==aa&&(sc(aa),aa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((i=null!==i)!==(null!==e&&null!==e.memoizedState)&&i&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===_l&&(_l=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ho(t),null);case 4:return Ka(),zo(e,t),null===e&&Vi(t.stateNode.containerInfo),Ho(t),null;case 10:return Ca(t.type._context),Ho(t),null;case 19:if(kr(Za),null===(s=t.memoizedState))return Ho(t),null;if(i=0!==(128&t.flags),null===(l=s.rendering))if(i)Wo(s,!1);else{if(0!==_l||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=es(e))){for(t.flags|=128,Wo(s,!1),null!==(i=l.updateQueue)&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;null!==n;)e=i,(s=n).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Er(Za,1&Za.current|2),t.child}e=e.sibling}null!==s.tail&&qe()>Vl&&(t.flags|=128,i=!0,Wo(s,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=es(l))){if(t.flags|=128,i=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wo(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!ra)return Ho(t),null}else 2*qe()-s.renderingStartTime>Vl&&1073741824!==n&&(t.flags|=128,i=!0,Wo(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=s.last)?n.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=qe(),t.sibling=null,n=Za.current,Er(Za,i?1&n|2:1&n),t):(Ho(t),null);case 22:case 23:return uc(),i=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==i&&(t.flags|=8192),i&&0!==(1&t.mode)?0!==(1073741824&zl)&&(Ho(t),6&t.subtreeFlags&&(t.flags|=8192)):Ho(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function $o(e,t){switch(ta(t),t.tag){case 1:return zr(t.type)&&Dr(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ka(),kr(Pr),kr(Tr),ns(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(kr(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return kr(Za),null;case 4:return Ka(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Bo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zo=function(){},Do=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,$a(Wa.current);var a,s=null;switch(n){case"input":r=X(e,r),i=X(e,i),s=[];break;case"select":r=N({},r,{value:void 0}),i=N({},i,{value:void 0}),s=[];break;case"textarea":r=ie(e,r),i=ie(e,i),s=[];break;default:"function"!==typeof r.onClick&&"function"===typeof i.onClick&&(e.onclick=Zi)}for(d in ve(n,i),n=null,r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&null!=r[d])if("style"===d){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(o.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var c=i[d];if(l=null!=r?r[d]:void 0,i.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(s=s||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(s=s||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(o.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Li("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}},_o=function(e,t,n,i){n!==i&&(t.flags|=4)};var Xo=!1,Ko=!1,qo="function"===typeof WeakSet?WeakSet:Set,Jo=null;function Zo(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(i){Sc(e,t,i)}else n.current=null}function el(e,t,n){try{n()}catch(i){Sc(e,t,i)}}var tl=!1;function nl(e,t,n){var i=t.updateQueue;if(null!==(i=null!==i?i.lastEffect:null)){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,void 0!==a&&el(t,n,a)}r=r.next}while(r!==i)}}function il(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function rl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[hr],delete t[pr],delete t[mr],delete t[gr],delete t[xr])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ol(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zi));else if(4!==i&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==i&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,ul=!1;function hl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(rt,n)}catch(o){}switch(n.tag){case 5:Ko||Zo(n,t);case 6:var i=dl,r=ul;dl=null,hl(e,t,n),ul=r,null!==(dl=i)&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?lr(e.parentNode,n):1===e.nodeType&&lr(e,n),Vt(e)):lr(dl,n.stateNode));break;case 4:i=dl,r=ul,dl=n.stateNode.containerInfo,ul=!0,hl(e,t,n),dl=i,ul=r;break;case 0:case 11:case 14:case 15:if(!Ko&&(null!==(i=n.updateQueue)&&null!==(i=i.lastEffect))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,void 0!==s&&(0!==(2&a)||0!==(4&a))&&el(n,t,s),r=r.next}while(r!==i)}hl(e,t,n);break;case 1:if(!Ko&&(Zo(n,t),"function"===typeof(i=n.stateNode).componentWillUnmount))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Sc(n,t,o)}hl(e,t,n);break;case 21:hl(e,t,n);break;case 22:1&n.mode?(Ko=(i=Ko)||null!==n.memoizedState,hl(e,t,n),Ko=i):hl(e,t,n);break;default:hl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new qo),t.forEach((function(t){var i=Tc.bind(null,e,t);n.has(t)||(n.add(t),t.then(i,i))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var i=0;i<n.length;i++){var r=n[i];try{var s=e,o=t,l=o;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,ul=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===dl)throw Error(a(160));pl(s,o,r),dl=null,ul=!1;var c=r.alternate;null!==c&&(c.return=null),r.return=null}catch(d){Sc(r,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&i){try{nl(3,e,e.return),il(3,e)}catch(g){Sc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Sc(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&i&&null!==n&&Zo(n,n.return);break;case 5:if(ml(t,e),xl(e),512&i&&null!==n&&Zo(n,n.return),32&e.flags){var r=e.stateNode;try{he(r,"")}catch(g){Sc(e,e.return,g)}}if(4&i&&null!=(r=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===s.type&&null!=s.name&&q(r,s),ye(l,o);var d=ye(l,s);for(o=0;o<c.length;o+=2){var u=c[o],h=c[o+1];"style"===u?ge(r,h):"dangerouslySetInnerHTML"===u?ue(r,h):"children"===u?he(r,h):y(r,u,h,d)}switch(l){case"input":J(r,s);break;case"textarea":ae(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?ne(r,!!s.multiple,f,!1):p!==!!s.multiple&&(null!=s.defaultValue?ne(r,!!s.multiple,s.defaultValue,!0):ne(r,!!s.multiple,s.multiple?[]:"",!1))}r[pr]=s}catch(g){Sc(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&i){if(null===e.stateNode)throw Error(a(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(g){Sc(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&i&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(g){Sc(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(r=e.child).flags&&(s=null!==r.memoizedState,r.stateNode.isHidden=s,!s||null!==r.alternate&&null!==r.alternate.memoizedState||(Ul=qe())),4&i&&fl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Ko=(d=Ko)||u,ml(t,e),Ko=d):ml(t,e),xl(e),8192&i){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Jo=e,u=e.child;null!==u;){for(h=Jo=u;null!==Jo;){switch(f=(p=Jo).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:Zo(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){i=p,n=p.return;try{t=i,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Sc(i,n,g)}}break;case 5:Zo(p,p.return);break;case 22:if(null!==p.memoizedState){bl(h);continue}}null!==f?(f.return=p,Jo=f):bl(h)}u=u.sibling}e:for(u=null,h=e;;){if(5===h.tag){if(null===u){u=h;try{r=h.stateNode,d?"function"===typeof(s=r.style).setProperty?s.setProperty("display","none","important"):s.display="none":(l=h.stateNode,o=void 0!==(c=h.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",o))}catch(g){Sc(e,e.return,g)}}}else if(6===h.tag){if(null===u)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(g){Sc(e,e.return,g)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ml(t,e),xl(e),4&i&&fl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(sl(n)){var i=n;break e}n=n.return}throw Error(a(160))}switch(i.tag){case 5:var r=i.stateNode;32&i.flags&&(he(r,""),i.flags&=-33),cl(e,ol(e),r);break;case 3:case 4:var s=i.stateNode.containerInfo;ll(e,ol(e),s);break;default:throw Error(a(161))}}catch(o){Sc(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Jo=e,yl(e,t,n)}function yl(e,t,n){for(var i=0!==(1&e.mode);null!==Jo;){var r=Jo,a=r.child;if(22===r.tag&&i){var s=null!==r.memoizedState||Xo;if(!s){var o=r.alternate,l=null!==o&&null!==o.memoizedState||Ko;o=Xo;var c=Ko;if(Xo=s,(Ko=l)&&!c)for(Jo=r;null!==Jo;)l=(s=Jo).child,22===s.tag&&null!==s.memoizedState?jl(r):null!==l?(l.return=s,Jo=l):jl(r);for(;null!==a;)Jo=a,yl(a,t,n),a=a.sibling;Jo=r,Xo=o,Ko=c}wl(e)}else 0!==(8772&r.subtreeFlags)&&null!==a?(a.return=r,Jo=a):wl(e)}}function wl(e){for(;null!==Jo;){var t=Jo;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ko||il(5,t);break;case 1:var i=t.stateNode;if(4&t.flags&&!Ko)if(null===n)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:to(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ya(t,s,i);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ya(t,o,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var h=u.dehydrated;null!==h&&Vt(h)}}}break;default:throw Error(a(163))}Ko||512&t.flags&&rl(t)}catch(p){Sc(t,t.return,p)}}if(t===e){Jo=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jo=n;break}Jo=t.return}}function bl(e){for(;null!==Jo;){var t=Jo;if(t===e){Jo=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jo=n;break}Jo=t.return}}function jl(e){for(;null!==Jo;){var t=Jo;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(l){Sc(t,n,l)}break;case 1:var i=t.stateNode;if("function"===typeof i.componentDidMount){var r=t.return;try{i.componentDidMount()}catch(l){Sc(t,r,l)}}var a=t.return;try{rl(t)}catch(l){Sc(t,a,l)}break;case 5:var s=t.return;try{rl(t)}catch(l){Sc(t,s,l)}}}catch(l){Sc(t,t.return,l)}if(t===e){Jo=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Jo=o;break}Jo=t.return}}var Al,Sl=Math.ceil,kl=w.ReactCurrentDispatcher,El=w.ReactCurrentOwner,Cl=w.ReactCurrentBatchConfig,Tl=0,Pl=null,Il=null,Bl=0,zl=0,Dl=Sr(0),_l=0,Ml=null,Ol=0,Nl=0,Rl=0,Ll=null,Fl=null,Ul=0,Vl=1/0,Yl=null,Ql=!1,Wl=null,Hl=null,Gl=!1,$l=null,Xl=0,Kl=0,ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Tl)?qe():-1!==Jl?Jl:Jl=qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Bl?Bl&-Bl:null!==ma.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function nc(e,t,n,i){if(50<Kl)throw Kl=0,ql=null,Error(a(185));xt(e,n,i),0!==(2&Tl)&&e===Pl||(e===Pl&&(0===(2&Tl)&&(Nl|=n),4===_l&&oc(e,Bl)),ic(e,i),1===n&&0===Tl&&0===(1&t.mode)&&(Vl=qe()+500,Lr&&Vr()))}function ic(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-st(a),o=1<<s,l=r[s];-1===l?0!==(o&n)&&0===(o&i)||(r[s]=pt(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}(e,t);var i=ht(e,e===Pl?Bl:0);if(0===i)null!==n&&$e(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=n&&$e(n),1===t)0===e.tag?function(e){Lr=!0,Ur(e)}(lc.bind(null,e)):Ur(lc.bind(null,e)),sr((function(){0===(6&Tl)&&Vr()})),n=null;else{switch(wt(i)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=it}n=Pc(n,rc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rc(e,t){if(Jl=-1,Zl=0,0!==(6&Tl))throw Error(a(327));var n=e.callbackNode;if(jc()&&e.callbackNode!==n)return null;var i=ht(e,e===Pl?Bl:0);if(0===i)return null;if(0!==(30&i)||0!==(i&e.expiredLanes)||t)t=gc(e,i);else{t=i;var r=Tl;Tl|=2;var s=fc();for(Pl===e&&Bl===t||(Yl=null,Vl=qe()+500,hc(e,t));;)try{vc();break}catch(l){pc(e,l)}Ea(),kl.current=s,Tl=r,null!==Il?t=0:(Pl=null,Bl=0,t=_l)}if(0!==t){if(2===t&&(0!==(r=ft(e))&&(i=r,t=ac(e,r))),1===t)throw n=Ml,hc(e,0),oc(e,i),ic(e,qe()),n;if(6===t)oc(e,i);else{if(r=e.current.alternate,0===(30&i)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!oi(a(),r))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(r)&&(2===(t=gc(e,i))&&(0!==(s=ft(e))&&(i=s,t=ac(e,s))),1===t))throw n=Ml,hc(e,0),oc(e,i),ic(e,qe()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(a(345));case 2:case 5:bc(e,Fl,Yl);break;case 3:if(oc(e,i),(130023424&i)===i&&10<(t=Ul+500-qe())){if(0!==ht(e,0))break;if(((r=e.suspendedLanes)&i)!==i){ec(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ir(bc.bind(null,e,Fl,Yl),t);break}bc(e,Fl,Yl);break;case 4:if(oc(e,i),(4194240&i)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-st(i);s=1<<o,(o=t[o])>r&&(r=o),i&=~s}if(i=r,10<(i=(120>(i=qe()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sl(i/1960))-i)){e.timeoutHandle=ir(bc.bind(null,e,Fl,Yl),i);break}bc(e,Fl,Yl);break;default:throw Error(a(329))}}}return ic(e,qe()),e.callbackNode===n?rc.bind(null,e):null}function ac(e,t){var n=Ll;return e.current.memoizedState.isDehydrated&&(hc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Fl,Fl=n,null!==t&&sc(t)),e}function sc(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function oc(e,t){for(t&=~Rl,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),i=1<<n;e[n]=-1,t&=~i}}function lc(e){if(0!==(6&Tl))throw Error(a(327));jc();var t=ht(e,0);if(0===(1&t))return ic(e,qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var i=ft(e);0!==i&&(t=i,n=ac(e,i))}if(1===n)throw n=Ml,hc(e,0),oc(e,t),ic(e,qe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bc(e,Fl,Yl),ic(e,qe()),null}function cc(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Vl=qe()+500,Lr&&Vr())}}function dc(e){null!==$l&&0===$l.tag&&0===(6&Tl)&&jc();var t=Tl;Tl|=1;var n=Cl.transition,i=yt;try{if(Cl.transition=null,yt=1,e)return e()}finally{yt=i,Cl.transition=n,0===(6&(Tl=t))&&Vr()}}function uc(){zl=Dl.current,kr(Dl)}function hc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rr(n)),null!==Il)for(n=Il.return;null!==n;){var i=n;switch(ta(i),i.tag){case 1:null!==(i=i.type.childContextTypes)&&void 0!==i&&Dr();break;case 3:Ka(),kr(Pr),kr(Tr),ns();break;case 5:Ja(i);break;case 4:Ka();break;case 13:case 19:kr(Za);break;case 10:Ca(i.type._context);break;case 22:case 23:uc()}n=n.return}if(Pl=e,Il=e=Dc(e.current,null),Bl=zl=t,_l=0,Ml=null,Rl=Nl=Ol=0,Fl=Ll=null,null!==Ba){for(t=0;t<Ba.length;t++)if(null!==(i=(n=Ba[t]).interleaved)){n.interleaved=null;var r=i.next,a=n.pending;if(null!==a){var s=a.next;a.next=r,i.next=s}n.pending=i}Ba=null}return e}function pc(e,t){for(;;){var n=Il;try{if(Ea(),is.current=qs,cs){for(var i=ss.memoizedState;null!==i;){var r=i.queue;null!==r&&(r.pending=null),i=i.next}cs=!1}if(as=0,ls=os=ss=null,ds=!1,us=0,El.current=null,null===n||null===n.return){_l=1,Ml=t,Il=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=Bl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=l,h=u.tag;if(0===(1&u.mode)&&(0===h||11===h||15===h)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=go(o);if(null!==f){f.flags&=-257,xo(f,o,l,0,t),1&f.mode&&mo(s,d,t),c=d;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){mo(s,d,t),mc();break e}c=Error(a(426))}else if(ra&&1&l.mode){var x=go(o);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xo(x,o,l,0,t),fa(lo(c,l));break e}}s=c=lo(c,l),4!==_l&&(_l=2),null===Ll?Ll=[s]:Ll.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Ua(s,po(0,c,t));break e;case 1:l=c;var v=s.type,y=s.stateNode;if(0===(128&s.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Hl||!Hl.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t,Ua(s,fo(s,l,t));break e}}s=s.return}while(null!==s)}wc(n)}catch(w){t=w,Il===n&&null!==n&&(Il=n=n.return);continue}break}}function fc(){var e=kl.current;return kl.current=qs,null===e?qs:e}function mc(){0!==_l&&3!==_l&&2!==_l||(_l=4),null===Pl||0===(268435455&Ol)&&0===(268435455&Nl)||oc(Pl,Bl)}function gc(e,t){var n=Tl;Tl|=2;var i=fc();for(Pl===e&&Bl===t||(Yl=null,hc(e,t));;)try{xc();break}catch(r){pc(e,r)}if(Ea(),Tl=n,kl.current=i,null!==Il)throw Error(a(261));return Pl=null,Bl=0,_l}function xc(){for(;null!==Il;)yc(Il)}function vc(){for(;null!==Il&&!Xe();)yc(Il)}function yc(e){var t=Al(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?wc(e):Il=t,El.current=null}function wc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Go(n,t,zl)))return void(Il=n)}else{if(null!==(n=$o(n,t)))return n.flags&=32767,void(Il=n);if(null===e)return _l=6,void(Il=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Il=t);Il=t=e}while(null!==t);0===_l&&(_l=5)}function bc(e,t,n){var i=yt,r=Cl.transition;try{Cl.transition=null,yt=1,function(e,t,n,i){do{jc()}while(null!==$l);if(0!==(6&Tl))throw Error(a(327));n=e.finishedWork;var r=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-st(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}(e,s),e===Pl&&(Il=Pl=null,Bl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Gl||(Gl=!0,Pc(tt,(function(){return jc(),null}))),s=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||s){s=Cl.transition,Cl.transition=null;var o=yt;yt=1;var l=Tl;Tl|=4,El.current=null,function(e,t){if(er=Qt,pi(e=hi())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(i&&0!==i.rangeCount){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var o=0,l=-1,c=-1,d=0,u=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==r&&3!==h.nodeType||(l=o+r),h!==s||0!==i&&3!==h.nodeType||(c=o+i),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++d===r&&(l=o),p===s&&++u===i&&(c=o),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(tr={focusedElem:e,selectionRange:n},Qt=!1,Jo=t;null!==Jo;)if(e=(t=Jo).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jo=e;else for(;null!==Jo;){t=Jo;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:to(t.type,g),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(a(163))}}catch(b){Sc(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Jo=e;break}Jo=t.return}m=tl,tl=!1}(e,n),gl(n,e),fi(tr),Qt=!!er,tr=er=null,e.current=n,vl(n,e,r),Ke(),Tl=l,yt=o,Cl.transition=s}else e.current=n;if(Gl&&(Gl=!1,$l=e,Xl=r),s=e.pendingLanes,0===s&&(Hl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(rt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ic(e,qe()),null!==t)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,e=Wl,Wl=null,e;0!==(1&Xl)&&0!==e.tag&&jc(),s=e.pendingLanes,0!==(1&s)?e===ql?Kl++:(Kl=0,ql=e):Kl=0,Vr()}(e,t,n,i)}finally{Cl.transition=r,yt=i}return null}function jc(){if(null!==$l){var e=wt(Xl),t=Cl.transition,n=yt;try{if(Cl.transition=null,yt=16>e?16:e,null===$l)var i=!1;else{if(e=$l,$l=null,Xl=0,0!==(6&Tl))throw Error(a(331));var r=Tl;for(Tl|=4,Jo=e.current;null!==Jo;){var s=Jo,o=s.child;if(0!==(16&Jo.flags)){var l=s.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Jo=d;null!==Jo;){var u=Jo;switch(u.tag){case 0:case 11:case 15:nl(8,u,s)}var h=u.child;if(null!==h)h.return=u,Jo=h;else for(;null!==Jo;){var p=(u=Jo).sibling,f=u.return;if(al(u),u===d){Jo=null;break}if(null!==p){p.return=f,Jo=p;break}Jo=f}}}var m=s.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Jo=s}}if(0!==(2064&s.subtreeFlags)&&null!==o)o.return=s,Jo=o;else e:for(;null!==Jo;){if(0!==(2048&(s=Jo).flags))switch(s.tag){case 0:case 11:case 15:nl(9,s,s.return)}var v=s.sibling;if(null!==v){v.return=s.return,Jo=v;break e}Jo=s.return}}var y=e.current;for(Jo=y;null!==Jo;){var w=(o=Jo).child;if(0!==(2064&o.subtreeFlags)&&null!==w)w.return=o,Jo=w;else e:for(o=y;null!==Jo;){if(0!==(2048&(l=Jo).flags))try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(j){Sc(l,l.return,j)}if(l===o){Jo=null;break e}var b=l.sibling;if(null!==b){b.return=l.return,Jo=b;break e}Jo=l.return}}if(Tl=r,Vr(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(rt,e)}catch(j){}i=!0}return i}finally{yt=n,Cl.transition=t}}return!1}function Ac(e,t,n){e=La(e,t=po(0,t=lo(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),ic(e,t))}function Sc(e,t,n){if(3===e.tag)Ac(e,e,n);else for(;null!==t;){if(3===t.tag){Ac(t,e,n);break}if(1===t.tag){var i=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof i.componentDidCatch&&(null===Hl||!Hl.has(i))){t=La(t,e=fo(t,e=lo(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),ic(t,e));break}}t=t.return}}function kc(e,t,n){var i=e.pingCache;null!==i&&i.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Pl===e&&(Bl&n)===n&&(4===_l||3===_l&&(130023424&Bl)===Bl&&500>qe()-Ul?hc(e,0):Rl|=n),ic(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var n=ec();null!==(e=_a(e,t))&&(xt(e,t,n),ic(e,n))}function Cc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}null!==i&&i.delete(t),Ec(e,n)}function Pc(e,t){return Ge(e,t)}function Ic(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bc(e,t,n,i){return new Ic(e,t,n,i)}function zc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dc(e,t){var n=e.alternate;return null===n?((n=Bc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _c(e,t,n,i,r,s){var o=2;if(i=e,"function"===typeof e)zc(e)&&(o=1);else if("string"===typeof e)o=5;else e:switch(e){case A:return Mc(n.children,r,s,t);case S:o=8,r|=8;break;case k:return(e=Bc(12,n,t,2|r)).elementType=k,e.lanes=s,e;case P:return(e=Bc(13,n,t,r)).elementType=P,e.lanes=s,e;case I:return(e=Bc(19,n,t,r)).elementType=I,e.lanes=s,e;case D:return Oc(n,r,s,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:o=10;break e;case C:o=9;break e;case T:o=11;break e;case B:o=14;break e;case z:o=16,i=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Bc(o,n,t,r)).elementType=e,t.type=i,t.lanes=s,t}function Mc(e,t,n,i){return(e=Bc(7,e,i,t)).lanes=n,e}function Oc(e,t,n,i){return(e=Bc(22,e,i,t)).elementType=D,e.lanes=n,e.stateNode={isHidden:!1},e}function Nc(e,t,n){return(e=Bc(6,e,null,t)).lanes=n,e}function Rc(e,t,n){return(t=Bc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lc(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,i,r,a,s,o,l){return e=new Lc(e,t,n,o,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Bc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(a),e}function Uc(e){if(!e)return Cr;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(zr(n))return Mr(e,n,t)}return t}function Vc(e,t,n,i,r,a,s,o,l){return(e=Fc(n,i,!0,e,0,a,0,o,l)).context=Uc(null),n=e.current,(a=Ra(i=ec(),r=tc(n))).callback=void 0!==t&&null!==t?t:null,La(n,a,r),e.current.lanes=r,xt(e,r,i),ic(e,i),e}function Yc(e,t,n,i){var r=t.current,a=ec(),s=tc(r);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ra(a,s)).payload={element:e},null!==(i=void 0===i?null:i)&&(t.callback=i),null!==(e=La(r,t,s))&&(nc(e,r,s,a),Fa(e,r,s)),s}function Qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}Al=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pr.current)yo=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yo=!1,function(e,t,n){switch(t.tag){case 3:Po(t),pa();break;case 5:qa(t);break;case 1:zr(t.type)&&Or(t);break;case 4:Xa(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;Er(ja,i._currentValue),i._currentValue=r;break;case 13:if(null!==(i=t.memoizedState))return null!==i.dehydrated?(Er(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?No(e,t,n):(Er(Za,1&Za.current),null!==(e=Qo(e,t,n))?e.sibling:null);Er(Za,1&Za.current);break;case 19:if(i=0!==(n&t.childLanes),0!==(128&e.flags)){if(i)return Vo(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),Er(Za,Za.current),i)break;return null;case 22:case 23:return t.lanes=0,So(e,t,n)}return Qo(e,t,n)}(e,t,n);yo=0!==(131072&e.flags)}else yo=!1,ra&&0!==(1048576&t.flags)&&Zr(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Yo(e,t),e=t.pendingProps;var r=Br(t,Tr.current);Pa(t,n),r=ms(null,t,i,e,r,n);var s=gs();return t.flags|=1,"object"===typeof r&&null!==r&&"function"===typeof r.render&&void 0===r.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zr(i)?(s=!0,Or(t)):s=!1,t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,Oa(t),r.updater=io,t.stateNode=r,r._reactInternals=t,oo(t,i,e,n),t=To(null,t,i,!0,s,n)):(t.tag=0,ra&&s&&ea(t),wo(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Yo(e,t),e=t.pendingProps,i=(r=i._init)(i._payload),t.type=i,r=t.tag=function(e){if("function"===typeof e)return zc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===B)return 14}return 2}(i),e=to(i,e),r){case 0:t=Eo(null,t,i,e,n);break e;case 1:t=Co(null,t,i,e,n);break e;case 11:t=bo(null,t,i,e,n);break e;case 14:t=jo(null,t,i,to(i.type,e),n);break e}throw Error(a(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,Eo(e,t,i,r=t.elementType===i?r:to(i,r),n);case 1:return i=t.type,r=t.pendingProps,Co(e,t,i,r=t.elementType===i?r:to(i,r),n);case 3:e:{if(Po(t),null===e)throw Error(a(387));i=t.pendingProps,r=(s=t.memoizedState).element,Na(e,t),Va(t,i,null,n);var o=t.memoizedState;if(i=o.element,s.isDehydrated){if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Io(e,t,i,n,r=lo(Error(a(423)),t));break e}if(i!==r){t=Io(e,t,i,n,r=lo(Error(a(424)),t));break e}for(ia=cr(t.stateNode.containerInfo.firstChild),na=t,ra=!0,aa=null,n=ba(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),i===r){t=Qo(e,t,n);break e}wo(e,t,i,n)}t=t.child}return t;case 5:return qa(t),null===e&&ca(t),i=t.type,r=t.pendingProps,s=null!==e?e.memoizedProps:null,o=r.children,nr(i,r)?o=null:null!==s&&nr(i,s)&&(t.flags|=32),ko(e,t),wo(e,t,o,n),t.child;case 6:return null===e&&ca(t),null;case 13:return No(e,t,n);case 4:return Xa(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=wa(t,null,i,n):wo(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,bo(e,t,i,r=t.elementType===i?r:to(i,r),n);case 7:return wo(e,t,t.pendingProps,n),t.child;case 8:case 12:return wo(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,s=t.memoizedProps,o=r.value,Er(ja,i._currentValue),i._currentValue=o,null!==s)if(oi(s.value,o)){if(s.children===r.children&&!Pr.current){t=Qo(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var l=s.dependencies;if(null!==l){o=s.child;for(var c=l.firstContext;null!==c;){if(c.context===i){if(1===s.tag){(c=Ra(-1,n&-n)).tag=2;var d=s.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,null!==(c=s.alternate)&&(c.lanes|=n),Ta(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(a(341));o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),Ta(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}wo(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Pa(t,n),i=i(r=Ia(r)),t.flags|=1,wo(e,t,i,n),t.child;case 14:return r=to(i=t.type,t.pendingProps),jo(e,t,i,r=to(i.type,r),n);case 15:return Ao(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:to(i,r),Yo(e,t),t.tag=1,zr(i)?(e=!0,Or(t)):e=!1,Pa(t,n),ao(t,i,r),oo(t,i,r,n),To(null,t,i,!0,e,n);case 19:return Vo(e,t,n);case 22:return So(e,t,n)}throw Error(a(156,t.tag))};var Gc="function"===typeof reportError?reportError:function(e){console.error(e)};function $c(e){this._internalRoot=e}function Xc(e){this._internalRoot=e}function Kc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if("function"===typeof r){var o=r;r=function(){var e=Qc(s);o.call(e)}}Yc(t,s,e,r)}else s=function(e,t,n,i,r){if(r){if("function"===typeof i){var a=i;i=function(){var e=Qc(s);a.call(e)}}var s=Vc(t,i,e,0,null,!1,0,"",Jc);return e._reactRootContainer=s,e[fr]=s.current,Vi(8===e.nodeType?e.parentNode:e),dc(),s}for(;r=e.lastChild;)e.removeChild(r);if("function"===typeof i){var o=i;i=function(){var e=Qc(l);o.call(e)}}var l=Fc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[fr]=l.current,Vi(8===e.nodeType?e.parentNode:e),dc((function(){Yc(t,l,n,i)})),l}(n,t,e,r,i);return Qc(s)}Xc.prototype.render=$c.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Yc(e,t,null,null)},Xc.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc((function(){Yc(null,e,null,null)})),t[fr]=null}},Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&0!==t&&t<Dt[n].priority;n++);Dt.splice(n,0,e),0===n&&Nt(e)}},bt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(vt(t,1|n),ic(t,qe()),0===(6&Tl)&&(Vl=qe()+500,Vr()))}break;case 13:dc((function(){var t=_a(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Hc(e,1)}},jt=function(e){if(13===e.tag){var t=_a(e,134217728);if(null!==t)nc(t,e,134217728,ec());Hc(e,134217728)}},At=function(e){if(13===e.tag){var t=tc(e),n=_a(e,t);if(null!==n)nc(n,e,t,ec());Hc(e,t)}},St=function(){return yt},kt=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},je=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=br(i);if(!r)throw Error(a(90));G(i),J(i,r)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=cc,Pe=dc;var ed={usingClientEntryPoint:!1,Events:[yr,wr,br,Ee,Ce,cc]},td={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var id=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!id.isDisabled&&id.supportsFiber)try{rt=id.inject(nd),at=id}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Kc(t))throw Error(a(200));return function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:j,key:null==i?null:""+i,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Kc(e))throw Error(a(299));var n=!1,i="",r=Gc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(r=t.onRecoverableError)),t=Fc(e,1,!1,null,0,n,0,i,r),e[fr]=t.current,Vi(8===e.nodeType?e.parentNode:e),new $c(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,n){if(!qc(t))throw Error(a(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Kc(e))throw Error(a(405));var i=null!=n&&n.hydratedSources||null,r=!1,s="",o=Gc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=Vc(t,null,e,1,null!=n?n:null,r,0,s,o),e[fr]=t.current,Vi(e),i)for(e=0;e<i.length;e++)r=(r=(n=i[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Xc(t)},t.render=function(e,t,n){if(!qc(t))throw Error(a(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qc(e))throw Error(a(40));return!!e._reactRootContainer&&(dc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[fr]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!qc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,n,!1,i)},t.version="18.3.1-next-f1338f8080-20240426"},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},8487:(e,t,n)=>{"use strict";t.A=void 0;var i,r=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(5043)),a=(i=n(5173))&&i.__esModule?i:{default:i};function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?d(e):t}(this,c(t).call(this))).state={className:e.classNameNotInView,childProps:e.childPropsNotInView},n.onIntersectionAll=n.onIntersectionAll.bind(d(n)),n.onIntersection=n.onIntersection.bind(d(n)),n.isFirstInView=!0,n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){if(window.IntersectionObserver){var e=this.props,t=e.useInviewMonitor,n=e.intoViewMargin,i=e.threshold;if(this._element&&t&&("function"!==typeof t||t())){var r={rootMargin:n,threshold:i};this.observer=new window.IntersectionObserver(this.onIntersectionAll,r),this.observer.observe(this._element)}}else console.error("react-inview-monitor found no support for IntersectionObserver.\nPerhaps use a polyfill like: https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver ?")}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.disconnect()}},{key:"onIntersectionAll",value:function(e){e.forEach(this.onIntersection)}},{key:"onIntersection",value:function(e){if(e.target===this._element){var t=this.props,n=t.classNameNotInView,i=t.classNameInView,r=t.classNameAboveView,a=t.classNameNotAboveView,s=t.toggleClassNameOnInView,o=t.childPropsInView,l=t.childPropsNotInView,c=t.toggleChildPropsOnInView,d=t.onInView,u=t.onNotInView,h=t.repeatOnInView,p=e.isIntersecting,f=p&&this.isFirstInView;f&&(this.isFirstInView=!1);var m=("string"===typeof i||"string"===typeof r)&&s,g=o&&c,x=m||g||(d||u)&&h;if(p&&!x){var v={};return"string"===typeof i&&(v.className=i),o&&(v.childProps=o),Object.keys(v).length&&this.setState(v),d&&"function"===typeof d&&d(e),void this.observer.unobserve(e.target)}if(x){if("string"===typeof r)return void(!p&&e.boundingClientRect.top<=0?this.setState({className:r}):this.setState({className:a||""}));if(p){var y={};(m||f)&&(y.className=i),(g||f)&&(y.childProps=o),Object.keys(y).length&&this.setState(y),d&&"function"===typeof d&&d(e)}else{var w={};m&&(w.className=n),g&&(w.childProps=l),Object.keys(w).length&&this.setState(w),u&&"function"===typeof u&&u(e)}}}}},{key:"render",value:function(){var e=this,t=this.state,n=t.childProps,i=t.className,a=this.props,s=(a.useInviewMonitor,a.children);return n&&Object.keys(n).length&&(s=r.default.cloneElement(s,n)),r.default.createElement("div",{className:i,ref:function(t){t&&(e._element=t)}},s)}}])&&l(n.prototype,i),a&&l(n,a),t}(r.Component);h.propTypes={classNameInView:a.default.string,classNameNotInView:a.default.string,classNameAboveView:a.default.string,classNameNotAboveView:a.default.string,toggleClassNameOnInView:a.default.bool,childPropsInView:a.default.object,childPropsNotInView:a.default.object,toggleChildPropsOnInView:a.default.bool,onInView:a.default.func,onNotInView:a.default.func,repeatOnInView:a.default.bool,useInviewMonitor:a.default.func,intoViewMargin:a.default.string,threshold:a.default.number},h.defaultProps={classNameNotInView:"",childPropsNotInView:{},useInviewMonitor:function(){return!0},intoViewMargin:"-20%",threshold:0};var p=h;t.A=p},7864:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=s(n(5043)),a=s(n(1380));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){return r.default.createElement("button",this.props,this.props.children)}}]),t}(r.default.Component);t.default=(0,a.default)(o)},3318:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=l(n(5043)),s=l(n(4182)),o=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this,t=i({},this.props);return delete t.name,t.parentBindings&&delete t.parentBindings,a.default.createElement("div",i({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);c.propTypes={name:o.default.string,id:o.default.string},t.default=(0,s.default)(c)},1556:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(5043)),r=a(n(1380));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var o=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.render=function(){return i.default.createElement("a",r.props,r.props.children)},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(i.default.Component);t.default=(0,r.default)(o)},9473:(e,t,n)=>{"use strict";t.Nk=t.N_=void 0;var i=p(n(1556)),r=p(n(7864)),a=p(n(3318)),s=p(n(9080)),o=p(n(9529)),l=p(n(2040)),c=p(n(3177)),d=p(n(1380)),u=p(n(4182)),h=p(n(6789));function p(e){return e&&e.__esModule?e:{default:e}}t.N_=i.default,r.default,a.default,s.default,o.default,l.default,t.Nk=c.default,d.default,u.default,h.default,i.default,r.default,a.default,s.default,o.default,l.default,c.default,d.default,u.default,h.default},6789:(e,t,n)=>{"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(5043),c=(n(7950),n(2401),n(2040)),d=n(9080),u=n(5173),h=n(2296),p={to:u.string.isRequired,containerId:u.string,container:u.object,activeClass:u.string,spy:u.bool,smooth:u.oneOfType([u.bool,u.string]),offset:u.number,delay:u.number,isDynamic:u.bool,onClick:u.func,duration:u.oneOfType([u.number,u.func]),absolute:u.bool,onSetActive:u.func,onSetInactive:u.func,ignoreCancelEvents:u.bool,hashSpy:u.bool,spyThrottle:u.number},f={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||d,u=function(t){function d(e){a(this,d);var t=s(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e));return f.call(t),t.state={active:!1},t}return o(d,t),r(d,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();c.isMounted(e)||c.mount(e,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(n),h.mapContainer(this.props.to,e)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=i({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),d}(l.Component),f=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,i({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var i=e.getScrollSpyContainer();if(!h.isMounted()||h.isInitialized()){var r=e.props.to,a=null,s=0,o=0,l=0;if(i.getBoundingClientRect)l=i.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var d=a.getBoundingClientRect();o=(s=d.top-l+t)+d.height}var u=t-e.props.offset,p=u>=Math.floor(s)&&u<Math.floor(o),f=u<Math.floor(s)||u>=Math.floor(o),m=n.getActiveLink();return f?(r===m&&n.setActiveLink(void 0),e.props.hashSpy&&h.getHash()===r&&h.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),c.updateStates()):p&&m!==r?(n.setActiveLink(r),e.props.hashSpy&&h.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),c.updateStates()):void 0}}};return u.propTypes=p,u.defaultProps={offset:0},u},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return o(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;d.unregister(this.props.name)}},{key:"registerElems",value:function(e){d.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,i({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return t.propTypes={name:u.string,id:u.string},t}};e.exports=f},3177:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=(o(n(2401)),o(n(6580))),a=o(n(3996)),s=o(n(9529));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return r.default[e.smooth]||r.default.defaultEasing},c=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},d=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,i="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,i="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},h=function e(t,n,i){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var a=e.bind(null,t,n);c.call(window,a)}else s.default.registered.end&&s.default.registered.end(r.to,r.target,r.currentPosition);else s.default.registered.end&&s.default.registered.end(r.to,r.target,r.currentPositionY)},p=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},f=function(e,t,n,i){t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout);if(a.default.subscribe((function(){t.data.cancel=!0})),p(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?d(t):u(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var r;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"===typeof(r=t.duration)?r:function(){return r})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=i;var o=l(t),f=h.bind(null,o,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){s.default.registered.begin&&s.default.registered.begin(t.data.to,t.data.target),c.call(window,f)}),t.delay):(s.default.registered.begin&&s.default.registered.begin(t.data.to,t.data.target),c.call(window,f))}else s.default.registered.end&&s.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},m=function(e){return(e=i({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:f,getAnimationType:l,scrollToTop:function(e){f(0,m(e))},scrollToBottom:function(e){e=m(e),p(e),f(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,i=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,i=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)}(e),e)},scrollTo:function(e,t){f(e,m(t))},scrollMore:function(e,t){t=m(t),p(t);var n=t.horizontal?d(t):u(t);f(e+n,t)}}},3996:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1836),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!==typeof document&&r.forEach((function(t){return(0,i.addPassiveEventListener)(document,t,e)}))}}},1836:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,i){var r=i.name;r||(r=t,console.warn("Listener must be a named function.")),n.has(t)||n.set(t,new Set);var a=n.get(t);if(!a.has(r)){var s=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,i,!!s&&{passive:!0}),a.add(r)}},t.removePassiveEventListener=function(e,t,i){e.removeEventListener(t,i),n.get(t).delete(i.name||t)};var n=new Map},4182:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=l(n(5043)),s=(l(n(7950)),l(n(9080))),o=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;s.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){s.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,i({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:o.default.string,id:o.default.string},t}},9529:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},2296:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1836);var i,r=n(2401),a=(i=r)&&i.__esModule?i:{default:i};var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var i=this.containers[e]||document;n.scrollTo(e,{container:i})}},getHash:function(){return a.default.getHash()},changeHash:function(e,t){this.isInitialized()&&a.default.getHash()!==e&&a.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=s},1380:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=d(n(5043)),s=d(n(2040)),o=d(n(9080)),l=d(n(5173)),c=d(n(2296));function d(e){return e&&e.__esModule?e:{default:e}}var u={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};t.default=function(e,t){var n=t||o.default,l=function(t){function o(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return d.call(t),t.state={active:!1},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,t),r(o,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();s.default.isMounted(e)||s.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(c.default.isMounted()||c.default.mount(n),c.default.mapContainer(this.props.to,e)),s.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){s.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?i({},this.props.style,this.props.activeStyle):i({},this.props.style);var r=i({},this.props);for(var s in u)r.hasOwnProperty(s)&&delete r[s];return r.className=t,r.style=n,r.onClick=this.handleClick,a.default.createElement(e,r)}}]),o}(a.default.PureComponent),d=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,i({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,i){var r=e.getScrollSpyContainer();if(!c.default.isMounted()||c.default.isInitialized()){var a=e.props.horizontal,s=e.props.to,o=null,l=void 0,d=void 0;if(a){var u=0,h=0,p=0;if(r.getBoundingClientRect)p=r.getBoundingClientRect().left;if(!o||e.props.isDynamic){if(!(o=n.get(s)))return;var f=o.getBoundingClientRect();h=(u=f.left-p+t)+f.width}var m=t-e.props.offset;l=m>=Math.floor(u)&&m<Math.floor(h),d=m<Math.floor(u)||m>=Math.floor(h)}else{var g=0,x=0,v=0;if(r.getBoundingClientRect)v=r.getBoundingClientRect().top;if(!o||e.props.isDynamic){if(!(o=n.get(s)))return;var y=o.getBoundingClientRect();x=(g=y.top-v+i)+y.height}var w=i-e.props.offset;l=w>=Math.floor(g)&&w<Math.floor(x),d=w<Math.floor(g)||w>=Math.floor(x)}var b=n.getActiveLink();if(d){if(s===b&&n.setActiveLink(void 0),e.props.hashSpy&&c.default.getHash()===s){var j=e.props.saveHashHistory,A=void 0!==j&&j;c.default.changeHash("",A)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(s,o))}if(l&&(b!==s||!1===e.state.active)){n.setActiveLink(s);var S=e.props.saveHashHistory,k=void 0!==S&&S;e.props.hashSpy&&c.default.changeHash(s,k),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(s,o))}}}};return l.propTypes=u,l.defaultProps={offset:0},l}},2040:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(381),a=(i=r)&&i.__esModule?i:{default:i},s=n(1836);var o={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,a.default)(e,t)}((function(t){o.scrollHandler(e)}),t);o.scrollSpyContainers.push(e),(0,s.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return-1!==o.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(o.scrollSpyContainers[o.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(o.currentPositionX(e),o.currentPositionY(e))}))},addStateHandler:function(e){o.spySetState.push(e)},addSpyHandler:function(e,t){var n=o.scrollSpyContainers[o.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(o.currentPositionX(t),o.currentPositionY(t))},updateStates:function(){o.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){o.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),o.spySetState&&o.spySetState.length&&o.spySetState.indexOf(e)>-1&&o.spySetState.splice(o.spySetState.indexOf(e),1),document.removeEventListener("scroll",o.scrollHandler)},update:function(){return o.scrollSpyContainers.forEach((function(e){return o.scrollHandler(e)}))}};t.default=o},9080:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=o(n(2401)),a=o(n(3177)),s=o(n(9529));function o(e){return e&&e.__esModule?e:{default:e}}var l={},c=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return c=e},getActiveLink:function(){return c},scrollTo:function(e,t){var n=this.get(e);if(n){var o=(t=i({},t,{absolute:!1})).containerId,l=t.container,c=void 0;c=o?document.getElementById(o):l&&l.nodeType?l:document,t.absolute=!0;var d=t.horizontal,u=r.default.scrollOffset(c,n,d)+(t.offset||0);if(!t.smooth)return s.default.registered.begin&&s.default.registered.begin(e,n),c===document?t.horizontal?window.scrollTo(u,0):window.scrollTo(0,u):c.scrollTop=u,void(s.default.registered.end&&s.default.registered.end(e,n));a.default.animateTopScroll(u,t,e,n)}else console.warn("target Element not found")}}},6580:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},2401:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,i=e.offsetParent;i&&!t(i);)n+=i.offsetTop,i=i.offsetParent;return{offsetTop:n,offsetParent:i}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,i=n?"#"+n:"",r=window&&window.location,a=i?r.pathname+r.search+i:r.pathname+r.search;t?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,i){if(i)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var r=n(t,(function(t){return t===e||t===document})),a=r.offsetTop;if(r.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var s=function(e){return e===document};return n(t,s).offsetTop-n(e,s).offsetTop}}},1153:(e,t,n)=>{"use strict";var i=n(5043),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,a={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var w=y.prototype=new v;w.constructor=y,m(w,x.prototype),w.isPureReactComponent=!0;var b=Array.isArray,j=Object.prototype.hasOwnProperty,A={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,i){var r,a={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=i;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:n,type:e,key:s,ref:o,props:a,_owner:A.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,a,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case i:l=!0}}if(l)return s=s(l=e),e=""===a?"."+T(l,0):a,b(s)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),P(s,t,r,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",b(e))for(var c=0;c<e.length;c++){var d=a+T(o=e[c],c);l+=P(o,t,r,d,s)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(o=e.next()).done;)l+=P(o=o.value,t,r,d=a+T(o,c++),s);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function I(e,t,n){if(null==e)return e;var i=[],r=0;return P(e,i,"","",(function(e){return t.call(n,e,r++)})),i}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},D={transition:null},_={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:D,ReactCurrentOwner:A};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=r,t.Profiler=s,t.PureComponent=y,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_,t.act=M,t.cloneElement=function(e,t,i){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=A.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!S.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=i;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:n,type:e.type,key:a,ref:s,props:r,_owner:o}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var i=n-1>>>1,r=e[i];if(!(0<a(r,t)))break e;e[i]=t,e[n]=r,n=i}}function i(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var i=0,r=e.length,s=r>>>1;i<s;){var o=2*(i+1)-1,l=e[o],c=o+1,d=e[c];if(0>a(l,n))c<r&&0>a(d,l)?(e[i]=d,e[c]=n,i=c):(e[i]=l,e[o]=n,i=o);else{if(!(c<r&&0>a(d,n)))break e;e[i]=d,e[c]=n,i=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,h=null,p=3,f=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=i(d);null!==t;){if(null===t.callback)r(d);else{if(!(t.startTime<=e))break;r(d),t.sortIndex=t.expirationTime,n(c,t)}t=i(d)}}function b(e){if(g=!1,w(e),!m)if(null!==i(c))m=!0,D(j);else{var t=i(d);null!==t&&_(b,t.startTime-e)}}function j(e,n){m=!1,g&&(g=!1,v(E),E=-1),f=!0;var a=p;try{for(w(n),h=i(c);null!==h&&(!(h.expirationTime>n)||e&&!P());){var s=h.callback;if("function"===typeof s){h.callback=null,p=h.priorityLevel;var o=s(h.expirationTime<=n);n=t.unstable_now(),"function"===typeof o?h.callback=o:h===i(c)&&r(c),w(n)}else r(c);h=i(c)}if(null!==h)var l=!0;else{var u=i(d);null!==u&&_(b,u.startTime-n),l=!1}return l}finally{h=null,p=a,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var A,S=!1,k=null,E=-1,C=5,T=-1;function P(){return!(t.unstable_now()-T<C)}function I(){if(null!==k){var e=t.unstable_now();T=e;var n=!0;try{n=k(!0,e)}finally{n?A():(S=!1,k=null)}}else S=!1}if("function"===typeof y)A=function(){y(I)};else if("undefined"!==typeof MessageChannel){var B=new MessageChannel,z=B.port2;B.port1.onmessage=I,A=function(){z.postMessage(null)}}else A=function(){x(I,0)};function D(e){k=e,S||(S=!0,A())}function _(e,n){E=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,D(j))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return i(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,r,a){var s=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?s+a:s:a=s,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:u++,callback:r,priorityLevel:e,startTime:a,expirationTime:o=a+o,sortIndex:-1},a>s?(e.sortIndex=a,n(d,e),null===i(c)&&e===i(d)&&(g?(v(E),E=-1):g=!0,_(b,a-s))):(e.sortIndex=o,n(c,e),m||f||(m=!0,D(j))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!o(c))return!1;var d=e[c],u=t[c];if(!1===(r=n?n.call(i,d,u,c):void 0)||void 0===r&&d!==u)return!1}return!0}},2867:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_1.49ec72c320f7c9221851.png"},3216:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_1_v2.9b0dc1916ecef2362bd1.png"},7592:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_2.49430c4311fc09632869.png"},6797:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_2_v2.3b541b01bfda2744a7e4.png"},1809:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_3.baf74283e9b887d9fd33.png"},935:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_3_v3.f4713fa04a0acc5bed0a.png"},7300:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_Mp_v2.ab6c44a6e669d67ef4f7.png"},1231:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_mp.f3fe4b6eaca494d18650.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var o=2&r&&i;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>s[e]=()=>i[e]));return s.default=()=>i,n.d(a,s),a}})(),n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e,t=n(5043),i=n.t(t,2),r=n(7950),a=n.t(r,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const o="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,i){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),i&&"#"!==i&&(t+="#"===i.charAt(0)?i:"#"+i),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function f(t,n,i,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:c=!1}=r,p=a.history,f=e.Pop,m=null,g=x();function x(){return(p.state||{idx:null}).idx}function v(){f=e.Pop;let t=x(),n=null==t?null:t-g;g=t,m&&m({action:f,location:w.location,delta:n})}function y(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,p.replaceState(s({},p.state,{idx:g}),""));let w={get action(){return f},get location(){return t(a,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(o,v),m=e,()=>{a.removeEventListener(o,v),m=null}},createHref:e=>n(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){f=e.Push;let r=u(w.location,t,n);i&&i(r,t),g=x()+1;let s=d(r,g),o=w.createHref(r);try{p.pushState(s,"",o)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;a.location.assign(o)}c&&m&&m({action:f,location:w.location,delta:1})},replace:function(t,n){f=e.Replace;let r=u(w.location,t,n);i&&i(r,t),g=x();let a=d(r,g),s=w.createHref(r);p.replaceState(a,"",s),c&&m&&m({action:f,location:w.location,delta:0})},go:e=>p.go(e)};return w}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t,n){return void 0===n&&(n="/"),x(e,t,n,!1)}function x(e,t,n,i){let r=B(("string"===typeof t?p(t):t).pathname||"/",n);if(null==r)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let s=null;for(let o=0;null==s&&o<a.length;++o){let e=I(r);s=T(a[o],e,i)}return s}function v(e,t,n,i){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===i&&(i="");let r=(e,r,a)=>{let s={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};s.relativePath.startsWith("/")&&(l(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(i.length));let o=O([i,s.relativePath]),c=n.concat(s);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),v(e.children,t,c,o)),(null!=e.path||e.index)&&t.push({path:o,score:C(o,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let i of y(e.path))r(e,t,i);else r(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===i.length)return r?[a,""]:[a];let s=y(i.join("/")),o=[];return o.push(...s.map((e=>""===e?a:[a,e].join("/")))),r&&o.push(...s),o.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,b=3,j=2,A=1,S=10,k=-2,E=e=>"*"===e;function C(e,t){let n=e.split("/"),i=n.length;return n.some(E)&&(i+=k),t&&(i+=j),n.filter((e=>!E(e))).reduce(((e,t)=>e+(w.test(t)?b:""===t?A:S)),i)}function T(e,t,n){void 0===n&&(n=!1);let{routesMeta:i}=e,r={},a="/",s=[];for(let o=0;o<i.length;++o){let e=i[o],l=o===i.length-1,c="/"===a?t:t.slice(a.length)||"/",d=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&n&&!i[i.length-1].route.index&&(d=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(r,d.params),s.push({params:r,pathname:O([a,d.pathname]),pathnameBase:N(O([a,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(a=O([a,d.pathnameBase]))}return s}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(i.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(i.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let a=new RegExp(r,t?void 0:"i");return[a,i]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1),l=i.reduce(((e,t,n)=>{let{paramName:i,isOptional:r}=t;if("*"===i){let e=o[n]||"";s=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[i]=r&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:a,pathnameBase:s,pattern:e}}function I(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function B(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&"/"!==i?null:e.slice(n)||"/"}function z(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function D(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function _(e,t){let n=D(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function M(e,t,n,i){let r;void 0===i&&(i=!1),"string"===typeof e?r=p(e):(r=s({},e),l(!r.pathname||!r.pathname.includes("?"),z("?","pathname","search",r)),l(!r.pathname||!r.pathname.includes("#"),z("#","pathname","hash",r)),l(!r.search||!r.search.includes("#"),z("#","search","hash",r)));let a,o=""===e||""===r.pathname,c=o?"/":r.pathname;if(null==c)a=n;else{let e=t.length-1;if(!i&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let d=function(e,t){void 0===t&&(t="/");let{pathname:n,search:i="",hash:r=""}="string"===typeof e?p(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:R(i),hash:L(r)}}(r,a),u=c&&"/"!==c&&c.endsWith("/"),h=(o||"."===c)&&n.endsWith("/");return d.pathname.endsWith("/")||!u&&!h||(d.pathname+="/"),d}const O=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],V=(new Set(U),["get",...U]);new Set(V),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Y.apply(this,arguments)}const Q=t.createContext(null);const W=t.createContext(null);const H=t.createContext(null);const G=t.createContext(null);const $=t.createContext({outlet:null,matches:[],isDataRoute:!1});const X=t.createContext(null);function K(){return null!=t.useContext(G)}function q(){return K()||l(!1),t.useContext(G).location}function J(e){t.useContext(H).static||t.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=t.useContext($);return e?function(){let{router:e}=ce(oe.UseNavigateStable),n=ue(le.UseNavigateStable),i=t.useRef(!1);J((()=>{i.current=!0}));let r=t.useCallback((function(t,r){void 0===r&&(r={}),i.current&&("number"===typeof t?e.navigate(t):e.navigate(t,Y({fromRouteId:n},r)))}),[e,n]);return r}():function(){K()||l(!1);let e=t.useContext(Q),{basename:n,future:i,navigator:r}=t.useContext(H),{matches:a}=t.useContext($),{pathname:s}=q(),o=JSON.stringify(_(a,i.v7_relativeSplatPath)),c=t.useRef(!1);return J((()=>{c.current=!0})),t.useCallback((function(t,i){if(void 0===i&&(i={}),!c.current)return;if("number"===typeof t)return void r.go(t);let a=M(t,JSON.parse(o),s,"path"===i.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:O([n,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)}),[n,r,o,s,e])}()}function ee(e,n){let{relative:i}=void 0===n?{}:n,{future:r}=t.useContext(H),{matches:a}=t.useContext($),{pathname:s}=q(),o=JSON.stringify(_(a,r.v7_relativeSplatPath));return t.useMemo((()=>M(e,JSON.parse(o),s,"path"===i)),[e,o,s,i])}function te(n,i,r,a){K()||l(!1);let{navigator:s}=t.useContext(H),{matches:o}=t.useContext($),c=o[o.length-1],d=c?c.params:{},u=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let h,f=q();if(i){var m;let e="string"===typeof i?p(i):i;"/"===u||(null==(m=e.pathname)?void 0:m.startsWith(u))||l(!1),h=e}else h=f;let x=h.pathname||"/",v=x;if("/"!==u){let e=u.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=g(n,{pathname:v});let w=se(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:O([u,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:O([u,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,r,a);return i&&w?t.createElement(G.Provider,{value:{location:Y({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:e.Pop}},w):w}function ne(){let e=function(){var e;let n=t.useContext(X),i=de(le.UseRouteError),r=ue(le.UseRouteError);if(void 0!==n)return n;return null==(e=i.errors)?void 0:e[r]}(),n=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),i?t.createElement("pre",{style:a},i):null,null)}const ie=t.createElement(ne,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement($.Provider,{value:this.props.routeContext},t.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:n,match:i,children:r}=e,a=t.useContext(Q);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),t.createElement($.Provider,{value:n},r)}function se(e,n,i,r){var a;if(void 0===n&&(n=[]),void 0===i&&(i=null),void 0===r&&(r=null),null==e){var s;if(!i)return null;if(i.errors)e=i.matches;else{if(!(null!=(s=r)&&s.v7_partialHydration&&0===n.length&&!i.initialized&&i.matches.length>0))return null;e=i.matches}}let o=e,c=null==(a=i)?void 0:a.errors;if(null!=c){let e=o.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||l(!1),o=o.slice(0,Math.min(o.length,e+1))}let d=!1,u=-1;if(i&&r&&r.v7_partialHydration)for(let t=0;t<o.length;t++){let e=o[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=t),e.route.id){let{loaderData:t,errors:n}=i,r=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||r){d=!0,o=u>=0?o.slice(0,u+1):[o[0]];break}}}return o.reduceRight(((e,r,a)=>{let s,l=!1,h=null,p=null;var f;i&&(s=c&&r.route.id?c[r.route.id]:void 0,h=r.route.errorElement||ie,d&&(u<0&&0===a?(f="route-fallback",!1||he[f]||(he[f]=!0),l=!0,p=null):u===a&&(l=!0,p=r.route.hydrateFallbackElement||null)));let m=n.concat(o.slice(0,a+1)),g=()=>{let n;return n=s?h:l?p:r.route.Component?t.createElement(r.route.Component,null):r.route.element?r.route.element:e,t.createElement(ae,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=i},children:n})};return i&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?t.createElement(re,{location:i.location,revalidation:i.revalidation,component:h,error:s,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var oe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(oe||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function ce(e){let n=t.useContext(Q);return n||l(!1),n}function de(e){let n=t.useContext(W);return n||l(!1),n}function ue(e){let n=function(){let e=t.useContext($);return e||l(!1),e}(),i=n.matches[n.matches.length-1];return i.route.id||l(!1),i.route.id}const he={};i.startTransition;function pe(e){let{to:n,replace:i,state:r,relative:a}=e;K()||l(!1);let{future:s,static:o}=t.useContext(H),{matches:c}=t.useContext($),{pathname:d}=q(),u=Z(),h=M(n,_(c,s.v7_relativeSplatPath),d,"path"===a),p=JSON.stringify(h);return t.useEffect((()=>u(JSON.parse(p),{replace:i,state:r,relative:a})),[u,p,a,i,r]),null}function fe(e){l(!1)}function me(n){let{basename:i="/",children:r=null,location:a,navigationType:s=e.Pop,navigator:o,static:c=!1,future:d}=n;K()&&l(!1);let u=i.replace(/^\/*/,"/"),h=t.useMemo((()=>({basename:u,navigator:o,static:c,future:Y({v7_relativeSplatPath:!1},d)})),[u,d,o,c]);"string"===typeof a&&(a=p(a));let{pathname:f="/",search:m="",hash:g="",state:x=null,key:v="default"}=a,y=t.useMemo((()=>{let e=B(f,u);return null==e?null:{location:{pathname:e,search:m,hash:g,state:x,key:v},navigationType:s}}),[u,f,m,g,x,v,s]);return null==y?null:t.createElement(H.Provider,{value:h},t.createElement(G.Provider,{children:r,value:y}))}function ge(e){let{children:t,location:n}=e;return te(xe(t),n)}new Promise((()=>{}));t.Component;function xe(e,n){void 0===n&&(n=[]);let i=[];return t.Children.forEach(e,((e,r)=>{if(!t.isValidElement(e))return;let a=[...n,r];if(e.type===t.Fragment)return void i.push.apply(i,xe(e.props.children,a));e.type!==fe&&l(!1),e.props.index&&e.props.children&&l(!1);let s={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=xe(e.props.children,a)),i.push(s)})),i}function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ve.apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(Cy){}new Map;const be=i.startTransition;a.flushSync,i.useId;function je(e){let{basename:n,children:i,future:r,window:a}=e,s=t.useRef();var o;null==s.current&&(s.current=(void 0===(o={window:a,v5Compat:!0})&&(o={}),f((function(e,t){let{pathname:n="/",search:i="",hash:r=""}=p(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),u("",{pathname:n,search:i,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),i="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");i=-1===n?t:t.slice(0,n)}return i+"#"+("string"===typeof t?t:h(t))}),(function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),o)));let l=s.current,[d,m]=t.useState({action:l.action,location:l.location}),{v7_startTransition:g}=r||{},x=t.useCallback((e=>{g&&be?be((()=>m(e))):m(e)}),[m,g]);return t.useLayoutEffect((()=>l.listen(x)),[l,x]),t.createElement(me,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:l,future:r})}const Ae="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Se=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=t.forwardRef((function(e,n){let i,{onClick:r,relative:a,reloadDocument:s,replace:o,state:c,target:d,to:u,preventScrollReset:p,unstable_viewTransition:f}=e,m=ye(e,we),{basename:g}=t.useContext(H),x=!1;if("string"===typeof u&&Se.test(u)&&(i=u,Ae))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=B(t.pathname,g);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:x=!0}catch(Cy){}let v=function(e,n){let{relative:i}=void 0===n?{}:n;K()||l(!1);let{basename:r,navigator:a}=t.useContext(H),{hash:s,pathname:o,search:c}=ee(e,{relative:i}),d=o;return"/"!==r&&(d="/"===o?r:O([r,o])),a.createHref({pathname:d,search:c,hash:s})}(u,{relative:a}),y=function(e,n){let{target:i,replace:r,state:a,preventScrollReset:s,relative:o,unstable_viewTransition:l}=void 0===n?{}:n,c=Z(),d=q(),u=ee(e,{relative:o});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,i)){t.preventDefault();let n=void 0!==r?r:h(d)===h(u);c(e,{replace:n,state:a,preventScrollReset:s,relative:o,unstable_viewTransition:l})}}),[d,c,u,r,a,i,e,s,o,l])}(u,{replace:o,state:c,target:d,preventScrollReset:p,relative:a,unstable_viewTransition:f});return t.createElement("a",ve({},m,{href:i||v,onClick:x||s?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:n,target:d}))}));var Ee,Ce;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ee||(Ee={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ce||(Ce={}));var Te=n(579);const Pe=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ie=(0,t.createContext)({}),Be=(0,t.createContext)(null),ze="undefined"!==typeof window,De=ze?t.useLayoutEffect:t.useEffect,_e=(0,t.createContext)({strict:!1}),Me=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Oe="data-"+Me("framerAppearId"),Ne=!1,Re=!1;const Le=["read","resolveKeyframes","update","preRender","render","postRender"];function Fe(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,s=Le.reduce(((e,t)=>(e[t]=function(e){let t=new Set,n=new Set,i=!1,r=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function o(t){a.has(t)&&(l.schedule(t),e()),t(s)}const l={schedule:function(e){const r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),r.has(e)||r.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{s=e,i?r=!0:(i=!0,[t,n]=[n,t],n.clear(),t.forEach(o),i=!1,r&&(r=!1,l.process(e)))}};return l}(a),e)),{}),{read:o,resolveKeyframes:l,update:c,preRender:d,render:u,postRender:h}=s,p=()=>{const a=Re?r.timestamp:performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(a-r.timestamp,40),1),r.timestamp=a,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),d.process(r),u.process(r),h.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(p))},f=Le.reduce(((t,a)=>{const o=s[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,i=!0,r.isProcessing||e(p)),o.schedule(t,a,s)},t}),{});return{schedule:f,cancel:e=>{for(let t=0;t<Le.length;t++)s[Le[t]].cancel(e)},state:r,steps:s}}const{schedule:Ue,cancel:Ve}=Fe(queueMicrotask,!1);function Ye(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Qe=(0,t.createContext)({});let We=!1;function He(e,n,i,r,a){var s;const{visualElement:o}=(0,t.useContext)(Ie),l=(0,t.useContext)(_e),c=(0,t.useContext)(Be),d=(0,t.useContext)(Pe).reducedMotion,u=(0,t.useRef)();r=r||l.renderer,!u.current&&r&&(u.current=r(e,{visualState:n,parent:o,props:i,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:d}));const h=u.current,p=(0,t.useContext)(Qe);!h||h.projection||!a||"html"!==h.type&&"svg"!==h.type||function(e,t,n,i){const{layoutId:r,layout:a,drag:s,dragConstraints:o,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:$e(e.parent)),e.projection.setOptions({layoutId:r,layout:a,alwaysMeasureLayout:Boolean(s)||o&&Ye(o),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}(u.current,i,a,p),(0,t.useInsertionEffect)((()=>{h&&h.update(i,c)}));const f=i[Oe],m=(0,t.useRef)(Boolean(f)&&!window.MotionHandoffIsComplete&&(null===(s=window.MotionHasOptimisedAnimation)||void 0===s?void 0:s.call(window,f)));return De((()=>{h&&(h.updateFeatures(),Ue.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())})),(0,t.useEffect)((()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current=!1,We||(We=!0,queueMicrotask(Ge)))})),h}function Ge(){window.MotionHandoffIsComplete=!0}function $e(e){if(e)return!1!==e.options.allowProjection?e.projection:$e(e.parent)}function Xe(e,n,i){return(0,t.useCallback)((t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),i&&("function"===typeof i?i(t):Ye(i)&&(i.current=t))}),[n])}function Ke(e){return"string"===typeof e||Array.isArray(e)}function qe(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const Je=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ze=["initial",...Je];function et(e){return qe(e.animate)||Ze.some((t=>Ke(e[t])))}function tt(e){return Boolean(et(e)||e.variants)}function nt(e){const{initial:n,animate:i}=function(e,t){if(et(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Ke(t)?t:void 0,animate:Ke(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(Ie));return(0,t.useMemo)((()=>({initial:n,animate:i})),[it(n),it(i)])}function it(e){return Array.isArray(e)?e.join(" "):e}const rt={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},at={};for(const n in rt)at[n]={isEnabled:e=>rt[n].some((t=>!!e[t]))};const st=(0,t.createContext)({}),ot=Symbol.for("motionComponentSymbol");function lt(e){let{preloadedFeatures:n,createVisualElement:i,useRender:r,useVisualState:a,Component:s}=e;n&&function(e){for(const t in e)at[t]={...at[t],...e[t]}}(n);const o=(0,t.forwardRef)((function(e,n){let o;const l={...(0,t.useContext)(Pe),...e,layoutId:ct(e)},{isStatic:c}=l,d=nt(e),u=a(e,c);if(!c&&ze){!function(){(0,t.useContext)(_e).strict;0}();const e=function(e){const{drag:t,layout:n}=at;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:(null===t||void 0===t?void 0:t.isEnabled(e))||(null===n||void 0===n?void 0:n.isEnabled(e))?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);o=e.MeasureLayout,d.visualElement=He(s,u,l,i,e.ProjectionNode)}return(0,Te.jsxs)(Ie.Provider,{value:d,children:[o&&d.visualElement?(0,Te.jsx)(o,{visualElement:d.visualElement,...l}):null,r(s,e,Xe(u,d.visualElement,n),u,c,d.visualElement)]})}));return o[ot]=s,o}function ct(e){let{layoutId:n}=e;const i=(0,t.useContext)(st).id;return i&&void 0!==n?i+"-"+n:n}function dt(e){function t(t){return lt(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const ut=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ht(e){return"string"===typeof e&&!e.includes("-")&&!!(ut.indexOf(e)>-1||/[A-Z]/u.test(e))}const pt={};const ft=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mt=new Set(ft);function gt(e,t){let{layout:n,layoutId:i}=t;return mt.has(e)||e.startsWith("origin")||(n||void 0!==i)&&(!!pt[e]||"opacity"===e)}const xt=e=>Boolean(e&&e.getVelocity),vt=(e,t)=>t&&"number"===typeof e?t.transform(e):e,yt=(e,t,n)=>n>t?t:n<e?e:n,wt={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},bt={...wt,transform:e=>yt(0,1,e)},jt={...wt,default:1},At=e=>Math.round(1e5*e)/1e5,St=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,kt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Et=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function Ct(e){return"string"===typeof e}const Tt=e=>({test:t=>Ct(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Pt=Tt("deg"),It=Tt("%"),Bt=Tt("px"),zt=Tt("vh"),Dt=Tt("vw"),_t={...It,parse:e=>It.parse(e)/100,transform:e=>It.transform(100*e)},Mt={...wt,transform:Math.round},Ot={borderWidth:Bt,borderTopWidth:Bt,borderRightWidth:Bt,borderBottomWidth:Bt,borderLeftWidth:Bt,borderRadius:Bt,radius:Bt,borderTopLeftRadius:Bt,borderTopRightRadius:Bt,borderBottomRightRadius:Bt,borderBottomLeftRadius:Bt,width:Bt,maxWidth:Bt,height:Bt,maxHeight:Bt,size:Bt,top:Bt,right:Bt,bottom:Bt,left:Bt,padding:Bt,paddingTop:Bt,paddingRight:Bt,paddingBottom:Bt,paddingLeft:Bt,margin:Bt,marginTop:Bt,marginRight:Bt,marginBottom:Bt,marginLeft:Bt,rotate:Pt,rotateX:Pt,rotateY:Pt,rotateZ:Pt,scale:jt,scaleX:jt,scaleY:jt,scaleZ:jt,skew:Pt,skewX:Pt,skewY:Pt,distance:Bt,translateX:Bt,translateY:Bt,translateZ:Bt,x:Bt,y:Bt,z:Bt,perspective:Bt,transformPerspective:Bt,opacity:bt,originX:_t,originY:_t,originZ:Bt,zIndex:Mt,backgroundPositionX:Bt,backgroundPositionY:Bt,fillOpacity:bt,strokeOpacity:bt,numOctaves:Mt},Nt={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Rt=ft.length;const Lt=e=>t=>"string"===typeof t&&t.startsWith(e),Ft=Lt("--"),Ut=Lt("var(--"),Vt=e=>!!Ut(e)&&Yt.test(e.split("/*")[0].trim()),Yt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Qt(e,t,n){const{style:i,vars:r,transformOrigin:a}=e;let s=!1,o=!1;for(const l in t){const e=t[l];if(mt.has(l))s=!0;else if(Ft(l))r[l]=e;else{const t=vt(e,Ot[l]);l.startsWith("origin")?(o=!0,a[l]=t):i[l]=t}}if(t.transform||(s||n?i.transform=function(e,t,n){let i="",r=!0;for(let a=0;a<Rt;a++){const s=ft[a],o=e[s];if(void 0===o)continue;let l=!0;if(l="number"===typeof o?o===(s.startsWith("scale")?1:0):0===parseFloat(o),!l||n){const e=vt(o,Ot[s]);l||(r=!1,i+=`${Nt[s]||s}(${e}) `),n&&(t[s]=e)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}(t,e.transform,n):i.transform&&(i.transform="none")),o){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;i.transformOrigin=`${e} ${t} ${n}`}}const Wt=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ht(e,t,n){for(const i in t)xt(t[i])||gt(i,n)||(e[i]=t[i])}function Gt(e,n){const i={};return Ht(i,e.style||{},e),Object.assign(i,function(e,n){let{transformTemplate:i}=e;return(0,t.useMemo)((()=>{const e=Wt();return Qt(e,n,i),Object.assign({},e.vars,e.style)}),[n])}(e,n)),i}function $t(e,t){const n={},i=Gt(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const Xt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kt(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Xt.has(e)}let qt=e=>!Kt(e);try{(Jt=require("@emotion/is-prop-valid").default)&&(qt=e=>e.startsWith("on")?!Kt(e):Jt(e))}catch(Ty){}var Jt;function Zt(e,t,n){return"string"===typeof e?e:Bt.transform(t+n*e)}const en={offset:"stroke-dashoffset",array:"stroke-dasharray"},tn={offset:"strokeDashoffset",array:"strokeDasharray"};function nn(e,t,n,i){let{attrX:r,attrY:a,attrScale:s,originX:o,originY:l,pathLength:c,pathSpacing:d=1,pathOffset:u=0,...h}=t;if(Qt(e,h,i),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:f,dimensions:m}=e;p.transform&&(m&&(f.transform=p.transform),delete p.transform),m&&(void 0!==o||void 0!==l||f.transform)&&(f.transformOrigin=function(e,t,n){return`${Zt(t,e.x,e.width)} ${Zt(n,e.y,e.height)}`}(m,void 0!==o?o:.5,void 0!==l?l:.5)),void 0!==r&&(p.x=r),void 0!==a&&(p.y=a),void 0!==s&&(p.scale=s),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=r?en:tn;e[a.offset]=Bt.transform(-i);const s=Bt.transform(t),o=Bt.transform(n);e[a.array]=`${s} ${o}`}(p,c,d,u,!1)}const rn=()=>({...Wt(),attrs:{}}),an=e=>"string"===typeof e&&"svg"===e.toLowerCase();function sn(e,n,i,r){const a=(0,t.useMemo)((()=>{const t=rn();return nn(t,n,an(r),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n]);if(e.style){const t={};Ht(t,e.style,e),a.style={...t,...a.style}}return a}function on(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,i,r,a,s)=>{let{latestValues:o}=a;const l=(ht(n)?sn:$t)(i,o,s,n),c=function(e,t,n){const i={};for(const r in e)"values"===r&&"object"===typeof e.values||(qt(r)||!0===n&&Kt(r)||!t&&!Kt(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}(i,"string"===typeof n,e),d=n!==t.Fragment?{...c,...l,ref:r}:{},{children:u}=i,h=(0,t.useMemo)((()=>xt(u)?u.get():u),[u]);return(0,t.createElement)(n,{...d,children:h})}}function ln(e,t,n,i){let{style:r,vars:a}=t;Object.assign(e.style,r,i&&i.getProjectionStyles(n));for(const s in a)e.style.setProperty(s,a[s])}const cn=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dn(e,t,n,i){ln(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(cn.has(r)?r:Me(r),t.attrs[r])}function un(e,t,n){var i;const{style:r}=e,a={};for(const s in r)(xt(r[s])||t.style&&xt(t.style[s])||gt(s,e)||void 0!==(null===(i=null===n||void 0===n?void 0:n.getValue(s))||void 0===i?void 0:i.liveStyle))&&(a[s]=r[s]);return n&&r&&"string"===typeof r.willChange&&(n.applyWillChange=!1),a}function hn(e,t,n){const i=un(e,t,n);for(const r in e)if(xt(e[r])||xt(t[r])){i[-1!==ft.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return i}function pn(e){const t=[{},{}];return null===e||void 0===e||e.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function fn(e,t,n,i){if("function"===typeof t){const[r,a]=pn(i);t=t(void 0!==n?n:e.custom,r,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[r,a]=pn(i);t=t(void 0!==n?n:e.custom,r,a)}return t}const mn=e=>Array.isArray(e),gn=e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue),xn=e=>mn(e)?e[e.length-1]||0:e;function vn(e){const t=xt(e)?e.get():e;return gn(t)?t.toValue():t}const yn=new Set(["opacity","clipPath","filter","transform"]);function wn(e){return mt.has(e)?"transform":yn.has(e)?Me(e):void 0}function bn(e,t){-1===e.indexOf(t)&&e.push(t)}function jn(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const An=e=>(n,i)=>{const r=(0,t.useContext)(Ie),a=(0,t.useContext)(Be),s=()=>function(e,t,n,i,r){let{applyWillChange:a=!1,scrapeMotionValuesFromProps:s,createRenderState:o,onMount:l}=e;const c={latestValues:En(t,n,i,!r&&a,s),renderState:o()};return l&&(c.mount=e=>l(t,e,c)),c}(e,n,r,a,i);return i?s():function(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}(s)};function Sn(e,t){const n=wn(t);n&&bn(e,n)}function kn(e,t,n){const i=Array.isArray(t)?t:[t];for(let r=0;r<i.length;r++){const t=fn(e,i[r]);if(t){const{transitionEnd:e,transition:i,...r}=t;n(r,e)}}}function En(e,t,n,i,r){var a;const s={},o=[],l=i&&void 0===(null===(a=e.style)||void 0===a?void 0:a.willChange),c=r(e,{});for(const g in c)s[g]=vn(c[g]);let{initial:d,animate:u}=e;const h=et(e),p=tt(e);t&&p&&!h&&!1!==e.inherit&&(void 0===d&&(d=t.initial),void 0===u&&(u=t.animate));let f=!!n&&!1===n.initial;f=f||!1===d;const m=f?u:d;return m&&"boolean"!==typeof m&&!qe(m)&&kn(e,m,((e,t)=>{for(const n in e){let t=e[n];if(Array.isArray(t)){t=t[f?t.length-1:0]}null!==t&&(s[n]=t)}for(const n in t)s[n]=t[n]})),l&&(u&&!1!==d&&!qe(u)&&kn(e,u,(e=>{for(const t in e)Sn(o,t)})),o.length&&(s.willChange=o.join(","))),s}const Cn=e=>e,{schedule:Tn,cancel:Pn,state:In,steps:Bn}=Fe("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Cn,!0),zn={useVisualState:An({scrapeMotionValuesFromProps:hn,createRenderState:rn,onMount:(e,t,n)=>{let{renderState:i,latestValues:r}=n;Tn.read((()=>{try{i.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Cy){i.dimensions={x:0,y:0,width:0,height:0}}})),Tn.render((()=>{nn(i,r,an(t.tagName),e.transformTemplate),dn(t,i)}))}})},Dn={useVisualState:An({applyWillChange:!0,scrapeMotionValuesFromProps:un,createRenderState:Wt})};function _n(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const Mn=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function On(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const Nn=e=>t=>Mn(t)&&e(t,On(t));function Rn(e,t,n,i){return _n(e,t,Nn(n),i)}const Ln=(e,t)=>n=>t(e(n)),Fn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Ln)};function Un(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Vn=Un("dragHorizontal"),Yn=Un("dragVertical");function Qn(e){let t=!1;if("y"===e)t=Yn();else if("x"===e)t=Vn();else{const e=Vn(),n=Yn();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Wn(){const e=Qn(!0);return!e||(e(),!1)}class Hn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Gn(e,t){const n=t?"pointerenter":"pointerleave",i=t?"onHoverStart":"onHoverEnd";return Rn(e.current,n,((n,r)=>{if("touch"===n.pointerType||Wn())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const s=a[i];s&&Tn.postRender((()=>s(n,r)))}),{passive:!e.getProps()[i]})}const $n=(e,t)=>!!t&&(e===t||$n(e,t.parentElement));function Xn(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,On(n))}const Kn=new WeakMap,qn=new WeakMap,Jn=e=>{const t=Kn.get(e.target);t&&t(e)},Zn=e=>{e.forEach(Jn)};function ei(e,t,n){const i=function(e){let{root:t,...n}=e;const i=t||document;qn.has(i)||qn.set(i,{});const r=qn.get(i),a=JSON.stringify(n);return r[a]||(r[a]=new IntersectionObserver(Zn,{root:t,...n})),r[a]}(t);return Kn.set(e,n),i.observe(e),()=>{Kn.delete(e),i.unobserve(e)}}const ti={some:0,all:1};const ni={inView:{Feature:class extends Hn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:i="some",once:r}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof i?i:ti[i]};return ei(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,r&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),a=t?n:i;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Hn{constructor(){super(...arguments),this.removeStartListeners=Cn,this.removeEndListeners=Cn,this.removeAccessibleListeners=Cn,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),i=Rn(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:i,globalTapTarget:r}=this.node.getProps(),a=r||$n(this.node.current,e.target)?n:i;a&&Tn.update((()=>a(e,t)))}),{passive:!(n.onTap||n.onPointerUp)}),r=Rn(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Fn(i,r),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=_n(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=_n(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Xn("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&Tn.postRender((()=>n(e,t)))}))})),Xn("down",((e,t)=>{this.startPress(e,t)}))})),t=_n(this.node.current,"blur",(()=>{this.isPressing&&Xn("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=Fn(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&Tn.postRender((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Wn()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&Tn.postRender((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=Rn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=_n(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Fn(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends Hn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Cy){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Fn(_n(this.node.current,"focus",(()=>this.onFocus())),_n(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Hn{mount(){this.unmount=Fn(Gn(this.node,!0),Gn(this.node,!1))}unmount(){}}}};function ii(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function ri(e,t,n){const i=e.getProps();return fn(i,t,void 0!==n?n:i.custom,e)}const ai=e=>1e3*e,si=e=>e/1e3,oi={type:"spring",stiffness:500,damping:25,restSpeed:10},li={type:"keyframes",duration:.8},ci={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},di=(e,t)=>{let{keyframes:n}=t;return n.length>2?li:mt.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:oi:ci};function ui(e,t){return e[t]||e.default||e}const hi=!1,pi=e=>null!==e;function fi(e,t,n){let{repeat:i,repeatType:r="loop"}=t;const a=e.filter(pi),s=i&&"loop"!==r&&i%2===1?0:a.length-1;return s&&void 0!==n?n:a[s]}let mi;function gi(){mi=void 0}const xi={now:()=>(void 0===mi&&xi.set(In.isProcessing||Re?In.timestamp:performance.now()),mi),set:e=>{mi=e,queueMicrotask(gi)}},vi=e=>/^0[^.\s]+$/u.test(e);let yi=Cn,wi=Cn;const bi=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ji=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ai(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;wi(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[i,r]=function(e){const t=ji.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${null!==n&&void 0!==n?n:i}`,r]}(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const e=a.trim();return bi(e)?parseFloat(e):e}return Vt(r)?Ai(r,t,n+1):r}const Si=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),ki=e=>e===wt||e===Bt,Ei=(e,t)=>parseFloat(e.split(", ")[t]),Ci=(e,t)=>(n,i)=>{let{transform:r}=i;if("none"===r||!r)return 0;const a=r.match(/^matrix3d\((.+)\)$/u);if(a)return Ei(a[1],t);{const t=r.match(/^matrix\((.+)\)$/u);return t?Ei(t[1],e):0}},Ti=new Set(["x","y","z"]),Pi=ft.filter((e=>!Ti.has(e)));const Ii={width:(e,t)=>{let{x:n}=e,{paddingLeft:i="0",paddingRight:r="0"}=t;return n.max-n.min-parseFloat(i)-parseFloat(r)},height:(e,t)=>{let{y:n}=e,{paddingTop:i="0",paddingBottom:r="0"}=t;return n.max-n.min-parseFloat(i)-parseFloat(r)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:i}=t;return parseFloat(i)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:i}=t;return parseFloat(i)+(n.max-n.min)},x:Ci(4,13),y:Ci(5,14)};Ii.translateX=Ii.x,Ii.translateY=Ii.y;const Bi=e=>t=>t.test(e),zi=[wt,Bt,It,Pt,Dt,zt,{test:e=>"auto"===e,parse:e=>e}],Di=e=>zi.find(Bi(e)),_i=new Set;let Mi=!1,Oi=!1;function Ni(){if(Oi){const e=Array.from(_i).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Pi.forEach((n=>{const i=e.getValue(n);void 0!==i&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,i]=t;var r;null===(r=e.getValue(n))||void 0===r||r.set(i)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Oi=!1,Mi=!1,_i.forEach((e=>e.complete())),_i.clear()}function Ri(){_i.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Oi=!0)}))}class Li{constructor(e,t,n,i,r){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=i,this.element=r,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(_i.add(this),Mi||(Mi=!0,Tn.read(Ri),Tn.resolveKeyframes(Ni))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:i}=this;for(let r=0;r<e.length;r++)if(null===e[r])if(0===r){const r=null===i||void 0===i?void 0:i.get(),a=e[e.length-1];if(void 0!==r)e[0]=r;else if(n&&t){const i=n.readValue(t,a);void 0!==i&&null!==i&&(e[0]=i)}void 0===e[0]&&(e[0]=a),i&&void 0===r&&i.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),_i.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,_i.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Fi=(e,t)=>n=>Boolean(Ct(n)&&Et.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ui=(e,t,n)=>i=>{if(!Ct(i))return i;const[r,a,s,o]=i.match(St);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(s),alpha:void 0!==o?parseFloat(o):1}},Vi={...wt,transform:e=>Math.round((e=>yt(0,255,e))(e))},Yi={test:Fi("rgb","red"),parse:Ui("red","green","blue"),transform:e=>{let{red:t,green:n,blue:i,alpha:r=1}=e;return"rgba("+Vi.transform(t)+", "+Vi.transform(n)+", "+Vi.transform(i)+", "+At(bt.transform(r))+")"}};const Qi={test:Fi("#"),parse:function(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}},transform:Yi.transform},Wi={test:Fi("hsl","hue"),parse:Ui("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:i,alpha:r=1}=e;return"hsla("+Math.round(t)+", "+It.transform(At(n))+", "+It.transform(At(i))+", "+At(bt.transform(r))+")"}},Hi={test:e=>Yi.test(e)||Qi.test(e)||Wi.test(e),parse:e=>Yi.test(e)?Yi.parse(e):Wi.test(e)?Wi.parse(e):Qi.parse(e),transform:e=>Ct(e)?e:e.hasOwnProperty("red")?Yi.transform(e):Wi.transform(e)};const Gi="number",$i="color",Xi="var",Ki="var(",qi="${}",Ji=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Zi(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let a=0;const s=t.replace(Ji,(e=>(Hi.test(e)?(i.color.push(a),r.push($i),n.push(Hi.parse(e))):e.startsWith(Ki)?(i.var.push(a),r.push(Xi),n.push(e)):(i.number.push(a),r.push(Gi),n.push(parseFloat(e))),++a,qi))).split(qi);return{values:n,split:s,indexes:i,types:r}}function er(e){return Zi(e).values}function tr(e){const{split:t,types:n}=Zi(e),i=t.length;return e=>{let r="";for(let a=0;a<i;a++)if(r+=t[a],void 0!==e[a]){const t=n[a];r+=t===Gi?At(e[a]):t===$i?Hi.transform(e[a]):e[a]}return r}}const nr=e=>"number"===typeof e?0:e;const ir={test:function(e){var t,n;return isNaN(e)&&Ct(e)&&((null===(t=e.match(St))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(kt))||void 0===n?void 0:n.length)||0)>0},parse:er,createTransformer:tr,getAnimatableNone:function(e){const t=er(e);return tr(e)(t.map(nr))}},rr=new Set(["brightness","contrast","saturate","opacity"]);function ar(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[i]=n.match(St)||[];if(!i)return e;const r=n.replace(i,"");let a=rr.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+r+")"}const sr=/\b([a-z-]*)\(.*?\)/gu,or={...ir,getAnimatableNone:e=>{const t=e.match(sr);return t?t.map(ar).join(" "):e}},lr={...Ot,color:Hi,backgroundColor:Hi,outlineColor:Hi,fill:Hi,stroke:Hi,borderColor:Hi,borderTopColor:Hi,borderRightColor:Hi,borderBottomColor:Hi,borderLeftColor:Hi,filter:or,WebkitFilter:or},cr=e=>lr[e];function dr(e,t){let n=cr(e);return n!==or&&(n=ir),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ur=new Set(["auto","none","0"]);class hr extends Li{constructor(e,t,n,i){super(e,t,n,i,null===i||void 0===i?void 0:i.owner,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t.current)return;super.readKeyframes();for(let o=0;o<e.length;o++){let n=e[o];if("string"===typeof n&&(n=n.trim(),Vt(n))){const i=Ai(n,t.current);void 0!==i&&(e[o]=i),o===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Si.has(n)||2!==e.length)return;const[i,r]=e,a=Di(i),s=Di(r);if(a!==s)if(ki(a)&&ki(s))for(let o=0;o<e.length;o++){const t=e[o];"string"===typeof t&&(e[o]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)("number"===typeof(i=e[r])?0===i:null===i||"none"===i||"0"===i||vi(i))&&n.push(r);var i;n.length&&function(e,t,n){let i,r=0;for(;r<e.length&&!i;){const t=e[r];"string"===typeof t&&!ur.has(t)&&Zi(t).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=dr(n,i)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ii[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const i=t[t.length-1];void 0!==i&&e.getValue(n,i).jump(i,!1)}measureEndState(){var e;const{element:t,name:n,unresolvedKeyframes:i}=this;if(!t.current)return;const r=t.getValue(n);r&&r.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=Ii[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach((e=>{let[n,i]=e;t.getValue(n).set(i)})),this.resolveNoneKeyframes()}}function pr(e){let t;return()=>(void 0===t&&(t=e()),t)}const fr=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!ir.test(e)&&"0"!==e||e.startsWith("url(")));class mr{constructor(e){let{autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:s="loop",...o}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:a,repeatType:s,...o},this.updateFinishedPromise()}get resolved(){return this._resolved||this.hasAttemptedResolve||(Ri(),Ni()),this._resolved}onKeyframesResolved(e,t){this.hasAttemptedResolve=!0;const{name:n,type:i,velocity:r,delay:a,onComplete:s,onUpdate:o,isGenerator:l}=this.options;if(!l&&!function(e,t,n,i){const r=e[0];if(null===r)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],s=fr(r,t),o=fr(a,t);return yi(s===o,`You are trying to animate ${t} from "${r}" to "${a}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${a} via the \`style\` property.`),!(!s||!o)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||"spring"===n&&i)}(e,n,i,r)){if(hi||!a)return null===o||void 0===o||o(fi(e,this.options,t)),null===s||void 0===s||s(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}function gr(e,t){return t?e*(1e3/t):0}const xr=5;function vr(e,t,n){const i=Math.max(t-xr,0);return gr(n-e(i),t-i)}const yr=.001,wr=.01,br=10,jr=.05,Ar=1;function Sr(e){let t,n,{duration:i=800,bounce:r=.25,velocity:a=0,mass:s=1}=e;yi(i<=ai(br),"Spring duration must be 10 seconds or less");let o=1-r;o=yt(jr,Ar,o),i=yt(wr,br,si(i)),o<1?(t=e=>{const t=e*o,n=t*i,r=t-a,s=Er(e,o),l=Math.exp(-n);return yr-r/s*l},n=e=>{const n=e*o*i,r=n*a+a,s=Math.pow(o,2)*Math.pow(e,2)*i,l=Math.exp(-n),c=Er(Math.pow(e,2),o);return(-t(e)+yr>0?-1:1)*((r-s)*l)/c}):(t=e=>Math.exp(-e*i)*((e-a)*i+1)-yr,n=e=>Math.exp(-e*i)*(i*i*(a-e)));const l=function(e,t,n){let i=n;for(let r=1;r<kr;r++)i-=e(i)/t(i);return i}(t,n,5/i);if(i=ai(i),isNaN(l))return{stiffness:100,damping:10,duration:i};{const e=Math.pow(l,2)*s;return{stiffness:e,damping:2*o*Math.sqrt(s*e),duration:i}}}const kr=12;function Er(e,t){return e*Math.sqrt(1-t*t)}const Cr=["duration","bounce"],Tr=["stiffness","damping","mass"];function Pr(e,t){return t.some((t=>void 0!==e[t]))}function Ir(e){let{keyframes:t,restDelta:n,restSpeed:i,...r}=e;const a=t[0],s=t[t.length-1],o={done:!1,value:a},{stiffness:l,damping:c,mass:d,duration:u,velocity:h,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Pr(e,Tr)&&Pr(e,Cr)){const n=Sr(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...r,velocity:-si(r.velocity||0)}),f=h||0,m=c/(2*Math.sqrt(l*d)),g=s-a,x=si(Math.sqrt(l/d)),v=Math.abs(g)<5;let y;if(i||(i=v?.01:2),n||(n=v?.005:.5),m<1){const e=Er(x,m);y=t=>{const n=Math.exp(-m*x*t);return s-n*((f+m*x*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)y=e=>s-Math.exp(-x*e)*(g+(f+x*g)*e);else{const e=x*Math.sqrt(m*m-1);y=t=>{const n=Math.exp(-m*x*t),i=Math.min(e*t,300);return s-n*((f+m*x*g)*Math.sinh(i)+e*g*Math.cosh(i))/e}}return{calculatedDuration:p&&u||null,next:e=>{const t=y(e);if(p)o.done=e>=u;else{let r=0;m<1&&(r=0===e?ai(f):vr(y,e,t));const a=Math.abs(r)<=i,l=Math.abs(s-t)<=n;o.done=a&&l}return o.value=o.done?s:t,o}}}function Br(e){let{keyframes:t,velocity:n=0,power:i=.8,timeConstant:r=325,bounceDamping:a=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}=e;const h=t[0],p={done:!1,value:h},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=i*n;const g=h+m,x=void 0===o?g:o(g);x!==g&&(m=x-h);const v=e=>-m*Math.exp(-e/r),y=e=>x+v(e),w=e=>{const t=v(e),n=y(e);p.done=Math.abs(t)<=d,p.value=p.done?x:n};let b,j;const A=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(p.value)&&(b=e,j=Ir({keyframes:[p.value,f(p.value)],velocity:vr(y,e,p.value),damping:a,stiffness:s,restDelta:d,restSpeed:u}))};return A(0),{calculatedDuration:null,next:e=>{let t=!1;return j||void 0!==b||(t=!0,w(e),A(e)),void 0!==b&&e>=b?j.next(e-b):(!t&&w(e),p)}}}const zr=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Dr=1e-7,_r=12;function Mr(e,t,n,i){if(e===t&&n===i)return Cn;const r=t=>function(e,t,n,i,r){let a,s,o=0;do{s=t+(n-t)/2,a=zr(s,i,r)-e,a>0?n=s:t=s}while(Math.abs(a)>Dr&&++o<_r);return s}(t,0,1,e,n);return e=>0===e||1===e?e:zr(r(e),t,i)}const Or=Mr(.42,0,1,1),Nr=Mr(0,0,.58,1),Rr=Mr(.42,0,.58,1),Lr=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Fr=e=>t=>1-e(1-t),Ur=e=>1-Math.sin(Math.acos(e)),Vr=Fr(Ur),Yr=Lr(Ur),Qr=Mr(.33,1.53,.69,.99),Wr=Fr(Qr),Hr=Lr(Wr),Gr={linear:Cn,easeIn:Or,easeInOut:Rr,easeOut:Nr,circIn:Ur,circInOut:Yr,circOut:Vr,backIn:Wr,backInOut:Hr,backOut:Qr,anticipate:e=>(e*=2)<1?.5*Wr(e):.5*(2-Math.pow(2,-10*(e-1)))},$r=e=>{if(Array.isArray(e)){wi(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,i,r]=e;return Mr(t,n,i,r)}return"string"===typeof e?(wi(void 0!==Gr[e],`Invalid easing type '${e}'`),Gr[e]):e},Xr=(e,t,n)=>{const i=t-e;return 0===i?1:(n-e)/i},Kr=(e,t,n)=>e+(t-e)*n;function qr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Jr(e,t){return n=>n>0?t:e}const Zr=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},ea=[Qi,Yi,Wi];function ta(e){const t=(e=>ea.find((t=>t.test(e))))(e);if(yi(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`),!Boolean(t))return!1;let n=t.parse(e);return t===Wi&&(n=function(e){let{hue:t,saturation:n,lightness:i,alpha:r}=e;t/=360,n/=100,i/=100;let a=0,s=0,o=0;if(n){const e=i<.5?i*(1+n):i+n-i*n,r=2*i-e;a=qr(r,e,t+1/3),s=qr(r,e,t),o=qr(r,e,t-1/3)}else a=s=o=i;return{red:Math.round(255*a),green:Math.round(255*s),blue:Math.round(255*o),alpha:r}}(n)),n}const na=(e,t)=>{const n=ta(e),i=ta(t);if(!n||!i)return Jr(e,t);const r={...n};return e=>(r.red=Zr(n.red,i.red,e),r.green=Zr(n.green,i.green,e),r.blue=Zr(n.blue,i.blue,e),r.alpha=Kr(n.alpha,i.alpha,e),Yi.transform(r))},ia=new Set(["none","hidden"]);function ra(e,t){return n=>Kr(e,t,n)}function aa(e){return"number"===typeof e?ra:"string"===typeof e?Vt(e)?Jr:Hi.test(e)?na:la:Array.isArray(e)?sa:"object"===typeof e?Hi.test(e)?na:oa:Jr}function sa(e,t){const n=[...e],i=n.length,r=e.map(((e,n)=>aa(e)(e,t[n])));return e=>{for(let t=0;t<i;t++)n[t]=r[t](e);return n}}function oa(e,t){const n={...e,...t},i={};for(const r in n)void 0!==e[r]&&void 0!==t[r]&&(i[r]=aa(e[r])(e[r],t[r]));return e=>{for(const t in i)n[t]=i[t](e);return n}}const la=(e,t)=>{const n=ir.createTransformer(t),i=Zi(e),r=Zi(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?ia.has(e)&&!r.values.length||ia.has(t)&&!i.values.length?function(e,t){return ia.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):Fn(sa(function(e,t){var n;const i=[],r={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const s=t.types[a],o=e.indexes[s][r[s]],l=null!==(n=e.values[o])&&void 0!==n?n:0;i[a]=l,r[s]++}return i}(i,r),r.values),n):(yi(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Jr(e,t))};function ca(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Kr(e,t,n);return aa(e)(e,t)}function da(e,t){let{clamp:n=!0,ease:i,mixer:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(wi(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];if(2===a&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const i=[],r=n||ca,a=e.length-1;for(let s=0;s<a;s++){let n=r(e[s],e[s+1]);if(t){const e=Array.isArray(t)?t[s]||Cn:t;n=Fn(e,n)}i.push(n)}return i}(t,i,r),o=s.length,l=t=>{let n=0;if(o>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const i=Xr(e[n],e[n+1],t);return s[n](i)};return n?t=>l(yt(e[0],e[a-1],t)):l}function ua(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=Xr(0,t,i);e.push(Kr(n,1,r))}}(t,e.length-1),t}function ha(e){let{duration:t=300,keyframes:n,times:i,ease:r="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(r)?r.map($r):$r(r),s={done:!1,value:n[0]},o=function(e,t){return e.map((e=>e*t))}(i&&i.length===n.length?i:ua(n),t),l=da(o,n,{ease:Array.isArray(a)?a:(c=n,d=a,c.map((()=>d||Rr)).splice(0,c.length-1))});var c,d;return{calculatedDuration:t,next:e=>(s.value=l(e),s.done=e>=t,s)}}const pa=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>Tn.update(t,!0),stop:()=>Pn(t),now:()=>In.isProcessing?In.timestamp:xi.now()}},fa={decay:Br,inertia:Br,tween:ha,keyframes:ha,spring:Ir},ma=e=>e/100;class ga extends mr{constructor(e){let{KeyframeResolver:t=Li,...n}=e;super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:i,motionValue:r,keyframes:a}=this.options,s=(e,t)=>this.onKeyframesResolved(e,t);i&&r&&r.owner?this.resolver=r.owner.resolveKeyframes(a,s,i,r):this.resolver=new t(a,s,i,r),this.resolver.scheduleResolve()}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:i=0,repeatType:r,velocity:a=0}=this.options,s=fa[t]||ha;let o,l;s!==ha&&"number"!==typeof e[0]&&(o=Fn(ma,ca(e[0],e[1])),e=[0,100]);const c=s({...this.options,keyframes:e});"mirror"===r&&(l=s({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===c.calculatedDuration&&(c.calculatedDuration=function(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}(c));const{calculatedDuration:d}=c,u=d+i;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:o,calculatedDuration:d,resolvedDuration:u,totalDuration:u*(n+1)-i}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:i,generator:r,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:o,calculatedDuration:l,totalDuration:c,resolvedDuration:d}=n;if(null===this.startTime)return r.next(0);const{delay:u,repeat:h,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-u*(this.speed>=0?1:-1),x=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let v=this.currentTime,y=r;if(h){const e=Math.min(this.currentTime,c)/d;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,h+1);Boolean(t%2)&&("reverse"===p?(n=1-n,f&&(n-=f/d)):"mirror"===p&&(y=a)),v=yt(0,1,n)*d}const w=x?{done:!1,value:o[0]}:y.next(v);s&&(w.value=s(w.value));let{done:b}=w;x||null===l||(b=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const j=null===this.holdTime&&("finished"===this.state||"running"===this.state&&b);return j&&void 0!==i&&(w.value=fi(o,this.options,i)),m&&m(w.value),j&&this.finish(),w}get duration(){const{resolved:e}=this;return e?si(e.calculatedDuration):0}get time(){return si(this.currentTime)}set time(e){e=ai(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=si(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=pa,onPlay:t}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const n=this.driver.now();null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime&&"finished"!==this.state||(this.startTime=n),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;this._resolved?(this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const xa=e=>Array.isArray(e)&&"number"===typeof e[0];function va(e){return Boolean(!e||"string"===typeof e&&e in wa||xa(e)||Array.isArray(e)&&e.every(va))}const ya=e=>{let[t,n,i,r]=e;return`cubic-bezier(${t}, ${n}, ${i}, ${r})`},wa={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ya([0,.65,.55,1]),circOut:ya([.55,0,1,.45]),backIn:ya([.31,.01,.66,-.59]),backOut:ya([.33,1.53,.69,.99])};function ba(e){return ja(e)||wa.easeOut}function ja(e){return e?xa(e)?ya(e):Array.isArray(e)?e.map(ba):wa[e]:void 0}const Aa=pr((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class Sa extends mr{constructor(e){super(e);const{name:t,motionValue:n,keyframes:i}=this.options;this.resolver=new hr(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n),this.resolver.scheduleResolve()}initPlayback(e,t){var n;let{duration:i=300,times:r,ease:a,type:s,motionValue:o,name:l}=this.options;if(!(null===(n=o.owner)||void 0===n?void 0:n.current))return!1;if("spring"===(c=this.options).type||!va(c.ease)){const{onComplete:t,onUpdate:n,motionValue:o,...l}=this.options,c=function(e,t){const n=new ga({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const r=[];let a=0;for(;!i.done&&a<2e4;)i=n.sample(a),r.push(i.value),a+=10;return{times:void 0,keyframes:r,duration:a-10,ease:"linear"}}(e,l);1===(e=c.keyframes).length&&(e[1]=e[0]),i=c.duration,r=c.times,a=c.ease,s="keyframes"}var c;const d=function(e,t,n){let{delay:i=0,duration:r=300,repeat:a=0,repeatType:s="loop",ease:o,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const d=ja(o);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===s?"alternate":"normal"})}(o.owner.current,l,e,{...this.options,duration:i,times:r,ease:a});return d.startTime=xi.now(),this.pendingTimeline?(d.timeline=this.pendingTimeline,this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:n}=this.options;o.set(fi(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:i,times:r,type:s,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return si(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return si(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=ai(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return Cn;const{animation:n}=t;n.timeline=e,n.onfinish=null}else this.pendingTimeline=e;return Cn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:i,type:r,ease:a,times:s}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:o,...l}=this.options,c=new ga({...l,keyframes:n,duration:i,type:r,ease:a,times:s,isGenerator:!0}),d=ai(this.time);e.setWithVelocity(c.sample(d-10).value,c.sample(d).value,10)}const{onStop:o}=this.options;o&&o(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:i,repeatType:r,damping:a,type:s}=e;return Aa()&&n&&yn.has(n)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!i&&"mirror"!==r&&0!==a&&"inertia"!==s}}const ka=pr((()=>void 0!==window.ScrollTimeline));class Ea{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){const t=this.animations.map((t=>{if(!ka()||!t.attachTimeline)return t.pause(),function(e,t){let n;const i=()=>{const{currentTime:i}=t,r=(null===i?0:i.value)/100;n!==r&&e(r),n=r};return Tn.update(i,!0),()=>Pn(i)}((e=>{t.time=t.duration*e}),e);t.attachTimeline(e)}));return()=>{t.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const Ca=function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0;return o=>{const l=ui(i,e)||{},c=l.delay||i.delay||0;let{elapsed:d=0}=i;d-=ai(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:e=>{t.set(e),l.onUpdate&&l.onUpdate(e)},onComplete:()=>{o(),l.onComplete&&l.onComplete(),s&&s()},onStop:s,name:e,motionValue:t,element:a?void 0:r};(function(e){let{when:t,delay:n,delayChildren:i,staggerChildren:r,staggerDirection:a,repeat:s,repeatType:o,repeatDelay:l,from:c,elapsed:d,...u}=e;return!!Object.keys(u).length})(l)||(u={...u,...di(e,u)}),u.duration&&(u.duration=ai(u.duration)),u.repeatDelay&&(u.repeatDelay=ai(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let h=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(h=!0)),(hi||Ne)&&(h=!0,u.duration=0,u.delay=0),h&&!a&&void 0!==t.get()){const e=fi(u.keyframes,l);if(void 0!==e)return Tn.update((()=>{u.onUpdate(e),u.onComplete()})),new Ea([])}return!a&&Sa.supports(u)?new Sa(u):new ga(u)}};class Ta{constructor(){this.subscriptions=[]}add(e){return bn(this.subscriptions,e),()=>jn(this.subscriptions,e)}notify(e,t,n){const i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](e,t,n);else for(let r=0;r<i;r++){const i=this.subscriptions[r];i&&i(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Pa={current:void 0};class Ia{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="11.3.24",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=xi.now();t.updatedAt!==i&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=xi.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ta);const n=this.events[e].add(t);return"change"===e?()=>{n(),Tn.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Pa.current&&Pa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=xi.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return gr(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ba(e,t){return new Ia(e,t)}function za(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ba(n))}function Da(e){return e.getProps()[Oe]}class _a extends Ia{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(e){const t=wn(e);if(!t)return;const n=this.counts.get(t)||0;this.counts.set(t,n+1),0===n&&(this.output.push(t),this.update());let i=!1;return()=>{if(i)return;i=!0;const e=this.counts.get(t)-1;this.counts.set(t,e),0===e&&(jn(this.output,t),this.update())}}update(){this.set(this.output.length?this.output.join(", "):"auto")}}function Ma(e,t){var n;if(!e.applyWillChange)return;let i=e.getValue("willChange");return i||(null===(n=e.props.style)||void 0===n?void 0:n.willChange)||(i=new _a("auto"),e.addValue("willChange",i)),r=i,Boolean(xt(r)&&r.add)?i.add(t):void 0;var r}function Oa(e,t){let{protectedKeys:n,needsAnimating:i}=e;const r=n.hasOwnProperty(t)&&!0!==i[t];return i[t]=!1,r}function Na(e,t){let{delay:n=0,transitionOverride:i,type:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a;let{transition:s=e.getDefaultTransition(),transitionEnd:o,...l}=t;i&&(s=i);const c=[],d=r&&e.animationState&&e.animationState.getState()[r];for(const u in l){const t=e.getValue(u,null!==(a=e.latestValues[u])&&void 0!==a?a:null),i=l[u];if(void 0===i||d&&Oa(d,u))continue;const r={delay:n,elapsed:0,...ui(s||{},u)};let o=!1;if(window.MotionHandoffAnimation){const t=Da(e);if(t){const e=window.MotionHandoffAnimation(t,u,Tn);null!==e&&(r.elapsed=e,o=!0)}}t.start(Ca(u,t,i,e.shouldReduceMotion&&mt.has(u)?{type:!1}:r,e,o,Ma(e,u)));const h=t.animation;h&&c.push(h)}return o&&Promise.all(c).then((()=>{Tn.update((()=>{o&&function(e,t){const n=ri(e,t);let{transitionEnd:i={},transition:r={},...a}=n||{};a={...a,...i};for(const s in a)za(e,s,xn(a[s]))}(e,o)}))})),c}function Ra(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var i;const r=ri(e,t,"exit"===n.type?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(a=n.transitionOverride);const s=r?()=>Promise.all(Na(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:r=0,staggerChildren:s,staggerDirection:o}=a;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const s=[],o=(e.variantChildren.size-1)*i,l=1===r?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i}:function(){return o-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i};return Array.from(e.variantChildren).sort(La).forEach(((e,i)=>{e.notify("AnimationStart",t),s.push(Ra(e,t,{...a,delay:n+l(i)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(s)}(e,t,r+i,s,o,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[e,t]="beforeChildren"===l?[s,o]:[o,s];return e().then((()=>t()))}return Promise.all([s(),o(n.delay)])}function La(e,t){return e.sortNodePosition(t)}const Fa=[...Je].reverse(),Ua=Je.length;function Va(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:i}=t;return function(e,t){let n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const r=t.map((t=>Ra(e,t,i)));n=Promise.all(r)}else if("string"===typeof t)n=Ra(e,t,i);else{const r="function"===typeof t?ri(e,t,i.custom):t;n=Promise.all(Na(e,r,i))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,i)})))}function Ya(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!ii(t,e)}function Qa(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wa(){return{animate:Qa(!0),whileInView:Qa(),whileHover:Qa(),whileTap:Qa(),whileDrag:Qa(),whileFocus:Qa(),exit:Qa()}}let Ha=0;const Ga={animation:{Feature:class extends Hn{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=Va(e),n=Wa(),i=!0;const r=t=>(n,i)=>{var r;const a=ri(e,i,"exit"===t?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0);if(a){const{transition:e,transitionEnd:t,...i}=a;n={...n,...i,...t}}return n};function a(a){const s=e.getProps(),o=e.getVariantContext(!0)||{},l=[],c=new Set;let d={},u=1/0;for(let t=0;t<Ua;t++){const h=Fa[t],p=n[h],f=void 0!==s[h]?s[h]:o[h],m=Ke(f),g=h===a?p.isActive:null;!1===g&&(u=t);let x=f===o[h]&&f!==s[h]&&m;if(x&&i&&e.manuallyAnimateOnMount&&(x=!1),p.protectedKeys={...d},!p.isActive&&null===g||!f&&!p.prevProp||qe(f)||"boolean"===typeof f)continue;let v=Ya(p.prevProp,f)||h===a&&p.isActive&&!x&&m||t>u&&m,y=!1;const w=Array.isArray(f)?f:[f];let b=w.reduce(r(h),{});!1===g&&(b={});const{prevResolvedValues:j={}}=p,A={...j,...b},S=t=>{v=!0,c.has(t)&&(y=!0,c.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in A){const t=b[e],n=j[e];if(d.hasOwnProperty(e))continue;let i=!1;i=mn(t)&&mn(n)?!ii(t,n):t!==n,i?void 0!==t&&null!==t?S(e):c.add(e):void 0!==t&&c.has(e)?S(e):p.protectedKeys[e]=!0}p.prevProp=f,p.prevResolvedValues=b,p.isActive&&(d={...d,...b}),i&&e.blockInitialAnimation&&(v=!1),!v||x&&!y||l.push(...w.map((e=>({animation:e,options:{type:h}}))))}if(c.size){const t={};c.forEach((n=>{const i=e.getBaseTarget(n),r=e.getValue(n);r&&(r.liveStyle=!0),t[n]=null!==i&&void 0!==i?i:null})),l.push({animation:t})}let h=Boolean(l.length);return!i||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),i=!1,h?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,i){var r;if(n[t].isActive===i)return Promise.resolve();null===(r=e.variantChildren)||void 0===r||r.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,i)})),n[t].isActive=i;const s=a(t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=Wa(),i=!0}}}(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();qe(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}},exit:{Feature:class extends Hn{constructor(){super(...arguments),this.id=Ha++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const i=this.node.animationState.setActive("exit",!e);t&&!e&&i.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},$a=(e,t)=>Math.abs(e-t);class Xa{constructor(e,t){let{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Ja(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=$a(e.x,t.x),i=$a(e.y,t.y);return Math.sqrt(n**2+i**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:i}=e,{timestamp:r}=In;this.history.push({...i,timestamp:r});const{onStart:a,onMove:s}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Ka(t,this.transformPagePoint),Tn.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:i,resumeAnimation:r}=this.handlers;if(this.dragSnapToOrigin&&r&&r(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Ja("pointercancel"===e.type?this.lastMoveEventInfo:Ka(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),i&&i(e,a)},!Mn(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=n,this.contextWindow=i||window;const a=Ka(On(e),this.transformPagePoint),{point:s}=a,{timestamp:o}=In;this.history=[{...s,timestamp:o}];const{onSessionStart:l}=t;l&&l(e,Ja(a,this.history)),this.removeListeners=Fn(Rn(this.contextWindow,"pointermove",this.handlePointerMove),Rn(this.contextWindow,"pointerup",this.handlePointerUp),Rn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pn(this.updatePoint)}}function Ka(e,t){return t?{point:t(e.point)}:e}function qa(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ja(e,t){let{point:n}=e;return{point:n,delta:qa(n,es(t)),offset:qa(n,Za(t)),velocity:ts(t,.1)}}function Za(e){return e[0]}function es(e){return e[e.length-1]}function ts(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=es(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>ai(t)));)n--;if(!i)return{x:0,y:0};const a=si(r.timestamp-i.timestamp);if(0===a)return{x:0,y:0};const s={x:(r.x-i.x)/a,y:(r.y-i.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const ns=.9999,is=1.0001,rs=-.01,as=.01;function ss(e){return e.max-e.min}function os(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=i,e.originPoint=Kr(t.min,t.max,e.origin),e.scale=ss(n)/ss(t),e.translate=Kr(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ns&&e.scale<=is||isNaN(e.scale))&&(e.scale=1),(e.translate>=rs&&e.translate<=as||isNaN(e.translate))&&(e.translate=0)}function ls(e,t,n,i){os(e.x,t.x,n.x,i?i.originX:void 0),os(e.y,t.y,n.y,i?i.originY:void 0)}function cs(e,t,n){e.min=n.min+t.min,e.max=e.min+ss(t)}function ds(e,t,n){e.min=t.min-n.min,e.max=e.min+ss(t)}function us(e,t,n){ds(e.x,t.x,n.x),ds(e.y,t.y,n.y)}function hs(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function ps(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}const fs=.35;function ms(e,t,n){return{min:gs(e,t),max:gs(e,n)}}function gs(e,t){return"number"===typeof e?e:e[t]||0}const xs=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),vs=()=>({x:{min:0,max:0},y:{min:0,max:0}});function ys(e){return[e("x"),e("y")]}function ws(e){let{top:t,left:n,right:i,bottom:r}=e;return{x:{min:n,max:i},y:{min:t,max:r}}}function bs(e){return void 0===e||1===e}function js(e){let{scale:t,scaleX:n,scaleY:i}=e;return!bs(t)||!bs(n)||!bs(i)}function As(e){return js(e)||Ss(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ss(e){return ks(e.x)||ks(e.y)}function ks(e){return e&&"0%"!==e}function Es(e,t,n){return n+t*(e-n)}function Cs(e,t,n,i,r){return void 0!==r&&(e=Es(e,r,i)),Es(e,n,i)+t}function Ts(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;e.min=Cs(e.min,t,n,i,r),e.max=Cs(e.max,t,n,i,r)}function Ps(e,t){let{x:n,y:i}=t;Ts(e.x,n.translate,n.scale,n.originPoint),Ts(e.y,i.translate,i.scale,i.originPoint)}const Is=.999999999999,Bs=1.0000000000001;function zs(e,t){e.min=e.min+t,e.max=e.max+t}function Ds(e,t,n,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Ts(e,t,n,Kr(e.min,e.max,r),i)}function _s(e,t){Ds(e.x,t.x,t.scaleX,t.scale,t.originX),Ds(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ms(e,t){return ws(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(e.getBoundingClientRect(),t))}const Os=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Ns=new WeakMap;class Rs{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vs(),this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new Xa(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(On(e,"page").point)},onStart:(e,t)=>{var n;const{drag:i,dragPropagation:r,onDragStart:a}=this.getProps();if(i&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Qn(i),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ys((e=>{let t=this.getAxisMotionValue(e).get()||0;if(It.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const i=n.layout.layoutBox[e];if(i){t=ss(i)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),a&&Tn.postRender((()=>a(e,t))),null===(n=this.removeWillChange)||void 0===n||n.call(this),this.removeWillChange=Ma(this.visualElement,"transform");const{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:r,onDrag:a}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:s}=t;if(i&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(s),void(null!==this.currentDirection&&r&&r(this.currentDirection));this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>ys((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:Os(this.visualElement)})}stop(e,t){var n;null===(n=this.removeWillChange)||void 0===n||n.call(this);const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:a}=this.getProps();a&&Tn.postRender((()=>a(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:i}=this.getProps();if(!n||!Ls(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:i,max:r}=t;return void 0!==i&&e<i?e=n?Kr(i,e,n.min):Math.max(e,i):void 0!==r&&e>r&&(e=n?Kr(r,e,n.max):Math.min(e,r)),e}(a,this.constraints[e],this.elastic[e])),r.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,r=this.constraints;t&&Ye(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!i)&&function(e,t){let{top:n,left:i,bottom:r,right:a}=t;return{x:hs(e.x,i,a),y:hs(e.y,n,r)}}(i.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fs;return!1===e?e=0:!0===e&&(e=fs),{x:ms(e,"left","right"),y:ms(e,"top","bottom")}}(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ys((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(i.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ye(e))return!1;const n=e.current;wi(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=function(e,t,n){const i=Ms(e,n),{scroll:r}=t;return r&&(zs(i.x,r.offset.x),zs(i.y,r.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:ps(e.x,t.x),y:ps(e.y,t.y)}}(i.layout.layoutBox,r);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=ws(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:i,dragTransition:r,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),o=this.constraints||{},l=ys((s=>{if(!Ls(s,t,this.currentDirection))return;let l=o&&o[s]||{};a&&(l={min:0,max:0});const c=i?200:1e6,d=i?40:1e7,u={type:"inertia",velocity:n?e[s]:0,bounceStiffness:c,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(s,u)}));return Promise.all(l).then(s)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Ca(e,n,0,t,this.visualElement,!1,Ma(this.visualElement,e)))}stopAnimation(){ys((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){ys((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),i=n[t];return i||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ys((t=>{const{drag:n}=this.getProps();if(!Ls(t,n,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(t);if(i&&i.layout){const{min:n,max:a}=i.layout.layoutBox[t];r.set(e[t]-Kr(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ye(t)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ys((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();i[e]=function(e,t){let n=.5;const i=ss(e),r=ss(t);return r>i?n=Xr(t.min,t.max-i,e.min):i>r&&(n=Xr(e.min,e.max-r,t.min)),yt(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ys((t=>{if(!Ls(t,e,null))return;const n=this.getAxisMotionValue(t),{min:r,max:a}=this.constraints[t];n.set(Kr(r,a,i[t]))}))}addListeners(){if(!this.visualElement.current)return;Ns.set(this.visualElement,this);const e=Rn(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Ye(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),Tn.read(t);const r=_n(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(ys((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{r(),e(),i(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:a=fs,dragMomentum:s=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:i,dragConstraints:r,dragElastic:a,dragMomentum:s}}}function Ls(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Fs=e=>(t,n)=>{e&&Tn.postRender((()=>e(t,n)))};const Us={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Vs(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ys={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Bt.test(e))return e;e=parseFloat(e)}return`${Vs(e,t.target.x)}% ${Vs(e,t.target.y)}%`}},Qs={correct:(e,t)=>{let{treeScale:n,projectionDelta:i}=t;const r=e,a=ir.parse(e);if(a.length>5)return r;const s=ir.createTransformer(e),o="number"!==typeof a[0]?1:0,l=i.x.scale*n.x,c=i.y.scale*n.y;a[0+o]/=l,a[1+o]/=c;const d=Kr(l,c,.5);return"number"===typeof a[2+o]&&(a[2+o]/=d),"number"===typeof a[3+o]&&(a[3+o]/=d),s(a)}};class Ws extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:i}=this.props,{projection:r}=e;var a;a=Gs,Object.assign(pt,a),r&&(t.group&&t.group.add(r),n&&n.register&&i&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",(()=>{this.safeToRemove()})),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Us.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:i,isPresent:r}=this.props,a=n.projection;return a?(a.isPresent=r,i||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?a.promote():a.relegate()||Tn.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ue.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Hs(e){const[n,i]=function(){const e=(0,t.useContext)(Be);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,a=(0,t.useId)();(0,t.useEffect)((()=>r(a)),[]);const s=(0,t.useCallback)((()=>i&&i(a)),[a,i]);return!n&&i?[!1,s]:[!0]}(),r=(0,t.useContext)(st);return(0,Te.jsx)(Ws,{...e,layoutGroup:r,switchLayoutGroup:(0,t.useContext)(Qe),isPresent:n,safeToRemove:i})}const Gs={borderRadius:{...Ys,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ys,borderTopRightRadius:Ys,borderBottomLeftRadius:Ys,borderBottomRightRadius:Ys,boxShadow:Qs},$s=["TopLeft","TopRight","BottomLeft","BottomRight"],Xs=$s.length,Ks=e=>"string"===typeof e?parseFloat(e):e,qs=e=>"number"===typeof e||Bt.test(e);function Js(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Zs=to(0,.5,Vr),eo=to(.5,.95,Cn);function to(e,t,n){return i=>i<e?0:i>t?1:n(Xr(e,t,i))}function no(e,t){e.min=t.min,e.max=t.max}function io(e,t){no(e.x,t.x),no(e.y,t.y)}function ro(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function ao(e,t,n,i,r){return e=Es(e-=t,1/n,i),void 0!==r&&(e=Es(e,1/r,i)),e}function so(e,t,n,i,r){let[a,s,o]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;It.test(t)&&(t=parseFloat(t),t=Kr(s.min,s.max,t/100)-s.min);if("number"!==typeof t)return;let o=Kr(a.min,a.max,i);e===a&&(o-=t),e.min=ao(e.min,t,n,o,r),e.max=ao(e.max,t,n,o,r)}(e,t[a],t[s],t[o],t.scale,i,r)}const oo=["x","scaleX","originX"],lo=["y","scaleY","originY"];function co(e,t,n,i){so(e.x,t,oo,n?n.x:void 0,i?i.x:void 0),so(e.y,t,lo,n?n.y:void 0,i?i.y:void 0)}function uo(e){return 0===e.translate&&1===e.scale}function ho(e){return uo(e.x)&&uo(e.y)}function po(e,t){return e.min===t.min&&e.max===t.max}function fo(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function mo(e,t){return fo(e.x,t.x)&&fo(e.y,t.y)}function go(e){return ss(e.x)/ss(e.y)}function xo(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class vo{constructor(){this.members=[]}add(e){bn(this.members,e),e.scheduleRender()}remove(e){if(jn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let i=t;i>=0;i--){const e=this.members[i];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const yo=(e,t)=>e.depth-t.depth;class wo{constructor(){this.children=[],this.isDirty=!1}add(e){bn(this.children,e),this.isDirty=!0}remove(e){jn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(yo),this.isDirty=!1,this.children.forEach(e)}}const bo={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},jo="undefined"!==typeof window&&void 0!==window.MotionDebug,Ao=["","X","Y","Z"],So={visibility:"hidden"};let ko=0;function Eo(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function Co(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return!1;const{visualElement:t}=e.options;return!!t&&(!!window.MotionHasOptimisedTransformAnimation(Da(t))||!(!e.parent||e.parent.hasCheckedOptimisedAppear)&&Co(e.parent))}function To(e){let{attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:r,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=ko++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,jo&&(bo.totalNodes=bo.resolvedTargetDeltas=bo.recalculatedProjection=0),this.nodes.forEach(Bo),this.nodes.forEach(Ro),this.nodes.forEach(Lo),this.nodes.forEach(zo),jo&&window.MotionDebug.record(bo)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new wo)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ta),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];t&&t.notify(...i)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var i;this.isSVG=(i=e)instanceof SVGElement&&"svg"!==i.tagName,this.instance=e;const{layoutId:r,layout:a,visualElement:s}=this.options;if(s&&!s.current&&s.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||r)&&(this.isLayoutDirty=!0),t){let n;const i=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=xi.now(),i=r=>{let{timestamp:a}=r;const s=a-n;s>=t&&(Pn(i),e(s-t))};return Tn.read(i,!0),()=>Pn(i)}(i,250),Us.hasAnimatedSinceResize&&(Us.hasAnimatedSinceResize=!1,this.nodes.forEach(No))}))}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&s&&(r||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:i,layout:r}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||s.getDefaultTransition()||Wo,{onLayoutAnimationStart:o,onLayoutAnimationComplete:l}=s.getProps(),c=!this.targetLayout||!mo(this.targetLayout,r)||i,d=!n&&i;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||d||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,d);const e={...ui(a,"layout"),onPlay:o,onComplete:l};(s.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||No(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Fo),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionHandoffCancelAll&&Co(this)&&window.MotionHandoffCancelAll(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let r=0;r<this.path.length;r++){const e=this.path[r];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(_o);this.isUpdating||this.nodes.forEach(Mo),this.isUpdating=!1,this.nodes.forEach(Oo),this.nodes.forEach(Po),this.nodes.forEach(Io),this.clearAllSnapshots();const e=xi.now();In.delta=yt(0,1e3/60,e-In.timestamp),In.timestamp=e,In.isProcessing=!0,Bn.update.process(In),Bn.preRender.process(In),Bn.render.process(In),In.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ue.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Do),this.sharedNodes.forEach(Uo)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Tn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Tn.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=vs(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ho(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,r=i!==this.prevTransformTemplateValue;e&&(t||As(this.latestValues)||r)&&(a(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var i;return e&&(n=this.removeTransform(n)),$o((i=n).x),$o(i.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var e;const{visualElement:t}=this.options;if(!t)return vs();const n=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(Ko))){const{scroll:e}=this.root;e&&(zs(n.x,e.offset.x),zs(n.y,e.offset.y))}return n}removeElementScroll(e){var t;const n=vs();if(io(n,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return n;for(let i=0;i<this.path.length;i++){const t=this.path[i],{scroll:r,options:a}=t;t!==this.root&&r&&a.layoutScroll&&(r.wasRoot&&io(n,e),zs(n.x,r.offset.x),zs(n.y,r.offset.y))}return n}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=vs();io(n,e);for(let i=0;i<this.path.length;i++){const e=this.path[i];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&_s(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),As(e.latestValues)&&_s(n,e.latestValues)}return As(this.latestValues)&&_s(n,this.latestValues),n}removeTransform(e){const t=vs();io(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!As(e.latestValues))continue;js(e.latestValues)&&e.updateSnapshot();const i=vs();io(i,e.measurePageBox()),co(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,i)}return As(this.latestValues)&&co(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==In.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const i=Boolean(this.resumingFrom)||this!==n;if(!(e||i&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:a}=this.options;if(this.layout&&(r||a)){if(this.resolvedRelativeTargetAt=In.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vs(),this.relativeTargetOrigin=vs(),us(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),io(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var s,o,l;if(this.target||(this.target=vs(),this.targetWithTransforms=vs()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),s=this.target,o=this.relativeTarget,l=this.relativeParent.target,cs(s.x,o.x,l.x),cs(s.y,o.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):io(this.target,this.layout.layoutBox),Ps(this.target,this.targetDelta)):io(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vs(),this.relativeTargetOrigin=vs(),us(this.relativeTargetOrigin,this.target,e.target),io(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}jo&&bo.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!js(this.parent.latestValues)&&!Ss(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let i=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(i=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===In.timestamp&&(i=!1),i)return;const{layout:r,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!a)return;io(this.layoutCorrected,this.layout.layoutBox);const s=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=n.length;if(!r)return;let a,s;t.x=t.y=1;for(let o=0;o<r;o++){a=n[o],s=a.projectionDelta;const{visualElement:r}=a.options;r&&r.props.style&&"contents"===r.props.style.display||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&_s(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Ps(e,s)),i&&As(a.latestValues)&&_s(e,a.latestValues))}t.x<Bs&&t.x>Is&&(t.x=1),t.y<Bs&&t.y>Is&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms=vs());const{target:l}=t;l?(this.projectionDelta&&this.prevProjectionDelta?(ro(this.prevProjectionDelta.x,this.projectionDelta.x),ro(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),ls(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===s&&this.treeScale.y===o&&xo(this.projectionDelta.x,this.prevProjectionDelta.x)&&xo(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),jo&&bo.recalculatedProjection++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xs(),this.projectionDelta=xs(),this.projectionDeltaWithTransform=xs()}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,i=n?n.latestValues:{},r={...this.latestValues},a=xs();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const s=vs(),o=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,d=Boolean(o&&!c&&!0===this.options.crossfade&&!this.path.some(Qo));let u;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Vo(a.x,e.x,n),Vo(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(us(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,i){Yo(e.x,t.x,n.x,i),Yo(e.y,t.y,n.y,i)}(this.relativeTarget,this.relativeTargetOrigin,s,n),u&&function(e,t){return po(e.x,t.x)&&po(e.y,t.y)}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u=vs()),io(u,this.relativeTarget)),o&&(this.animationValues=r,function(e,t,n,i,r,a){r?(e.opacity=Kr(0,void 0!==n.opacity?n.opacity:1,Zs(i)),e.opacityExit=Kr(void 0!==t.opacity?t.opacity:1,0,eo(i))):a&&(e.opacity=Kr(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,i));for(let s=0;s<Xs;s++){const r=`border${$s[s]}Radius`;let a=Js(t,r),o=Js(n,r);void 0===a&&void 0===o||(a||(a=0),o||(o=0),0===a||0===o||qs(a)===qs(o)?(e[r]=Math.max(Kr(Ks(a),Ks(o),i),0),(It.test(o)||It.test(a))&&(e[r]+="%")):e[r]=o)}(t.rotate||n.rotate)&&(e.rotate=Kr(t.rotate||0,n.rotate||0,i))}(r,i,this.latestValues,n,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Tn.update((()=>{Us.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const i=xt(e)?e:Ba(e);return i.start(Ca("",i,t,n)),i.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:i,latestValues:r}=e;if(t&&n&&i){if(this!==e&&this.layout&&i&&Xo(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||vs();const t=ss(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const i=ss(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+i}io(t,n),_s(t,r),ls(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new vo);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=this.getStack();i&&i.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const i={};n.z&&Eo("z",e,i,this.animationValues);for(let r=0;r<Ao.length;r++)Eo(`rotate${Ao[r]}`,e,i,this.animationValues),Eo(`skew${Ao[r]}`,e,i,this.animationValues);e.render();for(const r in i)e.setStaticValue(r,i[r]),this.animationValues&&(this.animationValues[r]=i[r]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return So;const i={visibility:""},r=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,i.opacity="",i.pointerEvents=vn(null===e||void 0===e?void 0:e.pointerEvents)||"",i.transform=r?r(this.latestValues,""):"none",i;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=vn(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(t.transform=r?r({},""):"none",this.hasProjected=!1),t}const s=a.animationValues||a.latestValues;this.applyTransformsToTarget(),i.transform=function(e,t,n){let i="";const r=e.x.translate/t.x,a=e.y.translate/t.y,s=(null===n||void 0===n?void 0:n.z)||0;if((r||a||s)&&(i=`translate3d(${r}px, ${a}px, ${s}px) `),1===t.x&&1===t.y||(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:r,rotateY:a,skewX:s,skewY:o}=n;e&&(i=`perspective(${e}px) ${i}`),t&&(i+=`rotate(${t}deg) `),r&&(i+=`rotateX(${r}deg) `),a&&(i+=`rotateY(${a}deg) `),s&&(i+=`skewX(${s}deg) `),o&&(i+=`skewY(${o}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return 1===o&&1===l||(i+=`scale(${o}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,s),r&&(i.transform=r(s,i.transform));const{x:o,y:l}=this.projectionDelta;i.transformOrigin=`${100*o.origin}% ${100*l.origin}% 0`,a.animationValues?i.opacity=a===this?null!==(n=null!==(t=s.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:i.opacity=a===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0;for(const c in pt){if(void 0===s[c])continue;const{correct:e,applyTo:t}=pt[c],n="none"===i.transform?s[c]:e(s[c],a);if(t){const e=t.length;for(let r=0;r<e;r++)i[t[r]]=n}else i[c]=n}return this.options.layoutId&&(i.pointerEvents=a===this?vn(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),i}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(_o),this.root.sharedNodes.clear()}}}function Po(e){e.updateLayout()}function Io(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:i}=e.layout,{animationType:r}=e.options,a=n.source!==e.layout.source;"size"===r?ys((e=>{const i=a?n.measuredBox[e]:n.layoutBox[e],r=ss(i);i.min=t[e].min,i.max=i.min+r})):Xo(r,n.layoutBox,t)&&ys((i=>{const r=a?n.measuredBox[i]:n.layoutBox[i],s=ss(t[i]);r.max=r.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[i].max=e.relativeTarget[i].min+s)}));const s=xs();ls(s,t,n.layoutBox);const o=xs();a?ls(o,e.applyTransform(i,!0),n.measuredBox):ls(o,t,n.layoutBox);const l=!ho(s);let c=!1;if(!e.resumeFrom){const i=e.getClosestProjectingParent();if(i&&!i.resumeFrom){const{snapshot:r,layout:a}=i;if(r&&a){const s=vs();us(s,n.layoutBox,r.layoutBox);const o=vs();us(o,t,a.layoutBox),mo(s,o)||(c=!0),i.options.layoutRoot&&(e.relativeTarget=o,e.relativeTargetOrigin=s,e.relativeParent=i)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:o,layoutDelta:s,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Bo(e){jo&&bo.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function zo(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Do(e){e.clearSnapshot()}function _o(e){e.clearMeasurements()}function Mo(e){e.isLayoutDirty=!1}function Oo(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function No(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ro(e){e.resolveTargetDelta()}function Lo(e){e.calcProjection()}function Fo(e){e.resetSkewAndRotation()}function Uo(e){e.removeLeadSnapshot()}function Vo(e,t,n){e.translate=Kr(t.translate,0,n),e.scale=Kr(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Yo(e,t,n,i){e.min=Kr(t.min,n.min,i),e.max=Kr(t.max,n.max,i)}function Qo(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Wo={duration:.45,ease:[.4,0,.1,1]},Ho=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Go=Ho("applewebkit/")&&!Ho("chrome/")?Math.round:Cn;function $o(e){e.min=Go(e.min),e.max=Go(e.max)}function Xo(e,t,n){return"position"===e||"preserve-aspect"===e&&(i=go(t),r=go(n),a=.2,!(Math.abs(i-r)<=a));var i,r,a}function Ko(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}const qo=To({attachResizeListener:(e,t)=>_n(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jo={current:void 0},Zo=To({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jo.current){const e=new qo({});e.mount(window),e.setOptions({layoutScroll:!0}),Jo.current=e}return Jo.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),el={pan:{Feature:class extends Hn{constructor(){super(...arguments),this.removePointerDownListener=Cn}onPointerDown(e){this.session=new Xa(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Os(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Fs(e),onStart:Fs(t),onMove:n,onEnd:(e,t)=>{delete this.session,i&&Tn.postRender((()=>i(e,t)))}}}mount(){this.removePointerDownListener=Rn(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Hn{constructor(e){super(e),this.removeGroupControls=Cn,this.removeListeners=Cn,this.controls=new Rs(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Cn}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Zo,MeasureLayout:Hs}},tl={current:null},nl={current:!1};const il=new WeakMap,rl=[...zi,Hi,ir],al=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],sl=Ze.length;class ol{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:a,visualState:s}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.applyWillChange=!1,this.resolveKeyframes=(e,t,n,i)=>new this.KeyframeResolver(e,t,n,i,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Li,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,Tn.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=et(n),this.isVariantNode=tt(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in u){const e=u[h];void 0!==l[h]&&xt(e)&&e.set(l[h],!1)}}mount(e){this.current=e,il.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),nl.current||function(){if(nl.current=!0,ze)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>tl.current=e.matches;e.addListener(t),t()}else tl.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||tl.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){il.delete(this.current),this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){const n=mt.has(e),i=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Tn.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),r=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{i(),r(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in at){const t=at[e];if(!t)continue;const{isEnabled:n,Feature:i}=t;if(!this.features[e]&&i&&n(this.props)&&(this.features[e]=new i(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vs()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<al.length;n++){const t=al[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const i=e["on"+t];i&&(this.propEventSubscriptions[t]=this.on(t,i))}this.prevMotionValues=function(e,t,n){for(const i in t){const r=t[i],a=n[i];if(xt(r))e.addValue(i,r);else if(xt(a))e.addValue(i,Ba(r,{owner:e}));else if(a!==r)if(e.hasValue(i)){const t=e.getValue(i);!0===t.liveStyle?t.jump(r):t.hasAnimated||t.set(r)}else{const t=e.getStaticValue(i);e.addValue(i,Ba(void 0!==t?t:r,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<sl;t++){const n=Ze[t],i=this.props[n];(Ke(i)||!1===i)&&(e[n]=i)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Ba(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){var n;let i=void 0===this.latestValues[e]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,e))&&void 0!==n?n:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==i&&null!==i&&("string"===typeof i&&(bi(i)||vi(i))?i=parseFloat(i):!(e=>rl.find(Bi(e)))(i)&&ir.test(t)&&(i=dr(e,t)),this.setBaseTarget(e,xt(i)?i.get():i)),xt(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props;let i;if("string"===typeof n||"object"===typeof n){const r=fn(this.props,n,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);r&&(i=r[e])}if(n&&void 0!==i)return i;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||xt(r)?void 0!==this.initialValues[e]&&void 0===i?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new Ta),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.events[e].notify(...n)}}}class ll extends ol{constructor(){super(...arguments),this.KeyframeResolver=hr}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:i}=t;delete n[e],delete i[e]}}class cl extends ll{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=ln}readValueFromInstance(e,t){if(mt.has(t)){const e=cr(t);return e&&e.default||0}{const i=(n=e,window.getComputedStyle(n)),r=(Ft(t)?i.getPropertyValue(t):i[t])||0;return"string"===typeof r?r.trim():r}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Ms(e,n)}build(e,t,n){Qt(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return un(e,t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;xt(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class dl extends ll{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vs}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(mt.has(t)){const e=cr(t);return e&&e.default||0}return t=cn.has(t)?t:Me(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return hn(e,t,n)}build(e,t,n){nn(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,i){dn(e,t,0,i)}mount(e){this.isSVGTag=an(e.tagName),super.mount(e)}}const ul=(e,n)=>ht(e)?new dl(n):new cl(n,{allowProjection:e!==t.Fragment}),hl={...Ga,...ni,...el,...{layout:{ProjectionNode:Zo,MeasureLayout:Hs}}},pl=dt(((e,t)=>function(e,t,n,i){let{forwardMotionProps:r=!1}=t;return{...ht(e)?zn:Dn,preloadedFeatures:n,useRender:on(r),createVisualElement:i,Component:e}}(e,t,hl,ul)));var fl=function(){return fl=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},fl.apply(this,arguments)};Object.create;function ml(e,t,n){if(n||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var gl=n(7324),xl=n.n(gl),vl="-ms-",yl="-moz-",wl="-webkit-",bl="comm",jl="rule",Al="decl",Sl="@import",kl="@keyframes",El="@layer",Cl=Math.abs,Tl=String.fromCharCode,Pl=Object.assign;function Il(e){return e.trim()}function Bl(e,t){return(e=t.exec(e))?e[0]:e}function zl(e,t,n){return e.replace(t,n)}function Dl(e,t,n){return e.indexOf(t,n)}function _l(e,t){return 0|e.charCodeAt(t)}function Ml(e,t,n){return e.slice(t,n)}function Ol(e){return e.length}function Nl(e){return e.length}function Rl(e,t){return t.push(e),e}function Ll(e,t){return e.filter((function(e){return!Bl(e,t)}))}var Fl=1,Ul=1,Vl=0,Yl=0,Ql=0,Wl="";function Hl(e,t,n,i,r,a,s,o){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:Fl,column:Ul,length:s,return:"",siblings:o}}function Gl(e,t){return Pl(Hl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $l(e){for(;e.root;)e=Gl(e.root,{children:[e]});Rl(e,e.siblings)}function Xl(){return Ql=Yl>0?_l(Wl,--Yl):0,Ul--,10===Ql&&(Ul=1,Fl--),Ql}function Kl(){return Ql=Yl<Vl?_l(Wl,Yl++):0,Ul++,10===Ql&&(Ul=1,Fl++),Ql}function ql(){return _l(Wl,Yl)}function Jl(){return Yl}function Zl(e,t){return Ml(Wl,e,t)}function ec(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tc(e){return Fl=Ul=1,Vl=Ol(Wl=e),Yl=0,[]}function nc(e){return Wl="",e}function ic(e){return Il(Zl(Yl-1,sc(91===e?e+2:40===e?e+1:e)))}function rc(e){for(;(Ql=ql())&&Ql<33;)Kl();return ec(e)>2||ec(Ql)>3?"":" "}function ac(e,t){for(;--t&&Kl()&&!(Ql<48||Ql>102||Ql>57&&Ql<65||Ql>70&&Ql<97););return Zl(e,Jl()+(t<6&&32==ql()&&32==Kl()))}function sc(e){for(;Kl();)switch(Ql){case e:return Yl;case 34:case 39:34!==e&&39!==e&&sc(Ql);break;case 40:41===e&&sc(e);break;case 92:Kl()}return Yl}function oc(e,t){for(;Kl()&&e+Ql!==57&&(e+Ql!==84||47!==ql()););return"/*"+Zl(t,Yl-1)+"*"+Tl(47===e?e:Kl())}function lc(e){for(;!ec(ql());)Kl();return Zl(e,Yl)}function cc(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function dc(e,t,n,i){switch(e.type){case El:if(e.children.length)break;case Sl:case Al:return e.return=e.return||e.value;case bl:return"";case kl:return e.return=e.value+"{"+cc(e.children,i)+"}";case jl:if(!Ol(e.value=e.props.join(",")))return""}return Ol(n=cc(e.children,i))?e.return=e.value+"{"+n+"}":""}function uc(e,t,n){switch(function(e,t){return 45^_l(e,0)?(((t<<2^_l(e,0))<<2^_l(e,1))<<2^_l(e,2))<<2^_l(e,3):0}(e,t)){case 5103:return wl+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wl+e+e;case 4789:return yl+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return wl+e+yl+e+vl+e+e;case 5936:switch(_l(e,t+11)){case 114:return wl+e+vl+zl(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return wl+e+vl+zl(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return wl+e+vl+zl(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return wl+e+vl+e+e;case 6165:return wl+e+vl+"flex-"+e+e;case 5187:return wl+e+zl(e,/(\w+).+(:[^]+)/,wl+"box-$1$2"+vl+"flex-$1$2")+e;case 5443:return wl+e+vl+"flex-item-"+zl(e,/flex-|-self/g,"")+(Bl(e,/flex-|baseline/)?"":vl+"grid-row-"+zl(e,/flex-|-self/g,""))+e;case 4675:return wl+e+vl+"flex-line-pack"+zl(e,/align-content|flex-|-self/g,"")+e;case 5548:return wl+e+vl+zl(e,"shrink","negative")+e;case 5292:return wl+e+vl+zl(e,"basis","preferred-size")+e;case 6060:return wl+"box-"+zl(e,"-grow","")+wl+e+vl+zl(e,"grow","positive")+e;case 4554:return wl+zl(e,/([^-])(transform)/g,"$1"+wl+"$2")+e;case 6187:return zl(zl(zl(e,/(zoom-|grab)/,wl+"$1"),/(image-set)/,wl+"$1"),e,"")+e;case 5495:case 3959:return zl(e,/(image-set\([^]*)/,wl+"$1$`$1");case 4968:return zl(zl(e,/(.+:)(flex-)?(.*)/,wl+"box-pack:$3"+vl+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wl+e+e;case 4200:if(!Bl(e,/flex-|baseline/))return vl+"grid-column-align"+Ml(e,t)+e;break;case 2592:case 3360:return vl+zl(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Bl(e.props,/grid-\w+-end/)}))?~Dl(e+(n=n[t].value),"span",0)?e:vl+zl(e,"-start","")+e+vl+"grid-row-span:"+(~Dl(n,"span",0)?Bl(n,/\d+/):+Bl(n,/\d+/)-+Bl(e,/\d+/))+";":vl+zl(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Bl(e.props,/grid-\w+-start/)}))?e:vl+zl(zl(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return zl(e,/(.+)-inline(.+)/,wl+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ol(e)-1-t>6)switch(_l(e,t+1)){case 109:if(45!==_l(e,t+4))break;case 102:return zl(e,/(.+:)(.+)-([^]+)/,"$1"+wl+"$2-$3$1"+yl+(108==_l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Dl(e,"stretch",0)?uc(zl(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return zl(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,i,r,a,s,o){return vl+n+":"+i+o+(r?vl+n+"-span:"+(a?s:+s-+i)+o:"")+e}));case 4949:if(121===_l(e,t+6))return zl(e,":",":"+wl)+e;break;case 6444:switch(_l(e,45===_l(e,14)?18:11)){case 120:return zl(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wl+(45===_l(e,14)?"inline-":"")+"box$3$1"+wl+"$2$3$1"+vl+"$2box$3")+e;case 100:return zl(e,":",":"+vl)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return zl(e,"scroll-","scroll-snap-")+e}return e}function hc(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Al:return void(e.return=uc(e.value,e.length,n));case kl:return cc([Gl(e,{value:zl(e.value,"@","@"+wl)})],i);case jl:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Bl(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$l(Gl(e,{props:[zl(t,/:(read-\w+)/,":"+yl+"$1")]})),$l(Gl(e,{props:[t]})),Pl(e,{props:Ll(n,i)});break;case"::placeholder":$l(Gl(e,{props:[zl(t,/:(plac\w+)/,":"+wl+"input-$1")]})),$l(Gl(e,{props:[zl(t,/:(plac\w+)/,":"+yl+"$1")]})),$l(Gl(e,{props:[zl(t,/:(plac\w+)/,vl+"input-$1")]})),$l(Gl(e,{props:[t]})),Pl(e,{props:Ll(n,i)})}return""}))}}function pc(e){return nc(fc("",null,null,null,[""],e=tc(e),0,[0],e))}function fc(e,t,n,i,r,a,s,o,l){for(var c=0,d=0,u=s,h=0,p=0,f=0,m=1,g=1,x=1,v=0,y="",w=r,b=a,j=i,A=y;g;)switch(f=v,v=Kl()){case 40:if(108!=f&&58==_l(A,u-1)){-1!=Dl(A+=zl(ic(v),"&","&\f"),"&\f",Cl(c?o[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:A+=ic(v);break;case 9:case 10:case 13:case 32:A+=rc(f);break;case 92:A+=ac(Jl()-1,7);continue;case 47:switch(ql()){case 42:case 47:Rl(gc(oc(Kl(),Jl()),t,n,l),l);break;default:A+="/"}break;case 123*m:o[c++]=Ol(A)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+d:-1==x&&(A=zl(A,/\f/g,"")),p>0&&Ol(A)-u&&Rl(p>32?xc(A+";",i,n,u-1,l):xc(zl(A," ","")+";",i,n,u-2,l),l);break;case 59:A+=";";default:if(Rl(j=mc(A,t,n,c,d,r,o,y,w=[],b=[],u,a),a),123===v)if(0===d)fc(A,t,j,j,w,a,u,o,b);else switch(99===h&&110===_l(A,3)?100:h){case 100:case 108:case 109:case 115:fc(e,j,j,i&&Rl(mc(e,j,j,0,0,r,o,y,r,w=[],u,b),b),r,b,u,o,i?w:b);break;default:fc(A,j,j,j,[""],b,0,o,b)}}c=d=p=0,m=x=1,y=A="",u=s;break;case 58:u=1+Ol(A),p=f;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Xl())continue;switch(A+=Tl(v),v*m){case 38:x=d>0?1:(A+="\f",-1);break;case 44:o[c++]=(Ol(A)-1)*x,x=1;break;case 64:45===ql()&&(A+=ic(Kl())),h=ql(),d=u=Ol(y=A+=lc(Jl())),v++;break;case 45:45===f&&2==Ol(A)&&(m=0)}}return a}function mc(e,t,n,i,r,a,s,o,l,c,d,u){for(var h=r-1,p=0===r?a:[""],f=Nl(p),m=0,g=0,x=0;m<i;++m)for(var v=0,y=Ml(e,h+1,h=Cl(g=s[m])),w=e;v<f;++v)(w=Il(g>0?p[v]+" "+y:zl(y,/&\f/g,p[v])))&&(l[x++]=w);return Hl(e,t,n,0===r?jl:o,l,c,d,u)}function gc(e,t,n,i){return Hl(e,t,n,bl,Tl(Ql),Ml(e,2,-2),0,i)}function xc(e,t,n,i,r){return Hl(e,t,n,Al,Ml(e,0,i),Ml(e,i+1,-1),i,r)}var vc={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yc="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",wc="active",bc="data-styled-version",jc="6.1.12",Ac="/*!sc*/\n",Sc="undefined"!=typeof window&&"HTMLElement"in window,kc=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Ec=(new Set,Object.freeze([])),Cc=Object.freeze({});function Tc(e,t,n){return void 0===n&&(n=Cc),e.theme!==n.theme&&e.theme||t||n.theme}var Pc=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ic=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bc=/(^-|-$)/g;function zc(e){return e.replace(Ic,"-").replace(Bc,"")}var Dc=/(a)(d)/gi,_c=52,Mc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oc(e){var t,n="";for(t=Math.abs(e);t>_c;t=t/_c|0)n=Mc(t%_c)+n;return(Mc(t%_c)+n).replace(Dc,"$1-$2")}var Nc,Rc=5381,Lc=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Fc=function(e){return Lc(Rc,e)};function Uc(e){return Oc(Fc(e)>>>0)}function Vc(e){return e.displayName||e.name||"Component"}function Yc(e){return"string"==typeof e&&!0}var Qc="function"==typeof Symbol&&Symbol.for,Wc=Qc?Symbol.for("react.memo"):60115,Hc=Qc?Symbol.for("react.forward_ref"):60112,Gc={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kc=((Nc={})[Hc]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nc[Wc]=Xc,Nc);function qc(e){return("type"in(t=e)&&t.type.$$typeof)===Wc?Xc:"$$typeof"in e?Kc[e.$$typeof]:Gc;var t}var Jc=Object.defineProperty,Zc=Object.getOwnPropertyNames,ed=Object.getOwnPropertySymbols,td=Object.getOwnPropertyDescriptor,nd=Object.getPrototypeOf,id=Object.prototype;function rd(e,t,n){if("string"!=typeof t){if(id){var i=nd(t);i&&i!==id&&rd(e,i,n)}var r=Zc(t);ed&&(r=r.concat(ed(t)));for(var a=qc(e),s=qc(t),o=0;o<r.length;++o){var l=r[o];if(!(l in $c||n&&n[l]||s&&l in s||a&&l in a)){var c=td(t,l);try{Jc(e,l,c)}catch(e){}}}}return e}function ad(e){return"function"==typeof e}function sd(e){return"object"==typeof e&&"styledComponentId"in e}function od(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ld(e,t){if(0===e.length)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function cd(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dd(e,t,n){if(void 0===n&&(n=!1),!n&&!cd(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=dd(e[i],t[i]);else if(cd(t))for(var i in t)e[i]=dd(e[i],t[i]);return e}function ud(e,t){Object.defineProperty(e,"toString",{value:t})}function hd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pd=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;e>=r;)if((r<<=1)<0)throw hd(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var a=i;a<r;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),o=(a=0,t.length);a<o;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),i=n+t;this.groupSizes[e]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n,a=i;a<r;a++)t+="".concat(this.tag.getRule(a)).concat(Ac);return t},e}(),fd=new Map,md=new Map,gd=1,xd=function(e){if(fd.has(e))return fd.get(e);for(;md.has(gd);)gd++;var t=gd++;return fd.set(e,t),md.set(t,e),t},vd=function(e,t){gd=t+1,fd.set(e,t),md.set(t,e)},yd="style[".concat(yc,"][").concat(bc,'="').concat(jc,'"]'),wd=new RegExp("^".concat(yc,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bd=function(e,t,n){for(var i,r=n.split(","),a=0,s=r.length;a<s;a++)(i=r[a])&&e.registerName(t,i)},jd=function(e,t){for(var n,i=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Ac),r=[],a=0,s=i.length;a<s;a++){var o=i[a].trim();if(o){var l=o.match(wd);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(vd(d,c),bd(e,d,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Ad=function(e){for(var t=document.querySelectorAll(yd),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(yc)!==wc&&(jd(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function Sd(){return n.nc}var kd=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(yc,"]")));return t[t.length-1]}(n),a=void 0!==r?r.nextSibling:null;i.setAttribute(yc,wc),i.setAttribute(bc,jc);var s=Sd();return s&&i.setAttribute("nonce",s),n.insertBefore(i,a),i},Ed=function(){function e(e){this.element=kd(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var r=t[n];if(r.ownerNode===e)return r}throw hd(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Cd=function(){function e(e){this.element=kd(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Td=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Pd=Sc,Id={isServer:!Sc,useCSSOMInjection:!kc},Bd=function(){function e(e,t,n){void 0===e&&(e=Cc),void 0===t&&(t={});var i=this;this.options=fl(fl({},Id),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Sc&&Pd&&(Pd=!1,Ad(this)),ud(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,i="",r=function(n){var r=function(e){return md.get(e)}(n);if(void 0===r)return"continue";var a=e.names.get(r),s=t.getGroup(n);if(void 0===a||!a.size||0===s.length)return"continue";var o="".concat(yc,".g").concat(n,'[id="').concat(r,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),i+="".concat(s).concat(o,'{content:"').concat(l,'"}').concat(Ac)},a=0;a<n;a++)r(a);return i}(i)}))}return e.registerId=function(e){return xd(e)},e.prototype.rehydrate=function(){!this.server&&Sc&&Ad(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(fl(fl({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Td(n):t?new Ed(n):new Cd(n)}(this.options),new pd(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(xd(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(xd(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(xd(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),zd=/&/g,Dd=/^\s*\/\/.*$/gm;function _d(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=_d(e.children,t)),e}))}function Md(e){var t,n,i,r=void 0===e?Cc:e,a=r.options,s=void 0===a?Cc:a,o=r.plugins,l=void 0===o?Ec:o,c=function(e,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},d=l.slice();d.push((function(e){e.type===jl&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(zd,n).replace(i,c))})),s.prefix&&d.push(hc),d.push(dc);var u=function(e,r,a,o){void 0===r&&(r=""),void 0===a&&(a=""),void 0===o&&(o="&"),t=o,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Dd,""),c=pc(a||r?"".concat(a," ").concat(r," { ").concat(l," }"):l);s.namespace&&(c=_d(c,s.namespace));var u,h=[];return cc(c,function(e){var t=Nl(e);return function(n,i,r,a){for(var s="",o=0;o<t;o++)s+=e[o](n,i,r,a)||"";return s}}(d.concat((u=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&u(e)})))),h};return u.hash=l.length?l.reduce((function(e,t){return t.name||hd(15),Lc(e,t.name)}),Rc).toString():"",u}var Od=new Bd,Nd=Md(),Rd=t.createContext({shouldForwardProp:void 0,styleSheet:Od,stylis:Nd}),Ld=(Rd.Consumer,t.createContext(void 0));function Fd(){return(0,t.useContext)(Rd)}function Ud(e){var n=(0,t.useState)(e.stylisPlugins),i=n[0],r=n[1],a=Fd().styleSheet,s=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),o=(0,t.useMemo)((function(){return Md({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:i})}),[e.enableVendorPrefixes,e.namespace,i]);(0,t.useEffect)((function(){xl()(i,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:o}}),[e.shouldForwardProp,s,o]);return t.createElement(Rd.Provider,{value:l},t.createElement(Ld.Provider,{value:o},e.children))}var Vd=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Nd);var i=n.name+t.hash;e.hasNameForId(n.id,i)||e.insertRules(n.id,i,t(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ud(this,(function(){throw hd(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Nd),this.name+e.hash},e}(),Yd=function(e){return e>="A"&&e<="Z"};function Qd(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(1===n&&"-"===i&&"-"===e[0])return e;Yd(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Wd=function(e){return null==e||!1===e||""===e},Hd=function(e){var t,n,i=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!Wd(a)&&(Array.isArray(a)&&a.isCss||ad(a)?i.push("".concat(Qd(r),":"),a,";"):cd(a)?i.push.apply(i,ml(ml(["".concat(r," {")],Hd(a),!1),["}"],!1)):i.push("".concat(Qd(r),": ").concat((t=r,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in vc||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Gd(e,t,n,i){return Wd(e)?[]:sd(e)?[".".concat(e.styledComponentId)]:ad(e)?!ad(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:Gd(e(t),t,n,i):e instanceof Vd?n?(e.inject(n,i),[e.getName(i)]):[e]:cd(e)?Hd(e):Array.isArray(e)?Array.prototype.concat.apply(Ec,e.map((function(e){return Gd(e,t,n,i)}))):[e.toString()];var r}function $d(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ad(n)&&!sd(n))return!1}return!0}var Xd=Fc(jc),Kd=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&$d(e),this.componentId=t,this.baseHash=Lc(Xd,t),this.baseStyle=n,Bd.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=od(i,this.staticRulesId);else{var r=ld(Gd(this.rules,e,t,n)),a=Oc(Lc(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=n(r,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}i=od(i,a),this.staticRulesId=a}else{for(var o=Lc(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=ld(Gd(d,e,t,n));o=Lc(o,u+c),l+=u}}if(l){var h=Oc(o>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),i=od(i,h)}}return i},e}(),qd=t.createContext(void 0);qd.Consumer;var Jd={};new Set;function Zd(e,n,i){var r=sd(e),a=e,s=!Yc(e),o=n.attrs,l=void 0===o?Ec:o,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":zc(e);Jd[n]=(Jd[n]||0)+1;var i="".concat(n,"-").concat(Uc(jc+n+Jd[n]));return t?"".concat(t,"-").concat(i):i}(n.displayName,n.parentComponentId):c,u=n.displayName,h=void 0===u?function(e){return Yc(e)?"styled.".concat(e):"Styled(".concat(Vc(e),")")}(e):u,p=n.displayName&&n.componentId?"".concat(zc(n.displayName),"-").concat(n.componentId):n.componentId||d,f=r&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(r&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new Kd(i,p,r?a.componentStyle:void 0);function y(e,n){return function(e,n,i){var r=e.attrs,a=e.componentStyle,s=e.defaultProps,o=e.foldedComponentIds,l=e.styledComponentId,c=e.target,d=t.useContext(qd),u=Fd(),h=e.shouldForwardProp||u.shouldForwardProp,p=Tc(n,d,s)||Cc,f=function(e,t,n){for(var i,r=fl(fl({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=ad(i=e[a])?i(r):i;for(var o in s)r[o]="className"===o?od(r[o],s[o]):"style"===o?fl(fl({},r[o]),s[o]):s[o]}return t.className&&(r.className=od(r.className,t.className)),r}(r,n,p),m=f.as||c,g={};for(var x in f)void 0===f[x]||"$"===x[0]||"as"===x||"theme"===x&&f.theme===p||("forwardedAs"===x?g.as=f.forwardedAs:h&&!h(x,m)||(g[x]=f[x]));var v=function(e,t){var n=Fd();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),y=od(o,l);return v&&(y+=" "+v),f.className&&(y+=" "+f.className),g[Yc(m)&&!Pc.has(m)?"class":"className"]=y,g.ref=i,(0,t.createElement)(m,g)}(w,e,n)}y.displayName=h;var w=t.forwardRef(y);return w.attrs=f,w.componentStyle=v,w.displayName=h,w.shouldForwardProp=m,w.foldedComponentIds=r?od(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=p,w.target=r?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,r=t;i<r.length;i++)dd(e,r[i],!0);return e}({},a.defaultProps,e):e}}),ud(w,(function(){return".".concat(w.styledComponentId)})),s&&rd(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function eu(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var tu=function(e){return Object.assign(e,{isCss:!0})};function nu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ad(e)||cd(e))return tu(Gd(eu(Ec,ml([e],t,!0))));var i=e;return 0===t.length&&1===i.length&&"string"==typeof i[0]?Gd(i):tu(Gd(eu(i,t)))}function iu(e,t,n){if(void 0===n&&(n=Cc),!t)throw hd(1,t);var i=function(i){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return e(t,n,nu.apply(void 0,ml([i],r,!1)))};return i.attrs=function(i){return iu(e,t,fl(fl({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return iu(e,t,fl(fl({},n),i))},i}var ru=function(e){return iu(Zd,e)},au=ru;Pc.forEach((function(e){au[e]=ru(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$d(e),Bd.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,i){var r=i(ld(Gd(this.rules,t,n,i)),""),a=this.componentId+e;n.insertRules(a,a,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,i){e>2&&Bd.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,i)}}();function su(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=ld(nu.apply(void 0,ml([e],t,!1))),r=Uc(i);return new Vd(r,i)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Sd(),i=ld([n&&'nonce="'.concat(n,'"'),"".concat(yc,'="true"'),"".concat(bc,'="').concat(jc,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw hd(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw hd(2);var i=e.instance.toString();if(!i)return[];var r=((n={})[yc]="",n[bc]=jc,n.dangerouslySetInnerHTML={__html:i},n),a=Sd();return a&&(r.nonce=a),[t.createElement("style",fl({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Bd({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw hd(2);return t.createElement(Ud,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw hd(3)}})(),"__sc-".concat(yc,"__");const ou=au.section`
  width: 100%;
  height: 100vh;
`,lu=au.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  color: var(--fourth-txt-color);
  background: var(--secondary-bg);
  text-align: left;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div .inner-component {
    display: flex;
    .home-subtitle {
      position: relative;
      flex-flow: column;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 9.9vw;
    margin-bottom: 6px;

    @media only screen and (max-width: 1919px) {
      font-size: 150px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 25vw;
    }
  }

  h2 {
    font-family: "GT";
    font-weight: 500;
    font-size: 6.7vw;
    margin-bottom: 16px;
    line-height: 0.9;

    @media only screen and (max-width: 1919px) {
      font-size: 120px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 17.5vw;
    }
  }

  p {
    font-weight: 300;
    font-size: 1.1vw;
    letter-spacing: 0.1rem;

    @media only screen and (max-width: 1919px) {
      font-size: 19px;
    }
    @media only screen and (max-width: 480px) {
      letter-spacing: 0.05rem;
      font-size: 4vw;
    }
  }

  .subtitle {
    margin: 0.5rem 0;

    @media only screen and (max-width: 480px) {
      margin: 1.667vw 0;
    }
    @media only screen and (max-width: 376px) {
      margin: 0 0 2.13vw 0;
      font-size: 5.6vw;
    }
  }

  .caption {
    font-size: 0.7vw;

    @media only screen and (max-width: 1919px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 2.5vw;
    }
    @media only screen and (max-width: 376px) {
      font-size: 3.2vw;
    }
  }
`,cu=au(pl.img)`
  /* position: relative; */
  object-fit: contain;
  width: 6.8vw;
  height: auto;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 2s;
  animation-iteration-count: infinite;

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media only screen and (max-width: 1919px) {
    width: 100px;
  }

  @media only screen and (max-width: 960px) {
    width: 17.5vw;
  }
`,du=au(pl.img)`
  object-fit: contain;
  width: 5.8vw;
  height: auto;
  padding-bottom: 24px;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 3s;
  animation-iteration-count: infinite;

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media only screen and (max-width: 1919px) {
    width: 95px;
  }

  @media only screen and (max-width: 960px) {
    width: 13.7vw;
  }
`,uu=()=>{const e={hidden:{opacity:0,x:-120},visible:{opacity:1,x:0}};return(0,Te.jsx)(ou,{id:"home",children:(0,Te.jsx)(lu,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsxs)("div",{className:"inner-component",children:[(0,Te.jsx)(pl.h1,{variants:e,initial:"hidden",animate:"visible",transition:{duration:1.1},children:"H"}),(0,Te.jsx)(cu,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABuxSURBVHgB7d2xj5uJmd/xhxP6XHgGKXfJxttEVxo294CrdtikCaR/IliM/gmvxNlze0gtYWEgVZrrpKQ8cAQEOOCWXmyTYMeF7UNAai/ZiwHOYe0FIeZ9R6pydws9vOel3iE/nzWl5n39zjvkzHw1LH4RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdGARwpwyHw2nz1zS4szabzSyAgyaw4I5pAmvW/PU4uLOawPK9Fw7cSQAAUEpgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxexhQSE7gfSFvUN4t/wGCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKDSNpOBxOm7+mmXM2m80s4A56sy2YcR7QAzu8dufN9+p5ACXSY6C7jNkaHeWual7v24DjcOkfw1DHW4QAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUCw99nwoDmVT0X10e40++ujVq9tHxj5u+gfD/n07efXJq3j1KPe5Sps3j6tIGf6il996HzdfI3ZmoYjfYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAsV0GsebRQ2925jLOo4f6eB/NxzRt/ppGt3r5fOzDJ8ldwR9vt/HjoDc+iLRXg9xzPngxiMGV2T+4S9KBtdls5tHPyLrzI75v9PE+pnE4n9/eefSq4zFiuvVBpCPr1TT3nJ98eiKw4I7xFiEAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFNtl7LlzbwaP7/z23aHcBwCQ4zdYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFCsl1uEezJvHlcBAFDsmAPrarPZzAIAoJi3CAEAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgWHqLcBsxa/56nDlncPu/t/dmI3AWR6i599Tnqq8O5T4AYBd+gwUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxdJbhIdiGzGN14+3NsjvI86jY+4DAPrnaAMrXv8wT41WR/IH+mazmUf3cTIN9wEAveItQgCAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAolt4ifDOwO4ue2d7+7+7r431sXz/f2Z1AADhafoMFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMXSW4T7sI2YxusH8P/57ZtHxouT4/y31ODFIE4+7fbetz/e3j5SpnEQPvzbD2fRP/PP/+zzecA71svAitfffowLwz/jt83jKnJ+cayBdTW4fXTp1UevYvvRcQbWdrDt3ffpwfb2+Z4HvGPeIgQAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYn3dItyHy0HELDq0ff3/b1OR7/WD4TF/Gd59Jy9Obh8pv4jDMJmkDo/lKmK1jC5tV8vHkycdf99tbiOSt7F4Gt2OYtI7foMFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMXSI2jD4XDa/DXNnLPZbGaRM4/uzaOfLuMwHMp9HIRXrz6KnA+ax48zJ8TJyV9E35yfb+Ojj7apc66uUofH7343uH0cpXZbMONmHWn7uMYefHixnUXHPn86mAW9scvK7DTyA8azzMGD1/EzjyPU9QD1vhzKfRyKfGCdR/LfUb0MrDauHj16lTrnMvlPgxcvTo43sDoebt7bNfZgGx0PUL82C3rDW4QAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUGyXLcKDMBwOZ5HchtpsNqnBsTd7fLPokPu4+zabn0dOfieQt/c4vRj36s3j7e2yd9g+emexiIOQvo1Z7GdaMGdysU0tmzffQC8NRHfHb7AAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoNguW4Tz6KE3W3YZ59FDfbyP5mOaRvfjd718PvYje+sfBHfbefIp/7u/a/cI4zitYg9mmYNjfXYeN2fRqdN1xNk6OvX73/zVefZnzmazSR1/zNKB1Xxy59HPyOrf8uZu+ngf0zicz28PTYPjMp1GytHGVWsZe5D79tbG1XIUnRpH94H1h9//j2nkvwHNgrfiLUIAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKLbL2HPn3oxP3vntu0O5D4B/1iL2YJs6ejXufifwULz300e3j4wvf/mD3BMScXmsA9F+gwUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxXq5Rbgn8+ZxFQDsZDWeZQ6P09OIs7PUKbFapQ6P9Wl0rr2Hs+x1fhVp7a5ixmgZnXv/p5+kjv/D7//n+e9/81ezzDmHsl14zIF1dawDlAAVlqPclv141IRJMhqWexmUzmnjapS8j3ieOnqn0ep9BFZ2HPrrLz6dNn9NI2cWB8BbhAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQbIctwu2s+SM3QBWDQeboNxuBszhCzb2nPld9dSj3AfzLJpPU4bFaRiyS24K7XGOZHIhOX+P6MhbPZ5lTYhLb1PHtruA+tgW71m4XZvcLv/zlD3KfrIjLPm4L+w0WAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABTbYYvwUGynzR/T1CkxmEXOPDrnPoB3Y7XDVt54lDp8P9e4voycRYzvjVNnrNa5a5x+dx5nf5zGXbf+4Txu/uQqjtERB9btD/PkaHVugHqz2cyj+ziZhvsA3oHsqHIbPqNcl6THoXe6RnK4uY2r0b1cxS2uZ5nDY7yeHURgtXG1PJtlTmnC5DDSxFuEAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBsh8Gf24HdWfTOdhsHoY/3sZ1FficQOHCTSerw2+Hm7LZg+hrXl+ltwcn95EUWq4inyRtJHh7tnmJytDprdXaZ3gnMGp82n9+z1Cmx+PkmdfzJi5PHwxfD1M+ozWYziI75DRYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFNthi3AfttPmj2kAReaZg2Mw+N3t46578WIQn36a+3fkRx+9Sh3/wQevH8eo3f1L+ZPzGI+mmTPy14hFjO+Nk6esUoevr9dxkzslxuNZ5vA4PT2PrHZbMOPevXXcv3eROuf54mnq+NMfxtHqaWDdxpVxYShzlTp6MHgRJycv4q67uhrcPjJ+/vNcYLWONbCW17PM4U34zGL0wTRzSnq4uY2r0b3kSnJyuLmNq+UydUpMJt3/SMsON7dxdTHNBdbiOhdYx8xbhAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQLDfStTfbWXS/RXjZ3P4sOrWX+9jBIPm8H8Z9DIfDWdi4hDI/+Y+b6NzFNnV4LJpv7YtZ5oxY5KYIb4ebR6Nuv5W0w83ZbcHPH3+eOv75chHPVsmbz2quER1f4+v/dhIv/2vu90Wbzabz/vEbLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoNoyk4XA4bf6aZs7ZbDazyJlH9+bRT5dxGA7lPnhL73/ySXRulTo6bn71onlcBf2wPpvGTfNIWUbSecR4ljkhxsnX1enpedAfP3p/G+//9FXqnJdfDGeRM29aZp45IR1Y8TqusiuXs0gZzKO/AdSxrgeo9+VQ7oO39d6jR9G57GbsZ58KrB5p42qZHUlOxs/tj6jRNHXGZBTcYaejbZz+NDcK/vKLk13WuueZg71FCABQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFdtkiPAjD4XAWyU3FzWYziJTbPb5ZdMh98DZ+8jc/SR0fo4uI8UV0qh3xze7MTVJHx3ujR/Hex91uJH792afx8rO/iKN0kdt/2+U5nyyyX+azyM/l5qzOLmN5NosuXZxfxMX089Q5D58+TB0fo3HzdZ4cYlxkB0HTY5KxSJ4yXje3Ev3jN1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUGyXLcJ59NCbLbuM8+ihPt5H8zFNm7+m0a1ePh/78P7H70fXHowepI7/KtZxvXwaOTtsF2YHxJbJ42+icz/62XnzHKZOiWVya21w/SIGv76Kvllln4/VPMar3H08uJ97XS1+t47Fby+jS/fureP+vdzH9XyV2/BbfbeO54vnqXNutwWzsi/G7DVu1tF8OzlK6cDabDbz6GdkdbvuuT99vI9pHM7nt3fe+/i96Nr98f3U8bF8Hter/xI5ycBq4yr78yC7M7sHp01gtY+M/5W8j5P4tJeBlf3Z3MbVaDnLnBL3H+cGj5fzp7H85i+jS21cXUyT4bfI/YNl2Xxyl4tnqXNiklxDb5/AbCWnr7E82sDyFiEAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFNtl7LlzbwaP7/z23aHcx6H4z//9f8dgMEidc+/P/m3q+OfLp/FsldscezJ5Er0zHjWP3ObY4mHuc7uLycU2+qadcstu8mXn3FajR7H8D49S56Svsct9LHLPeTvcnN0WfJjc8Iuz5uNKDkQ/mSSHm5eL/Me1SA5QtqPK2Sdx0f1Y5+J57r7Hp82tnMVR8hssAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACjWyy3CPZk3j6uA79FuC+as48HoQfTN88hvlD2I3A7a6n5yN20Hq8Vl6vjT0XmcjaeZU243+bLa6ca7fo31TaStxrPM4bFYrSOe5b6mHiT3+L66WcX1Onfz7bZg6hqr6/xwY7stmJW9RuSOX38XcfPH1Cm324JZ7dN+jI45sK42m80s4Htkh5vbuLo/vh998ywZWG1c3U8G1rMH3QfW4uEsc3iMJ7N0YGV/prXhk/3Zmd3k3cc1drEcJbfsV5exXPxl6pQnD3Lj0M0F0oH1bJX8ZLUvkmzBZoebd7lG5I5v42qZDOtJNvTX+WscCm8RAgAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAECxXm4RvtkInMURau59EAegj/fxn07+fWwH29Q5f/3v/jp1/Dc//Cb+ofmvS+1wc3Zb8ElcpI5vr/EwskPXOatni1g+z93H5CL3/LVTbtlNvuxk3C7XyGpn6dK7v730+M3j7T18mPtW8uD+RTx5kHu9P3z6MHX87TBk9oWSfZHscI1F8uupHW7Obgsuevg6vP36+Cp1yl7ix2+wAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKBYL7cID8g8DsM8jlS7LZjx7b/5NrKeR37I7kHkNsqy1/gquh8cOz2LGI9Tp8RqcZk6fr1u/rhJnRKrZW4rb538/z8k4x1eJqvkcz5apg6Pr1bX7Shf6pzb3b+s7Dhk8hrr79Zxc527+XZbMGu1zh2fvcb6u9ePlOvc4Wd/bB7Jp/Dvv4zOCawObTabeRxAnBzKfeziH37Y7XBzKzvc3MbV/WRgdT3cvIuzJrDOskOzi1l0bTnKBdYxy8ZPG1fL5HOevcZ1E1jXi2Q1ZIeb27haJT+w5DXauFpeJ8fQk5/bNq6WyX8gZK8R6x0CKznc3MbVKPlx/X10z1uEAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFDMFiEUakeVs9uCT+IidXx7jey24C7XeLbDCHVKO36bnICbdP0xRbt3OIjOTbapw9tR5ewm3yL5ud3XNSZdP4XtKF12W3CR/KBuX7vZa+S+Zttpvey+3iK5P90ON086vsYusp/a1Sr/FO4jfvwGCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILCABqCSwAgGICCwCg2B5Gt6AfPvzbD6fNX9PMOffH9x9njo+z0+ZxFnfdV7GK60gO0y33MFKWHRy7WUes16lTVnu4jYhZ5JxH8qXbS6fNU3GWezoi/WPq3rh5JAf2sk96+3V+mvw6X+Veu+vvmpfvH6N3ljfRuUnyW8/LXw9i9evc6+Tk5cll5Mw3m808c4LAgu8x+Ty3yvtg9KCNsswp6eHmBzGJ+8mV5Ow1drLLYO44uzSbvEYbfavkd+t9SN7GajyL5SjX+pP0NZpPV/LpmHS/vR3pH1PNfUTyPvpotc7HTHa4eZdr7EM2sL7+4iRefpF7Q66Jpc77x1uEAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFDMFiF8j+wW4S77ek/iInX881jEs+h4BG6XDb9Jbh+xvzuBexnYS2l3gpfZD+si99IdN0/HKPl0LJJP+U7XWOR+TI2bj2mU/LgWyanOna6R3JMenzbXSO5JL/YyVJ50He16fEr2W4ktQgCAIyGwAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYsMA3qnnyV3Br2KHwbHlDue0u4p9u0Yftwt7apx8Ok7XkbaXa4xnkbKex2oxz5wR45hFymqHa9yLtNUOn6++OTttHtkv8+Tr6h97+nkSWPCOdT7c3MqGyQ6j1emR5F2uIbDe2mgPn6q9XGP0OHV8+8N5eT3PnBKTSF6jue/lcp45JT1g3MbV8ibuvLOz5jmMnOy3kpObfr4d5y1CAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACg2CKDMh09ito3ksNnFRerw21Hl7CZfdghtl2v0UU/vY/E0dfjt4HF2k4+EPcyBLrI/bv+0eewwEN25Z6mjm9duuyeZOiW+/GV6Jvlys9nMomf8BgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAiqUHf4B37Oy0+WOcOuV2ky/jZh29lL2P1ij5uTqEDcZj1r50byIn+RK5vUbyS2Qcs8zhsf4/8+YS8+hS+63k7Cxysp+rxmqHL9tDILDgrmm/I2a/Ky72sGa7D9n4aeNqnFyaFVh3WxtX2acwuYV+KxlYo+QGfHzTXOKbeXTprB1ijqTsl1MTV8vk83EoYeItQgCAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoNgjgnZo8iW3qhF329bLaUeXsJt8kOejW12vsweJp6vAYj2cxGiW37PYhO3HZDgVnX7o9nNFcxWUsk+PNk+SX+T7sch9ZJ1+fxMnL3O9yNpvNQbSJ32ABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQLFhAO/UIOIyc/z/ffnt+ber1TRzzmiSHIA7O43Xw3EJ7e5f1qjja9ysI2u1h+27cXL/7TTOo3Ptp+omcpJP360dXiZdW+W+BCPufRXjP83tYq6eJa8RP4t2wbBL67jX/HmROufk689Sxw/+MJg3f13FETL2DHfNxe1P59Ty7+Si22/UtxbJMtlltHrRff1kh5h3kR7+3WUkOasNn+wudvZltcs19mCR/FE4fjCJ0f3czS8eZl9YF5GNn30YfvnnkXS52WxmcYS8RQgAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxWwRwjG4yI3fjccRo6637/agHW5eJucL0zuB+7DLFmF2tnEf1+ip9BbhDl8f+RnN7rcI2+Hmk5e58ebNZqMb3pLfYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAsWEAx+Ayc/C338b5ahXTzDn72C5cZffcVtMY526jn9bRvT1cY938d5O80Oh2JLHba2Q3/9br9oWYfTFmdwUnkdVuC2YM/vCbefPXVdAJo43AP3URs+bPx5lTJvmfB2mLp6nDmx/Ns+YHdOo26NAqls1/q9Q5k2Ro7HKNvKdvHhmfR9eGX/55JF1uNptZ0AlvEQIAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMVuEQInhcLiNjm1+8jdBN8YxSg8rL5KDx/u4Rl/tsBOYttls/EzvEb/BAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiwwCocRkdO/n6s8fRM9sf/Sy2pz+Lu24dN82fy+jSPq4xuPlVDP7xV9FDnX990C+GIYE7Yx+D0lmv3v84Xr33cdAPTYTHycvPom8MMR8fbxECABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDHbSAD/CsPhcNb81bsR6iN2udlsZgHvmN9gAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAECxYQDwrzEP+mQeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwqP4fIbzFl3vBF4IAAAAASUVORK5CYII=",alt:"icon-win"}),(0,Te.jsx)(pl.h1,{variants:e,initial:"hidden",animate:"visible",transition:{duration:1.2},children:"llo."})]}),(0,Te.jsxs)("div",{className:"inner-component",children:[(0,Te.jsx)(pl.h2,{variants:e,initial:"hidden",animate:"visible",transition:{duration:1.3},children:"I am"}),(0,Te.jsx)(du,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAzSSURBVHgB7dk9cmPltoDh1RdBrCGoE1I0BHVAjGdgO4GYEQApGSEkbUZwTUwgMQPHJNYQzAj62F2Hc0iP91sl/zxP1SpFSj6pvv3uWjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8JK9GV67q/s5HwCWurqfy4F7/zcAAKQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMTeDM/d/9/Pdh7pl19+WX/55ZfrAWCR33///e7rr7++m8c73M/l8CKshufuIY4280ifffbZbDabAWCZTz/99OE+XvLCuhleDCtCAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiL0ZTm0/C/z888/bzz//fD2PtN1uZ71+9NcB+Lfj8fhxHuvPP/+8++abb25mmXfDk7AaTm03C9zH1ex2uwHgtDabzcdZ4OFtdze8CFaEAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEFsNnNDNzc389NNPA7DUd999N5vNZuApEFic1N3d3VxdXQ3AUufn5wKLJ8OKEAAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGKrgQVubm7mt99+myW+//77AVjqjz/++DiP9dVXX812ux0oCCwWeQisJYG02+1mv98PwFLv3r2bw+Ewj7XZbAQWGStCAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiK0GOKm7u7uP81jr9frjPGcv4QyOx+MssdlsBng5BBac2PX19VxeXs5j7Xa72e/385x9++23c3V1NY91cXEx79+/n1N6+/btLPHwGz78lsDLYEUIABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABBbDXBSZ2dns9vthuft9vZ2lliv1wO8HAILTuzhwerh+vxtNpsB+JsVIQBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMRWA7DQDz/8MMfjcR7rcDgMwEsisIDFHgJJJAH8lxUhAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxFYDsND5+fnsdrs5lS+++GIAnhKBBSx2cXExAPyXFSEAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEVgM8a8fjcQ6HwyxxcXExr5kzBGoCC565hzi4vLycJQSWMwRaVoQAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQWw3wrK3X69ntdrPE4XCY1+x4PC4+Q4B/EljwzG2329nv97PEmzdv5jV7iKulZwjwT1aEAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEFsN8OptNpt5zdbr9QCUBBYwt7e3A0DHihAAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAILYaWODs7Gx2u9081uFwmLdv3w7AUu/fv/84j7VerwcqAotFHi6kJZfSZrOZ4/E4AIWHOwWeAitCAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiK0GTmi73c5+vx+ApR7uE3gqBBYntV6vZ7fbDQC8JFaEAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEFsNAIsdDofhtLbb7azX64GnQGABBN69ezec1n6/n91uN/AUWBECAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFjAAtAQWAEBMYAEAxFYDC9zd3X2cU9psNgOn5n8I/JPAYpHr6+u5vLycU/rw4cPAqd3e3g7A36wIAQBiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAotFLi4u5sOHDycdAHhqBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQGw1nNrlLPDjjz9+9+uvv24GgGftk08+ubn/+Gl4Ed4Mz93+fnYDwHN3uJ93w4tgRQgAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAACx1fCqnZ2dzXa7HQCWubm5mevr64EHAuuVewis8/PzAWCZq6srgcV/WBECAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBAbDW8and3d3M8HgeAZf7666+Bv70Znrv9/ewGgOfucD/vhhfBihAAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/wLk/lCtRTeJ0AAAAAASUVORK5CYII=",alt:"icon-mac"}),(0,Te.jsx)(pl.h2,{variants:e,initial:"hidden",animate:"visible",transition:{duration:1.4},children:"Yuya"})]}),(0,Te.jsx)("div",{className:"inner-component",children:(0,Te.jsxs)("div",{className:"home-subtitle",children:[(0,Te.jsx)(pl.p,{className:"subtitle",variants:e,initial:"hidden",animate:"visible",transition:{duration:1.5},children:"Product Designer"}),(0,Te.jsx)(pl.p,{className:"caption",variants:e,initial:"hidden",animate:"visible",transition:{duration:1.6},children:"UX/UI, brand & digital design"}),(0,Te.jsx)(pl.p,{className:"caption",variants:e,initial:"hidden",animate:"visible",transition:{duration:1.7},children:"through creative problem-solving"})]})})]})})})};var hu=n(9473);const pu=su`
  0% { transform: scale(1); }
  25% { transform: scale(0.99); }
  50% { transform: scale(0.98); }
  75% { transform: scale(0.99); }
  100% { transform: scale(1); }
`,fu=su`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(5px, 5px) rotate(5deg);
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
  }
  75% {
    transform: translate(-5px, 5px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`,mu=au(ke)`
  width: 90px;
  text-decoration: none;
  animation: ${fu} 0.3s 6;

  &:active {
    animation: ${pu} 0.3s 3 forwards;
  }

  h4 {
    font-family: "GT";
    font-weight: 500;
    font-size: 1.5rem;

    @media only screen and (max-width: 540px) {
      font-size: 4.4vw;
    }
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`,gu=au.h4`
  color: ${e=>e.isInParallaxOrContact?"var(--fourth-txt-color);":"var(--primary-txt-color);"};
  pointer-events: ${e=>e.isInParallaxOrContact?"auto":"none"};
  text-shadow: ${e=>e.isInParallaxOrContact?"1px 1px 5px var(--index-bg), -1px -1px 5px var(--index-bg)":"none"};
`,xu=au.aside`
  width: 100%;
  position: fixed;
  z-index: 1000;
  color: var(--primary-txt-color);
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 960.999px) {
    display: none;
  }
  @media screen and (max-height: 540px) {
    font-size: 4.444vh;
  }
`,vu=au.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1002;
  transition: transform 0.3s ease;
  transform: ${e=>e.hide?"translateY(-100%)":"translateY(0)"};
`,yu=au.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 30px;
`,wu=(au.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 17.5px;
  left: 30px;
`,au.aside`
  /* display: flex; */
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  max-width: 80%;
  height: 100vh;
  border-left: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  transition: ${e=>{let{isOpen:t}=e;return"0.3s ease"}};
  opacity: ${e=>{let{isOpen:t}=e;return t?"100%":"0"}};
  right: ${e=>{let{isOpen:t}=e;return t?"0":"-100%"}};
  background-image: linear-gradient(0deg, transparent 15px, #fe000040 16px),
    linear-gradient(90deg, transparent 15px, #fe000040 16px);
  background-size: 16px 16px;
`),bu=au.div`
  margin-top: 60px;
`,ju=au.div`
  width: 100%;
  border-bottom: solid 2px var(--secondary-bg);
  padding: 16px 0 16px 16px;
`,Au=au(hu.N_)`
  display: block;
  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);

  .contactImg {
    width: 38px;
    padding-left: 9px;
  }

  &.active {
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    border-radius: 200px 5px 5px 200px;
    transform: translateX(9px);
    backface-visibility: hidden;
    padding: 6px 12px;

    @media screen and (max-height: 540px) {
      padding: 2.9vh;
    }
  }
`,Su=au(hu.N_)`
  width: fit-content;
  border-radius: 50px;
  background-color: var(--index-bg);
  border: 1.5px solid var(--secondary-bg);
  margin-bottom: 4px;
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);

  .tagCopy {
    color: var(--primaly-text-color);
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }

  &.active {
    padding: 4px 9px;
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    transform: translateX(4px);
    backface-visibility: hidden;

    .tagCopy {
      font-weight: 500;
    }
  }
`,ku=au.div`
  display: flex;
  padding-bottom: 100px;
`,Eu=au.a`
  color: var(--secondary-bg);
  font-size: 24px;
  padding: 24px 16px 16px 16px;

  &:first-child {
    padding-left: 24px;
  }
`,Cu=au.div`
  @media screen and (max-width: 959.99px) {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    margin-left: auto;
    /* display: block; */
    width: 48px;
    height: 48px;
    /* position: fixed;
    top: 20px;
    right: 15px; */
    background-color: var(--index-bg);
    border-radius: 50%;
    border: solid 2px var(--secondary-bg);

    #burger-menu {
      width: 26px;
      height: 26px;
      /* position: fixed;
      top: 31px;
      right: 26px; */
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 1s ease-in-out;
      -moz-transition: 1s ease-in-out;
      -o-transition: 1s ease-in-out;
      transition: 1s ease-in-out;
      cursor: pointer;
    }

    #burger-menu span {
      display: block;
      position: absolute;
      height: 6px;
      width: 100%;
      background: var(--secondary-bg);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
    }

    #burger-menu span:nth-child(1) {
      top: 0px;
    }

    #burger-menu span:nth-child(2) {
      top: 10px;
    }

    #burger-menu span:nth-child(3) {
      top: 20px;
    }

    #burger-menu.open span:nth-child(1) {
      top: 10px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    #burger-menu.open span:nth-child(2) {
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }

    #burger-menu.open span:nth-child(3) {
      top: 10px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;var Tu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pu=t.createContext&&t.createContext(Tu),Iu=["attr","size","title"];function Bu(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;n[i]=e[i]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function zu(){return zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},zu.apply(this,arguments)}function Du(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Du(Object(n),!0).forEach((function(t){Mu(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Du(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Mu(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ou(e){return e&&e.map(((e,n)=>t.createElement(e.tag,_u({key:n},e.attr),Ou(e.child))))}function Nu(e){return n=>t.createElement(Ru,zu({attr:_u({},e.attr)},n),Ou(e.child))}function Ru(e){var n=n=>{var i,{attr:r,size:a,title:s}=e,o=Bu(e,Iu),l=a||n.size||"1em";return n.className&&(i=n.className),e.className&&(i=(i?i+" ":"")+e.className),t.createElement("svg",zu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:i,style:_u(_u({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&t.createElement("title",null,s),e.children)};return void 0!==Pu?t.createElement(Pu.Consumer,null,(e=>n(e))):n(Tu)}function Lu(e){return Nu({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(e)}function Fu(e){return Nu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"},child:[]}]})(e)}function Uu(e){return Nu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}const Vu=e=>{let{isOpen:n,toggle:i}=e;const[r,a]=(0,t.useState)(!1),[s,o]=(0,t.useState)(!1),[l,c]=(0,t.useState)(0),[d,u]=(0,t.useState)(!1);(0,t.useEffect)((()=>{const e=()=>{const e=window.innerHeight,t=document.body.clientHeight;let n=.95;window.innerWidth<960&&(n=.99);const i=window.scrollY>=(t-e)*n;o(!!i),window.scrollY>l&&window.scrollY>=100?u(!0):u(!1),c(window.scrollY),window.scrollY>=100?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[l]);return(0,Te.jsxs)(xu,{isOpen:n,children:[(0,Te.jsx)(vu,{hide:d,children:(0,Te.jsxs)(yu,{children:[(0,Te.jsx)(mu,{to:"/",onClick:()=>{hu.Nk.scrollToTop()},children:(0,Te.jsx)(gu,{isInParallaxOrContact:s,children:"Yuya Hashirizaki"})}),(0,Te.jsx)(Cu,{isOpen:n,onClick:i,children:(0,Te.jsxs)("div",{id:"burger-menu",className:n?"open":"",children:[(0,Te.jsx)("span",{}),(0,Te.jsx)("span",{}),(0,Te.jsx)("span",{})]})})]})}),(0,Te.jsxs)(wu,{isOpen:n,onClick:i,children:[(0,Te.jsxs)(bu,{children:[(0,Te.jsx)(ju,{children:(0,Te.jsx)(Au,{to:"home",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Home"})}),(0,Te.jsx)(ju,{children:(0,Te.jsx)(Au,{to:"about",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"About"})}),(0,Te.jsxs)(ju,{children:[(0,Te.jsx)(Su,{to:"case1",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"tagCopy",children:"Case Study 1"})}),(0,Te.jsx)(Au,{to:"case1",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Riversol Empathy"})]}),(0,Te.jsxs)(ju,{children:[(0,Te.jsx)(Su,{to:"case2",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"tagCopy",children:"Case Study 2"})}),(0,Te.jsx)(Au,{to:"case2",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Riversol Challenge"})]}),(0,Te.jsxs)(ju,{children:[(0,Te.jsx)(Su,{to:"case3",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"tagCopy",children:"Case Study 3"})}),(0,Te.jsx)(Au,{to:"case3",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Riversol Reinforce"})]}),(0,Te.jsxs)(ju,{children:[(0,Te.jsx)(Su,{to:"case4",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"tagCopy",children:"Case Study 4"})}),(0,Te.jsx)(Au,{to:"case4",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Midnight Paloma"})]}),(0,Te.jsx)(ju,{children:(0,Te.jsx)(Au,{to:"works",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Work"})}),(0,Te.jsx)(ju,{children:(0,Te.jsxs)(Au,{to:"contact",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:["Contact",(0,Te.jsx)("img",{className:"contactImg",src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"})]})})]}),(0,Te.jsxs)(ku,{children:[(0,Te.jsx)(Eu,{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,Te.jsx)(Fu,{})}),(0,Te.jsx)(Eu,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,Te.jsx)(Lu,{})}),(0,Te.jsx)(Eu,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,Te.jsx)(Uu,{})})]})]})]})},Yu=su`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(5px, 5px) rotate(5deg);
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
  }
  75% {
    transform: translate(-5px, 5px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`,Qu=au(ke)`
  width: 90px;
  text-decoration: none;

  h4 {
    font-family: "GT";
    font-weight: 500;
    font-size: 1.5rem;
  }
`,Wu=au.h4`
  color: var(--primary-txt-color);
`,Hu=au.h4`
  color: var(--fourth-txt-color);
  opacity: ${e=>e.isInParallaxOrContact?1:0};
  pointer-events: ${e=>e.isInParallaxOrContact?"auto":"none"};
  text-shadow: ${e=>e.isInParallaxOrContact?"1px 1px 15px var(--index-bg), -1px -1px 15px var(--index-bg)":"none"};
  transform: ${e=>e.isInParallaxOrContact?"translateY(0)":"translateY(-20px)"};
  transition: opacity 1s ease, transform 1s cubic-bezier(0.87, 0, 0.13, 1),
    color 1s ease, text-shadow 1s ease;
`,Gu=au.div`
  width: 120px;
  height: 78px;
  margin-left: 40px;

  &:hover {
    animation: ${Yu} 0.3s;
    animation-iteration-count: 6;
  }
`,$u=au.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;
  transform: ${e=>e.hide?"translateY(-150%)":"translateY(0)"};
`,Xu=au.div`
  position: absolute;
  top: 30px;
`,Ku=au.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  color: var(--primary-txt-color);
  z-index: 1000;

  transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  ${e=>e.animateNavbar?nu`
          transform: translateX(0);
        `:nu`
          transform: translateX(-100%);
        `}

  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-height: 768px) {
    font-size: 1.823vh;
  }
  @media screen and (max-height: 630px) {
    width: 13.3vh;
  }
`,qu=au.ul`
  width: 80px;
  height: 100vh;
  position: relative;
  max-width: 960px;
  border-right: solid 2px var(--secondary-bg);
  background-color: var(--primary-bg);
`,Ju=au.li`
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 960px) {
    display: none;
  }
`,Zu=au.div`
  width: 100%;
  border-bottom: solid 2px var(--secondary-bg);
`,eh=au(hu.N_)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin-left: 100px;
  padding: 18px 16px;
  transform: translateX(-100px);
  font-size: 12px;

  @media screen and (max-height: 500px) {
    font-size: 2.4vh;
  }

  @media screen and (max-height: 510px) {
    padding: 16px;
  }

  &.active {
    font-weight: 700;
    background-color: var(--index-bg);
    border-radius: 0px 15px 15px 0px;
    box-shadow: var(--primary-shadow);
    border: 2px solid var(--secondary-bg);
    margin: 6px 0;
    padding: 25%;
    height: 45vh;
    transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);
    transform: translateX(-6px);
    backface-visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(0deg, transparent 15px, #fe000070 16px),
      linear-gradient(90deg, transparent 15px, #fe000070 16px);
    background-size: 16px 16px;

    @media screen and (max-height: 630px) {
      background-image: linear-gradient(0deg, transparent 7px, #fe000070 8px),
        linear-gradient(90deg, transparent 7px, #fe000070 8px);
      background-size: 8px 8px;
    }

    //dinamic nav copy after selected//
    font-size: 0;
    .hm::before {
      content: "hi! I'm Yuya:)";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .ab::before {
      content: "Passion as a Designer";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .case1::before {
      content: "Latest Practice";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .wk::before {
      content: "Achieved Projects";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    @media screen and (max-height: 935px) {
      height: 40vh;
    }
    @media screen and (max-height: 768px) {
      height: 30vh;
    }
  }
`,th=au.div`
  width: 100%;
  border-bottom: dotted 2px var(--secondary-bg);
  &&:last-child {
    border-bottom: none;
  }

  @media screen and (max-height: 673px) {
    border-bottom: none;
  }
`,nh=au.div`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  text-decoration: none;
  border-top: dotted 2px var(--secondary-bg);
  width: 100%;
  height: auto;
  @media screen and (min-height: 673px) {
    border-top: dotted 2px var(--secondary-bg);
  }
`,ih=au.a`
  display: block;
  text-align: center;
  color: var(--secondary-bg);
  font-size: 20px;
  padding: 16px 16px 6px 16px;

  @media screen and (max-height: 768px) {
    font-size: 1.823vh;
  }
  @media screen and (max-height: 673px) {
    display: none;
  }
`,rh=au(hu.N_)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  padding: 18px 45px;
  margin-left: 80px;
  transform: translateX(-90px);
  transition: transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  @media screen and (max-height: 500px) {
    font-size: 2.4vh;
  }

  .contactImg {
    padding-bottom: 6px;
  }

  @media screen and (max-height: 630px) {
    padding: 2.6vh 6vh;
    margin-left: 90px;
    .contactImg {
      width: 2vw;
    }
  }

  &.active {
    font-weight: 700;
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    border-radius: 0px 15px 15px 0px;
    box-shadow: var(--primary-shadow);
    border: 1.5px solid var(--secondary-bg);
    margin: 6px 0;
    padding: 25%;
    height: fit-content;
    transition: transform 0.8s cubic-bezier(0.87, 0, 0.13, 1);
    transform: translateX(-6px);
    backface-visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1280px) {
      height: 170px;
      transform: translateX(-3px);
    }
  }
`,ah=e=>{let{toggle:n,animateNavbar:i}=e;const[r,a]=(0,t.useState)(!1),[s,o]=(0,t.useState)(!1),[l,c]=(0,t.useState)(!1),[d,u]=(0,t.useState)(0);(0,t.useEffect)((()=>{const e=()=>{const e=window.innerHeight,t=document.body.clientHeight;let n=.95;window.innerWidth<960&&(n=.99);const i=window.scrollY>=(t-e)*n;o(!!i),window.scrollY>d&&window.scrollY>=100?c(!0):c(!1),u(window.scrollY),window.scrollY>=100?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[d]);const h=()=>{hu.Nk.scrollToTop()};return(0,Te.jsx)(Te.Fragment,{children:(0,Te.jsxs)(Ku,{scrollNav:r,animateNavbar:i,children:[(0,Te.jsx)(qu,{children:(0,Te.jsxs)(Ju,{children:[(0,Te.jsx)(Zu,{children:(0,Te.jsx)(eh,{to:"home",onClick:n,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"hm",children:"Home"})})}),(0,Te.jsx)(Zu,{children:(0,Te.jsx)(eh,{className:"aboutSec",to:"about",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"ab",children:"About"})})}),(0,Te.jsx)(Zu,{children:(0,Te.jsx)(eh,{className:"case1Sec",to:"caseStudy",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"case1",children:"Case Study"})})}),(0,Te.jsx)(Zu,{children:(0,Te.jsx)(eh,{className:"worksSec",to:"works",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsx)("p",{className:"wk",children:"Works"})})}),(0,Te.jsxs)(nh,{children:[(0,Te.jsx)(th,{children:(0,Te.jsx)(ih,{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,Te.jsx)(Fu,{})})}),(0,Te.jsx)(th,{children:(0,Te.jsx)(ih,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,Te.jsx)(Lu,{})})}),(0,Te.jsx)(th,{children:(0,Te.jsx)(ih,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,Te.jsx)(Uu,{})})}),(0,Te.jsx)(th,{children:(0,Te.jsxs)(rh,{className:"contactSec",to:"contact",smooth:!0,duration:700,spy:!0,exact:"true",offset:-200,activeClass:"active",children:[(0,Te.jsx)("img",{className:"contactImg",src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"}),"Contact"]})})]})]})}),(0,Te.jsxs)(Gu,{children:[(0,Te.jsx)($u,{hide:l,children:(0,Te.jsx)(Qu,{to:"/",onClick:h,children:(0,Te.jsx)(Wu,{children:"Yuya Hashirizaki"})})}),(0,Te.jsx)(Xu,{children:(0,Te.jsx)(Qu,{to:"/",onClick:h,children:(0,Te.jsx)(Hu,{isInParallaxOrContact:s,children:"Yuya Hashirizaki"})})})]})]})})};var sh,oh,lh,ch,dh,uh,hh=n(9002),ph=n.n(hh),fh=function(e){this.startX=e.startX,this.startY=e.startY,this.endX=e.endX,this.endY=e.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=e.startMultiplierX||1,this.endMultiplierX=e.endMultiplierX||1,this.startMultiplierY=e.startMultiplierY||1,this.endMultiplierY=e.endMultiplierY||1};function mh(){return mh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},mh.apply(this,arguments)}!function(e){e.speed="speed",e.translateX="translateX",e.translateY="translateY",e.rotate="rotate",e.rotateX="rotateX",e.rotateY="rotateY",e.rotateZ="rotateZ",e.scale="scale",e.scaleX="scaleX",e.scaleY="scaleY",e.scaleZ="scaleZ",e.opacity="opacity"}(sh||(sh={})),function(e){e.px="px",e["%"]="%",e.vh="vh",e.vw="vw"}(oh||(oh={})),function(e){e.deg="deg",e.turn="turn",e.rad="rad"}(lh||(lh={})),function(e){e[""]=""}(ch||(ch={})),function(e){e.vertical="vertical",e.horizontal="horizontal"}(dh||(dh={})),function(e){e.ease="ease",e.easeIn="easeIn",e.easeOut="easeOut",e.easeInOut="easeInOut",e.easeInQuad="easeInQuad",e.easeInCubic="easeInCubic",e.easeInQuart="easeInQuart",e.easeInQuint="easeInQuint",e.easeInSine="easeInSine",e.easeInExpo="easeInExpo",e.easeInCirc="easeInCirc",e.easeOutQuad="easeOutQuad",e.easeOutCubic="easeOutCubic",e.easeOutQuart="easeOutQuart",e.easeOutQuint="easeOutQuint",e.easeOutSine="easeOutSine",e.easeOutExpo="easeOutExpo",e.easeOutCirc="easeOutCirc",e.easeInOutQuad="easeInOutQuad",e.easeInOutCubic="easeInOutCubic",e.easeInOutQuart="easeInOutQuart",e.easeInOutQuint="easeInOutQuint",e.easeInOutSine="easeInOutSine",e.easeInOutExpo="easeInOutExpo",e.easeInOutCirc="easeInOutCirc",e.easeInBack="easeInBack",e.easeOutBack="easeOutBack",e.easeInOutBack="easeInOutBack"}(uh||(uh={}));var gh=0;var xh=function(){function e(e){var t=e.el.getBoundingClientRect();if(e.view.scrollContainer){var n=e.view.scrollContainer.getBoundingClientRect();t=mh({},t,{top:t.top-n.top,right:t.right-n.left,bottom:t.bottom-n.top,left:t.left-n.left})}this.height=e.el.offsetHeight,this.width=e.el.offsetWidth,this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,e.rootMargin&&this._setRectWithRootMargin(e.rootMargin)}return e.prototype._setRectWithRootMargin=function(e){var t=e.top+e.bottom,n=e.left+e.right;this.top-=e.top,this.right+=e.right,this.bottom+=e.bottom,this.left-=e.left,this.height+=t,this.width+=n},e}(),vh=[ch[""],oh.px,oh["%"],oh.vh,oh.vw,lh.deg,lh.turn,lh.rad];function yh(e,t){void 0===t&&(t=oh["%"]);var n={value:0,unit:t};if("undefined"===typeof e)return n;if(!("number"===typeof e||"string"===typeof e))throw new Error("Invalid value provided. Must provide a value as a string or number");if(e=String(e),n.value=parseFloat(e),n.unit=e.match(/[\d.\-+]*\s*(.*)/)[1]||t,!vh.includes(n.unit))throw new Error("Invalid unit provided.");return n}var wh={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function bh(e){if(Array.isArray(e))return ph()(e[0],e[1],e[2],e[3]);if("string"===typeof e&&"undefined"!==typeof wh[e]){var t=wh[e];return ph()(t[0],t[1],t[2],t[3])}}var jh=Object.values(sh),Ah={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function Sh(e,t){var n={};return jh.forEach((function(i){var r=Ah[i];if("number"===typeof(null==e?void 0:e[i])){var a=null==e?void 0:e[i],s=-10*(a||0)+"px",o=yh(10*(a||0)+"px"),l=yh(s),c={start:o.value,end:l.value,unit:o.unit};t===dh.vertical&&(n.translateY=c),t===dh.horizontal&&(n.translateX=c)}if(Array.isArray(null==e?void 0:e[i])){var d=null==e?void 0:e[i];if("undefined"!==typeof d[0]&&"undefined"!==typeof d[1]){var u=yh(null==d?void 0:d[0],r),h=yh(null==d?void 0:d[1],r),p=bh(null==d?void 0:d[2]);if(n[i]={start:u.value,end:h.value,unit:u.unit,easing:p},u.unit!==h.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}}})),n}function kh(e,t,n,i){var r=(n-e)/t;return i&&(r=i(r)),r}function Eh(e,t){return{value:function(e,t,n,i,r){return(n-t)*(e-i)/(r-i)+t}("function"===typeof e.easing?e.easing(t):t,(null==e?void 0:e.start)||0,(null==e?void 0:e.end)||0,0,1),unit:null==e?void 0:e.unit}}var Ch=Object.values(sh).filter((function(e){return"opacity"!==e}));function Th(e,t,n){if(n){var i=function(e,t){var n=Ch.reduce((function(n,i){var r=e[i]&&Eh(e[i],t);return"undefined"===typeof r||"undefined"===typeof r.value||"undefined"===typeof r.unit?n:n+(i+"("+r.value+r.unit+")")}),"");return n}(e,t),r=function(e,t){var n=e.opacity&&Eh(e.opacity,t);if("undefined"===typeof n||"undefined"===typeof n.value||"undefined"===typeof n.unit)return"";return""+n.value}(e,t);n.style.transform=i,n.style.opacity=r}}function Ph(e){var t=e.el;t&&(t.style.transform="",t.style.opacity="")}function Ih(e,t,n){var i=t>e,r=n+(Math.abs(e)+Math.abs(t))*(i?-1:1);return Math.max(n/r,1)}function Bh(e,t){var n=e.start,i=e.end,r=e.unit;if("%"===r){var a=t/100;n*=a,i*=a}if("vw"===r){var s=n/100,o=i/100;n=window.innerWidth*s,i=window.innerWidth*o}if("vh"===r){var l=n/100,c=i/100;n=window.innerHeight*l,i=window.innerHeight*c}return{start:n,end:i}}var zh={start:0,end:0,unit:""};var Dh=function(e,t,n){return Math.min(Math.max(e,t),n)},_h=function(){function e(e){this.el=e.el,this.props=e.props,this.scrollAxis=e.scrollAxis,this.disabledParallaxController=e.disabledParallaxController||!1,this.id=++gh,this.effects=Sh(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(e.props.easing),function(e,t){var n="transform"+(Object.keys(t).includes("opacity")?",opacity":"");e.style.willChange=n}(e.el,this.effects)}var t=e.prototype;return t.updateProps=function(e){return this.props=mh({},this.props,e),this.effects=Sh(e,this.scrollAxis),this._setElementEasing(e.easing),this},t.setCachedAttributes=function(e,t){Ph(this),this.rect=new xh({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:e});var n,i,r,a=(n=this.props,i=this.effects,r=this.scrollAxis,!(n.rootMargin||n.targetElement||n.shouldDisableScalingTranslations)&&!!(i.translateX&&r===dh.horizontal||i.translateY&&r===dh.vertical));return"number"===typeof this.props.startScroll&&"number"===typeof this.props.endScroll?(this.limits=new fh({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this._setElementStyles(),this):(a?(this.limits=function(e,t,n,i,r,a){var s=n.translateX||zh,o=n.translateY||zh,l=Bh(s,e.width),c=l.start,d=l.end,u=Bh(o,e.height),h=u.start,p=u.end,f=e.top-t.height,m=e.left-t.width,g=e.bottom,x=e.right,v=1,y=1;r===dh.vertical&&(y=v=Ih(h,p,t.height+e.height));var w=1,b=1;if(r===dh.horizontal&&(b=w=Ih(c,d,t.width+e.width)),h<0&&(f+=h*v),p>0&&(g+=p*y),c<0&&(m+=c*w),d>0&&(x+=d*b),m+=i.x,x+=i.x,f+=i.y,g+=i.y,a){var j=i.y+e.top<t.height,A=i.x+e.left<t.width,S=i.y+e.bottom>t.scrollHeight-t.height,k=i.x+e.right>t.scrollWidth-t.height;j&&S&&(v=1,y=1,f=0,g=t.scrollHeight-t.height),A&&k&&(w=1,b=1,m=0,x=t.scrollWidth-t.width),!j&&S&&(f=e.top-t.height+i.y,v=Ih(h,p,(g=t.scrollHeight-t.height)-f),y=1,h<0&&(f+=h*v)),!A&&k&&(m=e.left-t.width+i.x,w=Ih(c,d,(x=t.scrollWidth-t.width)-m),b=1,c<0&&(m+=c*w)),j&&!S&&(f=0,v=1,y=Ih(h,p,(g=e.bottom+i.y)-f),p>0&&(g+=p*y)),A&&!k&&(m=0,w=1,b=Ih(c,d,(x=e.right+i.x)-m),d>0&&(x+=d*b))}return new fh({startX:m,startY:f,endX:x,endY:g,startMultiplierX:w,endMultiplierX:b,startMultiplierY:v,endMultiplierY:y})}(this.rect,e,this.effects,t,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=function(e,t){var n=mh({},e);return n.translateX&&(n.translateX=mh({},e.translateX,{start:n.translateX.start*t.startMultiplierX,end:n.translateX.end*t.endMultiplierX})),n.translateY&&(n.translateY=mh({},e.translateY,{start:n.translateY.start*t.startMultiplierY,end:n.translateY.end*t.endMultiplierY})),n}(this.effects,this.limits)):this.limits=function(e,t,n,i){var r=e.top-t.height,a=e.left-t.width,s=e.bottom,o=e.right;return a+=n.x,o+=n.x,r+=n.y,s+=n.y,i&&(n.y+e.top<t.height&&(r=0),n.x+e.left<t.width&&(a=0),s>t.scrollHeight-t.height&&(s=t.scrollHeight-t.height),o>t.scrollWidth-t.width&&(o=t.scrollWidth-t.width)),new fh({startX:a,startY:r,endX:o,endY:s})}(this.rect,e,t,this.props.shouldAlwaysCompleteAnimation),this._setElementStyles(),this)},t._updateElementIsInView=function(e){var t=null===this.isInView;e!==this.isInView&&(e?this.props.onEnter&&this.props.onEnter(this):t||(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=e},t._setFinalProgress=function(){var e=Dh(Math.round(this.progress),0,1);this._updateElementProgress(e)},t._setElementStyles=function(){this.props.disabled||this.disabledParallaxController||Th(this.scaledEffects||this.effects,this.progress,this.el)},t._updateElementProgress=function(e){this.progress=e,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},t._setElementEasing=function(e){this.easing=bh(e)},t.updateElementOptions=function(e){this.scrollAxis=e.scrollAxis,this.disabledParallaxController=e.disabledParallaxController||!1},t.updatePosition=function(e){if(!this.limits)return this;var t=this.scrollAxis===dh.vertical,n=null===this.isInView,i=t?this.limits.startY:this.limits.startX,r=t?this.limits.endY:this.limits.endX,a=t?this.limits.totalY:this.limits.totalX,s=t?e.y:e.x,o=function(e,t,n){return n>=e&&n<=t}(i,r,s);if(this._updateElementIsInView(o),o){var l=kh(i,a,s,this.easing);this._updateElementProgress(l),this._setElementStyles()}else n&&(this.progress=Dh(Math.round(kh(i,a,s,this.easing)),0,1),this._setElementStyles());return this},e}(),Mh=function(){function e(e){this.scrollContainer=e.scrollContainer,this.width=e.width,this.height=e.height,this.scrollHeight=e.scrollHeight,this.scrollWidth=e.scrollWidth}var t=e.prototype;return t.hasChanged=function(e){return e.width!==this.width||e.height!==this.height||e.scrollWidth!==this.scrollWidth||e.scrollHeight!==this.scrollHeight},t.setSize=function(e){return this.width=e.width,this.height=e.height,this.scrollHeight=e.scrollHeight,this.scrollWidth=e.scrollWidth,this},e}(),Oh=function(){function e(e,t){this.x=e,this.y=t,this.dx=0,this.dy=0}return e.prototype.setScroll=function(e,t){return this.dx=e-this.x,this.dy=t-this.y,this.x=e,this.y=t,this},e}();var Nh=function(){function e(e){var t=e.scrollAxis,n=void 0===t?dh.vertical:t,i=e.scrollContainer,r=e.disabled,a=void 0!==r&&r;this.disabled=a,this.scrollAxis=n,this.elements=[],this._hasScrollContainer=!!i,this.viewEl=null!=i?i:window;var s=this._getScrollPosition(),o=s[0],l=s[1];this.scroll=new Oh(o,l),this.view=new Mh({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?i:void 0}),this._ticking=!1,this._supportsPassive=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(Cy){}return e}(),this._bindAllMethods(),this.disabled||(this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize())}e.init=function(t){if(!("undefined"!==typeof window))throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new e(t)};var t=e.prototype;return t._bindAllMethods=function(){var e=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach((function(t){e[t]=e[t].bind(e)}))},t._addListeners=function(e){e.addEventListener("scroll",this._handleScroll,!!this._supportsPassive&&{passive:!0}),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},t._removeListeners=function(e){var t;e.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),null==(t=this._resizeObserver)||t.disconnect()},t._addResizeObserver=function(){var e=this;try{var t=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver((function(){return e.update()})),this._resizeObserver.observe(t)}catch(Cy){console.warn("Failed to create the resize observer in the ParallaxContoller")}},t._getScrollPosition=function(){return[this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset]},t._handleScroll=function(){var e,t=this._getScrollPosition(),n=t[0],i=t[1];this.scroll.setScroll(n,i),!this._ticking&&(null==(e=this.elements)?void 0:e.length)>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},t._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},t._updateAllElements=function(e){var t=this,n=(void 0===e?{}:e).updateCache;this.elements&&this.elements.forEach((function(e){n&&e.setCachedAttributes(t.view,t.scroll),t._updateElementPosition(e)})),this._ticking=!1},t._updateElementPosition=function(e){e.props.disabled||this.disabled||e.updatePosition(this.scroll)},t._getViewParams=function(){if(this._hasScrollContainer){var e=this.viewEl.offsetWidth,t=this.viewEl.offsetHeight,n=this.viewEl.scrollHeight,i=this.viewEl.scrollWidth;return this.view.setSize({width:e,height:t,scrollHeight:n,scrollWidth:i})}var r=document.documentElement;return{width:window.innerWidth||r.clientWidth,height:window.innerHeight||r.clientHeight,scrollHeight:r.scrollHeight,scrollWidth:r.scrollWidth}},t._setViewSize=function(){return this.view.setSize(this._getViewParams())},t._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},t.getElements=function(){return this.elements},t.createElement=function(e){var t=new _h(mh({},e,{scrollAxis:this.scrollAxis,disabledParallaxController:this.disabled}));return t.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[t]):[t],this._updateElementPosition(t),this._checkIfViewHasChanged()&&this.update(),t},t.removeElementById=function(e){this.elements&&(this.elements=this.elements.filter((function(t){return t.id!==e})))},t.updateElementPropsById=function(e,t){this.elements&&(this.elements=this.elements.map((function(n){return n.id===e?n.updateProps(t):n}))),this.update()},t.resetElementStyles=function(e){Ph(e)},t.update=function(){var e=this._getScrollPosition(),t=e[0],n=e[1];this.scroll.setScroll(t,n),this._setViewSize(),this._updateAllElements({updateCache:!0})},t.updateScrollContainer=function(e){this._removeListeners(this.viewEl),this.viewEl=e,this._hasScrollContainer=!!e,this.view=new Mh({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:e}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},t.disableParallaxController=function(){this.disabled=!0,this._removeListeners(this.viewEl),this.elements&&this.elements.forEach((function(e){return Ph(e)}))},t.enableParallaxController=function(){var e=this;this.disabled=!1,this.elements&&this.elements.forEach((function(t){return t.updateElementOptions({disabledParallaxController:!1,scrollAxis:e.scrollAxis})})),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()},t.disableAllElements=function(){console.warn("deprecated: use disableParallaxController() instead"),this.elements&&(this.elements=this.elements.map((function(e){return e.updateProps({disabled:!0})}))),this.update()},t.enableAllElements=function(){console.warn("deprecated: use enableParallaxController() instead"),this.elements&&(this.elements=this.elements.map((function(e){return e.updateProps({disabled:!1})}))),this.update()},t.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach((function(e){return Ph(e)})),this.elements=void 0},e}();var Rh=t.createContext(null);var Lh=function(e){return"undefined"===typeof window?null:Nh.init(e)};function Fh(e){var n=(0,t.useRef)(null);return n.current||(n.current=Lh({scrollAxis:e.scrollAxis||dh.vertical,scrollContainer:e.scrollContainer,disabled:e.isDisabled})),(0,t.useEffect)((function(){e.scrollContainer&&n.current&&n.current.updateScrollContainer(e.scrollContainer)}),[e.scrollContainer,n.current]),(0,t.useEffect)((function(){e.isDisabled&&n.current&&n.current.disableParallaxController(),!e.isDisabled&&n.current&&n.current.enableParallaxController()}),[e.isDisabled,n.current]),(0,t.useEffect)((function(){return function(){(null==n?void 0:n.current)&&(null==n||n.current.destroy())}}),[]),t.createElement(Rh.Provider,{value:n.current},e.children)}var Uh=n(8487);const Vh=e=>{let{children:t,delay:n,margin:i="-20%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(ep,{isActive:!1,delay:n,children:t})})},Yh=e=>{let{children:t,delay:n,margin:i="-20%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(tp,{isActive:!1,delay:n,children:t})})},Qh=e=>{let{children:t,delay:n,margin:i="-20%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(np,{isActive:!1,delay:n,children:t})})},Wh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(ip,{isActive:!1,delay:n,children:t})})},Hh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(rp,{isActive:!1,delay:n,children:t})})},Gh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(ap,{isActive:!1,delay:n,children:t})})},$h=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(sp,{isActive:!1,delay:n,children:t})})},Xh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(op,{isActive:!1,delay:n,children:t})})},Kh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(lp,{isActive:!1,delay:n,children:t})})},qh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(cp,{isActive:!1,delay:n,children:t})})},Jh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,Te.jsx)(Uh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,Te.jsx)(dp,{isActive:!1,delay:n,children:t})})},Zh=au.div`
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
`,ep=(au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateY(60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateY(0px);"}}
`,au(Zh)`
  opacity: 0;
  transition: opacity 6s ease, transform 6s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateY(120px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateY(0px);"}}
`),tp=(au(Zh)`
  opacity: 0;
  transition: 1s opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateY(-60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateY(0px);"}}
`,au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateX(-60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateX(0px);"}}
`),np=(au(Zh)`
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateX(-60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateX(0px);"}}
`,au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateX(60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateX(0px);"}}
`),ip=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,rp=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,ap=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.6s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,sp=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.9s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,op=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,lp=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.4s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,cp=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(125px, 125px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,dp=au(Zh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-125px, -125px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,up=au.div`
  /* background: var(--primary-bg); */
  width: 100%;
  max-width: 1140px;
`,hp=au.div`
  width: 100%;
`,pp=au.div`
  .dropdown-container {
    max-width: 1140px;
  }

  .dropdown-trigger {
    color: var(--primary-txt-color);
    font-weight: 500;
    font-size: 3rem;
    padding: 16px 0;

    @media only screen and (max-width: 1024px) {
      padding: 1.57vw 0;
    }

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }

    span {
      color: var(--primary-txt-color);
      font-weight: 500;
      font-size: 3rem;

      @media only screen and (max-width: 960px) {
        /* padding-left: 3.33vw; */
        font-size: 4.44vw;
      }
    }

    //// Chips /////
    .dropdown-chip.inactive {
      display: inline-block;
      transition: 0.7s;
      transform: rotate(-360deg);
      transition-timing-function: ease-in-out;
      border-radius: 50px;
      border: solid 2px var(--secondary-bg);
      background: var(--primary-bg);
      white-space: nowrap;
      padding: 10px 25px;
    }

    .dropdown-chip.inactive::after {
      content: "+";
      font-weight: 100;
      transform: translateX(4rem);
      transition-delay: calc(250ms * var(--delay));
      transition-timing-function: ease-in-out;
      transition-duration: 500ms;
    }

    .dropdown-chip.active {
      position: absolute;
      margin-left: 24px;
      transition: 0.5s;
      transform: rotate(-3deg);
      transition-timing-function: ease-in-out;
      border-radius: 50px;
      border: solid 2px var(--secondary-bg);
      background-color: var(--secondary-bg);
      color: var(--inversed-txt-color);
      white-space: nowrap;
      padding: 10px 20%;

      @media only screen and (max-width: 768px) {
        margin-left: 16px;
      }
      @media only screen and (max-width: 540px) {
        margin-left: 6px;
        border: solid 1.5px var(--secondary-bg);
      }
    }

    .dropdown-chip.active::after {
      content: "+";
      position: absolute;
      font-weight: 100;
      transition: 0.5s;
      transform: rotate(-45deg);
      transition-timing-function: ease-in-out;
      color: var(--inversed-txt-color);
    }
  }

  //// Contents of chips /////
  .dropdown-contents {
    padding: 2rem 3rem;
    /* background: var(--primary-bg); */
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 960px) {
      padding: 2.5vw 5vw;
    }

    @media only screen and (max-width: 540px) {
      border: solid 1.5px var(--secondary-bg);
      padding: 3vw 6vw;
    }
  }

  .dropdown-contents.inactive {
    width: 100%;
    position: absolute;
    opacity: 0;
    /* background-color: var(--primary-txt-color);; */
    visibility: hidden;
    transform: translateX(4rem);
    transition-delay: calc(200ms * var(--delay));
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
  }

  .dropdown-contents.active {
    width: 100%;
    margin: 3rem 0 6rem 0;
    opacity: 1;
    visibility: visible;
    /* transform: translateX(1rem); */
    transition: 0.5s;
    /* transition-delay: calc(250ms * var(--delay)); */
    transition-timing-function: ease-in-out;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
      margin: 2.5rem 0 5.5rem 0;
    }
    @media only screen and (max-width: 768px) {
      margin: 2rem 0 4.5rem 0;
    }
    @media only screen and (max-width: 540px) {
      margin: 1.75rem 0 2.75rem 0;
    }
  }

  p {
    display: flex;
    align-items: flex-end;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--secondary-txt-color);

    &:last-child {
      padding-left: 6rem;
      margin-bottom: 3px;
    }

    &:first-child {
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    @media only screen and (max-width: 960px) {
      font-size: 3.33vw;

      &:last-child {
        font-size: 2.083vw;
        padding-left: 3.33vw;
      }

      &:first-child {
        font-size: 2.083vw;
        margin-bottom: 1.25vw;
      }
    }
  }

  h4 {
    font-size: 2rem !important;
    font-family: "GT";
    font-weight: 500 !important;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 960px) {
      font-size: 3.33vw !important;
    }
  }

  /* p span {
    font-size: 2rem;
    font-weight: 300;
    color: var(--secondary-txt-color);
  } */

  .dropdown-contents ul li {
    border-top: 2px solid var(--secondary-bg);
    list-style: none;
    padding: 20px 0;

    &:nth-child(1) {
      border-top: none;
    }

    @media only screen and (max-width: 960px) {
      padding: 2.083vw 0;
    }

    @media only screen and (max-width: 540px) {
      border-top: 1.5px solid var(--secondary-bg);
    }
  }

  .dropdown-contents li div {
    display: flex;
    justify-content: space-between !important;
  }

  .dropdown-Item {
    display: flex;
    margin: 10px auto;
  }

  .dropdown-Item p {
    margin: 0 10px 10px 0;
    transition: 0.5s ease;
  }

  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    &:nth-child(1) {
      padding-right: 2vw;
    }
    &:nth-child(2) {
      padding-left: 2vw;
    }
  }
`,fp=()=>{const[e,n]=(0,t.useState)(!1);let i=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{i.current.contains(e.target)||(n(!1),console.log(i.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,Te.jsx)(up,{id:"Dropdown",ref:i,children:(0,Te.jsx)(hp,{children:(0,Te.jsx)(pp,{children:(0,Te.jsxs)("div",{className:"dropdown-container",children:[(0,Te.jsx)("div",{className:"dropdown-trigger",onClick:()=>{n(!e)},children:(0,Te.jsx)("span",{className:"dropdown-chip "+(e?"active":"inactive"),children:"Education\xa0"})}),(0,Te.jsx)("div",{className:"dropdown-contents "+(e?"active":"inactive"),children:(0,Te.jsxs)("ul",{children:[(0,Te.jsx)(r,{textTitle:"The Interaction Design Foundation",textContent:"Human-Computer Interaction, Behavioral Neuroscience",textDate:"2024"}),(0,Te.jsx)(r,{textTitle:"Cornerstone International Community College of Canada",textContent:"Web & Mobile App Development Diploma",textDate:"School of 2021"}),(0,Te.jsx)(r,{textTitle:"Osaka University of Arts",textContent:"Bachelor of Fine Arts",textDate:"School of 2009"})]})})]})})})});function r(e){return(0,Te.jsxs)("li",{children:[(0,Te.jsx)("p",{children:e.textTitle}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h4",{children:e.textContent}),(0,Te.jsx)("p",{children:e.textDate})]})]})}},mp=au(ke)`
  max-width: 200px;
  border-radius: 50px;
  border: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  white-space: nowrap;
  padding: 10px 25px;
  color: var(--primary-txt-color);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);

  &:hover {
    transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);
    background-color: var(--secondary-bg);
    color: var(--primary-bg);
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`,gp=au.a`
  max-width: 200px;
  border-radius: 50px;
  border: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  white-space: nowrap;
  padding: 10px 25px;
  color: var(--primary-txt-color);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);

  &:hover {
    transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);
    background-color: var(--secondary-bg);
    color: var(--primary-bg);
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`,xp=e=>{let{to:n,buttonLabel:i}=e;const[r,a]=(0,t.useState)(!1);let s=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{s.current.contains(e.target)||(a(!1),console.log(s.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,Te.jsx)(up,{id:"Dropdown",ref:s,children:(0,Te.jsx)(hp,{children:(0,Te.jsx)(pp,{children:(0,Te.jsxs)("div",{className:"dropdown-container",children:[(0,Te.jsx)("div",{className:"dropdown-trigger",onClick:()=>{a(!r)},children:(0,Te.jsx)("span",{className:"dropdown-chip "+(r?"active":"inactive"),children:"Discipline\xa0"})}),(0,Te.jsx)("div",{className:"dropdown-contents "+(r?"active":"inactive"),children:(0,Te.jsxs)("ul",{children:[(0,Te.jsx)(o,{textTitle:"User Interface Design",textTag:"Design"}),(0,Te.jsx)(o,{textTitle:"User Experience Design",textTag:"Design / Analysis"}),(0,Te.jsx)(o,{textTitle:"Wireframing",textTag:"Design"}),(0,Te.jsx)(o,{textTitle:"Prototyping",textTag:"Design"}),(0,Te.jsx)(o,{textTitle:"Motion Prototype",textTag:"Design"}),(0,Te.jsx)(o,{textTitle:"Usability Testing",textTag:"Analysis"}),(0,Te.jsx)(o,{textTitle:"Data - Analysis",textTag:"Analysis"}),(0,Te.jsx)(o,{textTitle:"Design identity systems",textTag:"Design / Analysis"}),(0,Te.jsx)(o,{textTitle:"Information Architecture",textTag:"Design / Analysis"}),(0,Te.jsx)(o,{textTitle:"E-commerce Optimization",textTag:"Design / Analysis / Coding"}),(0,Te.jsx)(o,{textTitle:"Brand Development",textTag:"Branding"}),(0,Te.jsx)(o,{textTitle:"Agile Development",textTag:"Coding"}),(0,Te.jsx)(o,{textTitle:"Vector - illustration",textTag:"Design"}),(0,Te.jsx)(o,{textTitle:"Logo Design",textTag:"Design"}),(0,Te.jsx)(o,{textTitle:"Package Design",textTag:"Design"}),(0,Te.jsx)(o,{textTitle:"Check out how I enhanced UI at the beginning of my career !!",textTag:"Design"}),(0,Te.jsxs)(mp,{to:"dailyUiPage",smooth:!0,duration:500,spy:!0,exact:"true",offset:0,children:[(0,Te.jsx)(Fu,{style:{marginRight:"6px"}}),"View Study"]})]})})]})})})});function o(e){return(0,Te.jsx)("li",{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h4",{children:e.textTitle}),(0,Te.jsx)("p",{children:e.textTag})]})})}},vp=()=>{const[e,n]=(0,t.useState)(!1);let i=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{i.current.contains(e.target)||(n(!1),console.log(i.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,Te.jsx)(up,{id:"Dropdown",ref:i,children:(0,Te.jsx)(hp,{children:(0,Te.jsx)(pp,{children:(0,Te.jsxs)("div",{className:"dropdown-container",children:[(0,Te.jsx)("div",{className:"dropdown-trigger",onClick:()=>{n(!e)},children:(0,Te.jsx)("span",{className:"dropdown-chip "+(e?"active":"inactive"),children:"Software\xa0"})}),(0,Te.jsx)("div",{className:"dropdown-contents "+(e?"active":"inactive"),children:(0,Te.jsxs)("ul",{children:[(0,Te.jsx)(r,{textTitle:"Adobe CC",textTag:"Illustrator / Photoshop / XD / Bridge / InDesign / Premiere / After Effects"}),(0,Te.jsx)(r,{textTitle:"Figma"}),(0,Te.jsx)(r,{textTitle:"Sketch"}),(0,Te.jsx)(r,{textTitle:"InVision"}),(0,Te.jsx)(r,{textTitle:"VS Code"}),(0,Te.jsx)(r,{textTitle:"Wordpress"}),(0,Te.jsx)(r,{textTitle:"Webflow"}),(0,Te.jsx)(r,{textTitle:"Wix"}),(0,Te.jsx)(r,{textTitle:"Squarespace"}),(0,Te.jsx)(r,{textTitle:"Shopify"}),(0,Te.jsx)(r,{textTitle:"Replo Landing Page Designer"}),(0,Te.jsx)(r,{textTitle:"Miro"}),(0,Te.jsx)(r,{textTitle:"Trello"}),(0,Te.jsx)(r,{textTitle:"Notion"}),(0,Te.jsx)(r,{textTitle:"Click Up"}),(0,Te.jsx)(r,{textTitle:"Slack"}),(0,Te.jsx)(r,{textTitle:"Google",textTag:"Optimize / Tag Manager / Analytics"}),(0,Te.jsx)(r,{textTitle:"Hotjar"}),(0,Te.jsx)(r,{textTitle:"Microsoft Clarity"})]})})]})})})});function r(e){return(0,Te.jsx)("li",{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h4",{children:e.textTitle}),(0,Te.jsx)("p",{children:e.textTag})]})})}},yp=()=>{const[e,n]=(0,t.useState)(!1);let i=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{i.current.contains(e.target)||(n(!1),console.log(i.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,Te.jsx)(up,{id:"Dropdown",ref:i,children:(0,Te.jsx)(hp,{children:(0,Te.jsx)(pp,{children:(0,Te.jsxs)("div",{className:"dropdown-container",children:[(0,Te.jsx)("div",{className:"dropdown-trigger",onClick:()=>{n(!e)},children:(0,Te.jsx)("span",{className:"dropdown-chip "+(e?"active":"inactive"),children:"Language\xa0"})}),(0,Te.jsx)("div",{className:"dropdown-contents "+(e?"active":"inactive"),children:(0,Te.jsxs)("ul",{children:[(0,Te.jsx)(r,{textTitle:"HTML",textTag:"Language"}),(0,Te.jsx)(r,{textTitle:"CSS",textTag:"Language"}),(0,Te.jsx)(r,{textTitle:"JavaScript",textTag:"Language"}),(0,Te.jsx)(r,{textTitle:"Liquid",textTag:"Shopify Template Language"}),(0,Te.jsx)(r,{textTitle:"React",textTag:"Library"}),(0,Te.jsx)(r,{textTitle:"Bootstrap",textTag:"Framework"}),(0,Te.jsx)(r,{textTitle:"Materialize",textTag:"Framework"}),(0,Te.jsx)(r,{textTitle:"SCSS / SASS",textTag:"Language"}),(0,Te.jsx)(r,{textTitle:"styled-components",textTag:"Library"})]})})]})})})});function r(e){return(0,Te.jsx)("li",{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h4",{children:e.textTitle}),(0,Te.jsx)("p",{children:e.textTag})]})})}},wp=au.div`
  background: var(--index-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px 60px 0 0;

  @media only screen and (max-width: 960px) {
    border-radius: 44px 44px 0 0;
  }
  @media only screen and (max-width: 359px) {
    border-radius: 24px 24px 0 0;
  }
`,bp=au.div`
  padding-top: 8.5rem;
  padding-bottom: 2rem;

  @media only screen and (max-width: 960px) {
    padding-top: 14.167vw;
  }

  @media only screen and (max-width: 960px) {
    padding-bottom: 2vw;
  }

  h2 {
    font-weight: 300 !important;
  }

  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    text-align: right;
    padding-left: 5.5rem;
  }

  div {
    display: flex;
  }
`,jp=au.div`
  padding-bottom: 2rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 2vw;
  }
`,Ap=au.img`
  width: 100%;
  display: block;
  height: auto;
  border: thick double var(--secondary-bg);
  border-radius: 15px;
`,Sp=au.div`
  width: 100%;
  max-width: 1140px;
  display: block;

  @media only screen and (max-width: 1350px) {
    margin: 0 30px 0 130px;
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px 0 30px;
  }

  .fancy-title {
    color: var(--primary-txt-color);
    font-family: "GT";
    font-weight: 500;
    font-size: 6rem;
    &:nth-child(1) {
      padding-right: 2vw;
      padding-left: 1vw;
    }
    &:nth-child(2) {
      padding: 0 2vw;
    }
    &:nth-child(3) {
      padding: 0 2vw;
    }
    @media only screen and (max-width: 1160px) {
      font-size: 9.655vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 10.1vw;
    }
  }

  h2 {
    color: var(--primary-txt-color);
    font-weight: 700;
    font-size: 6rem;
    /* text-align: justify;
    text-justify: inter-ideograph; */

    &:nth-child(3) {
      margin-bottom: 2rem;
    }
    @media only screen and (max-width: 1160px) {
      font-size: 9.655vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 10.1vw;
    }
  }

  h3 {
    color: var(--primary-txt-color);
    font-family: "GT";
    font-weight: 500;
    font-size: 4rem;

    @media only screen and (max-width: 960px) {
      /* padding-left: 3.33vw; */
      font-size: 6.667vw;
    }
  }

  h4 {
    color: var(--primary-txt-color);
    font-weight: 100;
    font-size: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }
`,kp=au.div`
  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    &:nth-child(1) {
      padding-right: 2vw;
    }
    &:nth-child(2) {
      padding-left: 2vw;
    }
  }

  .fancy-font-title {
    font-family: "GT";
    font-weight: 500;
  }

  .start-cap {
    padding-top: 2rem;

    @media only screen and (max-width: 960px) {
      padding-top: 2vw;
    }
  }

  .end-cap {
    padding-bottom: 2rem;

    @media only screen and (max-width: 960px) {
      padding-bottom: 2vw;
    }
  }

  div {
    display: flex;
    &:nth-child(4) {
      padding-bottom: 2rem;
    }
    &:nth-child(5) {
      padding-bottom: 2rem;
    }
    &:nth-child(6) {
      padding-bottom: 2rem;
    }
    &:nth-child(7) {
      padding-bottom: 2rem;
    }
    &:nth-child(8) {
      padding-bottom: 2rem;
    }
    &:nth-child(9) {
      padding-bottom: 2rem;
    }
    &:nth-child(10) {
      padding-bottom: 2rem;
    }
    &:nth-child(11) {
      padding-bottom: 2rem;
    }
    &:nth-child(12) {
      padding-bottom: 2rem;
    }
    &:nth-child(14) {
      padding-bottom: 4rem;
    }

    @media only screen and (max-width: 960px) {
      &:nth-child(4) {
        padding-bottom: 2vw;
      }
      &:nth-child(5) {
        padding-bottom: 2vw;
      }
      &:nth-child(6) {
        padding-bottom: 2vw;
      }
      &:nth-child(7) {
        padding-bottom: 2vw;
      }
      &:nth-child(8) {
        padding-bottom: 2vw;
      }
      &:nth-child(9) {
        padding-bottom: 2vw;
      }
      &:nth-child(10) {
        padding-bottom: 2vw;
      }
      &:nth-child(11) {
        padding-bottom: 2vw;
      }
      &:nth-child(12) {
        padding-bottom: 2vw;
      }
      &:nth-child(14) {
        padding-bottom: 5.5vw;
      }
    }
  }
`,Ep=au.div`
  padding-bottom: 17rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 26.33vw;
  }
`,Cp=(au.div`
  .dropdown-container {
    display: inline-block !important ;
  }

  .dropdown-trigger {
    color: var(--primary-txt-color);
    font-weight: 100;
    font-size: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }
`,n.p+"static/media/headshot2023.a1503ae0a119f9d64104.png"),Tp=()=>(0,Te.jsx)(wp,{id:"about",children:(0,Te.jsxs)(Sp,{children:[(0,Te.jsx)(Qh,{children:(0,Te.jsx)(bp,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"A little about"}),(0,Te.jsx)("h2",{className:"fancy-font",children:" ----- Me"})]})})}),(0,Te.jsx)(Yh,{children:(0,Te.jsx)(jp,{children:(0,Te.jsx)(Ap,{src:Cp})})}),(0,Te.jsx)(Qh,{children:(0,Te.jsxs)(kp,{children:[(0,Te.jsx)("div",{children:(0,Te.jsxs)("h2",{children:["I ",(0,Te.jsx)("span",{className:"fancy-font-title",children:"design "}),"solutions that address both\xa0",(0,Te.jsx)("span",{className:"fancy-font-title",children:"aesthetics "}),"and\xa0",(0,Te.jsx)("span",{className:"fancy-font-title",children:"business challenges."})]})}),(0,Te.jsx)("div",{className:"end-cap start-cap",children:(0,Te.jsx)("h4",{children:"I'm not your conventional designer crafting attractive interfaces. As a Product Designer specializing in UX/UI, brand and digital design, I immerse myself in business complexities, developing efficient solutions that extend beyond aesthetics to create genuine change."})}),(0,Te.jsx)("div",{className:"end-cap start-cap",children:(0,Te.jsx)("h3",{children:"Expertise in UX design"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h4",{children:"Quantitative and qualitative UX research and iterations are essential for shaping the customer base and ensuring that products are functional, visually appealing, and personalized to end-user needs. To facilitate this, I am committed to cultivating a supportive work culture built on strong communication and transparency across the entire team."})}),(0,Te.jsx)("div",{className:"end-cap start-cap",children:(0,Te.jsx)("h3",{children:"Empathy in UI Design"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h4",{children:"Designing with empathy is not easy, so I dedicate foundational steps in my human-centred design process to immerse myself in the user's world and craft solutions tailored to their genuine requirements."})}),(0,Te.jsx)("div",{className:"end-cap start-cap",children:(0,Te.jsx)("h3",{children:"Commitment"})}),(0,Te.jsx)("div",{className:"end-cap",children:(0,Te.jsxs)("h4",{children:["I am committed to approaching these elements with flexibility for every project and client. I deliver core user-centered solutions in",(0,Te.jsxs)("span",{className:"fancy-font-title",children:[" ",'"Design and Technology,']}),(0,Te.jsxs)("span",{className:"fancy-font-title",children:[" ","Branding and Websites,"," "]}),(0,Te.jsx)("span",{className:"fancy-font-title",children:'Simplicity and Sophistication"'}),"\xa0that captivate customers."]})})]})}),(0,Te.jsxs)(Ep,{children:[(0,Te.jsx)(Yh,{children:(0,Te.jsx)(fp,{})}),(0,Te.jsx)(Yh,{children:(0,Te.jsx)(xp,{})}),(0,Te.jsx)(Yh,{children:(0,Te.jsx)(vp,{})}),(0,Te.jsx)(Yh,{children:(0,Te.jsx)(yp,{})})]})]})}),Pp=au.div`
  width: 100%;
  background: var(--index-bg);
  color: var(--primary-txt-color);
  font-weight: 100;
  font-size: 2.5rem;
  line-height: 1.2;

  @media only screen and (max-width: 1920px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 540px) {
    font-size: 4.44vw;
  }
`,Ip=au.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 100%;
  padding-bottom: 17rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 26.33vw;
  }
`,Bp=au(hu.N_)`
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
  text-decoration: none;
  border-top: 2px solid var(--primary-txt-color);

  .banner {
    width: 100%;
    padding: 20px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
  }

  .banner-label {
    top: -1px;
    position: relative;
    text-transform: uppercase;
  }

  .banner-arrow {
    margin: 0 40px 0;
  }

  .banner-border {
    width: 100%;
    bottom: 2px;
    height: 2px;
    background-color: var(--primary-txt-color);
    display: block;
    position: absolute;
    left: 0;
  }
`;function zp(e){return Nu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"},child:[]}]})(e)}const Dp=()=>(0,Te.jsx)(Pp,{children:(0,Te.jsx)(Ip,{children:(0,Te.jsx)(Bp,{to:"larry",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,Te.jsxs)("div",{class:"banner banner-with-link","data-intersection-id":"banner-0",children:[(0,Te.jsxs)(Wh,{children:[(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,Te.jsxs)(Hh,{children:[(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,Te.jsxs)(Gh,{children:[(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,Te.jsxs)($h,{children:[(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,Te.jsxs)(Xh,{children:[(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,Te.jsxs)(Kh,{children:[(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})}),(0,Te.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,Te.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,Te.jsx)(zp,{})})]}),(0,Te.jsx)("div",{class:"banner-border",style:{transform:"translate(0px, 0px)"}})]})})})}),_p={id:"burger-menu",darkBurger:!0},Mp=au.div`
  width: 100%;
  background: var(--index-bg);
  display: flex;
  justify-content: center;
`,Op=au.div`
  max-width: 1400px;
  margin: 0 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${e=>{let{imageLeft:t}=e;return t?"none":"row-reverse"}};
  padding-top: ${e=>{let{paddingStart:t}=e;return t?"8rem":"0"}};
  padding-bottom: ${e=>{let{paddingEnd:t}=e;return t?"8rem":"0"}};

  @media only screen and (max-width: 1570px) {
    margin: 0 30px 0 110px;
  }

  @media only screen and (max-width: 960px) {
    padding-top: ${e=>{let{paddingStart:t}=e;return t?"13.4vw;":"0"}};
    padding-bottom: ${e=>{let{paddingEnd:t}=e;return t?"13.4vw;":"0"}};
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px;
  }
`,Np=au.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate01:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Rp=au.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate02:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Lp=au.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate03:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Fp=au.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate04:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Up=au.div`
  width: 100%;
  padding: 0 24px 24px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  // md sm center //
  /* width: 100%; */

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Vp=(au.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    width: 40%;
  }

  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`,au.div`
  padding: 0 60px;

  @media only screen and (max-width: 540px) {
    padding: 0;
  }

  h2 {
    color: var(--primary-txt-color);
    font-weight: 700;
    font-size: 7rem;
    margin: 1rem 0;
    overflow-wrap: break-word;

    @media only screen and (max-width: 1440px) {
      font-size: 7.5vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
    @media only screen and (max-width: 540px) {
      margin: 0 0 1rem 0;
    }
  }

  .body {
    color: var(--primary-txt-color);
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
    @media only screen and (max-width: 540px) {
      margin-bottom: 2rem;
    }
  }

  a {
    margin: 0 auto;
    /* @media only screen and (max-width: 1024px) {
      margin: 0 auto;
    } */
  }
`),Yp=au.div`
  display: flex;
`,Qp=au.div`
  width: fit-content;
  border-radius: 50px;
  background-color: var(--secondary-bg);
  margin: 0 16px 9px 0;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  .tagCopy {
    color: var(--primary-bg);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }

  @media only screen and (max-width: 540px) {
    padding: 4px 10px;

    .tagCopy {
      font-size: 12px;
    }
  }
`,Wp=[{image:n(2867)},{image:n(3216)}],Hp=[{image:n(7592)},{image:n(6797)}],Gp=[{image:n(1809)},{image:n(935)}],$p=[{image:n(1231)},{image:n(7300)}],Xp=au.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  touch-action: pan-y; /* Allow touch actions on mobile */

  // for index //
  @media (max-width: 1921px) and (min-width: 1024px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 1023px) and (min-width: 480px) {
    max-width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 479px) {
    max-width: 90%;
    margin: 0 auto;
  }
`,Kp=au.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
`,qp=au.img`
  width: calc(100% - 20px); /* Subtracting the space on both sides */
  margin: 0 10px; /* Adding 10px margin on both sides */
  flex-shrink: 0;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer; /* Add cursor pointer for better UX */
`,Jp=au.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;

  @media only screen and (max-width: 480px) {
    gap: 6px;
    margin-top: 16px;
  }
`,Zp=au.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>{let{isActive:t}=e;return t?"#fe0000":"#ff9999"}};
  padding: ${e=>{let{isActive:t}=e;return t?"0 1.5rem":"0"}};
  border-radius: ${e=>{let{isActive:t}=e;return t?"10px":"50%"}};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${e=>{let{isActive:t}=e;return t?"#fe0000":"#ff6666"}};
  }

  @media only screen and (max-width: 480px) {
    width: 9px;
    height: 9px;
    padding: ${e=>{let{isActive:t}=e;return t?"0 0.7rem":"0"}};
  }
`,ef=e=>{let{slides:n}=e;const[i,r]=(0,t.useState)(0),[a,s]=(0,t.useState)(window.innerWidth<=768),o=(0,t.useRef)(null),l=(0,t.useRef)(null),c=(0,t.useRef)(null);(0,t.useEffect)((()=>{const e=()=>{s(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);return(0,t.useEffect)((()=>{o.current&&(o.current.style.transform=`translateX(-${100*i}%)`)}),[i]),(0,Te.jsxs)(Xp,{onTouchStart:a?e=>{l.current=e.touches[0].clientX}:void 0,onTouchMove:a?e=>{c.current=e.touches[0].clientX}:void 0,onTouchEnd:a?()=>{l.current-c.current>50?r((e=>(e+1)%n.length)):l.current-c.current<-50&&r((e=>(e-1+n.length)%n.length))}:void 0,children:[(0,Te.jsx)(Kp,{ref:o,children:n.map(((e,t)=>(0,Te.jsx)(qp,{src:e.image,alt:`Slide ${t+1}`,onClick:()=>!a&&void r((e=>(e+1)%n.length))},t)))}),(0,Te.jsx)(Jp,{children:n.map(((e,t)=>(0,Te.jsx)(Zp,{isActive:t===i,onClick:()=>(e=>{r(e)})(t)},t)))})]})},tf=e=>{let{name:t,to:n,title:i,tag:r,body:a,imageActivate01:s,imageActivate02:o,imageActivate03:l,imageActivate04:c,imageLeft:d,buttonLabel:u,paddingStart:h,paddingEnd:p}=e;return(0,Te.jsx)(Mp,{name:t,children:(0,Te.jsxs)(Op,{paddingStart:h,paddingEnd:p,imageLeft:d,children:[(0,Te.jsx)(Np,{imageActivate01:s,children:(0,Te.jsx)(Yh,{children:(0,Te.jsx)(ef,{slides:Wp})})}),(0,Te.jsx)(Rp,{imageActivate02:o,children:(0,Te.jsx)(Qh,{children:(0,Te.jsx)(ef,{slides:Hp})})}),(0,Te.jsx)(Lp,{imageActivate03:l,children:(0,Te.jsx)(Yh,{children:(0,Te.jsx)(ef,{slides:Gp})})}),(0,Te.jsx)(Fp,{imageActivate04:c,children:(0,Te.jsx)(Qh,{children:(0,Te.jsx)(ef,{slides:$p})})}),(0,Te.jsx)(Up,{children:(0,Te.jsxs)(Vp,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:i})}),(0,Te.jsx)(Yp,{children:(0,Te.jsx)(Qp,{children:(0,Te.jsx)("p",{className:"tagCopy",children:r})})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"body",children:a})}),(0,Te.jsx)(mp,{to:n,smooth:!0,duration:500,spy:!0,exact:"true",offset:0,children:u})]})})]})})},nf=au.div`
  background: var(--index-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`,rf=au.div`
  padding-bottom: 6rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 10vw;
  }
  @media only screen and (max-width: 540px) {
    padding-bottom: 7vw;
  }

  h2 {
    font-weight: 300 !important;
  }

  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    text-align: right;
  }

  div {
    display: flex;
  }
`,af=au.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  /* padding-top: 17rem; */

  @media only screen and (max-width: 1340px) {
    margin: 0 30px 0 130px;
  }
  @media only screen and (max-width: 960px) {
    /* padding-top: 26.33vw; */
    margin: 0 30px;
  }

  h2 {
    color: var(--primary-txt-color);
    font-weight: 700;
    font-size: 7rem;

    &:nth-child(3) {
      margin-bottom: 2rem;
    }

    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,sf=()=>(0,Te.jsx)(nf,{children:(0,Te.jsx)(af,{children:(0,Te.jsx)(Qh,{children:(0,Te.jsx)(rf,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Case Study"}),(0,Te.jsx)("h2",{className:"fancy-font",children:" ------- Latest practice"})]})})})})}),of={name:"case1",to:"case1Page",title:"Cultivating Core User Empathy",tag:"Case Study 1",body:"Analyzing the factors that enhance user experience is a significant process before driving the car.",imageActivate01:!0,imageActivate02:!1,imageActivate03:!1,imageActivate04:!1,alt:"Image",imageLeft:!0,paddingStart:!1,paddingEnd:!0,buttonLabel:"View Case Study 1"},lf={name:"case2",to:"case2Page",title:"Resolving Design Challenges",tag:"Case Study 2",body:"Challenges are ever-present, and addressing issues comprehensively is a problem-solving.",imageActivate01:!1,imageActivate02:!0,imageActivate03:!1,imageActivate04:!1,alt:"Image",imageLeft:!1,paddingStart:!1,paddingEnd:!0,buttonLabel:"View Case Study 2"},cf={name:"case3",to:"case3Page",title:"Enhancing Website Profitability",tag:"Case Study 3",body:"Product appeal and profitability improve through continuous enhancements and ongoing analysis.",imageActivate01:!1,imageActivate02:!1,imageActivate03:!0,imageActivate04:!1,alt:"Image",imageLeft:!0,paddingStart:!1,paddingEnd:!0,buttonLabel:"View Case Study 3"},df={name:"case4",to:"case4Page",title:"Midnight Paloma",tag:"Case Study 4",body:"Midnight Paloma website was a long overdue revamp but has committed to completing it within a tight timeframe.",imageActivate01:!1,imageActivate02:!1,imageActivate03:!1,imageActivate04:!0,img:n(1231),alt:"Image",imageLeft:!1,paddingStart:!1,paddingEnd:!0,buttonLabel:"View Case Study 4"},uf={head:"Works",name:"larry",to:"larryPage",title:"Larry",number:"01"},hf={name:"vector",to:"vectorPage",title:"Vector",number:"02"},pf={name:"daruma",to:"darumaPage",title:"Daruma",number:"03"},ff={name:"portfolio",to:"portfolioPage",title:"Portfolio",number:"04"},mf=au.div`
  width: 100%;
  background: var(--index-bg);
  display: block;
  padding: 0.5rem;
  border-bottom: 2px solid red;
`,gf=au.div`
  max-width: 1140px;
  margin: 0 auto;
`,xf=au.div`
  text-align: left;

  @media only screen and (max-width: 1350px) {
    margin: 0 30px 0 110px;
  }

  /* @media only screen and (max-width: 1280px) {
    margin: 0 30px 0 130px;
  } */

  @media only screen and (max-width: 960px) {
    margin: 0 30px 0 30px;
  }
`,vf=au.div`
  color: var(--primary-txt-color);
  font-family: "MyCase";
  font-weight: 500;
  font-size: 2.5rem;
  text-decoration: none;
  padding-bottom: 2rem;

  @media only screen and (max-width: 960px) {
    font-size: 5.56vw;
    padding-bottom: 3.333vw;
  }
`,yf=au.div`
  color: var(--primary-txt-color);
  font-family: "GT";
  font-weight: 500;
  font-size: 2.5rem;
  text-decoration: none;
  padding-top: 1.5rem;

  @media only screen and (max-width: 960px) {
    font-size: 5.56vw;
    padding-top: 2.5vw;
  }
`,wf=au(ke)`
  color: var(--primary-txt-color);
  position: relative;
  font-family: "GT";
  font-weight: 500;
  font-size: 7rem;
  text-decoration: none;
  overflow: hidden;

  &::before {
    content: "Read more";
    position: absolute;
    min-width: 550px;
    height: 100%;
    background: var(--index-bg);
    top: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.6s ease-in-out;
    z-index: 1;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  @media only screen and (max-width: 960px) {
    font-size: 11.11vw;
  }
`,bf=e=>{let{name:t,to:n,head:i,title:r,number:a}=e;return(0,Te.jsx)(mf,{name:t,children:(0,Te.jsx)(Yh,{children:(0,Te.jsx)(gf,{children:(0,Te.jsxs)(xf,{children:[(0,Te.jsx)(vf,{children:(0,Te.jsx)("p",{children:i})}),(0,Te.jsx)(yf,{children:a}),(0,Te.jsx)(wf,{to:n,children:r})]})})})})},jf=au.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  overflow: hidden;
  background-color: var(--secondary-bg);
`,Af=au.div`
  margin: 0 0 110px 100px;

  @media only screen and (max-width: 960px) {
    margin: 0 15px 0 15px;
  }

  p {
    font-weight: 100;
    font-size: 18vw;
    color: var(--fourth-txt-color);
    line-height: 0.9;
    white-space: nowrap;

    @media only screen and (min-width: 2560px) {
      font-size: 470px;
    }
    @media only screen and (max-width: 2159px) {
      font-size: 17.8vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 21vw;
      line-height: 1.1;
    }
  }
`,Sf=au.div`
  padding: 6rem 3.5rem 6rem 3.5rem;

  @media only screen and (max-width: 960px) {
    display: none;
  }

  div {
    display: inline-block;

    .contact {
      margin: 2rem 0 0 4.5rem;
      border-bottom: 3px solid var(--secondary-bg);
      transition: 0.3s ease;

      &:hover {
        padding: 0 0 6px 0;
        border-color: var(--fourth-txt-color);
      }
    }

    a {
      text-decoration: none;
    }
  }

  p {
    color: var(--fourth-txt-color);
    font-weight: 300;
    font-size: 3rem;
  }

  img {
    width: 3rem;
    margin-right: 1.5rem;
  }
`,kf=au.div`
  padding: 23px 23px 10vw 23px;

  @media only screen and (min-width: 960.999px) {
    display: none;
  }

  div {
    display: inline-block;

    .contact {
      margin-top: 5vw;
      border-bottom: 3px solid var(--secondary-bg);
      transition: 0.3s ease;

      &:hover {
        padding: 0 0 6px 0;
        border-color: var(--fourth-txt-color);
      }
    }

    a {
      text-decoration: none;
    }
  }

  p {
    color: var(--fourth-txt-color);
    font-weight: 300;
    font-size: 4.44vw;
  }

  img {
    /* display: flex;
    width: 9vw;
    margin-left: auto;
    margin-right: 44px;
    margin-bottom: 1rem; */
    width: 9vw;
    margin-bottom: 0.2rem;
  }
`,Ef=()=>(0,Te.jsx)(jf,{id:"contact",children:(0,Te.jsxs)(Af,{children:[(0,Te.jsxs)(Sf,{children:[(0,Te.jsxs)("p",{children:[(0,Te.jsx)("img",{src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"}),"Ready to start a project?"]}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("a",{target:"_blank",href:"mailto:hashirizaki61@gmail.com",children:(0,Te.jsx)("p",{className:"contact",children:"Contact"})}),(0,Te.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/yuya-hashirizaki/",children:(0,Te.jsx)("p",{className:"contact",children:"Linkedin"})})]})]}),(0,Te.jsxs)(kf,{children:[(0,Te.jsx)("div",{className:"contactImg",children:(0,Te.jsx)("img",{src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"})}),(0,Te.jsx)("p",{children:"Ready to start a project?"}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("a",{target:"_blank",href:"mailto:hashirizaki61@gmail.com",children:(0,Te.jsx)("p",{className:"contact",children:"Contact"})}),(0,Te.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/yuya-hashirizaki/",children:(0,Te.jsx)("p",{className:"contact",children:"Linkedin"})})]})]})]})}),Cf=au.div`
  margin: 0;
  max-height: 4320px;
  background-color: var(--secondary-bg);
  padding-left: 100px;
  overflow: hidden;
  overscroll-behavior: auto !important;

  @media only screen and (max-width: 960px) {
    display: none;
    padding-left: 15px;
  }
  @media only screen and (max-width: 470px) {
    padding-right: 15px;
  }

  .parallax-wrapper {
    max-width: 2560px;
    margin: 0 auto;
    height: 100vh;
    border-radius: 44px;
    overflow-x: hidden;
    perspective: 1px;
    scroll-behavior: smooth;
    overscroll-behavior: auto !important;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (max-width: 540px) {
    .parallax-wrapper {
      border-radius: 5%;
    }
  }

  .parallax-layer {
    display: flex;
    position: absolute;
    top: 0;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 460px;
    font-weight: 100;
    color: var(--fourth-txt-color);
    text-align: center;
  }

  @media only screen and (max-width: 2560px) {
    p {
      font-size: 17.969vw;
    }
  }
  @media only screen and (max-width: 1960px) {
    p {
      font-size: 18vw;
    }
  }
  @media only screen and (max-width: 960px) {
    p {
      font-size: 20vw;
    }
  }
  @media only screen and (max-width: 540px) {
    p {
      font-size: 19vw;
    }
  }
  @media only screen and (max-width: 369px) {
    p {
      font-size: 17.5vw;
    }
  }

  .parallax-layer p {
    font-family: "GT";
    font-weight: 300;
    width: 100%;
    background: rgb(254, 0, 0);
    background: -moz-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 97%,
      rgba(250, 248, 246, 0) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 97%,
      rgba(250, 248, 246, 0) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 97%,
      rgba(250, 248, 246, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe0000",endColorstr="#faf8f6",GradientType=1);
  }

  .parallax-layer {
    width: 100%;
    max-height: 2160px;
  }
  .parallax-layer.layer1 {
    z-index: 10;
    transition: all 0.6s ease-out;
  }
  .parallax-layer.layer2 {
    z-index: 20;
    transition: all 1.5s ease-out;
  }
  .parallax-layer.layer3 {
    z-index: 20;
    transition: all 3.5s ease-out;
    background: rgb(254, 0, 0);
    background: -moz-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 75%,
      rgba(250, 248, 246, 0) 85%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 75%,
      rgba(250, 248, 246, 0) 85%
    );
    background: linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 75%,
      rgba(250, 248, 246, 0) 85%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe0000",endColorstr="#faf8f6",GradientType=1);

    @media only screen and (max-width: 810px) {
      background: rgb(254, 0, 0);
      background: -moz-linear-gradient(
        180deg,
        rgba(254, 0, 0, 1) 60%,
        rgba(250, 248, 246, 0) 69%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(254, 0, 0, 1) 60%,
        rgba(250, 248, 246, 0) 69%
      );
      background: linear-gradient(
        180deg,
        rgba(254, 0, 0, 1) 60%,
        rgba(250, 248, 246, 0) 69%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe0000",endColorstr="#faf8f6",GradientType=1);
    }

    .vertical {
      display: block;
      span::after {
        content: "Amazing";
        font-family: "GT";
        font-weight: 300;
      }

      .moon {
        z-index: 30;
        border-radius: 50% 50% 0 0;
        background: rgb(250, 248, 246);
        background: linear-gradient(
          180deg,
          rgba(250, 248, 246, 1) 0%,
          rgba(251, 167, 166, 1) 10%,
          rgba(252, 108, 107, 1) 20%,
          rgba(254, 0, 0, 0) 30%
        );
        animation-name: sway;
        animation-duration: 4s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @keyframes sway {
          from {
            padding: 160px;
          }
          to {
            padding: 80px;
          }
        }
        @media only screen and (max-width: 1920px) {
          @keyframes sway {
            from {
              padding: 122px;
            }
            to {
              padding: 66px;
            }
          }
        }
        @media only screen and (max-width: 1280px) {
          @keyframes sway {
            from {
              padding: 84px;
            }
            to {
              padding: 44px;
            }
          }
        }
        @media only screen and (max-width: 960px) {
          @keyframes sway {
            from {
              padding: 74px;
            }
            to {
              padding: 24px;
            }
          }
        }
        @media only screen and (max-width: 540px) {
          @keyframes sway {
            from {
              padding: 54px;
            }
            to {
              padding: 30px;
            }
          }
        }
      }
      //Amazing//
      font-size: 460px;
      font-weight: 100;
      color: var(--fourth-txt-color);
      text-align: center;

      @media only screen and (max-width: 2560px) {
        font-size: 17.969vw;
      }
      @media only screen and (max-width: 1920px) {
        font-size: 18vw;
      }
      @media only screen and (max-width: 960px) {
        font-size: 20vw;
      }
      @media only screen and (max-width: 540px) {
        font-size: 19vw;
      }
      @media only screen and (max-width: 369px) {
        font-size: 17.5vw;
      }
    }
  }
  .parallax-layer.layer4 {
    z-index: 30;
    transition: all 3s ease-out;
  }
  .parallax-layer.layer5 {
    z-index: 30;
    transition: all 2s ease-out;
  }

  h3 {
    color: var(--fourth-txt-color);
    font-family: "GT";
    font-size: 48px;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding-bottom: 100px;

    @media screen and (max-width: 540px) {
      font-size: 32px;
    }
  }
`,Tf=au.div`
  max-width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 44px;
`,Pf=au.a`
  color: var(--primary-bg);
  font-size: 24px;
  transition: 0.3s ease;

  &:hover {
    padding: 0 0 16px 0;
  }
`,If=()=>{const e=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1),r=()=>{const t=window.scrollY,n=e.current;if(n){const e=n.offsetTop;t>=e&&console.log("Parallax element reached the top of the viewport");n.querySelectorAll(".parallax-layer").forEach(((n,i)=>{const r=(t-e)*(1*(i+1));n.style.transform=`translateY(${r}px)`})),i(t>100&&t<100)}};return(0,t.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),(0,Te.jsx)(Cf,{id:"parallaxLg",ref:e,children:(0,Te.jsxs)("div",{className:"parallax-wrapper",children:[(0,Te.jsx)("div",{className:"parallax-layer layer1 "+(n?"act":""),children:(0,Te.jsx)("p",{className:"first-copy",children:"Let's Make"})}),(0,Te.jsx)("div",{className:"parallax-layer layer2",children:(0,Te.jsx)("p",{children:"Something"})}),(0,Te.jsx)("div",{className:"parallax-layer layer3",children:(0,Te.jsx)("div",{className:"vertical",children:(0,Te.jsx)("span",{className:"moon"})})}),(0,Te.jsx)("div",{className:"parallax-layer layer4",children:(0,Te.jsx)("h3",{children:"Thank you."})}),(0,Te.jsx)("div",{className:"parallax-layer layer5",children:(0,Te.jsxs)(Tf,{children:[(0,Te.jsx)(Pf,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,Te.jsx)(Uu,{})}),(0,Te.jsx)(Pf,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,Te.jsx)(Lu,{})}),(0,Te.jsx)(Pf,{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,Te.jsx)(Fu,{})})]})})]})})},Bf=au.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: var(--secondary-bg);

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    //display: block;//
    display: none;
    padding: 0 15px;
  }
`,zf=au.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease-out; /* Add transition for smoother animation */

  p {
    font-size: 460px;
    font-weight: 100;
    color: var(--fourth-txt-color);
    text-align: center;
  }

  .closing {
    color: var(--fourth-txt-color);
    font-family: "GT";
    font-size: 48px;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 80px;

    @media screen and (max-width: 540px) {
      font-size: 32px;
    }
  }

  .moon {
    padding: 5vw;
    border-radius: 50% 50% 0 0;
    background: rgb(250, 248, 246);
    background: linear-gradient(
      180deg,
      rgba(250, 248, 246, 1) 0%,
      rgba(251, 167, 166, 1) 10%,
      rgba(252, 108, 107, 1) 20%,
      rgba(254, 0, 0, 0) 30%
    );
  }

  @media only screen and (max-width: 2560px) {
    p {
      font-size: 17.969vw;
    }
  }
  @media only screen and (max-width: 1960px) {
    p {
      font-size: 18vw;
    }
  }
  @media only screen and (max-width: 960px) {
    p {
      font-size: 20vw;
    }
  }
  @media only screen and (max-width: 540px) {
    p {
      font-size: 19vw;
    }
  }
  @media only screen and (max-width: 369px) {
    p {
      font-size: 17.5vw;
    }
  }

  .social-icons {
    max-width: 25vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 30px;
    position: fixed;
  }

  a {
    color: var(--primary-bg);
    font-size: 24px;
    transition: 0.3s ease;

    &:hover {
      padding: 0 0 16px 0;
    }
  }
`,Df=()=>{const e=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1),r=()=>{const t=window.scrollY,n=e.current;if(n){const e=n.offsetTop;n.querySelectorAll(".parallax-layer").forEach(((n,i)=>{const r=(t-e)*(.5*(i+1));n.style.transform=`translateY(${r}px)`})),i(t>100&&t<100)}};return(0,t.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),(0,Te.jsxs)(Bf,{id:"parallaxSm",ref:e,children:[(0,Te.jsx)(zf,{className:"parallax-layer layer1 "+(n?"act":""),children:(0,Te.jsx)("p",{className:"first-copy",children:"Let's Make"})}),(0,Te.jsx)(zf,{className:"parallax-layer layer2",children:(0,Te.jsx)("p",{children:"Something"})}),(0,Te.jsx)(zf,{className:"parallax-layer layer3",children:(0,Te.jsx)("p",{className:"moon",children:"Amazing"})}),(0,Te.jsx)(zf,{className:"parallax-layer layer4",children:(0,Te.jsx)("p",{className:"closing",children:"Thank you."})}),(0,Te.jsx)(zf,{className:"parallax-layer layer5",children:(0,Te.jsxs)("div",{className:"social-icons",children:[(0,Te.jsx)("a",{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,Te.jsx)(Uu,{})}),(0,Te.jsx)("a",{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,Te.jsx)(Lu,{})}),(0,Te.jsx)("a",{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,Te.jsx)(Fu,{})})]})})]})},_f=au.div`
  width: 100%;

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
`,Mf=au.div`
  width: 100%;
  z-index: 1;
`,Of=au.section`
  position: relative;
  width: 100%;
  //v1v2//
  /* height: 100h; */
  //v3//
  height: 75vh;
  background: var(--secondary-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 20vw;
    color: var(--fourth-txt-color);
    font-family: "GT";
    font-weight: 300;
    margin: 0 auto;
  }

  @media only screen and (max-width: 540px) {
    p {
      font-size: 19vw;
    }
  }
  @media only screen and (max-width: 369px) {
    p {
      font-size: 17.5vw;
    }
  }

  .sectionInner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--secondary-bg);
    clip: rect(auto, auto, auto, auto);
    z-index: 1;

    p {
      font-size: 20vw;
      color: var(--fourth-txt-color);
      font-family: "GT";
      font-weight: 300;
      margin: 0 auto;
    }

    @media only screen and (max-width: 540px) {
      p {
        font-size: 19vw;
      }
    }
    @media only screen and (max-width: 369px) {
      p {
        font-size: 17.5vw;
      }
    }
  }

  .ParallaxBg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;

    .txtCenter {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }

    .vertical {
      display: block;
    }
  }

  .LayerFrameTop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 50vh;
    margin-top: 50vh;
    border-bottom: solid 6px #fe0000;
  }

  /* .LayerFrameBottm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 0;
    margin-top: 50vh;
    background: rgba(255, 255, 255, 0.8);
  } */

  span {
    padding: 5vw 50vw;
    margin-bottom: 20vw;
    border-radius: 50% 50% 0 0;
    background: rgb(250, 248, 246);
    background: linear-gradient(
      180deg,
      rgba(250, 248, 246, 1) 0%,
      rgba(251, 167, 166, 1) 10%,
      rgba(252, 108, 107, 1) 20%,
      rgba(254, 0, 0, 0) 30%
    );
  }

  .moon {
    padding-bottom: 4.167vw;
    margin-bottom: 4.167vw;
    /* animation-name: sway;
    animation-duration: 4s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes sway {
      from {
        padding-bottom: 4.167vw;
      }
      to {
        padding-bottom: 7.161vw;
      }
    } */
  }
`,Nf=()=>(0,Te.jsx)(_f,{children:(0,Te.jsx)(Mf,{children:(0,Te.jsx)(Of,{children:(0,Te.jsxs)("div",{className:"txtCenter",children:[(0,Te.jsx)(Jh,{children:(0,Te.jsx)("p",{children:"Let's Make"})}),(0,Te.jsx)(qh,{children:(0,Te.jsx)("p",{children:"Someting"})}),(0,Te.jsx)(Jh,{children:(0,Te.jsx)("p",{className:"moon",children:"Amazing"})}),(0,Te.jsx)(Vh,{children:(0,Te.jsx)("span",{})})]})})})}),Rf=au.footer`
  background-color: var(--secondary-bg);

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    display: block;
  }
`,Lf=au.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 960px) {
    max-width: 600px;
  }
`,Ff=au.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding: 13% 0 3% 0;

  .bottom {
    color: var(--secondary-txt-color);
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1.4px;
    margin-right: auto;
    margin-bottom: 7%;
    margin-top: 2%;

    .link {
      text-decoration: none;
      color: #0069da;
    }

    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
      transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
  }
`,Uf=au.h1`
  color: var(--fourth-txt-color);
  font-family: "GT";
  font-size: 48px;
  font-weight: 500;
  margin-right: auto;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 520px) {
    font-size: 32px;
  }
`,Vf=au.section`
  max-width: 1000px;
  margin-bottom: 30px;
  width: 100%;
`,Yf=au.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 5px auto 0 auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,Qf=(au(ke)`
  display: flex;
  margin-bottom: 20px;
  font-family: "GT";
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 1px;
  color: var(--fourth-txt-color);
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
`,au.small`
  color: var(--fourth-txt-color);
  justify-content: start;
  margin-bottom: 16px;
`,au.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: auto;
    max-width: 240px;
    margin-top: 24px;
  }
`),Wf=au.a`
  color: var(--primary-bg);
  font-size: 24px;
  transition: 0.3s ease;

  &:hover {
    padding-bottom: 16px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 6vw;

    &:first-child {
      padding-left: 0;
    }
  }
`,Hf=()=>(0,Te.jsx)("div",{children:(0,Te.jsx)(Rf,{id:"footer",children:(0,Te.jsxs)(Lf,{children:[(0,Te.jsx)(Ff,{children:(0,Te.jsx)(Uf,{children:"Thank you."})}),(0,Te.jsx)(Vf,{children:(0,Te.jsx)(Yf,{children:(0,Te.jsxs)(Qf,{children:[(0,Te.jsx)(Wf,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:(0,Te.jsx)(Fu,{})}),(0,Te.jsx)(Wf,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"Instagram",children:(0,Te.jsx)(Lu,{})}),(0,Te.jsx)(Wf,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,Te.jsx)(Uu,{})})]})})})]})})}),Gf=()=>{const[e,n]=(0,t.useState)(!1),[i,r]=(0,t.useState)(!1),[a,s]=(0,t.useState)(!1),o=()=>{n(!e)};return(0,t.useEffect)((()=>{const e=()=>{const e=document.getElementById("home");if(e){e.getBoundingClientRect().bottom<=0?(r(!0),s(!0)):s(!1)}else console.warn("Element with ID 'home' not found.")};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)(Vu,{isOpen:e,toggle:o,..._p}),(0,Te.jsx)("div",{id:"home",children:(0,Te.jsx)(uu,{})}),i&&(0,Te.jsx)(ah,{toggle:o,animateNavbar:a}),(0,Te.jsx)(Tp,{}),(0,Te.jsx)(Dp,{}),(0,Te.jsxs)("div",{name:"caseStudy",children:[(0,Te.jsx)(sf,{}),(0,Te.jsx)(tf,{...of}),(0,Te.jsx)(tf,{...lf}),(0,Te.jsx)(tf,{...cf}),(0,Te.jsx)(tf,{...df})]}),(0,Te.jsxs)("div",{name:"works",children:[(0,Te.jsx)(bf,{...uf}),(0,Te.jsx)(bf,{...hf}),(0,Te.jsx)(bf,{...pf})]}),(0,Te.jsx)(bf,{...ff}),(0,Te.jsxs)("div",{name:"contact",children:[(0,Te.jsx)(Ef,{}),(0,Te.jsx)(Df,{}),(0,Te.jsx)(Nf,{}),(0,Te.jsx)(If,{})]}),(0,Te.jsx)(Hf,{})]})};function $f(){const{pathname:e}=q();return(0,t.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}const Xf=e=>{let{targetPath:n}=e;const[i,r]=(0,t.useState)(!1),a=Z();(0,t.useEffect)((()=>{const e=()=>{r(window.scrollY>1600)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return(0,Te.jsx)("div",{className:"cta-container "+(i?"visible":"unvisible"),children:(0,Te.jsx)("button",{className:"cta-button",onClick:()=>{if("true"===localStorage.getItem("authenticated"))return void a(n);const e=prompt("Please enter password");e&&("uxyuya"===e.trim()?(localStorage.setItem("authenticated","true"),a(n)):alert("Incorrect password"))},children:"Password"})})},Kf=au.div`
  width: 100%;
  max-width: 2560px;
  margin: 0 auto;
  padding: 44px 36px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  transform: ${e=>e.hideNav?"translateY(-100%)":"translateY(0)"};

  @media only screen and (max-width: 960px) {
    padding: 24px 34px;
  }
`,qf=au.div`
  // Changed from Link to div
  text-decoration: none;
  cursor: pointer; // Added cursor pointer
`,Jf=au.h4`
  color: var(--primary-txt-color);
  font-family: "GT";
  font-weight: 500;
  font-size: 1.5rem;

  @media only screen and (max-width: 960px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 360px) {
    font-size: 5.333vw;
  }
`,Zf=au.button`
  max-width: 200px;
  margin-left: auto;
  border-radius: 50px;
  border: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  white-space: nowrap;
  padding: 10px 25px;
  color: var(--primary-txt-color);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);

  &:hover {
    background-color: var(--secondary-bg);
    color: var(--primary-bg);
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
    padding: 6px 20px;
  }
`,em=()=>{const[e,n]=(0,t.useState)(!1),[i,r]=(0,t.useState)(0),a=Z(),s=()=>{window.scrollY>i&&window.scrollY>=100?n(!0):n(!1),r(window.scrollY)};(0,t.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[i]);return(0,Te.jsxs)(Kf,{hideNav:e,children:[(0,Te.jsx)(qf,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,Te.jsx)(Jf,{children:"Yuya Hashirizaki"})}),(0,Te.jsx)(Zf,{onClick:()=>{a(-1)},children:"Back"})]})},tm=au.div`
  background: var(--primary-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.1;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }

  h2 {
    color: var(--primary-txt-color);
    font-weight: 600;
    font-size: 4rem;
    line-height: 1.25;

    @media only screen and (max-width: 1920px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 540px) {
      font-size: 7.45vw;
    }
  }

  h3 {
    color: var(--primary-txt-color);
    font-weight: 100;
    font-size: 3rem;
    line-height: 1.3;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }

  p {
    color: var(--primary-txt-color);
    font-weight: 100;
    font-size: 3rem;
    line-height: 1.2;

    @media only screen and (max-width: 1920px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 540px) {
      font-size: 4.44vw;
    }
  }
`,nm=au.div`
  max-width: 2560px;
  margin: 0 30px 0 30px;
  overflow: hidden;

  /* @media only screen and (max-width: 960px) {
    margin: 0 15px 0 15px;
  } */
`,im=au.div`
  padding: 110px 0;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,rm=au.div`
  padding: 110px 0;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding: 0 0 11.5vw 0;
  }
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,am=au.div`
  display: flex;
  flex-wrap: wrap;
`,sm=au.div`
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`,om=au.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`,lm=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,cm=au.div`
  max-width: 1400px;

  div {
    /* margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    } */
  }
`,dm=au.div`
  display: flex;
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  &:first-child {
    margin-top: 34px;
  }

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
  }
`,um=au.div`
  padding: 34px;

  .feedback {
    margin-bottom: 60px;

    @media only screen and (max-width: 540px) {
      margin-bottom: 34px;
    }
  }

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  p {
    margin-top: 44px;
    &:first-child {
      margin-top: 60px;
    }

    @media only screen and (max-width: 1920px) {
      margin-top: 34px;
      &:first-child {
        margin-top: 44px;
      }
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
      &:first-child {
        margin-top: 34px;
      }
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
      &:first-child {
        margin-top: 5vw;
      }
    }
  }
`,hm=au.div`
  padding: 34px;

  @media only screen and (max-width: 1024px) {
    padding: 34px 34px 0 34px;
  }

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  p {
    margin-top: 44px;
    &:first-child {
      margin-top: 60px;
    }

    @media only screen and (max-width: 1920px) {
      margin-top: 34px;
      &:first-child {
        margin-top: 44px;
      }
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
      &:first-child {
        margin-top: 34px;
      }
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
      &:first-child {
        margin-top: 5vw;
      }
    }
  }
`,pm=au.div`
  max-width: 1140px;
  padding: 34px;
  margin: auto;

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  p {
    margin-top: 44px;
    &:first-child {
      margin-top: 0;
    }

    @media only screen and (max-width: 1920px) {
      margin-top: 34px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
    }
  }
`,fm=au.div`
  padding: 34px;

  @media only screen and (max-width: 1024px) {
    padding: 0 34px 34px 34px;
  }

  @media only screen and (max-width: 540px) {
    padding: 0 6.3vw 0 6.3vw;
  }

  p {
    margin-top: 44px;
    &:first-child {
      margin-top: 60px;
    }

    @media only screen and (max-width: 1920px) {
      margin-top: 34px;
      &:first-child {
        margin-top: 44px;
      }
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
      &:first-child {
        margin-top: 24px !important;
      }
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
      &:first-child {
        margin-top: 5.5vw;
      }
    }
  }
`,mm=au.div`
  padding: 34px;

  @media only screen and (max-width: 1920px) {
    max-width: 860px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 960px) {
    max-width: 540px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  p {
    margin-top: 44px;
    &:first-child {
      margin-top: 60px;
    }

    @media only screen and (max-width: 1920px) {
      margin-top: 34px;
      &:first-child {
        margin-top: 44px;
      }
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
      &:first-child {
        margin-top: 34px;
      }
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
      &:first-child {
        margin-top: 5vw;
      }
    }
  }
`,gm=au.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: auto;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
  }
`,xm=au.div`
  width: 100%;
  padding: 34px;

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  h2 {
    font-size: 44px;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1920px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 540px) {
      font-size: 6.3vw;
    }
  }

  p {
    font-size: 34px;
    margin-top: 34px;

    @media only screen and (max-width: 1920px) {
      font-size: 1.5rem;
      margin-top: 24px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 1.35rem;
      margin-top: 16px;
    }
    @media only screen and (max-width: 540px) {
      font-size: 4vw;
      margin-top: 5vw;
    }
  }
`,vm=au.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: auto;
  padding: 0 6px;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    padding: 0.88vw 0;
  }
`,ym=au.div`
  margin: 100px 0 60px 0;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 960px) {
    margin-top: 70px;
  }
  @media only screen and (max-width: 540px) {
    margin-bottom: 16px;
  }
`,wm=au.div`
  display: flex;
  flex-wrap: wrap;
`,bm=au.div`
  max-width: 1756px;
`,jm=au.div`
  // md sm center //
  width: 100%;

  // lg left //
  &:first-child {
    @media (min-width: 1024px) {
      width: calc(100% - 290px);
      padding-right: 24px;
    }
  }
  // lg right //
  &:last-child {
    @media (min-width: 1024px) {
      width: 290px;
    }
  }
`,Am=au.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 34px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 960px) {
    margin-bottom: 6px;
  }
`,Sm=au.div`
  width: fit-content;
  border-radius: 50px;
  background-color: var(--secondary-bg);
  margin: 0 16px 9px 0;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--primary-bg);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }

  @media only screen and (max-width: 540px) {
    margin: 0 9px 6px 0;
    padding: 4px 10px;

    p {
      font-size: 12px;
    }
  }
`,km=au.div`
  p {
    color: var(--primary-txt-color);
    font-size: 18px;
    font-weight: 700;

    @media only screen and (max-width: 960px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 540px) {
      font-size: 2.9vw;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 34px;
    width: fit-content;
    margin-left: auto;
  }
  @media only screen and (max-width: 540px) {
    padding-bottom: 7.4vw;
  }
`,Em=au.p`
  margin-bottom: 24px;

  @media only screen and (max-width: 540px) {
    margin-bottom: 12px;
  }
`,Cm=au.p`
  margin-bottom: 6px;

  @media only screen and (max-width: 540px) {
    margin-bottom: 3px;
  }
`,Tm=au.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  margin-bottom: auto;

  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 540px) {
    border: solid 1px var(--secondary-bg);
    border-radius: 6px;
  }
`,Pm=au.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  margin-bottom: auto;

  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 767px) {
    min-height: 270px;
    object-fit: cover;
  }
  @media only screen and (max-width: 540px) {
    border: solid 1px var(--secondary-bg);
    border-radius: 6px;
  }
`,Im=au.img`
  max-width: 80%;
  margin-top: 34px;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    max-width: 40%;
  }
  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 540px) {
    max-width: 60%;
    border: solid 1px var(--secondary-bg);
    border-radius: 10px;
  }
`,Bm=au.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 50%;

  @media only screen and (max-width: 540px) {
    border: solid 1px var(--secondary-bg);
  }
`,zm=au.img`
  width: clamp(45px, 20%, 130px);
  margin-bottom: 1.45vw;
  border-radius: 50%;
  border: solid 2px var(--secondary-bg);

  @media only screen and (max-width: 540px) {
    border: solid 1px var(--secondary-bg);
  }
`,Dm=au.img`
  width: 100%;
  border-radius: 50%;
`,_m=au.div`
  margin-bottom: 30px;
  padding-top: 110px;

  @media only screen and (max-width: 960px) {
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 14.8vw;
  }
`,Mm=au.video`
  max-width: 960px;
  display: block;
  line-height: 100%;
  width: 100%;
  object-fit: fit;
  /* border: solid 2px var(--secondary-bg);
  border-radius: 15px; */

  @media only screen and (max-width: 1024px) {
    max-height: 800px;
  }
`,Om=au.video`
  display: block;
  line-height: 100%;
  width: 100%;
  object-fit: fit;
  /* border: solid 2px var(--secondary-bg);
  border-radius: 15px; */

  @media only screen and (max-width: 1024px) {
    max-height: 300px;
    padding-top: 3rem;
  }
`,Nm=au.div`
  max-width: 1400px;
  margin: auto;

  p {
    color: var(--secondary-txt-color);
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.2;
    margin-top: 0px;
    text-align: center;
    padding: 16px 0 84px 0;

    @media only screen and (max-width: 540px) {
      padding: 6px 0 6.3vw 0;
      font-size: 2.96vw;
    }
  }

  .lastCaption {
    padding-bottom: 0;
  }
`,Rm=au.div`
  filter: blur(1.5rem);
  padding: 5%;
`,Lm=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Fm=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,Um=au.div`
  width: 50%;

  p {
    &:first-child {
      margin-top: 0px;
      color: var(--secondary-txt-color);
      font-weight: 600;

      @media (max-width: 540px) {
        margin-top: 16px;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`,Vm=(au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,au.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`,au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,au.div`
  display: flex;
  flex-wrap: wrap;

  .box {
    display: flex;
    justify-content: center;
    vertical-align: auto;

    // md sm center //
    width: 100%;

    // lg //
    @media (min-width: 1024px) {
      width: 50%;
    }
  }
  .empathy-border {
    padding: 24px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 1024px) {
      border: solid 1px var(--secondary-bg);
    }
    @media only screen and (max-width: 960px) {
      border-radius: 10px;
    }
    @media only screen and (max-width: 540px) {
      /* border: solid 0.5px var(--secondary-bg); */
      border-radius: 6px;
    }

    p {
      margin-top: 16px;
      padding-left: 0.7em;
      text-indent: -0.7em;

      &:first-child {
        margin-top: 0;
        color: var(--secondary-txt-color);
        font-weight: 600;
      }
    }
  }
`,au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }

  .analysis-lists {
    padding-left: 0.7em;
    text-indent: -0.7em;

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,au.div`
  display: flex;
  padding: 0 5%;
  margin-top: 44px;

  @media only screen and (max-width: 1920px) {
    margin-top: 34px;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 24px;
  }
  @media only screen and (max-width: 540px) {
    margin-top: 5.5vw;
  }

  .image {
    width: 17%;
    margin-right: auto;

    &:last-child {
      margin-right: 0px;
    }
  }
`,au.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`),Ym=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Qm=(au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,au.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,n.p+"static/media/case1_hero.8b83a9ddc909a05c7968.png"),Wm=n.p+"static/media/case1_closing.3cc4aed0b930417c30de.png",Hm=n.p+"static/media/case1_research.13cff8e14347a2c9cdb3.png",Gm=()=>(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(pl.div,{animate:{x:0,opacity:1},initial:{x:-700,opacity:0},exit:{x:700,opacity:0},transition:{duration:.5},children:(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:Qm,id:""})})}),(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Data - Analysis"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Information Architecture"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Brand Development"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"I\u2019ve been dedicated to problem-solving for RMDY, which comprises two brands Riversol Skin Care Solutions and Midnight Paloma."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,Te.jsx)(Lm,{children:(0,Te.jsxs)(Fm,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Riversol was established by board-certified dermatologist Dr. Jason Rivers, following over 20 years of clinical dermatology experience, to provide a safe skincare solution."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"This specializes in providing anti-aging solutions for individuals with sensitive skin and is committed to assisting anyone with skin-related concerns through its product offerings."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"The company\u2019s primary method for expanding its business has been a commitment to providing free products to individuals who may potentially become our customers through our free sample program. This initiative is aimed at introducing dependable, high-quality products and showcasing the value of the company to those in need of support."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"My assigned responsibility involves enhancing the quality of the website and all digital platforms associated with the free sample program to contribute to the company\u2019s overall profitability."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"To start, I\u2019ve strived to identify essential factors for enhancing the performance of our website and all digital platforms while fostering seamless communication within the team."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"It has been challenging to maintain a consistent UI, as it often requires a significant amount of time to establish and implement rules. Additionally, we have yet to define clear goals for guiding our teams toward our primary objectives."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Thoroughly clarifying every aspect, I created a robust foundational design system, integrating comprehensive UI/UX principles."})})]})}),(0,Te.jsxs)(Rm,{children:[(0,Te.jsx)(Vm,{children:(0,Te.jsx)(Ym,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"If I were given just one hour to address a problem, I'd invest as much as two-thirds of that time in thoroughly understanding and defining the problem."})})})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Hm,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"User Research"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"In our pursuit of designing user-centric experiences, I prioritize User Research, which involves delving into user behaviors, uncovering their needs, and analyzing their motivations through various observations, task analysis, and valuable feedback methodologies."}),(0,Te.jsx)("p",{children:"Our collaboration with SplitBase has enabled us to conduct a comprehensive survey, and in our qualitative analysis phase, we engaged in insightful interviews with numerous consumers who have made purchases of our products."})]})]})})]}),(0,Te.jsx)(Um,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Insights:"}),(0,Te.jsx)("p",{children:"The survey proved invaluable in gaining a profound understanding of our users, pinpointing their primary pain points and aspirations. It allowed me to quantify the proportion of users exhibiting genuine interest in our products."}),(0,Te.jsx)("p",{children:"Analyzing the daily skincare challenges faced by these users served as a wellspring of inspiration, propelling me to ideate and devise optimal design solutions."})]})})})]})]}),(0,Te.jsx)(Xf,{targetPath:"/visible/Article_Case1"})]}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:Wm,id:""})})]})]}),$m=au.footer`
  background-color: var(--secondary-bg);

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    display: block;
  }
`,Xm=au.footer`
  background-color: var(--secondary-bg);

  @media only screen and (max-width: 960px) {
    display: none;
  }
`,Km=au.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 960px) {
    max-width: 600px;
  }
`,qm=au.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding: 13% 0 3% 0;

  .bottom {
    color: var(--secondary-txt-color);
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1.4px;
    margin-right: auto;
    margin-bottom: 7%;
    margin-top: 2%;

    .link {
      text-decoration: none;
      color: #0069da;
    }

    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
      transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
  }
`,Jm=au.h1`
  color: var(--fourth-txt-color);
  font-family: "GT";
  font-size: 48px;
  font-weight: 500;
  margin-right: auto;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 520px) {
    font-size: 32px;
  }
`,Zm=au.section`
  max-width: 1000px;
  margin-bottom: 30px;
  width: 100%;
`,eg=au.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 5px auto 0 auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,tg=au(ke)`
  display: flex;
  margin-bottom: 20px;
  font-family: "GT";
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 1px;
  color: var(--fourth-txt-color);
  text-shadow: 1px 1px 10px var(--index-bg);
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
`,ng=(au.small`
  color: var(--fourth-txt-color);
  justify-content: start;
  margin-bottom: 16px;
`,au.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: auto;
    max-width: 240px;
    margin-top: 24px;
  }
`),ig=au.a`
  color: var(--primary-bg);
  font-size: 24px;
  transition: 0.3s ease;

  &:hover {
    padding-bottom: 16px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 6vw;

    &:first-child {
      padding-left: 0;
    }
  }
`,rg=()=>{const e=()=>{hu.Nk.scrollToTop()};return(0,Te.jsxs)("div",{children:[(0,Te.jsx)($m,{id:"footer",children:(0,Te.jsxs)(Km,{children:[(0,Te.jsx)(qm,{children:(0,Te.jsx)(Jm,{children:"Thank you."})}),(0,Te.jsx)(Zm,{children:(0,Te.jsxs)(eg,{children:[(0,Te.jsx)(tg,{to:"/",onClick:e,children:"Yuya Hashirizaki"}),(0,Te.jsxs)(ng,{children:[(0,Te.jsx)(ig,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:(0,Te.jsx)(Fu,{})}),(0,Te.jsx)(ig,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"Instagram",children:(0,Te.jsx)(Lu,{})}),(0,Te.jsx)(ig,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,Te.jsx)(Uu,{})})]})]})})]})}),(0,Te.jsx)(Xm,{id:"footer",children:(0,Te.jsxs)(Km,{children:[(0,Te.jsx)(qm,{children:(0,Te.jsx)(Jm,{children:"Thank you."})}),(0,Te.jsx)(Zm,{children:(0,Te.jsxs)(eg,{children:[(0,Te.jsx)(tg,{to:"/",onClick:e,children:"Yuya Hashirizaki"}),(0,Te.jsxs)(ng,{children:[(0,Te.jsx)(ig,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:(0,Te.jsx)(Fu,{})}),(0,Te.jsx)(ig,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"Instagram",children:(0,Te.jsx)(Lu,{})}),(0,Te.jsx)(ig,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,Te.jsx)(Uu,{})})]})]})})]})})]})},ag=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(Gm,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),sg=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,og=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,lg=(au.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--primary-txt-color);
    font-weight: 600;

    @media (max-width: 540px) {
      margin-top: 16px;
    }
  }

  p {
    &:first-child {
      margin-top: 0px;
      /* 
      @media (max-width: 540px) {
        margin-top: 16px;
      } */
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`,au.div`
  display: flex;
  flex-wrap: wrap;

  .box {
    display: flex;
    justify-content: center;
    vertical-align: auto;

    // md sm center //
    width: 100%;

    // lg //
    @media (min-width: 1024px) {
      width: 50%;
    }
  }
  .box-border {
    padding: 24px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 1024px) {
      border: solid 1px var(--secondary-bg);
    }
    @media only screen and (max-width: 960px) {
      border-radius: 10px;
    }
    @media only screen and (max-width: 540px) {
      /* border: solid 0.5px var(--secondary-bg); */
      border-radius: 6px;
    }

    p {
      margin-top: 16px;
      padding-left: 0.7em;
      text-indent: -0.7em;

      &:first-child {
        margin-top: 0;
        color: var(--primary-txt-color);
        font-weight: 600;
      }
    }
  }
`),cg=au.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,dg=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,ug=au.div`
  max-width: 1400px;
  padding: 44px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding: 34px 0 11.5vw 0;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 6px;
  }

  .caption {
    color: var(--primary-txt-color);
    font-weight: 600;
  }

  .list {
    padding-left: 2.2em;
    text-indent: -2.2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 1024px) {
      padding-left: 1.2em;
      text-indent: -1.2em;
      @media only screen and (max-width: 540px) {
        padding-left: 1em;
        text-indent: -1em;
      }
      @media only screen and (max-width: 400px) {
        padding-left: 0.8em;
        text-indent: -0.8em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.75em;
        text-indent: -0.75em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.6em;
        text-indent: -0.6em;
      }
    }

    p:first-child {
      margin-top: 0.5em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,hg=(au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,au.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,n.p+"static/media/case2_hero.f9059d81935e239562aa.png"),pg=n.p+"static/media/case2_filter_initial.47abc3cebb75653fb7a7.png",fg=n.p+"static/media/case2_closing.888626fd3d1e90efbea2.png",mg=()=>(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(pl.div,{animate:{x:0,opacity:1},initial:{x:-700,opacity:0},exit:{x:700,opacity:0},transition:{duration:.5},children:(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:hg,id:""})})}),(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Motion Prototype"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Information Architecture"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Brand Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Vector - illustration"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Logo Design"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"Challenges are persistent, and recurring issues have been a concern. I've been dedicated to proactively addressing these factors."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,Te.jsx)(sg,{children:(0,Te.jsxs)(og,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"The website faced several issues during my early stages of work."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"I came to understand that website maintenance is more than just enhancing product appeal based on my experience."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"When encountering an issue, I make a conscious effort to delve deeper beyond the apparent factors, resulting in a robust solution that can be implemented permanently."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"I applied these concepts to tackle challenges. The crucial element is to thoroughly examine the interrelated factors, and understand their origins and connections."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"It was necessary to approach challenges with flexibility, providing solutions that could offer long-lasting support as needed."})})]})}),(0,Te.jsxs)(Rm,{children:[(0,Te.jsx)(cg,{children:(0,Te.jsx)(dg,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Designing Filters for Improved User Experience"})})})}),(0,Te.jsxs)(ug,{children:[(0,Te.jsxs)(um,{children:[(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Filter"}),(0,Te.jsx)("p",{children:"We\u2019ve identified areas for improvement, and our research and analysis highlight the potential contribution of filters to this enhancement."}),(0,Te.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Preventing time-consuming and frustrating experiences"}),(0,Te.jsx)("p",{children:"\u2022 Contribute to intuitive user searches"}),(0,Te.jsx)("p",{children:"\u2022 The design aids users in product search, even when they don\u2019t have a specific name in mind"}),(0,Te.jsx)("p",{children:"\u2022 Prioritizing clarity and simplicity for added value"}),(0,Te.jsx)("p",{children:"\u2022 Reducing excessive back-and-forth processes"})]})]}),(0,Te.jsx)("p",{children:"My past experience with filter projects reminded me I have encountered a lot of challenges that I never considered possible to be complicated so I decided to organize a meeting as a brainstorm to narrow down requirements before moving on to actual and We could decide on minimum conditions. We ended up deciding on four categories as prerequisites for creating the filter."})]}),(0,Te.jsxs)(lg,{children:[(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Filter\u2019s position:"}),(0,Te.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Applied filters:"}),(0,Te.jsx)("p",{children:"\u2022 Dropdown Menus and horizontal scrolling"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Specific criteria:"}),(0,Te.jsx)("p",{children:"\u2022 Creating distinction with differing Sizes"}),(0,Te.jsx)("p",{children:"\u2022 Assigning unique colors to each"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Selection Interaction:"}),(0,Te.jsx)("p",{children:"\u2022 Incorporate animation after select"}),(0,Te.jsx)("p",{children:"\u2022 Stay on the top tier as a conditional component"})]})})})]})]}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:pg,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Designing at the Initial Stage"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Initially, following our agreed-upon direction, I began creating a design standard for a Tip. This project introduced rounded corner designs, which were to be applied universally."}),(0,Te.jsx)("p",{children:"In Phase 2, the primary emphasis was on presenting the applied filters. While crafting them, I faced challenges in designing the product card UI due to space constraints. As a result, the initial prototype posed challenges in delivering a seamless user experience for applied filters."})]})]})})]})})]}),(0,Te.jsx)(Xf,{targetPath:"/visible/Article_Case2"})]}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:fg,id:""})})]})]}),gg=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(mg,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),xg=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,vg=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,yg=(au.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--primary-txt-color);
    font-weight: 600;

    @media (max-width: 540px) {
      margin-top: 16px;
    }
  }

  p {
    &:first-child {
      margin-top: 0px;
      /* 
      @media (max-width: 540px) {
        margin-top: 16px;
      } */
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`,au.div`
  display: flex;
  flex-wrap: wrap;

  .box {
    display: flex;
    justify-content: center;
    vertical-align: auto;

    // md sm center //
    width: 100%;

    // lg //
    @media (min-width: 1024px) {
      width: 50%;
    }
  }
  .box-border {
    padding: 24px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    p {
      margin-top: 16px;
      padding-left: 0.7em;
      text-indent: -0.7em;

      &:first-child {
        margin-top: 0;
        color: var(--primary-txt-color);
        font-weight: 600;
      }
    }
  }
`,au.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`),wg=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,bg=au.div`
  max-width: 1400px;
  padding: 44px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding: 34px 0 11.5vw 0;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 6px;
  }

  .caption {
    color: var(--primary-txt-color);
    font-weight: 600;
  }

  .caption-inner {
    color: var(--primary-txt-color);
    font-weight: 500;
  }

  .list {
    padding-left: 2.2em;
    text-indent: -2.2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 1024px) {
      padding-left: 1.2em;
      text-indent: -1.2em;
      @media only screen and (max-width: 540px) {
        padding-left: 1em;
        text-indent: -1em;
      }
      @media only screen and (max-width: 400px) {
        padding-left: 0.8em;
        text-indent: -0.8em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.75em;
        text-indent: -0.75em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.6em;
        text-indent: -0.6em;
      }
    }

    p:first-child {
      margin-top: 0.5em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,jg=(au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,au.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,n.p+"static/media/case3_hero.00a99996bb1be30c37de.png"),Ag=n.p+"static/media/case3_closing.f63e97eeb9dfb4ac11e6.png",Sg=()=>(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(pl.div,{animate:{x:0,opacity:1},initial:{x:-700,opacity:0},exit:{x:700,opacity:0},transition:{duration:.5},children:(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:jg,id:""})})}),(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Data - Analysis"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"Supporting the continuous analysis and improvement of comprehensive products is a crucial process for driving company profitability. My role is dedicated to this endeavor."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,Te.jsx)(xg,{children:(0,Te.jsxs)(vg,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"People understand that the success of web products doesn't conclude upon their initial launch."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"What carries you for a strategy towards goals will require you to keep your eyes open to find out the pain points that users are feeling uncomfortable using and being unclear for enhancing appeal."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Strategizing for your goals involves a keen focus on identifying and addressing user discomfort and uncertainties, all aimed at improving the product's appeal."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"From that perspective, it signifies the initiation of a new project phase following the product launch."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Iterative testing is a prevalent method to improve product value, but it necessitates understanding the root causes behind user demands."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Identifying the crucial factors that end users require is a challenging task; nevertheless, I've used various tools and applications to clarify these points."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"This is a very exciting process, moving us closer to elevating the product to the next level."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"While users often associate aesthetically pleasing design with enhanced usability, it's important to recognize that real-world outcomes aren't solely determined by the Aesthetic-Usability Effect."})})]})}),(0,Te.jsxs)(Rm,{children:[(0,Te.jsx)(yg,{children:(0,Te.jsx)(wg,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Optimizing Conversion Acquisition that A User-Centric KPI Strategy for Seamless Product Navigation and Profitability"})})})}),(0,Te.jsx)(im,{children:(0,Te.jsx)(bg,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"My strategy of KPI"}),(0,Te.jsx)("p",{children:"The KPI strategy I\u2019ve dedicated to revolves around optimizing conversion acquisition, ensuring every step aligns with user-centric design principles, and employing a systematic approach to refine and enhance the overall user experience."}),(0,Te.jsx)("p",{className:"caption",children:"Revitalizing User Engagement and Conversion Acquisition: Key Responsibilities of the Project"}),(0,Te.jsx)("p",{style:{color:"#010606"},children:"Primary priorities of KPI"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Organic traffic"}),(0,Te.jsx)("p",{children:"\u2022 Pages per session"}),(0,Te.jsx)("p",{children:"\u2022 Click rate"}),(0,Te.jsx)("p",{children:"\u2022 Cart abandonment rate"}),(0,Te.jsx)("p",{children:"\u2022 Bounce rate"}),(0,Te.jsx)("p",{children:"\u2022 Promotion page conversion rates"}),(0,Te.jsx)("p",{children:"\u2022 Product pages conversion rates"}),(0,Te.jsx)("p",{children:"\u2022 Landing Page Samples conversion rate"})]}),(0,Te.jsxs)("p",{style:{color:"#010606"},children:["Secondary priorities of KPI"," "]}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Customer Acquisition Cost"}),(0,Te.jsx)("p",{children:"\u2022 Customer Lifetime Value"}),(0,Te.jsx)("p",{children:"\u2022 Marketing Return on Investment"}),(0,Te.jsx)("p",{children:"\u2022 Churn Rate"}),(0,Te.jsx)("p",{children:"\u2022 Full Product"})]}),(0,Te.jsx)("p",{children:"This involves iterative design practices, incorporating pricing psychology, and utilizing A/B testing for continuous improvement. The goal is to maximize engagement, support profitability, and provide a seamless, intuitive experience for users navigating the products and making purchase decisions."}),(0,Te.jsx)("p",{children:"Frequently, exercising patience is crucial to achieving meaningful contributions. The secure and experiential process not only forms the foundation for results but also brings expansive joy to my work through the satisfaction of accomplishments."})]})})})})]}),(0,Te.jsx)(Xf,{targetPath:"/visible/Article_Case3"})]}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:Ag,id:""})})]})]}),kg=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(Sg,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),Eg=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Cg=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,Tg=au.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Pg=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Ig=au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }

  .insights-lists {
    padding-left: 2em;
    text-indent: -2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 960px) {
      padding-left: 0.9em;
      text-indent: -0.9em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,Bg=n.p+"static/media/caseMp_hero.7669da0629fb52cfcf9d.png",zg=n.p+"static/media/caseMp_closing.6a04b2dac72e7bba15ef.png",Dg=()=>(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(pl.div,{animate:{x:0,opacity:1},initial:{x:-700,opacity:0},exit:{x:700,opacity:0},transition:{duration:.5},children:(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:Bg,id:""})})}),(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Brand Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Vector - illustration"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"It was crucial to improve the website's usability, which had previously missed out on significant potential, within a limited timeframe."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Taylor Rogers"})})]})})]}),(0,Te.jsx)(Eg,{children:(0,Te.jsxs)(Cg,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Midnight Paloma is committed to the concept of clean beauty, using all-natural ingredients to craft signature formulas that align with eco-conscious living."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Founder Tayler Rogers, drawing from 12 years of retail experience, has carefully curated and developed Midnight Paloma into a brand that embodies modern design, clean ingredients, and self-care rituals, including the use of skin tools."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"We have devoted ourselves to maintaining the stunning appeal of our brands. However, our primary source of profit has traditionally been through retail, with less focus on our e-commerce platform."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Nonetheless, we've come to recognize the significant untapped potential that Midnight Paloma holds in the online market."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"My responsibility was to completely overhaul the website within a tight timeframe."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"My team had well-defined ideas and inspiration in place, allowing me to dedicate my efforts to shaping these ideas into tangible creations."})})]})}),(0,Te.jsxs)(Rm,{children:[(0,Te.jsx)(Tg,{children:(0,Te.jsx)(Pg,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"I believe that aligning everyone\u2019s perspective on the design would saves time across all projects."})})})}),(0,Te.jsx)(Ig,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"insights:"}),(0,Te.jsx)("p",{children:"As we conducted our analysis, we uncovered multiple factors for enhancing usability in both the User Interface and User Experience."}),(0,Te.jsxs)("div",{className:"insights-lists",children:[(0,Te.jsx)("p",{children:"\u2022 clutter UI"}),(0,Te.jsx)("p",{children:"\u2022 difficulty in locating the products users needed"}),(0,Te.jsx)("p",{children:"\u2022 the interface lacks alignment with the brand\u2019s customer demographic"}),(0,Te.jsx)("p",{children:"\u2022 the design does not give priority to aligning with brand directions and customer expectations"}),(0,Te.jsx)("p",{children:"\u2022 updating for promotional purposes takes an excessive amount of time"})]})]})})})]}),(0,Te.jsx)(Xf,{targetPath:"/visible/Article_Case4"})]}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:zg,id:""})})]})]}),_g=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(Dg,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),Mg=au.img`
  max-width: 50%;
  margin: auto;
  padding: 5rem 0;
  display: block;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    padding: 8vw 0;
  }
`,Og=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Ng=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,Rg=au.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,Lg=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Fg=au.div`
  max-width: 1400px;
  padding: 44px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding: 34px 0 11.5vw 0;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 6px;
  }

  h2 {
    color: var(--primary-txt-color);
  }

  .caption {
    color: var(--secondary-txt-color);
    font-weight: 600;
  }

  .list {
    padding-left: 2.2em;
    text-indent: -2.2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 1024px) {
      padding-left: 1.2em;
      text-indent: -1.2em;
      @media only screen and (max-width: 540px) {
        padding-left: 1em;
        text-indent: -1em;
      }
      @media only screen and (max-width: 400px) {
        padding-left: 0.8em;
        text-indent: -0.8em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.75em;
        text-indent: -0.75em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.6em;
        text-indent: -0.6em;
      }
    }

    p:first-child {
      margin-top: 0.5em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,Ug=n.p+"static/media/LarryArticle_11.bd6d8cd09e612f48f51c.png",Vg=n.p+"static/media/LarryArticle_2.afcc3c168160607c4a6a.png",Yg=n.p+"static/media/LarryArticle_3.03d4b4ccf203847887aa.png",Qg=n.p+"static/media/LarryArticle_4.0c2e668bbefc54efb637.png",Wg=n.p+"static/media/LarryArticle_5.0dd74552894f177feacc.png",Hg=n.p+"static/media/LarryArticle_6.50355c7e0bd638576ef2.png",Gg=n.p+"static/media/LarryArticle_7.9db76d7bbac7f067c306.png",$g=n.p+"static/media/LarryArticle_8.60d756cff6244b1b0851.png",Xg=n.p+"static/media/LarryArticle_9.51f79e8feb7bf39b674a.png",Kg=n.p+"static/media/LarryMovie_1.f5d97d2b58120911d2bd.mp4",qg=n.p+"static/media/LarryMovie_2.98a1cffc69829417c5d2.mp4",Jg=()=>(0,Te.jsxs)(tm,{id:"larry",style:{background:"white"},children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(pl.div,{animate:{x:0,opacity:1},initial:{x:-700,opacity:0},exit:{x:700,opacity:0},transition:{duration:.5},children:(0,Te.jsx)(ym,{children:(0,Te.jsx)(Mg,{src:Ug,id:""})})}),(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interview"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Motion Prototype"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Information Architecture"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Desing System"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Vector - illustration"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Logo Design"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"Larry Linton was tasked with creating his own website, addressing the unique needs for the publications introduction website."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,Te.jsx)(Og,{children:(0,Te.jsxs)(Ng,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Larry had just published a book about Parkinson\u2019s disease, which he also suffers from, and was trying to create a website to spread the book around the world."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"After connecting with the agency through Riipen, he initiated the project with us as he fulfilled the final project recruitment requirements."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"We split into four groups, competing for Larry's trust. I took charge of all the first-stage presentations and, fortunately, was selected from the four groups, ultimately succeeding in gaining his trust."})})]})}),(0,Te.jsx)(Rg,{children:(0,Te.jsx)(Lg,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:'We received his conviction in the idea of "Living Your Most Authentic Life Possible".'})})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:Vg}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Winning designs for final project"})})})]})}),(0,Te.jsx)(Fg,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"My role"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"I worked on the project as a UI/UX designer, together with the development team."}),(0,Te.jsx)("p",{children:"The image alongside is the initial prototype that I proposed, earning credibility in the process."})]})]})}),(0,Te.jsx)(Fg,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Challenge"}),(0,Te.jsx)("p",{children:"The intention of having a home page was certainly to make money for books, but another intention was to share his own experience and knowledge."}),(0,Te.jsx)("p",{children:"One of the reasons he decided to create a site was because he wanted to convey his own words to other Parkinson's patients on the website. He already has his own blog, and it was also a question of how his blog would appear on the website."}),(0,Te.jsx)("p",{children:"He already has his own blog, and it was also a question of how his blog would appear on the website."})]})})}),(0,Te.jsx)(Fg,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Solution"}),(0,Te.jsx)("p",{children:"My first job when this project started was to guide the team on the best path towards the goals of the project. Therefore, I was responsible for building each section of the project, designing it for different devices, managing the timeline, giving detailed instructions to each developer, and overseeing the whole process."}),(0,Te.jsx)("p",{children:"My first job when this project started was to guide the team on the best path towards the goals of the project. Therefore, I was responsible for building each section of the project, designing it for different devices, managing the timeline, giving detailed instructions to each developer, and overseeing the whole process."}),(0,Te.jsx)("p",{children:"This way we could also achieve a more consistent user experience across the different end-users."}),(0,Te.jsx)("p",{children:"Design methods used during the project included journey mapping, UI/UX design, and prototyping solutions. During the project, I also designed features needed for a wider launch."})]})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:Yg}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Agile Workflow"})})}),(0,Te.jsx)(Tm,{src:Qg}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Agile Design System for Team"})})})]})}),(0,Te.jsx)(Fg,{children:(0,Te.jsx)(pm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Design and developer collaboration is a most challenging problem and there are many opportunities how to sync each other."}),(0,Te.jsx)("p",{children:"All the design tools that exist today isn't enforcing that behavior."}),(0,Te.jsx)("p",{children:'All they do is attempt to do similar things. Unless design to development all share the same settings or agreed on setting, there is no real "bridge\u201d between developers and designers.'})]})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:Wg}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Agile Instructions for Developers"})})})]})}),(0,Te.jsx)(Fg,{children:(0,Te.jsx)(pm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"While some developers were inexperienced, it was a difficult to proceed with the project in a limited time to convey the first instruction with the design tool."}),(0,Te.jsx)("p",{children:"In order to get a better understanding of the design, I created it myself without using Adobe XD only at the beginning."}),(0,Te.jsx)("p",{children:"After a few meetings with Larry, I saw what he really needed, so I decided to create a landing page and homepage to implement it concretely."}),(0,Te.jsx)("p",{children:"The most important thing in doing so was to create a consistent design to get the most out of his brand."})]})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:Hg}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Overall art board view"})})})]})}),(0,Te.jsx)(Fg,{children:(0,Te.jsx)(pm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"After a few meetings with Larry, I saw what he really needed, so I decided to create a landing page and homepage to implement it concretely."}),(0,Te.jsx)("p",{children:"The most important thing in doing so was to create a consistent design to get the most out of his brand."}),(0,Te.jsx)("p",{children:"The problem is that if we were able to communicate with the clients deeper in terms of functionality during the meeting, I think the project would have progressed a little faster."}),(0,Te.jsx)("p",{children:"It's a problem with every project, regardless of language or culture, but the challenge is how to deal with it. I've learned a lot from this experience and I'm ready to move on to the next stage."})]})})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(sm,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Mm,{autoPlay:!0,playsInline:!0,loop:!0,muted:!0,src:Kg,type:"video/mp4"})}),(0,Te.jsx)(dm,{children:(0,Te.jsx)(Om,{autoPlay:!0,playsInline:!0,loop:!0,muted:!0,src:qg,type:"video/mp4"})})]}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Agile Instructions for Developers"})})})]}),(0,Te.jsx)(Fg,{children:(0,Te.jsx)(pm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"At the beginning, I didn't plan to create blog content, but at the time of the meeting, I received a request to create a blog section, so I decided to do it in a hurry."}),(0,Te.jsx)("p",{children:"At first, it was a key to create individual blog article pages on the homepage, but since Larry wanted to make the system simple to update and edit, end-users can touch the outline of the article and assist clicking."}),(0,Te.jsx)("p",{children:"I designed a UI that possible to do it."})]})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:Gg}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Finalized design images"})})})]})}),(0,Te.jsx)(Fg,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"The Outcome"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"The essential intention of this project is to make Larry's experiences and books known to people all over the world."}),(0,Te.jsx)("p",{children:"Not to let people know about their suffering, but to convey their hope."}),(0,Te.jsx)("p",{children:"I was convinced that at least my design would reach as many people as possible."})]})]})}),(0,Te.jsx)(Fg,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{style:{maxWidth:"1140px",margin:"auto"},children:[(0,Te.jsx)("div",{style:{textAlign:"center",maxWidth:"1140px"},children:(0,Te.jsx)(zm,{src:$g})}),(0,Te.jsx)("div",{style:{textAlign:"center"},children:(0,Te.jsx)("h2",{children:'" The end product exceeded my expectations. Thanks to each member of the team, the website captures my personality - it has a soul!! "'})}),(0,Te.jsx)("div",{className:"feedback",children:(0,Te.jsx)("p",{children:"It\u2019s one thing to design a website: With so many online resources available to guide you - both free and subscription based - a website can be uploaded and be functioning within hours. But, to have a website designed that captures the wishes and personality of the client is quite different. This presents a unique challenge. It takes talent. It takes skill, and it takes patience. I was fortunate to experience this with the students from Cornerstone International Community College of Canada. Cornerstone is a fully accredited college offering diploma programs in Web & Mobile App Development, Network Solutions & System Specialist, International Business Management, Digital Marketing Specialist, Hospitality Management, and Advertising and Graphic Design, as well as, English as Second Language training. Their high-quality educational services and career counselling are delivered within a positive team environment. It serves Canadian and international students from over 20 countries, and is committed to assisting their students obtain gainful employment in the shortest possible time. A team consisting of final year students was assigned to assist me with the design of a landing page and website to support a book launch and my personal brand. The team comprised of: Ayaka Tsubouchi Yuya Hashirizaki Anzu Nakayama Gabriel Sciacca Dias Alexandre Bellini Dias Each team member was engaged and fully invested in the project. Over a series of zoom calls, questions were asked of me on what I was seeking to achieve. The end product exceeded my expectations. Thanks to each member of the team, the website captures my personality - it has a soul! I would encourage any employer who may be looking to hire engaged, creative and talented students to look no further than Cornerstone, and these students."})}),(0,Te.jsx)(Tm,{src:Xg})]})})})]})]})]}),Zg=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(Jg,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),ex=au.img`
  max-width: 50%;
  margin: auto;
  padding: 5rem 0;
  display: block;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    padding: 8vw 0;
  }
`,tx=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,nx=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,ix=au.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,rx=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,ax=au.div`
  max-width: 1400px;
  padding: 44px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding: 34px 0 11.5vw 0;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 6px;
  }

  h2 {
    color: var(--primary-txt-color);
  }

  .caption {
    color: var(--secondary-txt-color);
    font-weight: 600;
  }

  .list {
    padding-left: 2.2em;
    text-indent: -2.2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 1024px) {
      padding-left: 1.2em;
      text-indent: -1.2em;
      @media only screen and (max-width: 540px) {
        padding-left: 1em;
        text-indent: -1em;
      }
      @media only screen and (max-width: 400px) {
        padding-left: 0.8em;
        text-indent: -0.8em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.75em;
        text-indent: -0.75em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.6em;
        text-indent: -0.6em;
      }
    }

    p:first-child {
      margin-top: 0.5em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,sx=n.p+"static/media/VectorArticle_1.8ae7ba38100cf7996f96.png",ox=n.p+"static/media/VectorArticle_2.30a3d6cfdae677c50ed8.png",lx=n.p+"static/media/VectorArticle_3.4c03841a51a0f0183300.png",cx=n.p+"static/media/VectorArticle_4.3a8221a4323ab0e086ea.png",dx=n.p+"static/media/VectorArticle_5.46314cd4b26cc93097e1.png",ux=n.p+"static/media/VectorArticle_6.95fc3e765d3ce1d0b158.png",hx=n.p+"static/media/VectorArticle_7.a98c41d17188780a0d54.png",px=n.p+"static/media/VectorArticle_8.5d6c8b6305fb94937e2e.png",fx=n.p+"static/media/VectorArticle_9.60001b7fe404c7addd81.png",mx=n.p+"static/media/VectorArticle_10.c2340c788ab7357ffe17.png",gx=n.p+"static/media/VectorArticle_11.cc9aa830f0b15ccc2cae.png",xx=n.p+"static/media/VectorArticle_12.1b79debb7a1c7c2730af.png",vx=n.p+"static/media/VectorArticle_13.78fb89279f9384eb2d69.png",yx=n.p+"static/media/mari.627df66b8e7be0e5a205.png",wx=n.p+"static/media/VectorMovie_1.5f0e7ba9884d325351f6.mp4",bx=()=>(0,Te.jsxs)(tm,{id:"vector",style:{background:"white"},children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(pl.div,{animate:{x:0,opacity:1},initial:{x:-700,opacity:0},exit:{x:700,opacity:0},transition:{duration:.5},children:(0,Te.jsx)(ym,{children:(0,Te.jsx)(ex,{src:sx,id:""})})}),(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interview"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Motion Prototype"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Information Architecture"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Desing System"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Vector - illustration"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"Hired by Vector International Academy, I modernized websites and brochures with innovative design, gaining valuable insights."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,Te.jsx)(tx,{children:(0,Te.jsxs)(nx,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Suggested by a friend, I offered my design services on a project basis for Vector International Academy. After a few meetings, my portfolio was accepted, and I dedicated myself to meeting Vector's requirements."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"An idea that first seemed exciting and intriguing, and turned into a journey full of excitement, surprises with lots of ups and downs."})})]})}),(0,Te.jsx)(ix,{children:(0,Te.jsx)(rx,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Design lead for Vector International Academy"})})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:ox}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Agile Workflow"})})})]})}),(0,Te.jsx)(ax,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"How it all started"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"The school had already built its own website, but they wanted to create a more intriguing platform for new content."}),(0,Te.jsx)("p",{children:"In the early days, my primary approach to shaping the idea and progressing with this project was to craft multiple web design prototypes for the website's construction."}),(0,Te.jsx)("p",{children:"We held several meetings to ensure smooth collaboration and facilitate communication."}),(0,Te.jsx)("p",{children:"To pinpoint the right problems, I asked myself what the previous site intentionally did or what service I was building."}),(0,Te.jsx)("p",{children:"These considerations guided my approach to the project."})]})]})}),(0,Te.jsx)(ax,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"My role"}),(0,Te.jsx)("p",{children:"As a UI/UX designer, I collaborated with the development team on multiple projects for Vector, including the main site and brochure. Additionally, I provided input on content"})]})})}),(0,Te.jsx)(rm,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(vm,{children:(0,Te.jsx)(Tm,{src:lx})}),(0,Te.jsx)(vm,{children:(0,Te.jsx)(Tm,{src:cx})}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"The initial prototype presented to the client"})})})]})}),(0,Te.jsx)(ax,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Challenge"}),(0,Te.jsx)("p",{children:"The significant challenge faced by the client was establishing an accessible means to navigate testimonials and essential sections effortlessly while creating an engaging and powerful website."}),(0,Te.jsx)("p",{children:"Following multiple meetings, I grasped the project's challenges and the client's vision for the most effective site, leading to the proposal of the aforementioned prototype."})]})})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(vm,{children:(0,Te.jsx)(Tm,{src:dx})}),(0,Te.jsx)(vm,{children:(0,Te.jsx)(Tm,{src:ux})}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"The client proposed loading the video upon laptop startup"})})})]})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:hx}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Completed the home page design, showcasing Vector and its features"})})})]})}),(0,Te.jsx)(ax,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Solution"}),(0,Te.jsx)("p",{children:"We prioritized content unification and adaptability to individual customer needs. Incorporating dynamic content, like slides absent from the previous site, was a focus."}),(0,Te.jsx)("p",{children:"The goal was to offer a seamless experience for diverse customer groups, catering to both non-students and infrequent visitors, ensuring easy access to relevant information."})]})})}),(0,Te.jsx)(ax,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Final thoughts"}),(0,Te.jsx)("p",{children:"I anticipated that the level of involvement from designers and developers in the project's completion would be contingent on the budget and timeline. My approach to this project was centered on thoroughly researching its scalability."}),(0,Te.jsx)("p",{children:"Post the completion of the home page, the client's intentions changed, leading to an increased content load. This posed challenges in modifying previously completed work."}),(0,Te.jsx)("p",{children:"In a project emphasizing consistent design, adaptability proved crucial. It was a valuable experience, underscoring the importance of understanding the client's core intentions."})]})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:px}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Initiation of Phase One for the Interactive Activities Page"})})}),(0,Te.jsx)(Tm,{src:fx}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Completed the design for the Interactive Activities Page and menu bar"})})}),(0,Te.jsx)(Tm,{src:mx}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Completed the design for the remaining pages"})})})]})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Mm,{autoPlay:!0,playsInline:!0,loop:!0,muted:!0,src:wx,type:"video/mp4"}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Developed a motion prototype for the contact form"})})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(vm,{children:(0,Te.jsx)(Tm,{src:gx})}),(0,Te.jsx)(vm,{children:(0,Te.jsx)(Tm,{src:xx})}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Completed the brochure design tailored for the Japanese customer"})})})]})}),(0,Te.jsx)(lm,{children:(0,Te.jsx)(cm,{children:(0,Te.jsx)(Dm,{src:vx})})}),(0,Te.jsx)(ax,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"The Outcome"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Throughout this project, I encountered challenges at each stage, gradually developing and designing the website to a functional and valuable state."}),(0,Te.jsx)("p",{children:"Looking back, it has been quite a ride. This highly valuable experience continues to impact my career today, providing a better understanding of the web design working environment and opening my eyes to the product creation process. The effort and sacrifices required to launch a product into the world exceeded my expectations."}),(0,Te.jsx)("p",{children:"However, once the product takes its dive and comes 'alive,' the real journey begins. Reflecting on it now, I am genuinely excited."})]})]})}),(0,Te.jsx)(ax,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{style:{maxWidth:"1140px",margin:"auto"},children:[(0,Te.jsx)("div",{style:{textAlign:"center",maxWidth:"1140px"},children:(0,Te.jsx)(zm,{src:yx})}),(0,Te.jsx)("div",{style:{textAlign:"center"},children:(0,Te.jsx)("h2",{children:'" He is a versatile designer who creates a wide range from modern to traditional. I believe his patience with a string of requests and revisions from me eventually enabled my website to be born. "'})}),(0,Te.jsx)("div",{className:"feedback",children:(0,Te.jsx)("p",{children:"His design first caught my eyes when I had been spending long time looking for a way to embody the unique feature of my school business. His astute sense of identifying the perfect colors, shapes, and space usage helped my website convey what we are at a glance. I believe his patience with a string of requests and revisions from me eventually enabled my website to be born. He is a versatile designer who creates a wide range from modern to traditional."})})]})})})]})]})]}),jx=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(bx,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),Ax=au.img`
  max-width: 50%;
  margin: auto;
  padding: 5rem 0;
  display: block;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    padding: 8vw 0;
  }
`,Sx=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,kx=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,Ex=au.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,Cx=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Tx=au.div`
  max-width: 1400px;
  padding: 44px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding: 34px 0 11.5vw 0;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 6px;
  }

  h2 {
    color: var(--primary-txt-color);
  }

  .caption {
    color: var(--secondary-txt-color);
    font-weight: 600;
  }

  .list {
    padding-left: 2.2em;
    text-indent: -2.2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 1024px) {
      padding-left: 1.2em;
      text-indent: -1.2em;
      @media only screen and (max-width: 540px) {
        padding-left: 1em;
        text-indent: -1em;
      }
      @media only screen and (max-width: 400px) {
        padding-left: 0.8em;
        text-indent: -0.8em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.75em;
        text-indent: -0.75em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.6em;
        text-indent: -0.6em;
      }
    }

    p:first-child {
      margin-top: 0.5em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,Px=n.p+"static/media/DarumaArticle_1.0ae7edfd51287b3ee5b7.png",Ix=n.p+"static/media/DarumaArticle_2.f1a2dd83adbe5af814c3.png",Bx=n.p+"static/media/DarumaArticle_3.4de0e784eb72efbfe90f.png",zx=n.p+"static/media/DarumaArticle_4.fea728c1b7dca2d3e855.png",Dx=n.p+"static/media/DarumaArticle_5.9b5f10fcc4edd8213d95.png",_x=n.p+"static/media/DarumaArticle_6.a47d95aebf0fd6cffde4.png",Mx=n.p+"static/media/DarumaArticle_7.298cd435e539754ef202.png",Ox=()=>(0,Te.jsxs)(tm,{id:"daruma",style:{background:"white"},children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(pl.div,{animate:{x:0,opacity:1},initial:{x:-700,opacity:0},exit:{x:700,opacity:0},transition:{duration:.5},children:(0,Te.jsx)(ym,{children:(0,Te.jsx)(Ax,{src:Px,id:""})})}),(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interview"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Information Architecture"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Desing System"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Vector - illustration"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Arrange Photographer"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Web Management"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Website Maintenance"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"The restaurant requested a new concept, aiming for a smoother and more accessible website for customers."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,Te.jsx)(Sx,{children:(0,Te.jsxs)(kx,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"The restaurant aimed to revamp its website, catering to customers in Japan and those visiting the country."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"The website previously featured outdated designs, making it challenging for clients to navigate and access the offered services."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Daruma had made a strategic choice to bring all of their offerings and new service under one website."})})]})}),(0,Te.jsx)(Ex,{children:(0,Te.jsx)(Cx,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"I took on the responsibility of building the website project for a specialty Korean cuisine and BBQ restaurant, gaining magnificent experience in the process."})})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:Ix}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Agile Workflow"})})})]})}),(0,Te.jsx)(Tx,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"The Goal"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"The primary idea for the website is to enable users to easily create and share reservations for a night out with friends and family at the restaurant."}),(0,Te.jsx)("p",{children:"While there are many similar websites on the market, most of them are complex and similar in functionality."}),(0,Te.jsx)("p",{children:"The restaurant's main requirement has always been to keep the website usable, reliable, and functional with an aesthetic that is minimal, simple, and clean."}),(0,Te.jsx)("p",{children:"No ads or tricks, just a consistent and intuitive user experience aimed at providing value and keeping users satisfied and engaged."}),(0,Te.jsx)("p",{children:"The client emphasized agile work to deliver the product efficiently."})]})]})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{style:{padding:"clamp(15px, 10%, 140px)"},src:Bx}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Images for wireframe"})})}),(0,Te.jsx)(Tm,{style:{padding:"clamp(15px, 10%, 140px)"},src:zx}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{className:"lastCaption",children:"Images for user journey map"})})})]})}),(0,Te.jsx)(Tx,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"My role"}),(0,Te.jsx)("p",{children:"In this project, I served as a versatile UI/UX designer and developer, providing advisory input for the website."}),(0,Te.jsx)("p",{children:"Moreover, I held the position of an administrator, overseeing the project's overall management."})]})})}),(0,Te.jsx)(Tx,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Challenge"}),(0,Te.jsx)("p",{children:"As mentioned earlier, I undertook the entire design and development process for this project using my skills."}),(0,Te.jsx)("p",{children:"Timely delivery was a critical requirement, making it imperative to present the finalized product quickly."})]})})}),(0,Te.jsx)(Tx,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Solution"}),(0,Te.jsx)("p",{children:"It was essential to balance the perspectives of both a designer and developer, and I aimed to treat both skill sets with equal importance."}),(0,Te.jsx)("p",{children:'Considering the client\'s requirements for an aesthetically minimal, simple, and clean design, coupled with the need for a swift development pace, I found "React" to be the most suitable library.'}),(0,Te.jsx)("p",{children:"This decision was driven by its alignment with current trends, its logical advantages, the perception of fast loading speed by end-users, and my proficiency in the language."}),(0,Te.jsx)("p",{children:'Additionally, I chose for "React Bootstrap" as a reliable framework to facilitate quick development and achieve a consistent design.'})]})})}),(0,Te.jsx)(Tx,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Final thoughts"}),(0,Te.jsx)("p",{children:"During this project, I encountered some limitations with Bootstrap, which led me to consider future issues and find solutions based on the context of this project."}),(0,Te.jsx)("p",{children:"Rather than viewing them as problems, I saw them as opportunities for productive outcomes."}),(0,Te.jsx)("p",{children:"I established an efficient configuration to prevent potential challenges, particularly for long-term project involvement."}),(0,Te.jsx)("p",{children:"This experience emphasized the importance of enhancing my proficiency as a digital creator."})]})})}),(0,Te.jsx)(lm,{children:(0,Te.jsxs)(cm,{children:[(0,Te.jsx)(Tm,{src:Dx}),(0,Te.jsx)(Nm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Finalized mobile images"})})}),(0,Te.jsx)(Tm,{src:_x})]})}),(0,Te.jsx)(Tx,{children:(0,Te.jsx)(pm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Design and developer collaboration is a most challenging problem and there are many opportunities how to sync each other."}),(0,Te.jsx)("p",{children:"All the design tools that exist today isn't enforcing that behavior."}),(0,Te.jsx)("p",{children:'All they do is attempt to do similar things. Unless design to development all share the same settings or agreed on setting, there is no real "bridge\u201d between developers and designers.'})]})})}),(0,Te.jsx)(Tx,{children:(0,Te.jsx)(pm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"While some developers were inexperienced, it was a difficult to proceed with the project in a limited time to convey the first instruction with the design tool."}),(0,Te.jsx)("p",{children:"In order to get a better understanding of the design, I created it myself without using Adobe XD only at the beginning."}),(0,Te.jsx)("p",{children:"After a few meetings with Larry, I saw what he really needed, so I decided to create a landing page and homepage to implement it concretely."}),(0,Te.jsx)("p",{children:"The most important thing in doing so was to create a consistent design to get the most out of his brand."})]})})}),(0,Te.jsx)(Tx,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"The Outcome"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Navigating through this project, and reflecting on it now, it was undoubtedly the most fast-paced project I've ever undertaken, emphasizing the necessity to deliver the product quickly."}),(0,Te.jsx)("p",{children:"Despite the tight timeline, I successfully delivered a valuable website for my client."}),(0,Te.jsx)("p",{children:"In my career at that time, I recognized Balancing both design and development perspectives was crucial for my career growth."}),(0,Te.jsx)("p",{children:"This experience taught me the importance of investing more effort and time, emphasizing the value of both elements to foster effective teamwork."})]})]})}),(0,Te.jsx)(Tx,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{style:{maxWidth:"1140px",margin:"auto"},children:[(0,Te.jsx)("div",{style:{textAlign:"center",maxWidth:"1140px"},children:(0,Te.jsx)(zm,{src:Mx})}),(0,Te.jsx)("div",{style:{textAlign:"center"},children:(0,Te.jsx)("h2",{children:'" The outstanding product created by talented web specialist by Yuya Hashirizaki that the product is very content even though I couldn\'t make to him enough time to build up for our desirable web site. "'})}),(0,Te.jsx)("div",{className:"feedback",children:(0,Te.jsx)("p",{children:"I am pleased to be able to write this letter of recommendation for Yuya Hashirizaki. In my opinion, Yuya is a hard-working self-starter who invariably understands exactly what a project is all about. That those skills were required especially in this project. Our thoughts of the previous website were that it had old fashioned style. So that we couldn\u2019t understand why we have to renew it until we get complaints from our regular customers. But we couldn\u2019t spend money to renovate for a new web site. I was just about to start to search how do I find the proper person and, my co-worker found out dependable web specialist among a lot of candidates in IT industry. He consistently produced high-quality work in a timely fashion so far invariably. After starting the project with him, first of all, we have made meetings frequently to reduce pain points for the future. It was a necessary thing because we couldn\u2019t invest much in this project so that, we had to reduce the possibility to generate misunderstandings for each other to avoid changes after finalized. I so much respect Yuya\u2019s attitude toward his work. I am therefore very pleased to be able to recommend Yuya for future positions."})})]})})})]})]})]}),Nx=()=>{const[e,n]=(0,t.useState)(!1);return(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(Ox,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]})},Rx=au.div`
  max-width: 1370px;
`,Lx=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Fx=au.div`
  max-width: 1140px;

  .centering {
    display: flex;
    justify-content: center;

    a {
      width: 100%;
    }
    svg {
      margin-right: 6px;
    }
  }

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,Ux=au.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Vx=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Yx=(au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }

  .insights-lists {
    padding-left: 2em;
    text-indent: -2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 960px) {
      padding-left: 0.9em;
      text-indent: -0.9em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,n.p+"static/media/caseUi_hero_v2.aed2edc086c2372ad40e.png"),Qx=()=>(0,Te.jsx)(tm,{id:"ui",children:(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsx)(em,{}),(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:Yx,id:""})}),(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(Rx,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Brand Development"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsxs)("h1",{children:["100-day design challenge : ",(0,Te.jsx)("br",{}),"Self-commitment to design every day"]})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Design Lead: Yuya Hashirizaki"})})]})})]}),(0,Te.jsx)(Lx,{children:(0,Te.jsxs)(Fx,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"According to both research and experience, it's evident that product design is a key driver in capturing user engagement and serves as a vital starting point for achieving business objectives."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Yet, there are multiple compelling reasons to prioritize the maturation and innovation of product design."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Quality design products aim to portray a product as sophisticated, and as a result, end-users often perceive aesthetically pleasing products as more user-friendly."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Good design is inherently rational, communicating to users that it's not only visually pleasing but also useful, reliable, and user-friendly."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Furthermore, it's not only about aesthetics; it places a strong emphasis on delivering usability for the users' benefit."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"I've taken on sustainable 100-day challenges to boost my skills and capabilities."})}),(0,Te.jsx)(um,{children:(0,Te.jsx)("div",{className:"centering",children:(0,Te.jsxs)(gp,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:[(0,Te.jsx)(Fu,{}),"Read more"]})})})]})}),(0,Te.jsx)(Ux,{children:(0,Te.jsx)(Vx,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"I tried to hone my design skills by adhering to a daily self-challenge to design and create."})})})})]})]})}),Wx=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(Qx,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),Hx=au.div`
  max-width: 2560px;
  margin: 180px 30px 0 30px;
  overflow: hidden;

  @media only screen and (max-width: 960px) {
    margin: 130px 15px 0 15px;
  }

  @media only screen and (max-width: 540px) {
    margin: 70px 15px 0 15px;
  }
`,Gx=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,$x=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,Xx=()=>(0,Te.jsxs)(tm,{id:"portfolio",children:[(0,Te.jsx)(em,{}),(0,Te.jsx)(Hx,{children:(0,Te.jsxs)(pl.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"VS Code"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Adobe CC"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"HTML"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"CSS"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"JavaScript"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"React"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"SCSS / SASS"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"styled-components"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"Project for Comprehensive Portfolio Development"})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,Te.jsx)(Gx,{children:(0,Te.jsxs)($x,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"The design industry frequently debates the necessity of User Experience designers having programming knowledge."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Various perspectives exist on this matter. From my standpoint, having an understanding of programming can provide designers with a broader, more comprehensive view, ultimately leading to more advanced design approaches."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"For instance, when developing a reusable component, having knowledge of how objects are generated is crucial to avoid creating a design that would be challenging to implement in the user interface."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Implementing this approach not only enhances the developer's workflow but also contributes to reducing project costs. This project has yielded significant profits as a result."})})]})})]})})]}),Kx=()=>(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)($f,{}),(0,Te.jsx)(Xx,{}),(0,Te.jsx)(Ef,{}),(0,Te.jsx)(rg,{})]}),qx=()=>{const e=Z();return(0,Te.jsx)(mp,{smooth:!0,duration:500,spy:!0,exact:"true",offset:0,onClick:()=>{e(-1)},children:"Try Again!"})},Jx=au.div`
  .NoMatchContainer {
    min-height: 100vh;
    background-color: var(--primary-bg);
  }

  .NoMatchWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  h2 {
    font-family: var(--secondary-font-family);
    font-weight: 500;
    color: var(--primary-txt-color);

    margin-bottom: 3rem;
  }

  a {
    margin: 0 auto;
  }
`,Zx=()=>(0,Te.jsx)(Jx,{children:(0,Te.jsx)("div",{className:"NoMatchContainer",children:(0,Te.jsx)("div",{className:"NoMatchWrapper",children:(0,Te.jsxs)("div",{children:[(0,Te.jsxs)("h2",{children:["Sorry ...",(0,Te.jsx)("br",{}),"I am confused :(",(0,Te.jsx)("br",{}),"Please try again!"]}),(0,Te.jsx)(qx,{})]})})})}),ev={_origin:"https://api.emailjs.com"},tv=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class nv{constructor(e){this.status=e.status,this.text=e.responseText}}const iv=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((i,r)=>{const a=new XMLHttpRequest;a.addEventListener("load",(e=>{let{target:t}=e;const n=new nv(t);200===n.status||"OK"===n.text?i(n):r(n)})),a.addEventListener("error",(e=>{let{target:t}=e;r(new nv(t))})),a.open("POST",ev._origin+e,!0),Object.keys(n).forEach((e=>{a.setRequestHeader(e,n[e])})),a.send(t)}))},rv=(e,t,n,i)=>{const r=i||ev._userID;tv(r,e,t);const a={lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:n};return iv("/api/v1.0/email/send",JSON.stringify(a),{"Content-type":"application/json"})};const av=n.p+"static/media/wedding_arrow.6a749275dd575501999ff5f21cf486b0.svg",sv={display:"flex",flexDirection:"column",gap:"10px",maxWidth:"400px",margin:"auto",backgroundColor:"rgba(69, 89, 73, 0.9)",borderRadius:"8px",color:"#e5f5f0",padding:"0 20px"},ov={lineHeight:"34px",display:"flex",flexDirection:"column",fontFamily:"'Spectral', serif",fontWeight:300},lv=e=>({padding:"10px",border:"none",borderRadius:"6px",backgroundColor:"rgba(255, 255, 255, 0.8)",color:"black",fontFamily:"'Spectral', serif",fontWeight:300,outline:e?"solid 2px rgb(245, 183, 66)":"none"}),cv={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},dv={background:"rgba(245, 183, 66)",maxWidth:"420px",padding:"44px",margin:"30px",borderRadius:"5px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},uv=()=>{console.log("RSVPForm is rendering");const[e,n]=(0,t.useState)(""),[i,r]=(0,t.useState)(!0),[a,s]=(0,t.useState)(!1),[o,l]=(0,t.useState)(""),[c,d]=(0,t.useState)(""),[u,h]=(0,t.useState)(!1),[p,f]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),[x,v]=(0,t.useState)(""),[y,w]=(0,t.useState)(!1);return(0,Te.jsxs)("div",{style:sv,children:[(0,Te.jsxs)("form",{onSubmit:t=>{t.preventDefault();rv("service_pj5tdw8","template_8enh78r",{name:e,attending:i?"Yes":"No",subject:`RSVP from ${e}`,dietaryRestrictions:x},"G1t7FNOVBVY03wSbQ").then((e=>{console.log("Email sent successfully!",e.status,e.text),l("Your RSVP has been sent to Chanel and Yuya! Thank you :)"),d(""),n(""),r(!0),s(!0),setTimeout((()=>{s(!1)}),5e3)})).catch((e=>{console.error("Failed to send email. Error:",e),d("Oops! Something went wrong. Please try again."),l("")}))},children:[(0,Te.jsx)("div",{style:{marginTop:"24px"},children:(0,Te.jsxs)("label",{style:ov,children:["Name(s):",(0,Te.jsx)("input",{type:"text",value:e,onChange:e=>n(e.target.value),required:!0,style:lv(u),onFocus:()=>h(!0),onBlur:()=>h(!1)})]})}),(0,Te.jsx)("div",{children:(0,Te.jsxs)("label",{style:ov,children:["Attendance:",(0,Te.jsxs)("select",{value:i?"yes":"no",onChange:e=>r("yes"===e.target.value),style:(j=p,{padding:"10px",border:"none",borderRadius:"6px",backgroundColor:"rgba(255, 255, 255, 0.8)",color:"black",fontFamily:"'Spectral', serif",fontWeight:300,lineHeight:"1.5",outline:j?"solid 2px rgb(245, 183, 66)":"none",appearance:"none",WebkitAppearance:"none",backgroundImage:`url(${av})`,backgroundRepeat:"no-repeat",backgroundPosition:"right 10px center",backgroundSize:"12px"}),onFocus:()=>f(!0),onBlur:()=>f(!1),children:[(0,Te.jsx)("option",{value:"yes",children:"Yes"}),(0,Te.jsx)("option",{value:"no",children:"No"})]})]})}),(0,Te.jsx)("div",{style:{marginBottom:"30px"},children:(0,Te.jsxs)("label",{style:ov,children:["Dietary Restrictions:",(0,Te.jsx)("input",{type:"text",value:x,onChange:e=>v(e.target.value),style:lv(y),onFocus:()=>w(!0),onBlur:()=>w(!1)})]})}),(0,Te.jsx)("button",{type:"submit",style:(b=m,{margin:"0 auto",minWidth:"170px",padding:"10px",backgroundColor:b?"rgb(245, 183, 66)":"transparent",border:"solid 1px rgb(245, 183, 66)",color:b?"#455949":"rgb(245, 183, 66)",cursor:"pointer",fontSize:"16px",borderRadius:"50px",transition:"background-color 0.3s, color 0.3s",fontFamily:"'Spectral', serif",fontWeight:300}),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:"Send RSVP"})]}),c&&(0,Te.jsx)("p",{style:{color:"red"},children:c}),a&&(0,Te.jsx)("div",{style:cv,children:(0,Te.jsx)("div",{style:dv,children:(0,Te.jsx)("p",{style:{color:"#455949",fontSize:"34px",fontFamily:"'Alice', serif",fontWeight:400,fontStyle:"italic"},children:o})})})]});var b,j},hv=au.div`
  @import url("https://fonts.googleapis.com/css2?family=Alice&family=Spectral:wght@200;300;400;500;600;700;800&display=swap");

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .background {
    background-color: #455949;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div,
  p {
    color: #e5f5f0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
    vertical-align: baseline;
    background: transparent;
  }

  h1 {
    margin: 0 auto;
    color: rgb(245, 183, 66);
    font-size: 16px;
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: italic;
    line-height: 1.1em;
    max-width: 240px;
    padding-bottom: 16px;

    @media only screen and (max-width: 280px) {
      font-size: 17.143vw;
    }
  }

  h2 {
    color: rgb(245, 183, 66);
    font-size: 48px;
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: 280px) {
      font-size: 17.143vw;
    }
  }

  .aoP a[href],
  a {
    font-family: "Spectral", serif;
    font-weight: 300;
    text-decoration: underline;
    cursor: pointer;
  }

  .container {
    max-width: 420px;
    margin: 0 auto;
    padding: 30px 15px;
    text-align: center;
  }

  .wrapper {
    padding: 0 15px;
  }

  .orange {
    color: rgb(245, 183, 66);
  }

  .italic {
    font-style: italic;
    color: rgb(245, 183, 66);
  }

  .bold {
    font-family: "Spectral", serif;
    font-weight: 700;
  }

  .reset-color {
    color: #e5f5f0;
  }

  .title {
    border-top: medium double #e5f5f0;
    border-bottom: medium double #e5f5f0;
    padding: 24px 0;
  }

  .no-wrap {
    white-space: nowrap;
  }

  .content {
    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
    padding-top: 16px;
  }

  .content-top {
    padding-top: 24px;
  }

  .content-middle {
    padding-top: 12px;
  }

  .content-bottom {
    padding-top: 44px;
  }

  .details {
    font-size: 12px;
  }

  .animated-top {
    margin-top: 24px;
    height: 18px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 15px 15px,
      rgb(245, 183, 66) 12px,
      transparent 13px
    );
  }

  .animated-bottom {
    margin: -8px 0;
    height: 15px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #e5f5f0 13px
    );
    background-repeat: repeat-x;
    animation: move-background 17.7s cubic-bezier(0.68, -0.6, 0.32, 0.3)
      infinite;
  }

  @keyframes move-background {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
`,pv=()=>(0,Te.jsx)(hv,{children:(0,Te.jsx)("div",{className:"background",children:(0,Te.jsxs)("div",{className:"container",children:[(0,Te.jsxs)("div",{className:"wrapper",children:[(0,Te.jsx)("h1",{children:"The honour of your presence is joyfully requested at the marriage celebration of"}),(0,Te.jsxs)("div",{className:"title",children:[(0,Te.jsx)("h2",{children:"Chanel Blouin"}),(0,Te.jsx)("p",{children:"and"}),(0,Te.jsx)("h2",{children:"Yuya "}),(0,Te.jsx)("h2",{className:"no-wrap",children:"Hashirizaki"})]}),(0,Te.jsx)("div",{className:"content-top",children:(0,Te.jsxs)("p",{children:[(0,Te.jsx)("span",{className:"bold",children:"Saturday, November 30th, 2024"})," at three o'clock in the afternoon at\xa0",(0,Te.jsx)("a",{className:"orange",href:"https://www.google.com/maps/place/Margaret+Pigott+Park/@49.2721556,-123.1675639,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMVaJETlXYRpifTCbjgDd12mMtkPlV1QYRASXPP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMVaJETlXYRpifTCbjgDd12mMtkPlV1QYRASXPP%3Dw114-h86-k-no!7i4032!8i3024!4m18!1m8!3m7!1s0x5486724db416c141:0x837df7e3662f91ab!2sMargaret+Pigott+Park!8m2!3d49.2721556!4d-123.1675639!10e5!16s%2Fm%2F04zhvkm!3m8!1s0x5486724db416c141:0x837df7e3662f91ab!8m2!3d49.2721556!4d-123.1675639!10e5!14m1!1BCgIgAQ!16s%2Fm%2F04zhvkm?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",children:"Margaret Pigott Park"})]})}),(0,Te.jsx)("div",{className:"content",children:(0,Te.jsxs)("p",{children:["Reception to follow at six o'clock in the evening at\xa0",(0,Te.jsx)("a",{className:"orange",href:"https://caffelatana.ca/",children:"Caff\xe9 La Tana"})]})}),(0,Te.jsx)(uv,{}),(0,Te.jsx)("div",{className:"content-middle details",children:(0,Te.jsx)("p",{children:"Please kindly reply by November 10th"})}),(0,Te.jsxs)("div",{className:"content-bottom details",children:[(0,Te.jsxs)("p",{children:["Margaret Pigott Park:\xa0",(0,Te.jsx)("a",{className:"reset-color",href:"https://maps.app.goo.gl/JQWFiarMDQizi2QZ6",children:"2743 Point Grey Rd, Vancouver, BC V6K 1A6"})]}),(0,Te.jsxs)("p",{children:["Caff\xe9 La Tana:\xa0",(0,Te.jsx)("a",{className:"reset-color",href:"https://maps.app.goo.gl/ceLV6cvE8wJ8VsLN7",children:"635 Commercial Dr, Vancouver, BC V5L 3W3"})]})]})]}),(0,Te.jsx)("div",{className:"animated-top"}),(0,Te.jsx)("div",{className:"animated-bottom"})]})})}),fv=au.div`
  @import url("https://fonts.googleapis.com/css2?family=Alice&family=Spectral:wght@200;300;400;500;600;700;800&display=swap");

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .background {
    background-color: #455949;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div,
  p {
    color: #e5f5f0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
    vertical-align: baseline;
    background: transparent;
  }

  h1 {
    margin: 0 auto;
    color: rgb(245, 183, 66);
    font-size: 16px;
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: italic;
    line-height: 1.1em;
    max-width: 240px;
    padding-bottom: 16px;

    @media only screen and (max-width: 280px) {
      font-size: 17.143vw;
    }
  }

  h2 {
    color: rgb(245, 183, 66);
    font-size: 48px;
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: 280px) {
      font-size: 17.143vw;
    }
  }

  .aoP a[href],
  a {
    font-family: "Spectral", serif;
    font-weight: 300;
    text-decoration: underline;
    cursor: pointer;
  }

  .container {
    max-width: 420px;
    margin: 0 auto;
    padding: 30px 15px;
    text-align: center;
  }

  .wrapper {
    padding: 0 15px;
  }

  .orange {
    color: rgb(245, 183, 66);
  }

  .italic {
    font-style: italic;
    color: rgb(245, 183, 66);
  }

  .bold {
    font-family: "Spectral", serif;
    font-weight: 700;
  }

  .reset-color {
    color: #e5f5f0;
  }

  .title {
    border-top: medium double #e5f5f0;
    border-bottom: medium double #e5f5f0;
    padding: 24px 0;
  }

  .no-wrap {
    white-space: nowrap;
  }

  .content {
    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
    padding-top: 16px;
  }

  .content-top {
    padding-top: 24px;
  }

  .content-middle {
    padding-top: 12px;
  }

  .content-bottom {
    padding-top: 44px;
  }

  .details {
    font-size: 12px;
  }

  .animated-top {
    margin-top: 24px;
    height: 18px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 15px 15px,
      rgb(245, 183, 66) 12px,
      transparent 13px
    );
  }

  .animated-bottom {
    margin: -8px 0;
    height: 15px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #e5f5f0 13px
    );
    background-repeat: repeat-x;
    animation: move-background 17.7s cubic-bezier(0.68, -0.6, 0.32, 0.3)
      infinite;
  }

  @keyframes move-background {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
`,mv=()=>(0,Te.jsx)(fv,{children:(0,Te.jsx)("div",{className:"background",children:(0,Te.jsxs)("div",{className:"container",children:[(0,Te.jsxs)("div",{className:"wrapper",children:[(0,Te.jsx)("h1",{children:"The honour of your presence is joyfully requested at the marriage celebration of"}),(0,Te.jsxs)("div",{className:"title",children:[(0,Te.jsx)("h2",{children:"Chanel Blouin"}),(0,Te.jsx)("p",{children:"and"}),(0,Te.jsx)("h2",{children:"Yuya "}),(0,Te.jsx)("h2",{className:"no-wrap",children:"Hashirizaki"})]}),(0,Te.jsx)("div",{className:"content-top",children:(0,Te.jsxs)("p",{children:[(0,Te.jsx)("span",{className:"bold",children:"Saturday, November 30th, 2024"})," at nine o\u2019clock in the evening at\xa0",(0,Te.jsx)("a",{className:"orange",href:"https://caffelatana.ca/",children:"Caff\xe9 La Tana"})]})}),(0,Te.jsx)(uv,{}),(0,Te.jsx)("div",{className:"content-middle details",children:(0,Te.jsx)("p",{children:"Please kindly reply by November 10th"})}),(0,Te.jsx)("div",{className:"content-bottom details",children:(0,Te.jsxs)("p",{children:["Caff\xe9 La Tana:\xa0",(0,Te.jsx)("a",{className:"reset-color",href:"https://maps.app.goo.gl/ceLV6cvE8wJ8VsLN7",children:"635 Commercial Dr, Vancouver, BC V5L 3W3"})]})})]}),(0,Te.jsx)("div",{className:"animated-top"}),(0,Te.jsx)("div",{className:"animated-bottom"})]})})}),gv=()=>((0,t.useEffect)((()=>{const e=()=>{};return document.addEventListener("touchstart",e),()=>{document.removeEventListener("touchstart",e)}}),[]),null),xv=au.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,vv=au.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

    &:first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    }
  }
`,yv=au.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--primary-txt-color);
    font-weight: 600;

    @media (max-width: 540px) {
      margin-top: 16px;
    }
  }

  p {
    &:first-child {
      margin-top: 0px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`,wv=au.div`
  display: flex;
  flex-wrap: wrap;

  .box {
    display: flex;
    justify-content: center;
    vertical-align: auto;
    width: 100%;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .box-border {
    padding: 24px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 1024px) {
      border: solid 1px var(--secondary-bg);
    }
    @media only screen and (max-width: 960px) {
      border-radius: 10px;
    }
    @media only screen and (max-width: 540px) {
      border-radius: 6px;
    }

    p {
      margin-top: 16px;
      padding-left: 0.7em;
      text-indent: -0.7em;

      &:first-child {
        margin-top: 0;
        color: var(--primary-txt-color);
        font-weight: 600;
      }
    }
  }
`,bv=au.div`
  padding-top: 110px;
`,jv=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Av=au.div`
  max-width: 1400px;
  padding: 44px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding: 34px 0 11.5vw 0;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 6px;
  }

  .caption {
    color: var(--primary-txt-color);
    font-weight: 600;
  }

  // case3 specific //
  .caption-inner {
    color: var(--primary-txt-color);
    font-weight: 500;
  }

  .list {
    padding-left: 2.2em;
    text-indent: -2.2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 1024px) {
      padding-left: 1.2em;
      text-indent: -1.2em;
    }
    @media only screen and (max-width: 540px) {
      padding-left: 1em;
      text-indent: -1em;
    }
    @media only screen and (max-width: 400px) {
      padding-left: 0.8em;
      text-indent: -0.8em;
    }
    @media only screen and (max-width: 330px) {
      padding-left: 0.6em;
      text-indent: -0.6em;
    }

    p:first-child {
      margin-top: 0.5em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,Sv=au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,kv=au.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,Ev=au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  h2 {
    color: var(--primary-txt-color);
  }

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Cv=au.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`,Tv=au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  h2 {
    color: var(--primary-txt-color);
  }

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Pv=au.div`
  display: flex;
  flex-wrap: wrap;

  .box {
    display: flex;
    justify-content: center;
    vertical-align: auto;
    width: 100%;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .empathy-border {
    padding: 24px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 960px) {
      border-radius: 10px;
    }
    @media only screen and (max-width: 540px) {
      border: solid 1px var(--secondary-bg);
      border-radius: 6px;
    }

    p {
      margin-top: 16px;
      padding-left: 0.7em;
      text-indent: -0.7em;

      &:first-child {
        margin-top: 0;
        font-weight: 600;
      }
    }
  }
`,Iv=au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  h2 {
    color: var(--primary-txt-color);
  }

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }

  .analysis-lists {
    padding-left: 0.7em;
    text-indent: -0.7em;

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,Bv=au.div`
  display: flex;
  padding: 0 5%;
  margin-top: 44px;

  @media only screen and (max-width: 1920px) {
    margin-top: 34px;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 24px;
  }
  @media only screen and (max-width: 540px) {
    margin-top: 5.5vw;
  }

  .image {
    width: 17%;
    margin-right: auto;

    &:last-child {
      margin-right: 0px;
    }
  }
`,zv=au.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Dv=au.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,_v=au.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }

  .insights-lists {
    padding-left: 2em;
    text-indent: -2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 960px) {
      padding-left: 0.9em;
      text-indent: -0.9em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`,Mv=n.p+"static/media/Cathy.214a54490147d44fa818.png",Ov=n.p+"static/media/Allison.1fbd9514418faaf10868.png",Nv=n.p+"static/media/Compatitor_LA_ROCHE_POSAY.57ed3229f4d59516d1fc.png",Rv=n.p+"static/media/Compatitor_NEOSTRATA.e15f293123d0b7a6a1d2.png",Lv=n.p+"static/media/Compatitor_PERBLLE.9dbb21098c90ff71162a.png",Fv=n.p+"static/media/Compatitor_SOLVADERM.6907517fb093aa008c85.png",Uv=n.p+"static/media/Compatitor_City_Beauty.acf94a6d3552a335d727.png",Vv=n.p+"static/media/case1_insert.f904f6d455ecb20713f1.png",Yv=n.p+"static/media/case1_journey.765f24fa6c880e5bc05d.png",Qv=n.p+"static/media/case1_architecture.4d8c3b8f63f967e7abc4.png",Wv=n.p+"static/media/case1_flow.2e139695b98d81e2f9d8.png",Hv=n.p+"static/media/case1_overview.f6712f540c4569fdaed6.png",Gv=()=>{const e=Z();return(0,t.useEffect)((()=>{"true"===localStorage.getItem("authenticated")?window.scrollTo(0,0):e("/Article_Case1")}),[e]),(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsx)(pl.div,{animate:{y:0,opacity:1},initial:{y:700,opacity:0},exit:{y:-700,opacity:0},transition:{duration:.5},children:(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:Qm,id:""})}),(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Data - Analysis"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Information Architecture"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Brand Development"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"I\u2019ve been dedicated to problem-solving for RMDY, which comprises two brands Riversol Skin Care Solutions and Midnight Paloma."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,Te.jsx)(xv,{children:(0,Te.jsxs)(vv,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Riversol was established by board-certified dermatologist Dr. Jason Rivers, following over 20 years of clinical dermatology experience, to provide a safe skincare solution."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"This specializes in providing anti-aging solutions for individuals with sensitive skin and is committed to assisting anyone with skin-related concerns through its product offerings."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"The company\u2019s primary method for expanding its business has been a commitment to providing free products to individuals who may potentially become our customers through our free sample program. This initiative is aimed at introducing dependable, high-quality products and showcasing the value of the company to those in need of support."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"My assigned responsibility involves enhancing the quality of the website and all digital platforms associated with the free sample program to contribute to the company\u2019s overall profitability."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"To start, I\u2019ve strived to identify essential factors for enhancing the performance of our website and all digital platforms while fostering seamless communication within the team."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"It has been challenging to maintain a consistent UI, as it often requires a significant amount of time to establish and implement rules. Additionally, we have yet to define clear goals for guiding our teams toward our primary objectives."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Thoroughly clarifying every aspect, I created a robust foundational design system, integrating comprehensive UI/UX principles."})})]})}),(0,Te.jsx)(zv,{children:(0,Te.jsx)(Dv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"If I were given just one hour to address a problem, I'd invest as much as two-thirds of that time in thoroughly understanding and defining the problem."})})})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Hm,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"User Research"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"In our pursuit of designing user-centric experiences, I prioritize User Research, which involves delving into user behaviors, uncovering their needs, and analyzing their motivations through various observations, task analysis, and valuable feedback methodologies."}),(0,Te.jsx)("p",{children:"Our collaboration with SplitBase has enabled us to conduct a comprehensive survey, and in our qualitative analysis phase, we engaged in insightful interviews with numerous consumers who have made purchases of our products."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Insights:"}),(0,Te.jsx)("p",{children:"The survey proved invaluable in gaining a profound understanding of our users, pinpointing their primary pain points and aspirations. It allowed me to quantify the proportion of users exhibiting genuine interest in our products."}),(0,Te.jsx)("p",{children:"Analyzing the daily skincare challenges faced by these users served as a wellspring of inspiration, propelling me to ideate and devise optimal design solutions."})]})})})]}),(0,Te.jsxs)(Ev,{children:[(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"User Personas"}),(0,Te.jsx)("p",{children:"I utilized the survey findings to craft user personas, laying the foundation for the project ahead."})]})}),(0,Te.jsxs)(Cv,{children:[(0,Te.jsx)(gm,{children:(0,Te.jsx)(Im,{src:Mv,id:""})}),(0,Te.jsx)(gm,{children:(0,Te.jsxs)(xm,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Cathy - 60 year old with sensitive skin"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Cathy has had sensitive skin all her life, forcing her into having to understand good skincare at a very early age. Finding products that work without a reaction to her dry, reactive skin has been a difficult process \u2013 but something she\u2019s come to terms with, trying every product in every price range. Since finding Riversol, she\u2019s narrowed down her routine, and has freed up storage space in her bathroom because she no longer holds onto the graveyard of skincare that didn\u2019t work."})})]})})]}),(0,Te.jsxs)(Cv,{children:[(0,Te.jsx)(gm,{children:(0,Te.jsxs)(xm,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Allison - 70 year old who wants to look as young as she feels"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Allison is no stranger to the clich\xe9 of wanting to look younger than she feels. She\u2019s a relatively active and healthy person \u2013 but just wishes the lines on her face and neck never had to happen. Allison spent a lot of her younger years sunbathing and is now looking to correct the damage caused. Dark spots, lines, and general aging has her feeling less confident than usual. Her best friend is a breast cancer survivor who discovered Riversol through necessity \u2013 the only products that would help her skin after chemotherapy \u2013 and as soon as she told Allison about the sampler, she had to try it. Since then, she\u2019s been hooked."})})]})}),(0,Te.jsx)(gm,{children:(0,Te.jsx)(Im,{src:Ov,id:""})})]})]}),(0,Te.jsxs)(Tv,{children:[(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Empathy Map"}),(0,Te.jsx)("p",{children:"The empathy map serves as a collaborative tool that allows design teams to cultivate a deeper understanding of their customers. It is particularly useful for representing and empathizing with distinct user groups or customer segments."})]})}),(0,Te.jsxs)(Pv,{children:[(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"empathy-border",children:[(0,Te.jsx)("p",{children:"Says:"}),(0,Te.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"}),(0,Te.jsx)("p",{children:"\u2022 My daily routine is unstable"}),(0,Te.jsx)("p",{children:"\u2022 I don\u2019t have time to go to the store"}),(0,Te.jsx)("p",{children:"\u2022 I don\u2019t know how to take care of my skin"}),(0,Te.jsx)("p",{children:"\u2022 My sensitivities and allergies prevent buying products"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"empathy-border",children:[(0,Te.jsx)("p",{children:"Thinks:"}),(0,Te.jsx)("p",{children:"\u2022 I should try skincare products"}),(0,Te.jsx)("p",{children:"\u2022 I should prevent factor of skincare troubles"}),(0,Te.jsx)("p",{children:"\u2022 I should take care of my lifestyle"}),(0,Te.jsx)("p",{children:"\u2022 I should have a better routine"}),(0,Te.jsx)("p",{children:"\u2022 I should go to the skincare workshop"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"empathy-border",children:[(0,Te.jsx)("p",{children:"Does:"}),(0,Te.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"}),(0,Te.jsx)("p",{children:"\u2022 I try to see a recurring dermatologist"}),(0,Te.jsx)("p",{children:"\u2022 Pays for a subscription to find solutions but not help"}),(0,Te.jsx)("p",{children:"\u2022 I always buy different products"}),(0,Te.jsx)("p",{children:"\u2022 I try to ask products reputation people who are familiar with it"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"empathy-border",children:[(0,Te.jsx)("p",{children:"Feels:"}),(0,Te.jsx)("p",{children:"\u2022 Drained due to bad overall factors"}),(0,Te.jsx)("p",{children:"\u2022 I gave up finding a product due to sensitivities and allergies"}),(0,Te.jsx)("p",{children:"\u2022 I frustrated for finding all the things consuming time"}),(0,Te.jsx)("p",{children:"\u2022 Never seen ideal products for anti-aging"}),(0,Te.jsx)("p",{children:"\u2022 Sensitive skin products make more trouble my skin"})]})})})]})]}),(0,Te.jsx)(Iv,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Competitor Analysis"}),(0,Te.jsxs)(Bv,{children:[(0,Te.jsx)("div",{className:"image",children:(0,Te.jsx)(Bm,{src:Nv,id:""})}),(0,Te.jsx)("div",{className:"image",children:(0,Te.jsx)(Bm,{src:Rv,id:""})}),(0,Te.jsx)("div",{className:"image",children:(0,Te.jsx)(Bm,{src:Lv,id:""})}),(0,Te.jsx)("div",{className:"image",children:(0,Te.jsx)(Bm,{src:Fv,id:""})}),(0,Te.jsx)("div",{className:"image",children:(0,Te.jsx)(Bm,{src:Uv,id:""})})]}),(0,Te.jsx)("p",{children:"Through hands-on exploration of our competitors\u2019 websites and apps and an extensive review of Google feedback, I identified significant challenges and uncovered prevalent user issues."}),(0,Te.jsxs)("div",{className:"analysis-lists",children:[(0,Te.jsx)("p",{children:"\u2022 Clutter UI"}),(0,Te.jsx)("p",{children:"\u2022 Difficult to find the customer\u2019s type of issue"}),(0,Te.jsx)("p",{children:"\u2022 Overwhelming visuals"}),(0,Te.jsx)("p",{children:"\u2022 Confusing content placement"}),(0,Te.jsxs)("p",{children:["\u2022 Being hard to discover products along with your needs"," "]}),(0,Te.jsx)("p",{children:"\u2022 Products user guide issue"}),(0,Te.jsx)("p",{children:"\u2022 Complication of applying reward"}),(0,Te.jsx)("p",{children:"\u2022 Unclear method to apply seasonal rewards"}),(0,Te.jsx)("p",{children:"\u2022 Cart problems when combined with your rewards"}),(0,Te.jsx)("p",{children:"\u2022 Basic payment anxiety caused by unclear steps"})]})]})})}),(0,Te.jsx)(zv,{children:(0,Te.jsx)(Dv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"In-depth research is essential because it forms the foundation of informed design decisions."})})})}),(0,Te.jsxs)(Sv,{children:[(0,Te.jsx)(kv,{children:(0,Te.jsx)(Im,{src:Vv,id:""})}),(0,Te.jsx)(mm,{children:(0,Te.jsx)("p",{children:"Building on the insights gained from our research, I identified critical factors that compelled us to adopt a different approach, allowing us to continue progressing with the project."})})]}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Yv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"User Journey"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"The user journey, often represented through a visual journey map, illustrates the sequential path a person takes while interacting with a product, service, or brand. It encompasses the stages of discovery, the decision-making process regarding whether to make a purchase."})})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(om,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Qv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Information Architecture"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Effective design, when executed, seamlessly integrates with the user experience, becoming invisible. It\u2019s only in cases of poor design that its presence becomes noticeable. Information architecture plays a crucial role in ensuring a smooth and user-friendly experience."}),(0,Te.jsx)("p",{children:"This not only enhances the user experience but also minimizes the risk of costly redesigns and ensures that our product or interface is more likely to succeed in the market."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Wv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"User Flow"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"The user flow outlines the journey a user takes from the moment they launch the application to exploring all website functionalities and performing various actions."})})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(om,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Hv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Branding Style Guide"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"A brand style guide dictates the composition, design principles, and overall visual identity of a company\u2019s branding."}),(0,Te.jsx)("p",{children:"My role, which primarily centers on digital product design, played a pivotal role in unifying and enhancing the UI/UX understanding across teams."})]})]})})]})}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:Wm,id:""})})]})})]})},$v=n.p+"static/media/case2_filter_iterative.c2e07cd32259929a258d.png",Xv=n.p+"static/media/case2_filter_usability.e63445ae937330133626.png",Kv=n.p+"static/media/case2_filter_chip.3d0e590e6e5859e62be5.png",qv=n.p+"static/media/case2_filter_result.49927d2985381c4a634a.png",Jv=n.p+"static/media/case2_replenishment_mockup.ed294d6a0d3d95b5a6cf.png",Zv=n.p+"static/media/case2_replenishment_userflow.0effcadb9fda186dd9d8.png",ey=n.p+"static/media/case2_replenishment_result.063fafb1748b27ff9788.png",ty=n.p+"static/media/case2_about_identify.3e3ec1de06dc5ddbe144.png",ny=n.p+"static/media/case2_about_credibility.ac9d0a4709ef3928988d.png",iy=n.p+"static/media/case2_about_customerbase.9c9051373e458af4382d.png",ry=n.p+"static/media/case2_about_responsible.b3ef728f02bf13a95742.png",ay=n.p+"static/media/case2_about_insert.4896060db8f84244dd9f.png",sy=n.p+"static/media/case2_about_result.b7d9b4b20ed95dc3c026.png",oy=()=>{const e=Z();return(0,t.useEffect)((()=>{"true"===localStorage.getItem("authenticated")?window.scrollTo(0,0):e("/Article_Case2")}),[e]),(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsx)(pl.div,{animate:{y:0,opacity:1},initial:{y:700,opacity:0},exit:{y:-700,opacity:0},transition:{duration:.5},children:(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:hg,id:""})}),(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Motion Prototype"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Information Architecture"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Brand Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Vector - illustration"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Logo Design"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"Challenges are persistent, and recurring issues have been a concern. I've been dedicated to proactively addressing these factors."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,Te.jsx)(xv,{children:(0,Te.jsxs)(vv,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"The website faced several issues during my early stages of work."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"I came to understand that website maintenance is more than just enhancing product appeal based on my experience."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"When encountering an issue, I make a conscious effort to delve deeper beyond the apparent factors, resulting in a robust solution that can be implemented permanently."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"I applied these concepts to tackle challenges. The crucial element is to thoroughly examine the interrelated factors, and understand their origins and connections."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"It was necessary to approach challenges with flexibility, providing solutions that could offer long-lasting support as needed."})})]})}),(0,Te.jsx)(bv,{children:(0,Te.jsx)(jv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Designing Filters for Improved User Experience"})})})}),(0,Te.jsxs)(Av,{children:[(0,Te.jsxs)(um,{children:[(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Filter"}),(0,Te.jsx)("p",{children:"We\u2019ve identified areas for improvement, and our research and analysis highlight the potential contribution of filters to this enhancement."}),(0,Te.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Preventing time-consuming and frustrating experiences"}),(0,Te.jsx)("p",{children:"\u2022 Contribute to intuitive user searches"}),(0,Te.jsx)("p",{children:"\u2022 The design aids users in product search, even when they don\u2019t have a specific name in mind"}),(0,Te.jsx)("p",{children:"\u2022 Prioritizing clarity and simplicity for added value"}),(0,Te.jsx)("p",{children:"\u2022 Reducing excessive back-and-forth processes"})]})]}),(0,Te.jsx)("p",{children:"My past experience with filter projects reminded me I have encountered a lot of challenges that I never considered possible to be complicated so I decided to organize a meeting as a brainstorm to narrow down requirements before moving on to actual and We could decide on minimum conditions. We ended up deciding on four categories as prerequisites for creating the filter."})]}),(0,Te.jsxs)(wv,{children:[(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Filter\u2019s position:"}),(0,Te.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Applied filters:"}),(0,Te.jsx)("p",{children:"\u2022 Dropdown Menus and horizontal scrolling"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Specific criteria:"}),(0,Te.jsx)("p",{children:"\u2022 Creating distinction with differing Sizes"}),(0,Te.jsx)("p",{children:"\u2022 Assigning unique colors to each"})]})})}),(0,Te.jsx)("div",{className:"box",children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{className:"box-border",children:[(0,Te.jsx)("p",{children:"Selection Interaction:"}),(0,Te.jsx)("p",{children:"\u2022 Incorporate animation after select"}),(0,Te.jsx)("p",{children:"\u2022 Stay on the top tier as a conditional component"})]})})})]})]}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:pg,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Designing at the Initial Stage"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Initially, following our agreed-upon direction, I began creating a design standard for a Tip. This project introduced rounded corner designs, which were to be applied universally."}),(0,Te.jsx)("p",{children:"In Phase 2, the primary emphasis was on presenting the applied filters. While crafting them, I faced challenges in designing the product card UI due to space constraints. As a result, the initial prototype posed challenges in delivering a seamless user experience for applied filters."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:$v,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Iterative Design for Robust Solutions"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"I diligently tackled iterative desing to address the challenges, with a specific focus on managing chips after applying the filter. The process was approached from bottom to up."}),(0,Te.jsx)("p",{children:"In our effort to enhance intuitive user searches, the decision was made to implement a horizontal scroll where chips should be anchored at the bottom."}),(0,Te.jsx)("p",{children:"Additionally, it facilitates the utilization of space for product cards, effectively minimizing time-consuming interactions. The best solution might not have been found had it not been for the Phase 3 process."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Xv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Enhance Usability with Defined Criteria"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Making specific criteria a top priority for this project for has been proven by extensive research. Furthermore, employing this concept ensures an efficient search experience."}),(0,Te.jsx)("p",{children:"We arrived at a robust solution, and in Phase 4, I expanded the filter by incorporating a large drop-down menu to emphasize the presence of specific criteria."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Kv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Optimizing Chip Design"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"After establishing a solid design foundation and conducting practice, I refined the chip designs. The chips are grouped by different colors."}),(0,Te.jsx)("p",{children:"Consistency is a key principle in constructing a robust UI, so the colors are derived from the design overview I created earlier."}),(0,Te.jsx)("p",{children:"This chip design is grounded in the concept of aiding users in product search, even when they don\u2019t have a specific name in mind."})]})]})})]})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:qv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Result"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"This project demanded careful consideration to avoid unintentional user conflicts, which led to longer decision-making time for our teams than usual."}),(0,Te.jsx)("p",{children:"Although this case study doesn\u2019t delve into the mobile aspect, the concept remains the same; however, it requires a different approach to UX and UI design, especially considering that over 70% of our users employ mobile devices. I dedicated significant effort to mobile design."}),(0,Te.jsx)("p",{children:"Filtering is a substantial undertaking for designers and developers, but the real satisfaction comes when we successfully launch products that work seamlessly in the long run."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,Te.jsx)("p",{children:"The overall project has been highly satisfying, and we established a strong collaboration with the backend team."}),(0,Te.jsx)("p",{children:"A valuable insight gained is that sorting through filtering is a crucial and core element in improving user experience."}),(0,Te.jsx)("p",{children:"It\u2019s evident that this will further enhance the integration of marketing features, ultimately contributing to the company\u2019s profitability."})]})})})]}),(0,Te.jsx)(bv,{children:(0,Te.jsx)(jv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Creating an Auto-Replenishment Functionality"})})})}),(0,Te.jsx)(Av,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Auto-Replenishment"}),(0,Te.jsx)("p",{children:"The marketing team suggested the implementation of a new purchasing function to boost profitability. In alignment with their requirements, I initiated the project."}),(0,Te.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Developing a system for product subscription purchases"}),(0,Te.jsx)("p",{children:"\u2022 Designing an interface with the aesthetic-usability effect"}),(0,Te.jsx)("p",{children:"\u2022 Designing thoughtful functions with integrated benefits (Points and Discounts)"}),(0,Te.jsx)("p",{children:"\u2022 Building a seamless and stress-free user experience"}),(0,Te.jsx)("p",{children:"\u2022 Seamless integration with Auto-Replenishment related pages"})]})]})})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Jv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Mockup with Comprehensive Functionality"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Projects often come with tight deadlines, requiring a comprehensive approach from both designers and developers. Following a series of meetings, I began the mockup creation process."})})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Zv,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Ensuring Complete User Flow"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Before implementation, I prepared a mock-up, but by creating a user flow, I was able to identify missing elements and ensure the smooth integration of functions to avoid conflict in user experience."})})]})})]})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:ey,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Result"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Through several steps, We could launch addressed products that the core problem and user needs. Relatively, could be carried out without a critical problem but in the final steps after testing, we have changed a couple of UI to simplify in order to consider UX enhancements."})})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,Te.jsx)("p",{children:"The functions associated with different components need to be carefully considered within the user flow to ensure a seamless user experience."}),(0,Te.jsx)("p",{children:"If there are issues at any point, it can compromise the functionality of the entire system and impact profitability."}),(0,Te.jsx)("p",{children:"This approach has been invaluable in shaping my perspective."})]})})})]}),(0,Te.jsx)(bv,{children:(0,Te.jsx)(jv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Revamping the About Page to Emphasize Value"})})})}),(0,Te.jsx)(Av,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"About page"}),(0,Te.jsx)("p",{children:"It can be challenging to allocate resources to projects that don\u2019t directly contribute to profits, especially for a company in the midst of growth. Nevertheless, I always seek opportunities to create comprehensive value. The About page, which consolidates history, values, and mission in one place, serves as a crucial destination for users making their first visit to the website and whether to purchase or not. It presents an opportunity to enhance engagement, which is why we chose to revamp the About page."}),(0,Te.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Strengthening page credibility for a robust web age"}),(0,Te.jsx)("p",{children:"\u2022 Designing an interface with the aesthetic-usability effect"}),(0,Te.jsx)("p",{children:"\u2022 Capturing UI Design Trends"}),(0,Te.jsx)("p",{children:"\u2022 Add a section to tie to the purchase"})]})]})})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:ty,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Identifying Missing Significance First"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"In the initial project stage, I was fully engaged in generating mock-ups and brainstorming ideas. These are pivotal steps in establishing a solid foundation."}),(0,Te.jsx)("p",{children:"Key tasks included crafting a mission statement, outlining the company\u2019s narrative, showcasing its evolution, highlighting pivotal \u2018aha!\u2019 moments, clarifying the target audience, specifying the offered products/services, providing examples of past clients, and articulating the core values."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:ny,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Enhancing Credibility Aesthetically"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"I believe that the top priority for the About page is to reinforce and enhance credibility throughout this project."}),(0,Te.jsx)("p",{children:"In this process, I\u2019ve carefully curated aesthetically pleasing images and crafted a consistent design to enhance visual appeal and credibility."})]})]})})]})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:iy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(hm,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Expanding the Potential Customer Base"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"As I progressed with the project, focused on the potential profitability of the About page. Since most visitors to this page are new customers, there\u2019s a chance to turn them into a customer base with proper navigation."}),(0,Te.jsx)("p",{children:"To seize this opportunity, I created clickable Free Sample Kit Cards that guide users to the customer application page."}),(0,Te.jsx)("p",{children:"Additionally, I designed Cards that direct users to sorted collection pages based on their selected categories."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(fm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"I generated many user interface ideas, with a focus on creating visually engaging elements. Many users are naturally attracted to websites that incorporate interactive animations, making them visually appealing."}),(0,Te.jsx)("p",{children:"As a result of thorough research, I\u2019ve decided on the parallax animation function, along with icons, simplified assets, and a signature stump SVG, to create a more refined UI."}),(0,Te.jsx)("p",{children:"I incorporated those benefits in this phase, along with creating components for the business section."})]})})})]}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:ry,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Responsible Desingn"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"In the modern web industry, ensuring responsive user interface design for all devices is essential. On the flip side, websites lacking responsive design are often viewed as subpar."}),(0,Te.jsx)("p",{children:"Keeping this in mind, I never neglected the importance of this consideration, right from the project\u2019s initial stages."})]})]})})]})}),(0,Te.jsxs)(Sv,{children:[(0,Te.jsx)(kv,{children:(0,Te.jsx)(Im,{src:ay,id:""})}),(0,Te.jsx)(mm,{children:(0,Te.jsx)("p",{children:"A componentized responsive design approach allows for flexibility when addressing future challenges that may not have been discovered yet."})})]}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:sy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Result"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"I\u2019ve worked on similar projects before, but each project has unique and significant requirements. In the initial stages of the process, I dedicate time to thoroughly understand the project\u2019s needs. I then move on to subsequent steps, which include choosing the right color scheme, incorporating creative visuals, selecting appropriate staff photos, using readable fonts, and ensuring the page is responsive."}),(0,Te.jsx)("p",{children:"All of these aspects are essentially the foundation I focus on when creating an About page, and I apply similar principles to other similar pages."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{className:"text-bold",children:"Insigns:"}),(0,Te.jsx)("p",{children:"Insights: I\u2019ve come to understand that a compelling About page should be authentic, relatable, genuine, approachable, distinguished, and unique."}),(0,Te.jsx)("p",{children:"To achieve this, it\u2019s crucial to have a solid foundation that conveys the brand\u2019s concept or the specific task at hand."}),(0,Te.jsx)("p",{children:"If I can\u2019t find this foundation at the project\u2019s outset, I will explore it until I uncover it. This project has reinforced the significance of this approach in my work."})]})})})]}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:fg,id:""})})]})})]})},ly=n.p+"static/media/case3_snackbar_ensure.b7a6ac2b415683cdb5ef.png",cy=n.p+"static/media/case3_snackbar_responsive.6303b64b2e8633eaf8f9.png",dy=n.p+"static/media/case3_snackbar_result.6fc176091ef838d88891.png",uy=n.p+"static/media/case3_sales_integrating.94ec70b4c2420d5e7579.png",hy=n.p+"static/media/case3_sales_components.f4605146785c5582f696.png",py=n.p+"static/media/case3_sales_consistency.bb2cad17b00a8978efda.png",fy=n.p+"static/media/case3_pdp_integrating.fa94862e43c9d36293b9.png",my=n.p+"static/media/case3_pdp_usability.deaf1b69812af7611cde.png",gy=n.p+"static/media/case3_pdp_engagement.1c6798aef3c0f2ebb5ac.png",xy=n.p+"static/media/case3_pdp_additional.5a9ed76e7c65ebc517c7.png",vy=n.p+"static/media/case3_pdp_alternative.9a1ce06200f2dd301973.png",yy=n.p+"static/media/case3_pdp_result.8e6de7b3240ac5b1bdf5.png",wy=()=>{const e=Z();return(0,t.useEffect)((()=>{"true"===localStorage.getItem("authenticated")?window.scrollTo(0,0):e("/Article_Case3")}),[e]),(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsx)(pl.div,{animate:{y:0,opacity:1},initial:{y:700,opacity:0},exit:{y:-700,opacity:0},transition:{duration:.5},children:(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:jg,id:""})}),(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Data - Analysis"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"Supporting the continuous analysis and improvement of comprehensive products is a crucial process for driving company profitability. My role is dedicated to this endeavor."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,Te.jsx)(xv,{children:(0,Te.jsxs)(vv,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"People understand that the success of web products doesn't conclude upon their initial launch."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"What carries you for a strategy towards goals will require you to keep your eyes open to find out the pain points that users are feeling uncomfortable using and being unclear for enhancing appeal."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Strategizing for your goals involves a keen focus on identifying and addressing user discomfort and uncertainties, all aimed at improving the product's appeal."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"From that perspective, it signifies the initiation of a new project phase following the product launch."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Iterative testing is a prevalent method to improve product value, but it necessitates understanding the root causes behind user demands."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Identifying the crucial factors that end users require is a challenging task; nevertheless, I've used various tools and applications to clarify these points."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"This is a very exciting process, moving us closer to elevating the product to the next level."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"While users often associate aesthetically pleasing design with enhanced usability, it's important to recognize that real-world outcomes aren't solely determined by the Aesthetic-Usability Effect."})})]})}),(0,Te.jsx)(bv,{children:(0,Te.jsx)(jv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Optimizing Conversion Acquisition that A User-Centric KPI Strategy for Seamless Product Navigation and Profitability"})})})}),(0,Te.jsx)(im,{children:(0,Te.jsx)(Av,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"My strategy of KPI"}),(0,Te.jsx)("p",{children:"The KPI strategy I\u2019ve dedicated to revolves around optimizing conversion acquisition, ensuring every step aligns with user-centric design principles, and employing a systematic approach to refine and enhance the overall user experience."}),(0,Te.jsx)("p",{className:"caption",children:"Revitalizing User Engagement and Conversion Acquisition: Key Responsibilities of the Project"}),(0,Te.jsx)("p",{style:{color:"#010606"},children:"Primary priorities of KPI"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Organic traffic"}),(0,Te.jsx)("p",{children:"\u2022 Pages per session"}),(0,Te.jsx)("p",{children:"\u2022 Click rate"}),(0,Te.jsx)("p",{children:"\u2022 Cart abandonment rate"}),(0,Te.jsx)("p",{children:"\u2022 Bounce rate"}),(0,Te.jsx)("p",{children:"\u2022 Promotion page conversion rates"}),(0,Te.jsx)("p",{children:"\u2022 Product pages conversion rates"}),(0,Te.jsx)("p",{children:"\u2022 Landing Page Samples conversion rate"})]}),(0,Te.jsxs)("p",{style:{color:"#010606"},children:["Secondary priorities of KPI"," "]}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Customer Acquisition Cost"}),(0,Te.jsx)("p",{children:"\u2022 Customer Lifetime Value"}),(0,Te.jsx)("p",{children:"\u2022 Marketing Return on Investment"}),(0,Te.jsx)("p",{children:"\u2022 Churn Rate"}),(0,Te.jsx)("p",{children:"\u2022 Full Product"})]}),(0,Te.jsx)("p",{children:"This involves iterative design practices, incorporating pricing psychology, and utilizing A/B testing for continuous improvement. The goal is to maximize engagement, support profitability, and provide a seamless, intuitive experience for users navigating the products and making purchase decisions."}),(0,Te.jsx)("p",{children:"Frequently, exercising patience is crucial to achieving meaningful contributions. The secure and experiential process not only forms the foundation for results but also brings expansive joy to my work through the satisfaction of accomplishments."})]})})})}),(0,Te.jsx)(bv,{children:(0,Te.jsx)(jv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Create a component for running sales promotions between regular terms"})})})}),(0,Te.jsx)(Av,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Snackbar"}),(0,Te.jsx)("p",{children:"The marketing team suggested the implementation of a new purchasing function to boost profitability. In alignment with their requirements, I initiated the project."}),(0,Te.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Develop a component that provides users with a sense of benefit"}),(0,Te.jsx)("p",{children:"\u2022 Ensure that the presence of the component doesn\u2019t disrupt the user experience"}),(0,Te.jsx)("p",{children:"\u2022 Integrate it with other components for seamless functionality"}),(0,Te.jsx)("p",{children:"\u2022 Enhance the conversion rate through a deliverable"})]})]})})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:ly,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Ensure and attempte"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"To prevent issues from becoming permanent, it\u2019s crucial to start by exploring the layout and space to meet the necessary requirements. This involves brainstorming ideas, implementing them, and then analyzing them with teams or collaborators to identify any unclear factors."}),(0,Te.jsx)("p",{children:"Indeed, the iterative process I practiced helped uncover and address potential problems. It\u2019s a proactive approach to identifying issues and finding solutions to them, ensuring a smoother and more effective project development."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:cy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Responsive Design and Attention to Detail"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Absolutely, ensuring responsible design and paying attention to details play a crucial role in maintaining the consistency of branding and leveraging the Aesthetic-Usability Effect."}),(0,Te.jsx)("p",{children:"Meeting requirements within limited spaces can be a challenge, but effective collaboration with a copywriter through mutual discussion can help address this challenge."})]})]})})]})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:dy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Result"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"After the iterative process, the clarification of various factors greatly contributed to our decision-making."}),(0,Te.jsx)("p",{children:"The final product transformed into an interactive component, effectively addressing limited spacing while engaging users through non-disruptive animations."}),(0,Te.jsx)("p",{children:"Additionally, the introduction of a dedicated tag to associate this function with product pages and collections became a crucial necessity and also, The analysis of Snackbar results demonstrated a consistent increase in the conversion rate, as indicated in monthly reports."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,Te.jsx)("p",{children:"The website had previously assigned a modal window to notify customers who hadn\u2019t subscribed."}),(0,Te.jsx)("p",{children:"Initially, when I proposed the first ideas of modal windows used in this project, there was concern about whether this was too inhibited when had proposed the first ideas of modal windows used in this project."}),(0,Te.jsx)("p",{children:"However, after considering various options, I decided to incorporate static animations that could be used flexibly. While creative implementation is essential and enjoyable, it must also account for the limits and requirements of the project, and balancing creative implementation with limitations and requirements is essential, and I am always dedicated to approaching this with empathy."})]})})})]}),(0,Te.jsx)(bv,{children:(0,Te.jsx)(jv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Implemented user-friendly upselling and cross-selling for an enhanced customer experience."})})})}),(0,Te.jsx)(Av,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Component-based Design & Content for Cross-sell and Upsell"}),(0,Te.jsx)("p",{children:"Refined the user interface and user experience for upselling and cross-selling based on our analysis, aiming for increased engagement and ultimately driving customer purchases."}),(0,Te.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Explored strategies to enhance product attraction within limited space"}),(0,Te.jsx)("p",{children:"\u2022 Ensured consistent UI design across all product"}),(0,Te.jsx)("p",{children:"\u2022 Contributed to enhancing user engagement"}),(0,Te.jsx)("p",{children:"\u2022 Creating designs that support intuitive user interactions and usability"})]}),(0,Te.jsx)("p",{className:"caption",children:"Project Clarification: Ensuring Understanding and Effective Execution"}),(0,Te.jsxs)("p",{children:[(0,Te.jsx)("p",{className:"caption-inner",children:"Upselling"}),"Upselling is a strategy where a seller encourages a customer to buy additional items or upgrades that may be more expensive, ultimately aiming to increase the overall sale value."]}),(0,Te.jsxs)("p",{children:[(0,Te.jsx)("p",{className:"caption-inner",children:"Cross-selling"}),"Cross-selling is a sales technique to get the customer to spend more money by adding more products from other categories than the product being viewed or purchased."]}),(0,Te.jsx)("p",{children:"*This case study primarily focuses on cross-selling strategies."})]})})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:uy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Integrating design elements for a logical user experience"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"The project required an effective and intuitive component to support profitability so, to increase engagement, I applied pricing psychology and designed fundamental components in a logical manner."}),(0,Te.jsx)("p",{children:"Psychology alone may not solve all problems, but integrating psychological concepts can guide effective A/B testing to enhance a product."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:hy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Creating interactive components with a seamless user experience"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"The static version before the user selects is indicated right-side picture. After selecting, the frame will be filled gradually with a blue color as indicated left side."}),(0,Te.jsx)("p",{children:"In this project, addressing the constraints of design space has primarily involved incorporating animation, which, in turn, enhances intuitive user interaction."}),(0,Te.jsx)("p",{children:"Additionally, products are added only when the user selects \u201cadd to cart,\u201d regardless of when they added them. This ensures that the user stays on the page, providing a seamless user experience."})]})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:py,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Maintaining consistency through an agile style guide"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Meeting requirements within limited spaces can be a challenge, but effective collaboration with a copywriter through mutual discussion can help address this challenge."})})]})})]})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:sy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Result"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"In conclusion, addressing challenges comprehensively was a crucial process in this project. The outcome contributed to improving key metrics, particularly in terms of profitability."}),(0,Te.jsx)("p",{children:"Implementing a component design is crucial for ensuring easy maintenance post-deployment, a key priority for cutting-edge digital products. This approach facilitates optimization after the analysis process."}),(0,Te.jsx)("p",{children:"Indeed, considering ease of optimization post-analysis is crucial for efficient time management and overall project success."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,Te.jsx)("p",{children:"Absolutely, considering the user\u2019s perspective and preferences is key to creating effective upselling and cross-selling strategies. Avoiding obnoxious and intrusive approaches and aligning with user expectations can significantly enhance the success of such techniques."}),(0,Te.jsx)("p",{children:"It\u2019s essential to pre-make decisions based on user needs and wants before moving forward with the implementation. Through a systematic approach, I am confident that the products will be robust and cater to our specific requirements."})]})})})]}),(0,Te.jsx)(bv,{children:(0,Te.jsx)(jv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"Enhancing the Product Page for Maximum Engagement and Conversion with Crafting Seamless User Journeys"})})})}),(0,Te.jsx)(Av,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"Optimizing Product Pages"}),(0,Te.jsx)("p",{children:"Analyzing metrics over time, my teams identified opportunities to enhance customer lifetime value. The analysis highlighted areas for improvement on product pages, prompting me to conceptualize ways to unlock their fundamental potential."}),(0,Te.jsx)("p",{children:"Outstanding product pages can not make the risk of profit loss, even when serving as landing pages without extensive preparation. A well-designed page has sufficient space to effectively communicate product value and benefits to customers so The key lies in the designer\u2019s ability to create a thoughtful and considerate page that takes various factors into account."}),(0,Te.jsx)("p",{children:"Based on the identified factors, we made the decision to proceed with this project."}),(0,Te.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,Te.jsxs)("div",{className:"list",children:[(0,Te.jsx)("p",{children:"\u2022 Enhanced the overall design based on collaborative analysis with team members"}),(0,Te.jsx)("p",{children:"\u2022 Consciously integrate profitable elements and an aesthetic focus"}),(0,Te.jsx)("p",{children:"\u2022 Integrating a section to PDP page with high enhancement opportunities"}),(0,Te.jsx)("p",{children:"\u2022 Presenting prototypes to incorporate new ideas discovered during the project\u2019s progression"})]})]})})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:fy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(hm,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Integrating requirements seamlessly into the design"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"Following the team\u2019s analysis, a decision was reached regarding the elements to be incorporated into the hero section, following these guidelines, three prototypes were created."}),(0,Te.jsxs)("p",{children:[(0,Te.jsx)("p",{style:{color:"#010606"},children:"Video:"}),"I incorporated the video in the hero section, keeping in mind our discussion about the importance of exercising caution for appropriateness, preserving a seamless user experience with clear guidelines based on requirements, and through that, recognizing the importance of conveying information about the product."]})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(fm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsxs)("p",{children:[(0,Te.jsx)("p",{style:{color:"#010606"},children:"Promotion offer:"}),"There\u2019s no reason to exclude benefits; the key is finding the right way to seamlessly integrate valuable information with visually compelling material to make it stand out effectively."]}),(0,Te.jsxs)("p",{children:[(0,Te.jsx)("p",{style:{color:"#010606"},children:"Simplify info with make it effective:"}),"Analyzing abandonment and bounce rates revealed an inappropriate layout affecting user experience. Considering the analysis, replacing organic text with icons and a thoughtful redesign have clarified and addressed these issues."]})]})})})]}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:my,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Enhancing interactive usability"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Resolved the prior issue of a cluttered and non-communicative UI by incorporating and adjusting CSS animations, collapses, drop-downs, and icons. This maintained consistency with the defined design, resulting in improved communication with customers."})})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:gy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Organize to maintain user engagement"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"These design components were assigned based on the I created in the previous steps, resulting in a more aesthetic and improved usability. However, for analysis purposes, we took to hide the reviews section and overlay it, deviating from the theoretical approach."})})]})})]})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:xy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(hm,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Explore additional opportunities"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"I identified opportunities to integrate new functions, providing additional avenues for product purchases. We\u2019ve been implementing a website function to help users determine their skin type, a significant contributor to enhancing user engagement."}),(0,Te.jsx)("p",{children:"Additionally, the Product Detail Page (PDP) features the same function, although it was not initially optimized for a seamless user experience tied to the purchase and enhancement of increase rate. I have since made adjustments to enhance its usability."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(fm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Ensure alignment with UI design standards, incorporate clear call-to-action (CTA) elements, and display the included products prominently within the modal window components."})})})})]}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:vy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Explore alternative perspectives and leverage ideas from different angles"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Apart from this project, I\u2019ve been contemplating the use of sticky components to enhance the user experience and potentially boost profitability. Recognizing the need for a valid reason, I meticulously crafted this component for proposing to the team as it could present another valuable opportunity."})})]})})]})}),(0,Te.jsxs)(im,{children:[(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:yy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Result"})}),(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{children:"In the final decision, we opted to integrate a sticky CTA that smoothly hides when it\u2019s not in focus on essential elements. Additionally, the CTA has been transformed into a distinct section, enhancing the navigation of the eye trajectory."}),(0,Te.jsx)("p",{children:"Product pages in any industry have the potential to be both the first and last page a visitor interacts with. Therefore, it is essential that these pages are designed to independently meet and support the diverse needs of customers."})]})]})})]}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(fm,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"The quality of products will be evaluated through the PDP, which directly links to the purchase. This will occur if the page or app fulfills crystal-clear conditions, enclosing all relevant factors."})})})}),(0,Te.jsx)(yv,{children:(0,Te.jsx)(xm,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("p",{className:"text-bold",children:"Insigns:"}),(0,Te.jsx)("p",{children:"Through this project, I\u2019ve acquired valuable knowledge and gained insight into iterative analysis. Continuously analyzing these pages is crucial for contributing to the growth of the company."})]})})})]}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:Ag,id:""})})]})})]})},by=n.p+"static/media/caseMp_credibility.a46691f8565df3292f16.png",jy=n.p+"static/media/caseMp_consistency.92e2eb4f15045f708ebb.png",Ay=n.p+"static/media/caseMp_reuseable.a7aaed80061edd3f2951.png",Sy=()=>{const e=Z();return(0,t.useEffect)((()=>{"true"===localStorage.getItem("authenticated")?window.scrollTo(0,0):e("/Article_Case4")}),[e]),(0,Te.jsxs)(tm,{children:[(0,Te.jsx)(em,{}),(0,Te.jsx)(pl.div,{animate:{y:0,opacity:1},initial:{y:700,opacity:0},exit:{y:-700,opacity:0},transition:{duration:.5},children:(0,Te.jsxs)(nm,{children:[(0,Te.jsx)(ym,{children:(0,Te.jsx)(Pm,{src:Bg,id:""})}),(0,Te.jsxs)(wm,{children:[(0,Te.jsx)(jm,{children:(0,Te.jsxs)(bm,{children:[(0,Te.jsxs)(Am,{children:[(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Interface Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"User Experience Design"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Wireframing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Prototyping"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Usability Testing"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Design identity systems"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"E-commerce Optimization"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Brand Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Agile Development"})}),(0,Te.jsx)(Sm,{children:(0,Te.jsx)("p",{children:"Vector - illustration"})})]}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h1",{children:"It was crucial to improve the website's usability, which had previously missed out on significant potential, within a limited timeframe."})})]})}),(0,Te.jsx)(jm,{children:(0,Te.jsxs)(km,{children:[(0,Te.jsx)(Em,{children:(0,Te.jsx)("p",{children:"CREDITS"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,Te.jsx)(Cm,{children:(0,Te.jsx)("p",{children:"Manager: Taylor Rogers"})})]})})]}),(0,Te.jsx)(xv,{children:(0,Te.jsxs)(vv,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Midnight Paloma is committed to the concept of clean beauty, using all-natural ingredients to craft signature formulas that align with eco-conscious living."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Founder Tayler Rogers, drawing from 12 years of retail experience, has carefully curated and developed Midnight Paloma into a brand that embodies modern design, clean ingredients, and self-care rituals, including the use of skin tools."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"We have devoted ourselves to maintaining the stunning appeal of our brands. However, our primary source of profit has traditionally been through retail, with less focus on our e-commerce platform."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"Nonetheless, we've come to recognize the significant untapped potential that Midnight Paloma holds in the online market."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"My responsibility was to completely overhaul the website within a tight timeframe."})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("h3",{children:"My team had well-defined ideas and inspiration in place, allowing me to dedicate my efforts to shaping these ideas into tangible creations."})})]})}),(0,Te.jsx)(zv,{children:(0,Te.jsx)(Dv,{children:(0,Te.jsx)("div",{children:(0,Te.jsx)("span",{children:"I believe that aligning everyone\u2019s perspective on the design would saves time across all projects."})})})}),(0,Te.jsx)(_v,{children:(0,Te.jsx)(um,{children:(0,Te.jsxs)("div",{children:[(0,Te.jsx)("h2",{children:"insights:"}),(0,Te.jsx)("p",{children:"As we conducted our analysis, we uncovered multiple factors for enhancing usability in both the User Interface and User Experience."}),(0,Te.jsxs)("div",{className:"insights-lists",children:[(0,Te.jsx)("p",{children:"\u2022 clutter UI"}),(0,Te.jsx)("p",{children:"\u2022 difficulty in locating the products users needed"}),(0,Te.jsx)("p",{children:"\u2022 the interface lacks alignment with the brand\u2019s customer demographic"}),(0,Te.jsx)("p",{children:"\u2022 the design does not give priority to aligning with brand directions and customer expectations"}),(0,Te.jsx)("p",{children:"\u2022 updating for promotional purposes takes an excessive amount of time"})]})]})})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:by,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Credibility in Design"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Based on my research and experience, the Aesthetic Usability Effect proves to be a powerful tool. Users tend to perceive aesthetically pleasing products as more usable. Therefore, we concentrated on enhancing our design by incorporating the results of our analysis, leading us to introduce a two-column design in the hero section and a grid-based layout."})})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(om,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:jy,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Consistency in UI design"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"In every project, aligning the concept with users\u2019 needs while maintaining credibility is essential. One fundamental principle in UI design is consistency, as it serves to reduce cognitive load. Consistency simplifies the user\u2019s understanding of how to use the product, diminishing the mental effort required to learn and navigate the interface. I am dedicated to upholding this principle in the development of collections and product pages."})})]})})]})}),(0,Te.jsx)(im,{children:(0,Te.jsxs)(am,{children:[(0,Te.jsx)(dm,{children:(0,Te.jsx)(Tm,{src:Ay,id:""})}),(0,Te.jsx)(dm,{children:(0,Te.jsxs)(um,{children:[(0,Te.jsx)("div",{children:(0,Te.jsx)("h2",{children:"Reusable User Interfaces"})}),(0,Te.jsx)("div",{children:(0,Te.jsx)("p",{children:"Addressing the challenge of consistently updating the website for promotions and blogs, involving multiple team members, required the implementation of a reusable component design system. This approach not only supported rapid updates but also ensured consistency. Effective communication with a developer became indispensable for the success of this project."})})]})})]})}),(0,Te.jsx)(_m,{children:(0,Te.jsx)(Tm,{src:zg,id:""})})]})})]})},ky=e=>{let{children:t}=e;return"true"===localStorage.getItem("authenticated")?t:(0,Te.jsx)(pe,{to:"/",replace:!0})};const Ey=function(){return(0,Te.jsx)(Fh,{children:(0,Te.jsxs)(je,{basename:"/",children:[(0,Te.jsxs)(ge,{children:[(0,Te.jsx)(fe,{path:"/",element:(0,Te.jsx)(Gf,{})}),(0,Te.jsx)(fe,{path:"/case1Page",element:(0,Te.jsx)(ag,{})}),(0,Te.jsx)(fe,{path:"/visible/Article_Case1",element:(0,Te.jsx)(ky,{children:(0,Te.jsx)(Gv,{})})}),(0,Te.jsx)(fe,{path:"/case2Page",element:(0,Te.jsx)(gg,{})}),(0,Te.jsx)(fe,{path:"/visible/Article_Case2",element:(0,Te.jsx)(ky,{children:(0,Te.jsx)(oy,{})})}),(0,Te.jsx)(fe,{path:"/case3Page",element:(0,Te.jsx)(kg,{})}),(0,Te.jsx)(fe,{path:"/visible/Article_Case3",element:(0,Te.jsx)(ky,{children:(0,Te.jsx)(wy,{})})}),(0,Te.jsx)(fe,{path:"/case4Page",element:(0,Te.jsx)(_g,{})}),(0,Te.jsx)(fe,{path:"/visible/Article_Case4",element:(0,Te.jsx)(ky,{children:(0,Te.jsx)(Sy,{})})}),(0,Te.jsx)(fe,{path:"/larryPage",element:(0,Te.jsx)(Zg,{})}),(0,Te.jsx)(fe,{path:"/vectorPage",element:(0,Te.jsx)(jx,{})}),(0,Te.jsx)(fe,{path:"/darumaPage",element:(0,Te.jsx)(Nx,{})}),(0,Te.jsx)(fe,{path:"/portfolioPage",element:(0,Te.jsx)(Kx,{})}),(0,Te.jsx)(fe,{path:"/dailyUiPage",element:(0,Te.jsx)(Wx,{})}),(0,Te.jsx)(fe,{path:"/wedding",element:(0,Te.jsx)(pv,{})}),(0,Te.jsx)(fe,{path:"/weddingParty",element:(0,Te.jsx)(mv,{})}),(0,Te.jsx)(fe,{path:"*",element:(0,Te.jsx)(Zx,{})})]}),(0,Te.jsx)(gv,{})]})})};r.render((0,Te.jsx)(Fh,{children:(0,Te.jsx)(t.StrictMode,{children:(0,Te.jsx)(Ey,{})})}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.9271dd76.js.map