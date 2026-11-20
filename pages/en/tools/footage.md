---
title: Source Media and Project Management
description: Where to obtain MAD·AMV source media lawfully, what to do when MKV/HEVC/10-bit files will not import, the difference between remuxing, transcoding, and proxies, frame-rate and color pitfalls, and a project folder structure and source manifest template.
---

# Source Media and Project Management

::: tip Key points
- “Free to download,” “no watermark,” and “found it online” do not amount to permission. Record each source and its license as you go.
- When a file will not import, use MediaInfo to see whether the problem is the **container**, the **codec**, or **bit depth / frame rate** before deciding to remux, transcode, or use proxies.
- Container not supported: remux (no quality loss). Codec too heavy: transcode to an intermediate. Computer too slow: use proxies.
- Keep original sources in a read-only folder and manage projects with a fixed folder structure and version numbers.
- For encoding principles and export settings, see [Video Fundamentals and Encoding](/en/tools/encoding).
:::

## Where Source Media Can Come From

| Source | Typical content | What to record |
| --- | --- | --- |
| Physical media you bought | Anime, films, music, game extras | Edition, region, disc number, extraction date; whether bypassing technical protection is allowed depends on local law |
| Legitimate digital purchases / downloads | Content officially offered as downloadable files | Store, order or license, format, permitted use |
| Rights-holder asset packs | PVs, trailers, press kits, contest-supplied material | Publisher, original page, terms, date |
| Open-license platforms | Images, fonts, sound effects, music, video | Exact license version, author, attribution requirements, download date |
| Public domain | Material whose protection has expired or been waived | Basis for the judgment and jurisdiction |
| Author permission | Illustrations, photos, animation, music, project files | Who granted it, scope, platforms, duration, whether modification and redistribution are allowed |
| Your own material | Drawings, footage, 3D, recordings | Contributors, plus any models, fonts, or textures used |

This site does not list pirate source sites, cracking tools, or ways to evade platform copyright detection.

## Why MKV, HEVC, and 10-bit Often Fail to Import

First separate three things:

- **Container**: MP4, MKV, MOV—the “box” holding several tracks;
- **Codec**: H.264, H.265/HEVC, AV1, ProRes, DNxHR—how the video is compressed;
- **Pixels and color**: 8-bit/10-bit, 4:2:0/4:2:2, HDR/SDR—how the picture is represented.

If the software says “.mkv not supported,” it is usually the container. If it complains about HEVC, the system may lack a decoder, the bit depth may be too high, hardware may not support it, or the frame rate may be variable. Check the actual details with MediaInfo or `ffprobe` before acting. **Renaming the extension does not change the container or codec.**

## Remux, Transcode, or Proxy?

| Method | When to use it | Quality | Tools |
| --- | --- | --- | --- |
| Remux | The editor only lacks support for the container | No loss | MKVToolNix, FFmpeg |
| Transcode | The codec is too heavy, so editing stutters or import fails | Near-lossless to an intermediate codec, but files are large; converting to a lossy format again causes generation loss | FFmpeg, HandBrake |
| Proxy | Your computer cannot handle the originals | Used only for editing; export switches back to the originals automatically | Built into editors |

## Frame Rate

Anime sources may mix 23.976, 24, 25, 29.97, 30, and variable frame rates. Before you start, decide:

1. Which frame rate the timeline uses;
2. Whether the source is genuinely high frame rate, or duplicated frames, interlaced, or variable;
3. Whether speed changes use frame blending, optical flow, or frame-by-frame reconstruction;
4. Whether audio drifts out of sync on a long timeline.

Interpolation is not a universal quality upgrade. Occlusion, fast motion, flashes, particles, and cuts easily produce stretching, ghosting, and warping. Check shot by shot and keep the original frame rate where it does not work.

## Color and Image

- Misreading limited versus full range makes blacks look washed out or crushed and highlights clip;
- HDR footage on an SDR timeline needs proper color management and mapping;
- Sharpening cannot restore detail already lost to low-bitrate compression;
- Removing subtitles or logos damages the original picture and cannot be called “lossless”;
- Before unifying the grade, think about each shot's role so you do not flatten day, night, and flashback.

## Recommended Folder Structure

```text
project-name/
├─ 00_admin/          # summary, permissions, source list, version log
├─ 01_audio/          # music, dialogue, sound effects
├─ 02_footage/        # original sources, read-only
├─ 03_proxy/          # rebuildable proxies
├─ 04_graphics/       # images, font notes, vectors, textures
├─ 05_project/        # editing, compositing, 3D projects
├─ 06_renders/        # intermediate renders and cache
├─ 07_exports/        # master, upload versions, thumbnail, subtitles
└─ 99_archive/        # manifests, checksums, final archive
```

Name files with content, shot or episode, version, and date. Use version numbers such as `v03`, not names like “final2_really_final.”

## Source Manifest Template

| Field | Example |
| --- | --- |
| `asset_id` | anime-a_ep03_001 |
| Name | Series A, episode 3 |
| Source | Rights holder / store / author |
| Source URL | Original page or order record |
| Date obtained | YYYY-MM-DD |
| License / use | Personal practice, contest-supplied, CC BY 4.0, etc. |
| Container / codec | MKV / HEVC Main10 |
| Frame rate | 23.976 CFR |
| Resolution | 1920×1080 |
| Audio / subtitles | Japanese FLAC, Chinese ASS subtitles |
| Checksum | SHA-256 |
| Notes | HDR, needs proxy, not redistributable |

## Old Tutorials

The MAD Tieba newcomer navigation post once linked threads on extracting MKV, finding images, finding source episodes, and using MKVToolNix—evidence that preparing source media has always been where newcomers get stuck. Many of those threads and images are gone, and some pointed to unlicensed resources. The methods that still apply are collected on this page; the original thread index is in the [Source Index](/en/resources/#mad-tieba).

## References

- [MediaInfo](https://mediaarea.net/en/MediaInfo)
- [MKVToolNix documentation](https://mkvtoolnix.download/doc/mkvtoolnix.html)
- [FFmpeg documentation](https://ffmpeg.org/documentation.html)
- [HandBrake documentation](https://handbrake.fr/docs/)
- [VapourSynth documentation](https://www.vapoursynth.com/doc/)
- [VCB-Studio guides](https://guides.vcb-s.com/): video fundamentals, common defects, and encoding.
- [一般有趣: “Frame Interpolation in AMV: Principles and Advanced Techniques”](https://www.bilibili.com/opus/82666859045536657): a Chinese translation with examples.

## Related Pages

- [Video Fundamentals and Encoding](/en/tools/encoding): containers, codecs, color, frame rate, and export;
- [Tools Overview](/en/tools/): where source handling fits in the workflow;
- [Contest and Submission Guidelines](/en/mad/contest-rules): what contests require about source media.
