"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?i.createElement(k,o(o({ref:n},s),{},{components:t})):i.createElement(k,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const a={id:"dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",sidebar_label:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e"},o=void 0,l={unversionedId:"settings/dependencyinjectionsettings",id:"settings/dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/dependencyinjectionsettings.mdx",sourceDirName:"settings",slug:"/settings/dependencyinjectionsettings",permalink:"/touchsocket/docs/settings/dependencyinjectionsettings",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/settings/dependencyinjectionsettings.mdx",tags:[],version:"current",frontMatter:{id:"dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",sidebar_label:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e"},sidebar:"settings",previous:{title:"3. \u9a8c\u8bc1\u6d88\u606f\u914d\u7f6e",permalink:"/touchsocket/docs/settings/validationTypemessagesettings"},next:{title:"5. \u52a8\u6001API\u914d\u7f6e",permalink:"/touchsocket/docs/settings/dynamicapicontrollersettings"}},p={},c=[{value:"4.1 \u5173\u4e8e\u914d\u7f6e",id:"41-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"4.2 \u914d\u7f6e\u4fe1\u606f",id:"42-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"4.3 \u914d\u7f6e\u793a\u4f8b",id:"43-\u914d\u7f6e\u793a\u4f8b",level:2}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,r.kt)("a",{parentName:"p",href:"../jsonschema"},"2.7 JSON Schema \u4f7f\u7528"),"\u3011"),(0,r.kt)("p",{parentName:"admonition"},"\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'{\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"\n}\n'))),(0,r.kt)("h2",{id:"41-\u5173\u4e8e\u914d\u7f6e"},"4.1 \u5173\u4e8e\u914d\u7f6e"),(0,r.kt)("p",null,"\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u6307\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u9009\u9879\u3002"),(0,r.kt)("h2",{id:"42-\u914d\u7f6e\u4fe1\u606f"},"4.2 \u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DependencyInjectionSettings"),"\uff1a\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u6839\u8282\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Definitions"),"\uff1a\u52a8\u6001\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u8282\u70b9\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ExternalService")," \u6570\u7ec4\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExternalService"),"\uff1a\u914d\u7f6e\u5355\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4fe1\u606f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Interface"),"\uff1a\u914d\u7f6e\u4f9d\u8d56\u63a5\u53e3\u4fe1\u606f\uff0c\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"\u7a0b\u5e8f\u96c6\u540d\u79f0;\u63a5\u53e3\u5b8c\u6574\u540d\u79f0"),"\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Furion.Application;Furion.Application.ITestService")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Service"),"\uff1a\u914d\u7f6e\u63a5\u53e3\u5b9e\u73b0\u4fe1\u606f\uff0c\u683c\u5f0f\u540c\u4e0a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RegisterType"),"\uff1a\u914d\u7f6e\u4f9d\u8d56\u6ce8\u5165\u7684\u5bf9\u8c61\u751f\u5b58\u671f\uff0c\u53d6\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Transient"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Scoped"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Singleton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Action"),"\uff1a\u6ce8\u518c\u884c\u4e3a\uff0c\u53ef\u9009\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Add"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"TryAdd"),"\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pattern"),"\uff1a\u6ce8\u518c\u9009\u9879\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Named"),"\uff1a\u6ce8\u518c\u522b\u540d\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Order"),"\uff1a\u6ce8\u518c\u6392\u5e8f\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proxy"),"\uff1a\u914d\u7f6e\u4ee3\u7406\u62e6\u622a\uff0c\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"\u7a0b\u5e8f\u96c6\u540d\u79f0;\u4ee3\u7406\u7c7b\u5b8c\u6574\u540d\u79f0"),"\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e"))))))))),(0,r.kt)("h2",{id:"43-\u914d\u7f6e\u793a\u4f8b"},"4.3 \u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "DependencyInjectionSettings": {\n    "Definitions": [\n      {\n        "Interface": "Furion.Application;Furion.Application.ITestService",\n        "Service": "Furion.Application;Furion.Application.TestService",\n        "RegisterType": "Transient",\n        "Action": "Add",\n        "Pattern": "SelfWithFirstInterface",\n        "Named": "TestService",\n        "Order": 1,\n        "Proxy": "Furion.Application;Furion.Application.LogDispathProxy"\n      }\n    ]\n  }\n}\n')))}d.isMDXComponent=!0}}]);