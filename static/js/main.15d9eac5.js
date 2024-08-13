/*! For license information please see main.15d9eac5.js.LICENSE.txt */
(()=>{var e={9002:e=>{var t=.1,n="function"===typeof Float32Array;function i(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function a(e){return 3*e}function s(e,t,n){return((i(t,n)*e+r(t,n))*e+a(t))*e}function o(e,t,n){return 3*i(t,n)*e*e+2*r(t,n)*e+a(t)}function l(e){return e}e.exports=function(e,i,r,a){if(!(0<=e&&e<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===i&&r===a)return l;for(var d=n?new Float32Array(11):new Array(11),c=0;c<11;++c)d[c]=s(c*t,e,r);function u(n){for(var i=0,a=1;10!==a&&d[a]<=n;++a)i+=t;--a;var l=i+(n-d[a])/(d[a+1]-d[a])*t,c=o(l,e,r);return c>=.001?function(e,t,n,i){for(var r=0;r<4;++r){var a=o(t,n,i);if(0===a)return t;t-=(s(t,n,i)-e)/a}return t}(n,l,e,r):0===c?l:function(e,t,n,i,r){var a,o,l=0;do{(a=s(o=t+(n-t)/2,i,r)-e)>0?n=o:t=o}while(Math.abs(a)>1e-7&&++l<10);return o}(n,i,i+t,e,r)}return function(e){return 0===e?0:1===e?1:s(u(e),i,a)}}},381:(e,t,n)=>{var i="Expected a function",r=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,h="object"==typeof self&&self&&self.Object===Object&&self,p=u||h||Function("return this")(),f=Object.prototype.toString,m=Math.max,g=Math.min,x=function(){return p.Date.now()};function v(e,t,n){var r,a,s,o,l,d,c=0,u=!1,h=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function f(t){var n=r,i=a;return r=a=void 0,c=t,o=e.apply(i,n)}function v(e){var n=e-d;return void 0===d||n>=t||n<0||h&&e-c>=s}function b(){var e=x();if(v(e))return j(e);l=setTimeout(b,function(e){var n=t-(e-d);return h?g(n,s-(e-c)):n}(e))}function j(e){return l=void 0,p&&r?f(e):(r=a=void 0,o)}function A(){var e=x(),n=v(e);if(r=arguments,a=this,d=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(b,t),u?f(e):o}(d);if(h)return l=setTimeout(b,t),f(d)}return void 0===l&&(l=setTimeout(b,t)),o}return t=w(t)||0,y(n)&&(u=!!n.leading,s=(h="maxWait"in n)?m(w(n.maxWait)||0,t):s,p="trailing"in n?!!n.trailing:p),A.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=d=a=l=void 0},A.flush=function(){return void 0===l?o:j(x())},A}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==a}(e))return r;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=l.test(e);return n||d.test(e)?c(e.slice(2),n?2:8):o.test(e)?r:+e}e.exports=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),v(e,t,{leading:r,maxWait:t,trailing:a})}},1497:(e,t,n)=>{"use strict";var i=n(3218);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,s){if(s!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2730:(e,t,n)=>{"use strict";var i=n(5043),r=n(8853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(o[e]=t,e=0;e<t.length;e++)s.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},f={};function m(e,t,n,i,r,a,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,i){var r=g.hasOwnProperty(t)?g[t]:null;(null!==r?0!==r.type:i||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,i){if(null===t||"undefined"===typeof t||function(e,t,n,i){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!i&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,i))return!0;if(i)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,i)&&(n=null),i||null===r?function(e){return!!u.call(f,e)||!u.call(p,e)&&(h.test(e)?f[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,i=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),j=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var D=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var _=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=_&&e[_]||e["@@iterator"])?e:null}var O,N=Object.assign;function R(e){if(void 0===O)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var L=!1;function F(e,t){if(!e||L)return"";L=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&"string"===typeof d.stack){for(var r=d.stack.split("\n"),a=i.stack.split("\n"),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(1!==s||1!==o)do{if(s--,0>--o||r[s]!==a[o]){var l="\n"+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=o);break}}}finally{L=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function U(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function Q(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case A:return"Fragment";case j:return"Portal";case S:return"Profiler";case k:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case B:return null!==(t=e.displayName||null)?t:Q(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return Q(e(t))}catch(n){}}return null}function Y(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function H(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){i=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(e){i=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=W(e)?e.checked?"true":"false":e.value),(e=i)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function $(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,i=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){q(e,t);var n=V(t.value),i=t.type;if(null!=n)"number"===i?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===i||"reset"===i)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!("submit"!==i&&"reset"!==i||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(i&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function ie(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ae(e,t){var n=V(t.value),i=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=i&&(e.defaultValue=""+i)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function oe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?oe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var de,ce,ue=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((de=de||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=de.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,i){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var i=0===n.indexOf("--"),r=me(n,t[n],i);"float"===n&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}Object.keys(pe).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var xe=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var je=null,Ae=null,ke=null;function Se(e){if(e=yr(e)){if("function"!==typeof je)throw Error(a(280));var t=e.stateNode;t&&(t=br(t),je(e.stateNode,e.type,t))}}function Ee(e){Ae?ke?ke.push(e):ke=[e]:Ae=e}function Ce(){if(Ae){var e=Ae,t=ke;if(ke=Ae=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function Te(e,t){return e(t)}function Pe(){}var Ie=!1;function Be(e,t,n){if(Ie)return e(t,n);Ie=!0;try{return Te(e,t,n)}finally{Ie=!1,(null!==Ae||null!==ke)&&(Pe(),Ce())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var i=br(n);if(null===i)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(i=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!i;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var De=!1;if(c)try{var _e={};Object.defineProperty(_e,"passive",{get:function(){De=!0}}),window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch(ce){De=!1}function Me(e,t,n,i,r,a,s,o,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(c){this.onError(c)}}var Oe=!1,Ne=null,Re=!1,Le=null,Fe={onError:function(e){Oe=!0,Ne=e}};function Ue(e,t,n,i,r,a,s,o,l){Oe=!1,Ne=null,Me.apply(Fe,arguments)}function Qe(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ye(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(Qe(e)!==e)throw Error(a(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Qe(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(null===r)break;var s=r.alternate;if(null===s){if(null!==(i=r.return)){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ve(r),e;if(s===i)return Ve(r),t;s=s.sibling}throw Error(a(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,i=s;break}if(l===i){o=!0,i=r,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,i=r;break}if(l===i){o=!0,i=s,n=r;break}l=l.sibling}if(!o)throw Error(a(189))}}if(n.alternate!==i)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?He(e):null}function He(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=He(e);if(null!==t)return t;e=e.sibling}return null}var Ge=r.unstable_scheduleCallback,Xe=r.unstable_cancelCallback,$e=r.unstable_shouldYield,Ke=r.unstable_requestPaint,qe=r.unstable_now,Je=r.unstable_getCurrentPriorityLevel,Ze=r.unstable_ImmediatePriority,et=r.unstable_UserBlockingPriority,tt=r.unstable_NormalPriority,nt=r.unstable_LowPriority,it=r.unstable_IdlePriority,rt=null,at=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ot(e)/lt|0)|0},ot=Math.log,lt=Math.LN2;var dt=64,ct=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,s=268435455&n;if(0!==s){var o=s&~r;0!==o?i=ut(o):0!==(a&=s)&&(i=ut(a))}else 0!==(s=n&~r)?i=ut(s):0!==a&&(i=ut(a));if(0===i)return 0;if(0!==t&&t!==i&&0===(t&r)&&((r=i&-i)>=(a=t&-t)||16===r&&0!==(4194240&a)))return t;if(0!==(4&i)&&(i|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=i;0<t;)r=1<<(n=31-st(t)),i|=e[n],t&=~r;return i}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=dt;return 0===(4194240&(dt<<=1))&&(dt=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-st(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var yt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var bt,jt,At,kt,St,Et=!1,Ct=[],Tt=null,Pt=null,It=null,Bt=new Map,zt=new Map,Dt=[],_t="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Bt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Ot(e,t,n,i,r,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},null!==t&&(null!==(t=yr(t))&&jt(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,null!==r&&-1===t.indexOf(r)&&t.push(r),e)}function Nt(e){var t=vr(e.target);if(null!==t){var n=Qe(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ye(n)))return e.blockedOn=t,void St(e.priority,(function(){At(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Rt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=$t(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yr(n))&&jt(t),e.blockedOn=n,!1;var i=new(n=e.nativeEvent).constructor(n.type,n);we=i,n.target.dispatchEvent(i),we=null,t.shift()}return!0}function Lt(e,t,n){Rt(e)&&n.delete(t)}function Ft(){Et=!1,null!==Tt&&Rt(Tt)&&(Tt=null),null!==Pt&&Rt(Pt)&&(Pt=null),null!==It&&Rt(It)&&(It=null),Bt.forEach(Lt),zt.forEach(Lt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ft)))}function Qt(e){function t(t){return Ut(t,e)}if(0<Ct.length){Ut(Ct[0],e);for(var n=1;n<Ct.length;n++){var i=Ct[n];i.blockedOn===e&&(i.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==Pt&&Ut(Pt,e),null!==It&&Ut(It,e),Bt.forEach(t),zt.forEach(t),n=0;n<Dt.length;n++)(i=Dt[n]).blockedOn===e&&(i.blockedOn=null);for(;0<Dt.length&&null===(n=Dt[0]).blockedOn;)Nt(n),null===n.blockedOn&&Dt.shift()}var Yt=w.ReactCurrentBatchConfig,Vt=!0;function Wt(e,t,n,i){var r=yt,a=Yt.transition;Yt.transition=null;try{yt=1,Gt(e,t,n,i)}finally{yt=r,Yt.transition=a}}function Ht(e,t,n,i){var r=yt,a=Yt.transition;Yt.transition=null;try{yt=4,Gt(e,t,n,i)}finally{yt=r,Yt.transition=a}}function Gt(e,t,n,i){if(Vt){var r=$t(e,t,n,i);if(null===r)Vi(e,t,i,Xt,n),Mt(e,i);else if(function(e,t,n,i,r){switch(t){case"focusin":return Tt=Ot(Tt,e,t,n,i,r),!0;case"dragenter":return Pt=Ot(Pt,e,t,n,i,r),!0;case"mouseover":return It=Ot(It,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Bt.set(a,Ot(Bt.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,zt.set(a,Ot(zt.get(a)||null,e,t,n,i,r)),!0}return!1}(r,e,t,n,i))i.stopPropagation();else if(Mt(e,i),4&t&&-1<_t.indexOf(e)){for(;null!==r;){var a=yr(r);if(null!==a&&bt(a),null===(a=$t(e,t,n,i))&&Vi(e,t,i,Xt,n),a===r)break;r=a}null!==r&&i.stopPropagation()}else Vi(e,t,i,null,n)}}var Xt=null;function $t(e,t,n,i){if(Xt=null,null!==(e=vr(e=be(i))))if(null===(t=Qe(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ye(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,i=n.length,r="value"in qt?qt.value:qt.textContent,a=r.length;for(e=0;e<i&&n[e]===r[e];e++);var s=i-e;for(t=1;t<=s&&n[i-t]===r[a-t];t++);return Zt=r.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,i,r,a){for(var s in this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var sn,on,ln,dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(dn),un=N({},dn,{view:0,detail:0}),hn=an(un),pn=N({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(sn=e.screenX-ln.screenX,on=e.screenY-ln.screenY):on=sn=0,ln=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:on}}),fn=an(pn),mn=an(N({},pn,{dataTransfer:0})),gn=an(N({},un,{relatedTarget:0})),xn=an(N({},dn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=N({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(vn),wn=an(N({},dn,{data:0})),bn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},An={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=An[e])&&!!t[e]}function Sn(){return kn}var En=N({},un,{key:function(e){if(e.key){var t=bn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?jn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=an(En),Tn=an(N({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(N({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),In=an(N({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=N({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=an(Bn),Dn=[9,13,27,32],_n=c&&"CompositionEvent"in window,Mn=null;c&&"documentMode"in document&&(Mn=document.documentMode);var On=c&&"TextEvent"in window&&!Mn,Nn=c&&(!_n||Mn&&8<Mn&&11>=Mn),Rn=String.fromCharCode(32),Ln=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Dn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Qn=!1;var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Yn[e.type]:"textarea"===t}function Wn(e,t,n,i){Ee(i),0<(t=Hi(t,"onChange")).length&&(n=new cn("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Hn=null,Gn=null;function Xn(e){Ri(e,0)}function $n(e){if(G(wr(e)))return e}function Kn(e,t){if("change"===e)return t}var qn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),Zn="function"===typeof ei.oninput}Jn=Zn}else Jn=!1;qn=Jn&&(!document.documentMode||9<document.documentMode)}function ti(){Hn&&(Hn.detachEvent("onpropertychange",ni),Gn=Hn=null)}function ni(e){if("value"===e.propertyName&&$n(Gn)){var t=[];Wn(t,Gn,e,be(e)),Be(Xn,t)}}function ii(e,t,n){"focusin"===e?(ti(),Gn=n,(Hn=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ri(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return $n(Gn)}function ai(e,t){if("click"===e)return $n(t)}function si(e,t){if("input"===e||"change"===e)return $n(t)}var oi="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function li(e,t){if(oi(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!u.call(t,r)||!oi(e[r],t[r]))return!1}return!0}function di(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var n,i=di(e);for(e=0;i;){if(3===i.nodeType){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=di(i)}}function ui(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ui(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hi(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(i){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fi(e){var t=hi(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ui(n.ownerDocument.documentElement,n)){if(null!==i&&pi(n))if(t=i.start,void 0===(e=i.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=void 0===i.end?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=ci(n,a);var s=ci(n,i);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mi=c&&"documentMode"in document&&11>=document.documentMode,gi=null,xi=null,vi=null,yi=!1;function wi(e,t,n){var i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yi||null==gi||gi!==X(i)||("selectionStart"in(i=gi)&&pi(i)?i={start:i.selectionStart,end:i.selectionEnd}:i={anchorNode:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset},vi&&li(vi,i)||(vi=i,0<(i=Hi(xi,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gi)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ji={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},Ai={},ki={};function Si(e){if(Ai[e])return Ai[e];if(!ji[e])return e;var t,n=ji[e];for(t in n)if(n.hasOwnProperty(t)&&t in ki)return Ai[e]=n[t];return e}c&&(ki=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);var Ei=Si("animationend"),Ci=Si("animationiteration"),Ti=Si("animationstart"),Pi=Si("transitionend"),Ii=new Map,Bi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zi(e,t){Ii.set(e,t),l(t,[e])}for(var Di=0;Di<Bi.length;Di++){var _i=Bi[Di];zi(_i.toLowerCase(),"on"+(_i[0].toUpperCase()+_i.slice(1)))}zi(Ei,"onAnimationEnd"),zi(Ci,"onAnimationIteration"),zi(Ti,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(Pi,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function Ni(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,i,r,s,o,l,d){if(Ue.apply(this,arguments),Oe){if(!Oe)throw Error(a(198));var c=Ne;Oe=!1,Ne=null,Re||(Re=!0,Le=c)}}(i,t,void 0,e),e.currentTarget=null}function Ri(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,d=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Ni(r,o,d),a=l}else for(s=0;s<i.length;s++){if(l=(o=i[s]).instance,d=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Ni(r,o,d),a=l}}}if(Re)throw e=Le,Re=!1,Le=null,e}function Li(e,t){var n=t[mr];void 0===n&&(n=t[mr]=new Set);var i=e+"__bubble";n.has(i)||(Yi(t,e,2,!1),n.add(i))}function Fi(e,t,n){var i=0;t&&(i|=4),Yi(n,e,i,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[Ui]){e[Ui]=!0,s.forEach((function(t){"selectionchange"!==t&&(Oi.has(t)||Fi(t,!1,e),Fi(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ui]||(t[Ui]=!0,Fi("selectionchange",!1,t))}}function Yi(e,t,n,i){switch(Kt(t)){case 1:var r=Wt;break;case 4:r=Ht;break;default:r=Gt}n=r.bind(null,t,n,e),r=void 0,!De||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(r=!0),i?void 0!==r?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):void 0!==r?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Vi(e,t,n,i,r){var a=i;if(0===(1&t)&&0===(2&t)&&null!==i)e:for(;;){if(null===i)return;var s=i.tag;if(3===s||4===s){var o=i.stateNode.containerInfo;if(o===r||8===o.nodeType&&o.parentNode===r)break;if(4===s)for(s=i.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===r||8===l.nodeType&&l.parentNode===r))return;s=s.return}for(;null!==o;){if(null===(s=vr(o)))return;if(5===(l=s.tag)||6===l){i=a=s;continue e}o=o.parentNode}}i=i.return}Be((function(){var i=a,r=be(n),s=[];e:{var o=Ii.get(e);if(void 0!==o){var l=cn,d=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Cn;break;case"focusin":d="focus",l=gn;break;case"focusout":d="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pn;break;case Ei:case Ci:case Ti:l=xn;break;case Pi:l=In;break;case"scroll":l=hn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var c=0!==(4&t),u=!c&&"scroll"===e,h=c?null!==o?o+"Capture":null:o;c=[];for(var p,f=i;null!==f;){var m=(p=f).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==h&&(null!=(m=ze(f,h))&&c.push(Wi(f,m,p)))),u)break;f=f.return}0<c.length&&(o=new l(o,d,null,n,r),s.push({event:o,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===we||!(d=n.relatedTarget||n.fromElement)||!vr(d)&&!d[fr])&&(l||o)&&(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=i,null!==(d=(d=n.relatedTarget||n.toElement)?vr(d):null)&&(d!==(u=Qe(d))||5!==d.tag&&6!==d.tag)&&(d=null)):(l=null,d=i),l!==d)){if(c=fn,m="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",h="onPointerEnter",f="pointer"),u=null==l?o:wr(l),p=null==d?o:wr(d),(o=new c(m,f+"leave",l,n,r)).target=u,o.relatedTarget=p,m=null,vr(r)===i&&((c=new c(h,f+"enter",d,n,r)).target=p,c.relatedTarget=u,m=c),u=m,l&&d)e:{for(h=d,f=0,p=c=l;p;p=Gi(p))f++;for(p=0,m=h;m;m=Gi(m))p++;for(;0<f-p;)c=Gi(c),f--;for(;0<p-f;)h=Gi(h),p--;for(;f--;){if(c===h||null!==h&&c===h.alternate)break e;c=Gi(c),h=Gi(h)}c=null}else c=null;null!==l&&Xi(s,o,l,c,!1),null!==d&&null!==u&&Xi(s,u,d,c,!0)}if("select"===(l=(o=i?wr(i):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=Kn;else if(Vn(o))if(qn)g=si;else{g=ri;var x=ii}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=ai);switch(g&&(g=g(e,i))?Wn(s,g,n,r):(x&&x(e,o,i),"focusout"===e&&(x=o._wrapperState)&&x.controlled&&"number"===o.type&&ee(o,"number",o.value)),x=i?wr(i):window,e){case"focusin":(Vn(x)||"true"===x.contentEditable)&&(gi=x,xi=i,vi=null);break;case"focusout":vi=xi=gi=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,wi(s,n,r);break;case"selectionchange":if(mi)break;case"keydown":case"keyup":wi(s,n,r)}var v;if(_n)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Qn?Fn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Nn&&"ko"!==n.locale&&(Qn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Qn&&(v=en()):(Jt="value"in(qt=r)?qt.value:qt.textContent,Qn=!0)),0<(x=Hi(i,y)).length&&(y=new wn(y,e,null,n,r),s.push({event:y,listeners:x}),v?y.data=v:null!==(v=Un(n))&&(y.data=v))),(v=On?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Ln=!0,Rn);case"textInput":return(e=t.data)===Rn&&Ln?null:e;default:return null}}(e,n):function(e,t){if(Qn)return"compositionend"===e||!_n&&Fn(e,t)?(e=en(),Zt=Jt=qt=null,Qn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(i=Hi(i,"onBeforeInput")).length&&(r=new wn("onBeforeInput","beforeinput",null,n,r),s.push({event:r,listeners:i}),r.data=v))}Ri(s,t)}))}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",i=[];null!==e;){var r=e,a=r.stateNode;5===r.tag&&null!==a&&(r=a,null!=(a=ze(e,n))&&i.unshift(Wi(e,a,r)),null!=(a=ze(e,t))&&i.push(Wi(e,a,r))),e=e.return}return i}function Gi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xi(e,t,n,i,r){for(var a=t._reactName,s=[];null!==n&&n!==i;){var o=n,l=o.alternate,d=o.stateNode;if(null!==l&&l===i)break;5===o.tag&&null!==d&&(o=d,r?null!=(l=ze(n,a))&&s.unshift(Wi(n,l,o)):r||null!=(l=ze(n,a))&&s.push(Wi(n,l,o))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var $i=/\r\n?/g,Ki=/\u0000|\uFFFD/g;function qi(e){return("string"===typeof e?e:""+e).replace($i,"\n").replace(Ki,"")}function Ji(e,t,n){if(t=qi(t),qi(e)!==t&&n)throw Error(a(425))}function Zi(){}var er=null,tr=null;function nr(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ir="function"===typeof setTimeout?setTimeout:void 0,rr="function"===typeof clearTimeout?clearTimeout:void 0,ar="function"===typeof Promise?Promise:void 0,sr="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ar?function(e){return ar.resolve(null).then(e).catch(or)}:ir;function or(e){setTimeout((function(){throw e}))}function lr(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===i)return e.removeChild(r),void Qt(t);i--}else"$"!==n&&"$?"!==n&&"$!"!==n||i++;n=r}while(n);Qt(t)}function dr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function cr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ur=Math.random().toString(36).slice(2),hr="__reactFiber$"+ur,pr="__reactProps$"+ur,fr="__reactContainer$"+ur,mr="__reactEvents$"+ur,gr="__reactListeners$"+ur,xr="__reactHandles$"+ur;function vr(e){var t=e[hr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[hr]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=cr(e);null!==e;){if(n=e[hr])return n;e=cr(e)}return t}n=(e=n).parentNode}return null}function yr(e){return!(e=e[hr]||e[fr])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wr(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function br(e){return e[pr]||null}var jr=[],Ar=-1;function kr(e){return{current:e}}function Sr(e){0>Ar||(e.current=jr[Ar],jr[Ar]=null,Ar--)}function Er(e,t){Ar++,jr[Ar]=e.current,e.current=t}var Cr={},Tr=kr(Cr),Pr=kr(!1),Ir=Cr;function Br(e,t){var n=e.type.contextTypes;if(!n)return Cr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r,a={};for(r in n)a[r]=t[r];return i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zr(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Dr(){Sr(Pr),Sr(Tr)}function _r(e,t,n){if(Tr.current!==Cr)throw Error(a(168));Er(Tr,t),Er(Pr,n)}function Mr(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,"function"!==typeof i.getChildContext)return n;for(var r in i=i.getChildContext())if(!(r in t))throw Error(a(108,Y(e)||"Unknown",r));return N({},n,i)}function Or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,Ir=Tr.current,Er(Tr,e),Er(Pr,Pr.current),!0}function Nr(e,t,n){var i=e.stateNode;if(!i)throw Error(a(169));n?(e=Mr(e,t,Ir),i.__reactInternalMemoizedMergedChildContext=e,Sr(Pr),Sr(Tr),Er(Tr,e)):Sr(Pr),Er(Pr,n)}var Rr=null,Lr=!1,Fr=!1;function Ur(e){null===Rr?Rr=[e]:Rr.push(e)}function Qr(){if(!Fr&&null!==Rr){Fr=!0;var e=0,t=yt;try{var n=Rr;for(yt=1;e<n.length;e++){var i=n[e];do{i=i(!0)}while(null!==i)}Rr=null,Lr=!1}catch(r){throw null!==Rr&&(Rr=Rr.slice(e+1)),Ge(Ze,Qr),r}finally{yt=t,Fr=!1}}return null}var Yr=[],Vr=0,Wr=null,Hr=0,Gr=[],Xr=0,$r=null,Kr=1,qr="";function Jr(e,t){Yr[Vr++]=Hr,Yr[Vr++]=Wr,Wr=e,Hr=t}function Zr(e,t,n){Gr[Xr++]=Kr,Gr[Xr++]=qr,Gr[Xr++]=$r,$r=e;var i=Kr;e=qr;var r=32-st(i)-1;i&=~(1<<r),n+=1;var a=32-st(t)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Kr=1<<32-st(t)+r|n<<r|i,qr=a+e}else Kr=1<<a|n<<r|i,qr=e}function ea(e){null!==e.return&&(Jr(e,1),Zr(e,1,0))}function ta(e){for(;e===Wr;)Wr=Yr[--Vr],Yr[Vr]=null,Hr=Yr[--Vr],Yr[Vr]=null;for(;e===$r;)$r=Gr[--Xr],Gr[Xr]=null,qr=Gr[--Xr],Gr[Xr]=null,Kr=Gr[--Xr],Gr[Xr]=null}var na=null,ia=null,ra=!1,aa=null;function sa(e,t){var n=Bd(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ia=dr(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ia=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==$r?{id:Kr,overflow:qr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Bd(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ia=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function da(e){if(ra){var t=ia;if(t){var n=t;if(!oa(e,t)){if(la(e))throw Error(a(418));t=dr(n.nextSibling);var i=na;t&&oa(e,t)?sa(i,n):(e.flags=-4097&e.flags|2,ra=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ra=!1,na=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function ua(e){if(e!==na)return!1;if(!ra)return ca(e),ra=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nr(e.type,e.memoizedProps)),t&&(t=ia)){if(la(e))throw ha(),Error(a(418));for(;t;)sa(e,t),t=dr(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ia=dr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ia=null}}else ia=na?dr(e.stateNode.nextSibling):null;return!0}function ha(){for(var e=ia;e;)e=dr(e.nextSibling)}function pa(){ia=na=null,ra=!1}function fa(e){null===aa?aa=[e]:aa.push(e)}var ma=w.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var i=n.stateNode}if(!i)throw Error(a(147,e));var r=i,s=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=r.refs;null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var i=t.deletions;null===i?(t.deletions=[n],t.flags|=16):i.push(n)}}function n(n,i){if(!e)return null;for(;null!==i;)t(n,i),i=i.sibling;return null}function i(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t){return(e=Dd(e,t)).index=0,e.sibling=null,e}function s(t,n,i){return t.index=i,e?null!==(i=t.alternate)?(i=i.index)<n?(t.flags|=2,n):i:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,i){return null===t||6!==t.tag?((t=Nd(n,e.mode,i)).return=e,t):((t=r(t,n)).return=e,t)}function d(e,t,n,i){var a=n.type;return a===A?u(e,t,n.props.children,i,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===z&&va(a)===t.type)?((i=r(t,n.props)).ref=ga(e,t,n),i.return=e,i):((i=_d(n.type,n.key,n.props,null,e.mode,i)).ref=ga(e,t,n),i.return=e,i)}function c(e,t,n,i){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Rd(n,e.mode,i)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function u(e,t,n,i,a){return null===t||7!==t.tag?((t=Md(n,e.mode,i,a)).return=e,t):((t=r(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nd(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case b:return(n=_d(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case j:return(t=Rd(t,e.mode,n)).return=e,t;case z:return h(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Md(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function p(e,t,n,i){var r=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==r?null:l(e,t,""+n,i);if("object"===typeof n&&null!==n){switch(n.$$typeof){case b:return n.key===r?d(e,t,n,i):null;case j:return n.key===r?c(e,t,n,i):null;case z:return p(e,t,(r=n._init)(n._payload),i)}if(te(n)||M(n))return null!==r?null:u(e,t,n,i,null);xa(e,n)}return null}function f(e,t,n,i,r){if("string"===typeof i&&""!==i||"number"===typeof i)return l(t,e=e.get(n)||null,""+i,r);if("object"===typeof i&&null!==i){switch(i.$$typeof){case b:return d(t,e=e.get(null===i.key?n:i.key)||null,i,r);case j:return c(t,e=e.get(null===i.key?n:i.key)||null,i,r);case z:return f(e,t,n,(0,i._init)(i._payload),r)}if(te(i)||M(i))return u(t,e=e.get(n)||null,i,r,null);xa(t,i)}return null}function m(r,a,o,l){for(var d=null,c=null,u=a,m=a=0,g=null;null!==u&&m<o.length;m++){u.index>m?(g=u,u=null):g=u.sibling;var x=p(r,u,o[m],l);if(null===x){null===u&&(u=g);break}e&&u&&null===x.alternate&&t(r,u),a=s(x,a,m),null===c?d=x:c.sibling=x,c=x,u=g}if(m===o.length)return n(r,u),ra&&Jr(r,m),d;if(null===u){for(;m<o.length;m++)null!==(u=h(r,o[m],l))&&(a=s(u,a,m),null===c?d=u:c.sibling=u,c=u);return ra&&Jr(r,m),d}for(u=i(r,u);m<o.length;m++)null!==(g=f(u,r,m,o[m],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?d=g:c.sibling=g,c=g);return e&&u.forEach((function(e){return t(r,e)})),ra&&Jr(r,m),d}function g(r,o,l,d){var c=M(l);if("function"!==typeof c)throw Error(a(150));if(null==(l=c.call(l)))throw Error(a(151));for(var u=c=null,m=o,g=o=0,x=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var y=p(r,m,v.value,d);if(null===y){null===m&&(m=x);break}e&&m&&null===y.alternate&&t(r,m),o=s(y,o,g),null===u?c=y:u.sibling=y,u=y,m=x}if(v.done)return n(r,m),ra&&Jr(r,g),c;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=h(r,v.value,d))&&(o=s(v,o,g),null===u?c=v:u.sibling=v,u=v);return ra&&Jr(r,g),c}for(m=i(r,m);!v.done;g++,v=l.next())null!==(v=f(m,r,g,v.value,d))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),o=s(v,o,g),null===u?c=v:u.sibling=v,u=v);return e&&m.forEach((function(e){return t(r,e)})),ra&&Jr(r,g),c}return function e(i,a,s,l){if("object"===typeof s&&null!==s&&s.type===A&&null===s.key&&(s=s.props.children),"object"===typeof s&&null!==s){switch(s.$$typeof){case b:e:{for(var d=s.key,c=a;null!==c;){if(c.key===d){if((d=s.type)===A){if(7===c.tag){n(i,c.sibling),(a=r(c,s.props.children)).return=i,i=a;break e}}else if(c.elementType===d||"object"===typeof d&&null!==d&&d.$$typeof===z&&va(d)===c.type){n(i,c.sibling),(a=r(c,s.props)).ref=ga(i,c,s),a.return=i,i=a;break e}n(i,c);break}t(i,c),c=c.sibling}s.type===A?((a=Md(s.props.children,i.mode,l,s.key)).return=i,i=a):((l=_d(s.type,s.key,s.props,null,i.mode,l)).ref=ga(i,a,s),l.return=i,i=l)}return o(i);case j:e:{for(c=s.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===s.containerInfo&&a.stateNode.implementation===s.implementation){n(i,a.sibling),(a=r(a,s.children||[])).return=i,i=a;break e}n(i,a);break}t(i,a),a=a.sibling}(a=Rd(s,i.mode,l)).return=i,i=a}return o(i);case z:return e(i,a,(c=s._init)(s._payload),l)}if(te(s))return m(i,a,s,l);if(M(s))return g(i,a,s,l);xa(i,s)}return"string"===typeof s&&""!==s||"number"===typeof s?(s=""+s,null!==a&&6===a.tag?(n(i,a.sibling),(a=r(a,s)).return=i,i=a):(n(i,a),(a=Nd(s,i.mode,l)).return=i,i=a),o(i)):n(i,a)}}var wa=ya(!0),ba=ya(!1),ja=kr(null),Aa=null,ka=null,Sa=null;function Ea(){Sa=ka=Aa=null}function Ca(e){var t=ja.current;Sr(ja),e._currentValue=t}function Ta(e,t,n){for(;null!==e;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==i&&(i.childLanes|=t)):null!==i&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){Aa=e,Sa=ka=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yo=!0),e.firstContext=null)}function Ia(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},null===ka){if(null===Aa)throw Error(a(308));ka=e,Aa.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var Ba=null;function za(e){null===Ba?Ba=[e]:Ba.push(e)}function Da(e,t,n,i){var r=t.interleaved;return null===r?(n.next=n,za(t)):(n.next=r.next,r.next=n),t.interleaved=n,_a(e,i)}function _a(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ma=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ra(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function La(e,t,n){var i=e.updateQueue;if(null===i)return null;if(i=i.shared,0!==(2&Tl)){var r=i.pending;return null===r?t.next=t:(t.next=r.next,r.next=t),i.pending=t,_a(e,n)}return null===(r=i.interleaved)?(t.next=t,za(i)):(t.next=r.next,r.next=t),i.interleaved=t,_a(e,n)}function Fa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ua(e,t){var n=e.updateQueue,i=e.alternate;if(null!==i&&n===(i=i.updateQueue)){var r=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?r=a=s:a=a.next=s,n=n.next}while(null!==n);null===a?r=a=t:a=a.next=t}else r=a=t;return n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qa(e,t,n,i){var r=e.updateQueue;Ma=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(null!==o){r.shared.pending=null;var l=o,d=l.next;l.next=null,null===s?a=d:s.next=d,s=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==s&&(null===o?c.firstBaseUpdate=d:o.next=d,c.lastBaseUpdate=l))}if(null!==a){var u=r.baseState;for(s=0,c=d=l=null,o=a;;){var h=o.lane,p=o.eventTime;if((i&h)===h){null!==c&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var f=e,m=o;switch(h=t,p=n,m.tag){case 1:if("function"===typeof(f=m.payload)){u=f.call(p,u,h);break e}u=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(h="function"===typeof(f=m.payload)?f.call(p,u,h):f)||void 0===h)break e;u=N({},u,h);break e;case 2:Ma=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(h=r.effects)?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(d=c=p,l=u):c=c.next=p,s|=h;if(null===(o=o.next)){if(null===(o=r.shared.pending))break;o=(h=o).next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}if(null===c&&(l=u),r.baseState=l,r.firstBaseUpdate=d,r.lastBaseUpdate=c,null!==(t=r.shared.interleaved)){r=t;do{s|=r.lane,r=r.next}while(r!==t)}else null===a&&(r.shared.lanes=0);Ol|=s,e.lanes=s,e.memoizedState=u}}function Ya(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(null!==r){if(i.callback=null,i=n,"function"!==typeof r)throw Error(a(191,r));r.call(i)}}}var Va={},Wa=kr(Va),Ha=kr(Va),Ga=kr(Va);function Xa(e){if(e===Va)throw Error(a(174));return e}function $a(e,t){switch(Er(Ga,t),Er(Ha,e),Er(Wa,Va),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Sr(Wa),Er(Wa,t)}function Ka(){Sr(Wa),Sr(Ha),Sr(Ga)}function qa(e){Xa(Ga.current);var t=Xa(Wa.current),n=le(t,e.type);t!==n&&(Er(Ha,e),Er(Wa,n))}function Ja(e){Ha.current===e&&(Sr(Wa),Sr(Ha))}var Za=kr(0);function es(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function ns(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var is=w.ReactCurrentDispatcher,rs=w.ReactCurrentBatchConfig,as=0,ss=null,os=null,ls=null,ds=!1,cs=!1,us=0,hs=0;function ps(){throw Error(a(321))}function fs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!oi(e[n],t[n]))return!1;return!0}function ms(e,t,n,i,r,s){if(as=s,ss=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=null===e||null===e.memoizedState?Js:Zs,e=n(i,r),cs){s=0;do{if(cs=!1,us=0,25<=s)throw Error(a(301));s+=1,ls=os=null,t.updateQueue=null,is.current=eo,e=n(i,r)}while(cs)}if(is.current=qs,t=null!==os&&null!==os.next,as=0,ls=os=ss=null,ds=!1,t)throw Error(a(300));return e}function gs(){var e=0!==us;return us=0,e}function xs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ls?ss.memoizedState=ls=e:ls=ls.next=e,ls}function vs(){if(null===os){var e=ss.alternate;e=null!==e?e.memoizedState:null}else e=os.next;var t=null===ls?ss.memoizedState:ls.next;if(null!==t)ls=t,os=e;else{if(null===e)throw Error(a(310));e={memoizedState:(os=e).memoizedState,baseState:os.baseState,baseQueue:os.baseQueue,queue:os.queue,next:null},null===ls?ss.memoizedState=ls=e:ls=ls.next=e}return ls}function ys(e,t){return"function"===typeof t?t(e):t}function ws(e){var t=vs(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=os,r=i.baseQueue,s=n.pending;if(null!==s){if(null!==r){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(null!==r){s=r.next,i=i.baseState;var l=o=null,d=null,c=s;do{var u=c.lane;if((as&u)===u)null!==d&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===d?(l=d=h,o=i):d=d.next=h,ss.lanes|=u,Ol|=u}c=c.next}while(null!==c&&c!==s);null===d?o=i:d.next=l,oi(i,t.memoizedState)||(yo=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=d,n.lastRenderedState=i}if(null!==(e=n.interleaved)){r=e;do{s=r.lane,ss.lanes|=s,Ol|=s,r=r.next}while(r!==e)}else null===r&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bs(e){var t=vs(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(null!==r){n.pending=null;var o=r=r.next;do{s=e(s,o.action),o=o.next}while(o!==r);oi(s,t.memoizedState)||(yo=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function js(){}function As(e,t){var n=ss,i=vs(),r=t(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,yo=!0),i=i.queue,Ms(Es.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||null!==ls&&1&ls.memoizedState.tag){if(n.flags|=2048,Is(9,Ss.bind(null,n,i,r,t),void 0,null),null===Pl)throw Error(a(349));0!==(30&as)||ks(n,t,r)}return r}function ks(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ss(e,t,n,i){t.value=n,t.getSnapshot=i,Cs(t)&&Ts(e)}function Es(e,t,n){return n((function(){Cs(t)&&Ts(e)}))}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!oi(e,n)}catch(i){return!0}}function Ts(e){var t=_a(e,1);null!==t&&nd(t,e,1,-1)}function Ps(e){var t=xs();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t.queue=e,e=e.dispatch=Gs.bind(null,ss,e),[t.memoizedState,e]}function Is(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},null===(t=ss.updateQueue)?(t={lastEffect:null,stores:null},ss.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Bs(){return vs().memoizedState}function zs(e,t,n,i){var r=xs();ss.flags|=e,r.memoizedState=Is(1|t,n,void 0,void 0===i?null:i)}function Ds(e,t,n,i){var r=vs();i=void 0===i?null:i;var a=void 0;if(null!==os){var s=os.memoizedState;if(a=s.destroy,null!==i&&fs(i,s.deps))return void(r.memoizedState=Is(t,n,a,i))}ss.flags|=e,r.memoizedState=Is(1|t,n,a,i)}function _s(e,t){return zs(8390656,8,e,t)}function Ms(e,t){return Ds(2048,8,e,t)}function Os(e,t){return Ds(4,2,e,t)}function Ns(e,t){return Ds(4,4,e,t)}function Rs(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ls(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ds(4,4,Rs.bind(null,t,e),n)}function Fs(){}function Us(e,t){var n=vs();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&fs(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Qs(e,t){var n=vs();t=void 0===t?null:t;var i=n.memoizedState;return null!==i&&null!==t&&fs(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Ys(e,t,n){return 0===(21&as)?(e.baseState&&(e.baseState=!1,yo=!0),e.memoizedState=n):(oi(n,t)||(n=mt(),ss.lanes|=n,Ol|=n,e.baseState=!0),t)}function Vs(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var i=rs.transition;rs.transition={};try{e(!1),t()}finally{yt=n,rs.transition=i}}function Ws(){return vs().memoizedState}function Hs(e,t,n){var i=td(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Xs(e))$s(t,n);else if(null!==(n=Da(e,t,n,i))){nd(n,e,i,ed()),Ks(n,t,i)}}function Gs(e,t,n){var i=td(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xs(e))$s(t,r);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var s=t.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,s)){var l=t.interleaved;return null===l?(r.next=r,za(t)):(r.next=l.next,l.next=r),void(t.interleaved=r)}}catch(d){}null!==(n=Da(e,t,r,i))&&(nd(n,e,i,r=ed()),Ks(n,t,i))}}function Xs(e){var t=e.alternate;return e===ss||null!==t&&t===ss}function $s(e,t){cs=ds=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ks(e,t,n){if(0!==(4194240&n)){var i=t.lanes;n|=i&=e.pendingLanes,t.lanes=n,vt(e,n)}}var qs={readContext:Ia,useCallback:ps,useContext:ps,useEffect:ps,useImperativeHandle:ps,useInsertionEffect:ps,useLayoutEffect:ps,useMemo:ps,useReducer:ps,useRef:ps,useState:ps,useDebugValue:ps,useDeferredValue:ps,useTransition:ps,useMutableSource:ps,useSyncExternalStore:ps,useId:ps,unstable_isNewReconciler:!1},Js={readContext:Ia,useCallback:function(e,t){return xs().memoizedState=[e,void 0===t?null:t],e},useContext:Ia,useEffect:_s,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zs(4194308,4,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return zs(4,2,e,t)},useMemo:function(e,t){var n=xs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=xs();return t=void 0!==n?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Hs.bind(null,ss,e),[i.memoizedState,e]},useRef:function(e){return e={current:e},xs().memoizedState=e},useState:Ps,useDebugValue:Fs,useDeferredValue:function(e){return xs().memoizedState=e},useTransition:function(){var e=Ps(!1),t=e[0];return e=Vs.bind(null,e[1]),xs().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ss,r=xs();if(ra){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Pl)throw Error(a(349));0!==(30&as)||ks(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,_s(Es.bind(null,i,s,e),[e]),i.flags|=2048,Is(9,Ss.bind(null,i,s,n,t),void 0,null),n},useId:function(){var e=xs(),t=Pl.identifierPrefix;if(ra){var n=qr;t=":"+t+"R"+(n=(Kr&~(1<<32-st(Kr)-1)).toString(32)+n),0<(n=us++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=hs++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zs={readContext:Ia,useCallback:Us,useContext:Ia,useEffect:Ms,useImperativeHandle:Ls,useInsertionEffect:Os,useLayoutEffect:Ns,useMemo:Qs,useReducer:ws,useRef:Bs,useState:function(){return ws(ys)},useDebugValue:Fs,useDeferredValue:function(e){return Ys(vs(),os.memoizedState,e)},useTransition:function(){return[ws(ys)[0],vs().memoizedState]},useMutableSource:js,useSyncExternalStore:As,useId:Ws,unstable_isNewReconciler:!1},eo={readContext:Ia,useCallback:Us,useContext:Ia,useEffect:Ms,useImperativeHandle:Ls,useInsertionEffect:Os,useLayoutEffect:Ns,useMemo:Qs,useReducer:bs,useRef:Bs,useState:function(){return bs(ys)},useDebugValue:Fs,useDeferredValue:function(e){var t=vs();return null===os?t.memoizedState=e:Ys(t,os.memoizedState,e)},useTransition:function(){return[bs(ys)[0],vs().memoizedState]},useMutableSource:js,useSyncExternalStore:As,useId:Ws,unstable_isNewReconciler:!1};function to(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function no(e,t,n,i){n=null===(n=n(i,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var io={isMounted:function(e){return!!(e=e._reactInternals)&&Qe(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ed(),r=td(e),a=Ra(i,r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nd(t,e,r,i),Fa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ed(),r=td(e),a=Ra(i,r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=La(e,a,r))&&(nd(t,e,r,i),Fa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ed(),i=td(e),r=Ra(n,i);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=La(e,r,i))&&(nd(t,e,i,n),Fa(t,e,i))}};function ro(e,t,n,i,r,a,s){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(i,a,s):!t.prototype||!t.prototype.isPureReactComponent||(!li(n,i)||!li(r,a))}function ao(e,t,n){var i=!1,r=Cr,a=t.contextType;return"object"===typeof a&&null!==a?a=Ia(a):(r=zr(t)?Ir:Tr.current,a=(i=null!==(i=t.contextTypes)&&void 0!==i)?Br(e,r):Cr),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=io,e.stateNode=t,t._reactInternals=e,i&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function so(e,t,n,i){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,i),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function oo(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Oa(e);var a=t.contextType;"object"===typeof a&&null!==a?r.context=Ia(a):(a=zr(t)?Ir:Tr.current,r.context=Br(e,a)),r.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(no(e,t,a,n),r.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof r.getSnapshotBeforeUpdate||"function"!==typeof r.UNSAFE_componentWillMount&&"function"!==typeof r.componentWillMount||(t=r.state,"function"===typeof r.componentWillMount&&r.componentWillMount(),"function"===typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&io.enqueueReplaceState(r,r.state,null),Qa(e,n,r,i),r.state=e.memoizedState),"function"===typeof r.componentDidMount&&(e.flags|=4194308)}function lo(e,t){try{var n="",i=t;do{n+=U(i),i=i.return}while(i);var r=n}catch(a){r="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:r,digest:null}}function co(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function uo(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ho="function"===typeof WeakMap?WeakMap:Map;function po(e,t,n){(n=Ra(-1,n)).tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Vl||(Vl=!0,Wl=i),uo(0,t)},n}function fo(e,t,n){(n=Ra(-1,n)).tag=3;var i=e.type.getDerivedStateFromError;if("function"===typeof i){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){uo(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){uo(0,t),"function"!==typeof i&&(null===Hl?Hl=new Set([this]):Hl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function mo(e,t,n){var i=e.pingCache;if(null===i){i=e.pingCache=new ho;var r=new Set;i.set(t,r)}else void 0===(r=i.get(t))&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=Sd.bind(null,e,t,n),t.then(e,e))}function go(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xo(e,t,n,i,r){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ra(-1,1)).tag=2,La(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var vo=w.ReactCurrentOwner,yo=!1;function wo(e,t,n,i){t.child=null===e?ba(t,null,n,i):wa(t,e.child,n,i)}function bo(e,t,n,i,r){n=n.render;var a=t.ref;return Pa(t,r),i=ms(e,t,n,i,a,r),n=gs(),null===e||yo?(ra&&n&&ea(t),t.flags|=1,wo(e,t,i,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Vo(e,t,r))}function jo(e,t,n,i,r){if(null===e){var a=n.type;return"function"!==typeof a||zd(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=_d(n.type,null,i,t,t.mode,r)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ao(e,t,a,i,r))}if(a=e.child,0===(e.lanes&r)){var s=a.memoizedProps;if((n=null!==(n=n.compare)?n:li)(s,i)&&e.ref===t.ref)return Vo(e,t,r)}return t.flags|=1,(e=Dd(a,i)).ref=t.ref,e.return=t,t.child=e}function Ao(e,t,n,i,r){if(null!==e){var a=e.memoizedProps;if(li(a,i)&&e.ref===t.ref){if(yo=!1,t.pendingProps=i=a,0===(e.lanes&r))return t.lanes=e.lanes,Vo(e,t,r);0!==(131072&e.flags)&&(yo=!0)}}return Eo(e,t,n,i,r)}function ko(e,t,n){var i=t.pendingProps,r=i.children,a=null!==e?e.memoizedState:null;if("hidden"===i.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Er(Dl,zl),zl|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Er(Dl,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=null!==a?a.baseLanes:n,Er(Dl,zl),zl|=i}else null!==a?(i=a.baseLanes|n,t.memoizedState=null):i=n,Er(Dl,zl),zl|=i;return wo(e,t,r,n),t.child}function So(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eo(e,t,n,i,r){var a=zr(n)?Ir:Tr.current;return a=Br(t,a),Pa(t,r),n=ms(e,t,n,i,a,r),i=gs(),null===e||yo?(ra&&i&&ea(t),t.flags|=1,wo(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Vo(e,t,r))}function Co(e,t,n,i,r){if(zr(n)){var a=!0;Or(t)}else a=!1;if(Pa(t,r),null===t.stateNode)Yo(e,t),ao(t,n,i),oo(t,n,i,r),i=!0;else if(null===e){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,d=n.contextType;"object"===typeof d&&null!==d?d=Ia(d):d=Br(t,d=zr(n)?Ir:Tr.current);var c=n.getDerivedStateFromProps,u="function"===typeof c||"function"===typeof s.getSnapshotBeforeUpdate;u||"function"!==typeof s.UNSAFE_componentWillReceiveProps&&"function"!==typeof s.componentWillReceiveProps||(o!==i||l!==d)&&so(t,s,i,d),Ma=!1;var h=t.memoizedState;s.state=h,Qa(t,i,s,r),l=t.memoizedState,o!==i||h!==l||Pr.current||Ma?("function"===typeof c&&(no(t,n,c,i),l=t.memoizedState),(o=Ma||ro(t,n,o,i,h,l,d))?(u||"function"!==typeof s.UNSAFE_componentWillMount&&"function"!==typeof s.componentWillMount||("function"===typeof s.componentWillMount&&s.componentWillMount(),"function"===typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"===typeof s.componentDidMount&&(t.flags|=4194308)):("function"===typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=d,i=o):("function"===typeof s.componentDidMount&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Na(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:to(t.type,o),s.props=d,u=t.pendingProps,h=s.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ia(l):l=Br(t,l=zr(n)?Ir:Tr.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof s.getSnapshotBeforeUpdate)||"function"!==typeof s.UNSAFE_componentWillReceiveProps&&"function"!==typeof s.componentWillReceiveProps||(o!==u||h!==l)&&so(t,s,i,l),Ma=!1,h=t.memoizedState,s.state=h,Qa(t,i,s,r);var f=t.memoizedState;o!==u||h!==f||Pr.current||Ma?("function"===typeof p&&(no(t,n,p,i),f=t.memoizedState),(d=Ma||ro(t,n,d,i,h,f,l)||!1)?(c||"function"!==typeof s.UNSAFE_componentWillUpdate&&"function"!==typeof s.componentWillUpdate||("function"===typeof s.componentWillUpdate&&s.componentWillUpdate(i,f,l),"function"===typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(i,f,l)),"function"===typeof s.componentDidUpdate&&(t.flags|=4),"function"===typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof s.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=f),s.props=i,s.state=f,s.context=l,i=d):("function"!==typeof s.componentDidUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return To(e,t,n,i,a,r)}function To(e,t,n,i,r,a){So(e,t);var s=0!==(128&t.flags);if(!i&&!s)return r&&Nr(t,n,!1),Vo(e,t,a);i=t.stateNode,vo.current=t;var o=s&&"function"!==typeof n.getDerivedStateFromError?null:i.render();return t.flags|=1,null!==e&&s?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,o,a)):wo(e,t,o,a),t.memoizedState=i.state,r&&Nr(t,n,!0),t.child}function Po(e){var t=e.stateNode;t.pendingContext?_r(0,t.pendingContext,t.pendingContext!==t.context):t.context&&_r(0,t.context,!1),$a(e,t.containerInfo)}function Io(e,t,n,i,r){return pa(),fa(r),t.flags|=256,wo(e,t,n,i),t.child}var Bo,zo,Do,_o,Mo={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function No(e,t,n){var i,r=t.pendingProps,s=Za.current,o=!1,l=0!==(128&t.flags);if((i=l)||(i=(null===e||null!==e.memoizedState)&&0!==(2&s)),i?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Er(Za,1&s),null===e)return da(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},0===(1&r)&&null!==o?(o.childLanes=0,o.pendingProps=l):o=Od(l,r,0,null),e=Md(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Oo(n),t.memoizedState=Mo,e):Ro(t,l));if(null!==(s=e.memoizedState)&&null!==(i=s.dehydrated))return function(e,t,n,i,r,s,o){if(n)return 256&t.flags?(t.flags&=-257,Lo(e,t,o,i=co(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=i.fallback,r=t.mode,i=Od({mode:"visible",children:i.children},r,0,null),(s=Md(s,r,o,null)).flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,0!==(1&t.mode)&&wa(t,e.child,null,o),t.child.memoizedState=Oo(o),t.memoizedState=Mo,s);if(0===(1&t.mode))return Lo(e,t,o,null);if("$!"===r.data){if(i=r.nextSibling&&r.nextSibling.dataset)var l=i.dgst;return i=l,Lo(e,t,o,i=co(s=Error(a(419)),i,void 0))}if(l=0!==(o&e.childLanes),yo||l){if(null!==(i=Pl)){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}0!==(r=0!==(r&(i.suspendedLanes|o))?0:r)&&r!==s.retryLane&&(s.retryLane=r,_a(e,r),nd(i,e,r,-1))}return md(),Lo(e,t,o,i=co(Error(a(421))))}return"$?"===r.data?(t.flags|=128,t.child=e.child,t=Cd.bind(null,e),r._reactRetry=t,null):(e=s.treeContext,ia=dr(r.nextSibling),na=t,ra=!0,aa=null,null!==e&&(Gr[Xr++]=Kr,Gr[Xr++]=qr,Gr[Xr++]=$r,Kr=e.id,qr=e.overflow,$r=t),t=Ro(t,i.children),t.flags|=4096,t)}(e,t,l,r,i,s,n);if(o){o=r.fallback,l=t.mode,i=(s=e.child).sibling;var d={mode:"hidden",children:r.children};return 0===(1&l)&&t.child!==s?((r=t.child).childLanes=0,r.pendingProps=d,t.deletions=null):(r=Dd(s,d)).subtreeFlags=14680064&s.subtreeFlags,null!==i?o=Dd(i,o):(o=Md(o,l,n,null)).flags|=2,o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=null===(l=e.child.memoizedState)?Oo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Mo,r}return e=(o=e.child).sibling,r=Dd(o,{mode:"visible",children:r.children}),0===(1&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ro(e,t){return(t=Od({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Lo(e,t,n,i){return null!==i&&fa(i),wa(t,e.child,null,n),(e=Ro(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fo(e,t,n){e.lanes|=t;var i=e.alternate;null!==i&&(i.lanes|=t),Ta(e.return,t,n)}function Uo(e,t,n,i,r){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Qo(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(wo(e,t,i.children,n),0!==(2&(i=Za.current)))i=1&i|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fo(e,n,t);else if(19===e.tag)Fo(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Er(Za,i),0===(1&t.mode))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;null!==n;)null!==(e=n.alternate)&&null===es(e)&&(r=n),n=n.sibling;null===(n=r)?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Uo(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;null!==r;){if(null!==(e=r.alternate)&&null===es(e)){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Uo(t,!0,n,null,a);break;case"together":Uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yo(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vo(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ol|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Dd(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dd(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wo(e,t){if(!ra)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;null!==n;)null!==n.alternate&&(i=n),n=n.sibling;null===i?t||null===e.tail?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ho(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=14680064&r.subtreeFlags,i|=14680064&r.flags,r.return=e,r=r.sibling;else for(r=e.child;null!==r;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Go(e,t,n){var i=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ho(t),null;case 1:case 17:return zr(t.type)&&Dr(),Ho(t),null;case 3:return i=t.stateNode,Ka(),Sr(Pr),Sr(Tr),ns(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(sd(aa),aa=null))),zo(e,t),Ho(t),null;case 5:Ja(t);var r=Xa(Ga.current);if(n=t.type,null!==e&&null!=t.stateNode)Do(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(null===t.stateNode)throw Error(a(166));return Ho(t),null}if(e=Xa(Wa.current),ua(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[hr]=t,i[pr]=s,e=0!==(1&t.mode),n){case"dialog":Li("cancel",i),Li("close",i);break;case"iframe":case"object":case"embed":Li("load",i);break;case"video":case"audio":for(r=0;r<Mi.length;r++)Li(Mi[r],i);break;case"source":Li("error",i);break;case"img":case"image":case"link":Li("error",i),Li("load",i);break;case"details":Li("toggle",i);break;case"input":K(i,s),Li("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Li("invalid",i);break;case"textarea":re(i,s),Li("invalid",i)}for(var l in ve(n,s),r=null,s)if(s.hasOwnProperty(l)){var d=s[l];"children"===l?"string"===typeof d?i.textContent!==d&&(!0!==s.suppressHydrationWarning&&Ji(i.textContent,d,e),r=["children",d]):"number"===typeof d&&i.textContent!==""+d&&(!0!==s.suppressHydrationWarning&&Ji(i.textContent,d,e),r=["children",""+d]):o.hasOwnProperty(l)&&null!=d&&"onScroll"===l&&Li("scroll",i)}switch(n){case"input":H(i),Z(i,s,!0);break;case"textarea":H(i),se(i);break;case"select":case"option":break;default:"function"===typeof s.onClick&&(i.onclick=Zi)}i=r,t.updateQueue=i,null!==i&&(t.flags|=4)}else{l=9===r.nodeType?r:r.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=oe(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof i.is?e=l.createElement(n,{is:i.is}):(e=l.createElement(n),"select"===n&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,n),e[hr]=t,e[pr]=i,Bo(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,i),n){case"dialog":Li("cancel",e),Li("close",e),r=i;break;case"iframe":case"object":case"embed":Li("load",e),r=i;break;case"video":case"audio":for(r=0;r<Mi.length;r++)Li(Mi[r],e);r=i;break;case"source":Li("error",e),r=i;break;case"img":case"image":case"link":Li("error",e),Li("load",e),r=i;break;case"details":Li("toggle",e),r=i;break;case"input":K(e,i),r=$(e,i),Li("invalid",e);break;case"option":default:r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=N({},i,{value:void 0}),Li("invalid",e);break;case"textarea":re(e,i),r=ie(e,i),Li("invalid",e)}for(s in ve(n,r),d=r)if(d.hasOwnProperty(s)){var c=d[s];"style"===s?ge(e,c):"dangerouslySetInnerHTML"===s?null!=(c=c?c.__html:void 0)&&ue(e,c):"children"===s?"string"===typeof c?("textarea"!==n||""!==c)&&he(e,c):"number"===typeof c&&he(e,""+c):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(o.hasOwnProperty(s)?null!=c&&"onScroll"===s&&Li("scroll",e):null!=c&&y(e,s,c,l))}switch(n){case"input":H(e),Z(e,i,!1);break;case"textarea":H(e),se(e);break;case"option":null!=i.value&&e.setAttribute("value",""+V(i.value));break;case"select":e.multiple=!!i.multiple,null!=(s=i.value)?ne(e,!!i.multiple,s,!1):null!=i.defaultValue&&ne(e,!!i.multiple,i.defaultValue,!0);break;default:"function"===typeof r.onClick&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ho(t),null;case 6:if(e&&null!=t.stateNode)_o(e,t,e.memoizedProps,i);else{if("string"!==typeof i&&null===t.stateNode)throw Error(a(166));if(n=Xa(Ga.current),Xa(Wa.current),ua(t)){if(i=t.stateNode,n=t.memoizedProps,i[hr]=t,(s=i.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Ji(i.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ji(i.nodeValue,n,0!==(1&e.mode))}s&&(t.flags|=4)}else(i=(9===n.nodeType?n:n.ownerDocument).createTextNode(i))[hr]=t,t.stateNode=i}return Ho(t),null;case 13:if(Sr(Za),i=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ra&&null!==ia&&0!==(1&t.mode)&&0===(128&t.flags))ha(),pa(),t.flags|=98560,s=!1;else if(s=ua(t),null!==i&&null!==i.dehydrated){if(null===e){if(!s)throw Error(a(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(a(317));s[hr]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ho(t),s=!1}else null!==aa&&(sd(aa),aa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((i=null!==i)!==(null!==e&&null!==e.memoizedState)&&i&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===_l&&(_l=3):md())),null!==t.updateQueue&&(t.flags|=4),Ho(t),null);case 4:return Ka(),zo(e,t),null===e&&Qi(t.stateNode.containerInfo),Ho(t),null;case 10:return Ca(t.type._context),Ho(t),null;case 19:if(Sr(Za),null===(s=t.memoizedState))return Ho(t),null;if(i=0!==(128&t.flags),null===(l=s.rendering))if(i)Wo(s,!1);else{if(0!==_l||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=es(e))){for(t.flags|=128,Wo(s,!1),null!==(i=l.updateQueue)&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;null!==n;)e=i,(s=n).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Er(Za,1&Za.current|2),t.child}e=e.sibling}null!==s.tail&&qe()>Ql&&(t.flags|=128,i=!0,Wo(s,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=es(l))){if(t.flags|=128,i=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wo(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!ra)return Ho(t),null}else 2*qe()-s.renderingStartTime>Ql&&1073741824!==n&&(t.flags|=128,i=!0,Wo(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=s.last)?n.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=qe(),t.sibling=null,n=Za.current,Er(Za,i?1&n|2:1&n),t):(Ho(t),null);case 22:case 23:return ud(),i=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==i&&(t.flags|=8192),i&&0!==(1&t.mode)?0!==(1073741824&zl)&&(Ho(t),6&t.subtreeFlags&&(t.flags|=8192)):Ho(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Xo(e,t){switch(ta(t),t.tag){case 1:return zr(t.type)&&Dr(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ka(),Sr(Pr),Sr(Tr),ns(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Sr(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Sr(Za),null;case 4:return Ka(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return ud(),null;default:return null}}Bo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zo=function(){},Do=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Xa(Wa.current);var a,s=null;switch(n){case"input":r=$(e,r),i=$(e,i),s=[];break;case"select":r=N({},r,{value:void 0}),i=N({},i,{value:void 0}),s=[];break;case"textarea":r=ie(e,r),i=ie(e,i),s=[];break;default:"function"!==typeof r.onClick&&"function"===typeof i.onClick&&(e.onclick=Zi)}for(c in ve(n,i),n=null,r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&null!=r[c])if("style"===c){var l=r[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var d=i[c];if(l=null!=r?r[c]:void 0,i.hasOwnProperty(c)&&d!==l&&(null!=d||null!=l))if("style"===c)if(l){for(a in l)!l.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&l[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(c,n)),n=d;else"dangerouslySetInnerHTML"===c?(d=d?d.__html:void 0,l=l?l.__html:void 0,null!=d&&l!==d&&(s=s||[]).push(c,d)):"children"===c?"string"!==typeof d&&"number"!==typeof d||(s=s||[]).push(c,""+d):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(o.hasOwnProperty(c)?(null!=d&&"onScroll"===c&&Li("scroll",e),s||l===d||(s=[])):(s=s||[]).push(c,d))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}},_o=function(e,t,n,i){n!==i&&(t.flags|=4)};var $o=!1,Ko=!1,qo="function"===typeof WeakSet?WeakSet:Set,Jo=null;function Zo(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(i){kd(e,t,i)}else n.current=null}function el(e,t,n){try{n()}catch(i){kd(e,t,i)}}var tl=!1;function nl(e,t,n){var i=t.updateQueue;if(null!==(i=null!==i?i.lastEffect:null)){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,void 0!==a&&el(t,n,a)}r=r.next}while(r!==i)}}function il(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function rl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[hr],delete t[pr],delete t[mr],delete t[gr],delete t[xr])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function ol(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zi));else if(4!==i&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function dl(e,t,n){var i=e.tag;if(5===i||6===i)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==i&&null!==(e=e.child))for(dl(e,t,n),e=e.sibling;null!==e;)dl(e,t,n),e=e.sibling}var cl=null,ul=!1;function hl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(rt,n)}catch(o){}switch(n.tag){case 5:Ko||Zo(n,t);case 6:var i=cl,r=ul;cl=null,hl(e,t,n),ul=r,null!==(cl=i)&&(ul?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(ul?(e=cl,n=n.stateNode,8===e.nodeType?lr(e.parentNode,n):1===e.nodeType&&lr(e,n),Qt(e)):lr(cl,n.stateNode));break;case 4:i=cl,r=ul,cl=n.stateNode.containerInfo,ul=!0,hl(e,t,n),cl=i,ul=r;break;case 0:case 11:case 14:case 15:if(!Ko&&(null!==(i=n.updateQueue)&&null!==(i=i.lastEffect))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,void 0!==s&&(0!==(2&a)||0!==(4&a))&&el(n,t,s),r=r.next}while(r!==i)}hl(e,t,n);break;case 1:if(!Ko&&(Zo(n,t),"function"===typeof(i=n.stateNode).componentWillUnmount))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){kd(n,t,o)}hl(e,t,n);break;case 21:hl(e,t,n);break;case 22:1&n.mode?(Ko=(i=Ko)||null!==n.memoizedState,hl(e,t,n),Ko=i):hl(e,t,n);break;default:hl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new qo),t.forEach((function(t){var i=Td.bind(null,e,t);n.has(t)||(n.add(t),t.then(i,i))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var i=0;i<n.length;i++){var r=n[i];try{var s=e,o=t,l=o;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,ul=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===cl)throw Error(a(160));pl(s,o,r),cl=null,ul=!1;var d=r.alternate;null!==d&&(d.return=null),r.return=null}catch(c){kd(r,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&i){try{nl(3,e,e.return),il(3,e)}catch(g){kd(e,e.return,g)}try{nl(5,e,e.return)}catch(g){kd(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&i&&null!==n&&Zo(n,n.return);break;case 5:if(ml(t,e),xl(e),512&i&&null!==n&&Zo(n,n.return),32&e.flags){var r=e.stateNode;try{he(r,"")}catch(g){kd(e,e.return,g)}}if(4&i&&null!=(r=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,null!==d)try{"input"===l&&"radio"===s.type&&null!=s.name&&q(r,s),ye(l,o);var c=ye(l,s);for(o=0;o<d.length;o+=2){var u=d[o],h=d[o+1];"style"===u?ge(r,h):"dangerouslySetInnerHTML"===u?ue(r,h):"children"===u?he(r,h):y(r,u,h,c)}switch(l){case"input":J(r,s);break;case"textarea":ae(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?ne(r,!!s.multiple,f,!1):p!==!!s.multiple&&(null!=s.defaultValue?ne(r,!!s.multiple,s.defaultValue,!0):ne(r,!!s.multiple,s.multiple?[]:"",!1))}r[pr]=s}catch(g){kd(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&i){if(null===e.stateNode)throw Error(a(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(g){kd(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&i&&null!==n&&n.memoizedState.isDehydrated)try{Qt(t.containerInfo)}catch(g){kd(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(r=e.child).flags&&(s=null!==r.memoizedState,r.stateNode.isHidden=s,!s||null!==r.alternate&&null!==r.alternate.memoizedState||(Ul=qe())),4&i&&fl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Ko=(c=Ko)||u,ml(t,e),Ko=c):ml(t,e),xl(e),8192&i){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!u&&0!==(1&e.mode))for(Jo=e,u=e.child;null!==u;){for(h=Jo=u;null!==Jo;){switch(f=(p=Jo).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:Zo(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){i=p,n=p.return;try{t=i,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){kd(i,n,g)}}break;case 5:Zo(p,p.return);break;case 22:if(null!==p.memoizedState){bl(h);continue}}null!==f?(f.return=p,Jo=f):bl(h)}u=u.sibling}e:for(u=null,h=e;;){if(5===h.tag){if(null===u){u=h;try{r=h.stateNode,c?"function"===typeof(s=r.style).setProperty?s.setProperty("display","none","important"):s.display="none":(l=h.stateNode,o=void 0!==(d=h.memoizedProps.style)&&null!==d&&d.hasOwnProperty("display")?d.display:null,l.style.display=me("display",o))}catch(g){kd(e,e.return,g)}}}else if(6===h.tag){if(null===u)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){kd(e,e.return,g)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ml(t,e),xl(e),4&i&&fl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(sl(n)){var i=n;break e}n=n.return}throw Error(a(160))}switch(i.tag){case 5:var r=i.stateNode;32&i.flags&&(he(r,""),i.flags&=-33),dl(e,ol(e),r);break;case 3:case 4:var s=i.stateNode.containerInfo;ll(e,ol(e),s);break;default:throw Error(a(161))}}catch(o){kd(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Jo=e,yl(e,t,n)}function yl(e,t,n){for(var i=0!==(1&e.mode);null!==Jo;){var r=Jo,a=r.child;if(22===r.tag&&i){var s=null!==r.memoizedState||$o;if(!s){var o=r.alternate,l=null!==o&&null!==o.memoizedState||Ko;o=$o;var d=Ko;if($o=s,(Ko=l)&&!d)for(Jo=r;null!==Jo;)l=(s=Jo).child,22===s.tag&&null!==s.memoizedState?jl(r):null!==l?(l.return=s,Jo=l):jl(r);for(;null!==a;)Jo=a,yl(a,t,n),a=a.sibling;Jo=r,$o=o,Ko=d}wl(e)}else 0!==(8772&r.subtreeFlags)&&null!==a?(a.return=r,Jo=a):wl(e)}}function wl(e){for(;null!==Jo;){var t=Jo;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ko||il(5,t);break;case 1:var i=t.stateNode;if(4&t.flags&&!Ko)if(null===n)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:to(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ya(t,s,i);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ya(t,o,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var u=c.memoizedState;if(null!==u){var h=u.dehydrated;null!==h&&Qt(h)}}}break;default:throw Error(a(163))}Ko||512&t.flags&&rl(t)}catch(p){kd(t,t.return,p)}}if(t===e){Jo=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jo=n;break}Jo=t.return}}function bl(e){for(;null!==Jo;){var t=Jo;if(t===e){Jo=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jo=n;break}Jo=t.return}}function jl(e){for(;null!==Jo;){var t=Jo;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(l){kd(t,n,l)}break;case 1:var i=t.stateNode;if("function"===typeof i.componentDidMount){var r=t.return;try{i.componentDidMount()}catch(l){kd(t,r,l)}}var a=t.return;try{rl(t)}catch(l){kd(t,a,l)}break;case 5:var s=t.return;try{rl(t)}catch(l){kd(t,s,l)}}}catch(l){kd(t,t.return,l)}if(t===e){Jo=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Jo=o;break}Jo=t.return}}var Al,kl=Math.ceil,Sl=w.ReactCurrentDispatcher,El=w.ReactCurrentOwner,Cl=w.ReactCurrentBatchConfig,Tl=0,Pl=null,Il=null,Bl=0,zl=0,Dl=kr(0),_l=0,Ml=null,Ol=0,Nl=0,Rl=0,Ll=null,Fl=null,Ul=0,Ql=1/0,Yl=null,Vl=!1,Wl=null,Hl=null,Gl=!1,Xl=null,$l=0,Kl=0,ql=null,Jl=-1,Zl=0;function ed(){return 0!==(6&Tl)?qe():-1!==Jl?Jl:Jl=qe()}function td(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Bl?Bl&-Bl:null!==ma.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function nd(e,t,n,i){if(50<Kl)throw Kl=0,ql=null,Error(a(185));xt(e,n,i),0!==(2&Tl)&&e===Pl||(e===Pl&&(0===(2&Tl)&&(Nl|=n),4===_l&&od(e,Bl)),id(e,i),1===n&&0===Tl&&0===(1&t.mode)&&(Ql=qe()+500,Lr&&Qr()))}function id(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-st(a),o=1<<s,l=r[s];-1===l?0!==(o&n)&&0===(o&i)||(r[s]=pt(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}(e,t);var i=ht(e,e===Pl?Bl:0);if(0===i)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Lr=!0,Ur(e)}(ld.bind(null,e)):Ur(ld.bind(null,e)),sr((function(){0===(6&Tl)&&Qr()})),n=null;else{switch(wt(i)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=it}n=Pd(n,rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rd(e,t){if(Jl=-1,Zl=0,0!==(6&Tl))throw Error(a(327));var n=e.callbackNode;if(jd()&&e.callbackNode!==n)return null;var i=ht(e,e===Pl?Bl:0);if(0===i)return null;if(0!==(30&i)||0!==(i&e.expiredLanes)||t)t=gd(e,i);else{t=i;var r=Tl;Tl|=2;var s=fd();for(Pl===e&&Bl===t||(Yl=null,Ql=qe()+500,hd(e,t));;)try{vd();break}catch(l){pd(e,l)}Ea(),Sl.current=s,Tl=r,null!==Il?t=0:(Pl=null,Bl=0,t=_l)}if(0!==t){if(2===t&&(0!==(r=ft(e))&&(i=r,t=ad(e,r))),1===t)throw n=Ml,hd(e,0),od(e,i),id(e,qe()),n;if(6===t)od(e,i);else{if(r=e.current.alternate,0===(30&i)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!oi(a(),r))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(r)&&(2===(t=gd(e,i))&&(0!==(s=ft(e))&&(i=s,t=ad(e,s))),1===t))throw n=Ml,hd(e,0),od(e,i),id(e,qe()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(a(345));case 2:case 5:bd(e,Fl,Yl);break;case 3:if(od(e,i),(130023424&i)===i&&10<(t=Ul+500-qe())){if(0!==ht(e,0))break;if(((r=e.suspendedLanes)&i)!==i){ed(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ir(bd.bind(null,e,Fl,Yl),t);break}bd(e,Fl,Yl);break;case 4:if(od(e,i),(4194240&i)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-st(i);s=1<<o,(o=t[o])>r&&(r=o),i&=~s}if(i=r,10<(i=(120>(i=qe()-i)?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kl(i/1960))-i)){e.timeoutHandle=ir(bd.bind(null,e,Fl,Yl),i);break}bd(e,Fl,Yl);break;default:throw Error(a(329))}}}return id(e,qe()),e.callbackNode===n?rd.bind(null,e):null}function ad(e,t){var n=Ll;return e.current.memoizedState.isDehydrated&&(hd(e,t).flags|=256),2!==(e=gd(e,t))&&(t=Fl,Fl=n,null!==t&&sd(t)),e}function sd(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function od(e,t){for(t&=~Rl,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),i=1<<n;e[n]=-1,t&=~i}}function ld(e){if(0!==(6&Tl))throw Error(a(327));jd();var t=ht(e,0);if(0===(1&t))return id(e,qe()),null;var n=gd(e,t);if(0!==e.tag&&2===n){var i=ft(e);0!==i&&(t=i,n=ad(e,i))}if(1===n)throw n=Ml,hd(e,0),od(e,t),id(e,qe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bd(e,Fl,Yl),id(e,qe()),null}function dd(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Ql=qe()+500,Lr&&Qr())}}function cd(e){null!==Xl&&0===Xl.tag&&0===(6&Tl)&&jd();var t=Tl;Tl|=1;var n=Cl.transition,i=yt;try{if(Cl.transition=null,yt=1,e)return e()}finally{yt=i,Cl.transition=n,0===(6&(Tl=t))&&Qr()}}function ud(){zl=Dl.current,Sr(Dl)}function hd(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rr(n)),null!==Il)for(n=Il.return;null!==n;){var i=n;switch(ta(i),i.tag){case 1:null!==(i=i.type.childContextTypes)&&void 0!==i&&Dr();break;case 3:Ka(),Sr(Pr),Sr(Tr),ns();break;case 5:Ja(i);break;case 4:Ka();break;case 13:case 19:Sr(Za);break;case 10:Ca(i.type._context);break;case 22:case 23:ud()}n=n.return}if(Pl=e,Il=e=Dd(e.current,null),Bl=zl=t,_l=0,Ml=null,Rl=Nl=Ol=0,Fl=Ll=null,null!==Ba){for(t=0;t<Ba.length;t++)if(null!==(i=(n=Ba[t]).interleaved)){n.interleaved=null;var r=i.next,a=n.pending;if(null!==a){var s=a.next;a.next=r,i.next=s}n.pending=i}Ba=null}return e}function pd(e,t){for(;;){var n=Il;try{if(Ea(),is.current=qs,ds){for(var i=ss.memoizedState;null!==i;){var r=i.queue;null!==r&&(r.pending=null),i=i.next}ds=!1}if(as=0,ls=os=ss=null,cs=!1,us=0,El.current=null,null===n||null===n.return){_l=1,Ml=t,Il=null;break}e:{var s=e,o=n.return,l=n,d=t;if(t=Bl,l.flags|=32768,null!==d&&"object"===typeof d&&"function"===typeof d.then){var c=d,u=l,h=u.tag;if(0===(1&u.mode)&&(0===h||11===h||15===h)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=go(o);if(null!==f){f.flags&=-257,xo(f,o,l,0,t),1&f.mode&&mo(s,c,t),d=c;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(d),t.updateQueue=g}else m.add(d);break e}if(0===(1&t)){mo(s,c,t),md();break e}d=Error(a(426))}else if(ra&&1&l.mode){var x=go(o);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xo(x,o,l,0,t),fa(lo(d,l));break e}}s=d=lo(d,l),4!==_l&&(_l=2),null===Ll?Ll=[s]:Ll.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Ua(s,po(0,d,t));break e;case 1:l=d;var v=s.type,y=s.stateNode;if(0===(128&s.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Hl||!Hl.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t,Ua(s,fo(s,l,t));break e}}s=s.return}while(null!==s)}wd(n)}catch(w){t=w,Il===n&&null!==n&&(Il=n=n.return);continue}break}}function fd(){var e=Sl.current;return Sl.current=qs,null===e?qs:e}function md(){0!==_l&&3!==_l&&2!==_l||(_l=4),null===Pl||0===(268435455&Ol)&&0===(268435455&Nl)||od(Pl,Bl)}function gd(e,t){var n=Tl;Tl|=2;var i=fd();for(Pl===e&&Bl===t||(Yl=null,hd(e,t));;)try{xd();break}catch(r){pd(e,r)}if(Ea(),Tl=n,Sl.current=i,null!==Il)throw Error(a(261));return Pl=null,Bl=0,_l}function xd(){for(;null!==Il;)yd(Il)}function vd(){for(;null!==Il&&!$e();)yd(Il)}function yd(e){var t=Al(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?wd(e):Il=t,El.current=null}function wd(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Go(n,t,zl)))return void(Il=n)}else{if(null!==(n=Xo(n,t)))return n.flags&=32767,void(Il=n);if(null===e)return _l=6,void(Il=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Il=t);Il=t=e}while(null!==t);0===_l&&(_l=5)}function bd(e,t,n){var i=yt,r=Cl.transition;try{Cl.transition=null,yt=1,function(e,t,n,i){do{jd()}while(null!==Xl);if(0!==(6&Tl))throw Error(a(327));n=e.finishedWork;var r=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-st(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}(e,s),e===Pl&&(Il=Pl=null,Bl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Gl||(Gl=!0,Pd(tt,(function(){return jd(),null}))),s=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||s){s=Cl.transition,Cl.transition=null;var o=yt;yt=1;var l=Tl;Tl|=4,El.current=null,function(e,t){if(er=Vt,pi(e=hi())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var i=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(i&&0!==i.rangeCount){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var o=0,l=-1,d=-1,c=0,u=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==r&&3!==h.nodeType||(l=o+r),h!==s||0!==i&&3!==h.nodeType||(d=o+i),3===h.nodeType&&(o+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++c===r&&(l=o),p===s&&++u===i&&(d=o),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===d?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(tr={focusedElem:e,selectionRange:n},Vt=!1,Jo=t;null!==Jo;)if(e=(t=Jo).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jo=e;else for(;null!==Jo;){t=Jo;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:to(t.type,g),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(a(163))}}catch(b){kd(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Jo=e;break}Jo=t.return}m=tl,tl=!1}(e,n),gl(n,e),fi(tr),Vt=!!er,tr=er=null,e.current=n,vl(n,e,r),Ke(),Tl=l,yt=o,Cl.transition=s}else e.current=n;if(Gl&&(Gl=!1,Xl=e,$l=r),s=e.pendingLanes,0===s&&(Hl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(rt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),id(e,qe()),null!==t)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vl)throw Vl=!1,e=Wl,Wl=null,e;0!==(1&$l)&&0!==e.tag&&jd(),s=e.pendingLanes,0!==(1&s)?e===ql?Kl++:(Kl=0,ql=e):Kl=0,Qr()}(e,t,n,i)}finally{Cl.transition=r,yt=i}return null}function jd(){if(null!==Xl){var e=wt($l),t=Cl.transition,n=yt;try{if(Cl.transition=null,yt=16>e?16:e,null===Xl)var i=!1;else{if(e=Xl,Xl=null,$l=0,0!==(6&Tl))throw Error(a(331));var r=Tl;for(Tl|=4,Jo=e.current;null!==Jo;){var s=Jo,o=s.child;if(0!==(16&Jo.flags)){var l=s.deletions;if(null!==l){for(var d=0;d<l.length;d++){var c=l[d];for(Jo=c;null!==Jo;){var u=Jo;switch(u.tag){case 0:case 11:case 15:nl(8,u,s)}var h=u.child;if(null!==h)h.return=u,Jo=h;else for(;null!==Jo;){var p=(u=Jo).sibling,f=u.return;if(al(u),u===c){Jo=null;break}if(null!==p){p.return=f,Jo=p;break}Jo=f}}}var m=s.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Jo=s}}if(0!==(2064&s.subtreeFlags)&&null!==o)o.return=s,Jo=o;else e:for(;null!==Jo;){if(0!==(2048&(s=Jo).flags))switch(s.tag){case 0:case 11:case 15:nl(9,s,s.return)}var v=s.sibling;if(null!==v){v.return=s.return,Jo=v;break e}Jo=s.return}}var y=e.current;for(Jo=y;null!==Jo;){var w=(o=Jo).child;if(0!==(2064&o.subtreeFlags)&&null!==w)w.return=o,Jo=w;else e:for(o=y;null!==Jo;){if(0!==(2048&(l=Jo).flags))try{switch(l.tag){case 0:case 11:case 15:il(9,l)}}catch(j){kd(l,l.return,j)}if(l===o){Jo=null;break e}var b=l.sibling;if(null!==b){b.return=l.return,Jo=b;break e}Jo=l.return}}if(Tl=r,Qr(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(rt,e)}catch(j){}i=!0}return i}finally{yt=n,Cl.transition=t}}return!1}function Ad(e,t,n){e=La(e,t=po(0,t=lo(n,t),1),1),t=ed(),null!==e&&(xt(e,1,t),id(e,t))}function kd(e,t,n){if(3===e.tag)Ad(e,e,n);else for(;null!==t;){if(3===t.tag){Ad(t,e,n);break}if(1===t.tag){var i=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof i.componentDidCatch&&(null===Hl||!Hl.has(i))){t=La(t,e=fo(t,e=lo(n,e),1),1),e=ed(),null!==t&&(xt(t,1,e),id(t,e));break}}t=t.return}}function Sd(e,t,n){var i=e.pingCache;null!==i&&i.delete(t),t=ed(),e.pingedLanes|=e.suspendedLanes&n,Pl===e&&(Bl&n)===n&&(4===_l||3===_l&&(130023424&Bl)===Bl&&500>qe()-Ul?hd(e,0):Rl|=n),id(e,t)}function Ed(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=ed();null!==(e=_a(e,t))&&(xt(e,t,n),id(e,n))}function Cd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ed(e,n)}function Td(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;null!==r&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(a(314))}null!==i&&i.delete(t),Ed(e,n)}function Pd(e,t){return Ge(e,t)}function Id(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bd(e,t,n,i){return new Id(e,t,n,i)}function zd(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dd(e,t){var n=e.alternate;return null===n?((n=Bd(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _d(e,t,n,i,r,s){var o=2;if(i=e,"function"===typeof e)zd(e)&&(o=1);else if("string"===typeof e)o=5;else e:switch(e){case A:return Md(n.children,r,s,t);case k:o=8,r|=8;break;case S:return(e=Bd(12,n,t,2|r)).elementType=S,e.lanes=s,e;case P:return(e=Bd(13,n,t,r)).elementType=P,e.lanes=s,e;case I:return(e=Bd(19,n,t,r)).elementType=I,e.lanes=s,e;case D:return Od(n,r,s,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:o=10;break e;case C:o=9;break e;case T:o=11;break e;case B:o=14;break e;case z:o=16,i=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Bd(o,n,t,r)).elementType=e,t.type=i,t.lanes=s,t}function Md(e,t,n,i){return(e=Bd(7,e,i,t)).lanes=n,e}function Od(e,t,n,i){return(e=Bd(22,e,i,t)).elementType=D,e.lanes=n,e.stateNode={isHidden:!1},e}function Nd(e,t,n){return(e=Bd(6,e,null,t)).lanes=n,e}function Rd(e,t,n){return(t=Bd(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ld(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fd(e,t,n,i,r,a,s,o,l){return e=new Ld(e,t,n,o,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Bd(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(a),e}function Ud(e){if(!e)return Cr;e:{if(Qe(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(zr(n))return Mr(e,n,t)}return t}function Qd(e,t,n,i,r,a,s,o,l){return(e=Fd(n,i,!0,e,0,a,0,o,l)).context=Ud(null),n=e.current,(a=Ra(i=ed(),r=td(n))).callback=void 0!==t&&null!==t?t:null,La(n,a,r),e.current.lanes=r,xt(e,r,i),id(e,i),e}function Yd(e,t,n,i){var r=t.current,a=ed(),s=td(r);return n=Ud(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ra(a,s)).payload={element:e},null!==(i=void 0===i?null:i)&&(t.callback=i),null!==(e=La(r,t,s))&&(nd(e,r,s,a),Fa(e,r,s)),s}function Vd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hd(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}Al=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pr.current)yo=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yo=!1,function(e,t,n){switch(t.tag){case 3:Po(t),pa();break;case 5:qa(t);break;case 1:zr(t.type)&&Or(t);break;case 4:$a(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;Er(ja,i._currentValue),i._currentValue=r;break;case 13:if(null!==(i=t.memoizedState))return null!==i.dehydrated?(Er(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?No(e,t,n):(Er(Za,1&Za.current),null!==(e=Vo(e,t,n))?e.sibling:null);Er(Za,1&Za.current);break;case 19:if(i=0!==(n&t.childLanes),0!==(128&e.flags)){if(i)return Qo(e,t,n);t.flags|=128}if(null!==(r=t.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),Er(Za,Za.current),i)break;return null;case 22:case 23:return t.lanes=0,ko(e,t,n)}return Vo(e,t,n)}(e,t,n);yo=0!==(131072&e.flags)}else yo=!1,ra&&0!==(1048576&t.flags)&&Zr(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Yo(e,t),e=t.pendingProps;var r=Br(t,Tr.current);Pa(t,n),r=ms(null,t,i,e,r,n);var s=gs();return t.flags|=1,"object"===typeof r&&null!==r&&"function"===typeof r.render&&void 0===r.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zr(i)?(s=!0,Or(t)):s=!1,t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,Oa(t),r.updater=io,t.stateNode=r,r._reactInternals=t,oo(t,i,e,n),t=To(null,t,i,!0,s,n)):(t.tag=0,ra&&s&&ea(t),wo(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Yo(e,t),e=t.pendingProps,i=(r=i._init)(i._payload),t.type=i,r=t.tag=function(e){if("function"===typeof e)return zd(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===B)return 14}return 2}(i),e=to(i,e),r){case 0:t=Eo(null,t,i,e,n);break e;case 1:t=Co(null,t,i,e,n);break e;case 11:t=bo(null,t,i,e,n);break e;case 14:t=jo(null,t,i,to(i.type,e),n);break e}throw Error(a(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,Eo(e,t,i,r=t.elementType===i?r:to(i,r),n);case 1:return i=t.type,r=t.pendingProps,Co(e,t,i,r=t.elementType===i?r:to(i,r),n);case 3:e:{if(Po(t),null===e)throw Error(a(387));i=t.pendingProps,r=(s=t.memoizedState).element,Na(e,t),Qa(t,i,null,n);var o=t.memoizedState;if(i=o.element,s.isDehydrated){if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Io(e,t,i,n,r=lo(Error(a(423)),t));break e}if(i!==r){t=Io(e,t,i,n,r=lo(Error(a(424)),t));break e}for(ia=dr(t.stateNode.containerInfo.firstChild),na=t,ra=!0,aa=null,n=ba(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),i===r){t=Vo(e,t,n);break e}wo(e,t,i,n)}t=t.child}return t;case 5:return qa(t),null===e&&da(t),i=t.type,r=t.pendingProps,s=null!==e?e.memoizedProps:null,o=r.children,nr(i,r)?o=null:null!==s&&nr(i,s)&&(t.flags|=32),So(e,t),wo(e,t,o,n),t.child;case 6:return null===e&&da(t),null;case 13:return No(e,t,n);case 4:return $a(t,t.stateNode.containerInfo),i=t.pendingProps,null===e?t.child=wa(t,null,i,n):wo(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,bo(e,t,i,r=t.elementType===i?r:to(i,r),n);case 7:return wo(e,t,t.pendingProps,n),t.child;case 8:case 12:return wo(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,s=t.memoizedProps,o=r.value,Er(ja,i._currentValue),i._currentValue=o,null!==s)if(oi(s.value,o)){if(s.children===r.children&&!Pr.current){t=Vo(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var l=s.dependencies;if(null!==l){o=s.child;for(var d=l.firstContext;null!==d;){if(d.context===i){if(1===s.tag){(d=Ra(-1,n&-n)).tag=2;var c=s.updateQueue;if(null!==c){var u=(c=c.shared).pending;null===u?d.next=d:(d.next=u.next,u.next=d),c.pending=d}}s.lanes|=n,null!==(d=s.alternate)&&(d.lanes|=n),Ta(s.return,n,t),l.lanes|=n;break}d=d.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(a(341));o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),Ta(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}wo(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Pa(t,n),i=i(r=Ia(r)),t.flags|=1,wo(e,t,i,n),t.child;case 14:return r=to(i=t.type,t.pendingProps),jo(e,t,i,r=to(i.type,r),n);case 15:return Ao(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:to(i,r),Yo(e,t),t.tag=1,zr(i)?(e=!0,Or(t)):e=!1,Pa(t,n),ao(t,i,r),oo(t,i,r,n),To(null,t,i,!0,e,n);case 19:return Qo(e,t,n);case 22:return ko(e,t,n)}throw Error(a(156,t.tag))};var Gd="function"===typeof reportError?reportError:function(e){console.error(e)};function Xd(e){this._internalRoot=e}function $d(e){this._internalRoot=e}function Kd(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qd(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jd(){}function Zd(e,t,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if("function"===typeof r){var o=r;r=function(){var e=Vd(s);o.call(e)}}Yd(t,s,e,r)}else s=function(e,t,n,i,r){if(r){if("function"===typeof i){var a=i;i=function(){var e=Vd(s);a.call(e)}}var s=Qd(t,i,e,0,null,!1,0,"",Jd);return e._reactRootContainer=s,e[fr]=s.current,Qi(8===e.nodeType?e.parentNode:e),cd(),s}for(;r=e.lastChild;)e.removeChild(r);if("function"===typeof i){var o=i;i=function(){var e=Vd(l);o.call(e)}}var l=Fd(e,0,!1,null,0,!1,0,"",Jd);return e._reactRootContainer=l,e[fr]=l.current,Qi(8===e.nodeType?e.parentNode:e),cd((function(){Yd(t,l,n,i)})),l}(n,t,e,r,i);return Vd(s)}$d.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Yd(e,t,null,null)},$d.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cd((function(){Yd(null,e,null,null)})),t[fr]=null}},$d.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&0!==t&&t<Dt[n].priority;n++);Dt.splice(n,0,e),0===n&&Nt(e)}},bt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(vt(t,1|n),id(t,qe()),0===(6&Tl)&&(Ql=qe()+500,Qr()))}break;case 13:cd((function(){var t=_a(e,1);if(null!==t){var n=ed();nd(t,e,1,n)}})),Hd(e,1)}},jt=function(e){if(13===e.tag){var t=_a(e,134217728);if(null!==t)nd(t,e,134217728,ed());Hd(e,134217728)}},At=function(e){if(13===e.tag){var t=td(e),n=_a(e,t);if(null!==n)nd(n,e,t,ed());Hd(e,t)}},kt=function(){return yt},St=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},je=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=br(i);if(!r)throw Error(a(90));G(i),J(i,r)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=dd,Pe=cd;var ec={usingClientEntryPoint:!1,Events:[yr,wr,br,Ee,Ce,dd]},tc={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{rt=ic.inject(nc),at=ic}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Kd(t))throw Error(a(200));return function(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:j,key:null==i?null:""+i,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Kd(e))throw Error(a(299));var n=!1,i="",r=Gd;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(i=t.identifierPrefix),void 0!==t.onRecoverableError&&(r=t.onRecoverableError)),t=Fd(e,1,!1,null,0,n,0,i,r),e[fr]=t.current,Qi(8===e.nodeType?e.parentNode:e),new Xd(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return cd(e)},t.hydrate=function(e,t,n){if(!qd(t))throw Error(a(200));return Zd(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Kd(e))throw Error(a(405));var i=null!=n&&n.hydratedSources||null,r=!1,s="",o=Gd;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=Qd(t,null,e,1,null!=n?n:null,r,0,s,o),e[fr]=t.current,Qi(e),i)for(e=0;e<i.length;e++)r=(r=(n=i[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new $d(t)},t.render=function(e,t,n){if(!qd(t))throw Error(a(200));return Zd(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qd(e))throw Error(a(40));return!!e._reactRootContainer&&(cd((function(){Zd(null,null,e,!1,(function(){e._reactRootContainer=null,e[fr]=null}))})),!0)},t.unstable_batchedUpdates=dd,t.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!qd(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zd(e,t,n,!1,i)},t.version="18.3.1-next-f1338f8080-20240426"},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},8487:(e,t,n)=>{"use strict";t.A=void 0;var i,r=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(5043)),a=(i=n(5173))&&i.__esModule?i:{default:i};function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?c(e):t}(this,d(t).call(this))).state={className:e.classNameNotInView,childProps:e.childPropsNotInView},n.onIntersectionAll=n.onIntersectionAll.bind(c(n)),n.onIntersection=n.onIntersection.bind(c(n)),n.isFirstInView=!0,n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){if(window.IntersectionObserver){var e=this.props,t=e.useInviewMonitor,n=e.intoViewMargin,i=e.threshold;if(this._element&&t&&("function"!==typeof t||t())){var r={rootMargin:n,threshold:i};this.observer=new window.IntersectionObserver(this.onIntersectionAll,r),this.observer.observe(this._element)}}else console.error("react-inview-monitor found no support for IntersectionObserver.\nPerhaps use a polyfill like: https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver ?")}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.disconnect()}},{key:"onIntersectionAll",value:function(e){e.forEach(this.onIntersection)}},{key:"onIntersection",value:function(e){if(e.target===this._element){var t=this.props,n=t.classNameNotInView,i=t.classNameInView,r=t.classNameAboveView,a=t.classNameNotAboveView,s=t.toggleClassNameOnInView,o=t.childPropsInView,l=t.childPropsNotInView,d=t.toggleChildPropsOnInView,c=t.onInView,u=t.onNotInView,h=t.repeatOnInView,p=e.isIntersecting,f=p&&this.isFirstInView;f&&(this.isFirstInView=!1);var m=("string"===typeof i||"string"===typeof r)&&s,g=o&&d,x=m||g||(c||u)&&h;if(p&&!x){var v={};return"string"===typeof i&&(v.className=i),o&&(v.childProps=o),Object.keys(v).length&&this.setState(v),c&&"function"===typeof c&&c(e),void this.observer.unobserve(e.target)}if(x){if("string"===typeof r)return void(!p&&e.boundingClientRect.top<=0?this.setState({className:r}):this.setState({className:a||""}));if(p){var y={};(m||f)&&(y.className=i),(g||f)&&(y.childProps=o),Object.keys(y).length&&this.setState(y),c&&"function"===typeof c&&c(e)}else{var w={};m&&(w.className=n),g&&(w.childProps=l),Object.keys(w).length&&this.setState(w),u&&"function"===typeof u&&u(e)}}}}},{key:"render",value:function(){var e=this,t=this.state,n=t.childProps,i=t.className,a=this.props,s=(a.useInviewMonitor,a.children);return n&&Object.keys(n).length&&(s=r.default.cloneElement(s,n)),r.default.createElement("div",{className:i,ref:function(t){t&&(e._element=t)}},s)}}])&&l(n.prototype,i),a&&l(n,a),t}(r.Component);h.propTypes={classNameInView:a.default.string,classNameNotInView:a.default.string,classNameAboveView:a.default.string,classNameNotAboveView:a.default.string,toggleClassNameOnInView:a.default.bool,childPropsInView:a.default.object,childPropsNotInView:a.default.object,toggleChildPropsOnInView:a.default.bool,onInView:a.default.func,onNotInView:a.default.func,repeatOnInView:a.default.bool,useInviewMonitor:a.default.func,intoViewMargin:a.default.string,threshold:a.default.number},h.defaultProps={classNameNotInView:"",childPropsNotInView:{},useInviewMonitor:function(){return!0},intoViewMargin:"-20%",threshold:0};var p=h;t.A=p},7864:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=s(n(5043)),a=s(n(1380));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){return r.default.createElement("button",this.props,this.props.children)}}]),t}(r.default.Component);t.default=(0,a.default)(o)},3318:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=l(n(5043)),s=l(n(4182)),o=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this,t=i({},this.props);return delete t.name,t.parentBindings&&delete t.parentBindings,a.default.createElement("div",i({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);d.propTypes={name:o.default.string,id:o.default.string},t.default=(0,s.default)(d)},1556:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(5043)),r=a(n(1380));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var o=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.render=function(){return i.default.createElement("a",r.props,r.props.children)},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(i.default.Component);t.default=(0,r.default)(o)},9473:(e,t,n)=>{"use strict";t.Nk=t.N_=void 0;var i=p(n(1556)),r=p(n(7864)),a=p(n(3318)),s=p(n(9080)),o=p(n(9529)),l=p(n(2040)),d=p(n(3177)),c=p(n(1380)),u=p(n(4182)),h=p(n(6789));function p(e){return e&&e.__esModule?e:{default:e}}t.N_=i.default,r.default,a.default,s.default,o.default,l.default,t.Nk=d.default,c.default,u.default,h.default,i.default,r.default,a.default,s.default,o.default,l.default,d.default,c.default,u.default,h.default},6789:(e,t,n)=>{"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(5043),d=(n(7950),n(2401),n(2040)),c=n(9080),u=n(5173),h=n(2296),p={to:u.string.isRequired,containerId:u.string,container:u.object,activeClass:u.string,spy:u.bool,smooth:u.oneOfType([u.bool,u.string]),offset:u.number,delay:u.number,isDynamic:u.bool,onClick:u.func,duration:u.oneOfType([u.number,u.func]),absolute:u.bool,onSetActive:u.func,onSetInactive:u.func,ignoreCancelEvents:u.bool,hashSpy:u.bool,spyThrottle:u.number},f={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||c,u=function(t){function c(e){a(this,c);var t=s(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return f.call(t),t.state={active:!1},t}return o(c,t),r(c,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();d.isMounted(e)||d.mount(e,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(n),h.mapContainer(this.props.to,e)),this.props.spy&&d.addStateHandler(this.stateHandler),d.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){d.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=i({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,l.createElement(e,n)}}]),c}(l.Component),f=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,i({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var i=e.getScrollSpyContainer();if(!h.isMounted()||h.isInitialized()){var r=e.props.to,a=null,s=0,o=0,l=0;if(i.getBoundingClientRect)l=i.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(r)))return;var c=a.getBoundingClientRect();o=(s=c.top-l+t)+c.height}var u=t-e.props.offset,p=u>=Math.floor(s)&&u<Math.floor(o),f=u<Math.floor(s)||u>=Math.floor(o),m=n.getActiveLink();return f?(r===m&&n.setActiveLink(void 0),e.props.hashSpy&&h.getHash()===r&&h.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),d.updateStates()):p&&m!==r?(n.setActiveLink(r),e.props.hashSpy&&h.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),d.updateStates()):void 0}}};return u.propTypes=p,u.defaultProps={offset:0},u},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return o(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(e){c.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(e,i({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return t.propTypes={name:u.string,id:u.string},t}};e.exports=f},3177:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=(o(n(2401)),o(n(6580))),a=o(n(3996)),s=o(n(9529));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return r.default[e.smooth]||r.default.defaultEasing},d=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},c=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,i="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,i="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},h=function e(t,n,i){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var a=e.bind(null,t,n);d.call(window,a)}else s.default.registered.end&&s.default.registered.end(r.to,r.target,r.currentPosition);else s.default.registered.end&&s.default.registered.end(r.to,r.target,r.currentPositionY)},p=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},f=function(e,t,n,i){t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout);if(a.default.subscribe((function(){t.data.cancel=!0})),p(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?c(t):u(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var r;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"===typeof(r=t.duration)?r:function(){return r})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=i;var o=l(t),f=h.bind(null,o,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){s.default.registered.begin&&s.default.registered.begin(t.data.to,t.data.target),d.call(window,f)}),t.delay):(s.default.registered.begin&&s.default.registered.begin(t.data.to,t.data.target),d.call(window,f))}else s.default.registered.end&&s.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},m=function(e){return(e=i({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:f,getAnimationType:l,scrollToTop:function(e){f(0,m(e))},scrollToBottom:function(e){e=m(e),p(e),f(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,i=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,i=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)}(e),e)},scrollTo:function(e,t){f(e,m(t))},scrollMore:function(e,t){t=m(t),p(t);var n=t.horizontal?c(t):u(t);f(e+n,t)}}},3996:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1836),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!==typeof document&&r.forEach((function(t){return(0,i.addPassiveEventListener)(document,t,e)}))}}},1836:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,i){var r=i.name;r||(r=t,console.warn("Listener must be a named function.")),n.has(t)||n.set(t,new Set);var a=n.get(t);if(!a.has(r)){var s=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,i,!!s&&{passive:!0}),a.add(r)}},t.removePassiveEventListener=function(e,t,i){e.removeEventListener(t,i),n.get(t).delete(i.name||t)};var n=new Map},4182:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=l(n(5043)),s=(l(n(7950)),l(n(9080))),o=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;s.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){s.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,i({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:o.default.string,id:o.default.string},t}},9529:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},2296:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1836);var i,r=n(2401),a=(i=r)&&i.__esModule?i:{default:i};var s={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var i=this.containers[e]||document;n.scrollTo(e,{container:i})}},getHash:function(){return a.default.getHash()},changeHash:function(e,t){this.isInitialized()&&a.default.getHash()!==e&&a.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=s},1380:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=c(n(5043)),s=c(n(2040)),o=c(n(9080)),l=c(n(5173)),d=c(n(2296));function c(e){return e&&e.__esModule?e:{default:e}}var u={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};t.default=function(e,t){var n=t||o.default,l=function(t){function o(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return c.call(t),t.state={active:!1},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,t),r(o,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();s.default.isMounted(e)||s.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(d.default.isMounted()||d.default.mount(n),d.default.mapContainer(this.props.to,e)),s.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){s.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?i({},this.props.style,this.props.activeStyle):i({},this.props.style);var r=i({},this.props);for(var s in u)r.hasOwnProperty(s)&&delete r[s];return r.className=t,r.style=n,r.onClick=this.handleClick,a.default.createElement(e,r)}}]),o}(a.default.PureComponent),c=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,i({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,i){var r=e.getScrollSpyContainer();if(!d.default.isMounted()||d.default.isInitialized()){var a=e.props.horizontal,s=e.props.to,o=null,l=void 0,c=void 0;if(a){var u=0,h=0,p=0;if(r.getBoundingClientRect)p=r.getBoundingClientRect().left;if(!o||e.props.isDynamic){if(!(o=n.get(s)))return;var f=o.getBoundingClientRect();h=(u=f.left-p+t)+f.width}var m=t-e.props.offset;l=m>=Math.floor(u)&&m<Math.floor(h),c=m<Math.floor(u)||m>=Math.floor(h)}else{var g=0,x=0,v=0;if(r.getBoundingClientRect)v=r.getBoundingClientRect().top;if(!o||e.props.isDynamic){if(!(o=n.get(s)))return;var y=o.getBoundingClientRect();x=(g=y.top-v+i)+y.height}var w=i-e.props.offset;l=w>=Math.floor(g)&&w<Math.floor(x),c=w<Math.floor(g)||w>=Math.floor(x)}var b=n.getActiveLink();if(c){if(s===b&&n.setActiveLink(void 0),e.props.hashSpy&&d.default.getHash()===s){var j=e.props.saveHashHistory,A=void 0!==j&&j;d.default.changeHash("",A)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(s,o))}if(l&&(b!==s||!1===e.state.active)){n.setActiveLink(s);var k=e.props.saveHashHistory,S=void 0!==k&&k;e.props.hashSpy&&d.default.changeHash(s,S),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(s,o))}}}};return l.propTypes=u,l.defaultProps={offset:0},l}},2040:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(381),a=(i=r)&&i.__esModule?i:{default:i},s=n(1836);var o={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,a.default)(e,t)}((function(t){o.scrollHandler(e)}),t);o.scrollSpyContainers.push(e),(0,s.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return-1!==o.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(o.scrollSpyContainers[o.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(o.currentPositionX(e),o.currentPositionY(e))}))},addStateHandler:function(e){o.spySetState.push(e)},addSpyHandler:function(e,t){var n=o.scrollSpyContainers[o.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(o.currentPositionX(t),o.currentPositionY(t))},updateStates:function(){o.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){o.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.indexOf(t)>-1&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),o.spySetState&&o.spySetState.length&&o.spySetState.indexOf(e)>-1&&o.spySetState.splice(o.spySetState.indexOf(e),1),document.removeEventListener("scroll",o.scrollHandler)},update:function(){return o.scrollSpyContainers.forEach((function(e){return o.scrollHandler(e)}))}};t.default=o},9080:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=o(n(2401)),a=o(n(3177)),s=o(n(9529));function o(e){return e&&e.__esModule?e:{default:e}}var l={},d=void 0;t.default={unmount:function(){l={}},register:function(e,t){l[e]=t},unregister:function(e){delete l[e]},get:function(e){return l[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return d=e},getActiveLink:function(){return d},scrollTo:function(e,t){var n=this.get(e);if(n){var o=(t=i({},t,{absolute:!1})).containerId,l=t.container,d=void 0;d=o?document.getElementById(o):l&&l.nodeType?l:document,t.absolute=!0;var c=t.horizontal,u=r.default.scrollOffset(d,n,c)+(t.offset||0);if(!t.smooth)return s.default.registered.begin&&s.default.registered.begin(e,n),d===document?t.horizontal?window.scrollTo(u,0):window.scrollTo(0,u):d.scrollTop=u,void(s.default.registered.end&&s.default.registered.end(e,n));a.default.animateTopScroll(u,t,e,n)}else console.warn("target Element not found")}}},6580:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},2401:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,i=e.offsetParent;i&&!t(i);)n+=i.offsetTop,i=i.offsetParent;return{offsetTop:n,offsetParent:i}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,i=n?"#"+n:"",r=window&&window.location,a=i?r.pathname+r.search+i:r.pathname+r.search;t?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,i){if(i)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var r=n(t,(function(t){return t===e||t===document})),a=r.offsetTop;if(r.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var s=function(e){return e===document};return n(t,s).offsetTop-n(e,s).offsetTop}}},1153:(e,t,n)=>{"use strict";var i=n(5043),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,a={},d=null,c=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:c,props:a,_owner:o.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var w=y.prototype=new v;w.constructor=y,m(w,x.prototype),w.isPureReactComponent=!0;var b=Array.isArray,j=Object.prototype.hasOwnProperty,A={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,i){var r,a={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,r)&&!k.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=i;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:n,type:e,key:s,ref:o,props:a,_owner:A.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,a,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case i:l=!0}}if(l)return s=s(l=e),e=""===a?"."+T(l,0):a,b(s)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),P(s,t,r,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",b(e))for(var d=0;d<e.length;d++){var c=a+T(o=e[d],d);l+=P(o,t,r,c,s)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),d=0;!(o=e.next()).done;)l+=P(o=o.value,t,r,c=a+T(o,d++),s);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function I(e,t,n){if(null==e)return e;var i=[],r=0;return P(e,i,"","",(function(e){return t.call(n,e,r++)})),i}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},D={transition:null},_={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:D,ReactCurrentOwner:A};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=r,t.Profiler=s,t.PureComponent=y,t.StrictMode=a,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_,t.act=M,t.cloneElement=function(e,t,i){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=A.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)j.call(t,d)&&!k.hasOwnProperty(d)&&(r[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)r.children=i;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:n,type:e.type,key:a,ref:s,props:r,_owner:o}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var i=n-1>>>1,r=e[i];if(!(0<a(r,t)))break e;e[i]=t,e[n]=r,n=i}}function i(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var i=0,r=e.length,s=r>>>1;i<s;){var o=2*(i+1)-1,l=e[o],d=o+1,c=e[d];if(0>a(l,n))d<r&&0>a(c,l)?(e[i]=c,e[d]=n,i=d):(e[i]=l,e[o]=n,i=o);else{if(!(d<r&&0>a(c,n)))break e;e[i]=c,e[d]=n,i=d}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var d=[],c=[],u=1,h=null,p=3,f=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=i(c);null!==t;){if(null===t.callback)r(c);else{if(!(t.startTime<=e))break;r(c),t.sortIndex=t.expirationTime,n(d,t)}t=i(c)}}function b(e){if(g=!1,w(e),!m)if(null!==i(d))m=!0,D(j);else{var t=i(c);null!==t&&_(b,t.startTime-e)}}function j(e,n){m=!1,g&&(g=!1,v(E),E=-1),f=!0;var a=p;try{for(w(n),h=i(d);null!==h&&(!(h.expirationTime>n)||e&&!P());){var s=h.callback;if("function"===typeof s){h.callback=null,p=h.priorityLevel;var o=s(h.expirationTime<=n);n=t.unstable_now(),"function"===typeof o?h.callback=o:h===i(d)&&r(d),w(n)}else r(d);h=i(d)}if(null!==h)var l=!0;else{var u=i(c);null!==u&&_(b,u.startTime-n),l=!1}return l}finally{h=null,p=a,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var A,k=!1,S=null,E=-1,C=5,T=-1;function P(){return!(t.unstable_now()-T<C)}function I(){if(null!==S){var e=t.unstable_now();T=e;var n=!0;try{n=S(!0,e)}finally{n?A():(k=!1,S=null)}}else k=!1}if("function"===typeof y)A=function(){y(I)};else if("undefined"!==typeof MessageChannel){var B=new MessageChannel,z=B.port2;B.port1.onmessage=I,A=function(){z.postMessage(null)}}else A=function(){x(I,0)};function D(e){S=e,k||(k=!0,A())}function _(e,n){E=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,D(j))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return i(d)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,r,a){var s=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?s+a:s:a=s,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return e={id:u++,callback:r,priorityLevel:e,startTime:a,expirationTime:o=a+o,sortIndex:-1},a>s?(e.sortIndex=a,n(c,e),null===i(d)&&e===i(c)&&(g?(v(E),E=-1):g=!0,_(b,a-s))):(e.sortIndex=o,n(d,e),m||f||(m=!0,D(j))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,i){var r=n?n.call(i,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var d=a[l];if(!o(d))return!1;var c=e[d],u=t[d];if(!1===(r=n?n.call(i,c,u,d):void 0)||void 0===r&&c!==u)return!1}return!0}},2867:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_1.49ec72c320f7c9221851.png"},3216:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_1_v2.9b0dc1916ecef2362bd1.png"},7592:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_2.49430c4311fc09632869.png"},6797:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_2_v2.3b541b01bfda2744a7e4.png"},1809:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_3.baf74283e9b887d9fd33.png"},935:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_3_v3.f4713fa04a0acc5bed0a.png"},7300:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_Mp_v2.ab6c44a6e669d67ef4f7.png"},1231:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/case_mp.f3fe4b6eaca494d18650.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var o=2&r&&i;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>s[e]=()=>i[e]));return s.default=()=>i,n.d(a,s),a}})(),n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e,t=n(5043),i=n.t(t,2),r=n(7950),a=n.t(r,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const o="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,i){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),i&&"#"!==i&&(t+="#"===i.charAt(0)?i:"#"+i),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function f(t,n,i,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:d=!1}=r,p=a.history,f=e.Pop,m=null,g=x();function x(){return(p.state||{idx:null}).idx}function v(){f=e.Pop;let t=x(),n=null==t?null:t-g;g=t,m&&m({action:f,location:w.location,delta:n})}function y(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,p.replaceState(s({},p.state,{idx:g}),""));let w={get action(){return f},get location(){return t(a,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(o,v),m=e,()=>{a.removeEventListener(o,v),m=null}},createHref:e=>n(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){f=e.Push;let r=u(w.location,t,n);i&&i(r,t),g=x()+1;let s=c(r,g),o=w.createHref(r);try{p.pushState(s,"",o)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;a.location.assign(o)}d&&m&&m({action:f,location:w.location,delta:1})},replace:function(t,n){f=e.Replace;let r=u(w.location,t,n);i&&i(r,t),g=x();let a=c(r,g),s=w.createHref(r);p.replaceState(a,"",s),d&&m&&m({action:f,location:w.location,delta:0})},go:e=>p.go(e)};return w}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t,n){return void 0===n&&(n="/"),x(e,t,n,!1)}function x(e,t,n,i){let r=B(("string"===typeof t?p(t):t).pathname||"/",n);if(null==r)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let s=null;for(let o=0;null==s&&o<a.length;++o){let e=I(r);s=T(a[o],e,i)}return s}function v(e,t,n,i){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===i&&(i="");let r=(e,r,a)=>{let s={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};s.relativePath.startsWith("/")&&(l(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(i.length));let o=O([i,s.relativePath]),d=n.concat(s);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),v(e.children,t,d,o)),(null!=e.path||e.index)&&t.push({path:o,score:C(o,e.index),routesMeta:d})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let i of y(e.path))r(e,t,i);else r(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===i.length)return r?[a,""]:[a];let s=y(i.join("/")),o=[];return o.push(...s.map((e=>""===e?a:[a,e].join("/")))),r&&o.push(...s),o.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,b=3,j=2,A=1,k=10,S=-2,E=e=>"*"===e;function C(e,t){let n=e.split("/"),i=n.length;return n.some(E)&&(i+=S),t&&(i+=j),n.filter((e=>!E(e))).reduce(((e,t)=>e+(w.test(t)?b:""===t?A:k)),i)}function T(e,t,n){void 0===n&&(n=!1);let{routesMeta:i}=e,r={},a="/",s=[];for(let o=0;o<i.length;++o){let e=i[o],l=o===i.length-1,d="/"===a?t:t.slice(a.length)||"/",c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},d),u=e.route;if(!c&&l&&n&&!i[i.length-1].route.index&&(c=P({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},d)),!c)return null;Object.assign(r,c.params),s.push({params:r,pathname:O([a,c.pathname]),pathnameBase:N(O([a,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(a=O([a,c.pathnameBase]))}return s}function P(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(i.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(i.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":""!==e&&"/"!==e&&(r+="(?:(?=\\/|$))");let a=new RegExp(r,t?void 0:"i");return[a,i]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1),l=i.reduce(((e,t,n)=>{let{paramName:i,isOptional:r}=t;if("*"===i){let e=o[n]||"";s=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[i]=r&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:a,pathnameBase:s,pattern:e}}function I(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function B(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&"/"!==i?null:e.slice(n)||"/"}function z(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function D(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function _(e,t){let n=D(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function M(e,t,n,i){let r;void 0===i&&(i=!1),"string"===typeof e?r=p(e):(r=s({},e),l(!r.pathname||!r.pathname.includes("?"),z("?","pathname","search",r)),l(!r.pathname||!r.pathname.includes("#"),z("#","pathname","hash",r)),l(!r.search||!r.search.includes("#"),z("#","search","hash",r)));let a,o=""===e||""===r.pathname,d=o?"/":r.pathname;if(null==d)a=n;else{let e=t.length-1;if(!i&&d.startsWith("..")){let t=d.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:i="",hash:r=""}="string"===typeof e?p(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:R(i),hash:L(r)}}(r,a),u=d&&"/"!==d&&d.endsWith("/"),h=(o||"."===d)&&n.endsWith("/");return c.pathname.endsWith("/")||!u&&!h||(c.pathname+="/"),c}const O=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],Q=(new Set(U),["get",...U]);new Set(Q),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Y.apply(this,arguments)}const V=t.createContext(null);const W=t.createContext(null);const H=t.createContext(null);const G=t.createContext(null);const X=t.createContext({outlet:null,matches:[],isDataRoute:!1});const $=t.createContext(null);function K(){return null!=t.useContext(G)}function q(){return K()||l(!1),t.useContext(G).location}function J(e){t.useContext(H).static||t.useLayoutEffect(e)}function Z(){let{isDataRoute:e}=t.useContext(X);return e?function(){let{router:e}=de(oe.UseNavigateStable),n=ue(le.UseNavigateStable),i=t.useRef(!1);J((()=>{i.current=!0}));let r=t.useCallback((function(t,r){void 0===r&&(r={}),i.current&&("number"===typeof t?e.navigate(t):e.navigate(t,Y({fromRouteId:n},r)))}),[e,n]);return r}():function(){K()||l(!1);let e=t.useContext(V),{basename:n,future:i,navigator:r}=t.useContext(H),{matches:a}=t.useContext(X),{pathname:s}=q(),o=JSON.stringify(_(a,i.v7_relativeSplatPath)),d=t.useRef(!1);return J((()=>{d.current=!0})),t.useCallback((function(t,i){if(void 0===i&&(i={}),!d.current)return;if("number"===typeof t)return void r.go(t);let a=M(t,JSON.parse(o),s,"path"===i.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:O([n,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)}),[n,r,o,s,e])}()}function ee(e,n){let{relative:i}=void 0===n?{}:n,{future:r}=t.useContext(H),{matches:a}=t.useContext(X),{pathname:s}=q(),o=JSON.stringify(_(a,r.v7_relativeSplatPath));return t.useMemo((()=>M(e,JSON.parse(o),s,"path"===i)),[e,o,s,i])}function te(n,i,r,a){K()||l(!1);let{navigator:s}=t.useContext(H),{matches:o}=t.useContext(X),d=o[o.length-1],c=d?d.params:{},u=(d&&d.pathname,d?d.pathnameBase:"/");d&&d.route;let h,f=q();if(i){var m;let e="string"===typeof i?p(i):i;"/"===u||(null==(m=e.pathname)?void 0:m.startsWith(u))||l(!1),h=e}else h=f;let x=h.pathname||"/",v=x;if("/"!==u){let e=u.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=g(n,{pathname:v});let w=se(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:O([u,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:O([u,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,r,a);return i&&w?t.createElement(G.Provider,{value:{location:Y({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:e.Pop}},w):w}function ne(){let e=function(){var e;let n=t.useContext($),i=ce(le.UseRouteError),r=ue(le.UseRouteError);if(void 0!==n)return n;return null==(e=i.errors)?void 0:e[r]}(),n=F(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),i?t.createElement("pre",{style:a},i):null,null)}const ie=t.createElement(ne,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(X.Provider,{value:this.props.routeContext},t.createElement($.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:n,match:i,children:r}=e,a=t.useContext(V);return a&&a.static&&a.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=i.route.id),t.createElement(X.Provider,{value:n},r)}function se(e,n,i,r){var a;if(void 0===n&&(n=[]),void 0===i&&(i=null),void 0===r&&(r=null),null==e){var s;if(!i)return null;if(i.errors)e=i.matches;else{if(!(null!=(s=r)&&s.v7_partialHydration&&0===n.length&&!i.initialized&&i.matches.length>0))return null;e=i.matches}}let o=e,d=null==(a=i)?void 0:a.errors;if(null!=d){let e=o.findIndex((e=>e.route.id&&void 0!==(null==d?void 0:d[e.route.id])));e>=0||l(!1),o=o.slice(0,Math.min(o.length,e+1))}let c=!1,u=-1;if(i&&r&&r.v7_partialHydration)for(let t=0;t<o.length;t++){let e=o[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=t),e.route.id){let{loaderData:t,errors:n}=i,r=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||r){c=!0,o=u>=0?o.slice(0,u+1):[o[0]];break}}}return o.reduceRight(((e,r,a)=>{let s,l=!1,h=null,p=null;var f;i&&(s=d&&r.route.id?d[r.route.id]:void 0,h=r.route.errorElement||ie,c&&(u<0&&0===a?(f="route-fallback",!1||he[f]||(he[f]=!0),l=!0,p=null):u===a&&(l=!0,p=r.route.hydrateFallbackElement||null)));let m=n.concat(o.slice(0,a+1)),g=()=>{let n;return n=s?h:l?p:r.route.Component?t.createElement(r.route.Component,null):r.route.element?r.route.element:e,t.createElement(ae,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=i},children:n})};return i&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?t.createElement(re,{location:i.location,revalidation:i.revalidation,component:h,error:s,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var oe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(oe||{}),le=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(le||{});function de(e){let n=t.useContext(V);return n||l(!1),n}function ce(e){let n=t.useContext(W);return n||l(!1),n}function ue(e){let n=function(){let e=t.useContext(X);return e||l(!1),e}(),i=n.matches[n.matches.length-1];return i.route.id||l(!1),i.route.id}const he={};i.startTransition;function pe(e){l(!1)}function fe(n){let{basename:i="/",children:r=null,location:a,navigationType:s=e.Pop,navigator:o,static:d=!1,future:c}=n;K()&&l(!1);let u=i.replace(/^\/*/,"/"),h=t.useMemo((()=>({basename:u,navigator:o,static:d,future:Y({v7_relativeSplatPath:!1},c)})),[u,c,o,d]);"string"===typeof a&&(a=p(a));let{pathname:f="/",search:m="",hash:g="",state:x=null,key:v="default"}=a,y=t.useMemo((()=>{let e=B(f,u);return null==e?null:{location:{pathname:e,search:m,hash:g,state:x,key:v},navigationType:s}}),[u,f,m,g,x,v,s]);return null==y?null:t.createElement(H.Provider,{value:h},t.createElement(G.Provider,{children:r,value:y}))}function me(e){let{children:t,location:n}=e;return te(ge(t),n)}new Promise((()=>{}));t.Component;function ge(e,n){void 0===n&&(n=[]);let i=[];return t.Children.forEach(e,((e,r)=>{if(!t.isValidElement(e))return;let a=[...n,r];if(e.type===t.Fragment)return void i.push.apply(i,ge(e.props.children,a));e.type!==pe&&l(!1),e.props.index&&e.props.children&&l(!1);let s={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=ge(e.props.children,a)),i.push(s)})),i}function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},xe.apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const ye=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(ky){}new Map;const we=i.startTransition;a.flushSync,i.useId;function be(e){let{basename:n,children:i,future:r,window:a}=e,s=t.useRef();var o;null==s.current&&(s.current=(void 0===(o={window:a,v5Compat:!0})&&(o={}),f((function(e,t){let{pathname:n,search:i,hash:r}=e.location;return u("",{pathname:n,search:i,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:h(t)}),null,o)));let l=s.current,[d,c]=t.useState({action:l.action,location:l.location}),{v7_startTransition:p}=r||{},m=t.useCallback((e=>{p&&we?we((()=>c(e))):c(e)}),[c,p]);return t.useLayoutEffect((()=>l.listen(m)),[l,m]),t.createElement(fe,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:l,future:r})}const je="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ae=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=t.forwardRef((function(e,n){let i,{onClick:r,relative:a,reloadDocument:s,replace:o,state:d,target:c,to:u,preventScrollReset:p,unstable_viewTransition:f}=e,m=ve(e,ye),{basename:g}=t.useContext(H),x=!1;if("string"===typeof u&&Ae.test(u)&&(i=u,je))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=B(t.pathname,g);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:x=!0}catch(ky){}let v=function(e,n){let{relative:i}=void 0===n?{}:n;K()||l(!1);let{basename:r,navigator:a}=t.useContext(H),{hash:s,pathname:o,search:d}=ee(e,{relative:i}),c=o;return"/"!==r&&(c="/"===o?r:O([r,o])),a.createHref({pathname:c,search:d,hash:s})}(u,{relative:a}),y=function(e,n){let{target:i,replace:r,state:a,preventScrollReset:s,relative:o,unstable_viewTransition:l}=void 0===n?{}:n,d=Z(),c=q(),u=ee(e,{relative:o});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,i)){t.preventDefault();let n=void 0!==r?r:h(c)===h(u);d(e,{replace:n,state:a,preventScrollReset:s,relative:o,unstable_viewTransition:l})}}),[c,d,u,r,a,i,e,s,o,l])}(u,{replace:o,state:d,target:c,preventScrollReset:p,relative:a,unstable_viewTransition:f});return t.createElement("a",xe({},m,{href:i||v,onClick:x||s?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:n,target:c}))}));var Se,Ee;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Se||(Se={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ee||(Ee={}));var Ce=function(){return Ce=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Ce.apply(this,arguments)};Object.create;function Te(e,t,n){if(n||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Pe=n(7324),Ie=n.n(Pe),Be="-ms-",ze="-moz-",De="-webkit-",_e="comm",Me="rule",Oe="decl",Ne="@import",Re="@keyframes",Le="@layer",Fe=Math.abs,Ue=String.fromCharCode,Qe=Object.assign;function Ye(e){return e.trim()}function Ve(e,t){return(e=t.exec(e))?e[0]:e}function We(e,t,n){return e.replace(t,n)}function He(e,t,n){return e.indexOf(t,n)}function Ge(e,t){return 0|e.charCodeAt(t)}function Xe(e,t,n){return e.slice(t,n)}function $e(e){return e.length}function Ke(e){return e.length}function qe(e,t){return t.push(e),e}function Je(e,t){return e.filter((function(e){return!Ve(e,t)}))}var Ze=1,et=1,tt=0,nt=0,it=0,rt="";function at(e,t,n,i,r,a,s,o){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:Ze,column:et,length:s,return:"",siblings:o}}function st(e,t){return Qe(at("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ot(e){for(;e.root;)e=st(e.root,{children:[e]});qe(e,e.siblings)}function lt(){return it=nt>0?Ge(rt,--nt):0,et--,10===it&&(et=1,Ze--),it}function dt(){return it=nt<tt?Ge(rt,nt++):0,et++,10===it&&(et=1,Ze++),it}function ct(){return Ge(rt,nt)}function ut(){return nt}function ht(e,t){return Xe(rt,e,t)}function pt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ft(e){return Ze=et=1,tt=$e(rt=e),nt=0,[]}function mt(e){return rt="",e}function gt(e){return Ye(ht(nt-1,yt(91===e?e+2:40===e?e+1:e)))}function xt(e){for(;(it=ct())&&it<33;)dt();return pt(e)>2||pt(it)>3?"":" "}function vt(e,t){for(;--t&&dt()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return ht(e,ut()+(t<6&&32==ct()&&32==dt()))}function yt(e){for(;dt();)switch(it){case e:return nt;case 34:case 39:34!==e&&39!==e&&yt(it);break;case 40:41===e&&yt(e);break;case 92:dt()}return nt}function wt(e,t){for(;dt()&&e+it!==57&&(e+it!==84||47!==ct()););return"/*"+ht(t,nt-1)+"*"+Ue(47===e?e:dt())}function bt(e){for(;!pt(ct());)dt();return ht(e,nt)}function jt(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function At(e,t,n,i){switch(e.type){case Le:if(e.children.length)break;case Ne:case Oe:return e.return=e.return||e.value;case _e:return"";case Re:return e.return=e.value+"{"+jt(e.children,i)+"}";case Me:if(!$e(e.value=e.props.join(",")))return""}return $e(n=jt(e.children,i))?e.return=e.value+"{"+n+"}":""}function kt(e,t,n){switch(function(e,t){return 45^Ge(e,0)?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}(e,t)){case 5103:return De+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+e+e;case 4789:return ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return De+e+ze+e+Be+e+e;case 5936:switch(Ge(e,t+11)){case 114:return De+e+Be+We(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return De+e+Be+We(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return De+e+Be+We(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return De+e+Be+e+e;case 6165:return De+e+Be+"flex-"+e+e;case 5187:return De+e+We(e,/(\w+).+(:[^]+)/,De+"box-$1$2"+Be+"flex-$1$2")+e;case 5443:return De+e+Be+"flex-item-"+We(e,/flex-|-self/g,"")+(Ve(e,/flex-|baseline/)?"":Be+"grid-row-"+We(e,/flex-|-self/g,""))+e;case 4675:return De+e+Be+"flex-line-pack"+We(e,/align-content|flex-|-self/g,"")+e;case 5548:return De+e+Be+We(e,"shrink","negative")+e;case 5292:return De+e+Be+We(e,"basis","preferred-size")+e;case 6060:return De+"box-"+We(e,"-grow","")+De+e+Be+We(e,"grow","positive")+e;case 4554:return De+We(e,/([^-])(transform)/g,"$1"+De+"$2")+e;case 6187:return We(We(We(e,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),e,"")+e;case 5495:case 3959:return We(e,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return We(We(e,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+e+e;case 4200:if(!Ve(e,/flex-|baseline/))return Be+"grid-column-align"+Xe(e,t)+e;break;case 2592:case 3360:return Be+We(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Ve(e.props,/grid-\w+-end/)}))?~He(e+(n=n[t].value),"span",0)?e:Be+We(e,"-start","")+e+Be+"grid-row-span:"+(~He(n,"span",0)?Ve(n,/\d+/):+Ve(n,/\d+/)-+Ve(e,/\d+/))+";":Be+We(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Ve(e.props,/grid-\w+-start/)}))?e:Be+We(We(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return We(e,/(.+)-inline(.+)/,De+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($e(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(45!==Ge(e,t+4))break;case 102:return We(e,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+ze+(108==Ge(e,t+3)?"$3":"$2-$3"))+e;case 115:return~He(e,"stretch",0)?kt(We(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return We(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,i,r,a,s,o){return Be+n+":"+i+o+(r?Be+n+"-span:"+(a?s:+s-+i)+o:"")+e}));case 4949:if(121===Ge(e,t+6))return We(e,":",":"+De)+e;break;case 6444:switch(Ge(e,45===Ge(e,14)?18:11)){case 120:return We(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(45===Ge(e,14)?"inline-":"")+"box$3$1"+De+"$2$3$1"+Be+"$2box$3")+e;case 100:return We(e,":",":"+Be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(e,"scroll-","scroll-snap-")+e}return e}function St(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Oe:return void(e.return=kt(e.value,e.length,n));case Re:return jt([st(e,{value:We(e.value,"@","@"+De)})],i);case Me:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Ve(t,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ot(st(e,{props:[We(t,/:(read-\w+)/,":"+ze+"$1")]})),ot(st(e,{props:[t]})),Qe(e,{props:Je(n,i)});break;case"::placeholder":ot(st(e,{props:[We(t,/:(plac\w+)/,":"+De+"input-$1")]})),ot(st(e,{props:[We(t,/:(plac\w+)/,":"+ze+"$1")]})),ot(st(e,{props:[We(t,/:(plac\w+)/,Be+"input-$1")]})),ot(st(e,{props:[t]})),Qe(e,{props:Je(n,i)})}return""}))}}function Et(e){return mt(Ct("",null,null,null,[""],e=ft(e),0,[0],e))}function Ct(e,t,n,i,r,a,s,o,l){for(var d=0,c=0,u=s,h=0,p=0,f=0,m=1,g=1,x=1,v=0,y="",w=r,b=a,j=i,A=y;g;)switch(f=v,v=dt()){case 40:if(108!=f&&58==Ge(A,u-1)){-1!=He(A+=We(gt(v),"&","&\f"),"&\f",Fe(d?o[d-1]:0))&&(x=-1);break}case 34:case 39:case 91:A+=gt(v);break;case 9:case 10:case 13:case 32:A+=xt(f);break;case 92:A+=vt(ut()-1,7);continue;case 47:switch(ct()){case 42:case 47:qe(Pt(wt(dt(),ut()),t,n,l),l);break;default:A+="/"}break;case 123*m:o[d++]=$e(A)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==x&&(A=We(A,/\f/g,"")),p>0&&$e(A)-u&&qe(p>32?It(A+";",i,n,u-1,l):It(We(A," ","")+";",i,n,u-2,l),l);break;case 59:A+=";";default:if(qe(j=Tt(A,t,n,d,c,r,o,y,w=[],b=[],u,a),a),123===v)if(0===c)Ct(A,t,j,j,w,a,u,o,b);else switch(99===h&&110===Ge(A,3)?100:h){case 100:case 108:case 109:case 115:Ct(e,j,j,i&&qe(Tt(e,j,j,0,0,r,o,y,r,w=[],u,b),b),r,b,u,o,i?w:b);break;default:Ct(A,j,j,j,[""],b,0,o,b)}}d=c=p=0,m=x=1,y=A="",u=s;break;case 58:u=1+$e(A),p=f;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==lt())continue;switch(A+=Ue(v),v*m){case 38:x=c>0?1:(A+="\f",-1);break;case 44:o[d++]=($e(A)-1)*x,x=1;break;case 64:45===ct()&&(A+=gt(dt())),h=ct(),c=u=$e(y=A+=bt(ut())),v++;break;case 45:45===f&&2==$e(A)&&(m=0)}}return a}function Tt(e,t,n,i,r,a,s,o,l,d,c,u){for(var h=r-1,p=0===r?a:[""],f=Ke(p),m=0,g=0,x=0;m<i;++m)for(var v=0,y=Xe(e,h+1,h=Fe(g=s[m])),w=e;v<f;++v)(w=Ye(g>0?p[v]+" "+y:We(y,/&\f/g,p[v])))&&(l[x++]=w);return at(e,t,n,0===r?Me:o,l,d,c,u)}function Pt(e,t,n,i){return at(e,t,n,_e,Ue(it),Xe(e,2,-2),0,i)}function It(e,t,n,i,r){return at(e,t,n,Oe,Xe(e,0,i),Xe(e,i+1,-1),i,r)}var Bt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Dt="active",_t="data-styled-version",Mt="6.1.12",Ot="/*!sc*/\n",Nt="undefined"!=typeof window&&"HTMLElement"in window,Rt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Lt=(new Set,Object.freeze([])),Ft=Object.freeze({});function Ut(e,t,n){return void 0===n&&(n=Ft),e.theme!==n.theme&&e.theme||t||n.theme}var Qt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vt=/(^-|-$)/g;function Wt(e){return e.replace(Yt,"-").replace(Vt,"")}var Ht=/(a)(d)/gi,Gt=52,Xt=function(e){return String.fromCharCode(e+(e>25?39:97))};function $t(e){var t,n="";for(t=Math.abs(e);t>Gt;t=t/Gt|0)n=Xt(t%Gt)+n;return(Xt(t%Gt)+n).replace(Ht,"$1-$2")}var Kt,qt=5381,Jt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zt=function(e){return Jt(qt,e)};function en(e){return $t(Zt(e)>>>0)}function tn(e){return e.displayName||e.name||"Component"}function nn(e){return"string"==typeof e&&!0}var rn="function"==typeof Symbol&&Symbol.for,an=rn?Symbol.for("react.memo"):60115,sn=rn?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ln={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cn=((Kt={})[sn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kt[an]=dn,Kt);function un(e){return("type"in(t=e)&&t.type.$$typeof)===an?dn:"$$typeof"in e?cn[e.$$typeof]:on;var t}var hn=Object.defineProperty,pn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,mn=Object.getOwnPropertyDescriptor,gn=Object.getPrototypeOf,xn=Object.prototype;function vn(e,t,n){if("string"!=typeof t){if(xn){var i=gn(t);i&&i!==xn&&vn(e,i,n)}var r=pn(t);fn&&(r=r.concat(fn(t)));for(var a=un(e),s=un(t),o=0;o<r.length;++o){var l=r[o];if(!(l in ln||n&&n[l]||s&&l in s||a&&l in a)){var d=mn(t,l);try{hn(e,l,d)}catch(e){}}}}return e}function yn(e){return"function"==typeof e}function wn(e){return"object"==typeof e&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jn(e,t){if(0===e.length)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function An(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kn(e,t,n){if(void 0===n&&(n=!1),!n&&!An(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=kn(e[i],t[i]);else if(An(t))for(var i in t)e[i]=kn(e[i],t[i]);return e}function Sn(e,t){Object.defineProperty(e,"toString",{value:t})}function En(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,r=i;e>=r;)if((r<<=1)<0)throw En(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var a=i;a<r;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),o=(a=0,t.length);a<o;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),i=n+t;this.groupSizes[e]=0;for(var r=n;r<i;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n,a=i;a<r;a++)t+="".concat(this.tag.getRule(a)).concat(Ot);return t},e}(),Tn=new Map,Pn=new Map,In=1,Bn=function(e){if(Tn.has(e))return Tn.get(e);for(;Pn.has(In);)In++;var t=In++;return Tn.set(e,t),Pn.set(t,e),t},zn=function(e,t){In=t+1,Tn.set(e,t),Pn.set(t,e)},Dn="style[".concat(zt,"][").concat(_t,'="').concat(Mt,'"]'),_n=new RegExp("^".concat(zt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mn=function(e,t,n){for(var i,r=n.split(","),a=0,s=r.length;a<s;a++)(i=r[a])&&e.registerName(t,i)},On=function(e,t){for(var n,i=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Ot),r=[],a=0,s=i.length;a<s;a++){var o=i[a].trim();if(o){var l=o.match(_n);if(l){var d=0|parseInt(l[1],10),c=l[2];0!==d&&(zn(c,d),Mn(e,c,l[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(o)}}},Nn=function(e){for(var t=document.querySelectorAll(Dn),n=0,i=t.length;n<i;n++){var r=t[n];r&&r.getAttribute(zt)!==Dt&&(On(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function Rn(){return n.nc}var Ln=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(zt,"]")));return t[t.length-1]}(n),a=void 0!==r?r.nextSibling:null;i.setAttribute(zt,Dt),i.setAttribute(_t,Mt);var s=Rn();return s&&i.setAttribute("nonce",s),n.insertBefore(i,a),i},Fn=function(){function e(e){this.element=Ln(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,i=t.length;n<i;n++){var r=t[n];if(r.ownerNode===e)return r}throw En(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Un=function(){function e(e){this.element=Ln(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Qn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Yn=Nt,Vn={isServer:!Nt,useCSSOMInjection:!Rt},Wn=function(){function e(e,t,n){void 0===e&&(e=Ft),void 0===t&&(t={});var i=this;this.options=Ce(Ce({},Vn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Nt&&Yn&&(Yn=!1,Nn(this)),Sn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,i="",r=function(n){var r=function(e){return Pn.get(e)}(n);if(void 0===r)return"continue";var a=e.names.get(r),s=t.getGroup(n);if(void 0===a||!a.size||0===s.length)return"continue";var o="".concat(zt,".g").concat(n,'[id="').concat(r,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),i+="".concat(s).concat(o,'{content:"').concat(l,'"}').concat(Ot)},a=0;a<n;a++)r(a);return i}(i)}))}return e.registerId=function(e){return Bn(e)},e.prototype.rehydrate=function(){!this.server&&Nt&&Nn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Qn(n):t?new Fn(n):new Un(n)}(this.options),new Cn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Bn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Bn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Bn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Hn=/&/g,Gn=/^\s*\/\/.*$/gm;function Xn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Xn(e.children,t)),e}))}function $n(e){var t,n,i,r=void 0===e?Ft:e,a=r.options,s=void 0===a?Ft:a,o=r.plugins,l=void 0===o?Lt:o,d=function(e,i,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===Me&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Hn,n).replace(i,d))})),s.prefix&&c.push(St),c.push(At);var u=function(e,r,a,o){void 0===r&&(r=""),void 0===a&&(a=""),void 0===o&&(o="&"),t=o,n=r,i=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Gn,""),d=Et(a||r?"".concat(a," ").concat(r," { ").concat(l," }"):l);s.namespace&&(d=Xn(d,s.namespace));var u,h=[];return jt(d,function(e){var t=Ke(e);return function(n,i,r,a){for(var s="",o=0;o<t;o++)s+=e[o](n,i,r,a)||"";return s}}(c.concat((u=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&u(e)})))),h};return u.hash=l.length?l.reduce((function(e,t){return t.name||En(15),Jt(e,t.name)}),qt).toString():"",u}var Kn=new Wn,qn=$n(),Jn=t.createContext({shouldForwardProp:void 0,styleSheet:Kn,stylis:qn}),Zn=(Jn.Consumer,t.createContext(void 0));function ei(){return(0,t.useContext)(Jn)}function ti(e){var n=(0,t.useState)(e.stylisPlugins),i=n[0],r=n[1],a=ei().styleSheet,s=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),o=(0,t.useMemo)((function(){return $n({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:i})}),[e.enableVendorPrefixes,e.namespace,i]);(0,t.useEffect)((function(){Ie()(i,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:o}}),[e.shouldForwardProp,s,o]);return t.createElement(Jn.Provider,{value:l},t.createElement(Zn.Provider,{value:o},e.children))}var ni=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=qn);var i=n.name+t.hash;e.hasNameForId(n.id,i)||e.insertRules(n.id,i,t(n.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Sn(this,(function(){throw En(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=qn),this.name+e.hash},e}(),ii=function(e){return e>="A"&&e<="Z"};function ri(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(1===n&&"-"===i&&"-"===e[0])return e;ii(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var ai=function(e){return null==e||!1===e||""===e},si=function(e){var t,n,i=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!ai(a)&&(Array.isArray(a)&&a.isCss||yn(a)?i.push("".concat(ri(r),":"),a,";"):An(a)?i.push.apply(i,Te(Te(["".concat(r," {")],si(a),!1),["}"],!1)):i.push("".concat(ri(r),": ").concat((t=r,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Bt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function oi(e,t,n,i){return ai(e)?[]:wn(e)?[".".concat(e.styledComponentId)]:yn(e)?!yn(r=e)||r.prototype&&r.prototype.isReactComponent||!t?[e]:oi(e(t),t,n,i):e instanceof ni?n?(e.inject(n,i),[e.getName(i)]):[e]:An(e)?si(e):Array.isArray(e)?Array.prototype.concat.apply(Lt,e.map((function(e){return oi(e,t,n,i)}))):[e.toString()];var r}function li(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yn(n)&&!wn(n))return!1}return!0}var di=Zt(Mt),ci=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&li(e),this.componentId=t,this.baseHash=Jt(di,t),this.baseStyle=n,Wn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=bn(i,this.staticRulesId);else{var r=jn(oi(this.rules,e,t,n)),a=$t(Jt(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,a)){var s=n(r,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,s)}i=bn(i,a),this.staticRulesId=a}else{for(var o=Jt(this.baseHash,n.hash),l="",d=0;d<this.rules.length;d++){var c=this.rules[d];if("string"==typeof c)l+=c;else if(c){var u=jn(oi(c,e,t,n));o=Jt(o,u+d),l+=u}}if(l){var h=$t(o>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),i=bn(i,h)}}return i},e}(),ui=t.createContext(void 0);ui.Consumer;var hi={};new Set;function pi(e,n,i){var r=wn(e),a=e,s=!nn(e),o=n.attrs,l=void 0===o?Lt:o,d=n.componentId,c=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Wt(e);hi[n]=(hi[n]||0)+1;var i="".concat(n,"-").concat(en(Mt+n+hi[n]));return t?"".concat(t,"-").concat(i):i}(n.displayName,n.parentComponentId):d,u=n.displayName,h=void 0===u?function(e){return nn(e)?"styled.".concat(e):"Styled(".concat(tn(e),")")}(e):u,p=n.displayName&&n.componentId?"".concat(Wt(n.displayName),"-").concat(n.componentId):n.componentId||c,f=r&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(r&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new ci(i,p,r?a.componentStyle:void 0);function y(e,n){return function(e,n,i){var r=e.attrs,a=e.componentStyle,s=e.defaultProps,o=e.foldedComponentIds,l=e.styledComponentId,d=e.target,c=t.useContext(ui),u=ei(),h=e.shouldForwardProp||u.shouldForwardProp,p=Ut(n,c,s)||Ft,f=function(e,t,n){for(var i,r=Ce(Ce({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var s=yn(i=e[a])?i(r):i;for(var o in s)r[o]="className"===o?bn(r[o],s[o]):"style"===o?Ce(Ce({},r[o]),s[o]):s[o]}return t.className&&(r.className=bn(r.className,t.className)),r}(r,n,p),m=f.as||d,g={};for(var x in f)void 0===f[x]||"$"===x[0]||"as"===x||"theme"===x&&f.theme===p||("forwardedAs"===x?g.as=f.forwardedAs:h&&!h(x,m)||(g[x]=f[x]));var v=function(e,t){var n=ei();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),y=bn(o,l);return v&&(y+=" "+v),f.className&&(y+=" "+f.className),g[nn(m)&&!Qt.has(m)?"class":"className"]=y,g.ref=i,(0,t.createElement)(m,g)}(w,e,n)}y.displayName=h;var w=t.forwardRef(y);return w.attrs=f,w.componentStyle=v,w.displayName=h,w.shouldForwardProp=m,w.foldedComponentIds=r?bn(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=p,w.target=r?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,r=t;i<r.length;i++)kn(e,r[i],!0);return e}({},a.defaultProps,e):e}}),Sn(w,(function(){return".".concat(w.styledComponentId)})),s&&vn(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function fi(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var mi=function(e){return Object.assign(e,{isCss:!0})};function gi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yn(e)||An(e))return mi(oi(fi(Lt,Te([e],t,!0))));var i=e;return 0===t.length&&1===i.length&&"string"==typeof i[0]?oi(i):mi(oi(fi(i,t)))}function xi(e,t,n){if(void 0===n&&(n=Ft),!t)throw En(1,t);var i=function(i){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return e(t,n,gi.apply(void 0,Te([i],r,!1)))};return i.attrs=function(i){return xi(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return xi(e,t,Ce(Ce({},n),i))},i}var vi=function(e){return xi(pi,e)},yi=vi;Qt.forEach((function(e){yi[e]=vi(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=li(e),Wn.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,i){var r=i(jn(oi(this.rules,t,n,i)),""),a=this.componentId+e;n.insertRules(a,a,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,i){e>2&&Wn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,i)}}();function wi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=jn(gi.apply(void 0,Te([e],t,!1))),r=en(i);return new ni(r,i)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Rn(),i=jn([n&&'nonce="'.concat(n,'"'),"".concat(zt,'="true"'),"".concat(_t,'="').concat(Mt,'"')].filter(Boolean)," ");return"<style ".concat(i,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw En(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw En(2);var i=e.instance.toString();if(!i)return[];var r=((n={})[zt]="",n[_t]=Mt,n.dangerouslySetInnerHTML={__html:i},n),a=Rn();return a&&(r.nonce=a),[t.createElement("style",Ce({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Wn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw En(2);return t.createElement(ti,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw En(3)}})(),"__sc-".concat(zt,"__");var bi=n(579);const ji=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ai=(0,t.createContext)({}),ki=(0,t.createContext)(null),Si="undefined"!==typeof window,Ei=Si?t.useLayoutEffect:t.useEffect,Ci=(0,t.createContext)({strict:!1}),Ti=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Pi="data-"+Ti("framerAppearId"),Ii=!1,Bi=!1;const zi=["read","resolveKeyframes","update","preRender","render","postRender"];function Di(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,s=zi.reduce(((e,t)=>(e[t]=function(e){let t=new Set,n=new Set,i=!1,r=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function o(t){a.has(t)&&(l.schedule(t),e()),t(s)}const l={schedule:function(e){const r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),r.has(e)||r.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{s=e,i?r=!0:(i=!0,[t,n]=[n,t],n.clear(),t.forEach(o),i=!1,r&&(r=!1,l.process(e)))}};return l}(a),e)),{}),{read:o,resolveKeyframes:l,update:d,preRender:c,render:u,postRender:h}=s,p=()=>{const a=Bi?r.timestamp:performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(a-r.timestamp,40),1),r.timestamp=a,r.isProcessing=!0,o.process(r),l.process(r),d.process(r),c.process(r),u.process(r),h.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(p))},f=zi.reduce(((t,a)=>{const o=s[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,i=!0,r.isProcessing||e(p)),o.schedule(t,a,s)},t}),{});return{schedule:f,cancel:e=>{for(let t=0;t<zi.length;t++)s[zi[t]].cancel(e)},state:r,steps:s}}const{schedule:_i,cancel:Mi}=Di(queueMicrotask,!1);function Oi(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Ni=(0,t.createContext)({});let Ri=!1;function Li(e,n,i,r,a){var s;const{visualElement:o}=(0,t.useContext)(Ai),l=(0,t.useContext)(Ci),d=(0,t.useContext)(ki),c=(0,t.useContext)(ji).reducedMotion,u=(0,t.useRef)();r=r||l.renderer,!u.current&&r&&(u.current=r(e,{visualState:n,parent:o,props:i,presenceContext:d,blockInitialAnimation:!!d&&!1===d.initial,reducedMotionConfig:c}));const h=u.current,p=(0,t.useContext)(Ni);!h||h.projection||!a||"html"!==h.type&&"svg"!==h.type||function(e,t,n,i){const{layoutId:r,layout:a,drag:s,dragConstraints:o,layoutScroll:l,layoutRoot:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Ui(e.parent)),e.projection.setOptions({layoutId:r,layout:a,alwaysMeasureLayout:Boolean(s)||o&&Oi(o),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:d})}(u.current,i,a,p),(0,t.useInsertionEffect)((()=>{h&&h.update(i,d)}));const f=i[Pi],m=(0,t.useRef)(Boolean(f)&&!window.MotionHandoffIsComplete&&(null===(s=window.MotionHasOptimisedAnimation)||void 0===s?void 0:s.call(window,f)));return Ei((()=>{h&&(h.updateFeatures(),_i.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())})),(0,t.useEffect)((()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current=!1,Ri||(Ri=!0,queueMicrotask(Fi)))})),h}function Fi(){window.MotionHandoffIsComplete=!0}function Ui(e){if(e)return!1!==e.options.allowProjection?e.projection:Ui(e.parent)}function Qi(e,n,i){return(0,t.useCallback)((t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),i&&("function"===typeof i?i(t):Oi(i)&&(i.current=t))}),[n])}function Yi(e){return"string"===typeof e||Array.isArray(e)}function Vi(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const Wi=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hi=["initial",...Wi];function Gi(e){return Vi(e.animate)||Hi.some((t=>Yi(e[t])))}function Xi(e){return Boolean(Gi(e)||e.variants)}function $i(e){const{initial:n,animate:i}=function(e,t){if(Gi(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Yi(t)?t:void 0,animate:Yi(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(Ai));return(0,t.useMemo)((()=>({initial:n,animate:i})),[Ki(n),Ki(i)])}function Ki(e){return Array.isArray(e)?e.join(" "):e}const qi={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ji={};for(const n in qi)Ji[n]={isEnabled:e=>qi[n].some((t=>!!e[t]))};const Zi=(0,t.createContext)({}),er=Symbol.for("motionComponentSymbol");function tr(e){let{preloadedFeatures:n,createVisualElement:i,useRender:r,useVisualState:a,Component:s}=e;n&&function(e){for(const t in e)Ji[t]={...Ji[t],...e[t]}}(n);const o=(0,t.forwardRef)((function(e,n){let o;const l={...(0,t.useContext)(ji),...e,layoutId:nr(e)},{isStatic:d}=l,c=$i(e),u=a(e,d);if(!d&&Si){!function(){(0,t.useContext)(Ci).strict;0}();const e=function(e){const{drag:t,layout:n}=Ji;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:(null===t||void 0===t?void 0:t.isEnabled(e))||(null===n||void 0===n?void 0:n.isEnabled(e))?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);o=e.MeasureLayout,c.visualElement=Li(s,u,l,i,e.ProjectionNode)}return(0,bi.jsxs)(Ai.Provider,{value:c,children:[o&&c.visualElement?(0,bi.jsx)(o,{visualElement:c.visualElement,...l}):null,r(s,e,Qi(u,c.visualElement,n),u,d,c.visualElement)]})}));return o[er]=s,o}function nr(e){let{layoutId:n}=e;const i=(0,t.useContext)(Zi).id;return i&&void 0!==n?i+"-"+n:n}function ir(e){function t(t){return tr(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const rr=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ar(e){return"string"===typeof e&&!e.includes("-")&&!!(rr.indexOf(e)>-1||/[A-Z]/u.test(e))}const sr={};const or=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],lr=new Set(or);function dr(e,t){let{layout:n,layoutId:i}=t;return lr.has(e)||e.startsWith("origin")||(n||void 0!==i)&&(!!sr[e]||"opacity"===e)}const cr=e=>Boolean(e&&e.getVelocity),ur=(e,t)=>t&&"number"===typeof e?t.transform(e):e,hr=(e,t,n)=>n>t?t:n<e?e:n,pr={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},fr={...pr,transform:e=>hr(0,1,e)},mr={...pr,default:1},gr=e=>Math.round(1e5*e)/1e5,xr=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,vr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,yr=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function wr(e){return"string"===typeof e}const br=e=>({test:t=>wr(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),jr=br("deg"),Ar=br("%"),kr=br("px"),Sr=br("vh"),Er=br("vw"),Cr={...Ar,parse:e=>Ar.parse(e)/100,transform:e=>Ar.transform(100*e)},Tr={...pr,transform:Math.round},Pr={borderWidth:kr,borderTopWidth:kr,borderRightWidth:kr,borderBottomWidth:kr,borderLeftWidth:kr,borderRadius:kr,radius:kr,borderTopLeftRadius:kr,borderTopRightRadius:kr,borderBottomRightRadius:kr,borderBottomLeftRadius:kr,width:kr,maxWidth:kr,height:kr,maxHeight:kr,size:kr,top:kr,right:kr,bottom:kr,left:kr,padding:kr,paddingTop:kr,paddingRight:kr,paddingBottom:kr,paddingLeft:kr,margin:kr,marginTop:kr,marginRight:kr,marginBottom:kr,marginLeft:kr,rotate:jr,rotateX:jr,rotateY:jr,rotateZ:jr,scale:mr,scaleX:mr,scaleY:mr,scaleZ:mr,skew:jr,skewX:jr,skewY:jr,distance:kr,translateX:kr,translateY:kr,translateZ:kr,x:kr,y:kr,z:kr,perspective:kr,transformPerspective:kr,opacity:fr,originX:Cr,originY:Cr,originZ:kr,zIndex:Tr,backgroundPositionX:kr,backgroundPositionY:kr,fillOpacity:fr,strokeOpacity:fr,numOctaves:Tr},Ir={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Br=or.length;const zr=e=>t=>"string"===typeof t&&t.startsWith(e),Dr=zr("--"),_r=zr("var(--"),Mr=e=>!!_r(e)&&Or.test(e.split("/*")[0].trim()),Or=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Nr(e,t,n){const{style:i,vars:r,transformOrigin:a}=e;let s=!1,o=!1;for(const l in t){const e=t[l];if(lr.has(l))s=!0;else if(Dr(l))r[l]=e;else{const t=ur(e,Pr[l]);l.startsWith("origin")?(o=!0,a[l]=t):i[l]=t}}if(t.transform||(s||n?i.transform=function(e,t,n){let i="",r=!0;for(let a=0;a<Br;a++){const s=or[a],o=e[s];if(void 0===o)continue;let l=!0;if(l="number"===typeof o?o===(s.startsWith("scale")?1:0):0===parseFloat(o),!l||n){const e=ur(o,Pr[s]);l||(r=!1,i+=`${Ir[s]||s}(${e}) `),n&&(t[s]=e)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}(t,e.transform,n):i.transform&&(i.transform="none")),o){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;i.transformOrigin=`${e} ${t} ${n}`}}const Rr=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Lr(e,t,n){for(const i in t)cr(t[i])||dr(i,n)||(e[i]=t[i])}function Fr(e,n){const i={};return Lr(i,e.style||{},e),Object.assign(i,function(e,n){let{transformTemplate:i}=e;return(0,t.useMemo)((()=>{const e=Rr();return Nr(e,n,i),Object.assign({},e.vars,e.style)}),[n])}(e,n)),i}function Ur(e,t){const n={},i=Fr(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const Qr=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Yr(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Qr.has(e)}let Vr=e=>!Yr(e);try{(Wr=require("@emotion/is-prop-valid").default)&&(Vr=e=>e.startsWith("on")?!Yr(e):Wr(e))}catch(Sy){}var Wr;function Hr(e,t,n){return"string"===typeof e?e:kr.transform(t+n*e)}const Gr={offset:"stroke-dashoffset",array:"stroke-dasharray"},Xr={offset:"strokeDashoffset",array:"strokeDasharray"};function $r(e,t,n,i){let{attrX:r,attrY:a,attrScale:s,originX:o,originY:l,pathLength:d,pathSpacing:c=1,pathOffset:u=0,...h}=t;if(Nr(e,h,i),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:f,dimensions:m}=e;p.transform&&(m&&(f.transform=p.transform),delete p.transform),m&&(void 0!==o||void 0!==l||f.transform)&&(f.transformOrigin=function(e,t,n){return`${Hr(t,e.x,e.width)} ${Hr(n,e.y,e.height)}`}(m,void 0!==o?o:.5,void 0!==l?l:.5)),void 0!==r&&(p.x=r),void 0!==a&&(p.y=a),void 0!==s&&(p.scale=s),void 0!==d&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=r?Gr:Xr;e[a.offset]=kr.transform(-i);const s=kr.transform(t),o=kr.transform(n);e[a.array]=`${s} ${o}`}(p,d,c,u,!1)}const Kr=()=>({...Rr(),attrs:{}}),qr=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Jr(e,n,i,r){const a=(0,t.useMemo)((()=>{const t=Kr();return $r(t,n,qr(r),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n]);if(e.style){const t={};Lr(t,e.style,e),a.style={...t,...a.style}}return a}function Zr(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,i,r,a,s)=>{let{latestValues:o}=a;const l=(ar(n)?Jr:Ur)(i,o,s,n),d=function(e,t,n){const i={};for(const r in e)"values"===r&&"object"===typeof e.values||(Vr(r)||!0===n&&Yr(r)||!t&&!Yr(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}(i,"string"===typeof n,e),c=n!==t.Fragment?{...d,...l,ref:r}:{},{children:u}=i,h=(0,t.useMemo)((()=>cr(u)?u.get():u),[u]);return(0,t.createElement)(n,{...c,children:h})}}function ea(e,t,n,i){let{style:r,vars:a}=t;Object.assign(e.style,r,i&&i.getProjectionStyles(n));for(const s in a)e.style.setProperty(s,a[s])}const ta=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function na(e,t,n,i){ea(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(ta.has(r)?r:Ti(r),t.attrs[r])}function ia(e,t,n){var i;const{style:r}=e,a={};for(const s in r)(cr(r[s])||t.style&&cr(t.style[s])||dr(s,e)||void 0!==(null===(i=null===n||void 0===n?void 0:n.getValue(s))||void 0===i?void 0:i.liveStyle))&&(a[s]=r[s]);return n&&r&&"string"===typeof r.willChange&&(n.applyWillChange=!1),a}function ra(e,t,n){const i=ia(e,t,n);for(const r in e)if(cr(e[r])||cr(t[r])){i[-1!==or.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return i}function aa(e){const t=[{},{}];return null===e||void 0===e||e.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function sa(e,t,n,i){if("function"===typeof t){const[r,a]=aa(i);t=t(void 0!==n?n:e.custom,r,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[r,a]=aa(i);t=t(void 0!==n?n:e.custom,r,a)}return t}const oa=e=>Array.isArray(e),la=e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue),da=e=>oa(e)?e[e.length-1]||0:e;function ca(e){const t=cr(e)?e.get():e;return la(t)?t.toValue():t}const ua=new Set(["opacity","clipPath","filter","transform"]);function ha(e){return lr.has(e)?"transform":ua.has(e)?Ti(e):void 0}function pa(e,t){-1===e.indexOf(t)&&e.push(t)}function fa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const ma=e=>(n,i)=>{const r=(0,t.useContext)(Ai),a=(0,t.useContext)(ki),s=()=>function(e,t,n,i,r){let{applyWillChange:a=!1,scrapeMotionValuesFromProps:s,createRenderState:o,onMount:l}=e;const d={latestValues:va(t,n,i,!r&&a,s),renderState:o()};return l&&(d.mount=e=>l(t,e,d)),d}(e,n,r,a,i);return i?s():function(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}(s)};function ga(e,t){const n=ha(t);n&&pa(e,n)}function xa(e,t,n){const i=Array.isArray(t)?t:[t];for(let r=0;r<i.length;r++){const t=sa(e,i[r]);if(t){const{transitionEnd:e,transition:i,...r}=t;n(r,e)}}}function va(e,t,n,i,r){var a;const s={},o=[],l=i&&void 0===(null===(a=e.style)||void 0===a?void 0:a.willChange),d=r(e,{});for(const g in d)s[g]=ca(d[g]);let{initial:c,animate:u}=e;const h=Gi(e),p=Xi(e);t&&p&&!h&&!1!==e.inherit&&(void 0===c&&(c=t.initial),void 0===u&&(u=t.animate));let f=!!n&&!1===n.initial;f=f||!1===c;const m=f?u:c;return m&&"boolean"!==typeof m&&!Vi(m)&&xa(e,m,((e,t)=>{for(const n in e){let t=e[n];if(Array.isArray(t)){t=t[f?t.length-1:0]}null!==t&&(s[n]=t)}for(const n in t)s[n]=t[n]})),l&&(u&&!1!==c&&!Vi(u)&&xa(e,u,(e=>{for(const t in e)ga(o,t)})),o.length&&(s.willChange=o.join(","))),s}const ya=e=>e,{schedule:wa,cancel:ba,state:ja,steps:Aa}=Di("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:ya,!0),ka={useVisualState:ma({scrapeMotionValuesFromProps:ra,createRenderState:Kr,onMount:(e,t,n)=>{let{renderState:i,latestValues:r}=n;wa.read((()=>{try{i.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(ky){i.dimensions={x:0,y:0,width:0,height:0}}})),wa.render((()=>{$r(i,r,qr(t.tagName),e.transformTemplate),na(t,i)}))}})},Sa={useVisualState:ma({applyWillChange:!0,scrapeMotionValuesFromProps:ia,createRenderState:Rr})};function Ea(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}const Ca=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function Ta(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const Pa=e=>t=>Ca(t)&&e(t,Ta(t));function Ia(e,t,n,i){return Ea(e,t,Pa(n),i)}const Ba=(e,t)=>n=>t(e(n)),za=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Ba)};function Da(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const _a=Da("dragHorizontal"),Ma=Da("dragVertical");function Oa(e){let t=!1;if("y"===e)t=Ma();else if("x"===e)t=_a();else{const e=_a(),n=Ma();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Na(){const e=Oa(!0);return!e||(e(),!1)}class Ra{constructor(e){this.isMounted=!1,this.node=e}update(){}}function La(e,t){const n=t?"pointerenter":"pointerleave",i=t?"onHoverStart":"onHoverEnd";return Ia(e.current,n,((n,r)=>{if("touch"===n.pointerType||Na())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const s=a[i];s&&wa.postRender((()=>s(n,r)))}),{passive:!e.getProps()[i]})}const Fa=(e,t)=>!!t&&(e===t||Fa(e,t.parentElement));function Ua(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ta(n))}const Qa=new WeakMap,Ya=new WeakMap,Va=e=>{const t=Qa.get(e.target);t&&t(e)},Wa=e=>{e.forEach(Va)};function Ha(e,t,n){const i=function(e){let{root:t,...n}=e;const i=t||document;Ya.has(i)||Ya.set(i,{});const r=Ya.get(i),a=JSON.stringify(n);return r[a]||(r[a]=new IntersectionObserver(Wa,{root:t,...n})),r[a]}(t);return Qa.set(e,n),i.observe(e),()=>{Qa.delete(e),i.unobserve(e)}}const Ga={some:0,all:1};const Xa={inView:{Feature:class extends Ra{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:i="some",once:r}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof i?i:Ga[i]};return Ha(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,r&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),a=t?n:i;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Ra{constructor(){super(...arguments),this.removeStartListeners=ya,this.removeEndListeners=ya,this.removeAccessibleListeners=ya,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),i=Ia(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:i,globalTapTarget:r}=this.node.getProps(),a=r||Fa(this.node.current,e.target)?n:i;a&&wa.update((()=>a(e,t)))}),{passive:!(n.onTap||n.onPointerUp)}),r=Ia(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=za(i,r),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=Ea(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=Ea(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Ua("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&wa.postRender((()=>n(e,t)))}))})),Ua("down",((e,t)=>{this.startPress(e,t)}))})),t=Ea(this.node.current,"blur",(()=>{this.isPressing&&Ua("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=za(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&wa.postRender((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Na()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&wa.postRender((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=Ia(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=Ea(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=za(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends Ra{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(ky){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=za(Ea(this.node.current,"focus",(()=>this.onFocus())),Ea(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Ra{mount(){this.unmount=za(La(this.node,!0),La(this.node,!1))}unmount(){}}}};function $a(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Ka(e,t,n){const i=e.getProps();return sa(i,t,void 0!==n?n:i.custom,e)}const qa=e=>1e3*e,Ja=e=>e/1e3,Za={type:"spring",stiffness:500,damping:25,restSpeed:10},es={type:"keyframes",duration:.8},ts={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ns=(e,t)=>{let{keyframes:n}=t;return n.length>2?es:lr.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Za:ts};function is(e,t){return e[t]||e.default||e}const rs=!1,as=e=>null!==e;function ss(e,t,n){let{repeat:i,repeatType:r="loop"}=t;const a=e.filter(as),s=i&&"loop"!==r&&i%2===1?0:a.length-1;return s&&void 0!==n?n:a[s]}let os;function ls(){os=void 0}const ds={now:()=>(void 0===os&&ds.set(ja.isProcessing||Bi?ja.timestamp:performance.now()),os),set:e=>{os=e,queueMicrotask(ls)}},cs=e=>/^0[^.\s]+$/u.test(e);let us=ya,hs=ya;const ps=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),fs=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ms(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;hs(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[i,r]=function(e){const t=fs.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${null!==n&&void 0!==n?n:i}`,r]}(e);if(!i)return;const a=window.getComputedStyle(t).getPropertyValue(i);if(a){const e=a.trim();return ps(e)?parseFloat(e):e}return Mr(r)?ms(r,t,n+1):r}const gs=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),xs=e=>e===pr||e===kr,vs=(e,t)=>parseFloat(e.split(", ")[t]),ys=(e,t)=>(n,i)=>{let{transform:r}=i;if("none"===r||!r)return 0;const a=r.match(/^matrix3d\((.+)\)$/u);if(a)return vs(a[1],t);{const t=r.match(/^matrix\((.+)\)$/u);return t?vs(t[1],e):0}},ws=new Set(["x","y","z"]),bs=or.filter((e=>!ws.has(e)));const js={width:(e,t)=>{let{x:n}=e,{paddingLeft:i="0",paddingRight:r="0"}=t;return n.max-n.min-parseFloat(i)-parseFloat(r)},height:(e,t)=>{let{y:n}=e,{paddingTop:i="0",paddingBottom:r="0"}=t;return n.max-n.min-parseFloat(i)-parseFloat(r)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:i}=t;return parseFloat(i)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:i}=t;return parseFloat(i)+(n.max-n.min)},x:ys(4,13),y:ys(5,14)};js.translateX=js.x,js.translateY=js.y;const As=e=>t=>t.test(e),ks=[pr,kr,Ar,jr,Er,Sr,{test:e=>"auto"===e,parse:e=>e}],Ss=e=>ks.find(As(e)),Es=new Set;let Cs=!1,Ts=!1;function Ps(){if(Ts){const e=Array.from(Es).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return bs.forEach((n=>{const i=e.getValue(n);void 0!==i&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,i]=t;var r;null===(r=e.getValue(n))||void 0===r||r.set(i)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Ts=!1,Cs=!1,Es.forEach((e=>e.complete())),Es.clear()}function Is(){Es.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Ts=!0)}))}class Bs{constructor(e,t,n,i,r){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=i,this.element=r,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Es.add(this),Cs||(Cs=!0,wa.read(Is),wa.resolveKeyframes(Ps))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:i}=this;for(let r=0;r<e.length;r++)if(null===e[r])if(0===r){const r=null===i||void 0===i?void 0:i.get(),a=e[e.length-1];if(void 0!==r)e[0]=r;else if(n&&t){const i=n.readValue(t,a);void 0!==i&&null!==i&&(e[0]=i)}void 0===e[0]&&(e[0]=a),i&&void 0===r&&i.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Es.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Es.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const zs=(e,t)=>n=>Boolean(wr(n)&&yr.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ds=(e,t,n)=>i=>{if(!wr(i))return i;const[r,a,s,o]=i.match(xr);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(s),alpha:void 0!==o?parseFloat(o):1}},_s={...pr,transform:e=>Math.round((e=>hr(0,255,e))(e))},Ms={test:zs("rgb","red"),parse:Ds("red","green","blue"),transform:e=>{let{red:t,green:n,blue:i,alpha:r=1}=e;return"rgba("+_s.transform(t)+", "+_s.transform(n)+", "+_s.transform(i)+", "+gr(fr.transform(r))+")"}};const Os={test:zs("#"),parse:function(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}},transform:Ms.transform},Ns={test:zs("hsl","hue"),parse:Ds("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:i,alpha:r=1}=e;return"hsla("+Math.round(t)+", "+Ar.transform(gr(n))+", "+Ar.transform(gr(i))+", "+gr(fr.transform(r))+")"}},Rs={test:e=>Ms.test(e)||Os.test(e)||Ns.test(e),parse:e=>Ms.test(e)?Ms.parse(e):Ns.test(e)?Ns.parse(e):Os.parse(e),transform:e=>wr(e)?e:e.hasOwnProperty("red")?Ms.transform(e):Ns.transform(e)};const Ls="number",Fs="color",Us="var",Qs="var(",Ys="${}",Vs=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ws(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let a=0;const s=t.replace(Vs,(e=>(Rs.test(e)?(i.color.push(a),r.push(Fs),n.push(Rs.parse(e))):e.startsWith(Qs)?(i.var.push(a),r.push(Us),n.push(e)):(i.number.push(a),r.push(Ls),n.push(parseFloat(e))),++a,Ys))).split(Ys);return{values:n,split:s,indexes:i,types:r}}function Hs(e){return Ws(e).values}function Gs(e){const{split:t,types:n}=Ws(e),i=t.length;return e=>{let r="";for(let a=0;a<i;a++)if(r+=t[a],void 0!==e[a]){const t=n[a];r+=t===Ls?gr(e[a]):t===Fs?Rs.transform(e[a]):e[a]}return r}}const Xs=e=>"number"===typeof e?0:e;const $s={test:function(e){var t,n;return isNaN(e)&&wr(e)&&((null===(t=e.match(xr))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(vr))||void 0===n?void 0:n.length)||0)>0},parse:Hs,createTransformer:Gs,getAnimatableNone:function(e){const t=Hs(e);return Gs(e)(t.map(Xs))}},Ks=new Set(["brightness","contrast","saturate","opacity"]);function qs(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[i]=n.match(xr)||[];if(!i)return e;const r=n.replace(i,"");let a=Ks.has(t)?1:0;return i!==n&&(a*=100),t+"("+a+r+")"}const Js=/\b([a-z-]*)\(.*?\)/gu,Zs={...$s,getAnimatableNone:e=>{const t=e.match(Js);return t?t.map(qs).join(" "):e}},eo={...Pr,color:Rs,backgroundColor:Rs,outlineColor:Rs,fill:Rs,stroke:Rs,borderColor:Rs,borderTopColor:Rs,borderRightColor:Rs,borderBottomColor:Rs,borderLeftColor:Rs,filter:Zs,WebkitFilter:Zs},to=e=>eo[e];function no(e,t){let n=to(e);return n!==Zs&&(n=$s),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const io=new Set(["auto","none","0"]);class ro extends Bs{constructor(e,t,n,i){super(e,t,n,i,null===i||void 0===i?void 0:i.owner,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t.current)return;super.readKeyframes();for(let o=0;o<e.length;o++){let n=e[o];if("string"===typeof n&&(n=n.trim(),Mr(n))){const i=ms(n,t.current);void 0!==i&&(e[o]=i),o===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!gs.has(n)||2!==e.length)return;const[i,r]=e,a=Ss(i),s=Ss(r);if(a!==s)if(xs(a)&&xs(s))for(let o=0;o<e.length;o++){const t=e[o];"string"===typeof t&&(e[o]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let r=0;r<e.length;r++)("number"===typeof(i=e[r])?0===i:null===i||"none"===i||"0"===i||cs(i))&&n.push(r);var i;n.length&&function(e,t,n){let i,r=0;for(;r<e.length&&!i;){const t=e[r];"string"===typeof t&&!io.has(t)&&Ws(t).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=no(n,i)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=js[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const i=t[t.length-1];void 0!==i&&e.getValue(n,i).jump(i,!1)}measureEndState(){var e;const{element:t,name:n,unresolvedKeyframes:i}=this;if(!t.current)return;const r=t.getValue(n);r&&r.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=js[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach((e=>{let[n,i]=e;t.getValue(n).set(i)})),this.resolveNoneKeyframes()}}function ao(e){let t;return()=>(void 0===t&&(t=e()),t)}const so=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!$s.test(e)&&"0"!==e||e.startsWith("url(")));class oo{constructor(e){let{autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:a=0,repeatType:s="loop",...o}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:a,repeatType:s,...o},this.updateFinishedPromise()}get resolved(){return this._resolved||this.hasAttemptedResolve||(Is(),Ps()),this._resolved}onKeyframesResolved(e,t){this.hasAttemptedResolve=!0;const{name:n,type:i,velocity:r,delay:a,onComplete:s,onUpdate:o,isGenerator:l}=this.options;if(!l&&!function(e,t,n,i){const r=e[0];if(null===r)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],s=so(r,t),o=so(a,t);return us(s===o,`You are trying to animate ${t} from "${r}" to "${a}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${a} via the \`style\` property.`),!(!s||!o)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||"spring"===n&&i)}(e,n,i,r)){if(rs||!a)return null===o||void 0===o||o(ss(e,this.options,t)),null===s||void 0===s||s(),void this.resolveFinishedPromise();this.options.duration=0}const d=this.initPlayback(e,t);!1!==d&&(this._resolved={keyframes:e,finalKeyframe:t,...d},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}function lo(e,t){return t?e*(1e3/t):0}const co=5;function uo(e,t,n){const i=Math.max(t-co,0);return lo(n-e(i),t-i)}const ho=.001,po=.01,fo=10,mo=.05,go=1;function xo(e){let t,n,{duration:i=800,bounce:r=.25,velocity:a=0,mass:s=1}=e;us(i<=qa(fo),"Spring duration must be 10 seconds or less");let o=1-r;o=hr(mo,go,o),i=hr(po,fo,Ja(i)),o<1?(t=e=>{const t=e*o,n=t*i,r=t-a,s=yo(e,o),l=Math.exp(-n);return ho-r/s*l},n=e=>{const n=e*o*i,r=n*a+a,s=Math.pow(o,2)*Math.pow(e,2)*i,l=Math.exp(-n),d=yo(Math.pow(e,2),o);return(-t(e)+ho>0?-1:1)*((r-s)*l)/d}):(t=e=>Math.exp(-e*i)*((e-a)*i+1)-ho,n=e=>Math.exp(-e*i)*(i*i*(a-e)));const l=function(e,t,n){let i=n;for(let r=1;r<vo;r++)i-=e(i)/t(i);return i}(t,n,5/i);if(i=qa(i),isNaN(l))return{stiffness:100,damping:10,duration:i};{const e=Math.pow(l,2)*s;return{stiffness:e,damping:2*o*Math.sqrt(s*e),duration:i}}}const vo=12;function yo(e,t){return e*Math.sqrt(1-t*t)}const wo=["duration","bounce"],bo=["stiffness","damping","mass"];function jo(e,t){return t.some((t=>void 0!==e[t]))}function Ao(e){let{keyframes:t,restDelta:n,restSpeed:i,...r}=e;const a=t[0],s=t[t.length-1],o={done:!1,value:a},{stiffness:l,damping:d,mass:c,duration:u,velocity:h,isResolvedFromDuration:p}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!jo(e,bo)&&jo(e,wo)){const n=xo(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...r,velocity:-Ja(r.velocity||0)}),f=h||0,m=d/(2*Math.sqrt(l*c)),g=s-a,x=Ja(Math.sqrt(l/c)),v=Math.abs(g)<5;let y;if(i||(i=v?.01:2),n||(n=v?.005:.5),m<1){const e=yo(x,m);y=t=>{const n=Math.exp(-m*x*t);return s-n*((f+m*x*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)y=e=>s-Math.exp(-x*e)*(g+(f+x*g)*e);else{const e=x*Math.sqrt(m*m-1);y=t=>{const n=Math.exp(-m*x*t),i=Math.min(e*t,300);return s-n*((f+m*x*g)*Math.sinh(i)+e*g*Math.cosh(i))/e}}return{calculatedDuration:p&&u||null,next:e=>{const t=y(e);if(p)o.done=e>=u;else{let r=0;m<1&&(r=0===e?qa(f):uo(y,e,t));const a=Math.abs(r)<=i,l=Math.abs(s-t)<=n;o.done=a&&l}return o.value=o.done?s:t,o}}}function ko(e){let{keyframes:t,velocity:n=0,power:i=.8,timeConstant:r=325,bounceDamping:a=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:d,restDelta:c=.5,restSpeed:u}=e;const h=t[0],p={done:!1,value:h},f=e=>void 0===l?d:void 0===d||Math.abs(l-e)<Math.abs(d-e)?l:d;let m=i*n;const g=h+m,x=void 0===o?g:o(g);x!==g&&(m=x-h);const v=e=>-m*Math.exp(-e/r),y=e=>x+v(e),w=e=>{const t=v(e),n=y(e);p.done=Math.abs(t)<=c,p.value=p.done?x:n};let b,j;const A=e=>{(e=>void 0!==l&&e<l||void 0!==d&&e>d)(p.value)&&(b=e,j=Ao({keyframes:[p.value,f(p.value)],velocity:uo(y,e,p.value),damping:a,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:e=>{let t=!1;return j||void 0!==b||(t=!0,w(e),A(e)),void 0!==b&&e>=b?j.next(e-b):(!t&&w(e),p)}}}const So=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Eo=1e-7,Co=12;function To(e,t,n,i){if(e===t&&n===i)return ya;const r=t=>function(e,t,n,i,r){let a,s,o=0;do{s=t+(n-t)/2,a=So(s,i,r)-e,a>0?n=s:t=s}while(Math.abs(a)>Eo&&++o<Co);return s}(t,0,1,e,n);return e=>0===e||1===e?e:So(r(e),t,i)}const Po=To(.42,0,1,1),Io=To(0,0,.58,1),Bo=To(.42,0,.58,1),zo=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Do=e=>t=>1-e(1-t),_o=e=>1-Math.sin(Math.acos(e)),Mo=Do(_o),Oo=zo(_o),No=To(.33,1.53,.69,.99),Ro=Do(No),Lo=zo(Ro),Fo={linear:ya,easeIn:Po,easeInOut:Bo,easeOut:Io,circIn:_o,circInOut:Oo,circOut:Mo,backIn:Ro,backInOut:Lo,backOut:No,anticipate:e=>(e*=2)<1?.5*Ro(e):.5*(2-Math.pow(2,-10*(e-1)))},Uo=e=>{if(Array.isArray(e)){hs(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,i,r]=e;return To(t,n,i,r)}return"string"===typeof e?(hs(void 0!==Fo[e],`Invalid easing type '${e}'`),Fo[e]):e},Qo=(e,t,n)=>{const i=t-e;return 0===i?1:(n-e)/i},Yo=(e,t,n)=>e+(t-e)*n;function Vo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Wo(e,t){return n=>n>0?t:e}const Ho=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},Go=[Os,Ms,Ns];function Xo(e){const t=(e=>Go.find((t=>t.test(e))))(e);if(us(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`),!Boolean(t))return!1;let n=t.parse(e);return t===Ns&&(n=function(e){let{hue:t,saturation:n,lightness:i,alpha:r}=e;t/=360,n/=100,i/=100;let a=0,s=0,o=0;if(n){const e=i<.5?i*(1+n):i+n-i*n,r=2*i-e;a=Vo(r,e,t+1/3),s=Vo(r,e,t),o=Vo(r,e,t-1/3)}else a=s=o=i;return{red:Math.round(255*a),green:Math.round(255*s),blue:Math.round(255*o),alpha:r}}(n)),n}const $o=(e,t)=>{const n=Xo(e),i=Xo(t);if(!n||!i)return Wo(e,t);const r={...n};return e=>(r.red=Ho(n.red,i.red,e),r.green=Ho(n.green,i.green,e),r.blue=Ho(n.blue,i.blue,e),r.alpha=Yo(n.alpha,i.alpha,e),Ms.transform(r))},Ko=new Set(["none","hidden"]);function qo(e,t){return n=>Yo(e,t,n)}function Jo(e){return"number"===typeof e?qo:"string"===typeof e?Mr(e)?Wo:Rs.test(e)?$o:tl:Array.isArray(e)?Zo:"object"===typeof e?Rs.test(e)?$o:el:Wo}function Zo(e,t){const n=[...e],i=n.length,r=e.map(((e,n)=>Jo(e)(e,t[n])));return e=>{for(let t=0;t<i;t++)n[t]=r[t](e);return n}}function el(e,t){const n={...e,...t},i={};for(const r in n)void 0!==e[r]&&void 0!==t[r]&&(i[r]=Jo(e[r])(e[r],t[r]));return e=>{for(const t in i)n[t]=i[t](e);return n}}const tl=(e,t)=>{const n=$s.createTransformer(t),i=Ws(e),r=Ws(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Ko.has(e)&&!r.values.length||Ko.has(t)&&!i.values.length?function(e,t){return Ko.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):za(Zo(function(e,t){var n;const i=[],r={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const s=t.types[a],o=e.indexes[s][r[s]],l=null!==(n=e.values[o])&&void 0!==n?n:0;i[a]=l,r[s]++}return i}(i,r),r.values),n):(us(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Wo(e,t))};function nl(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Yo(e,t,n);return Jo(e)(e,t)}function il(e,t){let{clamp:n=!0,ease:i,mixer:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(hs(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];if(2===a&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const i=[],r=n||nl,a=e.length-1;for(let s=0;s<a;s++){let n=r(e[s],e[s+1]);if(t){const e=Array.isArray(t)?t[s]||ya:t;n=za(e,n)}i.push(n)}return i}(t,i,r),o=s.length,l=t=>{let n=0;if(o>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const i=Qo(e[n],e[n+1],t);return s[n](i)};return n?t=>l(hr(e[0],e[a-1],t)):l}function rl(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=Qo(0,t,i);e.push(Yo(n,1,r))}}(t,e.length-1),t}function al(e){let{duration:t=300,keyframes:n,times:i,ease:r="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(r)?r.map(Uo):Uo(r),s={done:!1,value:n[0]},o=function(e,t){return e.map((e=>e*t))}(i&&i.length===n.length?i:rl(n),t),l=il(o,n,{ease:Array.isArray(a)?a:(d=n,c=a,d.map((()=>c||Bo)).splice(0,d.length-1))});var d,c;return{calculatedDuration:t,next:e=>(s.value=l(e),s.done=e>=t,s)}}const sl=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>wa.update(t,!0),stop:()=>ba(t),now:()=>ja.isProcessing?ja.timestamp:ds.now()}},ol={decay:ko,inertia:ko,tween:al,keyframes:al,spring:Ao},ll=e=>e/100;class dl extends oo{constructor(e){let{KeyframeResolver:t=Bs,...n}=e;super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:i,motionValue:r,keyframes:a}=this.options,s=(e,t)=>this.onKeyframesResolved(e,t);i&&r&&r.owner?this.resolver=r.owner.resolveKeyframes(a,s,i,r):this.resolver=new t(a,s,i,r),this.resolver.scheduleResolve()}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:i=0,repeatType:r,velocity:a=0}=this.options,s=ol[t]||al;let o,l;s!==al&&"number"!==typeof e[0]&&(o=za(ll,nl(e[0],e[1])),e=[0,100]);const d=s({...this.options,keyframes:e});"mirror"===r&&(l=s({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===d.calculatedDuration&&(d.calculatedDuration=function(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}(d));const{calculatedDuration:c}=d,u=c+i;return{generator:d,mirroredGenerator:l,mapPercentToKeyframes:o,calculatedDuration:c,resolvedDuration:u,totalDuration:u*(n+1)-i}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:i,generator:r,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:o,calculatedDuration:l,totalDuration:d,resolvedDuration:c}=n;if(null===this.startTime)return r.next(0);const{delay:u,repeat:h,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-d/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-u*(this.speed>=0?1:-1),x=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=d);let v=this.currentTime,y=r;if(h){const e=Math.min(this.currentTime,d)/c;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,h+1);Boolean(t%2)&&("reverse"===p?(n=1-n,f&&(n-=f/c)):"mirror"===p&&(y=a)),v=hr(0,1,n)*c}const w=x?{done:!1,value:o[0]}:y.next(v);s&&(w.value=s(w.value));let{done:b}=w;x||null===l||(b=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const j=null===this.holdTime&&("finished"===this.state||"running"===this.state&&b);return j&&void 0!==i&&(w.value=ss(o,this.options,i)),m&&m(w.value),j&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Ja(e.calculatedDuration):0}get time(){return Ja(this.currentTime)}set time(e){e=qa(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Ja(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=sl,onPlay:t}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const n=this.driver.now();null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime&&"finished"!==this.state||(this.startTime=n),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;this._resolved?(this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const cl=e=>Array.isArray(e)&&"number"===typeof e[0];function ul(e){return Boolean(!e||"string"===typeof e&&e in pl||cl(e)||Array.isArray(e)&&e.every(ul))}const hl=e=>{let[t,n,i,r]=e;return`cubic-bezier(${t}, ${n}, ${i}, ${r})`},pl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hl([0,.65,.55,1]),circOut:hl([.55,0,1,.45]),backIn:hl([.31,.01,.66,-.59]),backOut:hl([.33,1.53,.69,.99])};function fl(e){return ml(e)||pl.easeOut}function ml(e){return e?cl(e)?hl(e):Array.isArray(e)?e.map(fl):pl[e]:void 0}const gl=ao((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));class xl extends oo{constructor(e){super(e);const{name:t,motionValue:n,keyframes:i}=this.options;this.resolver=new ro(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n),this.resolver.scheduleResolve()}initPlayback(e,t){var n;let{duration:i=300,times:r,ease:a,type:s,motionValue:o,name:l}=this.options;if(!(null===(n=o.owner)||void 0===n?void 0:n.current))return!1;if("spring"===(d=this.options).type||!ul(d.ease)){const{onComplete:t,onUpdate:n,motionValue:o,...l}=this.options,d=function(e,t){const n=new dl({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const r=[];let a=0;for(;!i.done&&a<2e4;)i=n.sample(a),r.push(i.value),a+=10;return{times:void 0,keyframes:r,duration:a-10,ease:"linear"}}(e,l);1===(e=d.keyframes).length&&(e[1]=e[0]),i=d.duration,r=d.times,a=d.ease,s="keyframes"}var d;const c=function(e,t,n){let{delay:i=0,duration:r=300,repeat:a=0,repeatType:s="loop",ease:o,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const d={[t]:n};l&&(d.offset=l);const c=ml(o);return Array.isArray(c)&&(d.easing=c),e.animate(d,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:a+1,direction:"reverse"===s?"alternate":"normal"})}(o.owner.current,l,e,{...this.options,duration:i,times:r,ease:a});return c.startTime=ds.now(),this.pendingTimeline?(c.timeline=this.pendingTimeline,this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:n}=this.options;o.set(ss(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:s,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Ja(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Ja(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=qa(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return ya;const{animation:n}=t;n.timeline=e,n.onfinish=null}else this.pendingTimeline=e;return ya}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:i,type:r,ease:a,times:s}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:o,...l}=this.options,d=new dl({...l,keyframes:n,duration:i,type:r,ease:a,times:s,isGenerator:!0}),c=qa(this.time);e.setWithVelocity(d.sample(c-10).value,d.sample(c).value,10)}const{onStop:o}=this.options;o&&o(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:i,repeatType:r,damping:a,type:s}=e;return gl()&&n&&ua.has(n)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!i&&"mirror"!==r&&0!==a&&"inertia"!==s}}const vl=ao((()=>void 0!==window.ScrollTimeline));class yl{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){const t=this.animations.map((t=>{if(!vl()||!t.attachTimeline)return t.pause(),function(e,t){let n;const i=()=>{const{currentTime:i}=t,r=(null===i?0:i.value)/100;n!==r&&e(r),n=r};return wa.update(i,!0),()=>ba(i)}((e=>{t.time=t.duration*e}),e);t.attachTimeline(e)}));return()=>{t.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const wl=function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0;return o=>{const l=is(i,e)||{},d=l.delay||i.delay||0;let{elapsed:c=0}=i;c-=qa(d);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-c,onUpdate:e=>{t.set(e),l.onUpdate&&l.onUpdate(e)},onComplete:()=>{o(),l.onComplete&&l.onComplete(),s&&s()},onStop:s,name:e,motionValue:t,element:a?void 0:r};(function(e){let{when:t,delay:n,delayChildren:i,staggerChildren:r,staggerDirection:a,repeat:s,repeatType:o,repeatDelay:l,from:d,elapsed:c,...u}=e;return!!Object.keys(u).length})(l)||(u={...u,...ns(e,u)}),u.duration&&(u.duration=qa(u.duration)),u.repeatDelay&&(u.repeatDelay=qa(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let h=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(h=!0)),(rs||Ii)&&(h=!0,u.duration=0,u.delay=0),h&&!a&&void 0!==t.get()){const e=ss(u.keyframes,l);if(void 0!==e)return wa.update((()=>{u.onUpdate(e),u.onComplete()})),new yl([])}return!a&&xl.supports(u)?new xl(u):new dl(u)}};class bl{constructor(){this.subscriptions=[]}add(e){return pa(this.subscriptions,e),()=>fa(this.subscriptions,e)}notify(e,t,n){const i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](e,t,n);else for(let r=0;r<i;r++){const i=this.subscriptions[r];i&&i(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jl={current:void 0};class Al{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="11.3.24",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=ds.now();t.updatedAt!==i&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=ds.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new bl);const n=this.events[e].add(t);return"change"===e?()=>{n(),wa.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return jl.current&&jl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=ds.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return lo(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function kl(e,t){return new Al(e,t)}function Sl(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,kl(n))}function El(e){return e.getProps()[Pi]}class Cl extends Al{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(e){const t=ha(e);if(!t)return;const n=this.counts.get(t)||0;this.counts.set(t,n+1),0===n&&(this.output.push(t),this.update());let i=!1;return()=>{if(i)return;i=!0;const e=this.counts.get(t)-1;this.counts.set(t,e),0===e&&(fa(this.output,t),this.update())}}update(){this.set(this.output.length?this.output.join(", "):"auto")}}function Tl(e,t){var n;if(!e.applyWillChange)return;let i=e.getValue("willChange");return i||(null===(n=e.props.style)||void 0===n?void 0:n.willChange)||(i=new Cl("auto"),e.addValue("willChange",i)),r=i,Boolean(cr(r)&&r.add)?i.add(t):void 0;var r}function Pl(e,t){let{protectedKeys:n,needsAnimating:i}=e;const r=n.hasOwnProperty(t)&&!0!==i[t];return i[t]=!1,r}function Il(e,t){let{delay:n=0,transitionOverride:i,type:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var a;let{transition:s=e.getDefaultTransition(),transitionEnd:o,...l}=t;i&&(s=i);const d=[],c=r&&e.animationState&&e.animationState.getState()[r];for(const u in l){const t=e.getValue(u,null!==(a=e.latestValues[u])&&void 0!==a?a:null),i=l[u];if(void 0===i||c&&Pl(c,u))continue;const r={delay:n,elapsed:0,...is(s||{},u)};let o=!1;if(window.MotionHandoffAnimation){const t=El(e);if(t){const e=window.MotionHandoffAnimation(t,u,wa);null!==e&&(r.elapsed=e,o=!0)}}t.start(wl(u,t,i,e.shouldReduceMotion&&lr.has(u)?{type:!1}:r,e,o,Tl(e,u)));const h=t.animation;h&&d.push(h)}return o&&Promise.all(d).then((()=>{wa.update((()=>{o&&function(e,t){const n=Ka(e,t);let{transitionEnd:i={},transition:r={},...a}=n||{};a={...a,...i};for(const s in a)Sl(e,s,da(a[s]))}(e,o)}))})),d}function Bl(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var i;const r=Ka(e,t,"exit"===n.type?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(a=n.transitionOverride);const s=r?()=>Promise.all(Il(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:r=0,staggerChildren:s,staggerDirection:o}=a;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const s=[],o=(e.variantChildren.size-1)*i,l=1===r?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i}:function(){return o-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*i};return Array.from(e.variantChildren).sort(zl).forEach(((e,i)=>{e.notify("AnimationStart",t),s.push(Bl(e,t,{...a,delay:n+l(i)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(s)}(e,t,r+i,s,o,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[e,t]="beforeChildren"===l?[s,o]:[o,s];return e().then((()=>t()))}return Promise.all([s(),o(n.delay)])}function zl(e,t){return e.sortNodePosition(t)}const Dl=[...Wi].reverse(),_l=Wi.length;function Ml(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:i}=t;return function(e,t){let n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const r=t.map((t=>Bl(e,t,i)));n=Promise.all(r)}else if("string"===typeof t)n=Bl(e,t,i);else{const r="function"===typeof t?Ka(e,t,i.custom):t;n=Promise.all(Il(e,r,i))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,i)})))}function Ol(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!$a(t,e)}function Nl(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rl(){return{animate:Nl(!0),whileInView:Nl(),whileHover:Nl(),whileTap:Nl(),whileDrag:Nl(),whileFocus:Nl(),exit:Nl()}}let Ll=0;const Fl={animation:{Feature:class extends Ra{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=Ml(e),n=Rl(),i=!0;const r=t=>(n,i)=>{var r;const a=Ka(e,i,"exit"===t?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0);if(a){const{transition:e,transitionEnd:t,...i}=a;n={...n,...i,...t}}return n};function a(a){const s=e.getProps(),o=e.getVariantContext(!0)||{},l=[],d=new Set;let c={},u=1/0;for(let t=0;t<_l;t++){const h=Dl[t],p=n[h],f=void 0!==s[h]?s[h]:o[h],m=Yi(f),g=h===a?p.isActive:null;!1===g&&(u=t);let x=f===o[h]&&f!==s[h]&&m;if(x&&i&&e.manuallyAnimateOnMount&&(x=!1),p.protectedKeys={...c},!p.isActive&&null===g||!f&&!p.prevProp||Vi(f)||"boolean"===typeof f)continue;let v=Ol(p.prevProp,f)||h===a&&p.isActive&&!x&&m||t>u&&m,y=!1;const w=Array.isArray(f)?f:[f];let b=w.reduce(r(h),{});!1===g&&(b={});const{prevResolvedValues:j={}}=p,A={...j,...b},k=t=>{v=!0,d.has(t)&&(y=!0,d.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in A){const t=b[e],n=j[e];if(c.hasOwnProperty(e))continue;let i=!1;i=oa(t)&&oa(n)?!$a(t,n):t!==n,i?void 0!==t&&null!==t?k(e):d.add(e):void 0!==t&&d.has(e)?k(e):p.protectedKeys[e]=!0}p.prevProp=f,p.prevResolvedValues=b,p.isActive&&(c={...c,...b}),i&&e.blockInitialAnimation&&(v=!1),!v||x&&!y||l.push(...w.map((e=>({animation:e,options:{type:h}}))))}if(d.size){const t={};d.forEach((n=>{const i=e.getBaseTarget(n),r=e.getValue(n);r&&(r.liveStyle=!0),t[n]=null!==i&&void 0!==i?i:null})),l.push({animation:t})}let h=Boolean(l.length);return!i||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),i=!1,h?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,i){var r;if(n[t].isActive===i)return Promise.resolve();null===(r=e.variantChildren)||void 0===r||r.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,i)})),n[t].isActive=i;const s=a(t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=Rl(),i=!0}}}(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Vi(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}},exit:{Feature:class extends Ra{constructor(){super(...arguments),this.id=Ll++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const i=this.node.animationState.setActive("exit",!e);t&&!e&&i.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Ul=(e,t)=>Math.abs(e-t);class Ql{constructor(e,t){let{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Wl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ul(e.x,t.x),i=Ul(e.y,t.y);return Math.sqrt(n**2+i**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:i}=e,{timestamp:r}=ja;this.history.push({...i,timestamp:r});const{onStart:a,onMove:s}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Yl(t,this.transformPagePoint),wa.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:i,resumeAnimation:r}=this.handlers;if(this.dragSnapToOrigin&&r&&r(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Wl("pointercancel"===e.type?this.lastMoveEventInfo:Yl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),i&&i(e,a)},!Ca(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=n,this.contextWindow=i||window;const a=Yl(Ta(e),this.transformPagePoint),{point:s}=a,{timestamp:o}=ja;this.history=[{...s,timestamp:o}];const{onSessionStart:l}=t;l&&l(e,Wl(a,this.history)),this.removeListeners=za(Ia(this.contextWindow,"pointermove",this.handlePointerMove),Ia(this.contextWindow,"pointerup",this.handlePointerUp),Ia(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ba(this.updatePoint)}}function Yl(e,t){return t?{point:t(e.point)}:e}function Vl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Wl(e,t){let{point:n}=e;return{point:n,delta:Vl(n,Gl(t)),offset:Vl(n,Hl(t)),velocity:Xl(t,.1)}}function Hl(e){return e[0]}function Gl(e){return e[e.length-1]}function Xl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=Gl(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>qa(t)));)n--;if(!i)return{x:0,y:0};const a=Ja(r.timestamp-i.timestamp);if(0===a)return{x:0,y:0};const s={x:(r.x-i.x)/a,y:(r.y-i.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}const $l=.9999,Kl=1.0001,ql=-.01,Jl=.01;function Zl(e){return e.max-e.min}function ed(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=i,e.originPoint=Yo(t.min,t.max,e.origin),e.scale=Zl(n)/Zl(t),e.translate=Yo(n.min,n.max,e.origin)-e.originPoint,(e.scale>=$l&&e.scale<=Kl||isNaN(e.scale))&&(e.scale=1),(e.translate>=ql&&e.translate<=Jl||isNaN(e.translate))&&(e.translate=0)}function td(e,t,n,i){ed(e.x,t.x,n.x,i?i.originX:void 0),ed(e.y,t.y,n.y,i?i.originY:void 0)}function nd(e,t,n){e.min=n.min+t.min,e.max=e.min+Zl(t)}function id(e,t,n){e.min=t.min-n.min,e.max=e.min+Zl(t)}function rd(e,t,n){id(e.x,t.x,n.x),id(e.y,t.y,n.y)}function ad(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function sd(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}const od=.35;function ld(e,t,n){return{min:dd(e,t),max:dd(e,n)}}function dd(e,t){return"number"===typeof e?e:e[t]||0}const cd=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),ud=()=>({x:{min:0,max:0},y:{min:0,max:0}});function hd(e){return[e("x"),e("y")]}function pd(e){let{top:t,left:n,right:i,bottom:r}=e;return{x:{min:n,max:i},y:{min:t,max:r}}}function fd(e){return void 0===e||1===e}function md(e){let{scale:t,scaleX:n,scaleY:i}=e;return!fd(t)||!fd(n)||!fd(i)}function gd(e){return md(e)||xd(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function xd(e){return vd(e.x)||vd(e.y)}function vd(e){return e&&"0%"!==e}function yd(e,t,n){return n+t*(e-n)}function wd(e,t,n,i,r){return void 0!==r&&(e=yd(e,r,i)),yd(e,n,i)+t}function bd(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;e.min=wd(e.min,t,n,i,r),e.max=wd(e.max,t,n,i,r)}function jd(e,t){let{x:n,y:i}=t;bd(e.x,n.translate,n.scale,n.originPoint),bd(e.y,i.translate,i.scale,i.originPoint)}const Ad=.999999999999,kd=1.0000000000001;function Sd(e,t){e.min=e.min+t,e.max=e.max+t}function Ed(e,t,n,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;bd(e,t,n,Yo(e.min,e.max,r),i)}function Cd(e,t){Ed(e.x,t.x,t.scaleX,t.scale,t.originX),Ed(e.y,t.y,t.scaleY,t.scale,t.originY)}function Td(e,t){return pd(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(e.getBoundingClientRect(),t))}const Pd=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Id=new WeakMap;class Bd{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ud(),this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:i}=this.getProps();this.panSession=new Ql(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ta(e,"page").point)},onStart:(e,t)=>{var n;const{drag:i,dragPropagation:r,onDragStart:a}=this.getProps();if(i&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Oa(i),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hd((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ar.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const i=n.layout.layoutBox[e];if(i){t=Zl(i)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),a&&wa.postRender((()=>a(e,t))),null===(n=this.removeWillChange)||void 0===n||n.call(this),this.removeWillChange=Tl(this.visualElement,"transform");const{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:r,onDrag:a}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:s}=t;if(i&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(s),void(null!==this.currentDirection&&r&&r(this.currentDirection));this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>hd((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:Pd(this.visualElement)})}stop(e,t){var n;null===(n=this.removeWillChange)||void 0===n||n.call(this);const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:a}=this.getProps();a&&wa.postRender((()=>a(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:i}=this.getProps();if(!n||!zd(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:i,max:r}=t;return void 0!==i&&e<i?e=n?Yo(i,e,n.min):Math.max(e,i):void 0!==r&&e>r&&(e=n?Yo(r,e,n.max):Math.min(e,r)),e}(a,this.constraints[e],this.elastic[e])),r.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,r=this.constraints;t&&Oi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!i)&&function(e,t){let{top:n,left:i,bottom:r,right:a}=t;return{x:ad(e.x,i,a),y:ad(e.y,n,r)}}(i.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:od;return!1===e?e=0:!0===e&&(e=od),{x:ld(e,"left","right"),y:ld(e,"top","bottom")}}(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&hd((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(i.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Oi(e))return!1;const n=e.current;hs(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=function(e,t,n){const i=Td(e,n),{scroll:r}=t;return r&&(Sd(i.x,r.offset.x),Sd(i.y,r.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:sd(e.x,t.x),y:sd(e.y,t.y)}}(i.layout.layoutBox,r);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=pd(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:i,dragTransition:r,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),o=this.constraints||{},l=hd((s=>{if(!zd(s,t,this.currentDirection))return;let l=o&&o[s]||{};a&&(l={min:0,max:0});const d=i?200:1e6,c=i?40:1e7,u={type:"inertia",velocity:n?e[s]:0,bounceStiffness:d,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(s,u)}));return Promise.all(l).then(s)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(wl(e,n,0,t,this.visualElement,!1,Tl(this.visualElement,e)))}stopAnimation(){hd((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){hd((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),i=n[t];return i||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){hd((t=>{const{drag:n}=this.getProps();if(!zd(t,n,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(t);if(i&&i.layout){const{min:n,max:a}=i.layout.layoutBox[t];r.set(e[t]-Yo(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Oi(t)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};hd((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();i[e]=function(e,t){let n=.5;const i=Zl(e),r=Zl(t);return r>i?n=Qo(t.min,t.max-i,e.min):i>r&&(n=Qo(e.min,e.max-r,t.min)),hr(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),hd((t=>{if(!zd(t,e,null))return;const n=this.getAxisMotionValue(t),{min:r,max:a}=this.constraints[t];n.set(Yo(r,a,i[t]))}))}addListeners(){if(!this.visualElement.current)return;Id.set(this.visualElement,this);const e=Ia(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Oi(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),wa.read(t);const r=Ea(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(hd((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{r(),e(),i(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:a=od,dragMomentum:s=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:i,dragConstraints:r,dragElastic:a,dragMomentum:s}}}function zd(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Dd=e=>(t,n)=>{e&&wa.postRender((()=>e(t,n)))};const _d={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Md(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Od={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!kr.test(e))return e;e=parseFloat(e)}return`${Md(e,t.target.x)}% ${Md(e,t.target.y)}%`}},Nd={correct:(e,t)=>{let{treeScale:n,projectionDelta:i}=t;const r=e,a=$s.parse(e);if(a.length>5)return r;const s=$s.createTransformer(e),o="number"!==typeof a[0]?1:0,l=i.x.scale*n.x,d=i.y.scale*n.y;a[0+o]/=l,a[1+o]/=d;const c=Yo(l,d,.5);return"number"===typeof a[2+o]&&(a[2+o]/=c),"number"===typeof a[3+o]&&(a[3+o]/=c),s(a)}};class Rd extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:i}=this.props,{projection:r}=e;var a;a=Fd,Object.assign(sr,a),r&&(t.group&&t.group.add(r),n&&n.register&&i&&n.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",(()=>{this.safeToRemove()})),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),_d.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:i,isPresent:r}=this.props,a=n.projection;return a?(a.isPresent=r,i||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?a.promote():a.relegate()||wa.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),_i.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ld(e){const[n,i]=function(){const e=(0,t.useContext)(ki);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,a=(0,t.useId)();(0,t.useEffect)((()=>r(a)),[]);const s=(0,t.useCallback)((()=>i&&i(a)),[a,i]);return!n&&i?[!1,s]:[!0]}(),r=(0,t.useContext)(Zi);return(0,bi.jsx)(Rd,{...e,layoutGroup:r,switchLayoutGroup:(0,t.useContext)(Ni),isPresent:n,safeToRemove:i})}const Fd={borderRadius:{...Od,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Od,borderTopRightRadius:Od,borderBottomLeftRadius:Od,borderBottomRightRadius:Od,boxShadow:Nd},Ud=["TopLeft","TopRight","BottomLeft","BottomRight"],Qd=Ud.length,Yd=e=>"string"===typeof e?parseFloat(e):e,Vd=e=>"number"===typeof e||kr.test(e);function Wd(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Hd=Xd(0,.5,Mo),Gd=Xd(.5,.95,ya);function Xd(e,t,n){return i=>i<e?0:i>t?1:n(Qo(e,t,i))}function $d(e,t){e.min=t.min,e.max=t.max}function Kd(e,t){$d(e.x,t.x),$d(e.y,t.y)}function qd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Jd(e,t,n,i,r){return e=yd(e-=t,1/n,i),void 0!==r&&(e=yd(e,1/r,i)),e}function Zd(e,t,n,i,r){let[a,s,o]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Ar.test(t)&&(t=parseFloat(t),t=Yo(s.min,s.max,t/100)-s.min);if("number"!==typeof t)return;let o=Yo(a.min,a.max,i);e===a&&(o-=t),e.min=Jd(e.min,t,n,o,r),e.max=Jd(e.max,t,n,o,r)}(e,t[a],t[s],t[o],t.scale,i,r)}const ec=["x","scaleX","originX"],tc=["y","scaleY","originY"];function nc(e,t,n,i){Zd(e.x,t,ec,n?n.x:void 0,i?i.x:void 0),Zd(e.y,t,tc,n?n.y:void 0,i?i.y:void 0)}function ic(e){return 0===e.translate&&1===e.scale}function rc(e){return ic(e.x)&&ic(e.y)}function ac(e,t){return e.min===t.min&&e.max===t.max}function sc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function oc(e,t){return sc(e.x,t.x)&&sc(e.y,t.y)}function lc(e){return Zl(e.x)/Zl(e.y)}function dc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class cc{constructor(){this.members=[]}add(e){pa(this.members,e),e.scheduleRender()}remove(e){if(fa(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let i=t;i>=0;i--){const e=this.members[i];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const uc=(e,t)=>e.depth-t.depth;class hc{constructor(){this.children=[],this.isDirty=!1}add(e){pa(this.children,e),this.isDirty=!0}remove(e){fa(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(uc),this.isDirty=!1,this.children.forEach(e)}}const pc={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},fc="undefined"!==typeof window&&void 0!==window.MotionDebug,mc=["","X","Y","Z"],gc={visibility:"hidden"};let xc=0;function vc(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function yc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return!1;const{visualElement:t}=e.options;return!!t&&(!!window.MotionHasOptimisedTransformAnimation(El(t))||!(!e.parent||e.parent.hasCheckedOptimisedAppear)&&yc(e.parent))}function wc(e){let{attachResizeListener:t,defaultParent:n,measureScroll:i,checkIsScrollRoot:r,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=xc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fc&&(pc.totalNodes=pc.resolvedTargetDeltas=pc.recalculatedProjection=0),this.nodes.forEach(Ac),this.nodes.forEach(Ic),this.nodes.forEach(Bc),this.nodes.forEach(kc),fc&&window.MotionDebug.record(pc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new hc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new bl),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];t&&t.notify(...i)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var i;this.isSVG=(i=e)instanceof SVGElement&&"svg"!==i.tagName,this.instance=e;const{layoutId:r,layout:a,visualElement:s}=this.options;if(s&&!s.current&&s.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||r)&&(this.isLayoutDirty=!0),t){let n;const i=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=ds.now(),i=r=>{let{timestamp:a}=r;const s=a-n;s>=t&&(ba(i),e(s-t))};return wa.read(i,!0),()=>ba(i)}(i,250),_d.hasAnimatedSinceResize&&(_d.hasAnimatedSinceResize=!1,this.nodes.forEach(Pc))}))}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&s&&(r||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:i,layout:r}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||s.getDefaultTransition()||Nc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:l}=s.getProps(),d=!this.targetLayout||!oc(this.targetLayout,r)||i,c=!n&&i;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||c||n&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...is(a,"layout"),onPlay:o,onComplete:l};(s.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||Pc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ba(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(zc),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionHandoffCancelAll&&yc(this)&&window.MotionHandoffCancelAll(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let r=0;r<this.path.length;r++){const e=this.path[r];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Ec);this.isUpdating||this.nodes.forEach(Cc),this.isUpdating=!1,this.nodes.forEach(Tc),this.nodes.forEach(bc),this.nodes.forEach(jc),this.clearAllSnapshots();const e=ds.now();ja.delta=hr(0,1e3/60,e-ja.timestamp),ja.timestamp=e,ja.isProcessing=!0,Aa.update.process(ja),Aa.preRender.process(ja),Aa.render.process(ja),ja.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_i.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Sc),this.sharedNodes.forEach(Dc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wa.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wa.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ud(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!rc(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,r=i!==this.prevTransformTemplateValue;e&&(t||gd(this.latestValues)||r)&&(a(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var i;return e&&(n=this.removeTransform(n)),Fc((i=n).x),Fc(i.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var e;const{visualElement:t}=this.options;if(!t)return ud();const n=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(Qc))){const{scroll:e}=this.root;e&&(Sd(n.x,e.offset.x),Sd(n.y,e.offset.y))}return n}removeElementScroll(e){var t;const n=ud();if(Kd(n,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return n;for(let i=0;i<this.path.length;i++){const t=this.path[i],{scroll:r,options:a}=t;t!==this.root&&r&&a.layoutScroll&&(r.wasRoot&&Kd(n,e),Sd(n.x,r.offset.x),Sd(n.y,r.offset.y))}return n}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=ud();Kd(n,e);for(let i=0;i<this.path.length;i++){const e=this.path[i];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Cd(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),gd(e.latestValues)&&Cd(n,e.latestValues)}return gd(this.latestValues)&&Cd(n,this.latestValues),n}removeTransform(e){const t=ud();Kd(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!gd(e.latestValues))continue;md(e.latestValues)&&e.updateSnapshot();const i=ud();Kd(i,e.measurePageBox()),nc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,i)}return gd(this.latestValues)&&nc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ja.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const i=Boolean(this.resumingFrom)||this!==n;if(!(e||i&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:a}=this.options;if(this.layout&&(r||a)){if(this.resolvedRelativeTargetAt=ja.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ud(),this.relativeTargetOrigin=ud(),rd(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Kd(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var s,o,l;if(this.target||(this.target=ud(),this.targetWithTransforms=ud()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),s=this.target,o=this.relativeTarget,l=this.relativeParent.target,nd(s.x,o.x,l.x),nd(s.y,o.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Kd(this.target,this.layout.layoutBox),jd(this.target,this.targetDelta)):Kd(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ud(),this.relativeTargetOrigin=ud(),rd(this.relativeTargetOrigin,this.target,e.target),Kd(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fc&&pc.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!md(this.parent.latestValues)&&!xd(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let i=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(i=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===ja.timestamp&&(i=!1),i)return;const{layout:r,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!a)return;Kd(this.layoutCorrected,this.layout.layoutBox);const s=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=n.length;if(!r)return;let a,s;t.x=t.y=1;for(let o=0;o<r;o++){a=n[o],s=a.projectionDelta;const{visualElement:r}=a.options;r&&r.props.style&&"contents"===r.props.style.display||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Cd(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,jd(e,s)),i&&gd(a.latestValues)&&Cd(e,a.latestValues))}t.x<kd&&t.x>Ad&&(t.x=1),t.y<kd&&t.y>Ad&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms=ud());const{target:l}=t;l?(this.projectionDelta&&this.prevProjectionDelta?(qd(this.prevProjectionDelta.x,this.projectionDelta.x),qd(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),td(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===s&&this.treeScale.y===o&&dc(this.projectionDelta.x,this.prevProjectionDelta.x)&&dc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),fc&&pc.recalculatedProjection++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=cd(),this.projectionDelta=cd(),this.projectionDeltaWithTransform=cd()}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,i=n?n.latestValues:{},r={...this.latestValues},a=cd();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const s=ud(),o=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),d=!l||l.members.length<=1,c=Boolean(o&&!d&&!0===this.options.crossfade&&!this.path.some(Oc));let u;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;_c(a.x,e.x,n),_c(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(rd(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,i){Mc(e.x,t.x,n.x,i),Mc(e.y,t.y,n.y,i)}(this.relativeTarget,this.relativeTargetOrigin,s,n),u&&function(e,t){return ac(e.x,t.x)&&ac(e.y,t.y)}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u=ud()),Kd(u,this.relativeTarget)),o&&(this.animationValues=r,function(e,t,n,i,r,a){r?(e.opacity=Yo(0,void 0!==n.opacity?n.opacity:1,Hd(i)),e.opacityExit=Yo(void 0!==t.opacity?t.opacity:1,0,Gd(i))):a&&(e.opacity=Yo(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,i));for(let s=0;s<Qd;s++){const r=`border${Ud[s]}Radius`;let a=Wd(t,r),o=Wd(n,r);void 0===a&&void 0===o||(a||(a=0),o||(o=0),0===a||0===o||Vd(a)===Vd(o)?(e[r]=Math.max(Yo(Yd(a),Yd(o),i),0),(Ar.test(o)||Ar.test(a))&&(e[r]+="%")):e[r]=o)}(t.rotate||n.rotate)&&(e.rotate=Yo(t.rotate||0,n.rotate||0,i))}(r,i,this.latestValues,n,c,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ba(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wa.update((()=>{_d.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const i=cr(e)?e:kl(e);return i.start(wl("",i,t,n)),i.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:i,latestValues:r}=e;if(t&&n&&i){if(this!==e&&this.layout&&i&&Uc(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||ud();const t=Zl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const i=Zl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+i}Kd(t,n),Cd(t,r),td(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new cc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=this.getStack();i&&i.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const i={};n.z&&vc("z",e,i,this.animationValues);for(let r=0;r<mc.length;r++)vc(`rotate${mc[r]}`,e,i,this.animationValues),vc(`skew${mc[r]}`,e,i,this.animationValues);e.render();for(const r in i)e.setStaticValue(r,i[r]),this.animationValues&&(this.animationValues[r]=i[r]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return gc;const i={visibility:""},r=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,i.opacity="",i.pointerEvents=ca(null===e||void 0===e?void 0:e.pointerEvents)||"",i.transform=r?r(this.latestValues,""):"none",i;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=ca(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!gd(this.latestValues)&&(t.transform=r?r({},""):"none",this.hasProjected=!1),t}const s=a.animationValues||a.latestValues;this.applyTransformsToTarget(),i.transform=function(e,t,n){let i="";const r=e.x.translate/t.x,a=e.y.translate/t.y,s=(null===n||void 0===n?void 0:n.z)||0;if((r||a||s)&&(i=`translate3d(${r}px, ${a}px, ${s}px) `),1===t.x&&1===t.y||(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:r,rotateY:a,skewX:s,skewY:o}=n;e&&(i=`perspective(${e}px) ${i}`),t&&(i+=`rotate(${t}deg) `),r&&(i+=`rotateX(${r}deg) `),a&&(i+=`rotateY(${a}deg) `),s&&(i+=`skewX(${s}deg) `),o&&(i+=`skewY(${o}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return 1===o&&1===l||(i+=`scale(${o}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,s),r&&(i.transform=r(s,i.transform));const{x:o,y:l}=this.projectionDelta;i.transformOrigin=`${100*o.origin}% ${100*l.origin}% 0`,a.animationValues?i.opacity=a===this?null!==(n=null!==(t=s.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:i.opacity=a===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0;for(const d in sr){if(void 0===s[d])continue;const{correct:e,applyTo:t}=sr[d],n="none"===i.transform?s[d]:e(s[d],a);if(t){const e=t.length;for(let r=0;r<e;r++)i[t[r]]=n}else i[d]=n}return this.options.layoutId&&(i.pointerEvents=a===this?ca(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),i}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(Ec),this.root.sharedNodes.clear()}}}function bc(e){e.updateLayout()}function jc(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:i}=e.layout,{animationType:r}=e.options,a=n.source!==e.layout.source;"size"===r?hd((e=>{const i=a?n.measuredBox[e]:n.layoutBox[e],r=Zl(i);i.min=t[e].min,i.max=i.min+r})):Uc(r,n.layoutBox,t)&&hd((i=>{const r=a?n.measuredBox[i]:n.layoutBox[i],s=Zl(t[i]);r.max=r.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[i].max=e.relativeTarget[i].min+s)}));const s=cd();td(s,t,n.layoutBox);const o=cd();a?td(o,e.applyTransform(i,!0),n.measuredBox):td(o,t,n.layoutBox);const l=!rc(s);let d=!1;if(!e.resumeFrom){const i=e.getClosestProjectingParent();if(i&&!i.resumeFrom){const{snapshot:r,layout:a}=i;if(r&&a){const s=ud();rd(s,n.layoutBox,r.layoutBox);const o=ud();rd(o,t,a.layoutBox),oc(s,o)||(d=!0),i.options.layoutRoot&&(e.relativeTarget=o,e.relativeTargetOrigin=s,e.relativeParent=i)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:o,layoutDelta:s,hasLayoutChanged:l,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Ac(e){fc&&pc.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function kc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Sc(e){e.clearSnapshot()}function Ec(e){e.clearMeasurements()}function Cc(e){e.isLayoutDirty=!1}function Tc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Pc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ic(e){e.resolveTargetDelta()}function Bc(e){e.calcProjection()}function zc(e){e.resetSkewAndRotation()}function Dc(e){e.removeLeadSnapshot()}function _c(e,t,n){e.translate=Yo(t.translate,0,n),e.scale=Yo(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Mc(e,t,n,i){e.min=Yo(t.min,n.min,i),e.max=Yo(t.max,n.max,i)}function Oc(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Nc={duration:.45,ease:[.4,0,.1,1]},Rc=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Lc=Rc("applewebkit/")&&!Rc("chrome/")?Math.round:ya;function Fc(e){e.min=Lc(e.min),e.max=Lc(e.max)}function Uc(e,t,n){return"position"===e||"preserve-aspect"===e&&(i=lc(t),r=lc(n),a=.2,!(Math.abs(i-r)<=a));var i,r,a}function Qc(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}const Yc=wc({attachResizeListener:(e,t)=>Ea(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vc={current:void 0},Wc=wc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vc.current){const e=new Yc({});e.mount(window),e.setOptions({layoutScroll:!0}),Vc.current=e}return Vc.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Hc={pan:{Feature:class extends Ra{constructor(){super(...arguments),this.removePointerDownListener=ya}onPointerDown(e){this.session=new Ql(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Pd(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Dd(e),onStart:Dd(t),onMove:n,onEnd:(e,t)=>{delete this.session,i&&wa.postRender((()=>i(e,t)))}}}mount(){this.removePointerDownListener=Ia(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Ra{constructor(e){super(e),this.removeGroupControls=ya,this.removeListeners=ya,this.controls=new Bd(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ya}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Wc,MeasureLayout:Ld}},Gc={current:null},Xc={current:!1};const $c=new WeakMap,Kc=[...ks,Rs,$s],qc=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Jc=Hi.length;class Zc{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:a,visualState:s}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.applyWillChange=!1,this.resolveKeyframes=(e,t,n,i)=>new this.KeyframeResolver(e,t,n,i,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Bs,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,wa.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Gi(n),this.isVariantNode=Xi(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in u){const e=u[h];void 0!==l[h]&&cr(e)&&e.set(l[h],!1)}}mount(e){this.current=e,$c.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Xc.current||function(){if(Xc.current=!0,Si)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gc.current=e.matches;e.addListener(t),t()}else Gc.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Gc.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){$c.delete(this.current),this.projection&&this.projection.unmount(),ba(this.notifyUpdate),ba(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){const n=lr.has(e),i=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&wa.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),r=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{i(),r(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in Ji){const t=Ji[e];if(!t)continue;const{isEnabled:n,Feature:i}=t;if(!this.features[e]&&i&&n(this.props)&&(this.features[e]=new i(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ud()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<qc.length;n++){const t=qc[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const i=e["on"+t];i&&(this.propEventSubscriptions[t]=this.on(t,i))}this.prevMotionValues=function(e,t,n){for(const i in t){const r=t[i],a=n[i];if(cr(r))e.addValue(i,r);else if(cr(a))e.addValue(i,kl(r,{owner:e}));else if(a!==r)if(e.hasValue(i)){const t=e.getValue(i);!0===t.liveStyle?t.jump(r):t.hasAnimated||t.set(r)}else{const t=e.getStaticValue(i);e.addValue(i,kl(void 0!==t?t:r,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<Jc;t++){const n=Hi[t],i=this.props[n];(Yi(i)||!1===i)&&(e[n]=i)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=kl(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){var n;let i=void 0===this.latestValues[e]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,e))&&void 0!==n?n:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==i&&null!==i&&("string"===typeof i&&(ps(i)||cs(i))?i=parseFloat(i):!(e=>Kc.find(As(e)))(i)&&$s.test(t)&&(i=no(e,t)),this.setBaseTarget(e,cr(i)?i.get():i)),cr(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props;let i;if("string"===typeof n||"object"===typeof n){const r=sa(this.props,n,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);r&&(i=r[e])}if(n&&void 0!==i)return i;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||cr(r)?void 0!==this.initialValues[e]&&void 0===i?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new bl),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.events[e].notify(...n)}}}class eu extends Zc{constructor(){super(...arguments),this.KeyframeResolver=ro}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:i}=t;delete n[e],delete i[e]}}class tu extends eu{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=ea}readValueFromInstance(e,t){if(lr.has(t)){const e=to(t);return e&&e.default||0}{const i=(n=e,window.getComputedStyle(n)),r=(Dr(t)?i.getPropertyValue(t):i[t])||0;return"string"===typeof r?r.trim():r}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Td(e,n)}build(e,t,n){Nr(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ia(e,t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;cr(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class nu extends eu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ud}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(lr.has(t)){const e=to(t);return e&&e.default||0}return t=ta.has(t)?t:Ti(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ra(e,t,n)}build(e,t,n){$r(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,i){na(e,t,0,i)}mount(e){this.isSVGTag=qr(e.tagName),super.mount(e)}}const iu=(e,n)=>ar(e)?new nu(n):new tu(n,{allowProjection:e!==t.Fragment}),ru={...Fl,...Xa,...Hc,...{layout:{ProjectionNode:Wc,MeasureLayout:Ld}}},au=ir(((e,t)=>function(e,t,n,i){let{forwardMotionProps:r=!1}=t;return{...ar(e)?ka:Sa,preloadedFeatures:n,useRender:Zr(r),createVisualElement:i,Component:e}}(e,t,ru,iu)));var su,ou,lu,du,cu,uu,hu=n(9002),pu=n.n(hu),fu=function(e){this.startX=e.startX,this.startY=e.startY,this.endX=e.endX,this.endY=e.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=e.startMultiplierX||1,this.endMultiplierX=e.endMultiplierX||1,this.startMultiplierY=e.startMultiplierY||1,this.endMultiplierY=e.endMultiplierY||1};function mu(){return mu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},mu.apply(this,arguments)}!function(e){e.speed="speed",e.translateX="translateX",e.translateY="translateY",e.rotate="rotate",e.rotateX="rotateX",e.rotateY="rotateY",e.rotateZ="rotateZ",e.scale="scale",e.scaleX="scaleX",e.scaleY="scaleY",e.scaleZ="scaleZ",e.opacity="opacity"}(su||(su={})),function(e){e.px="px",e["%"]="%",e.vh="vh",e.vw="vw"}(ou||(ou={})),function(e){e.deg="deg",e.turn="turn",e.rad="rad"}(lu||(lu={})),function(e){e[""]=""}(du||(du={})),function(e){e.vertical="vertical",e.horizontal="horizontal"}(cu||(cu={})),function(e){e.ease="ease",e.easeIn="easeIn",e.easeOut="easeOut",e.easeInOut="easeInOut",e.easeInQuad="easeInQuad",e.easeInCubic="easeInCubic",e.easeInQuart="easeInQuart",e.easeInQuint="easeInQuint",e.easeInSine="easeInSine",e.easeInExpo="easeInExpo",e.easeInCirc="easeInCirc",e.easeOutQuad="easeOutQuad",e.easeOutCubic="easeOutCubic",e.easeOutQuart="easeOutQuart",e.easeOutQuint="easeOutQuint",e.easeOutSine="easeOutSine",e.easeOutExpo="easeOutExpo",e.easeOutCirc="easeOutCirc",e.easeInOutQuad="easeInOutQuad",e.easeInOutCubic="easeInOutCubic",e.easeInOutQuart="easeInOutQuart",e.easeInOutQuint="easeInOutQuint",e.easeInOutSine="easeInOutSine",e.easeInOutExpo="easeInOutExpo",e.easeInOutCirc="easeInOutCirc",e.easeInBack="easeInBack",e.easeOutBack="easeOutBack",e.easeInOutBack="easeInOutBack"}(uu||(uu={}));var gu=0;var xu=function(){function e(e){var t=e.el.getBoundingClientRect();if(e.view.scrollContainer){var n=e.view.scrollContainer.getBoundingClientRect();t=mu({},t,{top:t.top-n.top,right:t.right-n.left,bottom:t.bottom-n.top,left:t.left-n.left})}this.height=e.el.offsetHeight,this.width=e.el.offsetWidth,this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,e.rootMargin&&this._setRectWithRootMargin(e.rootMargin)}return e.prototype._setRectWithRootMargin=function(e){var t=e.top+e.bottom,n=e.left+e.right;this.top-=e.top,this.right+=e.right,this.bottom+=e.bottom,this.left-=e.left,this.height+=t,this.width+=n},e}(),vu=[du[""],ou.px,ou["%"],ou.vh,ou.vw,lu.deg,lu.turn,lu.rad];function yu(e,t){void 0===t&&(t=ou["%"]);var n={value:0,unit:t};if("undefined"===typeof e)return n;if(!("number"===typeof e||"string"===typeof e))throw new Error("Invalid value provided. Must provide a value as a string or number");if(e=String(e),n.value=parseFloat(e),n.unit=e.match(/[\d.\-+]*\s*(.*)/)[1]||t,!vu.includes(n.unit))throw new Error("Invalid unit provided.");return n}var wu={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function bu(e){if(Array.isArray(e))return pu()(e[0],e[1],e[2],e[3]);if("string"===typeof e&&"undefined"!==typeof wu[e]){var t=wu[e];return pu()(t[0],t[1],t[2],t[3])}}var ju=Object.values(su),Au={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function ku(e,t){var n={};return ju.forEach((function(i){var r=Au[i];if("number"===typeof(null==e?void 0:e[i])){var a=null==e?void 0:e[i],s=-10*(a||0)+"px",o=yu(10*(a||0)+"px"),l=yu(s),d={start:o.value,end:l.value,unit:o.unit};t===cu.vertical&&(n.translateY=d),t===cu.horizontal&&(n.translateX=d)}if(Array.isArray(null==e?void 0:e[i])){var c=null==e?void 0:e[i];if("undefined"!==typeof c[0]&&"undefined"!==typeof c[1]){var u=yu(null==c?void 0:c[0],r),h=yu(null==c?void 0:c[1],r),p=bu(null==c?void 0:c[2]);if(n[i]={start:u.value,end:h.value,unit:u.unit,easing:p},u.unit!==h.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}}})),n}function Su(e,t,n,i){var r=(n-e)/t;return i&&(r=i(r)),r}function Eu(e,t){return{value:function(e,t,n,i,r){return(n-t)*(e-i)/(r-i)+t}("function"===typeof e.easing?e.easing(t):t,(null==e?void 0:e.start)||0,(null==e?void 0:e.end)||0,0,1),unit:null==e?void 0:e.unit}}var Cu=Object.values(su).filter((function(e){return"opacity"!==e}));function Tu(e,t,n){if(n){var i=function(e,t){var n=Cu.reduce((function(n,i){var r=e[i]&&Eu(e[i],t);return"undefined"===typeof r||"undefined"===typeof r.value||"undefined"===typeof r.unit?n:n+(i+"("+r.value+r.unit+")")}),"");return n}(e,t),r=function(e,t){var n=e.opacity&&Eu(e.opacity,t);if("undefined"===typeof n||"undefined"===typeof n.value||"undefined"===typeof n.unit)return"";return""+n.value}(e,t);n.style.transform=i,n.style.opacity=r}}function Pu(e){var t=e.el;t&&(t.style.transform="",t.style.opacity="")}function Iu(e,t,n){var i=t>e,r=n+(Math.abs(e)+Math.abs(t))*(i?-1:1);return Math.max(n/r,1)}function Bu(e,t){var n=e.start,i=e.end,r=e.unit;if("%"===r){var a=t/100;n*=a,i*=a}if("vw"===r){var s=n/100,o=i/100;n=window.innerWidth*s,i=window.innerWidth*o}if("vh"===r){var l=n/100,d=i/100;n=window.innerHeight*l,i=window.innerHeight*d}return{start:n,end:i}}var zu={start:0,end:0,unit:""};var Du=function(e,t,n){return Math.min(Math.max(e,t),n)},_u=function(){function e(e){this.el=e.el,this.props=e.props,this.scrollAxis=e.scrollAxis,this.disabledParallaxController=e.disabledParallaxController||!1,this.id=++gu,this.effects=ku(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(e.props.easing),function(e,t){var n="transform"+(Object.keys(t).includes("opacity")?",opacity":"");e.style.willChange=n}(e.el,this.effects)}var t=e.prototype;return t.updateProps=function(e){return this.props=mu({},this.props,e),this.effects=ku(e,this.scrollAxis),this._setElementEasing(e.easing),this},t.setCachedAttributes=function(e,t){Pu(this),this.rect=new xu({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:e});var n,i,r,a=(n=this.props,i=this.effects,r=this.scrollAxis,!(n.rootMargin||n.targetElement||n.shouldDisableScalingTranslations)&&!!(i.translateX&&r===cu.horizontal||i.translateY&&r===cu.vertical));return"number"===typeof this.props.startScroll&&"number"===typeof this.props.endScroll?(this.limits=new fu({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this._setElementStyles(),this):(a?(this.limits=function(e,t,n,i,r,a){var s=n.translateX||zu,o=n.translateY||zu,l=Bu(s,e.width),d=l.start,c=l.end,u=Bu(o,e.height),h=u.start,p=u.end,f=e.top-t.height,m=e.left-t.width,g=e.bottom,x=e.right,v=1,y=1;r===cu.vertical&&(y=v=Iu(h,p,t.height+e.height));var w=1,b=1;if(r===cu.horizontal&&(b=w=Iu(d,c,t.width+e.width)),h<0&&(f+=h*v),p>0&&(g+=p*y),d<0&&(m+=d*w),c>0&&(x+=c*b),m+=i.x,x+=i.x,f+=i.y,g+=i.y,a){var j=i.y+e.top<t.height,A=i.x+e.left<t.width,k=i.y+e.bottom>t.scrollHeight-t.height,S=i.x+e.right>t.scrollWidth-t.height;j&&k&&(v=1,y=1,f=0,g=t.scrollHeight-t.height),A&&S&&(w=1,b=1,m=0,x=t.scrollWidth-t.width),!j&&k&&(f=e.top-t.height+i.y,v=Iu(h,p,(g=t.scrollHeight-t.height)-f),y=1,h<0&&(f+=h*v)),!A&&S&&(m=e.left-t.width+i.x,w=Iu(d,c,(x=t.scrollWidth-t.width)-m),b=1,d<0&&(m+=d*w)),j&&!k&&(f=0,v=1,y=Iu(h,p,(g=e.bottom+i.y)-f),p>0&&(g+=p*y)),A&&!S&&(m=0,w=1,b=Iu(d,c,(x=e.right+i.x)-m),c>0&&(x+=c*b))}return new fu({startX:m,startY:f,endX:x,endY:g,startMultiplierX:w,endMultiplierX:b,startMultiplierY:v,endMultiplierY:y})}(this.rect,e,this.effects,t,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=function(e,t){var n=mu({},e);return n.translateX&&(n.translateX=mu({},e.translateX,{start:n.translateX.start*t.startMultiplierX,end:n.translateX.end*t.endMultiplierX})),n.translateY&&(n.translateY=mu({},e.translateY,{start:n.translateY.start*t.startMultiplierY,end:n.translateY.end*t.endMultiplierY})),n}(this.effects,this.limits)):this.limits=function(e,t,n,i){var r=e.top-t.height,a=e.left-t.width,s=e.bottom,o=e.right;return a+=n.x,o+=n.x,r+=n.y,s+=n.y,i&&(n.y+e.top<t.height&&(r=0),n.x+e.left<t.width&&(a=0),s>t.scrollHeight-t.height&&(s=t.scrollHeight-t.height),o>t.scrollWidth-t.width&&(o=t.scrollWidth-t.width)),new fu({startX:a,startY:r,endX:o,endY:s})}(this.rect,e,t,this.props.shouldAlwaysCompleteAnimation),this._setElementStyles(),this)},t._updateElementIsInView=function(e){var t=null===this.isInView;e!==this.isInView&&(e?this.props.onEnter&&this.props.onEnter(this):t||(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=e},t._setFinalProgress=function(){var e=Du(Math.round(this.progress),0,1);this._updateElementProgress(e)},t._setElementStyles=function(){this.props.disabled||this.disabledParallaxController||Tu(this.scaledEffects||this.effects,this.progress,this.el)},t._updateElementProgress=function(e){this.progress=e,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},t._setElementEasing=function(e){this.easing=bu(e)},t.updateElementOptions=function(e){this.scrollAxis=e.scrollAxis,this.disabledParallaxController=e.disabledParallaxController||!1},t.updatePosition=function(e){if(!this.limits)return this;var t=this.scrollAxis===cu.vertical,n=null===this.isInView,i=t?this.limits.startY:this.limits.startX,r=t?this.limits.endY:this.limits.endX,a=t?this.limits.totalY:this.limits.totalX,s=t?e.y:e.x,o=function(e,t,n){return n>=e&&n<=t}(i,r,s);if(this._updateElementIsInView(o),o){var l=Su(i,a,s,this.easing);this._updateElementProgress(l),this._setElementStyles()}else n&&(this.progress=Du(Math.round(Su(i,a,s,this.easing)),0,1),this._setElementStyles());return this},e}(),Mu=function(){function e(e){this.scrollContainer=e.scrollContainer,this.width=e.width,this.height=e.height,this.scrollHeight=e.scrollHeight,this.scrollWidth=e.scrollWidth}var t=e.prototype;return t.hasChanged=function(e){return e.width!==this.width||e.height!==this.height||e.scrollWidth!==this.scrollWidth||e.scrollHeight!==this.scrollHeight},t.setSize=function(e){return this.width=e.width,this.height=e.height,this.scrollHeight=e.scrollHeight,this.scrollWidth=e.scrollWidth,this},e}(),Ou=function(){function e(e,t){this.x=e,this.y=t,this.dx=0,this.dy=0}return e.prototype.setScroll=function(e,t){return this.dx=e-this.x,this.dy=t-this.y,this.x=e,this.y=t,this},e}();var Nu=function(){function e(e){var t=e.scrollAxis,n=void 0===t?cu.vertical:t,i=e.scrollContainer,r=e.disabled,a=void 0!==r&&r;this.disabled=a,this.scrollAxis=n,this.elements=[],this._hasScrollContainer=!!i,this.viewEl=null!=i?i:window;var s=this._getScrollPosition(),o=s[0],l=s[1];this.scroll=new Ou(o,l),this.view=new Mu({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?i:void 0}),this._ticking=!1,this._supportsPassive=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(ky){}return e}(),this._bindAllMethods(),this.disabled||(this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize())}e.init=function(t){if(!("undefined"!==typeof window))throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new e(t)};var t=e.prototype;return t._bindAllMethods=function(){var e=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach((function(t){e[t]=e[t].bind(e)}))},t._addListeners=function(e){e.addEventListener("scroll",this._handleScroll,!!this._supportsPassive&&{passive:!0}),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},t._removeListeners=function(e){var t;e.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),null==(t=this._resizeObserver)||t.disconnect()},t._addResizeObserver=function(){var e=this;try{var t=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver((function(){return e.update()})),this._resizeObserver.observe(t)}catch(ky){console.warn("Failed to create the resize observer in the ParallaxContoller")}},t._getScrollPosition=function(){return[this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset]},t._handleScroll=function(){var e,t=this._getScrollPosition(),n=t[0],i=t[1];this.scroll.setScroll(n,i),!this._ticking&&(null==(e=this.elements)?void 0:e.length)>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},t._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},t._updateAllElements=function(e){var t=this,n=(void 0===e?{}:e).updateCache;this.elements&&this.elements.forEach((function(e){n&&e.setCachedAttributes(t.view,t.scroll),t._updateElementPosition(e)})),this._ticking=!1},t._updateElementPosition=function(e){e.props.disabled||this.disabled||e.updatePosition(this.scroll)},t._getViewParams=function(){if(this._hasScrollContainer){var e=this.viewEl.offsetWidth,t=this.viewEl.offsetHeight,n=this.viewEl.scrollHeight,i=this.viewEl.scrollWidth;return this.view.setSize({width:e,height:t,scrollHeight:n,scrollWidth:i})}var r=document.documentElement;return{width:window.innerWidth||r.clientWidth,height:window.innerHeight||r.clientHeight,scrollHeight:r.scrollHeight,scrollWidth:r.scrollWidth}},t._setViewSize=function(){return this.view.setSize(this._getViewParams())},t._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},t.getElements=function(){return this.elements},t.createElement=function(e){var t=new _u(mu({},e,{scrollAxis:this.scrollAxis,disabledParallaxController:this.disabled}));return t.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[t]):[t],this._updateElementPosition(t),this._checkIfViewHasChanged()&&this.update(),t},t.removeElementById=function(e){this.elements&&(this.elements=this.elements.filter((function(t){return t.id!==e})))},t.updateElementPropsById=function(e,t){this.elements&&(this.elements=this.elements.map((function(n){return n.id===e?n.updateProps(t):n}))),this.update()},t.resetElementStyles=function(e){Pu(e)},t.update=function(){var e=this._getScrollPosition(),t=e[0],n=e[1];this.scroll.setScroll(t,n),this._setViewSize(),this._updateAllElements({updateCache:!0})},t.updateScrollContainer=function(e){this._removeListeners(this.viewEl),this.viewEl=e,this._hasScrollContainer=!!e,this.view=new Mu({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:e}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},t.disableParallaxController=function(){this.disabled=!0,this._removeListeners(this.viewEl),this.elements&&this.elements.forEach((function(e){return Pu(e)}))},t.enableParallaxController=function(){var e=this;this.disabled=!1,this.elements&&this.elements.forEach((function(t){return t.updateElementOptions({disabledParallaxController:!1,scrollAxis:e.scrollAxis})})),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()},t.disableAllElements=function(){console.warn("deprecated: use disableParallaxController() instead"),this.elements&&(this.elements=this.elements.map((function(e){return e.updateProps({disabled:!0})}))),this.update()},t.enableAllElements=function(){console.warn("deprecated: use enableParallaxController() instead"),this.elements&&(this.elements=this.elements.map((function(e){return e.updateProps({disabled:!1})}))),this.update()},t.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach((function(e){return Pu(e)})),this.elements=void 0},e}();function Ru(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var Lu=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function Fu(e){var t,n=e.disabled,i=e.easing,r=e.endScroll,a=e.onChange,s=e.onEnter,o=e.onExit,l=e.onProgressChange,d=e.opacity,c=e.rootMargin,u=e.rotate,h=e.rotateX,p=e.rotateY,f=e.rotateZ,m=e.scale,g=e.scaleX,x=e.scaleY,v=e.scaleZ,y=e.shouldAlwaysCompleteAnimation,w=e.shouldDisableScalingTranslations,b=e.speed,j=e.startScroll,A=e.targetElement,k=e.translateX,S=e.translateY,E=Ru(e,Lu);return{parallaxProps:(t={disabled:n,easing:i,endScroll:r,onChange:a,onEnter:s,onExit:o,onProgressChange:l,opacity:d,rootMargin:c,rotate:u,rotateX:h,rotateY:p,rotateZ:f,scale:m,scaleX:g,scaleY:x,scaleZ:v,shouldAlwaysCompleteAnimation:y,shouldDisableScalingTranslations:w,speed:b,startScroll:j,targetElement:A,translateX:k,translateY:S},Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t),rest:E}}var Uu=t.createContext(null);function Qu(e){var n=function(){var e=(0,t.useContext)(Uu);if("undefined"===typeof window)return null;if(!e)throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return e}(),i=(0,t.useRef)(null),r=Fu(e).parallaxProps;!function(e){(0,t.useEffect)((function(){if("undefined"!==typeof window&&!e&&!(e instanceof Nu))throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")}),[e])}(n);var a=(0,t.useState)(),s=a[0],o=a[1];return(0,t.useEffect)((function(){var e;if(!(i.current instanceof HTMLElement))throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");var t={el:i.current,props:r};return e=null==n?void 0:n.createElement(t),o(e),function(){e&&(null==n||n.removeElementById(e.id))}}),[]),(0,t.useEffect)((function(){s&&(e.disabled?(null==n||n.resetElementStyles(s),null==n||n.updateElementPropsById(s.id,r)):null==n||n.updateElementPropsById(s.id,r))}),[e.disabled,e.easing,e.endScroll,e.onChange,e.onEnter,e.onExit,e.onProgressChange,e.opacity,e.rootMargin,e.rotate,e.rotateX,e.rotateY,e.rotateZ,e.scale,e.scaleX,e.scaleY,e.scaleZ,e.shouldAlwaysCompleteAnimation,e.shouldDisableScalingTranslations,e.speed,e.startScroll,e.targetElement,e.translateX,e.translateY]),{ref:i,controller:n,element:s}}function Yu(e){var n=Fu(e),i=n.parallaxProps,r=n.rest,a=Qu(i).ref;return t.createElement("div",Object.assign({ref:a},r),e.children)}var Vu=function(e){return"undefined"===typeof window?null:Nu.init(e)};function Wu(e){var n=(0,t.useRef)(null);return n.current||(n.current=Vu({scrollAxis:e.scrollAxis||cu.vertical,scrollContainer:e.scrollContainer,disabled:e.isDisabled})),(0,t.useEffect)((function(){e.scrollContainer&&n.current&&n.current.updateScrollContainer(e.scrollContainer)}),[e.scrollContainer,n.current]),(0,t.useEffect)((function(){e.isDisabled&&n.current&&n.current.disableParallaxController(),!e.isDisabled&&n.current&&n.current.enableParallaxController()}),[e.isDisabled,n.current]),(0,t.useEffect)((function(){return function(){(null==n?void 0:n.current)&&(null==n||n.current.destroy())}}),[]),t.createElement(Uu.Provider,{value:n.current},e.children)}const Hu=yi.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--index-bg);

  /* @media only screen and (max-width: 540px) {
    height: 18;
  } */
`,Gu=yi.div`
  /* align-items: flex-start; */
  text-align: left;
  white-space: nowrap;
  color: var(--primary-txt-color);
  margin: 30px;

  div {
    display: flex;
    .home-subtitle {
      position: relative;
      flex-flow: column;
    }
  }

  h1 {
    color: var(--primary-txt-color);
    font-weight: 700;
    font-size: 9.9vw;
    margin-bottom: 6px;
    /* pointer-events: none;
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none; */

    @media only screen and (max-width: 1919px) {
      font-size: 150px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 25vw;
    }

    /* @media only screen and (max-width: 539px) {
      font-size: 6rem;
    }

    @media only screen and (max-width: 374px) {
      font-size: 4rem;
    } */
  }

  h2 {
    font-family: "GT";
    font-weight: 500;
    font-size: 6.7vw;
    margin-bottom: 16px;
    line-height: 0.9;
    /* pointer-events: none;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none; */

    @media only screen and (max-width: 1919px) {
      font-size: 120px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 17.5vw;
    }
    /* 
    @media only screen and (max-width: 539px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 374px) {
      font-size: 3rem;
    } */
  }

  /* h2&:first-child {
    margin-left: 32px;

    @media only screen and (max-width: 539px) {
      margin-left: 16px;
      margin-bottom: 16px;
    }
  } */

  p {
    font-weight: 300;
    font-size: 1.1vw;
    margin: 0.5rem 0 0 0.8rem;
    letter-spacing: 0.1rem;
    /* pointer-events: none;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none; */

    @media only screen and (max-width: 1919px) {
      font-size: 19px;
    }
    @media only screen and (max-width: 960px) {
      margin: 0.2rem 0 0 0.8rem;
      font-size: 3.3vw;
    }
  }

  .caption {
    font-size: 0.7vw;

    @media only screen and (max-width: 1919px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 960px) {
      margin: 0.3rem 0 0 0.8rem;
      font-size: 3.3vw;
    }
  }
`,Xu=yi(au.img)`
  position: relative;
  object-fit: contain;
  width: 6.8vw;
  height: auto;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 0.2s;
  animation-iteration-count: 15;

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

  /* @media only screen and (max-width: 539px) {
    width: 70px;
  }

  @media only screen and (max-width: 374px) {
    width: 45px;
  } */
`,$u=yi(au.img)`
  object-fit: contain;
  width: 5.8vw;
  height: auto;
  padding-bottom: 24px;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 0.2s;
  animation-iteration-count: 15;

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

  /* @media only screen and (max-width: 539px) {
    width: 60px;
  }

  @media only screen and (max-width: 374px) {
    width: 40px;
  } */
`,Ku=()=>{const e={hidden:{opacity:0,x:-200},visible:{opacity:1,x:0}},n=(0,t.useRef)(null),i=wi`
  0% {
        transform: translate(0%,0);
    }
    25% {
        transform: translate(10%,0)
    }
    50% {
        transform: translate(15%,0)
    }
    75% {
        transform: translate(10%,0)
    }
    100% {
        transform: translate(0%,0)
    }
`;yi.div`
    display: inline-block;
    animation: ${i} 2s linear infinite;
  `;return(0,bi.jsx)(Hu,{id:"home",children:(0,bi.jsxs)(Gu,{ref:n,children:[(0,bi.jsxs)("div",{children:[(0,bi.jsx)(au.h1,{variants:e,initial:"hidden",animate:"visible",transition:{duration:2},children:"H"}),(0,bi.jsx)(Xu,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABuxSURBVHgB7d2xj5uJmd/xhxP6XHgGKXfJxttEVxo294CrdtikCaR/IliM/gmvxNlze0gtYWEgVZrrpKQ8cAQEOOCWXmyTYMeF7UNAai/ZiwHOYe0FIeZ9R6pydws9vOel3iE/nzWl5n39zjvkzHw1LH4RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdGARwpwyHw2nz1zS4szabzSyAgyaw4I5pAmvW/PU4uLOawPK9Fw7cSQAAUEpgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxexhQSE7gfSFvUN4t/wGCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKDSNpOBxOm7+mmXM2m80s4A56sy2YcR7QAzu8dufN9+p5ACXSY6C7jNkaHeWual7v24DjcOkfw1DHW4QAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUCw99nwoDmVT0X10e40++ujVq9tHxj5u+gfD/n07efXJq3j1KPe5Sps3j6tIGf6il996HzdfI3ZmoYjfYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAsV0GsebRQ2925jLOo4f6eB/NxzRt/ppGt3r5fOzDJ8ldwR9vt/HjoDc+iLRXg9xzPngxiMGV2T+4S9KBtdls5tHPyLrzI75v9PE+pnE4n9/eefSq4zFiuvVBpCPr1TT3nJ98eiKw4I7xFiEAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFNtl7LlzbwaP7/z23aHcBwCQ4zdYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFCsl1uEezJvHlcBAFDsmAPrarPZzAIAoJi3CAEAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgWHqLcBsxa/56nDlncPu/t/dmI3AWR6i599Tnqq8O5T4AYBd+gwUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxdJbhIdiGzGN14+3NsjvI86jY+4DAPrnaAMrXv8wT41WR/IH+mazmUf3cTIN9wEAveItQgCAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAolt4ifDOwO4ue2d7+7+7r431sXz/f2Z1AADhafoMFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMXSW4T7sI2YxusH8P/57ZtHxouT4/y31ODFIE4+7fbetz/e3j5SpnEQPvzbD2fRP/PP/+zzecA71svAitfffowLwz/jt83jKnJ+cayBdTW4fXTp1UevYvvRcQbWdrDt3ffpwfb2+Z4HvGPeIgQAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYn3dItyHy0HELDq0ff3/b1OR7/WD4TF/Gd59Jy9Obh8pv4jDMJmkDo/lKmK1jC5tV8vHkycdf99tbiOSt7F4Gt2OYtI7foMFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMXSI2jD4XDa/DXNnLPZbGaRM4/uzaOfLuMwHMp9HIRXrz6KnA+ax48zJ8TJyV9E35yfb+Ojj7apc66uUofH7343uH0cpXZbMONmHWn7uMYefHixnUXHPn86mAW9scvK7DTyA8azzMGD1/EzjyPU9QD1vhzKfRyKfGCdR/LfUb0MrDauHj16lTrnMvlPgxcvTo43sDoebt7bNfZgGx0PUL82C3rDW4QAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUGyXLcKDMBwOZ5HchtpsNqnBsTd7fLPokPu4+zabn0dOfieQt/c4vRj36s3j7e2yd9g+emexiIOQvo1Z7GdaMGdysU0tmzffQC8NRHfHb7AAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoNguW4Tz6KE3W3YZ59FDfbyP5mOaRvfjd718PvYje+sfBHfbefIp/7u/a/cI4zitYg9mmYNjfXYeN2fRqdN1xNk6OvX73/zVefZnzmazSR1/zNKB1Xxy59HPyOrf8uZu+ngf0zicz28PTYPjMp1GytHGVWsZe5D79tbG1XIUnRpH94H1h9//j2nkvwHNgrfiLUIAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKLbL2HPn3oxP3vntu0O5D4B/1iL2YJs6ejXufifwULz300e3j4wvf/mD3BMScXmsA9F+gwUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxXq5Rbgn8+ZxFQDsZDWeZQ6P09OIs7PUKbFapQ6P9Wl0rr2Hs+x1fhVp7a5ixmgZnXv/p5+kjv/D7//n+e9/81ezzDmHsl14zIF1dawDlAAVlqPclv141IRJMhqWexmUzmnjapS8j3ieOnqn0ep9BFZ2HPrrLz6dNn9NI2cWB8BbhAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQbIctwu2s+SM3QBWDQeboNxuBszhCzb2nPld9dSj3AfzLJpPU4bFaRiyS24K7XGOZHIhOX+P6MhbPZ5lTYhLb1PHtruA+tgW71m4XZvcLv/zlD3KfrIjLPm4L+w0WAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABTbYYvwUGynzR/T1CkxmEXOPDrnPoB3Y7XDVt54lDp8P9e4voycRYzvjVNnrNa5a5x+dx5nf5zGXbf+4Txu/uQqjtERB9btD/PkaHVugHqz2cyj+ziZhvsA3oHsqHIbPqNcl6THoXe6RnK4uY2r0b1cxS2uZ5nDY7yeHURgtXG1PJtlTmnC5DDSxFuEAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBsh8Gf24HdWfTOdhsHoY/3sZ1FficQOHCTSerw2+Hm7LZg+hrXl+ltwcn95EUWq4inyRtJHh7tnmJytDprdXaZ3gnMGp82n9+z1Cmx+PkmdfzJi5PHwxfD1M+ozWYziI75DRYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFNthi3AfttPmj2kAReaZg2Mw+N3t46578WIQn36a+3fkRx+9Sh3/wQevH8eo3f1L+ZPzGI+mmTPy14hFjO+Nk6esUoevr9dxkzslxuNZ5vA4PT2PrHZbMOPevXXcv3eROuf54mnq+NMfxtHqaWDdxpVxYShzlTp6MHgRJycv4q67uhrcPjJ+/vNcYLWONbCW17PM4U34zGL0wTRzSnq4uY2r0b3kSnJyuLmNq+UydUpMJt3/SMsON7dxdTHNBdbiOhdYx8xbhAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQLDfStTfbWXS/RXjZ3P4sOrWX+9jBIPm8H8Z9DIfDWdi4hDI/+Y+b6NzFNnV4LJpv7YtZ5oxY5KYIb4ebR6Nuv5W0w83ZbcHPH3+eOv75chHPVsmbz2quER1f4+v/dhIv/2vu90Wbzabz/vEbLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoNoyk4XA4bf6aZs7ZbDazyJlH9+bRT5dxGA7lPnhL73/ySXRulTo6bn71onlcBf2wPpvGTfNIWUbSecR4ljkhxsnX1enpedAfP3p/G+//9FXqnJdfDGeRM29aZp45IR1Y8TqusiuXs0gZzKO/AdSxrgeo9+VQ7oO39d6jR9G57GbsZ58KrB5p42qZHUlOxs/tj6jRNHXGZBTcYaejbZz+NDcK/vKLk13WuueZg71FCABQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFdtkiPAjD4XAWyU3FzWYziJTbPb5ZdMh98DZ+8jc/SR0fo4uI8UV0qh3xze7MTVJHx3ujR/Hex91uJH792afx8rO/iKN0kdt/2+U5nyyyX+azyM/l5qzOLmN5NosuXZxfxMX089Q5D58+TB0fo3HzdZ4cYlxkB0HTY5KxSJ4yXje3Ev3jN1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUGyXLcJ59NCbLbuM8+ihPt5H8zFNm7+m0a1ePh/78P7H70fXHowepI7/KtZxvXwaOTtsF2YHxJbJ42+icz/62XnzHKZOiWVya21w/SIGv76Kvllln4/VPMar3H08uJ97XS1+t47Fby+jS/fureP+vdzH9XyV2/BbfbeO54vnqXNutwWzsi/G7DVu1tF8OzlK6cDabDbz6GdkdbvuuT99vI9pHM7nt3fe+/i96Nr98f3U8bF8Hter/xI5ycBq4yr78yC7M7sHp01gtY+M/5W8j5P4tJeBlf3Z3MbVaDnLnBL3H+cGj5fzp7H85i+jS21cXUyT4bfI/YNl2Xxyl4tnqXNiklxDb5/AbCWnr7E82sDyFiEAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFNtl7LlzbwaP7/z23aHcx6H4z//9f8dgMEidc+/P/m3q+OfLp/FsldscezJ5Er0zHjWP3ObY4mHuc7uLycU2+qadcstu8mXn3FajR7H8D49S56Svsct9LHLPeTvcnN0WfJjc8Iuz5uNKDkQ/mSSHm5eL/Me1SA5QtqPK2Sdx0f1Y5+J57r7Hp82tnMVR8hssAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACjWyy3CPZk3j6uA79FuC+as48HoQfTN88hvlD2I3A7a6n5yN20Hq8Vl6vjT0XmcjaeZU243+bLa6ca7fo31TaStxrPM4bFYrSOe5b6mHiT3+L66WcX1Onfz7bZg6hqr6/xwY7stmJW9RuSOX38XcfPH1Cm324JZ7dN+jI45sK42m80s4Htkh5vbuLo/vh998ywZWG1c3U8G1rMH3QfW4uEsc3iMJ7N0YGV/prXhk/3Zmd3k3cc1drEcJbfsV5exXPxl6pQnD3Lj0M0F0oH1bJX8ZLUvkmzBZoebd7lG5I5v42qZDOtJNvTX+WscCm8RAgAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAECxXm4RvtkInMURau59EAegj/fxn07+fWwH29Q5f/3v/jp1/Dc//Cb+ofmvS+1wc3Zb8ElcpI5vr/EwskPXOatni1g+z93H5CL3/LVTbtlNvuxk3C7XyGpn6dK7v730+M3j7T18mPtW8uD+RTx5kHu9P3z6MHX87TBk9oWSfZHscI1F8uupHW7Obgsuevg6vP36+Cp1yl7ix2+wAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKBYL7cID8g8DsM8jlS7LZjx7b/5NrKeR37I7kHkNsqy1/gquh8cOz2LGI9Tp8RqcZk6fr1u/rhJnRKrZW4rb538/z8k4x1eJqvkcz5apg6Pr1bX7Shf6pzb3b+s7Dhk8hrr79Zxc527+XZbMGu1zh2fvcb6u9ePlOvc4Wd/bB7Jp/Dvv4zOCawObTabeRxAnBzKfeziH37Y7XBzKzvc3MbV/WRgdT3cvIuzJrDOskOzi1l0bTnKBdYxy8ZPG1fL5HOevcZ1E1jXi2Q1ZIeb27haJT+w5DXauFpeJ8fQk5/bNq6WyX8gZK8R6x0CKznc3MbVKPlx/X10z1uEAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFDMFiEUakeVs9uCT+IidXx7jey24C7XeLbDCHVKO36bnICbdP0xRbt3OIjOTbapw9tR5ewm3yL5ud3XNSZdP4XtKF12W3CR/KBuX7vZa+S+Zttpvey+3iK5P90ON086vsYusp/a1Sr/FO4jfvwGCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILCABqCSwAgGICCwCg2B5Gt6AfPvzbD6fNX9PMOffH9x9njo+z0+ZxFnfdV7GK60gO0y33MFKWHRy7WUes16lTVnu4jYhZ5JxH8qXbS6fNU3GWezoi/WPq3rh5JAf2sk96+3V+mvw6X+Veu+vvmpfvH6N3ljfRuUnyW8/LXw9i9evc6+Tk5cll5Mw3m808c4LAgu8x+Ty3yvtg9KCNsswp6eHmBzGJ+8mV5Ow1drLLYO44uzSbvEYbfavkd+t9SN7GajyL5SjX+pP0NZpPV/LpmHS/vR3pH1PNfUTyPvpotc7HTHa4eZdr7EM2sL7+4iRefpF7Q66Jpc77x1uEAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFDMFiF8j+wW4S77ek/iInX881jEs+h4BG6XDb9Jbh+xvzuBexnYS2l3gpfZD+si99IdN0/HKPl0LJJP+U7XWOR+TI2bj2mU/LgWyanOna6R3JMenzbXSO5JL/YyVJ50He16fEr2W4ktQgCAIyGwAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoJrAAAIoJLACAYsMA3qnnyV3Br2KHwbHlDue0u4p9u0Yftwt7apx8Ok7XkbaXa4xnkbKex2oxz5wR45hFymqHa9yLtNUOn6++OTttHtkv8+Tr6h97+nkSWPCOdT7c3MqGyQ6j1emR5F2uIbDe2mgPn6q9XGP0OHV8+8N5eT3PnBKTSF6jue/lcp45JT1g3MbV8ibuvLOz5jmMnOy3kpObfr4d5y1CAIBiAgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACg2CKDMh09ito3ksNnFRerw21Hl7CZfdghtl2v0UU/vY/E0dfjt4HF2k4+EPcyBLrI/bv+0eewwEN25Z6mjm9duuyeZOiW+/GV6Jvlys9nMomf8BgsAoJjAAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAiqUHf4B37Oy0+WOcOuV2ky/jZh29lL2P1ij5uTqEDcZj1r50byIn+RK5vUbyS2Qcs8zhsf4/8+YS8+hS+63k7Cxysp+rxmqHL9tDILDgrmm/I2a/Ky72sGa7D9n4aeNqnFyaFVh3WxtX2acwuYV+KxlYo+QGfHzTXOKbeXTprB1ijqTsl1MTV8vk83EoYeItQgCAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiAgsAoJjAAgAoNgjgnZo8iW3qhF329bLaUeXsJt8kOejW12vsweJp6vAYj2cxGiW37PYhO3HZDgVnX7o9nNFcxWUsk+PNk+SX+T7sch9ZJ1+fxMnL3O9yNpvNQbSJ32ABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQLFhAO/UIOIyc/z/ffnt+ber1TRzzmiSHIA7O43Xw3EJ7e5f1qjja9ysI2u1h+27cXL/7TTOo3Ptp+omcpJP360dXiZdW+W+BCPufRXjP83tYq6eJa8RP4t2wbBL67jX/HmROufk689Sxw/+MJg3f13FETL2DHfNxe1P59Ty7+Si22/UtxbJMtlltHrRff1kh5h3kR7+3WUkOasNn+wudvZltcs19mCR/FE4fjCJ0f3czS8eZl9YF5GNn30YfvnnkXS52WxmcYS8RQgAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxWwRwjG4yI3fjccRo6637/agHW5eJucL0zuB+7DLFmF2tnEf1+ip9BbhDl8f+RnN7rcI2+Hmk5e58ebNZqMb3pLfYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAsWEAx+Ayc/C338b5ahXTzDn72C5cZffcVtMY526jn9bRvT1cY938d5O80Oh2JLHba2Q3/9br9oWYfTFmdwUnkdVuC2YM/vCbefPXVdAJo43AP3URs+bPx5lTJvmfB2mLp6nDmx/Ns+YHdOo26NAqls1/q9Q5k2Ro7HKNvKdvHhmfR9eGX/55JF1uNptZ0AlvEQIAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMVuEQInhcLiNjm1+8jdBN8YxSg8rL5KDx/u4Rl/tsBOYttls/EzvEb/BAgAoJrAAAIoJLACAYgILAKCYwAIAKCawAACKCSwAgGICCwCgmMACACgmsAAAigksAIBiwwCocRkdO/n6s8fRM9sf/Sy2pz+Lu24dN82fy+jSPq4xuPlVDP7xV9FDnX990C+GIYE7Yx+D0lmv3v84Xr33cdAPTYTHycvPom8MMR8fbxECABQTWAAAxQQWAEAxgQUAUExgAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDHbSAD/CsPhcNb81bsR6iN2udlsZgHvmN9gAQAUE1gAAMUEFgBAMYEFAFBMYAEAFBNYAADFBBYAQDGBBQBQTGABABQTWAAAxQQWAECxYQDwrzEP+mQeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwqP4fIbzFl3vBF4IAAAAASUVORK5CYII=",alt:"icon-win",drag:!0,dragConstraints:{top:0,right:0,bottom:0,left:0},dragElastic:3,initial:{opacity:0,y:0},animate:{opacity:1,y:0,rotate:[0,5,10,-10,0],transition:{duration:2}}}),(0,bi.jsx)(au.h1,{variants:e,initial:"hidden",animate:"visible",transition:{duration:2},children:"llo."})]}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)(au.h2,{variants:e,initial:"hidden",animate:"visible",transition:{duration:1.5},children:"I am"}),(0,bi.jsx)($u,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAzSSURBVHgB7dk9cmPltoDh1RdBrCGoE1I0BHVAjGdgO4GYEQApGSEkbUZwTUwgMQPHJNYQzAj62F2Hc0iP91sl/zxP1SpFSj6pvv3uWjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8JK9GV67q/s5HwCWurqfy4F7/zcAAKQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMTeDM/d/9/Pdh7pl19+WX/55ZfrAWCR33///e7rr7++m8c73M/l8CKshufuIY4280ifffbZbDabAWCZTz/99OE+XvLCuhleDCtCAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiL0ZTm0/C/z888/bzz//fD2PtN1uZ71+9NcB+Lfj8fhxHuvPP/+8++abb25mmXfDk7AaTm03C9zH1ex2uwHgtDabzcdZ4OFtdze8CFaEAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEFsNnNDNzc389NNPA7DUd999N5vNZuApEFic1N3d3VxdXQ3AUufn5wKLJ8OKEAAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGKrgQVubm7mt99+myW+//77AVjqjz/++DiP9dVXX812ux0oCCwWeQisJYG02+1mv98PwFLv3r2bw+Ewj7XZbAQWGStCAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiK0GOKm7u7uP81jr9frjPGcv4QyOx+MssdlsBng5BBac2PX19VxeXs5j7Xa72e/385x9++23c3V1NY91cXEx79+/n1N6+/btLPHwGz78lsDLYEUIABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABATWAAAMYEFABBbDXBSZ2dns9vthuft9vZ2lliv1wO8HAILTuzhwerh+vxtNpsB+JsVIQBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMRWA7DQDz/8MMfjcR7rcDgMwEsisIDFHgJJJAH8lxUhAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxFYDsND5+fnsdrs5lS+++GIAnhKBBSx2cXExAPyXFSEAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEVgM8a8fjcQ6HwyxxcXExr5kzBGoCC565hzi4vLycJQSWMwRaVoQAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQE1gAADGBBQAQWw3wrK3X69ntdrPE4XCY1+x4PC4+Q4B/EljwzG2329nv97PEmzdv5jV7iKulZwjwT1aEAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEFsN8OptNpt5zdbr9QCUBBYwt7e3A0DHihAAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAILYaWODs7Gx2u9081uFwmLdv3w7AUu/fv/84j7VerwcqAotFHi6kJZfSZrOZ4/E4AIWHOwWeAitCAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiK0GTmi73c5+vx+ApR7uE3gqBBYntV6vZ7fbDQC8JFaEAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEFsNAIsdDofhtLbb7azX64GnQGABBN69ezec1n6/n91uN/AUWBECAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFjAAtAQWAEBMYAEAxFYDC9zd3X2cU9psNgOn5n8I/JPAYpHr6+u5vLycU/rw4cPAqd3e3g7A36wIAQBiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAotFLi4u5sOHDycdAHhqBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQExgAQDEBBYAQGw1nNrlLPDjjz9+9+uvv24GgGftk08+ubn/+Gl4Ed4Mz93+fnYDwHN3uJ93w4tgRQgAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAACx1fCqnZ2dzXa7HQCWubm5mevr64EHAuuVewis8/PzAWCZq6srgcV/WBECAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBAbDW8and3d3M8HgeAZf7666+Bv70Znrv9/ewGgOfucD/vhhfBihAAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAICawAABiAgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/wLk/lCtRTeJ0AAAAAASUVORK5CYII=",alt:"icon-mac",drag:!0,dragConstraints:{top:0,right:0,bottom:0,left:0},dragElastic:3,initial:{opacity:0,y:0},animate:{opacity:1,y:0,rotate:[0,5,10,-10,0],transition:{duration:1}}}),(0,bi.jsx)(au.h2,{variants:e,initial:"hidden",animate:"visible",transition:{duration:1.5},children:"Yuya"})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)(Yu,{x:[-10,10],children:(0,bi.jsxs)("div",{className:"home-subtitle",children:[(0,bi.jsx)(au.p,{variants:e,initial:"hidden",animate:"visible",transition:{duration:2.5},children:"Creative Problem Solver"}),(0,bi.jsx)(au.p,{className:"caption",variants:e,initial:"hidden",animate:"visible",transition:{duration:3},children:"UX/UI & Brand Storytelling Designer"}),(0,bi.jsx)(au.p,{className:"caption",variants:e,initial:"hidden",animate:"visible",transition:{duration:3.5},children:"with Front-End and UI Development"})]})})})]})})};var qu=n(9473);const Ju=yi.aside`
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
`,Zu=yi.aside`
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
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
`,eh=yi.div`
  margin-top: 100px;
`,th=yi.div`
  width: 100%;
  border-bottom: solid 2px var(--secondary-bg);
  padding: 16px 0 16px 16px;
`,nh=yi(qu.N_)`
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
`,ih=yi(qu.N_)`
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
`,rh=yi.div`
  display: flex;
  padding-bottom: 100px;
`,ah=yi.a`
  color: var(--secondary-bg);
  font-size: 24px;
  padding: 24px 16px 16px 16px;

  &:first-child {
    padding-left: 24px;
  }
`,sh=yi.div`
  display: none;
  opacity: ${e=>{let{isOpen:t}=e;return t?"0":"100%"}};
  z-index: 1001;

  @media screen and (max-width: 959.99px) {
    display: block;
    width: 48px;
    height: 48px;
    position: fixed;
    top: 20px;
    right: 15px;
    background-color: var(--index-bg);
    border-radius: 50%;

    .burger-menu-bg {
      padding-top: 20px;
    }

    #burger-menu {
      width: 30px;
      height: auto;
      position: fixed;
      top: 29px;
      right: 24px;
      /* -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 1s ease-in-out;
      -moz-transition: 1s ease-in-out;
      -o-transition: 1s ease-in-out;
      transition: 1s ease-in-out; */
      cursor: pointer;

      .burger-menu-bg {
        padding-top: 20px;
      }
    }

    #burger-menu span {
      display: block;
      position: absolute;
      height: 6px;
      width: 100%;
      background: ${e=>{let{darkBurger:t}=e;return t?"var(--secondary-bg);":"#ffffff"}};
      z-index: ${e=>{let{isOpen:t}=e;return t?"100":"0"}};
      border-radius: 9px;
      opacity: 1;
      left: 0;
      /* -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out; */
    }

    #burger-menu span:nth-child(1) {
      top: 0px;
    }

    #burger-menu span:nth-child(2) {
      top: 12px;
    }

    #burger-menu span:nth-child(3) {
      top: 24px;
    }

    #burger-menu.open span:nth-child(1) {
      top: 12px;
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
      top: 12px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;var oh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},lh=t.createContext&&t.createContext(oh),dh=["attr","size","title"];function ch(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;n[i]=e[i]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function uh(){return uh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},uh.apply(this,arguments)}function hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ph(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?hh(Object(n),!0).forEach((function(t){fh(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hh(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fh(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mh(e){return e&&e.map(((e,n)=>t.createElement(e.tag,ph({key:n},e.attr),mh(e.child))))}function gh(e){return n=>t.createElement(xh,uh({attr:ph({},e.attr)},n),mh(e.child))}function xh(e){var n=n=>{var i,{attr:r,size:a,title:s}=e,o=ch(e,dh),l=a||n.size||"1em";return n.className&&(i=n.className),e.className&&(i=(i?i+" ":"")+e.className),t.createElement("svg",uh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:i,style:ph(ph({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&t.createElement("title",null,s),e.children)};return void 0!==lh?t.createElement(lh.Consumer,null,(e=>n(e))):n(oh)}function vh(e){return gh({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"},child:[]}]})(e)}function yh(e){return gh({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"},child:[]}]})(e)}function wh(e){return gh({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}const bh=e=>{let{isOpen:n,toggle:i,darkBurger:r}=e;const[a,s]=(0,t.useState)(!1),o=()=>{window.scrollY>=1?s(!0):s(!1)};(0,t.useEffect)((()=>{window.addEventListener("scroll",o)}),[]);return(0,bi.jsxs)(Ju,{children:[(0,bi.jsx)(sh,{isOpen:n,onClick:i,darkBurger:r,children:(0,bi.jsx)("div",{id:"burger-menu",children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("span",{}),(0,bi.jsx)("span",{}),(0,bi.jsx)("span",{})]})})}),(0,bi.jsxs)(Zu,{isOpen:n,onClick:i,ontouchstart:"",children:[(0,bi.jsx)(sh,{onClick:i,darkBurger:r,children:(0,bi.jsxs)("div",{id:"burger-menu",className:"open",children:[(0,bi.jsx)("span",{}),(0,bi.jsx)("span",{}),(0,bi.jsx)("span",{})]})}),(0,bi.jsxs)(eh,{children:[(0,bi.jsx)(th,{children:(0,bi.jsx)(nh,{to:"home",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Home"})}),(0,bi.jsx)(th,{children:(0,bi.jsx)(nh,{to:"about",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"About"})}),(0,bi.jsxs)(th,{children:[(0,bi.jsx)(ih,{to:"case1",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"tagCopy",children:"Case Study 1"})}),(0,bi.jsx)(nh,{to:"case1",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Riversol Empathy"})]}),(0,bi.jsxs)(th,{children:[(0,bi.jsx)(ih,{to:"case2",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"tagCopy",children:"Case Study 2"})}),(0,bi.jsx)(nh,{to:"case2",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Riversol Challenge"})]}),(0,bi.jsxs)(th,{children:[(0,bi.jsx)(ih,{to:"case3",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"tagCopy",children:"Case Study 3"})}),(0,bi.jsx)(nh,{to:"case3",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Riversol Reinforce"})]}),(0,bi.jsxs)(th,{children:[(0,bi.jsx)(ih,{to:"case4",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"tagCopy",children:"Case Study 4"})}),(0,bi.jsx)(nh,{to:"case4",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Midnight Paloma"})]}),(0,bi.jsx)(th,{children:(0,bi.jsx)(nh,{to:"works",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:"Work"})}),(0,bi.jsx)(th,{children:(0,bi.jsxs)(nh,{to:"contact",onClick:i,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:["Contact",(0,bi.jsx)("img",{className:"contactImg",src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"})]})}),(0,bi.jsxs)(rh,{children:[(0,bi.jsx)(ah,{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,bi.jsx)(yh,{})}),(0,bi.jsx)(ah,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,bi.jsx)(vh,{})}),(0,bi.jsx)(ah,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,bi.jsx)(wh,{})})]})]})]})]})},jh=wi`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`,Ah=wi`
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
`,kh=wi`
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
`,Sh=yi(ke)`
  position: fixed;
  top: 0;
  left: 10;
  margin: 22px 0 0 120px;
  // for txt logo //
  padding: 10px 25px;
  height: auto;
  text-decoration: none;

  &:hover {
    animation: ${kh} 0.3s;
    animation-iteration-count: 6;
  }

  h4 {
    font-family: "GT";
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: 960px) {
      font-size: 5vw;
    }
  }

  @media screen and (max-width: 960px) {
    margin: 10px 0 0 10px;
    width: 60px;
  }
`,Eh=yi(ke)`
  position: fixed;
  top: 0;
  left: 10;
  /* margin: 36px 0 0 6.25vw; */
  // for txt logo //
  margin: 22px 0 0 2.5vw;
  /* background-color: var(--primary-bg);
  border-radius: 70px; */
  // for v1 image logo //
  /* width: 70px; */
  height: auto;
  z-index: 100;
  text-decoration: none;
  animation: ${Ah} 0.3s 6;

  &:active {
    animation: ${jh} 0.3s 3 forwards;
  }

  h4 {
    // for txt logo //
    padding: 10px 12px;
    /* color: var(--primary-txt-color); */
    font-family: "GT";
    font-weight: 500;
    font-size: 1.5rem;

    @media only screen and (max-width: 540px) {
      font-size: 5vw;
    }
  }

  @media screen and (min-width: 960.999px) {
    display: none;
  }
`,Ch=yi.nav`
  width: 80px;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  color: var(--primary-txt-color);
  border-right: solid 2px var(--secondary-bg);
  background-color: var(--primary-bg);
  z-index: 1000;

  transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  ${e=>e.animateNavbar?gi`
          transform: translateX(0);
        `:gi`
          transform: translateX(-100%);
        `}

  /* @media screen and (max-width: 1280px) {
    width: 60px;
  } */
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-height: 768px) {
    font-size: 1.823vh;
  }
  @media screen and (max-height: 630px) {
    width: 13.3vh;
  }
`,Th=yi.ul`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* padding: 15px 0 15px 15px; */
  /* margin-top: 80px; */
  height: 100vh;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
`,Ph=yi.li`
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 960px) {
    display: none;
  }
`,Ih=yi.div`
  width: 100%;
  border-bottom: solid 2px var(--secondary-bg);
`,Bh=yi(qu.N_)`
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
    /* color: var(--fourth-txt-color); */
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
    /* .case2::before {
      content: "Riversol Challenge";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .case3::before {
      content: "Riversol Reinforce";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .case4::before {
      content: "Midnight Paloma";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    } */
    .wk::before {
      content: "Achieved Projects";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }

    /* @media screen and (max-width: 1280px) {
      height: 170px;
      transform: translateX(-3px);
    } */
    @media screen and (max-height: 935px) {
      height: 40vh;
    }
    @media screen and (max-height: 768px) {
      height: 30vh;
    }
  }
`,zh=yi.div`
  width: 100%;
  border-bottom: dotted 2px var(--secondary-bg);
  &&:last-child {
    border-bottom: none;
  }

  @media screen and (max-height: 673px) {
    border-bottom: none;
  }
`,Dh=yi.div`
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
`,_h=yi.a`
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
`,Mh=yi(qu.N_)`
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
`,Oh=yi.h4`
  color: ${e=>e.isInParallaxOrContact?"var(--fourth-txt-color)":"var(--primary-txt-color)"};
`,Nh=e=>{let{toggle:n,animateNavbar:i}=e;const[r,a]=(0,t.useState)(!1),[s,o]=(0,t.useState)(!1);(0,t.useEffect)((()=>{const e=()=>{const e=window.innerHeight,t=document.body.clientHeight;let n=.95;window.innerWidth<960&&(n=.99);const i=window.scrollY>=(t-e)*n;o(!!i),window.scrollY>=100?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);const l=()=>{qu.Nk.scrollToTop()};return(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Eh,{to:"/",onClick:l,children:(0,bi.jsx)(Oh,{isInParallaxOrContact:s,children:"Yuya Hashirizaki"})}),(0,bi.jsx)(Ch,{scrollNav:r,animateNavbar:i,children:(0,bi.jsxs)(Th,{children:[(0,bi.jsx)(Sh,{to:"/",onClick:l,children:(0,bi.jsx)(Oh,{isInParallaxOrContact:s,children:"Yuya Hashirizaki"})}),(0,bi.jsxs)(Ph,{children:[(0,bi.jsx)(Ih,{children:(0,bi.jsx)(Bh,{to:"home",onClick:n,smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"hm",children:"Home"})})}),(0,bi.jsx)(Ih,{children:(0,bi.jsx)(Bh,{className:"aboutSec",to:"about",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"ab",children:"About"})})}),(0,bi.jsx)(Ih,{children:(0,bi.jsx)(Bh,{className:"case1Sec",to:"caseStudy",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"case1",children:"Case Study"})})}),(0,bi.jsx)(Ih,{children:(0,bi.jsx)(Bh,{className:"worksSec",to:"works",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsx)("p",{className:"wk",children:"Works"})})}),(0,bi.jsxs)(Dh,{children:[(0,bi.jsx)(zh,{children:(0,bi.jsx)(_h,{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,bi.jsx)(yh,{})})}),(0,bi.jsx)(zh,{children:(0,bi.jsx)(_h,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,bi.jsx)(vh,{})})}),(0,bi.jsx)(zh,{children:(0,bi.jsx)(_h,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,bi.jsx)(wh,{})})}),(0,bi.jsx)(zh,{children:(0,bi.jsxs)(Mh,{className:"contactSec",to:"contact",smooth:!0,duration:700,spy:!0,exact:"true",offset:-200,activeClass:"active",children:[(0,bi.jsx)("img",{className:"contactImg",src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"}),"Contact"]})})]})]})]})})]})};var Rh=n(8487);const Lh=e=>{let{children:t,delay:n,margin:i="-20%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(qh,{isActive:!1,delay:n,children:t})})},Fh=e=>{let{children:t,delay:n,margin:i="-20%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(Jh,{isActive:!1,delay:n,children:t})})},Uh=e=>{let{children:t,delay:n,margin:i="-20%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(Zh,{isActive:!1,delay:n,children:t})})},Qh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(ep,{isActive:!1,delay:n,children:t})})},Yh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(tp,{isActive:!1,delay:n,children:t})})},Vh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(np,{isActive:!1,delay:n,children:t})})},Wh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(ip,{isActive:!1,delay:n,children:t})})},Hh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(rp,{isActive:!1,delay:n,children:t})})},Gh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(ap,{isActive:!1,delay:n,children:t})})},Xh=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(sp,{isActive:!1,delay:n,children:t})})},$h=e=>{let{children:t,delay:n,margin:i="-1%"}=e;return(0,bi.jsx)(Rh.A,{childPropsInView:{isActive:!0},intoViewMargin:i,children:(0,bi.jsx)(op,{isActive:!1,delay:n,children:t})})},Kh=yi.div`
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
`,qh=(yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateY(60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateY(0px);"}}
`,yi(Kh)`
  opacity: 0;
  transition: opacity 6s ease, transform 6s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateY(120px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateY(0px);"}}
`),Jh=(yi(Kh)`
  opacity: 0;
  transition: 1s opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateY(-60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateY(0px);"}}
`,yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateX(-60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateX(0px);"}}
`),Zh=(yi(Kh)`
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateX(-60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateX(0px);"}}
`,yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translateX(60px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translateX(0px);"}}
`),ep=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,tp=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,np=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.6s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,ip=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.9s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,rp=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,ap=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.4s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-150px, -150px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,sp=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(125px, 125px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,op=yi(Kh)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.1s cubic-bezier(0.25, 1, 0.5, 1);
  ${e=>{let{isActive:t}=e;return t&&"opacity: 1;"}}
  ${e=>{let{delay:t}=e;return t&&`transition-delay: ${t}ms;`}}
  transform: translate(-125px, -125px);
  ${e=>{let{isActive:t}=e;return t&&"transform: translate(0px, 0px);"}}
`,lp=yi.div`
  /* background: var(--primary-bg); */
  width: 100%;
  max-width: 1140px;
`,dp=yi.div`
  width: 100%;
`,cp=yi.div`
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
`,up=()=>{const[e,n]=(0,t.useState)(!1);let i=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{i.current.contains(e.target)||(n(!1),console.log(i.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,bi.jsx)(lp,{id:"Dropdown",ref:i,children:(0,bi.jsx)(dp,{children:(0,bi.jsx)(cp,{children:(0,bi.jsxs)("div",{className:"dropdown-container",children:[(0,bi.jsx)("div",{className:"dropdown-trigger",onClick:()=>{n(!e)},children:(0,bi.jsx)("span",{className:"dropdown-chip "+(e?"active":"inactive"),children:"Education\xa0"})}),(0,bi.jsx)("div",{className:"dropdown-contents "+(e?"active":"inactive"),children:(0,bi.jsxs)("ul",{children:[(0,bi.jsx)(r,{textTitle:"The Interaction Design Foundation",textContent:"Human-Computer Interaction, Behavioral Neuroscience",textDate:"2024"}),(0,bi.jsx)(r,{textTitle:"Cornerstone International Community College of Canada",textContent:"Web & Mobile App Development Diploma",textDate:"School of 2021"}),(0,bi.jsx)(r,{textTitle:"Osaka University of Arts",textContent:"Bachelor of Fine Arts",textDate:"School of 2009"})]})})]})})})});function r(e){return(0,bi.jsxs)("li",{children:[(0,bi.jsx)("p",{children:e.textTitle}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h4",{children:e.textContent}),(0,bi.jsx)("p",{children:e.textDate})]})]})}},hp=yi(ke)`
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
`,pp=yi.a`
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
`,fp=e=>{let{to:n,buttonLabel:i}=e;const[r,a]=(0,t.useState)(!1);let s=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{s.current.contains(e.target)||(a(!1),console.log(s.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,bi.jsx)(lp,{id:"Dropdown",ref:s,children:(0,bi.jsx)(dp,{children:(0,bi.jsx)(cp,{children:(0,bi.jsxs)("div",{className:"dropdown-container",children:[(0,bi.jsx)("div",{className:"dropdown-trigger",onClick:()=>{a(!r)},children:(0,bi.jsx)("span",{className:"dropdown-chip "+(r?"active":"inactive"),children:"Discipline\xa0"})}),(0,bi.jsx)("div",{className:"dropdown-contents "+(r?"active":"inactive"),children:(0,bi.jsxs)("ul",{children:[(0,bi.jsx)(o,{textTitle:"User Interface Design",textTag:"Design"}),(0,bi.jsx)(o,{textTitle:"User Experience Design",textTag:"Design / Analysis"}),(0,bi.jsx)(o,{textTitle:"Wireframing",textTag:"Design"}),(0,bi.jsx)(o,{textTitle:"Prototyping",textTag:"Design"}),(0,bi.jsx)(o,{textTitle:"Motion Prototype",textTag:"Design"}),(0,bi.jsx)(o,{textTitle:"Usability Testing",textTag:"Analysis"}),(0,bi.jsx)(o,{textTitle:"Data - Analysis",textTag:"Analysis"}),(0,bi.jsx)(o,{textTitle:"Design identity systems",textTag:"Design / Analysis"}),(0,bi.jsx)(o,{textTitle:"Information Architecture",textTag:"Design / Analysis"}),(0,bi.jsx)(o,{textTitle:"E-commerce Optimization",textTag:"Design / Analysis / Coding"}),(0,bi.jsx)(o,{textTitle:"Brand Development",textTag:"Branding"}),(0,bi.jsx)(o,{textTitle:"Agile Development",textTag:"Coding"}),(0,bi.jsx)(o,{textTitle:"Vector - illustration",textTag:"Design"}),(0,bi.jsx)(o,{textTitle:"Logo Design",textTag:"Design"}),(0,bi.jsx)(o,{textTitle:"Package Design",textTag:"Design"}),(0,bi.jsx)(o,{textTitle:"Check out how I enhanced UI at the beginning of my career !!",textTag:"Design"}),(0,bi.jsxs)(hp,{to:"dailyUiPage",smooth:!0,duration:500,spy:!0,exact:"true",offset:0,children:[(0,bi.jsx)(yh,{style:{marginRight:"6px"}}),"View Study"]})]})})]})})})});function o(e){return(0,bi.jsx)("li",{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h4",{children:e.textTitle}),(0,bi.jsx)("p",{children:e.textTag})]})})}},mp=()=>{const[e,n]=(0,t.useState)(!1);let i=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{i.current.contains(e.target)||(n(!1),console.log(i.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,bi.jsx)(lp,{id:"Dropdown",ref:i,children:(0,bi.jsx)(dp,{children:(0,bi.jsx)(cp,{children:(0,bi.jsxs)("div",{className:"dropdown-container",children:[(0,bi.jsx)("div",{className:"dropdown-trigger",onClick:()=>{n(!e)},children:(0,bi.jsx)("span",{className:"dropdown-chip "+(e?"active":"inactive"),children:"Software\xa0"})}),(0,bi.jsx)("div",{className:"dropdown-contents "+(e?"active":"inactive"),children:(0,bi.jsxs)("ul",{children:[(0,bi.jsx)(r,{textTitle:"Adobe CC",textTag:"Illustrator / Photoshop / XD / Bridge / InDesign / Premiere / After Effects"}),(0,bi.jsx)(r,{textTitle:"Figma"}),(0,bi.jsx)(r,{textTitle:"Sketch"}),(0,bi.jsx)(r,{textTitle:"InVision"}),(0,bi.jsx)(r,{textTitle:"VS Code"}),(0,bi.jsx)(r,{textTitle:"Wordpress"}),(0,bi.jsx)(r,{textTitle:"Webflow"}),(0,bi.jsx)(r,{textTitle:"Wix"}),(0,bi.jsx)(r,{textTitle:"Squarespace"}),(0,bi.jsx)(r,{textTitle:"Shopify"}),(0,bi.jsx)(r,{textTitle:"Replo Landing Page Designer"}),(0,bi.jsx)(r,{textTitle:"Miro"}),(0,bi.jsx)(r,{textTitle:"Trello"}),(0,bi.jsx)(r,{textTitle:"Notion"}),(0,bi.jsx)(r,{textTitle:"Click Up"}),(0,bi.jsx)(r,{textTitle:"Slack"}),(0,bi.jsx)(r,{textTitle:"Google",textTag:"Optimize / Tag Manager / Analytics"}),(0,bi.jsx)(r,{textTitle:"Hotjar"}),(0,bi.jsx)(r,{textTitle:"Microsoft Clarity"})]})})]})})})});function r(e){return(0,bi.jsx)("li",{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h4",{children:e.textTitle}),(0,bi.jsx)("p",{children:e.textTag})]})})}},gp=()=>{const[e,n]=(0,t.useState)(!1);let i=(0,t.useRef)();return(0,t.useEffect)((()=>{let e=e=>{i.current.contains(e.target)||(n(!1),console.log(i.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}})),(0,bi.jsx)(lp,{id:"Dropdown",ref:i,children:(0,bi.jsx)(dp,{children:(0,bi.jsx)(cp,{children:(0,bi.jsxs)("div",{className:"dropdown-container",children:[(0,bi.jsx)("div",{className:"dropdown-trigger",onClick:()=>{n(!e)},children:(0,bi.jsx)("span",{className:"dropdown-chip "+(e?"active":"inactive"),children:"Language\xa0"})}),(0,bi.jsx)("div",{className:"dropdown-contents "+(e?"active":"inactive"),children:(0,bi.jsxs)("ul",{children:[(0,bi.jsx)(r,{textTitle:"HTML",textTag:"Language"}),(0,bi.jsx)(r,{textTitle:"CSS",textTag:"Language"}),(0,bi.jsx)(r,{textTitle:"JavaScript",textTag:"Language"}),(0,bi.jsx)(r,{textTitle:"Liquid",textTag:"Shopify Template Language"}),(0,bi.jsx)(r,{textTitle:"React",textTag:"Library"}),(0,bi.jsx)(r,{textTitle:"Bootstrap",textTag:"Framework"}),(0,bi.jsx)(r,{textTitle:"Materialize",textTag:"Framework"}),(0,bi.jsx)(r,{textTitle:"SCSS / SASS",textTag:"Language"}),(0,bi.jsx)(r,{textTitle:"styled-components",textTag:"Library"})]})})]})})})});function r(e){return(0,bi.jsx)("li",{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h4",{children:e.textTitle}),(0,bi.jsx)("p",{children:e.textTag})]})})}},xp=yi.div`
  background: var(--index-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`,vp=yi.div`
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
`,yp=yi.div`
  padding-bottom: 2rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 2vw;
  }
`,wp=yi.img`
  width: 100%;
  display: block;
  height: auto;
  border: thick double var(--secondary-bg);
  border-radius: 15px;
`,bp=yi.div`
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
`,jp=yi.div`
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

  .fancy-font-body {
    font-family: "GT";
    font-weight: 500;
    color: var(--secondary-txt-color);
    /* padding-left: 0.3rem; */
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
`,Ap=yi.div`
  padding-bottom: 17rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 26.33vw;
  }
`,kp=(yi.div`
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
`,n.p+"static/media/headshot2023.a1503ae0a119f9d64104.png"),Sp=()=>(0,bi.jsx)(xp,{id:"about",children:(0,bi.jsxs)(bp,{children:[(0,bi.jsx)(Uh,{children:(0,bi.jsx)(vp,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"A little about"}),(0,bi.jsx)("h2",{className:"fancy-font",children:" ----- Me"})]})})}),(0,bi.jsx)(Fh,{children:(0,bi.jsx)(yp,{children:(0,bi.jsx)(wp,{src:kp})})}),(0,bi.jsx)(Uh,{children:(0,bi.jsxs)(jp,{children:[(0,bi.jsx)("div",{children:(0,bi.jsxs)("h2",{children:["I ",(0,bi.jsx)("span",{className:"fancy-font-title",children:"design "}),"solutions that address both\xa0",(0,bi.jsx)("span",{className:"fancy-font-title",children:"aesthetics "}),"and\xa0",(0,bi.jsx)("span",{className:"fancy-font-title",children:"business challenges."})]})}),(0,bi.jsx)("div",{className:"end-cap start-cap",children:(0,bi.jsx)("h4",{children:"I'm not your conventional designer crafting attractive interfaces. As a UX/UI & Brand Storytelling Designer, I immerse myself in business complexities, developing efficient solutions that extend beyond aesthetics to create genuine change."})}),(0,bi.jsx)("div",{className:"end-cap start-cap",children:(0,bi.jsx)("h3",{children:"Expertise in UX design"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h4",{children:"Quantitative and qualitative UX research and iterations are essential for shaping the customer base and ensuring that products are functional, visually appealing, and personalized to end-user needs. To facilitate this, I am committed to cultivating a supportive work culture built on strong communication and transparency across the entire team."})}),(0,bi.jsx)("div",{className:"end-cap start-cap",children:(0,bi.jsx)("h3",{children:"Empathy in UI Design"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h4",{children:"Designing with empathy is not easy, so I dedicate foundational steps in my human-centred design process to immerse myself in the user's world and craft solutions tailored to their genuine requirements."})}),(0,bi.jsx)("div",{className:"end-cap start-cap",children:(0,bi.jsx)("h3",{children:"Commitment"})}),(0,bi.jsx)("div",{className:"end-cap",children:(0,bi.jsxs)("h4",{children:["I am committed to approaching these elements with flexibility for every project and client. I deliver core user-centered solutions in",(0,bi.jsxs)("span",{className:"fancy-font-body",children:[" ",'"Design and Technology,']}),(0,bi.jsxs)("span",{className:"fancy-font-body",children:[" ","Branding and Websites,"," "]}),(0,bi.jsx)("span",{className:"fancy-font-body",children:'Simplicity and Sophistication"'}),"\xa0that captivate customers."]})})]})}),(0,bi.jsxs)(Ap,{children:[(0,bi.jsx)(Fh,{children:(0,bi.jsx)(up,{})}),(0,bi.jsx)(Fh,{children:(0,bi.jsx)(fp,{})}),(0,bi.jsx)(Fh,{children:(0,bi.jsx)(mp,{})}),(0,bi.jsx)(Fh,{children:(0,bi.jsx)(gp,{})})]})]})}),Ep=yi.div`
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
`,Cp=yi.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 100%;
`,Tp=yi(qu.N_)`
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
`;function Pp(e){return gh({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M277.375 85v259.704l119.702-119.702L427 256 256 427 85 256l29.924-29.922 119.701 118.626V85h42.75z"},child:[]}]})(e)}const Ip=()=>(0,bi.jsx)(Ep,{children:(0,bi.jsx)(Cp,{children:(0,bi.jsx)(Tp,{to:"larry",smooth:!0,duration:700,spy:!0,exact:"true",offset:0,activeClass:"active",children:(0,bi.jsxs)("div",{class:"banner banner-with-link","data-intersection-id":"banner-0",children:[(0,bi.jsxs)(Qh,{children:[(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,bi.jsxs)(Yh,{children:[(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,bi.jsxs)(Vh,{children:[(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,bi.jsxs)(Wh,{children:[(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,bi.jsxs)(Hh,{children:[(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"})]}),(0,bi.jsxs)(Gh,{children:[(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})}),(0,bi.jsx)("span",{class:"banner-label",style:{transform:"translate(0px, 0px)"},children:"WORKS"}),(0,bi.jsx)("span",{class:"banner-arrow",style:{transform:"translate(0px, 0px)"},children:(0,bi.jsx)(Pp,{})})]}),(0,bi.jsx)("div",{class:"banner-border",style:{transform:"translate(0px, 0px)"}})]})})})}),Bp={id:"burger-menu",darkBurger:!0},zp=yi.div`
  width: 100%;
  background: var(--index-bg);
  display: flex;
  justify-content: center;
`,Dp=yi.div`
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
    padding-top: ${e=>{let{paddingStart:t}=e;return t?"26.33vw;":"0"}};
    padding-bottom: ${e=>{let{paddingEnd:t}=e;return t?"26.33vw;":"0"}};
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px;
  }
`,_p=yi.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate1:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Mp=yi.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate2:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Op=yi.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate3:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Np=yi.div`
  width: 100%;
  padding: 24px;
  display: ${e=>{let{imageActivate4:t}=e;return t?"flex":"none"}};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`,Rp=yi.div`
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
`,Lp=(yi.img`
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
`,yi.div`
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
    @media only screen and (max-width: 1024px) {
      margin: 0 auto;
    }
  }
`),Fp=yi.div`
  display: flex;
`,Up=yi.div`
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
`,Qp=[{image:n(3216)},{image:n(2867)}],Yp=yi.div`
  .slider {
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1024px) {
      padding: 0 16.5vw;
    }

    @media only screen and (max-width: 540px) {
      padding: 0px;
    }
  }

  .image {
    width: auto;
    max-height: 700px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 960px) {
      border-radius: 10px;
    }

    @media only screen and (max-width: 540px) {
      width: 80%;
    }
  }

  .slide {
    opacity: 0;
    transform-origin: 93% 50%;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  .slide.active {
    opacity: 1;
    transform: scale(1);
    width: 100%;
    text-align: center;
  }
`,Vp=yi.img`
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
`,Wp=(yi.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .left-arrow {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    color: var(--primary-txt-color);
    margin: 24px 24px 0 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    @media only screen and (max-width: 1570px) {
      font-size: 3vw;
      margin: 1.6vw 1.6vw 0 0;
    }

    @media only screen and (min-width: 961px) {
      &:hover {
        animation: tilt-n-move-shaking 0.3s;
        animation-iteration-count: 5;
      }
    }

    @media only screen and (max-width: 1024px) {
      right: 19%;
      font-size: 4.7vw;
      margin: 2.35vw 4.5vw 0 0;
    }

    @media only screen and (max-width: 960px) {
      font-size: 5vw;
      margin: 2.5vw 4.3vw 0 0;
    }

    @media only screen and (max-width: 540px) {
      right: 0;
      font-size: 9.5vw;
      margin: 3vw 3vw 0 0;
    }
  }

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(2px, 2px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-2px, 2px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
`,()=>{const[e,n]=(0,t.useState)(0),[i,r]=(0,t.useState)(!1),a=(0,t.useRef)(null);return(0,bi.jsxs)(Yp,{children:[(0,bi.jsx)("div",{className:"slider",children:Qp.map(((t,n)=>(0,bi.jsx)("div",{className:n===e?"slide active":"slide",children:n===e&&(0,bi.jsx)(Vp,{src:t.image,alt:"slide",className:"image"})},n)))}),(0,bi.jsx)("section",{ref:a})]})}),Hp=[{image:n(6797)},{image:n(7592)}],Gp=()=>{const[e,n]=(0,t.useState)(0),[i,r]=(0,t.useState)(!1),a=(0,t.useRef)(null);return(0,bi.jsxs)(Yp,{children:[(0,bi.jsx)("div",{className:"slider",children:Hp.map(((t,n)=>(0,bi.jsx)("div",{className:n===e?"slide active":"slide",children:n===e&&(0,bi.jsx)(Vp,{src:t.image,alt:"slide",className:"image"})},n)))}),(0,bi.jsx)("section",{ref:a})]})},Xp=[{image:n(935)},{image:n(1809)}],$p=()=>{const[e,n]=(0,t.useState)(0),[i,r]=(0,t.useState)(!1),a=(0,t.useRef)(null);return(0,bi.jsxs)(Yp,{children:[(0,bi.jsx)("div",{className:"slider",children:Xp.map(((t,n)=>(0,bi.jsx)("div",{className:n===e?"slide active":"slide",children:n===e&&(0,bi.jsx)(Vp,{src:t.image,alt:"slide",className:"image"})},n)))}),(0,bi.jsx)("section",{ref:a})]})},Kp=[{image:n(7300)},{image:n(1231)}],qp=()=>{const[e,n]=(0,t.useState)(0),[i,r]=(0,t.useState)(!1),a=(0,t.useRef)(null);return(0,bi.jsxs)(Yp,{children:[(0,bi.jsx)("div",{className:"slider",children:Kp.map(((t,n)=>(0,bi.jsx)("div",{className:n===e?"slide active":"slide",children:n===e&&(0,bi.jsx)(Vp,{src:t.image,alt:"slide",className:"image"})},n)))}),(0,bi.jsx)("section",{ref:a})]})},Jp=e=>{let{name:t,to:n,title:i,tag:r,body:a,imageActivate1:s,imageActivate2:o,imageActivate3:l,imageActivate4:d,imageLeft:c,buttonLabel:u,paddingStart:h,paddingEnd:p}=e;return(0,bi.jsx)(zp,{name:t,children:(0,bi.jsxs)(Dp,{paddingStart:h,paddingEnd:p,imageLeft:c,children:[(0,bi.jsx)(_p,{imageActivate1:s,children:(0,bi.jsx)(Fh,{children:(0,bi.jsx)(Wp,{slides:Qp})})}),(0,bi.jsx)(Mp,{imageActivate2:o,children:(0,bi.jsx)(Uh,{children:(0,bi.jsx)(Gp,{slides:Hp})})}),(0,bi.jsx)(Op,{imageActivate3:l,children:(0,bi.jsx)(Fh,{children:(0,bi.jsx)($p,{slides:Xp})})}),(0,bi.jsx)(Np,{imageActivate4:d,children:(0,bi.jsx)(Uh,{children:(0,bi.jsx)(qp,{slides:Kp})})}),(0,bi.jsx)(Rp,{children:(0,bi.jsxs)(Lp,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:i})}),(0,bi.jsx)(Fp,{children:(0,bi.jsx)(Up,{children:(0,bi.jsx)("p",{className:"tagCopy",children:r})})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"body",children:a})}),(0,bi.jsx)(hp,{to:n,smooth:!0,duration:500,spy:!0,exact:"true",offset:0,children:u})]})})]})})},Zp=yi.div`
  background: var(--index-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`,ef=yi.div`
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
`,tf=yi.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 17rem;

  @media only screen and (max-width: 1340px) {
    margin: 0 30px 0 130px;
  }

  @media only screen and (max-width: 960px) {
    padding-top: 26.33vw;
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
`,nf=()=>(0,bi.jsx)(Zp,{children:(0,bi.jsx)(tf,{children:(0,bi.jsx)(Uh,{children:(0,bi.jsx)(ef,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Case Study"}),(0,bi.jsx)("h2",{className:"fancy-font",children:" ------- Latest practice"})]})})})})}),rf={name:"case1",to:"case1Page",title:"Cultivating Core User Empathy",tag:"Case Study 1",body:"Analyzing the factors that enhance user experience is a significant process before driving the car.",imageActivate1:!0,imageActivate2:!1,imageActivate3:!1,imageActivate4:!1,img:n(3216),alt:"Image",imageLeft:!0,paddingStart:!1,paddingEnd:!1,buttonLabel:"View Case Study 1"},af={name:"case2",to:"case2Page",title:"Resolving Design Challenges",tag:"Case Study 2",body:"Challenges are ever-present, and addressing issues comprehensively is a problem-solving.",imageActivate1:!1,imageActivate2:!0,imageActivate3:!1,imageActivate4:!1,img:n(7592),alt:"Image",imageLeft:!1,paddingStart:!0,paddingEnd:!1,buttonLabel:"View Case Study 2"},sf={name:"case3",to:"case3Page",title:"Enhancing Website Profitability",tag:"Case Study 3",body:"Product appeal and profitability improve through continuous enhancements and ongoing analysis.",imageActivate1:!1,imageActivate2:!1,imageActivate3:!0,imageActivate4:!1,img:n(1809),alt:"Image",imageLeft:!0,paddingStart:!0,paddingEnd:!1,buttonLabel:"View Case Study 3"},of={name:"case4",to:"case4Page",title:"Midnight Paloma",tag:"Case Study 4",body:"Midnight Paloma website was a long overdue revamp but has committed to completing it within a tight timeframe.",imageActivate1:!1,imageActivate2:!1,imageActivate3:!1,imageActivate4:!0,img:n(1231),alt:"Image",imageLeft:!1,paddingStart:!0,paddingEnd:!0,buttonLabel:"View Case Study 4"},lf={head:"Works",name:"larry",to:"larryPage",title:"Larry",number:"01"},df={name:"vector",to:"vectorPage",title:"Vector",number:"02"},cf={name:"daruma",to:"darumaPage",title:"Daruma",number:"03"},uf={name:"portfolio",to:"portfolioPage",title:"Portfolio",number:"04"},hf=yi.div`
  width: 100%;
  background: var(--index-bg);
  display: block;
  padding: 0.5rem;
  border-bottom: 2px solid red;
`,pf=yi.div`
  max-width: 1140px;
  margin: 0 auto;
`,ff=yi.div`
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
`,mf=yi.div`
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
`,gf=yi.div`
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
`,xf=yi(ke)`
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
`,vf=e=>{let{name:t,to:n,head:i,title:r,number:a}=e;return(0,bi.jsx)(hf,{name:t,children:(0,bi.jsx)(Fh,{children:(0,bi.jsx)(pf,{children:(0,bi.jsxs)(ff,{children:[(0,bi.jsx)(mf,{children:(0,bi.jsx)("p",{children:i})}),(0,bi.jsx)(gf,{children:a}),(0,bi.jsx)(xf,{to:n,children:r})]})})})})},yf=yi.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  overflow: hidden;
  background-color: var(--secondary-bg);
`,wf=yi.div`
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
`,bf=yi.div`
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
`,jf=yi.div`
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
`,Af=()=>(0,bi.jsx)(yf,{id:"contact",children:(0,bi.jsxs)(wf,{children:[(0,bi.jsxs)(bf,{children:[(0,bi.jsxs)("p",{children:[(0,bi.jsx)("img",{src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"}),"Ready to start a project?"]}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("a",{target:"_blank",href:"mailto:hashirizaki61@gmail.com",children:(0,bi.jsx)("p",{className:"contact",children:"Contact"})}),(0,bi.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/yuya-hashirizaki/",children:(0,bi.jsx)("p",{className:"contact",children:"Linkedin"})})]})]}),(0,bi.jsxs)(jf,{children:[(0,bi.jsx)("div",{className:"contactImg",children:(0,bi.jsx)("img",{src:"https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"})}),(0,bi.jsx)("p",{children:"Ready to start a project?"}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("a",{target:"_blank",href:"mailto:hashirizaki61@gmail.com",children:(0,bi.jsx)("p",{className:"contact",children:"Contact"})}),(0,bi.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/yuya-hashirizaki/",children:(0,bi.jsx)("p",{className:"contact",children:"Linkedin"})})]})]})]})}),kf=yi.div`
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
    border-radius: 10%;
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
`,Sf=yi.div`
  max-width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 44px;
`,Ef=yi.a`
  color: var(--primary-bg);
  font-size: 24px;
  transition: 0.3s ease;

  &:hover {
    padding: 0 0 16px 0;
  }
`,Cf=()=>{const e=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1),r=()=>{const t=window.scrollY,n=e.current;if(n){const e=n.offsetTop;t>=e&&console.log("Parallax element reached the top of the viewport");n.querySelectorAll(".parallax-layer").forEach(((n,i)=>{const r=(t-e)*(1*(i+1));n.style.transform=`translateY(${r}px)`})),i(t>100&&t<100)}};return(0,t.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),(0,bi.jsx)(kf,{id:"parallaxLg",ref:e,children:(0,bi.jsxs)("div",{className:"parallax-wrapper",children:[(0,bi.jsx)("div",{className:"parallax-layer layer1 "+(n?"act":""),children:(0,bi.jsx)("p",{className:"first-copy",children:"Let's Make"})}),(0,bi.jsx)("div",{className:"parallax-layer layer2",children:(0,bi.jsx)("p",{children:"Something"})}),(0,bi.jsx)("div",{className:"parallax-layer layer3",children:(0,bi.jsx)("div",{className:"vertical",children:(0,bi.jsx)("span",{className:"moon"})})}),(0,bi.jsx)("div",{className:"parallax-layer layer4",children:(0,bi.jsx)("h3",{children:"Thank you."})}),(0,bi.jsx)("div",{className:"parallax-layer layer5",children:(0,bi.jsxs)(Sf,{children:[(0,bi.jsx)(Ef,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,bi.jsx)(wh,{})}),(0,bi.jsx)(Ef,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,bi.jsx)(vh,{})}),(0,bi.jsx)(Ef,{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,bi.jsx)(yh,{})})]})})]})})},Tf=yi.div`
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
`,Pf=yi.div`
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
`,If=()=>{const e=(0,t.useRef)(null),[n,i]=(0,t.useState)(!1),r=()=>{const t=window.scrollY,n=e.current;if(n){const e=n.offsetTop;n.querySelectorAll(".parallax-layer").forEach(((n,i)=>{const r=(t-e)*(.5*(i+1));n.style.transform=`translateY(${r}px)`})),i(t>100&&t<100)}};return(0,t.useEffect)((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),(0,bi.jsxs)(Tf,{id:"parallaxSm",ref:e,children:[(0,bi.jsx)(Pf,{className:"parallax-layer layer1 "+(n?"act":""),children:(0,bi.jsx)("p",{className:"first-copy",children:"Let's Make"})}),(0,bi.jsx)(Pf,{className:"parallax-layer layer2",children:(0,bi.jsx)("p",{children:"Something"})}),(0,bi.jsx)(Pf,{className:"parallax-layer layer3",children:(0,bi.jsx)("p",{className:"moon",children:"Amazing"})}),(0,bi.jsx)(Pf,{className:"parallax-layer layer4",children:(0,bi.jsx)("p",{className:"closing",children:"Thank you."})}),(0,bi.jsx)(Pf,{className:"parallax-layer layer5",children:(0,bi.jsxs)("div",{className:"social-icons",children:[(0,bi.jsx)("a",{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,bi.jsx)(wh,{})}),(0,bi.jsx)("a",{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"behance",children:(0,bi.jsx)(vh,{})}),(0,bi.jsx)("a",{href:"https://dribbble.com/yuya-hashirizaki",target:"_blank","aria-label":"dribbble",children:(0,bi.jsx)(yh,{})})]})})]})},Bf=yi.div`
  width: 100%;

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
`,zf=yi.div`
  width: 100%;
  z-index: 1;
`,Df=yi.section`
  position: relative;
  width: 100%;
  //v1v2//
  /* height: 100h; */
  //v3//
  height: 70vh;
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
`,_f=()=>(0,bi.jsx)(Bf,{children:(0,bi.jsx)(zf,{children:(0,bi.jsx)(Df,{children:(0,bi.jsxs)("div",{className:"txtCenter",children:[(0,bi.jsx)($h,{children:(0,bi.jsx)("p",{children:"Let's Make"})}),(0,bi.jsx)(Xh,{children:(0,bi.jsx)("p",{children:"Someting"})}),(0,bi.jsx)($h,{children:(0,bi.jsx)("p",{className:"moon",children:"Amazing"})}),(0,bi.jsx)(Lh,{children:(0,bi.jsx)("span",{})})]})})})}),Mf=yi.footer`
  background-color: var(--secondary-bg);

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    display: block;
  }
`,Of=yi.div`
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
`,Nf=yi.div`
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
`,Rf=yi.h1`
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
`,Lf=yi.section`
  max-width: 1000px;
  margin-bottom: 30px;
  width: 100%;
`,Ff=yi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 5px auto 0 auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,Uf=yi(ke)`
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
`,Qf=(yi.small`
  color: var(--fourth-txt-color);
  justify-content: start;
  margin-bottom: 16px;
`,yi.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: auto;
    max-width: 240px;
    margin-top: 24px;
  }
`),Yf=yi.a`
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
`,Vf=()=>(0,bi.jsx)("div",{children:(0,bi.jsx)(Mf,{id:"footer",children:(0,bi.jsxs)(Of,{children:[(0,bi.jsx)(Nf,{children:(0,bi.jsx)(Rf,{children:"Thank you."})}),(0,bi.jsx)(Lf,{children:(0,bi.jsxs)(Ff,{children:[(0,bi.jsx)(Uf,{to:"/",onClick:()=>{qu.Nk.scrollToTop()},children:"Yuya Hashirizaki"}),(0,bi.jsxs)(Qf,{children:[(0,bi.jsx)(Yf,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:(0,bi.jsx)(yh,{})}),(0,bi.jsx)(Yf,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"Instagram",children:(0,bi.jsx)(vh,{})}),(0,bi.jsx)(Yf,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,bi.jsx)(wh,{})})]})]})})]})})}),Wf=()=>{const[e,n]=(0,t.useState)(!1),[i,r]=(0,t.useState)(!1),[a,s]=(0,t.useState)(!1),o=()=>{n(!e)};return(0,t.useEffect)((()=>{const e=()=>{const e=document.getElementById("home");if(e){e.getBoundingClientRect().bottom<=0?(r(!0),s(!0)):s(!1)}else console.warn("Element with ID 'home' not found.")};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(bh,{isOpen:e,toggle:o,...Bp}),(0,bi.jsx)("div",{id:"home",children:(0,bi.jsx)(Ku,{})}),i&&(0,bi.jsx)(Nh,{toggle:o,animateNavbar:a}),(0,bi.jsx)(Sp,{}),(0,bi.jsx)(Ip,{}),(0,bi.jsxs)("div",{name:"caseStudy",children:[(0,bi.jsx)(nf,{}),(0,bi.jsx)(Jp,{...rf}),(0,bi.jsx)(Jp,{...af}),(0,bi.jsx)(Jp,{...sf}),(0,bi.jsx)(Jp,{...of})]}),(0,bi.jsxs)("div",{name:"works",children:[(0,bi.jsx)(vf,{...lf}),(0,bi.jsx)(vf,{...df}),(0,bi.jsx)(vf,{...cf})]}),(0,bi.jsx)(vf,{...uf}),(0,bi.jsxs)("div",{name:"contact",children:[(0,bi.jsx)(Af,{}),(0,bi.jsx)(If,{}),(0,bi.jsx)(_f,{}),(0,bi.jsx)(Cf,{})]}),(0,bi.jsx)(Vf,{})]})};function Hf(){const{pathname:e}=q();return(0,t.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}const Gf=()=>{const[e,n]=(0,t.useState)(""),[i,r]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=()=>{const e=window.scrollY;r(e>1600)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,bi.jsx)("div",{className:"cta-container "+(i?"visible":"unvisible"),children:(0,bi.jsx)("button",{className:"cta-button",smooth:!0,duration:500,spy:!0,exact:"true",offset:0,onClick:()=>{const e=prompt("Please enter password");/^\W+$/.test(e)?alert("Invalid input. Please enter a valid password."):null!==e&&(window.location.href=`${e}`)},children:"Password"})})},Xf=yi.div`
  position: relative;
  z-index: 10001;
`,$f=yi(ke)`
  text-decoration: none;
  font-family: "GT";
  font-size: 2rem;
  font-weight: 500;
  display: block;
  color: var(--primary-txt-color);
  background-color: var(--primary-bg);
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 25px;
  border: solid 2px var(--secondary-bg);
  border-radius: 50px;
  position: fixed;
  top: 2.5rem;
  right: 3rem;
  transition: all 1s linear 0s;
  cursor: pointer;

  &:hover {
    animation: tilt-n-move-shaking 0.3s;
    animation-iteration-count: 10;
  }

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

  @media screen and (max-width: 960px) {
    font-size: 24px;
    position: fixed;
    top: 1.5rem;
    right: 2rem;
  }

  @media screen and (max-width: 540px) {
    font-size: 17px;
    /* top: 1rem; */
    right: 1.5rem;
  }
`,Kf=yi.div`
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
    color: var(--secondary-txt-color);
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
`,qf=yi.div`
  max-width: 2560px;
  margin: 0 30px 0 30px;
  overflow: hidden;

  @media only screen and (max-width: 960px) {
    margin: 0 15px 0 15px;
  }
`,Jf=yi.div`
  padding: 110px 0;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Zf=yi.div`
  padding: 110px 0;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding: 0 0 11.5vw 0;
  }
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,em=yi.div`
  display: flex;
  flex-wrap: wrap;
`,tm=yi.div`
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`,nm=yi.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`,im=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,rm=yi.div`
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
`,am=yi.div`
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
`,sm=yi.div`
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
`,om=yi.div`
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
`,lm=yi.div`
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
`,dm=yi.div`
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
`,cm=yi.div`
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
`,um=yi.div`
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
`,hm=yi.div`
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
`,pm=yi.div`
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
`,fm=yi.div`
  margin: 30px 0 60px 0;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 960px) {
    margin-top: 15px;
  }
  @media only screen and (max-width: 540px) {
    margin-bottom: 16px;
  }
`,mm=yi.div`
  display: flex;
  flex-wrap: wrap;
`,gm=yi.div`
  max-width: 1756px;
`,xm=yi.div`
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
`,vm=yi.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 34px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 960px) {
    margin-bottom: 6px;
  }
`,ym=yi.div`
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
`,wm=yi.div`
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
`,bm=yi.p`
  margin-bottom: 24px;

  @media only screen and (max-width: 540px) {
    margin-bottom: 12px;
  }
`,jm=yi.p`
  margin-bottom: 6px;

  @media only screen and (max-width: 540px) {
    margin-bottom: 3px;
  }
`,Am=yi.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  margin-bottom: auto;

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
`,km=yi.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  margin-bottom: auto;

  @media only screen and (max-width: 1024px) {
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 767px) {
    min-height: 270px;
    object-fit: cover;
  }
  @media only screen and (max-width: 540px) {
    /* border: solid 0.5px var(--secondary-bg); */
    border-radius: 6px;
  }
`,Sm=yi.img`
  max-width: 80%;
  margin-top: 34px;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    max-width: 40%;
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 540px) {
    max-width: 60%;
    /* border: solid 0.5px var(--secondary-bg); */
    border-radius: 10px;
  }
`,Em=yi.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 50%;

  @media only screen and (max-width: 1024px) {
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 540px) {
    /* border: solid 0.5px var(--secondary-bg); */
  }
`,Cm=yi.img`
  width: clamp(45px, 20%, 130px);
  margin-bottom: 1.45vw;
  border-radius: 50%;
  border: solid 2px var(--secondary-bg);

  @media only screen and (max-width: 1024px) {
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 540px) {
    /* border: solid 0.5px var(--secondary-bg); */
  }
`,Tm=yi.img`
  width: 100%;
  border-radius: 50%;
`,Pm=yi.div`
  margin-bottom: 30px;
  padding-top: 110px;

  @media only screen and (max-width: 960px) {
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 14.8vw;
  }
`,Im=yi.video`
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
`,Bm=yi.video`
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
`,zm=yi.div`
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
`,Dm=yi.div`
  filter: blur(1.5rem);
  padding: 5%;
`,_m=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Mm=yi.div`
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
`,Om=yi.div`
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
`,Nm=(yi.div`
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
`,yi.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`,yi.div`
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
`,yi.div`
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
`,yi.div`
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
`,yi.div`
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
`,yi.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`),Rm=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Lm=(yi.div`
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
`,yi.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,n.p+"static/media/case1_hero.8b83a9ddc909a05c7968.png"),Fm=n.p+"static/media/case1_closing.3cc4aed0b930417c30de.png",Um=n.p+"static/media/case1_research.13cff8e14347a2c9cdb3.png",Qm=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:Lm,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Data - Analysis"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Information Architecture"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Brand Development"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"I\u2019ve been dedicated to problem-solving for RMDY, which comprises two brands Riversol Skin Care Solutions and Midnight Paloma."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,bi.jsx)(_m,{children:(0,bi.jsxs)(Mm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Riversol was established by board-certified dermatologist Dr. Jason Rivers, following over 20 years of clinical dermatology experience, to provide a safe skincare solution."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"This specializes in providing anti-aging solutions for individuals with sensitive skin and is committed to assisting anyone with skin-related concerns through its product offerings."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"The company\u2019s primary method for expanding its business has been a commitment to providing free products to individuals who may potentially become our customers through our free sample program. This initiative is aimed at introducing dependable, high-quality products and showcasing the value of the company to those in need of support."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"My assigned responsibility involves enhancing the quality of the website and all digital platforms associated with the free sample program to contribute to the company\u2019s overall profitability."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"To start, I\u2019ve strived to identify essential factors for enhancing the performance of our website and all digital platforms while fostering seamless communication within the team."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"It has been challenging to maintain a consistent UI, as it often requires a significant amount of time to establish and implement rules. Additionally, we have yet to define clear goals for guiding our teams toward our primary objectives."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Thoroughly clarifying every aspect, I created a robust foundational design system, integrating comprehensive UI/UX principles."})})]})}),(0,bi.jsxs)(Dm,{children:[(0,bi.jsx)(Nm,{children:(0,bi.jsx)(Rm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"If I were given just one hour to address a problem, I'd invest as much as two-thirds of that time in thoroughly understanding and defining the problem."})})})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Um,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"User Research"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"In our pursuit of designing user-centric experiences, I prioritize User Research, which involves delving into user behaviors, uncovering their needs, and analyzing their motivations through various observations, task analysis, and valuable feedback methodologies."}),(0,bi.jsx)("p",{children:"Our collaboration with SplitBase has enabled us to conduct a comprehensive survey, and in our qualitative analysis phase, we engaged in insightful interviews with numerous consumers who have made purchases of our products."})]})]})})]}),(0,bi.jsx)(Om,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Insights:"}),(0,bi.jsx)("p",{children:"The survey proved invaluable in gaining a profound understanding of our users, pinpointing their primary pain points and aspirations. It allowed me to quantify the proportion of users exhibiting genuine interest in our products."}),(0,bi.jsx)("p",{children:"Analyzing the daily skincare challenges faced by these users served as a wellspring of inspiration, propelling me to ideate and devise optimal design solutions."})]})})})]})]}),(0,bi.jsx)(Gf,{}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:Fm,id:""})})]})]})}),Ym=yi.footer`
  background-color: var(--secondary-bg);

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    display: block;
  }
`,Vm=yi.footer`
  background-color: var(--secondary-bg);

  @media only screen and (max-width: 960px) {
    display: none;
  }
`,Wm=yi.div`
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
`,Hm=yi.div`
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
`,Gm=yi.h1`
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
`,Xm=yi.section`
  max-width: 1000px;
  margin-bottom: 30px;
  width: 100%;
`,$m=yi.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 5px auto 0 auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`,Km=yi(ke)`
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
`,qm=(yi.small`
  color: var(--fourth-txt-color);
  justify-content: start;
  margin-bottom: 16px;
`,yi.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: auto;
    max-width: 240px;
    margin-top: 24px;
  }
`),Jm=yi.a`
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
`,Zm=()=>{const e=()=>{qu.Nk.scrollToTop()};return(0,bi.jsxs)("div",{children:[(0,bi.jsx)(Ym,{id:"footer",children:(0,bi.jsxs)(Wm,{children:[(0,bi.jsx)(Hm,{children:(0,bi.jsx)(Gm,{children:"Thank you."})}),(0,bi.jsx)(Xm,{children:(0,bi.jsxs)($m,{children:[(0,bi.jsx)(Km,{to:"/",onClick:e,children:"Yuya Hashirizaki"}),(0,bi.jsxs)(qm,{children:[(0,bi.jsx)(Jm,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:(0,bi.jsx)(yh,{})}),(0,bi.jsx)(Jm,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"Instagram",children:(0,bi.jsx)(vh,{})}),(0,bi.jsx)(Jm,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,bi.jsx)(wh,{})})]})]})})]})}),(0,bi.jsx)(Vm,{id:"footer",children:(0,bi.jsxs)(Wm,{children:[(0,bi.jsx)(Hm,{children:(0,bi.jsx)(Gm,{children:"Thank you."})}),(0,bi.jsx)(Xm,{children:(0,bi.jsxs)($m,{children:[(0,bi.jsx)(Km,{to:"/",onClick:e,children:"Yuya Hashirizaki"}),(0,bi.jsxs)(qm,{children:[(0,bi.jsx)(Jm,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:(0,bi.jsx)(yh,{})}),(0,bi.jsx)(Jm,{href:"https://www.behance.net/yuyahashirizaki",target:"_blank","aria-label":"Instagram",children:(0,bi.jsx)(vh,{})}),(0,bi.jsx)(Jm,{href:"https://www.linkedin.com/in/yuya-hashirizaki",target:"_blank","aria-label":"linkedIn",children:(0,bi.jsx)(wh,{})})]})]})})]})})]})},eg=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(Qm,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),tg=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,ng=yi.div`
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
`,ig=yi.div`
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
`,rg=yi.div`
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
`,ag=yi.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`,sg=yi.div`
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
`,og=yi.div`
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
`,lg=yi.div`
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
`,dg=yi.div`
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
`,cg=yi.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,ug=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,hg=yi.div`
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
`,pg=yi.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,fg=n.p+"static/media/Cathy.214a54490147d44fa818.png",mg=n.p+"static/media/Allison.1fbd9514418faaf10868.png",gg=n.p+"static/media/Compatitor_LA_ROCHE_POSAY.57ed3229f4d59516d1fc.png",xg=n.p+"static/media/Compatitor_NEOSTRATA.e15f293123d0b7a6a1d2.png",vg=n.p+"static/media/Compatitor_PERBLLE.9dbb21098c90ff71162a.png",yg=n.p+"static/media/Compatitor_SOLVADERM.6907517fb093aa008c85.png",wg=n.p+"static/media/Compatitor_City_Beauty.acf94a6d3552a335d727.png",bg=n.p+"static/media/case1_insert.f904f6d455ecb20713f1.png",jg=n.p+"static/media/case1_journey.765f24fa6c880e5bc05d.png",Ag=n.p+"static/media/case1_architecture.4d8c3b8f63f967e7abc4.png",kg=n.p+"static/media/case1_flow.2e139695b98d81e2f9d8.png",Sg=n.p+"static/media/case1_overview.f6712f540c4569fdaed6.png",Eg=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:Lm,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Data - Analysis"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Information Architecture"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Brand Development"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"I\u2019ve been dedicated to problem-solving for RMDY, which comprises two brands Riversol Skin Care Solutions and Midnight Paloma."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,bi.jsx)(tg,{children:(0,bi.jsxs)(ng,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Riversol was established by board-certified dermatologist Dr. Jason Rivers, following over 20 years of clinical dermatology experience, to provide a safe skincare solution."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"This specializes in providing anti-aging solutions for individuals with sensitive skin and is committed to assisting anyone with skin-related concerns through its product offerings."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"The company\u2019s primary method for expanding its business has been a commitment to providing free products to individuals who may potentially become our customers through our free sample program. This initiative is aimed at introducing dependable, high-quality products and showcasing the value of the company to those in need of support."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"My assigned responsibility involves enhancing the quality of the website and all digital platforms associated with the free sample program to contribute to the company\u2019s overall profitability."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"To start, I\u2019ve strived to identify essential factors for enhancing the performance of our website and all digital platforms while fostering seamless communication within the team."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"It has been challenging to maintain a consistent UI, as it often requires a significant amount of time to establish and implement rules. Additionally, we have yet to define clear goals for guiding our teams toward our primary objectives."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Thoroughly clarifying every aspect, I created a robust foundational design system, integrating comprehensive UI/UX principles."})})]})}),(0,bi.jsx)(cg,{children:(0,bi.jsx)(ug,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"If I were given just one hour to address a problem, I'd invest as much as two-thirds of that time in thoroughly understanding and defining the problem."})})})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Um,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"User Research"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"In our pursuit of designing user-centric experiences, I prioritize User Research, which involves delving into user behaviors, uncovering their needs, and analyzing their motivations through various observations, task analysis, and valuable feedback methodologies."}),(0,bi.jsx)("p",{children:"Our collaboration with SplitBase has enabled us to conduct a comprehensive survey, and in our qualitative analysis phase, we engaged in insightful interviews with numerous consumers who have made purchases of our products."})]})]})})]}),(0,bi.jsx)(ig,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Insights:"}),(0,bi.jsx)("p",{children:"The survey proved invaluable in gaining a profound understanding of our users, pinpointing their primary pain points and aspirations. It allowed me to quantify the proportion of users exhibiting genuine interest in our products."}),(0,bi.jsx)("p",{children:"Analyzing the daily skincare challenges faced by these users served as a wellspring of inspiration, propelling me to ideate and devise optimal design solutions."})]})})})]}),(0,bi.jsxs)(rg,{children:[(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"User Personas"}),(0,bi.jsx)("p",{children:"I utilized the survey findings to craft user personas, laying the foundation for the project ahead."}),(0,bi.jsx)("p",{children:"I utilized the survey findings to craft user personas, laying the foundation for the project ahead."})]})}),(0,bi.jsxs)(ag,{children:[(0,bi.jsx)(um,{children:(0,bi.jsx)(Sm,{src:fg,id:""})}),(0,bi.jsx)(um,{children:(0,bi.jsxs)(hm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Cathy - 60 year old with sensitive skin"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Cathy has had sensitive skin all her life, forcing her into having to understand good skincare at a very early age. Finding products that work without a reaction to her dry, reactive skin has been a difficult process \u2013 but something she\u2019s come to terms with, trying every product in every price range. Since finding Riversol, she\u2019s narrowed down her routine, and has freed up storage space in her bathroom because she no longer holds onto the graveyard of skincare that didn\u2019t work."})})]})})]}),(0,bi.jsxs)(ag,{children:[(0,bi.jsx)(um,{children:(0,bi.jsxs)(hm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Allison - 70 year old who wants to look as young as she feels"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Allison is no stranger to the clich\xe9 of wanting to look younger than she feels. She\u2019s a relatively active and healthy person \u2013 but just wishes the lines on her face and neck never had to happen. Allison spent a lot of her younger years sunbathing and is now looking to correct the damage caused. Dark spots, lines, and general aging has her feeling less confident than usual. Her best friend is a breast cancer survivor who discovered Riversol through necessity \u2013 the only products that would help her skin after chemotherapy \u2013 and as soon as she told Allison about the sampler, she had to try it. Since then, she\u2019s been hooked."})})]})}),(0,bi.jsx)(um,{children:(0,bi.jsx)(Sm,{src:mg,id:""})})]})]}),(0,bi.jsxs)(sg,{children:[(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Empathy Map"}),(0,bi.jsx)("p",{children:"The empathy map serves as a collaborative tool that allows design teams to cultivate a deeper understanding of their customers. It is particularly useful for representing and empathizing with distinct user groups or customer segments."})]})}),(0,bi.jsxs)(og,{children:[(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"empathy-border",children:[(0,bi.jsx)("p",{children:"Says:"}),(0,bi.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"}),(0,bi.jsx)("p",{children:"\u2022 My daily routine is unstable"}),(0,bi.jsx)("p",{children:"\u2022 I don\u2019t have time to go to the store"}),(0,bi.jsx)("p",{children:"\u2022 I don\u2019t know how to take care of my skin"}),(0,bi.jsx)("p",{children:"\u2022 My sensitivities and allergies prevent buying products"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"empathy-border",children:[(0,bi.jsx)("p",{children:"Thinks:"}),(0,bi.jsx)("p",{children:"\u2022 I should try skincare products"}),(0,bi.jsx)("p",{children:"\u2022 I should prevent factor of skincare troubles"}),(0,bi.jsx)("p",{children:"\u2022 I should take care of my lifestyle"}),(0,bi.jsx)("p",{children:"\u2022 I should have a better routine"}),(0,bi.jsx)("p",{children:"\u2022 I should go to the skincare workshop"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"empathy-border",children:[(0,bi.jsx)("p",{children:"Does:"}),(0,bi.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"}),(0,bi.jsx)("p",{children:"\u2022 I try to see a recurring dermatologist"}),(0,bi.jsx)("p",{children:"\u2022 Pays for a subscription to find solutions but not help"}),(0,bi.jsx)("p",{children:"\u2022 I always buy different products"}),(0,bi.jsx)("p",{children:"\u2022 I try to ask products reputation people who are familiar with it"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"empathy-border",children:[(0,bi.jsx)("p",{children:"Feels:"}),(0,bi.jsx)("p",{children:"\u2022 Drained due to bad overall factors"}),(0,bi.jsx)("p",{children:"\u2022 I gave up finding a product due to sensitivities and allergies"}),(0,bi.jsx)("p",{children:"\u2022 I frustrated for finding all the things consuming time"}),(0,bi.jsx)("p",{children:"\u2022 Never seen ideal products for anti-aging"}),(0,bi.jsx)("p",{children:"\u2022 Sensitive skin products make more trouble my skin"})]})})})]})]}),(0,bi.jsx)(lg,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Competitor Analysis"}),(0,bi.jsxs)(dg,{children:[(0,bi.jsx)("div",{className:"image",children:(0,bi.jsx)(Em,{src:gg,id:""})}),(0,bi.jsx)("div",{className:"image",children:(0,bi.jsx)(Em,{src:xg,id:""})}),(0,bi.jsx)("div",{className:"image",children:(0,bi.jsx)(Em,{src:vg,id:""})}),(0,bi.jsx)("div",{className:"image",children:(0,bi.jsx)(Em,{src:yg,id:""})}),(0,bi.jsx)("div",{className:"image",children:(0,bi.jsx)(Em,{src:wg,id:""})})]}),(0,bi.jsx)("p",{children:"Through hands-on exploration of our competitors\u2019 websites and apps and an extensive review of Google feedback, I identified significant challenges and uncovered prevalent user issues."}),(0,bi.jsxs)("div",{className:"analysis-lists",children:[(0,bi.jsx)("p",{children:"\u2022 Clutter UI"}),(0,bi.jsx)("p",{children:"\u2022 Difficult to find the customer\u2019s type of issue"}),(0,bi.jsx)("p",{children:"\u2022 Overwhelming visuals"}),(0,bi.jsx)("p",{children:"\u2022 Confusing content placement"}),(0,bi.jsxs)("p",{children:["\u2022 Being hard to discover products along with your needs"," "]}),(0,bi.jsx)("p",{children:"\u2022 Products user guide issue"}),(0,bi.jsx)("p",{children:"\u2022 Complication of applying reward"}),(0,bi.jsx)("p",{children:"\u2022 Unclear method to apply seasonal rewards"}),(0,bi.jsx)("p",{children:"\u2022 Cart problems when combined with your rewards"}),(0,bi.jsx)("p",{children:"\u2022 Basic payment anxiety caused by unclear steps"})]})]})})}),(0,bi.jsx)(cg,{children:(0,bi.jsx)(ug,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"In-depth research is essential because it forms the foundation of informed design decisions."})})})}),(0,bi.jsxs)(hg,{children:[(0,bi.jsx)(pg,{children:(0,bi.jsx)(Sm,{src:bg,id:""})}),(0,bi.jsx)(cm,{children:(0,bi.jsx)("p",{children:"Building on the insights gained from our research, I identified critical factors that compelled us to adopt a different approach, allowing us to continue progressing with the project."})})]}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:jg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"User Journey"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"The user journey, often represented through a visual journey map, illustrates the sequential path a person takes while interacting with a product, service, or brand. It encompasses the stages of discovery, the decision-making process regarding whether to make a purchase."})})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(nm,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Ag,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Information Architecture"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Effective design, when executed, seamlessly integrates with the user experience, becoming invisible. It\u2019s only in cases of poor design that its presence becomes noticeable. Information architecture plays a crucial role in ensuring a smooth and user-friendly experience."}),(0,bi.jsx)("p",{children:"This not only enhances the user experience but also minimizes the risk of costly redesigns and ensures that our product or interface is more likely to succeed in the market."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:kg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"User Flow"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"The user flow outlines the journey a user takes from the moment they launch the application to exploring all website functionalities and performing various actions."})})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(nm,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Sg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Branding Style Guide"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"A brand style guide dictates the composition, design principles, and overall visual identity of a company\u2019s branding."}),(0,bi.jsx)("p",{children:"My role, which primarily centers on digital product design, played a pivotal role in unifying and enhancing the UI/UX understanding across teams."})]})]})})]})}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:Fm,id:""})})]})]})}),Cg=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(Eg,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),Tg=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Pg=yi.div`
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
`,Ig=(yi.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--secondary-txt-color);
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
`,yi.div`
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
        color: var(--secondary-txt-color);
        font-weight: 600;
      }
    }
  }
`),Bg=yi.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,zg=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Dg=yi.div`
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
`,_g=(yi.div`
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
`,yi.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,n.p+"static/media/case2_hero.f9059d81935e239562aa.png"),Mg=n.p+"static/media/case2_filter_initial.47abc3cebb75653fb7a7.png",Og=n.p+"static/media/case2_closing.888626fd3d1e90efbea2.png",Ng=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:_g,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Motion Prototype"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Information Architecture"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Brand Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Vector - illustration"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Logo Design"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"Challenges are persistent, and recurring issues have been a concern. I've been dedicated to proactively addressing these factors."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,bi.jsx)(Tg,{children:(0,bi.jsxs)(Pg,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"The website faced several issues during my early stages of work."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"I came to understand that website maintenance is more than just enhancing product appeal based on my experience."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"When encountering an issue, I make a conscious effort to delve deeper beyond the apparent factors, resulting in a robust solution that can be implemented permanently."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"I applied these concepts to tackle challenges. The crucial element is to thoroughly examine the interrelated factors, and understand their origins and connections."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"It was necessary to approach challenges with flexibility, providing solutions that could offer long-lasting support as needed."})})]})}),(0,bi.jsxs)(Dm,{children:[(0,bi.jsx)(Bg,{children:(0,bi.jsx)(zg,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Designing Filters for Improved User Experience"})})})}),(0,bi.jsxs)(Dg,{children:[(0,bi.jsxs)(sm,{children:[(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Filter"}),(0,bi.jsx)("p",{children:"We\u2019ve identified areas for improvement, and our research and analysis highlight the potential contribution of filters to this enhancement."}),(0,bi.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Preventing time-consuming and frustrating experiences"}),(0,bi.jsx)("p",{children:"\u2022 Contribute to intuitive user searches"}),(0,bi.jsx)("p",{children:"\u2022 The design aids users in product search, even when they don\u2019t have a specific name in mind"}),(0,bi.jsx)("p",{children:"\u2022 Prioritizing clarity and simplicity for added value"}),(0,bi.jsx)("p",{children:"\u2022 Reducing excessive back-and-forth processes"})]})]}),(0,bi.jsx)("p",{children:"My past experience with filter projects reminded me I have encountered a lot of challenges that I never considered possible to be complicated so I decided to organize a meeting as a brainstorm to narrow down requirements before moving on to actual and We could decide on minimum conditions. We ended up deciding on four categories as prerequisites for creating the filter."})]}),(0,bi.jsxs)(Ig,{children:[(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Filter\u2019s position:"}),(0,bi.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Applied filters:"}),(0,bi.jsx)("p",{children:"\u2022 Dropdown Menus and horizontal scrolling"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Specific criteria:"}),(0,bi.jsx)("p",{children:"\u2022 Creating distinction with differing Sizes"}),(0,bi.jsx)("p",{children:"\u2022 Assigning unique colors to each"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Selection Interaction:"}),(0,bi.jsx)("p",{children:"\u2022 Incorporate animation after select"}),(0,bi.jsx)("p",{children:"\u2022 Stay on the top tier as a conditional component"})]})})})]})]}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Mg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Designing at the Initial Stage"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Initially, following our agreed-upon direction, I began creating a design standard for a Tip. This project introduced rounded corner designs, which were to be applied universally."}),(0,bi.jsx)("p",{children:"In Phase 2, the primary emphasis was on presenting the applied filters. While crafting them, I faced challenges in designing the product card UI due to space constraints. As a result, the initial prototype posed challenges in delivering a seamless user experience for applied filters."})]})]})})]})})]}),(0,bi.jsx)(Gf,{}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:Og,id:""})})]})]})}),Rg=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(Ng,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),Lg=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Fg=yi.div`
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
`,Ug=yi.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--secondary-txt-color);
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
`,Qg=yi.div`
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
        color: var(--secondary-txt-color);
        font-weight: 600;
      }
    }
  }
`,Yg=yi.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,Vg=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Wg=yi.div`
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
`,Hg=yi.div`
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
`,Gg=yi.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,Xg=n.p+"static/media/case2_filter_iterative.c2e07cd32259929a258d.png",$g=n.p+"static/media/case2_filter_usability.e63445ae937330133626.png",Kg=n.p+"static/media/case2_filter_chip.3d0e590e6e5859e62be5.png",qg=n.p+"static/media/case2_filter_result.49927d2985381c4a634a.png",Jg=n.p+"static/media/case2_replenishment_mockup.ed294d6a0d3d95b5a6cf.png",Zg=n.p+"static/media/case2_replenishment_userflow.0effcadb9fda186dd9d8.png",ex=n.p+"static/media/case2_replenishment_result.063fafb1748b27ff9788.png",tx=n.p+"static/media/case2_about_identify.3e3ec1de06dc5ddbe144.png",nx=n.p+"static/media/case2_about_credibility.ac9d0a4709ef3928988d.png",ix=n.p+"static/media/case2_about_customerbase.9c9051373e458af4382d.png",rx=n.p+"static/media/case2_about_responsible.b3ef728f02bf13a95742.png",ax=n.p+"static/media/case2_about_insert.4896060db8f84244dd9f.png",sx=n.p+"static/media/case2_about_result.b7d9b4b20ed95dc3c026.png",ox=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:_g,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Motion Prototype"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Information Architecture"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Brand Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Vector - illustration"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Logo Design"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"Challenges are persistent, and recurring issues have been a concern. I've been dedicated to proactively addressing these factors."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,bi.jsx)(Lg,{children:(0,bi.jsxs)(Fg,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"The website faced several issues during my early stages of work."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"I came to understand that website maintenance is more than just enhancing product appeal based on my experience."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"When encountering an issue, I make a conscious effort to delve deeper beyond the apparent factors, resulting in a robust solution that can be implemented permanently."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"I applied these concepts to tackle challenges. The crucial element is to thoroughly examine the interrelated factors, and understand their origins and connections."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"It was necessary to approach challenges with flexibility, providing solutions that could offer long-lasting support as needed."})})]})}),(0,bi.jsx)(Yg,{children:(0,bi.jsx)(Vg,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Designing Filters for Improved User Experience"})})})}),(0,bi.jsxs)(Wg,{children:[(0,bi.jsxs)(sm,{children:[(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Filter"}),(0,bi.jsx)("p",{children:"We\u2019ve identified areas for improvement, and our research and analysis highlight the potential contribution of filters to this enhancement."}),(0,bi.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Preventing time-consuming and frustrating experiences"}),(0,bi.jsx)("p",{children:"\u2022 Contribute to intuitive user searches"}),(0,bi.jsx)("p",{children:"\u2022 The design aids users in product search, even when they don\u2019t have a specific name in mind"}),(0,bi.jsx)("p",{children:"\u2022 Prioritizing clarity and simplicity for added value"}),(0,bi.jsx)("p",{children:"\u2022 Reducing excessive back-and-forth processes"})]})]}),(0,bi.jsx)("p",{children:"My past experience with filter projects reminded me I have encountered a lot of challenges that I never considered possible to be complicated so I decided to organize a meeting as a brainstorm to narrow down requirements before moving on to actual and We could decide on minimum conditions. We ended up deciding on four categories as prerequisites for creating the filter."})]}),(0,bi.jsxs)(Qg,{children:[(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Filter\u2019s position:"}),(0,bi.jsx)("p",{children:"\u2022 I\u2019m always having trouble with my skin"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Applied filters:"}),(0,bi.jsx)("p",{children:"\u2022 Dropdown Menus and horizontal scrolling"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Specific criteria:"}),(0,bi.jsx)("p",{children:"\u2022 Creating distinction with differing Sizes"}),(0,bi.jsx)("p",{children:"\u2022 Assigning unique colors to each"})]})})}),(0,bi.jsx)("div",{className:"box",children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{className:"box-border",children:[(0,bi.jsx)("p",{children:"Selection Interaction:"}),(0,bi.jsx)("p",{children:"\u2022 Incorporate animation after select"}),(0,bi.jsx)("p",{children:"\u2022 Stay on the top tier as a conditional component"})]})})})]})]}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Mg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Designing at the Initial Stage"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Initially, following our agreed-upon direction, I began creating a design standard for a Tip. This project introduced rounded corner designs, which were to be applied universally."}),(0,bi.jsx)("p",{children:"In Phase 2, the primary emphasis was on presenting the applied filters. While crafting them, I faced challenges in designing the product card UI due to space constraints. As a result, the initial prototype posed challenges in delivering a seamless user experience for applied filters."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Xg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Iterative Design for Robust Solutions"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"I diligently tackled iterative desing to address the challenges, with a specific focus on managing chips after applying the filter. The process was approached from bottom to up."}),(0,bi.jsx)("p",{children:"In our effort to enhance intuitive user searches, the decision was made to implement a horizontal scroll where chips should be anchored at the bottom."}),(0,bi.jsx)("p",{children:"Additionally, it facilitates the utilization of space for product cards, effectively minimizing time-consuming interactions. The best solution might not have been found had it not been for the Phase 3 process."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:$g,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Enhance Usability with Defined Criteria"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Making specific criteria a top priority for this project for has been proven by extensive research. Furthermore, employing this concept ensures an efficient search experience."}),(0,bi.jsx)("p",{children:"We arrived at a robust solution, and in Phase 4, I expanded the filter by incorporating a large drop-down menu to emphasize the presence of specific criteria."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Kg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Optimizing Chip Design"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"After establishing a solid design foundation and conducting practice, I refined the chip designs. The chips are grouped by different colors."}),(0,bi.jsx)("p",{children:"Consistency is a key principle in constructing a robust UI, so the colors are derived from the design overview I created earlier."}),(0,bi.jsx)("p",{children:"This chip design is grounded in the concept of aiding users in product search, even when they don\u2019t have a specific name in mind."})]})]})})]})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:qg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Result"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"This project demanded careful consideration to avoid unintentional user conflicts, which led to longer decision-making time for our teams than usual."}),(0,bi.jsx)("p",{children:"Although this case study doesn\u2019t delve into the mobile aspect, the concept remains the same; however, it requires a different approach to UX and UI design, especially considering that over 70% of our users employ mobile devices. I dedicated significant effort to mobile design."}),(0,bi.jsx)("p",{children:"Filtering is a substantial undertaking for designers and developers, but the real satisfaction comes when we successfully launch products that work seamlessly in the long run."})]})]})})]}),(0,bi.jsx)(Ug,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,bi.jsx)("p",{children:"The overall project has been highly satisfying, and we established a strong collaboration with the backend team."}),(0,bi.jsx)("p",{children:"A valuable insight gained is that sorting through filtering is a crucial and core element in improving user experience."}),(0,bi.jsx)("p",{children:"It\u2019s evident that this will further enhance the integration of marketing features, ultimately contributing to the company\u2019s profitability."})]})})})]}),(0,bi.jsx)(Yg,{children:(0,bi.jsx)(Vg,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Creating an Auto-Replenishment Functionality"})})})}),(0,bi.jsx)(Wg,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Auto-Replenishment"}),(0,bi.jsx)("p",{children:"The marketing team suggested the implementation of a new purchasing function to boost profitability. In alignment with their requirements, I initiated the project."}),(0,bi.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Developing a system for product subscription purchases"}),(0,bi.jsx)("p",{children:"\u2022 Designing an interface with the aesthetic-usability effect"}),(0,bi.jsx)("p",{children:"\u2022 Designing thoughtful functions with integrated benefits (Points and Discounts)"}),(0,bi.jsx)("p",{children:"\u2022 Building a seamless and stress-free user experience"}),(0,bi.jsx)("p",{children:"\u2022 Seamless integration with Auto-Replenishment related pages"})]})]})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Jg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Mockup with Comprehensive Functionality"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Projects often come with tight deadlines, requiring a comprehensive approach from both designers and developers. Following a series of meetings, I began the mockup creation process."})})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Zg,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Ensuring Complete User Flow"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Before implementation, I prepared a mock-up, but by creating a user flow, I was able to identify missing elements and ensure the smooth integration of functions to avoid conflict in user experience."})})]})})]})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:ex,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Result"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Through several steps, We could launch addressed products that the core problem and user needs. Relatively, could be carried out without a critical problem but in the final steps after testing, we have changed a couple of UI to simplify in order to consider UX enhancements."})})]})})]}),(0,bi.jsx)(Ug,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,bi.jsx)("p",{children:"The functions associated with different components need to be carefully considered within the user flow to ensure a seamless user experience."}),(0,bi.jsx)("p",{children:"If there are issues at any point, it can compromise the functionality of the entire system and impact profitability."}),(0,bi.jsx)("p",{children:"This approach has been invaluable in shaping my perspective."})]})})})]}),(0,bi.jsx)(Yg,{children:(0,bi.jsx)(Vg,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Revamping the About Page to Emphasize Value"})})})}),(0,bi.jsx)(Wg,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"About page"}),(0,bi.jsx)("p",{children:"It can be challenging to allocate resources to projects that don\u2019t directly contribute to profits, especially for a company in the midst of growth. Nevertheless, I always seek opportunities to create comprehensive value. The About page, which consolidates history, values, and mission in one place, serves as a crucial destination for users making their first visit to the website and whether to purchase or not. It presents an opportunity to enhance engagement, which is why we chose to revamp the About page."}),(0,bi.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Strengthening page credibility for a robust web age"}),(0,bi.jsx)("p",{children:"\u2022 Designing an interface with the aesthetic-usability effect"}),(0,bi.jsx)("p",{children:"\u2022 Capturing UI Design Trends"}),(0,bi.jsx)("p",{children:"\u2022 Add a section to tie to the purchase"})]})]})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:tx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Identifying Missing Significance First"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"In the initial project stage, I was fully engaged in generating mock-ups and brainstorming ideas. These are pivotal steps in establishing a solid foundation."}),(0,bi.jsx)("p",{children:"Key tasks included crafting a mission statement, outlining the company\u2019s narrative, showcasing its evolution, highlighting pivotal \u2018aha!\u2019 moments, clarifying the target audience, specifying the offered products/services, providing examples of past clients, and articulating the core values."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:nx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Enhancing Credibility Aesthetically"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"I believe that the top priority for the About page is to reinforce and enhance credibility throughout this project."}),(0,bi.jsx)("p",{children:"In this process, I\u2019ve carefully curated aesthetically pleasing images and crafted a consistent design to enhance visual appeal and credibility."})]})]})})]})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:ix,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(om,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Expanding the Potential Customer Base"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"As I progressed with the project, focused on the potential profitability of the About page. Since most visitors to this page are new customers, there\u2019s a chance to turn them into a customer base with proper navigation."}),(0,bi.jsx)("p",{children:"To seize this opportunity, I created clickable Free Sample Kit Cards that guide users to the customer application page."}),(0,bi.jsx)("p",{children:"Additionally, I designed Cards that direct users to sorted collection pages based on their selected categories."})]})]})})]}),(0,bi.jsx)(Ug,{children:(0,bi.jsx)(dm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"I generated many user interface ideas, with a focus on creating visually engaging elements. Many users are naturally attracted to websites that incorporate interactive animations, making them visually appealing."}),(0,bi.jsx)("p",{children:"As a result of thorough research, I\u2019ve decided on the parallax animation function, along with icons, simplified assets, and a signature stump SVG, to create a more refined UI."}),(0,bi.jsx)("p",{children:"I incorporated those benefits in this phase, along with creating components for the business section."})]})})})]}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:rx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Responsible Desingn"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"In the modern web industry, ensuring responsive user interface design for all devices is essential. On the flip side, websites lacking responsive design are often viewed as subpar."}),(0,bi.jsx)("p",{children:"Keeping this in mind, I never neglected the importance of this consideration, right from the project\u2019s initial stages."})]})]})})]})}),(0,bi.jsxs)(Hg,{children:[(0,bi.jsx)(Gg,{children:(0,bi.jsx)(Sm,{src:ax,id:""})}),(0,bi.jsx)(cm,{children:(0,bi.jsx)("p",{children:"A componentized responsive design approach allows for flexibility when addressing future challenges that may not have been discovered yet."})})]}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:sx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Result"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"I\u2019ve worked on similar projects before, but each project has unique and significant requirements. In the initial stages of the process, I dedicate time to thoroughly understand the project\u2019s needs. I then move on to subsequent steps, which include choosing the right color scheme, incorporating creative visuals, selecting appropriate staff photos, using readable fonts, and ensuring the page is responsive."}),(0,bi.jsx)("p",{children:"All of these aspects are essentially the foundation I focus on when creating an About page, and I apply similar principles to other similar pages."})]})]})})]}),(0,bi.jsx)(Ug,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{className:"text-bold",children:"Insigns:"}),(0,bi.jsx)("p",{children:"Insights: I\u2019ve come to understand that a compelling About page should be authentic, relatable, genuine, approachable, distinguished, and unique."}),(0,bi.jsx)("p",{children:"To achieve this, it\u2019s crucial to have a solid foundation that conveys the brand\u2019s concept or the specific task at hand."}),(0,bi.jsx)("p",{children:"If I can\u2019t find this foundation at the project\u2019s outset, I will explore it until I uncover it. This project has reinforced the significance of this approach in my work."})]})})})]}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:Og,id:""})})]})]})}),lx=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(ox,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),dx=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,cx=yi.div`
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
`,ux=(yi.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--secondary-txt-color);
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
`,yi.div`
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
        color: var(--secondary-txt-color);
        font-weight: 600;
      }
    }
  }
`,yi.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`),hx=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,px=yi.div`
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
    color: var(--secondary-txt-color);
    font-weight: 600;
  }

  .caption-inner {
    color: var(--secondary-txt-color);
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
`,fx=(yi.div`
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
`,yi.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,n.p+"static/media/case3_hero.00a99996bb1be30c37de.png"),mx=n.p+"static/media/case3_closing.f63e97eeb9dfb4ac11e6.png",gx=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:fx,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Data - Analysis"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"Supporting the continuous analysis and improvement of comprehensive products is a crucial process for driving company profitability. My role is dedicated to this endeavor."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,bi.jsx)(dx,{children:(0,bi.jsxs)(cx,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"People understand that the success of web products doesn't conclude upon their initial launch."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"What carries you for a strategy towards goals will require you to keep your eyes open to find out the pain points that users are feeling uncomfortable using and being unclear for enhancing appeal."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Strategizing for your goals involves a keen focus on identifying and addressing user discomfort and uncertainties, all aimed at improving the product's appeal."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"From that perspective, it signifies the initiation of a new project phase following the product launch."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Iterative testing is a prevalent method to improve product value, but it necessitates understanding the root causes behind user demands."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Identifying the crucial factors that end users require is a challenging task; nevertheless, I've used various tools and applications to clarify these points."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"This is a very exciting process, moving us closer to elevating the product to the next level."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"While users often associate aesthetically pleasing design with enhanced usability, it's important to recognize that real-world outcomes aren't solely determined by the Aesthetic-Usability Effect."})})]})}),(0,bi.jsxs)(Dm,{children:[(0,bi.jsx)(ux,{children:(0,bi.jsx)(hx,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Optimizing Conversion Acquisition that A User-Centric KPI Strategy for Seamless Product Navigation and Profitability"})})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsx)(px,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"My strategy of KPI"}),(0,bi.jsx)("p",{children:"The KPI strategy I\u2019ve dedicated to revolves around optimizing conversion acquisition, ensuring every step aligns with user-centric design principles, and employing a systematic approach to refine and enhance the overall user experience."}),(0,bi.jsx)("p",{className:"caption",children:"Revitalizing User Engagement and Conversion Acquisition: Key Responsibilities of the Project"}),(0,bi.jsx)("p",{style:{color:"#010606"},children:"Primary priorities of KPI"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Organic traffic"}),(0,bi.jsx)("p",{children:"\u2022 Pages per session"}),(0,bi.jsx)("p",{children:"\u2022 Click rate"}),(0,bi.jsx)("p",{children:"\u2022 Cart abandonment rate"}),(0,bi.jsx)("p",{children:"\u2022 Bounce rate"}),(0,bi.jsx)("p",{children:"\u2022 Promotion page conversion rates"}),(0,bi.jsx)("p",{children:"\u2022 Product pages conversion rates"}),(0,bi.jsx)("p",{children:"\u2022 Landing Page Samples conversion rate"})]}),(0,bi.jsxs)("p",{style:{color:"#010606"},children:["Secondary priorities of KPI"," "]}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Customer Acquisition Cost"}),(0,bi.jsx)("p",{children:"\u2022 Customer Lifetime Value"}),(0,bi.jsx)("p",{children:"\u2022 Marketing Return on Investment"}),(0,bi.jsx)("p",{children:"\u2022 Churn Rate"}),(0,bi.jsx)("p",{children:"\u2022 Full Product"})]}),(0,bi.jsx)("p",{children:"This involves iterative design practices, incorporating pricing psychology, and utilizing A/B testing for continuous improvement. The goal is to maximize engagement, support profitability, and provide a seamless, intuitive experience for users navigating the products and making purchase decisions."}),(0,bi.jsx)("p",{children:"Frequently, exercising patience is crucial to achieving meaningful contributions. The secure and experiential process not only forms the foundation for results but also brings expansive joy to my work through the satisfaction of accomplishments."})]})})})})]}),(0,bi.jsx)(Gf,{}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:mx,id:""})})]})]})}),xx=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(gx,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),vx=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,yx=yi.div`
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
`,wx=yi.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--secondary-txt-color);
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
`,bx=(yi.div`
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
        color: var(--secondary-txt-color);
        font-weight: 600;
      }
    }
  }
`,yi.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`),jx=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Ax=yi.div`
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
    color: var(--secondary-txt-color);
    font-weight: 600;
  }

  .caption-inner {
    color: var(--secondary-txt-color);
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
`,kx=(yi.div`
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
`,yi.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`,n.p+"static/media/case3_snackbar_ensure.b7a6ac2b415683cdb5ef.png"),Sx=n.p+"static/media/case3_snackbar_responsive.6303b64b2e8633eaf8f9.png",Ex=n.p+"static/media/case3_snackbar_result.6fc176091ef838d88891.png",Cx=n.p+"static/media/case3_sales_integrating.94ec70b4c2420d5e7579.png",Tx=n.p+"static/media/case3_sales_components.f4605146785c5582f696.png",Px=n.p+"static/media/case3_sales_consistency.bb2cad17b00a8978efda.png",Ix=n.p+"static/media/case3_pdp_integrating.fa94862e43c9d36293b9.png",Bx=n.p+"static/media/case3_pdp_usability.deaf1b69812af7611cde.png",zx=n.p+"static/media/case3_pdp_engagement.1c6798aef3c0f2ebb5ac.png",Dx=n.p+"static/media/case3_pdp_additional.5a9ed76e7c65ebc517c7.png",_x=n.p+"static/media/case3_pdp_alternative.9a1ce06200f2dd301973.png",Mx=n.p+"static/media/case3_pdp_result.8e6de7b3240ac5b1bdf5.png",Ox=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:fx,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Data - Analysis"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"Supporting the continuous analysis and improvement of comprehensive products is a crucial process for driving company profitability. My role is dedicated to this endeavor."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Tom\xe1s Leiva"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Project Manager: Ali Huynh"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Ed Rushton"})})]})})]}),(0,bi.jsx)(vx,{children:(0,bi.jsxs)(yx,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"People understand that the success of web products doesn't conclude upon their initial launch."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"What carries you for a strategy towards goals will require you to keep your eyes open to find out the pain points that users are feeling uncomfortable using and being unclear for enhancing appeal."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Strategizing for your goals involves a keen focus on identifying and addressing user discomfort and uncertainties, all aimed at improving the product's appeal."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"From that perspective, it signifies the initiation of a new project phase following the product launch."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Iterative testing is a prevalent method to improve product value, but it necessitates understanding the root causes behind user demands."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Identifying the crucial factors that end users require is a challenging task; nevertheless, I've used various tools and applications to clarify these points."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"This is a very exciting process, moving us closer to elevating the product to the next level."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"While users often associate aesthetically pleasing design with enhanced usability, it's important to recognize that real-world outcomes aren't solely determined by the Aesthetic-Usability Effect."})})]})}),(0,bi.jsx)(bx,{children:(0,bi.jsx)(jx,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Optimizing Conversion Acquisition that A User-Centric KPI Strategy for Seamless Product Navigation and Profitability"})})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsx)(Ax,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"My strategy of KPI"}),(0,bi.jsx)("p",{children:"The KPI strategy I\u2019ve dedicated to revolves around optimizing conversion acquisition, ensuring every step aligns with user-centric design principles, and employing a systematic approach to refine and enhance the overall user experience."}),(0,bi.jsx)("p",{className:"caption",children:"Revitalizing User Engagement and Conversion Acquisition: Key Responsibilities of the Project"}),(0,bi.jsx)("p",{style:{color:"#010606"},children:"Primary priorities of KPI"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Organic traffic"}),(0,bi.jsx)("p",{children:"\u2022 Pages per session"}),(0,bi.jsx)("p",{children:"\u2022 Click rate"}),(0,bi.jsx)("p",{children:"\u2022 Cart abandonment rate"}),(0,bi.jsx)("p",{children:"\u2022 Bounce rate"}),(0,bi.jsx)("p",{children:"\u2022 Promotion page conversion rates"}),(0,bi.jsx)("p",{children:"\u2022 Product pages conversion rates"}),(0,bi.jsx)("p",{children:"\u2022 Landing Page Samples conversion rate"})]}),(0,bi.jsxs)("p",{style:{color:"#010606"},children:["Secondary priorities of KPI"," "]}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Customer Acquisition Cost"}),(0,bi.jsx)("p",{children:"\u2022 Customer Lifetime Value"}),(0,bi.jsx)("p",{children:"\u2022 Marketing Return on Investment"}),(0,bi.jsx)("p",{children:"\u2022 Churn Rate"}),(0,bi.jsx)("p",{children:"\u2022 Full Product"})]}),(0,bi.jsx)("p",{children:"This involves iterative design practices, incorporating pricing psychology, and utilizing A/B testing for continuous improvement. The goal is to maximize engagement, support profitability, and provide a seamless, intuitive experience for users navigating the products and making purchase decisions."}),(0,bi.jsx)("p",{children:"Frequently, exercising patience is crucial to achieving meaningful contributions. The secure and experiential process not only forms the foundation for results but also brings expansive joy to my work through the satisfaction of accomplishments."})]})})})}),(0,bi.jsx)(bx,{children:(0,bi.jsx)(jx,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Create a component for running sales promotions between regular terms"})})})}),(0,bi.jsx)(Ax,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Snackbar"}),(0,bi.jsx)("p",{children:"The marketing team suggested the implementation of a new purchasing function to boost profitability. In alignment with their requirements, I initiated the project."}),(0,bi.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Develop a component that provides users with a sense of benefit"}),(0,bi.jsx)("p",{children:"\u2022 Ensure that the presence of the component doesn\u2019t disrupt the user experience"}),(0,bi.jsx)("p",{children:"\u2022 Integrate it with other components for seamless functionality"}),(0,bi.jsx)("p",{children:"\u2022 Enhance the conversion rate through a deliverable"})]})]})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:kx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Ensure and attempte"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"To prevent issues from becoming permanent, it\u2019s crucial to start by exploring the layout and space to meet the necessary requirements. This involves brainstorming ideas, implementing them, and then analyzing them with teams or collaborators to identify any unclear factors."}),(0,bi.jsx)("p",{children:"Indeed, the iterative process I practiced helped uncover and address potential problems. It\u2019s a proactive approach to identifying issues and finding solutions to them, ensuring a smoother and more effective project development."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Sx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Responsive Design and Attention to Detail"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Absolutely, ensuring responsible design and paying attention to details play a crucial role in maintaining the consistency of branding and leveraging the Aesthetic-Usability Effect."}),(0,bi.jsx)("p",{children:"Meeting requirements within limited spaces can be a challenge, but effective collaboration with a copywriter through mutual discussion can help address this challenge."})]})]})})]})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Ex,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Result"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"After the iterative process, the clarification of various factors greatly contributed to our decision-making."}),(0,bi.jsx)("p",{children:"The final product transformed into an interactive component, effectively addressing limited spacing while engaging users through non-disruptive animations."}),(0,bi.jsx)("p",{children:"Additionally, the introduction of a dedicated tag to associate this function with product pages and collections became a crucial necessity and also, The analysis of Snackbar results demonstrated a consistent increase in the conversion rate, as indicated in monthly reports."})]})]})})]}),(0,bi.jsx)(wx,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,bi.jsx)("p",{children:"The website had previously assigned a modal window to notify customers who hadn\u2019t subscribed."}),(0,bi.jsx)("p",{children:"Initially, when I proposed the first ideas of modal windows used in this project, there was concern about whether this was too inhibited when had proposed the first ideas of modal windows used in this project."}),(0,bi.jsx)("p",{children:"However, after considering various options, I decided to incorporate static animations that could be used flexibly. While creative implementation is essential and enjoyable, it must also account for the limits and requirements of the project, and balancing creative implementation with limitations and requirements is essential, and I am always dedicated to approaching this with empathy."})]})})})]}),(0,bi.jsx)(bx,{children:(0,bi.jsx)(jx,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Implemented user-friendly upselling and cross-selling for an enhanced customer experience."})})})}),(0,bi.jsx)(Ax,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Component-based Design & Content for Cross-sell and Upsell"}),(0,bi.jsx)("p",{children:"Refined the user interface and user experience for upselling and cross-selling based on our analysis, aiming for increased engagement and ultimately driving customer purchases."}),(0,bi.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Explored strategies to enhance product attraction within limited space"}),(0,bi.jsx)("p",{children:"\u2022 Ensured consistent UI design across all product"}),(0,bi.jsx)("p",{children:"\u2022 Contributed to enhancing user engagement"}),(0,bi.jsx)("p",{children:"\u2022 Creating designs that support intuitive user interactions and usability"})]}),(0,bi.jsx)("p",{className:"caption",children:"Project Clarification: Ensuring Understanding and Effective Execution"}),(0,bi.jsxs)("p",{children:[(0,bi.jsx)("p",{className:"caption-inner",children:"Upselling"}),"Upselling is a strategy where a seller encourages a customer to buy additional items or upgrades that may be more expensive, ultimately aiming to increase the overall sale value."]}),(0,bi.jsxs)("p",{children:[(0,bi.jsx)("p",{className:"caption-inner",children:"Cross-selling"}),"Cross-selling is a sales technique to get the customer to spend more money by adding more products from other categories than the product being viewed or purchased."]}),(0,bi.jsx)("p",{children:"*This case study primarily focuses on cross-selling strategies."})]})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Cx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Integrating design elements for a logical user experience"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"The project required an effective and intuitive component to support profitability so, to increase engagement, I applied pricing psychology and designed fundamental components in a logical manner."}),(0,bi.jsx)("p",{children:"Psychology alone may not solve all problems, but integrating psychological concepts can guide effective A/B testing to enhance a product."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Tx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Creating interactive components with a seamless user experience"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"The static version before the user selects is indicated right-side picture. After selecting, the frame will be filled gradually with a blue color as indicated left side."}),(0,bi.jsx)("p",{children:"In this project, addressing the constraints of design space has primarily involved incorporating animation, which, in turn, enhances intuitive user interaction."}),(0,bi.jsx)("p",{children:"Additionally, products are added only when the user selects \u201cadd to cart,\u201d regardless of when they added them. This ensures that the user stays on the page, providing a seamless user experience."})]})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Px,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Maintaining consistency through an agile style guide"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Meeting requirements within limited spaces can be a challenge, but effective collaboration with a copywriter through mutual discussion can help address this challenge."})})]})})]})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:sx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Result"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"In conclusion, addressing challenges comprehensively was a crucial process in this project. The outcome contributed to improving key metrics, particularly in terms of profitability."}),(0,bi.jsx)("p",{children:"Implementing a component design is crucial for ensuring easy maintenance post-deployment, a key priority for cutting-edge digital products. This approach facilitates optimization after the analysis process."}),(0,bi.jsx)("p",{children:"Indeed, considering ease of optimization post-analysis is crucial for efficient time management and overall project success."})]})]})})]}),(0,bi.jsx)(wx,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{className:"text-bold",children:"Insights:"}),(0,bi.jsx)("p",{children:"Absolutely, considering the user\u2019s perspective and preferences is key to creating effective upselling and cross-selling strategies. Avoiding obnoxious and intrusive approaches and aligning with user expectations can significantly enhance the success of such techniques."}),(0,bi.jsx)("p",{children:"It\u2019s essential to pre-make decisions based on user needs and wants before moving forward with the implementation. Through a systematic approach, I am confident that the products will be robust and cater to our specific requirements."})]})})})]}),(0,bi.jsx)(bx,{children:(0,bi.jsx)(jx,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Enhancing the Product Page for Maximum Engagement and Conversion with Crafting Seamless User Journeys"})})})}),(0,bi.jsx)(Ax,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Optimizing Product Pages"}),(0,bi.jsx)("p",{children:"Analyzing metrics over time, my teams identified opportunities to enhance customer lifetime value. The analysis highlighted areas for improvement on product pages, prompting me to conceptualize ways to unlock their fundamental potential."}),(0,bi.jsx)("p",{children:"Outstanding product pages can not make the risk of profit loss, even when serving as landing pages without extensive preparation. A well-designed page has sufficient space to effectively communicate product value and benefits to customers so The key lies in the designer\u2019s ability to create a thoughtful and considerate page that takes various factors into account."}),(0,bi.jsx)("p",{children:"Based on the identified factors, we made the decision to proceed with this project."}),(0,bi.jsx)("p",{className:"caption",children:"Project Requirements and Responsibilities:"}),(0,bi.jsxs)("div",{className:"list",children:[(0,bi.jsx)("p",{children:"\u2022 Enhanced the overall design based on collaborative analysis with team members"}),(0,bi.jsx)("p",{children:"\u2022 Consciously integrate profitable elements and an aesthetic focus"}),(0,bi.jsx)("p",{children:"\u2022 Integrating a section to PDP page with high enhancement opportunities"}),(0,bi.jsx)("p",{children:"\u2022 Presenting prototypes to incorporate new ideas discovered during the project\u2019s progression"})]})]})})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Ix,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(om,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Integrating requirements seamlessly into the design"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Following the team\u2019s analysis, a decision was reached regarding the elements to be incorporated into the hero section, following these guidelines, three prototypes were created."}),(0,bi.jsxs)("p",{children:[(0,bi.jsx)("p",{style:{color:"#010606"},children:"Video:"}),"I incorporated the video in the hero section, keeping in mind our discussion about the importance of exercising caution for appropriateness, preserving a seamless user experience with clear guidelines based on requirements, and through that, recognizing the importance of conveying information about the product."]})]})]})})]}),(0,bi.jsx)(wx,{children:(0,bi.jsx)(dm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsxs)("p",{children:[(0,bi.jsx)("p",{style:{color:"#010606"},children:"Promotion offer:"}),"There\u2019s no reason to exclude benefits; the key is finding the right way to seamlessly integrate valuable information with visually compelling material to make it stand out effectively."]}),(0,bi.jsxs)("p",{children:[(0,bi.jsx)("p",{style:{color:"#010606"},children:"Simplify info with make it effective:"}),"Analyzing abandonment and bounce rates revealed an inappropriate layout affecting user experience. Considering the analysis, replacing organic text with icons and a thoughtful redesign have clarified and addressed these issues."]})]})})})]}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Bx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Enhancing interactive usability"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Resolved the prior issue of a cluttered and non-communicative UI by incorporating and adjusting CSS animations, collapses, drop-downs, and icons. This maintained consistency with the defined design, resulting in improved communication with customers."})})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:zx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Organize to maintain user engagement"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"These design components were assigned based on the I created in the previous steps, resulting in a more aesthetic and improved usability. However, for analysis purposes, we took to hide the reviews section and overlay it, deviating from the theoretical approach."})})]})})]})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Dx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(om,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Explore additional opportunities"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"I identified opportunities to integrate new functions, providing additional avenues for product purchases. We\u2019ve been implementing a website function to help users determine their skin type, a significant contributor to enhancing user engagement."}),(0,bi.jsx)("p",{children:"Additionally, the Product Detail Page (PDP) features the same function, although it was not initially optimized for a seamless user experience tied to the purchase and enhancement of increase rate. I have since made adjustments to enhance its usability."})]})]})})]}),(0,bi.jsx)(wx,{children:(0,bi.jsx)(dm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Ensure alignment with UI design standards, incorporate clear call-to-action (CTA) elements, and display the included products prominently within the modal window components."})})})})]}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:_x,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Explore alternative perspectives and leverage ideas from different angles"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Apart from this project, I\u2019ve been contemplating the use of sticky components to enhance the user experience and potentially boost profitability. Recognizing the need for a valid reason, I meticulously crafted this component for proposing to the team as it could present another valuable opportunity."})})]})})]})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Mx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Result"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"In the final decision, we opted to integrate a sticky CTA that smoothly hides when it\u2019s not in focus on essential elements. Additionally, the CTA has been transformed into a distinct section, enhancing the navigation of the eye trajectory."}),(0,bi.jsx)("p",{children:"Product pages in any industry have the potential to be both the first and last page a visitor interacts with. Therefore, it is essential that these pages are designed to independently meet and support the diverse needs of customers."})]})]})})]}),(0,bi.jsx)(wx,{children:(0,bi.jsx)(dm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"The quality of products will be evaluated through the PDP, which directly links to the purchase. This will occur if the page or app fulfills crystal-clear conditions, enclosing all relevant factors."})})})}),(0,bi.jsx)(wx,{children:(0,bi.jsx)(hm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{className:"text-bold",children:"Insigns:"}),(0,bi.jsx)("p",{children:"Through this project, I\u2019ve acquired valuable knowledge and gained insight into iterative analysis. Continuously analyzing these pages is crucial for contributing to the growth of the company."})]})})})]}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:mx,id:""})})]})]})}),Nx=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(Ox,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),Rx=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Lx=yi.div`
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
`,Fx=yi.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Ux=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Qx=yi.div`
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
`,Yx=n.p+"static/media/caseMp_hero.7669da0629fb52cfcf9d.png",Vx=n.p+"static/media/caseMp_closing.6a04b2dac72e7bba15ef.png",Wx=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:Yx,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Brand Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Vector - illustration"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"It was crucial to improve the website's usability, which had previously missed out on significant potential, within a limited timeframe."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Taylor Rogers"})})]})})]}),(0,bi.jsx)(Rx,{children:(0,bi.jsxs)(Lx,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Midnight Paloma is committed to the concept of clean beauty, using all-natural ingredients to craft signature formulas that align with eco-conscious living."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Founder Tayler Rogers, drawing from 12 years of retail experience, has carefully curated and developed Midnight Paloma into a brand that embodies modern design, clean ingredients, and self-care rituals, including the use of skin tools."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"We have devoted ourselves to maintaining the stunning appeal of our brands. However, our primary source of profit has traditionally been through retail, with less focus on our e-commerce platform."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Nonetheless, we've come to recognize the significant untapped potential that Midnight Paloma holds in the online market."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"My responsibility was to completely overhaul the website within a tight timeframe."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"My team had well-defined ideas and inspiration in place, allowing me to dedicate my efforts to shaping these ideas into tangible creations."})})]})}),(0,bi.jsxs)(Dm,{children:[(0,bi.jsx)(Fx,{children:(0,bi.jsx)(Ux,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"I believe that aligning everyone\u2019s perspective on the design would saves time across all projects."})})})}),(0,bi.jsx)(Qx,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"insights:"}),(0,bi.jsx)("p",{children:"As we conducted our analysis, we uncovered multiple factors for enhancing usability in both the User Interface and User Experience."}),(0,bi.jsxs)("div",{className:"insights-lists",children:[(0,bi.jsx)("p",{children:"\u2022 clutter UI"}),(0,bi.jsx)("p",{children:"\u2022 difficulty in locating the products users needed"}),(0,bi.jsx)("p",{children:"\u2022 the interface lacks alignment with the brand\u2019s customer demographic"}),(0,bi.jsx)("p",{children:"\u2022 the design does not give priority to aligning with brand directions and customer expectations"}),(0,bi.jsx)("p",{children:"\u2022 updating for promotional purposes takes an excessive amount of time"})]})]})})})]}),(0,bi.jsx)(Gf,{}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:Vx,id:""})})]})]})}),Hx=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(Wx,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),Gx=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Xx=yi.div`
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
`,$x=yi.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Kx=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,qx=yi.div`
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
`,Jx=n.p+"static/media/caseMp_credibility.a46691f8565df3292f16.png",Zx=n.p+"static/media/caseMp_consistency.92e2eb4f15045f708ebb.png",ev=n.p+"static/media/caseMp_reuseable.a7aaed80061edd3f2951.png",tv=()=>(0,bi.jsx)(Kf,{children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:Yx,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Usability Testing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"E-commerce Optimization"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Brand Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Vector - illustration"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"It was crucial to improve the website's usability, which had previously missed out on significant potential, within a limited timeframe."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Developer: Aaron Johnson"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Manager: Taylor Rogers"})})]})})]}),(0,bi.jsx)(Gx,{children:(0,bi.jsxs)(Xx,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Midnight Paloma is committed to the concept of clean beauty, using all-natural ingredients to craft signature formulas that align with eco-conscious living."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Founder Tayler Rogers, drawing from 12 years of retail experience, has carefully curated and developed Midnight Paloma into a brand that embodies modern design, clean ingredients, and self-care rituals, including the use of skin tools."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"We have devoted ourselves to maintaining the stunning appeal of our brands. However, our primary source of profit has traditionally been through retail, with less focus on our e-commerce platform."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Nonetheless, we've come to recognize the significant untapped potential that Midnight Paloma holds in the online market."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"My responsibility was to completely overhaul the website within a tight timeframe."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"My team had well-defined ideas and inspiration in place, allowing me to dedicate my efforts to shaping these ideas into tangible creations."})})]})}),(0,bi.jsx)($x,{children:(0,bi.jsx)(Kx,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"I believe that aligning everyone\u2019s perspective on the design would saves time across all projects."})})})}),(0,bi.jsx)(qx,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"insights:"}),(0,bi.jsx)("p",{children:"As we conducted our analysis, we uncovered multiple factors for enhancing usability in both the User Interface and User Experience."}),(0,bi.jsxs)("div",{className:"insights-lists",children:[(0,bi.jsx)("p",{children:"\u2022 clutter UI"}),(0,bi.jsx)("p",{children:"\u2022 difficulty in locating the products users needed"}),(0,bi.jsx)("p",{children:"\u2022 the interface lacks alignment with the brand\u2019s customer demographic"}),(0,bi.jsx)("p",{children:"\u2022 the design does not give priority to aligning with brand directions and customer expectations"}),(0,bi.jsx)("p",{children:"\u2022 updating for promotional purposes takes an excessive amount of time"})]})]})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Jx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Credibility in Design"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Based on my research and experience, the Aesthetic Usability Effect proves to be a powerful tool. Users tend to perceive aesthetically pleasing products as more usable. Therefore, we concentrated on enhancing our design by incorporating the results of our analysis, leading us to introduce a two-column design in the hero section and a grid-based layout."})})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(nm,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:Zx,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Consistency in UI design"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"In every project, aligning the concept with users\u2019 needs while maintaining credibility is essential. One fundamental principle in UI design is consistency, as it serves to reduce cognitive load. Consistency simplifies the user\u2019s understanding of how to use the product, diminishing the mental effort required to learn and navigate the interface. I am dedicated to upholding this principle in the development of collections and product pages."})})]})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Am,{src:ev,id:""})}),(0,bi.jsx)(am,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"Reusable User Interfaces"})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Addressing the challenge of consistently updating the website for promotions and blogs, involving multiple team members, required the implementation of a reusable component design system. This approach not only supported rapid updates but also ensured consistency. Effective communication with a developer became indispensable for the success of this project."})})]})})]})}),(0,bi.jsx)(Pm,{children:(0,bi.jsx)(Am,{src:Vx,id:""})})]})]})}),nv=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(tv,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),iv=yi.img`
  max-width: 50%;
  margin: auto;
  padding: 10rem 0 5rem 0;
  display: block;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    padding: 16vw 0 8vw 0;
  }
`,rv=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,av=yi.div`
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
`,sv=yi.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,ov=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,lv=yi.div`
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
`,dv=n.p+"static/media/LarryArticle_11.bd6d8cd09e612f48f51c.png",cv=n.p+"static/media/LarryArticle_2.afcc3c168160607c4a6a.png",uv=n.p+"static/media/LarryArticle_3.03d4b4ccf203847887aa.png",hv=n.p+"static/media/LarryArticle_4.0c2e668bbefc54efb637.png",pv=n.p+"static/media/LarryArticle_5.0dd74552894f177feacc.png",fv=n.p+"static/media/LarryArticle_6.50355c7e0bd638576ef2.png",mv=n.p+"static/media/LarryArticle_7.9db76d7bbac7f067c306.png",gv=n.p+"static/media/LarryArticle_8.60d756cff6244b1b0851.png",xv=n.p+"static/media/LarryArticle_9.51f79e8feb7bf39b674a.png",vv=n.p+"static/media/LarryMovie_1.f5d97d2b58120911d2bd.mp4",yv=n.p+"static/media/LarryMovie_2.98a1cffc69829417c5d2.mp4",wv=()=>(0,bi.jsx)(Kf,{id:"larry",style:{background:"white"},children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(iv,{src:dv,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interview"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Motion Prototype"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Information Architecture"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Desing System"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Vector - illustration"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Logo Design"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"Larry Linton was tasked with creating his own website, addressing the unique needs for the publications introduction website."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,bi.jsx)(rv,{children:(0,bi.jsxs)(av,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Larry had just published a book about Parkinson\u2019s disease, which he also suffers from, and was trying to create a website to spread the book around the world."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"After connecting with the agency through Riipen, he initiated the project with us as he fulfilled the final project recruitment requirements."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"We split into four groups, competing for Larry's trust. I took charge of all the first-stage presentations and, fortunately, was selected from the four groups, ultimately succeeding in gaining his trust."})})]})}),(0,bi.jsx)(sv,{children:(0,bi.jsx)(ov,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:'We received his conviction in the idea of "Living Your Most Authentic Life Possible".'})})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:cv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Winning designs for final project"})})})]})}),(0,bi.jsx)(lv,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"My role"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"I worked on the project as a UI/UX designer, together with the development team."}),(0,bi.jsx)("p",{children:"The image alongside is the initial prototype that I proposed, earning credibility in the process."})]})]})}),(0,bi.jsx)(lv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Challenge"}),(0,bi.jsx)("p",{children:"The intention of having a home page was certainly to make money for books, but another intention was to share his own experience and knowledge."}),(0,bi.jsx)("p",{children:"One of the reasons he decided to create a site was because he wanted to convey his own words to other Parkinson's patients on the website. He already has his own blog, and it was also a question of how his blog would appear on the website."}),(0,bi.jsx)("p",{children:"He already has his own blog, and it was also a question of how his blog would appear on the website."})]})})}),(0,bi.jsx)(lv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Solution"}),(0,bi.jsx)("p",{children:"My first job when this project started was to guide the team on the best path towards the goals of the project. Therefore, I was responsible for building each section of the project, designing it for different devices, managing the timeline, giving detailed instructions to each developer, and overseeing the whole process."}),(0,bi.jsx)("p",{children:"My first job when this project started was to guide the team on the best path towards the goals of the project. Therefore, I was responsible for building each section of the project, designing it for different devices, managing the timeline, giving detailed instructions to each developer, and overseeing the whole process."}),(0,bi.jsx)("p",{children:"This way we could also achieve a more consistent user experience across the different end-users."}),(0,bi.jsx)("p",{children:"Design methods used during the project included journey mapping, UI/UX design, and prototyping solutions. During the project, I also designed features needed for a wider launch."})]})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:uv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Agile Workflow"})})}),(0,bi.jsx)(Am,{src:hv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Agile Design System for Team"})})})]})}),(0,bi.jsx)(lv,{children:(0,bi.jsx)(lm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Design and developer collaboration is a most challenging problem and there are many opportunities how to sync each other."}),(0,bi.jsx)("p",{children:"All the design tools that exist today isn't enforcing that behavior."}),(0,bi.jsx)("p",{children:'All they do is attempt to do similar things. Unless design to development all share the same settings or agreed on setting, there is no real "bridge\u201d between developers and designers.'})]})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:pv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Agile Instructions for Developers"})})})]})}),(0,bi.jsx)(lv,{children:(0,bi.jsx)(lm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"While some developers were inexperienced, it was a difficult to proceed with the project in a limited time to convey the first instruction with the design tool."}),(0,bi.jsx)("p",{children:"In order to get a better understanding of the design, I created it myself without using Adobe XD only at the beginning."}),(0,bi.jsx)("p",{children:"After a few meetings with Larry, I saw what he really needed, so I decided to create a landing page and homepage to implement it concretely."}),(0,bi.jsx)("p",{children:"The most important thing in doing so was to create a consistent design to get the most out of his brand."})]})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:fv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Overall art board view"})})})]})}),(0,bi.jsx)(lv,{children:(0,bi.jsx)(lm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"After a few meetings with Larry, I saw what he really needed, so I decided to create a landing page and homepage to implement it concretely."}),(0,bi.jsx)("p",{children:"The most important thing in doing so was to create a consistent design to get the most out of his brand."}),(0,bi.jsx)("p",{children:"The problem is that if we were able to communicate with the clients deeper in terms of functionality during the meeting, I think the project would have progressed a little faster."}),(0,bi.jsx)("p",{children:"It's a problem with every project, regardless of language or culture, but the challenge is how to deal with it. I've learned a lot from this experience and I'm ready to move on to the next stage."})]})})}),(0,bi.jsxs)(Jf,{children:[(0,bi.jsxs)(tm,{children:[(0,bi.jsx)(am,{children:(0,bi.jsx)(Im,{autoPlay:!0,playsInline:!0,loop:!0,muted:!0,src:vv,type:"video/mp4"})}),(0,bi.jsx)(am,{children:(0,bi.jsx)(Bm,{autoPlay:!0,playsInline:!0,loop:!0,muted:!0,src:yv,type:"video/mp4"})})]}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Agile Instructions for Developers"})})})]}),(0,bi.jsx)(lv,{children:(0,bi.jsx)(lm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"At the beginning, I didn't plan to create blog content, but at the time of the meeting, I received a request to create a blog section, so I decided to do it in a hurry."}),(0,bi.jsx)("p",{children:"At first, it was a key to create individual blog article pages on the homepage, but since Larry wanted to make the system simple to update and edit, end-users can touch the outline of the article and assist clicking."}),(0,bi.jsx)("p",{children:"I designed a UI that possible to do it."})]})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:mv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Finalized design images"})})})]})}),(0,bi.jsx)(lv,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"The Outcome"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"The essential intention of this project is to make Larry's experiences and books known to people all over the world."}),(0,bi.jsx)("p",{children:"Not to let people know about their suffering, but to convey their hope."}),(0,bi.jsx)("p",{children:"I was convinced that at least my design would reach as many people as possible."})]})]})}),(0,bi.jsx)(lv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{style:{maxWidth:"1140px",margin:"auto"},children:[(0,bi.jsx)("div",{style:{textAlign:"center",maxWidth:"1140px"},children:(0,bi.jsx)(Cm,{src:gv})}),(0,bi.jsx)("div",{style:{textAlign:"center"},children:(0,bi.jsx)("h2",{children:'" The end product exceeded my expectations. Thanks to each member of the team, the website captures my personality - it has a soul!! "'})}),(0,bi.jsx)("div",{className:"feedback",children:(0,bi.jsx)("p",{children:"It\u2019s one thing to design a website: With so many online resources available to guide you - both free and subscription based - a website can be uploaded and be functioning within hours. But, to have a website designed that captures the wishes and personality of the client is quite different. This presents a unique challenge. It takes talent. It takes skill, and it takes patience. I was fortunate to experience this with the students from Cornerstone International Community College of Canada. Cornerstone is a fully accredited college offering diploma programs in Web & Mobile App Development, Network Solutions & System Specialist, International Business Management, Digital Marketing Specialist, Hospitality Management, and Advertising and Graphic Design, as well as, English as Second Language training. Their high-quality educational services and career counselling are delivered within a positive team environment. It serves Canadian and international students from over 20 countries, and is committed to assisting their students obtain gainful employment in the shortest possible time. A team consisting of final year students was assigned to assist me with the design of a landing page and website to support a book launch and my personal brand. The team comprised of: Ayaka Tsubouchi Yuya Hashirizaki Anzu Nakayama Gabriel Sciacca Dias Alexandre Bellini Dias Each team member was engaged and fully invested in the project. Over a series of zoom calls, questions were asked of me on what I was seeking to achieve. The end product exceeded my expectations. Thanks to each member of the team, the website captures my personality - it has a soul! I would encourage any employer who may be looking to hire engaged, creative and talented students to look no further than Cornerstone, and these students."})}),(0,bi.jsx)(Am,{src:xv})]})})})]})]})}),bv=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(wv,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),jv=yi.img`
  max-width: 50%;
  margin: auto;
  padding: 10rem 0 5rem 0;
  display: block;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    padding: 16vw 0 8vw 0;
  }
`,Av=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,kv=yi.div`
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
`,Sv=yi.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,Ev=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Cv=yi.div`
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
`,Tv=n.p+"static/media/VectorArticle_1.8ae7ba38100cf7996f96.png",Pv=n.p+"static/media/VectorArticle_2.30a3d6cfdae677c50ed8.png",Iv=n.p+"static/media/VectorArticle_3.4c03841a51a0f0183300.png",Bv=n.p+"static/media/VectorArticle_4.3a8221a4323ab0e086ea.png",zv=n.p+"static/media/VectorArticle_5.46314cd4b26cc93097e1.png",Dv=n.p+"static/media/VectorArticle_6.95fc3e765d3ce1d0b158.png",_v=n.p+"static/media/VectorArticle_7.a98c41d17188780a0d54.png",Mv=n.p+"static/media/VectorArticle_8.5d6c8b6305fb94937e2e.png",Ov=n.p+"static/media/VectorArticle_9.60001b7fe404c7addd81.png",Nv=n.p+"static/media/VectorArticle_10.c2340c788ab7357ffe17.png",Rv=n.p+"static/media/VectorArticle_11.cc9aa830f0b15ccc2cae.png",Lv=n.p+"static/media/VectorArticle_12.1b79debb7a1c7c2730af.png",Fv=n.p+"static/media/VectorArticle_13.78fb89279f9384eb2d69.png",Uv=n.p+"static/media/mari.627df66b8e7be0e5a205.png",Qv=n.p+"static/media/VectorMovie_1.5f0e7ba9884d325351f6.mp4",Yv=()=>(0,bi.jsx)(Kf,{id:"vector",style:{background:"white"},children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(jv,{src:Tv,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interview"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Motion Prototype"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Information Architecture"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Desing System"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Vector - illustration"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"Hired by Vector International Academy, I modernized websites and brochures with innovative design, gaining valuable insights."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,bi.jsx)(Av,{children:(0,bi.jsxs)(kv,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Suggested by a friend, I offered my design services on a project basis for Vector International Academy. After a few meetings, my portfolio was accepted, and I dedicated myself to meeting Vector's requirements."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"An idea that first seemed exciting and intriguing, and turned into a journey full of excitement, surprises with lots of ups and downs."})})]})}),(0,bi.jsx)(Sv,{children:(0,bi.jsx)(Ev,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"Design lead for Vector International Academy"})})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:Pv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Agile Workflow"})})})]})}),(0,bi.jsx)(Cv,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"How it all started"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"The school had already built its own website, but they wanted to create a more intriguing platform for new content."}),(0,bi.jsx)("p",{children:"In the early days, my primary approach to shaping the idea and progressing with this project was to craft multiple web design prototypes for the website's construction."}),(0,bi.jsx)("p",{children:"We held several meetings to ensure smooth collaboration and facilitate communication."}),(0,bi.jsx)("p",{children:"To pinpoint the right problems, I asked myself what the previous site intentionally did or what service I was building."}),(0,bi.jsx)("p",{children:"These considerations guided my approach to the project."})]})]})}),(0,bi.jsx)(Cv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"My role"}),(0,bi.jsx)("p",{children:"As a UI/UX designer, I collaborated with the development team on multiple projects for Vector, including the main site and brochure. Additionally, I provided input on content"})]})})}),(0,bi.jsx)(Zf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(pm,{children:(0,bi.jsx)(Am,{src:Iv})}),(0,bi.jsx)(pm,{children:(0,bi.jsx)(Am,{src:Bv})}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"The initial prototype presented to the client"})})})]})}),(0,bi.jsx)(Cv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Challenge"}),(0,bi.jsx)("p",{children:"The significant challenge faced by the client was establishing an accessible means to navigate testimonials and essential sections effortlessly while creating an engaging and powerful website."}),(0,bi.jsx)("p",{children:"Following multiple meetings, I grasped the project's challenges and the client's vision for the most effective site, leading to the proposal of the aforementioned prototype."})]})})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(pm,{children:(0,bi.jsx)(Am,{src:zv})}),(0,bi.jsx)(pm,{children:(0,bi.jsx)(Am,{src:Dv})}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"The client proposed loading the video upon laptop startup"})})})]})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:_v}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Completed the home page design, showcasing Vector and its features"})})})]})}),(0,bi.jsx)(Cv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Solution"}),(0,bi.jsx)("p",{children:"We prioritized content unification and adaptability to individual customer needs. Incorporating dynamic content, like slides absent from the previous site, was a focus."}),(0,bi.jsx)("p",{children:"The goal was to offer a seamless experience for diverse customer groups, catering to both non-students and infrequent visitors, ensuring easy access to relevant information."})]})})}),(0,bi.jsx)(Cv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Final thoughts"}),(0,bi.jsx)("p",{children:"I anticipated that the level of involvement from designers and developers in the project's completion would be contingent on the budget and timeline. My approach to this project was centered on thoroughly researching its scalability."}),(0,bi.jsx)("p",{children:"Post the completion of the home page, the client's intentions changed, leading to an increased content load. This posed challenges in modifying previously completed work."}),(0,bi.jsx)("p",{children:"In a project emphasizing consistent design, adaptability proved crucial. It was a valuable experience, underscoring the importance of understanding the client's core intentions."})]})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:Mv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Initiation of Phase One for the Interactive Activities Page"})})}),(0,bi.jsx)(Am,{src:Ov}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Completed the design for the Interactive Activities Page and menu bar"})})}),(0,bi.jsx)(Am,{src:Nv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Completed the design for the remaining pages"})})})]})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Im,{autoPlay:!0,playsInline:!0,loop:!0,muted:!0,src:Qv,type:"video/mp4"}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Developed a motion prototype for the contact form"})})})]})}),(0,bi.jsx)(Jf,{children:(0,bi.jsxs)(em,{children:[(0,bi.jsx)(pm,{children:(0,bi.jsx)(Am,{src:Rv})}),(0,bi.jsx)(pm,{children:(0,bi.jsx)(Am,{src:Lv})}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Completed the brochure design tailored for the Japanese customer"})})})]})}),(0,bi.jsx)(im,{children:(0,bi.jsx)(rm,{children:(0,bi.jsx)(Tm,{src:Fv})})}),(0,bi.jsx)(Cv,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"The Outcome"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Throughout this project, I encountered challenges at each stage, gradually developing and designing the website to a functional and valuable state."}),(0,bi.jsx)("p",{children:"Looking back, it has been quite a ride. This highly valuable experience continues to impact my career today, providing a better understanding of the web design working environment and opening my eyes to the product creation process. The effort and sacrifices required to launch a product into the world exceeded my expectations."}),(0,bi.jsx)("p",{children:"However, once the product takes its dive and comes 'alive,' the real journey begins. Reflecting on it now, I am genuinely excited."})]})]})}),(0,bi.jsx)(Cv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{style:{maxWidth:"1140px",margin:"auto"},children:[(0,bi.jsx)("div",{style:{textAlign:"center",maxWidth:"1140px"},children:(0,bi.jsx)(Cm,{src:Uv})}),(0,bi.jsx)("div",{style:{textAlign:"center"},children:(0,bi.jsx)("h2",{children:'" He is a versatile designer who creates a wide range from modern to traditional. I believe his patience with a string of requests and revisions from me eventually enabled my website to be born. "'})}),(0,bi.jsx)("div",{className:"feedback",children:(0,bi.jsx)("p",{children:"His design first caught my eyes when I had been spending long time looking for a way to embody the unique feature of my school business. His astute sense of identifying the perfect colors, shapes, and space usage helped my website convey what we are at a glance. I believe his patience with a string of requests and revisions from me eventually enabled my website to be born. He is a versatile designer who creates a wide range from modern to traditional."})})]})})})]})]})}),Vv=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(Yv,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),Wv=yi.img`
  max-width: 50%;
  margin: auto;
  padding: 10rem 0 5rem 0;
  display: block;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    padding: 16vw 0 8vw 0;
  }
`,Hv=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,Gv=yi.div`
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
`,Xv=yi.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`,$v=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,Kv=yi.div`
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
`,qv=n.p+"static/media/DarumaArticle_1.0ae7edfd51287b3ee5b7.png",Jv=n.p+"static/media/DarumaArticle_2.f1a2dd83adbe5af814c3.png",Zv=n.p+"static/media/DarumaArticle_3.4de0e784eb72efbfe90f.png",ey=n.p+"static/media/DarumaArticle_4.fea728c1b7dca2d3e855.png",ty=n.p+"static/media/DarumaArticle_5.9b5f10fcc4edd8213d95.png",ny=n.p+"static/media/DarumaArticle_6.a47d95aebf0fd6cffde4.png",iy=n.p+"static/media/DarumaArticle_7.298cd435e539754ef202.png",ry=()=>(0,bi.jsx)(Kf,{id:"daruma",style:{background:"white"},children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(Wv,{src:qv,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interview"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Information Architecture"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Desing System"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Vector - illustration"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Arrange Photographer"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Web Management"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Website Maintenance"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"The restaurant requested a new concept, aiming for a smoother and more accessible website for customers."})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Lead Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,bi.jsx)(Hv,{children:(0,bi.jsxs)(Gv,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"The restaurant aimed to revamp its website, catering to customers in Japan and those visiting the country."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"The website previously featured outdated designs, making it challenging for clients to navigate and access the offered services."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Daruma had made a strategic choice to bring all of their offerings and new service under one website."})})]})}),(0,bi.jsx)(Xv,{children:(0,bi.jsx)($v,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"I took on the responsibility of building the website project for a specialty Korean cuisine and BBQ restaurant, gaining magnificent experience in the process."})})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:Jv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Agile Workflow"})})})]})}),(0,bi.jsx)(Kv,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"The Goal"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"The primary idea for the website is to enable users to easily create and share reservations for a night out with friends and family at the restaurant."}),(0,bi.jsx)("p",{children:"While there are many similar websites on the market, most of them are complex and similar in functionality."}),(0,bi.jsx)("p",{children:"The restaurant's main requirement has always been to keep the website usable, reliable, and functional with an aesthetic that is minimal, simple, and clean."}),(0,bi.jsx)("p",{children:"No ads or tricks, just a consistent and intuitive user experience aimed at providing value and keeping users satisfied and engaged."}),(0,bi.jsx)("p",{children:"The client emphasized agile work to deliver the product efficiently."})]})]})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{style:{padding:"clamp(15px, 10%, 140px)"},src:Zv}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Images for wireframe"})})}),(0,bi.jsx)(Am,{style:{padding:"clamp(15px, 10%, 140px)"},src:ey}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{className:"lastCaption",children:"Images for user journey map"})})})]})}),(0,bi.jsx)(Kv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"My role"}),(0,bi.jsx)("p",{children:"In this project, I served as a versatile UI/UX designer and developer, providing advisory input for the website."}),(0,bi.jsx)("p",{children:"Moreover, I held the position of an administrator, overseeing the project's overall management."})]})})}),(0,bi.jsx)(Kv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Challenge"}),(0,bi.jsx)("p",{children:"As mentioned earlier, I undertook the entire design and development process for this project using my skills."}),(0,bi.jsx)("p",{children:"Timely delivery was a critical requirement, making it imperative to present the finalized product quickly."})]})})}),(0,bi.jsx)(Kv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Solution"}),(0,bi.jsx)("p",{children:"It was essential to balance the perspectives of both a designer and developer, and I aimed to treat both skill sets with equal importance."}),(0,bi.jsx)("p",{children:'Considering the client\'s requirements for an aesthetically minimal, simple, and clean design, coupled with the need for a swift development pace, I found "React" to be the most suitable library.'}),(0,bi.jsx)("p",{children:"This decision was driven by its alignment with current trends, its logical advantages, the perception of fast loading speed by end-users, and my proficiency in the language."}),(0,bi.jsx)("p",{children:'Additionally, I chose for "React Bootstrap" as a reliable framework to facilitate quick development and achieve a consistent design.'})]})})}),(0,bi.jsx)(Kv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("h2",{children:"Final thoughts"}),(0,bi.jsx)("p",{children:"During this project, I encountered some limitations with Bootstrap, which led me to consider future issues and find solutions based on the context of this project."}),(0,bi.jsx)("p",{children:"Rather than viewing them as problems, I saw them as opportunities for productive outcomes."}),(0,bi.jsx)("p",{children:"I established an efficient configuration to prevent potential challenges, particularly for long-term project involvement."}),(0,bi.jsx)("p",{children:"This experience emphasized the importance of enhancing my proficiency as a digital creator."})]})})}),(0,bi.jsx)(im,{children:(0,bi.jsxs)(rm,{children:[(0,bi.jsx)(Am,{src:ty}),(0,bi.jsx)(zm,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("p",{children:"Finalized mobile images"})})}),(0,bi.jsx)(Am,{src:ny})]})}),(0,bi.jsx)(Kv,{children:(0,bi.jsx)(lm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Design and developer collaboration is a most challenging problem and there are many opportunities how to sync each other."}),(0,bi.jsx)("p",{children:"All the design tools that exist today isn't enforcing that behavior."}),(0,bi.jsx)("p",{children:'All they do is attempt to do similar things. Unless design to development all share the same settings or agreed on setting, there is no real "bridge\u201d between developers and designers.'})]})})}),(0,bi.jsx)(Kv,{children:(0,bi.jsx)(lm,{children:(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"While some developers were inexperienced, it was a difficult to proceed with the project in a limited time to convey the first instruction with the design tool."}),(0,bi.jsx)("p",{children:"In order to get a better understanding of the design, I created it myself without using Adobe XD only at the beginning."}),(0,bi.jsx)("p",{children:"After a few meetings with Larry, I saw what he really needed, so I decided to create a landing page and homepage to implement it concretely."}),(0,bi.jsx)("p",{children:"The most important thing in doing so was to create a consistent design to get the most out of his brand."})]})})}),(0,bi.jsx)(Kv,{children:(0,bi.jsxs)(sm,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h2",{children:"The Outcome"})}),(0,bi.jsxs)("div",{children:[(0,bi.jsx)("p",{children:"Navigating through this project, and reflecting on it now, it was undoubtedly the most fast-paced project I've ever undertaken, emphasizing the necessity to deliver the product quickly."}),(0,bi.jsx)("p",{children:"Despite the tight timeline, I successfully delivered a valuable website for my client."}),(0,bi.jsx)("p",{children:"In my career at that time, I recognized Balancing both design and development perspectives was crucial for my career growth."}),(0,bi.jsx)("p",{children:"This experience taught me the importance of investing more effort and time, emphasizing the value of both elements to foster effective teamwork."})]})]})}),(0,bi.jsx)(Kv,{children:(0,bi.jsx)(sm,{children:(0,bi.jsxs)("div",{style:{maxWidth:"1140px",margin:"auto"},children:[(0,bi.jsx)("div",{style:{textAlign:"center",maxWidth:"1140px"},children:(0,bi.jsx)(Cm,{src:iy})}),(0,bi.jsx)("div",{style:{textAlign:"center"},children:(0,bi.jsx)("h2",{children:'" The outstanding product created by talented web specialist by Yuya Hashirizaki that the product is very content even though I couldn\'t make to him enough time to build up for our desirable web site. "'})}),(0,bi.jsx)("div",{className:"feedback",children:(0,bi.jsx)("p",{children:"I am pleased to be able to write this letter of recommendation for Yuya Hashirizaki. In my opinion, Yuya is a hard-working self-starter who invariably understands exactly what a project is all about. That those skills were required especially in this project. Our thoughts of the previous website were that it had old fashioned style. So that we couldn\u2019t understand why we have to renew it until we get complaints from our regular customers. But we couldn\u2019t spend money to renovate for a new web site. I was just about to start to search how do I find the proper person and, my co-worker found out dependable web specialist among a lot of candidates in IT industry. He consistently produced high-quality work in a timely fashion so far invariably. After starting the project with him, first of all, we have made meetings frequently to reduce pain points for the future. It was a necessary thing because we couldn\u2019t invest much in this project so that, we had to reduce the possibility to generate misunderstandings for each other to avoid changes after finalized. I so much respect Yuya\u2019s attitude toward his work. I am therefore very pleased to be able to recommend Yuya for future positions."})})]})})})]})]})}),ay=()=>{const[e,n]=(0,t.useState)(!1);return(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(ry,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]})},sy=yi.div`
  max-width: 1370px;
`,oy=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,ly=yi.div`
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
`,dy=yi.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,cy=yi.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`,uy=(yi.div`
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
`,n.p+"static/media/caseUi_hero_v2.aed2edc086c2372ad40e.png"),hy=()=>(0,bi.jsx)(Kf,{id:"ui",children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(qf,{children:[(0,bi.jsx)(fm,{children:(0,bi.jsx)(km,{src:uy,id:""})}),(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(sy,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Brand Development"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsxs)("h1",{children:["100-day design challenge : ",(0,bi.jsx)("br",{}),"Self-commitment to design every day"]})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Design Lead: Yuya Hashirizaki"})})]})})]}),(0,bi.jsx)(oy,{children:(0,bi.jsxs)(ly,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"According to both research and experience, it's evident that product design is a key driver in capturing user engagement and serves as a vital starting point for achieving business objectives."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Yet, there are multiple compelling reasons to prioritize the maturation and innovation of product design."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Quality design products aim to portray a product as sophisticated, and as a result, end-users often perceive aesthetically pleasing products as more user-friendly."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Good design is inherently rational, communicating to users that it's not only visually pleasing but also useful, reliable, and user-friendly."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Furthermore, it's not only about aesthetics; it places a strong emphasis on delivering usability for the users' benefit."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"I've taken on sustainable 100-day challenges to boost my skills and capabilities."})}),(0,bi.jsx)(sm,{children:(0,bi.jsx)("div",{className:"centering",children:(0,bi.jsxs)(pp,{href:"https://dribbble.com/yuya-daily-ui",target:"_blank","aria-label":"dribbble",children:[(0,bi.jsx)(yh,{}),"Read more"]})})})]})}),(0,bi.jsx)(dy,{children:(0,bi.jsx)(cy,{children:(0,bi.jsx)("div",{children:(0,bi.jsx)("span",{children:"I tried to hone my design skills by adhering to a daily self-challenge to design and create."})})})})]})]})}),py=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(hy,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),fy=yi.div`
  max-width: 2560px;
  margin: 180px 30px 0 30px;
  overflow: hidden;

  @media only screen and (max-width: 960px) {
    margin: 130px 15px 0 15px;
  }

  @media only screen and (max-width: 540px) {
    margin: 70px 15px 0 15px;
  }
`,my=yi.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`,gy=yi.div`
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
`,xy=()=>(0,bi.jsx)(Kf,{id:"po",children:(0,bi.jsxs)(au.div,{animate:{x:0,opacity:1},initial:{x:700,opacity:0},exit:{x:-700,opacity:0},transition:{duration:.5},children:[(0,bi.jsx)(Xf,{children:(0,bi.jsx)($f,{to:"/",children:"Home"})}),(0,bi.jsxs)(fy,{children:[(0,bi.jsxs)(mm,{children:[(0,bi.jsx)(xm,{children:(0,bi.jsxs)(gm,{children:[(0,bi.jsxs)(vm,{children:[(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Interface Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"User Experience Design"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Wireframing"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Prototyping"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Design identity systems"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Agile Development"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"VS Code"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"Adobe CC"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"HTML"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"CSS"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"JavaScript"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"React"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"SCSS / SASS"})}),(0,bi.jsx)(ym,{children:(0,bi.jsx)("p",{children:"styled-components"})})]}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h1",{children:"Project for Comprehensive Portfolio Development"})})]})}),(0,bi.jsx)(xm,{children:(0,bi.jsxs)(wm,{children:[(0,bi.jsx)(bm,{children:(0,bi.jsx)("p",{children:"CREDITS"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Designer: Yuya Hashirizaki"})}),(0,bi.jsx)(jm,{children:(0,bi.jsx)("p",{children:"Developer: Yuya Hashirizaki"})})]})})]}),(0,bi.jsx)(my,{children:(0,bi.jsxs)(gy,{children:[(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"The design industry frequently debates the necessity of User Experience designers having programming knowledge."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Various perspectives exist on this matter. From my standpoint, having an understanding of programming can provide designers with a broader, more comprehensive view, ultimately leading to more advanced design approaches."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"For instance, when developing a reusable component, having knowledge of how objects are generated is crucial to avoid creating a design that would be challenging to implement in the user interface."})}),(0,bi.jsx)("div",{children:(0,bi.jsx)("h3",{children:"Implementing this approach not only enhances the developer's workflow but also contributes to reducing project costs. This project has yielded significant profits as a result."})})]})})]})]})}),vy=()=>(0,bi.jsxs)(bi.Fragment,{children:[(0,bi.jsx)(Hf,{}),(0,bi.jsx)(xy,{}),(0,bi.jsx)(Af,{}),(0,bi.jsx)(Zm,{})]}),yy=()=>{const e=Z();return(0,bi.jsx)(hp,{smooth:!0,duration:500,spy:!0,exact:"true",offset:0,onClick:()=>{e(-1)},children:"Try Again!"})},wy=yi.div`
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
`,by=()=>(0,bi.jsx)(wy,{children:(0,bi.jsx)("div",{className:"NoMatchContainer",children:(0,bi.jsx)("div",{className:"NoMatchWrapper",children:(0,bi.jsxs)("div",{children:[(0,bi.jsxs)("h2",{children:["Sorry ...",(0,bi.jsx)("br",{}),"I am confused :(",(0,bi.jsx)("br",{}),"Please try again!"]}),(0,bi.jsx)(yy,{})]})})})}),jy=()=>((0,t.useEffect)((()=>{const e=()=>{};return document.addEventListener("touchstart",e),()=>{document.removeEventListener("touchstart",e)}}),[]),null);const Ay=function(){return(0,bi.jsx)(Wu,{children:(0,bi.jsxs)(be,{basename:"/",children:[(0,bi.jsxs)(me,{children:[(0,bi.jsx)(pe,{path:"/",element:(0,bi.jsx)(Wf,{})}),(0,bi.jsx)(pe,{path:"/case1Page",element:(0,bi.jsx)(eg,{})}),(0,bi.jsx)(pe,{path:"/case1",element:(0,bi.jsx)(Cg,{})}),(0,bi.jsx)(pe,{path:"/case2Page",element:(0,bi.jsx)(Rg,{})}),(0,bi.jsx)(pe,{path:"/case2",element:(0,bi.jsx)(lx,{})}),(0,bi.jsx)(pe,{path:"/case3Page",element:(0,bi.jsx)(xx,{})}),(0,bi.jsx)(pe,{path:"/case3",element:(0,bi.jsx)(Nx,{})}),(0,bi.jsx)(pe,{path:"/case4Page",element:(0,bi.jsx)(Hx,{})}),(0,bi.jsx)(pe,{path:"/case4",element:(0,bi.jsx)(nv,{})}),(0,bi.jsx)(pe,{path:"/larryPage",element:(0,bi.jsx)(bv,{})}),(0,bi.jsx)(pe,{path:"/vectorPage",element:(0,bi.jsx)(Vv,{})}),(0,bi.jsx)(pe,{path:"/darumaPage",element:(0,bi.jsx)(ay,{})}),(0,bi.jsx)(pe,{path:"/portfolioPage",element:(0,bi.jsx)(vy,{})}),(0,bi.jsx)(pe,{path:"/dailyUiPage",element:(0,bi.jsx)(py,{})}),(0,bi.jsx)(pe,{path:"*",element:(0,bi.jsx)(by,{})})]}),(0,bi.jsx)(jy,{})," "]})})};r.render((0,bi.jsx)(Wu,{children:(0,bi.jsx)(t.StrictMode,{children:(0,bi.jsx)(Ay,{})})}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.15d9eac5.js.map