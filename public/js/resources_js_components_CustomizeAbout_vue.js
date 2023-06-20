"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CustomizeAbout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeAbout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeAbout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      textArray: [],
      textObject: {},
      EditTextDialog: false,
      notificationSystem: {
        options: {
          success: {
            position: "bottomLeft",
            timeout: 3000
          },
          error: {
            position: "bottomLeft",
            timeout: 3000
          },
          warning: {
            position: "bottomLeft",
            timeout: 3000
          },
          info: {
            position: "bottomLeft",
            timeout: 3000
          },
          infoBeforePrinting: {
            position: "bottomLeft",
            timeout: 5000
          }
        }
      }
    };
  },
  created: function created() {
    this.getText();
  },
  methods: {
    getText: function getText() {
      var _this = this;
      this.textArray = [];
      axios.get("api/master?Function=".concat('GETTEXT')).then(function (res) {
        res.data.filter(function (rec) {
          if (rec.TextTypeID == '00003' || rec.TextTypeID == '00004' || rec.TextTypeID == '00005') {
            _this.textArray.push(rec);
          }
        });
      });
    },
    saveText: function saveText() {
      var _this2 = this;
      if (this.textObject.TextContent) {
        axios.put('api/master/update', {
          Function: 'UPDATETEXT',
          data: this.textObject
        }).then(function () {
          _this2.getText();
        });
      } else {
        this.$toast.error('Please input text!', 'Error', this.notificationSystem.options.error);
      }
    },
    formatText: function formatText(text) {
      return text.replace(/\n/g, '<br>');
    },
    openEditTextDialog: function openEditTextDialog(data) {
      this.textObject = Object.assign({}, data);
      this.EditTextDialog = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CustomizeAbout.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/CustomizeAbout.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomizeAbout_vue_vue_type_template_id_3700af35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true& */ "./resources/js/components/CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true&");
/* harmony import */ var _CustomizeAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomizeAbout.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomizeAbout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomizeAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomizeAbout_vue_vue_type_template_id_3700af35_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomizeAbout_vue_vue_type_template_id_3700af35_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3700af35",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomizeAbout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomizeAbout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CustomizeAbout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeAbout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeAbout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeAbout_vue_vue_type_template_id_3700af35_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeAbout_vue_vue_type_template_id_3700af35_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizeAbout_vue_vue_type_template_id_3700af35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CustomizeAbout.vue?vue&type=template&id=3700af35&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        "v-card",
        { attrs: { height: "600px" } },
        [
          _c(
            "v-tabs",
            [
              _vm._l(_vm.textArray, function (item, index) {
                return _c("v-tab", { key: index, staticClass: "mx-auto" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(item.TextType) +
                      " TEXT\n            "
                  ),
                ])
              }),
              _vm._v(" "),
              _vm._l(_vm.textArray, function (item, index) {
                return _c(
                  "v-tab-item",
                  { key: index },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "ma-4 pa-4",
                        staticStyle: { border: "1px solid black" },
                        attrs: { height: "400px", flat: "" },
                      },
                      [
                        _c("p", {
                          domProps: {
                            innerHTML: _vm._s(_vm.formatText(item.TextContent)),
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function ($event) {
                                return _vm.openEditTextDialog(item)
                              },
                            },
                          },
                          [_vm._v("EDIT TEXT")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "" },
          model: {
            value: _vm.EditTextDialog,
            callback: function ($$v) {
              _vm.EditTextDialog = $$v
            },
            expression: "EditTextDialog",
          },
        },
        [
          _c(
            "v-card",
            { staticClass: "pa-3", attrs: { flat: "" } },
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "" } },
                [
                  _c("v-card-title", [_vm._v("EDIT TEXT")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function ($event) {
                          ;(_vm.EditTextDialog = !_vm.EditTextDialog),
                            (_vm.textObject = {})
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
              _c("v-textarea", {
                attrs: {
                  dense: "",
                  outlined: "",
                  "auto-grow": "",
                  counter: "",
                  maxlength: "500",
                },
                model: {
                  value: _vm.textObject.TextContent,
                  callback: function ($$v) {
                    _vm.$set(_vm.textObject, "TextContent", $$v)
                  },
                  expression: "textObject.TextContent",
                },
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "success", block: "" },
                  on: { click: _vm.saveText },
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