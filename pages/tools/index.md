---
title: MAD·AMV 创作工具总览
description: 做 MAD·AMV 需要哪些软件：从素材检查、剪辑、合成、音频到导出的工作流地图，Adobe、DaVinci Resolve 和免费开源三套常用组合，以及硬件与工程归档要点。
---

# MAD·AMV 创作工具总览

::: tip 要点
- 最少只需要四样工具：**素材检查工具 + 一款剪辑软件 + 一款编码工具 + 一款合成软件（可选）**。
- 三套常见组合：Adobe（Premiere＋After Effects）、DaVinci Resolve 一体化、Kdenlive＋Blender 免费开源。
- 软件按任务选择，没有“新手软件”和“大神软件”之分。
- 先用软件自带功能，确实省时再买插件。
- 项目要能在几年后重新打开：记录软件和插件版本，做好备份。
:::

## 制作流程与对应工具

| 阶段 | 要做什么 | 常用工具 |
| --- | --- | --- |
| 规划 | 定主题、选曲、列镜头表、记素材来源 | 文档／表格、PureRef、Eagle |
| 检查素材 | 看容器、编码、帧率、色彩、音轨 | MediaInfo、ffprobe |
| 拆封装 | 从 MKV 等容器里取出音视频轨道 | MKVToolNix、FFmpeg |
| 转码／代理 | 转成好剪的格式，或生成低负载代理 | FFmpeg、HandBrake、剪辑软件自带代理 |
| 剪辑 | 选镜、结构、节奏、变速、声音 | Premiere Pro、DaVinci Resolve、Final Cut Pro、Kdenlive |
| 合成／动效 | 遮罩、跟踪、文字、粒子、三维、静止画动画化 | After Effects、Fusion、Blender |
| 图像 | 拆层、修图、绘制、矢量 | Photoshop、Krita、GIMP、Illustrator、Inkscape |
| 音频 | 清理、混音、音效、响度 | Audition、REAPER、Audacity |
| 导出与检查 | 编码、逐帧检查、上传 | Media Encoder、FFmpeg、MediaInfo |

## 三套常用组合

**A. Adobe 组合**：Premiere Pro 剪辑，After Effects 合成和静止画动画化，Photoshop／Illustrator 处理图像，Audition 处理音频，Media Encoder 或 FFmpeg 导出。中文教程和插件最多；缺点是要订阅，版本和插件兼容问题多。

**B. DaVinci Resolve 一体化**：Resolve 一个软件完成剪辑、Fusion 合成、调色和 Fairlight 音频，免费版已够用；再配 Blender 做三维、Krita／GIMP 做图像。软件切换少；缺点是 Fusion 用节点，和 AE 的图层思路差别很大。

**C. 免费开源组合**：Kdenlive 剪辑，Blender 做合成和三维，Krita／GIMP／Inkscape 做图像，Audacity 做音频，FFmpeg、MKVToolNix、MediaInfo 处理技术问题。不用付费，工程也更容易长期打开；学习成本并不低。

各软件的详细介绍见[软件选择](/tools/software)。

## 怎样决定要不要加工具

依次问自己：

1. 主软件自带功能能做到吗？
2. 能不能用预合成、表达式、节点或脚本反复利用？
3. 第三方插件真的能省下大量时间吗？
4. 插件支持你的软件版本、系统和显卡吗？
5. 合作者和以后打开工程的环境也有合法授权吗？

插件用来解决具体问题，不能代替作品本身的风格。详见[插件与脚本](/tools/plugins-ai)。

## 硬件

- **剪辑**：CPU、硬件解码和硬盘速度决定 H.264／H.265 等长 GOP 素材是否流畅。文件小不等于好剪，卡顿时就生成代理。
- **合成**：After Effects 主要吃内存和缓存；Resolve／Fusion、Blender 和 AI 工具更依赖显卡和显存。
- **存储**：当前项目和缓存放 NVMe SSD；归档另做备份。
- **配置**：官方最低配置只保证能运行。按你常做的分辨率、帧率、素材编码和效果来选，再对照官方最新要求。

## 让工程几年后还能打开

- 记录软件和插件的准确版本；
- 收集工程用到的字体、LUT、脚本和插件清单（不要打包无权分发的安装文件）；
- 关键的动态链接合成先渲染成高质量中间文件；
- 保留母版、发布版、字幕、封面、说明和校验值；
- 按 3-2-1 原则备份：三份数据、两种介质、一份异地。

目录结构和素材清单模板见[素材与工程管理](/tools/footage)。

## 参考资料

- [Adobe Premiere 技术要求](https://helpx.adobe.com/premiere/desktop/get-started/technical-requirements/adobe-premiere-pro-technical-requirements.html)
- [Adobe After Effects 系统要求](https://helpx.adobe.com/after-effects/system-requirements.html)
- [DaVinci Resolve 官方培训](https://www.blackmagicdesign.com/products/davinciresolve/training)
- [Kdenlive 安装与系统要求](https://docs.kdenlive.org/en/getting_started/installation.html)
- [Blender 系统要求](https://www.blender.org/download/requirements/)
- [FFmpeg 文档](https://ffmpeg.org/documentation.html)

## 相关页面

- [软件选择](/tools/software)：每款软件的特点和官方入口；
- [素材与工程管理](/tools/footage)：素材来源、目录结构和归档；
- [视频基础与编码](/tools/encoding)：导出设置和画质问题；
- [插件与脚本](/tools/plugins-ai)：插件怎么选、怎么记录；
- [AI 辅助与 MAID](/tools/ai)：AI 工具能做什么、怎么标注。
