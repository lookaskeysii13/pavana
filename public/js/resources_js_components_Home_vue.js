(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      WelcomeText: '',
      SubWelcomeText: '',
      coverImage: '',
      aboutImage: '',
      AboutText: '',
      PhoneNumber: '',
      TelephoneNumber: '',
      Email: '',
      Address: '',
      messageObject: {},
      imagesArray: [],
      messageArray: [],
      servicesArray: [],
      notificationSystem: {
        options: {
          successWeb: {
            position: "bottomLeft",
            timeout: 3000
          },
          successPhone: {
            position: "topCenter",
            timeout: 3000
          },
          errorPhone: {
            position: "topCenter",
            timeout: 3000
          },
          errorWeb: {
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
  methods: {
    goToServices: function goToServices() {
      this.$router.push('/services');
    },
    getText: function getText() {
      var _this = this;
      axios.get("api/master?Function=".concat('GETTEXT')).then(function (res) {
        res.data.filter(function (rec) {
          if (rec.TextTypeID == '00003') {
            _this.AboutText = rec.TextContent;
          }
        });
      });
    },
    getImages: function getImages() {
      var _this2 = this;
      axios.get('api/getImages').then(function (response) {
        response.data.filter(function (rec) {
          if (rec.ImageLocID == 1) {
            _this2.coverImage = rec.ImageName;
          } else if (rec.ImageLocID == 2) {
            _this2.aboutImage = rec.ImageName;
          }
        });
      })["catch"](function (error) {
        console.error(error);
      });
    },
    formatText: function formatText(text) {
      return text.replace(/\n/g, '<br>');
    },
    getImageUrl: function getImageUrl(image) {
      return "images/".concat(image);
    },
    // getMessage() {
    //     axios.get(`api/message?Function=${'GETMESSAGE'}`).then((res) => {
    //         this.messageArray = res.data
    //     })
    // },
    getContact: function getContact() {
      var _this3 = this;
      axios.get("api/master?Function=".concat('GETCONTACT')).then(function (res) {
        res.data.filter(function (rec) {
          if (rec.ContactTypeID == '00001') {
            _this3.PhoneNumber = rec.ContactDetail;
          } else if (rec.ContactTypeID == '00002') {
            _this3.TelephoneNumber = rec.ContactDetail;
          } else if (rec.ContactTypeID == '00003') {
            _this3.Email = rec.ContactDetail;
          } else if (rec.ContactTypeID == '00004') {
            _this3.Address = rec.ContactDetail;
          }
        });
      });
    },
    getServices: function getServices() {
      var _this4 = this;
      axios.get("api/services?Function=".concat('GETSERVICES')).then(function (res) {
        _this4.servicesArray = res.data;
      });
    },
    checkImage: function checkImage() {
      return __webpack_require__("./public/images sync recursive ^\\.\\/.*$")("./".concat(this.coverImage));
    },
    submitMessage: function submitMessage() {
      var _this5 = this;
      if (this.messageObject.Firstname && this.messageObject.Lastname && this.messageObject.Email && this.messageObject.ContactNumber) {
        axios.post('api/message', {
          Function: 'SENDMESSAGE',
          data: this.messageObject
        }).then(function () {
          _this5.messageObject = {};
          if ($vuetify.breakpoint.width > 900) {
            _this5.$toast.success(' ', 'MESSAGE SENT!', _this5.notificationSystem.options.successWeb);
          } else {
            _this5.$toast.success(' ', 'MESSAGE SENT!', _this5.notificationSystem.options.successPhone);
          }
        });
      } else {
        if (this.$vuetify.breakpoint.width > 900) {
          this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorWeb);
        } else {
          this.$toast.error(' ', 'PLEASE PROVIDE THE REQUIRED DATA', this.notificationSystem.options.errorPhone);
        }
      }
    }
  },
  mounted: function mounted() {
    this.getImages();
    this.getServices();
    // this.getMessage();
    this.getContact();
    this.getText();
    this.Servicesinterval = setInterval(this.getServices, 600000);
    // this.MessageInterval = setInterval(this.getMessage, 600000)
    this.Contactinterval = setInterval(this.getContact, 60000);
    this.Imagesinterval = setInterval(this.getImages, 60000);
    this.Textinterval = setInterval(this.getText, 60000);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.mainContainer[data-v-f2b6376c] {\r\n    /* background-color: #e5fbf1; */\r\n    height: 100%;\r\n    padding: 0;\n}\n.transparent-card[data-v-f2b6376c] {\r\n    background-color: transparent !important;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\n}\n.image-row[data-v-f2b6376c] {\r\n    display: flex;\r\n    flex-wrap: wrap;\n}\n.column[data-v-f2b6376c] {\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\n}\n.image-container[data-v-f2b6376c] {\r\n    width: 100%;\r\n    /* Set the desired width */\r\n    height: 0;\r\n    padding-bottom: 75%;\r\n    /* Set the desired aspect ratio (e.g., 4:3) */\r\n    position: relative;\r\n    overflow: hidden;\r\n    /* Ensure the image doesn't exceed the container size */\n}\n.fixed-image[data-v-f2b6376c] {\r\n    \r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    /* Fill the entire container horizontally */\r\n    height: 100%;\r\n    /* Fill the entire container vertically */\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    /* Maintain aspect ratio and cover the container */\n}\n.text-content[data-v-f2b6376c] {\r\n    padding: 1rem;\n}\n.text-content p[data-v-f2b6376c] {\r\n    font-size: 16px;\r\n    line-height: 1.5;\n}\n@media (max-width: 600px) {\n.text-content p[data-v-f2b6376c] {\r\n        font-size: 14px;\n}\n}\n@media (min-width: 601px) and (max-width: 960px) {\r\n\r\n    /* Adjust font size for resizing Chrome browser */\n.text-content[data-v-f2b6376c] {\r\n        font-size: 18px;\n}\n}\n.cover-photo[data-v-f2b6376c] {\r\n    max-width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    position: relative;\n}\n.cover-photo .servicesBtn[data-v-f2b6376c] {\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    background-color: #555;\r\n    color: white;\r\n    font-size: 16px;\r\n    padding: 12px 24px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    text-align: center;\n}\n@media (max-width: 1200px) {\n.cover-photo .servicesBtn[data-v-f2b6376c] {\r\n        font-size: 12px;\r\n        padding: 10px 20px;\r\n        top: 80%;\n}\n}\n.cover-photo img[data-v-f2b6376c] {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\n}\n#Aboutcontainer[data-v-f2b6376c] {\r\n    /* border: 1px solid black; */\r\n    background-color: #ced6ce;\n}\n#ServicesContainer[data-v-f2b6376c] {\r\n    background-color: #f8e4d4;\n}\n.carousel-image-container[data-v-f2b6376c] {\r\n    height: 100%;\r\n    /* or adjust the desired height */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\n}\n#ContactContainer[data-v-f2b6376c] {\r\n    background-color: #f8e4d4;\n}\n.ContactvCard[data-v-f2b6376c] {\r\n    background-color: #fff4ec;\r\n    padding: 2%;\r\n    /* border: 1px solid black; */\n}\n.overlay-button[data-v-f2b6376c] {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    text-align: center;\n}\n@media(max-width: 768px) {\n.overlay-button[data-v-f2b6376c] {\r\n        bottom: 50px;\r\n        left: 20px;\n}\n}\r\n\r\n/* For all */\n.text[data-v-f2b6376c] {\r\n\r\n    font-weight: 400;\r\n    margin-left: 20px;\n}\np[data-v-f2b6376c] {\r\n    margin-left: 20px;\r\n    margin-right: 20px;\n}\r\n\r\n/* .my-container {\r\n\r\n        display: flex;\r\n        justify-content: center; */\r\n/* Center items horizontally */\r\n/* align-items: center; */\r\n/* Center items vertically */\r\n/* height: 10vh;\r\n        font-family: Copperplate, Papyrus, fantasy;\r\n\r\n    } */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/images/BackgroundImage.png":
/*!*******************************************!*\
  !*** ./public/images/BackgroundImage.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "/images/BackgroundImage.png?e8c24a46c2af05d884b29af147ccd8db";

/***/ }),

/***/ "./public/images/ErrorIcon.png":
/*!*************************************!*\
  !*** ./public/images/ErrorIcon.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "/images/ErrorIcon.png?1f7d646e069875cc2d35bf40391af2f5";

/***/ }),

/***/ "./public/images/I2023060800000.jpg":
/*!******************************************!*\
  !*** ./public/images/I2023060800000.jpg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/I2023060800000.jpg?19cac15815fb7b1f200bbf0394133947";

/***/ }),

