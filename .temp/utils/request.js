import Taro, { showLoading as _showLoading, request as _request, hideLoading as _hideLoading } from "@tarojs/taro-h5";
let times = 0;
const baseUrl = 'http://localhost:5757/lm';
const isWeapp = false;

export function request(params) {
  times++;
  _showLoading({
    title: '加载中'
  });
  return new Promise((resolve, reject) => {
    _request({
      ...params,
      url: params.url,
      success: res => {
        times--;
        resolve(res.data);
        if (!times) {
          _hideLoading();
        }
      },
      fail: err => {
        times--;
        reject(err);
      },
      complete: () => {
        _hideLoading();
      }
    });
  });
}