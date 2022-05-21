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
                <User-Options></User-Options>
            </li>    
        </ul>
    </nav>
</div>
</template>

<script>
import LangSwitch from './LangSwitch.vue';
import UserOptions from './UserOptions.vue';
export default {
    name:'naVue',
    components: {
        LangSwitch,
        UserOptions
    },
    methods: {
        createCode(){
            this.$store.dispatch('changeNav', 2);
            this.$router.push({name:'create-code'});
        }
    },
}
</script>

<style>

</style>