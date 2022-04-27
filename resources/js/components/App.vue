<template>
<div>
    <nav>
        <na-vue :auth="auth"></na-vue>
    </nav>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import naVue from './mains/Nav.vue';
import EventBus from './../bus';

export default {
    components:{
        naVue
    },
    data() {
        return {
            auth:'',
        }
    },
    created() {
        this.checkAuth();
        EventBus.$on('updateAuth', this.checkAuth);
        EventBus.$on('foo', this.hola);
    },
    methods: {
        checkAuth(){
            //Check the auth of user and pass (this info is pased too Nav.vue)
            this.axios.get('/api/athenticated')
            .then((res)=>{
                this.auth = res.data;
            })
            .catch((err)=>{
                console.log(err)
                console.log("ERROR EN CheckAuth de App.vue")
            })
        },
    },
}
</script>

<style>

</style>