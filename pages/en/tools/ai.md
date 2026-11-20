---
title: AI-Assisted Creation and MAID
description: What AI can do in MAD·AMV and how the community and contests see it—light assistance versus generated content; tools and risks for cutouts, source separation, generated footage, and character voice cloning; how to write a disclosure; mainland China's AI labeling rules; and the MAID concept.
---

# AI-Assisted Creation and MAID

::: info Verification date
Information on this page was checked as of **2026-07-25**. AI products and platform rules change quickly; the tool list reflects what was available at that time.
:::

::: tip Key points
- **Light assistance** (filtering sources, extracting vocals, rough cutouts, writing expressions) is generally accepted in Bilibili's MAD·AMV community; **using AI to generate main visuals or character voices** is hard for that community to accept.
- **Contests may be stricter than community habits**: IMAC FUN#4 banned even AI assistance. Before entering, send the organizer the specific tool, what it does, and which shots it affects.
- **Character and voice-actor voices carry the highest risk**: cloning an identifiable person's voice without permission may infringe their rights.
- **Publishing in mainland China requires labeling**: since 2025-09-01, AI-generated or synthetic content must be labeled; Bilibili's upload page has an AI label option.
- **MAID** is a term coined by a Chinese MAD creator for MAD made mainly from AI-generated material. It is not a mainstream category.
:::

## Three Levels of AI Use

| Level | Examples | General community view |
| --- | --- | --- |
| Light assistance | Filtering sources, organizing keywords, writing expressions and scripts, checking delivery lists; no generated content in the finished work | Treated as a productivity tool, though contests may ban it outright |
| Source processing | Extracting dialogue/accompaniment, rough cutouts or masks, small repairs, transcription, denoising | Depends on the extent of processing, whether results appear in the finished work, and contest rules |
| Generated content in the finished work | Generated backgrounds, characters, main shots, music, dialogue, or singing | Clearly lower acceptance; must be disclosed explicitly |

If a tool only reduces repetitive work while you still decide the theme, shot choice, pacing, and final judgment, that is assistance. Once generated content replaces a work's main visuals or sound, do not describe it as “assistance.”

## How Contests See It

