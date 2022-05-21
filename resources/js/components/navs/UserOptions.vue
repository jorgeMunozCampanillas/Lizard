<template>
    <div>
        <li>
            <button>
                <i v-if="this.$store.state.isAuthenticated==false" style="font-size:1.6rem" class="bi bi-person-circle"></i>
                <img id="avatar" v-else :src="'/storage/'+this.$store.state.auth.img" alt="">
            </button>
        </li>
        <ul id="options" v-if="options">
            <!-- Admin User -->
            <li><router-link v-if="this.$store.state.auth.permissions>1" :to="{name:'dashboard'}" >{{$t('nav.dashboard')}}</router-link></li>
            <li><router-link :to="{name:'my-code'}">{{$t('nav.profile')}}</router-link></li>
            <li><button @click="logout">{{$t('nav.sing_out')}}</button></li>
        </ul>
    </div>
</template>

<script>
export default {
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
    },
}
</script>

<style>

</style>