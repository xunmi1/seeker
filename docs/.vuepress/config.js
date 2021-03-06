const themeConfig = require('./themeConfig');

const plugins = [
  ['@vuepress/pwa', { serviceWorker: true, updatePopup: { message: '发现新内容', buttonText: '刷新' } }],
  '@vuepress/back-to-top',
  '@vuepress/active-header-links',
  '@vuepress/nprogress',
  ['@vuepress/medium-zoom', { options: { background: '#f5f5f5' } }],
];

module.exports = {
  base: '/seeker/',
  title: 'Seeker',
  description: 'The Journey to Knowledge',
  plugins,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: '/icons/android-chrome-192x192.png' }],
    ['meta', { name: 'theme-color', content: '#2f54eb' }],
  ],
  themeConfig,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': { lang: 'zh-CN' },
  },

  evergreen: true,
};
