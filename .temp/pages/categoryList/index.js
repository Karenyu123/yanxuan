import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, ScrollView, Image } from '@tarojs/components';
import './index.less';
import { request } from '../../utils/request';

export default class CategoryList extends Taro.Component {
  state = {
    navData: [],
    currentNav: '',
    goodslist: [],
    scrollLeft: 0
  };
  componentDidShow() {
    this.id = this.$router.params.id || '1005000';
    this._getNavlist();
    this._getGoodslist(this.id);
  }
  _getNavlist = async () => {
    const id = this.$router.params.id || '1005000';
    const data = await request({ url: '/category/categoryNav', data: { id } });
    this.setState({
      navData: data.navData,
      currentNav: data.currentNav
    });
  };
  _getGoodslist = async id => {
    const data = await request({ url: '/goods/goodsList', data: { categoryId: id } });
    this.setState({
      goodslist: data.data
    });
  };
  navClick = (item, index) => {
    this.setState({ currentNav: item });
    this._getGoodslist(item.id);
    if (index > 4) {
      this.setState({
        scrollLeft: 100 * index
      });
    } else {
      this.setState({
        scrollLeft: 0
      });
    }
  };
  toGoods = id => {
    Taro.navigateTo({ url: '/pages/goods/index?id=' + id });
  };
  onScrollLeft = () => {};
  render() {
    const { navData, currentNav, goodslist, scrollLeft } = this.state;
    return <View className="category-list">
        <ScrollView className="scroll" scrollX scrollLeft={scrollLeft}>
          {navData.map((item, index) => {
          return <View key={item.id} className={currentNav.id === item.id ? 'nav-item active' : 'nav-item'} onClick={() => this.navClick(item, index)}>{item.name}</View>;
        })}
        </ScrollView>
        <View className="goodslist">
          <View className="goods-title">
            <View className="title">{currentNav.name}</View>
            <View className="subtitle">{currentNav.front_desc}</View>
          </View>
          {goodslist.length ? <View className="list-wrapper">
                {goodslist.map(item => {
            return <View className="list-item" key={item.id} onClick={() => this.toGoods(item.id)}>
                        <Image className="img" mode="widthFix" src={item.list_pic_url}></Image>
                        <View className="name">{item.name}</View>
                        <View className="price">￥{item.retail_price}</View>
                      </View>;
          })}
              </View> : <View className="null">啊噢，暂无相关商品..</View>}
        </View>
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}