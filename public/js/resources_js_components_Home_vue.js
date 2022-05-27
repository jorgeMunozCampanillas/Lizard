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
/* harmony import */ var _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/OnePost.vue */ "./resources/js/components/code/OnePost.vue");
/* harmony import */ var _users_UserCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/UserCard.vue */ "./resources/js/components/users/UserCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Post: _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UserCard: _users_UserCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      posts: [],
      beforePosts: [],
      afterPosts: [],
      likes: [],
      limit: 7,
      offset: 0,
      interestingUsers: []
    };
  },
  mounted: function mounted() {
    if (this.$store.state.isAuthenticated) {
      this.getAuthLikes();
    }

    this.getPosts();
    this.getPeople();
  },
  computed: {
    beforeNull: function beforeNull() {
      return this.beforePosts.length;
    },
    actualNull: function actualNull() {
      return this.posts.length;
    },
    afterNull: function afterNull() {
      return this.afterPosts.length;
    }
  },
  methods: {
    getPosts: function getPosts() {
      var _this = this;

      this.afterPosts = [];
      this.posts = [];
      axios.get('/api/code/' + this.offset).then(function (res) {
        _this.posts = res.data.data.slice(0, 4);

        _this.afterPosts.push(res.data.data[4]);

        _this.afterPosts.push(res.data.data[6]);
      })["catch"](function (err) {
        console.log("Error Home.vue getPosts");
        console.log(err.data);
      });
    },
    getAuthLikes: function getAuthLikes() {
      var _this2 = this;

      axios.get('/api/user/likesGiven').then(function (res) {
        _this2.likes = res.data.data;
      })["catch"](function (err) {
        console.log("Error Home.vue getAutLikes");
        console.log(err.data);
      });
    },
    next: function next() {
      this.offset += 4;
      this.beforePosts = [];
      this.beforePosts.push(this.posts[1]);
      this.beforePosts.push(this.posts[3]);
      this.getPosts();
    },
    back: function back() {
      this.offset -= 4;
      this.getPosts();
    },
    getPeople: function getPeople() {
      var _this3 = this;

      axios.get('/api/user/random').then(function (res) {
        _this3.interestingUsers = res.data;
      })["catch"](function (err) {
        console.log("Error en Home.vue getPeople");
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    user: {
      "default": ''
    }
  },
  methods: {
    follow: function follow() {
      var _this = this;

      var data = {
        idUsu: this.user.idUsu
      };
      axios.post('/api/user/follow/follow', data).then(function (res) {
        if (_this.$store.state.follows.followings.includes(_this.user.idUsu)) {
          //Change button
          var index = _this.$store.state.follows.followings.indexOf(_this.user.idUsu);

          _this.$store.state.follows.followings.splice(index, 1);
        } else {
          //Change button
          _this.$store.state.follows.followings.push(_this.user.idUsu);
        }
      })["catch"](function (err) {
        console.log('Error en CodeProfileOthers.vue follow');
        console.log(err);
      });
    },
    showUser: function showUser() {
      this.$router.push({
        name: 'code-others',
        params: {
          id: this.user.idUsu
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

/***/ "./resources/js/components/users/UserCard.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/users/UserCard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCard.vue?vue&type=template&id=2b5d0866& */ "./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&");
/* harmony import */ var _UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCard.vue?vue&type=script&lang=js& */ "./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/UserCard.vue"
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

/***/ "./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/users/UserCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCard_vue_vue_type_template_id_2b5d0866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserCard.vue?vue&type=template&id=2b5d0866& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&");


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
    _c("div", { attrs: { id: "post-wrapper" } }, [
      _c("h2", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.$t("home.top_comopnents")) + " "),
        _c("hr"),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "before_posts" } },
        [
          _vm._l(_vm.beforePosts, function (post) {
            return _c("Post", {
              key: post.idPost,
              staticClass: "post",
              attrs: { data: post, likes: _vm.likes },
            })
          }),
          _vm._v(" "),
          !_vm.beforeNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.beforeNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "posts" } },
        [
          _c("div", { staticClass: "post_next", on: { click: _vm.next } }, [
            _c("i", { staticClass: "bi bi-arrow-bar-right" }),
          ]),
          _vm._v(" "),
          _vm.offset >= 4
            ? _c("div", { staticClass: "post_back", on: { click: _vm.back } }, [
                _c("i", { staticClass: "bi bi-arrow-bar-left" }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.posts, function (post) {
            return _c("Post", {
              key: post.idPost,
              staticClass: "post",
              attrs: { data: post, likes: _vm.likes },
            })
          }),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.actualNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "after_posts" } },
        [
          _vm._l(_vm.afterPosts, function (post) {
            return _c("Post", {
              key: post.idPost,
              staticClass: "post",
              attrs: { data: post, likes: _vm.likes },
            })
          }),
          _vm._v(" "),
          !_vm.afterNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
          _vm._v(" "),
          !_vm.afterNull
            ? _c("Post", { staticClass: "post", attrs: { likes: [0] } })
            : _vm._e(),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "users_wrapper" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "users" } },
        _vm._l(_vm.interestingUsers, function (user) {
          return _c("User-Card", {
            key: user.idUsu,
            staticClass: "user",
            attrs: { user: user },
          })
        }),
        1
      ),
    ]),
    _vm._v(" "),
    _c("footer", { attrs: { id: "footer_wrapper" } }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "users-title" } }, [
      _c("h2", [_vm._v("Interesting People to Follow")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/UserCard.vue?vue&type=template&id=2b5d0866& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "user_card-wrapper" }, [
      _c("img", {
        staticClass: "user_card-img",
        attrs: { src: "/storage/" + _vm.user.img, alt: "" },
        on: { click: _vm.showUser },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "user_card-details" }, [
        _c(
          "div",
          { staticClass: "user_card-name", on: { click: _vm.showUser } },
          [_vm._v(_vm._s(_vm.user.name))]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "user_card-posts" }, [
          _vm._v("Posts: " + _vm._s(_vm.user.posts)),
        ]),
        _vm._v(" "),
        this.$store.state.follows.followings.includes(_vm.user.idUsu)
          ? _c(
              "button",
              { staticClass: "button-Unfollow", on: { click: _vm.follow } },
              [_vm._v(_vm._s(_vm.$t("profile.unfollow")))]
            )
          : _c(
              "button",
              { staticClass: "button-follow", on: { click: _vm.follow } },
              [_vm._v(_vm._s(_vm.$t("profile.follow")))]
            ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);