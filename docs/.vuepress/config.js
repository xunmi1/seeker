const themeConfig = require('./themeConfig');

module.exports = {
    base: '/seeker/',
    title: 'Seeker',
    description: ' The Journey to Knowledge',
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: '发现新内容',
                buttonText: '刷新'
            }
        }],
        '@vuepress/back-to-top',
        '@vuepress/active-header-links'
    ],
    head: [
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    themeConfig,
    markdown: {
        lineNumbers: true
    },
};
