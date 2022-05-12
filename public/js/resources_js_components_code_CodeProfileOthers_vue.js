"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_code_CodeProfileOthers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/CodeProfileOthers.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/CodeProfileOthers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      posts: ''
    };
  },
  mounted: function mounted() {
    this.getAllCode();
  },
  methods: {
    foo: function foo() {
      console.log("Usuario ver: " + this.$route.params.id);
    },
    getAllCode: function getAllCode() {
      var _this = this;

      var idUsu = this.$route.params.id;
      var data = new FormData();
      data.append('idUsu', this.$route.params.id);
      axios.post('/api/getPostOther', data).then(function (res) {
        console.log(res);

        if (res.status) {
          _this.posts = res.data.data;
        } else {
          _this.$router.push({
            name: 'permissError',
            params: {
              msg: res.data.error
            }
          });
        }
      })["catch"](function (err) {
        console.log("Error CodeProfile.vue getAllCode");
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/code/CodeProfileOthers.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/code/CodeProfileOthers.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeProfileOthers_vue_vue_type_template_id_5e5c9748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeProfileOthers.vue?vue&type=template&id=5e5c9748& */ "./resources/js/components/code/CodeProfileOthers.vue?vue&type=template&id=5e5c9748&");
/* harmony import */ var _CodeProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeProfileOthers.vue?vue&type=script&lang=js& */ "./resources/js/components/code/CodeProfileOthers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CodeProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodeProfileOthers_vue_vue_type_template_id_5e5c9748___WEBPACK_IMPORTED_MODULE_0__.render,
  _CodeProfileOthers_vue_vue_type_template_id_5e5c9748___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/code/CodeProfileOthers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/code/CodeProfileOthers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/code/CodeProfileOthers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodeProfileOthers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/CodeProfileOthers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/code/CodeProfileOthers.vue?vue&type=template&id=5e5c9748&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/code/CodeProfileOthers.vue?vue&type=template&id=5e5c9748& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeProfileOthers_vue_vue_type_template_id_5e5c9748___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeProfileOthers_vue_vue_type_template_id_5e5c9748___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CodeProfileOthers_vue_vue_type_template_id_5e5c9748___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodeProfileOthers.vue?vue&type=template&id=5e5c9748& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/CodeProfileOthers.vue?vue&type=template&id=5e5c9748&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/CodeProfileOthers.vue?vue&type=template&id=5e5c9748&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/CodeProfileOthers.vue?vue&type=template&id=5e5c9748& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "profile" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "posts" } },
      [
        _c("h1", { staticClass: "title" }, [
          _vm._v("Components from " + _vm._s(this.$route.params.id)),
        ]),
        _vm._v(" "),
        _vm._l(_vm.posts, function (post) {
          return _c("div", { key: post.idPost, staticClass: "post" }, [
            _c(
              "button",
              {
                on: {
                  click: function ($event) {
                    return _vm.showCode(post.post.idPost)
                  },
                },
              },
              [
                post.img != null
                  ? _c("img", {
                      staticClass: "post-img",
                      attrs: { src: "storage/" + post.img, alt: "" },
                    })
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "post_data" }, [
              _c("div", { staticClass: "post_data-name" }, [
                _c("h3", [_vm._v(_vm._s(post.postName))]),
              ]),
            ]),
          ])
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "menu" } }, [
      _c("h1", [_vm._v("Opciones¿?")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);