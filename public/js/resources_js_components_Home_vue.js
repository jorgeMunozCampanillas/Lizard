"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      posts: '',
      likes: []
    };
  },
  mounted: function mounted() {
    this.getAuthLikes();
    this.getAllCode();
  },
  methods: {
    getAllCode: function getAllCode() {
      var _this = this;

      axios.get('/api/code').then(function (res) {
        _this.posts = res.data;
      })["catch"](function (err) {
        console.log("Error Home.vue getAllCode");
        console.log(err.data);
      });
    },
    getAuthLikes: function getAuthLikes() {
      var _this2 = this;

      axios.get('/api/likesGiven').then(function (res) {
        _this2.likes = res.data.data;
      })["catch"](function (err) {
        console.log("Error Home.vue getAutLikes");
        console.log(err.data);
      });
    },
    like: function like(idPost) {
      var _this3 = this;

      var data = {
        'idPost': idPost
      };
      axios.post('/api/like', data).then(function (res) {
        //Like action change <3 and number
        if (_this3.likes.includes(idPost)) {
          var index = _this3.likes.indexOf(idPost);

          _this3.likes.splice(index, 1);

          _this3.posts[idPost - 1].likes--;
        } else {
          _this3.likes.push(idPost);

          _this3.posts[idPost - 1].likes++;
        }
      })["catch"](function (err) {
        console.log("Error Home.vue like");
        console.log(err.data);
      });
    },
    showCode: function showCode(idPost) {
      this.$router.push({
        name: 'show-code',
        params: {
          id: idPost
        }
      });
    },
    showUser: function showUser(idUsu) {
      this.$router.push({
        name: 'codeOthers',
        params: {
          id: idUsu
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "home" } }, [
    _c("div", { attrs: { id: "menu" } }, [_vm._v("\r\n    MENU¿?\r\n  ")]),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "posts" } },
      [
        _c("h1", { staticClass: "title" }, [_vm._v("Tops Components")]),
        _vm._v(" "),
        _vm._l(_vm.posts, function (post) {
          return _c("div", { key: post.post.idPost, staticClass: "post" }, [
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
                post.post.img != null
                  ? _c("img", {
                      staticClass: "post-img",
                      attrs: { src: "storage/" + post.post.img, alt: "" },
                    })
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "post_user" }, [
              _c("img", {
                staticClass: "post_user-img",
                attrs: { src: "storage/" + post.user[0].img, alt: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "post_user-names" }, [
                _c("div", { staticClass: "post_info" }, [
                  _c("h3", [_vm._v(_vm._s(post.post.postName))]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "post_info-meta" }, [
                    _vm.likes.includes(post.post.idPost)
                      ? _c(
                          "li",
                          {
                            attrs: { id: "like-" + post.post.idPost },
                            on: {
                              click: function ($event) {
                                return _vm.like(post.post.idPost)
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "bi bi-heart-fill" }),
                            _vm._v(_vm._s(post.likes) + "\r\n                "),
                          ]
                        )
                      : _c(
                          "li",
                          {
                            attrs: { id: "like-" + post.post.idPost },
                            on: {
                              click: function ($event) {
                                return _vm.like(post.post.idPost)
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "bi bi-heart" }),
                            _vm._v(_vm._s(post.likes) + "\r\n                "),
                          ]
                        ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "h5",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.showUser(post.user[0].idUsu)
                      },
                    },
                  },
                  [_vm._v(_vm._s(post.user[0].name))]
                ),
              ]),
            ]),
          ])
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);