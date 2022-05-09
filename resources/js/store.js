import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state:{  
        auth: {
            permissions: 0
        },
        isAuthenticated: false
    },  
    plugins: [createPersistedState()],
    mutations:{  
        setAuth(state, data) {    
            state.auth = data;
            state.isAuthenticated = true;            
        },
        dropAuth(state){
            state.auth = {};
            state.isAuthenticated = false;    
        }
    },
    actions:{
        login({ commit },data){
            commit('setAuth', data);
       },
       logout({ commit }){
            commit('dropAuth')
       }
    }

});
