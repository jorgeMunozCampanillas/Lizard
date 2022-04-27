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

    <!-- Normal User -->
    <ul id="nav-out-permiss" v-if="auth.permissions>0">
        <li><button @click="logout">LogOut</button></li>
    </ul>

    <!-- Admin User -->
    <ul id="nav-out-permiss" v-if="auth.permissions>1">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
    </ul>
    
</nav>
</template>

<script>
import EventBus from './../../bus';
export default {
    name:'naVue',
    props: ['auth'],

    created(){
        EventBus.$emit('updateAuth');
    },
    methods: {
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