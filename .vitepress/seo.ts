import type { HeadConfig } from 'vitepress'

export const SITE_URL = 'https://doc.madproducer.top'
export const SITE_NAME = 'MAD DOC'
export const ZH_DESCRIPTION =
  'MAD Producer 麦德工坊维护的 MAD·AMV 资料库：MAD 和 AMV 是什么、作品类型、历史、创作工具、比赛规范与来源索引'
export const EN_DESCRIPTION =
  'A MAD·AMV knowledge base maintained by MAD Producer: what MAD and AMV are, types of works, history, creation tools, contest guidelines, and sources.'
const ZH_HOME_TITLE = 'MAD·AMV 资料库'
const EN_HOME_TITLE = 'MAD·AMV Knowledge Base'

const SOCIAL_IMAGE = `${SITE_URL}/covers/mad-doc-renewal-gfx-16x9-v3.png`

interface SeoPageData {
  relativePath: string
  title: string
  description: string
  frontmatter: Record<string, any>
  lastUpdated?: number
}

interface SitemapLink {
  lang: string
  hreflang?: string
  url: string
}

interface SitemapItem {
  url: string
  links?: SitemapLink[]
}

function pagePath(relativePath: string): string {
  const withoutExtension = relativePath.replace(/\.md$/, '')

  if (withoutExtension === 'index') return '/'
  if (withoutExtension.endsWith('/index')) {
    return `/${withoutExtension.slice(0, -'index'.length)}`
  }

  return `/${withoutExtension}`
}

function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).href
}

function markdownPath(relativePath: string): string {
  return `/${relativePath}`
}

function alternatePaths(relativePath: string): {
  zh: string
  en: string
} {
  if (relativePath.startsWith('en/')) {
    return {
      zh: pagePath(relativePath.slice('en/'.length)),
      en: pagePath(relativePath)
    }
  }

  return {
    zh: pagePath(relativePath),
    en: pagePath(`en/${relativePath}`)
  }
}

function safeJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

interface Section {
  zh: string
  en: string
  path: string
}

// Site sections used for breadcrumbs and Article.articleSection.
const SECTIONS: { match: RegExp; section: Section }[] = [
  { match: /^\/mad\/(mad|classification|glossary)$/, section: { zh: '认识 MAD·AMV', en: 'About MAD·AMV', path: '/mad/mad' } },
  { match: /^\/tools\//, section: { zh: '创作工具', en: 'Creation Tools', path: '/tools/' } },
  { match: /^\/mad\/contest-rules$/, section: { zh: '比赛', en: 'Contests', path: '/mad/contest-rules' } },
  { match: /^\/(history\/(timeline|research|dennouemaki)|mad\/ccopw)/, section: { zh: '历史与研究', en: 'History and Research', path: '/history/timeline' } },
  { match: /^\/(resources\/|mad\/mad-original$|history\/history$)/, section: { zh: '资料与存档', en: 'Resources and Archive', path: '/resources/' } }
]

function sectionFor(path: string): Section | undefined {
  const localPath = path.startsWith('/en/') ? path.slice(3) : path
  return SECTIONS.find(({ match }) => match.test(localPath))?.section
}

function breadcrumbData(
  canonical: string,
  title: string,
  isEnglish: boolean,
  path: string
) {
  if (path === '/' || path === '/en/') return undefined

  const homePath = isEnglish ? '/en/' : '/'
  const items: { name: string; item: string }[] = [
    { name: isEnglish ? 'Home' : '首页', item: absoluteUrl(homePath) }
  ]

  const section = sectionFor(path)
  if (section) {
    const sectionUrl = absoluteUrl(isEnglish ? `/en${section.path}` : section.path)
    if (sectionUrl !== canonical) {
      items.push({ name: isEnglish ? section.en : section.zh, item: sectionUrl })
    }
  }
  items.push({ name: title, item: canonical })

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      ...entry
    }))
  }
}

