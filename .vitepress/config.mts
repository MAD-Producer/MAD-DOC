import { defineConfig, type DefaultTheme } from 'vitepress'
import {
  createSeoHead,
  enhanceSitemapItems,
  EN_DESCRIPTION,
  SITE_URL,
  ZH_DESCRIPTION
} from './seo'

const logo: DefaultTheme.ThemeableImage = {
  src: '/brand/mad-producer-logo.webp',
  alt: 'MAD DOC'
}

const zhFooter: DefaultTheme.Footer = {
  message: `
    <span class="mad-footer-shell">
      <span class="mad-footer-main">
        <span class="mad-footer-identity">
          <span class="mad-footer-monogram" aria-hidden="true"><img src="/brand/mad-producer-logo.webp" alt=""></span>
          <span class="mad-footer-brand-copy">
            <span class="mad-footer-kicker">MAD PRODUCER PROJECT</span>
            <strong>MAD DOC</strong>
            <span class="mad-footer-studio">MAD Producer 麦德工坊旗下项目 · 由 MAD Producer Studio 开发与维护</span>
          </span>
        </span>
        <span class="mad-footer-links" role="navigation" aria-label="MAD Producer 官方链接">
          <a href="https://madproducer.com" target="_blank" rel="noopener"><i class="ri-global-line" aria-hidden="true"></i><span>国际站</span></a>
          <a href="https://madproducer.cn" target="_blank" rel="noopener"><i class="ri-global-line" aria-hidden="true"></i><span>中国站</span></a>
          <a href="https://space.bilibili.com/3546821106338121" target="_blank" rel="noopener"><i class="ri-bilibili-fill" aria-hidden="true"></i><span>Bilibili</span></a>
          <a href="https://www.youtube.com/@InfiniteTeamOfficial" target="_blank" rel="noopener"><i class="ri-youtube-fill" aria-hidden="true"></i><span>YouTube</span></a>
          <a href="https://qm.qq.com/q/LDaTG07qaC" target="_blank" rel="noopener"><i class="ri-qq-fill" aria-hidden="true"></i><span>QQ</span></a>
          <a href="https://discord.gg/vmtJcs5nxk" target="_blank" rel="noopener"><i class="ri-discord-fill" aria-hidden="true"></i><span>Discord</span></a>
          <a href="https://x.com/Infinite_Team_X" target="_blank" rel="noopener"><i class="ri-twitter-x-fill" aria-hidden="true"></i><span>X</span></a>
          <a href="https://github.com/MAD-Producer/MAD-DOC" target="_blank" rel="noopener"><i class="ri-github-fill" aria-hidden="true"></i><span>GitHub</span></a>
        </span>
      </span>
      <span class="mad-footer-meta">
        <a class="mad-footer-license" href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="license noopener">
          <span class="mad-footer-license-icons" aria-hidden="true"><i class="ri-creative-commons-line"></i><i class="ri-creative-commons-by-line"></i><i class="ri-creative-commons-sa-line"></i></span>
          <span>本项目采用 CC BY-SA 4.0 许可</span>
        </a>
        <span class="mad-footer-purpose">MAD·AMV 文献与技术资料项目</span>
      </span>
    </span>
  `,
  copyright: '© 2026 MAD Producer Studio'
}

