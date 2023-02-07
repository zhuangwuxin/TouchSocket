"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[1965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,k=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={id:"transferfile",title:"\u4f20\u8f93\u6587\u4ef6"},o=void 0,i={unversionedId:"transferfile",id:"transferfile",title:"\u4f20\u8f93\u6587\u4ef6",description:"\u6f14\u793a\uff1a \u53ef\u4ee5\u770b\u5230\uff0c\u4e0b\u56fe\u6b63\u5728\u4e0a\u4f20\u4e00\u4e2aWindow\u7684\u7cfb\u7edf\u955c\u50cf\u6587\u4ef6\uff0c\u5927\u7ea64.2Gb\uff0c\u4f20\u8f93\u901f\u5ea6\u5df2\u8fbe\u5230800Mb/s\uff0cGC\u57fa\u672c\u4e0a\u6ca1\u6709\u91ca\u653e\uff0c\u6027\u80fd\u975e\u5e38\u5f3a\u608d\uff08\u4e2d\u95f4\u6709\u7a0d\u5fae\u505c\u987f\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u5728\u83b7\u53d6\u6587\u4ef6MD5\u503c\uff09\u3002",source:"@site/docs/transferfile.mdx",sourceDirName:".",slug:"/transferfile",permalink:"/touchsocket/docs/transferfile",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/transferfile.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675566039,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{id:"transferfile",title:"\u4f20\u8f93\u6587\u4ef6"},sidebar:"docs",previous:{title:"\u751f\u6210\u3001\u83b7\u53d6\u4ee3\u7406",permalink:"/touchsocket/docs/generateproxy"},next:{title:"\u5c0f\u6587\u4ef6\u4f20\u8f93",permalink:"/touchsocket/docs/smallfiletransfer"}},p={},c=[{value:"\u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:2},{value:"\u670d\u52a1\u67b6\u6784",id:"\u670d\u52a1\u67b6\u6784",level:2},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001Pull\u6587\u4ef6",id:"\u4e8cpull\u6587\u4ef6",level:2},{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u4e09\u3001Push\u6587\u4ef6",id:"\u4e09push\u6587\u4ef6",level:2},{value:"\u56db\u3001\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6",id:"\u56db\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f14\u793a\uff1a")," \u53ef\u4ee5\u770b\u5230\uff0c\u4e0b\u56fe\u6b63\u5728\u4e0a\u4f20\u4e00\u4e2aWindow\u7684\u7cfb\u7edf\u955c\u50cf\u6587\u4ef6\uff0c\u5927\u7ea64.2Gb\uff0c\u4f20\u8f93\u901f\u5ea6\u5df2\u8fbe\u5230800Mb/s\uff0cGC\u57fa\u672c\u4e0a\u6ca1\u6709\u91ca\u653e\uff0c\u6027\u80fd\u975e\u5e38\u5f3a\u608d\uff08\u4e2d\u95f4\u6709\u7a0d\u5fae\u505c\u987f\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u5728\u83b7\u53d6\u6587\u4ef6MD5\u503c\uff09\u3002"),(0,a.kt)("a",{name:"h6l2a"}),(0,a.kt)("h2",{id:"\u4ea7\u54c1\u5e94\u7528\u573a\u666f"},"\u4ea7\u54c1\u5e94\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e38\u89c4C/S\u5e94\u7528\u4f7f\u7528\u573a\u666f\uff1a\u5f00\u53d1\u4f7f\u7528\u975e\u5e38\u65b9\u4fbf\uff0c\u8fde\u63a5\u9a8c\u8bc1\uff0c\u6570\u636e\u4e1a\u52a1\uff0c\u6587\u4ef6\u4f20\u8f93\u7b49\u4e00\u7cfb\u5217\u529f\u80fd\u5b8c\u5168\u96c6\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"Unity\u6e38\u620f\u573a\u666f\uff1a\u6027\u80fd\u5353\u8d8a\uff0c\u529f\u80fd\u4e30\u5bcc\uff0c\u4f7f\u7528\u65b9\u4fbf\u3002 ",(0,a.kt)("a",{name:"h50Dz"}))),(0,a.kt)("h2",{id:"\u670d\u52a1\u67b6\u6784"},"\u670d\u52a1\u67b6\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5176\u4f20\u8f93\u67b6\u6784\u662f\u57fa\u4e8eChannel\u5de5\u4f5c\u7684\u3002\u6240\u4ee5\u5f53\u5728\u540c\u4e00\u65f6\u95f4\uff0c\u53ef\u8fdb\u884c\u591a\u4e2a\u4f20\u8f93\u5e76\u884c\uff0c\u4e14\u6570\u636e\u4e92\u4e0d\u5f71\u54cd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u6587\u4ef6\u4f20\u8f93\u65f6\uff0c\u6bcf\u4e2a\u8fde\u63a5\u7aef\u548c\u670d\u52a1\u5668\u5747\u662f\u5e73\u7b49\u6743\u5229\u7684\uff0c\u6240\u4ee5RRQM\u5c06\u5176\u547d\u540d\u4e3a\u5bf9\u70b9\u3002\u4efb\u610f\u4e24\u4e2a\u5bf9\u70b9\u4e4b\u95f4\u5747\u53efPull\uff08\u62c9\u53d6\u6216\u4e0b\u8f7d\uff09\u6216Push\uff08\u63a8\u9001\u6216\u4e0a\u4f20\uff09\u6587\u4ef6\uff0c\u4f8b\u5982\u4e0b\u56fe\u4e2d\uff0cClient1\u3001SocketClient1\u3001Client2\u3001SocketClient2\u56db\u4e2a\u4e92\u76f8\u4e3a\u5bf9\u70b9\uff0c\u5747\u53ef\u81ea\u7531\u4f20\u8f93\u6587\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u6587\u4ef6\u4f20\u8f93\u662f\u6bcf\u4e2a\u6846\u67b6\u90fd\u9700\u8981\u7684\u529f\u80fd\uff0c\u4e5f\u662f\u68c0\u9a8c\u4e00\u4e2a\u6846\u67b6\u6027\u80fd\u7684\u975e\u5e38\u91cd\u8981\u7684\u6307\u6807\u3002"),(0,a.kt)("p",null,"TouchRpc\u5f00\u8f9f\u4e86\u5bf9\u70b9\u6587\u4ef6\u4f20\u8f93\u3002\u5373\uff0c\u5f53\u5ba2\u6237\u7aef\u8fde\u63a5\u670d\u52a1\u5668\u4ee5\u540e\uff0c\u4e24\u8005\u53ef\u4ee5\u4efb\u610f\uff0c\u968f\u65f6\u7684\u4e92\u76f8\u53d1\u9001\u6587\u4ef6\u3002\u4e0d\u4ec5\u5982\u6b64\uff0c\u5373\u4f7f\u662f\u5ba2\u6237\u7aef\u4e4b\u95f4\uff0c\u53ef\u4ee5\u53d1\u9001\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\u4ec5\u6f14\u793a\u7531",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcClient"),"\u5230",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcService"),"\uff08\u5b9e\u9645\u4e0a\u662f",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcSocketClient"),"\uff09\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5bf9\u70b9\u4e4b\u95f4\u53ef\u4ee5\u4efb\u610fpull\uff08\u62c9\u53d6\uff09\u3001push\uff08\u63a8\u9001\uff09\u6587\u4ef6\u3002",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u6536\u5bf9\u70b9"),"\u53ef\u4ee5\u8ba2\u9605",(0,a.kt)("strong",{parentName:"p"},"FileTransfering"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"FileTransfered"),"\u4e8b\u4ef6\uff0c\u6765\u83b7\u53d6\u76f8\u5173\u4fe1\u606f\uff0c\u53d1\u8d77\u5bf9\u70b9\u76f4\u63a5\u901a\u8fc7\u4f20\u8f93\u63a7\u5236\u5668\u6216\u8fd4\u56de\u503c\u83b7\u53d6\u4f20\u8f93\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c",(0,a.kt)("strong",{parentName:"p"},"FileTransfered"),"\u4e8b\u4ef6\u7684\u89e6\u53d1\u5e76",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u610f\u5473\u7740\u5b8c\u6210\u4f20\u8f93"),"\uff0c\u5177\u4f53\u7ed3\u679c\u8fd8\u8981\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"Result"),"\u5c5e\u6027\u503c\u8fdb\u884c\u5224\u65ad\u3002 ",(0,a.kt)("a",{name:"sKmQe"})),(0,a.kt)("h2",{id:"\u4e8cpull\u6587\u4ef6"},"\u4e8c\u3001Pull\u6587\u4ef6"),(0,a.kt)("p",null,"\u7531",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcClient"),"\u5411",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcService"),"\u53d1\u8d77Pull\u8bf7\u6c42\u65f6\uff0c\u76f8\u5f53\u4e8e\u7531\u5ba2\u6237\u7aef\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6d41\u7a0b\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53d1\u8d77Pull\u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u6536\u5bf9\u70b9\uff08\u5373\u6b64\u5904\u7684\u670d\u52a1\u5668\uff09\u89e6\u53d1",(0,a.kt)("strong",{parentName:"li"},"FileTransfering"),"\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u6587\u4ef6\u4fe1\u606f\uff0c\u7136\u540e\u68c0\u9a8c\u662f\u5426\u7eed\u4f20\u7b49\uff0c\u7136\u540e\u5f00\u59cb\u63a5\u6536\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u6536\u5b8c\u6210\u6216\u5f02\u5e38\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u63a5\u6536\u5bf9\u70b9"),"\u89e6\u53d1",(0,a.kt)("strong",{parentName:"li"},"FileTransfered"),"\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u53d1\u8d77\u5bf9\u70b9"),"\u51fd\u6570\u8fd4\u56de\uff0c\u63a7\u5236\u5668\u72b6\u6001\u6539\u53d8\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5177\u4f53\u8bf7\u6c42\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570\u5c5e\u6027\u63cf\u8ff0")))),(0,a.kt)("p",null,"| ",(0,a.kt)("strong",{parentName:"p"},"FileOperator\uff1a"),"FileOperator\u662f\u672c\u6b21\u4f20\u8f93\u7684\u8bf7\u6c42\u64cd\u4f5c\u5668\uff0c\u4e3b\u8981\u7528\u4e8e\u83b7\u53d6\u4f20\u8f93\u8fdb\u5ea6\u3001\u901f\u5ea6\u3001\u72b6\u6001\u4ee5\u53ca\u53d6\u6d88\u4f20\u8f93\u7b49\u64cd\u4f5c\u3002",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u6536\u65b9\u7684\u63a7\u5236\u5668\u4eceFileTransfering\u4e8b\u4ef6\u7684\u53c2\u6570e\u4e2d\u83b7\u5f97\u3002")),(0,a.kt)("p",null,"| ResourcePath | ResourcePath\u5c5e\u6027\u4e3a\u8bf7\u6c42\u6587\u4ef6\u5728\u63a5\u6536\u5bf9\u70b9\u7684\u8def\u5f84\uff0c\u5f53\u8be5\u503c\u4e3a\u76f8\u5bf9\u8def\u5f84\u65f6\uff0c\u4f1a\u4e0e\u63a5\u6536\u5bf9\u70b9\u7684RootPath\u7ec4\u5408\u8def\u5f84\u3002\u5f53\u4e3a\u7edd\u5bf9\u8def\u5f84\u65f6\uff0c\u5219\u4f1a\u76f4\u63a5\u8bbf\u95ee\u8def\u5f84\u6587\u4ef6",(0,a.kt)("strong",{parentName:"p"},"\uff08\u6b64\u65f6\u5982\u679c\u4e0d\u5728\u5bf9\u70b9\u8bbe\u7f6e\u6761\u4ef6\uff0c\u5219\u6709\u53ef\u80fd\u4f1a\u6709\u6587\u4ef6\u5b89\u5168\u9690\u60a3\uff0c\u8bbe\u7f6e\u8be6\u60c5"),(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/eo2w71/rrqm/motlw5#zZBRq"},"\u94fe\u63a5"),(0,a.kt)("strong",{parentName:"p"},"\uff09"),"\u3002 |\n|  | SavePath | SavePath\u5c5e\u6027\u662f\u53d1\u8d77\u5bf9\u70b9\u672c\u5730\u7684\u4fdd\u5b58\u8def\u5f84\u3002 |\n|  | Flags | \u53ef\u901a\u8fc7\u53e0\u52a0\u4f4d\u57df\u7684\u5f62\u5f0f\uff0c\u5c1d\u8bd5\u65ad\u70b9\u7eed\u4f20\u3002 |\n|  | CompletedLength | \u5df2\u5b8c\u6210\u6d41\u957f\u5ea6\u3002 |\n|  | Speed \u51fd\u6570 | \u4ece\u4e0a\u6b21\u83b7\u53d6\u5230\u6b64\u6b21\u83b7\u5f97\u7684\u901f\u5ea6\u3002\u4e00\u822c\u8bf7\u6bcf\u79d2\u949f\u8c03\u7528\u4e00\u6b21\u83b7\u53d6\u901f\u5ea6\u503c\u3002 |\n|  | Progress | \u4f20\u8f93\u8fdb\u5ea6\uff0c\u8303\u56f40-1\u3002 |\n|  | Result | \u83b7\u53d6\u4f20\u8f93\u72b6\u6001\u4ee5\u53ca\u72b6\u6001\u4fe1\u606f\u3002\u5f53ResultCode\u4e3aDefault\u65f6\uff0c\u610f\u5473\u7740\u4f20\u8f93\u6b63\u5728\u8fdb\u884c\u3002 |\n|  | Token | CancellationToken\u7c7b\u578b\u7684\u53ef\u53d6\u6d88\u4ee4\u7bad\u3002 |\n|  | Metadata | string\u7c7b\u578b\u7684\u952e\u503c\u5bf9\uff0c\u7528\u4e8e\u548c\u63a5\u6536\u65b9\u4ea4\u4e92\u6570\u636e\u3002 |"),(0,a.kt)("a",{name:"JeQp8"}),(0,a.kt)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u3010\u670d\u52a1\u5668\u3011")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new TouchSocketConfig()//\u914d\u7f6e\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .UsePlugin()\n    .ConfigureContainer(a =>\n    {\n        a.AddConsoleLogger();\n        a.AddFileLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.Add<MyPlugin>();\n    })\n    .SetVerifyToken("File")//\u8fde\u63a5\u9a8c\u8bc1\u53e3\u4ee4\u3002\n    .BuildWithTcpTouchRpcService();//\u6b64\u5904build\u76f8\u5f53\u4e8enew TcpTouchRpcService\uff0c\u7136\u540eSetup\uff0c\u7136\u540eStart\u3002\nservice.Logger.Info("\u670d\u52a1\u5668\u6210\u529f\u542f\u52a8");\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'class MyPlugin : TouchRpcPluginBase<TcpTouchRpcSocketClient>\n{\n    protected override void OnFileTransfering(TcpTouchRpcSocketClient client, FileOperationEventArgs e)\n    {\n        e.IsPermitOperation = true;//\u8fd0\u884c\u64cd\u4f5c\n\n        //\u6709\u53ef\u80fd\u662f\u4e0a\u4f20\uff0c\u4e5f\u6709\u53ef\u80fd\u662f\u4e0b\u8f7d\n        client.Logger.Info($"\u6709\u5ba2\u6237\u7aef\u8bf7\u6c42\u4f20\u8f93\u6587\u4ef6\uff0cID={client.ID}\uff0c\u8bf7\u6c42\u7c7b\u578b={e.TransferType}\uff0c\u8bf7\u6c42\u6587\u4ef6\u540d={e.ResourcePath}");\n    }\n\n    protected override void OnFileTransfered(TcpTouchRpcSocketClient client, FileTransferStatusEventArgs e)\n    {\n        //\u4f20\u8f93\u7ed3\u675f\uff0c\u4f46\u662f\u4e0d\u4e00\u5b9a\u6210\u529f\uff0c\u9700\u8981\u4ecee.Result\u5224\u65ad\u72b6\u6001\u3002\n        client.Logger.Info($"\u5ba2\u6237\u7aef\u4f20\u8f93\u6587\u4ef6\u7ed3\u675f\uff0cID={client.ID}\uff0c\u8bf7\u6c42\u7c7b\u578b={e.TransferType}\uff0c\u6587\u4ef6\u540d={e.ResourcePath}\uff0c\u8bf7\u6c42\u72b6\u6001={e.Result}");\n    }\n\n    protected override void OnHandshaked(TcpTouchRpcSocketClient client, VerifyOptionEventArgs e)\n    {\n        client.Logger.Info($"\u6709\u5ba2\u6237\u7aef\u6210\u529f\u9a8c\u8bc1\uff0cID={client.ID}");\n    }\n\n    protected override void OnDisconnected(TcpTouchRpcSocketClient client, ClientDisconnectedEventArgs e)\n    {\n        client.Logger.Info($"\u6709\u5ba2\u6237\u7aef\u65ad\u5f00\uff0cID={client.ID}");\n        base.OnDisconnected(client, e);\n    }\n}\n')),(0,a.kt)("p",null,"\u3010\u5ba2\u6237\u7aef\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpTouchRpcClient client = new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7789")\n    .SetVerifyToken("File")\n    .UsePlugin()\n    .ConfigureContainer(a => \n    {\n        a.AddConsoleLogger();\n        a.AddFileLogger();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.UseTouchRpcHeartbeat<TcpTouchRpcClient>();\n    })\n    .BuildWithTcpTouchRpcClient();\n\nclient.Logger.Info("\u8fde\u63a5\u6210\u529f");\n\nMetadata metadata = new Metadata();//\u4f20\u9012\u5230\u670d\u52a1\u5668\u7684\u5143\u6570\u636e\nmetadata.Add("1", "1");\nmetadata.Add("2", "2");\n\nFileOperator fileOperator = new FileOperator()//\u5b9e\u4f8b\u5316\u672c\u6b21\u4f20\u8f93\u7684\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u83b7\u53d6\u4f20\u8f93\u8fdb\u5ea6\u3001\u901f\u5ea6\u3001\u72b6\u6001\u7b49\u3002\n{\n    Flags = TransferFlags.BreakpointResume,//\u5c1d\u8bd5\u65ad\u70b9\u7eed\u4f20\uff0c\u4f7f\u7528\u65ad\u70b9\u7eed\u4f20\u65f6\uff0c\u4f1a\u9a8c\u8bc1MD5\u503c\n    SavePath = $@"Windows.iso",//\u4fdd\u5b58\u8def\u5f84\n    ResourcePath = @"D:\\System\\Windows.iso",//\u8bf7\u6c42\u8def\u5f84\n    Metadata= metadata//\u4f20\u9012\u5230\u670d\u52a1\u5668\u7684\u5143\u6570\u636e\n};\n\nfileOperator.Timeout = TimeSpan.FromSeconds(60);//\u5f53\u4f20\u8f93\u5927\u6587\u4ef6\uff0c\u4e14\u542f\u7528\u65ad\u70b9\u7eed\u4f20\u65f6\uff0c\u670d\u52a1\u5668\u53ef\u80fd\u4f1a\u5148\u8ba1\u7b97MD5\uff0c\u800c\u5ef6\u65f6\u54cd\u5e94\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u3002\n\n//\u6b64\u5904\u7684\u4f5c\u7528\u76f8\u5f53\u4e8eTimer\uff0c\u5b9a\u65f6\u6bcf\u79d2\u8f93\u51fa\u5f53\u524d\u7684\u4f20\u8f93\u8fdb\u5ea6\u548c\u901f\u5ea6\u3002\nLoopAction loopAction = LoopAction.CreateLoopAction(-1, 1000, (loop) =>\n{\n    if (fileOperator.Result.ResultCode != ResultCode.Default)\n    {\n        loop.Dispose();\n    }\n\n    client.Logger.Info($"\u8fdb\u5ea6\uff1a{fileOperator.Progress}\uff0c\u901f\u5ea6\uff1a{fileOperator.Speed()}");\n});\n\nloopAction.RunAsync();\n\n\n\n//\u6b64\u65b9\u6cd5\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u4f20\u8f93\u7ed3\u675f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528PullFileAsync\nIResult result = client.PullFile(fileOperator);\n\nclient.Logger.Info(result.ToString());\n')),(0,a.kt)("a",{name:"qZvBF"}),(0,a.kt)("h2",{id:"\u4e09push\u6587\u4ef6"},"\u4e09\u3001Push\u6587\u4ef6"),(0,a.kt)("p",null,"Push\u548cPull\u64cd\u4f5c\u4e00\u81f4\uff0c\u4ec5\u9700\u8981\u5728\u6700\u540e\u8c03\u7528PushFile\u5373\u53ef\u3002"),(0,a.kt)("a",{name:"VRKlH"}),(0,a.kt)("h2",{id:"\u56db\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6"},"\u56db\u3001\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6"),(0,a.kt)("p",null,"\u8be5\u529f\u80fd\u652f\u6301\u5ba2\u6237\u7aef\u4e4b\u95f4\u4f20\u8f93\u6587\u4ef6\uff0c\u4f7f\u7528\u65b9\u6cd5\u57fa\u672c\u4e00\u81f4\uff0c\u53ea\u9700\u8981\u989d\u5916\u589e\u52a0\u76ee\u6807Id\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u4e5f\u9700\u8981\u540c\u610f\u8def\u7531\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u8be5\u65b9\u5f0f\u6587\u4ef6\u4f20\u8f93\u65f6\uff0c\u8fd8\u4f1a\u53d1\u8d77\u901a\u9053\u8def\u7531\uff0c\u6240\u4ee5\uff0c\u9700\u8981\u5141\u8bb8\u7684\u8def\u7531\u5e94\u8be5\u8fd8\u989d\u5916\u589e\u52a0",(0,a.kt)("strong",{parentName:"p"},"\u901a\u9053\u7c7b\u578b"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"internal class MyTouchRpcPlugin : TouchRpcPluginBase\n{\n    protected override void OnRouting(ITouchRpc client, PackageRouterEventArgs e)\n    {\n        if (e.RouterType== RouteType.PushFile||e.RouterType== RouteType.PullFile||e.RouterType== RouteType.CreateChannel)\n        {\n            e.IsPermitOperation = true;\n        }\n        base.OnRouting(client, e);\n    }\n}\n")))}u.isMDXComponent=!0}}]);