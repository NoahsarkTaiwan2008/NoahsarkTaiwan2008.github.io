import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoahsarkTaiwan's website",
  description: "Hello.",
  lang: "en_us",
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  lastUpdated: {
    text: "最後更新於 ",
    formatOptions: {
      dateStyle: "full",
      timeStyle: "medium"
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    footer: {
      message: '使用 <a href="https://vitepress.dev/" target="_blank">VitePress</a> 製作',
      copyright: 'Copyright © 2024 NoahsarkTaiwan'
    },    

    collapsed: false,
    base: "https://noahsarktaiwan2008.github.io/",

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: {

      "/start/": [ //start資料夾的內容
        {
          text: "start",
          items: [
            {text: "什麼是VitePress?", link: '/start/'},
            {text: "安裝", link: "/start/install"}
          ]
        }
      ],

      "/zerojudge/": [ //zerojudge資料夾的內容
        {
          text: "zerojudge",
          items: [
            {text: "簡介", link: "/zerojudge/"},
          ]
        },
        {
          text: "A",
          items: [
            {text: "a001. 哈囉", link: "/zerojudge/A/a001"},
            {text: "a002. 簡易加法", link: "/zerojudge/A/a002"},
            {text: "a003. 兩光法師占卜術", link: "/zerojudge/A/a003"},
            {text: "a004. 文文的求婚", link: "/zerojudge/A/a004"},
            {text: "a005. Eva 的回家作業", link: "/zerojudge/A/a005"},
          ]
        },
        {
          text: "B",
          items: [
            {text: "b294. 經濟大恐荒", link: "/zerojudge/B/b294"},
          ]
        }
      ]
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoahsarkTaiwan2008/' },
      { icon: 'twitter', link: 'https://twitter.com/NoahsarkTaiwan' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UC8obsEVWX05iftvVS7Sz8GQ' },
      { icon: 'instagram', link: 'https://www.instagram.com/noahsarktaiwan/' },
    ]
  }
})
