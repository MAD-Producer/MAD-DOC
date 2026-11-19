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

const zhSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '认识 MAD·AMV',
    collapsed: false,
    items: [
      { text: '定义与边界', link: '/mad/mad' },
      { text: '分类方法', link: '/mad/classification' },
      { text: '术语词典', link: '/mad/glossary' }
    ]
  },
  {
    text: '历史与研究',
    collapsed: false,
    items: [
      { text: '历史时间线', link: '/history/timeline' },
      {
        text: '电脑绘卷专栏摘要',
        link: '/history/dennouemaki',
        collapsed: true,
        items: [
          { text: '起源、语源与十二支团', link: '/history/dennouemaki/origins' },
          { text: '媒体、流通与视频平台', link: '/history/dennouemaki/media' },
          { text: '分类、创作观与著作权', link: '/history/dennouemaki/theory' }
        ]
      },
      { text: '研究方法与问卷', link: '/history/research' }
    ]
  },
  {
    text: '创作工具',
    collapsed: false,
    items: [
      { text: '工具总览', link: '/tools/' },
      { text: '软件选择', link: '/tools/software' },
      { text: '素材与工程管理', link: '/tools/footage' },
      { text: '视频基础与编码', link: '/tools/encoding' },
      { text: '插件与脚本', link: '/tools/plugins-ai' },
      { text: 'AI 辅助与 MAID', link: '/tools/ai' }
    ]
  },
  {
    text: '比赛',
    collapsed: false,
    items: [
      { text: '比赛与投稿规范', link: '/mad/contest-rules' }
    ]
  },
  {
    text: '资料与存档',
    collapsed: true,
    items: [
      { text: '来源索引', link: '/resources/' },
      { text: '旧版 MAD 资料（存档）', link: '/mad/mad-original' },
      { text: '山外青山楼外楼（存档）', link: '/history/history' },
      { text: '中国 MAD 创作者研究（论文）', link: '/mad/ccopw' }
    ]
  }
]

const enSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'About MAD·AMV',
    collapsed: false,
    items: [
      { text: 'Definitions and Scope', link: '/en/mad/mad' },
      { text: 'Classification', link: '/en/mad/classification' },
      { text: 'Glossary', link: '/en/mad/glossary' }
    ]
  },
  {
    text: 'History and Research',
    collapsed: false,
    items: [
      { text: 'Historical Timeline', link: '/en/history/timeline' },
      {
        text: 'Dennou Emaki Column Summaries',
        link: '/en/history/dennouemaki',
        collapsed: true,
        items: [
          { text: 'Origins, Etymology, and Jūnishidan', link: '/en/history/dennouemaki/origins' },
          { text: 'Media, Distribution, and Platforms', link: '/en/history/dennouemaki/media' },
          { text: 'Classification, Creativity, and Copyright', link: '/en/history/dennouemaki/theory' }
        ]
      },
      { text: 'Research Methods and Survey', link: '/en/history/research' }
    ]
  },
  {
    text: 'Creation Tools',
    collapsed: false,
    items: [
      { text: 'Tools Overview', link: '/en/tools/' },
      { text: 'Software', link: '/en/tools/software' },
      { text: 'Source Media and Project Management', link: '/en/tools/footage' },
      { text: 'Video Fundamentals and Encoding', link: '/en/tools/encoding' },
      { text: 'Plugins and Scripts', link: '/en/tools/plugins-ai' },
      { text: 'AI Assistance and MAID', link: '/en/tools/ai' }
    ]
  },
  {
    text: 'Contests',
    collapsed: false,
    items: [
      { text: 'Contest and Submission Guidelines', link: '/en/mad/contest-rules' }
    ]
  },
  {
    text: 'Resources and Archive',
    collapsed: true,
    items: [
      { text: 'Source Index', link: '/en/resources/' },
      { text: 'Legacy MAD Resources (Archive)', link: '/en/mad/mad-original' },
      { text: 'Beyond the Mountains (Archive)', link: '/en/history/history' },
      { text: 'Chinese MAD Creator Study (Dissertation)', link: '/en/mad/ccopw' }
    ]
  }
]

