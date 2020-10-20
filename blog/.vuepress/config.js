module.exports = {
  title: 'PostHci Blog',
  description: 'Beyond interaction',
  base: '/',
  dest: 'dist/',
  theme: 'ououe',
  themeConfig: {
    cover: '/cover.jpg',
    logo: '/logo.png',
    backgroundImage: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'About Me', link: 'https://posthci.com/bio' }
    ]
  },
  plugins: [
    // permalink for posts
    ['blog-multidir', {
      postsDir: {
        posts: 'posts/:year/:month/:day/:slug'
      }
    }],
    // add vuepress-plugin-container
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="warning"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger"><p class="title">${info}</p>`,
      after: '</div>'
    }]
  ]
}
