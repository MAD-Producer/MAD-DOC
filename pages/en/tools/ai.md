---
title: AI-Assisted Creation and MAID
description: Generative AI, image and video processing, character voices, source separation, disclosure, and platform labeling in MAD·AMV
---

# AI-Assisted Creation and MAID

::: info Resource status
This page is based on product documentation, platform rules, community tutorials, and creative cases verifiable as of **Jul. 25, 2026**. AI product names, model versions, and service availability change rapidly. The tool list records available entry points at the time of verification and is not a long-term ranking.
:::

::: warning Scope of this site
MAD DOC primarily discusses **the MAD·AMV community centered on Bilibili as its main platform for publishing, contests, and communication**. In this context, lightweight assistance such as selecting source material, extracting audio, preparing cutout drafts, and generating expressions is generally more readily accepted than generating principal imagery or character voices. Works that use AI to replace a substantial portion of source selection, illustration, voice, and shot production do not currently represent a broadly accepted MAD·AMV practice in this community.
:::

AI is now used in MAD·AMV planning, source processing, image generation, audio production, and delivery checks, but community acceptance differs substantially by use. Merely stating that “AI was used” does not explain how a work was made, and ordinary creative practice cannot determine contest eligibility.

## Terms and Boundaries

| Record type | Typical situation | General understanding in the Bilibili MAD·AMV community |
| --- | --- | --- |
| Lightweight AI assistance | Selects sources, organizes search terms, generates expressions, or checks a project; generated content does not directly appear in the final audio or video | Usually treated as an efficiency tool, although a contest may prohibit it entirely |
| Source-processing assistance | Extracts dialogue or accompaniment, prepares a cutout or mask draft, performs limited repair, transcribes, or reduces noise | Whether the use is “lightweight” depends on its scope, whether the result enters the final work, and event rules |
| AI-generated source material | Generates backgrounds, character images, primary shots, sound effects, music, dialogue, or singing used in the final work | Significantly lower acceptance; it should be distinguished from traditional MAD·AMV |
| MAID | Uses AI-generated material as its primary source, then forms a work through editing, compositing, and audiovisual organization | An exploratory community term, not evidence of broad acceptance by traditional communities or contests |

