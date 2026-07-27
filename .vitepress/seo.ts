import type { HeadConfig } from 'vitepress'

export const SITE_URL = 'https://doc.madproducer.top'
export const SITE_NAME = 'MAD DOC'
export const ZH_DESCRIPTION =
  'MAD Producer 麦德工坊旗下的 MAD·AMV 资料库：定义、分类、历史、术语、工具与来源索引'
export const EN_DESCRIPTION =
  'A MAD·AMV knowledge base by MAD Producer, covering definitions, classification, history, terminology, tools, and sources.'

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

function breadcrumbData(
  canonical: string,
  title: string,
  isEnglish: boolean,
  path: string
) {
  if (path === '/' || path === '/en/') return undefined

  const homePath = isEnglish ? '/en/' : '/'

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEnglish ? 'Home' : '首页',
        item: absoluteUrl(homePath)
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: canonical
      }
    ]
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

  if (path === '/') {
    graph.splice(1, 0, {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: ['MAD·AMV 资料库', 'MAD·AMV Knowledge Base'],
      description: ZH_DESCRIPTION,
      inLanguage: ['zh-CN', 'en-US'],
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
    ['meta', { property: 'og:title', content: pageData.title }],
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
    ['meta', { name: 'twitter:title', content: pageData.title }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: SOCIAL_IMAGE }],
    ['meta', { name: 'twitter:image:alt', content: imageAlt }],
    [
      'script',
      { type: 'application/ld+json' },
      safeJson(
        structuredData(
          pageData,
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
