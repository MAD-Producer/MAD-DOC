---
title: AI 辅助创作与 MAID
description: AI 在 MAD·AMV 中能做什么、圈内和比赛怎么看：轻量辅助与生成内容的区别，抠图、声源分离、生成画面、角色声音克隆的工具与风险，发布说明写法，以及中国大陆 AI 内容标识规定与 MAID 概念。
---

# AI 辅助创作与 MAID

::: info 核验日期
本页信息核验至 **2026-07-25**。AI 产品和平台规则变化很快，工具清单只代表当时可用的入口。
:::

::: tip 要点
- **轻量辅助**（筛素材、提取人声、抠图初稿、写表达式）在 B站 MAD·AMV 圈一般能被接受；**用 AI 生成主要画面或角色声音**则很难被这个圈子认可。
- **比赛可能比圈内习惯更严**：IMAC FUN#4 连 AI 辅助都禁止。参赛前要把“具体工具＋具体用途＋用在哪些镜头”发给主办方确认。
- **角色和声优的声音风险最高**：未经许可克隆可识别的个人声音，可能构成侵权。
- **中国大陆发布必须标识**：自 2025-09-01 起，AI 生成合成内容必须加标识；B站投稿页也有 AI 标识选项。
- **MAID** 是中文 MAD 作者提出的说法，指以 AI 生成素材为主的 MAD，不是圈内主流类别。
:::

## AI 用途分三档

| 档位 | 例子 | 圈内一般看法 |
| --- | --- | --- |
| 轻量辅助 | 筛选素材、整理关键词、写表达式和脚本、检查交付清单；成片里没有生成内容 | 当作效率工具；但比赛可能全面禁止 |
| 素材处理 | 提取对白／伴奏、抠图或遮罩初稿、少量修补、转写、降噪 | 看处理范围、结果是否进入成片，以及比赛规则 |
| 生成内容进入成片 | 生成背景、角色、主要镜头、音乐、对白或歌声 | 接受度明显较低，必须明确说明 |

工具只帮你减少重复劳动、主题、选镜、节奏和最终判断仍由你完成，这属于辅助。生成内容替代了作品的主要画面或声音，就不要再用“辅助”来描述。

## 比赛怎么看

