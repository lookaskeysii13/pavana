"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomizeHomePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=script&lang=js& ***!
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
      imagesArray: [],
      selectionArray: [],
      imageObject: {},
      imageName: '',
      file: '',
      isSelecting: false,
      hover: false,
      overlay: false,
      SelectionDialog: false,
      notificationSystem: {
        options: {
          success: {
            position: "topCenter",
            timeout: 3000
          },
          error: {
            position: "topCenter",
            timeout: 3000
          },
          warning: {
            position: "topCenter",
            timeout: 3000
          },
          info: {
            position: "topCenter",
            timeout: 3000
          },
          infoBeforePrinting: {
            position: "topCenter",
            timeout: 5000
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.getImages();
    this.getSelection();
  },
  methods: {
    setImageAs: function setImageAs(item) {
      // console.log(item);
      this.imageObject = Object.assign({}, item);
      this.SelectionDialog = true;
    },
    closeDialog: function closeDialog() {
      this.imageObject = {};
      this.SelectionDialog = false;
    },
    getSelection: function getSelection() {
      var _this = this;
      axios.get('api/getSelection').then(function (res) {
        _this.selectionArray = res.data;
      });
    },
    saveImageUpdateLocation: function saveImageUpdateLocation() {
      var _this2 = this;
      if (this.imageObject.LocationID) {
        axios.post('api/updateImageLocation', {
          data: this.imageObject
        }).then(function () {
          _this2.imageObject = {};
          _this2.getImages();
          _this2.SelectionDialog = false;
        });
      } else {
        this.$toast.error(' ', 'ERROR', this.notificationSystem.options.error);
      }
    },
    uploadImage: function uploadImage() {
      var _this3 = this;
      if (this.$refs.image.files[0] && this.imageName) {
        var formData = new FormData();
        formData.append('image', this.$refs.image.files[0]);
        formData.append('imageName', this.imageName);
        axios.post('api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
          console.log(response.data);
          _this3.imageName = '', _this3.file = '', _this3.isSelecting = false, _this3.getImages();
        })["catch"](function (error) {
          console.error(error);
        });
      } else {
        this.$toast.error('PLEASE SELECT OR INPUT NAME ON THE IMAGE FIRST!', '');
      }
    },
    handleFileImport: function handleFileImport() {
      var _this4 = this;
      this.isSelecting = true;
      window.addEventListener('focus', function () {
        _this4.isSelecting = false;
      }, {
        once: true
      });
      this.$refs.image.click();
    },
    onChange: function onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
    },
    getImages: function getImages() {
      var _this5 = this;
      axios.get('api/getAllImages').then(function (response) {
        _this5.imagesArray = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
    },
    getImageUrl: function getImageUrl(image) {
      return "images/".concat(image);
    },
    showID: function showID(value) {
      console.log(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#ImageStyle[data-v-24e5ee16]{\n    width:200px;\n    height:200px;\n    border:2px solid black;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_style_index_0_id_24e5ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_style_index_0_id_24e5ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_style_index_0_id_24e5ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/CustomizeHomePage.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CustomizeHomePage.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomizeHomePage_vue_vue_type_template_id_24e5ee16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true& */ "./resources/js/components/CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true&");
/* harmony import */ var _CustomizeHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomizeHomePage.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomizeHomePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _CustomizeHomePage_vue_vue_type_style_index_0_id_24e5ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css& */ "./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomizeHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomizeHomePage_vue_vue_type_template_id_24e5ee16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomizeHomePage_vue_vue_type_template_id_24e5ee16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "24e5ee16",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomizeHomePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomizeHomePage.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CustomizeHomePage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeHomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_style_index_0_id_24e5ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=style&index=0&id=24e5ee16&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_template_id_24e5ee16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_template_id_24e5ee16_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeHomePage_vue_vue_type_template_id_24e5ee16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeHomePage.vue?vue&type=template&id=24e5ee16&scoped=true& ***!
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
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.uploadImage.apply(null, arguments)
            },
          },
        },
        [
          _c("input", {
            ref: "image",
            staticClass: "d-none",
            attrs: { type: "file", accept: "image/*" },
            on: { change: _vm.onChange },
          }),
          _vm._v(" "),
          _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            [
              _c(
                "v-col",
                { staticClass: "ma-3" },
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", disabled: "" },
                    model: {
                      value: _vm.file.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.file, "name", $$v)
                      },
                      expression: "file.name",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "ma-3", attrs: { cols: "2" } },
                [
                  _c("v-btn", { on: { click: _vm.handleFileImport } }, [
                    _vm._v("Select image file"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "ma-3", attrs: { cols: "1" } },
                [
                  _c("v-btn", { attrs: { type: "submit" } }, [
                    _vm._v("Upload"),
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
      _c(
        "v-card",
        [
          _c(
            "v-row",
            { attrs: { "no-gutters": "" } },
            _vm._l(_vm.imagesArray, function (item, index) {
              return _c(
                "v-col",
                {
                  key: index,
                  staticClass: "d-flex child-flex mx-auto",
                  attrs: { cols: "3" },
                },
                [
                  _c("v-hover", {
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function (ref) {
                            var hover = ref.hover
                            return [
                              _c(
                                "v-card",
                                [
                                  _c("v-img", {
                                    staticStyle: { border: "2px solid black" },
                                    attrs: {
                                      height: "300px",
                                      src: _vm.getImageUrl(item.filename),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-fade-transition",
                                    [
                                      hover
                                        ? _c(
                                            "v-overlay",
                                            {
                                              attrs: {
                                                absolute: "",
                                                color: "#036358",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.setImageAs(
                                                        item
                                                      )
                                                    },
                                                  },
                                                },
                                                [_vm._v("Set as")]
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
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
            }),
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", width: "300px" },
          model: {
            value: _vm.SelectionDialog,
            callback: function ($$v) {
              _vm.SelectionDialog = $$v
            },
            expression: "SelectionDialog",
          },
        },
        [
          _c(
            "v-card",
            { staticClass: "pa-3", attrs: { width: "300px" } },
            [
              _c(
                "v-toolbar",
                { attrs: { dense: "", flat: "" } },
                [
                  _vm._v("\n                SET IMAGE AS\n                "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function ($event) {
                          return _vm.closeDialog()
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("center", [
                _c("img", {
                  attrs: {
                    id: "ImageStyle",
                    src: _vm.getImageUrl(_vm.imageObject.filename),
                  },
                }),
                _vm._v(" "),
                _c("h4", [_vm._v(_vm._s(_vm.imageObject.filename))]),
              ]),
              _vm._v(" "),
              _c("v-autocomplete", {
                attrs: {
                  outlined: "",
                  dense: "",
                  items: _vm.selectionArray,
                  "item-text": "ImageLocName",
                  "item-value": "ImageLocID",
                  label: "Image Location",
                  "hide-details": "",
                },
                model: {
                  value: _vm.imageObject.LocationID,
                  callback: function ($$v) {
                    _vm.$set(_vm.imageObject, "LocationID", $$v)
                  },
                  expression: "imageObject.LocationID",
                },
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { block: "", color: "success" },
                  on: { click: _vm.saveImageUpdateLocation },
                },
                [_vm._v("SAVE")]
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