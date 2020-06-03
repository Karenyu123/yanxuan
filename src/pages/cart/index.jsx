import Taro from '@tarojs/taro'
import { View, Text, Radio,Image } from '@tarojs/components'
import "./style.less"
import { request } from '../../utils/request' 

export default class Cart extends Taro.Component {
  componentDidShow() {
    this.getCartList()
  }
  getCartList = async () => {
    const data = await request({
      url: '/cart/cartList', data: {
        openId: Taro.getStorageSync('openid')
      }
    })
    console.log(data)
  }
  render () {
    return (
      <View className="cart">
        <View className="header">
          <Text className="txt">30天无忧退货</Text>
          <Text className="txt">48小时快速退款</Text>
          <Text className="txt">满88元免邮费</Text>
        </View>
        <View className="goods-list">
          <View className="goods-item">
            <Radio className="radio"></Radio>
            <Image className="img" mode="widthFix" />
            <View className="info">
              <View className="name"></View>
              <View className="price"></View>
            </View>
            <View className="count">2</View>
          </View>
        </View>
        <View className="cart-footer">
          <View className="left">
            <Radio></Radio>
            全选(0)
            <View className="total-price">￥0</View>
          </View>
          <View className="order">下单</View>
        </View>
      </View>
    )
  }
}