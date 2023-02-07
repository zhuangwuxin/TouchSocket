"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(c,".").concat(g)]||u[g]||k[g]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"createwebsocketservice",title:"\u521b\u5efaWebSocket\u670d\u52a1\u5668"},o=void 0,i={unversionedId:"createwebsocketservice",id:"createwebsocketservice",title:"\u521b\u5efaWebSocket\u670d\u52a1\u5668",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/createwebsocketservice.mdx",sourceDirName:".",slug:"/createwebsocketservice",permalink:"/touchsocket/docs/createwebsocketservice",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/createwebsocketservice.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675566039,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{id:"createwebsocketservice",title:"\u521b\u5efaWebSocket\u670d\u52a1\u5668"},sidebar:"docs",previous:{title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",permalink:"/touchsocket/docs/websocketdescription"},next:{title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",permalink:"/touchsocket/docs/createwebsocketclient"}},c={},s=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u53ef\u914d\u7f6e\u9879",id:"\u4e8c\u53ef\u914d\u7f6e\u9879",level:2},{value:"\u4e09\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u4e09\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"IWebSocketPlugin",id:"iwebsocketplugin",level:3},{value:"\u56db\u3001\u521b\u5efaWebSocket\u670d\u52a1",id:"\u56db\u521b\u5efawebsocket\u670d\u52a1",level:2},{value:"4.1 \u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa",id:"41-\u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa",level:3},{value:"4.2 \u901a\u8fc7WebApi\u521b\u5efa",id:"42-\u901a\u8fc7webapi\u521b\u5efa",level:3},{value:"\u521b\u5efa\u57fa\u4e8eSsl\u7684WebSocket\u670d\u52a1",id:"\u521b\u5efa\u57fa\u4e8essl\u7684websocket\u670d\u52a1",level:2},{value:"\u63a5\u6536\u6d88\u606f",id:"\u63a5\u6536\u6d88\u606f",level:2},{value:"\u56de\u590d\u3001\u54cd\u5e94\u6570\u636e",id:"\u56de\u590d\u54cd\u5e94\u6570\u636e",level:2}],p={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,r.kt)("p",null,"WebSocket\u662f\u57fa\u4e8eHttp\u534f\u8bae\u7684\u5347\u7ea7\u534f\u8bae\uff0c\u6240\u4ee5\u5e94\u5f53\u6302\u8f7d\u5728http\u670d\u52a1\u5668\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u53ef\u914d\u7f6e\u9879"},"\u4e8c\u3001\u53ef\u914d\u7f6e\u9879"),(0,r.kt)("p",null,"\u7ee7\u627fHttpService"),(0,r.kt)("h2",{id:"\u4e09\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u4e09\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,r.kt)("p",null,"\u652f\u6301",(0,r.kt)("strong",{parentName:"p"},"ITcpPlugin\u3001IHttpPlugin\u3001IWebSocketPlugin")),(0,r.kt)("h3",{id:"iwebsocketplugin"},"IWebSocketPlugin"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaking"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5728\u5373\u5c06\u63e1\u624b\u8fde\u63a5\u65f6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandshaked"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5b8c\u6210\u63e1\u624b\u540e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OnHandleWSDataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6536\u5230WS\u6570\u636e\u65f6\u3002")))),(0,r.kt)("h2",{id:"\u56db\u521b\u5efawebsocket\u670d\u52a1"},"\u56db\u3001\u521b\u5efaWebSocket\u670d\u52a1"),(0,r.kt)("h3",{id:"41-\u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa"},"4.1 \u7b80\u5355\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa"),(0,r.kt)("p",null,"\u901a\u8fc7\u63d2\u4ef6\u521b\u5efa\u7684\u8bdd\uff0c\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u7279\u6b8aurl\u8def\u7531\u3002\u5982\u679c\u60f3\u83b7\u5f97\u8fde\u63a5\u524d\u7684Http\u8bf7\u6c42\uff0c\u4e5f\u5fc5\u987b\u518d\u6dfb\u52a0\u4e00\u4e2a\u5b9e\u73b0IWebSocketPlugin\u63a5\u53e3\u7684\u63d2\u4ef6\uff0c\u7136\u540e\u4eceOnHandshaking\u65b9\u6cd5\u4e2d\u6355\u83b7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.SetSingletonLogger<ConsoleLogger>();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.Add<WebSocketServerPlugin>()//\u6dfb\u52a0WebSocket\u529f\u80fd\n               .SetWSUrl("/ws")\n               .SetCallback(WSCallback);//WSCallback\u56de\u8c03\u51fd\u6570\u662f\u5728WS\u6536\u5230\u6570\u636e\u65f6\u89e6\u53d1\u56de\u8c03\u7684\u3002\n        a.Add<MyWebSocketPlugin>();//MyWebSocketPlugin\u662f\u7ee7\u627f\u81eaWebSocketPluginBase\u7684\u63d2\u4ef6\u3002\n    }))\n    .Start();\n\nConsole.WriteLine("Http\u670d\u52a1\u5668\u5df2\u542f\u52a8");\nConsole.WriteLine("ws://127.0.0.1:7789/ws");\n\n')),(0,r.kt)("h3",{id:"42-\u901a\u8fc7webapi\u521b\u5efa"},"4.2 \u901a\u8fc7WebApi\u521b\u5efa"),(0,r.kt)("p",null,"\u901a\u8fc7WebApi\u7684\u65b9\u5f0f\u4f1a\u66f4\u52a0\u7075\u6d3b\uff0c\u4e5f\u80fd\u5f88\u65b9\u4fbf\u7684\u83b7\u5f97Http\u76f8\u5173\u53c2\u6570\u3002\u8fd8\u80fd\u5b9e\u73b0\u591a\u4e2aUrl\u7684\u8fde\u63a5\u8def\u7531\u3002\n\u5b9e\u73b0\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u914d\u7f6eConfigureRpcStore\uff0c\u548c\u6ce8\u518cMyServer"),(0,r.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u6dfb\u52a0WebApiParserPlugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\nservice.Setup(new TouchSocketConfig()//\u52a0\u8f7d\u914d\u7f6e\n    .UsePlugin()\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a =>\n    {\n        a.SetSingletonLogger<ConsoleLogger>();\n    })\n    .ConfigureRpcStore(a=> \n    {\n        a.RegisterServer<MyServer>();\n    })\n    .ConfigurePlugins(a =>\n    {\n        a.Add<WebApiParserPlugin>();\n    }))\n    .Start();\n\nConsole.WriteLine("\u670d\u52a1\u5668\u5df2\u542f\u52a8\uff0c\u53ef\u4f7f\u7528\u4e0b\u5217\u5730\u5740\u8fde\u63a5");\nConsole.WriteLine("ws://127.0.0.1:7789/MyServer/ConnectWS");\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class MyServer : RpcServer\n{\n    private readonly ILog m_logger;\n\n    public MyServer(ILog logger)\n    {\n        this.m_logger = logger;\n    }\n\n    [Router("/[api]/[action]")]\n    [WebApi(HttpMethodType.GET, MethodFlags = MethodFlags.IncludeCallContext)]\n    public void ConnectWS(IWebApiCallContext callContext)\n    {\n        if (callContext.Caller is HttpSocketClient socketClient)\n        {\n            if (socketClient.SwitchProtocolToWebSocket(callContext.Context))\n            {\n                m_logger.Message("WS\u901a\u8fc7WebApi\u8fde\u63a5");\n            }\n        }\n    }\n}\n')),(0,r.kt)("a",{name:"d6n7d"}),(0,r.kt)("h2",{id:"\u521b\u5efa\u57fa\u4e8essl\u7684websocket\u670d\u52a1"},"\u521b\u5efa\u57fa\u4e8eSsl\u7684WebSocket\u670d\u52a1"),(0,r.kt)("p",null,"\u521b\u5efaWSs\u670d\u52a1\u5668\u65f6\uff0c\u5176\u4ed6\u914d\u7f6e\u4e0d\u53d8\uff0c\u53ea\u9700\u8981\u5728config\u4e2d\u914d\u7f6eSslOption\u4ee3\u7801\u5373\u53ef\u3002\n\u5728",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/RRQMBox/tree/master/Ssl%E8%AF%81%E4%B9%A6%E7%9B%B8%E5%85%B3"},"RRQMBox"),"\u4e2d\uff0c\u653e\u7f6e\u4e86\u4e00\u4e2a\u81ea\u5236Ssl\u8bc1\u4e66\uff0c\u5bc6\u7801\u4e3a\u201cRRQMSocket\u201d\u4ee5\u4f9b\u6d4b\u8bd5\u3002\u4f7f\u7528\u914d\u7f6e\u975e\u5e38\u65b9\u4fbf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var config = new TouchSocketConfig();\nconfig.UsePlugin()\n    .SetReceiveType(ReceiveType.Auto)\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .SetServiceSslOption(new ServiceSslOption() //Ssl\u914d\u7f6e\uff0c\u5f53\u4e3anull\u7684\u65f6\u5019\uff0c\u76f8\u5f53\u4e8e\u521b\u5efa\u4e86ws\u670d\u52a1\u5668\uff0c\u5f53\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u76f8\u5f53\u4e8ewss\u670d\u52a1\u5668\u3002\n    { \n        Certificate = new X509Certificate2("RRQMSocket.pfx", "RRQMSocket"), \n        SslProtocols = SslProtocols.Tls12 \n    });\n')),(0,r.kt)("a",{name:"FQrdu"}),(0,r.kt)("h2",{id:"\u63a5\u6536\u6d88\u606f"},"\u63a5\u6536\u6d88\u606f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u3010\u56de\u8c03\u63a5\u6536\u3011"),"\n\u5728\u6dfb\u52a0",(0,r.kt)("strong",{parentName:"p"},"WebSocketServerPlugin"),"\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u8c03\u7528",(0,r.kt)("strong",{parentName:"p"},"SetCallback"),"\u51fd\u6570\uff0c\u7136\u540e\u8bbe\u7f6e\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff08\u5982\u4e0b\u6240\u793a\uff09\uff0c\u7136\u540e\u8be5\u51fd\u6570\u5728\u670d\u52a1\u5668\u6536\u5230\u4fe1\u606f\u65f6\uff0c\u4f1a\u89e6\u53d1\uff08\u5e76\u53d1\u89e6\u53d1\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'static void WSCallback(ITcpClientBase client, WSDataFrameEventArgs e)\n{\n    switch (e.DataFrame.Opcode)\n    {\n        case WSDataType.Cont:\n            Console.WriteLine($"\u6536\u5230\u4e2d\u95f4\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n            break;\n        case WSDataType.Text:\n            Console.WriteLine(e.DataFrame.ToText());\n            break;\n        case WSDataType.Binary:\n            if (e.DataFrame.FIN)\n            {\n                Console.WriteLine($"\u6536\u5230\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n            }\n            else\n            {\n                Console.WriteLine($"\u6536\u5230\u672a\u7ed3\u675f\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u957f\u5ea6\u4e3a\uff1a{e.DataFrame.PayloadLength}");\n            }\n            break;\n        case WSDataType.Close:\n            {\n                Console.WriteLine("\u8fdc\u7a0b\u8bf7\u6c42\u65ad\u5f00");\n                client.Close("\u65ad\u5f00");\n            }\n\n            break;\n        case WSDataType.Ping:\n            break;\n        case WSDataType.Pong:\n            break;\n        default:\n            break;\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u3010\u7ee7\u627f\u6e90\u63d2\u4ef6\u63a5\u6536\u3011"),"\n\u5b9e\u9645\u4e0a",(0,r.kt)("strong",{parentName:"p"},"WebSocketServerPlugin"),"\u662f\u53ef\u4ee5\u88ab\u7ee7\u627f\u7684\uff0c\u7136\u540e\u91cd\u5199",(0,r.kt)("strong",{parentName:"p"},"OnHandleWSDataFrame"),"\u51fd\u6570\uff0c\u4f46\u5c3d\u91cf",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u8986\u76d6"),"\u57fa\u7c7b\u65b9\u6cd5\uff0c\u4e0d\u7136\u63d2\u4ef6\u5176\u4ed6\u5c06\u4e0d\u4f1a\u89e6\u53d1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyWebSocketServerPlugin: WebSocketServerPlugin\n{\n    protected override void OnHandleWSDataFrame(ITcpClientBase client, WSDataFrameEventArgs e)\n    {\n        base.OnHandleWSDataFrame(client, e);\n    }\n}\n")),(0,r.kt)("p",null,"\u3010\u63d2\u4ef6\u63a5\u53e3\u63a5\u6536\u3011\nWS\u670d\u52a1\u5668\uff0c\u867d\u7136\u662fHttp\u7684\u63d2\u4ef6\uff0c\u4f46\u662f\u4e5f\u80fd\u89e6\u53d1\u63d2\u4ef6\u63a5\u53e3\u3002\u9002\u7528\u4e8eWS\u7684\u63d2\u4ef6\u63a5\u53e3\u662f",(0,r.kt)("strong",{parentName:"p"},"IWebSocketPlugin"),"\uff08\u6216\u8005\u4ece",(0,r.kt)("strong",{parentName:"p"},"WebSocketPluginBase"),"\u7ee7\u627f\uff09\uff0c\u58f0\u660e\u4efb\u610f\u7c7b\uff0c\u5b9e\u73b0\u8be5\u63a5\u53e3\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class MyWebSocketServerPlugin: WebSocketPluginBase\n{\n    protected override void OnHandleWSDataFrame(ITcpClientBase client, WSDataFrameEventArgs e)\n    {\n        //\u6b64\u5904\u7684\u7236\u7c7b\u65b9\u6cd5\u53ef\u4ee5\u76f4\u63a5\u8986\u76d6\u3002\n        base.OnHandleWSDataFrame(client, e);\n    }\n}\n")),(0,r.kt)("a",{name:"JKBcN"}),(0,r.kt)("h2",{id:"\u56de\u590d\u54cd\u5e94\u6570\u636e"},"\u56de\u590d\u3001\u54cd\u5e94\u6570\u636e"),(0,r.kt)("p",null,"\u5728\u4ee5\u4e0a\u63a5\u6536\u3001\u6216\u76f4\u63a5\u4eceHttpService\u83b7\u53d6Clients\uff0c\u5c06client\u5bf9\u8c61\u8f6c\u4e3a",(0,r.kt)("strong",{parentName:"p"},"HttpSocketClient"),"\uff0c\u5373\u53ef\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u6269\u5c55\u65b9\u6cd5"),"\uff0c\u8fdb\u884c\u53d1\u9001\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u76f4\u63a5Send\uff0c7.x\u7248\u672c\u76f4\u63a5Send\u53ef\u4ee5\uff0c\u4f468.0\u4ee5\u540e\uff0cSend\u53ea\u4f1a\u4ee5TCP\u6570\u636e\u56de\u5e94\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f5c\u4e3a\u4e00\u6761\u6d88\u606f\u53d1\u9001")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u5e7f\u64ad\u53d1\u9001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"//\u5e7f\u64ad\u7ed9\u6240\u6709\u4eba\nif (client is HttpSocketClient socketClient && socketClient.Service is HttpService service)\n{\n    var clients = service.GetClients();\n    foreach (var item in clients)\n    {\n        item.SendWithWS(e.DataFrame.ToText());\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c06\u4e00\u4e2a\u6570\u636e\u5206\u5305\u53d1\u9001"),"\n\u4f8b\u5982\uff1a\u53d1\u9001\u7684\u6570\u636e\u4e3a{0,1,2,3,4,5,6,7,8,9}\uff0c\u5f53\u8bbe\u7f6epackageSize\u4e3a5\u65f6\uff0c\u4f1a\u5148\u53d1\u9001{0,1,2,3,4}\u4f5c\u4e3a\u5934\u5305\uff0c\u7136\u540e\u53d1\u9001{5,6,7,8,9}\u7684\u540e\u7ee7\u5305\u3002"))}k.isMDXComponent=!0}}]);