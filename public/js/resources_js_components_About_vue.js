"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_About_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=script&lang=js& ***!
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
      MyBackground: '',
      MyApproach: '',
      MyBackgroundImage: '',
      MyApproachImage: ''
    };
  },
  methods: {
    goToServices: function goToServices() {
      this.$router.push('/services');
    },
    getText: function getText() {
      var _this = this;
      axios.get("api/master?Function=".concat('GETTEXT')).then(function (res) {
        res.data.filter(function (rec) {
          if (rec.TextTypeID == '00004') {
            _this.MyBackground = rec.TextContent;
          } else if (rec.TextTypeID == '00005') {
            _this.MyApproach = rec.TextContent;
          }
        });
      });
    },
    getImages: function getImages() {
      var _this2 = this;
      axios.get('api/getImages').then(function (response) {
        response.data.filter(function (rec) {
          if (rec.ImageLocID == 3) {
            _this2.MyBackgroundImage = rec.ImageName;
          } else if (rec.ImageLocID == 4) {
            _this2.MyApproachImage = rec.ImageName;
          }
        });
      })["catch"](function (error) {
        console.error(error);
      });
    },
    getImageUrl: function getImageUrl(image) {
      return "images/".concat(image);
    },
    formatText: function formatText(text) {
      return text.replace(/\n/g, '<br>');
    }
  },
  mounted: function mounted() {
    this.getImages();
    this.getText();
    this.Imagesinterval = setInterval(this.getImages, 60000);
    this.Textinterval = setInterval(this.getText, 60000);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@media only screen and (max-width: 600px) {\n.text[data-v-fb05e49c] {\r\n        font-size: 25px;\n}\n.descriptionText[data-v-fb05e49c] {\r\n        font-size: 18px;\n}\n}\n@media only screen and (min-width: 601px) and (max-width: 1024px) {\n.text[data-v-fb05e49c] {\r\n        font-size: 29px;\n}\n.descriptionText[data-v-fb05e49c] {\r\n        font-size: 22px;\n}\n}\n@media only screen and (min-width: 1025px) {\n.text[data-v-fb05e49c] {\r\n        font-size: 35px;\n}\n.descriptionText[data-v-fb05e49c] {\r\n        font-size: 28px;\n}\n}\n.image-row[data-v-fb05e49c] {\r\n    display: flex;\r\n    flex-wrap: wrap;\n}\n.text-content p[data-v-fb05e49c] {\r\n    font-size: 16px;\r\n    line-height: 1.5;\n}\n@media (max-width: 600px) {\n.text-content p[data-v-fb05e49c] {\r\n        font-size: 14px;\n}\n}\n@media (min-width: 601px) and (max-width: 960px) {\r\n\r\n    /* Adjust font size for resizing Chrome browser */\n.text-content[data-v-fb05e49c] {\r\n        font-size: 18px;\n}\n}\n.column[data-v-fb05e49c] {\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\n}\n.image-container[data-v-fb05e49c] {\r\n    width: 100%;\r\n    /* Set the desired width */\r\n    height: 0;\r\n    padding-bottom: 75%;\r\n    /* Set the desired aspect ratio (e.g., 4:3) */\r\n    position: relative;\r\n    overflow: hidden;\r\n    /* Ensure the image doesn't exceed the container size */\n}\n.fixed-image[data-v-fb05e49c] {\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    /* Fill the entire container horizontally */\r\n    height: 100%;\r\n    /* Fill the entire container vertically */\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    /* Maintain aspect ratio and cover the container */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fb05e49c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fb05e49c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fb05e49c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/About.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/About.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_fb05e49c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=fb05e49c&scoped=true& */ "./resources/js/components/About.vue?vue&type=template&id=fb05e49c&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/components/About.vue?vue&type=script&lang=js&");
/* harmony import */ var _About_vue_vue_type_style_index_0_id_fb05e49c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css& */ "./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_fb05e49c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_fb05e49c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fb05e49c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/About.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/About.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_fb05e49c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=style&index=0&id=fb05e49c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/About.vue?vue&type=template&id=fb05e49c&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/About.vue?vue&type=template&id=fb05e49c&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fb05e49c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fb05e49c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_fb05e49c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=fb05e49c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=template&id=fb05e49c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=template&id=fb05e49c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/About.vue?vue&type=template&id=fb05e49c&scoped=true& ***!
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
    "v-container",
    { staticClass: "parent", attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        {
          staticStyle: { "margin-left": "5%", "margin-right": "5%" },
          attrs: { flat: "", elevation: "5" },
        },
        [
          _vm.$vuetify.breakpoint.width > 900
            ? _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c("center", [
                            _c("h2", { staticClass: "text" }, [
                              _vm._v("My Background"),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "image-row", attrs: { "no-gutters": "" } },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "column",
                          attrs: {
                            cols: "12",
                            sm: "12",
                            md: "6",
                            lg: "6",
                            xl: "6",
                            xs: "12",
                          },
                        },
                        [
                          _c("div", { staticClass: "pa-3" }, [
                            _c("p", {
                              staticClass: "text-content",
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.formatText(_vm.MyBackground)
                                ),
                              },
                            }),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "column mr-3",
                          attrs: {
                            cols: "12",
                            sm: "12",
                            md: "6",
                            lg: "6",
                            xl: "6",
                            xs: "12",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "image-container" },
                            [
                              _vm.MyBackgroundImage
                                ? _c("v-img", {
                                    staticClass: "fixed-image",
                                    attrs: {
                                      tile: "",
                                      contain: "",
                                      src: _vm.getImageUrl(
                                        _vm.MyBackgroundImage
                                      ),
                                    },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _c(
                "v-card",
                { attrs: { flat: "", elevation: "5" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c("center", [
                            _c("h2", { staticClass: "text" }, [
                              _vm._v("My Background"),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "image-row", attrs: { "no-gutters": "" } },
                    [
                      _c("v-col", { staticClass: "column" }, [
                        _c("div", { staticClass: "pa-3" }, [
                          _c("p", {
                            staticClass: "text-content",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.formatText(_vm.MyBackground)
                              ),
                            },
                          }),
                        ]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { staticClass: "column" }, [
                        _c(
                          "div",
                          { staticClass: "image-container" },
                          [
                            _vm.MyBackgroundImage
                              ? _c("v-img", {
                                  staticClass: "fixed-image",
                                  attrs: {
                                    tile: "",
                                    contain: "",
                                    src: _vm.getImageUrl(_vm.MyBackgroundImage),
                                  },
                                })
                              : _vm._e(),
                          ],
                          1
                        ),
                      ]),
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
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticStyle: { "margin-left": "5%", "margin-right": "5%" },
          attrs: { flat: "", elevation: "5" },
        },
        [
          _vm.$vuetify.breakpoint.width > 900
            ? _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c("center", [
                            _c("h2", { staticClass: "text" }, [
                              _vm._v("My Approach"),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "image-row", attrs: { "no-gutters": "" } },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "column",
                          attrs: {
                            cols: "12",
                            sm: "12",
                            md: "6",
                            lg: "6",
                            xl: "6",
                            xs: "12",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "image-container" },
                            [
                              _vm.MyApproachImage
                                ? _c("v-img", {
                                    staticClass: "fixed-image",
                                    attrs: {
                                      tile: "",
                                      contain: "",
                                      src: _vm.getImageUrl(_vm.MyApproachImage),
                                    },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "column mr-3",
                          attrs: {
                            cols: "12",
                            sm: "12",
                            md: "6",
                            lg: "6",
                            xl: "6",
                            xs: "12",
                          },
                        },
                        [
                          _c("div", { staticClass: "pa-3" }, [
                            _c("p", {
                              staticClass: "text-content",
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.formatText(_vm.MyApproach)
                                ),
                              },
                            }),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _c(
                "v-card",
                { attrs: { flat: "", elevation: "5" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c("center", [
                            _c("h2", { staticClass: "text" }, [
                              _vm._v("My Approach"),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "image-row", attrs: { "no-gutters": "" } },
                    [
                      _c("v-col", { staticClass: "column" }, [
                        _c(
                          "div",
                          { staticClass: "image-container" },
                          [
                            _vm.MyApproachImage
                              ? _c("v-img", {
                                  staticClass: "fixed-image",
                                  attrs: {
                                    tile: "",
                                    contain: "",
                                    src: _vm.getImageUrl(_vm.MyApproachImage),
                                  },
                                })
                              : _vm._e(),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { staticClass: "column" }, [
                        _c("div", { staticClass: "pa-3" }, [
                          _c("p", {
                            staticClass: "text-content",
                            domProps: {
                              innerHTML: _vm._s(_vm.formatText(_vm.MyApproach)),
                            },
                          }),
                        ]),
                      ]),
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
      _c("br"),
      _vm._v(" "),
      _c(
        "center",
        [
          _c(
            "v-btn",
            {
              staticStyle: {
                "border-radius": "0",
                "background-color": "#415941",
                color: "white",
              },
              on: {
                click: function ($event) {
                  return _vm.goToServices()
                },
              },
            },
            [_vm._v("View Services")]
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