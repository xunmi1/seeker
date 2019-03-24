module.exports = {
    base: '/seeker/',
    title: 'Seeker',
    description: '旅途',
    themeConfig: {
        repo: 'xunmi1/seeker',
        editLinks: true,
        docsDir: 'docs',
        sidebarDepth: 3,
        serviceWorker: {
            updatePopup: true
        },
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        markdown: {
            lineNumbers: true
        },
        plugins: {
            '@vuepress/pwa': {
                serviceWorker: true,
                updatePopup: {
                    '/': {
                        message: '发现新内容',
                        buttonText: '刷新'
                    }
                }
            }
        },
        nav: [
            {
                text: 'New System',
                link: 'https://xunmi1.github.io/ant-system/dist/index.html'
            },
            {
                text: 'Vue.js',
                link: 'https://cn.vuejs.org'
            }
        ]
    }
};
