import{r as p}from"./index-4g5l5LRQ.js";var u={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p,_=Symbol.for("react.element"),m=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function i(l,e,x){var t,r={},o=null,s=null;x!==void 0&&(o=""+x),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(t in e)v.call(e,t)&&!f.hasOwnProperty(t)&&(r[t]=e[t]);if(l&&l.defaultProps)for(t in e=l.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:_,type:l,key:o,ref:s,props:r,_owner:d.current}}a.Fragment=m;a.jsx=i;a.jsxs=i;u.exports=a;var y=u.exports;const n=({className:l,icon:e,size:x,...t})=>{const r={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl"};return y.jsx("span",{className:`font-material ${r[x]} ${l}`,...t,children:e})};try{n.displayName="Icon",n.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"base"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'},{value:'"8xl"'},{value:'"9xl"'}]}}}}}catch{}export{n as I,y as j};
