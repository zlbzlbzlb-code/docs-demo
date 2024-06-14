import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/docs-demo/",
  head:[["link",{rel:"icon",href:"/docs-demo/background.png"}]],
  title: " 我的文档项目",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,6],
    logo:'background.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', 
        items:[
          {text:'首页',link:'/'},

 {text:'markdown示例',link:'markdown-examples'}

      ]},
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: '运行API演示', link: '/api-examples' }
        ],
      },
      {
        text: 'Examples2',
        items: [
          { text: 'Markdown 演示2', link: '/markdown-examples' },
          { text: '运行API演示2', link: '/api-examples' }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zlbzlbzlb-code' }
    ],
    footer:{


      copyright:"Copyright @ 2024-present ZhuLingBo"
    },
  }
})
