import Nerv from "nervjs";
import Taro, { stopPullDownRefresh as _stopPullDownRefresh, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Image, PullDownRefresh } from '@tarojs/components';
import { request } from '../../utils/request';
import './index.less';
class Topics extends Taro.Component {
  state = {
    page: 1,
    topiclist: [],
    total: 0
  };
  config = {
    enablePullDownRefresh: true
  };
  onPullDownRefresh() {
    this.setState({ page: 1 }, () => {
      this._getTopicData();
      _stopPullDownRefresh();
    });
  }
  onReachBottom() {
    const { page, total } = this.state;
    if (page > total) {
      _showToast({ titel: '到底了哟' });
      return;
    }
    this.setState({
      page: page + 1
    }, () => {
      this._getTopicData();
    });
  }
  componentDidShow() {
    this._getTopicData();
    this._offReachBottom = Taro.onReachBottom({
      callback: this.onReachBottom,
      ctx: this,
      onReachBottomDistance: undefined
    });
    this.pullDownRefreshRef && this.pullDownRefreshRef.bindEvent();
  }
  _getTopicData = async () => {
    const { page } = this.state;
    const data = await request({
      url: '/topic/listaction', data: {
        page: page
      }
    });
    this.setState(preState => ({
      topiclist: [...preState.topiclist, ...data.data],
      total: data.total
    }));
  };
  toTopicDetail = id => {
    console.log(id);
    Taro.navigateTo({ url: '/pages/topicDetail/index?id=' + id });
  };
  render() {
    const { topiclist } = this.state;

    const _temp = <View className="topic">
        {topiclist.map(item => {
        return <View className="topic-item" key={item.id} onClick={() => this.toTopicDetail(item.id)}>
                <Image className="img" src={item.scene_pic_url} mode="aspectFill"></Image>
                <View className="title">{item.title}</View>
                <View className="subtitle">{item.subtitle}</View>
                <View className="price">{item.price_info}元起</View>
              </View>;
      })}
      </View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this._offReachBottom && this._offReachBottom();
    this.pullDownRefreshRef && this.pullDownRefreshRef.unbindEvent();
  }

}
export default Topics;