/***/ "./public/images/I2023060800001.jpg":
/*!******************************************!*\
  !*** ./public/images/I2023060800001.jpg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/I2023060800001.jpg?b9f6f583cad5230b9f4a7b5aba2b57af";

/***/ }),

/***/ "./public/images/LOGO4LOGIN.png":
/*!**************************************!*\
  !*** ./public/images/LOGO4LOGIN.png ***!
  \**************************************/
/***/ ((module) => {

module.exports = "/images/LOGO4LOGIN.png?b6f0285b7d999a2e679e31e356abfa2b";

/***/ }),

/***/ "./public/images/PAVANA-LOGO.jpg":
/*!***************************************!*\
  !*** ./public/images/PAVANA-LOGO.jpg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "/images/PAVANA-LOGO.jpg?d11e35981768ab49ebe3eb6fdbe8f387";

/***/ }),

/***/ "./public/images/PAVANA.png":
/*!**********************************!*\
  !*** ./public/images/PAVANA.png ***!
  \**********************************/
/***/ ((module) => {

module.exports = "/images/PAVANA.png?de74fbcb30ba4cebad09dfa0fe79fc05";

/***/ }),

/***/ "./public/images/Portrait.jpg":
/*!************************************!*\
  !*** ./public/images/Portrait.jpg ***!
  \************************************/
