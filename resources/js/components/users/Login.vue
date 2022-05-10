<template>
  <div class="form">
    <div class="form-container">
        <h1>Log in</h1>
        <form>
            <div v-if="error" class="form-error">The username or password is incorrect</div>
            <input class="input-data" type="email" name="email" placeholder="Email" v-model="form.email" required autocomplete="email">
            <br>
            <input class="input-data" type="password" name="password" v-model="form.password" placeholder="Pasword">
            <br>
            <button class="input-submit" @click.prevent="saveForm" type="submit" >LOG IN</button>
        </form>
        <div class="form-or">
            <hr>
            <span class="or">OR</span>
            <hr>
        </div>
        <p class="form-info"><i>You dont have account yet?? 😮 <br></i><b><router-link class="nav-link" to="/register">Register NOW!!</router-link></b></p>
    </div>
  </div>        
</template>

<script>
export default {
    data() {
        return {
            form:{
                email:'',
                password:'',
            },
            error:false
        }
    },
    methods: {
        saveForm(){
            this.axios.post('/api/login', this.form).then((res)=>{
                if (res.data.status) {
                    this.$store.dispatch('login', res.data.data);
                    this.$router.push({name:"home"})
                }else{
                    this.error = true;
                }
            }).catch((error)=>{
                console.log("Error desde Login.vue ddsfaf")
                console.log(error)

            })
        },
    }
}
</script>

<style>

</style>