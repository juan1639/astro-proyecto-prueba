import{r as l}from"./index.NEDEFKed.js";/* empty css                       */var d={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=l,h=Symbol.for("react.element"),v=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,g=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function m(s,e,t){var r,n={},a=null,u=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)j.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:h,type:s,key:a,ref:u,props:n,_owner:g.current}}c.Fragment=v;c.jsx=m;c.jsxs=m;d.exports=c;var o=d.exports;const S=({setLogeado:s,cargando:e,setCargando:t})=>{const[r,n]=l.useState(""),[a,u]=l.useState(""),[f,p]=l.useState(!1),x=i=>{if(i.preventDefault(),console.log("submit"),[r,a].includes("")){p(!0),console.warn("error! campo vacio...");return}p(!1),t(!0),console.log("cargando..."),setTimeout(()=>{s([r,!0]),t(!1),console.log("sesion iniciada!")},2800)};return o.jsx(o.Fragment,{children:o.jsxs("form",{className:"formulario",onSubmit:x,children:[o.jsx("h1",{children:"Iniciar Sesión"}),o.jsx("input",{type:"text",name:"usuario",placeholder:"Usuario...",value:r,onChange:i=>n(i.target.value)}),o.jsx("input",{type:"password",name:"password",placeholder:"Password...",value:a,onChange:i=>u(i.target.value)}),f&&o.jsx("span",{className:"msgError",children:"Falta introducir usuario y/o pass"}),!e&&o.jsx("button",{children:"Iniciar Sesión"}),e&&o.jsx("span",{className:"loader"})]})})},w=()=>{const[s,e]=l.useState(["",!1]),[t,r]=l.useState(!1);return s[1]?o.jsx("h1",{children:"Bienvenido"}):o.jsx(S,{"client:load":!0,setLogeado:e,cargando:t,setCargando:r})};export{w as Formulario};