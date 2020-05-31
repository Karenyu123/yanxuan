import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.less'
class Topics extends Component {
  constructor (props) {
    super(props)
  }
  state={}
  componentWillMount () {}
  componentDidMount () {}
  componentWillReceiveProps (nextProps,nextContext) {}
  componentWillUnmount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  componentDidNotFound () {}
  render() {
    return (
      <View>
       Topic
      </View>
    );
  }
}
export default Topics ;
