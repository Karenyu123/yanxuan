import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class User extends Taro.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {}
  render () {
    return (
      <View>
        <Button>User</Button>
      </View>
    )
  }
}