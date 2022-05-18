<template>
<div>
    <nav id="nav" class="nav-1">
        <ul id="nav-logo">
            <img :src="'/storage/logo2-bueno.png'" id="logo" alt="">
            <h2 id="logo-title">Lizard</h2>
        </ul>
        

        <ul id="nav-pages">
            <li class="nav-mains"><router-link :to="{name:'home'}" >{{$t('nav.home')}}</router-link></li>
            <li class="nav-mains"><a>{{$t('nav.components')}}</a></li>
            <li class="nav-mains"><a>{{$t('nav.views')}}</a></li>
        </ul>

        <!-- No registe -->
        <ul id="nav-out-permiss" v-if="this.$store.state.isAuthenticated==false">
            <LangSwitch></LangSwitch>
            <li><router-link :to="{name:'login'}" >{{$t('nav.login')}}</router-link></li>
        </ul>

        <!-- Options -->
        <ul id="nav-with-permiss" v-if="this.$store.state.auth.permissions>0">
            <li class="nav-mains">
                <p @click="createCode">{{$t('nav.new_component')}}</p>
            </li>
            <LangSwitch></LangSwitch>
            <li>
                <button>
                    <i v-if="this.$store.state.isAuthenticated==false" style="font-size:1.6rem" class="bi bi-person-circle"></i>
                    <img id="avatar" v-else :src="'/storage/'+this.$store.state.auth.img" alt="">
                </button>
            </li>
        </ul>
        <li v-if="options">
            <div>
                <ul id="options">
                    <!-- Admin User -->
                    <li><router-link v-if="this.$store.state.auth.permissions>1" :to="{name:'dashboard'}" >{{$t('nav.dashboard')}}</router-link></li>
                    <li><router-link :to="{name:'my-code'}">{{$t('nav.profile')}}</router-link></li>
                    <li><button @click="logout">{{$t('nav.sing_out')}}</button></li>
                </ul>
            </div>
        </li>    
    </nav>
</div>
</template>

<script>
import LangSwitch from './LangSwitch.vue';
export default {
    name:'naVue',
    components: {
        LangSwitch
    },
    data() {
        return {
            options: false,
        }
    },
    mounted(){
            document.addEventListener('click', (e)=>{
                if(e.target.id == 'avatar'){
                    if (this.options) this.options = false
                    else this.options = true;
                }else{
                    this.options = false;
                }
            })
    },
    methods: {
        logout(){
            axios.post('/api/logout').then(()=>{
                this.$store.dispatch('logout');
                this.$router.push({name:"login"});
            })
            .catch((e)=>{
                console.log("Error en logout Nav.vue")
                console.log(e)
            })
        },
        createCode(){
            this.$store.dispatch('changeNav', 2);
            this.$router.push({name:'create-code'});
        }
    },
}
</script>

<style>

</style>