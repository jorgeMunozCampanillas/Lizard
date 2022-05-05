<template>
<div>
<nav id="nav" class="nav-1">
    <ul id="nav-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" style="width: 3rem !important; height: 3rem !important;" alt="">
    </ul>

    <ul id="nav-pages">
        <li class="nav-mains"><router-link to="/home">Home</router-link></li>
        <li class="nav-mains"><a>Comopnents</a></li>
        <li class="nav-mains"><a>Views</a></li>
    </ul>

    <!-- No registe -->
    <ul id="nav-out-permiss" v-if="auth.permissions==0">
        <li><router-link to="/login">Login</router-link></li>
    </ul>

    <!-- Options -->
    <ul id="nav-with-permiss" v-if="auth.permissions>0">
        <li>
            <router-link to="/create/code">new Component</router-link>
        </li>
        <li>
            <button @click="changeOptions">
                <i v-if="auth.img==null" style="font-size:1.6rem" class="bi bi-person-circle"></i>
                <img id="avatar" v-else :src="'storage/'+auth.img" alt="">
            </button>
        </li>
    </ul>
    <li v-if="options">
        <div>
            <ul id="options">
                <!-- Admin User -->
                <li><router-link v-if="auth.permissions>1" to="/dashboard">Dashboard</router-link></li>
                <li><a>Action</a></li>
                <li><a>Another action</a></li>
                <li><a>Something</a></li>
                <li><button @click="logout">Sing out</button></li>
            </ul>
        </div>
    </li>    
</nav>
</div>
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