"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6696],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,y=d["".concat(l,".").concat(c)]||d[c]||p[c]||s;return t?r.createElement(y,i(i({ref:n},m),{},{components:t})):r.createElement(y,i({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const s="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7462),a=t(7294),s=t(6010),i=t(2389),o=t(7392),l=t(7094),u=t(2466);const m="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:c,groupId:y,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,o.l)(N,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==k&&!N.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:C}=(0,l.U)(),[f,w]=(0,a.useState)(k),I=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=y){const e=v[y];null!=e&&e!==f&&N.some((n=>n.value===e))&&w(e)}const T=e=>{const n=e.currentTarget,t=I.indexOf(n),r=N[t].value;r!==f&&(D(n),w(r),null!=y&&C(y,String(r)))},P=e=>{var n;let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},b)},N.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,key:n,ref:e=>I.push(e),onKeyDown:P,onClick:T},i,{className:(0,s.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":f===n})}),t??n)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}function c(e){const n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},2126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),s=(t(4996),t(5488)),i=t(5162);const o={id:"dbcontext-hight-query",title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c"},l=void 0,u={unversionedId:"dbcontext-hight-query",id:"dbcontext-hight-query",title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",description:"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b",source:"@site/docs/dbcontext-high-query.mdx",sourceDirName:".",slug:"/dbcontext-hight-query",permalink:"/touchsocket/docs/dbcontext-hight-query",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-high-query.mdx",tags:[],version:"current",frontMatter:{id:"dbcontext-hight-query",title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.10 \u67e5\u8be2\u64cd\u4f5c",permalink:"/touchsocket/docs/dbcontext-query"},next:{title:"9.12 \u89c6\u56fe\u64cd\u4f5c",permalink:"/touchsocket/docs/dbcontext-view"}},m={},p=[{value:"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b",id:"9111-\u5173\u8054\u6570\u636e\u6a21\u578b",level:2},{value:"9.11.2 \u4e00\u5bf9\u4e00\u67e5\u8be2",id:"9112-\u4e00\u5bf9\u4e00\u67e5\u8be2",level:2},{value:"9.11.3 \u4e00\u5bf9\u591a\u67e5\u8be2",id:"9113-\u4e00\u5bf9\u591a\u67e5\u8be2",level:2},{value:"9.11.4 \u591a\u5bf9\u591a\u67e5\u8be2",id:"9114-\u591a\u5bf9\u591a\u67e5\u8be2",level:2},{value:"9.11.5 \u8054\u8868\u67e5\u8be2",id:"9115-\u8054\u8868\u67e5\u8be2",level:2},{value:"9.11.5.1 \u5185\u8fde\u63a5 <code>Inner Join</code>",id:"91151-\u5185\u8fde\u63a5-inner-join",level:3},{value:"9.11.5.2 \u5de6\u8fde\u63a5 <code>Left Join</code>",id:"91152-\u5de6\u8fde\u63a5-left-join",level:3},{value:"9.11.5.3 \u53f3\u8fde\u63a5 <code>Right Join</code>",id:"91153-\u53f3\u8fde\u63a5-right-join",level:3},{value:"9.11.6 \u5206\u7ec4\u67e5\u8be2",id:"9116-\u5206\u7ec4\u67e5\u8be2",level:2},{value:"9.11.7 \u5408\u5e76\u7ed3\u679c\u96c6",id:"9117-\u5408\u5e76\u7ed3\u679c\u96c6",level:2},{value:"9.11.8 \u67e5\u8be2\u6392\u5e8f",id:"9118-\u67e5\u8be2\u6392\u5e8f",level:2},{value:"9.11.8.1 \u6b63\u5e8f",id:"91181-\u6b63\u5e8f",level:3},{value:"9.11.8.2 \u5012\u5e8f",id:"91182-\u5012\u5e8f",level:3},{value:"9.11.8.3 \u6df7\u5408\u5012\u5e8f",id:"91183-\u6df7\u5408\u5012\u5e8f",level:3},{value:"9.11.9 \u9012\u5f52\u67e5\u8be2",id:"9119-\u9012\u5f52\u67e5\u8be2",level:2},{value:"9.11.10 \u52a8\u6001 <code>Sql</code> \u67e5\u8be2",id:"91110-\u52a8\u6001-sql-\u67e5\u8be2",level:2},{value:"9.11.10.1 \u52a8\u6001 <code>Sql</code>",id:"911101-\u52a8\u6001-sql",level:3},{value:"9.11.10.2 \u52a8\u6001 <code>Lambda</code>",id:"911102-\u52a8\u6001-lambda",level:3},{value:"9.11.11 \u65f6\u6001\u67e5\u8be2",id:"91111-\u65f6\u6001\u67e5\u8be2",level:2},{value:"9.11.12 \u6027\u80fd\u4f18\u5316",id:"91112-\u6027\u80fd\u4f18\u5316",level:2},{value:"9.11.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",id:"91113-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50",level:2},{value:"9.11.14 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"91114-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"9111-\u5173\u8054\u6570\u636e\u6a21\u578b"},"9.11.1 \u5173\u8054\u6570\u636e\u6a21\u578b"),(0,a.kt)(s.Z,{defaultValue:"person",values:[{label:"Person",value:"person"},{label:"PersonDetail",value:"person-detail"},{label:"Children",value:"children"},{label:"Post",value:"post"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"person",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {38,43,48}",showLineNumbers:!0,"":!0,"{38,43,48}":!0},"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Furion.Core\n{\n    public class Person : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n\n        /// <summary>\n        /// \u4ece\u8868\n        /// </summary>\n        public PersonDetail PersonDetail { get; set; }\n\n        /// <summary>\n        /// \u4e00\u5bf9\u591a\n        /// </summary>\n        public ICollection<Children> Childrens { get; set; }\n\n        /// <summary>\n        /// \u591a\u5bf9\u591a\n        /// </summary>\n        public ICollection<Post> Posts { get; set; }\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"person-detail",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {25}",showLineNumbers:!0,"":!0,"{25}":!0},"using Furion.DatabaseAccessor;\n\nnamespace Furion.Core\n{\n    public class PersonDetail : EntityBase\n    {\n        /// <summary>\n        /// \u7535\u8bdd\u53f7\u7801\n        /// </summary>\n        public string PhoneNumber { get; set; }\n\n        /// <summary>\n        /// QQ \u53f7\u7801\n        /// </summary>\n        public string QQ { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"children",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {35}",showLineNumbers:!0,"":!0,"{35}":!0},"using Furion.DatabaseAccessor;\nusing System;\n\nnamespace Furion.Core\n{\n    public class Children : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Children()\n        {\n            CreatedTime = DateTime.Now;\n          \n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u6027\u522b\n        /// </summary>\n        public Gender Gender { get; set; }\n\n        /// <summary>\n        /// \u5916\u952e\n        /// </summary>\n        public int PersonId { get; set; }\n\n        /// <summary>\n        /// \u4e3b\u8868\n        /// </summary>\n        public Person Person { get; set; }\n    }\n}\n"))),(0,a.kt)(i.Z,{value:"post",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {26}",showLineNumbers:!0,"":!0,"{26}":!0},"using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Post : Entity\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Post()\n        {\n            CreatedTime = DateTime.Now;\n          \n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// Person \u96c6\u5408\n        /// </summary>\n        public ICollection<Person> Persons { get; set; }\n    }\n}\n")))),(0,a.kt)("h2",{id:"9112-\u4e00\u5bf9\u4e00\u67e5\u8be2"},"9.11.2 \u4e00\u5bf9\u4e00\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Detail);\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.Include(u => u.Detail)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e09\nvar person = repository.Include(u => u.Detail)\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u56db\nvar person = repository.Include(u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n\n// \u793a\u4f8b\u4e94\nvar person = repository.Include(!string.IsNullOrEmpty(keyword), u => u.Detail);\n\n// \u793a\u4f8b\u516d\nvar person = repository.Include(!string.IsNullOrEmpty(keyword), u => u.Detail)\n                       .Include(age > 18, u => u.Detail.Where(d => d.Id > 10).OrderBy(d => d.Name))\n                            .ThenInclude(d => d.Review)\n                       .Include(u => u.Post);\n")),(0,a.kt)("h2",{id:"9113-\u4e00\u5bf9\u591a\u67e5\u8be2"},"9.11.3 \u4e00\u5bf9\u591a\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Childrens);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n")),(0,a.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u4e00")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u591a")," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u591a")," \u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ICollection<TEntity>")," \u5b9a\u4e49\u5c5e\u6027\u3002")),(0,a.kt)("h2",{id:"9114-\u591a\u5bf9\u591a\u67e5\u8be2"},"9.11.4 \u591a\u5bf9\u591a\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u793a\u4f8b\u4e00\nvar person = repository.Include(u => u.Posts);\n\n// \u53c2\u8003 \u4e00\u5bf9\u4e00 \u4f8b\u5b50\n")),(0,a.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u4e00")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"\u591a\u5bf9\u591a")," \u67e5\u8be2\u65b9\u6cd5\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u591a\u5bf9\u591a")," \u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ICollection<TEntity>")," \u5b9a\u4e49\u5c5e\u6027\u3002")),(0,a.kt)("h2",{id:"9115-\u8054\u8868\u67e5\u8be2"},"9.11.5 \u8054\u8868\u67e5\u8be2"),(0,a.kt)("h3",{id:"91151-\u5185\u8fde\u63a5-inner-join"},"9.11.5.1 \u5185\u8fde\u63a5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Inner Join")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n")),(0,a.kt)("h3",{id:"91152-\u5de6\u8fde\u63a5-left-join"},"9.11.5.2 \u5de6\u8fde\u63a5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Left Join")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2,3}",showLineNumbers:!0,"":!0,"{2,3}":!0},"var query = from p in _personRepository.AsQueryable()\n            join d in _personDetailRepository.AsQueryable() on p.Id equals d.PersonId into results\n            from d in results.DefaultIfEmpty()\n            select new PersonDto\n            {\n                PhoneNumber = p.PersonDetail.PhoneNumber,\n                Address = p.Address,\n                Age = p.Age,\n                Name = p.Name,\n                Id = p.Id,\n                QQ = p.PersonDetail.QQ\n            };\n")),(0,a.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Left Join"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Inner Join"))," \u4e0d\u540c\u7684\u662f\uff0c",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Left Join"))," \u4f1a\u5148\u5c06\u7ed3\u679c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"into"))," \u5230\u65b0\u7684\u7ed3\u679c\u96c6\u7136\u540e\u518d\u67e5\u8be2\uff0c\u5e76\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DefaultIfEmpty()"))," \u65b9\u6cd5\u3002")),(0,a.kt)("h3",{id:"91153-\u53f3\u8fde\u63a5-right-join"},"9.11.5.3 \u53f3\u8fde\u63a5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Right Join")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Right Join")," \u53ea\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Left Join")," \u4e3b\u4ece\u8868\u4f4d\u7f6e\u66f4\u6362\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"9116-\u5206\u7ec4\u67e5\u8be2"},"9.11.6 \u5206\u7ec4\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable().GroupBy(x => new { x.Column1, x.Column2 });\n\n// \u793a\u4f8b\u4e8c\nvar query = from student in repository.AsQueryable()\n            group student by repository2.AsQueryable() into dateGroup\n            select new ResultData()\n            {\n                Key = dateGroup.Key,\n                Value = dateGroup.Count()\n            };\n\n// \u793a\u4f8b\u4e09\nvar query = from a in repository.AsQueryable()\n            join b in repository2.AsQueryable() on a.Id equals b.Aid\n            join c in repository3.AsQueryable() on c.id equals b.Bid\n            group a by new { a.Age, b.Sex } into g\n            select new {\n                Peo = g.Key,\n                Count = g.Count()\n            };\n")),(0,a.kt)("h2",{id:"9117-\u5408\u5e76\u7ed3\u679c\u96c6"},"9.11.7 \u5408\u5e76\u7ed3\u679c\u96c6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var query = repository.AsQueryable(u => u.Id > 10)\n                      .Union(\n                          repository2.AsQueryable(u => u.Id <= 10)\n                      );\n")),(0,a.kt)("h2",{id:"9118-\u67e5\u8be2\u6392\u5e8f"},"9.11.8 \u67e5\u8be2\u6392\u5e8f"),(0,a.kt)("h3",{id:"91181-\u6b63\u5e8f"},"9.11.8.1 \u6b63\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderBy(u => u.Id)\n                     .ThenBy(u => u.Name);\n")),(0,a.kt)("h3",{id:"91182-\u5012\u5e8f"},"9.11.8.2 \u5012\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderByDescending(u => u.Id);\n\n// \u793a\u4f8b\u4e8c\nvar query =repository.AsQueryable()\n                     .OrderByDescending(u => u.Id)\n                     .ThenByDescending(u => u.Name);\n")),(0,a.kt)("h3",{id:"91183-\u6df7\u5408\u5012\u5e8f"},"9.11.8.3 \u6df7\u5408\u5012\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .OrderBy(u => u.Id)\n                      .OrderByDescending(u => u.Name)\n                      .ThenBy(u => u.Age);\n")),(0,a.kt)("h2",{id:"9119-\u9012\u5f52\u67e5\u8be2"},"9.11.9 \u9012\u5f52\u67e5\u8be2"),(0,a.kt)(s.Z,{defaultValue:"city",values:[{label:"City",value:"city"},{label:"CityDto",value:"citydto"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"city",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {12,36,41,49-55}",showLineNumbers:!0,"":!0,"{12,36,41,49-55}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// \u57ce\u5e02\n    /// </summary>\n    public class City : Entity, IEntityTypeBuilder<City>, IEntitySeedData<City>\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public City()\n        {\n            CreatedTime = DateTime.Now;\n           \n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7Id\n        /// </summary>\n        public int? ParentId { get; set; }\n\n        /// <summary>\n        /// \u4e0a\u7ea7\n        /// </summary>\n        public virtual City Parent { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public virtual ICollection<City> Childrens { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<City> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder\n                .HasMany(x => x.Childrens)\n                .WithOne(x => x.Parent)\n                .HasForeignKey(x => x.ParentId)\n                .OnDelete(DeleteBehavior.ClientSetNull); // \u5fc5\u987b\u8bbe\u7f6e\u8fd9\u4e00\u884c\n        }\n\n        /// <summary>\n        /// \u79cd\u5b50\u6570\u636e\n        /// </summary>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        /// <returns></returns>\n        public IEnumerable<City> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<City>\n            {\n                new City { Id=1,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u56fd" },\n                new City { Id=2,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u5e7f\u4e1c\u7701",ParentId=1 },\n                new City { Id=3,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u4e2d\u5c71\u5e02",ParentId=2 },\n                new City { Id=4,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u73e0\u6d77\u5e02",ParentId=2 },\n                new City { Id=5,CreatedTime =DateTime.Parse("2020-08-20 15:30:20"),IsDeleted=false,Name="\u6d59\u6c5f\u7701",ParentId=1 },\n            };\n        }\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"citydto",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"using System.Collections.Generic;\n\nnamespace Furion.Application.Persons\n{\n    public class CityDto\n    {\n        /// <summary>\n        /// \u4e3b\u952e\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5b50\u96c6\n        /// </summary>\n        public ICollection<CityDto> Childrens { get; set; }\n    }\n}\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var cities = await repository.AsQueryable()\n                             .Include(u => u.Childrens)\n                             .Where(u => u.Id == 1)\n                             .ToListAsync();\n\nvar dtos = cities.Adapt<List<CityDto>>();\n")),(0,a.kt)("h2",{id:"91110-\u52a8\u6001-sql-\u67e5\u8be2"},"9.11.10 \u52a8\u6001 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Sql")," \u67e5\u8be2"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u4e0d\u652f\u6301 \u52a8\u6001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Sql")," \u67e5\u8be2\u529f\u80fd\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e09\u65b9\u5b9e\u73b0\uff1a"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u9879\u76ee\u5c42\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Linq.Dynamic.Core")," \u5305 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zzzprojects/System.Linq.Dynamic.Core"},"https://github.com/zzzprojects/System.Linq.Dynamic.Core")),(0,a.kt)("h3",{id:"911101-\u52a8\u6001-sql"},"9.11.10.1 \u52a8\u6001 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Sql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u793a\u4f8b\u4e00\nvar query = repository.AsQueryable()\n                      .Where("City == @0 and Orders.Count >= @1", "China", 10)\n                      .OrderBy("CompanyName")\n                      .Select("new(CompanyName as Name, Phone)");\n\n// \u793a\u4f8b\u4e8c\nvar list = repository.AsQueryable()\n                     .Where("Name.Contains(@0)","Furion")\n                     .ToList();\n\n// \u793a\u4f8b\u4e09\uff0c\u652f\u6301 ? \u8bed\u6cd5\nvar customers = repository.AsQueryable()\n                          .Include(c => c.Location)\n                          .Where(c => c.Location?.Name == "test") // \u6ce8\u610f Location?.Name\n                          .ToList();\n')),(0,a.kt)("h3",{id:"911102-\u52a8\u6001-lambda"},"9.11.10.2 \u52a8\u6001 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Lambda")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u793a\u4f8b\u4e00\nvar x = Expression.Parameter(typeof(int), "x");\nvar y = Expression.Parameter(typeof(int), "y");\nvar e = DynamicExpressionParser\n            .ParseLambda(new ParameterExpression[] { x, y }, null, "(x + y) * 2");\n\n// \u793a\u4f8b\u4e8c\nvar e = DynamicExpressionParser.ParseLambda(\n        typeof(Customer), typeof(bool),\n        "City = @0 and Orders.Count >= @1",\n        "London", 10);\n')),(0,a.kt)("h2",{id:"91111-\u65f6\u6001\u67e5\u8be2"},"9.11.11 \u65f6\u6001\u67e5\u8be2"),(0,a.kt)("admonition",{title:"\u529f\u80fd\u79fb\u9664\u58f0\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 2.13 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u8fd8\u63d0\u4f9b\u4e86\u65f6\u6001\u67e5\u8be2\u529f\u80fd\uff0c\u53ef\u4ee5\u67e5\u8be2\u7279\u5b9a\u65f6\u95f4\u7684\u6570\u636e\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var result = rep.Entities\n    .AsTemporalOf(DateTime.UtcNow.AddDays(-1))\n    .Include(i=> i.Company)\n    .FirstOrDefault(i => i.Name == "Furion");\n')),(0,a.kt)("p",null,"\u53e6\u5916\u63d0\u4f9b\u4e86\u591a\u4e2a\u65f6\u6001\u67e5\u8be2\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AsTemporalAll()"),(0,a.kt)("li",{parentName:"ul"},"AsTemporalAsOf(date)"),(0,a.kt)("li",{parentName:"ul"},"AsTemporalFrom(startDate, endDate)"),(0,a.kt)("li",{parentName:"ul"},"AsTemporalBetween(startDate, endDate)"),(0,a.kt)("li",{parentName:"ul"},"AsTemporalContained(startDate, endDate)")),(0,a.kt)("h2",{id:"91112-\u6027\u80fd\u4f18\u5316"},"9.11.12 \u6027\u80fd\u4f18\u5316"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"EF Core")," \u4f1a\u8ddf\u8e2a\u6240\u6709\u5b9e\u4f53\uff0c\u4e5f\u5c31\u662f\u4efb\u4f55\u6570\u636e\u6539\u53d8\u90fd\u4f1a\u5f15\u8d77\u6570\u636e\u68c0\u67e5\uff0c\u6240\u4ee5\u5982\u679c\u53ea\u505a\u67e5\u8be2\u64cd\u4f5c\uff0c\u5efa\u8bae\u5173\u95ed\u5b9e\u4f53\u8ddf\u8e2a\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u9ad8\u6027\u80fd\u5b9e\u4f53\u96c6\u5408\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DetachedEntities"),"\uff1a\u8131\u8f68/\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AsQueryable(false)"),"\uff1a\u4e0d\u8ffd\u8e2a\u5b9e\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Entities.AsNoTracking()"),"\uff1a\u624b\u52a8\u5173\u95ed\u5b9e\u4f53\u8ffd\u8e2a")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"EF Core")," \u4e2d\uff0c\u590d\u6742\u67e5\u8be2\u603b\u662f\u4f1a\u751f\u6210\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"sql"),"\uff0c\u4e5f\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"AsSingleQuery()"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"AsSplitQuery()")," \u5207\u5272\u6210\u591a\u4e2a\u67e5\u8be2\u3002"),(0,a.kt)("h2",{id:"91113-\u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50"},"9.11.13 \u5206\u8868\u67e5\u8be2\u5c0f\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.EntityFrameworkCore.Metadata.Builders;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Person : Entity, IEntityTypeBuilder<Person>\n    {\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u914d\u7f6e\u5b9e\u4f53\u5173\u7cfb\n        /// </summary>\n        /// <param name="entityBuilder"></param>\n        /// <param name="dbContext"></param>\n        /// <param name="dbContextLocator"></param>\n        public void Configure(EntityTypeBuilder<Person> entityBuilder, DbContext dbContext, Type dbContextLocator)\n        {\n            entityBuilder.ToSqlQuery(\n              @"select * from dbo.person.2020-09-19\n                union all\n                select * from dbo.person.2020-09-20");\n        }\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var posts = repository.Where(u => u.Id > 10).ToList();\n")),(0,a.kt)("h2",{id:"91114-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.11.14 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);