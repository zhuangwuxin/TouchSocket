//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  源代码仓库：https://gitee.com/RRQM_Home
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using System;
using System.IO;
using System.Reflection;
using System.Text;

namespace RRQMSocket.RPC
{
    /*
    若汝棋茗
    */

    internal class CodeMap
    {
        internal CodeMap()
        {
            codeString = new StringBuilder();
        }

        internal static string GetAssemblyInfo(string assemblyName, Version version)
        {
            CodeMap codeMap = new CodeMap();
            codeMap.AppendAssemblyInfo(assemblyName, version);
            return codeMap.codeString.ToString();
        }

        private StringBuilder codeString;

        internal MethodInfo[] Methods { get; set; }
        internal string ClassName { get; set; }
        internal static string Namespace { get; set; }
        internal static PropertyCodeMap PropertyCode { get; set; }
        internal static Version Version { get; set; }

        internal string GetCode()
        {
            codeString.AppendLine("using System;");
            codeString.AppendLine("using RRQMSocket.RPC;");
            codeString.AppendLine("using RRQMCore.Exceptions;");
            codeString.AppendLine("using System.Collections.Generic;");
            codeString.AppendLine("using System.Diagnostics;");
            codeString.AppendLine("using System.Runtime.Remoting;");
            codeString.AppendLine("using System.Text;");
            codeString.AppendLine("using System.Threading.Tasks;");
            codeString.AppendLine(string.Format("namespace {0}", Namespace));
            codeString.AppendLine("{");
            string className = this.ClassName;
            codeString.AppendLine(string.Format("public class {0}", className));//类开始
            codeString.AppendLine("{");
            codeString.AppendLine($"public {className}(RRQMSocket.RPC.IRPCClient client)");
            codeString.AppendLine("{");
            codeString.AppendLine("this.Client=client;");
            codeString.AppendLine("}");
            AppendAttributes();
            AppendMethods();
            codeString.AppendLine("}");//类结束

            codeString.AppendLine("}");//空间结束

            return codeString.ToString();
        }

        private void AppendAssemblyInfo(string assemblyName, Version version)
        {
            codeString.AppendLine("using System.Reflection;");
            codeString.AppendLine("using System.Runtime.CompilerServices;");
            codeString.AppendLine("using System.Runtime.InteropServices;");
            codeString.AppendLine("[assembly: AssemblyTitle(\"RRQMRPC\")]");
            codeString.AppendLine("[assembly: AssemblyProduct(\"RRQMRPC\")]");
            codeString.AppendLine("[assembly: AssemblyCopyright(\"Copyright © 2020 若汝棋茗\")]");
            codeString.AppendLine("[assembly: ComVisible(false)]");

            if (version == null)
            {
                if (File.Exists($"{assemblyName}.dll"))
                {
                    Assembly assembly = Assembly.Load(File.ReadAllBytes($"{assemblyName}.dll"));
                    Version v = assembly.GetName().Version;
                    version = new Version(v.Major, v.Minor, v.Build + 1, v.Revision);
                }
                else
                {
                    version = new Version("1.0.0.0");
                }
            }

            Version = version;
            codeString.AppendLine(string.Format("[assembly: AssemblyVersion(\"{0}\")]", version.ToString()));
            codeString.AppendLine(string.Format("[assembly: AssemblyFileVersion(\"{0}\")]", version.ToString()));
        }

        private void AppendAttributes()
        {
            codeString.AppendLine("public RRQMSocket.RPC.IRPCClient Client{get;private set; }");
        }

        public string GetName(Type type)
        {
            return PropertyCode.GetTypeFullName(type);
        }

