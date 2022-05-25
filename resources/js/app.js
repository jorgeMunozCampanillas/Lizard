require('./bootstrap');

import vue from 'vue';
window.Vue = vue;


import App from './components/App.vue';

//Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//Route
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

//Not to return to the same route
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);
Vue.use(VueAxios, axios);


//Vuex
import {store} from './store.js';

//I18n (Multilangual)
import i18n from './i18n';

// use beforeEach route guard 
router.beforeEach((to, from, next) => {
  
  /* ===============< LANGUAGE >=============== */
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    // search if we have this in localStorage
    language = localStorage.getItem('language') || 'en'
  }

  // set the current language for i18n
  i18n.locale = language

 /* ===============< NAV TIPE >=============== */
  if (to.path.includes("/create/code")) {
    store.dispatch("changeNav", 2);
  }else if(to.path.includes("/show/code")){
    store.dispatch("changeNav", 3);
  }else if(to.path.includes("/code/update")){
    store.dispatch("changeNav", 4);
  }else{
    store.dispatch("changeNav", 1);
  }

  next()
})


const app = new Vue({
    el: '#app',
    i18n,
    store:store,
    router:router,
    render: h => h(App),
});
