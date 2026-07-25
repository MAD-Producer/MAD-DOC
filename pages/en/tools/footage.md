---
title: Source Media, Encoding, and Project Management
description: Lawful sources, technical inspection, proxies, organization, and long-term preservation for MAD·AMV source media
---

# Source Media, Encoding, and Project Management

::: tip Scope
This entry covers lawful sources, media structure, project management, and archiving. It does not list piracy sites, cracked tools, or methods for evading platform copyright identification.
:::

## Sources

| Source | Suitable material | Required record |
| --- | --- | --- |
| Purchased physical media | Anime, film, music, and bundled game content | Edition, region, disc number, and extraction date; whether technical protection may be bypassed depends on local law |
| Authorized digital purchase／download | Content officially supplied as downloadable files | Store, order or license, download format, and permitted use |
| Rights-holder media kit | PV, trailer, press kit, or contest-designated material | Publisher, original page, terms of use, and publication date |
| Open-license platform | Images, fonts, sound effects, music, and video | Exact license version, author, attribution requirements, and download date |
| Public domain | Material whose rights have expired or that has been explicitly dedicated to the public domain | Jurisdiction, basis for the determination, and original archive |
| Creator permission | Illustration, photography, animation, music, and project files | Licensor, scope, platforms, term, and whether modification and redistribution are permitted |
| Self-produced material | Drawing, live footage, 3D, and recordings | Participants and third-party dependencies such as models, fonts, and textures |

“Free to download,” “no watermark,” and “found online” are not licenses.

## Why MKV, HEVC, and 10-bit Media Often Fail to Import

Keep three concepts separate:

- **Container:** MP4, MKV, and MOV are boxes that hold multiple tracks;
- **Codec:** H.264, H.265/HEVC, AV1, ProRes, and DNxHR determine how video is compressed;
- **Pixels and color:** 8-bit/10-bit, 4:2:0/4:2:2, and HDR/SDR determine how the image is represented.

If software reports that “.mkv is unsupported,” the container may be unsupported. An HEVC error may instead involve a system decoder, bit depth, hardware support, or variable frame rate. Inspect the actual media with MediaInfo or `ffprobe` before processing it; renaming the extension does not change the container or codec.

## Demuxing, Transcoding, and Proxies

### Demuxing／remuxing

Moves audio and video tracks from one container to another without recompression. It is fast and causes no quality loss, but it cannot solve an unsupported codec. MKVToolNix and FFmpeg can both perform the operation.

### Transcoding

Decodes and encodes the media again. It can turn a highly compressed delivery format into an editing-friendly intermediate codec, but requires more space; using another lossy codec also introduces generational loss.

### Proxy

Creates a temporary, low-resolution, easy-to-decode copy for editing, then reconnects to the original media for final output. A proxy does not improve source quality; its purpose is responsive interaction.

## Frame-Rate Processing

Anime sources may mix 23.976, 24, 25, 29.97, or 30 fps and variable frame rates. Before processing, determine:

1. The target timeline frame rate;
2. Whether the source is genuinely high frame rate, repeated-frame, interlaced, or variable-frame-rate material;
3. Whether speed changes require frame blending, optical flow, or frame-by-frame reconstruction;
4. Whether audio synchronization drifts over a long timeline.

Frame interpolation is not a universal quality enhancement. Occlusion, fast movement, flashes, particles, and shot changes can create stretching, ghosting, and “jelly” artifacts and require shot-by-shot inspection. Keep the original frame rate or use another method when a shot cannot be reconstructed reliably.

## Color and Image Consistency

- Misinterpreting limited and full range can produce raised blacks, crushed blacks, or abnormal highlights;
- HDR material entering an SDR timeline requires correct color management and mapping;
- Aggressive sharpening cannot restore detail already lost to low-bitrate compression;
- Removing burned-in subtitles, station logos, or text generally damages the source image and should not be presented as “lossless”;
- Before unifying color, determine the narrative purpose of each shot so that day/night and memory layers are not flattened.

## Recommended Directory Structure

```text
project-name/
├─ 00_admin/          # brief, permissions, source list, version history
├─ 01_audio/          # music, dialogue, sound effects
├─ 02_footage/        # original source media, read-only
├─ 03_proxy/          # reproducible proxies
├─ 04_graphics/       # images, font notes, vectors, textures
├─ 05_project/        # editing, compositing, and 3D projects
├─ 06_renders/        # intermediate renders and cache
├─ 07_exports/        # masters, release encodes, covers, subtitles
└─ 99_archive/        # manifests, checksums, final archive
```

Filenames should include at least the content, shot or episode, version, and date. Use explicit version numbers instead of unstable names such as “final.”

## Source Manifest Template

| Field | Example |
| --- | --- |
| `asset_id` | anime-a_ep03_001 |
| Name | Work A, Episode 3 |
| Source entity | Rights holder／store／creator |
| Source URL | Original page or order record |
| Acquisition date | YYYY-MM-DD |
| License／use | Personal practice, contest-specified, CC BY 4.0, etc. |
| Container／codec | MKV / HEVC Main10 |
| Frame rate | 23.976 CFR |
| Resolution | 1920×1080 |
| Audio／subtitles | Japanese FLAC, Chinese ASS subtitles |
| Checksum | SHA-256 |
| Notes | HDR, proxy required, no redistribution |

## Conclusions Localized from Historical Tutorials

MAD Bar’s newcomer navigation once listed posts on MKV extraction, image search, locating original footage, and MKVToolNix. They show that source preprocessing has long been a central problem for newcomers, but some posts and images are now unavailable, and older tutorials may use obsolete software or point to unauthorized sources.

MAD DOC preserves their **problem structure and original-post index**, localizes generally applicable knowledge, and replaces old download links with current official documentation. See the original navigation in the [Source Index (Chinese)](/resources/#mad吧与中文社区).

For encoding parameters, frame rate, color information, and delivery checks, see [Encoding and Delivery (Chinese)](/tools/encoding).

## Tool Documentation

- [MediaInfo](https://mediaarea.net/en/MediaInfo)
- [MKVToolNix documentation](https://mkvtoolnix.download/doc/mkvtoolnix.html)
- [FFmpeg documentation](https://ffmpeg.org/documentation.html)
- [HandBrake documentation](https://handbrake.fr/docs/)
- [VapourSynth documentation](https://www.vapoursynth.com/doc/)
- [VCB-Studio guides](https://guides.vcb-s.com/) — Video fundamentals, common defects, VapourSynth, and x264/x265 encoding.
- [一般有趣: “Frame Interpolation in AMV: Principles and Advanced Techniques”](https://www.bilibili.com/opus/82666859045536657) — A translation with Chinese examples; read it alongside documentation for the current plugin version.
