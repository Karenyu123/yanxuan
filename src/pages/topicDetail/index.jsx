import Taro from '@tarojs/taro'
import { View, RichText,Image } from '@tarojs/components'
import "./index.less"
import { request } from '../../utils/request'
export default class TopicDetail extends Taro.Component {
  state = {
    goodsDesc: '',
    recommends: []
  }
  componentDidShow() {
    this._getTopicDetail()
  }
  _getTopicDetail = async () => {
    const id = this.$router.params.id
    const data = await request({ url: '/topic/detailAction', data: { id } })
    const content = data.data.content.replace(/<img/g, '<img width="375"')
    this.setState({
      goodsDesc: content,
      recommends: data.recommendList
    })
  }
  render() {
    const { goodsDesc, recommends } = this.state
    return (
      <View className="topic-detail">
        <RichText nodes={ goodsDesc } />
        <View className="recommend-list">
          {
            recommends.map((item) => {
              return (
                <View className="item" key={item.id}>
                  <Image className="img" mode="widthFix" src={ item.scene_pic_url}></Image>
                  <View className="name">{ item.title}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}