- [IMAC FUN#4](https://madproducer.com/archives/2355): bans AI and AI-assisted creation, including light uses.
- [Rosa Festa 2026](https://madproducer.com/archives/2348): does not accept fully AIGC animation; this does not mean every other AI use is allowed.
- [MAD Producer's “Standard Rules for MAD Contests”](https://madproducer.com/archives/1309): a general template that each contest may amend.

Do not just ask an organizer “can I use AI?” Say which tool you used, what it did, and which shots it affected. Keep original sources, manual masks, project records, and the organizer's reply. See [Contest and Submission Guidelines](/en/mad/contest-rules#ai).

## Tools by Stage

| Stage | Tools | Uses | What to check |
| --- | --- | --- | --- |
| Planning and research | ChatGPT, Doubao, and other chat models | Break down an emotional arc, generate search terms, tidy subtitles, write expressions | Verify creators, contests, and dates against original pages; do not upload unreleased work |
| Image generation | ChatGPT Images, Doubao/Seedream, Adobe Firefly, ComfyUI | Concept art, backgrounds, original inserts | Whether characters, costumes, and style stay consistent across shots |
| Local edits / outpainting | As above, Firefly Generative Fill, ComfyUI inpaint | Extending frames, cleaning mistakes, repairing manga panels | Whether original linework gets damaged |
| Cutouts | BiRefNet, SAM 2, built-in selection tools | Separating manga characters, replacing backgrounds | Hair, translucency, motion blur, outlines |
| Video segmentation / tracking | SAM 2, built-in AE/Resolve tools | Character masks, local grading, depth of field | Drift at occlusion, fast motion, and cuts |
| Video generation | Seedance, Firefly, and others | Text-to-video, image-to-video, reference camera motion, shot extension | Proportions, hands, mouths, background continuity |
| Source separation | Demucs, UVR | Extracting vocals, dialogue, or accompaniment | Results are estimates, not official stems |
| Dialogue and singing | GPT-SoVITS (TTS), RVC (voice conversion), DiffSinger (singing synthesis) | New lines, narration, character songs | Voice permissions—see the next section |
| Interpolation and upscaling | Built-in smart features, dedicated models | Slow motion, upscaling tests | Duplicated frames misread, warping, invented detail |

Tips:

- Treat automatic cutouts as a first draft, and check them frame by frame against the real background.
- Generate video shot by shot: set durations and composition in your editor first, generate several short clips, then unify grading, masks, and speed by hand.
- Keep the original for A/B comparison when interpolating or upscaling, and check at 100% size, frame by frame, and in normal playback.

## Character Voices: the Riskiest Use

“Making a character speak or sing” covers at least four techniques: TTS (text to speech), voice conversion (changing the timbre of your own recording), singing voice conversion, and singing synthesis. GPT-SoVITS is TTS; RVC is voice conversion. They are not the same thing.

Before publishing:

- Real voices used as reference or training data need clear permission. Being able to hear a voice online does not mean you may train on it or publish with it;
- Recordings, lines, voice-actor performances, and character likenesses may each belong to different rights holders;
- Do not pass synthetic dialogue off as official story content or as the voice actor's own words;
- State “AI synthesis / voice conversion,” the voice source, and the scope of permission in the description;
- Do not distribute character voice models or voice datasets you have no right to share.

A typical case published by China's Supreme People's Court held that an AI voice the public associates with a specific person falls under that person's voice rights, and using it without permission may infringe them. Bilibili's 2026 notice also lists “deceptive AI dubbing” for stricter enforcement.

## Recommended Workflow

1. **Define the use**: write down whether AI assists planning, processes existing material, or generates content for the finished work.
2. **List rights**: sources and licenses for anime, manga, music, voices, reference images, and models.
3. **Edit first, generate second**: set duration, pacing, and composition with placeholder shots.
4. **Generate in short pieces**: shot by shot, rather than generating a whole piece and patching it together.
5. **Composite by hand**: fix masks, motion, color, mouths, sound, and continuity.
6. **Keep records**: tools, model versions, prompts, reference material, generation dates.
7. **Check everything**: character consistency, artifacts, noise, dialogue, rights, and contest limits.
8. **Label**: apply AI labels as required by law, platform features, and contest rules.

## Writing a Disclosure

Let viewers and organizers see exactly what AI contributed rather than just writing “contains AI.” For example:

> From 00:42 to 00:49, this work uses generative video to extend the background; the main character comes from the creator's own design sheet. The dialogue at 01:10 was synthesized with TTS from a reference voice used with permission. Other sources and editing details are listed in the source sheet. Tools and versions: …. All generated clips were manually masked, graded, and composited. The platform's AI-generated content label is enabled.

At minimum, state: which shots and sounds were generated or processed; tools and versions; sources and permissions for reference material and voices; which parts were done by hand; the platform AI label and contest declaration.

## Rules in Mainland China

- The *Measures for Labeling AI-Generated Synthetic Content* took effect on **2025-09-01**, covering text, images, audio, video, and virtual scenes. They distinguish visible labels from labels embedded in file metadata; publishers must declare such content and must not remove or alter the labels.
- Bilibili's 2026-05-15 notice: all AI-generated or synthetic content must be labeled, and the AI label option has moved to the first level of the upload page. Missing labels may be added by the platform, or the upload rejected or removed; deceptive AI dubbing and face swaps are handled more strictly.
- Labeling only addresses disclosure. It does not grant permission to use the original anime, music, character likeness, voice-actor voices, or training material.

## About MAID and the 2024 Material

“MAID” was coined by Bilibili MAD creator 醉石散客, and MAD Producer's [MAID Research Institute](https://madproducer.com/maid) explains it as “MAD made with AI-generated material.” This site records the term to preserve the Chinese community's technical experiments, not because it is a mainstream Bilibili MAD·AMV category or a form contests generally accept.

The MAID Research Institute and its early articles date from around 2024 and focus on Stable Diffusion, ComfyUI, FLUX Fill, RVC, VITS, and DiffSinger. They are now best read as technical history, because the tools have changed:

- Image generation and local editing have moved into general products such as ChatGPT Images, Doubao/Seedream, and Firefly;
- Video models can take text, images, audio, and reference video together;
- Character voices must be split into TTS, voice conversion, and singing synthesis;
- The Sora web and app experience ended on 2026-04-26, and the API ended on 2026-09-24.

## References

**Early MAD Producer articles**:
[MAID Research Institute](https://madproducer.com/maid) ·
[AI repair, outpainting, and cutout workflow](https://madproducer.com/archives/1197) ·
[Introduction to AI image generation](https://madproducer.com/archives/1038) ·
[Introduction to ComfyUI](https://madproducer.com/archives/1034) ·
[An introduction to AI vocals](https://madproducer.com/archives/1194)

**Official technical documentation**:
[ChatGPT Images](https://help.openai.com/en/articles/11084440) ·
[Seedream 4.0–5.0](https://www.volcengine.com/docs/82379/1829186) ·
[Seedance 2.0](https://developer.volcengine.com/articles/7606009619928449070) ·
[ComfyUI workflows](https://docs.comfy.org/development/core-concepts/workflow) ·
[Adobe Firefly audio and video](https://helpx.adobe.com/firefly/web/work-with-audio-and-video/work-with-video/translate-video.html) ·
[SAM 2](https://github.com/facebookresearch/sam2) ·
[BiRefNet](https://github.com/ZhengPeng7/BiRefNet) ·
[GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) ·
[RVC WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) ·
[Demucs](https://github.com/facebookresearch/demucs) ·
[Sora discontinuation notice](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)

**Rules and cases**:
[Measures for Labeling AI-Generated Synthetic Content](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm) ·
[Bilibili: Campaign Against Misuse of AI Applications](https://www.bilibili.com/opus/1202507670848798745) ·
[Supreme People's Court: case on AI use of a person's voice](https://www.court.gov.cn/zixun/xiangqing/467511.html) ·
[Chinese MAD Creator Study](/en/mad/ccopw)

**Examples**:
[AI animation interpolation / redraw (2023)](https://www.bilibili.com/video/BV1qs4y1E7Nb/) ·
[A *Neverness to Everness* fan work made with AI in three days (2026)](https://www.bilibili.com/video/BV1aY9YB7Eot/) ·
[Old AMV tutorial on removing dialogue or music (2019)](https://www.bilibili.com/read/cv1972078/)

## Related Pages

- [Contest and Submission Guidelines](/en/mad/contest-rules#ai): common contest rules on AI;
- [Plugins and Scripts](/en/tools/plugins-ai): non-generative productivity tools;
- [Glossary](/en/mad/glossary): TTS, VC, RVC, source separation, and related terms.
