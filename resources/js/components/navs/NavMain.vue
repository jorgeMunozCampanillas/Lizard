<template>
<div>
    <nav id="nav" class="nav-5">
        <ul class="button" @click="home()" id="nav-logo">
            <img :src="'/storage/logo2-bueno.png'" id="logo" alt="">
            <h2 id="logo-title">Lizard</h2>
        </ul>
        <div id="nav-options">
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
                <li class="button nav-mains">
                    <button class="button-create-code" @click="createCode"><i class="bi bi-pencil-square"></i></button>
                </li>
                <li class="button">
                    <User-Options></User-Options>
                </li>    
            </ul>
        </div>
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