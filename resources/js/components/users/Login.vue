<template>
  <div>
    <h1>Login</h1>
    <form>
        <label for="email">Email</label>
        <br>
        <input type="email" name="email" placeholder="Email..." v-model="form.email" required autocomplete="email">
        <br>
        <label for="email">Password</label>
        <br>
        <input type="password" name="password" v-model="form.password" placeholder="Pasword...">
        
        <input @click.prevent="saveForm2" type="submit" value="Login">
    </form>
    <p><i>You dont have account yet?? 😮 </i><b><router-link class="nav-link" to="/register">Register NOW!!</router-link></b></p>
  </div>        
</template>

<script>
import EventBus from '../../bus';
export default {
    data() {
        return {
            form:{
                email:'',
                password:'',
            },
            errors:[]
        }
    },
    methods: {
        saveForm(){
            this.axios.post('/api/login', this.form).then((res)=>{
                EventBus.$emit('updateAuth');
                this.$router.push({name:"home"})
            }).catch((error)=>{
                console.log("Error desde Login.vue")
                this.errors = error.response.data.errors;
            })
        },

        saveForm2(){
            //axios.get('/sactum/csrf-cookie').then(() => {
                this.axios.post('/api/login', this.form).then((res)=>{
                    console.log(res)
                    EventBus.$emit('updateAuth');
                    this.$router.push({name:"home"})
                }).catch((error)=>{
                    console.log("Error desde Login.vue ddsfaf")
                    this.errors = error.response.data.errors;
                })
            //})
        }

    }
}
</script>

<style>

</style>