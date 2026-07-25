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
          { text: '编码与交付', link: '/tools/encoding' },
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
            { text: '编码与交付', link: '/tools/encoding' },
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

    footer: {
      message: `
        <span class="mad-footer-brand">MAD Producer · MAD DOC</span>
        <span class="mad-footer-links" aria-label="MAD Producer 官方链接">
          <a href="https://madproducer.com" target="_blank" rel="noopener" aria-label="MAD Producer 国际站"><i class="ri-global-line" aria-hidden="true"></i><span>madproducer.com</span></a>
          <a href="https://madproducer.cn" target="_blank" rel="noopener" aria-label="MAD Producer 中国站"><i class="ri-global-line" aria-hidden="true"></i><span>madproducer.cn</span></a>
          <a href="https://space.bilibili.com/3546821106338121" target="_blank" rel="noopener" aria-label="哔哩哔哩"><i class="ri-bilibili-fill" aria-hidden="true"></i><span>Bilibili</span></a>
          <a href="https://www.youtube.com/@InfiniteTeamOfficial" target="_blank" rel="noopener" aria-label="YouTube"><i class="ri-youtube-fill" aria-hidden="true"></i><span>YouTube</span></a>
          <a href="https://qm.qq.com/q/LDaTG07qaC" target="_blank" rel="noopener" aria-label="QQ 社群"><i class="ri-qq-fill" aria-hidden="true"></i><span>QQ</span></a>
          <a href="https://discord.gg/vmtJcs5nxk" target="_blank" rel="noopener" aria-label="Discord 社群"><i class="ri-discord-fill" aria-hidden="true"></i><span>Discord</span></a>
          <a href="https://x.com/Infinite_Team_X" target="_blank" rel="noopener" aria-label="X"><i class="ri-twitter-x-fill" aria-hidden="true"></i><span>X</span></a>
        </span>
      `,
      copyright: 'MAD·AMV 文献与技术资料项目'
    }
  }
})
