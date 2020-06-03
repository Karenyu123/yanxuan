(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");

var _amapWx = __webpack_require__(/*! ../../utils/amap-wx */ "./src/utils/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray25", "banner", "channel", "brandList", "newGoods", "hotGoods", "topicList", "newCategoryList", "location"], _this.state = {
      location: '广水',
      banner: [],
      brandList: [],
      channel: [],
      hotGoods: [],
      newCategoryList: [],
      newGoods: [],
      topicList: []
    }, _this.config = {
      navigationBarTitleText: '首页'
    }, _this.toMapPage = function () {
      // 查看是否授权
      _taroWeapp2.default.getSetting({
        success: function success(res) {
          console.log(res);
          // 如果没有授权，则打开授权框
          if (!res.authSetting['scope.userLocation']) {
            _taroWeapp2.default.openSetting({
              success: function success(res) {
                _this._getCityName();
              }
            });
          } else {
            _taroWeapp2.default.navigateTo({
              url: '/pages/mapPage/index'
            });
          }
        }
      });
    }, _this._getCityName = function () {
      // key:5ed87aafaae0d159119b3c706fa19ae2
      var myMapFunc = new _amapWx2.default.AMapWX({ key: '45ae9c3cc5b6a9649fea754080f29a7e' });
      myMapFunc.getRegeo({
        success: function success(data) {
          var address = data[0].name;
          _taroWeapp2.default.setStorageSync('location', address);
          _this.setState({
            location: address
          });
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }, _this.toBrandList = function () {
      _taroWeapp2.default.navigateTo({ url: '/pages/brandList/index' });
    }, _this.toGoodsList = function (flag) {
      if (flag === 'new') {
        _taroWeapp2.default.navigateTo({ url: '/pages/newGoods/index?isNew=1' });
      } else {
        _taroWeapp2.default.navigateTo({ url: "/pages/newGoods/index?isNew=0" });
      }
    }, _this.toDetail = function (id) {
      _taroWeapp2.default.navigateTo({ url: '/pages/detail/index?id=' + id });
    }, _this.toSearch = function () {
      _taroWeapp2.default.navigateTo({ url: '/pages/search/index' });
    }, _this.anonymousFunc2Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var homeData = _taroWeapp2.default.getStorageSync('home_data');
      if (homeData) {
        var banner = homeData.banner,
            brandList = homeData.brandList,
            channel = homeData.channel,
            hotGoods = homeData.hotGoods,
            newCategoryList = homeData.newCategoryList,
            newGoods = homeData.newGoods,
            topicList = homeData.topicList;

        this.setState({
          banner: banner,
          brandList: brandList,
          channel: channel,
          hotGoods: hotGoods,
          newCategoryList: newCategoryList,
          newGoods: newGoods,
          topicList: topicList
        });
      } else {
        this._getSwiperList();
      }
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      var location = _taroWeapp2.default.getStorageSync('location');
      location && this.setState({ location: location });
    }
    // 获取轮播图数据

  }, {
    key: '_getSwiperList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var url, _ref3, banner, brandList, channel, hotGoods, newCategoryList, newGoods, topicList;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "/index/index";
                _context.next = 3;
                return (0, _request.request)({ url: url });

              case 3:
                _ref3 = _context.sent;
                banner = _ref3.banner;
                brandList = _ref3.brandList;
                channel = _ref3.channel;
                hotGoods = _ref3.hotGoods;
                newCategoryList = _ref3.newCategoryList;
                newGoods = _ref3.newGoods;
                topicList = _ref3.topicList;

                _taroWeapp2.default.setStorageSync("home_data", {
                  banner: banner,
                  brandList: brandList,
                  channel: channel,
                  hotGoods: hotGoods,
                  newCategoryList: newCategoryList,
                  newGoods: newGoods,
                  topicList: topicList
                });
                this.setState({
                  banner: banner,
                  brandList: brandList,
                  channel: channel,
                  hotGoods: hotGoods,
                  newCategoryList: newCategoryList,
                  newGoods: newGoods,
                  topicList: topicList
                });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _getSwiperList() {
        return _ref2.apply(this, arguments);
      }

      return _getSwiperList;
    }()
    // 去品牌列表页面

    // 去商品列表

  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          location = _state.location,
          banner = _state.banner,
          channel = _state.channel,
          brandList = _state.brandList,
          newGoods = _state.newGoods,
          hotGoods = _state.hotGoods,
          topicList = _state.topicList,
          newCategoryList = _state.newCategoryList;


      this.anonymousFunc0 = function () {
        return _this2.toGoodsList("new");
      };

      this.anonymousFunc1 = function () {
        return _this2.toGoodsList("hot");
      };

      var loopArray25 = topicList.map(function (item, __index2) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "hzzzz" + __index2;

        _this2.anonymousFunc2Map[_$indexKey] = function () {
          return _this2.toDetail(item.$original.id);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray25: loopArray25
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(_$indexKey) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey].apply(_anonymousFunc2Map, e);
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["toMapPage", "toSearch", "toBrandList", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/taro/yanxuan/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/taro/yanxuan/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","vendors","common"]]]);