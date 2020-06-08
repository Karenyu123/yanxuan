import Nerv from "nervjs";
import Taro, { login as _login, setStorageSync as _setStorageSync, showModal as _showModal, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Swiper, SwiperItem, Text, Button, RichText, Navigator } from '@tarojs/components';
import { request } from '../../utils/request';
import './index.less';

let num = 0;
export default class Goods extends Taro.Component {
  state = {
    openid: '',
    attribute: [],
    collected: false,
    gallery: [],
    info: {},
    issue: [],
    productList: [],
    popUp: false,
    goodsCount: 1
  };
  componentDidMount() {
    this.getGoodsDetail();
  }
  getGoodsDetail = () => {
    const { id } = this.$router.params;
    _login({
      success: res => {
        if (res.code) {
          _setStorageSync('openid', '0339cGX00ggkNI1taKX00sEQX009cGXn');
          this.setState({
            openid: '0339cGX00ggkNI1taKX00sEQX009cGXn'
          }, async () => {
            const {
              attribute,
              collected,
              gallery,
              info,
              issue,
              productList
            } = await request({ url: '/goods/detailaction', data: { id, openId: this.state.openid } });
            let tInfo = { ...info, goods_desc: info.goods_desc.replace(/<p/g, '<p width="375"').replace(/<img/g, '<img width="375"') };
            this.setState({
              attribute,
              collected,
              gallery,
              info: tInfo,
              issue,
              productList
            });
          });
        }
      }
    });
  };
  // 分享时触发的钩子函数，可自定义分享内容
  onShareAppMessage() {
    return {
      title: this.state.info.name,
      path: '/pages/goods/index?id=' + this.$router.params.id,
      imageUrl: this.state.gallery[0].img_url
    };
  }
  handlePopUp = () => {
    num = 0;
    this.setState({
      popUp: !this.state.popUp
    });
  };
  add = () => {
    this.setState({
      goodsCount: this.state.goodsCount + 1
    });
  };
  decrement = () => {
    if (this.state.goodsCount === 1) {
      return;
    }
    this.setState({
      goodsCount: this.state.goodsCount - 1
    });
  };
  handleCollect = async () => {
    const res = await request({
      url: '/collect/addcollect', method: 'POST', data: {
        openId: this.state.openid,
        goodsId: this.$router.params.id
      }
    });
    this.getGoodsDetail();
  };
  buy = async e => {
    e.stopPropagation();
    num++;
    this.setState({
      popUp: true
    });
    if (num % 2 === 0) {
      _showModal({
        content: '确认购买此商品？',
        success: async res => {
          if (res.confirm) {
            const res = await request({
              url: '/order/submitAction', method: 'POST', data: {
                openId: this.state.openid,
                goodsId: this.$router.params.id,
                allPrice: this.state.info.retail_price * this.state.goodsCount * 1
              }
            });
            console.log(res);
            Taro.navigateTo({ url: '/pages/order/index' });
          }
        }
      });
    }
  };
  addCart = async e => {
    e.stopPropagation();
    num++;
    this.setState({
      popUp: true
    });
    if (num % 2 === 0) {
      const res = await request({
        url: '/cart/addCart', method: 'POST', data: {
          openId: this.state.openid,
          goodsId: this.$router.params.id,
          number: this.state.goodsCount
        }
      });
      _showToast({ title: '添加购物车成功' });
      this.setState({
        popUp: false
      });
    }
  };
  render() {
    const { gallery, info, popUp, attribute, issue, productList, goodsCount, collected } = this.state;
    return <View className="goods-detail">
        <View className="swiper">
          <Swiper className="swiper-container" indicatorDots autoplay circular>
            {gallery.map(item => {
            return <SwiperItem className="swiper-item" key={item.id}>
                    <Image className="img" src={item.img_url} mode="widthFix"></Image>
                  </SwiperItem>;
          })}
          </Swiper>
          <Button className="btn" open-type="share">分享好物</Button>
        </View>
        <View className="delivery">
          <Text className="txt">30天无忧退货</Text>
          <Text className="txt">48小时无忧退款</Text>
          <Text className="txt">满88元免邮费</Text>
        </View>
        <View className="info">
          <View className="name">{info.name}</View>
          <View className="desc">{info.goods_brief}</View>
          <View className="price">￥{info.retail_price}</View>
        </View>
        <View className="select-info" onClick={this.handlePopUp}>
          <Text className="txt">选择规格数量</Text>
          <Text className="iconfont icon-youjiantou1"></Text>
        </View>
        {popUp ? <View className="pop-section">
              <View className="top">
                <Image className="img" mode="widthFix" src={gallery[0].img_url}></Image>  
                <View className="info">
                  <View className="name">{info.name}</View>
                  <View className="price">￥{info.retail_price}</View>
                  <View className="num">
                    <Text className="txt">数量：</Text>
                    <View className="action">
                      <Text className="icon minus" onClick={this.decrement}>-</Text>
                      <Text className="count">{goodsCount}</Text>
                      <Text className="icon add" onClick={this.add}>+</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View className="iconfont icon-cha" onClick={this.handlePopUp}></View>
            </View> : null}
        <View className="goods-data">
          <View className="title">商品参数</View>
          {attribute.map(item => {
          return <View className="data-item" key={item.name}>
                  <View className="name">{item.name}</View>
                  <View className="value">{item.value}</View>
                </View>;
        })}
        </View>
        <RichText className="rich-text" nodes={info.goods_desc}></RichText>
        <View className="issue-wrapper">
          <View className="title">常见问题</View>
          <View className="issues">
            {issue.map(item => {
            return <View className="issue-item" key={item.id}>
                    <View className="question">
                      <Text className="dot"></Text>
                      <Text className="content">{item.question}</Text>
                    </View>
                    <View className="answer">{item.answer}</View>
                  </View>;
          })}
          </View>
        </View>
        <View className="populate">
          <View className="title">大家都在看</View>
          <View className="goods-list">
            {productList.map(item => {
            return <View className="goods-item" key={item.id}>
                    <Image className="img" mode="widthFix" src={item.list_pic_url}></Image>
                    <View className="name">{item.name}</View>
                    <View className="price">￥{item.retail_price}</View>
                  </View>;
          })}
          </View>
        </View>
        <View className="footer">
          <View className={collected ? "iconfont icon-shoucang" : "iconfont icon-shoucang1"} onClick={this.handleCollect}></View>
          <Navigator className="iconfont icon-gouwuche" url="/pages/cart/index" openType="switchTab">
            <Text className="count"></Text>
          </Navigator>
          <View className="cart" onClick={this.addCart}>加入购物车</View>
          <View className="buy" onClick={this.buy}>立即购买</View>
        </View>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}