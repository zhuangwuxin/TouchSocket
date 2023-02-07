"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(r),f=a,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={id:"dataforwarding",title:"\u6570\u636e\u8f6c\u53d1\u9879\u76ee"},i=void 0,c={unversionedId:"dataforwarding",id:"dataforwarding",title:"\u6570\u636e\u8f6c\u53d1\u9879\u76ee",description:"\u5b9a\u5236\u65b9",source:"@site/docs/dataforwarding.mdx",sourceDirName:".",slug:"/dataforwarding",permalink:"/touchsocket/docs/dataforwarding",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/dataforwarding.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675265724,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"dataforwarding",title:"\u6570\u636e\u8f6c\u53d1\u9879\u76ee"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u540c\u6b65\u7cfb\u7edf",permalink:"/touchsocket/docs/filesynchronization"},next:{title:"Web\u6570\u636e\u8f6c\u53d1Winform\u9879\u76ee",permalink:"/touchsocket/docs/webdataforwarding"}},l={},d=[{value:"\u5b9a\u5236\u65b9",id:"\u5b9a\u5236\u65b9",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u6280\u672f\u70b9",id:"\u6280\u672f\u70b9",level:2},{value:"\u6548\u679c",id:"\u6548\u679c",level:2}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b9a\u5236\u65b9"},"\u5b9a\u5236\u65b9"),(0,a.kt)("p",null,"\u9091*\u7269\u8054\u6709\u9650\u516c\u53f8"),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"\u5e94\u8be5\u516c\u53f8\u8981\u6c42\uff0c\u5f00\u53d1\u4e00\u4e2a\u80fd\u591f\u8f6c\u53d1\u6570\u636e\u7684\u670d\u52a1\u5668\u3002\u6309\u7167\u4e00\u5b9a\u89c4\u5219\uff0c\u8bbe\u8ba1\u8f6c\u53d1\u89c4\u5219\u3002"),(0,a.kt)("h2",{id:"\u6280\u672f\u70b9"},"\u6280\u672f\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u7f16\u7a0b")),(0,a.kt)("h2",{id:"\u6548\u679c"},"\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:r(508).Z,width:"1978",height:"1189"})))}u.isMDXComponent=!0},508:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dataforwarding-1-700ae9bd774c6299f265e8106362a702.png"}}]);