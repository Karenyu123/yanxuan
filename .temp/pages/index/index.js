import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, getSetting as _getSetting, openSetting as _openSetting } from "@tarojs/taro-h5";
import { View, Text, Input } from '@tarojs/components';
import './index.less';
import amapFile from '../../utils/amap-wx';
import { request } from '../../utils/request';

export default class Index extends Taro.Component {

  state = {
    location: '广水',
    swiperList: []
  };

  config = {
    navigationBarTitleText: '首页'
  };
  componentDidMount() {
    this._getSwiperList();
  }
  componentDidShow() {
    const location = _getStorageSync('location');
    location && this.setState({ location });
  }
  // 获取轮播图数据
  _getSwiperList() {
    console.log();
    let url = "/index/index";
    // if (process.env.TARO_ENV === "weapp") {
    //   url = 'http://localhost:5757/lm/index/index'
    // }
    request({ url }).then(res => {
      console.log(res);
    });
  }
  toMapPage = () => {
    // 查看是否授权
    _getSetting({
      success: res => {
        console.log(res);
        // 如果没有授权，则打开授权框
        if (!res.authSetting['scope.userLocation']) {
          _openSetting({
            success: res => {
              this._getCityName();
            }
          });
        } else {
          Taro.navigateTo({
            url: '/pages/mapPage/index'
          });
        }
      }
    });
  };
  _getCityName = () => {
    // key:5ed87aafaae0d159119b3c706fa19ae2
    const myMapFunc = new amapFile.AMapWX({ key: '45ae9c3cc5b6a9649fea754080f29a7e' });
    myMapFunc.getRegeo({
      success: data => {
        console.log(data);
      },
      fail: err => {
        console.log(err);
      }
    });
  };

  render() {
    const { location } = this.state;
    return <View className="home">
        <Text className="location" onClick={this.toMapPage}><Text className="iconfont icon-weizhi"></Text>{location}</Text>
        <Input className="search" placeholder="请输入搜索地址" />
        <Text className="iconfont icon-search"></Text>
      </View>;
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}