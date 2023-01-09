"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));n(4996);const i={slug:"console",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]},a=void 0,l={permalink:"/touchsocket/blog/console",editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/blog/2021-07-24-console.mdx",source:"@site/blog/2021-07-24-console.mdx",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",description:"Furion \u4ece v2.15.3+ \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5168\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\uff0c\u5305\u62ec Web\uff0c\u63a7\u5236\u53f0\uff0cWinForm\uff0cWPF\uff0cXamarin/MAUI \u7b49\u3002",date:"2021-07-24T00:00:00.000Z",formattedDate:"July 24, 2021",tags:[{label:"furion",permalink:"/touchsocket/blog/tags/furion"},{label:"furos",permalink:"/touchsocket/blog/tags/furos"},{label:".net",permalink:"/touchsocket/blog/tags/net"},{label:".netcore",permalink:"/touchsocket/blog/tags/netcore"},{label:".net5",permalink:"/touchsocket/blog/tags/net-5"},{label:".net6",permalink:"/touchsocket/blog/tags/net-6"}],readingTime:.84,hasTruncateMarker:!1,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://www.chinadot.net",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"console",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]},prevItem:{title:"6. .NET 6 Preview 7 \u5c1d\u9c9c",permalink:"/touchsocket/blog/net6-preview7"},nextItem:{title:"4. .NET 6 Preview 6 \u5c1d\u9c9c",permalink:"/touchsocket/blog/net6-preview6"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.15.3+")," \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5168\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\uff0c\u5305\u62ec ",(0,o.kt)("inlineCode",{parentName:"p"},"Web"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53f0"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"WinForm"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"WPF"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Xamarin/MAUI")," \u7b49\u3002"),(0,o.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'using Furion;\nusing Furion.DependencyInjection;\nusing Furion.RemoteRequest.Extensions;\nusing Microsoft.Extensions.DependencyInjection;\nusing System;\n\nnamespace ConsoleApp1\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u5bb9\u5668\n            var services = Inject.Create();\n            // \u6ce8\u518c\u670d\u52a1\n            services.AddRemoteRequest();\n            // \u6240\u6709\u670d\u52a1\u6ce8\u518c\u5b8c\u6bd5\u540e\u8c03\u7528 Build() \u6784\u5efa\n            services.Build();\n\n            // \u4f7f\u7528\n            var helloService = App.GetService<IHelloService>();\n            Console.WriteLine(helloService.SayHello());\n\n            Console.WriteLine("=============");\n\n            var baidu = "https://www.baidu.com".GetAsStringAsync().GetAwaiter().GetResult();\n            Console.WriteLine(baidu);\n        }\n    }\n\n    public interface IHelloService\n    {\n        string SayHello();\n    }\n    public class HelloService : IHelloService, ITransient\n    {\n        public string SayHello()\n        {\n            return "Hello Furion.";\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"var services = Inject.Create();")," \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u96c6\u5408\uff0c\u6700\u540e\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"services.Build()")," \u5373\u53ef\u5b8c\u6210\u521d\u59cb\u5316\u3002"))}p.isMDXComponent=!0}}]);