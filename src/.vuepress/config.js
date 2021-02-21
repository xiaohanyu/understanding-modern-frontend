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

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Understanding Modern Frontend',
      description: 'Past, today and future stories of frontend development.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '理解现代前端',
      description: '前端开发的过去，现在和未来。'
    }
  },

  markdown: {
    typographer: true,
    quotes: '“”‘’',
  },

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
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Introduction',
            link: '/introduction/',
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
          {
            text: 'Github',
            link: 'https://github.com/xiaohanyu/understanding-modern-frontend',
          },
        ],
        sidebar: {
          '/introduction/': [
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
                'markup-languages',
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
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: [
          {
            text: 'Introduction',
            link: '/zh/introduction/',
          },
          {
            text: 'HTML',
            link: '/zh/html/',
          },
          {
            text: 'CSS',
            link: '/zh/css/',
          },
          {
            text: 'JavaScript',
            link: '/zh/javascript/',
          },
          {
            text: 'Engineering',
            link: '/zh/engineering/',
          },
          {
            text: 'HTTP',
            link: '/zh/http/',
          },
          {
            text: 'Github',
            link: 'https://github.com/xiaohanyu/understanding-modern-frontend',
          },
        ],
        sidebar: {
          '/zh/introduction/': [
            {
              title: 'Introduction',
              collapsable: false,
              children: [
                '',
              ]
            }
          ],
          '/zh/html/': [
            {
              title: 'HTML',
              collapsable: false,
              children: [
                'markup-languages',
                'link',
                'hyperlink',
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
          '/zh/css/': [
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
          '/zh/javascript/': [
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
          '/zh/engineering/': [
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
          '/zh/http/': [
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
      }
    },
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
