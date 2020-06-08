import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import './index.less';
import { request } from '../../utils/request';

export default class Order extends Taro.Component {
  state = {
    addressId: '',
    address: {},
    price: '',
    totalPrice: '',
    goodsList: []
  };
  componentDidShow() {
    if (_getStorageSync('address_id')) {
      this.setState({
        addressId: _getStorageSync('address_id')
      });
    }
    this.getOrderDetail();
  }
  toChooseAddr = () => {
    Taro.navigateTo({ url: '/pages/selectAddress/index' });
  };
  toAddAddress = () => {
    Taro.navigateTo({ url: '/pages/addAddress/index' });
  };
  getOrderDetail = async () => {
    console.log(_getStorageSync('openid'));
    const { price, address, goodsList } = await request({
      url: '/order/detailAction', data: {
        openId: _getStorageSync('openid'),
        addressId: this.state.addressId
      }
    });
    this.setState({
      price,
      address,
      goodsList
    });
  };
  render() {
    const { goodsList } = this.state;
    return <View className="order">
        <View className="address-wrapper">
          <View className="address">
            <View className="list">
              <View className="address-item">
                <View className="title">
                  <View className="name">张三</View>
                  <View className="default">
                    <Text className="txt">默认</Text>
                  </View>
                </View>
                <View className="info">
                  <View className="mobbile">123456</View>
                  <View className="address">广水市郝店镇</View>
                </View>
                <Text className="iconfont icon-youjiantou1" onClick={this.toAddAddress}></Text>
              </View>
            </View>
          </View>
          <View className="choose-address" onClick={this.toChooseAddr}>请选择默认地址</View>
        </View>
        <View className="con total-price">
          <Text className="name">商品合计</Text>
          <Text className="all"></Text>
        </View>
        <View className="con delivery-fee">
          <Text className="name">运费</Text>
          <Text className="fee">包邮</Text>
        </View>
        <View className="con discount">
          <Text className="name">优惠券</Text>
          <Text className="content">暂无</Text>
        </View>
        <View className="order-list">
          {goodsList.map(item => {
          return <View className="list-item" key={item.id}>
                  <Image className="img" mode="widthFix"></Image>
                  <View className="info">
                    <View className="name"></View>
                    <View className="price">￥</View>
                  </View>
                </View>;
        })}
        </View>
        <View className="order-footer">
          <View className="total-pay">总支付：<Text className="txt">999</Text>元</View>
          <View className="pay">支付</View>
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