function structuredData(
  pageData: SeoPageData,
  canonical: string,
  description: string,
  isEnglish: boolean,
  path: string
) {
  const language = isEnglish ? 'en-US' : 'zh-CN'
  const graph: Record<string, any>[] = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'MAD Producer Studio',
      url: 'https://madproducer.com/',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/brand/mad-producer-logo.webp`,
        width: 300,
        height: 300
      },
      sameAs: [
        'https://space.bilibili.com/3546821106338121',
        'https://www.youtube.com/@InfiniteTeamOfficial',
        'https://x.com/Infinite_Team_X',
        'https://github.com/MAD-Producer'
      ]
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: pageData.title,
      description,
      inLanguage: language,
      isPartOf: {
        '@id': `${SITE_URL}/#website`
      },
      publisher: {
        '@id': `${SITE_URL}/#organization`
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: SOCIAL_IMAGE,
        width: 1920,
        height: 1080
      }
    }
  ]

  if (pageData.lastUpdated) {
    graph[1].dateModified = new Date(pageData.lastUpdated).toISOString()
  }

  const isHome = path === '/' || path === '/en/'
  if (!isHome) {
    const section = sectionFor(path)
    const article: Record<string, any> = {
      '@type': 'Article',
      '@id': `${canonical}#article`,
      headline: pageData.title,
      description,
      inLanguage: language,
      mainEntityOfPage: { '@id': `${canonical}#webpage` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      license: 'https://creativecommons.org/licenses/by-sa/4.0/',
      image: SOCIAL_IMAGE,
      encoding: {
        '@type': 'MediaObject',
        encodingFormat: 'text/markdown',
        contentUrl: absoluteUrl(markdownPath(pageData.relativePath))
      }
    }
    if (section) article.articleSection = isEnglish ? section.en : section.zh
    if (pageData.lastUpdated) {
      article.dateModified = new Date(pageData.lastUpdated).toISOString()
    }
    graph.push(article)
  }

  // Google only supports WebSite site-name markup on the domain homepage.
  // The localized /en/ homepage is represented by its WebPage node instead.
  if (path === '/') {
    graph.splice(1, 0, {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: [ZH_HOME_TITLE, EN_HOME_TITLE],
      description,
      inLanguage: language,
      publisher: {
        '@id': `${SITE_URL}/#organization`
      }
    })
  }

  const breadcrumb = breadcrumbData(
    canonical,
    pageData.title,
    isEnglish,
    path
  )
  if (breadcrumb) graph.push(breadcrumb)

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

export function createSeoHead(pageData: SeoPageData): HeadConfig[] {
  const isEnglish = pageData.relativePath.startsWith('en/')
  const path = pagePath(pageData.relativePath)
  const canonical = absoluteUrl(path)
  const alternates = alternatePaths(pageData.relativePath)
  const title =
    pageData.title || (isEnglish ? EN_HOME_TITLE : ZH_HOME_TITLE)
  const description =
    pageData.description || (isEnglish ? EN_DESCRIPTION : ZH_DESCRIPTION)
  const locale = isEnglish ? 'en_US' : 'zh_CN'
  const alternateLocale = isEnglish ? 'zh_CN' : 'en_US'
  const imageAlt = isEnglish
    ? 'MAD DOC — MAD·AMV Knowledge Base'
    : 'MAD DOC — MAD·AMV 资料库'

  const head: HeadConfig[] = [
    ['link', { rel: 'canonical', href: canonical }],
    [
      'link',
      {
        rel: 'alternate',
        type: 'text/markdown',
        title: isEnglish ? 'Markdown version' : 'Markdown 版本',
        href: absoluteUrl(markdownPath(pageData.relativePath))
      }
    ],
    [
      'link',
      {
        rel: 'alternate',
        hreflang: 'zh-Hans',
        href: absoluteUrl(alternates.zh)
      }
    ],
    [
      'link',
      {
        rel: 'alternate',
        hreflang: 'en',
        href: absoluteUrl(alternates.en)
      }
    ],
    [
      'link',
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: absoluteUrl(alternates.zh)
      }
    ],
    [
      'meta',
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      }
    ],
    ['meta', { name: 'author', content: 'MAD Producer Studio' }],
    ['meta', { property: 'og:type', content: path === '/' || path === '/en/' ? 'website' : 'article' }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: canonical }],
    ['meta', { property: 'og:locale', content: locale }],
    ['meta', { property: 'og:locale:alternate', content: alternateLocale }],
    ['meta', { property: 'og:image', content: SOCIAL_IMAGE }],
    ['meta', { property: 'og:image:secure_url', content: SOCIAL_IMAGE }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1920' }],
    ['meta', { property: 'og:image:height', content: '1080' }],
    ['meta', { property: 'og:image:alt', content: imageAlt }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: SOCIAL_IMAGE }],
    ['meta', { name: 'twitter:image:alt', content: imageAlt }],
    [
      'script',
      { type: 'application/ld+json' },
      safeJson(
        structuredData(
          { ...pageData, title },
          canonical,
          description,
          isEnglish,
          path
        )
      )
    ]
  ]

  if (pageData.lastUpdated && path !== '/' && path !== '/en/') {
    head.push([
      'meta',
      {
        property: 'article:modified_time',
        content: new Date(pageData.lastUpdated).toISOString()
      }
    ])
  }

  return head
}

export function enhanceSitemapItems<T extends SitemapItem>(items: T[]): T[] {
  return items.map((item) => {
    if (!item.links?.length) return item

    const links = item.links.map((link) => ({
      ...link,
      lang: link.lang.toLowerCase().startsWith('zh') ? 'zh-Hans' : 'en'
    }))
    const defaultLink = links.find((link) => link.lang === 'zh-Hans')

    if (defaultLink) {
      links.push({
        lang: 'x-default',
        url: defaultLink.url
      })
    }

    return {
      ...item,
      links
    }
  })
}
