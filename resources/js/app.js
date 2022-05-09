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
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

//Vuex
import {store} from './store.js';

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

const app = new Vue({
    el: '#app',
    store:store,
    router:router,
    render: h => h(App),
});
