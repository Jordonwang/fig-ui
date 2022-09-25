import elementPlusSideBar from "../pages/element-plus.json"
import elementUiSideBar from "../pages/element-ui.json"
import antDesignSideBar from "../pages/ant-design.json"
import figUISideBar from "../pages/fig-ui.json"

export default {
  '/zh-CN/guide/': [
    {
      text: '快速开始',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'fig-ui', link: '/zh-CN/guide/fig-install' }
      ]
    },
    {
      text: '开发者指南',
      "collapsible": true,
      "collapsed": false,
      items: [
        { text: 'docs', link: '/zh-CN/guide/docs-dev' },
        { text: 'fig-ui', link: '/zh-CN/guide/fig-dev' },
        { text: 'fig-react-ui', link: '/zh-CN/guide/fig-react-dev' },
      ]
    }
  ],
  // '/zh-CN/components/element-plus': elementPlusSideBar,
  // '/zh-CN/components/element-ui': elementUiSideBar,
  // '/zh-CN/components/ant-design': antDesignSideBar,
  '/zh-CN/components/fig-ui': figUISideBar,
}
