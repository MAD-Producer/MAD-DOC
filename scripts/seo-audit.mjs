import { readFileSync } from 'node:fs'

const DIST_DIR = new URL('../dist/', import.meta.url)
const SITE_ORIGIN = 'https://doc.madproducer.top'
const errors = []

function readDist(relativePath) {
  return readFileSync(new URL(relativePath, DIST_DIR), 'utf8')
}

function matches(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1])
}

function htmlFileFor(urlString) {
  const { pathname } = new URL(urlString)

  if (pathname === '/') return 'index.html'
  if (pathname.endsWith('/')) return `${pathname.slice(1)}index.html`
  return `${pathname.slice(1)}.html`
}

function assert(condition, message) {
  if (!condition) errors.push(message)
}

const sitemap = readDist('sitemap.xml')
const sitemapUrls = matches(sitemap, /<loc>([^<]+)<\/loc>/g)
const uniqueSitemapUrls = new Set(sitemapUrls)

assert(sitemapUrls.length > 0, 'sitemap.xml does not contain any URLs')
assert(
  sitemapUrls.length === uniqueSitemapUrls.size,
  'sitemap.xml contains duplicate URLs'
)

const titles = new Map()
const descriptions = new Map()
const hreflangByUrl = new Map()

for (const url of sitemapUrls) {
  const file = htmlFileFor(url)
  let html

  try {
    html = readDist(file)
  } catch {
    errors.push(`${url}: expected output file ${file} is missing`)
    continue
  }

  const title = matches(html, /<title>([^<]*)<\/title>/g)
  const description = matches(
    html,
    /<meta\s+name="description"\s+content="([^"]*)"/g
  )
  const canonical = matches(
    html,
    /<link\s+rel="canonical"\s+href="([^"]*)"/g
  )
  const robots = matches(
    html,
    /<meta\s+name="robots"\s+content="([^"]*)"/g
  )
  const languages = matches(
    html,
    /<link\s+rel="alternate"\s+hreflang="([^"]*)"/g
  )
  const alternateLinks = [...html.matchAll(
    /<link\s+rel="alternate"\s+hreflang="([^"]*)"\s+href="([^"]*)"/g
  )].map((match) => ({ language: match[1], url: match[2] }))
  const structuredData = matches(
    html,
    /<script\s+type="application\/ld\+json">([^<]+)<\/script>/g
  )

  assert(title.length === 1 && title[0], `${url}: expected one non-empty title`)
  assert(
    description.length === 1 && description[0],
    `${url}: expected one non-empty meta description`
  )
  assert(
    canonical.length === 1 && canonical[0] === url,
    `${url}: canonical must exactly match the sitemap URL`
  )
  assert(
    robots.length === 1 && robots[0].includes('index, follow'),
    `${url}: expected one index, follow robots directive`
  )
  assert(
    ['zh-Hans', 'en', 'x-default'].every((lang) => languages.includes(lang)),
    `${url}: missing one or more hreflang values`
  )
  assert(
    alternateLinks.length === 3,
    `${url}: expected exactly three hreflang links`
  )
  assert(
    html.includes(`<html lang="${new URL(url).pathname.startsWith('/en/') ? 'en-US' : 'zh-CN'}"`),
    `${url}: HTML language does not match the localized route`
  )
  assert(
    !html.includes('<title>404') && !html.includes('content="Not Found"'),
    `${url}: rendered with 404 metadata`
  )
  assert(structuredData.length === 1, `${url}: expected one JSON-LD block`)
  hreflangByUrl.set(url, alternateLinks)

  for (const json of structuredData) {
    try {
      JSON.parse(json)
    } catch {
      errors.push(`${url}: JSON-LD is not valid JSON`)
    }
  }

  if (title[0]) {
    assert(
      !titles.has(title[0]),
      `${url}: duplicate title shared with ${titles.get(title[0])}`
    )
    titles.set(title[0], url)
  }

  if (description[0]) {
    assert(
      !descriptions.has(description[0]),
      `${url}: duplicate description shared with ${descriptions.get(description[0])}`
    )
    descriptions.set(description[0], url)
  }
}

for (const [url, links] of hreflangByUrl) {
  for (const link of links) {
    assert(
      uniqueSitemapUrls.has(link.url),
      `${url}: hreflang ${link.language} points outside the canonical sitemap`
    )

    if (link.language === 'x-default') continue

    const reciprocalLinks = hreflangByUrl.get(link.url) ?? []
    assert(
      reciprocalLinks.some((candidate) => candidate.url === url),
      `${url}: hreflang ${link.language} is not reciprocal`
    )
  }
}

const notFound = readDist('404.html')
assert(
  /<meta\s+name="robots"\s+content="noindex, follow"/.test(notFound),
  '404.html must contain a noindex robots directive'
)
assert(
  !/<link\s+rel="canonical"/.test(notFound),
  '404.html must not declare a canonical URL'
)

const robotsTxt = readDist('robots.txt')
assert(/User-agent:\s*\*/i.test(robotsTxt), 'robots.txt is missing User-agent: *')
assert(/Allow:\s*\//i.test(robotsTxt), 'robots.txt is missing Allow: /')
assert(
  robotsTxt.includes(`${SITE_ORIGIN}/sitemap.xml`),
  'robots.txt does not reference the canonical sitemap URL'
)

for (const verificationFile of [
  'google857d3e5d3bc7bb1c.html',
  'BingSiteAuth.xml'
]) {
  try {
    readDist(verificationFile)
  } catch {
    errors.push(`${verificationFile} is missing from the build output`)
  }
}

for (const machineFile of ['llms.txt', 'llms-full.txt', 'en/llms-full.txt']) {
  try {
    const text = readDist(machineFile)
    assert(text.length > 1000, `${machineFile} looks empty`)
  } catch {
    errors.push(`${machineFile} is missing from the build output`)
  }
}

for (const url of sitemapUrls) {
  const html = readDist(htmlFileFor(url))
  const markdown = matches(
    html,
    /<link\s+rel="alternate"\s+type="text\/markdown"[^>]*href="([^"]*)"/g
  )
  assert(markdown.length === 1, `${url}: expected one Markdown alternate link`)
  if (markdown[0]) {
    try {
      readDist(new URL(markdown[0]).pathname.slice(1))
    } catch {
      errors.push(`${url}: Markdown copy ${markdown[0]} is missing`)
    }
  }
}

if (errors.length) {
  console.error(`SEO audit failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`SEO audit passed for ${sitemapUrls.length} canonical pages.`)
