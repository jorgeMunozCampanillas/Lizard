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
/* harmony import */ var _OnePost_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnePost.vue */ "./resources/js/components/code/OnePost.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Post: _OnePost_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      posts: '',
      user: {},
      follows: {
        followers: [],
        followings: []
      }
    };
  },
  mounted: function mounted() {
    this.getUser();
    this.getAuthLikes();
    this.getAllCode();
  },
  computed: {
    followers: function followers() {
      return this.follows.followers.length;
    },
    followings: function followings() {
      return this.follows.followings.length;
    }
  },
  methods: {
    //Get all code from the user passed
    getAllCode: function getAllCode() {
      var _this = this;

      var idUsu = this.$route.params.id;
      axios.get('/api/getPostOther/' + idUsu).then(function (res) {
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
        console.log("Error CodeOthers.vue getAllCode");
        console.log(err);
      });
    },
    //Get your likes
    getAuthLikes: function getAuthLikes() {
      var _this2 = this;

      axios.get('/api/user/likesGiven').then(function (res) {
        _this2.likes = res.data.data;
      })["catch"](function (err) {
        console.log("Error CodeOthers.vue getAutLikes");
        console.log(err.data);
      });
    },
    //Get data from the user passed
    getUser: function getUser() {
      var _this3 = this;

      var idUsu = this.$route.params.id;
      axios.get('/api/user/getUser/' + idUsu).then(function (res) {
        _this3.user = res.data.data;
        _this3.follows = res.data.follows;
        console.log(_this3.follows);
      })["catch"](function (err) {
        console.log("Error CodeOthers.vue getAutLikes");
        console.log(err.data);
      });
    },
    follow: function follow() {
      var _this4 = this;

      var data = {
        idUsu: this.user.idUsu
      };
      axios.post('/api/user/follow', data).then(function (res) {
        if (_this4.$store.state.follows.followings.includes(_this4.user.idUsu)) {
          //Change button
          var index = _this4.$store.state.follows.followings.indexOf(_this4.user.idUsu);

          _this4.$store.state.follows.followings.splice(index, 1); //Change count


          index = _this4.follows.followers.indexOf(_this4.user.idUsu);

          _this4.follows.followers.splice(index, 1);
        } else {
          //Change button
          _this4.$store.state.follows.followings.push(_this4.user.idUsu); //Change count


          _this4.follows.followers.push(_this4.user.idUsu);
        }
      })["catch"](function (err) {
        console.log('Error en CodeProfileOthers.vue follow');
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/OnePost.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/OnePost.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Post",
  props: {
    post: {
      "default": "platano"
    },
    usu: {
      "default": "platano"
    },
    likes: {
      "default": []
    }
  },
  methods: {
    showCode: function showCode() {
      var data = {
        idPost: this.post.component.idPost
      }; //+1 view

      axios.post('/api/addView', data).then(function (res) {
        console.log("add view");
        console.log(res);
      })["catch"](function (err) {
        console.log('Error in OnePost.vue showCode');
        console.log(err);
      }); //Go to code

      this.$router.push({
        name: 'show-code',
        params: {
          id: this.post.component.idPost
        }
      });
    },
    showUser: function showUser() {
      //Not to view your user like other user
      if (this.post.user.idUsu != this.$store.state.auth.idUsu) {
        this.$router.push({
          name: 'code-others',
          params: {
            id: this.post.user.idUsu
          }
        });
      } else {
        var path = '/show/myCode';

        if (this.$route.path != path) {
          this.$router.push({
            name: 'my-code',
            params: {
              id: this.post.component.idPost
            }
          });
        }
      }
    },
    like: function like() {
      var _this = this;

      var data = {
        'idPost': this.post.component.idPost
      };
      axios.post('/api/like', data).then(function (res) {
        //Like action change <3 and number
        if (_this.likes.includes(_this.post.component.idPost)) {
          var index = _this.likes.indexOf(_this.post.component.idPost);

          _this.likes.splice(index, 1);

          _this.post.likes--;
        } else {
          _this.likes.push(_this.post.component.idPost);

          _this.post.likes++;
          ;
        }
      })["catch"](function (err) {
        console.log("Error Home.vue like");
        console.log(err.data);
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

/***/ "./resources/js/components/code/OnePost.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/code/OnePost.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OnePost_vue_vue_type_template_id_269ffbaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnePost.vue?vue&type=template&id=269ffbaf& */ "./resources/js/components/code/OnePost.vue?vue&type=template&id=269ffbaf&");
/* harmony import */ var _OnePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnePost.vue?vue&type=script&lang=js& */ "./resources/js/components/code/OnePost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OnePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OnePost_vue_vue_type_template_id_269ffbaf___WEBPACK_IMPORTED_MODULE_0__.render,
  _OnePost_vue_vue_type_template_id_269ffbaf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/code/OnePost.vue"
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

/***/ "./resources/js/components/code/OnePost.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/code/OnePost.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OnePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnePost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/OnePost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OnePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/code/OnePost.vue?vue&type=template&id=269ffbaf&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/code/OnePost.vue?vue&type=template&id=269ffbaf& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OnePost_vue_vue_type_template_id_269ffbaf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OnePost_vue_vue_type_template_id_269ffbaf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OnePost_vue_vue_type_template_id_269ffbaf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OnePost.vue?vue&type=template&id=269ffbaf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/OnePost.vue?vue&type=template&id=269ffbaf&");


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
    _c("div", { staticClass: "profile_header" }, [
      _c("h1", { staticClass: "profile_header-name" }, [
        _vm._v(_vm._s(_vm.user.name)),
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "profile_header-img",
        attrs: { src: "/storage/" + _vm.user.img, alt: "" },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "profile_header-data" }, [
        _c("ul", [
          _c("li", [_vm._v("Components: 0")]),
          _vm._v(" "),
          _c("li", [_vm._v("Followers: " + _vm._s(_vm.followers))]),
          _vm._v(" "),
          _c("li", [_vm._v("Following: " + _vm._s(_vm.followings))]),
          _vm._v(" "),
          _c("li", [
            this.$store.state.follows.followings.includes(_vm.user.idUsu)
              ? _c(
                  "button",
                  { staticClass: "button-Unfollow", on: { click: _vm.follow } },
                  [_vm._v(" - Unfollow ")]
                )
              : _c(
                  "button",
                  { staticClass: "button-follow", on: { click: _vm.follow } },
                  [_vm._v(" + Follow ")]
                ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "profile_main" }, [
      _c(
        "div",
        { attrs: { id: "profile_posts" } },
        _vm._l(_vm.posts, function (post) {
          return _c("Post", {
            key: post.post.component.idPost,
            staticClass: "post",
            attrs: { post: post.post, likes: _vm.likes },
          })
        }),
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/OnePost.vue?vue&type=template&id=269ffbaf&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/code/OnePost.vue?vue&type=template&id=269ffbaf& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "button",
      {
        on: {
          click: function ($event) {
            return _vm.showCode()
          },
        },
      },
      [
        _c("img", {
          staticClass: "post-img",
          attrs: { src: "/storage/" + _vm.post.component.img, alt: "" },
        }),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "post_user" }, [
      _c("img", {
        staticClass: "post_user-img",
        attrs: { src: "/storage/" + _vm.post.user.img, alt: "" },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "post_user-names" }, [
        _c("div", { staticClass: "post_info" }, [
          _c("h3", [_vm._v(_vm._s(_vm.post.component.postName))]),
          _vm._v(" "),
          _c("ul", { staticClass: "post_info-meta" }, [
            _vm.likes.includes(_vm.post.component.idPost)
              ? _c(
                  "li",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.like()
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "bi bi-heart-fill" }),
                    _vm._v(_vm._s(_vm.post.likes) + "\r\n                    "),
                  ]
                )
              : _c(
                  "li",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.like()
                      },
                    },
                  },
                  [
                    _c("i", { staticClass: "bi bi-heart" }),
                    _vm._v(_vm._s(_vm.post.likes) + "\r\n                    "),
                  ]
                ),
            _vm._v(" "),
            _c("li", [
              _c("i", { staticClass: "bi bi-eye-fill" }),
              _vm._v(
                _vm._s(_vm.post.component.views) + "\r\n                    "
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "h5",
          {
            on: {
              click: function ($event) {
                return _vm.showUser()
              },
            },
          },
          [_vm._v(_vm._s(_vm.post.user.name))]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);