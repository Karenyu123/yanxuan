(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/goods/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goods/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/goods/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

__webpack_require__(/*! ./index.less */ "./src/pages/goods/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var num = 0;

var Goods = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Goods, _Taro$Component);

  function Goods() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Goods);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Goods.__proto__ || Object.getPrototypeOf(Goods)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["gallery", "popUp", "attribute", "info", "issue", "productList", "collected", "goodsCount", "openid"], _this.state = {
      openid: '',
      attribute: [],
      collected: false,
      gallery: [],
      info: {},
      issue: [],
      productList: [],
      popUp: false,
      goodsCount: 1
    }, _this.getGoodsDetail = function () {
      var id = _this.$router.params.id;

      _taroWeapp2.default.login({
        success: function success(res) {
          if (res.code) {
            _taroWeapp2.default.setStorageSync('openid', '0339cGX00ggkNI1taKX00sEQX009cGXn');
            _this.setState({
              openid: '0339cGX00ggkNI1taKX00sEQX009cGXn'
            }, _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
              var _ref3, attribute, collected, gallery, info, issue, productList, tInfo;

              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _request.request)({ url: '/goods/detailaction', data: { id: id, openId: _this.state.openid } });

                    case 2:
                      _ref3 = _context.sent;
                      attribute = _ref3.attribute;
                      collected = _ref3.collected;
                      gallery = _ref3.gallery;
                      info = _ref3.info;
                      issue = _ref3.issue;
                      productList = _ref3.productList;
                      tInfo = _extends({}, info, { goods_desc: info.goods_desc.replace(/<p/g, '<p width="375"').replace(/<img/g, '<img width="375"') });

                      _this.setState({
                        attribute: attribute,
                        collected: collected,
                        gallery: gallery,
                        info: tInfo,
                        issue: issue,
                        productList: productList
                      });

                    case 11:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this2);
            })));
          }
        }
      });
    }, _this.handlePopUp = function () {
      num = 0;
      _this.setState({
        popUp: !_this.state.popUp
      });
    }, _this.add = function () {
      _this.setState({
        goodsCount: _this.state.goodsCount + 1
      });
    }, _this.decrement = function () {
      if (_this.state.goodsCount === 1) {
        return;
      }
      _this.setState({
        goodsCount: _this.state.goodsCount - 1
      });
    }, _this.handleCollect = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var res;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _request.request)({
                url: '/collect/addcollect', method: 'POST', data: {
                  openId: _this.state.openid,
                  goodsId: _this.$router.params.id
                }
              });

            case 2:
              res = _context2.sent;

              _this.getGoodsDetail();

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.buy = function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(e) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                e.stopPropagation();
                num++;
                _this.setState({
                  popUp: true
                });
                if (num % 2 === 0) {
                  _taroWeapp2.default.showModal({
                    content: '确认购买此商品？',
                    success: function () {
                      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(res) {
                        var _res;

                        return _regenerator2.default.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!res.confirm) {
                                  _context3.next = 6;
                                  break;
                                }

                                _context3.next = 3;
                                return (0, _request.request)({
                                  url: '/order/submitAction', method: 'POST', data: {
                                    openId: _this.state.openid,
                                    goodsId: _this.$router.params.id,
                                    allPrice: _this.state.info.retail_price * _this.state.goodsCount * 1
                                  }
                                });

                              case 3:
                                _res = _context3.sent;

                                console.log(_res);
                                _taroWeapp2.default.navigateTo({ url: '/pages/order/index' });

                              case 6:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        }, _callee3, _this2);
                      }));

                      function success(_x2) {
                        return _ref6.apply(this, arguments);
                      }

                      return success;
                    }()
                  });
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }(), _this.addCart = function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(e) {
        var res;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                e.stopPropagation();
                num++;
                _this.setState({
                  popUp: true
                });

                if (!(num % 2 === 0)) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 6;
                return (0, _request.request)({
                  url: '/cart/addCart', method: 'POST', data: {
                    openId: _this.state.openid,
                    goodsId: _this.$router.params.id,
                    number: _this.state.goodsCount
                  }
                });

              case 6:
                res = _context5.sent;

                _taroWeapp2.default.showToast({ title: '添加购物车成功' });
                _this.setState({
                  popUp: false
                });

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this2);
      }));

      return function (_x3) {
        return _ref7.apply(this, arguments);
      };
    }(), _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Goods, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Goods.prototype.__proto__ || Object.getPrototypeOf(Goods.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getGoodsDetail();
    }
  }, {
    key: 'onShareAppMessage',

    // 分享时触发的钩子函数，可自定义分享内容
    value: function onShareAppMessage() {
      return {
        title: this.state.info.name,
        path: '/pages/goods/index?id=' + this.$router.params.id,
        imageUrl: this.state.gallery[0].img_url
      };
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          gallery = _state.gallery,
          info = _state.info,
          popUp = _state.popUp,
          attribute = _state.attribute,
          issue = _state.issue,
          productList = _state.productList,
          goodsCount = _state.goodsCount,
          collected = _state.collected;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Goods;
}(_taroWeapp2.default.Component), _class.$$events = ["handlePopUp", "decrement", "add", "handleCollect", "addCart", "buy"], _class.$$componentPath = "pages/goods/index", _temp2);
exports.default = Goods;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Goods, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goods/index.jsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/taro/yanxuan/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/goods/index.jsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/goods/index.wxml";

/***/ }),

/***/ "./src/pages/goods/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/goods/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/goods/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/goods/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/goods/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/goods/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goods/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/goods/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/goods/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/taro/yanxuan/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/goods/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/goods/index.less":
/*!************************************!*\
  !*** ./src/pages/goods/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/goods/index.jsx","runtime","vendors","common"]]]);