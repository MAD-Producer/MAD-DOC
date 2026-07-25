---
title: 插件与脚本
description: MAD·AMV 常见插件类别、兼容性管理、许可证与工程归档
---

# 插件与脚本

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

## 来自社区教程的可保留经验

一般有趣翻译的 Twixtor 补帧文章强调：判断镜头是否适合、识别果冻和扭曲，比记住插件参数更重要。玖钥桑的“疑难杂症”系列则把素材、编码、卡顿、声音、审美和三剪放在同一工作流中。它们的价值在于问题意识；具体按钮、版本和下载方式需要用当前官方文档更新。

- [Twixtor 补帧原理与进阶操作](https://www.bilibili.com/opus/82666859045536657)
- [MAD／AMV制作疑难杂症全教程](https://www.bilibili.com/video/BV1j4411y7sC/)

## AI 内容已独立整理

生成式图像、视频、角色声音、声源分离、MAID、平台标识与披露要求变化频繁，现已移至独立页面：[AI 辅助创作与 MAID](/tools/ai)。
