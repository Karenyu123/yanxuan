import Taro from '@tarojs/taro'
import { View, Radio, Text, Input,Picker} from '@tarojs/components'
import "./style.less"
import { request } from '../../utils/request'
export default class AddAddress extends Taro.Component {
  state = {
    checked: false,
    name: '张三',
    number: '010-123456',
    address: '请选择省、市、区、县',
    addressDetail: ''
  }
  handleAddressPicker = (e) => {
    console.log(e.detail.value)
    this.setState({
      address: e.detail.value.join('、').slice(0, -1)
    }, () => {
        // 
    })
  }
  handleRadio = (e) => {
    console.log(e)
    this.setState({
      checked: !this.state.checked
    })
  }
  saveAddress = async () => {
    const { name, number, address, addressDetail, checked } = this.state
    const data = await request({
      url: '/address/saveAction', method: 'POST', data: {
        username: name,
        telNumber: number,
        address,
        detailaddress: addressDetail,
        checked,
        openId: Taro.getStorageSync('openid'),
        addressId: ''
      }
    })
    if (data.data) {
      Taro.showToast({
       title: '保存成功'
      })
      Taro.navigateTo({url: '/pages/selectAddress/index'})
   }
  }
  chooseAddress = () => {
    Taro.chooseAddress({
      success: (res) => {
        const { userName, telNumber, provinceName, cityName, countyName, detailInfo } = res
        this.setState({
          name: userName,
          number: telNumber,
          address: `${provinceName}、${cityName}、${countyName}`,
          addressDetail: detailInfo
        })
      }
    })
  }
  render() {
    const { checked, name, number, address, addressDetail } = this.state
    return (
      <View className="add-address">
        <View className="address-wrapper">
          <Input className="address-item" value={name} placeholder="收件人" />
          <Input className="address-item" value={number} placeholder="联系方式" />
          <Picker className="address-item" mode="region" onChange={this.handleAddressPicker}>{address}</Picker>
          <Input className="address-item" placeholder="请输入详细地址" value={ addressDetail} />
        </View>
        <View className="action">
          <View className="check">
            <Radio className="radio" color="#B3A17E" checked={checked} onClick={this.handleRadio}></Radio>
            <Text className="txt">设置为默认地址</Text>
          </View>
          <View className="other">
            <Text className="txt" onClick={this.chooseAddress}>一键导入微信地址</Text>
            <Text className="iconfont icon-youjiantou1"></Text>
          </View>
        </View>
        <View className="btn" onClick={this.saveAddress}>保存</View>
      </View>
    )
  }
}