<template>
<div>
    <nav id="nav" class="nav-2">
        <ul class="nav-info">
            <img :src="'storage/logo2-bueno.png'" id="logo" alt="">
            <div>
                <h4>Untitled</h4>
                <h6 id="logo-title">Holge</h6>
            </div>
        </ul>

        <!-- Options -->
        <ul class="nav-options">
            <li @click="exit">Home</li>
            <li>Save</li>
            <li>Setting</li>
            <li>
                <button>
                    <i v-if="this.$store.state.isAuthenticated==false" style="font-size:1.6rem" class="bi bi-person-circle"></i>
                    <img id="avatar" v-else :src="'storage/'+this.$store.state.auth.img" alt="">
                </button>
            </li>
            <li v-if="options">
                <div>
                    <ul id="options">
                        <!-- Admin User -->
                        <li><router-link v-if="this.$store.state.auth.permissions>1" :to="{name:'dashboard'}" >Dashboard</router-link></li>
                        <li><router-link :to="{name:'my-code'}">Your Profile</router-link></li>
                        <li><a>Another action</a></li>
                        <li><a>Something</a></li>
                        <li><button @click="logout">Sing out</button></li>
                    </ul>
                </div>
            </li>    
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name:'naVue',

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
        foo(){
            console.log(this.$store.state.auth)
        },
        logout(){
            axios.post('/api/logout').then(()=>{
                this.$store.dispatch('logout');
                this.$router.push({name:"login"})
            })
            .catch((e)=>{
                console.log("Error en logout Nav.vue")
                console.log(e)
            })
        },
        exit(){
            this.$store.dispatch('changeNav', 1);
            this.$router.push({name:"home"});
        }
 
    },
}
</script>

<style>

</style>