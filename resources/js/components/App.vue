<template>
<div>
    <nav>
        <na-vue></na-vue>
    </nav>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import naVue from './mains/Nav.vue';

export default {
    components:{
        naVue
    },
}
</script>

<style>

</style>