const enFooter: DefaultTheme.Footer = {
  message: `
    <span class="mad-footer-shell">
      <span class="mad-footer-main">
        <span class="mad-footer-identity">
          <span class="mad-footer-monogram" aria-hidden="true"><img src="/brand/mad-producer-logo.webp" alt=""></span>
          <span class="mad-footer-brand-copy">
            <span class="mad-footer-kicker">MAD PRODUCER PROJECT</span>
            <strong>MAD DOC</strong>
            <span class="mad-footer-studio">A MAD Producer project · Developed and maintained by MAD Producer Studio</span>
          </span>
        </span>
        <span class="mad-footer-links" role="navigation" aria-label="Official MAD Producer links">
          <a href="https://madproducer.com" target="_blank" rel="noopener"><i class="ri-global-line" aria-hidden="true"></i><span>Global</span></a>
          <a href="https://madproducer.cn" target="_blank" rel="noopener"><i class="ri-global-line" aria-hidden="true"></i><span>China</span></a>
          <a href="https://space.bilibili.com/3546821106338121" target="_blank" rel="noopener"><i class="ri-bilibili-fill" aria-hidden="true"></i><span>Bilibili</span></a>
          <a href="https://www.youtube.com/@InfiniteTeamOfficial" target="_blank" rel="noopener"><i class="ri-youtube-fill" aria-hidden="true"></i><span>YouTube</span></a>
          <a href="https://qm.qq.com/q/LDaTG07qaC" target="_blank" rel="noopener"><i class="ri-qq-fill" aria-hidden="true"></i><span>QQ</span></a>
          <a href="https://discord.gg/vmtJcs5nxk" target="_blank" rel="noopener"><i class="ri-discord-fill" aria-hidden="true"></i><span>Discord</span></a>
          <a href="https://x.com/Infinite_Team_X" target="_blank" rel="noopener"><i class="ri-twitter-x-fill" aria-hidden="true"></i><span>X</span></a>
          <a href="https://github.com/MAD-Producer/MAD-DOC" target="_blank" rel="noopener"><i class="ri-github-fill" aria-hidden="true"></i><span>GitHub</span></a>
        </span>
      </span>
      <span class="mad-footer-meta">
        <a class="mad-footer-license" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener">
          <span class="mad-footer-license-icons" aria-hidden="true"><i class="ri-creative-commons-line"></i><i class="ri-creative-commons-by-line"></i><i class="ri-creative-commons-sa-line"></i></span>
          <span>This project is licensed under CC BY-SA 4.0</span>
        </a>
        <span class="mad-footer-purpose">MAD·AMV literature and technical resources</span>
      </span>
    </span>
  `,
  copyright: '© 2026 MAD Producer Studio'
}

const zhThemeConfig: DefaultTheme.Config = {
  logo,
  outline: {
    level: [2, 3],
    label: '本页目录'
  },
  lastUpdated: {
    text: '最后更新'
  },
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  search: {
    provider: 'local',
    options: {
      locales: {
        root: {
          translations: {
            button: {
              buttonText: '搜索资料',
              buttonAriaLabel: '搜索资料'
            },
            modal: {
              noResultsText: '没有找到相关资料',
              resetButtonTitle: '清除查询',
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭'
              }
            }
          }
        }
      }
    }
  },
  nav: [
    { text: '首页', link: '/' },
    {
      text: '认识 MAD·AMV',
      items: [
        { text: '定义与边界', link: '/mad/mad' },
        { text: '分类方法', link: '/mad/classification' },
        { text: '术语词典', link: '/mad/glossary' },
        { text: '比赛与投稿规范', link: '/mad/contest-rules' }
      ]
    },
    {
      text: '历史',
      items: [
        { text: '三条发展脉络', link: '/history/timeline' },
        { text: '研究与问卷', link: '/history/research' },
        { text: '中文旧史料存档', link: '/history/history' }
      ]
    },
    {
      text: '创作工具',
      items: [
        { text: '工具总览', link: '/tools/' },
        { text: '素材与工程', link: '/tools/footage' },
        { text: '编码与交付', link: '/tools/encoding' },
        { text: '软件选择', link: '/tools/software' },
        { text: '插件与脚本', link: '/tools/plugins-ai' },
        { text: 'AI 辅助与 MAID', link: '/tools/ai' }
      ]
    },
    { text: '来源索引', link: '/resources/' }
  ],
  sidebar: {
    '/mad/': [
      {
        text: '一、认识 MAD·AMV',
        items: [
          { text: '定义与边界', link: '/mad/mad' },
          { text: '分类方法', link: '/mad/classification' },
          { text: '术语词典', link: '/mad/glossary' },
          { text: '比赛与投稿规范', link: '/mad/contest-rules' },
          { text: '创作者现状研究', link: '/mad/ccopw' },
          { text: '旧版 MAD 资料（存档）', link: '/mad/mad-original' }
        ]
      }
    ],
    '/history/': [
      {
        text: '二、历史与研究',
        items: [
          { text: '三条发展脉络', link: '/history/timeline' },
          { text: '研究方法与问卷', link: '/history/research' },
          { text: '山外青山楼外楼（存档）', link: '/history/history' }
        ]
      }
    ],
    '/tools/': [
      {
        text: '三、创作工具',
        items: [
          { text: '工具总览', link: '/tools/' },
          { text: '素材与工程', link: '/tools/footage' },
          { text: '编码与交付', link: '/tools/encoding' },
          { text: '软件选择', link: '/tools/software' },
          { text: '插件与脚本', link: '/tools/plugins-ai' },
          { text: 'AI 辅助与 MAID', link: '/tools/ai' }
        ]
      }
    ],
    '/resources/': [
      {
        text: '资料来源',
        items: [
          { text: '来源索引与考证状态', link: '/resources/' }
        ]
      }
    ]
  },
  footer: zhFooter
}

