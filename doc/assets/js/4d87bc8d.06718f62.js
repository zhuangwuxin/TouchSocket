"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3021],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,u=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,w=l["".concat(d,".").concat(m)]||l[m]||i[m]||u;return r?t.createElement(w,s(s({ref:n},p),{},{components:r})):t.createElement(w,s({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=r.length,s=new Array(u);s[0]=l;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<u;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4036:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>i,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const u={id:"dbcontext-add-or-update",title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c"},s=void 0,o={unversionedId:"dbcontext-add-or-update",id:"dbcontext-add-or-update",title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",description:"\u4ee5\u4e0b\u5185\u5bb9\u5728 Furion 2.5.1 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u6b64\u64cd\u4f5c\u8ba9\u5f88\u591a\u4e0d\u4e86\u89e3 EFCore \u7684\u5f00\u53d1\u8005\u4ea7\u751f\u4e86\u5f88\u5927\u7684\u8bef\u89e3\uff0c\u4e0d\u77e5\u4f55\u65f6\u65b0\u589e\u6216\u4f55\u65f6\u66f4\u65b0\uff0c\u6545\u79fb\u9664\u6b64\u529f\u80fd\u3002",source:"@site/docs/dbcontext-add-or-update.mdx",sourceDirName:".",slug:"/dbcontext-add-or-update",permalink:"/touchsocket/docs/dbcontext-add-or-update",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-add-or-update.mdx",tags:[],version:"current",frontMatter:{id:"dbcontext-add-or-update",title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",sidebar_label:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.6 \u66f4\u65b0\u64cd\u4f5c",permalink:"/touchsocket/docs/dbcontext-update"},next:{title:"9.8 \u5220\u9664\u64cd\u4f5c",permalink:"/touchsocket/docs/dbcontext-delete"}},d={},c=[{value:"9.7.1 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"971-\u65b0\u589e\u6216\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.2 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"972-\u65b0\u589e\u6216\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.3 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"973-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.4 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"974-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.5 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"975-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.6 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"976-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.7.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"977-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],p={toc:c};function i(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 2.5.1 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002\u6b64\u64cd\u4f5c\u8ba9\u5f88\u591a\u4e0d\u4e86\u89e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"EFCore")," \u7684\u5f00\u53d1\u8005\u4ea7\u751f\u4e86\u5f88\u5927\u7684\u8bef\u89e3\uff0c\u4e0d\u77e5\u4f55\u65f6\u65b0\u589e\u6216\u4f55\u65f6\u66f4\u65b0\uff0c\u6545\u79fb\u9664\u6b64\u529f\u80fd\u3002")),(0,a.kt)("h2",{id:"971-\u65b0\u589e\u6216\u66f4\u65b0\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.7.1 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdate(user);\n\n// \u793a\u4f8b\u4e8c\nuser.InsertOrUpdate();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.InsertOrUpdateAsync();\n")),(0,a.kt)("h2",{id:"972-\u65b0\u589e\u6216\u66f4\u65b0\u7acb\u5373\u63d0\u4ea4"},"9.7.2 \u65b0\u589e\u6216\u66f4\u65b0\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.InsertOrUpdateNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.InsertOrUpdateNowAsync();\n")),(0,a.kt)("h2",{id:"973-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.7.3 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateInclude(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateInclude(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateInclude(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateInclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateInclude(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateInclude("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateInclude(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateInclude(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateIncludeAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateIncludeAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateIncludeAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateIncludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateIncludeAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateIncludeAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateIncludeAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateIncludeAsync(new[] {"Age", "Name"});\n')),(0,a.kt)("h2",{id:"974-\u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\u7acb\u5373\u63d0\u4ea4"},"9.7.4 \u65b0\u589e\u6216\u66f4\u65b0\u90e8\u5206\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateIncludeNow(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateIncludeNow(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateIncludeNow(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateIncludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateIncludeNow(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateIncludeNow("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateIncludeNow(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateIncludeNow(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateIncludeNowAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateIncludeNowAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateIncludeNowAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateIncludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateIncludeNowAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateIncludeNowAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateIncludeNowAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateIncludeNowAsync(new[] {"Age", "Name"});\n')),(0,a.kt)("h2",{id:"975-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.7.5 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateExclude(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateExclude(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateExclude(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateExclude(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateExclude(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateExclude("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateExclude(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateExclude(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateExcludeAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateExcludeAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateExcludeAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateExcludeAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateExcludeAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateExcludeAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateExcludeAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateExcludeAsync(new[] {"Age", "Name"});\n')),(0,a.kt)("h2",{id:"976-\u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\u7acb\u5373\u63d0\u4ea4"},"9.7.6 \u65b0\u589e\u6216\u66f4\u65b0\u6392\u9664\u7279\u5b9a\u5217\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertOrUpdateExcludeNow(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertOrUpdateExcludeNow(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nrepository.InsertOrUpdateExcludeNow(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nrepository.InsertOrUpdateExcludeNow(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nuser.InsertOrUpdateExcludeNow(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nuser.InsertOrUpdateExcludeNow("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nuser.InsertOrUpdateExcludeNow(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nuser.InsertOrUpdateExcludeNow(new[] {"Age", "Name"});\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertOrUpdateExcludeNowAsync(user, u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertOrUpdateExcludeNowAsync(user, "Age", "Name");\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertOrUpdateExcludeNowAsync(user, new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u56db\nawait repository.InsertOrUpdateExcludeNowAsync(user, new[] {"Age", "Name"});\n\n// \u793a\u4f8b\u4e94\nawait user.InsertOrUpdateExcludeNowAsync(u=>u.Name, u=>u.Age);\n\n// \u793a\u4f8b\u516d\nawait user.InsertOrUpdateExcludeNowAsync("Age", "Name");\n\n// \u793a\u4f8b\u4e03\nawait user.InsertOrUpdateExcludeNowAsync(new[] { u=>u.Name, u=>u.Age});\n\n// \u793a\u4f8b\u516b\nawait user.InsertOrUpdateExcludeNowAsync(new[] {"Age", "Name"});\n')),(0,a.kt)("h2",{id:"977-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.7.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}i.isMDXComponent=!0}}]);