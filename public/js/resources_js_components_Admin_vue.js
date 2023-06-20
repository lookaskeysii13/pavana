"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
      switchView: false
    };
  },
  mounted: function mounted() {
    this.checkCookieValue();
    this.interval = setInterval(this.checkCookieValue, 60000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    checkCookieValue: function checkCookieValue() {
      var myCookie = this.$cookies.get('myCookie');
      if (!myCookie) {
        this.$router.push("/login");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#MainCard[data-v-58b78718] {\r\n    /* border:3px solid black; */\r\n    border-radius: 0;\r\n    padding-top: auto;\r\n    background-color: #fbf3ec;\n}\n#Card1[data-v-58b78718] {\r\n    border: 1px solid #7e7974;\r\n    background-color: #f6e6d2;\r\n    border-radius: 0;\r\n    width: 400px;\r\n    height: 500px;\n}\n#Card2[data-v-58b78718] {\r\n    border: 1px solid #7e7974;\r\n    background-color: #f6e6d2;\r\n    border-radius: 0;\r\n    width: 400px;\r\n    height: 500px;\n}\n#Card3[data-v-58b78718] {\r\n    border: 1px solid #7e7974;\r\n    background-color: #f6e6d2;\r\n    border-radius: 0;\r\n    width: 400px;\r\n    height: 500px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_id_58b78718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_id_58b78718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_id_58b78718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Admin.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Admin.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin_vue_vue_type_template_id_58b78718_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=58b78718&scoped=true& */ "./resources/js/components/Admin.vue?vue&type=template&id=58b78718&scoped=true&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _Admin_vue_vue_type_style_index_0_id_58b78718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css& */ "./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_58b78718_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Admin_vue_vue_type_template_id_58b78718_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58b78718",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Admin.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_0_id_58b78718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=style&index=0&id=58b78718&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Admin.vue?vue&type=template&id=58b78718&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Admin.vue?vue&type=template&id=58b78718&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_58b78718_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_58b78718_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_58b78718_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=template&id=58b78718&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=template&id=58b78718&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=template&id=58b78718&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin.vue?vue&type=template&id=58b78718&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("router-view", { attrs: { name: "header" } }),
      _vm._v(" "),
      _c(
        "v-card",
        {
          attrs: {
            id: "MainCard",
            height: _vm.$vuetify.breakpoint.height - 50,
          },
        },
        [
          _vm.$vuetify.breakpoint.width > 1200
            ? _c(
                "v-card",
                {
                  staticStyle: {
                    "padding-top": "10%",
                    "background-color": "#fbf3ec",
                  },
                  attrs: { flat: "" },
                },
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto text-center",
                              attrs: { id: "Card1" },
                            },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    "align-center": "",
                                    "justify-center": "",
                                  },
                                },
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "text-center" },
                                    [_vm._v("SCHEDULES")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                {
                                  staticClass: "mx-auto mb-5",
                                  attrs: {
                                    height: "300px",
                                    width: "300px",
                                    flat: "",
                                  },
                                },
                                [
                                  _c(
                                    "center",
                                    [
                                      _c("v-img", {
                                        staticStyle: {
                                          height: "100%",
                                          "background-color": "#f6e6d2",
                                        },
                                        attrs: { src: "images/schedule.png" },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "#45933a", dark: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$router.push("/schedules")
                                    },
                                  },
                                },
                                [_vm._v("VIEW HERE")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto text-center",
                              attrs: { id: "Card2" },
                            },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    "align-center": "",
                                    "justify-center": "",
                                  },
                                },
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "text-center" },
                                    [_vm._v("MANAGE SERVICES")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                {
                                  staticClass: "mx-auto mb-5",
                                  attrs: {
                                    height: "300px",
                                    width: "300px",
                                    flat: "",
                                  },
                                },
                                [
                                  _c(
                                    "center",
                                    [
                                      _c("v-img", {
                                        staticStyle: {
                                          height: "100%",
                                          "background-color": "#f6e6d2",
                                        },
                                        attrs: { src: "images/services.png" },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "#45933a", dark: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$router.push("/adminservices")
                                    },
                                  },
                                },
                                [_vm._v("VIEW HERE")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "mx-auto text-center",
                              attrs: { id: "Card3" },
                            },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    "align-center": "",
                                    "justify-center": "",
                                  },
                                },
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "text-center" },
                                    [_vm._v("CUSTOMIZE HOME PAGE")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              !_vm.switchView
                                ? _c(
                                    "v-card",
                                    {
                                      staticClass: "mx-auto mb-5",
                                      attrs: {
                                        height: "300px",
                                        width: "300px",
                                        flat: "",
                                      },
                                    },
                                    [
                                      _c(
                                        "center",
                                        [
                                          _c("v-img", {
                                            staticStyle: {
                                              height: "100%",
                                              "background-color": "#f6e6d2",
                                            },
                                            attrs: {
                                              src: "images/customize.png",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-card",
                                    {
                                      staticClass: "mx-auto mb-5",
                                      staticStyle: {
                                        "background-color": "#f6e6d2",
                                      },
                                      attrs: {
                                        height: "300px",
                                        width: "300px",
                                        flat: "",
                                      },
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { staticClass: "mt-12" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { width: "200px" },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.$router.push(
                                                        "/customizehomepage"
                                                      )
                                                    },
                                                  },
                                                },
                                                [_vm._v("CUSTOMIZE IMAGES")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { staticClass: "mt-12" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { width: "200px" },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.$router.push(
                                                        "/customizefeedback"
                                                      )
                                                    },
                                                  },
                                                },
                                                [_vm._v("CUSTOMIZE FEEDBACK")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { attrs: { "no-gutters": "" } },
                                        [
                                          _c(
                                            "v-col",
                                            { staticClass: "mt-12" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { width: "200px" },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.$router.push(
                                                        "/customizeabout"
                                                      )
                                                    },
                                                  },
                                                },
                                                [_vm._v("CUSTOMIZE ABOUT")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "#45933a", dark: "" },
                                  on: {
                                    click: function ($event) {
                                      _vm.switchView = !_vm.switchView
                                    },
                                  },
                                },
                                [_vm._v("VIEW HERE")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _c(
                "v-card",
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto text-center",
                      attrs: { id: "Card1" },
                    },
                    [
                      _c(
                        "v-layout",
                        { attrs: { "align-center": "", "justify-center": "" } },
                        [
                          _c("v-card-title", { staticClass: "text-center" }, [
                            _vm._v("SCHEDULES"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto mb-5",
                          attrs: { height: "300px", width: "300px", flat: "" },
                        },
                        [
                          _c(
                            "center",
                            [
                              _c("v-img", {
                                staticStyle: {
                                  height: "100%",
                                  "background-color": "#f6e6d2",
                                },
                                attrs: { src: "images/schedule.png" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "#45933a", dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.$router.push("/schedules")
                            },
                          },
                        },
                        [_vm._v("VIEW HERE")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto text-center ma-3",
                      attrs: { id: "Card2", flat: "" },
                    },
                    [
                      _c(
                        "v-layout",
                        { attrs: { "align-center": "", "justify-center": "" } },
                        [
                          _c("v-card-title", { staticClass: "text-center" }, [
                            _vm._v("MANAGE SERVICES"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto mb-5",
                          attrs: { height: "300px", width: "300px", flat: "" },
                        },
                        [
                          _c(
                            "center",
                            [
                              _c("v-img", {
                                staticStyle: {
                                  height: "100%",
                                  "background-color": "#f6e6d2",
                                },
                                attrs: { src: "images/services.png" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "#45933a", dark: "" },
                          on: {
                            click: function ($event) {
                              return _vm.$router.push("/adminservices")
                            },
                          },
                        },
                        [_vm._v("VIEW HERE")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    {
                      staticClass: "mx-auto text-center ma-3",
                      attrs: { id: "Card3", flat: "" },
                    },
                    [
                      _c(
                        "v-layout",
                        { attrs: { "align-center": "", "justify-center": "" } },
                        [
                          _c("v-card-title", { staticClass: "text-center" }, [
                            _vm._v("CUSTOMIZE HOME PAGE"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      !_vm.switchView
                        ? _c(
                            "v-card",
                            {
                              staticClass: "mx-auto mb-5",
                              staticStyle: {
                                "background-color": "#f6e6d2",
                                "background-image":
                                  "url('./images/customize.png')",
                              },
                              attrs: {
                                height: "300px",
                                width: "300px",
                                flat: "",
                              },
                            },
                            [_c("center")],
                            1
                          )
                        : _c(
                            "v-card",
                            {
                              staticClass: "mx-auto mb-5",
                              staticStyle: {
                                "background-color": "#f6e6d2",
                                "background-image":
                                  "url('./images/customize.png')",
                              },
                              attrs: {
                                height: "300px",
                                flat: "",
                                width: "300px",
                              },
                            },
                            [
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { width: "200px" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.$router.push(
                                                "/customizehomepage"
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("CUSTOMIZE IMAGES")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { "no-gutters": "" } },
                                [
                                  _c(
                                    "v-col",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { width: "200px" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.$router.push(
                                                "/customizefeedback"
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("CUSTOMIZE FEEDBACK")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "#45933a", dark: "" },
                          on: {
                            click: function ($event) {
                              _vm.switchView = !_vm.switchView
                            },
                          },
                        },
                        [_vm._v("VIEW HERE")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);