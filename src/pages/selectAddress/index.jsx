import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import  './index.less'

export default class SelectAddress extends Taro.Component {
  toAddAddress = () => {
    Taro.navigateTo({url: '/pages/addAddress/index'})
  }
  render () {
    return (
      <View className="select-address">
        <View className="address-list">
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
            <Text className="iconfont icon-bianji" onClick={ this.toAddAddress }></Text>
          </View>
        </View>
        <View className="btns">
          <View className="btn new-address" onClick={ this.toAddAddress}>
            新增地址
          </View>
          <View className="btn edit-address" onClick={ this.toAddAddress}>
            一键导入微信地址
          </View>
        </View>
      </View>
    )
  }
}