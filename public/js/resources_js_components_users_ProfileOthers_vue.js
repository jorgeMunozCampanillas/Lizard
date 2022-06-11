"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_users_ProfileOthers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/ProfileOthers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/ProfileOthers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../code/OnePost.vue */ "./resources/js/components/code/OnePost.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Post: _code_OnePost_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      posts: '',
      user: {},
      //Follows
      //only ids
      follows: {
        followers: [],
        followings: []
      },
      //with info
      followersDetails: [],
      followingsDetails: [],
      //Nav Options
      optionNav: 1
    };
  },
  mounted: function mounted() {
    this.getUser();
    this.getAuthLikes();
    this.getPosts();
  },
  computed: {
    get_followers: function get_followers() {
      return this.follows.followers.length;
    },
    get_followings: function get_followings() {
      return this.follows.followings.length;
    }
  },
  methods: {
    //Get all code from the user passed
    getPosts: function getPosts() {
      var _this = this;

      //aqui
      var idUsu = this.$route.params.idUsu;
      axios.get('/api/post/posts/' + idUsu).then(function (res) {
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
        console.log("Error CodeOthers.vue getPosts");
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

      var idUsu = this.$route.params.idUsu;
      axios.get('/api/user/follow/userData/' + idUsu).then(function (res) {
        _this3.user = res.data.data;
        _this3.follows = res.data.follows;
      })["catch"](function (err) {
        console.log("Error CodeOthers.vue getUser");
        console.log(err.data);
      });
    },
    follow: function follow() {
      var _this4 = this;

      var data = {
        idUsu: this.user.idUsu
      };
      axios.post('/api/user/follow/follow', data).then(function (res) {
        if (_this4.$store.state.follows.followings.includes(_this4.user.idUsu)) {
          //Change button
          var index = _this4.$store.state.follows.followings.indexOf(_this4.user.idUsu);

          _this4.$store.state.follows.followings.splice(index, 1); //Change count


          index = _this4.follows.followers.indexOf(_this4.user.idUsu);

          _this4.follows.followers.splice(index, 1); //For if we are in view followers


          _this4.followersDetails = _this4.followersDetails.map(function (u) {
            return u.idUsu != _this4.$store.state.auth.idUsu;
          });
        } else {
          //Change button
          _this4.$store.state.follows.followings.push(_this4.user.idUsu); //Change count


          _this4.follows.followers.push(_this4.user.idUsu);
        }
      })["catch"](function (err) {
        console.log('Error en CodeProfileOthers.vue follow');
        console.log(err);
      });
    },
    showFollowers: function showFollowers() {
      var _this5 = this;

      axios.get('/api/user/follow/followers/' + this.user.idUsu).then(function (res) {
        _this5.optionNav = 2;
        _this5.followersDetails = res.data.data;
      })["catch"](function (err) {
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      });
    },
    //Followings
    showFollowings: function showFollowings() {
      var _this6 = this;

      axios.get('/api/user/follow/following/' + this.user.idUsu).then(function (res) {
        _this6.optionNav = 3;
        _this6.followingsDetails = res.data.data;
      })["catch"](function (err) {
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/users/ProfileOthers.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/users/ProfileOthers.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileOthers_vue_vue_type_template_id_668c860a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileOthers.vue?vue&type=template&id=668c860a& */ "./resources/js/components/users/ProfileOthers.vue?vue&type=template&id=668c860a&");
/* harmony import */ var _ProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileOthers.vue?vue&type=script&lang=js& */ "./resources/js/components/users/ProfileOthers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileOthers_vue_vue_type_template_id_668c860a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileOthers_vue_vue_type_template_id_668c860a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/ProfileOthers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/ProfileOthers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/users/ProfileOthers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileOthers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/ProfileOthers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOthers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/ProfileOthers.vue?vue&type=template&id=668c860a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/users/ProfileOthers.vue?vue&type=template&id=668c860a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOthers_vue_vue_type_template_id_668c860a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOthers_vue_vue_type_template_id_668c860a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileOthers_vue_vue_type_template_id_668c860a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileOthers.vue?vue&type=template&id=668c860a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/ProfileOthers.vue?vue&type=template&id=668c860a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/ProfileOthers.vue?vue&type=template&id=668c860a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/users/ProfileOthers.vue?vue&type=template&id=668c860a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
          _c("li", [
            _vm._v(_vm._s(_vm.$t("profile.components_count", { msg: "0" }))),
          ]),
          _vm._v(" "),
          _c("li", { on: { click: _vm.showFollowers } }, [
            _vm._v(
              _vm._s(
                _vm.$t("profile.followers_count", { msg: _vm.get_followers })
              )
            ),
          ]),
          _vm._v(" "),
          _c("li", { on: { click: _vm.showFollowings } }, [
            _vm._v(
              _vm._s(
                _vm.$t("profile.following_count", { msg: _vm.get_followings })
              )
            ),
          ]),
          _vm._v(" "),
          _c("li", [
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
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "profile_main" }, [
      _vm.optionNav == 1
        ? _c(
            "div",
            { attrs: { id: "profile_posts" } },
            _vm._l(_vm.posts, function (post) {
              return _c("Post", {
                key: post.idPost,
                staticClass: "post",
                attrs: { data: post, likes: _vm.likes },
              })
            }),
            1
          )
        : _vm.optionNav == 2
        ? _c(
            "div",
            _vm._l(_vm.followersDetails, function (user) {
              return _c("div", { key: user.idUsu }, [
                _c("img", { attrs: { src: "/storage/" + user.img, alt: "" } }),
                _vm._v(" "),
                _c("h3", [_vm._v(_vm._s(user.name))]),
              ])
            }),
            0
          )
        : _vm.optionNav == 3
        ? _c(
            "div",
            _vm._l(_vm.followingsDetails, function (user) {
              return _c("div", { key: user.idUsu }, [
                _c("img", { attrs: { src: "/storage/" + user.img, alt: "" } }),
                _vm._v(" "),
                _c("h3", [_vm._v(_vm._s(user.name))]),
              ])
            }),
            0
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);