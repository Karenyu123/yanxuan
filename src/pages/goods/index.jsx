import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Goods extends Taro.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {}
  render () {
    return (
      <View>
        <Button>Goods</Button>
      </View>
    )
  }
}