import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MAD DOC',
  description: 'MAD·AMV 资料库：定义、分类、历史、术语、工具与来源索引',
  srcDir: 'pages',
  outDir: 'dist',
  cleanUrls: true,
  lastUpdated: true,
  lang: 'zh-CN',

  head: [
    ['meta', { name: 'theme-color', content: '#5b5bd6' }],
    ['meta', { name: 'keywords', content: 'MAD, AMV, MAD教程, AMV历史, MAD吧, 动画音乐视频' }]
  ],

  themeConfig: {
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
          { text: '软件选择', link: '/tools/software' },
          { text: '插件与 AI', link: '/tools/plugins-ai' }
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
            { text: '软件选择', link: '/tools/software' },
            { text: '插件与 AI', link: '/tools/plugins-ai' }
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MAD-Producer/MAD-DOC' }
    ],

    footer: {
      message: '资料以原始链接、官方文档和可追溯存档为先；欢迎补充与纠错。',
      copyright: 'MAD DOC'
    }
  }
})
