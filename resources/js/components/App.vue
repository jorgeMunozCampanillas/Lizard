<template>
<div>
    <nav>
        <Nav v-if="this.$store.state.navTipe == 1"></Nav>
        <Nav-Create v-else-if="this.$store.state.navTipe == 2"></Nav-Create>
    </nav>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import Nav from './navs/Nav.vue';
import NavCreate from './navs/NavCreate.vue';

export default {
    components:{
        Nav,
        NavCreate
    },
}
</script>

<style>

</style>