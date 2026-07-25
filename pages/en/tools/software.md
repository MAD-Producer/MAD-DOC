---
title: Editing, Compositing, and Supporting Software
description: Capabilities, use cases, and official sources for software used across MAD·AMV workflows
---

# Editing, Compositing, and Supporting Software

This is a capability map, not a ranking. Prices, versions, and system requirements change; use official pages for downloads and purchases.

## Primary Editing

### Adobe Premiere Pro

Suitable for long timelines, media management, proxies, video and audio editing, subtitles, and collaboration with After Effects. It has a large body of Chinese MAD community tutorials. Consider subscription cost, media cache, Dynamic Link, and plugin versions.

- [Product page](https://www.adobe.com/products/premiere.html)
- [Technical requirements](https://helpx.adobe.com/premiere/desktop/get-started/technical-requirements/adobe-premiere-pro-technical-requirements.html)
- [User guide](https://helpx.adobe.com/premiere-pro/user-guide.html)

### DaVinci Resolve

Combines editing, Fusion node compositing, color grading, Fairlight audio, and delivery in one project. The free version includes substantial core functionality, while Studio adds advanced features; consult the official comparison for current differences.

- [Product page](https://www.blackmagicdesign.com/products/davinciresolve)
- [Official training](https://www.blackmagicdesign.com/products/davinciresolve/training)
- [Support and manuals](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion)

### Final Cut Pro

A macOS application using a Magnetic Timeline and library-based organization, suitable for creators who prioritize editing responsiveness and the Apple ecosystem. Cross-platform teams should test XML and third-party effects before handoff.

- [Product page](https://www.apple.com/final-cut-pro/)
- [User guide](https://support.apple.com/guide/final-cut-pro/welcome/mac)

### Kdenlive

A cross-platform, open-source editor supporting proxies, keyframes, effects, and multitrack editing. It is valuable for limited budgets, Linux workflows, and long-term accessibility.

- [Project website](https://kdenlive.org/)
- [System requirements and installation](https://docs.kdenlive.org/en/getting_started/installation.html)
- [Manual](https://docs.kdenlive.org/)

### VEGAS Pro

Common in early Chinese MAD/AMV tutorials, with approachable audio and timeline operations. Archiving older projects requires exact software and plugin versions. For new projects, compare current licensing, host compatibility, and the team environment.

- [Product page](https://www.vegascreativesoftware.com/)
- [Help center](https://www.vegascreativesoftware.info/)

## Compositing, Motion Design, and 3D

### After Effects

Strengths include layer-based compositing, masking, tracking, text, expressions, motion graphics, and a large third-party plugin ecosystem. It is not a primary editor designed for browsing long-form footage; determining structure in an editing application before sending selected shots is generally more stable.

- [Product page](https://www.adobe.com/products/aftereffects.html)
- [System requirements](https://helpx.adobe.com/after-effects/system-requirements.html)
- [User guide](https://helpx.adobe.com/after-effects/user-guide.html)

### Fusion

A node-based compositing tool integrated into DaVinci Resolve and also available as Fusion Studio. Suitable for tracking, rotoscoping, compositing, particles, and 3D space. Node graphs represent image-processing relationships explicitly.

- [Fusion product page](https://www.blackmagicdesign.com/products/fusion)
- [Resolve／Fusion support](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion)

### Blender

An open-source 3D suite including modeling, animation, rendering, tracking, compositing, and a video sequence editor. It can create original scenes, camera moves, 3D text, projections, and complex spatial transitions.

- [Download](https://www.blender.org/download/)
- [System requirements](https://www.blender.org/download/requirements/)
- [User manual](https://docs.blender.org/manual/en/latest/)

### Cinema 4D

Known for motion-graphics and 3D-design workflows and often paired with After Effects. Confirm versions, renderers, plugins, and team licenses before selecting it.

- [Product page](https://www.maxon.net/en/cinema-4d)
- [Official training](https://cineversity.maxon.net/)

## Raster and Vector Graphics

| Software | Suitable tasks | Official source |
| --- | --- | --- |
| Photoshop | Layers, retouching, selections, textures, frame-by-frame processing | [Adobe](https://www.adobe.com/products/photoshop.html) |
| Krita | Open-source painting, layers, animation | [Krita](https://krita.org/) |
| GIMP | Open-source raster editing | [GIMP](https://www.gimp.org/) |
| Illustrator | Vector graphics, outlined type, layout elements | [Adobe](https://www.adobe.com/products/illustrator.html) |
| Inkscape | Open-source vector editing | [Inkscape](https://inkscape.org/) |

## Audio

| Software | Suitable tasks | Official source |
| --- | --- | --- |
| Adobe Audition | Waveform and multitrack editing, noise reduction, Adobe workflow integration | [Adobe](https://www.adobe.com/products/audition.html) |
| REAPER | Multitrack editing, routing, automation, and plugin ecosystem | [REAPER](https://www.reaper.fm/) |
| Audacity | Open-source waveform editing, recording, and basic processing | [Audacity](https://www.audacityteam.org/) |

Separating vocals or accompaniment from a released master produces only an estimate, commonly with residual sound, phase problems, and high-frequency damage. It must not be labeled as the original stems.

## Encoding and Diagnostics

| Tool | Primary use | Official source |
| --- | --- | --- |
| FFmpeg／ffprobe | Transcoding, muxing, filters, batch processing, and media inspection | [Documentation](https://ffmpeg.org/documentation.html) |
| MKVToolNix | MKV merging, inspection, extraction, and property editing | [Documentation](https://mkvtoolnix.download/doc/mkvtoolnix.html) |
| MediaInfo | Reads container, codec, frame rate, color, and track information | [Website](https://mediaarea.net/en/MediaInfo) |
| HandBrake | Cross-platform transcoding with a graphical interface | [Documentation](https://handbrake.fr/docs/) |
| LosslessCut | Fast FFmpeg-based cutting and remuxing without re-encoding | [GitHub](https://github.com/mifi/lossless-cut) |
| VapourSynth | Scriptable frame server and video processing | [Documentation](https://www.vapoursynth.com/doc/) |

## Version Labels for Historical Tutorials

Early MAD Bar and Bilibili tutorials may use Premiere CS6, After Effects CS6 or older CC versions, older VEGAS releases, QuickTime, outdated codec packs, and discontinued cloud drives. These resources preserve the original record and receive one of the following labels:

- **Historically valid:** Useful for understanding the workflow of its period;
- **Interface outdated:** The principles still apply, but menus and parameters have changed;
- **Compatibility risk:** Depends on 32-bit components, an old host, or a discontinued plugin;
- **Dead link:** The body, images, attachments, or mind map are missing;
- **Current alternative:** Points to current official documentation.

These labels preserve both community memory and present-day usability.
