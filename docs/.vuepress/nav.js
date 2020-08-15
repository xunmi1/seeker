const selfURL = 'https://github.com/xunmi1/';
const selfRepositories = ['seeker', 'admin-template-vue', 'light-storage', 'event-channel'];

module.exports = [
  {
    text: '其他',
    items: [
      { text: '代码风格', link: '/others/fe-style' },
      { text: 'Git 小结', link: '/others/git/index' },
      { text: 'TypeScript 小结', link: '/others/typescript/index' },
    ],
  },
  {
    text: '仓库',
    items: selfRepositories.map(v => ({ text: v, link: selfURL + v })),
  },
];
