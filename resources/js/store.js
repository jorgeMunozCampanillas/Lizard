import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';

import SecureLS from "secure-ls";
const ls = new SecureLS({isCompression: false});

Vue.use(Vuex);

export const store = new Vuex.Store({

    state:{  
        auth: {
            permissions: 0
        },
        isAuthenticated: false,
        navTipe: 1,
        follows: '',
    },  
    plugins: [createPersistedState({
        storage: {
            getItem: key => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: key => ls.remove(key),
        }
    })],
    mutations:{  
        setAuth(state, data) {    
            state.auth = data;
            state.isAuthenticated = true;            
        },
        dropAuth(state){
            state.auth = {};
            state.isAuthenticated = false;    
            window.localStorage.clear();
        },
        setFollows(state, data){
            state.follows = data;
        },
        nav(state, nav){
            state.navTipe = nav;
        }
    },
    actions:{
        login({ commit },data){
            commit('setAuth', data.data);
            commit('setFollows', data.follows);
        },
        logout({ commit }){
            commit('dropAuth')
        },
        changeNav({commit}, nav){
            commit('nav', nav)
        }
    }

});
