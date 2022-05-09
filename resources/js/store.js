export const store = {

    state:{  
        auth: {},
        isAuthenticated: false
    },  
    mutations:{  
        setAuth(data) {    
            this.auth = data;
            this.isAuthenticated = true;            
        },
    },
    actions:{
       prueba({ commit },data){
            commit('setAuth', data);
       }
    }

};
