"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));n(4996);const r={id:"httpcontext",title:"5.2 HttpContext",sidebar_label:"5.2 HttpContext"},i=void 0,p={unversionedId:"httpcontext",id:"httpcontext",title:"5.2 HttpContext",description:"5.2.1 \u5173\u4e8e HttpContext",source:"@site/docs/httpcontext.mdx",sourceDirName:".",slug:"/httpcontext",permalink:"/touchsocket/docs/httpcontext",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/httpcontext.mdx",tags:[],version:"current",frontMatter:{id:"httpcontext",title:"5.2 HttpContext",sidebar_label:"5.2 HttpContext"},sidebar:"docs",previous:{title:"5.1 \u52a8\u6001 WebAPI",permalink:"/touchsocket/docs/dynamic-api-controller"},next:{title:"5.3 \u7b5b\u9009\u5668/\u62e6\u622a\u5668/\u8fc7\u6ee4\u5668/AOP",permalink:"/touchsocket/docs/filter"}},l={},s=[{value:"5.2.1 \u5173\u4e8e <code>HttpContext</code>",id:"521-\u5173\u4e8e-httpcontext",level:2},{value:"5.2.2 \u83b7\u53d6 <code>HttpContext</code>",id:"522-\u83b7\u53d6-httpcontext",level:2},{value:"5.2.2.1 \u5728 <code>ControllerBase</code> \u6d3e\u751f\u7c7b\u4e2d",id:"5221-\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d",level:3},{value:"5.2.2.2 \u6ce8\u5165 <code>IHttpContextAccessor</code>",id:"5222-\u6ce8\u5165-ihttpcontextaccessor",level:3},{value:"5.2.2.3 \u901a\u8fc7 <code>App.HttpContext</code>",id:"5223-\u901a\u8fc7-apphttpcontext",level:3},{value:"5.2.3 <code>HttpContext</code> \u62d3\u5c55\u65b9\u6cd5",id:"523-httpcontext-\u62d3\u5c55\u65b9\u6cd5",level:2},{value:"5.2.3.1 \u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027 <code>Attribute</code>",id:"5231-\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027-attribute",level:3},{value:"5.2.3.2 \u8bbe\u7f6e <code>Swagger</code> \u81ea\u52a8\u6388\u6743",id:"5232-\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743",level:3},{value:"5.2.3.3 \u9000\u51fa <code>Swagger</code> \u6388\u6743",id:"5233-\u9000\u51fa-swagger-\u6388\u6743",level:3},{value:"5.2.3.4 \u83b7\u53d6\u672c\u5730 IP \u5730\u5740",id:"5234-\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740",level:3},{value:"5.2.3.5 \u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740",id:"5235-\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740",level:3},{value:"5.2.3.6 \u8bbe\u7f6e\u54cd\u5e94\u5934 <code>Token</code>",id:"5236-\u8bbe\u7f6e\u54cd\u5e94\u5934-token",level:3},{value:"5.2.4 \u8bfb\u53d6 <code>Body</code> \u5185\u5bb9\uff08\u91cd\u590d\u8bfb\uff09",id:"524-\u8bfb\u53d6-body-\u5185\u5bb9\u91cd\u590d\u8bfb",level:2},{value:"5.2.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"525-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"521-\u5173\u4e8e-httpcontext"},"5.2.1 \u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"h2"},"HttpContext")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET")," \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u867d\u7136\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u65b9\u5f0f\u83b7\u53d6\u3002"),(0,o.kt)("h2",{id:"522-\u83b7\u53d6-httpcontext"},"5.2.2 \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"h2"},"HttpContext")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u591a\u79cd\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u7684\u65b9\u5f0f\u3002"),(0,o.kt)("h3",{id:"5221-\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d"},"5.2.2.1 \u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5c5e\u6027\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {5-6}",showLineNumbers:!0,"{5-6}":!0},"public class HomeController : Controller\n{\n    public IActionResult Index()\n    {\n        // \u5728\u8fd9\u91ccHttpContext \u662f Controller/ControllerBase \u5bf9\u8c61\u7684\u5c5e\u6027\n        var httpContext = HttpContext;\n\n        return View();\n    }\n}\n")),(0,o.kt)("h3",{id:"5222-\u6ce8\u5165-ihttpcontextaccessor"},"5.2.2.2 \u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"h3"},"IHttpContextAccessor")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u6ce8\u518c\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u670d\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8be5\u63a5\u53e3\u83b7\u53d6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,5}",showLineNumbers:!0,"":!0,"{3,5}":!0},"public class AppService\n{\n    public AppService(IHttpContextAccessor httpContextAccessor)\n    {\n        var httpContext = httpContextAccessor.HttpContext;\n    }\n}\n")),(0,o.kt)("h3",{id:"5223-\u901a\u8fc7-apphttpcontext"},"5.2.2.3 \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"h3"},"App.HttpContext")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"App")," \u9759\u6001\u7c7b\u4e5f\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"App.HttpContext")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var request = App.HttpContext.Request;\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u975e ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Web")," \u4e2d\u8bbf\u95ee"),(0,o.kt)("p",{parentName:"admonition"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Web")," \u5b8c\u6574\u7684\u751f\u547d\u5468\u671f\u5185\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"App.HttpContext")," \u90fd\u662f\u6709\u6548\u7684\uff0c\u4f46\u5728\u975e ",(0,o.kt)("inlineCode",{parentName:"p"},"Web")," \u4e2d\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u907f\u514d\u5728\u591a\u7ebf\u7a0b\uff0c\u4e8b\u4ef6\u603b\u7ebf\uff0c\u5b9a\u65f6\u4efb\u52a1\u7b49\u4e2d\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"523-httpcontext-\u62d3\u5c55\u65b9\u6cd5"},"5.2.3 ",(0,o.kt)("inlineCode",{parentName:"h2"},"HttpContext")," \u62d3\u5c55\u65b9\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u62d3\u5c55\u65b9\u6cd5\u3002"),(0,o.kt)("h3",{id:"5231-\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027-attribute"},"5.2.3.1 \u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Attribute")),(0,o.kt)("p",null,"\u4e0b\u5217\u4ee3\u7801\u901a\u5e38\u7528\u4e8e\u6388\u6743 ",(0,o.kt)("inlineCode",{parentName:"p"},"Handler")," \u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var attribute = httpContext.GetMetadata<SomeAttribute>();\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Middleware")," \u4e2d\u95f4\u4ef6\u83b7\u53d6\u7279\u6027\u65b9\u5f0f"),(0,o.kt)("p",{parentName:"admonition"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Middleware")," \u4e2d\u95f4\u4ef6\u4e2d\u83b7\u53d6\u6709\u6240\u533a\u522b\uff0c\u4e3b\u8981\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Features")," \u83b7\u53d6\uff0c\u5982\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var endpointFeature = httpContext.Features.Get<IEndpointFeature>();\nvar attribute =  endpointFeature?.Endpoint?.Metadata?.GetMetadata<SomeAttribute>();\n"))),(0,o.kt)("h3",{id:"5232-\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743"},"5.2.3.2 \u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"h3"},"Swagger")," \u81ea\u52a8\u6388\u6743"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Swagger")," \u9ed8\u8ba4\u4e0d\u80fd\u8bb0\u4f4f\u6388\u6743\u4fe1\u606f\uff0c\u4e00\u65e6\u5237\u65b0\u6d4f\u89c8\u5668\u5c31\u81ea\u52a8\u6e05\u7a7a"),"\uff0c\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u8be5\u62d3\u5c55\uff0c\u5373\u4f7f\u5237\u65b0\u6d4f\u89c8\u5668\u4e5f\u80fd\u4fdd\u6301\u6388\u6743\u72b6\u6001\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {4-5}",showLineNumbers:!0,"{4-5}":!0},'// \u68c0\u67e5\u7528\u6237\u767b\u5f55\u548c\u751f\u6210 token \u4ee3\u7801...\n// .....\n\n// \u4e4b\u540e\u8c03\u7528\u8be5\u62d3\u5c55\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0 Swagger \u5237\u65b0\u4e5f\u80fd\u8bb0\u4f4f\u767b\u5f55\u4e86\nhttpContext.SigninToSwagger("\u4f60\u7684token");\n')),(0,o.kt)("h3",{id:"5233-\u9000\u51fa-swagger-\u6388\u6743"},"5.2.3.3 \u9000\u51fa ",(0,o.kt)("inlineCode",{parentName:"h3"},"Swagger")," \u6388\u6743"),(0,o.kt)("p",null,"\u901a\u8fc7\u540e\u7aef\u4ee3\u7801\u5f3a\u5236\u6027\u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Swagger")," \u6388\u6743\u5b9e\u73b0\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u53ea\u9488\u5bf9\u4e0b\u4e00\u6b21\u8bf7\u6c42\u6709\u6548\uff01")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"httpContext.SignoutToSwagger();\n")),(0,o.kt)("h3",{id:"5234-\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740"},"5.2.3.4 \u83b7\u53d6\u672c\u5730 IP \u5730\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ipv4\nvar ipv4 = httpContext.GetLocalIpAddressToIPv4();\n\n// ipv6\nvar ipv6 = httpContext.GetLocalIpAddressToIPv6();\n")),(0,o.kt)("h3",{id:"5235-\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740"},"5.2.3.5 \u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ipv4\nvar ipv4 = httpContext.GetRemoteIpAddressToIPv4();\n\n// ipv6\nvar ipv6 = httpContext.GetRemoteIpAddressToIPv6();\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Nginx")," \u65e0\u6cd5\u83b7\u53d6\u6b63\u786e\u5ba2\u6237\u7aef ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"IP")," \u95ee\u9898"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u670d\u52a1\u5668\u7aef\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx")," \u7b49\u53cd\u5411\u4ee3\u7406\u5de5\u5177\uff0c\u53ef\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\u914d\u7f6e\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Startup.cs" {1-4,6-7}',showLineNumbers:!0,title:'"Startup.cs"',"{1-4,6-7}":!0},"services.Configure<ForwardedHeadersOptions>(options =>\n{\n    options.ForwardedHeaders = ForwardedHeaders.All;\n});\n\n// \u6ce8\u610f\u5728 Configure \u6700\u524d\u9762\u914d\u7f6e\napp.UseForwardedHeaders();\n"))),(0,o.kt)("h3",{id:"5236-\u8bbe\u7f6e\u54cd\u5e94\u5934-token"},"5.2.3.6 \u8bbe\u7f6e\u54cd\u5e94\u5934 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'httpContext.SetTokensOfResponseHeaders("token", "\u5237\u65b0token");\n')),(0,o.kt)("h2",{id:"524-\u8bfb\u53d6-body-\u5185\u5bb9\u91cd\u590d\u8bfb"},"5.2.4 \u8bfb\u53d6 ",(0,o.kt)("inlineCode",{parentName:"h2"},"Body")," \u5185\u5bb9\uff08\u91cd\u590d\u8bfb\uff09"),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 4.7.9 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e0d\u652f\u6301\u91cd\u590d\u8bfb\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"Body")," \u5185\u5bb9\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u62d3\u5c55\u65b9\u6cd5\uff0c\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Startup.cs")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Configure")," \u542f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Body")," \u91cd\u590d\u8bfb\u529f\u80fd"),"\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".NET5")," \u7248\u672c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,4}",showLineNumbers:!0,"{1,4}":!0},"public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n{\n    // ...\n    app.EnableBuffering();\n    app.UseRouting();\n    // ....\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".NET6+")," \u7248\u672c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {7}",showLineNumbers:!0,"{7}":!0},"var builder = WebApplication.CreateBuilder(args).Inject();\n// ...\nvar app = builder.Build();\n// ...\napp.UseInject();\n\napp.EnableBuffering();\napp.MapControllers();\n\napp.Run();\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"app.EnableBuffering()")," \u5fc5\u987b\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.UseRouting()")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.MapControllers()")," \u4e4b\u524d\u6ce8\u518c\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"HttpContext")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"strong"},"HttpRequest")," \u62d3\u5c55 ",(0,o.kt)("inlineCode",{parentName:"strong"},".ReadBodyContentAsync()")," \u5373\u53ef"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2,5}",showLineNumbers:!0,"{2,5}":!0},"// HttpContext \u62d3\u5c55\nvar body = await httpContext.ReadBodyContentAsync();\n\n// HttpRequest \u62d3\u5c55\nvar body = await httpContext.Request.ReadBodyContentAsync();\n")),(0,o.kt)("h2",{id:"525-\u53cd\u9988\u4e0e\u5efa\u8bae"},"5.2.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}m.isMDXComponent=!0}}]);