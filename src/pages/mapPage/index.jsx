import Taro from '@tarojs/taro'
import { View, Input, ScrollView, Map, Text } from '@tarojs/components'
import amapFile from '../../utils/amap-wx'
import './index.less'
import { setGlobalData } from '../../common/js/global_data'

class MapPage extends Taro.Component {
  state = {
    keyword: '',
    longitude: 0,
    latitude: 0,
    markers: [],
    isFocus: false,
    suggestList: []
  }
  componentDidMount() {
    this._getPosition()
  }
  _getPosition = () => {
    const myMapFunc = new amapFile.AMapWX({
      key: '45ae9c3cc5b6a9649fea754080f29a7e'
    })
    myMapFunc.getRegeo({
      iconPath: 'https://pics.images.ac.cn/image/5ed12376190fe.html',
      iconWidth: 22,
      iconHeight: 32,
      success: (data) => {
        const { id, latitude, longitude, height, width, iconPath } = data[0]
        const markers = [{ id, latitude, longitude, height, width, iconPath }]
        this.setState({
          latitude,
          longitude,
          markers
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
  handleInput = (e) => {
    const value = e.target.value.trim()
    if (value) {
      this.setState({
        keyword: value,
        isFocus: true
      }, () => {
        const { keyword } = this.state
        const myMapFunc = new amapFile.AMapWX({
          key: '45ae9c3cc5b6a9649fea754080f29a7e'
        })
          myMapFunc.getInputtips({
            keywords: keyword,
            location: '',
            success:(data) => {
              console.log('p',data)
              if (data && data.tips) {
                this.setState({
                  suggestList: data.tips
                })
              }
            }
          })
      })
    }
  }
  handleClear = () => {
    this.setState({
      keyword: '',
      isFocus: false,
      suggestList: []
    })
  }
  // 点击跳转到首页
  handleSkipTo = (name) => {
    setGlobalData('location', name)
    Taro.setStorageSync('location', name)
    Taro.navigateBack()
  }
  render() {
    const { longitude, latitude, markers, isFocus, keyword, suggestList } = this.state
    return (
      <View className="map-page">
        <View className="search">
          <Input placeholder="请输入搜索地址" value={keyword} onChange={this.handleInput} />
          <Text className="iconfont icon-search"></Text>
          { isFocus ? <Text className="iconfont icon-qingchu" onClick={ this.handleClear }></Text> : null }
          <ScrollView className="scroll" scrollY scrollWithAnimation >
            {
              suggestList.map((item) => {
                return <View className="scroll-item" key={ item.id } onClick={() => this.handleSkipTo(item.name)}>{ item.name }</View>
              })
            }
          </ScrollView>
        </View>
        <View className="map-container">
          <Text className="title">显示当前位置：</Text>
          <Map className="map" longitude={ longitude } latitude={ latitude } markers={ markers } >
          </Map>
        </View>
      </View>
    )
  }
}
export default MapPage;