﻿using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Sockets;

namespace TouchSocketExamples.Sockets
{
    
    internal static class SimpleTcpDemo
    {
        public static void Start()
        {
            var service = GetTcpService();

            var client = GetTcpClient();
            Console.WriteLine("请随便输入");
            while (true)
            {
                client.Send(Console.ReadLine());
            }
        }

        public static TcpClient GetTcpClient()
        {
            TcpClient tcpClient = new TcpClient();

            //载入配置
            tcpClient.Setup(new TouchSocketConfig()
                .SetRemoteIPHost("127.0.0.1:7789")
                .ConfigureContainer(a =>
                {
                    a.AddConsoleLogger();//添加一个日志注入
                })
                .ConfigurePlugins(a =>
                {
                    a.Add<MyClientPlugin>();
                })
                );

            tcpClient.Connect();//调用连接，当连接不成功时，会抛出异常。

            return tcpClient;
        }

        public static TcpService GetTcpService()
        {
            var service = new TcpService();
            service.Setup(new TouchSocketConfig()
                .SetListenIPHosts(7789)
                .ConfigureContainer(a =>
                {
                    a.AddConsoleLogger();
                })
                .ConfigurePlugins(a =>
                {
                    a.Add<MyServerPlugin>();
                }))
                .Start();
            return service;
        }

        public class MyServerPlugin : PluginBase, ITcpReceivedPlugin<ISocketClient>
        {
            async Task ITcpReceivedPlugin<ISocketClient>.OnTcpReceived(ISocketClient client, ReceivedDataEventArgs e)
            {
                await Console.Out.WriteLineAsync($"服务器收到：{e.ByteBlock.ToString()}");
                client.Send(e.ByteBlock);//将收到的数据，原路返回

                await e.InvokeNext();//如果本插件无法处理当前数据，请将数据转至下一个插件。
            }
        }

        public class MyClientPlugin : PluginBase, ITcpReceivedPlugin<ITcpClient>
        {
            async Task ITcpReceivedPlugin<ITcpClient>.OnTcpReceived(ITcpClient client, ReceivedDataEventArgs e)
            {
                await Console.Out.WriteLineAsync($"客户端收到：{e.ByteBlock.ToString()}");
                await e.InvokeNext();//如果本插件无法处理当前数据，请将数据转至下一个插件。
            }
        }
    }
}
