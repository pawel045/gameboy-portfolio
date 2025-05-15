(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Jf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function wy(){if(x_)return wo;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return wo.Fragment=t,wo.jsx=n,wo.jsxs=n,wo}var y_;function Cy(){return y_||(y_=1,Jf.exports=wy()),Jf.exports}var Io=Cy(),$f={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Dy(){if(S_)return re;S_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(N,$,Et){this.props=N,this.context=$,this.refs=w,this.updater=Et||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function z(N,$,Et){this.props=N,this.context=$,this.refs=w,this.updater=Et||S}var L=z.prototype=new x;L.constructor=z,E(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function I(N,$,Et,At,J,gt){return Et=gt.ref,{$$typeof:r,type:N,key:$,ref:Et!==void 0?Et:null,props:gt}}function X(N,$){return I(N.type,$,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function R(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Et){return $[Et]})}var F=/\/+/g;function ut(N,$){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):$.toString(36)}function rt(){}function xt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(rt,rt):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,$,Et,At,J){var gt=typeof N;(gt==="undefined"||gt==="boolean")&&(N=null);var Tt=!1;if(N===null)Tt=!0;else switch(gt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(N.$$typeof){case r:case t:Tt=!0;break;case g:return Tt=N._init,ft(Tt(N._payload),$,Et,At,J)}}if(Tt)return J=J(N),Tt=At===""?"."+ut(N,0):At,C(J)?(Et="",Tt!=null&&(Et=Tt.replace(F,"$&/")+"/"),ft(J,$,Et,"",function(se){return se})):J!=null&&(U(J)&&(J=X(J,Et+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(F,"$&/")+"/")+Tt)),$.push(J)),1;Tt=0;var Dt=At===""?".":At+":";if(C(N))for(var zt=0;zt<N.length;zt++)At=N[zt],gt=Dt+ut(At,zt),Tt+=ft(At,$,Et,gt,J);else if(zt=v(N),typeof zt=="function")for(N=zt.call(N),zt=0;!(At=N.next()).done;)At=At.value,gt=Dt+ut(At,zt++),Tt+=ft(At,$,Et,gt,J);else if(gt==="object"){if(typeof N.then=="function")return ft(xt(N),$,Et,At,J);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function O(N,$,Et){if(N==null)return N;var At=[],J=0;return ft(N,At,"","",function(gt){return $.call(Et,gt,J++)}),At}function q(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(Et){(N._status===0||N._status===-1)&&(N._status=1,N._result=Et)},function(Et){(N._status===0||N._status===-1)&&(N._status=2,N._result=Et)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var Z=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function bt(){}return re.Children={map:O,forEach:function(N,$,Et){O(N,function(){$.apply(this,arguments)},Et)},count:function(N){var $=0;return O(N,function(){$++}),$},toArray:function(N){return O(N,function($){return $})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=y,re.Fragment=n,re.Profiler=l,re.PureComponent=z,re.StrictMode=a,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return V.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,$,Et){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=E({},N.props),J=N.key,gt=void 0;if($!=null)for(Tt in $.ref!==void 0&&(gt=void 0),$.key!==void 0&&(J=""+$.key),$)!H.call($,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&$.ref===void 0||(At[Tt]=$[Tt]);var Tt=arguments.length-2;if(Tt===1)At.children=Et;else if(1<Tt){for(var Dt=Array(Tt),zt=0;zt<Tt;zt++)Dt[zt]=arguments[zt+2];At.children=Dt}return I(N.type,J,void 0,void 0,gt,At)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,$,Et){var At,J={},gt=null;if($!=null)for(At in $.key!==void 0&&(gt=""+$.key),$)H.call($,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(J[At]=$[At]);var Tt=arguments.length-2;if(Tt===1)J.children=Et;else if(1<Tt){for(var Dt=Array(Tt),zt=0;zt<Tt;zt++)Dt[zt]=arguments[zt+2];J.children=Dt}if(N&&N.defaultProps)for(At in Tt=N.defaultProps,Tt)J[At]===void 0&&(J[At]=Tt[At]);return I(N,gt,void 0,void 0,null,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:h,render:N}},re.isValidElement=U,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:q}},re.memo=function(N,$){return{$$typeof:m,type:N,compare:$===void 0?null:$}},re.startTransition=function(N){var $=V.T,Et={};V.T=Et;try{var At=N(),J=V.S;J!==null&&J(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(bt,Z)}catch(gt){Z(gt)}finally{V.T=$}},re.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},re.use=function(N){return V.H.use(N)},re.useActionState=function(N,$,Et){return V.H.useActionState(N,$,Et)},re.useCallback=function(N,$){return V.H.useCallback(N,$)},re.useContext=function(N){return V.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,$){return V.H.useDeferredValue(N,$)},re.useEffect=function(N,$,Et){var At=V.H;if(typeof Et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return At.useEffect(N,$)},re.useId=function(){return V.H.useId()},re.useImperativeHandle=function(N,$,Et){return V.H.useImperativeHandle(N,$,Et)},re.useInsertionEffect=function(N,$){return V.H.useInsertionEffect(N,$)},re.useLayoutEffect=function(N,$){return V.H.useLayoutEffect(N,$)},re.useMemo=function(N,$){return V.H.useMemo(N,$)},re.useOptimistic=function(N,$){return V.H.useOptimistic(N,$)},re.useReducer=function(N,$,Et){return V.H.useReducer(N,$,Et)},re.useRef=function(N){return V.H.useRef(N)},re.useState=function(N){return V.H.useState(N)},re.useSyncExternalStore=function(N,$,Et){return V.H.useSyncExternalStore(N,$,Et)},re.useTransition=function(){return V.H.useTransition()},re.version="19.1.0",re}var M_;function Cd(){return M_||(M_=1,$f.exports=Dy()),$f.exports}var Bv=Cd(),th={exports:{}},Co={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Uy(){return E_||(E_=1,function(r){function t(O,q){var Z=O.length;O.push(q);t:for(;0<Z;){var bt=Z-1>>>1,N=O[bt];if(0<l(N,q))O[bt]=q,O[Z]=N,Z=bt;else break t}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var q=O[0],Z=O.pop();if(Z!==q){O[0]=Z;t:for(var bt=0,N=O.length,$=N>>>1;bt<$;){var Et=2*(bt+1)-1,At=O[Et],J=Et+1,gt=O[J];if(0>l(At,Z))J<N&&0>l(gt,At)?(O[bt]=gt,O[J]=Z,bt=J):(O[bt]=At,O[Et]=Z,bt=Et);else if(J<N&&0>l(gt,Z))O[bt]=gt,O[J]=Z,bt=J;else break t}}return q}function l(O,q){var Z=O.sortIndex-q.sortIndex;return Z!==0?Z:O.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,v=3,S=!1,E=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(O){for(var q=n(m);q!==null;){if(q.callback===null)a(m);else if(q.startTime<=O)a(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=n(m)}}function V(O){if(w=!1,C(O),!E)if(n(p)!==null)E=!0,H||(H=!0,ut());else{var q=n(m);q!==null&&ft(V,q.startTime-O)}}var H=!1,I=-1,X=5,U=-1;function R(){return y?!0:!(r.unstable_now()-U<X)}function F(){if(y=!1,H){var O=r.unstable_now();U=O;var q=!0;try{t:{E=!1,w&&(w=!1,z(I),I=-1),S=!0;var Z=v;try{e:{for(C(O),_=n(p);_!==null&&!(_.expirationTime>O&&R());){var bt=_.callback;if(typeof bt=="function"){_.callback=null,v=_.priorityLevel;var N=bt(_.expirationTime<=O);if(O=r.unstable_now(),typeof N=="function"){_.callback=N,C(O),q=!0;break e}_===n(p)&&a(p),C(O)}else a(p);_=n(p)}if(_!==null)q=!0;else{var $=n(m);$!==null&&ft(V,$.startTime-O),q=!1}}break t}finally{_=null,v=Z,S=!1}q=void 0}}finally{q?ut():H=!1}}}var ut;if(typeof L=="function")ut=function(){L(F)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,xt=rt.port2;rt.port1.onmessage=F,ut=function(){xt.postMessage(null)}}else ut=function(){x(F,0)};function ft(O,q){I=x(function(){O(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(O){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var Z=v;v=q;try{return O()}finally{v=Z}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=v;v=O;try{return q()}finally{v=Z}},r.unstable_scheduleCallback=function(O,q,Z){var bt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?bt+Z:bt):Z=bt,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Z+N,O={id:g++,callback:q,priorityLevel:O,startTime:Z,expirationTime:N,sortIndex:-1},Z>bt?(O.sortIndex=Z,t(m,O),n(p)===null&&O===n(m)&&(w?(z(I),I=-1):w=!0,ft(V,Z-bt))):(O.sortIndex=N,t(p,O),E||S||(E=!0,H||(H=!0,ut()))),O},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(O){var q=v;return function(){var Z=v;v=q;try{return O.apply(this,arguments)}finally{v=Z}}}}(nh)),nh}var T_;function Ly(){return T_||(T_=1,eh.exports=Uy()),eh.exports}var ih={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function Ny(){if(b_)return Cn;b_=1;var r=Cd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Cn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Cn.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Cn.requestFormReset=function(p){a.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var A_;function Oy(){if(A_)return ih.exports;A_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ih.exports=Ny(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function Py(){if(R_)return Co;R_=1;var r=Ly(),t=Cd(),n=Oy();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return h(u),e;if(d===o)return h(u),i;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=d;else{for(var M=!1,b=u.child;b;){if(b===s){M=!0,s=u,o=d;break}if(b===o){M=!0,o=u,s=d;break}b=b.sibling}if(!M){for(b=d.child;b;){if(b===s){M=!0,s=d,o=u;break}if(b===o){M=!0,o=d,s=u;break}b=b.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function m(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=m(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case w:return"StrictMode";case V:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:xt(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return xt(e(i))}catch{}}return null}var ft=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},bt=[],N=-1;function $(e){return{current:e}}function Et(e){0>N||(e.current=bt[N],bt[N]=null,N--)}function At(e,i){N++,bt[N]=e.current,e.current=i}var J=$(null),gt=$(null),Tt=$(null),Dt=$(null);function zt(e,i){switch(At(Tt,i),At(gt,e),At(J,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Yg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Yg(i),e=Zg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(J),At(J,e)}function se(){Et(J),Et(gt),Et(Tt)}function jt(e){e.memoizedState!==null&&At(Dt,e);var i=J.current,s=Zg(i,e.type);i!==s&&(At(gt,e),At(J,s))}function ve(e){gt.current===e&&(Et(J),Et(gt)),Dt.current===e&&(Et(Dt),Eo._currentValue=Z)}var Ee=Object.prototype.hasOwnProperty,le=r.unstable_scheduleCallback,B=r.unstable_cancelCallback,ke=r.unstable_shouldYield,yt=r.unstable_requestPaint,vt=r.unstable_now,pt=r.unstable_getCurrentPriorityLevel,Nt=r.unstable_ImmediatePriority,dt=r.unstable_UserBlockingPriority,D=r.unstable_NormalPriority,T=r.unstable_LowPriority,j=r.unstable_IdlePriority,lt=r.log,mt=r.unstable_setDisableYieldValue,ot=null,Pt=null;function Ct(e){if(typeof lt=="function"&&mt(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(ot,e)}catch{}}var Lt=Math.clz32?Math.clz32:kt,de=Math.log,wt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(de(e)/wt|0)|0}var Zt=256,Kt=4194304;function Ft(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=Ft(o):(M&=b,M!==0?u=Ft(M):s||(s=b&~e,s!==0&&(u=Ft(s))))):(b=o&~d,b!==0?u=Ft(b):M!==0?u=Ft(M):s||(s=o&~e,s!==0&&(u=Ft(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function ie(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Le(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),e}function Ht(){var e=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),e}function ct(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function St(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vt(e,i,s,o,u,d){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,et=e.hiddenUpdates;for(s=M&~s;0<s;){var ht=31-Lt(s),Mt=1<<ht;b[ht]=0,P[ht]=-1;var nt=et[ht];if(nt!==null)for(et[ht]=null,ht=0;ht<nt.length;ht++){var it=nt[ht];it!==null&&(it.lane&=-536870913)}s&=~Mt}o!==0&&Gt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~i))}function Gt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Lt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function ae(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Lt(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function He(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function en(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function Xn(e,i){var s=q.p;try{return q.p=e,i()}finally{q.p=s}}var pn=Math.random().toString(36).slice(2),on="__reactFiber$"+pn,Sn="__reactProps$"+pn,zn="__reactContainer$"+pn,Ya="__reactEvents$"+pn,$o="__reactListeners$"+pn,tl="__reactHandles$"+pn,Za="__reactResources$"+pn,la="__reactMarker$"+pn;function ca(e){delete e[on],delete e[Sn],delete e[Ya],delete e[$o],delete e[tl]}function Ui(e){var i=e[on];if(i)return i;for(var s=e.parentNode;s;){if(i=s[zn]||s[on]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Jg(e);e!==null;){if(s=e[on])return s;e=Jg(e)}return i}e=s,s=e.parentNode}return null}function Li(e){if(e=e[on]||e[zn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function ja(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ua(e){var i=e[Za];return i||(i=e[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function nn(e){e[la]=!0}var el=new Set,nl={};function Ni(e,i){A(e,i),A(e+"Capture",i)}function A(e,i){for(nl[e]=i,e=0;e<i.length;e++)el.add(i[e])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function Q(e){return Ee.call(st,e)?!0:Ee.call(at,e)?!1:K.test(e)?st[e]=!0:(at[e]=!0,!1)}function Rt(e,i,s){if(Q(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ot(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Bt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var Xt,ee;function Qt(e){if(Xt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Xt=i&&i[1]||"",ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+ee}var Yt=!1;function me(e,i){if(!e||Yt)return"";Yt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(it){var nt=it}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(it){nt=it}e.call(Mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],b=d[1];if(M&&b){var P=M.split(`
`),et=b.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===et.length)for(o=P.length-1,u=et.length-1;1<=o&&0<=u&&P[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==et[u]){var ht=`
`+P[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Yt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Qt(s):""}function be(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return Qt("Activity");default:return""}}function qe(e){try{var i="";do i+=be(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Jt(e){var i=ye(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function je(e){e._valueTracker||(e._valueTracker=Jt(e))}function Me(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fa=/[\n"\\]/g;function Ge(e){return e.replace(fa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Oi(e,i,s,o,u,d,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+xe(i)):e.value!==""+xe(i)&&(e.value=""+xe(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Rn(e,M,xe(i)):s!=null?Rn(e,M,xe(s)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+xe(b):e.removeAttribute("name")}function Ie(e,i,s,o,u,d,M,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+xe(s):"",i=i!=null?""+xe(i):s,b||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Rn(e,i,s){i==="number"&&An(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ln(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+xe(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function mn(e,i,s){if(i!=null&&(i=""+xe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+xe(s):""}function Mn(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ft(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=xe(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function Si(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yd(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Pi.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Zd(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&Yd(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Yd(e,d,i[d])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return R0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Cs=null;function jd(e){var i=Li(e);if(i&&(e=i.stateNode)){var s=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Oi(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ge(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(a(90));Oi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Me(o)}break t;case"textarea":mn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&ln(e,!!s.multiple,i,!1)}}}var $c=!1;function Kd(e,i,s){if($c)return e(i,s);$c=!0;try{var o=e(i);return o}finally{if($c=!1,(ws!==null||Cs!==null)&&(Vl(),ws&&(i=ws,e=Cs,Cs=ws=null,jd(i),e)))for(i=0;i<e.length;i++)jd(e[i])}}function Pr(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Sn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(zi)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{tu=!1}var ha=null,eu=null,al=null;function Qd(){if(al)return al;var e,i=eu,s=i.length,o,u="value"in ha?ha.value:ha.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var M=s-e;for(o=1;o<=M&&i[s-o]===u[d-o];o++);return al=u.slice(e,1<o?1-o:void 0)}function sl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Jd(){return!1}function Bn(e){function i(s,o,u,d,M){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?rl:Jd,this.isPropagationStopped=Jd,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),i}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Bn(Ka),Br=g({},Ka,{view:0,detail:0}),w0=Bn(Br),nu,iu,Ir,ll=g({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(nu=e.screenX-Ir.screenX,iu=e.screenY-Ir.screenY):iu=nu=0,Ir=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),$d=Bn(ll),C0=g({},ll,{dataTransfer:0}),D0=Bn(C0),U0=g({},Br,{relatedTarget:0}),au=Bn(U0),L0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=Bn(L0),O0=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),P0=Bn(O0),z0=g({},Ka,{data:0}),tp=Bn(z0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=F0[e])?!!i[e]:!1}function su(){return H0}var G0=g({},Br,{key:function(e){if(e.key){var i=B0[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=Bn(G0),k0=g({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Bn(k0),X0=g({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),W0=Bn(X0),q0=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Bn(q0),Z0=g({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Bn(Z0),K0=g({},Ka,{newState:0,oldState:0}),Q0=Bn(K0),J0=[9,13,27,32],ru=zi&&"CompositionEvent"in window,Fr=null;zi&&"documentMode"in document&&(Fr=document.documentMode);var $0=zi&&"TextEvent"in window&&!Fr,np=zi&&(!ru||Fr&&8<Fr&&11>=Fr),ip=" ",ap=!1;function sp(e,i){switch(e){case"keyup":return J0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ds=!1;function tx(e,i){switch(e){case"compositionend":return rp(i);case"keypress":return i.which!==32?null:(ap=!0,ip);case"textInput":return e=i.data,e===ip&&ap?null:e;default:return null}}function ex(e,i){if(Ds)return e==="compositionend"||!ru&&sp(e,i)?(e=Qd(),al=eu=ha=null,Ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return np&&i.locale!=="ko"?null:i.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!nx[e.type]:i==="textarea"}function lp(e,i,s,o){ws?Cs?Cs.push(o):Cs=[o]:ws=o,i=Zl(i,"onChange"),0<i.length&&(s=new ol("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var Hr=null,Gr=null;function ix(e){Vg(e,0)}function cl(e){var i=ja(e);if(Me(i))return e}function cp(e,i){if(e==="change")return i}var up=!1;if(zi){var ou;if(zi){var lu="oninput"in document;if(!lu){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),lu=typeof fp.oninput=="function"}ou=lu}else ou=!1;up=ou&&(!document.documentMode||9<document.documentMode)}function hp(){Hr&&(Hr.detachEvent("onpropertychange",dp),Gr=Hr=null)}function dp(e){if(e.propertyName==="value"&&cl(Gr)){var i=[];lp(i,Gr,e,Jc(e)),Kd(ix,i)}}function ax(e,i,s){e==="focusin"?(hp(),Hr=i,Gr=s,Hr.attachEvent("onpropertychange",dp)):e==="focusout"&&hp()}function sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Gr)}function rx(e,i){if(e==="click")return cl(i)}function ox(e,i){if(e==="input"||e==="change")return cl(i)}function lx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Wn=typeof Object.is=="function"?Object.is:lx;function Vr(e,i){if(Wn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!Ee.call(i,u)||!Wn(e[u],i[u]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,i){var s=pp(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=pp(s)}}function gp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?gp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function _p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=An(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=An(e.document)}return i}function cu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var cx=zi&&"documentMode"in document&&11>=document.documentMode,Us=null,uu=null,kr=null,fu=!1;function vp(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;fu||Us==null||Us!==An(o)||(o=Us,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),kr&&Vr(kr,o)||(kr=o,o=Zl(uu,"onSelect"),0<o.length&&(i=new ol("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Us)))}function Qa(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Ls={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},hu={},xp={};zi&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Ja(e){if(hu[e])return hu[e];if(!Ls[e])return e;var i=Ls[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in xp)return hu[e]=i[s];return e}var yp=Ja("animationend"),Sp=Ja("animationiteration"),Mp=Ja("animationstart"),ux=Ja("transitionrun"),fx=Ja("transitionstart"),hx=Ja("transitioncancel"),Ep=Ja("transitionend"),Tp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function fi(e,i){Tp.set(e,i),Ni(i,[e])}var bp=new WeakMap;function ti(e,i){if(typeof e=="object"&&e!==null){var s=bp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:qe(i)},bp.set(e,i),i)}return{value:e,source:i,stack:qe(i)}}var ei=[],Ns=0,pu=0;function ul(){for(var e=Ns,i=pu=Ns=0;i<e;){var s=ei[i];ei[i++]=null;var o=ei[i];ei[i++]=null;var u=ei[i];ei[i++]=null;var d=ei[i];if(ei[i++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Ap(s,u,d)}}function fl(e,i,s,o){ei[Ns++]=e,ei[Ns++]=i,ei[Ns++]=s,ei[Ns++]=o,pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mu(e,i,s,o){return fl(e,i,s,o),hl(e)}function Os(e,i){return fl(e,null,null,i),hl(e)}function Ap(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Lt(s),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),d):null}function hl(e){if(50<mo)throw mo=0,Mf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ps={};function dx(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,i,s,o){return new dx(e,i,s,o)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,i){var s=e.alternate;return s===null?(s=qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Rp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function dl(e,i,s,o,u,d){var M=0;if(o=e,typeof e=="function")gu(e)&&(M=1);else if(typeof e=="string")M=my(e,s,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=qn(31,s,i,u),e.elementType=U,e.lanes=d,e;case E:return $a(s.children,u,d,i);case w:M=8,u|=24;break;case y:return e=qn(12,s,i,u|2),e.elementType=y,e.lanes=d,e;case V:return e=qn(13,s,i,u),e.elementType=V,e.lanes=d,e;case H:return e=qn(19,s,i,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case L:M=10;break t;case z:M=9;break t;case C:M=11;break t;case I:M=14;break t;case X:M=16,o=null;break t}M=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=qn(M,s,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function $a(e,i,s,o){return e=qn(7,e,o,i),e.lanes=s,e}function _u(e,i,s){return e=qn(6,e,null,i),e.lanes=s,e}function vu(e,i,s){return i=qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var zs=[],Bs=0,pl=null,ml=0,ni=[],ii=0,ts=null,Ii=1,Fi="";function es(e,i){zs[Bs++]=ml,zs[Bs++]=pl,pl=e,ml=i}function wp(e,i,s){ni[ii++]=Ii,ni[ii++]=Fi,ni[ii++]=ts,ts=e;var o=Ii;e=Fi;var u=32-Lt(o)-1;o&=~(1<<u),s+=1;var d=32-Lt(i)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Ii=1<<32-Lt(i)+u|s<<u|o,Fi=d+e}else Ii=1<<d|s<<u|o,Fi=e}function xu(e){e.return!==null&&(es(e,1),wp(e,1,0))}function yu(e){for(;e===pl;)pl=zs[--Bs],zs[Bs]=null,ml=zs[--Bs],zs[Bs]=null;for(;e===ts;)ts=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null,Ii=ni[--ii],ni[ii]=null}var Nn=null,Ke=null,we=!1,ns=null,Mi=!1,Su=Error(a(519));function is(e){var i=Error(a(418,""));throw qr(ti(i,e)),Su}function Cp(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[on]=e,i[Sn]=o,s){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(s=0;s<_o.length;s++)_e(_o[s],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":_e("invalid",i),Ie(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),je(i);break;case"select":_e("invalid",i);break;case"textarea":_e("invalid",i),Mn(i,o.value,o.defaultValue,o.children),je(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||qg(i.textContent,s)?(o.popover!=null&&(_e("beforetoggle",i),_e("toggle",i)),o.onScroll!=null&&_e("scroll",i),o.onScrollEnd!=null&&_e("scrollend",i),o.onClick!=null&&(i.onclick=jl),i=!0):i=!1,i||is(e)}function Dp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Nn=Nn.return}}function Xr(e){if(e!==Nn)return!1;if(!we)return Dp(e),we=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||If(e.type,e.memoizedProps)),s=!s),s&&Ke&&is(e),Dp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){Ke=di(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}Ke=null}}else i===27?(i=Ke,wa(e.type)?(e=Vf,Vf=null,Ke=e):Ke=i):Ke=Nn?di(e.stateNode.nextSibling):null;return!0}function Wr(){Ke=Nn=null,we=!1}function Up(){var e=ns;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),ns=null),e}function qr(e){ns===null?ns=[e]:ns.push(e)}var Mu=$(null),as=null,Hi=null;function da(e,i,s){At(Mu,i._currentValue),i._currentValue=s}function Gi(e){e._currentValue=Mu.current,Et(Mu)}function Eu(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Tu(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var P=0;P<i.length;P++)if(b.context===i[P]){d.lanes|=s,b=d.alternate,b!==null&&(b.lanes|=s),Eu(d.return,s,e),o||(M=null);break t}d=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(a(341));M.lanes|=s,d=M.alternate,d!==null&&(d.lanes|=s),Eu(M,s,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Yr(e,i,s,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var b=u.type;Wn(u.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(u===Dt.current){if(M=u.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Eo):e=[Eo])}u=u.return}e!==null&&Tu(i,e,s,o),i.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Lp(as,e)}function _l(e,i){return as===null&&ss(e),Lp(e,i)}function Lp(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Hi===null){if(e===null)throw Error(a(308));Hi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Hi=Hi.next=i;return s}var px=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},mx=r.unstable_scheduleCallback,gx=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new px,data:new Map,refCount:0}}function Zr(e){e.refCount--,e.refCount===0&&mx(gx,function(){e.controller.abort()})}var jr=null,Au=0,Is=0,Fs=null;function _x(e,i){if(jr===null){var s=jr=[];Au=0,Is=Cf(),Fs={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Au++,i.then(Np,Np),i}function Np(){if(--Au===0&&jr!==null){Fs!==null&&(Fs.status="fulfilled");var e=jr;jr=null,Is=0,Fs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function vx(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Op=O.S;O.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&_x(e,i),Op!==null&&Op(e,i)};var rs=$(null);function Ru(){var e=rs.current;return e!==null?e:Ve.pooledCache}function vl(e,i){i===null?At(rs,rs.current):At(rs,i.pool)}function Pp(){var e=Ru();return e===null?null:{parent:cn._currentValue,pool:e}}var Kr=Error(a(460)),zp=Error(a(474)),xl=Error(a(542)),wu={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function Ip(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(yl,yl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hp(e),e;default:if(typeof i.status=="string")i.then(yl,yl);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hp(e),e}throw Qr=i,Kr}}var Qr=null;function Fp(){if(Qr===null)throw Error(a(459));var e=Qr;return Qr=null,e}function Hp(e){if(e===Kr||e===xl)throw Error(a(483))}var pa=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=hl(e),Ap(e,null,s),i}return fl(e,o,i,s),hl(e)}function Jr(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ae(e,s)}}function Uu(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Lu=!1;function $r(){if(Lu){var e=Fs;if(e!==null)throw e}}function to(e,i,s,o){Lu=!1;var u=e.updateQueue;pa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var P=b,et=P.next;P.next=null,M===null?d=et:M.next=et,M=P;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==M&&(b===null?ht.firstBaseUpdate=et:b.next=et,ht.lastBaseUpdate=P))}if(d!==null){var Mt=u.baseState;M=0,ht=et=P=null,b=d;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(Se&nt)===nt:(o&nt)===nt){nt!==0&&nt===Is&&(Lu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ne=e,$t=b;nt=i;var Pe=s;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){Mt=ne.call(Pe,Mt,nt);break t}Mt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,nt=typeof ne=="function"?ne.call(Pe,Mt,nt):ne,nt==null)break t;Mt=g({},Mt,nt);break t;case 2:pa=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(et=ht=it,P=Mt):ht=ht.next=it,M|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;it=b,b=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ht===null&&(P=Mt),u.baseState=P,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,d===null&&(u.shared.lanes=0),Ta|=M,e.lanes=M,e.memoizedState=Mt}}function Gp(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Vp(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Gp(s[e],i)}var Hs=$(null),Sl=$(0);function kp(e,i){e=Zi,At(Sl,e),At(Hs,i),Zi=e|i.baseLanes}function Nu(){At(Sl,Zi),At(Hs,Hs.current)}function Ou(){Zi=Sl.current,Et(Hs),Et(Sl)}var _a=0,fe=null,Ne=null,an=null,Ml=!1,Gs=!1,os=!1,El=0,eo=0,Vs=null,xx=0;function $e(){throw Error(a(321))}function Pu(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Wn(e[s],i[s]))return!1;return!0}function zu(e,i,s,o,u,d){return _a=d,fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=e===null||e.memoizedState===null?Am:Rm,os=!1,d=s(o,u),os=!1,Gs&&(d=Wp(i,s,o,u)),Xp(e),d}function Xp(e){O.H=Cl;var i=Ne!==null&&Ne.next!==null;if(_a=0,an=Ne=fe=null,Ml=!1,eo=0,Vs=null,i)throw Error(a(300));e===null||gn||(e=e.dependencies,e!==null&&gl(e)&&(gn=!0))}function Wp(e,i,s,o){fe=e;var u=0;do{if(Gs&&(Vs=null),eo=0,Gs=!1,25<=u)throw Error(a(301));if(u+=1,an=Ne=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Ax,d=i(s,o)}while(Gs);return d}function yx(){var e=O.H,i=e.useState()[0];return i=typeof i.then=="function"?no(i):i,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(fe.flags|=1024),i}function Bu(){var e=El!==0;return El=0,e}function Iu(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Fu(e){if(Ml){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ml=!1}_a=0,an=Ne=fe=null,Gs=!1,eo=El=0,Vs=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?fe.memoizedState=an=e:an=an.next=e,an}function sn(){if(Ne===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var i=an===null?fe.memoizedState:an.next;if(i!==null)an=i,Ne=e;else{if(e===null)throw fe.alternate===null?Error(a(467)):Error(a(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?fe.memoizedState=an=e:an=an.next=e}return an}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var i=eo;return eo+=1,Vs===null&&(Vs=[]),e=Ip(Vs,e,i),i=fe,(an===null?i.memoizedState:an.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?Am:Rm),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===L)return wn(e)}throw Error(a(438,String(e)))}function Gu(e){var i=null,s=fe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Hu(),fe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=R;return i.index++,s}function Vi(e,i){return typeof i=="function"?i(e):i}function bl(e){var i=sn();return Vu(i,Ne,e)}function Vu(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var b=M=null,P=null,et=i,ht=!1;do{var Mt=et.lane&-536870913;if(Mt!==et.lane?(Se&Mt)===Mt:(_a&Mt)===Mt){var nt=et.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),Mt===Is&&(ht=!0);else if((_a&nt)===nt){et=et.next,nt===Is&&(ht=!0);continue}else Mt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},P===null?(b=P=Mt,M=d):P=P.next=Mt,fe.lanes|=nt,Ta|=nt;Mt=et.action,os&&s(d,Mt),d=et.hasEagerState?et.eagerState:s(d,Mt)}else nt={lane:Mt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},P===null?(b=P=nt,M=d):P=P.next=nt,fe.lanes|=Mt,Ta|=Mt;et=et.next}while(et!==null&&et!==i);if(P===null?M=d:P.next=b,!Wn(d,e.memoizedState)&&(gn=!0,ht&&(s=Fs,s!==null)))throw s;e.memoizedState=d,e.baseState=M,e.baseQueue=P,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ku(e){var i=sn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Wn(d,i.memoizedState)||(gn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function qp(e,i,s){var o=fe,u=sn(),d=we;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!Wn((Ne||u).memoizedState,s);M&&(u.memoizedState=s,gn=!0),u=u.queue;var b=jp.bind(null,o,u,e);if(io(2048,8,b,[e]),u.getSnapshot!==i||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,ks(9,Al(),Zp.bind(null,o,u,s,i),null),Ve===null)throw Error(a(349));d||(_a&124)!==0||Yp(o,i,s)}return s}function Yp(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=fe.updateQueue,i===null?(i=Hu(),fe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Zp(e,i,s,o){i.value=s,i.getSnapshot=o,Kp(i)&&Qp(e)}function jp(e,i,s){return s(function(){Kp(i)&&Qp(e)})}function Kp(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Wn(e,s)}catch{return!0}}function Qp(e){var i=Os(e,2);i!==null&&Qn(i,e,2)}function Xu(e){var i=In();if(typeof e=="function"){var s=e;if(e=s(),os){Ct(!0);try{s()}finally{Ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function Jp(e,i,s,o){return e.baseState=s,Vu(e,Ne,typeof o=="function"?o:Vi)}function Sx(e,i,s,o,u){if(wl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};O.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,$p(i,d)):(d.next=s.next,i.pending=s.next=d)}}function $p(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=O.T,M={};O.T=M;try{var b=s(u,o),P=O.S;P!==null&&P(M,b),tm(e,i,b)}catch(et){Wu(e,i,et)}finally{O.T=d}}else try{d=s(u,o),tm(e,i,d)}catch(et){Wu(e,i,et)}}function tm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){em(e,i,o)},function(o){return Wu(e,i,o)}):em(e,i,s)}function em(e,i,s){i.status="fulfilled",i.value=s,nm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,$p(e,s)))}function Wu(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,nm(i),i=i.next;while(i!==o)}e.action=null}function nm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function im(e,i){return i}function am(e,i){if(we){var s=Ve.formState;if(s!==null){t:{var o=fe;if(we){if(Ke){e:{for(var u=Ke,d=Mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ke=di(u.nextSibling),o=u.data==="F!";break t}}is(o)}o=!1}o&&(i=s[0])}}return s=In(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:i},s.queue=o,s=Em.bind(null,fe,o),o.dispatch=s,o=Xu(!1),d=Ku.bind(null,fe,!1,o.queue),o=In(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=Sx.bind(null,fe,u,d,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function sm(e){var i=sn();return rm(i,Ne,e)}function rm(e,i,s){if(i=Vu(e,i,im)[0],e=bl(Vi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=no(i)}catch(M){throw M===Kr?xl:M}else o=i;i=sn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(fe.flags|=2048,ks(9,Al(),Mx.bind(null,u,s),null)),[o,d,e]}function Mx(e,i){e.action=i}function om(e){var i=sn(),s=Ne;if(s!==null)return rm(i,s,e);sn(),i=i.memoizedState,s=sn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function ks(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=fe.updateQueue,i===null&&(i=Hu(),fe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function lm(){return sn().memoizedState}function Rl(e,i,s,o){var u=In();o=o===void 0?null:o,fe.flags|=e,u.memoizedState=ks(1|i,Al(),s,o)}function io(e,i,s,o){var u=sn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ne!==null&&o!==null&&Pu(o,Ne.memoizedState.deps)?u.memoizedState=ks(i,d,s,o):(fe.flags|=e,u.memoizedState=ks(1|i,d,s,o))}function cm(e,i){Rl(8390656,8,e,i)}function um(e,i){io(2048,8,e,i)}function fm(e,i){return io(4,2,e,i)}function hm(e,i){return io(4,4,e,i)}function dm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function pm(e,i,s){s=s!=null?s.concat([e]):null,io(4,4,dm.bind(null,i,e),s)}function qu(){}function mm(e,i){var s=sn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Pu(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function gm(e,i){var s=sn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Pu(i,o[1]))return o[0];if(o=e(),os){Ct(!0);try{e()}finally{Ct(!1)}}return s.memoizedState=[o,i],o}function Yu(e,i,s){return s===void 0||(_a&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=xg(),fe.lanes|=e,Ta|=e,s)}function _m(e,i,s,o){return Wn(s,i)?s:Hs.current!==null?(e=Yu(e,s,o),Wn(e,i)||(gn=!0),e):(_a&42)===0?(gn=!0,e.memoizedState=s):(e=xg(),fe.lanes|=e,Ta|=e,i)}function vm(e,i,s,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var M=O.T,b={};O.T=b,Ku(e,!1,i,s);try{var P=u(),et=O.S;if(et!==null&&et(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=vx(P,o);ao(e,i,ht,Kn(e))}else ao(e,i,o,Kn(e))}catch(Mt){ao(e,i,{then:function(){},status:"rejected",reason:Mt},Kn())}finally{q.p=d,O.T=M}}function Ex(){}function Zu(e,i,s,o){if(e.tag!==5)throw Error(a(476));var u=xm(e).queue;vm(e,u,i,Z,s===null?Ex:function(){return ym(e),s(o)})}function xm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Z},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ym(e){var i=xm(e).next.queue;ao(e,i,{},Kn())}function ju(){return wn(Eo)}function Sm(){return sn().memoizedState}function Mm(){return sn().memoizedState}function Tx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Kn();e=ma(s);var o=ga(i,e,s);o!==null&&(Qn(o,i,s),Jr(o,i,s)),i={cache:bu()},e.payload=i;return}i=i.return}}function bx(e,i,s){var o=Kn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},wl(e)?Tm(i,s):(s=mu(e,i,s,o),s!==null&&(Qn(s,e,o),bm(s,i,o)))}function Em(e,i,s){var o=Kn();ao(e,i,s,o)}function ao(e,i,s,o){var u={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(wl(e))Tm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,b=d(M,s);if(u.hasEagerState=!0,u.eagerState=b,Wn(b,M))return fl(e,i,u,0),Ve===null&&ul(),!1}catch{}finally{}if(s=mu(e,i,u,o),s!==null)return Qn(s,e,o),bm(s,i,o),!0}return!1}function Ku(e,i,s,o){if(o={lane:2,revertLane:Cf(),action:o,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(i)throw Error(a(479))}else i=mu(e,s,o,2),i!==null&&Qn(i,e,2)}function wl(e){var i=e.alternate;return e===fe||i!==null&&i===fe}function Tm(e,i){Gs=Ml=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function bm(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ae(e,s)}}var Cl={readContext:wn,use:Tl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},Am={readContext:wn,use:Tl,useCallback:function(e,i){return In().memoizedState=[e,i===void 0?null:i],e},useContext:wn,useEffect:cm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Rl(4194308,4,dm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Rl(4194308,4,e,i)},useInsertionEffect:function(e,i){Rl(4,2,e,i)},useMemo:function(e,i){var s=In();i=i===void 0?null:i;var o=e();if(os){Ct(!0);try{e()}finally{Ct(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=In();if(s!==void 0){var u=s(i);if(os){Ct(!0);try{s(i)}finally{Ct(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=bx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var i=In();return e={current:e},i.memoizedState=e},useState:function(e){e=Xu(e);var i=e.queue,s=Em.bind(null,fe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:qu,useDeferredValue:function(e,i){var s=In();return Yu(s,e,i)},useTransition:function(){var e=Xu(!1);return e=vm.bind(null,fe,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=fe,u=In();if(we){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ve===null)throw Error(a(349));(Se&124)!==0||Yp(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,cm(jp.bind(null,o,d,e),[e]),o.flags|=2048,ks(9,Al(),Zp.bind(null,o,d,s,i),null),s},useId:function(){var e=In(),i=Ve.identifierPrefix;if(we){var s=Fi,o=Ii;s=(o&~(1<<32-Lt(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=El++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=xx++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:ju,useFormState:am,useActionState:am,useOptimistic:function(e){var i=In();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Ku.bind(null,fe,!0,s),s.dispatch=i,[e,i]},useMemoCache:Gu,useCacheRefresh:function(){return In().memoizedState=Tx.bind(null,fe)}},Rm={readContext:wn,use:Tl,useCallback:mm,useContext:wn,useEffect:um,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:bl,useRef:lm,useState:function(){return bl(Vi)},useDebugValue:qu,useDeferredValue:function(e,i){var s=sn();return _m(s,Ne.memoizedState,e,i)},useTransition:function(){var e=bl(Vi)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:no(e),i]},useSyncExternalStore:qp,useId:Sm,useHostTransitionStatus:ju,useFormState:sm,useActionState:sm,useOptimistic:function(e,i){var s=sn();return Jp(s,Ne,e,i)},useMemoCache:Gu,useCacheRefresh:Mm},Ax={readContext:wn,use:Tl,useCallback:mm,useContext:wn,useEffect:um,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:ku,useRef:lm,useState:function(){return ku(Vi)},useDebugValue:qu,useDeferredValue:function(e,i){var s=sn();return Ne===null?Yu(s,e,i):_m(s,Ne.memoizedState,e,i)},useTransition:function(){var e=ku(Vi)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:no(e),i]},useSyncExternalStore:qp,useId:Sm,useHostTransitionStatus:ju,useFormState:om,useActionState:om,useOptimistic:function(e,i){var s=sn();return Ne!==null?Jp(s,Ne,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:Mm},Xs=null,so=0;function Dl(e){var i=so;return so+=1,Xs===null&&(Xs=[]),Ip(Xs,e,i)}function ro(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ul(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function wm(e){var i=e._init;return i(e._payload)}function Cm(e){function i(Y,G){if(e){var tt=Y.deletions;tt===null?(Y.deletions=[G],Y.flags|=16):tt.push(G)}}function s(Y,G){if(!e)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function o(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function u(Y,G){return Y=Bi(Y,G),Y.index=0,Y.sibling=null,Y}function d(Y,G,tt){return Y.index=tt,e?(tt=Y.alternate,tt!==null?(tt=tt.index,tt<G?(Y.flags|=67108866,G):tt):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,G,tt,_t){return G===null||G.tag!==6?(G=_u(tt,Y.mode,_t),G.return=Y,G):(G=u(G,tt),G.return=Y,G)}function P(Y,G,tt,_t){var Wt=tt.type;return Wt===E?ht(Y,G,tt.props.children,_t,tt.key):G!==null&&(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===X&&wm(Wt)===G.type)?(G=u(G,tt.props),ro(G,tt),G.return=Y,G):(G=dl(tt.type,tt.key,tt.props,null,Y.mode,_t),ro(G,tt),G.return=Y,G)}function et(Y,G,tt,_t){return G===null||G.tag!==4||G.stateNode.containerInfo!==tt.containerInfo||G.stateNode.implementation!==tt.implementation?(G=vu(tt,Y.mode,_t),G.return=Y,G):(G=u(G,tt.children||[]),G.return=Y,G)}function ht(Y,G,tt,_t,Wt){return G===null||G.tag!==7?(G=$a(tt,Y.mode,_t,Wt),G.return=Y,G):(G=u(G,tt),G.return=Y,G)}function Mt(Y,G,tt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=_u(""+G,Y.mode,tt),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return tt=dl(G.type,G.key,G.props,null,Y.mode,tt),ro(tt,G),tt.return=Y,tt;case S:return G=vu(G,Y.mode,tt),G.return=Y,G;case X:var _t=G._init;return G=_t(G._payload),Mt(Y,G,tt)}if(ft(G)||ut(G))return G=$a(G,Y.mode,tt,null),G.return=Y,G;if(typeof G.then=="function")return Mt(Y,Dl(G),tt);if(G.$$typeof===L)return Mt(Y,_l(Y,G),tt);Ul(Y,G)}return null}function nt(Y,G,tt,_t){var Wt=G!==null?G.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Wt!==null?null:b(Y,G,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:return tt.key===Wt?P(Y,G,tt,_t):null;case S:return tt.key===Wt?et(Y,G,tt,_t):null;case X:return Wt=tt._init,tt=Wt(tt._payload),nt(Y,G,tt,_t)}if(ft(tt)||ut(tt))return Wt!==null?null:ht(Y,G,tt,_t,null);if(typeof tt.then=="function")return nt(Y,G,Dl(tt),_t);if(tt.$$typeof===L)return nt(Y,G,_l(Y,tt),_t);Ul(Y,tt)}return null}function it(Y,G,tt,_t,Wt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Y=Y.get(tt)||null,b(G,Y,""+_t,Wt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case v:return Y=Y.get(_t.key===null?tt:_t.key)||null,P(G,Y,_t,Wt);case S:return Y=Y.get(_t.key===null?tt:_t.key)||null,et(G,Y,_t,Wt);case X:var pe=_t._init;return _t=pe(_t._payload),it(Y,G,tt,_t,Wt)}if(ft(_t)||ut(_t))return Y=Y.get(tt)||null,ht(G,Y,_t,Wt,null);if(typeof _t.then=="function")return it(Y,G,tt,Dl(_t),Wt);if(_t.$$typeof===L)return it(Y,G,tt,_l(G,_t),Wt);Ul(G,_t)}return null}function ne(Y,G,tt,_t){for(var Wt=null,pe=null,qt=G,te=G=0,vn=null;qt!==null&&te<tt.length;te++){qt.index>te?(vn=qt,qt=null):vn=qt.sibling;var Ae=nt(Y,qt,tt[te],_t);if(Ae===null){qt===null&&(qt=vn);break}e&&qt&&Ae.alternate===null&&i(Y,qt),G=d(Ae,G,te),pe===null?Wt=Ae:pe.sibling=Ae,pe=Ae,qt=vn}if(te===tt.length)return s(Y,qt),we&&es(Y,te),Wt;if(qt===null){for(;te<tt.length;te++)qt=Mt(Y,tt[te],_t),qt!==null&&(G=d(qt,G,te),pe===null?Wt=qt:pe.sibling=qt,pe=qt);return we&&es(Y,te),Wt}for(qt=o(qt);te<tt.length;te++)vn=it(qt,Y,te,tt[te],_t),vn!==null&&(e&&vn.alternate!==null&&qt.delete(vn.key===null?te:vn.key),G=d(vn,G,te),pe===null?Wt=vn:pe.sibling=vn,pe=vn);return e&&qt.forEach(function(Na){return i(Y,Na)}),we&&es(Y,te),Wt}function $t(Y,G,tt,_t){if(tt==null)throw Error(a(151));for(var Wt=null,pe=null,qt=G,te=G=0,vn=null,Ae=tt.next();qt!==null&&!Ae.done;te++,Ae=tt.next()){qt.index>te?(vn=qt,qt=null):vn=qt.sibling;var Na=nt(Y,qt,Ae.value,_t);if(Na===null){qt===null&&(qt=vn);break}e&&qt&&Na.alternate===null&&i(Y,qt),G=d(Na,G,te),pe===null?Wt=Na:pe.sibling=Na,pe=Na,qt=vn}if(Ae.done)return s(Y,qt),we&&es(Y,te),Wt;if(qt===null){for(;!Ae.done;te++,Ae=tt.next())Ae=Mt(Y,Ae.value,_t),Ae!==null&&(G=d(Ae,G,te),pe===null?Wt=Ae:pe.sibling=Ae,pe=Ae);return we&&es(Y,te),Wt}for(qt=o(qt);!Ae.done;te++,Ae=tt.next())Ae=it(qt,Y,te,Ae.value,_t),Ae!==null&&(e&&Ae.alternate!==null&&qt.delete(Ae.key===null?te:Ae.key),G=d(Ae,G,te),pe===null?Wt=Ae:pe.sibling=Ae,pe=Ae);return e&&qt.forEach(function(Ry){return i(Y,Ry)}),we&&es(Y,te),Wt}function Pe(Y,G,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:t:{for(var Wt=tt.key;G!==null;){if(G.key===Wt){if(Wt=tt.type,Wt===E){if(G.tag===7){s(Y,G.sibling),_t=u(G,tt.props.children),_t.return=Y,Y=_t;break t}}else if(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===X&&wm(Wt)===G.type){s(Y,G.sibling),_t=u(G,tt.props),ro(_t,tt),_t.return=Y,Y=_t;break t}s(Y,G);break}else i(Y,G);G=G.sibling}tt.type===E?(_t=$a(tt.props.children,Y.mode,_t,tt.key),_t.return=Y,Y=_t):(_t=dl(tt.type,tt.key,tt.props,null,Y.mode,_t),ro(_t,tt),_t.return=Y,Y=_t)}return M(Y);case S:t:{for(Wt=tt.key;G!==null;){if(G.key===Wt)if(G.tag===4&&G.stateNode.containerInfo===tt.containerInfo&&G.stateNode.implementation===tt.implementation){s(Y,G.sibling),_t=u(G,tt.children||[]),_t.return=Y,Y=_t;break t}else{s(Y,G);break}else i(Y,G);G=G.sibling}_t=vu(tt,Y.mode,_t),_t.return=Y,Y=_t}return M(Y);case X:return Wt=tt._init,tt=Wt(tt._payload),Pe(Y,G,tt,_t)}if(ft(tt))return ne(Y,G,tt,_t);if(ut(tt)){if(Wt=ut(tt),typeof Wt!="function")throw Error(a(150));return tt=Wt.call(tt),$t(Y,G,tt,_t)}if(typeof tt.then=="function")return Pe(Y,G,Dl(tt),_t);if(tt.$$typeof===L)return Pe(Y,G,_l(Y,tt),_t);Ul(Y,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,G!==null&&G.tag===6?(s(Y,G.sibling),_t=u(G,tt),_t.return=Y,Y=_t):(s(Y,G),_t=_u(tt,Y.mode,_t),_t.return=Y,Y=_t),M(Y)):s(Y,G)}return function(Y,G,tt,_t){try{so=0;var Wt=Pe(Y,G,tt,_t);return Xs=null,Wt}catch(qt){if(qt===Kr||qt===xl)throw qt;var pe=qn(29,qt,null,Y.mode);return pe.lanes=_t,pe.return=Y,pe}finally{}}}var Ws=Cm(!0),Dm=Cm(!1),ai=$(null),Ei=null;function va(e){var i=e.alternate;At(un,un.current&1),At(ai,e),Ei===null&&(i===null||Hs.current!==null||i.memoizedState!==null)&&(Ei=e)}function Um(e){if(e.tag===22){if(At(un,un.current),At(ai,e),Ei===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ei=e)}}else xa()}function xa(){At(un,un.current),At(ai,ai.current)}function ki(e){Et(ai),Ei===e&&(Ei=null),Et(un)}var un=$(0);function Ll(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Gf(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Qu(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ju={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=Kn(),u=ma(o);u.payload=i,s!=null&&(u.callback=s),i=ga(e,u,o),i!==null&&(Qn(i,e,o),Jr(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=Kn(),u=ma(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=ga(e,u,o),i!==null&&(Qn(i,e,o),Jr(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Kn(),o=ma(s);o.tag=2,i!=null&&(o.callback=i),i=ga(e,o,s),i!==null&&(Qn(i,e,s),Jr(i,e,s))}};function Lm(e,i,s,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):i.prototype&&i.prototype.isPureReactComponent?!Vr(s,o)||!Vr(u,d):!0}function Nm(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&Ju.enqueueReplaceState(i,i.state,null)}function ls(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Om(e){Nl(e)}function Pm(e){console.error(e)}function zm(e){Nl(e)}function Ol(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(e,i,s){return s=ma(s),s.tag=3,s.payload={element:null},s.callback=function(){Ol(e,i)},s}function Im(e){return e=ma(e),e.tag=3,e}function Fm(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Bm(i,s,o)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Bm(i,s,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Rx(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&Yr(i,s,u,!0),s=ai.current,s!==null){switch(s.tag){case 13:return Ei===null?Tf():s.alternate===null&&Qe===0&&(Qe=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===wu?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Af(e,o,u)),!1;case 22:return s.flags|=65536,o===wu?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Af(e,o,u)),!1}throw Error(a(435,s.tag))}return Af(e,o,u),Tf(),!1}if(we)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==Su&&(e=Error(a(422),{cause:o}),qr(ti(e,s)))):(o!==Su&&(i=Error(a(423),{cause:o}),qr(ti(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,s),u=$u(e.stateNode,o,u),Uu(e,u),Qe!==4&&(Qe=2)),!1;var d=Error(a(520),{cause:o});if(d=ti(d,s),po===null?po=[d]:po.push(d),Qe!==4&&(Qe=2),i===null)return!0;o=ti(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=$u(s.stateNode,o,e),Uu(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ba===null||!ba.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Im(u),Fm(u,e,s,o),Uu(s,u),!1}s=s.return}while(s!==null);return!1}var Hm=Error(a(461)),gn=!1;function En(e,i,s,o){i.child=e===null?Dm(i,null,s,o):Ws(i,e.child,s,o)}function Gm(e,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return ss(i),o=zu(e,i,s,M,d,u),b=Bu(),e!==null&&!gn?(Iu(e,i,u),Xi(e,i,u)):(we&&b&&xu(i),i.flags|=1,En(e,i,o,u),i.child)}function Vm(e,i,s,o,u){if(e===null){var d=s.type;return typeof d=="function"&&!gu(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,km(e,i,d,o,u)):(e=dl(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!lf(e,u)){var M=d.memoizedProps;if(s=s.compare,s=s!==null?s:Vr,s(M,o)&&e.ref===i.ref)return Xi(e,i,u)}return i.flags|=1,e=Bi(d,o),e.ref=i.ref,e.return=i,i.child=e}function km(e,i,s,o,u){if(e!==null){var d=e.memoizedProps;if(Vr(d,o)&&e.ref===i.ref)if(gn=!1,i.pendingProps=o=d,lf(e,u))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,Xi(e,i,u)}return tf(e,i,s,o,u)}function Xm(e,i,s){var o=i.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|s:s,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return Wm(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(i,d!==null?d.cachePool:null),d!==null?kp(i,d):Nu(),Um(i);else return i.lanes=i.childLanes=536870912,Wm(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(vl(i,d.cachePool),kp(i,d),xa(),i.memoizedState=null):(e!==null&&vl(i,null),Nu(),xa());return En(e,i,u,s),i.child}function Wm(e,i,s,o){var u=Ru();return u=u===null?null:{parent:cn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&vl(i,null),Nu(),Um(i),e!==null&&Yr(e,i,o,!0),null}function Pl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function tf(e,i,s,o,u){return ss(i),s=zu(e,i,s,o,void 0,u),o=Bu(),e!==null&&!gn?(Iu(e,i,u),Xi(e,i,u)):(we&&o&&xu(i),i.flags|=1,En(e,i,s,u),i.child)}function qm(e,i,s,o,u,d){return ss(i),i.updateQueue=null,s=Wp(i,o,s,u),Xp(e),o=Bu(),e!==null&&!gn?(Iu(e,i,d),Xi(e,i,d)):(we&&o&&xu(i),i.flags|=1,En(e,i,s,d),i.child)}function Ym(e,i,s,o,u){if(ss(i),i.stateNode===null){var d=Ps,M=s.contextType;typeof M=="object"&&M!==null&&(d=wn(M)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ju,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Cu(i),M=s.contextType,d.context=typeof M=="object"&&M!==null?wn(M):Ps,d.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Qu(i,s,M,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Ju.enqueueReplaceState(d,d.state,null),to(i,o,d,u),$r(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,P=ls(s,b);d.props=P;var et=d.context,ht=s.contextType;M=Ps,typeof ht=="object"&&ht!==null&&(M=wn(ht));var Mt=s.getDerivedStateFromProps;ht=typeof Mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,ht||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==M)&&Nm(i,d,o,M),pa=!1;var nt=i.memoizedState;d.state=nt,to(i,o,d,u),$r(),et=i.memoizedState,b||nt!==et||pa?(typeof Mt=="function"&&(Qu(i,s,Mt,o),et=i.memoizedState),(P=pa||Lm(i,s,P,o,nt,et,M))?(ht||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),d.props=o,d.state=et,d.context=M,o=P):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Du(e,i),M=i.memoizedProps,ht=ls(s,M),d.props=ht,Mt=i.pendingProps,nt=d.context,et=s.contextType,P=Ps,typeof et=="object"&&et!==null&&(P=wn(et)),b=s.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Mt||nt!==P)&&Nm(i,d,o,P),pa=!1,nt=i.memoizedState,d.state=nt,to(i,o,d,u),$r();var it=i.memoizedState;M!==Mt||nt!==it||pa||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof b=="function"&&(Qu(i,s,b,o),it=i.memoizedState),(ht=pa||Lm(i,s,ht,o,nt,it,P)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,it,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,it,P)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=it),d.props=o,d.state=it,d.context=P,o=ht):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Pl(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Ws(i,e.child,null,u),i.child=Ws(i,null,s,u)):En(e,i,s,u),i.memoizedState=d.state,e=i.child):e=Xi(e,i,u),e}function Zm(e,i,s,o){return Wr(),i.flags|=256,En(e,i,s,o),i.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Pp()}}function af(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=si),e}function jm(e,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(u?va(i):xa(),we){var b=Ke,P;if(P=b){t:{for(P=b,b=Mi;P.nodeType!==8;){if(!b){b=null;break t}if(P=di(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(i.memoizedState={dehydrated:b,treeContext:ts!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},P=qn(18,null,null,0),P.stateNode=b,P.return=i,i.child=P,Nn=i,Ke=null,P=!0):P=!1}P||is(i)}if(b=i.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Gf(b)?i.lanes=32:i.lanes=536870912,null;ki(i)}return b=o.children,o=o.fallback,u?(xa(),u=i.mode,b=zl({mode:"hidden",children:b},u),o=$a(o,u,s,null),b.return=i,o.return=i,b.sibling=o,i.child=b,u=i.child,u.memoizedState=nf(s),u.childLanes=af(e,M,s),i.memoizedState=ef,o):(va(i),sf(i,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(d)i.flags&256?(va(i),i.flags&=-257,i=rf(e,i,s)):i.memoizedState!==null?(xa(),i.child=e.child,i.flags|=128,i=null):(xa(),u=o.fallback,b=i.mode,o=zl({mode:"visible",children:o.children},b),u=$a(u,b,s,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,Ws(i,e.child,null,s),o=i.child,o.memoizedState=nf(s),o.childLanes=af(e,M,s),i.memoizedState=ef,i=u);else if(va(i),Gf(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var et=M.dgst;M=et,o=Error(a(419)),o.stack="",o.digest=M,qr({value:o,source:null,stack:null}),i=rf(e,i,s)}else if(gn||Yr(e,i,s,!1),M=(s&e.childLanes)!==0,gn||M){if(M=Ve,M!==null&&(o=s&-s,o=(o&42)!==0?1:He(o),o=(o&(M.suspendedLanes|s))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Os(e,o),Qn(M,e,o),Hm;b.data==="$?"||Tf(),i=rf(e,i,s)}else b.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=P.treeContext,Ke=di(b.nextSibling),Nn=i,we=!0,ns=null,Mi=!1,e!==null&&(ni[ii++]=Ii,ni[ii++]=Fi,ni[ii++]=ts,Ii=e.id,Fi=e.overflow,ts=i),i=sf(i,o.children),i.flags|=4096);return i}return u?(xa(),u=o.fallback,b=i.mode,P=e.child,et=P.sibling,o=Bi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,et!==null?u=Bi(et,u):(u=$a(u,b,s,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,b=e.child.memoizedState,b===null?b=nf(s):(P=b.cachePool,P!==null?(et=cn._currentValue,P=P.parent!==et?{parent:et,pool:et}:P):P=Pp(),b={baseLanes:b.baseLanes|s,cachePool:P}),u.memoizedState=b,u.childLanes=af(e,M,s),i.memoizedState=ef,o):(va(i),s=e.child,e=s.sibling,s=Bi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=s,i.memoizedState=null,s)}function sf(e,i){return i=zl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function zl(e,i){return e=qn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function rf(e,i,s){return Ws(i,e.child,null,s),e=sf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Km(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Eu(e.return,i,s)}function of(e,i,s,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=u)}function Qm(e,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(En(e,i,o.children,s),o=un.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Km(e,s,i);else if(e.tag===19)Km(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(At(un,o),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Ll(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),of(i,!1,u,s,d);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}of(i,!0,s,null,d);break;case"together":of(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ta|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Yr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Bi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Bi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function lf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function wx(e,i,s){switch(i.tag){case 3:zt(i,i.stateNode.containerInfo),da(i,cn,e.memoizedState.cache),Wr();break;case 27:case 5:jt(i);break;case 4:zt(i,i.stateNode.containerInfo);break;case 10:da(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(va(i),i.flags|=128,null):(s&i.child.childLanes)!==0?jm(e,i,s):(va(i),e=Xi(e,i,s),e!==null?e.sibling:null);va(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(Yr(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return Qm(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),At(un,un.current),o)break;return null;case 22:case 23:return i.lanes=0,Xm(e,i,s);case 24:da(i,cn,e.memoizedState.cache)}return Xi(e,i,s)}function Jm(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!lf(e,s)&&(i.flags&128)===0)return gn=!1,wx(e,i,s);gn=(e.flags&131072)!==0}else gn=!1,we&&(i.flags&1048576)!==0&&wp(i,ml,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")gu(o)?(e=ls(o,e),i.tag=1,i=Ym(null,i,o,e,s)):(i.tag=0,i=tf(null,i,o,e,s));else{if(o!=null){if(u=o.$$typeof,u===C){i.tag=11,i=Gm(null,i,o,e,s);break t}else if(u===I){i.tag=14,i=Vm(null,i,o,e,s);break t}}throw i=xt(o)||o,Error(a(306,i,""))}}return i;case 0:return tf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=ls(o,i.pendingProps),Ym(e,i,o,u,s);case 3:t:{if(zt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Du(e,i),to(i,o,null,s);var M=i.memoizedState;if(o=M.cache,da(i,cn,o),o!==d.cache&&Tu(i,[cn],s,!0),$r(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Zm(e,i,o,s);break t}else if(o!==u){u=ti(Error(a(424)),i),qr(u),i=Zm(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=di(e.firstChild),Nn=i,we=!0,ns=null,Mi=!0,s=Dm(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Wr(),o===u){i=Xi(e,i,s);break t}En(e,i,o,s)}i=i.child}return i;case 26:return Pl(e,i),e===null?(s=n_(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,e=i.pendingProps,o=Kl(Tt.current).createElement(s),o[on]=i,o[Sn]=e,bn(o,s,e),nn(o),i.stateNode=o):i.memoizedState=n_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return jt(i),e===null&&we&&(o=i.stateNode=$g(i.type,i.pendingProps,Tt.current),Nn=i,Mi=!0,u=Ke,wa(i.type)?(Vf=u,Ke=di(o.firstChild)):Ke=u),En(e,i,i.pendingProps.children,s),Pl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((u=o=Ke)&&(o=ny(o,i.type,i.pendingProps,Mi),o!==null?(i.stateNode=o,Nn=i,Ke=di(o.firstChild),Mi=!1,u=!0):u=!1),u||is(i)),jt(i),u=i.type,d=i.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,If(u,d)?o=null:M!==null&&If(u,M)&&(i.flags|=32),i.memoizedState!==null&&(u=zu(e,i,yx,null,null,s),Eo._currentValue=u),Pl(e,i),En(e,i,o,s),i.child;case 6:return e===null&&we&&((e=s=Ke)&&(s=iy(s,i.pendingProps,Mi),s!==null?(i.stateNode=s,Nn=i,Ke=null,e=!0):e=!1),e||is(i)),null;case 13:return jm(e,i,s);case 4:return zt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ws(i,null,o,s):En(e,i,o,s),i.child;case 11:return Gm(e,i,i.type,i.pendingProps,s);case 7:return En(e,i,i.pendingProps,s),i.child;case 8:return En(e,i,i.pendingProps.children,s),i.child;case 12:return En(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,da(i,i.type,o.value),En(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,ss(i),u=wn(u),o=o(u),i.flags|=1,En(e,i,o,s),i.child;case 14:return Vm(e,i,i.type,i.pendingProps,s);case 15:return km(e,i,i.type,i.pendingProps,s);case 19:return Qm(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=zl(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Bi(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Xm(e,i,s);case 24:return ss(i),o=wn(cn),e===null?(u=Ru(),u===null&&(u=Ve,d=bu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Cu(i),da(i,cn,u)):((e.lanes&s)!==0&&(Du(e,i),to(i,null,null,s),$r()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),da(i,cn,o)):(o=d.cache,da(i,cn,o),o!==u.cache&&Tu(i,[cn],s,!0))),En(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Wi(e){e.flags|=4}function $m(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!o_(i)){if(i=ai.current,i!==null&&((Se&4194048)===Se?Ei!==null:(Se&62914560)!==Se&&(Se&536870912)===0||i!==Ei))throw Qr=wu,zp;e.flags|=8192}}function Bl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ht():536870912,e.lanes|=i,js|=i)}function oo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function Cx(e,i,s){var o=i.pendingProps;switch(yu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return Ye(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Gi(cn),se(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Xr(i)?Wi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Up())),Ye(i),null;case 26:return s=i.memoizedState,e===null?(Wi(i),s!==null?(Ye(i),$m(i,s)):(Ye(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Wi(i),Ye(i),$m(i,s)):(Ye(i),i.flags&=-16777217):(e.memoizedProps!==o&&Wi(i),Ye(i),i.flags&=-16777217),null;case 27:ve(i),s=Tt.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Wi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Ye(i),null}e=J.current,Xr(i)?Cp(i):(e=$g(u,o,s),i.stateNode=e,Wi(i))}return Ye(i),null;case 5:if(ve(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Wi(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Ye(i),null}if(e=J.current,Xr(i))Cp(i);else{switch(u=Kl(Tt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(s,{is:o.is}):u.createElement(s)}}e[on]=i,e[Sn]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(bn(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Wi(i)}}return Ye(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Wi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=Tt.current,Xr(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||qg(e.nodeValue,s)),e||is(i)}else e=Kl(e).createTextNode(o),e[on]=i,i.stateNode=e}return Ye(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Xr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[on]=i}else Wr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),u=!1}else u=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ki(i),i):(ki(i),null)}if(ki(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),Bl(i,i.updateQueue),Ye(i),null;case 4:return se(),e===null&&Nf(i.stateNode.containerInfo),Ye(i),null;case 10:return Gi(i.type),Ye(i),null;case 19:if(Et(un),u=i.memoizedState,u===null)return Ye(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)oo(u,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ll(e),d!==null){for(i.flags|=128,oo(u,!1),e=d.updateQueue,i.updateQueue=e,Bl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Rp(s,e),s=s.sibling;return At(un,un.current&1|2),i.child}e=e.sibling}u.tail!==null&&vt()>Hl&&(i.flags|=128,o=!0,oo(u,!1),i.lanes=4194304)}else{if(!o)if(e=Ll(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Bl(i,e),oo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!we)return Ye(i),null}else 2*vt()-u.renderingStartTime>Hl&&s!==536870912&&(i.flags|=128,o=!0,oo(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=vt(),i.sibling=null,e=un.current,At(un,o?e&1|2:e&1),i):(Ye(i),null);case 22:case 23:return ki(i),Ou(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),s=i.updateQueue,s!==null&&Bl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&Et(rs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Gi(cn),Ye(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Dx(e,i){switch(yu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Gi(cn),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ve(i),null;case 13:if(ki(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Wr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Et(un),null;case 4:return se(),null;case 10:return Gi(i.type),null;case 22:case 23:return ki(i),Ou(),e!==null&&Et(rs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Gi(cn),null;case 25:return null;default:return null}}function tg(e,i){switch(yu(i),i.tag){case 3:Gi(cn),se();break;case 26:case 27:case 5:ve(i);break;case 4:se();break;case 13:ki(i);break;case 19:Et(un);break;case 10:Gi(i.type);break;case 22:case 23:ki(i),Ou(),e!==null&&Et(rs);break;case 24:Gi(cn)}}function lo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var d=s.create,M=s.inst;o=d(),M.destroy=o}s=s.next}while(s!==u)}}catch(b){Fe(i,i.return,b)}}function ya(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=i;var P=s,et=b;try{et()}catch(ht){Fe(u,P,ht)}}}o=o.next}while(o!==d)}}catch(ht){Fe(i,i.return,ht)}}function eg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Vp(i,s)}catch(o){Fe(e,e.return,o)}}}function ng(e,i,s){s.props=ls(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Fe(e,i,o)}}function co(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){Fe(e,i,u)}}function Ti(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Fe(e,i,u)}else s.current=null}function ig(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Fe(e,e.return,u)}}function cf(e,i,s){try{var o=e.stateNode;Qx(o,e.type,s,i),o[Sn]=i}catch(u){Fe(e,e.return,u)}}function ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=jl));else if(o!==4&&(o===27&&wa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(ff(e,i,s),e=e.sibling;e!==null;)ff(e,i,s),e=e.sibling}function Il(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Il(e,i,s),e=e.sibling;e!==null;)Il(e,i,s),e=e.sibling}function sg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);bn(i,o,s),i[on]=e,i[Sn]=s}catch(d){Fe(e,e.return,d)}}var qi=!1,tn=!1,hf=!1,rg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Ux(e,i){if(e=e.containerInfo,zf=nc,e=_p(e),cu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var M=0,b=-1,P=-1,et=0,ht=0,Mt=e,nt=null;e:for(;;){for(var it;Mt!==s||u!==0&&Mt.nodeType!==3||(b=M+u),Mt!==d||o!==0&&Mt.nodeType!==3||(P=M+o),Mt.nodeType===3&&(M+=Mt.nodeValue.length),(it=Mt.firstChild)!==null;)nt=Mt,Mt=it;for(;;){if(Mt===e)break e;if(nt===s&&++et===u&&(b=M),nt===d&&++ht===o&&(P=M),(it=Mt.nextSibling)!==null)break;Mt=nt,nt=Mt.parentNode}Mt=it}s=b===-1||P===-1?null:{start:b,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bf={focusedElem:e,selectionRange:s},nc=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var ne=ls(s.type,u,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(ne,d),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Fe(s,s.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Hf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function og(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Sa(e,s),o&4&&lo(5,s);break;case 1:if(Sa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(M){Fe(s,s.return,M)}else{var u=ls(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Fe(s,s.return,M)}}o&64&&eg(s),o&512&&co(s,s.return);break;case 3:if(Sa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Vp(e,i)}catch(M){Fe(s,s.return,M)}}break;case 27:i===null&&o&4&&sg(s);case 26:case 5:Sa(e,s),i===null&&o&4&&ig(s),o&512&&co(s,s.return);break;case 12:Sa(e,s);break;case 13:Sa(e,s),o&4&&ug(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Hx.bind(null,s),ay(e,s))));break;case 22:if(o=s.memoizedState!==null||qi,!o){i=i!==null&&i.memoizedState!==null||tn,u=qi;var d=tn;qi=o,(tn=i)&&!d?Ma(e,s,(s.subtreeFlags&8772)!==0):Sa(e,s),qi=u,tn=d}break;case 30:break;default:Sa(e,s)}}function lg(e){var i=e.alternate;i!==null&&(e.alternate=null,lg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ca(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Fn=!1;function Yi(e,i,s){for(s=s.child;s!==null;)cg(e,i,s),s=s.sibling}function cg(e,i,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ot,s)}catch{}switch(s.tag){case 26:tn||Ti(s,i),Yi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:tn||Ti(s,i);var o=Xe,u=Fn;wa(s.type)&&(Xe=s.stateNode,Fn=!1),Yi(e,i,s),xo(s.stateNode),Xe=o,Fn=u;break;case 5:tn||Ti(s,i);case 6:if(o=Xe,u=Fn,Xe=null,Yi(e,i,s),Xe=o,Fn=u,Xe!==null)if(Fn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(s.stateNode)}catch(d){Fe(s,i,d)}else try{Xe.removeChild(s.stateNode)}catch(d){Fe(s,i,d)}break;case 18:Xe!==null&&(Fn?(e=Xe,Qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ro(e)):Qg(Xe,s.stateNode));break;case 4:o=Xe,u=Fn,Xe=s.stateNode.containerInfo,Fn=!0,Yi(e,i,s),Xe=o,Fn=u;break;case 0:case 11:case 14:case 15:tn||ya(2,s,i),tn||ya(4,s,i),Yi(e,i,s);break;case 1:tn||(Ti(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&ng(s,i,o)),Yi(e,i,s);break;case 21:Yi(e,i,s);break;case 22:tn=(o=tn)||s.memoizedState!==null,Yi(e,i,s),tn=o;break;default:Yi(e,i,s)}}function ug(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ro(e)}catch(s){Fe(i,i.return,s)}}function Lx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new rg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new rg),i;default:throw Error(a(435,e.tag))}}function df(e,i){var s=Lx(e);i.forEach(function(o){var u=Gx.bind(null,e,o);s.has(o)||(s.add(o),o.then(u,u))})}function Yn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=e,M=i,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){Xe=b.stateNode,Fn=!1;break t}break;case 5:Xe=b.stateNode,Fn=!1;break t;case 3:case 4:Xe=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(Xe===null)throw Error(a(160));cg(d,M,u),Xe=null,Fn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)fg(i,e),i=i.sibling}var hi=null;function fg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(i,e),Zn(e),o&4&&(ya(3,e,e.return),lo(3,e),ya(5,e,e.return));break;case 1:Yn(i,e),Zn(e),o&512&&(tn||s===null||Ti(s,s.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=hi;if(Yn(i,e),Zn(e),o&512&&(tn||s===null||Ti(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[la]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),bn(d,o,s),d[on]=e,nn(d),o=d;break t;case"link":var M=s_("link","href",u).get(o+(s.href||""));if(M){for(var b=0;b<M.length;b++)if(d=M[b],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(b,1);break e}}d=u.createElement(o),bn(d,o,s),u.head.appendChild(d);break;case"meta":if(M=s_("meta","content",u).get(o+(s.content||""))){for(b=0;b<M.length;b++)if(d=M[b],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(b,1);break e}}d=u.createElement(o),bn(d,o,s),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[on]=e,nn(d),o=d}e.stateNode=o}else r_(u,e.type,e.stateNode);else e.stateNode=a_(u,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?r_(u,e.type,e.stateNode):a_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Yn(i,e),Zn(e),o&512&&(tn||s===null||Ti(s,s.return)),s!==null&&o&4&&cf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Yn(i,e),Zn(e),o&512&&(tn||s===null||Ti(s,s.return)),e.flags&32){u=e.stateNode;try{Si(u,"")}catch(it){Fe(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,cf(e,u,s!==null?s.memoizedProps:u)),o&1024&&(hf=!0);break;case 6:if(Yn(i,e),Zn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(it){Fe(e,e.return,it)}}break;case 3:if($l=null,u=hi,hi=Ql(i.containerInfo),Yn(i,e),hi=u,Zn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Ro(i.containerInfo)}catch(it){Fe(e,e.return,it)}hf&&(hf=!1,hg(e));break;case 4:o=hi,hi=Ql(e.stateNode.containerInfo),Yn(i,e),Zn(e),hi=o;break;case 12:Yn(i,e),Zn(e);break;case 13:Yn(i,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(xf=vt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 22:u=e.memoizedState!==null;var P=s!==null&&s.memoizedState!==null,et=qi,ht=tn;if(qi=et||u,tn=ht||P,Yn(i,e),tn=ht,qi=et,Zn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||P||qi||tn||cs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){P=s=i;try{if(d=P.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=P.stateNode;var Mt=P.memoizedProps.style,nt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Fe(P,P.return,it)}}}else if(i.tag===6){if(s===null){P=i;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(it){Fe(P,P.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,df(e,s))));break;case 19:Yn(i,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 30:break;case 21:break;default:Yn(i,e),Zn(e)}}function Zn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(ag(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,d=uf(e);Il(e,d,u);break;case 5:var M=s.stateNode;s.flags&32&&(Si(M,""),s.flags&=-33);var b=uf(e);Il(e,b,M);break;case 3:case 4:var P=s.stateNode.containerInfo,et=uf(e);ff(e,et,P);break;default:throw Error(a(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;hg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Sa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)og(e,i.alternate,i),i=i.sibling}function cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ya(4,i,i.return),cs(i);break;case 1:Ti(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&ng(i,i.return,s),cs(i);break;case 27:xo(i.stateNode);case 26:case 5:Ti(i,i.return),cs(i);break;case 22:i.memoizedState===null&&cs(i);break;case 30:cs(i);break;default:cs(i)}e=e.sibling}}function Ma(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ma(u,d,s),lo(4,d);break;case 1:if(Ma(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Fe(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Gp(P[u],b)}catch(et){Fe(o,o.return,et)}}s&&M&64&&eg(d),co(d,d.return);break;case 27:sg(d);case 26:case 5:Ma(u,d,s),s&&o===null&&M&4&&ig(d),co(d,d.return);break;case 12:Ma(u,d,s);break;case 13:Ma(u,d,s),s&&M&4&&ug(u,d);break;case 22:d.memoizedState===null&&Ma(u,d,s),co(d,d.return);break;case 30:break;default:Ma(u,d,s)}i=i.sibling}}function pf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Zr(s))}function mf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zr(e))}function bi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dg(e,i,s,o),i=i.sibling}function dg(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:bi(e,i,s,o),u&2048&&lo(9,i);break;case 1:bi(e,i,s,o);break;case 3:bi(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zr(e)));break;case 12:if(u&2048){bi(e,i,s,o),e=i.stateNode;try{var d=i.memoizedProps,M=d.id,b=d.onPostCommit;typeof b=="function"&&b(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Fe(i,i.return,P)}}else bi(e,i,s,o);break;case 13:bi(e,i,s,o);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?bi(e,i,s,o):uo(e,i):d._visibility&2?bi(e,i,s,o):(d._visibility|=2,qs(e,i,s,o,(i.subtreeFlags&10256)!==0)),u&2048&&pf(M,i);break;case 24:bi(e,i,s,o),u&2048&&mf(i.alternate,i);break;default:bi(e,i,s,o)}}function qs(e,i,s,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,M=i,b=s,P=o,et=M.flags;switch(M.tag){case 0:case 11:case 15:qs(d,M,b,P,u),lo(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?qs(d,M,b,P,u):uo(d,M):(ht._visibility|=2,qs(d,M,b,P,u)),u&&et&2048&&pf(M.alternate,M);break;case 24:qs(d,M,b,P,u),u&&et&2048&&mf(M.alternate,M);break;default:qs(d,M,b,P,u)}i=i.sibling}}function uo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:uo(s,o),u&2048&&pf(o.alternate,o);break;case 24:uo(s,o),u&2048&&mf(o.alternate,o);break;default:uo(s,o)}i=i.sibling}}var fo=8192;function Ys(e){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 26:Ys(e),e.flags&fo&&e.memoizedState!==null&&_y(hi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e);break;case 3:case 4:var i=hi;hi=Ql(e.stateNode.containerInfo),Ys(e),hi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=fo,fo=16777216,Ys(e),fo=i):Ys(e));break;default:Ys(e)}}function mg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ho(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];_n=o,_g(o,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&ya(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Fl(e)):ho(e);break;default:ho(e)}}function Fl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];_n=o,_g(o,e)}mg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ya(8,i,i.return),Fl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Fl(i));break;default:Fl(i)}e=e.sibling}}function _g(e,i){for(;_n!==null;){var s=_n;switch(s.tag){case 0:case 11:case 15:ya(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zr(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,_n=o;else t:for(s=e;_n!==null;){o=_n;var u=o.sibling,d=o.return;if(lg(o),o===s){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var Nx={getCacheForType:function(e){var i=wn(cn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},Ox=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,ge=null,Se=0,Ue=0,jn=null,Ea=!1,Zs=!1,gf=!1,Zi=0,Qe=0,Ta=0,us=0,_f=0,si=0,js=0,po=null,Hn=null,vf=!1,xf=0,Hl=1/0,Gl=null,ba=null,Tn=0,Aa=null,Ks=null,Qs=0,yf=0,Sf=null,vg=null,mo=0,Mf=null;function Kn(){if((De&2)!==0&&Se!==0)return Se&-Se;if(O.T!==null){var e=Is;return e!==0?e:Cf()}return Te()}function xg(){si===0&&(si=(Se&536870912)===0||we?k():536870912);var e=ai.current;return e!==null&&(e.flags|=32),si}function Qn(e,i,s){(e===Ve&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Js(e,0),Ra(e,Se,si,!1)),St(e,s),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(us|=s),Qe===4&&Ra(e,Se,si,!1)),Ai(e))}function yg(e,i,s){if((De&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||ie(e,i),u=o?Bx(e,i):bf(e,i,!0),d=o;do{if(u===0){Zs&&!o&&Ra(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!Px(s)){u=bf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var b=e;u=po;var P=b.current.memoizedState.isDehydrated;if(P&&(Js(b,M).flags|=256),M=bf(b,M,!1),M!==2){if(gf&&!P){b.errorRecoveryDisabledLanes|=d,us|=d,u=4;break t}d=Hn,Hn=u,d!==null&&(Hn===null?Hn=d:Hn.push.apply(Hn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){Js(e,0),Ra(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ra(o,i,si,!Ea);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=xf+300-vt(),10<u)){if(Ra(o,i,si,!Ea),ue(o,0,!0)!==0)break t;o.timeoutHandle=jg(Sg.bind(null,o,s,Hn,Gl,vf,i,si,us,js,Ea,d,2,-0,0),u);break t}Sg(o,s,Hn,Gl,vf,i,si,us,js,Ea,d,0,-0,0)}}break}while(!0);Ai(e)}function Sg(e,i,s,o,u,d,M,b,P,et,ht,Mt,nt,it){if(e.timeoutHandle=-1,Mt=i.subtreeFlags,(Mt&8192||(Mt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:gy},pg(i),Mt=vy(),Mt!==null)){e.cancelPendingCommit=Mt(wg.bind(null,e,i,d,s,o,u,M,b,P,ht,1,nt,it)),Ra(e,d,M,!et);return}wg(e,i,d,s,o,u,M,b,P)}function Px(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!Wn(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ra(e,i,s,o){i&=~_f,i&=~us,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Lt(u),M=1<<d;o[d]=-1,u&=~M}s!==0&&Gt(e,s,i)}function Vl(){return(De&6)===0?(go(0),!1):!0}function Ef(){if(ge!==null){if(Ue===0)var e=ge.return;else e=ge,Hi=as=null,Fu(e),Xs=null,so=0,e=ge;for(;e!==null;)tg(e.alternate,e),e=e.return;ge=null}}function Js(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,$x(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ef(),Ve=e,ge=s=Bi(e.current,null),Se=i,Ue=0,jn=null,Ea=!1,Zs=ie(e,i),gf=!1,js=si=_f=us=Ta=Qe=0,Hn=po=null,vf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Lt(o),d=1<<u;i|=e[u],o&=~d}return Zi=i,ul(),s}function Mg(e,i){fe=null,O.H=Cl,i===Kr||i===xl?(i=Fp(),Ue=3):i===zp?(i=Fp(),Ue=4):Ue=i===Hm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,jn=i,ge===null&&(Qe=1,Ol(e,ti(i,e.current)))}function Eg(){var e=O.H;return O.H=Cl,e===null?Cl:e}function Tg(){var e=O.A;return O.A=Nx,e}function Tf(){Qe=4,Ea||(Se&4194048)!==Se&&ai.current!==null||(Zs=!0),(Ta&134217727)===0&&(us&134217727)===0||Ve===null||Ra(Ve,Se,si,!1)}function bf(e,i,s){var o=De;De|=2;var u=Eg(),d=Tg();(Ve!==e||Se!==i)&&(Gl=null,Js(e,i)),i=!1;var M=Qe;t:do try{if(Ue!==0&&ge!==null){var b=ge,P=jn;switch(Ue){case 8:Ef(),M=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var et=Ue;if(Ue=0,jn=null,$s(e,b,P,et),s&&Zs){M=0;break t}break;default:et=Ue,Ue=0,jn=null,$s(e,b,P,et)}}zx(),M=Qe;break}catch(ht){Mg(e,ht)}while(!0);return i&&e.shellSuspendCounter++,Hi=as=null,De=o,O.H=u,O.A=d,ge===null&&(Ve=null,Se=0,ul()),M}function zx(){for(;ge!==null;)bg(ge)}function Bx(e,i){var s=De;De|=2;var o=Eg(),u=Tg();Ve!==e||Se!==i?(Gl=null,Hl=vt()+500,Js(e,i)):Zs=ie(e,i);t:do try{if(Ue!==0&&ge!==null){i=ge;var d=jn;e:switch(Ue){case 1:Ue=0,jn=null,$s(e,i,d,1);break;case 2:case 9:if(Bp(d)){Ue=0,jn=null,Ag(i);break}i=function(){Ue!==2&&Ue!==9||Ve!==e||(Ue=7),Ai(e)},d.then(i,i);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Bp(d)?(Ue=0,jn=null,Ag(i)):(Ue=0,jn=null,$s(e,i,d,7));break;case 5:var M=null;switch(ge.tag){case 26:M=ge.memoizedState;case 5:case 27:var b=ge;if(!M||o_(M)){Ue=0,jn=null;var P=b.sibling;if(P!==null)ge=P;else{var et=b.return;et!==null?(ge=et,kl(et)):ge=null}break e}}Ue=0,jn=null,$s(e,i,d,5);break;case 6:Ue=0,jn=null,$s(e,i,d,6);break;case 8:Ef(),Qe=6;break t;default:throw Error(a(462))}}Ix();break}catch(ht){Mg(e,ht)}while(!0);return Hi=as=null,O.H=o,O.A=u,De=s,ge!==null?0:(Ve=null,Se=0,ul(),Qe)}function Ix(){for(;ge!==null&&!ke();)bg(ge)}function bg(e){var i=Jm(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,i===null?kl(e):ge=i}function Ag(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=qm(s,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=qm(s,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:Fu(i);default:tg(s,i),i=ge=Rp(i,Zi),i=Jm(s,i,Zi)}e.memoizedProps=e.pendingProps,i===null?kl(e):ge=i}function $s(e,i,s,o){Hi=as=null,Fu(i),Xs=null,so=0;var u=i.return;try{if(Rx(e,u,i,s,Se)){Qe=1,Ol(e,ti(s,e.current)),ge=null;return}}catch(d){if(u!==null)throw ge=u,d;Qe=1,Ol(e,ti(s,e.current)),ge=null;return}i.flags&32768?(we||o===1?e=!0:Zs||(Se&536870912)!==0?e=!1:(Ea=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rg(i,e)):kl(i)}function kl(e){var i=e;do{if((i.flags&32768)!==0){Rg(i,Ea);return}e=i.return;var s=Cx(i.alternate,i,Zi);if(s!==null){ge=s;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=e}while(i!==null);Qe===0&&(Qe=5)}function Rg(e,i){do{var s=Dx(e.alternate,e);if(s!==null){s.flags&=32767,ge=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){ge=e;return}ge=e=s}while(e!==null);Qe=6,ge=null}function wg(e,i,s,o,u,d,M,b,P){e.cancelPendingCommit=null;do Xl();while(Tn!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=pu,Vt(e,s,d,M,b,P),e===Ve&&(ge=Ve=null,Se=0),Ks=i,Aa=e,Qs=s,yf=d,Sf=u,vg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vx(D,function(){return Ng(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=q.p,q.p=2,M=De,De|=4;try{Ux(e,i,s)}finally{De=M,q.p=u,O.T=o}}Tn=1,Cg(),Dg(),Ug()}}function Cg(){if(Tn===1){Tn=0;var e=Aa,i=Ks,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var o=q.p;q.p=2;var u=De;De|=4;try{fg(i,e);var d=Bf,M=_p(e.containerInfo),b=d.focusedElem,P=d.selectionRange;if(M!==b&&b&&b.ownerDocument&&gp(b.ownerDocument.documentElement,b)){if(P!==null&&cu(b)){var et=P.start,ht=P.end;if(ht===void 0&&(ht=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(ht,b.value.length);else{var Mt=b.ownerDocument||document,nt=Mt&&Mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ne=b.textContent.length,$t=Math.min(P.start,ne),Pe=P.end===void 0?$t:Math.min(P.end,ne);!it.extend&&$t>Pe&&(M=Pe,Pe=$t,$t=M);var Y=mp(b,$t),G=mp(b,Pe);if(Y&&G&&(it.rangeCount!==1||it.anchorNode!==Y.node||it.anchorOffset!==Y.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var tt=Mt.createRange();tt.setStart(Y.node,Y.offset),it.removeAllRanges(),$t>Pe?(it.addRange(tt),it.extend(G.node,G.offset)):(tt.setEnd(G.node,G.offset),it.addRange(tt))}}}}for(Mt=[],it=b;it=it.parentNode;)it.nodeType===1&&Mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Mt.length;b++){var _t=Mt[b];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}nc=!!zf,Bf=zf=null}finally{De=u,q.p=o,O.T=s}}e.current=i,Tn=2}}function Dg(){if(Tn===2){Tn=0;var e=Aa,i=Ks,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var o=q.p;q.p=2;var u=De;De|=4;try{og(e,i.alternate,i)}finally{De=u,q.p=o,O.T=s}}Tn=3}}function Ug(){if(Tn===4||Tn===3){Tn=0,yt();var e=Aa,i=Ks,s=Qs,o=vg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,Ks=Aa=null,Lg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),en(s),i=i.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ot,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=O.T,u=q.p,q.p=2,O.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var b=o[M];d(b.value,{componentStack:b.stack})}}finally{O.T=i,q.p=u}}(Qs&3)!==0&&Xl(),Ai(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===Mf?mo++:(mo=0,Mf=e):mo=0,go(0)}}function Lg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Zr(i)))}function Xl(e){return Cg(),Dg(),Ug(),Ng()}function Ng(){if(Tn!==5)return!1;var e=Aa,i=yf;yf=0;var s=en(Qs),o=O.T,u=q.p;try{q.p=32>s?32:s,O.T=null,s=Sf,Sf=null;var d=Aa,M=Qs;if(Tn=0,Ks=Aa=null,Qs=0,(De&6)!==0)throw Error(a(331));var b=De;if(De|=4,gg(d.current),dg(d,d.current,M,s),De=b,go(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ot,d)}catch{}return!0}finally{q.p=u,O.T=o,Lg(e,i)}}function Og(e,i,s){i=ti(s,i),i=$u(e.stateNode,i,2),e=ga(e,i,2),e!==null&&(St(e,2),Ai(e))}function Fe(e,i,s){if(e.tag===3)Og(e,e,s);else for(;i!==null;){if(i.tag===3){Og(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ti(s,e),s=Im(2),o=ga(i,s,2),o!==null&&(Fm(s,o,i,e),St(o,2),Ai(o));break}}i=i.return}}function Af(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Ox;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(gf=!0,u.add(s),e=Fx.bind(null,e,i,s),i.then(e,e))}function Fx(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ve===e&&(Se&s)===s&&(Qe===4||Qe===3&&(Se&62914560)===Se&&300>vt()-xf?(De&2)===0&&Js(e,0):_f|=s,js===Se&&(js=0)),Ai(e)}function Pg(e,i){i===0&&(i=Ht()),e=Os(e,i),e!==null&&(St(e,i),Ai(e))}function Hx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Pg(e,s)}function Gx(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Pg(e,s)}function Vx(e,i){return le(e,i)}var Wl=null,tr=null,Rf=!1,ql=!1,wf=!1,fs=0;function Ai(e){e!==tr&&e.next===null&&(tr===null?Wl=tr=e:tr=tr.next=e),ql=!0,Rf||(Rf=!0,Xx())}function go(e,i){if(!wf&&ql){wf=!0;do for(var s=!1,o=Wl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-Lt(42|e)+1)-1,d&=u&~(M&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Fg(o,d))}else d=Se,d=ue(o,o===Ve?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ie(o,d)||(s=!0,Fg(o,d));o=o.next}while(s);wf=!1}}function kx(){zg()}function zg(){ql=Rf=!1;var e=0;fs!==0&&(Jx()&&(e=fs),fs=0);for(var i=vt(),s=null,o=Wl;o!==null;){var u=o.next,d=Bg(o,i);d===0?(o.next=null,s===null?Wl=u:s.next=u,u===null&&(tr=s)):(s=o,(e!==0||(d&3)!==0)&&(ql=!0)),o=u}go(e)}function Bg(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Lt(d),b=1<<M,P=u[M];P===-1?((b&s)===0||(b&o)!==0)&&(u[M]=Le(b,i)):P<=i&&(e.expiredLanes|=b),d&=~b}if(i=Ve,s=Se,s=ue(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&B(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ie(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&B(o),en(s)){case 2:case 8:s=dt;break;case 32:s=D;break;case 268435456:s=j;break;default:s=D}return o=Ig.bind(null,e),s=le(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&B(o),e.callbackPriority=2,e.callbackNode=null,2}function Ig(e,i){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Xl()&&e.callbackNode!==s)return null;var o=Se;return o=ue(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(yg(e,o,i),Bg(e,vt()),e.callbackNode!=null&&e.callbackNode===s?Ig.bind(null,e):null)}function Fg(e,i){if(Xl())return null;yg(e,i,!0)}function Xx(){ty(function(){(De&6)!==0?le(Nt,kx):zg()})}function Cf(){return fs===0&&(fs=k()),fs}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Gg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Wx(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=Hg((u[Sn]||null).action),M=o.submitter;M&&(i=(i=M[Sn]||null)?Hg(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var b=new ol("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fs!==0){var P=M?Gg(u,M):new FormData(u);Zu(s,{pending:!0,data:P,method:u.method,action:d},null,P)}}else typeof d=="function"&&(b.preventDefault(),P=M?Gg(u,M):new FormData(u),Zu(s,{pending:!0,data:P,method:u.method,action:d},d,P))},currentTarget:u}]})}}for(var Df=0;Df<du.length;Df++){var Uf=du[Df],qx=Uf.toLowerCase(),Yx=Uf[0].toUpperCase()+Uf.slice(1);fi(qx,"on"+Yx)}fi(yp,"onAnimationEnd"),fi(Sp,"onAnimationIteration"),fi(Mp,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(ux,"onTransitionRun"),fi(fx,"onTransitionStart"),fi(hx,"onTransitionCancel"),fi(Ep,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Vg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var M=o.length-1;0<=M;M--){var b=o[M],P=b.instance,et=b.currentTarget;if(b=b.listener,P!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(ht){Nl(ht)}u.currentTarget=null,d=P}else for(M=0;M<o.length;M++){if(b=o[M],P=b.instance,et=b.currentTarget,b=b.listener,P!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(ht){Nl(ht)}u.currentTarget=null,d=P}}}}function _e(e,i){var s=i[Ya];s===void 0&&(s=i[Ya]=new Set);var o=e+"__bubble";s.has(o)||(kg(i,e,2,!1),s.add(o))}function Lf(e,i,s){var o=0;i&&(o|=4),kg(s,e,o,i)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Yl]){e[Yl]=!0,el.forEach(function(s){s!=="selectionchange"&&(Zx.has(s)||Lf(s,!1,e),Lf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Yl]||(i[Yl]=!0,Lf("selectionchange",!1,i))}}function kg(e,i,s,o){switch(d_(i)){case 2:var u=Sy;break;case 8:u=My;break;default:u=Yf}s=u.bind(null,i,s,e),u=void 0,!tu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Of(e,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=Ui(b),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=d=M;continue t}b=b.parentNode}}o=o.return}Kd(function(){var et=d,ht=Jc(s),Mt=[];t:{var nt=Tp.get(e);if(nt!==void 0){var it=ol,ne=e;switch(e){case"keypress":if(sl(s)===0)break t;case"keydown":case"keyup":it=V0;break;case"focusin":ne="focus",it=au;break;case"focusout":ne="blur",it=au;break;case"beforeblur":case"afterblur":it=au;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=W0;break;case yp:case Sp:case Mp:it=N0;break;case Ep:it=Y0;break;case"scroll":case"scrollend":it=w0;break;case"wheel":it=j0;break;case"copy":case"cut":case"paste":it=P0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=ep;break;case"toggle":case"beforetoggle":it=Q0}var $t=(i&4)!==0,Pe=!$t&&(e==="scroll"||e==="scrollend"),Y=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var G=et,tt;G!==null;){var _t=G;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||Y===null||(_t=Pr(G,Y),_t!=null&&$t.push(vo(G,_t,tt))),Pe)break;G=G.return}0<$t.length&&(nt=new it(nt,ne,null,s,ht),Mt.push({event:nt,listeners:$t}))}}if((i&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&s!==Qc&&(ne=s.relatedTarget||s.fromElement)&&(Ui(ne)||ne[zn]))break t;if((it||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ne=s.relatedTarget||s.toElement,it=et,ne=ne?Ui(ne):null,ne!==null&&(Pe=c(ne),$t=ne.tag,ne!==Pe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(it=null,ne=et),it!==ne)){if($t=$d,_t="onMouseLeave",Y="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=ep,_t="onPointerLeave",Y="onPointerEnter",G="pointer"),Pe=it==null?nt:ja(it),tt=ne==null?nt:ja(ne),nt=new $t(_t,G+"leave",it,s,ht),nt.target=Pe,nt.relatedTarget=tt,_t=null,Ui(ht)===et&&($t=new $t(Y,G+"enter",ne,s,ht),$t.target=tt,$t.relatedTarget=Pe,_t=$t),Pe=_t,it&&ne)e:{for($t=it,Y=ne,G=0,tt=$t;tt;tt=er(tt))G++;for(tt=0,_t=Y;_t;_t=er(_t))tt++;for(;0<G-tt;)$t=er($t),G--;for(;0<tt-G;)Y=er(Y),tt--;for(;G--;){if($t===Y||Y!==null&&$t===Y.alternate)break e;$t=er($t),Y=er(Y)}$t=null}else $t=null;it!==null&&Xg(Mt,nt,it,$t,!1),ne!==null&&Pe!==null&&Xg(Mt,Pe,ne,$t,!0)}}t:{if(nt=et?ja(et):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Wt=cp;else if(op(nt))if(up)Wt=ox;else{Wt=sx;var pe=ax}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?et&&Kc(et.elementType)&&(Wt=cp):Wt=rx;if(Wt&&(Wt=Wt(e,et))){lp(Mt,Wt,s,ht);break t}pe&&pe(e,nt,et),e==="focusout"&&et&&nt.type==="number"&&et.memoizedProps.value!=null&&Rn(nt,"number",nt.value)}switch(pe=et?ja(et):window,e){case"focusin":(op(pe)||pe.contentEditable==="true")&&(Us=pe,uu=et,kr=null);break;case"focusout":kr=uu=Us=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,vp(Mt,s,ht);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":vp(Mt,s,ht)}var qt;if(ru)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Ds?sp(e,s)&&(te="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(te="onCompositionStart");te&&(np&&s.locale!=="ko"&&(Ds||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ds&&(qt=Qd()):(ha=ht,eu="value"in ha?ha.value:ha.textContent,Ds=!0)),pe=Zl(et,te),0<pe.length&&(te=new tp(te,e,null,s,ht),Mt.push({event:te,listeners:pe}),qt?te.data=qt:(qt=rp(s),qt!==null&&(te.data=qt)))),(qt=$0?tx(e,s):ex(e,s))&&(te=Zl(et,"onBeforeInput"),0<te.length&&(pe=new tp("onBeforeInput","beforeinput",null,s,ht),Mt.push({event:pe,listeners:te}),pe.data=qt)),Wx(Mt,e,et,s,ht)}Vg(Mt,i)})}function vo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Zl(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Pr(e,s),u!=null&&o.unshift(vo(e,u,d)),u=Pr(e,i),u!=null&&o.push(vo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,i,s,o,u){for(var d=i._reactName,M=[];s!==null&&s!==o;){var b=s,P=b.alternate,et=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||et===null||(P=et,u?(et=Pr(s,d),et!=null&&M.unshift(vo(s,et,P))):u||(et=Pr(s,d),et!=null&&M.push(vo(s,et,P)))),s=s.return}M.length!==0&&e.push({event:i,listeners:M})}var jx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Kx,"")}function qg(e,i){return i=Wg(i),Wg(e)===i}function jl(){}function Oe(e,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Si(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Si(e,""+o);break;case"className":Ot(e,"class",o);break;case"tabIndex":Ot(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ot(e,s,o);break;case"style":Zd(e,o,d);break;case"data":if(i!=="object"){Ot(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=il(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Oe(e,i,"name",u.name,u,null),Oe(e,i,"formEncType",u.formEncType,u,null),Oe(e,i,"formMethod",u.formMethod,u,null),Oe(e,i,"formTarget",u.formTarget,u,null)):(Oe(e,i,"encType",u.encType,u,null),Oe(e,i,"method",u.method,u,null),Oe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=il(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=jl);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=il(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Rt(e,"popover",o);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Rt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=A0.get(s)||s,Rt(e,s,o))}}function Pf(e,i,s,o,u,d){switch(s){case"style":Zd(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Si(e,o):(typeof o=="number"||typeof o=="bigint")&&Si(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[Sn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Rt(e,s,o)}}}function bn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var M=s[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,d,M,s,null)}}u&&Oe(e,i,"srcSet",s.srcSet,s,null),o&&Oe(e,i,"src",s.src,s,null);return;case"input":_e("invalid",e);var b=d=M=u=null,P=null,et=null;for(o in s)if(s.hasOwnProperty(o)){var ht=s[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":M=ht;break;case"checked":P=ht;break;case"defaultChecked":et=ht;break;case"value":d=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Oe(e,i,o,ht,s,null)}}Ie(e,d,b,P,et,M,u,!1),je(e);return;case"select":_e("invalid",e),o=M=d=null;for(u in s)if(s.hasOwnProperty(u)&&(b=s[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Oe(e,i,u,b,s,null)}i=d,s=M,e.multiple=!!o,i!=null?ln(e,!!o,i,!1):s!=null&&ln(e,!!o,s,!0);return;case"textarea":_e("invalid",e),d=u=o=null;for(M in s)if(s.hasOwnProperty(M)&&(b=s[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Oe(e,i,M,b,s,null)}Mn(e,o,u,d),je(e);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(o=s[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,i,P,o,s,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<_o.length;o++)_e(_o[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(o=s[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Oe(e,i,et,o,s,null)}return;default:if(Kc(i)){for(ht in s)s.hasOwnProperty(ht)&&(o=s[ht],o!==void 0&&Pf(e,i,ht,o,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(o=s[b],o!=null&&Oe(e,i,b,o,s,null))}function Qx(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,b=null,P=null,et=null,ht=null;for(it in s){var Mt=s[it];if(s.hasOwnProperty(it)&&Mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=Mt;default:o.hasOwnProperty(it)||Oe(e,i,it,null,o,Mt)}}for(var nt in o){var it=o[nt];if(Mt=s[nt],o.hasOwnProperty(nt)&&(it!=null||Mt!=null))switch(nt){case"type":d=it;break;case"name":u=it;break;case"checked":et=it;break;case"defaultChecked":ht=it;break;case"value":M=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:it!==Mt&&Oe(e,i,nt,it,o,Mt)}}Oi(e,M,b,P,et,ht,d,u);return;case"select":it=M=b=nt=null;for(d in s)if(P=s[d],s.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(d)||Oe(e,i,d,null,o,P)}for(u in o)if(d=o[u],P=s[u],o.hasOwnProperty(u)&&(d!=null||P!=null))switch(u){case"value":nt=d;break;case"defaultValue":b=d;break;case"multiple":M=d;default:d!==P&&Oe(e,i,u,d,o,P)}i=b,s=M,o=it,nt!=null?ln(e,!!s,nt,!1):!!o!=!!s&&(i!=null?ln(e,!!s,i,!0):ln(e,!!s,s?[]:"",!1));return;case"textarea":it=nt=null;for(b in s)if(u=s[b],s.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,i,b,null,o,u)}for(M in o)if(u=o[M],d=s[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Oe(e,i,M,u,o,d)}mn(e,nt,it);return;case"option":for(var ne in s)if(nt=s[ne],s.hasOwnProperty(ne)&&nt!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Oe(e,i,ne,null,o,nt)}for(P in o)if(nt=o[P],it=s[P],o.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Oe(e,i,P,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in s)nt=s[$t],s.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&Oe(e,i,$t,null,o,nt);for(et in o)if(nt=o[et],it=s[et],o.hasOwnProperty(et)&&nt!==it&&(nt!=null||it!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(a(137,i));break;default:Oe(e,i,et,nt,o,it)}return;default:if(Kc(i)){for(var Pe in s)nt=s[Pe],s.hasOwnProperty(Pe)&&nt!==void 0&&!o.hasOwnProperty(Pe)&&Pf(e,i,Pe,void 0,o,nt);for(ht in o)nt=o[ht],it=s[ht],!o.hasOwnProperty(ht)||nt===it||nt===void 0&&it===void 0||Pf(e,i,ht,nt,o,it);return}}for(var Y in s)nt=s[Y],s.hasOwnProperty(Y)&&nt!=null&&!o.hasOwnProperty(Y)&&Oe(e,i,Y,null,o,nt);for(Mt in o)nt=o[Mt],it=s[Mt],!o.hasOwnProperty(Mt)||nt===it||nt==null&&it==null||Oe(e,i,Mt,nt,o,it)}var zf=null,Bf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function If(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Jx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(e){return Kg.resolve(null).then(e).catch(ey)}:jg;function ey(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Qg(e,i){var s=i,o=0,u=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<o&&8>o){s=o;var M=e.ownerDocument;if(s&1&&xo(M.documentElement),s&2&&xo(M.body),s&4)for(s=M.head,xo(s),M=s.firstChild;M;){var b=M.nextSibling,P=M.nodeName;M[la]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=b}}if(u===0){e.removeChild(d),Ro(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:o=s.charCodeAt(0)-48;else o=0;s=d}while(s);Ro(i)}function Hf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hf(s),ca(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function ny(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[la])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function iy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=di(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ay(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Vf=null;function Jg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function $g(e,i,s){switch(i=Kl(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function xo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ca(e)}var ri=new Map,t_=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=q.d;q.d={f:sy,r:ry,D:oy,C:ly,L:cy,m:uy,X:hy,S:fy,M:dy};function sy(){var e=ji.f(),i=Vl();return e||i}function ry(e){var i=Li(e);i!==null&&i.tag===5&&i.type==="form"?ym(i):ji.r(e)}var nr=typeof document>"u"?null:document;function e_(e,i,s){var o=nr;if(o&&typeof i=="string"&&i){var u=Ge(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),t_.has(u)||(t_.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),bn(i,"link",e),nn(i),o.head.appendChild(i)))}}function oy(e){ji.D(e),e_("dns-prefetch",e,null)}function ly(e,i){ji.C(e,i),e_("preconnect",e,i)}function cy(e,i,s){ji.L(e,i,s);var o=nr;if(o&&e&&i){var u='link[rel="preload"][as="'+Ge(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Ge(s.imageSizes)+'"]')):u+='[href="'+Ge(e)+'"]';var d=u;switch(i){case"style":d=ir(e);break;case"script":d=ar(e)}ri.has(d)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),ri.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(yo(d))||i==="script"&&o.querySelector(So(d))||(i=o.createElement("link"),bn(i,"link",e),nn(i),o.head.appendChild(i)))}}function uy(e,i){ji.m(e,i);var s=nr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Ge(o)+'"][href="'+Ge(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ar(e)}if(!ri.has(d)&&(e=g({rel:"modulepreload",href:e},i),ri.set(d,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(So(d)))return}o=s.createElement("link"),bn(o,"link",e),nn(o),s.head.appendChild(o)}}}function fy(e,i,s){ji.S(e,i,s);var o=nr;if(o&&e){var u=ua(o).hoistableStyles,d=ir(e);i=i||"default";var M=u.get(d);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(yo(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=ri.get(d))&&kf(e,s);var P=M=o.createElement("link");nn(P),bn(P,"link",e),P._p=new Promise(function(et,ht){P.onload=et,P.onerror=ht}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(M,i,o)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(d,M)}}}function hy(e,i){ji.X(e,i);var s=nr;if(s&&e){var o=ua(s).hoistableScripts,u=ar(e),d=o.get(u);d||(d=s.querySelector(So(u)),d||(e=g({src:e,async:!0},i),(i=ri.get(u))&&Xf(e,i),d=s.createElement("script"),nn(d),bn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function dy(e,i){ji.M(e,i);var s=nr;if(s&&e){var o=ua(s).hoistableScripts,u=ar(e),d=o.get(u);d||(d=s.querySelector(So(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=ri.get(u))&&Xf(e,i),d=s.createElement("script"),nn(d),bn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function n_(e,i,s,o){var u=(u=Tt.current)?Ql(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ir(s.href),s=ua(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=ir(s.href);var d=ua(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(yo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),ri.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ri.set(e,s),d||py(u,e,s,M.state))),i&&o===null)throw Error(a(528,""));return M}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ar(s),s=ua(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ir(e){return'href="'+Ge(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function i_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),bn(i,"link",s),nn(i),e.head.appendChild(i))}function ar(e){return'[src="'+Ge(e)+'"]'}function So(e){return"script[async]"+e}function a_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Ge(s.href)+'"]');if(o)return i.instance=o,nn(o),o;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),bn(o,"style",u),Jl(o,s.precedence,e),i.instance=o;case"stylesheet":u=ir(s.href);var d=e.querySelector(yo(u));if(d)return i.state.loading|=4,i.instance=d,nn(d),d;o=i_(s),(u=ri.get(u))&&kf(o,u),d=(e.ownerDocument||e).createElement("link"),nn(d);var M=d;return M._p=new Promise(function(b,P){M.onload=b,M.onerror=P}),bn(d,"link",o),i.state.loading|=4,Jl(d,s.precedence,e),i.instance=d;case"script":return d=ar(s.src),(u=e.querySelector(So(d)))?(i.instance=u,nn(u),u):(o=s,(u=ri.get(d))&&(o=g({},s),Xf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),bn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Jl(o,s.precedence,e));return i.instance}function Jl(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===i)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function kf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Xf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var $l=null;function s_(e,i,s){if($l===null){var o=new Map,u=$l=new Map;u.set(s,o)}else u=$l,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[la]||d[on]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=e+M;var b=o.get(M);b?b.push(d):o.set(M,[d])}}return o}function r_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function my(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function o_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Mo=null;function gy(){}function _y(e,i,s){if(Mo===null)throw Error(a(475));var o=Mo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ir(s.href),d=e.querySelector(yo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=tc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,nn(d);return}d=e.ownerDocument||e,s=i_(s),(u=ri.get(u))&&kf(s,u),d=d.createElement("link"),nn(d);var M=d;M._p=new Promise(function(b,P){M.onload=b,M.onerror=P}),bn(d,"link",s),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=tc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function vy(){if(Mo===null)throw Error(a(475));var e=Mo;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function Wf(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,i.forEach(xy,e),ec=null,tc.call(e))}function xy(e,i){if(!(i.state.loading&4)){var s=ec.get(e);if(s)var o=s.get(null);else{s=new Map,ec.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),o=M)}o&&s.set(null,o)}u=i.instance,M=u.getAttribute("data-precedence"),d=s.get(M)||o,d===o&&s.set(null,u),s.set(M,u),this.count++,o=tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Eo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function yy(e,i,s,o,u,d,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function l_(e,i,s,o,u,d,M,b,P,et,ht,Mt){return e=new yy(e,i,s,M,b,P,et,Mt),i=1,d===!0&&(i|=24),d=qn(3,null,null,i),e.current=d,d.stateNode=e,i=bu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Cu(d),e}function c_(e){return e?(e=Ps,e):Ps}function u_(e,i,s,o,u,d){u=c_(u),o.context===null?o.context=u:o.pendingContext=u,o=ma(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=ga(e,o,i),s!==null&&(Qn(s,e,i),Jr(s,e,i))}function f_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function qf(e,i){f_(e,i),(e=e.alternate)&&f_(e,i)}function h_(e){if(e.tag===13){var i=Os(e,67108864);i!==null&&Qn(i,e,67108864),qf(e,67108864)}}var nc=!0;function Sy(e,i,s,o){var u=O.T;O.T=null;var d=q.p;try{q.p=2,Yf(e,i,s,o)}finally{q.p=d,O.T=u}}function My(e,i,s,o){var u=O.T;O.T=null;var d=q.p;try{q.p=8,Yf(e,i,s,o)}finally{q.p=d,O.T=u}}function Yf(e,i,s,o){if(nc){var u=Zf(o);if(u===null)Of(e,i,o,ic,s),p_(e,o);else if(Ty(u,e,i,s,o))o.stopPropagation();else if(p_(e,o),i&4&&-1<Ey.indexOf(e)){for(;u!==null;){var d=Li(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Ft(d.pendingLanes);if(M!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var P=1<<31-Lt(M);b.entanglements[1]|=P,M&=~P}Ai(d),(De&6)===0&&(Hl=vt()+500,go(0))}}break;case 13:b=Os(d,2),b!==null&&Qn(b,d,2),Vl(),qf(d,2)}if(d=Zf(o),d===null&&Of(e,i,o,ic,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Of(e,i,o,null,s)}}function Zf(e){return e=Jc(e),jf(e)}var ic=null;function jf(e){if(ic=null,e=Ui(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ic=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pt()){case Nt:return 2;case dt:return 8;case D:case T:return 32;case j:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ca=null,Da=null,Ua=null,To=new Map,bo=new Map,La=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,i){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":To.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(i.pointerId)}}function Ao(e,i,s,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Li(i),i!==null&&h_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Ty(e,i,s,o,u){switch(i){case"focusin":return Ca=Ao(Ca,e,i,s,o,u),!0;case"dragenter":return Da=Ao(Da,e,i,s,o,u),!0;case"mouseover":return Ua=Ao(Ua,e,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return To.set(d,Ao(To.get(d)||null,e,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,bo.set(d,Ao(bo.get(d)||null,e,i,s,o,u)),!0}return!1}function m_(e){var i=Ui(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,Xn(e.priority,function(){if(s.tag===13){var o=Kn();o=He(o);var u=Os(s,o);u!==null&&Qn(u,s,o),qf(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Zf(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Qc=o,s.target.dispatchEvent(o),Qc=null}else return i=Li(s),i!==null&&h_(i),e.blockedOn=s,!1;i.shift()}return!0}function g_(e,i,s){ac(e)&&s.delete(i)}function by(){Kf=!1,Ca!==null&&ac(Ca)&&(Ca=null),Da!==null&&ac(Da)&&(Da=null),Ua!==null&&ac(Ua)&&(Ua=null),To.forEach(g_),bo.forEach(g_)}function sc(e,i){e.blockedOn===i&&(e.blockedOn=null,Kf||(Kf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,by)))}var rc=null;function __(e){rc!==e&&(rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(jf(o||s)===null)continue;break}var d=Li(s);d!==null&&(e.splice(i,3),i-=3,Zu(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Ro(e){function i(P){return sc(P,e)}Ca!==null&&sc(Ca,e),Da!==null&&sc(Da,e),Ua!==null&&sc(Ua,e),To.forEach(i),bo.forEach(i);for(var s=0;s<La.length;s++){var o=La[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<La.length&&(s=La[0],s.blockedOn===null);)m_(s),s.blockedOn===null&&La.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],M=u[Sn]||null;if(typeof d=="function")M||__(s);else if(M){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[Sn]||null)b=M.formAction;else if(jf(u)!==null)continue}else b=M.action;typeof b=="function"?s[o+1]=b:(s.splice(o,3),o-=3),__(s)}}}function Qf(e){this._internalRoot=e}oc.prototype.render=Qf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=Kn();u_(s,o,e,i,null,null)},oc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;u_(e.current,2,null,e,null,null),Vl(),i[zn]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Te();e={blockedOn:null,target:e,priority:i};for(var s=0;s<La.length&&i!==0&&i<La[s].priority;s++);La.splice(s,0,e),s===0&&m_(e)}};var v_=t.version;if(v_!=="19.1.0")throw Error(a(527,v_,"19.1.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Ay={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ot=lc.inject(Ay),Pt=lc}catch{}}return Co.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",u=Om,d=Pm,M=zm,b=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(b=i.unstable_transitionCallbacks)),i=l_(e,1,!1,null,null,s,o,u,d,M,b,null),e[zn]=i.current,Nf(e),new Qf(i)},Co.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,u="",d=Om,M=Pm,b=zm,P=null,et=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&(et=s.formState)),i=l_(e,1,!0,i,s??null,o,u,d,M,b,P,et),i.context=c_(null),s=i.current,o=Kn(),o=He(o),u=ma(o),u.callback=null,ga(s,u,o),s=o,i.current.lanes=s,St(i,s),Ai(i),e[zn]=i.current,Nf(e),new oc(i)},Co.version="19.1.0",Co}var w_;function zy(){if(w_)return th.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),th.exports=Py(),th.exports}var By=zy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="175",Sr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,C_=1,Fy=2,Iv=1,Hy=2,ea=3,Xa=0,kn=1,na=2,Va=0,Mr=1,D_=2,U_=3,L_=4,Gy=5,xs=100,Vy=101,ky=102,Xy=103,Wy=104,qy=200,Yy=201,Zy=202,jy=203,Ih=204,Fh=205,Ky=206,Qy=207,Jy=208,$y=209,tS=210,eS=211,nS=212,iS=213,aS=214,Hh=0,Gh=1,Vh=2,Tr=3,kh=4,Xh=5,Wh=6,qh=7,Fv=0,sS=1,rS=2,ka=0,oS=1,lS=2,cS=3,uS=4,fS=5,hS=6,dS=7,Hv=300,br=301,Ar=302,Yh=303,Zh=304,Yc=306,jh=1e3,Ss=1001,Kh=1002,yi=1003,pS=1004,cc=1005,vi=1006,ah=1007,Ms=1008,oa=1009,Gv=1010,Vv=1011,Vo=1012,Ud=1013,Es=1014,ia=1015,Ko=1016,Ld=1017,Nd=1018,ko=1020,kv=35902,Xv=1021,Wv=1022,xi=1023,qv=1024,Yv=1025,Xo=1026,Wo=1027,Zv=1028,Od=1029,jv=1030,Pd=1031,zd=1033,zc=33776,Bc=33777,Ic=33778,Fc=33779,Qh=35840,Jh=35841,$h=35842,td=35843,ed=36196,nd=37492,id=37496,ad=37808,sd=37809,rd=37810,od=37811,ld=37812,cd=37813,ud=37814,fd=37815,hd=37816,dd=37817,pd=37818,md=37819,gd=37820,_d=37821,Hc=36492,vd=36494,xd=36495,Kv=36283,yd=36284,Sd=36285,Md=36286,mS=3200,gS=3201,Qv=0,_S=1,Ga="",ci="srgb",Rr="srgb-linear",Xc="linear",ze="srgb",sr=7680,N_=519,vS=512,xS=513,yS=514,Jv=515,SS=516,MS=517,ES=518,TS=519,O_=35044,P_="300 es",aa=2e3,Wc=2001;class Rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,Ed=180/Math.PI;function Ur(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[a&255]+Dn[a>>8&255]+Dn[a>>16&255]+Dn[a>>24&255]).toLowerCase()}function he(r,t,n){return Math.max(t,Math.min(n,r))}function bS(r,t){return(r%t+t)%t}function sh(r,t,n){return(1-n)*r+n*t}function Do(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const AS={DEG2RAD:Gc};class Ut{constructor(t=0,n=0){Ut.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(he(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,n,a,l,c,f,h,p,m){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,h,p,m)}set(t,n,a,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],g=a[4],_=a[7],v=a[2],S=a[5],E=a[8],w=l[0],y=l[3],x=l[6],z=l[1],L=l[4],C=l[7],V=l[2],H=l[5],I=l[8];return c[0]=f*w+h*z+p*V,c[3]=f*y+h*L+p*H,c[6]=f*x+h*C+p*I,c[1]=m*w+g*z+_*V,c[4]=m*y+g*L+_*H,c[7]=m*x+g*C+_*I,c[2]=v*w+S*z+E*V,c[5]=v*y+S*L+E*H,c[8]=v*x+S*C+E*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*f*g-n*h*m-a*c*g+a*h*p+l*c*m-l*f*p}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,v=h*p-g*c,S=m*c-f*p,E=n*_+a*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=_*w,t[1]=(l*m-g*a)*w,t[2]=(h*a-l*f)*w,t[3]=v*w,t[4]=(g*n-l*p)*w,t[5]=(l*c-h*n)*w,t[6]=S*w,t[7]=(a*p-m*n)*w,t[8]=(f*n-a*c)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(rh.makeScale(t,n)),this}rotate(t){return this.premultiply(rh.makeRotation(-t)),this}translate(t,n){return this.premultiply(rh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new oe;function $v(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function RS(){const r=qc("canvas");return r.style.display="block",r}const z_={};function Vc(r){r in z_||(z_[r]=!0,console.warn(r))}function wS(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function CS(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function DS(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const B_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function US(){const r={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=Er(l.r),l.g=Er(l.g),l.b=Er(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Xc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Rr]:{primaries:t,whitePoint:a,transfer:Xc,toXYZ:B_,fromXYZ:I_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:a,transfer:ze,toXYZ:B_,fromXYZ:I_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Re=US();function sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Er(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rr;class LS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{rr===void 0&&(rr=qc("canvas")),rr.width=t.width,rr.height=t.height;const l=rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=rr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=qc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=sa(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(sa(n[a]/255)*255):n[a]=sa(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let NS=0;class Bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(oh(l[f].image)):c.push(oh(l[f]))}else c=oh(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class Pn extends Rs{constructor(t=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,a=Ss,l=Ss,c=vi,f=Ms,h=xi,p=oa,m=Pn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Ur(),this.name="",this.source=new Bd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Hv;Pn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,n=0,a=0,l=1){Je.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],S=p[5],E=p[9],w=p[2],y=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(S+1)/2,V=(x+1)/2,H=(g+v)/4,I=(_+w)/4,X=(E+y)/4;return L>C&&L>V?L<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(L),l=H/a,c=I/a):C>V?C<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),a=H/l,c=X/l):V<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),a=I/c,l=X/c),this.set(a,l,c,n),this}let z=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(y-E)/z,this.y=(_-w)/z,this.z=(v-g)/z,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this.w=he(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this.w=he(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends Rs{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Je(0,0,t,n),this.scissorTest=!1,this.viewport=new Je(0,0,t,n);const l={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Pn(l,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Bd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends PS{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class t0 extends Pn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends Pn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,f,h){let p=a[l+0],m=a[l+1],g=a[l+2],_=a[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],w=c[f+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=v,t[n+1]=S,t[n+2]=E,t[n+3]=w;return}if(_!==w||p!==v||m!==S||g!==E){let y=1-h;const x=p*v+m*S+g*E+_*w,z=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const V=Math.sqrt(L),H=Math.atan2(V,x*z);y=Math.sin(y*H)/V,h=Math.sin(h*H)/V}const C=h*z;if(p=p*y+v*C,m=m*y+S*C,g=g*y+E*C,_=_*y+w*C,y===1-h){const V=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=V,m*=V,g*=V,_*=V}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,l,c,f){const h=a[l],p=a[l+1],m=a[l+2],g=a[l+3],_=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[n]=h*E+g*_+p*S-m*v,t[n+1]=p*E+g*v+m*_-h*S,t[n+2]=m*E+g*S+h*v-p*_,t[n+3]=g*E-h*_-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(l/2),_=h(c/2),v=p(a/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"YZX":this._x=v*g*_+m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_-v*S*E;break;case"XZY":this._x=v*g*_-m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(a>h&&a>_){const S=2*Math.sqrt(1+a-h-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(h>_){const S=2*Math.sqrt(1+h-a-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-a-h);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,f=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-a*m,this._z=c*g+f*m+a*p-l*h,this._w=f*g-a*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*a+n*this._x,this._y=S*l+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,n=0,a=0){W.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(F_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(F_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*a),g=2*(h*n-c*l),_=2*(c*a-f*n);return this.x=n+p*m+f*_-h*g,this.y=a+p*g+h*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(he(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-a*p,this.z=a*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(he(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new W,F_=new bs;class Qo{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,pi):pi.fromBufferAttribute(c,f),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),uc.copy(a.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),fc.subVectors(this.max,Uo),or.subVectors(t.a,Uo),lr.subVectors(t.b,Uo),cr.subVectors(t.c,Uo),Oa.subVectors(lr,or),Pa.subVectors(cr,lr),hs.subVectors(or,cr);let n=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-hs.z,hs.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,hs.z,0,-hs.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-hs.y,hs.x,0];return!ch(n,or,lr,cr,fc)||(n=[1,0,0,0,1,0,0,0,1],!ch(n,or,lr,cr,fc))?!1:(hc.crossVectors(Oa,Pa),n=[hc.x,hc.y,hc.z],ch(n,or,lr,cr,fc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ki=[new W,new W,new W,new W,new W,new W,new W,new W],pi=new W,uc=new Qo,or=new W,lr=new W,cr=new W,Oa=new W,Pa=new W,hs=new W,Uo=new W,fc=new W,hc=new W,ds=new W;function ch(r,t,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){ds.fromArray(r,c);const h=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),p=t.dot(ds),m=n.dot(ds),g=a.dot(ds);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const BS=new Qo,Lo=new W,uh=new W;class Id{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):BS.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(Lo,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(uh)),this.expandByPoint(Lo.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new W,fh=new W,dc=new W,za=new W,hh=new W,pc=new W,dh=new W;class Fd{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Qi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){fh.copy(t).add(n).multiplyScalar(.5),dc.copy(n).sub(t).normalize(),za.copy(this.origin).sub(fh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(dc),h=za.dot(this.direction),p=-za.dot(dc),m=za.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*p-h,v=f*h-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const w=1/g;_*=w,v*=w,S=_*(_+f*v+2*h)+v*(f*_+v+2*p)+m}else v=c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(fh).addScaledVector(dc,v),S}intersectSphere(t,n){Qi.subVectors(t.center,this.origin);const a=Qi.dot(this.direction),l=Qi.dot(Qi)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(a=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(a=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||h>l)||((h>a||a!==a)&&(a=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,n,a,l,c){hh.subVectors(n,t),pc.subVectors(a,t),dh.crossVectors(hh,pc);let f=this.direction.dot(dh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;za.subVectors(this.origin,t);const p=h*this.direction.dot(pc.crossVectors(za,pc));if(p<0)return null;const m=h*this.direction.dot(hh.cross(za));if(m<0||p+m>f)return null;const g=-h*za.dot(dh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,n,a,l,c,f,h,p,m,g,_,v,S,E,w,y){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,h,p,m,g,_,v,S,E,w,y)}set(t,n,a,l,c,f,h,p,m,g,_,v,S,E,w,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=p,x[2]=m,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=E,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,l=1/ur.setFromMatrixColumn(t,0).length(),c=1/ur.setFromMatrixColumn(t,1).length(),f=1/ur.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,E=h*g,w=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=S+E*m,n[5]=v-w*m,n[9]=-h*p,n[2]=w-v*m,n[6]=E+S*m,n[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*_,E=m*g,w=m*_;n[0]=v+w*h,n[4]=E*h-S,n[8]=f*m,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=S*h-E,n[6]=w+v*h,n[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*_,E=m*g,w=m*_;n[0]=v-w*h,n[4]=-f*_,n[8]=E+S*h,n[1]=S+E*h,n[5]=f*g,n[9]=w-v*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*_,E=h*g,w=h*_;n[0]=p*g,n[4]=E*m-S,n[8]=v*m+w,n[1]=p*_,n[5]=w*m+v,n[9]=S*m-E,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,E=h*p,w=h*m;n[0]=p*g,n[4]=w-v*_,n[8]=E*_+S,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-m*g,n[6]=S*_+E,n[10]=v-w*_}else if(t.order==="XZY"){const v=f*p,S=f*m,E=h*p,w=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=v*_+w,n[5]=f*g,n[9]=S*_-E,n[2]=E*_-S,n[6]=h*g,n[10]=w*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IS,t,FS)}lookAt(t,n,a){const l=this.elements;return Jn.subVectors(t,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ba.crossVectors(a,Jn),Ba.lengthSq()===0&&(Math.abs(a.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ba.crossVectors(a,Jn)),Ba.normalize(),mc.crossVectors(Jn,Ba),l[0]=Ba.x,l[4]=mc.x,l[8]=Jn.x,l[1]=Ba.y,l[5]=mc.y,l[9]=Jn.y,l[2]=Ba.z,l[6]=mc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],g=a[1],_=a[5],v=a[9],S=a[13],E=a[2],w=a[6],y=a[10],x=a[14],z=a[3],L=a[7],C=a[11],V=a[15],H=l[0],I=l[4],X=l[8],U=l[12],R=l[1],F=l[5],ut=l[9],rt=l[13],xt=l[2],ft=l[6],O=l[10],q=l[14],Z=l[3],bt=l[7],N=l[11],$=l[15];return c[0]=f*H+h*R+p*xt+m*Z,c[4]=f*I+h*F+p*ft+m*bt,c[8]=f*X+h*ut+p*O+m*N,c[12]=f*U+h*rt+p*q+m*$,c[1]=g*H+_*R+v*xt+S*Z,c[5]=g*I+_*F+v*ft+S*bt,c[9]=g*X+_*ut+v*O+S*N,c[13]=g*U+_*rt+v*q+S*$,c[2]=E*H+w*R+y*xt+x*Z,c[6]=E*I+w*F+y*ft+x*bt,c[10]=E*X+w*ut+y*O+x*N,c[14]=E*U+w*rt+y*q+x*$,c[3]=z*H+L*R+C*xt+V*Z,c[7]=z*I+L*F+C*ft+V*bt,c[11]=z*X+L*ut+C*O+V*N,c[15]=z*U+L*rt+C*q+V*$,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],w=t[7],y=t[11],x=t[15];return E*(+c*p*_-l*m*_-c*h*v+a*m*v+l*h*S-a*p*S)+w*(+n*p*S-n*m*v+c*f*v-l*f*S+l*m*g-c*p*g)+y*(+n*m*_-n*h*S-c*f*_+a*f*S+c*h*g-a*m*g)+x*(-l*h*g-n*p*_+n*h*v+l*f*_-a*f*v+a*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],w=t[13],y=t[14],x=t[15],z=_*y*m-w*v*m+w*p*S-h*y*S-_*p*x+h*v*x,L=E*v*m-g*y*m-E*p*S+f*y*S+g*p*x-f*v*x,C=g*w*m-E*_*m+E*h*S-f*w*S-g*h*x+f*_*x,V=E*_*p-g*w*p-E*h*v+f*w*v+g*h*y-f*_*y,H=n*z+a*L+l*C+c*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=z*I,t[1]=(w*v*c-_*y*c-w*l*S+a*y*S+_*l*x-a*v*x)*I,t[2]=(h*y*c-w*p*c+w*l*m-a*y*m-h*l*x+a*p*x)*I,t[3]=(_*p*c-h*v*c-_*l*m+a*v*m+h*l*S-a*p*S)*I,t[4]=L*I,t[5]=(g*y*c-E*v*c+E*l*S-n*y*S-g*l*x+n*v*x)*I,t[6]=(E*p*c-f*y*c-E*l*m+n*y*m+f*l*x-n*p*x)*I,t[7]=(f*v*c-g*p*c+g*l*m-n*v*m-f*l*S+n*p*S)*I,t[8]=C*I,t[9]=(E*_*c-g*w*c-E*a*S+n*w*S+g*a*x-n*_*x)*I,t[10]=(f*w*c-E*h*c+E*a*m-n*w*m-f*a*x+n*h*x)*I,t[11]=(g*h*c-f*_*c-g*a*m+n*_*m+f*a*S-n*h*S)*I,t[12]=V*I,t[13]=(g*w*l-E*_*l+E*a*v-n*w*v-g*a*y+n*_*y)*I,t[14]=(E*h*l-f*w*l-E*a*p+n*w*p+f*a*y-n*h*y)*I,t[15]=(f*_*l-g*h*l+g*a*p-n*_*p-f*a*v+n*h*v)*I,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+a,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+a,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,g=f+f,_=h+h,v=c*m,S=c*g,E=c*_,w=f*g,y=f*_,x=h*_,z=p*m,L=p*g,C=p*_,V=a.x,H=a.y,I=a.z;return l[0]=(1-(w+x))*V,l[1]=(S+C)*V,l[2]=(E-L)*V,l[3]=0,l[4]=(S-C)*H,l[5]=(1-(v+x))*H,l[6]=(y+z)*H,l[7]=0,l[8]=(E+L)*I,l[9]=(y-z)*I,l[10]=(1-(v+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;let c=ur.set(l[0],l[1],l[2]).length();const f=ur.set(l[4],l[5],l[6]).length(),h=ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const m=1/c,g=1/f,_=1/h;return mi.elements[0]*=m,mi.elements[1]*=m,mi.elements[2]*=m,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=_,mi.elements[9]*=_,mi.elements[10]*=_,n.setFromRotationMatrix(mi),a.x=c,a.y=f,a.z=h,this}makePerspective(t,n,a,l,c,f,h=aa){const p=this.elements,m=2*c/(n-t),g=2*c/(a-l),_=(n+t)/(n-t),v=(a+l)/(a-l);let S,E;if(h===aa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Wc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,f,h=aa){const p=this.elements,m=1/(n-t),g=1/(a-l),_=1/(f-c),v=(n+t)*m,S=(a+l)*g;let E,w;if(h===aa)E=(f+c)*_,w=-2*_;else if(h===Wc)E=c*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ur=new W,mi=new We,IS=new W(0,0,0),FS=new W(1,1,1),Ba=new W,mc=new W,Jn=new W,H_=new We,G_=new bs;class Ci{constructor(t=0,n=0,a=0,l=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-he(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(he(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-he(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(he(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return H_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return G_.setFromEuler(this),this.setFromQuaternion(G_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let HS=0;const V_=new W,fr=new bs,Ji=new We,gc=new W,No=new W,GS=new W,VS=new bs,k_=new W(1,0,0),X_=new W(0,1,0),W_=new W(0,0,1),q_={type:"added"},kS={type:"removed"},hr={type:"childadded",child:null},ph={type:"childremoved",child:null};class Ln extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new W,n=new Ci,a=new bs,l=new W(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new We},normalMatrix:{value:new oe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return fr.setFromAxisAngle(t,n),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,n){return fr.setFromAxisAngle(t,n),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(k_,t)}rotateY(t){return this.rotateOnAxis(X_,t)}rotateZ(t){return this.rotateOnAxis(W_,t)}translateOnAxis(t,n){return V_.copy(t).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(k_,t)}translateY(t){return this.translateOnAxis(X_,t)}translateZ(t){return this.translateOnAxis(W_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?gc.copy(t):gc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(No,gc,this.up):Ji.lookAt(gc,No,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),fr.setFromRotationMatrix(Ji),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(q_),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(kS),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(q_),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,GS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,VS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new W(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new W,$i=new W,mh=new W,ta=new W,dr=new W,pr=new W,Y_=new W,gh=new W,_h=new W,vh=new W,xh=new Je,yh=new Je,Sh=new Je;class _i{constructor(t=new W,n=new W,a=new W){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),gi.subVectors(t,n),l.cross(gi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){gi.subVectors(l,n),$i.subVectors(a,n),mh.subVectors(t,n);const f=gi.dot(gi),h=gi.dot($i),p=gi.dot(mh),m=$i.dot($i),g=$i.dot(mh),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(m*p-h*g)*v,E=(f*g-h*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(t,n,a,l,c,f,h,p){return this.getBarycoord(t,n,a,l,ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ta.x),p.addScaledVector(f,ta.y),p.addScaledVector(h,ta.z),p)}static getInterpolatedAttribute(t,n,a,l,c,f){return xh.setScalar(0),yh.setScalar(0),Sh.setScalar(0),xh.fromBufferAttribute(t,n),yh.fromBufferAttribute(t,a),Sh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(xh,c.x),f.addScaledVector(yh,c.y),f.addScaledVector(Sh,c.z),f}static isFrontFacing(t,n,a,l){return gi.subVectors(a,n),$i.subVectors(t,n),gi.cross($i).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),gi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return _i.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let f,h;dr.subVectors(l,a),pr.subVectors(c,a),gh.subVectors(t,a);const p=dr.dot(gh),m=pr.dot(gh);if(p<=0&&m<=0)return n.copy(a);_h.subVectors(t,l);const g=dr.dot(_h),_=pr.dot(_h);if(g>=0&&_<=g)return n.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(a).addScaledVector(dr,f);vh.subVectors(t,c);const S=dr.dot(vh),E=pr.dot(vh);if(E>=0&&S<=E)return n.copy(c);const w=S*m-p*E;if(w<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(a).addScaledVector(pr,h);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Y_.subVectors(c,l),h=(_-g)/(_-g+(S-E)),n.copy(l).addScaledVector(Y_,h);const x=1/(y+w+v);return f=w*x,h=v*x,n.copy(a).addScaledVector(dr,f).addScaledVector(pr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Mh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ce{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,n),this}setRGB(t,n,a,l=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.toWorkingColorSpace(this,l),this}setHSL(t,n,a,l=Re.workingColorSpace){if(t=bS(t,1),n=he(n,0,1),a=he(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Mh(f,c,t+1/3),this.g=Mh(f,c,t),this.b=Mh(f,c,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,n=ci){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ci){const a=e0[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Re.fromWorkingColorSpace(Un.copy(this),t),Math.round(he(Un.r*255,0,255))*65536+Math.round(he(Un.g*255,0,255))*256+Math.round(he(Un.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.fromWorkingColorSpace(Un.copy(this),n);const a=Un.r,l=Un.g,c=Un.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case a:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-a)/_+2;break;case c:p=(a-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.fromWorkingColorSpace(Un.copy(this),n),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ci){Re.fromWorkingColorSpace(Un.copy(this),t);const n=Un.r,a=Un.g,l=Un.b;return t!==ci?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+n,Ia.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ia),t.getHSL(_c);const a=sh(Ia.h,_c.h,n),l=sh(Ia.s,_c.s,n),c=sh(Ia.l,_c.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ce;Ce.NAMES=e0;let XS=0;class Jo extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Mr,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Fh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(a.blending=this.blending),this.side!==Xa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ih&&(a.blendSrc=this.blendSrc),this.blendDst!==Fh&&(a.blendDst=this.blendDst),this.blendEquation!==xs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zc extends Jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new W,vc=new Ut;let WS=0;class wi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=O_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)vc.fromBufferAttribute(this,n),vc.applyMatrix3(t),this.setXY(n,vc.x,vc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(t),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Do(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Gn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Do(n,this.array)),n}setX(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Do(n,this.array)),n}setY(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Do(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Do(n,this.array)),n}setW(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),a=Gn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),a=Gn(a,this.array),l=Gn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),a=Gn(a,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==O_&&(t.usage=this.usage),t}}class n0 extends wi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class i0 extends wi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ra extends wi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let qS=0;const oi=new We,Eh=new Ln,mr=new W,$n=new Qo,Oo=new Qo,xn=new W;class qa extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($v(t)?i0:n0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new oe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,n,a){return oi.makeTranslation(t,n,a),this.applyMatrix4(oi),this}scale(t,n,a){return oi.makeScale(t,n,a),this.applyMatrix4(oi),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ra(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Id);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const a=this.boundingSphere.center;if($n.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors($n.min,Oo.min),$n.expandByPoint(xn),xn.addVectors($n.max,Oo.max),$n.expandByPoint(xn)):($n.expandByPoint(Oo.min),$n.expandByPoint(Oo.max))}$n.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(xn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)xn.fromBufferAttribute(h,m),p&&(mr.fromBufferAttribute(t,m),xn.add(mr)),l=Math.max(l,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new W,p[X]=new W;const m=new W,g=new W,_=new W,v=new Ut,S=new Ut,E=new Ut,w=new W,y=new W;function x(X,U,R){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,R),v.fromBufferAttribute(c,X),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,R),g.sub(m),_.sub(m),S.sub(v),E.sub(v);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(F),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(F),h[X].add(w),h[U].add(w),h[R].add(w),p[X].add(y),p[U].add(y),p[R].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let X=0,U=z.length;X<U;++X){const R=z[X],F=R.start,ut=R.count;for(let rt=F,xt=F+ut;rt<xt;rt+=3)x(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new W,C=new W,V=new W,H=new W;function I(X){V.fromBufferAttribute(l,X),H.copy(V);const U=h[X];L.copy(U),L.sub(V.multiplyScalar(V.dot(U))).normalize(),C.crossVectors(H,U);const F=C.dot(p[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,F)}for(let X=0,U=z.length;X<U;++X){const R=z[X],F=R.start,ut=R.count;for(let rt=F,xt=F+ut;rt<xt;rt+=3)I(t.getX(rt+0)),I(t.getX(rt+1)),I(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const l=new W,c=new W,f=new W,h=new W,p=new W,m=new W,g=new W,_=new W;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),w=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,w),m.fromBufferAttribute(a,y),h.add(g),p.add(g),m.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(w,p.x,p.y,p.z),a.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let w=0,y=p.length;w<y;w++){h.isInterleavedBufferAttribute?S=p[w]*h.data.stride+h.offset:S=p[w]*g;for(let x=0;x<g;x++)v[E++]=m[S++]}return new wi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qa,a=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,a);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const v=m[g],S=t(v,a);p.push(S)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const S=m[_];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z_=new We,ps=new Fd,xc=new Id,j_=new W,yc=new W,Sc=new W,Mc=new W,Th=new W,Ec=new W,K_=new W,Tc=new W;class yn extends Ln{constructor(t=new qa,n=new Zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Ec.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(Th.fromBufferAttribute(_,t),f?Ec.addScaledVector(Th,g):Ec.addScaledVector(Th.sub(n),g))}n.add(Ec)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),xc.copy(a.boundingSphere),xc.applyMatrix4(c),ps.copy(t.ray).recast(t.near),!(xc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(xc,j_)===null||ps.origin.distanceToSquared(j_)>(t.far-t.near)**2))&&(Z_.copy(c).invert(),ps.copy(t.ray).applyMatrix4(Z_),!(a.boundingBox!==null&&ps.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ps)))}_computeIntersections(t,n,a){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,w=v.length;E<w;E++){const y=v[E],x=f[y.materialIndex],z=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=z,V=L;C<V;C+=3){const H=h.getX(C),I=h.getX(C+1),X=h.getX(C+2);l=bc(this,x,t,a,m,g,_,H,I,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const z=h.getX(y),L=h.getX(y+1),C=h.getX(y+2);l=bc(this,f,t,a,m,g,_,z,L,C),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,w=v.length;E<w;E++){const y=v[E],x=f[y.materialIndex],z=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=z,V=L;C<V;C+=3){const H=C,I=C+1,X=C+2;l=bc(this,x,t,a,m,g,_,H,I,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=E,x=w;y<x;y+=3){const z=y,L=y+1,C=y+2;l=bc(this,f,t,a,m,g,_,z,L,C),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}}}function YS(r,t,n,a,l,c,f,h){let p;if(t.side===kn?p=a.intersectTriangle(f,c,l,!0,h):p=a.intersectTriangle(l,c,f,t.side===Xa,h),p===null)return null;Tc.copy(h),Tc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Tc);return m<n.near||m>n.far?null:{distance:m,point:Tc.clone(),object:r}}function bc(r,t,n,a,l,c,f,h,p,m){r.getVertexPosition(h,yc),r.getVertexPosition(p,Sc),r.getVertexPosition(m,Mc);const g=YS(r,t,n,a,yc,Sc,Mc,K_);if(g){const _=new W;_i.getBarycoord(K_,yc,Sc,Mc,_),l&&(g.uv=_i.getInterpolatedAttribute(l,h,p,m,_,new Ut)),c&&(g.uv1=_i.getInterpolatedAttribute(c,h,p,m,_,new Ut)),f&&(g.normal=_i.getInterpolatedAttribute(f,h,p,m,_,new W),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new W,materialIndex:0};_i.getNormal(yc,Sc,Mc,v.normal),g.face=v,g.barycoord=_}return g}class Lr extends qa{constructor(t=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,a,n,t,f,c,0),E("z","y","x",1,-1,a,n,-t,f,c,1),E("x","z","y",1,1,t,a,n,l,f,2),E("x","z","y",1,-1,t,a,-n,l,f,3),E("x","y","z",1,-1,t,n,a,l,c,4),E("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new ra(m,3)),this.setAttribute("normal",new ra(g,3)),this.setAttribute("uv",new ra(_,2));function E(w,y,x,z,L,C,V,H,I,X,U){const R=C/I,F=V/X,ut=C/2,rt=V/2,xt=H/2,ft=I+1,O=X+1;let q=0,Z=0;const bt=new W;for(let N=0;N<O;N++){const $=N*F-rt;for(let Et=0;Et<ft;Et++){const At=Et*R-ut;bt[w]=At*z,bt[y]=$*L,bt[x]=xt,m.push(bt.x,bt.y,bt.z),bt[w]=0,bt[y]=0,bt[x]=H>0?1:-1,g.push(bt.x,bt.y,bt.z),_.push(Et/I),_.push(1-N/X),q+=1}}for(let N=0;N<X;N++)for(let $=0;$<I;$++){const Et=v+$+ft*N,At=v+$+ft*(N+1),J=v+($+1)+ft*(N+1),gt=v+($+1)+ft*N;p.push(Et,At,gt),p.push(At,J,gt),Z+=6}h.addGroup(S,Z,U),S+=Z,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function On(r){const t={};for(let n=0;n<r.length;n++){const a=wr(r[n]);for(const l in a)t[l]=a[l]}return t}function ZS(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function a0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const jS={clone:wr,merge:On};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=ZS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class s0 extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=aa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new W,Q_=new Ut,J_=new Ut;class ui extends s0{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,n){return this.getViewBounds(t,Q_,J_),n.subVectors(J_,Q_)}setViewOffset(t,n,a,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Gc*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*a/m,l*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gr=-90,_r=1;class JS extends Ln{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(gr,_r,t,n);l.layers=this.layers,this.add(l);const c=new ui(gr,_r,t,n);c.layers=this.layers,this.add(c);const f=new ui(gr,_r,t,n);f.layers=this.layers,this.add(f);const h=new ui(gr,_r,t,n);h.layers=this.layers,this.add(h);const p=new ui(gr,_r,t,n);p.layers=this.layers,this.add(p);const m=new ui(gr,_r,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(t===aa)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Wc)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,c),t.setRenderTarget(a,1,l),t.render(n,f),t.setRenderTarget(a,2,l),t.render(n,h),t.setRenderTarget(a,3,l),t.render(n,p),t.setRenderTarget(a,4,l),t.render(n,m),a.texture.generateMipmaps=w,t.setRenderTarget(a,5,l),t.render(n,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class r0 extends Pn{constructor(t=[],n=br,a,l,c,f,h,p,m,g){super(t,n,a,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $S extends Ts{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new r0(l,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Lr(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:wr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:kn,blending:Va});c.uniforms.tEquirect.value=n;const f=new yn(l,c),h=n.minFilter;return n.minFilter===Ms&&(n.minFilter=vi),new JS(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,l);t.setRenderTarget(c)}}class Ac extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tM={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const w of t.hand.values()){const y=n.getJointPose(w,a),x=this._getHandJoint(m,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Ac;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class eM extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ah=new W,nM=new W,iM=new oe;class Ha{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=Ah.subVectors(a,n).cross(nM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Ah),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||iM.getNormalMatrix(t),l=this.coplanarPoint(Ah).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Id,Rc=new W;class Gd{constructor(t=new Ha,n=new Ha,a=new Ha,l=new Ha,c=new Ha,f=new Ha){this.planes=[t,n,a,l,c,f]}set(t,n,a,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=aa){const a=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],S=l[8],E=l[9],w=l[10],y=l[11],x=l[12],z=l[13],L=l[14],C=l[15];if(a[0].setComponents(p-c,v-m,y-S,C-x).normalize(),a[1].setComponents(p+c,v+m,y+S,C+x).normalize(),a[2].setComponents(p+f,v+g,y+E,C+z).normalize(),a[3].setComponents(p-f,v-g,y-E,C-z).normalize(),a[4].setComponents(p-h,v-_,y-w,C-L).normalize(),n===aa)a[5].setComponents(p+h,v+_,y+w,C+L).normalize();else if(n===Wc)a[5].setComponents(h,_,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Rc.x=l.normal.x>0?t.max.x:t.min.x,Rc.y=l.normal.y>0?t.max.y:t.min.y,Rc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class o0 extends Pn{constructor(t,n,a,l,c,f,h,p,m){super(t,n,a,l,c,f,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class l0 extends Pn{constructor(t,n,a=Es,l,c,f,h=yi,p=yi,m,g=Xo){if(g!==Xo&&g!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(l),n.push(c),l=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let l=0;const c=a.length;let f;n?f=n:f=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=a[l]-f,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,a[l]===f)return l/(c-1);const g=a[l],v=a[l+1]-g,S=(f-g)/v;return(l+S)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),p=n||(f.isVector2?new Ut:new W);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new W,l=[],c=[],f=[],h=new W,p=new We;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new W)}c[0]=new W,f[0]=new W;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,a.set(1,0,0)),_<=m&&(m=_,a.set(0,1,0)),v<=m&&a.set(0,0,1),h.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(he(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(h,E))}f[S].crossVectors(l[S],c[S])}if(n===!0){let S=Math.acos(he(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vd extends Di{constructor(t=0,n=0,a=1,l=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new Ut){const a=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*g-S*_+this.aX,m=v*_+S*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class aM extends Vd{constructor(t,n,a,l,c,f){super(t,n,a,a,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function kd(){let r=0,t=0,n=0,a=0;function l(c,f,h,p){r=c,t=h,n=-3*c+3*f-2*h-p,a=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){l(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,g,_){let v=(f-c)/m-(h-c)/(m+g)+(h-f)/g,S=(h-f)/g-(p-f)/(g+_)+(p-h)/_;v*=g,S*=g,l(f,h,v,S)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+a*h}}}const wc=new W,Rh=new kd,wh=new kd,Ch=new kd;class sM extends Di{constructor(t=[],n=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=l}getPoint(t,n=new W){const a=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=l[(h-1)%c]:(wc.subVectors(l[0],l[1]).add(l[0]),m=wc);const _=l[h%c],v=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(wc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),S),w=Math.pow(_.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(g),S);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),Rh.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,E,w,y),wh.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,E,w,y),Ch.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(Rh.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),wh.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),Ch.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return a.set(Rh.calc(p),wh.calc(p),Ch.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new W().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $_(r,t,n,a,l){const c=(a-t)*.5,f=(l-n)*.5,h=r*r,p=r*h;return(2*n-2*a+c+f)*p+(-3*n+3*a-2*c-f)*h+c*r+n}function rM(r,t){const n=1-r;return n*n*t}function oM(r,t){return 2*(1-r)*r*t}function lM(r,t){return r*r*t}function Fo(r,t,n,a){return rM(r,t)+oM(r,n)+lM(r,a)}function cM(r,t){const n=1-r;return n*n*n*t}function uM(r,t){const n=1-r;return 3*n*n*r*t}function fM(r,t){return 3*(1-r)*r*r*t}function hM(r,t){return r*r*r*t}function Ho(r,t,n,a,l){return cM(r,t)+uM(r,n)+fM(r,a)+hM(r,l)}class c0 extends Di{constructor(t=new Ut,n=new Ut,a=new Ut,l=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new Ut){const a=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Ho(t,l.x,c.x,f.x,h.x),Ho(t,l.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dM extends Di{constructor(t=new W,n=new W,a=new W,l=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new W){const a=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Ho(t,l.x,c.x,f.x,h.x),Ho(t,l.y,c.y,f.y,h.y),Ho(t,l.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u0 extends Di{constructor(t=new Ut,n=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ut){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ut){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pM extends Di{constructor(t=new W,n=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new W){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new W){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f0 extends Di{constructor(t=new Ut,n=new Ut,a=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Ut){const a=n,l=this.v0,c=this.v1,f=this.v2;return a.set(Fo(t,l.x,c.x,f.x),Fo(t,l.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mM extends Di{constructor(t=new W,n=new W,a=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new W){const a=n,l=this.v0,c=this.v1,f=this.v2;return a.set(Fo(t,l.x,c.x,f.x),Fo(t,l.y,c.y,f.y),Fo(t,l.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h0 extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ut){const a=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return a.set($_(h,p.x,m.x,g.x,_.x),$_(h,p.y,m.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new Ut().fromArray(l))}return this}}var Td=Object.freeze({__proto__:null,ArcCurve:aM,CatmullRomCurve3:sM,CubicBezierCurve:c0,CubicBezierCurve3:dM,EllipseCurve:Vd,LineCurve:u0,LineCurve3:pM,QuadraticBezierCurve:f0,QuadraticBezierCurve3:mM,SplineCurve:h0});class gM extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Td[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=a){const f=l[c]-a,h=this.curves[c],p=h.getLength(),m=p===0?0:1-f/p;return h.getPointAt(m,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,l=this.curves.length;a<l;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(h);for(let m=0;m<p.length;m++){const g=p[m];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(new Td[l.type]().fromJSON(l))}return this}}class tv extends gM{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new u0(this.currentPoint.clone(),new Ut(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,l){const c=new f0(this.currentPoint.clone(),new Ut(t,n),new Ut(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}bezierCurveTo(t,n,a,l,c,f){const h=new c0(this.currentPoint.clone(),new Ut(t,n),new Ut(a,l),new Ut(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new h0(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,l,c,f){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+h,n+p,a,l,c,f),this}absarc(t,n,a,l,c,f){return this.absellipse(t,n,a,a,l,c,f),this}ellipse(t,n,a,l,c,f,h,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+m,n+g,a,l,c,f,h,p),this}absellipse(t,n,a,l,c,f,h,p){const m=new Vd(t,n,a,l,c,f,h,p);if(this.curves.length>0){const _=m.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class d0 extends tv{constructor(t){super(t),this.uuid=Ur(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,l=this.holes.length;a<l;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(new tv().fromJSON(l))}return this}}function _M(r,t,n=2){const a=t&&t.length,l=a?t[0]*n:r.length;let c=p0(r,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,p,m;if(a&&(c=MM(r,t,c,n)),r.length>80*n){h=1/0,p=1/0;let g=-1/0,_=-1/0;for(let v=n;v<l;v+=n){const S=r[v],E=r[v+1];S<h&&(h=S),E<p&&(p=E),S>g&&(g=S),E>_&&(_=E)}m=Math.max(g-h,_-p),m=m!==0?32767/m:0}return qo(c,f,n,h,p,m,0),f}function p0(r,t,n,a,l){let c;if(l===NM(r,t,n,a)>0)for(let f=t;f<n;f+=a)c=ev(f/a|0,r[f],r[f+1],c);else for(let f=n-a;f>=t;f-=a)c=ev(f/a|0,r[f],r[f+1],c);return c&&Cr(c,c.next)&&(Zo(c),c=c.next),c}function As(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(Cr(n,n.next)||Ze(n.prev,n,n.next)===0)){if(Zo(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function qo(r,t,n,a,l,c,f){if(!r)return;!f&&c&&RM(r,a,l,c);let h=r;for(;r.prev!==r.next;){const p=r.prev,m=r.next;if(c?xM(r,a,l,c):vM(r)){t.push(p.i,r.i,m.i),Zo(r),r=m.next,h=m.next;continue}if(r=m,r===h){f?f===1?(r=yM(As(r),t),qo(r,t,n,a,l,c,2)):f===2&&SM(r,t,n,a,l,c):qo(As(r),t,n,a,l,c,1);break}}}function vM(r){const t=r.prev,n=r,a=r.next;if(Ze(t,n,a)>=0)return!1;const l=t.x,c=n.x,f=a.x,h=t.y,p=n.y,m=a.y,g=Math.min(l,c,f),_=Math.min(h,p,m),v=Math.max(l,c,f),S=Math.max(h,p,m);let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=v&&E.y>=_&&E.y<=S&&zo(l,h,c,p,f,m,E.x,E.y)&&Ze(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function xM(r,t,n,a){const l=r.prev,c=r,f=r.next;if(Ze(l,c,f)>=0)return!1;const h=l.x,p=c.x,m=f.x,g=l.y,_=c.y,v=f.y,S=Math.min(h,p,m),E=Math.min(g,_,v),w=Math.max(h,p,m),y=Math.max(g,_,v),x=bd(S,E,t,n,a),z=bd(w,y,t,n,a);let L=r.prevZ,C=r.nextZ;for(;L&&L.z>=x&&C&&C.z<=z;){if(L.x>=S&&L.x<=w&&L.y>=E&&L.y<=y&&L!==l&&L!==f&&zo(h,g,p,_,m,v,L.x,L.y)&&Ze(L.prev,L,L.next)>=0||(L=L.prevZ,C.x>=S&&C.x<=w&&C.y>=E&&C.y<=y&&C!==l&&C!==f&&zo(h,g,p,_,m,v,C.x,C.y)&&Ze(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;L&&L.z>=x;){if(L.x>=S&&L.x<=w&&L.y>=E&&L.y<=y&&L!==l&&L!==f&&zo(h,g,p,_,m,v,L.x,L.y)&&Ze(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;C&&C.z<=z;){if(C.x>=S&&C.x<=w&&C.y>=E&&C.y<=y&&C!==l&&C!==f&&zo(h,g,p,_,m,v,C.x,C.y)&&Ze(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function yM(r,t){let n=r;do{const a=n.prev,l=n.next.next;!Cr(a,l)&&g0(a,n,n.next,l)&&Yo(a,l)&&Yo(l,a)&&(t.push(a.i,n.i,l.i),Zo(n),Zo(n.next),n=r=l),n=n.next}while(n!==r);return As(n)}function SM(r,t,n,a,l,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&DM(f,h)){let p=_0(f,h);f=As(f,f.next),p=As(p,p.next),qo(f,t,n,a,l,c,0),qo(p,t,n,a,l,c,0);return}h=h.next}f=f.next}while(f!==r)}function MM(r,t,n,a){const l=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*a,p=c<f-1?t[c+1]*a:r.length,m=p0(r,h,p,a,!1);m===m.next&&(m.steiner=!0),l.push(CM(m))}l.sort(EM);for(let c=0;c<l.length;c++)n=TM(l[c],n);return n}function EM(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=a-l}return n}function TM(r,t){const n=bM(r,t);if(!n)return t;const a=_0(n,r);return As(a,a.next),As(n,n.next)}function bM(r,t){let n=t;const a=r.x,l=r.y;let c=-1/0,f;if(Cr(r,n))return n;do{if(Cr(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const _=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,f=n.x<n.next.x?n:n.next,_===a))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,p=f.x,m=f.y;let g=1/0;n=f;do{if(a>=n.x&&n.x>=p&&a!==n.x&&m0(l<m?a:c,l,p,m,l<m?c:a,l,n.x,n.y)){const _=Math.abs(l-n.y)/(a-n.x);Yo(n,r)&&(_<g||_===g&&(n.x>f.x||n.x===f.x&&AM(f,n)))&&(f=n,g=_)}n=n.next}while(n!==h);return f}function AM(r,t){return Ze(r.prev,r,t.prev)<0&&Ze(t.next,r,r.next)<0}function RM(r,t,n,a){let l=r;do l.z===0&&(l.z=bd(l.x,l.y,t,n,a)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,wM(l)}function wM(r){let t,n=1;do{let a=r,l;r=null;let c=null;for(t=0;a;){t++;let f=a,h=0;for(let m=0;m<n&&(h++,f=f.nextZ,!!f);m++);let p=n;for(;h>0||p>0&&f;)h!==0&&(p===0||!f||a.z<=f.z)?(l=a,a=a.nextZ,h--):(l=f,f=f.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;a=f}c.nextZ=null,n*=2}while(t>1);return r}function bd(r,t,n,a,l){return r=(r-n)*l|0,t=(t-a)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function CM(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function m0(r,t,n,a,l,c,f,h){return(l-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(a-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(l-f)*(a-h)}function zo(r,t,n,a,l,c,f,h){return!(r===f&&t===h)&&m0(r,t,n,a,l,c,f,h)}function DM(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!UM(r,t)&&(Yo(r,t)&&Yo(t,r)&&LM(r,t)&&(Ze(r.prev,r,t.prev)||Ze(r,t.prev,t))||Cr(r,t)&&Ze(r.prev,r,r.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Cr(r,t){return r.x===t.x&&r.y===t.y}function g0(r,t,n,a){const l=Dc(Ze(r,t,n)),c=Dc(Ze(r,t,a)),f=Dc(Ze(n,a,r)),h=Dc(Ze(n,a,t));return!!(l!==c&&f!==h||l===0&&Cc(r,n,t)||c===0&&Cc(r,a,t)||f===0&&Cc(n,r,a)||h===0&&Cc(n,t,a))}function Cc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Dc(r){return r>0?1:r<0?-1:0}function UM(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&g0(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function Yo(r,t){return Ze(r.prev,r,r.next)<0?Ze(r,t,r.next)>=0&&Ze(r,r.prev,t)>=0:Ze(r,t,r.prev)<0||Ze(r,r.next,t)<0}function LM(r,t){let n=r,a=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function _0(r,t){const n=Ad(r.i,r.x,r.y),a=Ad(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function ev(r,t,n,a){const l=Ad(r,t,n);return a?(l.next=a.next,l.prev=a,a.next.prev=l,a.next=l):(l.prev=l,l.next=l),l}function Zo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ad(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function NM(r,t,n,a){let l=0;for(let c=t,f=n-a;c<n;c+=a)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class OM{static triangulate(t,n,a=2){return _M(t,n,a)}}class Go{static area(t){const n=t.length;let a=0;for(let l=n-1,c=0;c<n;l=c++)a+=t[l].x*t[c].y-t[c].x*t[l].y;return a*.5}static isClockWise(t){return Go.area(t)<0}static triangulateShape(t,n){const a=[],l=[],c=[];nv(t),iv(a,t);let f=t.length;n.forEach(nv);for(let p=0;p<n.length;p++)l.push(f),f+=n[p].length,iv(a,n[p]);const h=OM.triangulate(a,l);for(let p=0;p<h.length;p+=3)c.push(h.slice(p,p+3));return c}}function nv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function iv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Xd extends qa{constructor(t=new d0([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,l=[],c=[];for(let h=0,p=t.length;h<p;h++){const m=t[h];f(m)}this.setAttribute("position",new ra(l,3)),this.setAttribute("uv",new ra(c,2)),this.computeVertexNormals();function f(h){const p=[],m=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,S=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:S-.1,w=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3;const x=n.extrudePath,z=n.UVGenerator!==void 0?n.UVGenerator:PM;let L,C=!1,V,H,I,X;x&&(L=x.getSpacedPoints(g),C=!0,v=!1,V=x.computeFrenetFrames(g,!1),H=new W,I=new W,X=new W),v||(y=0,S=0,E=0,w=0);const U=h.extractPoints(m);let R=U.shape;const F=U.holes;if(!Go.isClockWise(R)){R=R.reverse();for(let yt=0,vt=F.length;yt<vt;yt++){const pt=F[yt];Go.isClockWise(pt)&&(F[yt]=pt.reverse())}}function rt(yt){const pt=10000000000000001e-36;let Nt=yt[0];for(let dt=1;dt<=yt.length;dt++){const D=dt%yt.length,T=yt[D],j=T.x-Nt.x,lt=T.y-Nt.y,mt=j*j+lt*lt,ot=Math.max(Math.abs(T.x),Math.abs(T.y),Math.abs(Nt.x),Math.abs(Nt.y)),Pt=pt*ot*ot;if(mt<=Pt){yt.splice(D,1),dt--;continue}Nt=T}}rt(R),F.forEach(rt);const xt=F.length,ft=R;for(let yt=0;yt<xt;yt++){const vt=F[yt];R=R.concat(vt)}function O(yt,vt,pt){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),yt.clone().addScaledVector(vt,pt)}const q=R.length;function Z(yt,vt,pt){let Nt,dt,D;const T=yt.x-vt.x,j=yt.y-vt.y,lt=pt.x-yt.x,mt=pt.y-yt.y,ot=T*T+j*j,Pt=T*mt-j*lt;if(Math.abs(Pt)>Number.EPSILON){const Ct=Math.sqrt(ot),Lt=Math.sqrt(lt*lt+mt*mt),de=vt.x-j/Ct,wt=vt.y+T/Ct,kt=pt.x-mt/Lt,Zt=pt.y+lt/Lt,Kt=((kt-de)*mt-(Zt-wt)*lt)/(T*mt-j*lt);Nt=de+T*Kt-yt.x,dt=wt+j*Kt-yt.y;const Ft=Nt*Nt+dt*dt;if(Ft<=2)return new Ut(Nt,dt);D=Math.sqrt(Ft/2)}else{let Ct=!1;T>Number.EPSILON?lt>Number.EPSILON&&(Ct=!0):T<-Number.EPSILON?lt<-Number.EPSILON&&(Ct=!0):Math.sign(j)===Math.sign(mt)&&(Ct=!0),Ct?(Nt=-j,dt=T,D=Math.sqrt(ot)):(Nt=T,dt=j,D=Math.sqrt(ot/2))}return new Ut(Nt/D,dt/D)}const bt=[];for(let yt=0,vt=ft.length,pt=vt-1,Nt=yt+1;yt<vt;yt++,pt++,Nt++)pt===vt&&(pt=0),Nt===vt&&(Nt=0),bt[yt]=Z(ft[yt],ft[pt],ft[Nt]);const N=[];let $,Et=bt.concat();for(let yt=0,vt=xt;yt<vt;yt++){const pt=F[yt];$=[];for(let Nt=0,dt=pt.length,D=dt-1,T=Nt+1;Nt<dt;Nt++,D++,T++)D===dt&&(D=0),T===dt&&(T=0),$[Nt]=Z(pt[Nt],pt[D],pt[T]);N.push($),Et=Et.concat($)}const At=[],J=[];for(let yt=0;yt<y;yt++){const vt=yt/y,pt=S*Math.cos(vt*Math.PI/2),Nt=E*Math.sin(vt*Math.PI/2)+w;for(let dt=0,D=ft.length;dt<D;dt++){const T=O(ft[dt],bt[dt],Nt);ve(T.x,T.y,-pt),vt==0&&At.push(T)}for(let dt=0,D=xt;dt<D;dt++){const T=F[dt];$=N[dt];const j=[];for(let lt=0,mt=T.length;lt<mt;lt++){const ot=O(T[lt],$[lt],Nt);ve(ot.x,ot.y,-pt),vt==0&&j.push(ot)}vt==0&&J.push(j)}}const gt=Go.triangulateShape(At,J),Tt=gt.length,Dt=E+w;for(let yt=0;yt<q;yt++){const vt=v?O(R[yt],Et[yt],Dt):R[yt];C?(I.copy(V.normals[0]).multiplyScalar(vt.x),H.copy(V.binormals[0]).multiplyScalar(vt.y),X.copy(L[0]).add(I).add(H),ve(X.x,X.y,X.z)):ve(vt.x,vt.y,0)}for(let yt=1;yt<=g;yt++)for(let vt=0;vt<q;vt++){const pt=v?O(R[vt],Et[vt],Dt):R[vt];C?(I.copy(V.normals[yt]).multiplyScalar(pt.x),H.copy(V.binormals[yt]).multiplyScalar(pt.y),X.copy(L[yt]).add(I).add(H),ve(X.x,X.y,X.z)):ve(pt.x,pt.y,_/g*yt)}for(let yt=y-1;yt>=0;yt--){const vt=yt/y,pt=S*Math.cos(vt*Math.PI/2),Nt=E*Math.sin(vt*Math.PI/2)+w;for(let dt=0,D=ft.length;dt<D;dt++){const T=O(ft[dt],bt[dt],Nt);ve(T.x,T.y,_+pt)}for(let dt=0,D=F.length;dt<D;dt++){const T=F[dt];$=N[dt];for(let j=0,lt=T.length;j<lt;j++){const mt=O(T[j],$[j],Nt);C?ve(mt.x,mt.y+L[g-1].y,L[g-1].x+pt):ve(mt.x,mt.y,_+pt)}}}zt(),se();function zt(){const yt=l.length/3;if(v){let vt=0,pt=q*vt;for(let Nt=0;Nt<Tt;Nt++){const dt=gt[Nt];Ee(dt[2]+pt,dt[1]+pt,dt[0]+pt)}vt=g+y*2,pt=q*vt;for(let Nt=0;Nt<Tt;Nt++){const dt=gt[Nt];Ee(dt[0]+pt,dt[1]+pt,dt[2]+pt)}}else{for(let vt=0;vt<Tt;vt++){const pt=gt[vt];Ee(pt[2],pt[1],pt[0])}for(let vt=0;vt<Tt;vt++){const pt=gt[vt];Ee(pt[0]+q*g,pt[1]+q*g,pt[2]+q*g)}}a.addGroup(yt,l.length/3-yt,0)}function se(){const yt=l.length/3;let vt=0;jt(ft,vt),vt+=ft.length;for(let pt=0,Nt=F.length;pt<Nt;pt++){const dt=F[pt];jt(dt,vt),vt+=dt.length}a.addGroup(yt,l.length/3-yt,1)}function jt(yt,vt){let pt=yt.length;for(;--pt>=0;){const Nt=pt;let dt=pt-1;dt<0&&(dt=yt.length-1);for(let D=0,T=g+y*2;D<T;D++){const j=q*D,lt=q*(D+1),mt=vt+Nt+j,ot=vt+dt+j,Pt=vt+dt+lt,Ct=vt+Nt+lt;le(mt,ot,Pt,Ct)}}}function ve(yt,vt,pt){p.push(yt),p.push(vt),p.push(pt)}function Ee(yt,vt,pt){B(yt),B(vt),B(pt);const Nt=l.length/3,dt=z.generateTopUV(a,l,Nt-3,Nt-2,Nt-1);ke(dt[0]),ke(dt[1]),ke(dt[2])}function le(yt,vt,pt,Nt){B(yt),B(vt),B(Nt),B(vt),B(pt),B(Nt);const dt=l.length/3,D=z.generateSideWallUV(a,l,dt-6,dt-3,dt-2,dt-1);ke(D[0]),ke(D[1]),ke(D[3]),ke(D[1]),ke(D[2]),ke(D[3])}function B(yt){l.push(p[yt*3+0]),l.push(p[yt*3+1]),l.push(p[yt*3+2])}function ke(yt){c.push(yt.x),c.push(yt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return zM(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];a.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Td[l.type]().fromJSON(l)),new Xd(a,t.options)}}const PM={generateTopUV:function(r,t,n,a,l){const c=t[n*3],f=t[n*3+1],h=t[a*3],p=t[a*3+1],m=t[l*3],g=t[l*3+1];return[new Ut(c,f),new Ut(h,p),new Ut(m,g)]},generateSideWallUV:function(r,t,n,a,l,c){const f=t[n*3],h=t[n*3+1],p=t[n*3+2],m=t[a*3],g=t[a*3+1],_=t[a*3+2],v=t[l*3],S=t[l*3+1],E=t[l*3+2],w=t[c*3],y=t[c*3+1],x=t[c*3+2];return Math.abs(h-g)<Math.abs(f-m)?[new Ut(f,1-p),new Ut(m,1-_),new Ut(v,1-E),new Ut(w,1-x)]:[new Ut(h,1-p),new Ut(g,1-_),new Ut(S,1-E),new Ut(y,1-x)]}};function zM(r,t,n){if(n.shapes=[],Array.isArray(r))for(let a=0,l=r.length;a<l;a++){const c=r[a];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Nr extends qa{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(a),p=Math.floor(l),m=h+1,g=p+1,_=t/h,v=n/p,S=[],E=[],w=[],y=[];for(let x=0;x<g;x++){const z=x*v-f;for(let L=0;L<m;L++){const C=L*_-c;E.push(C,-z,0),w.push(0,0,1),y.push(L/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let z=0;z<h;z++){const L=z+m*x,C=z+m*(x+1),V=z+1+m*(x+1),H=z+1+m*x;S.push(L,C,H),S.push(C,V,H)}this.setIndex(S),this.setAttribute("position",new ra(E,3)),this.setAttribute("normal",new ra(w,3)),this.setAttribute("uv",new ra(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dr extends Jo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qv,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class BM extends Jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IM extends Jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class v0 extends Ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Dh=new We,av=new W,sv=new W;class FM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;av.setFromMatrixPosition(t.matrixWorld),n.position.copy(av),sv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(sv),n.updateMatrixWorld(),Dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x0 extends s0{constructor(t=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class HM extends FM{constructor(){super(new x0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class GM extends v0{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new HM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class VM extends v0{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class kM extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const rv=new We;class XM{constructor(t,n,a=0,l=1/0){this.ray=new Fd(t,n),this.near=a,this.far=l,this.camera=null,this.layers=new Hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return rv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rv),this}intersectObject(t,n=!0,a=[]){return Rd(t,this,a,n),a.sort(ov),a}intersectObjects(t,n=!0,a=[]){for(let l=0,c=t.length;l<c;l++)Rd(t[l],this,a,n);return a.sort(ov),a}}function ov(r,t){return r.distance-t.distance}function Rd(r,t,n,a){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&a===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Rd(c[f],t,n,!0)}}class lv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(he(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class WM extends Rs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function cv(r,t,n,a){const l=qM(a);switch(n){case Xv:return r*t;case qv:return r*t;case Yv:return r*t*2;case Zv:return r*t/l.components*l.byteLength;case Od:return r*t/l.components*l.byteLength;case jv:return r*t*2/l.components*l.byteLength;case Pd:return r*t*2/l.components*l.byteLength;case Wv:return r*t*3/l.components*l.byteLength;case xi:return r*t*4/l.components*l.byteLength;case zd:return r*t*4/l.components*l.byteLength;case zc:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jh:case td:return Math.max(r,16)*Math.max(t,8)/4;case Qh:case $h:return Math.max(r,8)*Math.max(t,8)/2;case ed:case nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case rd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case od:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ld:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ud:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case dd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case pd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case md:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case gd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hc:case vd:case xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kv:case yd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Sd:case Md:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qM(r){switch(r){case oa:case Gv:return{byteLength:1,components:1};case Vo:case Vv:case Ko:return{byteLength:2,components:1};case Ld:case Nd:return{byteLength:2,components:4};case Es:case Ud:case ia:return{byteLength:4,components:1};case kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y0(){let r=null,t=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function YM(r){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,m){const g=p.array,_=p.updateRanges;if(r.bindBuffer(m,h),_.length===0)r.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],w=_[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,_[v]=w)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const w=_[S];r.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_E=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_T=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ST=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ET=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:ZM,alphahash_pars_fragment:jM,alphamap_fragment:KM,alphamap_pars_fragment:QM,alphatest_fragment:JM,alphatest_pars_fragment:$M,aomap_fragment:tE,aomap_pars_fragment:eE,batching_pars_vertex:nE,batching_vertex:iE,begin_vertex:aE,beginnormal_vertex:sE,bsdfs:rE,iridescence_fragment:oE,bumpmap_pars_fragment:lE,clipping_planes_fragment:cE,clipping_planes_pars_fragment:uE,clipping_planes_pars_vertex:fE,clipping_planes_vertex:hE,color_fragment:dE,color_pars_fragment:pE,color_pars_vertex:mE,color_vertex:gE,common:_E,cube_uv_reflection_fragment:vE,defaultnormal_vertex:xE,displacementmap_pars_vertex:yE,displacementmap_vertex:SE,emissivemap_fragment:ME,emissivemap_pars_fragment:EE,colorspace_fragment:TE,colorspace_pars_fragment:bE,envmap_fragment:AE,envmap_common_pars_fragment:RE,envmap_pars_fragment:wE,envmap_pars_vertex:CE,envmap_physical_pars_fragment:HE,envmap_vertex:DE,fog_vertex:UE,fog_pars_vertex:LE,fog_fragment:NE,fog_pars_fragment:OE,gradientmap_pars_fragment:PE,lightmap_pars_fragment:zE,lights_lambert_fragment:BE,lights_lambert_pars_fragment:IE,lights_pars_begin:FE,lights_toon_fragment:GE,lights_toon_pars_fragment:VE,lights_phong_fragment:kE,lights_phong_pars_fragment:XE,lights_physical_fragment:WE,lights_physical_pars_fragment:qE,lights_fragment_begin:YE,lights_fragment_maps:ZE,lights_fragment_end:jE,logdepthbuf_fragment:KE,logdepthbuf_pars_fragment:QE,logdepthbuf_pars_vertex:JE,logdepthbuf_vertex:$E,map_fragment:tT,map_pars_fragment:eT,map_particle_fragment:nT,map_particle_pars_fragment:iT,metalnessmap_fragment:aT,metalnessmap_pars_fragment:sT,morphinstance_vertex:rT,morphcolor_vertex:oT,morphnormal_vertex:lT,morphtarget_pars_vertex:cT,morphtarget_vertex:uT,normal_fragment_begin:fT,normal_fragment_maps:hT,normal_pars_fragment:dT,normal_pars_vertex:pT,normal_vertex:mT,normalmap_pars_fragment:gT,clearcoat_normal_fragment_begin:_T,clearcoat_normal_fragment_maps:vT,clearcoat_pars_fragment:xT,iridescence_pars_fragment:yT,opaque_fragment:ST,packing:MT,premultiplied_alpha_fragment:ET,project_vertex:TT,dithering_fragment:bT,dithering_pars_fragment:AT,roughnessmap_fragment:RT,roughnessmap_pars_fragment:wT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:DT,shadowmap_vertex:UT,shadowmask_pars_fragment:LT,skinbase_vertex:NT,skinning_pars_vertex:OT,skinning_vertex:PT,skinnormal_vertex:zT,specularmap_fragment:BT,specularmap_pars_fragment:IT,tonemapping_fragment:FT,tonemapping_pars_fragment:HT,transmission_fragment:GT,transmission_pars_fragment:VT,uv_pars_fragment:kT,uv_pars_vertex:XT,uv_vertex:WT,worldpos_vertex:qT,background_vert:YT,background_frag:ZT,backgroundCube_vert:jT,backgroundCube_frag:KT,cube_vert:QT,cube_frag:JT,depth_vert:$T,depth_frag:tb,distanceRGBA_vert:eb,distanceRGBA_frag:nb,equirect_vert:ib,equirect_frag:ab,linedashed_vert:sb,linedashed_frag:rb,meshbasic_vert:ob,meshbasic_frag:lb,meshlambert_vert:cb,meshlambert_frag:ub,meshmatcap_vert:fb,meshmatcap_frag:hb,meshnormal_vert:db,meshnormal_frag:pb,meshphong_vert:mb,meshphong_frag:gb,meshphysical_vert:_b,meshphysical_frag:vb,meshtoon_vert:xb,meshtoon_frag:yb,points_vert:Sb,points_frag:Mb,shadow_vert:Eb,shadow_frag:Tb,sprite_vert:bb,sprite_frag:Ab},It={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ri={basic:{uniforms:On([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([It.points,It.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([It.common,It.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([It.sprite,It.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([It.common,It.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([It.lights,It.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ri.physical={uniforms:On([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Uc={r:0,b:0,g:0},gs=new Ci,Rb=new We;function wb(r,t,n,a,l,c,f){const h=new Ce(0);let p=c===!0?0:1,m,g,_=null,v=0,S=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:t).get(C)),C}function w(L){let C=!1;const V=E(L);V===null?x(h,p):V&&V.isColor&&(x(V,1),C=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?a.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,C){const V=E(C);V&&(V.isCubeTexture||V.mapping===Yc)?(g===void 0&&(g=new yn(new Lr(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:wr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gs.copy(C.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(gs)),g.material.toneMapped=Re.getTransfer(V.colorSpace)!==ze,(_!==V||v!==V.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=V,v=V.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new yn(new Nr(2,2),new Wa({name:"BackgroundMaterial",uniforms:wr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Re.getTransfer(V.colorSpace)!==ze,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||v!==V.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,_=V,v=V.version,S=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function x(L,C){L.getRGB(Uc,a0(r)),a.buffers.color.setClear(Uc.r,Uc.g,Uc.b,C,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,C=1){h.set(L),p=C,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(h,p)},render:w,addToRenderList:y,dispose:z}}function Cb(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=v(null);let c=l,f=!1;function h(R,F,ut,rt,xt){let ft=!1;const O=_(rt,ut,F);c!==O&&(c=O,m(c.object)),ft=S(R,rt,ut,xt),ft&&E(R,rt,ut,xt),xt!==null&&t.update(xt,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,C(R,F,ut,rt),xt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(xt).buffer))}function p(){return r.createVertexArray()}function m(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function _(R,F,ut){const rt=ut.wireframe===!0;let xt=a[R.id];xt===void 0&&(xt={},a[R.id]=xt);let ft=xt[F.id];ft===void 0&&(ft={},xt[F.id]=ft);let O=ft[rt];return O===void 0&&(O=v(p()),ft[rt]=O),O}function v(R){const F=[],ut=[],rt=[];for(let xt=0;xt<n;xt++)F[xt]=0,ut[xt]=0,rt[xt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ut,attributeDivisors:rt,object:R,attributes:{},index:null}}function S(R,F,ut,rt){const xt=c.attributes,ft=F.attributes;let O=0;const q=ut.getAttributes();for(const Z in q)if(q[Z].location>=0){const N=xt[Z];let $=ft[Z];if($===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;O++}return c.attributesNum!==O||c.index!==rt}function E(R,F,ut,rt){const xt={},ft=F.attributes;let O=0;const q=ut.getAttributes();for(const Z in q)if(q[Z].location>=0){let N=ft[Z];N===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),xt[Z]=$,O++}c.attributes=xt,c.attributesNum=O,c.index=rt}function w(){const R=c.newAttributes;for(let F=0,ut=R.length;F<ut;F++)R[F]=0}function y(R){x(R,0)}function x(R,F){const ut=c.newAttributes,rt=c.enabledAttributes,xt=c.attributeDivisors;ut[R]=1,rt[R]===0&&(r.enableVertexAttribArray(R),rt[R]=1),xt[R]!==F&&(r.vertexAttribDivisor(R,F),xt[R]=F)}function z(){const R=c.newAttributes,F=c.enabledAttributes;for(let ut=0,rt=F.length;ut<rt;ut++)F[ut]!==R[ut]&&(r.disableVertexAttribArray(ut),F[ut]=0)}function L(R,F,ut,rt,xt,ft,O){O===!0?r.vertexAttribIPointer(R,F,ut,xt,ft):r.vertexAttribPointer(R,F,ut,rt,xt,ft)}function C(R,F,ut,rt){w();const xt=rt.attributes,ft=ut.getAttributes(),O=F.defaultAttributeValues;for(const q in ft){const Z=ft[q];if(Z.location>=0){let bt=xt[q];if(bt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(bt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(bt=R.instanceColor)),bt!==void 0){const N=bt.normalized,$=bt.itemSize,Et=t.get(bt);if(Et===void 0)continue;const At=Et.buffer,J=Et.type,gt=Et.bytesPerElement,Tt=J===r.INT||J===r.UNSIGNED_INT||bt.gpuType===Ud;if(bt.isInterleavedBufferAttribute){const Dt=bt.data,zt=Dt.stride,se=bt.offset;if(Dt.isInstancedInterleavedBuffer){for(let jt=0;jt<Z.locationSize;jt++)x(Z.location+jt,Dt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let jt=0;jt<Z.locationSize;jt++)y(Z.location+jt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let jt=0;jt<Z.locationSize;jt++)L(Z.location+jt,$/Z.locationSize,J,N,zt*gt,(se+$/Z.locationSize*jt)*gt,Tt)}else{if(bt.isInstancedBufferAttribute){for(let Dt=0;Dt<Z.locationSize;Dt++)x(Z.location+Dt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)y(Z.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Dt=0;Dt<Z.locationSize;Dt++)L(Z.location+Dt,$/Z.locationSize,J,N,$*gt,$/Z.locationSize*Dt*gt,Tt)}}else if(O!==void 0){const N=O[q];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Z.location,N);break;case 3:r.vertexAttrib3fv(Z.location,N);break;case 4:r.vertexAttrib4fv(Z.location,N);break;default:r.vertexAttrib1fv(Z.location,N)}}}}z()}function V(){X();for(const R in a){const F=a[R];for(const ut in F){const rt=F[ut];for(const xt in rt)g(rt[xt].object),delete rt[xt];delete F[ut]}delete a[R]}}function H(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const ut in F){const rt=F[ut];for(const xt in rt)g(rt[xt].object),delete rt[xt];delete F[ut]}delete a[R.id]}function I(R){for(const F in a){const ut=a[F];if(ut[R.id]===void 0)continue;const rt=ut[R.id];for(const xt in rt)g(rt[xt].object),delete rt[xt];delete ut[R.id]}}function X(){U(),f=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:V,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:z}}function Db(r,t,n){let a;function l(m){a=m}function c(m,g){r.drawArrays(a,m,g),n.update(g,a,1)}function f(m,g,_){_!==0&&(r.drawArraysInstanced(a,m,g,_),n.update(g,a,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];n.update(S,a,1)}function p(m,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(a,m,0,g,0,v,0,_);let E=0;for(let w=0;w<_;w++)E+=g[w]*v[w];n.update(E,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Ub(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==xi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const X=I===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==oa&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ia&&!X)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:V,maxSamples:H}}function Lb(r){const t=this;let n=null,a=0,l=!1,c=!1;const f=new Ha,h=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||a!==0||l;return l=v,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const z=c?0:a,L=z*4;let C=x.clippingState||null;p.value=C,C=g(E,v,L,S);for(let V=0;V!==L;++V)C[V]=n[V];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,S,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=p.value,E!==!0||y===null){const x=S+w*4,z=v.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,C=S;L!==w;++L,C+=4)f.copy(_[L]).applyMatrix4(z,h),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function Nb(r){let t=new WeakMap;function n(f,h){return h===Yh?f.mapping=br:h===Zh&&(f.mapping=Ar),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===Yh||h===Zh)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new $S(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const yr=4,uv=[.125,.215,.35,.446,.526,.582],ys=20,Uh=new x0,fv=new Ce;let Lh=null,Nh=0,Oh=0,Ph=!1;const vs=(1+Math.sqrt(5))/2,vr=1/vs,hv=[new W(-vs,vr,0),new W(vs,vr,0),new W(-vr,0,vs),new W(vr,0,vs),new W(0,vs,-vr),new W(0,vs,vr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Ob=new W;class dv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,l=100,c={}){const{size:f=256,position:h=Ob}=c;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,l,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Nh,Oh),this._renderer.xr.enabled=Ph,t.scissorTest=!1,Lc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===br||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Ko,format:xi,colorSpace:Rr,depthBuffer:!1},l=pv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pb(c)),this._blurMaterial=zb(c,t,n)}return l}_compileMaterial(t){const n=new yn(this._lodPlanes[0],t);this._renderer.compile(n,Uh)}_sceneToCubeUV(t,n,a,l,c){const p=new ui(90,1,n,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(fv),_.toneMapping=ka,_.autoClear=!1;const E=new Zc({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),w=new yn(new Lr,E);let y=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,y=!0):(E.color.copy(fv),y=!0);for(let z=0;z<6;z++){const L=z%3;L===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[z],c.y,c.z)):L===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[z]));const C=this._cubeSize;Lc(l,L*C,z>2?C:0,C,C),_.setRenderTarget(l),y&&_.render(w,p),_.render(t,p)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=S,_.autoClear=v,t.background=x}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===br||t.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new yn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Lc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(f,Uh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=hv[(l-c-1)%hv.length];this._blur(t,c-1,c,f,h)}n.autoClear=a}_blur(t,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new yn(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ys-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):ys;y>ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const x=[];let z=0;for(let I=0;I<ys;++I){const X=I/w,U=Math.exp(-X*X/2);x.push(U),I===0?z+=U:I<y&&(z+=2*U)}for(let I=0;I<x.length;I++)x[I]=x[I]/z;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const C=this._sizeLods[l],V=3*C*(l>L-yr?l-L+yr:0),H=4*(this._cubeSize-C);Lc(n,V,H,3*C,2*C),p.setRenderTarget(n),p.render(_,Uh)}}function Pb(r){const t=[],n=[],a=[];let l=r;const c=r-yr+1+uv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>r-yr?p=uv[f-r+yr-1]:f===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,w=3,y=2,x=1,z=new Float32Array(w*E*S),L=new Float32Array(y*E*S),C=new Float32Array(x*E*S);for(let H=0;H<S;H++){const I=H%3*2/3-1,X=H>2?0:-1,U=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];z.set(U,w*E*H),L.set(v,y*E*H);const R=[H,H,H,H,H,H];C.set(R,x*E*H)}const V=new qa;V.setAttribute("position",new wi(z,w)),V.setAttribute("uv",new wi(L,y)),V.setAttribute("faceIndex",new wi(C,x)),t.push(V),l>yr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function pv(r,t,n){const a=new Ts(r,t,n);return a.texture.mapping=Yc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Lc(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function zb(r,t,n){const a=new Float32Array(ys),l=new W(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function mv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function gv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Wd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bb(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===Yh||p===Zh,g=p===br||p===Ar;if(m||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new dv(r)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new dv(r)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function Ib(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(a)}return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Vc("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function Fb(r,t,n,a){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER)}function m(_){const v=[],S=_.index,E=_.attributes.position;let w=0;if(S!==null){const z=S.array;w=S.version;for(let L=0,C=z.length;L<C;L+=3){const V=z[L+0],H=z[L+1],I=z[L+2];v.push(V,H,H,I,I,V)}}else if(E!==void 0){const z=E.array;w=E.version;for(let L=0,C=z.length/3-1;L<C;L+=3){const V=L+0,H=L+1,I=L+2;v.push(V,H,H,I,I,V)}}else return;const y=new($v(v)?i0:n0)(v,1);y.version=w;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function Hb(r,t,n){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,S){r.drawElements(a,S,c,v*f),n.update(S,a,1)}function m(v,S,E){E!==0&&(r.drawElementsInstanced(a,S,c,v*f,E),n.update(S,a,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];n.update(y,a,1)}function _(v,S,E,w){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)m(v[x]/f,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,c,v,0,w,0,E);let x=0;for(let z=0;z<E;z++)x+=S[z]*w[z];n.update(x,a,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Gb(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function Vb(r,t,n){const a=new WeakMap,l=new Je;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let R=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let V=h.attributes.position.count*C,H=1;V>t.maxTextureSize&&(H=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const I=new Float32Array(V*H*4*_),X=new t0(I,V,H,_);X.type=ia,X.needsUpdate=!0;const U=C*4;for(let F=0;F<_;F++){const ut=x[F],rt=z[F],xt=L[F],ft=V*H*4*F;for(let O=0;O<ut.count;O++){const q=O*U;E===!0&&(l.fromBufferAttribute(ut,O),I[ft+q+0]=l.x,I[ft+q+1]=l.y,I[ft+q+2]=l.z,I[ft+q+3]=0),w===!0&&(l.fromBufferAttribute(rt,O),I[ft+q+4]=l.x,I[ft+q+5]=l.y,I[ft+q+6]=l.z,I[ft+q+7]=0),y===!0&&(l.fromBufferAttribute(xt,O),I[ft+q+8]=l.x,I[ft+q+9]=l.y,I[ft+q+10]=l.z,I[ft+q+11]=xt.itemSize===4?l.w:1)}}v={count:_,texture:X,size:new Ut(V,H)},a.set(h,v),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const w=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function kb(r,t,n,a){let l=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const S0=new Pn,_v=new l0(1,1),M0=new t0,E0=new zS,T0=new r0,vv=[],xv=[],yv=new Float32Array(16),Sv=new Float32Array(9),Mv=new Float32Array(4);function Or(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=vv[l];if(c===void 0&&(c=new Float32Array(l),vv[l]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function hn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function dn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function jc(r,t){let n=xv[t];n===void 0&&(n=new Int32Array(t),xv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function Xb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function Wb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2fv(this.addr,t),dn(n,t)}}function qb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;r.uniform3fv(this.addr,t),dn(n,t)}}function Yb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4fv(this.addr,t),dn(n,t)}}function Zb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;Mv.set(a),r.uniformMatrix2fv(this.addr,!1,Mv),dn(n,a)}}function jb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;Sv.set(a),r.uniformMatrix3fv(this.addr,!1,Sv),dn(n,a)}}function Kb(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;yv.set(a),r.uniformMatrix4fv(this.addr,!1,yv),dn(n,a)}}function Qb(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function Jb(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2iv(this.addr,t),dn(n,t)}}function $b(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;r.uniform3iv(this.addr,t),dn(n,t)}}function tA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4iv(this.addr,t),dn(n,t)}}function eA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function nA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;r.uniform2uiv(this.addr,t),dn(n,t)}}function iA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;r.uniform3uiv(this.addr,t),dn(n,t)}}function aA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;r.uniform4uiv(this.addr,t),dn(n,t)}}function sA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(_v.compareFunction=Jv,c=_v):c=S0,n.setTexture2D(t||c,l)}function rA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||E0,l)}function oA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||T0,l)}function lA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||M0,l)}function cA(r){switch(r){case 5126:return Xb;case 35664:return Wb;case 35665:return qb;case 35666:return Yb;case 35674:return Zb;case 35675:return jb;case 35676:return Kb;case 5124:case 35670:return Qb;case 35667:case 35671:return Jb;case 35668:case 35672:return $b;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}function uA(r,t){r.uniform1fv(this.addr,t)}function fA(r,t){const n=Or(t,this.size,2);r.uniform2fv(this.addr,n)}function hA(r,t){const n=Or(t,this.size,3);r.uniform3fv(this.addr,n)}function dA(r,t){const n=Or(t,this.size,4);r.uniform4fv(this.addr,n)}function pA(r,t){const n=Or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function mA(r,t){const n=Or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function gA(r,t){const n=Or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function _A(r,t){r.uniform1iv(this.addr,t)}function vA(r,t){r.uniform2iv(this.addr,t)}function xA(r,t){r.uniform3iv(this.addr,t)}function yA(r,t){r.uniform4iv(this.addr,t)}function SA(r,t){r.uniform1uiv(this.addr,t)}function MA(r,t){r.uniform2uiv(this.addr,t)}function EA(r,t){r.uniform3uiv(this.addr,t)}function TA(r,t){r.uniform4uiv(this.addr,t)}function bA(r,t,n){const a=this.cache,l=t.length,c=jc(n,l);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||S0,c[f])}function AA(r,t,n){const a=this.cache,l=t.length,c=jc(n,l);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||E0,c[f])}function RA(r,t,n){const a=this.cache,l=t.length,c=jc(n,l);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||T0,c[f])}function wA(r,t,n){const a=this.cache,l=t.length,c=jc(n,l);hn(a,c)||(r.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||M0,c[f])}function CA(r){switch(r){case 5126:return uA;case 35664:return fA;case 35665:return hA;case 35666:return dA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return _A;case 35667:case 35671:return vA;case 35668:case 35672:return xA;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return RA;case 36289:case 36303:case 36311:case 36292:return wA}}class DA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=cA(n.type)}}class UA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CA(n.type)}}class LA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],a)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function Ev(r,t){r.seq.push(t),r.map[t.id]=t}function NA(r,t,n){const a=r.name,l=a.length;for(zh.lastIndex=0;;){const c=zh.exec(a),f=zh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Ev(n,m===void 0?new DA(h,r,t):new UA(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new LA(h),Ev(n,_)),n=_}}}class kc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);NA(c,f,this)}}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&a.push(f)}return a}}function Tv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const OA=37297;let PA=0;function zA(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const bv=new oe;function BA(r){Re._getMatrix(bv,Re.workingColorSpace,r);const t=`mat3( ${bv.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(r)){case Xc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Av(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+zA(r.getShaderSource(t),f)}else return l}function IA(r,t){const n=BA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function FA(r,t){let n;switch(t){case oS:n="Linear";break;case lS:n="Reinhard";break;case cS:n="Cineon";break;case uS:n="ACESFilmic";break;case hS:n="AgX";break;case dS:n="Neutral";break;case fS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nc=new W;function HA(){Re.getLuminanceCoefficients(Nc);const r=Nc.x.toFixed(4),t=Nc.y.toFixed(4),n=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function VA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function kA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function Bo(r){return r!==""}function Rv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(r){return r.replace(XA,qA)}const WA=new Map;function qA(r,t){let n=ce[t];if(n===void 0){const a=WA.get(t);if(a!==void 0)n=ce[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return wd(n)}const YA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(r){return r.replace(YA,ZA)}function ZA(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Iv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Hy?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function KA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case Ar:t="ENVMAP_TYPE_CUBE";break;case Yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function JA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fv:t="ENVMAP_BLENDING_MULTIPLY";break;case sS:t="ENVMAP_BLENDING_MIX";break;case rS:t="ENVMAP_BLENDING_ADD";break}return t}function $A(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function t1(r,t,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=jA(n),m=KA(n),g=QA(n),_=JA(n),v=$A(n),S=GA(n),E=VA(c),w=l.createProgram();let y,x,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Bo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(y=[Dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[Dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ka?"#define TONE_MAPPING":"",n.toneMapping!==ka?ce.tonemapping_pars_fragment:"",n.toneMapping!==ka?FA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,IA("linearToOutputTexel",n.outputColorSpace),HA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),f=wd(f),f=Rv(f,n),f=wv(f,n),h=wd(h),h=Rv(h,n),h=wv(h,n),f=Cv(f),h=Cv(h),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=z+y+f,C=z+x+h,V=Tv(l,l.VERTEX_SHADER,L),H=Tv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,V),l.attachShader(w,H),n.index0AttributeName!==void 0?l.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(F){if(r.debug.checkShaderErrors){const ut=l.getProgramInfoLog(w).trim(),rt=l.getShaderInfoLog(V).trim(),xt=l.getShaderInfoLog(H).trim();let ft=!0,O=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ft=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,V,H);else{const q=Av(l,V,"vertex"),Z=Av(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ut+`
`+q+`
`+Z)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(rt===""||xt==="")&&(O=!1);O&&(F.diagnostics={runnable:ft,programLog:ut,vertexShader:{log:rt,prefix:y},fragmentShader:{log:xt,prefix:x}})}l.deleteShader(V),l.deleteShader(H),X=new kc(l,w),U=kA(l,w)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,OA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=H,this}let e1=0;class n1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new i1(t),n.set(t,a)),a}}class i1{constructor(t){this.id=e1++,this.code=t,this.usedTimes=0}}function a1(r,t,n,a,l,c,f){const h=new Hd,p=new n1,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(U){return m.add(U),U===0?"uv":`uv${U}`}function y(U,R,F,ut,rt){const xt=ut.fog,ft=rt.geometry,O=U.isMeshStandardMaterial?ut.environment:null,q=(U.isMeshStandardMaterial?n:t).get(U.envMap||O),Z=q&&q.mapping===Yc?q.image.height:null,bt=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,$=N!==void 0?N.length:0;let Et=0;ft.morphAttributes.position!==void 0&&(Et=1),ft.morphAttributes.normal!==void 0&&(Et=2),ft.morphAttributes.color!==void 0&&(Et=3);let At,J,gt,Tt;if(bt){const Te=Ri[bt];At=Te.vertexShader,J=Te.fragmentShader}else At=U.vertexShader,J=U.fragmentShader,p.update(U),gt=p.getVertexShaderID(U),Tt=p.getFragmentShaderID(U);const Dt=r.getRenderTarget(),zt=r.state.buffers.depth.getReversed(),se=rt.isInstancedMesh===!0,jt=rt.isBatchedMesh===!0,ve=!!U.map,Ee=!!U.matcap,le=!!q,B=!!U.aoMap,ke=!!U.lightMap,yt=!!U.bumpMap,vt=!!U.normalMap,pt=!!U.displacementMap,Nt=!!U.emissiveMap,dt=!!U.metalnessMap,D=!!U.roughnessMap,T=U.anisotropy>0,j=U.clearcoat>0,lt=U.dispersion>0,mt=U.iridescence>0,ot=U.sheen>0,Pt=U.transmission>0,Ct=T&&!!U.anisotropyMap,Lt=j&&!!U.clearcoatMap,de=j&&!!U.clearcoatNormalMap,wt=j&&!!U.clearcoatRoughnessMap,kt=mt&&!!U.iridescenceMap,Zt=mt&&!!U.iridescenceThicknessMap,Kt=ot&&!!U.sheenColorMap,Ft=ot&&!!U.sheenRoughnessMap,ue=!!U.specularMap,ie=!!U.specularColorMap,Le=!!U.specularIntensityMap,k=Pt&&!!U.transmissionMap,Ht=Pt&&!!U.thicknessMap,ct=!!U.gradientMap,St=!!U.alphaMap,Vt=U.alphaTest>0,Gt=!!U.alphaHash,ae=!!U.extensions;let He=ka;U.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(He=r.toneMapping);const en={shaderID:bt,shaderType:U.type,shaderName:U.name,vertexShader:At,fragmentShader:J,defines:U.defines,customVertexShaderID:gt,customFragmentShaderID:Tt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:jt,batchingColor:jt&&rt._colorsTexture!==null,instancing:se,instancingColor:se&&rt.instanceColor!==null,instancingMorph:se&&rt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Dt===null?r.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Rr,alphaToCoverage:!!U.alphaToCoverage,map:ve,matcap:Ee,envMap:le,envMapMode:le&&q.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:ke,bumpMap:yt,normalMap:vt,displacementMap:v&&pt,emissiveMap:Nt,normalMapObjectSpace:vt&&U.normalMapType===_S,normalMapTangentSpace:vt&&U.normalMapType===Qv,metalnessMap:dt,roughnessMap:D,anisotropy:T,anisotropyMap:Ct,clearcoat:j,clearcoatMap:Lt,clearcoatNormalMap:de,clearcoatRoughnessMap:wt,dispersion:lt,iridescence:mt,iridescenceMap:kt,iridescenceThicknessMap:Zt,sheen:ot,sheenColorMap:Kt,sheenRoughnessMap:Ft,specularMap:ue,specularColorMap:ie,specularIntensityMap:Le,transmission:Pt,transmissionMap:k,thicknessMap:Ht,gradientMap:ct,opaque:U.transparent===!1&&U.blending===Mr&&U.alphaToCoverage===!1,alphaMap:St,alphaTest:Vt,alphaHash:Gt,combine:U.combine,mapUv:ve&&w(U.map.channel),aoMapUv:B&&w(U.aoMap.channel),lightMapUv:ke&&w(U.lightMap.channel),bumpMapUv:yt&&w(U.bumpMap.channel),normalMapUv:vt&&w(U.normalMap.channel),displacementMapUv:pt&&w(U.displacementMap.channel),emissiveMapUv:Nt&&w(U.emissiveMap.channel),metalnessMapUv:dt&&w(U.metalnessMap.channel),roughnessMapUv:D&&w(U.roughnessMap.channel),anisotropyMapUv:Ct&&w(U.anisotropyMap.channel),clearcoatMapUv:Lt&&w(U.clearcoatMap.channel),clearcoatNormalMapUv:de&&w(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&w(U.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&w(U.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&w(U.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&w(U.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(U.sheenRoughnessMap.channel),specularMapUv:ue&&w(U.specularMap.channel),specularColorMapUv:ie&&w(U.specularColorMap.channel),specularIntensityMapUv:Le&&w(U.specularIntensityMap.channel),transmissionMapUv:k&&w(U.transmissionMap.channel),thicknessMapUv:Ht&&w(U.thicknessMap.channel),alphaMapUv:St&&w(U.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(vt||T),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(ve||St),fog:!!xt,useFog:U.fog===!0,fogExp2:!!xt&&xt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:zt,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:ve&&U.map.isVideoTexture===!0&&Re.getTransfer(U.map.colorSpace)===ze,decodeVideoTextureEmissive:Nt&&U.emissiveMap.isVideoTexture===!0&&Re.getTransfer(U.emissiveMap.colorSpace)===ze,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===na,flipSided:U.side===kn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ae&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&U.extensions.multiDraw===!0||jt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return en.vertexUv1s=m.has(1),en.vertexUv2s=m.has(2),en.vertexUv3s=m.has(3),m.clear(),en}function x(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const F in U.defines)R.push(F),R.push(U.defines[F]);return U.isRawShaderMaterial===!1&&(z(R,U),L(R,U),R.push(r.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function z(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function L(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const R=E[U.type];let F;if(R){const ut=Ri[R];F=jS.clone(ut.uniforms)}else F=U.uniforms;return F}function V(U,R){let F;for(let ut=0,rt=g.length;ut<rt;ut++){const xt=g[ut];if(xt.cacheKey===R){F=xt,++F.usedTimes;break}}return F===void 0&&(F=new t1(r,R,U,c),g.push(F)),F}function H(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function I(U){p.remove(U)}function X(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:V,releaseProgram:H,releaseShaderCache:I,programs:g,dispose:X}}function s1(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function l(f,h,p){r.get(f)[h]=p}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function r1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Uv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lv(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function f(_,v,S,E,w,y){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:w,group:y},r[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=w,x.group=y),t++,x}function h(_,v,S,E,w,y){const x=f(_,v,S,E,w,y);S.transmission>0?a.push(x):S.transparent===!0?l.push(x):n.push(x)}function p(_,v,S,E,w,y){const x=f(_,v,S,E,w,y);S.transmission>0?a.unshift(x):S.transparent===!0?l.unshift(x):n.unshift(x)}function m(_,v){n.length>1&&n.sort(_||r1),a.length>1&&a.sort(v||Uv),l.length>1&&l.sort(v||Uv)}function g(){for(let _=t,v=r.length;_<v;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function o1(){let r=new WeakMap;function t(a,l){const c=r.get(a);let f;return c===void 0?(f=new Lv,r.set(a,[f])):l>=c.length?(f=new Lv,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function l1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new Ce};break;case"SpotLight":n={position:new W,direction:new W,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":n={color:new Ce,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=n,n}}}function c1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let u1=0;function f1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function h1(r){const t=new l1,n=c1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new W);const l=new W,c=new We,f=new We;function h(m){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let S=0,E=0,w=0,y=0,x=0,z=0,L=0,C=0,V=0,H=0,I=0;m.sort(f1);for(let U=0,R=m.length;U<R;U++){const F=m[U],ut=F.color,rt=F.intensity,xt=F.distance,ft=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ut.r*rt,_+=ut.g*rt,v+=ut.b*rt;else if(F.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(F.sh.coefficients[O],rt);I++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const q=F.shadow,Z=n.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,a.directionalShadow[S]=Z,a.directionalShadowMap[S]=ft,a.directionalShadowMatrix[S]=F.shadow.matrix,z++}a.directional[S]=O,S++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(ut).multiplyScalar(rt),O.distance=xt,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,a.spot[w]=O;const q=F.shadow;if(F.map&&(a.spotLightMap[V]=F.map,V++,q.updateMatrices(F),F.castShadow&&H++),a.spotLightMatrix[w]=q.matrix,F.castShadow){const Z=n.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,a.spotShadow[w]=Z,a.spotShadowMap[w]=ft,C++}w++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(ut).multiplyScalar(rt),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),a.rectArea[y]=O,y++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const q=F.shadow,Z=n.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,a.pointShadow[E]=Z,a.pointShadowMap[E]=ft,a.pointShadowMatrix[E]=F.shadow.matrix,L++}a.point[E]=O,E++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(rt),O.groundColor.copy(F.groundColor).multiplyScalar(rt),a.hemi[x]=O,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==z||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==V||X.numLightProbes!==I)&&(a.directional.length=S,a.spot.length=w,a.rectArea.length=y,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=z,a.directionalShadowMap.length=z,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=z,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=C+V-H,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=H,a.numLightProbes=I,X.directionalLength=S,X.pointLength=E,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=z,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=V,X.numLightProbes=I,a.version=u1++)}function p(m,g){let _=0,v=0,S=0,E=0,w=0;const y=g.matrixWorldInverse;for(let x=0,z=m.length;x<z;x++){const L=m[x];if(L.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),_++}else if(L.isSpotLight){const C=a.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),f.identity(),c.copy(L.matrixWorld),c.premultiply(y),f.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const C=a.hemi[w];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:p,state:a}}function Nv(r){const t=new h1(r),n=[],a=[];function l(g){m.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function d1(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Nv(r),t.set(l,[h])):c>=f.length?(h=new Nv(r),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g1(r,t,n){let a=new Gd;const l=new Ut,c=new Ut,f=new Je,h=new BM({depthPacking:gS}),p=new IM,m={},g=n.maxTextureSize,_={[Xa]:kn,[kn]:Xa,[na]:na},v=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new qa;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new yn(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iv;let x=this.type;this.render=function(H,I,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const U=r.getRenderTarget(),R=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),ut=r.state;ut.setBlending(Va),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const rt=x!==ea&&this.type===ea,xt=x===ea&&this.type!==ea;for(let ft=0,O=H.length;ft<O;ft++){const q=H[ft],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const bt=Z.getFrameExtents();if(l.multiply(bt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/bt.x),l.x=c.x*bt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/bt.y),l.y=c.y*bt.y,Z.mapSize.y=c.y)),Z.map===null||rt===!0||xt===!0){const $=this.type!==ea?{minFilter:yi,magFilter:yi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ts(l.x,l.y,$),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const N=Z.getViewportCount();for(let $=0;$<N;$++){const Et=Z.getViewport($);f.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),ut.viewport(f),Z.updateMatrices(q,$),a=Z.getFrustum(),C(I,X,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===ea&&z(Z,X),Z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(U,R,F)};function z(H,I){const X=t.update(w);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ts(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(I,null,X,v,w,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(I,null,X,S,w,null)}function L(H,I,X,U){let R=null;const F=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(F!==void 0)R=F;else if(R=X.isPointLight===!0?p:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ut=R.uuid,rt=I.uuid;let xt=m[ut];xt===void 0&&(xt={},m[ut]=xt);let ft=xt[rt];ft===void 0&&(ft=R.clone(),xt[rt]=ft,I.addEventListener("dispose",V)),R=ft}if(R.visible=I.visible,R.wireframe=I.wireframe,U===ea?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ut=r.properties.get(R);ut.light=X}return R}function C(H,I,X,U,R){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===ea)&&(!H.frustumCulled||a.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const rt=t.update(H),xt=H.material;if(Array.isArray(xt)){const ft=rt.groups;for(let O=0,q=ft.length;O<q;O++){const Z=ft[O],bt=xt[Z.materialIndex];if(bt&&bt.visible){const N=L(H,bt,U,R);H.onBeforeShadow(r,H,I,X,rt,N,Z),r.renderBufferDirect(X,null,rt,N,H,Z),H.onAfterShadow(r,H,I,X,rt,N,Z)}}}else if(xt.visible){const ft=L(H,xt,U,R);H.onBeforeShadow(r,H,I,X,rt,ft,null),r.renderBufferDirect(X,null,rt,ft,H,null),H.onAfterShadow(r,H,I,X,rt,ft,null)}}const ut=H.children;for(let rt=0,xt=ut.length;rt<xt;rt++)C(ut[rt],I,X,U,R)}function V(H){H.target.removeEventListener("dispose",V);for(const X in m){const U=m[X],R=H.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const _1={[Hh]:Gh,[Vh]:Wh,[kh]:qh,[Tr]:Xh,[Gh]:Hh,[Wh]:Vh,[qh]:kh,[Xh]:Tr};function v1(r,t){function n(){let k=!1;const Ht=new Je;let ct=null;const St=new Je(0,0,0,0);return{setMask:function(Vt){ct!==Vt&&!k&&(r.colorMask(Vt,Vt,Vt,Vt),ct=Vt)},setLocked:function(Vt){k=Vt},setClear:function(Vt,Gt,ae,He,en){en===!0&&(Vt*=He,Gt*=He,ae*=He),Ht.set(Vt,Gt,ae,He),St.equals(Ht)===!1&&(r.clearColor(Vt,Gt,ae,He),St.copy(Ht))},reset:function(){k=!1,ct=null,St.set(-1,0,0,0)}}}function a(){let k=!1,Ht=!1,ct=null,St=null,Vt=null;return{setReversed:function(Gt){if(Ht!==Gt){const ae=t.get("EXT_clip_control");Gt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Ht=Gt;const He=Vt;Vt=null,this.setClear(He)}},getReversed:function(){return Ht},setTest:function(Gt){Gt?Dt(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(Gt){ct!==Gt&&!k&&(r.depthMask(Gt),ct=Gt)},setFunc:function(Gt){if(Ht&&(Gt=_1[Gt]),St!==Gt){switch(Gt){case Hh:r.depthFunc(r.NEVER);break;case Gh:r.depthFunc(r.ALWAYS);break;case Vh:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case kh:r.depthFunc(r.EQUAL);break;case Xh:r.depthFunc(r.GEQUAL);break;case Wh:r.depthFunc(r.GREATER);break;case qh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}St=Gt}},setLocked:function(Gt){k=Gt},setClear:function(Gt){Vt!==Gt&&(Ht&&(Gt=1-Gt),r.clearDepth(Gt),Vt=Gt)},reset:function(){k=!1,ct=null,St=null,Vt=null,Ht=!1}}}function l(){let k=!1,Ht=null,ct=null,St=null,Vt=null,Gt=null,ae=null,He=null,en=null;return{setTest:function(Te){k||(Te?Dt(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Te){Ht!==Te&&!k&&(r.stencilMask(Te),Ht=Te)},setFunc:function(Te,Xn,pn){(ct!==Te||St!==Xn||Vt!==pn)&&(r.stencilFunc(Te,Xn,pn),ct=Te,St=Xn,Vt=pn)},setOp:function(Te,Xn,pn){(Gt!==Te||ae!==Xn||He!==pn)&&(r.stencilOp(Te,Xn,pn),Gt=Te,ae=Xn,He=pn)},setLocked:function(Te){k=Te},setClear:function(Te){en!==Te&&(r.clearStencil(Te),en=Te)},reset:function(){k=!1,Ht=null,ct=null,St=null,Vt=null,Gt=null,ae=null,He=null,en=null}}}const c=new n,f=new a,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,w=!1,y=null,x=null,z=null,L=null,C=null,V=null,H=null,I=new Ce(0,0,0),X=0,U=!1,R=null,F=null,ut=null,rt=null,xt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=q>=2);let bt=null,N={};const $=r.getParameter(r.SCISSOR_BOX),Et=r.getParameter(r.VIEWPORT),At=new Je().fromArray($),J=new Je().fromArray(Et);function gt(k,Ht,ct,St){const Vt=new Uint8Array(4),Gt=r.createTexture();r.bindTexture(k,Gt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<ct;ae++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ht,0,r.RGBA,1,1,St,0,r.RGBA,r.UNSIGNED_BYTE,Vt):r.texImage2D(Ht+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Vt);return Gt}const Tt={};Tt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Dt(r.DEPTH_TEST),f.setFunc(Tr),yt(!1),vt(C_),Dt(r.CULL_FACE),B(Va);function Dt(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function zt(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function se(k,Ht){return _[k]!==Ht?(r.bindFramebuffer(k,Ht),_[k]=Ht,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ht),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ht),!0):!1}function jt(k,Ht){let ct=S,St=!1;if(k){ct=v.get(Ht),ct===void 0&&(ct=[],v.set(Ht,ct));const Vt=k.textures;if(ct.length!==Vt.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let Gt=0,ae=Vt.length;Gt<ae;Gt++)ct[Gt]=r.COLOR_ATTACHMENT0+Gt;ct.length=Vt.length,St=!0}}else ct[0]!==r.BACK&&(ct[0]=r.BACK,St=!0);St&&r.drawBuffers(ct)}function ve(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const Ee={[xs]:r.FUNC_ADD,[Vy]:r.FUNC_SUBTRACT,[ky]:r.FUNC_REVERSE_SUBTRACT};Ee[Xy]=r.MIN,Ee[Wy]=r.MAX;const le={[qy]:r.ZERO,[Yy]:r.ONE,[Zy]:r.SRC_COLOR,[Ih]:r.SRC_ALPHA,[tS]:r.SRC_ALPHA_SATURATE,[Jy]:r.DST_COLOR,[Ky]:r.DST_ALPHA,[jy]:r.ONE_MINUS_SRC_COLOR,[Fh]:r.ONE_MINUS_SRC_ALPHA,[$y]:r.ONE_MINUS_DST_COLOR,[Qy]:r.ONE_MINUS_DST_ALPHA,[eS]:r.CONSTANT_COLOR,[nS]:r.ONE_MINUS_CONSTANT_COLOR,[iS]:r.CONSTANT_ALPHA,[aS]:r.ONE_MINUS_CONSTANT_ALPHA};function B(k,Ht,ct,St,Vt,Gt,ae,He,en,Te){if(k===Va){w===!0&&(zt(r.BLEND),w=!1);return}if(w===!1&&(Dt(r.BLEND),w=!0),k!==Gy){if(k!==y||Te!==U){if((x!==xs||C!==xs)&&(r.blendEquation(r.FUNC_ADD),x=xs,C=xs),Te)switch(k){case Mr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFunc(r.ONE,r.ONE);break;case U_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case L_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Mr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case D_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case U_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case L_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,L=null,V=null,H=null,I.set(0,0,0),X=0,y=k,U=Te}return}Vt=Vt||Ht,Gt=Gt||ct,ae=ae||St,(Ht!==x||Vt!==C)&&(r.blendEquationSeparate(Ee[Ht],Ee[Vt]),x=Ht,C=Vt),(ct!==z||St!==L||Gt!==V||ae!==H)&&(r.blendFuncSeparate(le[ct],le[St],le[Gt],le[ae]),z=ct,L=St,V=Gt,H=ae),(He.equals(I)===!1||en!==X)&&(r.blendColor(He.r,He.g,He.b,en),I.copy(He),X=en),y=k,U=!1}function ke(k,Ht){k.side===na?zt(r.CULL_FACE):Dt(r.CULL_FACE);let ct=k.side===kn;Ht&&(ct=!ct),yt(ct),k.blending===Mr&&k.transparent===!1?B(Va):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const St=k.stencilWrite;h.setTest(St),St&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Dt(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function yt(k){R!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),R=k)}function vt(k){k!==Iy?(Dt(r.CULL_FACE),k!==F&&(k===C_?r.cullFace(r.BACK):k===Fy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),F=k}function pt(k){k!==ut&&(O&&r.lineWidth(k),ut=k)}function Nt(k,Ht,ct){k?(Dt(r.POLYGON_OFFSET_FILL),(rt!==Ht||xt!==ct)&&(r.polygonOffset(Ht,ct),rt=Ht,xt=ct)):zt(r.POLYGON_OFFSET_FILL)}function dt(k){k?Dt(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function D(k){k===void 0&&(k=r.TEXTURE0+ft-1),bt!==k&&(r.activeTexture(k),bt=k)}function T(k,Ht,ct){ct===void 0&&(bt===null?ct=r.TEXTURE0+ft-1:ct=bt);let St=N[ct];St===void 0&&(St={type:void 0,texture:void 0},N[ct]=St),(St.type!==k||St.texture!==Ht)&&(bt!==ct&&(r.activeTexture(ct),bt=ct),r.bindTexture(k,Ht||Tt[k]),St.type=k,St.texture=Ht)}function j(){const k=N[bt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function lt(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(k){At.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Ft(k){J.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function ue(k,Ht){let ct=m.get(Ht);ct===void 0&&(ct=new WeakMap,m.set(Ht,ct));let St=ct.get(k);St===void 0&&(St=r.getUniformBlockIndex(Ht,k.name),ct.set(k,St))}function ie(k,Ht){const St=m.get(Ht).get(k);p.get(Ht)!==St&&(r.uniformBlockBinding(Ht,St,k.__bindingPointIndex),p.set(Ht,St))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},bt=null,N={},_={},v=new WeakMap,S=[],E=null,w=!1,y=null,x=null,z=null,L=null,C=null,V=null,H=null,I=new Ce(0,0,0),X=0,U=!1,R=null,F=null,ut=null,rt=null,xt=null,At.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Dt,disable:zt,bindFramebuffer:se,drawBuffers:jt,useProgram:ve,setBlending:B,setMaterial:ke,setFlipSided:yt,setCullFace:vt,setLineWidth:pt,setPolygonOffset:Nt,setScissorTest:dt,activeTexture:D,bindTexture:T,unbindTexture:j,compressedTexImage2D:lt,compressedTexImage3D:mt,texImage2D:kt,texImage3D:Zt,updateUBOMapping:ue,uniformBlockBinding:ie,texStorage2D:de,texStorage3D:wt,texSubImage2D:ot,texSubImage3D:Pt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Lt,scissor:Kt,viewport:Ft,reset:Le}}function x1(r,t,n,a,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ut,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):qc("canvas")}function w(D,T,j){let lt=1;const mt=dt(D);if((mt.width>j||mt.height>j)&&(lt=j/Math.max(mt.width,mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ot=Math.floor(lt*mt.width),Pt=Math.floor(lt*mt.height);_===void 0&&(_=E(ot,Pt));const Ct=T?E(ot,Pt):_;return Ct.width=ot,Ct.height=Pt,Ct.getContext("2d").drawImage(D,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ot+"x"+Pt+")."),Ct}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,T,j,lt,mt=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ot=T;if(T===r.RED&&(j===r.FLOAT&&(ot=r.R32F),j===r.HALF_FLOAT&&(ot=r.R16F),j===r.UNSIGNED_BYTE&&(ot=r.R8)),T===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.R8UI),j===r.UNSIGNED_SHORT&&(ot=r.R16UI),j===r.UNSIGNED_INT&&(ot=r.R32UI),j===r.BYTE&&(ot=r.R8I),j===r.SHORT&&(ot=r.R16I),j===r.INT&&(ot=r.R32I)),T===r.RG&&(j===r.FLOAT&&(ot=r.RG32F),j===r.HALF_FLOAT&&(ot=r.RG16F),j===r.UNSIGNED_BYTE&&(ot=r.RG8)),T===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.RG8UI),j===r.UNSIGNED_SHORT&&(ot=r.RG16UI),j===r.UNSIGNED_INT&&(ot=r.RG32UI),j===r.BYTE&&(ot=r.RG8I),j===r.SHORT&&(ot=r.RG16I),j===r.INT&&(ot=r.RG32I)),T===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),j===r.UNSIGNED_INT&&(ot=r.RGB32UI),j===r.BYTE&&(ot=r.RGB8I),j===r.SHORT&&(ot=r.RGB16I),j===r.INT&&(ot=r.RGB32I)),T===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),j===r.UNSIGNED_INT&&(ot=r.RGBA32UI),j===r.BYTE&&(ot=r.RGBA8I),j===r.SHORT&&(ot=r.RGBA16I),j===r.INT&&(ot=r.RGBA32I)),T===r.RGB&&j===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),T===r.RGBA){const Pt=mt?Xc:Re.getTransfer(lt);j===r.FLOAT&&(ot=r.RGBA32F),j===r.HALF_FLOAT&&(ot=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ot=Pt===ze?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function C(D,T){let j;return D?T===null||T===Es||T===ko?j=r.DEPTH24_STENCIL8:T===ia?j=r.DEPTH32F_STENCIL8:T===Vo&&(j=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Es||T===ko?j=r.DEPTH_COMPONENT24:T===ia?j=r.DEPTH_COMPONENT32F:T===Vo&&(j=r.DEPTH_COMPONENT16),j}function V(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==yi&&D.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function H(D){const T=D.target;T.removeEventListener("dispose",H),X(T),T.isVideoTexture&&g.delete(T)}function I(D){const T=D.target;T.removeEventListener("dispose",I),R(T)}function X(D){const T=a.get(D);if(T.__webglInit===void 0)return;const j=D.source,lt=v.get(j);if(lt){const mt=lt[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&U(D),Object.keys(lt).length===0&&v.delete(j)}a.remove(D)}function U(D){const T=a.get(D);r.deleteTexture(T.__webglTexture);const j=D.source,lt=v.get(j);delete lt[T.__cacheKey],f.memory.textures--}function R(D){const T=a.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),a.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let mt=0;mt<T.__webglFramebuffer[lt].length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[lt][mt]);else r.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)r.deleteFramebuffer(T.__webglFramebuffer[lt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=D.textures;for(let lt=0,mt=j.length;lt<mt;lt++){const ot=a.get(j[lt]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),f.memory.textures--),a.remove(j[lt])}a.remove(D)}let F=0;function ut(){F=0}function rt(){const D=F;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),F+=1,D}function xt(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ft(D,T){const j=a.get(D);if(D.isVideoTexture&&pt(D),D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){const lt=D.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,D,T);return}}n.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+T)}function O(D,T){const j=a.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+T)}function q(D,T){const j=a.get(D);if(D.version>0&&j.__version!==D.version){J(j,D,T);return}n.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+T)}function Z(D,T){const j=a.get(D);if(D.version>0&&j.__version!==D.version){gt(j,D,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+T)}const bt={[jh]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[Kh]:r.MIRRORED_REPEAT},N={[yi]:r.NEAREST,[pS]:r.NEAREST_MIPMAP_NEAREST,[cc]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[ah]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},$={[vS]:r.NEVER,[TS]:r.ALWAYS,[xS]:r.LESS,[Jv]:r.LEQUAL,[yS]:r.EQUAL,[ES]:r.GEQUAL,[SS]:r.GREATER,[MS]:r.NOTEQUAL};function Et(D,T){if(T.type===ia&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===ah||T.magFilter===cc||T.magFilter===Ms||T.minFilter===vi||T.minFilter===ah||T.minFilter===cc||T.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,bt[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,bt[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,bt[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==cc&&T.minFilter!==Ms||T.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function At(D,T){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",H));const lt=T.source;let mt=v.get(lt);mt===void 0&&(mt={},v.set(lt,mt));const ot=xt(T);if(ot!==D.__cacheKey){mt[ot]===void 0&&(mt[ot]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),mt[ot].usedTimes++;const Pt=mt[D.__cacheKey];Pt!==void 0&&(mt[D.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(T)),D.__cacheKey=ot,D.__webglTexture=mt[ot].texture}return j}function J(D,T,j){let lt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=r.TEXTURE_3D);const mt=At(D,T),ot=T.source;n.bindTexture(lt,D.__webglTexture,r.TEXTURE0+j);const Pt=a.get(ot);if(ot.version!==Pt.__version||mt===!0){n.activeTexture(r.TEXTURE0+j);const Ct=Re.getPrimaries(Re.workingColorSpace),Lt=T.colorSpace===Ga?null:Re.getPrimaries(T.colorSpace),de=T.colorSpace===Ga||Ct===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let wt=w(T.image,!1,l.maxTextureSize);wt=Nt(T,wt);const kt=c.convert(T.format,T.colorSpace),Zt=c.convert(T.type);let Kt=L(T.internalFormat,kt,Zt,T.colorSpace,T.isVideoTexture);Et(lt,T);let Ft;const ue=T.mipmaps,ie=T.isVideoTexture!==!0,Le=Pt.__version===void 0||mt===!0,k=ot.dataReady,Ht=V(T,wt);if(T.isDepthTexture)Kt=C(T.format===Wo,T.type),Le&&(ie?n.texStorage2D(r.TEXTURE_2D,1,Kt,wt.width,wt.height):n.texImage2D(r.TEXTURE_2D,0,Kt,wt.width,wt.height,0,kt,Zt,null));else if(T.isDataTexture)if(ue.length>0){ie&&Le&&n.texStorage2D(r.TEXTURE_2D,Ht,Kt,ue[0].width,ue[0].height);for(let ct=0,St=ue.length;ct<St;ct++)Ft=ue[ct],ie?k&&n.texSubImage2D(r.TEXTURE_2D,ct,0,0,Ft.width,Ft.height,kt,Zt,Ft.data):n.texImage2D(r.TEXTURE_2D,ct,Kt,Ft.width,Ft.height,0,kt,Zt,Ft.data);T.generateMipmaps=!1}else ie?(Le&&n.texStorage2D(r.TEXTURE_2D,Ht,Kt,wt.width,wt.height),k&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,wt.width,wt.height,kt,Zt,wt.data)):n.texImage2D(r.TEXTURE_2D,0,Kt,wt.width,wt.height,0,kt,Zt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Kt,ue[0].width,ue[0].height,wt.depth);for(let ct=0,St=ue.length;ct<St;ct++)if(Ft=ue[ct],T.format!==xi)if(kt!==null)if(ie){if(k)if(T.layerUpdates.size>0){const Vt=cv(Ft.width,Ft.height,T.format,T.type);for(const Gt of T.layerUpdates){const ae=Ft.data.subarray(Gt*Vt/Ft.data.BYTES_PER_ELEMENT,(Gt+1)*Vt/Ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Gt,Ft.width,Ft.height,1,kt,ae)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Ft.width,Ft.height,wt.depth,kt,Ft.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,Kt,Ft.width,Ft.height,wt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Ft.width,Ft.height,wt.depth,kt,Zt,Ft.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ct,Kt,Ft.width,Ft.height,wt.depth,0,kt,Zt,Ft.data)}else{ie&&Le&&n.texStorage2D(r.TEXTURE_2D,Ht,Kt,ue[0].width,ue[0].height);for(let ct=0,St=ue.length;ct<St;ct++)Ft=ue[ct],T.format!==xi?kt!==null?ie?k&&n.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,Ft.width,Ft.height,kt,Ft.data):n.compressedTexImage2D(r.TEXTURE_2D,ct,Kt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&n.texSubImage2D(r.TEXTURE_2D,ct,0,0,Ft.width,Ft.height,kt,Zt,Ft.data):n.texImage2D(r.TEXTURE_2D,ct,Kt,Ft.width,Ft.height,0,kt,Zt,Ft.data)}else if(T.isDataArrayTexture)if(ie){if(Le&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Kt,wt.width,wt.height,wt.depth),k)if(T.layerUpdates.size>0){const ct=cv(wt.width,wt.height,T.format,T.type);for(const St of T.layerUpdates){const Vt=wt.data.subarray(St*ct/wt.data.BYTES_PER_ELEMENT,(St+1)*ct/wt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,wt.width,wt.height,1,kt,Zt,Vt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,kt,Zt,wt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,wt.width,wt.height,wt.depth,0,kt,Zt,wt.data);else if(T.isData3DTexture)ie?(Le&&n.texStorage3D(r.TEXTURE_3D,Ht,Kt,wt.width,wt.height,wt.depth),k&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,kt,Zt,wt.data)):n.texImage3D(r.TEXTURE_3D,0,Kt,wt.width,wt.height,wt.depth,0,kt,Zt,wt.data);else if(T.isFramebufferTexture){if(Le)if(ie)n.texStorage2D(r.TEXTURE_2D,Ht,Kt,wt.width,wt.height);else{let ct=wt.width,St=wt.height;for(let Vt=0;Vt<Ht;Vt++)n.texImage2D(r.TEXTURE_2D,Vt,Kt,ct,St,0,kt,Zt,null),ct>>=1,St>>=1}}else if(ue.length>0){if(ie&&Le){const ct=dt(ue[0]);n.texStorage2D(r.TEXTURE_2D,Ht,Kt,ct.width,ct.height)}for(let ct=0,St=ue.length;ct<St;ct++)Ft=ue[ct],ie?k&&n.texSubImage2D(r.TEXTURE_2D,ct,0,0,kt,Zt,Ft):n.texImage2D(r.TEXTURE_2D,ct,Kt,kt,Zt,Ft);T.generateMipmaps=!1}else if(ie){if(Le){const ct=dt(wt);n.texStorage2D(r.TEXTURE_2D,Ht,Kt,ct.width,ct.height)}k&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,kt,Zt,wt)}else n.texImage2D(r.TEXTURE_2D,0,Kt,kt,Zt,wt);y(T)&&x(lt),Pt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function gt(D,T,j){if(T.image.length!==6)return;const lt=At(D,T),mt=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+j);const ot=a.get(mt);if(mt.version!==ot.__version||lt===!0){n.activeTexture(r.TEXTURE0+j);const Pt=Re.getPrimaries(Re.workingColorSpace),Ct=T.colorSpace===Ga?null:Re.getPrimaries(T.colorSpace),Lt=T.colorSpace===Ga||Pt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,kt=[];for(let St=0;St<6;St++)!de&&!wt?kt[St]=w(T.image[St],!0,l.maxCubemapSize):kt[St]=wt?T.image[St].image:T.image[St],kt[St]=Nt(T,kt[St]);const Zt=kt[0],Kt=c.convert(T.format,T.colorSpace),Ft=c.convert(T.type),ue=L(T.internalFormat,Kt,Ft,T.colorSpace),ie=T.isVideoTexture!==!0,Le=ot.__version===void 0||lt===!0,k=mt.dataReady;let Ht=V(T,Zt);Et(r.TEXTURE_CUBE_MAP,T);let ct;if(de){ie&&Le&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ue,Zt.width,Zt.height);for(let St=0;St<6;St++){ct=kt[St].mipmaps;for(let Vt=0;Vt<ct.length;Vt++){const Gt=ct[Vt];T.format!==xi?Kt!==null?ie?k&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,Gt.width,Gt.height,Kt,Gt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ue,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?k&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,Gt.width,Gt.height,Kt,Ft,Gt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,ue,Gt.width,Gt.height,0,Kt,Ft,Gt.data)}}}else{if(ct=T.mipmaps,ie&&Le){ct.length>0&&Ht++;const St=dt(kt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ue,St.width,St.height)}for(let St=0;St<6;St++)if(wt){ie?k&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,kt[St].width,kt[St].height,Kt,Ft,kt[St].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ue,kt[St].width,kt[St].height,0,Kt,Ft,kt[St].data);for(let Vt=0;Vt<ct.length;Vt++){const ae=ct[Vt].image[St].image;ie?k&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,ae.width,ae.height,Kt,Ft,ae.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ue,ae.width,ae.height,0,Kt,Ft,ae.data)}}else{ie?k&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,Ft,kt[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ue,Kt,Ft,kt[St]);for(let Vt=0;Vt<ct.length;Vt++){const Gt=ct[Vt];ie?k&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,Kt,Ft,Gt.image[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,ue,Kt,Ft,Gt.image[St])}}}y(T)&&x(r.TEXTURE_CUBE_MAP),ot.__version=mt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Tt(D,T,j,lt,mt,ot){const Pt=c.convert(j.format,j.colorSpace),Ct=c.convert(j.type),Lt=L(j.internalFormat,Pt,Ct,j.colorSpace),de=a.get(T),wt=a.get(j);if(wt.__renderTarget=T,!de.__hasExternalTextures){const kt=Math.max(1,T.width>>ot),Zt=Math.max(1,T.height>>ot);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?n.texImage3D(mt,ot,Lt,kt,Zt,T.depth,0,Pt,Ct,null):n.texImage2D(mt,ot,Lt,kt,Zt,0,Pt,Ct,null)}n.bindFramebuffer(r.FRAMEBUFFER,D),vt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,mt,wt.__webglTexture,0,yt(T)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,mt,wt.__webglTexture,ot),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(D,T,j){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const lt=T.depthTexture,mt=lt&&lt.isDepthTexture?lt.type:null,ot=C(T.stencilBuffer,mt),Pt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=yt(T);vt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,ot,T.width,T.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,ot,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ot,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,D)}else{const lt=T.textures;for(let mt=0;mt<lt.length;mt++){const ot=lt[mt],Pt=c.convert(ot.format,ot.colorSpace),Ct=c.convert(ot.type),Lt=L(ot.internalFormat,Pt,Ct,ot.colorSpace),de=yt(T);j&&vt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Lt,T.width,T.height):vt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,Lt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Lt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=a.get(T.depthTexture);lt.__renderTarget=T,(!lt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const mt=lt.__webglTexture,ot=yt(T);if(T.depthTexture.format===Xo)vt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(T.depthTexture.format===Wo)vt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function se(D){const T=a.get(D),j=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const lt=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",mt)};lt.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=lt}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");zt(T.__webglFramebuffer,D)}else if(j){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=r.createRenderbuffer(),Dt(T.__webglDepthbuffer[lt],D,!1);else{const mt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer[lt];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ot)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Dt(T.__webglDepthbuffer,D,!1);else{const lt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,mt)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(D,T,j){const lt=a.get(D);T!==void 0&&Tt(lt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&se(D)}function ve(D){const T=D.texture,j=a.get(D),lt=a.get(T);D.addEventListener("dispose",I);const mt=D.textures,ot=D.isWebGLCubeRenderTarget===!0,Pt=mt.length>1;if(Pt||(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=T.version,f.memory.textures++),ot){j.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ct]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)j.__webglFramebuffer[Ct][Lt]=r.createFramebuffer()}else j.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)j.__webglFramebuffer[Ct]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let Ct=0,Lt=mt.length;Ct<Lt;Ct++){const de=a.get(mt[Ct]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&vt(D)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ct=0;Ct<mt.length;Ct++){const Lt=mt[Ct];j.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[Ct]);const de=c.convert(Lt.format,Lt.colorSpace),wt=c.convert(Lt.type),kt=L(Lt.internalFormat,de,wt,Lt.colorSpace,D.isXRRenderTarget===!0),Zt=yt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,kt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,j.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(j.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){n.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),Et(r.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)Tt(j.__webglFramebuffer[Ct][Lt],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Lt);else Tt(j.__webglFramebuffer[Ct],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let Ct=0,Lt=mt.length;Ct<Lt;Ct++){const de=mt[Ct],wt=a.get(de);n.bindTexture(r.TEXTURE_2D,wt.__webglTexture),Et(r.TEXTURE_2D,de),Tt(j.__webglFramebuffer,D,de,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,0),y(de)&&x(r.TEXTURE_2D)}n.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ct,lt.__webglTexture),Et(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)Tt(j.__webglFramebuffer[Lt],D,T,r.COLOR_ATTACHMENT0,Ct,Lt);else Tt(j.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Ct,0);y(T)&&x(Ct),n.unbindTexture()}D.depthBuffer&&se(D)}function Ee(D){const T=D.textures;for(let j=0,lt=T.length;j<lt;j++){const mt=T[j];if(y(mt)){const ot=z(D),Pt=a.get(mt).__webglTexture;n.bindTexture(ot,Pt),x(ot),n.unbindTexture()}}}const le=[],B=[];function ke(D){if(D.samples>0){if(vt(D)===!1){const T=D.textures,j=D.width,lt=D.height;let mt=r.COLOR_BUFFER_BIT;const ot=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=a.get(D),Ct=T.length>1;if(Ct)for(let Lt=0;Lt<T.length;Lt++)n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Lt]);const de=a.get(T[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,de,0)}r.blitFramebuffer(0,0,j,lt,0,0,j,lt,mt,r.NEAREST),p===!0&&(le.length=0,B.length=0,le.push(r.COLOR_ATTACHMENT0+Lt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(ot),B.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Lt=0;Lt<T.length;Lt++){n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Lt]);const de=a.get(T[Lt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,de,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function yt(D){return Math.min(l.maxSamples,D.samples)}function vt(D){const T=a.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pt(D){const T=f.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Nt(D,T){const j=D.colorSpace,lt=D.format,mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Rr&&j!==Ga&&(Re.getTransfer(j)===ze?(lt!==xi||mt!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function dt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=rt,this.resetTextureUnits=ut,this.setTexture2D=ft,this.setTexture2DArray=O,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=jt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=vt}function y1(r,t){function n(a,l=Ga){let c;const f=Re.getTransfer(l);if(a===oa)return r.UNSIGNED_BYTE;if(a===Ld)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Nd)return r.UNSIGNED_SHORT_5_5_5_1;if(a===kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Gv)return r.BYTE;if(a===Vv)return r.SHORT;if(a===Vo)return r.UNSIGNED_SHORT;if(a===Ud)return r.INT;if(a===Es)return r.UNSIGNED_INT;if(a===ia)return r.FLOAT;if(a===Ko)return r.HALF_FLOAT;if(a===Xv)return r.ALPHA;if(a===Wv)return r.RGB;if(a===xi)return r.RGBA;if(a===qv)return r.LUMINANCE;if(a===Yv)return r.LUMINANCE_ALPHA;if(a===Xo)return r.DEPTH_COMPONENT;if(a===Wo)return r.DEPTH_STENCIL;if(a===Zv)return r.RED;if(a===Od)return r.RED_INTEGER;if(a===jv)return r.RG;if(a===Pd)return r.RG_INTEGER;if(a===zd)return r.RGBA_INTEGER;if(a===zc||a===Bc||a===Ic||a===Fc)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qh||a===Jh||a===$h||a===td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ed||a===nd||a===id)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ed||a===nd)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===id)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ad||a===sd||a===rd||a===od||a===ld||a===cd||a===ud||a===fd||a===hd||a===dd||a===pd||a===md||a===gd||a===_d)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===ad)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===rd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===od)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ld)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===cd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ud)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===dd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===pd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===md)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===gd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_d)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Hc||a===vd||a===xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Hc)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Kv||a===yd||a===Sd||a===Md)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Hc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ko?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class E1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const l=new Pn,c=t.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Wa({vertexShader:S1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yn(new Nr(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Rs{constructor(t,n){super();const a=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,v=null,S=null,E=null;const w=new E1,y=n.getContextAttributes();let x=null,z=null;const L=[],C=[],V=new Ut;let H=null;const I=new ui;I.viewport=new Je;const X=new ui;X.viewport=new Je;const U=[I,X],R=new kM;let F=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=L[J];return gt===void 0&&(gt=new bh,L[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=L[J];return gt===void 0&&(gt=new bh,L[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=L[J];return gt===void 0&&(gt=new bh,L[J]=gt),gt.getHandSpace()};function rt(J){const gt=C.indexOf(J.inputSource);if(gt===-1)return;const Tt=L[gt];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,m||f),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function xt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",xt),l.removeEventListener("inputsourceschange",ft);for(let J=0;J<L.length;J++){const gt=C[J];gt!==null&&(C[J]=null,L[J].disconnect(gt))}F=null,ut=null,w.reset(),t.setRenderTarget(x),S=null,v=null,_=null,l=null,z=null,At.stop(),a.isPresenting=!1,t.setPixelRatio(H),t.setSize(V.width,V.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",xt),l.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await n.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Dt=null,zt=null;y.depth&&(zt=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=y.stencil?Wo:Xo,Dt=y.stencil?ko:Es);const se={colorFormat:n.RGBA8,depthFormat:zt,scaleFactor:c};_=new XRWebGLBinding(l,n),v=_.createProjectionLayer(se),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),z=new Ts(v.textureWidth,v.textureHeight,{format:xi,type:oa,depthTexture:new l0(v.textureWidth,v.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,Tt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),z=new Ts(S.framebufferWidth,S.framebufferHeight,{format:xi,type:oa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),At.setContext(l),At.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ft(J){for(let gt=0;gt<J.removed.length;gt++){const Tt=J.removed[gt],Dt=C.indexOf(Tt);Dt>=0&&(C[Dt]=null,L[Dt].disconnect(Tt))}for(let gt=0;gt<J.added.length;gt++){const Tt=J.added[gt];let Dt=C.indexOf(Tt);if(Dt===-1){for(let se=0;se<L.length;se++)if(se>=C.length){C.push(Tt),Dt=se;break}else if(C[se]===null){C[se]=Tt,Dt=se;break}if(Dt===-1)break}const zt=L[Dt];zt&&zt.connect(Tt)}}const O=new W,q=new W;function Z(J,gt,Tt){O.setFromMatrixPosition(gt.matrixWorld),q.setFromMatrixPosition(Tt.matrixWorld);const Dt=O.distanceTo(q),zt=gt.projectionMatrix.elements,se=Tt.projectionMatrix.elements,jt=zt[14]/(zt[10]-1),ve=zt[14]/(zt[10]+1),Ee=(zt[9]+1)/zt[5],le=(zt[9]-1)/zt[5],B=(zt[8]-1)/zt[0],ke=(se[8]+1)/se[0],yt=jt*B,vt=jt*ke,pt=Dt/(-B+ke),Nt=pt*-B;if(gt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),zt[10]===-1)J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const dt=jt+pt,D=ve+pt,T=yt-Nt,j=vt+(Dt-Nt),lt=Ee*ve/D*dt,mt=le*ve/D*dt;J.projectionMatrix.makePerspective(T,j,lt,mt,dt,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function bt(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let gt=J.near,Tt=J.far;w.texture!==null&&(w.depthNear>0&&(gt=w.depthNear),w.depthFar>0&&(Tt=w.depthFar)),R.near=X.near=I.near=gt,R.far=X.far=I.far=Tt,(F!==R.near||ut!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,ut=R.far),I.layers.mask=J.layers.mask|2,X.layers.mask=J.layers.mask|4,R.layers.mask=I.layers.mask|X.layers.mask;const Dt=J.parent,zt=R.cameras;bt(R,Dt);for(let se=0;se<zt.length;se++)bt(zt[se],Dt);zt.length===2?Z(R,I,X):R.projectionMatrix.copy(I.projectionMatrix),N(J,R,Dt)};function N(J,gt,Tt){Tt===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ed*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let $=null;function Et(J,gt){if(g=gt.getViewerPose(m||f),E=gt,g!==null){const Tt=g.views;S!==null&&(t.setRenderTargetFramebuffer(z,S.framebuffer),t.setRenderTarget(z));let Dt=!1;Tt.length!==R.cameras.length&&(R.cameras.length=0,Dt=!0);for(let jt=0;jt<Tt.length;jt++){const ve=Tt[jt];let Ee=null;if(S!==null)Ee=S.getViewport(ve);else{const B=_.getViewSubImage(v,ve);Ee=B.viewport,jt===0&&(t.setRenderTargetTextures(z,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(z))}let le=U[jt];le===void 0&&(le=new ui,le.layers.enable(jt),le.viewport=new Je,U[jt]=le),le.matrix.fromArray(ve.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ve.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),jt===0&&(R.matrix.copy(le.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Dt===!0&&R.cameras.push(le)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const jt=_.getDepthInformation(Tt[0]);jt&&jt.isValid&&jt.texture&&w.init(t,jt,l.renderState)}}for(let Tt=0;Tt<L.length;Tt++){const Dt=C[Tt],zt=L[Tt];Dt!==null&&zt!==void 0&&zt.update(Dt,gt,m||f)}$&&$(J,gt),gt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:gt}),E=null}const At=new y0;At.setAnimationLoop(Et),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}}const _s=new Ci,b1=new We;function A1(r,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,a0(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,z,L,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),w(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,z,L):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===kn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===kn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const z=t.get(x),L=z.envMap,C=z.envMapRotation;L&&(y.envMap.value=L,_s.copy(C),_s.x*=-1,_s.y*=-1,_s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(_s)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,z,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*z,y.scale.value=L*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,z){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const z=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function R1(r,t,n,a){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,L){const C=L.program;a.uniformBlockBinding(z,C)}function m(z,L){let C=l[z.id];C===void 0&&(E(z),C=g(z),l[z.id]=C,z.addEventListener("dispose",y));const V=L.program;a.updateUBOMapping(z,V);const H=t.render.frame;c[z.id]!==H&&(v(z),c[z.id]=H)}function g(z){const L=_();z.__bindingPointIndex=L;const C=r.createBuffer(),V=z.__size,H=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,V,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function _(){for(let z=0;z<h;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const L=l[z.id],C=z.uniforms,V=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let H=0,I=C.length;H<I;H++){const X=Array.isArray(C[H])?C[H]:[C[H]];for(let U=0,R=X.length;U<R;U++){const F=X[U];if(S(F,H,U,V)===!0){const ut=F.__offset,rt=Array.isArray(F.value)?F.value:[F.value];let xt=0;for(let ft=0;ft<rt.length;ft++){const O=rt[ft],q=w(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,ut+xt,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,xt),xt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ut,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(z,L,C,V){const H=z.value,I=L+"_"+C;if(V[I]===void 0)return typeof H=="number"||typeof H=="boolean"?V[I]=H:V[I]=H.clone(),!0;{const X=V[I];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return V[I]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function E(z){const L=z.uniforms;let C=0;const V=16;for(let I=0,X=L.length;I<X;I++){const U=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,F=U.length;R<F;R++){const ut=U[R],rt=Array.isArray(ut.value)?ut.value:[ut.value];for(let xt=0,ft=rt.length;xt<ft;xt++){const O=rt[xt],q=w(O),Z=C%V,bt=Z%q.boundary,N=Z+bt;C+=bt,N!==0&&V-N<q.storage&&(C+=V-N),ut.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=C,C+=q.storage}}}const H=C%V;return H>0&&(C+=V-H),z.__size=C,z.__cache={},this}function w(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function y(z){const L=z.target;L.removeEventListener("dispose",y);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const z in l)r.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:p,update:m,dispose:x}}class w1{constructor(t={}){const{canvas:n=RS(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const z=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let V=!1;this._outputColorSpace=ci;let H=0,I=0,X=null,U=-1,R=null;const F=new Je,ut=new Je;let rt=null;const xt=new Ce(0);let ft=0,O=n.width,q=n.height,Z=1,bt=null,N=null;const $=new Je(0,0,O,q),Et=new Je(0,0,O,q);let At=!1;const J=new Gd;let gt=!1,Tt=!1;const Dt=new We,zt=new We,se=new W,jt=new Je,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function le(){return X===null?Z:1}let B=a;function ke(A,K){return n.getContext(A,K)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dd}`),n.addEventListener("webglcontextlost",St,!1),n.addEventListener("webglcontextrestored",Vt,!1),n.addEventListener("webglcontextcreationerror",Gt,!1),B===null){const K="webgl2";if(B=ke(K,A),B===null)throw ke(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let yt,vt,pt,Nt,dt,D,T,j,lt,mt,ot,Pt,Ct,Lt,de,wt,kt,Zt,Kt,Ft,ue,ie,Le,k;function Ht(){yt=new Ib(B),yt.init(),ie=new y1(B,yt),vt=new Ub(B,yt,t,ie),pt=new v1(B,yt),vt.reverseDepthBuffer&&v&&pt.buffers.depth.setReversed(!0),Nt=new Gb(B),dt=new s1,D=new x1(B,yt,pt,dt,vt,ie,Nt),T=new Nb(C),j=new Bb(C),lt=new YM(B),Le=new Cb(B,lt),mt=new Fb(B,lt,Nt,Le),ot=new kb(B,mt,lt,Nt),Kt=new Vb(B,vt,D),wt=new Lb(dt),Pt=new a1(C,T,j,yt,vt,Le,wt),Ct=new A1(C,dt),Lt=new o1,de=new d1(yt),Zt=new wb(C,T,j,pt,ot,S,p),kt=new g1(C,ot,vt),k=new R1(B,Nt,vt,pt),Ft=new Db(B,yt,Nt),ue=new Hb(B,yt,Nt),Nt.programs=Pt.programs,C.capabilities=vt,C.extensions=yt,C.properties=dt,C.renderLists=Lt,C.shadowMap=kt,C.state=pt,C.info=Nt}Ht();const ct=new T1(C,B);this.xr=ct,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(O,q,!1))},this.getSize=function(A){return A.set(O,q)},this.setSize=function(A,K,at=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,q=K,n.width=Math.floor(A*Z),n.height=Math.floor(K*Z),at===!0&&(n.style.width=A+"px",n.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(O*Z,q*Z).floor()},this.setDrawingBufferSize=function(A,K,at){O=A,q=K,Z=at,n.width=Math.floor(A*at),n.height=Math.floor(K*at),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,K,at,st){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,K,at,st),pt.viewport(F.copy($).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,K,at,st){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,K,at,st),pt.scissor(ut.copy(Et).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(A){pt.setScissorTest(At=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,at=!0){let st=0;if(A){let Q=!1;if(X!==null){const Rt=X.texture.format;Q=Rt===zd||Rt===Pd||Rt===Od}if(Q){const Rt=X.texture.type,Ot=Rt===oa||Rt===Es||Rt===Vo||Rt===ko||Rt===Ld||Rt===Nd,Bt=Zt.getClearColor(),Xt=Zt.getClearAlpha(),ee=Bt.r,Qt=Bt.g,Yt=Bt.b;Ot?(E[0]=ee,E[1]=Qt,E[2]=Yt,E[3]=Xt,B.clearBufferuiv(B.COLOR,0,E)):(w[0]=ee,w[1]=Qt,w[2]=Yt,w[3]=Xt,B.clearBufferiv(B.COLOR,0,w))}else st|=B.COLOR_BUFFER_BIT}K&&(st|=B.DEPTH_BUFFER_BIT),at&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",St,!1),n.removeEventListener("webglcontextrestored",Vt,!1),n.removeEventListener("webglcontextcreationerror",Gt,!1),Zt.dispose(),Lt.dispose(),de.dispose(),dt.dispose(),T.dispose(),j.dispose(),ot.dispose(),Le.dispose(),k.dispose(),Pt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",on),ct.removeEventListener("sessionend",Sn),zn.stop()};function St(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=Nt.autoReset,K=kt.enabled,at=kt.autoUpdate,st=kt.needsUpdate,Q=kt.type;Ht(),Nt.autoReset=A,kt.enabled=K,kt.autoUpdate=at,kt.needsUpdate=st,kt.type=Q}function Gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const K=A.target;K.removeEventListener("dispose",ae),He(K)}function He(A){en(A),dt.remove(A)}function en(A){const K=dt.get(A).programs;K!==void 0&&(K.forEach(function(at){Pt.releaseProgram(at)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,at,st,Q,Rt){K===null&&(K=ve);const Ot=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=ja(A,K,at,st,Q);pt.setMaterial(st,Ot);let Xt=at.index,ee=1;if(st.wireframe===!0){if(Xt=mt.getWireframeAttribute(at),Xt===void 0)return;ee=2}const Qt=at.drawRange,Yt=at.attributes.position;let me=Qt.start*ee,be=(Qt.start+Qt.count)*ee;Rt!==null&&(me=Math.max(me,Rt.start*ee),be=Math.min(be,(Rt.start+Rt.count)*ee)),Xt!==null?(me=Math.max(me,0),be=Math.min(be,Xt.count)):Yt!=null&&(me=Math.max(me,0),be=Math.min(be,Yt.count));const qe=be-me;if(qe<0||qe===1/0)return;Le.setup(Q,st,Bt,at,Xt);let xe,ye=Ft;if(Xt!==null&&(xe=lt.get(Xt),ye=ue,ye.setIndex(xe)),Q.isMesh)st.wireframe===!0?(pt.setLineWidth(st.wireframeLinewidth*le()),ye.setMode(B.LINES)):ye.setMode(B.TRIANGLES);else if(Q.isLine){let Jt=st.linewidth;Jt===void 0&&(Jt=1),pt.setLineWidth(Jt*le()),Q.isLineSegments?ye.setMode(B.LINES):Q.isLineLoop?ye.setMode(B.LINE_LOOP):ye.setMode(B.LINE_STRIP)}else Q.isPoints?ye.setMode(B.POINTS):Q.isSprite&&ye.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Vc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))ye.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Jt=Q._multiDrawStarts,je=Q._multiDrawCounts,Me=Q._multiDrawCount,An=Xt?lt.get(Xt).bytesPerElement:1,fa=dt.get(st).currentProgram.getUniforms();for(let Ge=0;Ge<Me;Ge++)fa.setValue(B,"_gl_DrawID",Ge),ye.render(Jt[Ge]/An,je[Ge])}else if(Q.isInstancedMesh)ye.renderInstances(me,qe,Q.count);else if(at.isInstancedBufferGeometry){const Jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,je=Math.min(at.instanceCount,Jt);ye.renderInstances(me,qe,je)}else ye.render(me,qe)};function Te(A,K,at){A.transparent===!0&&A.side===na&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,ca(A,K,at),A.side=Xa,A.needsUpdate=!0,ca(A,K,at),A.side=na):ca(A,K,at)}this.compile=function(A,K,at=null){at===null&&(at=A),x=de.get(at),x.init(K),L.push(x),at.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),A!==at&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const st=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let Ot=0;Ot<Rt.length;Ot++){const Bt=Rt[Ot];Te(Bt,at,Q),st.add(Bt)}else Te(Rt,at,Q),st.add(Rt)}),x=L.pop(),st},this.compileAsync=function(A,K,at=null){const st=this.compile(A,K,at);return new Promise(Q=>{function Rt(){if(st.forEach(function(Ot){dt.get(Ot).currentProgram.isReady()&&st.delete(Ot)}),st.size===0){Q(A);return}setTimeout(Rt,10)}yt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Xn=null;function pn(A){Xn&&Xn(A)}function on(){zn.stop()}function Sn(){zn.start()}const zn=new y0;zn.setAnimationLoop(pn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){Xn=A,ct.setAnimationLoop(A),A===null?zn.stop():zn.start()},ct.addEventListener("sessionstart",on),ct.addEventListener("sessionend",Sn),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,K,X),x=de.get(A,L.length),x.init(K),L.push(x),zt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),J.setFromProjectionMatrix(zt),Tt=this.localClippingEnabled,gt=wt.init(this.clippingPlanes,Tt),y=Lt.get(A,z.length),y.init(),z.push(y),ct.enabled===!0&&ct.isPresenting===!0){const Rt=C.xr.getDepthSensingMesh();Rt!==null&&Ya(Rt,K,-1/0,C.sortObjects)}Ya(A,K,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(bt,N),Ee=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ee&&Zt.addToRenderList(y,A),this.info.render.frame++,gt===!0&&wt.beginShadows();const at=x.state.shadowsArray;kt.render(at,A,K),gt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,Q=y.transmissive;if(x.setupLights(),K.isArrayCamera){const Rt=K.cameras;if(Q.length>0)for(let Ot=0,Bt=Rt.length;Ot<Bt;Ot++){const Xt=Rt[Ot];tl(st,Q,A,Xt)}Ee&&Zt.render(A);for(let Ot=0,Bt=Rt.length;Ot<Bt;Ot++){const Xt=Rt[Ot];$o(y,A,Xt,Xt.viewport)}}else Q.length>0&&tl(st,Q,A,K),Ee&&Zt.render(A),$o(y,A,K);X!==null&&I===0&&(D.updateMultisampleRenderTarget(X),D.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,K),Le.resetDefaultState(),U=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],gt===!0&&wt.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,z.pop(),z.length>0?y=z[z.length-1]:y=null};function Ya(A,K,at,st){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){st&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const Ot=ot.update(A),Bt=A.material;Bt.visible&&y.push(A,Ot,Bt,at,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Ot=ot.update(A),Bt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),jt.copy(Ot.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Bt)){const Xt=Ot.groups;for(let ee=0,Qt=Xt.length;ee<Qt;ee++){const Yt=Xt[ee],me=Bt[Yt.materialIndex];me&&me.visible&&y.push(A,Ot,me,at,jt.z,Yt)}}else Bt.visible&&y.push(A,Ot,Bt,at,jt.z,null)}}const Rt=A.children;for(let Ot=0,Bt=Rt.length;Ot<Bt;Ot++)Ya(Rt[Ot],K,at,st)}function $o(A,K,at,st){const Q=A.opaque,Rt=A.transmissive,Ot=A.transparent;x.setupLightsView(at),gt===!0&&wt.setGlobalState(C.clippingPlanes,at),st&&pt.viewport(F.copy(st)),Q.length>0&&Za(Q,K,at),Rt.length>0&&Za(Rt,K,at),Ot.length>0&&Za(Ot,K,at),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function tl(A,K,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new Ts(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Ko:oa,minFilter:Ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Rt=x.state.transmissionRenderTarget[st.id],Ot=st.viewport||F;Rt.setSize(Ot.z*C.transmissionResolutionScale,Ot.w*C.transmissionResolutionScale);const Bt=C.getRenderTarget();C.setRenderTarget(Rt),C.getClearColor(xt),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),Ee&&Zt.render(at);const Xt=C.toneMapping;C.toneMapping=ka;const ee=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),gt===!0&&wt.setGlobalState(C.clippingPlanes,st),Za(A,at,st),D.updateMultisampleRenderTarget(Rt),D.updateRenderTargetMipmap(Rt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Yt=0,me=K.length;Yt<me;Yt++){const be=K[Yt],qe=be.object,xe=be.geometry,ye=be.material,Jt=be.group;if(ye.side===na&&qe.layers.test(st.layers)){const je=ye.side;ye.side=kn,ye.needsUpdate=!0,la(qe,at,st,xe,ye,Jt),ye.side=je,ye.needsUpdate=!0,Qt=!0}}Qt===!0&&(D.updateMultisampleRenderTarget(Rt),D.updateRenderTargetMipmap(Rt))}C.setRenderTarget(Bt),C.setClearColor(xt,ft),ee!==void 0&&(st.viewport=ee),C.toneMapping=Xt}function Za(A,K,at){const st=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Rt=A.length;Q<Rt;Q++){const Ot=A[Q],Bt=Ot.object,Xt=Ot.geometry,ee=Ot.group;let Qt=Ot.material;Qt.allowOverride===!0&&st!==null&&(Qt=st),Bt.layers.test(at.layers)&&la(Bt,K,at,Xt,Qt,ee)}}function la(A,K,at,st,Q,Rt){A.onBeforeRender(C,K,at,st,Q,Rt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(C,K,at,st,A,Rt),Q.transparent===!0&&Q.side===na&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,C.renderBufferDirect(at,K,st,Q,A,Rt),Q.side=Xa,Q.needsUpdate=!0,C.renderBufferDirect(at,K,st,Q,A,Rt),Q.side=na):C.renderBufferDirect(at,K,st,Q,A,Rt),A.onAfterRender(C,K,at,st,Q,Rt)}function ca(A,K,at){K.isScene!==!0&&(K=ve);const st=dt.get(A),Q=x.state.lights,Rt=x.state.shadowsArray,Ot=Q.state.version,Bt=Pt.getParameters(A,Q.state,Rt,K,at),Xt=Pt.getProgramCacheKey(Bt);let ee=st.programs;st.environment=A.isMeshStandardMaterial?K.environment:null,st.fog=K.fog,st.envMap=(A.isMeshStandardMaterial?j:T).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,ee===void 0&&(A.addEventListener("dispose",ae),ee=new Map,st.programs=ee);let Qt=ee.get(Xt);if(Qt!==void 0){if(st.currentProgram===Qt&&st.lightsStateVersion===Ot)return Li(A,Bt),Qt}else Bt.uniforms=Pt.getUniforms(A),A.onBeforeCompile(Bt,C),Qt=Pt.acquireProgram(Bt,Xt),ee.set(Xt,Qt),st.uniforms=Bt.uniforms;const Yt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=wt.uniform),Li(A,Bt),st.needsLights=nn(A),st.lightsStateVersion=Ot,st.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.directionalShadowMap.value=Q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotShadowMap.value=Q.state.spotShadowMap,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMap.value=Q.state.pointShadowMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),st.currentProgram=Qt,st.uniformsList=null,Qt}function Ui(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Li(A,K){const at=dt.get(A);at.outputColorSpace=K.outputColorSpace,at.batching=K.batching,at.batchingColor=K.batchingColor,at.instancing=K.instancing,at.instancingColor=K.instancingColor,at.instancingMorph=K.instancingMorph,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function ja(A,K,at,st,Q){K.isScene!==!0&&(K=ve),D.resetTextureUnits();const Rt=K.fog,Ot=st.isMeshStandardMaterial?K.environment:null,Bt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rr,Xt=(st.isMeshStandardMaterial?j:T).get(st.envMap||Ot),ee=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Qt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!at.morphAttributes.position,me=!!at.morphAttributes.normal,be=!!at.morphAttributes.color;let qe=ka;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qe=C.toneMapping);const xe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ye=xe!==void 0?xe.length:0,Jt=dt.get(st),je=x.state.lights;if(gt===!0&&(Tt===!0||A!==R)){const mn=A===R&&st.id===U;wt.setState(st,A,mn)}let Me=!1;st.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==je.state.version||Jt.outputColorSpace!==Bt||Q.isBatchedMesh&&Jt.batching===!1||!Q.isBatchedMesh&&Jt.batching===!0||Q.isBatchedMesh&&Jt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Jt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Jt.instancing===!1||!Q.isInstancedMesh&&Jt.instancing===!0||Q.isSkinnedMesh&&Jt.skinning===!1||!Q.isSkinnedMesh&&Jt.skinning===!0||Q.isInstancedMesh&&Jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Jt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Jt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Jt.instancingMorph===!1&&Q.morphTexture!==null||Jt.envMap!==Xt||st.fog===!0&&Jt.fog!==Rt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==wt.numPlanes||Jt.numIntersection!==wt.numIntersection)||Jt.vertexAlphas!==ee||Jt.vertexTangents!==Qt||Jt.morphTargets!==Yt||Jt.morphNormals!==me||Jt.morphColors!==be||Jt.toneMapping!==qe||Jt.morphTargetsCount!==ye)&&(Me=!0):(Me=!0,Jt.__version=st.version);let An=Jt.currentProgram;Me===!0&&(An=ca(st,K,Q));let fa=!1,Ge=!1,Oi=!1;const Ie=An.getUniforms(),Rn=Jt.uniforms;if(pt.useProgram(An.program)&&(fa=!0,Ge=!0,Oi=!0),st.id!==U&&(U=st.id,Ge=!0),fa||R!==A){pt.buffers.depth.getReversed()?(Dt.copy(A.projectionMatrix),CS(Dt),DS(Dt),Ie.setValue(B,"projectionMatrix",Dt)):Ie.setValue(B,"projectionMatrix",A.projectionMatrix),Ie.setValue(B,"viewMatrix",A.matrixWorldInverse);const Mn=Ie.map.cameraPosition;Mn!==void 0&&Mn.setValue(B,se.setFromMatrixPosition(A.matrixWorld)),vt.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ge=!0,Oi=!0)}if(Q.isSkinnedMesh){Ie.setOptional(B,Q,"bindMatrix"),Ie.setOptional(B,Q,"bindMatrixInverse");const mn=Q.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ie.setValue(B,"boneTexture",mn.boneTexture,D))}Q.isBatchedMesh&&(Ie.setOptional(B,Q,"batchingTexture"),Ie.setValue(B,"batchingTexture",Q._matricesTexture,D),Ie.setOptional(B,Q,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",Q._indirectTexture,D),Ie.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",Q._colorsTexture,D));const ln=at.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Kt.update(Q,at,An),(Ge||Jt.receiveShadow!==Q.receiveShadow)&&(Jt.receiveShadow=Q.receiveShadow,Ie.setValue(B,"receiveShadow",Q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Rn.envMap.value=Xt,Rn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&K.environment!==null&&(Rn.envMapIntensity.value=K.environmentIntensity),Ge&&(Ie.setValue(B,"toneMappingExposure",C.toneMappingExposure),Jt.needsLights&&ua(Rn,Oi),Rt&&st.fog===!0&&Ct.refreshFogUniforms(Rn,Rt),Ct.refreshMaterialUniforms(Rn,st,Z,q,x.state.transmissionRenderTarget[A.id]),kc.upload(B,Ui(Jt),Rn,D)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(kc.upload(B,Ui(Jt),Rn,D),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ie.setValue(B,"center",Q.center),Ie.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(B,"normalMatrix",Q.normalMatrix),Ie.setValue(B,"modelMatrix",Q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const mn=st.uniformsGroups;for(let Mn=0,Si=mn.length;Mn<Si;Mn++){const Pi=mn[Mn];k.update(Pi,An),k.bind(Pi,An)}}return An}function ua(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function nn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,K,at){const st=dt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),dt.get(A.texture).__webglTexture=K,dt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const at=dt.get(A);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0};const el=B.createFramebuffer();this.setRenderTarget=function(A,K=0,at=0){X=A,H=K,I=at;let st=!0,Q=null,Rt=!1,Ot=!1;if(A){const Xt=dt.get(A);if(Xt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(B.FRAMEBUFFER,null),st=!1;else if(Xt.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Xt.__hasExternalTextures)D.rebindTextures(A,dt.get(A.texture).__webglTexture,dt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Yt=A.depthTexture;if(Xt.__boundDepthTexture!==Yt){if(Yt!==null&&dt.has(Yt)&&(A.width!==Yt.image.width||A.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const ee=A.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Ot=!0);const Qt=dt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[K])?Q=Qt[K][at]:Q=Qt[K],Rt=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Q=dt.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[at]:Q=Qt,F.copy(A.viewport),ut.copy(A.scissor),rt=A.scissorTest}else F.copy($).multiplyScalar(Z).floor(),ut.copy(Et).multiplyScalar(Z).floor(),rt=At;if(at!==0&&(Q=el),pt.bindFramebuffer(B.FRAMEBUFFER,Q)&&st&&pt.drawBuffers(A,Q),pt.viewport(F),pt.scissor(ut),pt.setScissorTest(rt),Rt){const Xt=dt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Xt.__webglTexture,at)}else if(Ot){const Xt=dt.get(A.texture),ee=K;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.__webglTexture,at,ee)}else if(A!==null&&at!==0){const Xt=dt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Xt.__webglTexture,at)}U=-1},this.readRenderTargetPixels=function(A,K,at,st,Q,Rt,Ot){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt){pt.bindFramebuffer(B.FRAMEBUFFER,Bt);try{const Xt=A.texture,ee=Xt.format,Qt=Xt.type;if(!vt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-st&&at>=0&&at<=A.height-Q&&B.readPixels(K,at,st,Q,ie.convert(ee),ie.convert(Qt),Rt)}finally{const Xt=X!==null?dt.get(X).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,K,at,st,Q,Rt,Ot){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=dt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt)if(K>=0&&K<=A.width-st&&at>=0&&at<=A.height-Q){pt.bindFramebuffer(B.FRAMEBUFFER,Bt);const Xt=A.texture,ee=Xt.format,Qt=Xt.type;if(!vt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.bufferData(B.PIXEL_PACK_BUFFER,Rt.byteLength,B.STREAM_READ),B.readPixels(K,at,st,Q,ie.convert(ee),ie.convert(Qt),0);const me=X!==null?dt.get(X).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,me);const be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await wS(B,be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Rt),B.deleteBuffer(Yt),B.deleteSync(be),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,at=0){const st=Math.pow(2,-at),Q=Math.floor(A.image.width*st),Rt=Math.floor(A.image.height*st),Ot=K!==null?K.x:0,Bt=K!==null?K.y:0;D.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,Ot,Bt,Q,Rt),pt.unbindTexture()};const nl=B.createFramebuffer(),Ni=B.createFramebuffer();this.copyTextureToTexture=function(A,K,at=null,st=null,Q=0,Rt=null){Rt===null&&(Q!==0?(Vc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=Q,Q=0):Rt=0);let Ot,Bt,Xt,ee,Qt,Yt,me,be,qe;const xe=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(at!==null)Ot=at.max.x-at.min.x,Bt=at.max.y-at.min.y,Xt=at.isBox3?at.max.z-at.min.z:1,ee=at.min.x,Qt=at.min.y,Yt=at.isBox3?at.min.z:0;else{const ln=Math.pow(2,-Q);Ot=Math.floor(xe.width*ln),Bt=Math.floor(xe.height*ln),A.isDataArrayTexture?Xt=xe.depth:A.isData3DTexture?Xt=Math.floor(xe.depth*ln):Xt=1,ee=0,Qt=0,Yt=0}st!==null?(me=st.x,be=st.y,qe=st.z):(me=0,be=0,qe=0);const ye=ie.convert(K.format),Jt=ie.convert(K.type);let je;K.isData3DTexture?(D.setTexture3D(K,0),je=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),je=B.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),je=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Me=B.getParameter(B.UNPACK_ROW_LENGTH),An=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fa=B.getParameter(B.UNPACK_SKIP_PIXELS),Ge=B.getParameter(B.UNPACK_SKIP_ROWS),Oi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ee),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Yt);const Ie=A.isDataArrayTexture||A.isData3DTexture,Rn=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const ln=dt.get(A),mn=dt.get(K),Mn=dt.get(ln.__renderTarget),Si=dt.get(mn.__renderTarget);pt.bindFramebuffer(B.READ_FRAMEBUFFER,Mn.__webglFramebuffer),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Pi=0;Pi<Xt;Pi++)Ie&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.get(A).__webglTexture,Q,Yt+Pi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,dt.get(K).__webglTexture,Rt,qe+Pi)),B.blitFramebuffer(ee,Qt,Ot,Bt,me,be,Ot,Bt,B.DEPTH_BUFFER_BIT,B.NEAREST);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||dt.has(A)){const ln=dt.get(A),mn=dt.get(K);pt.bindFramebuffer(B.READ_FRAMEBUFFER,nl),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ni);for(let Mn=0;Mn<Xt;Mn++)Ie?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,Q,Yt+Mn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,Q),Rn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Rt,qe+Mn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Rt),Q!==0?B.blitFramebuffer(ee,Qt,Ot,Bt,me,be,Ot,Bt,B.COLOR_BUFFER_BIT,B.NEAREST):Rn?B.copyTexSubImage3D(je,Rt,me,be,qe+Mn,ee,Qt,Ot,Bt):B.copyTexSubImage2D(je,Rt,me,be,ee,Qt,Ot,Bt);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(je,Rt,me,be,qe,Ot,Bt,Xt,ye,Jt,xe.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(je,Rt,me,be,qe,Ot,Bt,Xt,ye,xe.data):B.texSubImage3D(je,Rt,me,be,qe,Ot,Bt,Xt,ye,Jt,xe):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Rt,me,be,Ot,Bt,ye,Jt,xe.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Rt,me,be,xe.width,xe.height,ye,xe.data):B.texSubImage2D(B.TEXTURE_2D,Rt,me,be,Ot,Bt,ye,Jt,xe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,An),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fa),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oi),Rt===0&&K.generateMipmaps&&B.generateMipmap(je),pt.unbindTexture()},this.copyTextureToTexture3D=function(A,K,at=null,st=null,Q=0){return Vc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,K,at,st,Q)},this.initRenderTarget=function(A){dt.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),pt.unbindTexture()},this.resetState=function(){H=0,I=0,X=null,pt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}const Ov={type:"change"},qd={type:"start"},b0={type:"end"},Oc=new Fd,Pv=new Ha,C1=Math.cos(70*AS.DEG2RAD),fn=new W,Vn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bh=1e-6;class D1 extends WM{constructor(t,n=null){super(t,n),this.state=Be.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new bs,this._lastTargetPosition=new W,this._quat=new bs().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lv,this._sphericalDelta=new lv,this._scale=1,this._panOffset=new W,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new W,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=L1.bind(this),this._onPointerDown=U1.bind(this),this._onPointerUp=N1.bind(this),this._onContextMenu=H1.bind(this),this._onMouseWheel=z1.bind(this),this._onKeyDown=B1.bind(this),this._onTouchStart=I1.bind(this),this._onTouchMove=F1.bind(this),this._onMouseDown=O1.bind(this),this._onMouseMove=P1.bind(this),this._interceptControlDown=G1.bind(this),this._interceptControlUp=V1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ov),this.update(),this.state=Be.NONE}update(t=null){const n=this.object.position;fn.copy(n).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(a)&&isFinite(l)&&(a<-Math.PI?a+=Vn:a>Math.PI&&(a-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),a<=l?this._spherical.theta=Math.max(a,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+l)/2?Math.max(a,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),n.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=fn.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new W(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new W(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),f=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Oc.origin.copy(this.object.position),Oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oc.direction))<C1?this.object.lookAt(this.target):(Pv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oc.intersectPlane(Pv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bh||this._lastTargetPosition.distanceToSquared(this.target)>Bh?(this.dispatchEvent(Ov),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){fn.setFromMatrixColumn(n,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,n){this.screenSpacePanning===!0?fn.setFromMatrixColumn(n,1):(fn.setFromMatrixColumn(n,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let c=fn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),l=t-a.left,c=n-a.top,f=a.width,h=a.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(a,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(a,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),l=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(a,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ut,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function U1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function L1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function N1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(b0),this.state=Be.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function O1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Be.DOLLY;break;case Sr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}break;case Sr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(qd)}function P1(r){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function z1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(r.preventDefault(),this.dispatchEvent(qd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(b0))}function B1(r){this.enabled!==!1&&this._handleKeyDown(r)}function I1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Be.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Be.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(qd)}function F1(r){switch(this._trackPointer(r),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Be.NONE}}function H1(r){this.enabled!==!1&&r.preventDefault()}function G1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function V1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class k1{constructor(t){this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.fov=45,this.nearPlane=1,this.farPlane=1e3,this.canvasId=t,this.ambientLight=void 0,this.directionalLight=void 0}initialize(){this.scene=new eM,this.camera=new ui(this.fov,window.innerWidth/window.innerHeight,1,1e3);const t=window.innerWidth<768;this.camera.position.set(0,12,t?60:40),this.camera.lookAt(0,0,0);const n=document.getElementById(this.canvasId);this.renderer=new w1({canvas:n,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,document.body.appendChild(this.renderer.domElement),this.controls=new D1(this.camera,this.renderer.domElement),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=3,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1}),this.ambientLight=new VM(16777215,.5),this.scene.add(this.ambientLight),this.directionalLight=new GM(16777215,1),this.directionalLight.position.set(0,32,64),this.scene.add(this.directionalLight),window.addEventListener("resize",()=>this.onWindowResize(),!1)}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}const Po=new W;function li(r,t,n,a,l,c){const f=2*Math.PI*l/4,h=Math.max(c-2*l,0),p=Math.PI/4;Po.copy(t),Po[a]=0,Po.normalize();const m=.5*f/(f+h),g=1-Po.angleTo(r)/p;return Math.sign(Po[n])===1?g*m:h/(f+h)+m+m*(1-g)}class jo extends Lr{constructor(t=1,n=1,a=1,l=2,c=.1){if(l=l*2+1,c=Math.min(t/2,n/2,a/2,c),super(1,1,1,l,l,l),l===1)return;const f=this.toNonIndexed();this.index=null,this.attributes.position=f.attributes.position,this.attributes.normal=f.attributes.normal,this.attributes.uv=f.attributes.uv;const h=new W,p=new W,m=new W(t,n,a).divideScalar(2).subScalar(c),g=this.attributes.position.array,_=this.attributes.normal.array,v=this.attributes.uv.array,S=g.length/6,E=new W,w=.5/l;for(let y=0,x=0;y<g.length;y+=3,x+=2)switch(h.fromArray(g,y),p.copy(h),p.x-=Math.sign(p.x)*w,p.y-=Math.sign(p.y)*w,p.z-=Math.sign(p.z)*w,p.normalize(),g[y+0]=m.x*Math.sign(h.x)+p.x*c,g[y+1]=m.y*Math.sign(h.y)+p.y*c,g[y+2]=m.z*Math.sign(h.z)+p.z*c,_[y+0]=p.x,_[y+1]=p.y,_[y+2]=p.z,Math.floor(y/S)){case 0:E.set(1,0,0),v[x+0]=li(E,p,"z","y",c,a),v[x+1]=1-li(E,p,"y","z",c,n);break;case 1:E.set(-1,0,0),v[x+0]=1-li(E,p,"z","y",c,a),v[x+1]=1-li(E,p,"y","z",c,n);break;case 2:E.set(0,1,0),v[x+0]=1-li(E,p,"x","z",c,t),v[x+1]=li(E,p,"z","x",c,a);break;case 3:E.set(0,-1,0),v[x+0]=1-li(E,p,"x","z",c,t),v[x+1]=1-li(E,p,"z","x",c,a);break;case 4:E.set(0,0,1),v[x+0]=1-li(E,p,"x","y",c,t),v[x+1]=1-li(E,p,"y","x",c,n);break;case 5:E.set(0,0,-1),v[x+0]=li(E,p,"x","y",c,t),v[x+1]=1-li(E,p,"y","x",c,n);break}}}const X1="/gameboy-portfolio/assets/sqlLogo-CU4NlOfg.png",W1="/gameboy-portfolio/assets/pythonLogo-DMv7E-j5.png",q1="/gameboy-portfolio/assets/dwhLogo-DERHip8z.png",Y1="/gameboy-portfolio/assets/bigdataLogo-C-TdpUtp.png";class Z1{constructor(){this.options=["ABOUT ME","PROJECTS","SKILLS","CONTACT"],this.selectedIndex=0,this.state="menu",this.projectOptions=["big tech stocks","humidity control system","car's mileage","car data platform"],this.projectLinks=["https://github.com/pawel045/big-tech-stocks","https://github.com/pawel045/humidity-control","https://github.com/pawel045/car-mil","https://github.com/pawel045/car-data-platform"],this.selectedProjectIndex=0,this.selectedSkillIndex=0,this.skillNames=["skills_python","skills_sql","skills_dwh","skills_bdt"],this.skillLogos={Python:{image:new Image,loaded:!1,src:W1},SQL:{image:new Image,loaded:!1,src:X1},"Data Warehousing":{image:new Image,loaded:!1,src:q1},"Big Data Tools":{image:new Image,loaded:!1,src:Y1}},this.skills=Object.keys(this.skillLogos),Object.keys(this.skillLogos).forEach(t=>{const n=this.skillLogos[t];n.image.onload=()=>n.loaded=!0,n.image.src=n.src})}moveUp(){this.state==="menu"?this.selectedIndex=(this.selectedIndex-1+this.options.length)%this.options.length:this.state==="projects"&&(this.selectedProjectIndex=(this.selectedProjectIndex-1+this.projectOptions.length)%this.projectOptions.length)}moveDown(){this.state==="menu"?this.selectedIndex=(this.selectedIndex+1)%this.options.length:this.state==="projects"&&(this.selectedProjectIndex=(this.selectedProjectIndex+1)%this.projectOptions.length)}moveLeft(){this.state==="skills"&&(this.selectedSkillIndex=(this.selectedSkillIndex-1+this.skills.length)%this.skills.length)}moveRight(){this.state==="skills"&&(this.selectedSkillIndex=(this.selectedSkillIndex+1)%this.skills.length)}goMenu(){this.state="menu"}select(){if(this.state==="skills")switch(this.skills[this.selectedSkillIndex]){case"Python":this.state="skills_python";break;case"SQL":this.state="skills_sql";break;case"Data Warehousing":this.state="skills_dwh";break;case"Big Data Tools":this.state="skills_bdt";break;default:this.state="skills"}else if([...this.skillNames].includes(this.state))this.state="skills";else switch(this.options[this.selectedIndex]){case"ABOUT ME":this.state="about me";break;case"PROJECTS":this.state="projects";break;case"SKILLS":this.state="skills";break;case"CONTACT":this.state="contact";break;case"GAME":this.state="game";break;default:this.state="menu"}}getContent(){return this.state==="menu"?this.options.map((t,n)=>(n===this.selectedIndex?"> ":"  ")+t):this.state==="about me"?["Hey — Paweł here","I dive into data engineering,","with mechanical background","and expirience in data analysis","I’m always exploring new tech,","tinkering, learning, building.","Big data keeps things exciting."]:this.state==="projects"?this.projectOptions.map((t,n)=>(n===this.selectedProjectIndex?"> ":"  ")+t):this.state==="skills"?[this.skills[this.selectedSkillIndex]]:this.state==="skills_python"?["> Advanced Python","> Process data - Pandas,PySpark","> Connecting with API/DB","> Docker,Git/Github","> OOP,Design Patterns","> WebDev - Flask","> Webscraping - Selenium,bs4"]:this.state==="skills_sql"?["> Advanced SQL","> Relational DB:","    PostgreSQL","    Vertica","> NoSQL DB:","    MongoDB"]:this.state==="skills_dwh"?["> Knowledge of Data Modeling:","    Star and Snowflake Schemas","    Fact and Dimension Tables","    Slowly Changing Dimensions","> ETL/ELT processes","> Data streaming"]:this.state==="skills_bdt"?["> Big Data Techs:","    GCP (in preperation for","    data engineer certification)","    Kafka","    Spark (PySpark)","    Airflow"]:this.state==="contact"?["This is my email:","proszczyk96@gmail.com","","Press A to copy ","Feel free to write to me :)"]:this.state==="game"?["There will be a","game here soon :)"]:[]}}class j1{build(){const t=new jo(20,30,3,5,1),n=new Dr({color:16724787,metalness:.2,roughness:.4}),a=new yn(t,n);return a.position.set(0,0,0),a}}class K1{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=140,this.ctx=this.canvas.getContext("2d"),this.texture=new o0(this.canvas),this.texture.minFilter=vi,this.animationTimeouts=[],this.isRendering=!0,this.material=new Zc({map:this.texture,transparent:!0}),this.textPlane=new yn(new Nr(14,7),this.material),this.textPlane.position.set(0,6.6,1.71),this.content=new Z1,new FontFace("GameBoyFont","url(./fonts/VT323.ttf)").load().then(n=>{document.fonts.add(n),this.ctx.font="10px GameBoyFont",this.ctx.fillStyle="#909090",this.render()}).catch(n=>{console.error("Font failed to load:",n)}),this.render()}render({animate:t=!0}={}){var c;const n=this.ctx;n.clearRect(0,0,this.canvas.width,this.canvas.height),n.font="20px GameBoyFont";let a=this.content.getContent();(c=this.tempOverlayLines)!=null&&c.length&&(a=[...a,...this.tempOverlayLines]);const l=this.content.state;l==="menu"?this.drawMenu(a):["about me","contact",...this.content.skillNames].includes(l)?t?this.animateLines(a):this.drawDefault(a):this.drawDefault(a)}stopRender(){this.isRendering=!1,this.animationTimeouts.forEach(clearTimeout),this.animationTimeouts=[]}drawMenu(t){t.forEach((n,a)=>{this.ctx.fillText(n,10,25+a*25)}),this.texture.needsUpdate=!0}drawDefault(t){t.forEach((n,a)=>{let l=10,c=25+a*20;if(this.content.state==="skills"){for(const h in this.content.skillLogos){const p=this.content.skillLogos[h];if(n.includes(h)&&p.loaded){const _=(this.canvas.width-150)/2,v=this.canvas.height/2-150/2;this.ctx.drawImage(p.image,_,v,150,150),this.texture.needsUpdate=!0;return}}const f=this.ctx.measureText(n).width;l=(this.canvas.width-f)/2,c=this.canvas.height/2}this.ctx.fillText(n,l,c)}),this.texture.needsUpdate=!0}animateLines(t){let n=0;const a=()=>{if(this.isRendering&&n<t.length){const l=t[n];let c=0;const f=()=>{if(this.isRendering)if(c<l.length){const h=l[c],p=this.content.state==="contact"?10+c*8:c*8,m=this.content.state==="contact"?25+n*20:13+n*20;this.ctx.fillText(h,p,m),this.texture.needsUpdate=!0,c++;const g=setTimeout(f,13);this.animationTimeouts.push(g)}else{n++;const h=setTimeout(a,13);this.animationTimeouts.push(h)}};f()}};this.isRendering=!0,a()}showTemporaryMessage(t,n=2500){this.tempOverlayLines=[t],this.render({animate:!1}),setTimeout(()=>{this.tempOverlayLines=[],this.render({animate:!1})},n)}moveUp(){this.content.moveUp(),this.render()}moveDown(){this.content.moveDown(),this.render()}goMenu(){this.content.goMenu(),this.render()}select(){this.content.select(),this.render()}buildScreen(){const t=new jo(15,11,1,3,.5),n=new Dr({color:0,metalness:.3,roughness:.5}),a=new yn(t,n);return a.position.set(0,6.6,1.2),a}buildTextPlane(){return this.textPlane}appendLine(t){this.lines=[...this.lines,t]}}class zv{constructor(t,n,a,l=4473924){const c=new d0;c.absarc(0,0,1,0,Math.PI*2,!1);const f={depth:.3,bevelEnabled:!0,bevelSegments:5,steps:1,bevelSize:.2,bevelThickness:.1};this.mesh=new yn(new Xd(c,f),new Dr({color:l})),this.mesh.position.set(t,n,a),this.mesh.userData.clickable=!0,this.mesh.userData.parent=this}click(){this.mesh.position.z-=.2,setTimeout(()=>{this.mesh.position.z+=.2},100),this.clickHandler&&this.clickHandler()}}class Pc{constructor(t,n,a=1.6,l=4473924){const m=new jo(2,2,.5,1,1),g=new Dr({color:l});this.mesh=new yn(m,g),this.mesh.position.set(t,n,a),this.mesh.userData.clickable=!0,this.mesh.userData.parent=this}click(){this.mesh.position.z-=.2,setTimeout(()=>{this.mesh.position.z+=.2},100),this.clickHandler&&this.clickHandler()}}class Q1{constructor(){this.up=new Pc(-4,-3),this.down=new Pc(-4,-7),this.left=new Pc(-6,-5),this.right=new Pc(-2,-5)}getArrows(){return[this.up,this.down,this.left,this.right]}}class J1{buildStartStop(){const t=new jo(1.75,.6,.5,.1,10),n=new Dr({color:4473924}),a=new yn(t,n),l=new yn(t,n);return a.position.set(1.25,-11,1.5),l.position.set(-1.25,-11,1.5),[a,l]}buildCenterDPad(){const t=new jo(2,2,.5,1,1),n=new Dr({color:4473924}),a=new yn(t,n);return a.position.set(-4,-5,1.6),a}createButtonLabel(t){const n=document.createElement("canvas");n.width=64,n.height=64;const a=n.getContext("2d");a.fillStyle="#0D0D0D",a.font="bold 40px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(t,n.width/2,n.height/2);const l=new o0(n),c=new Zc({map:l,transparent:!0}),f=new Nr(1,1);return new yn(f,c)}}class $1{constructor(t){this.screen=t}handleUp(){const t=this.screen.content.state;t==="menu"?this.screen.moveUp():t==="projects"&&(this.screen.content.moveUp(),this.screen.render({animate:!1}))}handleDown(){const t=this.screen.content.state;t==="menu"?this.screen.moveDown():t==="projects"&&(this.screen.content.moveDown(),this.screen.render({animate:!1}))}handleRight(){this.screen.content.state==="skills"&&(this.screen.content.moveRight(),this.screen.render({animate:!1}))}handleLeft(){this.screen.content.state==="skills"&&(this.screen.content.moveLeft(),this.screen.render({animate:!1}))}handleA(){const t=this.screen.content.state;if(t==="menu"||t==="skills")this.screen.select();else if(t==="contact")navigator.clipboard.writeText("proszczyk96@gmail.com").then(()=>{this.screen.showTemporaryMessage("Email was copied!")}).catch(a=>{console.error("Failed to copy email:",a)});else if(t==="projects"){const n=this.screen.content.selectedProjectIndex,a=this.screen.content.projectLinks[n];a&&window.open(a,"_blank")}}handleB(){const t=this.screen.content.state;["skills_python","skills_sql","skills_dwh","skills_bdt"].includes(t)?(this.screen.stopRender(),this.screen.select()):(this.screen.stopRender(),this.screen.goMenu())}}function tR(){return Bv.useEffect(()=>{const r=new k1("myThreeJsCanvas");r.initialize(),r.animate();const t=new j1().build(),n=new J1,[a,l]=n.buildStartStop(),c=n.buildCenterDPad(),f=new K1,h=f.buildScreen(),p=f.buildTextPlane(),m=new $1(f),g=new zv(6,-4,1.4);g.clickHandler=m.handleA.bind(m);const _=new zv(3.25,-6,1.4);_.clickHandler=m.handleB.bind(m);const v=n.createButtonLabel("A"),S=n.createButtonLabel("B");v.position.set(g.mesh.position.x,g.mesh.position.y-1.8,g.mesh.position.z+.11),S.position.set(_.mesh.position.x,_.mesh.position.y-1.8,_.mesh.position.z+.11);const E=new Q1;E.up.clickHandler=m.handleUp.bind(m),E.down.clickHandler=m.handleDown.bind(m),E.left.clickHandler=m.handleLeft.bind(m),E.right.clickHandler=m.handleRight.bind(m);const y=E.getArrows().map(H=>H.mesh);[t,h,p,g.mesh,_.mesh,v,S,a,l,c,...y].forEach(H=>r.scene.add(H));const z=new XM,L=new Ut,C=[g.mesh,_.mesh,...y],V=H=>{var X,U;L.x=H.clientX/window.innerWidth*2-1,L.y=-(H.clientY/window.innerHeight)*2+1,z.setFromCamera(L,r.camera);const I=z.intersectObjects(C);if(I.length>0){const R=I[0].object;(U=(X=R.userData)==null?void 0:X.parent)!=null&&U.click&&R.userData.parent.click()}};return window.addEventListener("click",V),()=>{window.removeEventListener("click",V)}},[]),Io.jsx("div",{className:"custom-background",children:Io.jsx("canvas",{id:"myThreeJsCanvas"})})}By.createRoot(document.getElementById("root")).render(Io.jsx(Bv.StrictMode,{children:Io.jsx("div",{className:"custom-background",children:Io.jsx(tR,{})})}));
