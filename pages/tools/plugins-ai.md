---
title: MAD·AMV 插件与脚本
description: MAD·AMV 常用 After Effects 插件（Particular、Sapphire、Mocha、Twixtor、Optical Flares 等）按需求分类，对应的原生替代方法、兼容性记录模板和工程归档注意事项。
---

# MAD·AMV 插件与脚本

::: tip 要点
- 先确认软件自带功能做不到，再考虑插件。每个插件都要记下准确版本。
- 不要下载来路不明的“插件包”：授权不明、版本冲突，工程也没法归档。
- 交给别人或归档时，把用了插件的镜头额外渲染一份，以防对方没有这个插件。
- 宿主软件本身见[软件选择](/tools/software)，AI 工具见[AI 辅助与 MAID](/tools/ai)。
:::

## 按需求找插件

| 需求 | 常见插件 | 不用插件的做法 |
| --- | --- | --- |
| 粒子、光线、三维图形 | Maxon Red Giant（Trapcode Particular 等） | AE 粒子与形状图层、Fusion 粒子、Blender |
| 光晕、调色、风格化 | Red Giant、Boris FX Sapphire／Continuum | 软件自带调色、Glow、多层模糊加混合模式 |
| 跟踪、稳定、平面替换 | Boris FX Mocha | AE／Resolve／Blender 自带跟踪 |
| 变速、补帧、运动模糊 | RE:Vision Effects Twixtor、RSMB | 软件自带光流、帧混合、Resolve Speed Warp |
| 镜头光晕、三维对象 | Video Copilot Optical Flares、Element 3D | 自带灯光与合成、Blender 渲染 |
| 缓动、发光、工作流 | aescripts + aeplugins 上的脚本 | 曲线编辑器、表达式、预设 |

官方入口：
[Maxon Red Giant](https://www.maxon.net/en/red-giant) ·
[Trapcode Particular](https://www.maxon.net/en/product-detail/red-giant/particles-and-3d/trapcode-particular) ·
[Boris FX Sapphire](https://borisfx.com/products/sapphire/) ·
[Boris FX Mocha](https://borisfx.com/products/mocha-pro/) ·
[RE:Vision Effects](https://revisionfx.com/) ·
[Video Copilot](https://www.videocopilot.net/products/) ·
[aescripts + aeplugins](https://aescripts.com/)

插件经常被收购、合并或改名。例如 Red Giant 现在使用统一安装器，旧教程里的产品名、文件夹和安装路径可能已经对不上。

## 决定要不要用插件

按这个顺序考虑：**遇到的问题 → 软件自带能否解决 → 哪个插件能解决 → 支持哪些版本 → 没有插件时怎么办**。

## 兼容性记录模板

用到第三方插件时，在工程里记下：

```yaml
plugin: 插件名
vendor: 厂商
license_owner: 授权持有人
version: 准确版本
host: After Effects 版本
os: 操作系统与版本
gpu: 显卡与驱动
installer_source: 官方下载地址
project_usage: 用在哪些合成／镜头
fallback_render: 是否已经渲染了无插件版本
```

交付给团队的工程不要包含付费插件的安装包、序列号或其他授权凭据。

## 社区教程里仍然有用的经验

- 一般有趣翻译的 [Twixtor 补帧教程](https://www.bilibili.com/opus/82666859045536657)：判断镜头适不适合补帧、认出果冻和扭曲，比记住参数更重要。
- 玖钥桑的 [MAD／AMV 制作疑难杂症全教程](https://www.bilibili.com/video/BV1j4411y7sC/)：把素材、编码、卡顿、声音、审美和三剪问题放在同一个流程里讲。

这些教程的思路仍然适用，具体按钮和版本要以当前官方文档为准。

## 相关页面

- [软件选择](/tools/software)：各宿主软件的能力和官方入口；
- [AI 辅助与 MAID](/tools/ai)：AI 抠图、声源分离、生成画面和标注要求；
- [工具总览](/tools/)：插件在整个流程中的位置。