        private void AppendMethods()
        {
            if (Methods != null)
            {
                foreach (MethodInfo method in Methods)
                {
                    if (!method.IsGenericMethod)
                    {
                        bool isReturn;
                        bool isOutOrRef = false;
                        string methodName = method.GetCustomAttribute<RRQMRPCMethodAttribute>().MethodKey == null ? method.Name : method.GetCustomAttribute<RRQMRPCMethodAttribute>().MethodKey;

                        if (method.ReturnType.Name == "Void")
                        {
                            isReturn = false;
                            codeString.Append(string.Format("public  void {0} ", methodName));
                        }
                        else
                        {
                            isReturn = true;
                            codeString.Append(string.Format("public {0} {1} ", this.GetName(method.ReturnType), methodName));
                        }
                        codeString.Append("(");//方法参数

                        ParameterInfo[] parameters = method.GetParameters();

                        for (int i = 0; i < parameters.Length; i++)
                        {
                            if (i > 0)
                            {
                                codeString.Append(",");
                            }
                            if (parameters[i].ParameterType.Name.Contains("&"))
                            {
                                isOutOrRef = true;
                                if (parameters[i].IsOut)
                                {
                                    codeString.Append(string.Format("out {0} {1}", this.GetName(parameters[i].ParameterType), parameters[i].Name));
                                }
                                else
                                {
                                    codeString.Append(string.Format("ref {0} {1}", this.GetName(parameters[i].ParameterType), parameters[i].Name));
                                }
                            }
                            else
                            {
                                codeString.Append(string.Format("{0} {1}", this.GetName(parameters[i].ParameterType), parameters[i].Name));
                            }

                            if (parameters[i].DefaultValue != System.DBNull.Value)
                            {
                                codeString.Append(string.Format("={0}", parameters[i].DefaultValue));
                            }
                        }
                        if (parameters.Length > 0)
                        {
                            codeString.Append(",");
                        }
                        codeString.AppendLine("InvokeOption invokeOption = null)");

                        codeString.AppendLine("{");//方法开始

                        codeString.AppendLine("if(Client==null)");
                        codeString.AppendLine("{");
                        codeString.AppendLine("throw new RRQMRPCException(\"IRPCClient为空，请先初始化或者进行赋值\");");
                        codeString.AppendLine("}");

                        codeString.Append($"object[] parameters = new object[]");
                        codeString.Append("{");
                        foreach (ParameterInfo parameter in parameters)
                        {
                            if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
                            {
                                codeString.Append($"default({this.GetName(parameter.ParameterType)})");
                            }
                            else
                            {
                                codeString.Append(parameter.Name);
                            }
                            if (parameter != parameters[parameters.Length - 1])
                            {
                                codeString.Append(",");
                            }
                        }
                        codeString.AppendLine("};");

                        if (isReturn)
                        {
                            codeString.Append(string.Format("{0} returnData=Client.RPCInvoke<{0}>", this.GetName(method.ReturnType)));
                            codeString.Append("(");
                            codeString.Append(string.Format("\"{0}\"", methodName));
                            codeString.AppendLine(",ref parameters,invokeOption);");
                        }
                        else
                        {
                            codeString.Append("Client.RPCInvoke(");
                            codeString.Append(string.Format("\"{0}\"", methodName));
                            codeString.AppendLine(",ref parameters,invokeOption);");
                        }

                        for (int i = 0; i < parameters.Length; i++)
                        {
                            codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, this.GetName(parameters[i].ParameterType)));
                        }

                        codeString.AppendLine("if(parameters!=null)");
                        codeString.AppendLine("{");
                        for (int i = 0; i < parameters.Length; i++)
                        {
                            codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name, this.GetName(parameters[i].ParameterType), i));
                        }
                        codeString.AppendLine("}");
                        if (isReturn)
                        {
                            codeString.AppendLine("return returnData;");
                        }

                        codeString.AppendLine("}");

