const themeConfig = require('./themeConfig');

module.exports = {
    base: '/seeker/',
    title: 'Seeker',
    description: '旅途',
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                '/': {
                    message: '发现新内容',
                    buttonText: '刷新'
                }
            }
        }],
        '@vuepress/back-to-top',
        '@vuepress/active-header-links'
    ],
    themeConfig
};
