import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Swiper, SwiperItem, Image, ScrollView } from '@tarojs/components'
import './index.less'
import amapFile from '../../utils/amap-wx'
import { request } from '../../utils/request'

export default class Index extends Component {
  state = {
    location: '广水',
    banner: [],
    brandList: [],
    channel: [],
    hotGoods: [],
    newCategoryList: [],
    newGoods: [],
    topicList: []
  }

  config = {
    navigationBarTitleText: '首页'
  }
  componentDidMount() {
    const homeData = Taro.getStorageSync('home_data')
    if (homeData) {
      const {
        banner,
        brandList,
        channel,
        hotGoods,
        newCategoryList,
        newGoods,
        topicList,
      } = homeData;
      this.setState({
        banner,
        brandList,
        channel,
        hotGoods,
        newCategoryList,
        newGoods,
        topicList,
      });
    } else {
      this._getSwiperList();
    }
  }
  componentDidShow() {
    const location = Taro.getStorageSync('location')
    location && this.setState({ location })
  }
  // 获取轮播图数据
  async _getSwiperList() {
    let url = "/index/index";
    const {
      banner,
      brandList,
      channel,
      hotGoods,
      newCategoryList,
      newGoods,
      topicList,
    } = await request({ url });
    Taro.setStorageSync("home_data", {
      banner,
      brandList,
      channel,
      hotGoods,
      newCategoryList,
      newGoods,
      topicList,
    });
    this.setState({
      banner,
      brandList,
      channel,
      hotGoods,
      newCategoryList,
      newGoods,
      topicList,
    });
    
  }
  toMapPage = () => {
    // 查看是否授权
    Taro.getSetting({
      success: (res) => {
        console.log(res)
        // 如果没有授权，则打开授权框
        if (!res.authSetting['scope.userLocation']) {
          Taro.openSetting({
            success: (res) => {
              this._getCityName()
            }
          })
        } else {
          Taro.navigateTo({
            url: '/pages/mapPage/index'
          })
        }
      }
    })
  }
  _getCityName = () => {
    // key:5ed87aafaae0d159119b3c706fa19ae2
    const myMapFunc = new amapFile.AMapWX({ key: '45ae9c3cc5b6a9649fea754080f29a7e' })
    myMapFunc.getRegeo({
      success: (data) => {
        const address = data[0].name
        Taro.setStorageSync('location', address)
        this.setState({
          location: address
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
  // 去品牌列表页面
  toBrandList = () => {
    Taro.navigateTo({ url: '/pages/brandList/index' })
  }
 // 去商品列表
  toGoodsList = (flag) => {
    if (flag === 'new') {
      Taro.navigateTo({url: '/pages/newGoods/index?isNew=1'})
    } else {
      Taro.navigateTo({ url: "/pages/newGoods/index?isNew=0"});
    }
  }
  toDetail = (id) => {
    Taro.navigateTo({ url: '/pages/detail/index?id=' + id })
  } 
  toSearch = () => {
    Taro.navigateTo({url: '/pages/search/index'})
  }
  render() {
    const {
      location,
      banner,
      channel,
      brandList,
      newGoods,
      hotGoods,
      topicList,
      newCategoryList,
    } = this.state;
    return (
      <View className="home">
        <View className="header">
          <Text className="location" onClick={this.toMapPage}>
            <Text className="iconfont icon-weizhi"></Text>
            {location}
          </Text>
          <Input className="search" placeholder="请输入搜索商品" onClick={this.toSearch} />
          <Text className="iconfont icon-search"></Text>
        </View>
        <Swiper
          className="swiper"
          indicatorDots
          indicatorColor="#ccc"
          circular
          autoplay
        >
          {banner.map((item) => {
            return (
              <SwiperItem className="swiper-item" key={item.id}>
                <Image className="image" src={item.image_url} mode="widthFix" />
              </SwiperItem>
            );
          })}
        </Swiper>
        <View className="channel">
          {channel.map((item) => {
            return (
              <View className="channel-item" key={item.id}>
                <Image
                  className="img"
                  mode="widthFix"
                  src={item.icon_url}
                ></Image>
                <Text className="text">{item.name}</Text>
              </View>
            );
          })}
        </View>
        <View className="brand-list">
          <View className="title" onClick={this.toBrandList}>
            品牌制造商直供
          </View>
          {brandList.map((item) => {
            return (
              <View className="list-item" key={item.id}>
                <View className="item-info">
                  <Text className="name">{item.name}</Text>
                  <Text className="price">￥{item.floor_price}</Text>
                </View>
                <Image className="img" mode="aspectFill" src={item.pic_url} />
              </View>
            );
          })}
        </View>
        <View className="new-goods">
          <View className="new-header" onClick={() => this.toGoodsList("new")}>
            <Text className="first">新品首发</Text>
            <Text className="all">查看全部</Text>
          </View>
          <ScrollView className="goods-list" scrollX>
            {newGoods.map((item) => {
              return (
                <View className="list-item" key={item.id}>
                  <Image
                    className="img"
                    src={item.list_pic_url}
                    mode="widthFix"
                  ></Image>
                  <View className="name">{item.name}</View>
                  <View className="desc">{item.goods_brief}</View>
                  <View className="price">￥{item.retail_price}</View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View className="new-goods hot-goods">
          <View className="new-header" onClick={() => this.toGoodsList("hot")}>
            <Text className="first">人气推荐，好物分享</Text>
            <Text className="all">查看全部</Text>
          </View>
          <ScrollView className="goods-list" scrollX>
            {hotGoods.map((item) => {
              return (
                <View className="list-item" key={item.id}>
                  <Image
                    className="img"
                    src={item.list_pic_url}
                    mode="widthFix"
                  ></Image>
                  <View className="name">{item.name}</View>
                  <View className="desc">{item.goods_brief}</View>
                  <View className="price">￥{item.retail_price}</View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View className="topic-list">
          <View className="title">
            专题精选
            <Text className="iconfont icon-rightarrow"></Text>
          </View>
          <ScrollView className="scroll" scrollX>
            {topicList.map((item) => {
              return (
                <View className="list-item" key={item.id} onClick={() => this.toDetail(item.id)}>
                  <Image className="img" src={item.item_pic_url} mode="widthFix"></Image>
                  <View className="name">
                    {item.title}
                    <Text className="price">￥{item.price_info}</Text>
                  </View>
                  <View className="desc">{item.subtitle}</View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {
          newCategoryList.map(cate => {
            return (
              <View className="new-cate" key={cate.id}>
                <View className="title">{cate.name}好物</View>
                {
                  newCategoryList.length
                    ?
                    <View className="cate-list">
                      { cate.goodsList && cate.goodsList.map((item) => {
                        return (
                          <View className="goods-item" key={ item.id }>
                            <Image
                              className="img"
                              src={ item.list_pic_url }
                              mode="widthFix"
                            ></Image>
                            <View className="name">{ item.name }</View>
                            <View className="price">￥{ item.retail_price }</View>
                          </View>
                        );
                      }) }
                      <View className="goods-item last">
                        <Text className="more">更多好物</Text>
                        <Text className="iconfont icon-rightarrow"></Text>
                      </View>
                    </View>
                    :null
                }
              </View>
            );
          })
        }
      </View>
    );
  }
}
