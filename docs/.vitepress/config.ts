import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zane笔记",
  titleTemplate: false,
  description: "my note",
  head: [],
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '其它',
        items: [
          { text: '变更日志', link: '/markdown/logs/logs' },
          { text: '常用语法示例', link: '/markdown-examples' },
          { text: '运行时API', link: '/api-examples' }

        ]
      }
    ],

    sidebar: [
      {
        text: 'JavaScript',
        collapsed: false,
        items: [
          {
            text: '轮子',
            collapsed: false,
            items: [
              { text: '拖拽', link: '/markdown/javascript/轮子/drag' },
              { text: '锚点跳转', link: '/markdown/javascript/轮子/锚点跳转' }
            ]
          }
        ]
      },
      {
        text: '网络',
        collapsed: false,
        items: [
          { text: '内网穿透:frp', link: '/markdown/网络/内网穿透/frp' }
        ]
      },
      {
        text: '随笔',
        collapsed: false,
        items: [
          { text: '好偷！', link: '/markdown/随笔/好句' },
          { text: '穷啊！', link: '/markdown/随笔/穷啊' }
        ]
      },
    ],
    // 社交logo链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzyouyou/Zane-Note' }
    ],

    editLink: {
      pattern: 'https://github.com/zzyouyou/Zane-Note/edit/main/docs/:path',
      text: '编辑'
    },

    lastUpdatedText: '上次更新时间',
  },

})