- [IMAC FUN#4](https://madproducer.com/archives/2355)：禁止 AI 和 AI 辅助创作，轻量用途也不例外。
- [蔷薇宴 2026](https://madproducer.com/archives/2348)：不接收纯 AIGC 动画；这不代表其他 AI 用途都被允许。
- [MAD Producer《MAD 比赛标准规则》](https://madproducer.com/archives/1309)：通用模板，各比赛可以自行增删。

不要只问主办方“能不能用 AI”，要说清楚：用了什么工具、做了什么、用在哪些镜头。保留原始素材、人工遮罩、工程记录和主办方的回复。详见[比赛与投稿规范](/mad/contest-rules#ai)。

## 各环节能用的工具

| 环节 | 工具 | 用途 | 要检查什么 |
| --- | --- | --- | --- |
| 策划与检索 | ChatGPT、豆包等对话模型 | 拆情绪曲线、生成检索词、整理字幕、写表达式 | 作者、比赛、日期等事实要回原页面核对；未公开的稿件不要上传 |
| 图像生成 | ChatGPT Images、豆包／Seedream、Adobe Firefly、ComfyUI | 概念图、背景、原创插入画面 | 角色、服装、画风能否跨镜头保持一致 |
| 局部编辑／扩图 | 同上，Firefly 生成式填充，ComfyUI inpaint | 补画幅、清理穿帮、修漫画格 | 有没有改坏原作线条 |
| 抠图 | BiRefNet、SAM 2、软件自带选择工具 | 漫画人物拆层、换背景 | 发丝、半透明、运动模糊、描边 |
| 视频分割／跟踪 | SAM 2、AE／Resolve 自带工具 | 人物遮罩、局部调色、景深 | 遮挡、快速动作、切镜处是否漂移 |
| 视频生成 | Seedance、Firefly 等 | 文生视频、图生视频、参考运镜、镜头延长 | 人物比例、手、口型、背景连续性 |
| 声源分离 | Demucs、UVR | 提取人声、对白或伴奏 | 结果是估算，不是官方分轨 |
| 对白与歌声 | GPT-SoVITS（TTS）、RVC（声音转换）、DiffSinger（歌声合成） | 新对白、旁白、角色歌 | 声音授权，见下一节 |
| 补帧与放大 | 软件智能功能、专用模型 | 慢动作、放大测试 | 重复帧被误判、果冻、凭空生成的细节 |

使用建议：

- 自动抠图只当初稿，最后要在实际背景上逐帧检查。
- 生成视频按镜头分段做：先在剪辑软件里定好时长和构图，再生成多个短段，最后人工统一调色、遮罩和速度。
- 补帧和放大保留原片做 A/B 对比，在 100% 画面、逐帧和正常播放下都看一遍。

## 角色声音：风险最高的用法

“让角色说话或唱歌”至少有四种技术：TTS（文字转语音）、声音转换（把你录的声音换音色）、歌声转换和歌声合成。GPT-SoVITS 是 TTS，RVC 是声音转换，二者不是同一种东西。

公开发布前要注意：

- 参考或训练用的真人声音需要明确许可。网上听得到，不代表可以拿来训练或发布；
- 录音、台词、声优表演、角色形象分别可能有不同的权利人；
- 不能把合成对白伪装成官方剧情或声优本人的发言；
- 简介里写明“AI 合成／声音转换”、声音来源和授权范围；
- 不要公开传播无权分发的角色音色模型或语音数据集。

最高人民法院的典型案例认定：能让公众联想到特定自然人的 AI 声音，受该自然人的声音权益保护，未经许可使用可能构成侵权。B站 2026 年的公告也把“AI 虚假配音”列为从严处理对象。

## 推荐工作流

1. **定用途**：写清 AI 是辅助策划、处理现有素材，还是生成成片内容。
2. **列权利清单**：动画、漫画、音乐、声音、参考图、模型各自的来源和许可。
3. **先剪后生成**：用占位镜头定好时长、节奏和构图。
4. **小段生成**：按镜头生成，不要一次生成整片再被动拼接。
5. **人工合成**：修遮罩、运动、颜色、口型、声音和连贯性。
6. **记录过程**：工具、模型版本、提示词、参考素材、生成日期。
7. **逐项检查**：人物一致性、伪影、底噪、台词、权利和比赛限制。
8. **标识**：按法规、平台功能和比赛规则加上 AI 标识。

## 发布说明怎么写

让观众和主办方能看出 AI 具体参与了什么，不要只写“含 AI”。例如：

> 本作 00:42—00:49 使用生成式视频延长背景；角色主体来自作者自绘设定图。01:10 的对白使用经授权的参考声音进行 TTS 合成。其余素材和人工剪辑信息见素材表。使用工具与版本：……。生成片段均经过人工遮罩、调色和合成。已启用平台 AI 生成合成内容标识。

至少写明：生成或处理了哪些镜头和声音；用了什么工具和版本；参考素材和声音的来源与授权；哪些部分是人工完成的；平台 AI 标签和比赛申报情况。

## 中国大陆的规定

- 《人工智能生成合成内容标识办法》自 **2025-09-01** 起施行，覆盖文字、图片、音频、视频和虚拟场景。分为观众能看到的显式标识和文件里的隐式标识；发布者要主动声明，不能删除或篡改标识。
- B站 2026-05-15 公告：AI 生成合成内容都要标识，AI 标识选项已经放到投稿页第一层；漏标可能被补标、打回或下架，AI 虚假配音和换脸误导从严处理。
- 加了标识只解决“告知”的问题，不代表已经获得原动画、音乐、角色形象、声优声音或训练素材的使用许可。

## 关于 MAID 和 2024 年的旧资料

“MAID”由 B站 MAD 作者醉石散客提出，MAD Producer 的[妹抖研究所](https://madproducer.com/maid)把它解释为“用 AI 生成素材创作的 MAD”。本站记录这个说法，是为了保存中文社区的技术探索，不代表它是 B站 MAD·AMV 的主流类别或比赛普遍接受的形式。

妹抖研究所和早期专栏写于 2024 年前后，主要讲 Stable Diffusion、ComfyUI、FLUX Fill、RVC、VITS 和 DiffSinger。这些内容现在可以当作技术史来看，因为工具已经有了这些变化：

- 图像生成和局部编辑已经并入 ChatGPT Images、豆包／Seedream、Firefly 等通用产品；
- 视频模型可以同时接收文字、图片、音频和参考视频；
- 角色声音要区分 TTS、声音转换和歌声合成；
- Sora 网页端和应用已于 2026-04-26 停止服务，API 于 2026-09-24 停止。

## 参考资料

**MAD Producer 旧专栏**：
[妹抖研究所／MAID](https://madproducer.com/maid) ·
[AI 修补扩扣流程](https://madproducer.com/archives/1197) ·
[AI 绘画入门教程](https://madproducer.com/archives/1038) ·
[ComfyUI 介绍](https://madproducer.com/archives/1034) ·
[AI 声乐相关基础介绍及推荐](https://madproducer.com/archives/1194)

**官方技术资料**：
[ChatGPT Images](https://help.openai.com/en/articles/11084440) ·
[Seedream 4.0—5.0](https://www.volcengine.com/docs/82379/1829186) ·
[Seedance 2.0](https://developer.volcengine.com/articles/7606009619928449070) ·
[ComfyUI 工作流](https://docs.comfy.org/development/core-concepts/workflow) ·
[Adobe Firefly 音视频](https://helpx.adobe.com/firefly/web/work-with-audio-and-video/work-with-video/translate-video.html) ·
[SAM 2](https://github.com/facebookresearch/sam2) ·
[BiRefNet](https://github.com/ZhengPeng7/BiRefNet) ·
[GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) ·
[RVC WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) ·
[Demucs](https://github.com/facebookresearch/demucs) ·
[Sora 停止服务说明](https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation)

**规则与案例**：
[《人工智能生成合成内容标识办法》](https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm) ·
[B站“整治 AI 应用乱象”专项公告](https://www.bilibili.com/opus/1202507670848798745) ·
[最高人民法院：AI 化使用他人声音典型案例](https://www.court.gov.cn/zixun/xiangqing/467511.html) ·
[中国 MAD 创作者访谈研究：新技术](/mad/ccopw#_5-3-新技术)

**案例**：
[AI 动画补帧／转绘（2023）](https://www.bilibili.com/video/BV1qs4y1E7Nb/) ·
[如何用 AI 在三天内做出“异环”二创（2026）](https://www.bilibili.com/video/BV1aY9YB7Eot/) ·
[AMV 消除对白／背景音乐旧教程（2019）](https://www.bilibili.com/read/cv1972078/)

## 相关页面

- [比赛与投稿规范](/mad/contest-rules#ai)：比赛对 AI 的常见规定；
- [插件与脚本](/tools/plugins-ai)：非生成式的效率工具；
- [术语表](/mad/glossary)：TTS、VC、RVC、声源分离等术语。
