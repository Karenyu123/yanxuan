require("./runtime");
require("./common");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.jsx?taro&type=script&parse=ENTRY&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/app.jsx?taro&type=script&parse=ENTRY& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./app.less */ "./src/app.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index/index', 'pages/topics/index', 'pages/category/index', 'pages/cart/index', 'pages/user/index', 'pages/mapPage/index', 'pages/brandList/index', 'pages/newGoods/index', 'pages/search/index', 'pages/goods/index', 'pages/order/index', 'pages/selectAddress/index', 'pages/addAddress/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#666',
        backgroundColor: '#fafafa',
        selectedColor: '#b4282d',
        borderStyle: 'white',
        list: [{
          pagePath: 'pages/index/index',
          iconPath: 'assets/images/ic_menu_choice_nor.png',
          selectedIconPath: 'assets/images/ic_menu_choice_pressed.png',
          text: '首页'
        }, {
          pagePath: 'pages/topics/index',
          iconPath: 'assets/images/ic_menu_topic_nor.png',
          selectedIconPath: 'assets/images/ic_menu_topic_pressed.png',
          text: '专题'
        }, {
          pagePath: 'pages/category/index',
          iconPath: 'assets/images/ic_menu_sort_nor.png',
          selectedIconPath: 'assets/images/ic_menu_sort_pressed.png',
          text: '分类'
        }, {
          pagePath: 'pages/cart/index',
          iconPath: 'assets/images/ic_menu_shoping_nor.png',
          selectedIconPath: 'assets/images/ic_menu_shoping_pressed.png',
          text: '购物车'
        }, {
          pagePath: 'pages/user/index',
          iconPath: 'assets/images/ic_menu_me_nor.png',
          selectedIconPath: 'assets/images/ic_menu_me_pressed.png',
          text: '我的'
        }]
      },
      permission: {
        "scope.userLocation": {
          "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
        }

        // 在 App 类中的 render() 函数没有实际作用
        // 请勿修改此函数
      } }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {}
  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.jsx?taro&type=script&parse=ENTRY& */ "./src/app.jsx?taro&type=script&parse=ENTRY&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/app.jsx?taro&type=script&parse=ENTRY&":
/*!***************************************************!*\
  !*** ./src/app.jsx?taro&type=script&parse=ENTRY& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./app.jsx?taro&type=script&parse=ENTRY& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.jsx?taro&type=script&parse=ENTRY&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_jsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app.less":
/*!**********************!*\
  !*** ./src/app.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/app.jsx","runtime","vendors"]]]);;