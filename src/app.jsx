import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/topics/index',
      'pages/category/index',
      'pages/cart/index',
      'pages/user/index',
      'pages/mapPage/index',
      'pages/brandList/index',
      'pages/newGoods/index',
      'pages/search/index',
      'pages/goods/index',
      'pages/order/index',
      'pages/selectAddress/index',
      'pages/addAddress/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#666',
      backgroundColor: '#fafafa',
      selectedColor: '#b4282d',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: 'assets/images/ic_menu_choice_nor.png',
          selectedIconPath: 'assets/images/ic_menu_choice_pressed.png',
          text: '首页'
        },
        {
          pagePath: 'pages/topics/index',
          iconPath: 'assets/images/ic_menu_topic_nor.png',
          selectedIconPath: 'assets/images/ic_menu_topic_pressed.png',
          text: '专题'
        },
        {
          pagePath: 'pages/category/index',
          iconPath: 'assets/images/ic_menu_sort_nor.png',
          selectedIconPath: 'assets/images/ic_menu_sort_pressed.png',
          text: '分类'
        },
        {
          pagePath: 'pages/cart/index',
          iconPath: 'assets/images/ic_menu_shoping_nor.png',
          selectedIconPath: 'assets/images/ic_menu_shoping_pressed.png',
          text: '购物车'
        },
        {
          pagePath: 'pages/user/index',
          iconPath: 'assets/images/ic_menu_me_nor.png',
          selectedIconPath: 'assets/images/ic_menu_me_pressed.png',
          text: '我的'
        }
      ]
    },
    permission: {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
      }
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
