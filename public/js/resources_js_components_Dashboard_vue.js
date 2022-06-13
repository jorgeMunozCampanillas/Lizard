"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_DashUsers_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard/DashUsers.vue */ "./resources/js/components/Dashboard/DashUsers.vue");
/* harmony import */ var _Dashboard_DashPosts_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard/DashPosts.vue */ "./resources/js/components/Dashboard/DashPosts.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DashUsers: _Dashboard_DashUsers_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashPosts: _Dashboard_DashPosts_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      //users
      manage: 'manageUsers',
      aa: true
    };
  },
  methods: {
    //MANAGE CHANGE
    manageChange: function manageChange(option) {
      this.manage = option;
    },
    select: function select(manage) {
      return this.manage == manage;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashPosts.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashPosts.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      users: [],
      userEdit: false,
      posts: []
    };
  },
  created: function created() {
    this.getPosts();
  },
  methods: {
    //Getters
    //Get all users
    getUsers: function getUsers() {
      var _this = this;

      axios.get('/api/user/users').then(function (res) {
        _this.users = res.data;
      })["catch"](function (err) {
        if (err.response.status == 403) {
          _this.$router.push({
            name: 'permissError'
          });
        }
      });
    },
    //Crud
    //Delete one user
    deleteUser: function deleteUser(userDelete) {
      var _this2 = this;

      axios["delete"]('/api/user/users/' + userDelete.idUsu).then(function (e) {
        //Update the array with the users
        _this2.users = _this2.users.filter(function (u) {
          return u.idUsu != userDelete.idUsu;
        });
      })["catch"](function (e) {
        console.log("error en Dashboard.vue delete");
        console.log(e);
      });
    },
    //Edit one user
    edit: function edit(editUser) {
      this.userEdit = editUser;
    },
    editSuccess: function editSuccess() {
      var _this3 = this;

      this.axios.put('/api/user/users/' + this.userEdit.idUsu, this.userEdit).then(function (e) {
        _this3.users.map(function (u) {
          if (u.idUsu == _this3.userEdit.idUsu) {
            u = _this3.userEdit;
          }
        });
      })["catch"](function (e) {
        console.log("error en Dashboard.vue update");
        console.log(e);
      });
      this.userEdit = false;
    },
    editCancel: function editCancel() {
      var inputName = document.getElementById("user." + this.userEdit.idUsu + ".name");
      inputName.innerHTML = this.userEdit.name;
      this.userEdit = false;
    },
    getPosts: function getPosts() {
      var _this4 = this;

      axios.get('/api/post/allPosts').then(function (res) {
        console.log(res.data.data);
        _this4.posts = res.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashUsers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashUsers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      users: [],
      userEdit: false
    };
  },
  created: function created() {
    this.getUsers();
  },
  methods: {
    //Getters
    //Get all users
    getUsers: function getUsers() {
      var _this = this;

      axios.get('/api/user/users').then(function (res) {
        _this.users = res.data;
      })["catch"](function (err) {
        if (err.response.status == 403) {
          _this.$router.push({
            name: 'permissError'
          });
        }
      });
    },
    //Crud
    //Delete one user
    deleteUser: function deleteUser(userDelete) {
      var _this2 = this;

      axios["delete"]('/api/user/users/' + userDelete.idUsu).then(function (e) {
        //Update the array with the users
        _this2.users = _this2.users.filter(function (u) {
          return u.idUsu != userDelete.idUsu;
        });
      })["catch"](function (e) {
        console.log("error en Dashboard.vue delete");
        console.log(e);
      });
    },
    //Edit one user
    edit: function edit(editUser) {
      this.userEdit = editUser;
    },
    editSuccess: function editSuccess() {
      var _this3 = this;

      this.axios.put('/api/user/users/' + this.userEdit.idUsu, this.userEdit).then(function (e) {
        _this3.users.map(function (u) {
          if (u.idUsu == _this3.userEdit.idUsu) {
            u = _this3.userEdit;
          }
        });
      })["catch"](function (e) {
        console.log("error en Dashboard.vue update");
        console.log(e);
      });
      this.userEdit = false;
    },
    editCancel: function editCancel() {
      var inputName = document.getElementById("user." + this.userEdit.idUsu + ".name");
      inputName.innerHTML = this.userEdit.name;
      this.userEdit = false;
    },
    getPosts: function getPosts() {
      axios.get('/api/post/allPosts').then(function (res) {
        console.log(res);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/DashPosts.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/DashPosts.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashPosts_vue_vue_type_template_id_24994f2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashPosts.vue?vue&type=template&id=24994f2a& */ "./resources/js/components/Dashboard/DashPosts.vue?vue&type=template&id=24994f2a&");
/* harmony import */ var _DashPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashPosts.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/DashPosts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashPosts_vue_vue_type_template_id_24994f2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashPosts_vue_vue_type_template_id_24994f2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/DashPosts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/DashUsers.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/DashUsers.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashUsers_vue_vue_type_template_id_eae56fc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashUsers.vue?vue&type=template&id=eae56fc0& */ "./resources/js/components/Dashboard/DashUsers.vue?vue&type=template&id=eae56fc0&");
/* harmony import */ var _DashUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashUsers.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/DashUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashUsers_vue_vue_type_template_id_eae56fc0___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashUsers_vue_vue_type_template_id_eae56fc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/DashUsers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/DashPosts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/DashPosts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashPosts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/DashUsers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/DashUsers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");


/***/ }),

/***/ "./resources/js/components/Dashboard/DashPosts.vue?vue&type=template&id=24994f2a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/DashPosts.vue?vue&type=template&id=24994f2a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashPosts_vue_vue_type_template_id_24994f2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashPosts_vue_vue_type_template_id_24994f2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashPosts_vue_vue_type_template_id_24994f2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashPosts.vue?vue&type=template&id=24994f2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashPosts.vue?vue&type=template&id=24994f2a&");


/***/ }),