“MAID” was proposed by Bilibili MAD creator 醉石散客. MAD Producer’s [Maid Research Institute](https://madproducer.com/maid) explains it as “MAD created with AI-generated source material.” This page retains the term to document technical exploration in Chinese communities. It does not mean that MAD DOC treats MAID as a mainstream Bilibili MAD·AMV category or that the community and its contests broadly accept it.

## How the Community Commonly Distinguishes Uses

### Lightweight Assistance Is More Readily Accepted

These tools primarily reduce repetitive work, while the creator remains responsible for the theme, source selection, shot organization, rhythm, and final judgment:

- Filter source lists according to creator-defined criteria and organize episodes and search terms;
- Use source separation to extract dialogue, vocals, or accompaniment, followed by manual cleanup;
- Generate initial cutouts and masks for manga, character art, or anime characters, followed by manual edge refinement;
- Generate After Effects expressions, scripts, or batch-processing commands;
- Transcribe dialogue, check subtitles, and identify missing files or delivery items;
- Assist with limited repair of damaged edges, empty backgrounds, or compression noise.

“More readily accepted” describes ordinary creative discussion, not contest permission. A contest with a comprehensive prohibition may cover an AI tool even when it is used only for cutouts or expressions.

### More Controversial Generative Substitution

The following directly changes the principal audio or video of the final work and is generally not treated as ordinary lightweight assistance by the current Bilibili long-form MAD·AMV community:

- Generating large amounts of characters, backgrounds, or continuous shots in place of source selection and manual visual production;
- Creating principal sections with video generation and performing only assembly in post-production;
- Cloning an anime character’s or voice actor’s timbre to generate new dialogue or singing;
- Generating complete scores, vocals, or key sound effects as the core of the work;
- Using one-click templates to automate the principal edit, rhythm, and visual design.

Such works may be studied as AI video, generative transformative creation, or MAID, but “assistance” should not be used to minimize the actual scope of generation. A work description should identify which images and sounds were generated.

### Contest Rules May Be Stricter Than Community Practice

Contest rules already differ significantly:

- [IMAC FUN#4](https://madproducer.com/archives/2355) explicitly prohibited AI and AI-assisted creation, with no exemption implied for lightweight uses;
- [Rosa Festa 2026](https://madproducer.com/archives/2348) explicitly excluded entirely AIGC animation, which did not automatically authorize other AI uses;
- [MAD Producer’s “Standard Rules for MAD Contests”](https://madproducer.com/archives/1309) is a general plain-language framework; individual contests may add, remove, or revise provisions.

Before entering, send the organizer the **specific tool, feature, and shot or stage in which it will be used**. Do not ask only “Can AI be used?” See [Contest and Submission Guidelines](/en/mad/contest-rules).

### Why the 2024 Material Requires Updating

The Maid Research Institute and its early columns were developed around 2024 and primarily used Stable Diffusion, ComfyUI, FLUX Fill, RVC, VITS, and DiffSinger to explain AI imagery and voice. They still show how Chinese MAD creators first applied generative models to image repair, outpainting, cutouts, and vocals, but they no longer describe the complete current workflow:

- Image generation and local editing are now integrated into general products such as ChatGPT Images, Doubao/Seedream, and Firefly;
- Video models can now accept text, images, audio, and reference video to generate, extend, or selectively modify short shots;
- ComfyUI has developed from an image-node interface into a workflow environment for orchestrating images, video, audio, and models;
- Character voice work must distinguish text-to-speech, voice conversion, and singing synthesis instead of treating them all as “AI vocals”;
- Mainland China now enforces a labeling system for AI-generated synthetic content, and Bilibili requires publishers to select an AI label proactively;
- The Sora web service and app referenced by older pages ended service on Apr. 26, 2026 and should no longer be listed as a current entry point.

The older columns are therefore preserved in MAD DOC as **snapshots in the history of technology**. The following sections explain what the technologies can do and the risks they create; they do not recommend extensive generative production.

## Current Stages of Creation

### 1. Planning, Research, and Project Assistance

General conversational models such as ChatGPT and Doubao can provide lightweight assistance by:

- Dividing a creator-defined theme into an emotional curve, musical sections, and shot requirements;
- Preparing draft source search terms, synonyms, foreign-language names, and shot logs;
- Organizing subtitles, draft translations, expressions, batch commands, and delivery checklists;
- Checking creator-provided project notes for missing items.

The use closest to current community practice gives a model small, creator-defined tasks, such as drafting an expression, organizing source keywords, or checking a delivery list, rather than asking it to choose the theme, select every shot, or generate the complete edit.

These models cannot replace historical research, evaluation of works, or final copy. Names, contests, first-publication dates, and quotations supplied by a model must be checked against the original page. Unreleased projects, contest entries, and material covered by confidentiality agreements should not be uploaded to services with unclear terms.

### 2. Image Generation, Repair, and Layer Separation

| Task | Current paths | MAD·AMV use | Required checks |
| --- | --- | --- | --- |
| Text-to-image／reference-to-image | ChatGPT Images, Doubao／Seedream, Adobe Firefly, ComfyUI workflows | Concept art, backgrounds, graphic elements, and original insert shots | Whether identity, clothing, and visual style remain consistent across shots |
| Local editing／outpainting | ChatGPT Images, Seedream, Firefly Generative Fill, ComfyUI inpaint | Complete an aspect ratio, clean continuity errors, repair manga panels, and extend backgrounds | Whether editing escapes the selection or damages original line art |
| Static-image segmentation | BiRefNet, SAM 2, built-in selection tools | Separate manga characters, replace backgrounds, and divide foreground from background | Hair, transparency, motion blur, and outlines |
| Video segmentation／tracking | SAM 2 and host tools in After Effects or Resolve | Character masks, selective grading, depth of field, and compositing | Drift during occlusion, fast action, and shot changes |
| Upscaling and restoration | Intelligent host features and dedicated restoration models | Preview old sources, perform local repair, and test enlargement | Generated texture must not be misrepresented as original detail |

[ChatGPT Images](https://help.openai.com/en/articles/11084440) supports uploading an existing image, then adding, removing, or modifying areas or producing a transparent background. [Seedream 4.0–5.0 documentation](https://www.volcengine.com/docs/82379/1829186) covers text-to-image, reference images, image sets, and image editing. [ComfyUI](https://docs.comfy.org/development/core-concepts/workflow) can preserve models, masks, inpainting, upscaling, and output parameters in a reproducible node graph.

Automatic segmentation should be treated only as a mask draft. Anime outlines, speed lines, glow, semi-transparent hair, and heavily compressed sources common in MAD easily develop edge gaps. Inspect the final result frame by frame against the actual background used for playback.

### 3. Video Generation, Restyling, and Shot Extension

Current video generation goes beyond “creating a random video from text.” Common input modes include:

- **Text-to-video:** Visual proposals, establishing shots, or original images that cannot be filmed;
- **Image-to-video:** Turns character designs, backgrounds, or start and end frames into short shots;
- **Reference-video-to-video:** Uses reference camera movement, action, composition, or rhythm for restyling and replacement;
- **Video editing／extension:** Modifies a specified object, scene, or action, or generates a continuation;
- **Joint audio-video generation:** Generates shots with a synchronized relationship to music, dialogue, or sound effects.

ByteDance’s 2026 [Seedance 2.0 overview](https://developer.volcengine.com/articles/7606009619928449070) lists text, image, audio, and video inputs, with examples involving MVs, reference camera moves, video editing, and shot extension. Current Adobe Firefly documentation also treats text-to-video, image-to-video, reference camera movement, transparent-background video, video editing, and upscaling as separate capabilities.

In MAD·AMV, a more stable approach treats generation as a **short-shot production stage**:

1. Determine shot duration, starting and ending composition, and direction of motion in the editing application;
2. Generate multiple short sections instead of asking a model to complete the whole work at once;
3. Inspect character proportions, hands, mouth shapes, background continuity, and screen direction frame by frame;
4. Unify generated passages through manual editing, masks, color grading, speed curves, and sound design;
5. Retain the original reference images, prompts, model version, and every output.

A 2023 [Bilibili AI animation interpolation and restyling case](https://www.bilibili.com/video/BV1qs4y1E7Nb/) already demonstrated a “cutout and separate layers → interpolate slow motion → AI redraw frame by frame → recompose” workflow. The 2026 [“How to Create a *Neverness to Everness* Transformative Work with AI in Three Days”](https://www.bilibili.com/video/BV1aY9YB7Eot/) reflects further integration between AI animation-based transformative creation and creation-tool entry points on the platform. These cases demonstrate adoption of a workflow, not its copyright status or eligibility for every MAD contest.

### 4. Dialogue, Character Voices, and Singing

“Making an anime character speak or sing” includes at least four distinct technologies:

| Type | Input and output | Representative path | Suitable use |
| --- | --- | --- | --- |
| TTS／few-shot voice cloning | Text and reference voice in; speech in the target timbre out | GPT-SoVITS and related tools | New dialogue, narration, and character speech |
| Voice Conversion／VC | A creator’s recorded performance in; converted timbre with performance timing retained | RVC, SVC, and related tools | Dialogue requiring creator-controlled expression, pauses, and emotion |
| Singing Voice Conversion | A sung performance in; converted singing timbre out | RVC- and SVC-based workflows | AI covers and character-song experiments |
| Singing voice synthesis | Lyrics, notes, pitch, and parameters in; synthesized singing out | DiffSinger and related tools | Works with a defined melody, lyrics, and vocal-editing requirements |

[GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) is a text-to-speech and few-shot voice-cloning project. [RVC](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) is a voice-conversion framework. They are not the same process merely because both names contain SoVITS.

Bilibili hosts many GPT-SoVITS, RVC, and singing-conversion examples based on anime and game characters. They demonstrate that character-timbre models have entered transformative workflows, while also carrying some of the highest risks of deception and rights violations:

- Obtain explicit permission for any natural-person voice used for training or reference; public availability does not imply permission to train or publish;
- A sound recording, character dialogue, voice performance, character image, and work title may involve different rights;
- Synthetic dialogue must not be presented as official story material, a statement by the voice actor, or an unreleased original recording;
- Descriptions should state “AI-synthesized” or “voice-converted,” the voice source, permission scope, and human performer;
- Do not distribute character-voice models or original voice datasets without the right to do so.

A typical case published by the Supreme People’s Court states that when an AI-synthesized voice enables the public to associate it with a particular natural person, that person’s voice rights may extend to the AI voice; using another person’s voice for AI without permission may infringe personality rights. Bilibili’s 2026 platform announcement also identifies “false AI dubbing” for strict enforcement.

### 5. Source Separation, Music, and Sound Effects

- **Source separation:** Demucs, UVR, and similar tools estimate vocals, drums, bass, and other components from a mix and can assist in extracting dialogue or reducing the original background music. The output is a model estimate, not official stems.
- **Speech transcription and translation:** Whisper, host transcription, and multilingual dubbing tools can prepare subtitle or translation drafts. Character names, work titles, and lyrics require manual review.
- **Generated music and sound effects:** May support draft rhythm, original insert passages, ambience, and transition sounds. Before publication, confirm service terms, commercial-use scope, training-data disputes, and music-platform requirements.
- **Translated dubbing and lip alignment:** Services such as Adobe Firefly can transcribe, translate, and generate dubbing. The output still requires review of the translation, speaker, voice permission, and lip errors.

The creator later annotated a 2019 [AMV dialogue/background-music removal tutorial](https://www.bilibili.com/read/cv1972078/) as “outdated” and noted that separation tools based on models such as Spleeter had surpassed the older phase-cancellation workflow. This change shows that AI’s effect on MAD is not limited to generating new material; it also replaces older source-preprocessing methods.

### 6. Frame Interpolation, Upscaling, and Automated Checks

AI interpolation, retiming, denoising, debanding, and super-resolution can improve specific material but should not be applied blindly to an entire work:

- Repeated frames in limited animation may be misread as missing frames;
- Fast motion, occlusion, particles, white flashes, and complex line art can produce jelly-like warping, ghosting, or invented detail;
- Upscaling models may alter faces, text, screentone, and original line art;
- Automated shot detection, character search, and duplicate detection suit source organization but should not replace decisions about shot selection.

Retain the original segment, make A/B comparisons at the same scale and bitrate, and inspect at 100%, frame by frame, and during normal playback.

## A Reproducible AI Workflow

1. **Define the purpose:** State whether AI assists planning, processes existing material, or generates final audio or video.
2. **Create a rights manifest:** Record the source and permission for anime, manga, music, voices, reference images, and model data.
3. **Edit before generating:** Use placeholders to determine duration, rhythm, composition, and shot direction.
4. **Generate in short sections:** Generate images, video, or audio by shot instead of creating the entire work for passive assembly.
5. **Composite manually:** Correct masks, movement, color, mouth shapes, sound, and continuity in editing and compositing software.
6. **Record the process:** Save tools, model versions, prompts, references, seeds or workflows, and generation dates.
7. **Check every item:** Inspect identity consistency, image artifacts, audio noise, incorrect dialogue, rights, and contest restrictions.
8. **Label proactively:** Complete explicit disclosure and platform AI labels under local regulation and event rules.

## Writing a Publication Disclosure

A description should let viewers and organizers determine what AI actually did rather than state only “contains AI”:

> This work uses generative video from 00:42–00:49 to extend the background; the principal character comes from the creator’s original design. The dialogue at 01:10 was generated by TTS from an authorized reference voice. See the source manifest for the remaining anime footage, music, and manual editing. Tools and versions: …. All generated passages were manually masked, graded, and composited. The platform’s AI-generated synthetic content label was enabled at publication.

At minimum, include:

- The specific shots, image regions, dialogue, or musical passages generated or processed;
- Tool, model, and approximate version;
- Sources and permissions for references, voices, and training data;
- Scope of manual drawing, performance, editing, compositing, and revision;
- Whether tool-provided watermarks, Content Credentials, or other provenance information were retained;
- Platform AI label and contest disclosure status.

## Publication and Rights in Mainland China

The *Measures for Labeling AI-Generated Synthetic Content* took effect on **Sept. 1, 2025**. They cover AI-generated or synthetic text, images, audio, video, and virtual scenes, distinguishing explicit labels perceptible to users from implicit information embedded in file metadata. Publishers must proactively declare generated synthetic content and must not maliciously remove, alter, forge, or conceal required labels.

In its May 15, 2026 special-enforcement announcement, Bilibili stated that all AI-generated synthetic content must be labeled and that the AI label had been promoted to the first-level submission page. Unlabeled content may be labeled by the platform, returned, or removed, while false AI dubbing, deceptive face replacement, and fabricated news receive stricter treatment.

These requirements concern **labeling and responsibility for distribution**. They do not mean that permission has been obtained for the original anime, music, character likeness, voice actor’s voice, or training material. Public works must also comply with copyright, personality rights, platform rules, and contest rules.

## Resources and Entry Points

### Legacy MAD Producer Columns

- [Maid Research Institute／MAID](https://madproducer.com/maid)
- [AI Inpainting and Outpainting Workflow: ComfyUI and FLUX Fill](https://madproducer.com/archives/1197)
- [Introduction to AI Image Generation](https://madproducer.com/archives/1038)
- [Introduction to ComfyUI](https://madproducer.com/archives/1034)
- [Introduction and Recommendations for AI Vocals](https://madproducer.com/archives/1194)

### Current Official Technical Resources

- [ChatGPT Images](https://help.openai.com/en/articles/11084440)
- [Seedream 4.0–5.0 Prompting and Image Editing](https://www.volcengine.com/docs/82379/1829186)
- [Seedance 2.0 Multimodal Video Generation](https://developer.volcengine.com/articles/7606009619928449070)
- [ComfyUI Workflows](https://docs.comfy.org/development/core-concepts/workflow)
- [Adobe Firefly Audio and Video Features](https://helpx.adobe.com/firefly/web/work-with-audio-and-video/work-with-video/translate-video.html)
- [SAM 2 Image and Video Segmentation](https://github.com/facebookresearch/sam2)
- [BiRefNet High-Resolution Image Segmentation](https://github.com/ZhengPeng7/BiRefNet)
- [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)
- [RVC WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI)
- [Demucs Source Separation](https://github.com/facebookresearch/demucs)

### Rules and Cases

- [Measures for Labeling AI-Generated Synthetic Content](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm)
- [Bilibili: Special Announcement on “Qinglang: Rectifying Misuse of AI”](https://www.bilibili.com/opus/1202507670848798745)
- [Supreme People’s Court: Typical Case on Unauthorized AI Use of Another Person’s Voice](https://www.court.gov.cn/zixun/xiangqing/467511.html)
- [Creative Class or Precarious Workers: Animation Recreators in China's Video Platform](/en/mad/ccopw)
