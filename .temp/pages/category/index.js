import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image, Input } from '@tarojs/components';
import './index.less';
import { request } from '../../utils/request';

export default class Catogory extends Taro.Component {
  state = {
    listData: [],
    currentIndex: 0,
    currentCategory: {}
  };
  componentDidShow() {
    this._getListData();
  }

  _getListData = async () => {
    const data = await request({ url: '/category/indexaction' });
    this.setState({
      listData: data.categoryList
    }, () => {
      this._getCategoryList(this.state.listData[0].id);
    });
  };
  _getCategoryList = async id => {
    const data = await request({ url: '/category/currentaction', data: { id } });
    this.setState({
      currentCategory: data.data.currentOne
    });
  };
  switchNav = (id, index) => {
    this.setState({
      currentIndex: index
    });
    this._getCategoryList(id);
  };
  toSearch = () => {
    Taro.navigateTo({ url: '/pages/search/index' });
  };
  toCategorylist = id => {
    Taro.navigateTo({ url: '/pages/categoryList/index?id=' + id });
  };
  render() {
    const { listData, currentIndex, currentCategory } = this.state;
    const categorylist = currentCategory.subList || [];
    return <View className="category">
        <View className="header">
          <Input className="search" placeholder="请输入搜索商品" onClick={this.toSearch} />
          <Text className="iconfont icon-search"></Text>
        </View>
        <View className="content-wrapper">
          <View className="nav-left">
            {listData.map((item, index) => {
            return <View className={index === currentIndex ? 'active nav-item' : 'nav-item'} key={item.id} onClick={() => this.switchNav(item.id, index)}>
                    {item.name}
                  </View>;
          })}
          </View>
          <View className="category-right">
            <View className="img-wrapper">
              <Image className="img" mode="widthFix" src={currentCategory.banner_url} />
            </View>
            <View className="title">- {currentCategory.name} -</View>
            <View className="list">
              {categorylist.map(item => {
              return <View className="item" key={item.id} onClick={() => this.toCategorylist(item.id)}>
                      <Image className="avatar" mode="aspectFit" src={item.wap_banner_url} />
                      <View className="name">{item.name}</View>
                    </View>;
            })}
            </View>
          </View>
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