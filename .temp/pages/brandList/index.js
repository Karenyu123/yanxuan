import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Button } from '@tarojs/components';

export default class BrandList extends Taro.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return <View>
        <Button>BrandList</Button>
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}