/***/ ((module) => {

module.exports = "/images/Portrait.jpg?bba5714ed8c13b1336e467be73bfd758";

/***/ }),

/***/ "./public/images/SpaLogo.png":
/*!***********************************!*\
  !*** ./public/images/SpaLogo.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "/images/SpaLogo.png?dc06ed411e82e20bade3f9e43ae1eb8c";

/***/ }),

/***/ "./public/images/about.png":
/*!*********************************!*\
  !*** ./public/images/about.png ***!
  \*********************************/
/***/ ((module) => {

module.exports = "/images/about.png?9c77b7a26f41e09aaea3a49216545271";

/***/ }),

/***/ "./public/images/cover.jpg":
/*!*********************************!*\
  !*** ./public/images/cover.jpg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "/images/cover.jpg?651514fb7e66d79398ca28fdd6cd9c45";

/***/ }),

/***/ "./public/images/customize.png":
/*!*************************************!*\
  !*** ./public/images/customize.png ***!
  \*************************************/
/***/ ((module) => {

module.exports = "/images/customize.png?804b6353624eb53fb2b1807d032c64bf";

/***/ }),

/***/ "./public/images/kylie.jpg":
/*!*********************************!*\
  !*** ./public/images/kylie.jpg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "/images/kylie.jpg?ccc6d66793e62fd042a06aadfa68f83b";

/***/ }),

/***/ "./public/images/schedule.png":
/*!************************************!*\
  !*** ./public/images/schedule.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "/images/schedule.png?46c9cd767980c4a37f1ea01a0625e711";

/***/ }),

/***/ "./public/images/services.png":
/*!************************************!*\
  !*** ./public/images/services.png ***!
  \************************************/
/***/ ((module) => {

module.exports = "/images/services.png?e2e9de8cd5e0d40bb3acdda774324ca8";

/***/ }),

/***/ "./public/images/test.png":
/*!********************************!*\
  !*** ./public/images/test.png ***!
  \********************************/
