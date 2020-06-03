(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/addAddress/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addAddress/index.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/addAddress/index.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************************************************************************************/
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

__webpack_require__(/*! ./style.less */ "./src/pages/addAddress/style.less");

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddAddress = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AddAddress, _Taro$Component);

  function AddAddress() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, AddAddress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddAddress.__proto__ || Object.getPrototypeOf(AddAddress)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["name", "number", "addressDetail", "checked", "address"], _this.state = {
      checked: false,
      name: '张三',
      number: '010-123456',
      address: '请选择省、市、区、县',
      addressDetail: ''
    }, _this.handleAddressPicker = function (e) {
      console.log(e.detail.value);
      _this.setState({
        address: e.detail.value.join('、').slice(0, -1)
      }, function () {
        // 
      });
    }, _this.handleRadio = function (e) {
      console.log(e);
      _this.setState({
        checked: !_this.state.checked
      });
    }, _this.saveAddress = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$state, name, number, address, addressDetail, checked, data;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, name = _this$state.name, number = _this$state.number, address = _this$state.address, addressDetail = _this$state.addressDetail, checked = _this$state.checked;
              _context.next = 3;
              return (0, _request.request)({
                url: '/address/saveAction', method: 'POST', data: {
                  username: name,
                  telNumber: number,
                  address: address,
                  detailaddress: addressDetail,
                  checked: checked,
                  openId: _taroWeapp2.default.getStorageSync('openid'),
                  addressId: ''
                }
              });

            case 3:
              data = _context.sent;

              if (data.data) {
                _taroWeapp2.default.showToast({
                  title: '保存成功'
                });
                _taroWeapp2.default.navigateTo({ url: '/pages/selectAddress/index' });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.chooseAddress = function () {
      _taroWeapp2.default.chooseAddress({
        success: function success(res) {
          var userName = res.userName,
              telNumber = res.telNumber,
              provinceName = res.provinceName,
              cityName = res.cityName,
              countyName = res.countyName,
              detailInfo = res.detailInfo;

          _this.setState({
            name: userName,
            number: telNumber,
            address: provinceName + "\u3001" + cityName + "\u3001" + countyName,
            addressDetail: detailInfo
          });
        }
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddAddress, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AddAddress.prototype.__proto__ || Object.getPrototypeOf(AddAddress.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          checked = _state.checked,
          name = _state.name,
          number = _state.number,
          address = _state.address,
          addressDetail = _state.addressDetail;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return AddAddress;
}(_taroWeapp2.default.Component), _class.$$events = ["handleAddressPicker", "handleRadio", "chooseAddress", "saveAddress"], _class.$$componentPath = "pages/addAddress/index", _temp2);
exports.default = AddAddress;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AddAddress, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addAddress/index.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/taro/yanxuan/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/addAddress/index.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/addAddress/index.wxml";

/***/ }),

/***/ "./src/pages/addAddress/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/addAddress/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/addAddress/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/addAddress/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/addAddress/index.jsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/addAddress/index.jsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addAddress/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/addAddress/index.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************!*\
  !*** ./src/pages/addAddress/index.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/taro/yanxuan/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\taro\\yanxuan\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/addAddress/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_taro_yanxuan_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/addAddress/style.less":
/*!*****************************************!*\
  !*** ./src/pages/addAddress/style.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/addAddress/index.jsx","runtime","vendors","common"]]]);