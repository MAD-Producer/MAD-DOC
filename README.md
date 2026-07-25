# MAD DOC

MAD DOC 是 MAD Producer 维护的 MAD·AMV 文献与技术资料项目。站点使用 VitePress 构建，并通过 EdgeOne Pages 发布。

## 官方链接

- MAD Producer 国际站：https://madproducer.com
- MAD Producer 中国站：https://madproducer.cn
- Bilibili：https://space.bilibili.com/3546821106338121
- YouTube：https://www.youtube.com/@InfiniteTeamOfficial
- QQ 社群：https://qm.qq.com/q/LDaTG07qaC
- Discord：https://discord.gg/vmtJcs5nxk
- X：https://x.com/Infinite_Team_X

## 内容范围

当前建设范围：

1. MAD·AMV 定义、分类、术语与相关创作形式；
2. 日本 MAD、欧美 AMV 和中文社区发展史；
3. 素材管理、剪辑、合成、编码、插件、AI 辅助与工程归档。

暂缓建设：

4. 赛事与组织数据库；
5. 系统化制作教程。

## 编辑规范

### 公共页面

- 使用资料库或机构口吻，不使用个人博客式自述；
- 不在公共页面发布“欢迎投稿”“请补充”“下一轮任务”等内部工作信息；
- 不以单一社区观点作为全球通用定义；
- 事实、社区回忆、个人观点和待考证材料分别标记；
- 原始文章只作必要引用和原创摘要，不整篇复制无授权内容；
- 素材页不收录盗版下载、破解软件或规避平台审核的方法；
- 软件、平台规则和硬件要求须记录核验日期并优先引用官方文档。

### 来源登记

```yaml
title: 原始标题
creator: 作者或组织
published_at: YYYY-MM-DD
platform: Bilibili／百度贴吧／博客／组织官网／论文
url: 原始地址
archive_url: 合法网页存档地址
accessed_at: YYYY-MM-DD
language: zh-CN
topic: [定义, 历史, 工具]
source_type: primary | community | commentary
link_status: active | partial | dead | unchecked
local_summary: 不依赖原页面即可理解的原创摘要
limitations: 立场、样本、年代、争议与缺失附件
rights: 引用、本地保存和再利用条件
```

### 历史证据等级

- A：同期页面、原始文件、作者记录、组织档案或学术研究；
- B：参与者回忆、社区整理或后续专题文章；
- C：广泛流传但缺少原始材料，或不同来源说法不一致。

## 内部资料任务

- 继续核验 MAD 吧新手导航及二级导航中的存活旧帖；
- 联系原作者确认旧教程图片、附件和工程文件的存档授权；
- 查找日本早期 MAD tape、1985 年视频 MAD 与静止画 M@D 的同期材料；
- 补充 2004—2008 年中文论坛、个人站和 MAD 吧早期页面；
- 建立 Bilibili BV／Opus ID、作者 UID、发布日期和存档地址的稳定映射；
- 建立外链巡检记录，不在公共页面显示内部待办清单；
- 后续作品数据库采用多维标签，不以单一“动画系／静止系”字段替代完整元数据。

## 本地开发

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

EdgeOne Pages 使用根目录的 `edgeone.json`：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "./dist"
}
```

## 目录

```text
.
├─ .vitepress/        # VitePress 配置与主题
├─ pages/
│  ├─ mad/            # 定义、分类、术语与现状研究
│  ├─ history/        # 历史、研究方法与旧史料
│  ├─ tools/          # 工具、素材、编码、插件与 AI
│  └─ resources/      # 来源索引
├─ edgeone.json
├─ package.json
└─ README.md
```
