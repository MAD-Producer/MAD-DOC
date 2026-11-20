---
title: MAD·AMV Creation Tools Overview
description: What software you need to make MAD·AMV—a workflow map from source inspection, editing, compositing, and audio to export; three common setups (Adobe, DaVinci Resolve, free and open source); plus hardware and project-archiving tips.
---

# MAD·AMV Creation Tools Overview

::: tip Key points
- You need only four kinds of tools: **a source inspection tool + an editor + an encoder + (optionally) a compositor**.
- Three common setups: Adobe (Premiere + After Effects), DaVinci Resolve all-in-one, and Kdenlive + Blender (free and open source).
- Pick software by task; there is no “beginner software” versus “expert software.”
- Use built-in features first; buy plugins only when they clearly save time.
- Keep projects openable years later: record software and plugin versions and keep backups.
:::

## Workflow and Tools

| Stage | What you do | Common tools |
| --- | --- | --- |
| Planning | Choose a theme and song, list shots, record sources | Docs/spreadsheets, PureRef, Eagle |
| Inspecting sources | Check container, codec, frame rate, color, audio tracks | MediaInfo, ffprobe |
| Demuxing | Extract audio and video tracks from MKV and other containers | MKVToolNix, FFmpeg |
| Transcoding / proxies | Convert to an edit-friendly format or make lightweight proxies | FFmpeg, HandBrake, built-in proxy tools |
| Editing | Shot choice, structure, pacing, speed changes, sound | Premiere Pro, DaVinci Resolve, Final Cut Pro, Kdenlive |
| Compositing / motion | Masks, tracking, text, particles, 3D, animating stills | After Effects, Fusion, Blender |
| Images | Layer separation, retouching, drawing, vectors | Photoshop, Krita, GIMP, Illustrator, Inkscape |
| Audio | Cleanup, mixing, sound effects, loudness | Audition, REAPER, Audacity |
| Export and checks | Encoding, frame-by-frame checks, upload | Media Encoder, FFmpeg, MediaInfo |

## Three Common Setups

**A. Adobe**: Premiere Pro for editing, After Effects for compositing and animating stills, Photoshop/Illustrator for images, Audition for audio, Media Encoder or FFmpeg for export. The most Chinese tutorials and plugins; the downsides are the subscription and frequent version and plugin compatibility issues.

**B. DaVinci Resolve all-in-one**: Resolve handles editing, Fusion compositing, grading, and Fairlight audio in one application, and the free version is enough; add Blender for 3D and Krita/GIMP for images. Less switching between applications; the downside is that Fusion's node-based approach is very different from After Effects' layers.

**C. Free and open source**: Kdenlive for editing, Blender for compositing and 3D, Krita/GIMP/Inkscape for images, Audacity for audio, and FFmpeg, MKVToolNix, and MediaInfo for technical work. No cost, and projects stay openable longer; the learning curve is not small.

See [Software](/en/tools/software) for details on each application.

## Deciding Whether to Add a Tool

Ask in order:

1. Can the main application do it with built-in features?
2. Can it be reused through precomps, expressions, nodes, or scripts?
3. Will a third-party plugin really save a lot of time?
4. Does the plugin support your application version, OS, and GPU?
5. Will collaborators and future archive environments have legitimate licenses too?

Plugins solve specific problems; they are no substitute for a work's own style. See [Plugins and Scripts](/en/tools/plugins-ai).

## Hardware

- **Editing**: CPU, hardware decoding, and drive speed decide whether long-GOP footage such as H.264/H.265 plays smoothly. Small files are not necessarily easy to edit; make proxies when playback stutters.
- **Compositing**: After Effects depends mostly on RAM and cache; Resolve/Fusion, Blender, and AI tools depend more on the GPU and VRAM.
- **Storage**: keep current projects and cache on an NVMe SSD; back up archives separately.
- **Specs**: official minimum requirements only guarantee that the software runs. Choose hardware for the resolutions, frame rates, codecs, and effects you actually use, then check the latest official requirements.

## Keeping Projects Openable for Years

- Record exact software and plugin versions;
- Collect the fonts, LUTs, scripts, and plugin list the project uses (do not bundle installers you have no right to distribute);
- Render key dynamically linked comps to high-quality intermediates;
- Keep the master, upload versions, subtitles, thumbnail, notes, and checksums;
- Follow the 3-2-1 rule: three copies, two media types, one off-site.

For folder structure and a source manifest template, see [Source Media and Project Management](/en/tools/footage).

## References

- [Adobe Premiere technical requirements](https://helpx.adobe.com/premiere/desktop/get-started/technical-requirements/adobe-premiere-pro-technical-requirements.html)
- [Adobe After Effects system requirements](https://helpx.adobe.com/after-effects/system-requirements.html)
- [Official DaVinci Resolve training](https://www.blackmagicdesign.com/products/davinciresolve/training)
- [Kdenlive installation and system requirements](https://docs.kdenlive.org/en/getting_started/installation.html)
- [Blender system requirements](https://www.blender.org/download/requirements/)
- [FFmpeg documentation](https://ffmpeg.org/documentation.html)

## Related Pages

- [Software](/en/tools/software): features and official links for each application;
- [Source Media and Project Management](/en/tools/footage): sources, folder structure, and archiving;
- [Video Fundamentals and Encoding](/en/tools/encoding): export settings and image-quality problems;
- [Plugins and Scripts](/en/tools/plugins-ai): choosing and recording plugins;
- [AI Assistance and MAID](/en/tools/ai): what AI tools can do and how to label their use.
