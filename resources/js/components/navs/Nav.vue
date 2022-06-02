<template>
<div>
    <nav id="nav" class="nav-1">

        <ul id="search">
            <Search/>
        </ul>

        <!-- No registe -->
        <ul id="nav-out-permiss" v-if="this.$store.state.isAuthenticated==false">
            <LangSwitch></LangSwitch>
            <li><router-link :to="{name:'login'}" >{{$t('nav.login')}}</router-link></li>
        </ul>

        <!-- Options -->
        <!-- <div @click="createCode" id="user_create" v-if="this.$store.state.auth.permissions>0">{{$t('nav.new_component')}}</div> -->
        <i class="bi bi-pencil-square"></i>
        <User-Options id="user_options" v-if="this.$store.state.auth.permissions>0"></User-Options>
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
        }
    },
}
</script>

<style>

</style>