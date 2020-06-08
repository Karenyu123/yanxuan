import Taro, { Component } from "@tarojs/taro-h5";


import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
class App extends Component {
  state = {
    __tabs: {
      color: '#666',
      backgroundColor: '#fafafa',
      selectedColor: '#b4282d',
      borderStyle: 'white',
      list: [{
        pagePath: "/pages/index/index",
        iconPath: require("./assets/images/ic_menu_choice_nor.png"),
        selectedIconPath: require("./assets/images/ic_menu_choice_pressed.png"),
        text: '首页'
      }, {
        pagePath: "/pages/topics/index",
        iconPath: require("./assets/images/ic_menu_topic_nor.png"),
        selectedIconPath: require("./assets/images/ic_menu_topic_pressed.png"),
        text: '专题'
      }, {
        pagePath: "/pages/category/index",
        iconPath: require("./assets/images/ic_menu_sort_nor.png"),
        selectedIconPath: require("./assets/images/ic_menu_sort_pressed.png"),
        text: '分类'
      }, {
        pagePath: "/pages/cart/index",
        iconPath: require("./assets/images/ic_menu_shoping_nor.png"),
        selectedIconPath: require("./assets/images/ic_menu_shoping_pressed.png"),
        text: '购物车'
      }, {
        pagePath: "/pages/user/index",
        iconPath: require("./assets/images/ic_menu_me_nor.png"),
        selectedIconPath: require("./assets/images/ic_menu_me_pressed.png"),
        text: '我的'
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["/pages/index/index", "/pages/topics/index", "/pages/category/index", "/pages/cart/index", "/pages/user/index", "/pages/mapPage/index", "/pages/brandList/index", "/pages/newGoods/index", "/pages/search/index", "/pages/goods/index", "/pages/order/index", "/pages/selectAddress/index", "/pages/addAddress/index", "/pages/categoryList/index", "/pages/topicDetail/index"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { color: '#666', backgroundColor: '#fafafa', selectedColor: '#b4282d', borderStyle: 'white', list: [{ pagePath: "/pages/index/index", iconPath: require("./assets/images/ic_menu_choice_nor.png"), selectedIconPath: require("./assets/images/ic_menu_choice_pressed.png"), text: '首页' }, { pagePath: "/pages/topics/index", iconPath: require("./assets/images/ic_menu_topic_nor.png"), selectedIconPath: require("./assets/images/ic_menu_topic_pressed.png"), text: '专题' }, { pagePath: "/pages/category/index", iconPath: require("./assets/images/ic_menu_sort_nor.png"), selectedIconPath: require("./assets/images/ic_menu_sort_pressed.png"), text: '分类' }, { pagePath: "/pages/cart/index", iconPath: require("./assets/images/ic_menu_shoping_nor.png"), selectedIconPath: require("./assets/images/ic_menu_shoping_pressed.png"), text: '购物车' }, { pagePath: "/pages/user/index", iconPath: require("./assets/images/ic_menu_me_nor.png"), selectedIconPath: require("./assets/images/ic_menu_me_pressed.png"), text: '我的' }], mode: "hash",
      basename: "/",
      customRoutes: {}
    },
    permission: {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
      }
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
  };render() {
    return <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/topics/index',
          componentLoader: () => import( /* webpackChunkName: "topics_index" */'./pages/topics/index'),
          isIndex: false
        }, {
          path: '/pages/category/index',
          componentLoader: () => import( /* webpackChunkName: "category_index" */'./pages/category/index'),
          isIndex: false
        }, {
          path: '/pages/cart/index',
          componentLoader: () => import( /* webpackChunkName: "cart_index" */'./pages/cart/index'),
          isIndex: false
        }, {
          path: '/pages/user/index',
          componentLoader: () => import( /* webpackChunkName: "user_index" */'./pages/user/index'),
          isIndex: false
        }, {
          path: '/pages/mapPage/index',
          componentLoader: () => import( /* webpackChunkName: "mapPage_index" */'./pages/mapPage/index'),
          isIndex: false
        }, {
          path: '/pages/brandList/index',
          componentLoader: () => import( /* webpackChunkName: "brandList_index" */'./pages/brandList/index'),
          isIndex: false
        }, {
          path: '/pages/newGoods/index',
          componentLoader: () => import( /* webpackChunkName: "newGoods_index" */'./pages/newGoods/index'),
          isIndex: false
        }, {
          path: '/pages/search/index',
          componentLoader: () => import( /* webpackChunkName: "search_index" */'./pages/search/index'),
          isIndex: false
        }, {
          path: '/pages/goods/index',
          componentLoader: () => import( /* webpackChunkName: "goods_index" */'./pages/goods/index'),
          isIndex: false
        }, {
          path: '/pages/order/index',
          componentLoader: () => import( /* webpackChunkName: "order_index" */'./pages/order/index'),
          isIndex: false
        }, {
          path: '/pages/selectAddress/index',
          componentLoader: () => import( /* webpackChunkName: "selectAddress_index" */'./pages/selectAddress/index'),
          isIndex: false
        }, {
          path: '/pages/addAddress/index',
          componentLoader: () => import( /* webpackChunkName: "addAddress_index" */'./pages/addAddress/index'),
          isIndex: false
        }, {
          path: '/pages/categoryList/index',
          componentLoader: () => import( /* webpackChunkName: "categoryList_index" */'./pages/categoryList/index'),
          isIndex: false
        }, {
          path: '/pages/topicDetail/index',
          componentLoader: () => import( /* webpackChunkName: "topicDetail_index" */'./pages/topicDetail/index'),
          isIndex: false
        }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));