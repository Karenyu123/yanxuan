import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class NewGoogs extends Taro.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {}
  render () {
    return (
      <View>
        <Button>NewGoogs</Button>
      </View>
    )
  }
}