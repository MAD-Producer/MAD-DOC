---
title: MAD·AMV 创作工具总览
description: 从素材、剪辑、合成、音频到输出的工具地图与选择原则
---

# MAD·AMV 创作工具总览

软件不是按“新手／大神”分级，而是按任务选择。一个稳定的最小工作流通常只需要：**素材分析工具 + 一款主剪辑软件 + 一款编码工具 + 可选的合成／图像／音频软件**。

## 工作流地图

| 阶段 | 主要任务 | 常用工具 |
| --- | --- | --- |
| 规划 | 主题、选曲、镜头表、版权记录 | 文档／表格、PureRef、Eagle 等 |
| 检查素材 | 查看封装、编码、帧率、色彩和音轨 | MediaInfo、ffprobe |
| 拆封装 | 从自己合法持有的 MKV 等容器提取轨道 | MKVToolNix、FFmpeg |
| 转码／代理 | 转为软件易解码的中间格式，生成低负载代理 | FFmpeg、HandBrake、剪辑软件内置代理 |
| 主剪辑 | 选镜、结构、节奏、基础变速和声音 | Premiere Pro、DaVinci Resolve、Final Cut Pro、Kdenlive |
| 合成／动效 | 遮罩、跟踪、文字、粒子、三维、静止画动画化 | After Effects、Fusion、Blender |
| 图像处理 | 分层、修图、绘制、矢量 | Photoshop、Krita、GIMP、Illustrator、Inkscape |
| 音频 | 清理、重混、音效、响度 | Audition、REAPER、Audacity |
| 输出与质检 | 编码、校验、逐帧检查、最终上传 | Media Encoder、FFmpeg、MediaInfo |

## 常用工作流组合

### 组合 A：通用商业工作流

- Premiere Pro：主剪辑与代理；
- After Effects：合成、动效、静止画动画化；
- Photoshop／Illustrator：图像与矢量；
- Audition：音频处理；
- Media Encoder／FFmpeg：交付。

优点是教程、模板和插件生态大；风险是订阅成本、版本兼容和第三方插件依赖。

### 组合 B：一体化调色与合成

- DaVinci Resolve：剪辑、Fusion 合成、调色和 Fairlight 音频；
- Blender：三维和复杂空间；
- Krita／GIMP：图像；
- FFmpeg／MKVToolNix：素材预处理。

适合希望减少软件切换的人。Fusion 的节点式思维与 AE 图层式工作流差异较大。

### 组合 C：免费／开源工作流

- Kdenlive：主剪辑和代理；
- Blender：合成、三维和部分剪辑；
- Krita／GIMP／Inkscape：图像；
- Audacity：音频；
- FFmpeg、MKVToolNix、MediaInfo：技术处理。

开源不等于没有学习成本，但项目更容易长期打开，也减少订阅和授权压力。

## 工具选择顺序

工具评估可按以下顺序进行：

1. 主软件原生功能能否完成？
2. 是否可以通过预合成、表达式、节点或脚本重复使用？
3. 第三方插件是否真的节省大量时间？
4. 插件是否支持你的宿主版本、操作系统和 GPU？
5. 团队其他成员与未来归档环境是否也有合法许可证？

插件应解决明确问题，而不是作为作品风格的替代品。

## 硬件性能要素

### 剪辑与解码

- CPU、硬件解码支持和存储速度影响长 GOP 素材的浏览；
- 内存决定大型工程、缓存和多软件并行的余量；
- NVMe SSD 适合缓存与当前项目，归档应另有备份；
- H.264／H.265 文件“小”不代表编辑“轻”，必要时生成代理或中间编码。

### 合成与三维

- AE 常受内存、缓存和单帧计算影响；
- Resolve／Fusion、Blender 和 AI 工具更依赖 GPU 与显存；
- 4K、32-bit 浮点、降噪、粒子和大量预合成会快速增加资源占用。

### 配置原则

软件最低要求只代表基础运行条件。硬件评估应以典型项目的分辨率、帧率、素材编码、最长时长、并发软件、常用效果和预算为依据，再对照当前官方要求。由于要求会随版本更新，MAD DOC 只保留官方入口，不设置长期固定的配置单。

## 项目长期可打开

- 保留软件与插件的准确版本；
- 收集项目使用的字体、LUT、脚本和插件清单；归档包不包含无权分发的安装文件；
- 将关键动态链接合成为高质量中间文件；
- 输出带透明通道和不带透明通道的关键镜头；
- 保留最终母版、发布版、字幕、封面、说明和校验值；
- 至少使用 3-2-1 备份：三份数据、两种介质、一份异地。

## 官方文档入口

- [Adobe Premiere 技术要求](https://helpx.adobe.com/premiere/desktop/get-started/technical-requirements/adobe-premiere-pro-technical-requirements.html)
- [Adobe After Effects 系统要求](https://helpx.adobe.com/after-effects/system-requirements.html)
- [DaVinci Resolve 官方培训](https://www.blackmagicdesign.com/products/davinciresolve/training)
- [Kdenlive 安装与系统要求](https://docs.kdenlive.org/en/getting_started/installation.html)
- [Blender 系统要求](https://www.blender.org/download/requirements/)
- [FFmpeg 文档](https://ffmpeg.org/documentation.html)

相关条目：[素材与工程](/tools/footage) · [编码与交付](/tools/encoding) · [软件选择](/tools/software) · [插件与 AI](/tools/plugins-ai)
