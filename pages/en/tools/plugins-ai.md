---
title: MAD·AMV Plugins and Scripts
description: Common After Effects plugins for MAD·AMV (Particular, Sapphire, Mocha, Twixtor, Optical Flares, and more) sorted by need, with built-in alternatives, a compatibility record template, and archiving notes.
---

# MAD·AMV Plugins and Scripts

::: tip Key points
- Confirm that built-in features cannot do the job before reaching for a plugin, and record the exact version of every plugin you use.
- Do not download “plugin packs” of unknown origin: unclear licensing, version conflicts, and projects you cannot archive.
- When handing off or archiving, also render the shots that use plugins, in case the recipient does not have them.
- For the host applications themselves, see [Software](/en/tools/software); for AI tools, see [AI Assistance and MAID](/en/tools/ai).
:::

## Plugins by Need

| Need | Common plugins | Without plugins |
| --- | --- | --- |
| Particles, light, 3D graphics | Maxon Red Giant (Trapcode Particular, etc.) | AE particles and shape layers, Fusion particles, Blender |
| Glows, grading, stylization | Red Giant, Boris FX Sapphire / Continuum | Built-in grading, Glow, layered blurs with blend modes |
| Tracking, stabilization, planar replacement | Boris FX Mocha | Built-in tracking in AE, Resolve, or Blender |
| Retiming, interpolation, motion blur | RE:Vision Effects Twixtor, RSMB | Built-in optical flow, frame blending, Resolve Speed Warp |
| Lens flares, 3D objects | Video Copilot Optical Flares, Element 3D | Built-in lights and compositing, Blender rendering |
| Easing, glows, workflow | Scripts on aescripts + aeplugins | Graph editor, expressions, presets |

Official links:
[Maxon Red Giant](https://www.maxon.net/en/red-giant) ·
[Trapcode Particular](https://www.maxon.net/en/product-detail/red-giant/particles-and-3d/trapcode-particular) ·
[Boris FX Sapphire](https://borisfx.com/products/sapphire/) ·
[Boris FX Mocha](https://borisfx.com/products/mocha-pro/) ·
[RE:Vision Effects](https://revisionfx.com/) ·
[Video Copilot](https://www.videocopilot.net/products/) ·
[aescripts + aeplugins](https://aescripts.com/)

Plugins are often acquired, merged, or renamed. Red Giant, for example, now uses a single installer, so product names, folders, and install paths in old tutorials may no longer match.

## Deciding Whether to Use a Plugin

Think it through in this order: **the problem → whether built-in tools solve it → which plugin solves it → which versions it supports → what to do without it**.

## Compatibility Record Template

When you use a third-party plugin, record in the project:

```yaml
plugin: plugin name
vendor: vendor
license_owner: license holder
version: exact version
host: After Effects version
os: operating system and version
gpu: GPU and driver
installer_source: official download URL
project_usage: which comps / shots use it
fallback_render: whether a plugin-free render exists
```

Do not include paid plugin installers, serial numbers, or other license credentials in projects you hand to a team.

## Lessons from Community Tutorials That Still Apply

- 一般有趣's translated [Twixtor interpolation tutorial](https://www.bilibili.com/opus/82666859045536657): judging whether a shot suits interpolation and spotting warping matters more than memorizing settings.
- 玖钥桑's [complete guide to MAD/AMV production problems](https://www.bilibili.com/video/BV1j4411y7sC/): covers sources, encoding, stutter, sound, aesthetics, and re-edits in one workflow.

The ideas still hold; follow current official documentation for specific buttons and versions.

## Related Pages

- [Software](/en/tools/software): host applications and their official links;
- [AI Assistance and MAID](/en/tools/ai): AI cutouts, source separation, generated footage, and labeling;
- [Tools Overview](/en/tools/): where plugins fit in the workflow.