                        if (!isOutOrRef)//没有out或者ref
                        {
                            if (method.ReturnType.Name == "Void")
                            {
                                isReturn = false;
                                codeString.Append(string.Format("public  async void {0} ", "Begin" + methodName));
                            }
                            else
                            {
                                isReturn = true;
                                codeString.Append(string.Format("public  async Task<{0}> {1} ", this.GetName(method.ReturnType), "Begin" + methodName));
                            }

                            codeString.Append("(");//方法参数

                            for (int i = 0; i < parameters.Length; i++)
                            {
                                if (i > 0)
                                {
                                    codeString.Append(",");
                                }

                                codeString.Append(string.Format("{0} {1}", this.GetName(parameters[i].ParameterType), parameters[i].Name));
                                if (parameters[i].DefaultValue != System.DBNull.Value)
                                {
                                    codeString.Append(string.Format("={0}", parameters[i].DefaultValue));
                                }
                            }

                            if (parameters.Length > 0)
                            {
                                codeString.Append(",");
                            }
                            codeString.AppendLine("InvokeOption invokeOption = null)");
                            codeString.AppendLine("{");//方法开始
                            codeString.AppendLine("if(Client==null)");
                            codeString.AppendLine("{");
                            codeString.AppendLine("throw new RRQMRPCException(\"RPCClient为空，请先初始化或者进行赋值\");");
                            codeString.AppendLine("}");
                            if (isReturn)
                            {
                                codeString.AppendLine("return await Task.Run(() =>{");
                                codeString.Append(string.Format("return {0}(", methodName));
                            }
                            else
                            {
                                codeString.AppendLine("await Task.Run(() =>{");
                                codeString.Append(string.Format("{0}(", methodName));
                            }

                            for (int i = 0; i < parameters.Length; i++)
                            {
                                if (i > 0)
                                {
                                    codeString.Append(",");
                                }

                                codeString.Append(string.Format("{0}", parameters[i].Name));
                                if (parameters[i].DefaultValue != System.DBNull.Value)
                                {
                                    codeString.Append(string.Format("={0}", parameters[i].DefaultValue));
                                }
                            }
                            if (parameters.Length > 0)
                            {
                                codeString.Append(",");
                            }
                            codeString.Append("invokeOption);");
                            codeString.AppendLine("});");
                            codeString.AppendLine("}");
                        }
                    }
                    else
                    {
                        bool isReturn;
                        bool isOutOrRef = false;
                        string methodName = method.GetCustomAttribute<RRQMRPCMethodAttribute>().MethodKey == null ? method.Name : method.GetCustomAttribute<RRQMRPCMethodAttribute>().MethodKey;
                        if (method.ReturnType.Name == "Void")
                        {
                            isReturn = false;
                            codeString.Append(string.Format("public  void {0} ", methodName));
                        }
                        else
                        {
                            isReturn = true;
                            codeString.Append(string.Format("public  {0} {1}", this.GetName(method.ReturnType), methodName));
                        }

                        string methodTitle = method.ToString();

                        int rStart = methodTitle.IndexOf(method.Name) + method.Name.Length;
                        int rEnd = methodTitle.IndexOf("(");

                        string genericString = methodTitle.Substring(rStart, rEnd - rStart).Replace("[", "<").Replace("]", ">");

                        codeString.Append(genericString);
                        codeString.Append("(");//方法参数

                        ParameterInfo[] parameters = method.GetParameters();

                        for (int i = 0; i < parameters.Length; i++)
                        {
                            if (i > 0)
                            {
                                codeString.Append(",");
                            }

                            string fullName = this.GetName(parameters[i].ParameterType);

                            if (parameters[i].ParameterType.Name.Contains("&"))
                            {
                                isOutOrRef = true;

                                if (parameters[i].IsOut)
                                {
                                    codeString.Append(string.Format("out {0} {1}", fullName, parameters[i].Name.Replace("&", "")));
                                }
                                else
                                {
                                    codeString.Append(string.Format("ref {0} {1}", fullName, parameters[i].Name.Replace("&", "")));
                                }
                            }
                            else
                            {
                                codeString.Append(string.Format("{0} {1}", fullName, parameters[i].Name));
                            }
                            if (parameters[i].DefaultValue != System.DBNull.Value)
                            {
                                codeString.Append(string.Format("={0}", parameters[i].DefaultValue));
                            }
                        }
                        if (parameters.Length > 0)
                        {
                            codeString.Append(",");
                        }
                        codeString.AppendLine("InvokeOption invokeOption = null)");

                        codeString.AppendLine("{");//方法开始
                        codeString.AppendLine("if(Client==null)");
                        codeString.AppendLine("{");
                        codeString.AppendLine("throw new RRQMRPCException(\"RPCClient为空，请先初始化或者进行赋值\");");
                        codeString.AppendLine("}");
                        codeString.AppendLine("List<object> list = new List<object>();");

                        foreach (ParameterInfo parameter in parameters)
                        {
                            string fullName = this.GetName(parameter.ParameterType);

                            if (parameter.ParameterType.Name.Contains("&") && parameter.IsOut)
                            {
                                codeString.AppendLine(string.Format("list.Add(default({0}));", fullName));
                            }
                            else
                            {
                                codeString.AppendLine(string.Format("list.Add({0});", parameter.Name));
                            }
                        }
                        codeString.AppendLine("object[] parameters = list.ToArray();");

                        if (isReturn)
                        {
                            string returnStr = this.GetName(method.ReturnType);
                            codeString.Append(string.Format("{0} returnData=Client.RPCInvoke<{0}>", returnStr));
                            codeString.Append("(");
                            codeString.Append(string.Format("\"{0}\"", methodName));
                            codeString.AppendLine(",ref parameters,invokeOption);");
                        }
                        else
                        {
                            codeString.Append("Client.RPCInvoke(");
                            codeString.Append(string.Format("\"{0}\"", methodName));
                            codeString.AppendLine(",ref parameters,invokeOption);");
                        }

                        for (int i = 0; i < parameters.Length; i++)
                        {
                            string fullName = this.GetName(parameters[i].ParameterType);

                            codeString.AppendLine(string.Format("{0}=default({1});", parameters[i].Name, fullName));
                        }
                        codeString.AppendLine("if (parameters!=null)");
                        codeString.AppendLine("{");
                        for (int i = 0; i < parameters.Length; i++)
                        {
                            string fullName = this.GetName(parameters[i].ParameterType);
                            codeString.AppendLine(string.Format("{0}=({1})parameters[{2}];", parameters[i].Name.Replace("&", ""), fullName, i));
                        }
                        codeString.AppendLine("}");
                        if (isReturn)
                        {
                            codeString.AppendLine("return returnData;");
                        }

                        codeString.AppendLine("}");

                        if (!isOutOrRef)//没有out或者ref
                        {
                            if (method.ReturnType.Name == "Void")
                            {
                                isReturn = false;
                                codeString.Append(string.Format("public  async void {0} ", "Begin" + methodName));
                            }
                            else
                            {
                                isReturn = true;
                                codeString.Append(string.Format("public  async Task<{0}> {1} ", this.GetName(method.ReturnType), "Begin" + methodName));
                            }

                            codeString.Append(genericString);
                            codeString.Append("(");//方法参数

                            for (int i = 0; i < parameters.Length; i++)
                            {
                                if (i > 0)
                                {
                                    codeString.Append(",");
                                }

                                codeString.Append(string.Format("{0} {1}", this.GetName(parameters[i].ParameterType), parameters[i].Name.Replace("&", "")));
                                if (parameters[i].DefaultValue != System.DBNull.Value)
                                {
                                    codeString.Append(string.Format("={0}", parameters[i].DefaultValue));
                                }
                            }

                            if (parameters.Length > 0)
                            {
                                codeString.Append(",");
                            }
                            codeString.AppendLine("InvokeOption invokeOption = null)");
                            codeString.AppendLine("{");//方法开始
                            codeString.AppendLine("if(Client==null)");
                            codeString.AppendLine("{");
                            codeString.AppendLine("throw new RRQMRPCException(\"RPCClient为空，请先初始化或者进行赋值\");");
                            codeString.AppendLine("}");
                            if (isReturn)
                            {
                                codeString.AppendLine("return await Task.Run(() =>{");
                                codeString.Append(string.Format("return {0}(", methodName));
                            }
                            else
                            {
                                codeString.AppendLine("await Task.Run(() =>{");
                                codeString.Append(string.Format("{0}(", methodName));
                            }

                            for (int i = 0; i < parameters.Length; i++)
                            {
                                if (i > 0)
                                {
                                    codeString.Append(",");
                                }

                                codeString.Append(string.Format("{0}", parameters[i].Name));
                            }
                            if (parameters.Length > 0)
                            {
                                codeString.Append(",");
                            }
                            codeString.Append("invokeOption);");
                            codeString.AppendLine("});");
                            codeString.AppendLine("}");
                        }
                    }
                }
            }
        }
    }
}