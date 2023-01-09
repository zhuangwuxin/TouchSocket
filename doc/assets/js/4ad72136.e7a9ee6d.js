"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"efcore-recommend",title:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5",sidebar_label:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5"},i=void 0,l={unversionedId:"efcore-recommend",id:"efcore-recommend",title:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5",description:"9.29.1 EFCore \u9ad8\u6027\u80fd",source:"@site/docs/efcore-recommend.mdx",sourceDirName:".",slug:"/efcore-recommend",permalink:"/touchsocket/docs/efcore-recommend",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/efcore-recommend.mdx",tags:[],version:"current",frontMatter:{id:"efcore-recommend",title:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5",sidebar_label:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5"},sidebar:"docs",previous:{title:"9.28 \u5206\u8868\u5206\u5e93",permalink:"/touchsocket/docs/split-db"},next:{title:"10.1 SqlSugar \u96c6\u6210",permalink:"/touchsocket/docs/sqlsugar"}},c={},p=[{value:"9.29.1 EFCore \u9ad8\u6027\u80fd",id:"9291-efcore-\u9ad8\u6027\u80fd",level:2},{value:"9.29.2 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9292-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"9291-efcore-\u9ad8\u6027\u80fd"},"9.29.1 EFCore \u9ad8\u6027\u80fd"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\uff0c\u9ed8\u8ba4\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"EFCore")," \u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u4f46\u5f88\u591a\u670b\u53cb\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"EFCore")," \u4f7f\u7528\u4e0d\u5f53\uff0c\u7279\u610f\u7f16\u5199\u6b64\u6587\u6863\u8bf4\u660e\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u7684\u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"IRepository/IRepository<TEntity>")," \u4ed3\u50a8\u65b9\u5f0f\u5728\u6784\u9020\u51fd\u6570\u4e2d\u521d\u59cb\u5316\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u907f\u514d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Db.GetRepository<TEntity>")," \u65b9\u5f0f"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u4ee5",(0,o.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u65b9\u5f0f"),"\u8c03\u7528\u6240\u6709\u6570\u636e\u8bbf\u95ee api\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u68c0\u7d22\u7684\u6570\u636e\u4e0d\u662f\u5fc5\u9700\u7684\u3002 \u7f16\u5199\u67e5\u8be2\u4ee5",(0,o.kt)("strong",{parentName:"li"},"\u4ec5\u8fd4\u56de\u5f53\u524d HTTP \u8bf7\u6c42\u6240\u5fc5\u9700\u7684\u6570\u636e"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u636e\u53ef\u4ee5\u63a5\u53d7\uff0c\u8bf7\u8003\u8651",(0,o.kt)("strong",{parentName:"li"},"\u7f13\u5b58\u7ecf\u5e38\u8bbf\u95ee\u7684\u4ece\u6570\u636e\u5e93\u6216\u8fdc\u7a0b\u670d\u52a1\u68c0\u7d22\u7684\u6570\u636e"),"\u3002 \u4f7f\u7528 MemoryCache \u6216 microsoft.web.distributedcache \uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u65b9\u6848\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5c3d\u91cf\u51cf\u5c11\u7f51\u7edc\u5f80\u8fd4\u6b21\u6570"),"\u3002 \u76ee\u6807\u662f\u4f7f\u7528\u5355\u4e2a\u8c03\u7528\u800c\u4e0d\u662f\u591a\u4e2a\u8c03\u7528\u6765\u68c0\u7d22\u6240\u9700\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u8bf7\u6c42\u53ea\u6709\u6570\u636e\u67e5\u8be2\uff0c\u8bf7\u4f7f\u7528\u65e0\u8ddf\u8e2a\u67e5\u8be2\u65b9\u5f0f"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5982\u679c\u8bf7\u6c42\u4e2d\u542b\u6709\u64cd\u4f5c\u6570\u636e\u65f6\uff0c\u8bf7\u4e0d\u8981\u5728 Entity Framework Core \u4e2d\u4f7f\u7528\u65e0\u8ddf\u8e2a\u67e5\u8be2"),"\u3002 EF Core \u53ef\u4ee5\u66f4\u6709\u6548\u5730\u8fd4\u56de\u65e0\u8ddf\u8e2a\u67e5\u8be2\u7684\u7ed3\u679c\u3002 \u7b5b\u9009\u548c\u805a\u5408 LINQ \u67e5\u8be2\uff08\u4f8b\u5982\uff0c .Where \u4f7f\u7528.Select\u3001\u6216.Sum \u8bed\u53e5\uff09\uff0c\u4ee5\u4fbf\u6570\u636e\u5e93\u6267\u884c\u7b5b\u9009\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9700\u8981\u8fdb\u884c\u590d\u6742\u903b\u8f91\u8ba1\u7b97\u67e5\u8be2\u6570\u636e\u60c5\u51b5\uff0c\u8bf7\u5c3d\u53ef\u80fd\u5728\u8fd4\u56de\u67e5\u8be2\u540e\u518d\u5728\u5ba2\u6237\u7aef\u8ba1\u7b97\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u5bf9\u96c6\u5408\u4f7f\u7528\u6295\u5f71\u67e5\u8be2"),'\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6267\u884c "N + 1" \u4e2a SQL \u67e5\u8be2\u3002'),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 \xb7DbContextPool\xb7 \u6c60\u6765\u7ba1\u7406 DbContext\uff0c\u7c7b\u4f3c ADO.NET \u7684\u8fde\u63a5\u6c60\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u624b\u52a8\u6216\u663e\u5f0f\u7f16\u8bd1\u7684\u67e5\u8be2 API\uff0c\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u7f13\u5b58\u67e5\u8be2\u8f6c\u6362\uff0c\u4f7f\u5176\u53ef\u4ec5\u88ab\u8ba1\u7b97\u4e00\u6b21\u5e76\u6267\u884c\u591a\u6b21\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// Create an explicitly compiled query\nprivate static Func<CustomerContext, int, Customer> _customerById =\n    EF.CompileQuery((CustomerContext db, int id) =>\n        db.Customers\n            .Include(c => c.Address)\n            .Single(c => c.Id == id));\n\n// Use the compiled query by invoking it\nusing (var db = new CustomerContext())\n{\n   var customer = _customerById(db, 147);\n}\n")),(0,o.kt)("h2",{id:"9292-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.29.2 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}u.isMDXComponent=!0}}]);