module.exports = {
    repo: 'xunmi1/seeker',
    editLinks: true,
    docsDir: 'docs',
    sidebarDepth: 3,
    serviceWorker: {
        updatePopup: true
    },
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
        {
            text: '其他',
            link: '/others/fe-style'
        },
        {
            text: '仓库',
            items: [
                {
                    text: 'New System',
                    link: 'https://xunmi1.github.io/ant-system/dist/index.html'
                },
            ]
        },
        {
            text: '资源',
            items: [
                { text: 'Vue.js', link: 'https://cn.vuejs.org' },
                { text: 'Vuex', link: 'https://vuex.vuejs.org' },
                { text: 'Vue Router', link: 'https://router.vuejs.org' },
                { text: 'Vue CLI', link: 'https://cli.vuejs.org' },
            ]
        }
    ],
    sidebar: 'auto'
};