/***/ "./resources/js/components/Dashboard/DashUsers.vue?vue&type=template&id=eae56fc0&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/DashUsers.vue?vue&type=template&id=eae56fc0& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashUsers_vue_vue_type_template_id_eae56fc0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashUsers_vue_vue_type_template_id_eae56fc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashUsers_vue_vue_type_template_id_eae56fc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashUsers.vue?vue&type=template&id=eae56fc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashUsers.vue?vue&type=template&id=eae56fc0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "dashboard" } }, [
    _c("h1", { attrs: { id: "dash-title" } }, [_vm._v("DashBoard ")]),
    _vm._v(" "),
    _c("div", { attrs: { id: "dash-table" } }, [
      _c("div", { attrs: { id: "dash-options" } }, [
        _c("ul", [
          _c("li", [
            _c(
              "button",
              {
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.manageChange("manageUsers")
                  },
                },
              },
              [
                _c(
                  "h3",
                  {
                    staticClass: "button dash-option",
                    class: { select: _vm.select("manageUsers") },
                  },
                  [_vm._v("Users")]
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "button",
              {
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.manageChange("managePosts")
                  },
                },
              },
              [
                _c(
                  "h3",
                  {
                    staticClass: "button dash-option",
                    class: { select: _vm.select("managePosts") },
                  },
                  [_vm._v("Posts")]
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "button",
              {
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.manageChange("manageTags")
                  },
                },
              },
              [
                _c(
                  "h3",
                  {
                    staticClass: "button dash-option",
                    class: { select: _vm.select("manageTags") },
                  },
                  [_vm._v("Tags")]
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          !_vm.manage
            ? _c("h3", [
                _vm._v(
                  "Do something Mr/s.Admin " +
                    _vm._s(this.$store.state.auth.permissions.name)
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.manage == "manageUsers"
            ? _c("dash-users", { attrs: { id: "table" } })
            : _vm._e(),
          _vm._v(" "),
          _vm.manage == "managePosts"
            ? _c("dash-posts", { attrs: { id: "table" } })
            : _vm._e(),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashPosts.vue?vue&type=template&id=24994f2a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashPosts.vue?vue&type=template&id=24994f2a& ***!
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
  return _c("div", [
    _c("table", { attrs: { id: "table-wrapper" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        { attrs: { id: "table-body" } },
        _vm._l(_vm.posts, function (post) {
          return _c("tr", [
            _c(
              "th",
              { attrs: { id: "user." + post.idUsu + ".id", scope: "row" } },
              [_vm._v(_vm._s(post.idPost))]
            ),
            _vm._v(" "),
            _c(
              "th",
              { attrs: { id: "user." + post.idUsu + ".id", scope: "row" } },
              [_vm._v(_vm._s(post.idUsu))]
            ),
            _vm._v(" "),
            _c(
              "td",
              { attrs: { id: "user." + post.idUsu + ".name", scope: "row" } },
              [
                !_vm.userEdit || post.idUsu != post.idUsu
                  ? _c("span", [_vm._v(_vm._s(post.postName))])
                  : _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userEdit.name,
                          expression: "userEdit.name",
                        },
                      ],
                      domProps: { value: _vm.userEdit.name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.userEdit, "name", $event.target.value)
                        },
                      },
                    }),
              ]
            ),
            _vm._v(" "),
            _c(
              "td",
              { attrs: { id: "user." + post.idUsu + ".email", scope: "row" } },
              [
                !_vm.userEdit || _vm.userEdit.idUsu != post.idUsu
                  ? _c("span", [_vm._v(_vm._s(post.likes))])
                  : _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userEdit.email,
                          expression: "userEdit.email",
                        },
                      ],
                      domProps: { value: _vm.userEdit.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.userEdit, "email", $event.target.value)
                        },
                      },
                    }),
              ]
            ),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(post.created_at))]),
            _vm._v(" "),
            post.idUsu != _vm.$store.state.auth.permissions.idUsu
              ? _c("td", [
                  !_vm.userEdit
                    ? _c(
                        "button",
                        {
                          staticClass: "button-delete button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.deleteUser(post)
                            },
                          },
                        },
                        [_vm._v("Delete")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.userEdit
                    ? _c(
                        "button",
                        {
                          staticClass: "button-edit button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.edit(post)
                            },
                          },
                        },
                        [_vm._v("Edit")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userEdit.idUsu == post.idUsu
                    ? _c(
                        "button",
                        {
                          staticClass: "button-susccess button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.editSuccess()
                            },
                          },
                        },
                        [_vm._v("Success")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userEdit.idUsu == post.idUsu
                    ? _c(
                        "button",
                        {
                          staticClass: "button-delete button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.editCancel(post)
                            },
                          },
                        },
                        [_vm._v("Cancel")]
                      )
                    : _vm._e(),
                ])
              : _vm._e(),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#Post")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#Usu")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name Post")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Likes")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Created_at")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Options")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashUsers.vue?vue&type=template&id=eae56fc0&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/DashUsers.vue?vue&type=template&id=eae56fc0& ***!
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
  return _c("div", [
    _c("table", { attrs: { id: "table-wrapper" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.users, function (user) {
          return _c("tr", { key: user.idUsu }, [
            _c(
              "th",
              { attrs: { id: "user." + user.idUsu + ".id", scope: "row" } },
              [_vm._v(_vm._s(user.idUsu))]
            ),
            _vm._v(" "),
            _c(
              "td",
              { attrs: { id: "user." + user.idUsu + ".name", scope: "row" } },
              [
                !_vm.userEdit || _vm.userEdit.idUsu != user.idUsu
                  ? _c("span", [_vm._v(_vm._s(user.name))])
                  : _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userEdit.name,
                          expression: "userEdit.name",
                        },
                      ],
                      domProps: { value: _vm.userEdit.name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.userEdit, "name", $event.target.value)
                        },
                      },
                    }),
              ]
            ),
            _vm._v(" "),
            _c(
              "td",
              { attrs: { id: "user." + user.idUsu + ".email", scope: "row" } },
              [
                !_vm.userEdit || _vm.userEdit.idUsu != user.idUsu
                  ? _c("span", [_vm._v(_vm._s(user.email))])
                  : _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userEdit.email,
                          expression: "userEdit.email",
                        },
                      ],
                      domProps: { value: _vm.userEdit.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.userEdit, "email", $event.target.value)
                        },
                      },
                    }),
              ]
            ),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.permissions))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.created_at.substr(0, 10)))]),
            _vm._v(" "),
            user.idUsu != _vm.$store.state.auth.permissions.idUsu
              ? _c("td", [
                  !_vm.userEdit
                    ? _c(
                        "button",
                        {
                          staticClass: "button-delete button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.deleteUser(user)
                            },
                          },
                        },
                        [_vm._v("Delete")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.userEdit
                    ? _c(
                        "button",
                        {
                          staticClass: "button-edit button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.edit(user)
                            },
                          },
                        },
                        [_vm._v("Edit")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userEdit.idUsu == user.idUsu
                    ? _c(
                        "button",
                        {
                          staticClass: "button-susccess button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.editSuccess()
                            },
                          },
                        },
                        [_vm._v("Success")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.userEdit.idUsu == user.idUsu
                    ? _c(
                        "button",
                        {
                          staticClass: "button-delete button",
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.editCancel(user)
                            },
                          },
                        },
                        [_vm._v("Cancel")]
                      )
                    : _vm._e(),
                ])
              : _vm._e(),
          ])
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Permissions")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Created_at")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Options")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);