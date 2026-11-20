import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import type { SiteConfig } from 'vitepress'
import { EN_DESCRIPTION, SITE_NAME, SITE_URL, ZH_DESCRIPTION } from './seo'

/**
 * Builds machine-readable copies of the documentation for AI agents and
 * search tools, following the llms.txt convention (https://llmstxt.org):
 *
 *   /llms.txt          index of every page, both languages
 *   /llms-full.txt     full text of all Chinese core pages
 *   /en/llms-full.txt  full text of all English core pages
 *   /<page>.md         plain Markdown for each page
 */

// Long source texts kept for reference; listed under "Optional" and left
// out of the full-text bundles so those stay a manageable size.
const ARCHIVE_PAGES = new Set([
  'mad/mad-original.md',
  'history/history.md',
  'mad/ccopw.md'
])

// Reading order for the index and the full-text bundles.
const SECTIONS: { zh: string; en: string; pages: string[] }[] = [
  {
    zh: '认识 MAD·AMV',
    en: 'About MAD·AMV',
    pages: ['mad/mad.md', 'mad/classification.md', 'mad/glossary.md']
  },
  {
    zh: '创作工具',
    en: 'Creation Tools',
    pages: [
      'tools/index.md',
      'tools/software.md',
      'tools/footage.md',
      'tools/encoding.md',
      'tools/plugins-ai.md',
      'tools/ai.md'
    ]
  },
  { zh: '比赛', en: 'Contests', pages: ['mad/contest-rules.md'] },
  {
    zh: '历史与研究',
    en: 'History and Research',
    pages: [
      'history/timeline.md',
      'history/dennouemaki.md',
      'history/dennouemaki/origins.md',
      'history/dennouemaki/media.md',
      'history/dennouemaki/theory.md',
      'history/research.md'
    ]
  },
  { zh: '资料', en: 'Resources', pages: ['resources/index.md'] }
]

interface Page {
  source: string
  title: string
  description: string
  body: string
  htmlUrl: string
  mdUrl: string
}

function htmlPath(relativePath: string): string {
  const path = relativePath.replace(/\.md$/, '')
  if (path === 'index') return '/'
  if (path.endsWith('/index')) return `/${path.slice(0, -'index'.length)}`
  return `/${path}`
}

function mdPath(relativePath: string): string {
  return `/${relativePath}`
}

function parseFrontmatter(raw: string): {
  data: Record<string, string>
  body: string
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const field = line.match(/^(title|description):\s*(.*)$/)
    if (field) data[field[1]] = field[2].replace(/^["']|["']$/g, '').trim()
  }
  return { data, body: raw.slice(match[0].length) }
}

/** Turns VitePress-flavoured Markdown into portable Markdown. */
function toPlainMarkdown(body: string, lang: 'zh' | 'en'): string {
  const figure = lang === 'zh' ? '图' : 'Figure'
  return (
    body
      // Containers: keep the title as a bold line, drop the fences.
      .replace(/^:::\s*\w+\s*(.*)$/gm, (_, title: string) =>
        title ? `**${title.trim()}**` : ''
      )
      .replace(/^:::\s*$/gm, '')
      // Badges become bracketed text.
      .replace(/<Badge[^>]*text="([^"]+)"[^>]*\/>/g, '[$1]')
      .replace(/<\/?kbd>/g, '')
      // Explicit heading ids are VitePress-only syntax.
      .replace(/^(#{1,6} .*?)\s*\{#[^}]+\}\s*$/gm, '$1')
      // Images live under hashed asset names; keep their description.
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, (_, alt: string) => `[${figure}: ${alt}]`)
      // Make site-relative links absolute so they work outside the site.
      .replace(/\]\((\/[^)\s]*)\)/g, (_, path: string) => `](${SITE_URL}${path})`)
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  )
}