const zhThemeConfig: DefaultTheme.Config = {
  logo,
  sidebarMenuLabel: '导航',
  returnToTopLabel: '返回顶部',
  darkModeSwitchLabel: '外观',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式',
  langMenuLabel: '切换语言',
  skipToContentLabel: '跳到正文',
  notFound: {
    title: '页面不存在',
    quote: '这个地址没有对应的页面，可能已移动或从未存在。',
    linkLabel: '返回首页',
    linkText: '返回首页'
  },
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
        { text: '术语词典', link: '/mad/glossary' }
      ]
    },
    {
      text: '历史',
      items: [
        { text: '历史时间线', link: '/history/timeline' },
        { text: '电脑绘卷专栏摘要', link: '/history/dennouemaki' },
        { text: '研究方法与问卷', link: '/history/research' }
      ]
    },
    {
      text: '创作',
      items: [
        {
          text: '工具与工作流',
          items: [
            { text: '工具总览', link: '/tools/' },
            { text: '软件选择', link: '/tools/software' },
            { text: '插件与脚本', link: '/tools/plugins-ai' },
            { text: 'AI 辅助与 MAID', link: '/tools/ai' }
          ]
        },
        {
          text: '素材与交付',
          items: [
            { text: '素材与工程管理', link: '/tools/footage' },
            { text: '视频基础与编码', link: '/tools/encoding' }
          ]
        }
      ]
    },
    { text: '比赛规范', link: '/mad/contest-rules' },
    {
      text: '资料',
      items: [
        { text: '来源索引', link: '/resources/' },
        {
          text: '存档',
          items: [
            { text: '旧版 MAD 资料', link: '/mad/mad-original' },
            { text: '山外青山楼外楼（MAD史）', link: '/history/history' },
            { text: '中国 MAD 创作者研究', link: '/mad/ccopw' }
          ]
        }
      ]
    }
  ],
  sidebar: {
    '/': zhSidebar
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
        { text: 'Glossary', link: '/en/mad/glossary' }
      ]
    },
    {
      text: 'History',
      items: [
        { text: 'Historical Timeline', link: '/en/history/timeline' },
        { text: 'Dennou Emaki Column Summaries', link: '/en/history/dennouemaki' },
        { text: 'Research Methods and Survey', link: '/en/history/research' }
      ]
    },
    {
      text: 'Create',
      items: [
        {
          text: 'Tools and Workflows',
          items: [
            { text: 'Tools Overview', link: '/en/tools/' },
            { text: 'Software', link: '/en/tools/software' },
            { text: 'Plugins and Scripts', link: '/en/tools/plugins-ai' },
            { text: 'AI Assistance and MAID', link: '/en/tools/ai' }
          ]
        },
        {
          text: 'Source Media and Delivery',
          items: [
            { text: 'Source Media and Project Management', link: '/en/tools/footage' },
            { text: 'Video Fundamentals and Encoding', link: '/en/tools/encoding' }
          ]
        }
      ]
    },
    { text: 'Contests', link: '/en/mad/contest-rules' },
    {
      text: 'Resources',
      items: [
        { text: 'Source Index', link: '/en/resources/' },
        {
          text: 'Archive',
          items: [
            { text: 'Legacy MAD Resources', link: '/en/mad/mad-original' },
            { text: 'Beyond the Mountains (History of MAD)', link: '/en/history/history' },
            { text: 'Chinese MAD Creator Study', link: '/en/mad/ccopw' }
          ]
        }
      ]
    }
  ],
  sidebar: {
    '/en/': enSidebar
  },
  footer: enFooter
}

export default defineConfig({
  title: 'MAD DOC',
  description: ZH_DESCRIPTION,
  srcDir: 'pages',
  srcExclude: [
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
  transformHead({ page }) {
    if (page !== '404.md') return

    return [
      ['meta', { name: 'robots', content: 'noindex, follow' }],
      ['meta', { name: 'googlebot', content: 'noindex, follow' }]
    ]
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
    ['meta', { name: 'theme-color', content: '#5b5bd6' }]
  ]
})
