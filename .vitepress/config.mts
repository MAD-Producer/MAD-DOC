import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MAD DOC",
  description: "MAD·AMV 文档库",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        outline: { level: [1, 3] },

        nav: [
          { text: '首页', link: '/' },
          { text: '什么是MAD?', link: '/mad/mad' },
          { text: '历史', link: '/history/history' }

        ],

        sidebar: [
          {
            text: '什么是MAD?',
            collapsed: true,
            items: [
              { text: 'MAD片', link: '/mad/mad' },
              { text: '起源', link: '/mad/mad#mad起源' },
              { text: '消长', link: '/mad/mad#mad界的消长' },
              { text: '分类', link: '/mad/mad#mad分类' },
              { text: '现状分析', link: '/mad/ccopw'}
            ]
          },
          {
            text: '历史',
            items: [
              { text: 'MAD史', link: '/history/history' },
              { text: '声明1', link: '/history/history#%E5%A3%B0%E6%98%8E1' },
              { text: '声明', link: 'history/history#%E8%81%B2%E6%98%8E' },
              { text: '起源', link: 'history/history#%E7%AC%AC%E4%B8%80%E7%AB%A0-mad%E7%9A%84%E8%B5%B7%E6%BA%90' },
              { text: '特色', link: 'history/history#%E7%AC%AC%E4%BA%8C%E7%AB%A0-mad%E7%9A%84%E7%89%B9%E8%89%B2' },
              { text: '活动', link: 'history/history#%E7%AC%AC%E4%B8%89%E7%AB%A0-2005%E5%B9%B4%E4%BB%A5%E9%99%8D%E7%9A%84mad%E6%B4%BB%E5%8B%95%E8%88%87%E5%A4%A7%E8%B3%9E' },
              { text: '附录A', link: 'history/history#%E9%99%84%E9%8C%84a-%E5%90%84%E5%BC%8F%E7%9F%AD%E7%89%87%E7%B4%B0%E9%83%A8%E5%88%86%E9%A1%9E%E8%A1%A8' },
              { text: '附录B', link: 'history/history#%E9%99%84%E9%8C%84b-%E6%AD%B7%E5%B1%86mad%E5%A4%A7%E8%B3%9E%E5%82%91%E5%87%BA%E4%BD%9C%E5%93%81%E5%88%97%E8%A1%A8' },
              { text: '附录C', link: 'history/history#%E9%99%84%E9%8C%84c-%E5%85%B6%E4%BB%96mad%E7%9B%B8%E9%97%9C%E7%AB%99%E9%BB%9E' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/MAD-Producer/MAD-DOC' }
        ]
      }
    },

    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        outline: { level: [1, 3] },

        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Quick Start', link: '/en/quick-start/quick-start' },
          { text: 'Examples', link: '/en/examples/markdown-examples' }
        ],

        sidebar: [
          {
            text: 'Quick Start',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/quick-start/quick-start' },
              { text: 'Installation', link: '/en/quick-start/quick-start#installation' },
              { text: 'Basic Setup', link: '/en/quick-start/quick-start#basic-setup' },
              { text: 'Configuration', link: '/en/quick-start/quick-start#configuration' }
            ]
          },
          {
            text: 'Advanced',
            collapsed: true,
            items: [
              { text: 'Custom Theme', link: '/en/advanced/custom-theme' },
              { text: 'Markdown Extensions', link: '/en/advanced/markdown-extensions' },
              { text: 'Code Highlighting', link: '/en/advanced/code-highlighting' }
            ]
          },
          {
            text: 'Deployment',
            collapsed: true,
            items: [
              { text: 'Build for Production', link: '/en/quick-start/quick-start#build-for-production' },
              { text: 'GitHub Pages', link: '/en/quick-start/quick-start#deploy-to-github-pages' },
              { text: 'Netlify', link: '/en/quick-start/quick-start#netlify-deployment' }
            ]
          },
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/examples/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/examples/api-examples' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/MAD-Producer/MAD-DOC' }
        ]
      }
    }
  }
})
