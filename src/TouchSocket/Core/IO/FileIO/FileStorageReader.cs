//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://www.yuque.com/rrqm/touchsocket/index
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using System;

namespace TouchSocket.Core.IO
{
    /// <summary>
    /// 文件读取器
    /// </summary>
    public class FileStorageReader : IDisposable
    {
        private FileStorage m_fileStorage;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="fileStorage"></param>
        public FileStorageReader(FileStorage fileStorage)
        {
            this.m_fileStorage = fileStorage;
        }

        /// <summary>
        /// 文件存储器
        /// </summary>
        public FileStorage FileStorage => this.m_fileStorage;

        private long m_position;
        private bool m_disposedValue;

        /// <summary>
        /// 游标位置
        /// </summary>
        public long Position
        {
            get => this.m_position;
            set => this.m_position = value;
        }

        /// <summary>
        /// 游标位置
        /// </summary>
        public int Pos
        {
            get => (int)this.m_position;
            set => this.m_position = value;
        }

        /// <summary>
        /// 读取数据到缓存区
        /// </summary>
        /// <param name="buffer"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        /// <returns></returns>
        public int Read(byte[] buffer, int offset, int length)
        {
            int r = this.m_fileStorage.Read(this.m_position, buffer, offset, length);
            this.m_position += r;
            return r;
        }

        /// <summary>
        /// 释放资源
        /// </summary>
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing)
        {
            if (!this.m_disposedValue)
            {
                if (disposing)
                {
                    // TODO: 释放托管状态(托管对象)
                }

                FilePool.TryReleaseFile(this.m_fileStorage?.Path);
                this.m_fileStorage = null;
                this.m_disposedValue = true;
            }
        }

        /// <summary>
        /// 析构函数
        /// </summary>
        ~FileStorageReader()
        {
            // 不要更改此代码。请将清理代码放入“Dispose(bool disposing)”方法中
            this.Dispose(disposing: false);
        }

        /// <summary>
        /// 释放资源
        /// </summary>
        public void Dispose()
        {
            // 不要更改此代码。请将清理代码放入“Dispose(bool disposing)”方法中
            this.Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }

        /// <summary>
        /// 释放资源
        /// </summary>
        public void Dispose(int delayTime)
        {
            FilePool.TryReleaseFile(this.m_fileStorage?.Path, delayTime);
            // 不要更改此代码。请将清理代码放入“Dispose(bool disposing)”方法中
            this.Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}