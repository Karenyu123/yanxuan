(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/search/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/index.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/search/index.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************/
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

__webpack_require__(/*! ./style.less */ "./src/pages/search/style.less");

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Search, _Taro$Component);

  function Search() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray28", "loopArray29", "loopArray30", "loopArray31", "keyword", "isFocus", "suggestList", "historyList", "hotList", "showGoodslist", "goodsList", "tabs", "currentIndex", "openid", "order"], _this.state = {
      keyword: '',
      isFocus: false,
      openid: '',
      suggestList: [],
      goodsList: [],
      order: 'asc',
      historyList: ['烧烤', '小龙虾'],
      hotList: ['烤鱼', '火锅', '麻辣烫'],
      tabs: ['综合', '价格', '分类'],
      showGoodslist: false,
      currentIndex: 0
    }, _this.handleInput = function (e) {
      var value = e.target.value.trim();
      if (value) {
        _this.setState({
          keyword: value,
          isFocus: true
        }, function () {
          _this.setHistoryData(value);
          _this.getHistoryData();
        });
      }
    }, _this.setHistoryData = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(value) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _request.request)({
                  url: "/search/addhistoryaction",
                  method: "POST",
                  data: {
                    keyword: value,
                    openId: _this.state.openid
                  }
                });

              case 2:
                res = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.getHistoryData = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _ref4, historyData, hotKeywordList;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('id', _this.state.openid);
              _context2.next = 3;
              return (0, _request.request)({ url: '/search/indexaction?openId=' + _this.state.openid });

            case 3:
              _ref4 = _context2.sent;
              historyData = _ref4.historyData;
              hotKeywordList = _ref4.hotKeywordList;

              _this.setState({
                historyList: historyData,
                hotList: hotKeywordList
              });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.clearAllHistory = function () {
      _taroWeapp2.default.showModal({
        title: "提示",
        content: "确认删除历史记录吗？",
        success: function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(res) {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!res.confirm) {
                      _context3.next = 4;
                      break;
                    }

                    _context3.next = 3;
                    return (0, _request.request)({
                      url: "/search/clearhistoryAction",
                      method: "POST",
                      data: { openId: _this.state.openid }
                    });

                  case 3:
                    _this.getHistoryData();

                  case 4:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, _this2);
          }));

          function success(_x2) {
            return _ref5.apply(this, arguments);
          }

          return success;
        }()
      });
    }, _this.handleClear = function () {
      _this.setState({
        keyword: '',
        isFocus: false,
        suggestList: [],
        showGoodslist: false
      });
    }, _this.searchWord = function (word) {
      _this.setState({
        keyword: word,
        isFocus: true
      }, function () {
        _this.setHistoryData(word);
        _this.getHistoryData();
        _this.getGoodslist();
      });
    }, _this.inputing = function (e) {
      var value = e.detail.value.trim();
      _this.setState({
        keyword: value,
        isFocus: true
      });
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        _this.getGoodslist();
      }, 500);
    }, _this.getGoodslist = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var res;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _request.request)({
                url: "/search/helperaction",
                data: { keyword: _this.state.keyword, order: _this.state.order }
              });

            case 2:
              res = _context4.sent;

              _this.setState({
                suggestList: res.keywords,
                goodsList: res.keywords
              });
              if (!res.keywords.length) {
                _this.setState({
                  showGoodslist: true
                });
              }

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this2);
    })), _this.switchTap = function (index) {
      _this.setState({
        currentIndex: index
      });
      var order = void 0;
      if (index === 1) {
        order = 'desc';
      } else {
        order = 'asc';
      }
      _this.setState({
        order: order
      }, function () {
        _this.getGoodslist();
      });
    }, _this.handleSuggestClick = function (e) {
      e.stopPropagation();
      _this.setState({
        suggestList: [],
        showGoodslist: true
      });
    }, _this.toGoodsDetail = function (id) {
      console.log(id);
      _taroWeapp2.default.navigateTo({ url: '/pages/goods/index?id=' + id });
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.anonymousFunc3Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
    // 存储热门数据

    // 获取热门数据

    // 输入框输入实时搜索

    // 点击搜索建议

    // toGoodsDetail

  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      this.getHistoryData();
      // Taro.login({
      //   success: (res) => {
      //     if (res.code) {
      //       this.setState({
      //         openid: res.code
      //       }, () => {
      //           this.getHistoryData()
      //       })
      //     } else {
      //       console.log("登录失败！" + res.errMsg);
      //     }
      //   },
      // });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          isFocus = _state.isFocus,
          keyword = _state.keyword,
          suggestList = _state.suggestList,
          historyList = _state.historyList,
          hotList = _state.hotList,
          tabs = _state.tabs,
          goodsList = _state.goodsList,
          showGoodslist = _state.showGoodslist,
          currentIndex = _state.currentIndex;

      var loopArray28 = historyList.length ? historyList.map(function (item, __index0) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "izzzz" + __index0;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          return _this3.searchWord(item.$original.keyword);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray29 = hotList.map(function (item, __index1) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "jzzzz" + __index1;

        _this3.anonymousFunc1Map[_$indexKey2] = function () {
          return _this3.searchWord(item.$original.keyword);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      var loopArray30 = !!goodsList.length ? tabs.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "bazzz" + index;

        _this3.anonymousFunc2Map[_$indexKey3] = function () {
          return _this3.switchTap(index);
        };

        return {
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      }) : [];
      var loopArray31 = !!goodsList.length ? goodsList.map(function (item, __index3) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey4 = "bbzzz" + __index3;

        _this3.anonymousFunc3Map[_$indexKey4] = function () {
          return _this3.toGoodsDetail(item.$original.id);
        };

        return {
          _$indexKey4: _$indexKey4,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray28: loopArray28,
        loopArray29: loopArray29,
        loopArray30: loopArray30,
        loopArray31: loopArray31
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
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(_$indexKey4) {
      var _anonymousFunc3Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc3Map[_$indexKey4] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey4].apply(_anonymousFunc3Map, e);
    }
  }]);

  return Search;
}(_taroWeapp2.default.Component), _class.$$events = ["handleInput", "inputing", "handleClear", "handleSuggestClick", "clearAllHistory", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"], _class.$$componentPath = "pages/search/index", _temp2);
exports.default = Search;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Search, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/index.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/taro/yanxuan/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/search/index.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/search/index.wxml";

/***/ }),

/***/ "./src/pages/search/index.jsx":
/*!************************************!*\
  !*** ./src/pages/search/index.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/search/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/search/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/search/index.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************!*\
  !*** ./src/pages/search/index.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/search/index.jsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/search/index.jsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/taro/yanxuan/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/search/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/search/style.less":
/*!*************************************!*\
  !*** ./src/pages/search/style.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/search/index.jsx","runtime","vendors","common"]]]);