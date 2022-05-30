<template>
<div>
    <nav id="nav" class="nav-5">
        <ul id="nav-logo">
            <div @click="home" id="nav_logo-home">
                <img :src="'/storage/logo2-bueno.png'" id="logo" alt="">
                <h2 id="logo-title">Lizard</h2>
            </div>
        </ul>
        
        <ul id="search">
            <Search/>
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
            <li>
                <User-Options></User-Options>
            </li>    
        </ul>
    </nav>
</div>
</template>

<script>
import LangSwitch from './LangSwitch.vue';
import UserOptions from './UserOptions.vue';
import Search from './Search.vue';
export default {
    name:'naVue',
    components: {
        LangSwitch,
        UserOptions,
        Search,
    },
    methods: {
        createCode(){
            this.$store.dispatch('changeNav', 2);
            this.$router.push({name:'create-code'});
        },
        home(){
            this.$router.push({name:'home'});
        }
    },
}
</script>

<style>

</style>