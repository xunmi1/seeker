const nav = require('./nav');

module.exports = {
  editLinks: true,
  docsDir: 'docs',
  sidebarDepth: 3,
  serviceWorker: {
    updatePopup: true,
  },
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '上次更新',
  nav,
  sidebar: 'auto',
};
