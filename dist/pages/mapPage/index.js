(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mapPage/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mapPage/index.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mapPage/index.jsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _amapWx = __webpack_require__(/*! ../../utils/amap-wx */ "./src/utils/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

__webpack_require__(/*! ./index.less */ "./src/pages/mapPage/index.less");

var _global_data = __webpack_require__(/*! ../../common/js/global_data */ "./src/common/js/global_data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapPage = (_temp2 = _class = function (_Taro$Component) {
  _inherits(MapPage, _Taro$Component);

  function MapPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MapPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MapPage.__proto__ || Object.getPrototypeOf(MapPage)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray18", "keyword", "isFocus", "suggestList", "longitude", "latitude", "markers"], _this.state = {
      keyword: '',
      longitude: 0,
      latitude: 0,
      markers: [],
      isFocus: false,
      suggestList: []
    }, _this._getPosition = function () {
      var myMapFunc = new _amapWx2.default.AMapWX({
        key: '45ae9c3cc5b6a9649fea754080f29a7e'
      });
      myMapFunc.getRegeo({
        iconPath: 'https://pics.images.ac.cn/image/5ed12376190fe.html',
        iconWidth: 22,
        iconHeight: 32,
        success: function success(data) {
          var _data$ = data[0],
              id = _data$.id,
              latitude = _data$.latitude,
              longitude = _data$.longitude,
              height = _data$.height,
              width = _data$.width,
              iconPath = _data$.iconPath;

          var markers = [{ id: id, latitude: latitude, longitude: longitude, height: height, width: width, iconPath: iconPath }];
          _this.setState({
            latitude: latitude,
            longitude: longitude,
            markers: markers
          });
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }, _this.handleInput = function (e) {
      var value = e.target.value.trim();
      if (value) {
        _this.setState({
          keyword: value,
          isFocus: true
        }, function () {
          var keyword = _this.state.keyword;

          var myMapFunc = new _amapWx2.default.AMapWX({
            key: '45ae9c3cc5b6a9649fea754080f29a7e'
          });
          myMapFunc.getInputtips({
            keywords: keyword,
            location: '',
            success: function success(data) {
              console.log('p', data);
              if (data && data.tips) {
                _this.setState({
                  suggestList: data.tips
                });
              }
            }
          });
        });
      }
    }, _this.handleClear = function () {
      _this.setState({
        keyword: '',
        isFocus: false,
        suggestList: []
      });
    }, _this.handleSkipTo = function (name) {
      (0, _global_data.setGlobalData)('location', name);
      _taroWeapp2.default.setStorageSync('location', name);
      _taroWeapp2.default.navigateBack();
    }, _this.anonymousFunc0Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MapPage, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(MapPage.prototype.__proto__ || Object.getPrototypeOf(MapPage.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._getPosition();
    }
    // 点击跳转到首页

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
          longitude = _state.longitude,
          latitude = _state.latitude,
          markers = _state.markers,
          isFocus = _state.isFocus,
          keyword = _state.keyword,
          suggestList = _state.suggestList;

      var loopArray18 = suggestList.map(function (item, __index0) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "gzzzz" + __index0;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.handleSkipTo(item.$original.name);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray18: loopArray18
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return MapPage;
}(_taroWeapp2.default.Component), _class.$$events = ["handleInput", "handleClear", "anonymousFunc0"], _class.$$componentPath = "pages/mapPage/index", _temp2);
exports.default = MapPage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(MapPage, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mapPage/index.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/taro/yanxuan/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/mapPage/index.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/mapPage/index.wxml";

/***/ }),

/***/ "./src/common/js/global_data.js":
/*!**************************************!*\
  !*** ./src/common/js/global_data.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalData = setGlobalData;
exports.getGlobalData = getGlobalData;
var globalData = {};

function setGlobalData(key, value) {
  globalData[key] = value;
}

function getGlobalData(key) {
  return globalData[key];
}

/***/ }),

/***/ "./src/pages/mapPage/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/mapPage/index.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/mapPage/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/mapPage/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/mapPage/index.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/mapPage/index.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mapPage/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/mapPage/index.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/mapPage/index.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/taro/yanxuan/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/mapPage/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/mapPage/index.less":
/*!**************************************!*\
  !*** ./src/pages/mapPage/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/mapPage/index.jsx","runtime","vendors","common"]]]);