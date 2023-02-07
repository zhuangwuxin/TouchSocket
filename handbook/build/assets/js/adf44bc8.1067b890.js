"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={id:"filepool",title:"\u6587\u4ef6\u6d41\u6c60"},a=void 0,i={unversionedId:"filepool",id:"filepool",title:"\u6587\u4ef6\u6d41\u6c60",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/filepool.mdx",sourceDirName:".",slug:"/filepool",permalink:"/touchsocket/docs/filepool",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/filepool.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675315991,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"filepool",title:"\u6587\u4ef6\u6d41\u6c60"},sidebar:"docs",previous:{title:"\u4f9d\u8d56\u5c5e\u6027",permalink:"/touchsocket/docs/dependencyproperty"},next:{title:"\u63d2\u4ef6\u7cfb\u7edf",permalink:"/touchsocket/docs/pluginsmanager"}},p={},c=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528\u8bfb",id:"\u4e8c\u4f7f\u7528\u8bfb",level:2},{value:"\u4e09\u3001\u4f7f\u7528\u5199",id:"\u4e09\u4f7f\u7528\u5199",level:2},{value:"\u56db\u3001\u624b\u52a8\u91ca\u653e\u6587\u4ef6\u8d44\u6e90",id:"\u56db\u624b\u52a8\u91ca\u653e\u6587\u4ef6\u8d44\u6e90",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"\u6587\u4ef6\u5728\u8bfb\uff0c\u6216\u5199\u7684\u65f6\u5019\uff0c\u4e00\u76f4\u90fd\u662f\u72ec\u5360\u72b6\u6001\u3002\u8fd9\u4e2a\u95ee\u9898\u5728\u4e0d\u540c\u8fdb\u7a0b\u4e2d\uff0c\u4f3c\u4e4e\u662f\u5408\u7406\u7684\uff0c\u4f46\u662f\u5982\u679c\u5728\u76f8\u540c\u8fdb\u7a0b\u91cc\uff0c\u5c31\u4f1a\u663e\u5f97\u5f88\u5446\u3002\u4f8b\u5982\uff1a\u6211\u4eec\u5728\u4e0b\u8f7d\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u5e0c\u671b\u80fd\u540c\u4e00\u65f6\u95f4\u591a\u4e2a\u8bfb\u53d6\u540c\u4e00\u4e2a\u6587\u4ef6\u3002\u4e14\u80fd\u6709\u4e00\u4e2a\u95ed\u73af\u7684\u7ba1\u7406\u3002\u90a3\u4e48\uff0c\u4f7f\u7528FilePool\uff0c\u5c31\u663e\u5f97\u975e\u5e38\u5fc5\u8981\u4e86\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u4f7f\u7528\u8bfb"},"\u4e8c\u3001\u4f7f\u7528\u8bfb"),(0,o.kt)("p",null,"\u4eceFilePool.GetReader\u7684\u9759\u6001\u51fd\u6570\u4e2d\uff0c\u83b7\u53d6\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u5b89\u5168"),"\u7684\u6587\u4ef6\u8bfb\u53d6\u8bbf\u95ee\u5668\uff0c\u8be5\u8bbf\u95ee\u5668\u5177\u6709\u8bfb\uff0c\u548c\u76f8\u5173\u7684\u64cd\u4f5c\u5c5e\u6027\u3002\u5728\u6bcf\u6b21\u8bfb\u53d6\u540e\uff0cPosition\u4f1a\u9012\u589e\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u968f\u65f6\u91ca\u653e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"int len = 0;\nbyte[] buffer = new byte[1024 * 1024];\n\nusing (var reader = FilePool.GetReader(path))\n{\n    while (true)\n    {\n        int r = reader.Read(buffer, 0, buffer.Length);\n        if (r == 0)\n        {\n            break;\n        }\n        len += r;\n    }\n}\n\nConsole.WriteLine(len);\n")),(0,o.kt)("h2",{id:"\u4e09\u4f7f\u7528\u5199"},"\u4e09\u3001\u4f7f\u7528\u5199"),(0,o.kt)("p",null,"\u4eceFilePool.GetWriter\u7684\u9759\u6001\u51fd\u6570\u4e2d\uff0c\u83b7\u53d6\u4e00\u4e2a\u6587\u4ef6\u5199\u5165\u8bbf\u95ee\u5668\u7ebf\u7a0b\u5b89\u5168\uff0c\u8be5\u8bbf\u95ee\u5668\uff0c\u5177\u6709\u5199\uff0c\u548c\u76f8\u5173\u7684\u64cd\u4f5c\u5c5e\u6027\u3002\u5728\u6bcf\u6b21\u5199\u5165\u540e\uff0cPosition\u4f1a\u9012\u589e\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u968f\u65f6\u91ca\u653e\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\u9ed8\u8ba4\u8c03\u7528",(0,o.kt)("strong",{parentName:"p"},"Dispose"),"\u540e\uff0c\u6587\u4ef6\u4f1a\u6839\u636e\u521b\u5efa\u7c7b\u578b\u662f\u5426\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u5355\u4e00\u8bbf\u95ee"),"\u800c\u51b3\u5b9a\u662f\u5426\u7acb\u5373\u91ca\u653e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'byte[] buffer = new byte[1024];\n\nusing (var writer = FilePool.GetWriter(path,true))\n{\n    writer.Position = num * package;\n    int surLen = package;\n    while (surLen > 0)\n    {\n        int r = Math.Min(surLen, buffer.Length);\n        writer.Write(buffer, 0, r);\n        surLen -= r;\n    }\n}\nConsole.WriteLine("\u5b8c\u6210");\n')),(0,o.kt)("h2",{id:"\u56db\u624b\u52a8\u91ca\u653e\u6587\u4ef6\u8d44\u6e90"},"\u56db\u3001\u624b\u52a8\u91ca\u653e\u6587\u4ef6\u8d44\u6e90"),(0,o.kt)("p",null,"\u5f53\u67d0\u4e2a\u6587\u4ef6\u6ca1\u6709\u53ca\u65f6\u91ca\u653e\uff0c\u6216\u8005\u7531\u4e8e\u4e0d\u53ef\u77e5\u5f02\u5e38\u800c\u6ca1\u6709\u91ca\u653e\u65f6\uff0c\u53ef\u4ee5\u8c03\u7528FilePool.TryReleaseFile\u51cf\u5c11\u5f15\u7528\uff0c\u5e76\u5c1d\u8bd5\u91ca\u653e\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u51cf\u5c11\u5f15\u7528\u7684\u610f\u601d\u662f\uff0c\u5f53\u67d0\u4e2a\u6587\u4ef6\uff0c\u88ab\u521b\u5efa\u591a\u4e2a\u8bbf\u95ee\u5668\u65f6\uff0c\u4f1a\u9012\u589e\u5176\u5f15\u7528\u6570\uff0c\u5f53\u5f15\u7528\u6570\u4e0d\u4e3a0\u65f6\uff0c\u662f\u4e0d\u4f1a\u91ca\u653e\u7684\u3002\u6240\u4ee5\u5f53\u8c03\u7528FilePool.TryReleaseFile\u65f6\uff0c\u9996\u5148\u4f1a\u51cf\u5c11\u5f15\u7528\uff0c\u7136\u540e\u624d\u4f1a\u5224\u65ad\u662f\u5426\u53ef\u4ee5\u91ca\u653e\u3002"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u5f3a\u5236\u91ca\u653e\u67d0\u4e2a\u6587\u4ef6\u65f6\uff0c\u53ef\u4ee5\u91c7\u53d6\u4e0b\u5217\u63aa\u65bd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"while (FilePool.TryReleaseFile(fileName, 0).ResultCode!= ResultCode.Success)\n{\n\n}\n")))}s.isMDXComponent=!0}}]);