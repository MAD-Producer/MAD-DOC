---
title: Plugins and Scripts
description: Common MAD·AMV plugin categories, compatibility management, licensing, and project archiving
---

# Plugins and Scripts

## Plugin Selection Principles

Older tutorials often distribute a “plugin pack,” but this creates unclear licensing, version conflicts, unarchivable dependencies, and project crashes. A more maintainable record is: **problem → native method → optional plugin → compatible versions → fallback**.

## Common Plugin Categories

| Need | Representative tools | Native／open-source alternatives |
| --- | --- | --- |
| Particles, light, and 3D graphics | Maxon Red Giant, including Particular | After Effects particles and shape layers, Fusion particles, Blender |
| Glow, color, and stylization | Maxon Red Giant, Boris FX Sapphire／Continuum | Host color tools, Glow, layered blur, and blend modes |
| Tracking, stabilization, and planar replacement | Boris FX Mocha | Native tracking in After Effects, Resolve, or Blender |
| Retiming, frame interpolation, and motion blur | RE:Vision Effects Twixtor, RSMB | Host optical flow, frame blending, Resolve Speed Warp where supported |
| Lens flares and 3D objects | Video Copilot Optical Flares, Element 3D | Native lighting and compositing, Blender rendering |
| Glow, easing, and workflow | Scripts and plugins from aescripts + aeplugins | Native graph editor, expressions, and presets |

### Official Sources

- [Maxon Red Giant](https://www.maxon.net/en/red-giant)
- [Trapcode Particular](https://www.maxon.net/en/product-detail/red-giant/particles-and-3d/trapcode-particular)
- [Boris FX Sapphire](https://borisfx.com/products/sapphire/)
- [Boris FX Mocha](https://borisfx.com/products/mocha-pro/)
- [RE:Vision Effects](https://revisionfx.com/)
- [Video Copilot](https://www.videocopilot.net/products/)
- [aescripts + aeplugins](https://aescripts.com/)

Third-party plugin names may change through acquisition, bundling, or discontinuation. Red Giant products, for example, have moved to a unified installer in recent years; directories, product names, and installation paths shown in older tutorials may no longer apply.

## Plugin Compatibility Manifest

Record the following before adopting a third-party plugin:

```yaml
plugin: plugin name
vendor: vendor
license_owner: license holder
version: exact version
host: After Effects version
os: operating system and version
gpu: GPU and driver
installer_source: official download URL
project_usage: compositions／shots using the plugin
fallback_render: whether a plugin-free intermediate render exists
```

Team project delivery must not include paid plugin installers, serial numbers, or other licensing credentials.

## Durable Lessons from Community Tutorials

一般有趣’s translation of a Twixtor frame-interpolation article emphasizes that deciding whether a shot is suitable and recognizing jelly-like warping matter more than memorizing plugin settings. 玖钥桑’s troubleshooting series places source media, encoding, performance, sound, aesthetics, and triple-editing within one workflow. Their value lies in problem awareness; current official documentation must replace outdated buttons, versions, and download methods.

- [Twixtor Frame Interpolation: Principles and Advanced Techniques](https://www.bilibili.com/opus/82666859045536657)
- [Complete MAD／AMV Production Troubleshooting Guide](https://www.bilibili.com/video/BV1j4411y7sC/)

## AI Material Is Maintained Separately

Generative images and video, character voices, source separation, MAID, platform labeling, and disclosure requirements change rapidly. They are maintained on a separate page: [AI-Assisted Creation and MAID](/en/tools/ai).
