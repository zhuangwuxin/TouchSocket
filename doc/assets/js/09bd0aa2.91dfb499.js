"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={id:"dbcontext-filter",title:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",sidebar_label:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668"},a=void 0,l={unversionedId:"dbcontext-filter",id:"dbcontext-filter",title:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",description:"9.23.1 \u67e5\u8be2\u7b5b\u9009\u5668",source:"@site/docs/dbcontext-filter.mdx",sourceDirName:".",slug:"/dbcontext-filter",permalink:"/touchsocket/docs/dbcontext-filter",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-filter.mdx",tags:[],version:"current",frontMatter:{id:"dbcontext-filter",title:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",sidebar_label:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668"},sidebar:"docs",previous:{title:"9.22 \u5ba1\u8ba1\u65e5\u5fd7 (Audit)",permalink:"/touchsocket/docs/dbcontext-audit"},next:{title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",permalink:"/touchsocket/docs/dbcontext-Interceptor"}},s={},u=[{value:"9.23.1 \u67e5\u8be2\u7b5b\u9009\u5668",id:"9231-\u67e5\u8be2\u7b5b\u9009\u5668",level:2},{value:"9.23.2 \u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e",id:"9232-\u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e",level:2},{value:"9.23.2.1 \u5355\u8868\u7b5b\u9009\u5668",id:"92321-\u5355\u8868\u7b5b\u9009\u5668",level:3},{value:"9.23.2.2 \u5168\u5c40\u7b5b\u9009\u5668",id:"92322-\u5168\u5c40\u7b5b\u9009\u5668",level:3},{value:"9.23.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9233-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"9231-\u67e5\u8be2\u7b5b\u9009\u5668"},"9.23.1 \u67e5\u8be2\u7b5b\u9009\u5668"),(0,i.kt)("p",null,"\u901a\u5e38\uff0c\u6211\u4eec\u7cfb\u7edf\u4e2d\u6709\u4e00\u4e9b\u7ef4\u62a4\u5b57\u6bb5\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"IsDeleted")," \u5b57\u6bb5\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u7528\u6765\u6807\u8bc6\u7528\u6237\u5df2\u7ecf\u5220\u9664\u7684\u6570\u636e\uff0c\u90a3\u4e48\u6211\u4eec\u9700\u8981\u6bcf\u6b21\u67e5\u8be2\u6570\u636e\u7684\u65f6\u5019\u5e26\u4e0a\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u907f\u514d\u67e5\u8be2\u51fa\u4e0d\u8be5\u51fa\u73b0\u7684\u6570\u636e\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668\uff0c\u80fd\u591f\u5e94\u7528\u5230\u6bcf\u4e00\u6b21\u67e5\u8be2\u4e2d\u3002"),(0,i.kt)("h2",{id:"9232-\u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e"},"9.23.2 \u591a\u79cd\u7b5b\u9009\u5668\u914d\u7f6e"),(0,i.kt)("h3",{id:"92321-\u5355\u8868\u7b5b\u9009\u5668"},"9.23.2.1 \u5355\u8868\u7b5b\u9009\u5668"),(0,i.kt)("p",null,"\u5355\u8868\u7b5b\u9009\u5668\u5c31\u662f\u53ea\u9488\u5bf9\u7279\u5b9a\u5b9e\u4f53\u8fdb\u884c\u7b5b\u9009\u64cd\u4f5c\uff0c\u4f7f\u7528\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntityTypeBuilder<TEntity>")," \u63a5\u53e3\u5e76\u5b9e\u73b0\u5373\u53ef\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {8,24}",showLineNumbers:!0,"":!0,"{8,24}":!0},"using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\n\nnamespace Furion.Core\n{\n    public class Person : Entity, IEntityTypeBuilder<Person>\n    {\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        public string Name { get; set; }\n\n        public int Age { get; set; }\n\n        public string Address { get; set; }\n\n        public void Configure(EntityTypeBuilder<Person> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.HasQueryFilter(u => !u.IsDeleted);\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"92322-\u5168\u5c40\u7b5b\u9009\u5668"},"9.23.2.2 \u5168\u5c40\u7b5b\u9009\u5668"),(0,i.kt)("p",null,"\u5168\u5c40\u7b5b\u9009\u5668\u53ef\u4ee5\u914d\u7f6e\u6240\u6709\u5b9e\u4f53\u5e94\u7528\u7b5b\u9009\u5668\u4e2d\uff0c\u65e0\u9700\u4e00\u4e2a\u4e00\u4e2a\u53bb\u914d\u7f6e\u3002\u4f7f\u7528\u65b9\u6cd5\u7a0d\u5fae\u6709\u4e9b\u590d\u6742\uff0c\u9700\u8981\u52a8\u6001\u6784\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"Lambda")," \u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("p",null,"\u5b9e\u73b0\u5168\u5c40\u7b5b\u9009\u5668\u4f9d\u8d56\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"IModelBuilderFilter")," \u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u63d0\u4f9b\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OnCreating"),"\uff1a\u5b9e\u4f53\u6784\u5efa\u4e4b\u524d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OnCreated"),"\uff1a\u5b9e\u4f53\u6784\u5efa\u4e4b\u540e")),(0,i.kt)("p",null,"\u901a\u8fc7\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u5373\u53ef\u914d\u7f6e\u5168\u5c40\u8fc7\u6ee4\u5668\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {10,18-19,21,24}",showLineNumbers:!0,"":!0,"{10,18-19,21,24}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Linq.Expressions;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurionDbContext : AppDbContext<FurionDbContext>, IModelBuilderFilter\n    {\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n\n        public void OnCreating(ModelBuilder modelBuilder, EntityTypeBuilder entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            // \u8bbe\u7f6e\u8f6f\u5220\u9664\u8868\u8fbe\u5f0f\n            var fakeDeleteQueryFilterExpression = FakeDeleteQueryFilterExpression(entityBuilder, dbContext);\n            if (fakeDeleteQueryFilterExpression == null) return;\n\n            entityBuilder.HasQueryFilter(fakeDeleteQueryFilterExpression);\n        }\n    }\n}\n')),(0,i.kt)("admonition",{title:"\u5c0f\u5efa\u8bae",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5bf9\u52a8\u6001\u6784\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"LambdaExpression")," \u4e0d\u719f\u6089\u7684\u670b\u53cb\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Linq.Dynamic.Core")," \u5305 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zzzprojects/System.Linq.Dynamic.Core"},"https://github.com/zzzprojects/System.Linq.Dynamic.Core"))),(0,i.kt)("h2",{id:"9233-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.23.3 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);