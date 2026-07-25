---
title: 插件、脚本与 AI 辅助
description: MAD·AMV 常见插件类别、兼容性管理、AI 用途与披露原则
---

# 插件、脚本与 AI 辅助

## 插件采用原则

旧教程常直接给出“插件包”，但这种方式会带来许可证不明、版本冲突、无法归档和项目崩溃。更可维护的记录方式是：**问题 → 原生方法 → 可选插件 → 兼容版本 → 替代方案**。

## 常见插件类别

| 需求 | 代表性工具 | 原生／开源替代思路 |
| --- | --- | --- |
| 粒子、光线、三维图形 | Maxon Red Giant（Particular 等） | AE 粒子与形状层、Fusion 粒子、Blender |
| 光晕、调色、风格化 | Maxon Red Giant、Boris FX Sapphire／Continuum | 宿主调色、Glow、多层模糊与混合模式 |
| 跟踪、稳定、平面替换 | Boris FX Mocha | AE／Resolve／Blender 原生跟踪 |
| 变速、补帧、运动模糊 | RE:Vision Effects Twixtor、RSMB | 宿主光流、帧混合、Resolve Speed Warp（按版本） |
| 镜头光晕、三维对象 | Video Copilot Optical Flares、Element 3D | 原生灯光与合成、Blender 渲染 |
| 发光、缓动与工作流 | aescripts + aeplugins 市场中的脚本／插件 | 原生曲线编辑器、表达式、预设 |

### 官方入口

- [Maxon Red Giant](https://www.maxon.net/en/red-giant)
- [Trapcode Particular](https://www.maxon.net/en/product-detail/red-giant/particles-and-3d/trapcode-particular)
- [Boris FX Sapphire](https://borisfx.com/products/sapphire/)
- [Boris FX Mocha](https://borisfx.com/products/mocha-pro/)
- [RE:Vision Effects](https://revisionfx.com/)
- [Video Copilot](https://www.videocopilot.net/products/)
- [aescripts + aeplugins](https://aescripts.com/)

第三方插件名称可能被收购、合并或停止单独销售。例如 Red Giant 套件近年改用统一安装器；旧教程里的文件夹、产品名和安装路径可能已不适用于当前版本。

## 插件兼容性清单

采用第三方插件前应记录：

```yaml
plugin: 插件名
vendor: 厂商
license_owner: 许可证持有人
version: 精确版本
host: After Effects 版本
os: 操作系统与版本
gpu: GPU 与驱动
installer_source: 官方下载地址
project_usage: 使用的合成／镜头
fallback_render: 是否已有无插件中间渲染
```

团队交付工程不包含付费插件安装包、序列号或其他授权凭据。

## AI 辅助适用范围

### 相对低风险的辅助

- 自动转写和生成检索用字幕；
- 镜头内容标注、重复镜头检测和素材检索；
- 降噪、去点击声、语音可懂度改善；
- 遮罩初稿、对象跟踪、超分辨率或补帧的测试版本；
- 根据自己写的说明生成工程命名、镜头表和检查清单；
- 对自己拥有权利的素材进行延展、修复或版本探索。

### 高风险用途

- 未经同意克隆声优、歌手或创作者声音；
- 用可识别在世艺术家风格生成素材并隐瞒来源；
- 擦除水印、署名或版权标记；
- 把生成画面伪装为原动画“官方未公开镜头”；
- 使用不明训练、上传和保留条款的云服务处理未公开比赛作品；
- 让生成模型替代史料证据或捏造作者言论。

## 常见 AI／智能功能入口

| 工具 | 可能用途 | 注意事项 |
| --- | --- | --- |
| Adobe Firefly／Premiere 智能功能 | 生成延展、对象处理、文字与工作流辅助 | 查看功能是否上传云端及生成式标记规则 |
| DaVinci Resolve Neural Engine | 跟踪、重定时、人物与音频相关功能 | 功能范围依版本和 Studio 授权变化 |
| Topaz Video AI | 放大、降噪、反交错、补帧 | 逐帧检查脸、线条、粒子和快速运动 |
| OpenAI Whisper | 本地或服务端语音转写 | 模型会误听专名；发布前人工校对 |
| RIFE 系列开源实现 | 光流补帧实验 | 不同实现、模型与许可证不同，记录版本 |

- [Adobe Firefly](https://www.adobe.com/products/firefly.html)
- [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)
- [Topaz Video AI](https://www.topazlabs.com/topaz-video-ai)
- [OpenAI Whisper](https://github.com/openai/whisper)

## AI 使用记录

作品说明至少记录：

1. 哪些画面、声音或文字使用了生成式 AI；
2. 使用的工具和模型／版本；
3. 输入素材是否由作者拥有或获得授权；
4. 是否进行了人工重绘、合成和校正；
5. 比赛或平台是否允许该用途。

比赛规则存在显著差异：部分活动完全禁止生成式音视频，部分活动允许有限辅助。单届赛事规则只适用于该届活动，不能作为整个 MAD·AMV 领域的默认规范。

## 来自社区教程的可保留经验

一般有趣翻译的 Twixtor 补帧文章强调：判断镜头是否适合、识别果冻和扭曲，比记住插件参数更重要。玖钥桑的“疑难杂症”系列则把素材、编码、卡顿、声音、审美和三剪放在同一工作流中。它们的价值在于问题意识；具体按钮、版本和下载方式需要用当前官方文档更新。

- [Twixtor 补帧原理与进阶操作](https://www.bilibili.com/opus/82666859045536657)
- [MAD／AMV制作疑难杂症全教程](https://www.bilibili.com/video/BV1j4411y7sC/)
