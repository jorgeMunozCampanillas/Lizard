import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export const store = new Vuex.Store({

    state:{  
        auth: {},
        isAuthenticated: false
    },  
    mutations:{  
        setAuth(state, data) {    
            state.auth = data;
            state.isAuthenticated = true;            
        },
    },
    actions:{
        login({ commit },data){
            commit('setAuth', data);
       }
    }

});
