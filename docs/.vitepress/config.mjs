import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoahsarkTaiwan's website",

  description: "A VitePress Site",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=GTM-5CMXCHDV' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-5CMXCHDV');`
    ]
  ],
  

  base: '/',

  markdown: {
    math: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/profile_picture.jpg',

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '使用 <a href="https://vitepress.dev/" target="blank_">VitePress</a> 製作',
      copyright: 'Copyright © 2024 NoahsarkTaiwan'
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: {
      '/mc_server/': [
        {
          text: 'Minecraft 伺服器架設教學',
          items: [
            { text: '伺服器', link: '/mc_server/' },
          ]
        },
        {
          text: 'Forge',
          items: [
            { text: '簡介', link: '/mc_server/forge/'},
            { text: '大於1.16.5的版本', link: '/mc_server/forge/hv'},
            { text: '小於1.17的版本', link: '/mc_server/forge/lv'}
          ]
        },
        {
          text: 'Fabric',
          items: [
            { text: 'Fabric伺服器架設', link: '/mc_server/fabric/'}
          ]
        },
        {
          text: 'Paper',
          items: [
            { text: 'Paper伺服器架設', link: '/mc_server/paper/'}
          ]
        },
        {
          text: 'Join Server',
          items: [
            { text: '加入伺服器，以及連線方式', link: '/mc_server/join/'}
          ]
        }
      ],
      '/trig_func/': [
        {
          text: '三角函數',
          items: [
            { text: '三角函數的筆記', link: '/trig_func/' }
          ]
        }
      ],
      '/digital_design/': [
        {
          text: '數位邏輯設計',
          items: [
            { text: '數位邏輯設計的筆記', link: '/digital_design/' },
            { text: '邏輯閘', link: '/digital_design/logic_gate' },
            { text: '卡諾圖', link: '/digital_design/kmap' }
          ]
        }
      ],
      '/zerojudge/': [
        {
          text: 'zerojudge',
          items: [
            { text: 'zerojudge解題紀錄', link: '/zerojudge/' }
          ]
        },
        {
          text: 'A',
          collapsed: true,
          items: [
            { text: 'a001. 哈囉', link: '/zerojudge/A/a001' },
            { text: 'a002. 簡易加法', link: '/zerojudge/A/a002' },
            { text: 'a003. 兩光法師占卜術', link: '/zerojudge/A/a003' },
            { text: 'a004. 文文的求婚', link: '/zerojudge/A/a004' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoahsarkTaiwan2008' },
      { icon: 'x', link: 'https://twitter.com/NoahsarkTaiwan' },
      { icon: 'instagram', link: 'https://www.instagram.com/noahsarktaiwan/' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UC8obsEVWX05iftvVS7Sz8GQ' }
    ]
  }
})
