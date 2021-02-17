const { description } = require('../../package')

module.exports = {
  /**
   * The base URL the site will be deployed at.
   */
  base: "/understanding-modern-frontend/",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Understanding Modern Frontend',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Introduction',
        link: '/guide/',
      },
      {
        text: 'HTML',
        link: '/html/',
      },
      {
        text: 'CSS',
        link: '/css/',
      },
      {
        text: 'JavaScript',
        link: '/javascript/',
      },
      {
        text: 'Engineering',
        link: '/engineering/',
      },
      {
        text: 'HTTP',
        link: '/http/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/html/': [
        {
          title: 'HTML',
          collapsable: false,
          children: [
            'html-1.0',
            'html-4.0',
            'html-5.0',
            'command-line-browser',
            'dom',
            'xhtml',
            'devtools'
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css-1.0',
            'css-2.0',
            'css-3.0',
            'font',
            'box-model',
            'layout',
            'modularization',
            'preprocessor',
            'responsive',
            'devtools',
          ]
        }
      ],
      '/javascript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'closure',
            'json',
            'oop',
            'asynchronous',
            'modularization',
            'npm',
            'devtools',
          ]
        }
      ],
      '/engineering/': [
        {
          title: 'Engineering',
          collapsable: false,
          children: [
            "before_christ.md",
            "bower.md",
            "npm.md",
            "yarn.md",
            "grunt.md",
            "gulp.md",
            "yeoman.md",
            "webpack.md",
          ]
        }
      ],
      '/http/': [
        {
          title: 'Engineering',
          collapsable: false,
          children: [
            "http-0.9.md",
            "http-1.0.md",
            "http-1.1.md",
            "ajax.md",
            "restful.md",
            "https.md",
            "tools.md",
            "devtools.md",
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-49528621-1'
      }
    ]
  ]
}
