<template>
<div>
    <div v-bind:class="{'wrapper':this.$store.state.navTipe == 1}" id="wrapper">
        <!-- NAVS -->
        <Nav id="nav_main-top" v-if="this.$store.state.navTipe == 1"></Nav>
        <Nav-Lateral id="nav_main-lateral" v-if="this.$store.state.navTipe == 1"></Nav-Lateral>
        <Nav-Create class="nav-full" v-else-if="this.$store.state.navTipe == 2"></Nav-Create>
        <Nav-Others class="nav-full" v-else-if="this.$store.state.navTipe == 3"></Nav-Others>
        <Nav-Update class="nav-full" v-else-if="this.$store.state.navTipe == 4"></Nav-Update>
        <Nav-Main class="nav-full" v-else-if="this.$store.state.navTipe == 5"></Nav-Main>

        <!-- Content -->
        <div v-bind:class="{'container-parcial':this.$store.state.navTipe == 1}">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import Nav from './navs/Nav.vue';
import NavLateral from './navs/NavLateral.vue';
import NavCreate from './navs/NavCreate.vue';
import NavOthers from './navs/NavOthers.vue';
import NavUpdate from './navs/NavUpdate.vue';
import NavMain from './navs/NavMain.vue';

export default {
    components:{
        Nav,
        NavLateral,
        NavCreate,
        NavOthers,
        NavUpdate,
        NavMain
    },
}
</script>

<style>

</style>