/***/ ((module) => {

module.exports = "/images/test.png?bbac5d45c0e85a5b298064ce2954d751";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f2b6376c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_f2b6376c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&id=f2b6376c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "mainContainer", attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        { staticClass: "transparent-card" },
        [
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _vm.coverImage
            ? _c(
                "div",
                { staticClass: "cover-photo" },
                [
                  _c("picture", [
                    _c("source", {
                      attrs: {
                        media: "(max-width: 768px)",
                        srcset: _vm.checkImage(),
                      },
                    }),
                    _vm._v(" "),
                    _c("source", {
                      attrs: {
                        media: "(min-width: 769px)",
                        srcset: _vm.checkImage(),
                      },
                    }),
                    _vm._v(" "),
                    _c("img", {
                      attrs: { src: _vm.checkImage(), alt: "Cover Photo" },
                    }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "center",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "servicesBtn",
                          attrs: {
                            color: "#415941",
                            "x-large": "",
                            width: "200px",
                            height: "70px",
                            dark: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.goToServices()
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\r\n                    VIEW SERVICES\r\n                "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticClass: "mb-3",
              attrs: { id: "AboutContainer", fluid: "", flat: "" },
            },
            [
              _vm.$vuetify.breakpoint.width > 900
                ? _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "image-row",
                          attrs: { "no-gutters": "" },
                        },
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
                              _c("div", [
                                _c("h1", { staticClass: "text" }, [
                                  _vm._v("About"),
                                ]),
                                _vm._v(" "),
                                _c("p", {
                                  staticClass: "text-content",
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.formatText(_vm.AboutText)
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
                                  _vm.aboutImage
                                    ? _c("v-img", {
                                        staticClass: "fixed-image",
                                        attrs: {
                                          tile: "",
                                          contain: "",
                                          src: _vm.getImageUrl(_vm.aboutImage),
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
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "image-row",
                          attrs: { "no-gutters": "" },
                        },
                        [
                          _c("v-col", { staticClass: "column" }, [
                            _c("div", [
                              _c("h1", { staticClass: "text" }, [
                                _vm._v("About"),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("p", {
                                staticClass: "text-content",
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.formatText(_vm.AboutText)
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
                                _vm.aboutImage
                                  ? _c("v-img", {
                                      staticClass: "fixed-image",
                                      attrs: {
                                        tile: "",
                                        contain: "",
                                        src: _vm.getImageUrl(_vm.aboutImage),
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
          _c(
            "v-container",
            { attrs: { id: "ServicesContainer", fluid: "" } },
            [
              _c("center", [
                _c("h1", { staticClass: "text" }, [_vm._v("Services")]),
              ]),
              _vm._v(" "),
              _c(
                "v-carousel",
                { attrs: { cycle: "" } },
                _vm._l(_vm.servicesArray, function (item, index) {
                  return _c(
                    "v-carousel-item",
                    { key: index },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "carousel-image-container",
                          attrs: { flat: "" },
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: _vm.getImageUrl(item.ImageName),
                              alt: "Carousel Item",
                              contain: "",
                              height: "auto",
                              width: "100%",
                            },
                          }),
                        ]
                      ),
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
            "v-card",
            {
              staticStyle: { "background-color": "#fff6eb" },
              attrs: { flat: "" },
            },
            [
              _c("center", [
                _c("h1", { staticClass: "text" }, [_vm._v("Feedbacks")]),
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "v-row",
                {
                  staticStyle: { "text-align": "justified" },
                  attrs: { "no-gutters": "" },
                },
                _vm._l(_vm.messageArray, function (items, index) {
                  return _c(
                    "v-col",
                    {
                      key: index,
                      attrs: {
                        cols: "12",
                        sm: "12",
                        md: "6",
                        lg: "4",
                        xl: "6",
                        xs: "12",
                      },
                    },
                    [
                      _c("p", [_vm._v(_vm._s(items.Message))]),
                      _vm._v(" "),
                      _c("p", [_vm._v("- " + _vm._s(items.Name))]),
                    ]
                  )
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { id: "ContactContainer", fluid: "" } },
            [
              _c(
                "v-card",
                { staticClass: "ContactvCard", attrs: { flat: "" } },
                [
                  _c("center", [
                    _c("br"),
                    _vm._v(" "),
                    _c("h1", { staticClass: "text" }, [
                      _vm._v("CONTACT US TODAY"),
                    ]),
                    _vm._v(" "),
                    _c("br"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "ContactvCard", attrs: { flat: "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
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
                          _c("v-text-field", {
                            attrs: { label: "Given Name", "hide-details": "" },
                            model: {
                              value: _vm.messageObject.Firstname,
                              callback: function ($$v) {
                                _vm.$set(_vm.messageObject, "Firstname", $$v)
                              },
                              expression: "messageObject.Firstname",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
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
                          _c("v-text-field", {
                            attrs: { label: "Last Name", "hide-details": "" },
                            model: {
                              value: _vm.messageObject.Lastname,
                              callback: function ($$v) {
                                _vm.$set(_vm.messageObject, "Lastname", $$v)
                              },
                              expression: "messageObject.Lastname",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
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
                          _c("v-text-field", {
                            attrs: { label: "Email", "hide-details": "" },
                            model: {
                              value: _vm.messageObject.Email,
                              callback: function ($$v) {
                                _vm.$set(_vm.messageObject, "Email", $$v)
                              },
                              expression: "messageObject.Email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
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
                          _c("v-text-field", {
                            attrs: {
                              label: "Contact Number",
                              "hide-details": "",
                            },
                            model: {
                              value: _vm.messageObject.ContactNumber,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.messageObject,
                                  "ContactNumber",
                                  $$v
                                )
                              },
                              expression: "messageObject.ContactNumber",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          attrs: {
                            cols: "12",
                            sm: "12",
                            md: "12",
                            lg: "12",
                            xl: "12",
                            xs: "12",
                          },
                        },
                        [
                          _c("v-textarea", {
                            attrs: {
                              label: "Questions or Comment",
                              "auto-grow": "",
                              "row-height": "24",
                            },
                            model: {
                              value: _vm.messageObject.Message,
                              callback: function ($$v) {
                                _vm.$set(_vm.messageObject, "Message", $$v)
                              },
                              expression: "messageObject.Message",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "center",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "#415941",
                                    "x-large": "",
                                    width: "300px",
                                    height: "100px",
                                    dark: "",
                                  },
                                  on: { click: _vm.submitMessage },
                                },
                                [
                                  _vm._v(
                                    "\r\n                                SUBMIT\r\n                            "
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
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          attrs: {
                            cols: "12",
                            sm: "12",
                            md: "12",
                            lg: "12",
                            xl: "12",
                            xs: "12",
                          },
                        },
                        [
                          _c("center", [
                            _c("h1", { staticClass: "text" }, [
                              _vm._v("Business Hours:"),
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Monday-Sunday: 8:00am - 2:00am")]),
                            _vm._v(" "),
                            _c("h1", { staticClass: "text" }, [
                              _vm._v("Pavana Massage and Spa"),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Cellphone No: " + _vm._s(_vm.PhoneNumber)
                              ),
                              _c("br"),
                              _vm._v(
                                "\r\n                                Landline No: " +
                                  _vm._s(_vm.TelephoneNumber)
                              ),
                              _c("br"),
                              _vm._v(
                                "\r\n                                Email: " +
                                  _vm._s(_vm.Email)
                              ),
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



/***/ }),

/***/ "./public/images sync recursive ^\\.\\/.*$":
/*!**************************************!*\
  !*** ./public/images/ sync ^\.\/.*$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./BackgroundImage.png": "./public/images/BackgroundImage.png",
	"./ErrorIcon.png": "./public/images/ErrorIcon.png",
	"./I2023060800000.jpg": "./public/images/I2023060800000.jpg",
	"./I2023060800001.jpg": "./public/images/I2023060800001.jpg",
	"./LOGO4LOGIN.png": "./public/images/LOGO4LOGIN.png",
	"./PAVANA-LOGO.jpg": "./public/images/PAVANA-LOGO.jpg",
	"./PAVANA.png": "./public/images/PAVANA.png",
	"./Portrait.jpg": "./public/images/Portrait.jpg",
	"./SpaLogo.png": "./public/images/SpaLogo.png",
	"./about.png": "./public/images/about.png",
	"./cover.jpg": "./public/images/cover.jpg",
	"./customize.png": "./public/images/customize.png",
	"./kylie.jpg": "./public/images/kylie.jpg",
	"./schedule.png": "./public/images/schedule.png",
	"./services.png": "./public/images/services.png",
	"./test.png": "./public/images/test.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./public/images sync recursive ^\\.\\/.*$";

/***/ })

}]);