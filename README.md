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

## 维护路线

- 继续核验 MAD 吧新手导航及二级导航中的存活旧帖；
- 联系原作者确认旧教程图片、附件和工程文件的存档授权；
- 查找日本早期 MAD tape、1985 年视频 MAD 与静止画 M@D 的同期材料；
- 补充 2004—2008 年中文论坛、个人站和 MAD 吧早期页面；
- 建立 Bilibili BV／Opus ID、作者 UID、发布日期和存档地址的稳定映射；
- 建立外链巡检记录，不在公共页面显示内部待办清单；
- 后续作品数据库采用多维标签，不以单一“动画系／静止系”字段替代完整元数据。
- AI 专页按季度检查产品状态、平台标识规则和失效工具；保留旧 MAID 专栏为历史快照，不把模型排名写成长期结论；
- 继续收集 MAD／AMV 作者公开的 AI 工作流、工程说明和比赛申报案例，优先记录实际使用范围、授权与人工修改，而非只登记工具名称。

## 本地开发

### 环境要求

- Node.js 22 或更高版本；
- npm；
- Git。

克隆仓库并安装锁定版本的依赖：

```bash
git clone https://github.com/MAD-Producer/MAD-DOC.git
cd MAD-DOC
npm ci
```

启动开发服务器：

```bash
npm run dev
```

终端会显示本地访问地址。修改 `pages/` 中的 Markdown 或 `.vitepress/` 中的配置后，开发页面会自动更新。

### 构建与预览

生成生产文件：

```bash
npm run build
```

构建产物位于 `dist/`。发布前应在本地预览生产构建：

```bash
npm run preview
```

如果 `npm run build` 失败，不要部署旧的 `dist/`。先解决构建错误，并检查新增页面的站内链接、表格、移动端目录和外部来源。

## 部署到 EdgeOne Pages

本项目是纯静态 VitePress 站点，仓库根目录的 [`edgeone.json`](./edgeone.json) 已提供构建配置：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "./dist"
}
```

### 从 GitHub 仓库部署

1. 登录 [EdgeOne Pages](https://pages.edgeone.ai/) 并选择从 GitHub 导入项目；
2. 授权并选择 `MAD-Producer/MAD-DOC`，Fork 使用者选择自己的仓库；
3. 将项目根目录设置为 `./`；
4. 选择 Node.js 22；
5. 确认构建命令为 `npm run build`；
6. 确认输出目录为 `dist` 或 `./dist`；
7. 开始部署，并在部署日志中确认 VitePress 构建完成；
8. 使用 EdgeOne 生成的预览地址检查首页、导航、搜索、深色模式和新增页面；
9. 需要自定义域名时，在项目的域名设置中添加域名并按控制台提示配置 DNS。

EdgeOne Pages 可以在 GitHub 分支产生新提交后自动构建。生产分支、预览分支和自动部署策略由仓库维护者在 EdgeOne 项目设置中决定，仓库不保存平台账号、项目 ID、API Token 或域名证书。

### 其他静态托管平台

任何能够执行 Node.js 构建并托管静态文件的平台都可以使用相同配置：

- 安装命令：`npm ci`
- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js：22 或更高版本

站点当前按域名根路径 `/` 构建。如果部署到 `https://example.com/MAD-DOC/` 这类子路径，需要在 `.vitepress/config.mts` 中设置对应的 `base`，再重新构建。

## 参与维护

1. Fork 本仓库并从最新 `main` 创建分支；
2. 修改或新增资料时保留原始来源、核验日期、适用范围和争议说明；
3. 不提交盗版素材、破解软件、失去授权的附件或个人敏感信息；
4. 运行 `npm run build`，确认构建通过；
5. 提交 Pull Request，并在说明中列出新增资料、主要来源和验证结果。

比赛规则、平台政策、软件版本和 AI 服务变化较快。相关修改应优先引用主办方、平台或项目官方页面，不以搜索摘要代替原文。

## 目录

```text
.
├─ .vitepress/        # VitePress 配置与主题
├─ pages/
│  ├─ mad/            # 定义、分类、术语、比赛规范与现状研究
│  ├─ history/        # 历史、研究方法与旧史料
│  ├─ tools/          # 工具、素材、编码、插件与 AI
│  └─ resources/      # 来源索引
├─ edgeone.json
├─ package.json
└─ README.md
```
