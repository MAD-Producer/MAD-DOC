---
title: MAD·AMV 分类方法
description: 用多维标签替代互斥分类树，覆盖素材、表达、技术、协作与发布语境
---

# MAD·AMV 分类方法

没有一套分类法能同时覆盖日本 MAD、欧美 AMV、中文平台分区和所有比赛。大型资料库最实用的做法，是把作品描述为多个维度的组合。

## 推荐的五维分类

### 1. 素材媒介

| 标签 | 说明 |
| --- | --- |
| 动画 | 电视动画、剧场版、OVA、原创动画等动态影像 |
| 漫画／插画 | 漫画分镜、立绘、同人图、视觉小说素材 |
| 游戏 | 游戏过场、实机画面、角色模型或游戏宣传素材 |
| 真人／非动画 | 电影、剧集、实拍、广告、纪录影像 |
| 原创 | 作者自行绘制、拍摄、建模或生成并拥有使用权的素材 |
| 混合 | 两种以上媒介共同构成，且都承担重要表达作用 |

### 2. 表达目的

| 标签 | 典型目标 |
| --- | --- |
| Action | 强调动作连贯、力度、速度和段落推进 |
| Dance | 以舞蹈动作、音乐律动和身体节拍为中心 |
| Fun／Comedy | 制造笑点、反差、恶搞、模仿或轻松氛围 |
| Drama／Romance | 建立人物关系、冲突、情绪和故事线 |
| Character Profile | 围绕一个角色或群像塑造形象 |
| Psyche／Horror | 追求心理压迫、诡异、不安或恐怖体验 |
| Sentimental | 以怀旧、治愈、离别、成长等情感为中心 |
| Experimental | 以形式、媒介或感知实验为主要目的 |

这些标签可以共存。例如一部作品完全可以同时是“Action + Character Profile + Sentimental”。

### 3. 制作技术

| 标签 | 判断重点 |
| --- | --- |
| Raw／纯剪辑 | 主要依靠镜头选择、排序、变速和基础处理形成表达 |
| FX／VFX | 大量使用视觉特效、合成、跟踪、抠像、粒子或三维 |
| Motion Graphics | 图形、文字、形状和版式运动承担主要视觉表达 |
| Typography | 歌词、对白或文字的动态设计是核心元素 |
| Lip Sync | 重新组合口型，使角色像是在演唱或说新台词 |
| Match Cut | 利用构图、动作、颜色或形状相似性完成镜头匹配 |
| Masking／Rotoscoping | 通过遮罩或逐帧分离人物与背景 |
| Frame Interpolation | 通过补帧或重定时改变动作速度与流畅度 |
| Original Animation | 在既有素材之外加入作者自行制作的动画 |
| Color Design | 通过统一或重构色彩建立场景联系与情绪 |

“Raw”不等于低技术，“FX”也不等于更高级。它们只描述作品将主要精力放在哪里。

### 4. 组织方式

| 标签 | 说明 |
| --- | --- |
| Solo | 单人主导完成 |
| Collab | 多位作者合作，形式和分工不固定 |
| MEP | Multi-Editor Project，通常按音乐段落分配给多位编辑并统一整合 |
| IC | Iron Chef，在限定时间、素材或主题下完成的创作／对战形式 |
| Studio／Team | 以稳定团队或工作室名义发布 |

### 5. 发布语境

- **Contest Entry**：为指定比赛制作，必须同时记录该届规则。
- **Festival／Event**：节庆、周年、合作企划或展映作品。
- **Trailer／PV／CM**：模仿或重构预告、宣传片、广告形式。
- **Parody／パロ**：对原作、片头、MV 或广告进行明确的模仿和戏仿。
- **Alt-Opening／Alt-Ending**：为作品重制非官方片头或片尾。
- **BGA／MV**：作为音乐背景动画或音乐视觉化内容。

## 常见“大类”如何使用

### 动画系

指主要素材为动态动画的作品。内部仍可分为 Action、Drama、Dance、Comedy、Raw、FX 等。动画系不是 AMV 的完整同义词。

### 静止系

主要以漫画、插画、立绘等静态素材，通过镜头运动、分层、遮罩、变形、排版和合成建立时间性。常见相关称呼包括：

- **静止画 M@D**：日本及中文社区常见写法。
- **MMV**：Manga Music Video，通常强调漫画图像与音乐。
- **GMV**：在部分地区指 Game Music Video，但不同平台也可能有其他展开，需结合上下文。

### 风格系

“风格系”不是稳定的国际分类。中文社区常用它描述视觉设计、氛围、节奏或形式感高于明确叙事的作品。入库时应继续标注其素材与技术，而不要只写“风格系”。

### 特效系

通常指合成、运动图形或视觉效果占比显著的作品。它与 FX／VFX 接近，但边界取决于社区或比赛。特效数量不能替代整体设计。

## Wuyi无疑分类表的价值与限制

Wuyi无疑 2019 年的《MAD的分类》把作品分为动画系、静止系和混合系，并汇总了 Raw、VFX、FX 以及大量国际标签。这篇文章很适合做**检索词表**，但不宜原样当作唯一标准：

1. 作者明确说明分类更偏欧美社区；
2. “Part 1 分类”和“Part 2 Tag”混合了素材、风格、技术、形式与活动方式；
3. 标签之间并不互斥；
4. 部分词在不同站点有不同解释。

本资料库因此保留其术语覆盖面，同时改为五维元数据。

## 建议的作品入库字段

```yaml
title: 作品名
creator: 作者／团队
published_at: YYYY-MM-DD
original_url: 首发地址
self_identification: 作者原始标签
source_media: [动画, 漫画]
intent: [Drama, Character Profile]
technique: [Raw, Match Cut, Color Design]
collaboration: Solo
context: Contest Entry
music: 曲名与表演者
source_titles: 原作名
rights_note: 素材和音乐的授权／声明
evidence: 分类依据或赛事规则链接
```

## 参考资料

- [Wuyi无疑：《MAD的分类》](https://www.bilibili.com/opus/291682438941101836)
- [AMV Japan：AMVのカテゴリー](https://amv-japan.org/column/amv-categories)
- [AnimeMusicVideos.org](https://www.animemusicvideos.org/)
- [AKROSS Con](https://www.akross.ru/)
- [AMVNews](https://amvnews.ru/)
- [ACG Library：常见名词解释](https://acglibrary.com/clarification/dictionary.html)
- [MAD吧：《怎么制作MAD？》](https://tieba.baidu.com/p/5405972673) — 包含大量作品类型示例；作者后续留言提醒正文存在错误且无法编辑，应配合其他来源阅读。
