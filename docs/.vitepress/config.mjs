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

    logo: "/images/img.png",

    search: {
      provider: 'local'
    },

    footer: {
      message: '使用 <a href="https://vitepress.dev/" target="_blank">VitePress</a> 製作',
      copyright: 'Copyright © 2024 NoahsarkTaiwan'
    },    
    
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
          collapsed: false,
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
          collapsed: false,
          items: [
            {text: "b294. 經濟大恐荒", link: "/zerojudge/B/b294"},
          ]
        }
      ],
      
      "/mc_server": [ // mc_server 資料夾的內容
        {
          text: "Minecraft 伺服器架設",
          items: [
            {text: "minecraft 伺服器", link: "/mc_server/"},
          ]
        },
        {
          text: "Forge",
          items: [
            {text: "forge伺服器簡介", link: "/mc_server/forge/forge"},
            {text: "高於1.16.5的版本", link: "/mc_server/forge/hv"},
            {text: "低於1.17的版本", link: "/mc_server/forge/lv"},
          ]
        },
        {
          text: "Fabric",
          items: [
            {text: "fabric伺服器架設", link: "/mc_server/fabric/fabric"},
          ]
        },
        {
          text: "Paper",
          items: [
            {text: "paper伺服器架設", link: "/mc_server/paper/paper"},
          ]
        },
        {
          text: "Join server",
          items: [
            {text: "伺服器連線方式", link: "mc_server/joining_server/join"}
          ]
        }
      ]
      
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoahsarkTaiwan2008/' },
      { icon: 'github', link: 'https://github.com/NoahsarkTaiwan2008/NoahsarkTaiwan2008.github.io'},
      { icon: 'twitter', link: 'https://twitter.com/NoahsarkTaiwan' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UC8obsEVWX05iftvVS7Sz8GQ' },
      { icon: 'instagram', link: 'https://www.instagram.com/noahsarktaiwan/' },
    ]
  }
})
