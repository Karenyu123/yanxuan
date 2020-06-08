import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { request } from '../../utils/request'
import './index.less'
class Topics extends Component {
  state = {
    page: 1,
    topiclist: [],
    total: 0
  }
  config = {
    enablePullDownRefresh: true
  }
  onPullDownRefresh() {
    this.setState({ page: 1 }, () => {
      this._getTopicData()
      Taro.stopPullDownRefresh()
    })
  }
  onReachBottom() {
    const { page, total } = this.state
    if (page > total) {
      Taro.showToast({ titel: '到底了哟' })
      return
    }
    this.setState({
      page: page + 1
    }, () => {
        this._getTopicData()
    })
  }
  componentDidShow() {
    this._getTopicData()
  }
  _getTopicData = async () => {
    const { page } = this.state
    const data = await request({
      url: '/topic/listaction', data: {
      page: page
      }
    })
    this.setState((preState) => ({
      topiclist: [...preState.topiclist, ...data.data],
      total: data.total
    }))
  }
  toTopicDetail = (id) => {
    console.log(id)
    Taro.navigateTo({ url: '/pages/topicDetail/index?id='+id})
  }
  render() {
    const { topiclist } = this.state
    return (
      <View className="topic">
        {
          topiclist.map((item) => {
            return (
              <View className="topic-item" key={item.id} onClick={() => this.toTopicDetail(item.id)}>
                <Image className="img" src={ item.scene_pic_url} mode="aspectFill"></Image>
                <View className="title">{item.title}</View>
                <View className="subtitle">{ item.subtitle}</View>
                <View className="price">{ item.price_info}元起</View>
              </View>
            )
          }) 
        }
      </View>
    );
  }
}
export default Topics ;
