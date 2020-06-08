import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { View, Button, Image, Navigator, Text } from '@tarojs/components';
import './index.less';

export default class User extends Taro.Component {
  state = {
    userInfo: {}
  };
  componentDidShow() {
    const info = JSON.parse(_getStorageSync('userinfo') || '{}');
    this.setState({
      userInfo: info
    });
  }
  getUserInfo = e => {
    if (this.state.userInfo.nickName) return;
    _setStorageSync('userinfo', e.detail.rawData);
    this.setState({
      userInfo: JSON.parse(e.detail.rawData)
    });
  };
  render() {
    const { userInfo } = this.state;
    const rawData = userInfo.nickName;
    return <View className="user-center">
        <View className="user-info">
          {rawData ? <View className="content">
                  <Image className="bg" src={userInfo.avatarUrl} mode="widthFix" />
                  <View className="info">
                    <Image src={userInfo.avatarUrl} className="avatar" mode="widthFix" />
                    <View className="title">{userInfo.nickName}</View>
                  </View>
                </View> : <Button type="primary" size="mini" className="btn" plain openType="getUserInfo" onGetUserInfo={this.getUserInfo}>登录</Button>}
        </View>
      <View className="main">
        <View className="my-order">
          <View className="title">我的订单</View>
          <View className="order-tab">
            <Navigator>
              <Text className="iconfont icon-dingdan"></Text>
              <View className="text">全部订单</View>
            </Navigator>
            <Navigator>
              <Text className="iconfont icon-daifukuan"></Text>
              <View className="text">待付款</View>
            </Navigator>
            <Navigator>
              <Text className="iconfont icon-daishouhuo-"></Text>
              <View className="text">待收货</View>
            </Navigator>
            <Navigator>
              <Text className="iconfont  icon-tuikuan1"></Text>
              <View className="text">退款/退货</View>
            </Navigator>
          </View>
        </View>
        <View className="items address">收货地址管理</View>
        <View className="items">联系客服</View>
        <View className="items">意见反馈</View>
        <View className="items">关于我们</View>
        <View className="items share">分享应用</View>
      </View>
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}