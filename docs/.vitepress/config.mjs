import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoahsarkTaiwan2008' },
      { icon: 'x', link: 'https://twitter.com/NoahsarkTaiwan' },
      { icon: 'instagram', link: 'https://www.instagram.com/noahsarktaiwan/' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UC8obsEVWX05iftvVS7Sz8GQ' }
    ]
  }
})
