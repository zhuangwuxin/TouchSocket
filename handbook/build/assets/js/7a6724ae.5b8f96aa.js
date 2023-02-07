"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4456],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),a=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=a(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},j=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),j=a(t),k=r,d=j["".concat(p,".").concat(k)]||j[k]||u[k]||c;return t?o.createElement(d,s(s({ref:n},i),{},{components:t})):o.createElement(d,s({ref:n},i))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,s=new Array(c);s[0]=j;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var a=2;a<c;a++)s[a]=t[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}j.displayName="MDXCreateElement"},8759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var o=t(7462),r=(t(7294),t(3905));const c={id:"calljsonrpc",title:"\u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1"},s=void 0,l={unversionedId:"calljsonrpc",id:"calljsonrpc",title:"\u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1",description:"\u4e00\u3001\u76f4\u63a5\u8c03\u7528",source:"@site/docs/calljsonrpc.mdx",sourceDirName:".",slug:"/calljsonrpc",permalink:"/touchsocket/docs/calljsonrpc",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/calljsonrpc.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675566039,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{id:"calljsonrpc",title:"\u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1"},sidebar:"docs",previous:{title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1",permalink:"/touchsocket/docs/jsonrpcservice"},next:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/xmlrpcdescription"}},p={},a=[{value:"\u4e00\u3001\u76f4\u63a5\u8c03\u7528",id:"\u4e00\u76f4\u63a5\u8c03\u7528",level:2},{value:"\u4e8c\u3001\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528",id:"\u4e8c\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528",level:2},{value:"\u4ee3\u7406\u8c03\u7528RPC",id:"\u4ee3\u7406\u8c03\u7528rpc",level:2},{value:"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6\uff1f",id:"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6",level:3},{value:"\u8c03\u7528",id:"\u8c03\u7528",level:3}],i={toc:a};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u76f4\u63a5\u8c03\u7528"},"\u4e00\u3001\u76f4\u63a5\u8c03\u7528"),(0,r.kt)("p",null,"\u56e0\u4e3aJsonRpc\u662f\u901a\u7528\u8c03\u7528\u534f\u8bae\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528Json\u5b57\u7b26\u4e32\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5b57\u7b26\u4e32\u53ea\u662f\u793a\u4f8b\uff0c\u5177\u4f53\u7684method\u53c2\u6570\uff0c\u5e94\u5f53\u9075\u5faa\u5f53\u524d\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u3010Tcp\u534f\u8bae\u76f4\u63a5\u8c03\u7528\u3011\n\u5728TCP\u534f\u8bae\u65f6\uff0c\u6309\u7167\u9002\u914d\u5668\uff0c\u9009\u62e9\u6027\u7684\u662f\u5426\u4ee5\\r\\n\u7ed3\u5c3e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'{"jsonrpc": "2.0", "method": "testjsonrpc", "params":["RRQM"], "id": 1}\n')),(0,r.kt)("p",null,"\u3010Http\u534f\u8bae\u76f4\u63a5\u8c03\u7528\u3011\n\u5728Http\u534f\u8bae\u65f6\uff0c\u4ee5Url+Post\u65b9\u5f0f\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'{"jsonrpc": "2.0", "method": "testjsonrpc", "params":["RRQM"], "id": 1}\n')),(0,r.kt)("p",null,"\u3010Websocket\u534f\u8bae\u76f4\u63a5\u8c03\u7528\u3011\n\u5728Websocket\u534f\u8bae\u65f6\uff0c\u4ee5\u6587\u672c\u7c7b\u578b\uff0c\u76f4\u63a5\u53d1\u9001\u5230\u670d\u52a1\u5668\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'{"jsonrpc": "2.0", "method": "testjsonrpc", "params":["RRQM"], "id": 1}\n')),(0,r.kt)("a",{name:"aDbqe"}),(0,r.kt)("h2",{id:"\u4e8c\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528"},"\u4e8c\u3001\u5ba2\u6237\u7aef\u76f4\u63a5\u8c03\u7528"),(0,r.kt)("p",null,"TouchSocket\u63d0\u4f9b\u4e86JsonRpc\u7684\u4e13\u5c5e\u5ba2\u6237\u7aef\uff0c\u76f4\u63a5\u8c03\u7528\uff0c\u5219\u4f1a\u5219\u662f\u4e0d\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4ee3\u7406"),"\uff0c\u76f4\u63a5Call RPC\uff0c\u4f7f\u7528\u6bd4\u8f83\u7b80\u5355\u3002"),(0,r.kt)("p",null,"\u3010TCP\u534f\u8bae\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'JsonRpcClient jsonRpcClient = new JsonRpcClient();\njsonRpcClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("127.0.0.1:7705")\n    .SetJRPT(JRPT.Tcp));\njsonRpcClient.Connect();\n\nConsole.WriteLine("\u8fde\u63a5\u6210\u529f");\nstring result = jsonRpcClient.Invoke<string>("jsonrpcconsoleapp.server.testjsonrpc", InvokeOption.WaitInvoke, "TouchSocket");\nConsole.WriteLine($"Tcp\u8fd4\u56de\u7ed3\u679c:{result}");\n\nresult = jsonRpcClient.Invoke<string>("TestJsonRpc1", InvokeOption.WaitInvoke, "TouchSocket");\nConsole.WriteLine($"Tcp\u8fd4\u56de\u7ed3\u679c:{result}");\n\nresult = jsonRpcClient.Invoke<string>("jsonrpcconsoleapp.server.testgetcontext", InvokeOption.WaitInvoke, "TouchSocket");\nConsole.WriteLine($"Tcp\u8fd4\u56de\u7ed3\u679c:{result}");\n\nJObject obj = new JObject();\nobj.Add("A", "A");\nobj.Add("B", 10);\nobj.Add("C", 100.1);\nJObject newObj = jsonRpcClient.Invoke<JObject>("jsonrpcconsoleapp.server.testjobject", InvokeOption.WaitInvoke, obj);\nConsole.WriteLine($"Tcp\u8fd4\u56de\u7ed3\u679c:{newObj}");\n')),(0,r.kt)("p",null,"\u3010Http\u534f\u8bae\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'static void JsonRpcClientInvokeByHttp()\n{\n    JsonRpcClient jsonRpcClient = new JsonRpcClient();\n    jsonRpcClient.Setup(new TouchSocketConfig()\n        .SetRemoteIPHost("http://127.0.0.1:7706/jsonrpc")\n        .SetJRPT(JRPT.Http));\n    jsonRpcClient.Connect();\n    Console.WriteLine("\u8fde\u63a5\u6210\u529f");\n    string result = jsonRpcClient.Invoke<string>("server/testjsonrpc", InvokeOption.WaitInvoke, "TouchSocket");\n    Console.WriteLine($"Http\u8fd4\u56de\u7ed3\u679c:{result}");\n\n    JObject obj = new JObject();\n    obj.Add("A", "A");\n    obj.Add("B", 10);\n    obj.Add("C", 100.1);\n    JObject newObj = jsonRpcClient.Invoke<JObject>("server/testjobject", InvokeOption.WaitInvoke, obj);\n    Console.WriteLine($"Http\u8fd4\u56de\u7ed3\u679c:{newObj}");\n}\n')),(0,r.kt)("p",null,"\u3010Websocket\u534f\u8bae\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'JsonRpcClient jsonRpcClient = new JsonRpcClient();\njsonRpcClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost("ws://127.0.0.1:7706/ws")//\u6b64url\u5c31\u662f\u80fd\u8fde\u63a5\u5230websocket\u7684\u8def\u5f84\u3002\n    .SetDataHandlingAdapter(() => new TerminatorPackageAdapter("\\r\\n"))\n    .SetJRPT(JRPT.Websocket));\njsonRpcClient.Connect();\n\nConsole.WriteLine("\u8fde\u63a5\u6210\u529f");\nstring result = jsonRpcClient.TestJsonRpc("RRQM");\nConsole.WriteLine($"Websocket\u8fd4\u56de\u7ed3\u679c:{result}");\n\nresult = jsonRpcClient.TestJsonRpc1("RRQM");\nConsole.WriteLine($"Websocket\u8fd4\u56de\u7ed3\u679c:{result}");\n\nresult = jsonRpcClient.TestGetContext("RRQM");\nConsole.WriteLine($"Websocket\u8fd4\u56de\u7ed3\u679c:{result}");\n\nJObject obj = new JObject();\nobj.Add("A", "A");\nobj.Add("B", 10);\nobj.Add("C", 100.1);\nJObject newObj = jsonRpcClient.TestJObject(obj);\nConsole.WriteLine($"Websocket\u8fd4\u56de\u7ed3\u679c:{newObj}");\n')),(0,r.kt)("a",{name:"rrWhi"}),(0,r.kt)("h2",{id:"\u4ee3\u7406\u8c03\u7528rpc"},"\u4ee3\u7406\u8c03\u7528RPC"),(0,r.kt)("p",null,"\u4ee3\u7406\u8c03\u7528\u7684\u4fbf\u6377\u5728\u4e8e\uff0c\u4e0d\u7528\u518d\u7ea0\u7ed3\u8c03\u7528\u7684\u53c2\u6570\u7c7b\u578b\u6b63\u4e0d\u6b63\u786e\uff0c\u56e0\u4e3a\u8fd9\u4e9b\uff0c\u4ee3\u7406\u5de5\u5177\u90fd\u4f1a\u66ff\u4f60\u505a\u597d\u3002 ",(0,r.kt)("a",{name:"AbsXl"})),(0,r.kt)("h3",{id:"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6"},"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6\uff1f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.yuque.com/eo2w71/rrqm/a13509bfc3581f4576861b690b4a809a"},"\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6\u8be6\u60c5")," ",(0,r.kt)("a",{name:"jsQUz"})),(0,r.kt)("h3",{id:"\u8c03\u7528"},"\u8c03\u7528"),(0,r.kt)("p",null,"\u5f53\u4ee3\u7406\u88ab\u5ba2\u6237\u7aef\u83b7\u53d6\u4ee5\u540e\uff0c\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\u4f1a\u591a\u51fa\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"RRQMProxy\uff08//TODO:\u8fd9\u91cc\u9700\u8981\u4fee\u6539\uff0c\u4e0a\u9762\u7684\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6\u8be6\u60c5\u7684\u94fe\u63a5\u5931\u6548\u9700\u8981\u4fee\u6539\uff0c\u4e0b\u9762\u622a\u56fe\u9700\u8981\u4fee\u6539\uff09"),"\u7684\u6587\u4ef6\uff08\u6216\u8005\u5982\u679c\u662f\u670d\u52a1\u5668\u751f\u6210\u7684\u672c\u5730\u4ee3\u7406\uff0c\u5219\u9700\u8981\u590d\u5236\u5230\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\uff09\uff0c\u5728\u8be5\u6587\u4ef6\u4e2d\uff0c\u5219\u5305\u542b\u4e86\u6240\u6709\u7684",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u65b9\u6cd5"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7c7b"),"\uff0c\u53ef\u76f4\u63a5\u7531\u4ee3\u7406\u7c7b\u53d1\u8d77\u8c03\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'JsonRpcClient jsonRpcClient = new JsonRpcClient(JRPT.Http);\njsonRpcClient.Setup("http://127.0.0.1:7706/jsonrpc");\njsonRpcClient.Connect();\nServer server= new Server(jsonRpcClient);//Server\u662f\u751f\u6210\u7684\u4ee3\u7406\u7c7b\u3002\nserver.TestJsonRpc("TouchSocket");//\u4ee3\u7406\u8c03\u7528\n')))}u.isMDXComponent=!0}}]);