const enThemeConfig: DefaultTheme.Config = {
  logo,
  outline: {
    level: [2, 3],
    label: 'On this page'
  },
  lastUpdated: {
    text: 'Last updated'
  },
  docFooter: {
    prev: 'Previous page',
    next: 'Next page'
  },
  search: {
    provider: 'local'
  },
  nav: [
    { text: 'Home', link: '/en/' },
    {
      text: 'About MAD·AMV',
      items: [
        { text: 'Definitions and Scope', link: '/en/mad/mad' },
        { text: 'Classification', link: '/en/mad/classification' },
        { text: 'Glossary', link: '/en/mad/glossary' },
        { text: 'Contest and Submission Guidelines', link: '/en/mad/contest-rules' }
      ]
    },
    {
      text: 'History',
      items: [
        { text: 'Three Historical Threads', link: '/en/history/timeline' },
        { text: 'Research and Survey', link: '/en/history/research' },
        { text: 'Historical Archive', link: '/en/history/history' }
      ]
    },
    {
      text: 'Creation Tools',
      items: [
        { text: 'Overview', link: '/en/tools/' },
        { text: 'Source Media and Projects', link: '/en/tools/footage' },
        { text: 'Encoding and Delivery', link: '/en/tools/encoding' },
        { text: 'Software', link: '/en/tools/software' },
        { text: 'Plugins and Scripts', link: '/en/tools/plugins-ai' },
        { text: 'AI Assistance and MAID', link: '/en/tools/ai' }
      ]
    },
    { text: 'Source Index', link: '/en/resources/' }
  ],
  sidebar: {
    '/en/mad/': [
      {
        text: 'I. About MAD·AMV',
        items: [
          { text: 'Definitions and Scope', link: '/en/mad/mad' },
          { text: 'Classification', link: '/en/mad/classification' },
          { text: 'Glossary', link: '/en/mad/glossary' },
          { text: 'Contest and Submission Guidelines', link: '/en/mad/contest-rules' },
          { text: 'Creator Research', link: '/en/mad/ccopw' },
          { text: 'Legacy MAD Resources (Archive)', link: '/en/mad/mad-original' }
        ]
      }
    ],
    '/en/history/': [
      {
        text: 'II. History and Research',
        items: [
          { text: 'Three Historical Threads', link: '/en/history/timeline' },
          { text: 'Research Methods and Survey', link: '/en/history/research' },
          { text: 'Beyond the Mountains, Beyond the Towers (Archive)', link: '/en/history/history' }
        ]
      }
    ],
    '/en/tools/': [
      {
        text: 'III. Creation Tools',
        items: [
          { text: 'Overview', link: '/en/tools/' },
          { text: 'Source Media and Projects', link: '/en/tools/footage' },
          { text: 'Encoding and Delivery', link: '/en/tools/encoding' },
          { text: 'Software', link: '/en/tools/software' },
          { text: 'Plugins and Scripts', link: '/en/tools/plugins-ai' },
          { text: 'AI Assistance and MAID', link: '/en/tools/ai' }
        ]
      }
    ],
    '/en/resources/': [
      {
        text: 'Source Documentation',
        items: [
          { text: 'Source Index and Verification Status', link: '/en/resources/' }
        ]
      }
    ]
  },
  footer: enFooter
}

export default defineConfig({
  title: 'MAD DOC',
  description: ZH_DESCRIPTION,
  srcDir: 'pages',
  srcExclude: [
    'advanced/code-highlighting.md',
    'advanced/custom-theme.md',
    'advanced/markdown-extensions.md',
    'history/markdown-examples.md',
    'tools/images/vcb-encoding/README.md'
  ],
  outDir: 'dist',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: SITE_URL,
    lastmodDateOnly: true,
    transformItems: enhanceSitemapItems
  },
  transformPageData(pageData) {
    return {
      frontmatter: {
        ...pageData.frontmatter,
        head: [
          ...(pageData.frontmatter.head ?? []),
          ...createSeoHead(pageData)
        ]
      }
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'MAD DOC',
      description: ZH_DESCRIPTION,
      themeConfig: zhThemeConfig
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'MAD DOC',
      description: EN_DESCRIPTION,
      themeConfig: enThemeConfig
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/brand/mad-producer-logo.webp' }],
    ['meta', { name: 'theme-color', content: '#5b5bd6' }],
    ['meta', { name: 'keywords', content: 'MAD, AMV, MAD tutorial, AMV history, MAD community, anime music video' }]
  ]
})
