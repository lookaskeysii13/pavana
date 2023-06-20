"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomizeFeedback_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeFeedback.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeFeedback.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      headers: [{
        text: 'Message',
        value: 'Message'
      }, {
        text: 'Name',
        value: 'Name'
      }, {
        text: 'Email',
        value: 'EmailAddress'
      }, {
        text: 'Contact Number',
        value: 'ContactNumber'
      }, {
        text: ' ',
        value: 'action'
      }],
      messageArray: [],
      buttonColor: ''
    };
  },
  created: function created() {
    this.getMessage();
  },
  methods: {
    getMessage: function getMessage() {
      var _this = this;
      axios.get("api/message?Function=".concat('GETMESSAGE')).then(function (res) {
        _this.messageArray = res.data;
      });
    },
    updateMessageStatus: function updateMessageStatus(value) {
      var _this2 = this;
      axios.put('api/message/update', {
        Function: 'UPDATEMESSAGESTATUS',
        data: value
      }).then(function () {
        _this2.getMessage();
      });
    },
    buttonText: function buttonText(value) {
      if (value.Status == '1') {
        return 'HIDE MESSAGE IN PUBLIC';
      } else {
        return 'SHOW MESSAGE IN PUBLIC';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CustomizeFeedback.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CustomizeFeedback.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomizeFeedback_vue_vue_type_template_id_555a020d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true& */ "./resources/js/components/CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true&");
/* harmony import */ var _CustomizeFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomizeFeedback.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomizeFeedback.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomizeFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomizeFeedback_vue_vue_type_template_id_555a020d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomizeFeedback_vue_vue_type_template_id_555a020d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "555a020d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomizeFeedback.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomizeFeedback.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CustomizeFeedback.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeFeedback.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeFeedback.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeFeedback_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeFeedback_vue_vue_type_template_id_555a020d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeFeedback_vue_vue_type_template_id_555a020d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeFeedback_vue_vue_type_template_id_555a020d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeFeedback.vue?vue&type=template&id=555a020d&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.messageArray,
          height: "50vh",
          "fixed-header": "",
        },
        scopedSlots: _vm._u(
          [
            {
              key: "item.action",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        outlined: "",
                        small: "",
                        color: item.Status == "1" ? "error" : "success",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.updateMessageStatus(item)
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.buttonText(item)) +
                          "\n        "
                      ),
                    ]
                  ),
                ]
              },
            },
          ],
          null,
          true
        ),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);