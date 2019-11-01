const REPO_SELF = 'https://github.com/xunmi1/';

module.exports = [
  {
    text: '其他',
    items: [
      { text: '代码风格', link: '/others/fe-style' },
      { text: 'Git 小结', link: '/others/git-summary' },
    ],
  },
  {
    text: '仓库',
    items: [
      { text: 'seeker', link: REPO_SELF + 'seeker' },
      { text: 'ant-system', link: REPO_SELF + 'ant-system' },
    ],
  },
  {
    text: '资源',
    items: [
      { text: 'Vue.js', link: 'https://cn.vuejs.org' },
      { text: 'Vuex', link: 'https://vuex.vuejs.org' },
      { text: 'Vue Router', link: 'https://router.vuejs.org' },
      { text: 'Vue CLI', link: 'https://cli.vuejs.org' },
    ],
  },
];
