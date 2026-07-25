---
title: MAD·AMV Creation Tools
description: A map of tools and selection principles covering source media, editing, compositing, audio, and delivery
---

# MAD·AMV Creation Tools

Software is selected by task, not ranked for “beginners” and “experts.” A stable minimum workflow generally requires only **a media-analysis tool, one primary editing application, one encoding tool, and optional compositing, image, or audio software**.

## Workflow Map

| Stage | Primary tasks | Common tools |
| --- | --- | --- |
| Planning | Theme, music selection, shot list, rights records | Documents and spreadsheets, PureRef, Eagle; optionally a conversational model for organization |
| Inspect source media | Check container, codec, frame rate, color, and tracks | MediaInfo, ffprobe |
| Demux | Extract tracks from legally held MKV and other containers | MKVToolNix, FFmpeg |
| Transcode／proxy | Convert to an editing-friendly intermediate codec and create low-load proxies | FFmpeg, HandBrake, built-in proxy workflows |
| Primary editing | Shot selection, structure, rhythm, basic speed changes, and sound | Premiere Pro, DaVinci Resolve, Final Cut Pro, Kdenlive |
| Compositing／motion design | Masks, tracking, text, particles, 3D, and animation of still images | After Effects, Fusion, Blender |
| Image processing | Layers, retouching, drawing, and vector graphics | Photoshop, Krita, GIMP, Illustrator, Inkscape |
| Audio | Cleanup, remixing, sound effects, and loudness | Audition, REAPER, Audacity |
| Output and QC | Encoding, verification, frame-by-frame inspection, and final upload | Media Encoder, FFmpeg, MediaInfo |

## Common Workflow Combinations

### Combination A: General Commercial Workflow

- Premiere Pro: primary editing and proxies;
- After Effects: compositing, motion design, and still-image animation;
- Photoshop／Illustrator: raster and vector graphics;
- Audition: audio processing;
- Media Encoder／FFmpeg: delivery.

Advantages include extensive tutorial, template, and plugin ecosystems. Risks include subscription cost, version compatibility, and third-party plugin dependencies.

### Combination B: Integrated Color and Compositing

- DaVinci Resolve: editing, Fusion compositing, color grading, and Fairlight audio;
- Blender: 3D and complex spatial work;
- Krita／GIMP: images;
- FFmpeg／MKVToolNix: source preprocessing.

Suitable for creators who prefer fewer application changes. Fusion’s node-based approach differs substantially from After Effects’ layer-based workflow.

### Combination C: Free and Open-Source Workflow

- Kdenlive: primary editing and proxies;
- Blender: compositing, 3D, and some editing;
- Krita／GIMP／Inkscape: images;
- Audacity: audio;
- FFmpeg, MKVToolNix, and MediaInfo: technical processing.

Open source does not eliminate the learning curve, but projects are more likely to remain accessible over time and carry less subscription and licensing pressure.

## Tool Selection Order

Evaluate tools in the following order:

1. Can the primary application’s native features complete the task?
2. Can the method be reused through precompositions, expressions, nodes, or scripts?
3. Does a third-party plugin save a substantial amount of time?
4. Does the plugin support the host version, operating system, and GPU?
5. Do collaborators and the future archival environment also have valid licenses?

A plugin should solve a defined problem rather than substitute for a work’s style.

## Hardware Performance Factors

### Editing and Decoding

- CPU performance, hardware decoding support, and storage speed affect navigation through long-GOP footage;
- Memory determines headroom for large projects, caching, and multiple applications;
- An NVMe SSD suits cache and active projects; archives require separate backups;
- Small H.264/H.265 files are not necessarily easy to edit. Create proxies or intermediate files when needed.

### Compositing and 3D

- After Effects is often constrained by memory, cache, and per-frame computation;
- Resolve/Fusion, Blender, and AI tools rely more heavily on GPU performance and VRAM;
- 4K, 32-bit float, denoising, particles, and numerous precompositions rapidly increase resource use.

### Configuration Principles

Minimum requirements indicate only basic operation. Evaluate hardware against the typical project’s resolution, frame rate, source codecs, maximum duration, concurrent applications, common effects, and budget, then compare the result with current official requirements. Because requirements change with software versions, MAD DOC provides official entry points rather than a permanently fixed hardware list.

## Keeping Projects Openable

- Record exact software and plugin versions;
- Collect a list of fonts, LUTs, scripts, and plugins used; do not include installers that you are not authorized to distribute;
- Render critical dynamic links into high-quality intermediate files;
- Retain important shots both with and without alpha;
- Preserve the final master, release encode, subtitles, cover, description, and checksums;
- Use at least a 3-2-1 backup: three copies, two media types, and one off-site copy.

## Official Documentation

- [Adobe Premiere technical requirements](https://helpx.adobe.com/premiere/desktop/get-started/technical-requirements/adobe-premiere-pro-technical-requirements.html)
- [Adobe After Effects system requirements](https://helpx.adobe.com/after-effects/system-requirements.html)
- [Official DaVinci Resolve training](https://www.blackmagicdesign.com/products/davinciresolve/training)
- [Kdenlive installation and system requirements](https://docs.kdenlive.org/en/getting_started/installation.html)
- [Blender system requirements](https://www.blender.org/download/requirements/)
- [FFmpeg documentation](https://ffmpeg.org/documentation.html)

Related entries: [Source Media and Project Management](/en/tools/footage) · [Encoding and Delivery (Chinese)](/tools/encoding) · [Software](/en/tools/software) · [Plugins and Scripts](/en/tools/plugins-ai) · [AI-Assisted Creation and MAID](/en/tools/ai)
