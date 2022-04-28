<template>
<nav id="nav" class="nav-1">
    <ul>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" style="width: 3rem !important; height: 3rem !important;" alt="">
    </ul>
    <ul id="nav-pages">
        <li><router-link to="/home" class="nav-link">Home</router-link></li>
        <li><a>Comopnents</a></li>
        <li><a>Views</a></li>
    </ul>

    <!-- No registe -->
    <ul id="nav-out-permiss" v-if="auth.permissions==0">
        <li><router-link to="/login" class="nav-link">Login</router-link></li>
    </ul>

    <!-- Options -->
    <ul id="nav-out-permiss" v-if="auth.permissions>0">
        <li>
            <router-link to="/create-code" class="nav-link">Submit new Component!!</router-link>
        </li>
        <li>
            <button @click="changeOptions">
                <i class="bi bi-person-circle"></i>
            </button>
        </li>
        <li v-if="options">
            <div>
                <ul>
                    <!-- Admin User -->
                    <router-link v-if="auth.permissions>1" to="/dashboard" class="nav-link">Dashboard</router-link>
                    <li><a>Action</a></li>
                    <li><a>Another action</a></li>
                    <li><a>Something else here</a></li>
                    <li><button @click="logout">LogOut</button></li>
                </ul>
            </div>
        </li>
    </ul>


    
</nav>
</template>

<script>
import EventBus from './../../bus';
export default {
    name:'naVue',
    props: ['auth'],

    data() {
        return {
            options: false,
        }
    },
    created(){
        EventBus.$emit('updateAuth');
    },
    methods: {
        changeOptions(){
            this.options = this.options ? false : true; 
        },
        logout(){
            axios.post('/api/logout').then(()=>{
                //Send updatAuth to App.vue
                EventBus.$emit('updateAuth');
                this.$router.push({name:"login"})
            })
            .catch((e)=>{
                console.log("Error en logout Nav.vue")
                console.log(e)
            })
        }
    },
}
</script>

<style>

</style>