---
title: Choosing MAD·AMV Software
description: Features, intended users, and official links for Premiere Pro, DaVinci Resolve, Final Cut Pro, Kdenlive, VEGAS, After Effects, Fusion, Blender, and more, plus quick tables of image, audio, and encoding tools.
---

# Choosing MAD·AMV Software

::: tip Key points
- **Editing**: Premiere Pro has the most tutorials; DaVinci Resolve's free version is very complete; Kdenlive is free and open source; Final Cut Pro is Mac-only.
- **Compositing**: After Effects is the mainstream choice in MAD circles; Fusion and Blender are free alternatives.
- **Encoding and inspection**: FFmpeg, MediaInfo, and MKVToolNix—all free.
- Prices, versions, and system requirements change often; download and buy from official pages.
:::

## Editors Compared

| Software | Platforms | Cost | Good for | Watch out for |
| --- | --- | --- | --- | --- |
| Premiere Pro | Win/Mac | Subscription | Learning from Chinese tutorials; working with After Effects | Subscription cost; media cache, dynamic link, and plugin version issues |
| DaVinci Resolve | Win/Mac/Linux | Free version + paid Studio | One application for editing, compositing, grading, and audio | Fusion's node-based compositing takes getting used to |
| Final Cut Pro | Mac | Paid | Apple users who value fast, responsive editing | Test XML and third-party effects before cross-platform handoff |
| Kdenlive | Win/Mac/Linux | Free, open source | Tight budgets, Linux, long-term openability | Smaller plugin ecosystem |
| VEGAS Pro | Win | Paid | Common in early Chinese tutorials; intuitive audio and timeline | Record exact versions and plugins for old projects |

Official links:
[Premiere Pro](https://www.adobe.com/products/premiere.html) ([technical requirements](https://helpx.adobe.com/premiere/desktop/get-started/technical-requirements/adobe-premiere-pro-technical-requirements.html), [user guide](https://helpx.adobe.com/premiere-pro/user-guide.html)) ·
[DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) ([training](https://www.blackmagicdesign.com/products/davinciresolve/training), [support and manuals](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion)) ·
[Final Cut Pro](https://www.apple.com/final-cut-pro/) ([user guide](https://support.apple.com/guide/final-cut-pro/welcome/mac)) ·
[Kdenlive](https://kdenlive.org/) ([installation](https://docs.kdenlive.org/en/getting_started/installation.html), [manual](https://docs.kdenlive.org/)) ·
[VEGAS Pro](https://www.vegascreativesoftware.com/) ([help center](https://www.vegascreativesoftware.info/))

## Compositing, Motion Design, and 3D

| Software | Strengths | Notes |
| --- | --- | --- |
| After Effects | Layer compositing, masks, tracking, text, expressions, motion graphics | The most plugins. Not meant as the main editor: set the structure in your editor first, then send the shots that need work to AE |
| Fusion | Node compositing, tracking, keying, particles, 3D space | Built into DaVinci Resolve; also available as Fusion Studio |
| Blender | Modeling, animation, rendering, tracking, compositing | Free and open source; good for original scenes, 3D text, projection, and spatial transitions |
| Cinema 4D | Motion graphics and 3D design | Often paired with AE; check versions, renderers, and team licenses |

Official links:
[After Effects](https://www.adobe.com/products/aftereffects.html) ([system requirements](https://helpx.adobe.com/after-effects/system-requirements.html), [user guide](https://helpx.adobe.com/after-effects/user-guide.html)) ·
[Fusion](https://www.blackmagicdesign.com/products/fusion) ([support](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion)) ·
[Blender](https://www.blender.org/download/) ([requirements](https://www.blender.org/download/requirements/), [manual](https://docs.blender.org/manual/en/latest/)) ·
[Cinema 4D](https://www.maxon.net/en/cinema-4d) ([training](https://cineversity.maxon.net/))

## Images

| Software | Use | Official link |
| --- | --- | --- |
| Photoshop | Layer separation, retouching, selections, textures, frame-by-frame work | [Adobe](https://www.adobe.com/products/photoshop.html) |
| Krita | Open-source painting, layers, animation | [Krita](https://krita.org/) |
| GIMP | Open-source raster editing | [GIMP](https://www.gimp.org/) |
| Illustrator | Vector graphics, type outlines, layout | [Adobe](https://www.adobe.com/products/illustrator.html) |
| Inkscape | Open-source vector editing | [Inkscape](https://inkscape.org/) |

## Audio

| Software | Use | Official link |
| --- | --- | --- |
| Adobe Audition | Waveform editing, multitrack, noise reduction, Adobe integration | [Adobe](https://www.adobe.com/products/audition.html) |
| REAPER | Multitrack, routing, automation, rich plugin support | [REAPER](https://www.reaper.fm/) |
| Audacity | Open-source waveform editing and recording | [Audacity](https://www.audacityteam.org/) |

Separating vocals or accompaniment from a finished song gives only an estimate, with leftover artifacts and quality loss. It cannot be treated as official stems.

## Encoding and Inspection

| Tool | Use | Official link |
| --- | --- | --- |
| FFmpeg / ffprobe | Transcoding, muxing, filters, batch jobs, media inspection | [Documentation](https://ffmpeg.org/documentation.html) |
| MKVToolNix | Merging, extracting, and editing MKV properties | [Documentation](https://mkvtoolnix.download/doc/mkvtoolnix.html) |
| MediaInfo | Container, codec, frame rate, color, and audio track details | [Website](https://mediaarea.net/en/MediaInfo) |
| HandBrake | Transcoding with a graphical interface | [Documentation](https://handbrake.fr/docs/) |
| LosslessCut | Fast trimming and remuxing without re-encoding | [GitHub](https://github.com/mifi/lossless-cut) |
| VapourSynth | A scriptable frameserver for video processing | [Documentation](https://www.vapoursynth.com/doc/) |

## Reading Old Tutorials

Early MAD Bar and Bilibili tutorials often use Premiere CS6, After Effects CS6, older VEGAS, QuickTime, and codec packs. Their ideas are often still useful, but menus and settings have changed, and the 32-bit components, old plugins, and cloud-drive links they rely on have probably stopped working. Check the software's current official documentation before following them.

## Related Pages

- [Tools Overview](/en/tools/): combining tools by production stage;
- [Plugins and Scripts](/en/tools/plugins-ai): choosing plugins and managing compatibility;
- [Video Fundamentals and Encoding](/en/tools/encoding): the principles behind encoding and inspection tools.
