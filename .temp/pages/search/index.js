import Nerv from "nervjs";
import Taro, { vibrateLong as _vibrateLong, showModal as _showModal } from "@tarojs/taro-h5";
import { View, Text, Image, ScrollView } from '@tarojs/components';
import './style.less';
import { request } from '../../utils/request';

export default class Search extends Taro.Component {
  state = {
    keyword: '',
    isFocus: false,
    openid: '',
    suggestList: [],
    goodsList: [],
    order: 'asc',
    historyList: ['烧烤', '小龙虾'],
    hotList: ['烤鱼', '火锅', '麻辣烫'],
    tabs: ['综合', '价格', '分类'],
    showGoodslist: false,
    currentIndex: 0
  };
  handleInput = e => {
    const value = e.target.value.trim();
    if (value) {
      this.setState({
        keyword: value,
        isFocus: true
      }, () => {
        this.setHistoryData(value);
        this.getHistoryData();
      });
    }
  };
  // 存储热门数据
  setHistoryData = async value => {
    const res = await request({
      url: "/search/addhistoryaction",
      method: "POST",
      data: {
        keyword: value,
        openId: this.state.openid
      }
    });
  };
  // 获取热门数据
  getHistoryData = async () => {
    console.log('id', this.state.openid);
    const { historyData, hotKeywordList } = await request({ url: '/search/indexaction?openId=' + this.state.openid });
    this.setState({
      historyList: historyData,
      hotList: hotKeywordList
    });
  };
  clearAllHistory = () => {
    _showModal({
      title: "提示",
      content: "确认删除历史记录吗？",
      success: async res => {
        if (res.confirm) {
          await request({
            url: "/search/clearhistoryAction",
            method: "POST",
            data: { openId: this.state.openid }
          });
          this.getHistoryData();
        }
      }
    });
  };
  handleClear = () => {
    this.setState({
      keyword: '',
      isFocus: false,
      suggestList: [],
      showGoodslist: false
    });
  };
  searchWord = word => {
    this.setState({
      keyword: word,
      isFocus: true
    }, () => {
      this.setHistoryData(word);
      this.getHistoryData();
      this.getGoodslist();
    });
  };
  // 输入框输入实时搜索
  inputing = e => {
    const value = e.detail.value.trim();
    this.setState({
      keyword: value,
      isFocus: true
    });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.getGoodslist();
    }, 500);
  };
  getGoodslist = async () => {
    const res = await request({
      url: "/search/helperaction",
      data: { keyword: this.state.keyword, order: this.state.order }
    });
    this.setState({
      suggestList: res.keywords,
      goodsList: res.keywords
    });
    if (!res.keywords.length) {
      this.setState({
        showGoodslist: true
      });
    }
  };
  switchTap = index => {
    this.setState({
      currentIndex: index
    });
    let order;
    if (index === 1) {
      order = 'desc';
    } else {
      order = 'asc';
    }
    this.setState({
      order
    }, () => {
      this.getGoodslist();
    });
  };
  // 点击搜索建议
  handleSuggestClick = e => {
    e.stopPropagation();
    this.setState({
      suggestList: [],
      showGoodslist: true
    });
  };
  // toGoodsDetail
  toGoodsDetail = id => {
    console.log(id);
    Taro.navigateTo({ url: '/pages/goods/index?id=' + id });
  };
  componentDidShow() {
    this.getHistoryData();
    // Taro.login({
    //   success: (res) => {
    //     if (res.code) {
    //       this.setState({
    //         openid: res.code
    //       }, () => {
    //           this.getHistoryData()
    //       })
    //     } else {
    //       console.log("登录失败！" + res.errMsg);
    //     }
    //   },
    // });
  }
  render() {
    const {
      isFocus,
      keyword,
      suggestList,
      historyList,
      hotList,
      tabs,
      goodsList,
      showGoodslist,
      currentIndex
    } = this.state;
    return <View className="search-page">
        <View className="search">
          <Input placeholder="请输入商品" value={keyword} onChange={this.handleInput} onInput={this.inputing} />
          <Text className="iconfont icon-search"></Text>
          {isFocus ? <Text className="iconfont icon-qingchu" onClick={this.handleClear}></Text> : null}
          <ScrollView className="scroll" scrollY scrollWithAnimation>
            {suggestList.map(item => {
            return <View className="scroll-item" key={item.id} onClick={this.handleSuggestClick}>
                  {item.name}
                </View>;
          })}
          </ScrollView>
        </View>
        {historyList.length ? <View className="list-wrapper history-list">
            <View className="title">
              <Text className="text">搜索历史</Text>
              <View className="iconfont icon-shanchu" onClick={this.clearAllHistory}></View>
            </View>
            <View className="list">
              {historyList.map(item => {
            return <View className="list-item history-item" key={item.keyword}>
                    <View onClick={() => this.searchWord(item.keyword)}>
                      {item.keyword}
                    </View>
                  </View>;
          })}
            </View>
          </View> : null}
        <View className="list-wrapper hot-list">
          <View className="title">
            <Text className="text">热门搜索</Text>
          </View>
          <View className="list">
            {hotList.map(item => {
            return <View className="list-item hot-item" key={item.keyword}>
                  <View onClick={() => this.searchWord(item.keyword)}>
                    {item.keyword}
                  </View>
                </View>;
          })}
          </View>
        </View>
        {showGoodslist ? <View className="goods-wrapper">
              {!goodsList.length ? <View className="goods-wrapper">
                    <View className="text">啊嘞，没有相关信息~</View>
                  </View> : <View>
                      <View className="tab">
                        {tabs.map((item, index) => {
              return <View className="tab-item" key={item} onClick={() => this.switchTap(index)}>
                                <Text className={currentIndex === index ? 'txt active' : 'txt'}>
                                  {item}
                                </Text>
                              </View>;
            })}
                      </View>
                      <View className="goods-list">
                        {goodsList.map(item => {
              return <View className="list-item" key={item.id} onClick={() => this.toGoodsDetail(item.id)}>
                                <Image className="img" src={item.list_pic_url} mode="widthFix" />
                                <View className="name">{item.name}</View>
                                <View className="price">
                                  ￥{item.retail_price}
                                </View>
                              </View>;
            })}
                      </View>
                    </View>}
            </View> : null}
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}