<template>
  <div>
    <h1>Register</h1>
    <form method="POST" enctype="multipart/form-data">
        <label for="name">Name</label>
        <br>
        <span v-if="errors.name" style="color:red;">{{errors.name}}<br></span>
        <input type="text" name="name" placeholder="Name..." v-model="form.name" required autofocus>
        <br>
        <label for="email">Email</label>
        <br>
        <span v-if="errors.email" style="color:red;">{{errors.email}}<br></span>
        <input type="email" name="email" placeholder="Email..." v-model="form.email" required autocomplete="email">
        <br>
        <label for="email">Password</label>
        <br>
        <span v-if="errors.password" style="color:red;">{{errors.password}}<br></span>
        <input type="password" name="password" v-model="form.password" placeholder="Pasword...">
        <br>
        <label for="email">Confrim Password</label>
        <br>
        <span v-if="errors.password_confirmation" style="color:red;">{{errors.password_confirmation}}<br></span>
        <input type="password" name="password_confirmation" v-model="form.password_confirmation" placeholder="Pasword...">
        <br>
        <label for="email">Img</label>
        <input type="file" name="img" @change="imgSelected">
        <input @click.prevent="saveForm" type="submit" value="Register">
    </form>
    <br>
    <p>Preview</p>
    <img :src="imagepreview" style="max-height:100px;" alt="">
    <p><i>Do you already have an account? 😉 </i><b><router-link class="nav-link" to="/login">Login NOW!!</router-link></b></p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                name:'',
                email:'',
                password:'',
                password_confirmation:'',
                img:'',
            },
            imagepreview: '',
            errors:[]
        }
    },
    methods: {
        //Img preview
        imgSelected(e){
            this.form.img = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.form.img);
            reader.onload = e => {
                this.imagepreview = e.target.result;
            };
        },
        saveForm(){
            let data = new FromData;
            data.append('image')
            /*axios.post('api/users', this.form).then((req) =>{
                this.$router.push({name:"login"});
            }).catch((error) =>{
                this.errors = error.response.data.errors;
                console.log("Error desde saveFrom de Register.vue")
                console.log(error)
            })*/
        }
    },
}
</script>

<style>

</style>