function loadPage(srcDir: string, source: string): Page | undefined {
  let raw: string
  try {
    raw = readFileSync(join(srcDir, source), 'utf8')
  } catch {
    return undefined
  }
  const { data, body } = parseFrontmatter(raw)
  const lang = source.startsWith('en/') ? 'en' : 'zh'
  return {
    source,
    title: data.title ?? source,
    description: data.description ?? '',
    body: toPlainMarkdown(body, lang),
    htmlUrl: `${SITE_URL}${htmlPath(source)}`,
    mdUrl: `${SITE_URL}${mdPath(source)}`
  }
}

function write(outDir: string, path: string, content: string) {
  const file = join(outDir, path)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, content.endsWith('\n') ? content : `${content}\n`)
}

function pageDocument(page: Page): string {
  const header = [`# ${page.title}`, '']
  if (page.description) header.push(`> ${page.description}`, '')
  header.push(`Source: ${page.htmlUrl}`, '')
  const body = page.body.replace(/^# .*\n+/, '')
  return `${header.join('\n')}\n${body}\n`
}

export function writeLlmsFiles(siteConfig: SiteConfig) {
  const { srcDir, outDir } = siteConfig
  const sources = siteConfig.pages.filter(
    (page) => page !== '404.md' && !page.endsWith('README.md')
  )

  // Per-page Markdown copies.
  const pages = new Map<string, Page>()
  for (const source of sources) {
    const page = loadPage(srcDir, source)
    if (!page) continue
    pages.set(source, page)
    write(outDir, mdPath(source), pageDocument(page))
  }

  const entry = (page: Page | undefined) =>
    page ? `- [${page.title}](${page.mdUrl}): ${page.description}` : undefined

  // llms.txt index.
  const lines: string[] = [
    `# ${SITE_NAME}`,
    '',
    `> ${ZH_DESCRIPTION}`,
    `> ${EN_DESCRIPTION}`,
    '',
    'MAD DOC is a bilingual (Simplified Chinese and English) knowledge base about MAD and AMV — fan-made videos that re-edit existing anime, manga, game, and audio material. It is maintained by MAD Producer Studio and licensed under CC BY-SA 4.0. Every page below is available as plain Markdown; Chinese is the primary language and English pages mirror it under /en/.',
    '',
    `Full text: [Chinese](${SITE_URL}/llms-full.txt) · [English](${SITE_URL}/en/llms-full.txt)`,
    ''
  ]
  for (const lang of ['zh', 'en'] as const) {
    lines.push(lang === 'zh' ? '## 简体中文' : '## English', '')
    const home = pages.get(lang === 'zh' ? 'index.md' : 'en/index.md')
    if (home) lines.push(entry(home)!)
    for (const section of SECTIONS) {
      lines.push('', `### ${section[lang]}`, '')
      for (const source of section.pages) {
        const page = pages.get(lang === 'zh' ? source : `en/${source}`)
        const line = entry(page)
        if (line) lines.push(line)
      }
    }
    lines.push('')
  }
  lines.push('## Optional', '')
  for (const source of ARCHIVE_PAGES) {
    for (const prefix of ['', 'en/']) {
      const line = entry(pages.get(`${prefix}${source}`))
      if (line) lines.push(line)
    }
  }
  write(outDir, 'llms.txt', lines.join('\n'))

  // Full-text bundles, one per language, in reading order.
  for (const lang of ['zh', 'en'] as const) {
    const prefix = lang === 'zh' ? '' : 'en/'
    const intro =
      lang === 'zh'
        ? `# ${SITE_NAME}（完整文本）\n\n> ${ZH_DESCRIPTION}\n\n本文件按阅读顺序收录全部正文页面，不含存档长文。许可：CC BY-SA 4.0。`
        : `# ${SITE_NAME} (full text)\n\n> ${EN_DESCRIPTION}\n\nAll core pages in reading order, excluding long archive texts. License: CC BY-SA 4.0.`
    const parts = [intro]
    for (const section of SECTIONS) {
      for (const source of section.pages) {
        const page = pages.get(`${prefix}${source}`)
        if (page) parts.push(pageDocument(page).replace(/^# /, '## ').replace(/\n#(#+) /g, '\n##$1 '))
      }
    }
    write(outDir, `${prefix}llms-full.txt`, parts.join('\n\n---\n\n'))
  }
}
