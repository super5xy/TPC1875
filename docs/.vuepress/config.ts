module.exports = {
  title: '经典语录',
  description: 'TPC1875的经典语录',
  base: '/TPC1875/',
  plugins: [['@vuepress/plugin-search']],
  themeConfig: {
    //repo: 'super5xy/TPC1875',
    //docsRepo: 'super5xy/TPC1875',
    editLinks: true,
    editLinkText: '编辑此页',
    smoothScroll: true,
    lastUpdated: '上一次编辑',
    darkMode: false,
    navbar: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/quickstart/' },
      //{ text: '', link: '//' },
      //{ text: '', link: '//' },
      //{ text: '', link: '//' },
      //{ text: '', link: '//' },
    ],
  },
};