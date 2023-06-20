"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Maintenance_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Maintenance.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Maintenance.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tabItems: ['PASSWORD SETTING', 'FAQ'],
      tab: null,
      accountArray: [],
      faqArray: [],
      accountObject: {},
      faqObject: {},
      trigger: false,
      buttonText: 'CHANGE',
      AddEditFaqDialog: false,
      AddEditText: ''
    };
  },
  created: function created() {
    this.getFaq();
    this.getAccount();
  },
  methods: {
    getFaq: function getFaq() {
      var _this = this;
      axios.get("api/faq?Function=".concat('GETFAQ')).then(function (res) {
        _this.faqArray = res.data;
      });
    },
    getAccount: function getAccount() {
      var _this2 = this;
      var ID = this.$cookies.get('myCookie');
      axios.get("api/login?Function=".concat('GETACCOUNT', "&&ID=", ID)).then(function (res) {
        _this2.accountArray = res.data;
        _this2.accountObject = Object.assign({}, _this2.accountArray[0]);
      });
    },
    executeFunction: function executeFunction() {
      var _this3 = this;
      if (this.trigger) {
        axios.put('api/login/update', {
          Function: 'UPDATEUSER',
          data: this.accountObject
        }).then(function () {
          var ID = JSON.stringify(_this3.accountObject.ID);
          var expirationTime = 43200;
          _this3.$cookies.set('myCookie', ID, expirationTime);
          _this3.buttonText = "CHANGE";
          _this3.trigger = false;
          _this3.getAccount();
        });
      } else {
        this.buttonText = "SAVE";
        this.trigger = true;
      }
    },
    save: function save() {
      var _this4 = this;
      if (this.AddEditText == 'ADD FAQ') {
        axios.post('api/faq', {
          Function: 'ADDFAQ',
          data: this.faqObject
        }).then(function () {
          _this4.getFaq();
          _this4.closeDialog();
        });
      } else {
        axios.put('api/faq/update', {
          Function: 'UPDATEFAQ',
          data: this.faqObject
        }).then(function () {
          _this4.getFaq();
          _this4.closeDialog();
        });
      }
    },
    deleteFaq: function deleteFaq() {
      var _this5 = this;
      axios.put('api/faq/update', {
        Function: 'DELETEFAQ',
        data: this.faqObject
      }).then(function () {
        _this5.getFaq();
        _this5.closeDialog();
      });
    },
    openDialog: function openDialog(item, value) {
      if (value == 'ADD') {
        this.AddEditText = 'ADD FAQ';
        this.AddEditFaqDialog = true;
      } else {
        this.AddEditText = 'SAVE';
        this.faqObject = Object.assign({}, item);
        this.AddEditFaqDialog = true;
      }
    },
    closeDialog: function closeDialog() {
      this.faqObject = {};
      this.AddEditText = '';
      this.AddEditFaqDialog = false;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Maintenance.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Maintenance.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Maintenance_vue_vue_type_template_id_380c2c78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=template&id=380c2c78&scoped=true& */ "./resources/js/components/Maintenance.vue?vue&type=template&id=380c2c78&scoped=true&");
/* harmony import */ var _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=script&lang=js& */ "./resources/js/components/Maintenance.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maintenance_vue_vue_type_template_id_380c2c78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Maintenance_vue_vue_type_template_id_380c2c78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "380c2c78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Maintenance.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Maintenance.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Maintenance.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Maintenance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Maintenance.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Maintenance.vue?vue&type=template&id=380c2c78&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Maintenance.vue?vue&type=template&id=380c2c78&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_380c2c78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_380c2c78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_380c2c78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Maintenance.vue?vue&type=template&id=380c2c78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Maintenance.vue?vue&type=template&id=380c2c78&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Maintenance.vue?vue&type=template&id=380c2c78&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Maintenance.vue?vue&type=template&id=380c2c78&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        "v-layout",
        { attrs: { "align-center": "", "justify-center": "" } },
        [
          _c(
            "v-card",
            { attrs: { width: "100%" } },
            [
              _c(
                "v-tabs",
                {
                  attrs: { "fixed-tabs": "", "show-arrows": "" },
                  model: {
                    value: _vm.tab,
                    callback: function ($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab",
                  },
                },
                [
                  _c("v-tabs-slider"),
                  _vm._v(" "),
                  _vm._l(_vm.tabItems, function (item) {
                    return _c("v-tab", { key: item }, [_vm._v(_vm._s(item))])
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  attrs: { touchless: "" },
                  model: {
                    value: _vm.tab,
                    callback: function ($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab",
                  },
                },
                [
                  _c(
                    "v-tab-item",
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-layout",
                                { attrs: { wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    {
                                      attrs: {
                                        sm12: "",
                                        md6: "",
                                        "offset-md3": "",
                                      },
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        {
                                          attrs: { elevation: "4", light: "" },
                                        },
                                        [
                                          _c(
                                            "v-card-title",
                                            [
                                              _vm.$vuetify.breakpoint.width >
                                              1200
                                                ? _c(
                                                    "v-layout",
                                                    {
                                                      attrs: {
                                                        "align-center": "",
                                                        "justify-space-between":
                                                          "",
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "h4",
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mr-3",
                                                              attrs: {
                                                                large: "",
                                                                color: "black",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-shield-key-outline"
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(
                                                            "\n                                                    Change Username and Password\n                                                "
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  )
                                                : _c(
                                                    "v-layout",
                                                    {
                                                      attrs: {
                                                        "align-center": "",
                                                        "justify-center": "",
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "center",
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mr-3",
                                                              attrs: {
                                                                large: "",
                                                                color: "black",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-shield-key-outline"
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("h4", [
                                                            _vm._v(
                                                              "Change Username "
                                                            ),
                                                            _c("br"),
                                                            _vm._v(
                                                              " and Password"
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
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c(
                                            "v-card",
                                            { staticClass: "pa-3" },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  disabled: !_vm.trigger,
                                                  outlined: "",
                                                  label: "Username",
                                                  type: "text",
                                                },
                                                model: {
                                                  value:
                                                    _vm.accountObject.Username,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.accountObject,
                                                      "Username",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "accountObject.Username",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  disabled: !_vm.trigger,
                                                  outlined: "",
                                                  label: "Password",
                                                  type: "text",
                                                },
                                                model: {
                                                  value:
                                                    _vm.accountObject.Password,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.accountObject,
                                                      "Password",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "accountObject.Password",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    width: "30%",
                                                    color: _vm.trigger
                                                      ? "success"
                                                      : "primary",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.executeFunction()
                                                    },
                                                  },
                                                },
                                                [_vm._v(_vm._s(_vm.buttonText))]
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
                    "v-tab-item",
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-toolbar",
                                { attrs: { flat: "" } },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      on: {
                                        click: function ($event) {
                                          return _vm.openDialog(null, "ADD")
                                        },
                                      },
                                    },
                                    [
                                      _vm._v("ADD FAQ "),
                                      _c("v-icon", [_vm._v("mdi-plus-circle")]),
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
                            "v-simple-table",
                            {
                              staticClass: "mb-2",
                              staticStyle: { border: "1px solid black" },
                            },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v("Question")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Answer")]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.faqArray, function (item, index) {
                                  return _c(
                                    "tr",
                                    {
                                      key: index,
                                      on: {
                                        dblclick: function ($event) {
                                          return _vm.openDialog(item, "EDIT")
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "td",
                                        {
                                          attrs: {
                                            width:
                                              _vm.$vuetify.breakpoint.width >
                                              360
                                                ? "300px"
                                                : "50%",
                                          },
                                        },
                                        [_vm._v(_vm._s(item.Question))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          attrs: {
                                            width:
                                              _vm.$vuetify.breakpoint.width >
                                              360
                                                ? "500px"
                                                : "50%",
                                          },
                                        },
                                        [_vm._v(_vm._s(item.Answer))]
                                      ),
                                    ]
                                  )
                                }),
                                0
                              ),
                            ]
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
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "400px", persistent: "" },
          model: {
            value: _vm.AddEditFaqDialog,
            callback: function ($$v) {
              _vm.AddEditFaqDialog = $$v
            },
            expression: "AddEditFaqDialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "" } },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.AddEditText) +
                      "\n                "
                  ),
                  _c("V-spacer"),
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
                    [_c("v-icon", [_vm._v("mdi-close-circle")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "pa-2", attrs: { flat: "" } },
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", dense: "", label: "Question" },
                    model: {
                      value: _vm.faqObject.Question,
                      callback: function ($$v) {
                        _vm.$set(_vm.faqObject, "Question", $$v)
                      },
                      expression: "faqObject.Question",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      "auto-grow": "",
                      outlined: "",
                      dense: "",
                      "row-height": "15",
                      label: "Answer",
                    },
                    model: {
                      value: _vm.faqObject.Answer,
                      callback: function ($$v) {
                        _vm.$set(_vm.faqObject, "Answer", $$v)
                      },
                      expression: "faqObject.Answer",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-1",
                      attrs: { block: "", color: "success" },
                      on: {
                        click: function ($event) {
                          return _vm.save()
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.AddEditText))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mt-1",
                      attrs: { block: "", color: "error" },
                      on: {
                        click: function ($event) {
                          return _vm.deleteFaq()
                        },
                      },
                    },
                    [_vm._v("DELETE")]
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