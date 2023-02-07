"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),k=a,g=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(g,c(c({ref:t},s),{},{components:n})):r.createElement(g,c({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={id:"createtouchrpcservice",title:"\u521b\u5efaTouchRpc\u670d\u52a1\u5668"},c=void 0,l={unversionedId:"createtouchrpcservice",id:"createtouchrpcservice",title:"\u521b\u5efaTouchRpc\u670d\u52a1\u5668",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/createtouchrpcservice.mdx",sourceDirName:".",slug:"/createtouchrpcservice",permalink:"/touchsocket/docs/createtouchrpcservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/createtouchrpcservice.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675660193,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"createtouchrpcservice",title:"\u521b\u5efaTouchRpc\u670d\u52a1\u5668"},sidebar:"docs",previous:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/touchrpcdescription"},next:{title:"\u521b\u5efaTouchRpc\u5ba2\u6237\u7aef",permalink:"/touchsocket/docs/createtouchrpcclient"}},p={},i=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u670d\u52a1\u5668\u67b6\u6784",id:"\u4e8c\u670d\u52a1\u5668\u67b6\u6784",level:2},{value:"\u4e09\u3001\u53ef\u914d\u7f6e\u9879",id:"\u4e09\u53ef\u914d\u7f6e\u9879",level:2},{value:"SetVerifyTimeout",id:"setverifytimeout",level:4},{value:"SetVerifyToken",id:"setverifytoken",level:4},{value:"SetHeartbeatFrequency",id:"setheartbeatfrequency",level:4},{value:"SetSerializationSelector",id:"setserializationselector",level:4},{value:"SetResponseType",id:"setresponsetype",level:4},{value:"SetRootPath",id:"setrootpath",level:4},{value:"\u56db\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u56db\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"\u4e94\u3001\u521b\u5efa\u670d\u52a1\u5668",id:"\u4e94\u521b\u5efa\u670d\u52a1\u5668",level:2},{value:"5.1 \u57fa\u4e8eTcp\u534f\u8bae",id:"51-\u57fa\u4e8etcp\u534f\u8bae",level:3},{value:"5.2 \u57fa\u4e8eHttp\u534f\u8bae",id:"52-\u57fa\u4e8ehttp\u534f\u8bae",level:3},{value:"5.3 \u57fa\u4e8eUdp\u534f\u8bae",id:"53-\u57fa\u4e8eudp\u534f\u8bae",level:3},{value:"5.4 \u57fa\u4e8eAspNetCore\u7684Websocket\u534f\u8bae",id:"54-\u57fa\u4e8easpnetcore\u7684websocket\u534f\u8bae",level:3}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"TouchRpc\u7684\u670d\u52a1\u5668\u6709\u591a\u79cd\u5f62\u5f0f\u7684host\uff0c\u6bcf\u79cd\u670d\u52a1\u5668\u7684\u521b\u5efa\u90fd\u5927\u540c\u5c0f\u5f02\uff0c\u4e14\u529f\u80fd\u57fa\u672c\u4e00\u81f4\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u670d\u52a1\u5668\u67b6\u6784"},"\u4e8c\u3001\u670d\u52a1\u5668\u67b6\u6784"),(0,a.kt)("p",null,"TouchRpc\u670d\u52a1\u5668\u7684\u67b6\u6784\u4e0e\u5176\u6240\u5c5e\u7684\u57fa\u7840\u534f\u8bae\u67b6\u6784\u4e00\u81f4\uff0c\u4f8b\u5982\uff0c\u5728\u57fa\u4e8etcp\u534f\u8bae\u65f6\uff0c\u5176\u67b6\u6784\u5c31\u548ctcp\u670d\u52a1\u5668\u4e00\u81f4\u3002\u5728\u6536\u5230",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u5ba2\u6237\u7aef\u8fde\u63a5"),"\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"TcpTouchRpcSocketClient"),"\u7684\u7c7b\u5b9e\u4f8b\uff0c\u4e0e",(0,a.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aefTcpTouchRpcClient"),"\u4e00\u4e00\u5bf9\u5e94\uff0c\u540e\u7eed\u7684\u6570\u636e\u901a\u4fe1\u5747\u7531\u6b64\u5b9e\u4f8b\u8d1f\u8d23\u3002"),(0,a.kt)("h2",{id:"\u4e09\u53ef\u914d\u7f6e\u9879"},"\u4e09\u3001\u53ef\u914d\u7f6e\u9879"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u53ef\u914d\u7f6e\u9879"),(0,a.kt)("div",null,(0,a.kt)("h4",{id:"setverifytimeout"},"SetVerifyTimeout"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u9a8c\u8bc1\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba43000ms\u3002\uff08\u4ec5TcpTouchRpc\u53ef\u7528\uff09 \u3002"),(0,a.kt)("h4",{id:"setverifytoken"},"SetVerifyToken"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u9a8c\u8bc1\u53e3\u4ee4\u3002 "),(0,a.kt)("h4",{id:"setheartbeatfrequency"},"SetHeartbeatFrequency"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5fc3\u8df3\u3002\u9ed8\u8ba4\u4e3a\u95f4\u96942000ms\uff0c\u8fde\u7eed3\u6b21\u65e0\u54cd\u5e94\u5373\u89c6\u4e3a\u65ad\u5f00\u3002"),(0,a.kt)("h4",{id:"setserializationselector"},"SetSerializationSelector"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5e8f\u5217\u5316\u9009\u62e9\u5668\u3002"),(0,a.kt)("h4",{id:"setresponsetype"},"SetResponseType"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5141\u8bb8\u7684\u54cd\u5e94\u7c7b\u578b"),(0,a.kt)("h4",{id:"setrootpath"},"SetRootPath"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6839\u8def\u5f84"))),(0,a.kt)("h2",{id:"\u56db\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u56db\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,a.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,a.kt)("strong",{parentName:"p"},"ITouchRpcPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\n\u6216\u8005\u7ee7\u627f\u81ea",(0,a.kt)("strong",{parentName:"p"},"TouchRpcPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u65b9\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnHandshaking"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5728\u9a8c\u8bc1\u8fde\u63a5\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6846\u67b6\u4f1a\u9996\u5148\u9a8c\u8bc1\u8fde\u63a5Token\u662f\u5426\u6b63\u786e\uff0c\u5982\u679c\u4e0d\u6b63\u786e\u5219\u76f4\u63a5\u62d2\u7edd\u3002\u4e0d\u4f1a\u6709\u4efb\u4f55\u6295\u9012\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528Metadata\u8fdb\u884c\u52a8\u6001\u9a8c\u8bc1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnHandshaked"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5b8c\u6210\u8fde\u63a5\u9a8c\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnFileTransfering"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u6587\u4ef6\u4f20\u8f93\u5373\u5c06\u8fdb\u884c\u65f6\u89e6\u53d1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnFileTransfered"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u6587\u4ef6\u4f20\u8f93\u7ed3\u675f\u4e4b\u540e\u3002\u5e76\u4e0d\u610f\u5473\u7740\u5b8c\u6210\u4f20\u8f93\uff0c\u8bf7\u901a\u8fc7e.Result\u5c5e\u6027\u503c\u8fdb\u884c\u5224\u65ad\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnLoadingStream"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u8fdc\u7a0b\u8bf7\u6c42\u52a0\u8f7d\u6d41\u65f6\u89e6\u53d1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnReceivedProtocolData"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6536\u5230\u534f\u8bae\u6570\u636e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnRemoteAccessing"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u8fdc\u7a0b\u64cd\u4f5c\u8bbf\u95ee\u4e4b\u524d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnRemoteAccessed"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u8fdc\u7a0b\u64cd\u4f5c\u8bbf\u95ee\u4e4b\u540e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnRouting"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u9700\u8981\u8f6c\u53d1\u8def\u7531\u5305\u65f6\u3002\u4e00\u822c\u6240\u6709\u7684",(0,a.kt)("strong",{parentName:"td"},"\u5ba2\u6237\u7aef\u4e4b\u95f4"),"\u7684\u6570\u636e\u4f20\u8f93\uff0c\u90fd\u9700\u8981\u7ecf\u8fc7\u8be5\u51fd\u6570\u7684\u8fd0\u884c\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnStreamTransfering"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5373\u5c06\u63a5\u6536\u6d41\u6570\u636e\uff0c\u7528\u6237\u9700\u8981\u5728\u6b64\u4e8b\u4ef6\u4e2d\u5bf9e.Bucket\u521d\u59cb\u5316\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnStreamTransfered"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d41\u6570\u636e\u5904\u7406\uff0c\u7528\u6237\u9700\u8981\u5728\u6b64\u4e8b\u4ef6\u4e2d\u5bf9e.Bucket\u624b\u52a8\u91ca\u653e\u3002 \u5f53\u6d41\u6570\u636e\u4f20\u8f93\u7ed3\u675f\u4e4b\u540e\u3002\u5e76\u4e0d\u610f\u5473\u7740\u5b8c\u6210\u4f20\u8f93\uff0c\u8bf7\u901a\u8fc7e.Result\u5c5e\u6027\u503c\u8fdb\u884c\u5224\u65ad\u3002")))),(0,a.kt)("h2",{id:"\u4e94\u521b\u5efa\u670d\u52a1\u5668"},"\u4e94\u3001\u521b\u5efa\u670d\u52a1\u5668"),(0,a.kt)("h3",{id:"51-\u57fa\u4e8etcp\u534f\u8bae"},"5.1 \u57fa\u4e8eTcp\u534f\u8bae"),(0,a.kt)("p",null,"\u8fd9\u662f\u57fa\u4e8eTcp\u534f\u8baeTouchRpc\u3002\u5728\u53ef\u914d\u7f6eTouchRpc\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u8fd8\u53ef\u4ee5\u914d\u7f6e\u4e0e",(0,a.kt)("a",{parentName:"p",href:"/touchsocket/docs/createtcpservice#%E5%8F%AF%E9%85%8D%E7%BD%AE%E9%A1%B9"},"TcpService\u53ef\u914d\u7f6e\u9879"),"\u76f8\u5173\u7684\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new TcpTouchRpcService();\nvar config = new TouchSocketConfig()//\u914d\u7f6e\n       .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n       .ConfigureContainer(a =>\n       {\n           a.AddConsoleLogger();\n           a.AddFileLogger();\n       })\n       .SetVerifyToken("TouchRpc");//\u8bbe\u5b9a\u8fde\u63a5\u53e3\u4ee4\uff0c\u4f5c\u7528\u7c7b\u4f3c\u8d26\u53f7\u5bc6\u7801\n\nservice.Setup(config)\n    .Start();\n\nservice.Logger.Info($"{service.GetType().Name}\u5df2\u542f\u52a8");\n')),(0,a.kt)("h3",{id:"52-\u57fa\u4e8ehttp\u534f\u8bae"},"5.2 \u57fa\u4e8eHttp\u534f\u8bae"),(0,a.kt)("p",null,"\u8fd9\u662f\u57fa\u4e8eHttp\u5347\u7ea7\u534f\u8bae\u3002\u5728\u8be5\u89e3\u6790\u5668\u4e2d\uff0c\u914d\u7f6e\u8bbe\u7f6e",(0,a.kt)("a",{parentName:"p",href:"/touchsocket/docs/createhttpservice"},"HttpService"),"\u4e00\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpTouchRpcService();\nTouchSocketConfig config = new TouchSocketConfig()//\u914d\u7f6e\n       .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n       .ConfigureContainer(a =>\n       {\n           a.AddConsoleLogger();\n           a.AddFileLogger();\n       })\n       .SetVerifyToken("TouchRpc");\n\nservice.Setup(config)\n    .Start();\n\nservice.Logger.Info($"{service.GetType().Name}\u5df2\u542f\u52a8");\n')),(0,a.kt)("h3",{id:"53-\u57fa\u4e8eudp\u534f\u8bae"},"5.3 \u57fa\u4e8eUdp\u534f\u8bae"),(0,a.kt)("p",null,"\u8fd9\u662f\u57fa\u4e8eUDP\u534f\u8bae\u89e3\u6790\u5668\u3002\u5728\u8be5\u89e3\u6790\u5668\u4e2d\uff0c\u914d\u7f6e\u8bbe\u7f6e\u4e0e",(0,a.kt)("a",{parentName:"p",href:"/touchsocket/docs/createudpsession"},"UdpSession"),"\u4e00\u81f4\u3002\u56e0\u4e3audp\u662f\u65e0\u8fde\u63a5\u7684\uff0c\u6240\u4ee5\u4e0d\u9700\u8981SetVerifyToken\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new UdpTouchRpc();\nTouchSocketConfig config = new TouchSocketConfig()//\u914d\u7f6e\n       .SetBindIPHost(new IPHost(7789))\n       .ConfigureContainer(a =>\n       {\n           a.AddConsoleLogger();\n           a.AddFileLogger();\n       });\n\nservice.Setup(config)\n    .Start();\n\nservice.Logger.Info($"{service.GetType().Name}\u5df2\u542f\u52a8");\n')),(0,a.kt)("h3",{id:"54-\u57fa\u4e8easpnetcore\u7684websocket\u534f\u8bae"},"5.4 \u57fa\u4e8eAspNetCore\u7684Websocket\u534f\u8bae"),(0,a.kt)("p",null,"\u5177\u4f53\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"nuget \u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"li"},"TouchSocket.AspNetCore"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"li"},"TouchSocketPro.AspNetCore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"IServiceCollection\u6dfb\u52a0AddWSTouchRpc\uff0c\u5e76\u8fdb\u884c\u76f8\u5173\u914d\u7f6e\uff08\u4e0d\u7528\u914d\u7f6e\u7aef\u53e3\uff0c\u4f1a\u548casp\u4f7f\u7528\u540c\u4e00\u7aef\u53e3\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"IApplicationBuilder\u5fc5\u987b\u5148\u4f7f\u7528UseWebSockets\u3002"),(0,a.kt)("li",{parentName:"ol"},"IApplicationBuilder\u8c03\u7528UseWSTouchRpc\uff0c\u5e76\u4f20\u5165url\u8bbe\u7f6e\u3002")),(0,a.kt)("p",null,"\u5728ConfigureServices\u65f6\uff0c\u6dfb\u52a0AddWSTouchRpc\uff0c\u5e76\u4e14\u914d\u7f6e\u76f8\u5173\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public void ConfigureServices(IServiceCollection services)\n{\n    //\u5411Asp\u670d\u52a1\u4e2d\u6dfb\u52a0IWSTouchRpcService\n    services.AddWSTouchRpc(new TouchSocketConfig()\n        .UseAspNetCoreContainer(services));//\u8bbe\u7f6eIOC\u5bb9\u5668\n\n    services.AddControllers();\n\n    services.AddSwaggerGen(c =>\n    {\n        c.SwaggerDoc("v1", new OpenApiInfo { Title = "API Demo", Version = "v1" });\n    });\n}\n')),(0,a.kt)("p",null,"\u542f\u7528\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\u5fc5\u987b\u542f\u7528WebSocket\u3002\u5176\u6b21\u4f7f\u7528UseWSTouchRpc\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},' public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n {\n\n     if (env.IsDevelopment())\n     {\n         app.UseDeveloperExceptionPage();\n     }\n\n     // Swagger\n     app.UseSwagger();\n     app.UseSwaggerUI(c =>\n     {\n         c.SwaggerEndpoint("/swagger/v1/swagger.json", "API Demo v1");\n     });\n\n\n     app.UseWebSockets();//\u5fc5\u987b\u5148\u4f7f\u7528WebSocket\n     app.UseWSTouchRpc("/wstouchrpc");//\u8be5\u64cd\u4f5c\u4e0d\u4f1a\u5f71\u54cd\u539f\u6709\u7684WebSocket\uff0c\u53ea\u8981url\u4e0d\u540c\u5373\u53ef\u3002\n\n     app.UseRouting();\n\n     app.UseAuthorization();\n\n     app.UseEndpoints(endpoints =>\n     {\n         endpoints.MapControllers();\n     });\n }\n')))}u.isMDXComponent=!0}}]);