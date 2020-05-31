import Taro from '@tarojs/taro'
let times = 0
const baseUrl = 'http://localhost:5757/lm'
const isWeapp = process.env.TARO_ENV === 'weapp'

export function request(params) {
  times++
  Taro.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    Taro.request({
      ...params,
      url: isWeapp ? (baseUrl + params.url) : params.url,
      success: (res) => {
        times--
        resolve(res.data)
        if (!times) {
          Taro.hideLoading()
        }
      },
      fail: (err) => {
        times--
        reject(err)
      },
      complete: () => {
        Taro.hideLoading()
      }
    })
  })
}