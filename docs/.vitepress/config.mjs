import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    logo: "/img.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoahsarkTaiwan2008/' },
      { icon: 'github', link: 'https://github.com/NoahsarkTaiwan2008/NoahsarkTaiwan2008.github.io'},
      { icon: 'twitter', link: 'https://twitter.com/NoahsarkTaiwan' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UC8obsEVWX05iftvVS7Sz8GQ' },
      { icon: 'instagram', link: 'https://www.instagram.com/noahsarktaiwan/' },
    ]
  }
})
