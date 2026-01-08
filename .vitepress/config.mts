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
          { text: '快速开始', link: '/quick-start/quick-start' },
          { text: '示例', link: '/examples/markdown-examples' }
        ],

        sidebar: [
          {
            text: '快速开始',
            collapsed: true,
            items: [
              { text: '概览', link: '/quick-start/quick-start' },
              { text: '安装', link: '/quick-start/quick-start#installation' },
              { text: '基础配置', link: '/quick-start/quick-start#basic-setup' },
              { text: '高级配置', link: '/quick-start/quick-start#configuration' }
            ]
          },
          {
            text: '进阶',
            collapsed: true,
            items: [
              { text: '自定义主题', link: '/advanced/custom-theme' },
              { text: 'Markdown 扩展', link: '/advanced/markdown-extensions' },
              { text: '代码高亮', link: '/advanced/code-highlighting' }
            ]
          },
          {
            text: '部署',
            collapsed: true,
            items: [
              { text: '生产构建', link: '/quick-start/quick-start#build-for-production' },
              { text: 'GitHub Pages', link: '/quick-start/quick-start#deploy-to-github-pages' },
              { text: 'Netlify', link: '/quick-start/quick-start#netlify-deployment' }
            ]
          },
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/examples/markdown-examples' },
              { text: 'Runtime API 示例', link: '/examples/api-examples' }
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
