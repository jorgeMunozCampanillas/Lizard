<template>
    <div id="setting-wrapper">
        <h1 class="settings-title">Settings Profile</h1> 
        <div id="settings-options" class="settings-normal">
            <div class="option nor-zone">
                <h2>Normal zone</h2>
            </div>
            <div class="option">
                <p>Name</p>
                <input class="input-data" type="text" name="name" :placeholder="$t('log.holder_name')" v-model="user.name">
            </div>
            <div class="option">
                <p>Avatar</p>
                <img v-if="imagepreview==null" class="option-img" :src="'/storage/'+user.img" alt="">
                <img v-else class="option-img" :src="imagepreview" alt="">
                <label for="img">New avatar</label>
                <input id="img" style="visibility:hidden;" class="input-data" placeholder="img" type="file" name="img" @change="imgSelected">
            </div>
            <div class="option">
                <p>Lang</p>
                <LangSwitch id="lang_switch"></LangSwitch>
            </div>
            <div class="option">
                <button @click="saveNormal" class="button save-button">Save</button>
            </div>
        </div>
        <div id="settings-options" class="settings-danger">
            <div class="option dan-zone">
                <h2>Dangerous zone</h2>
            </div>
            <div class="info">
                <p>⚠ To change your password you must write your old password and the new one twice, notice, once it is changed, the change cannot be reversed ⚠</p>
            </div>
            <div class="option">
                <p>Password: </p>
                <input class="input-data" type="password" name="password" :placeholder="$t('log.holder_pass')">
                <input class="input-data" type="password" name="password" :placeholder="$t('log.holder_pass')">
            </div>
            <div class="option">
                <button class="button">
                    <h3>Drop Account</h3>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import LangSwitch from './../navs/LangSwitch.vue';
export default{
    components:{
        LangSwitch,
    },
    data() {
        return {
            user:{},
            imagepreview:null
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        imgSelected(e){
            this.imagepreview = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.imagepreview);
            reader.onload = e => {
                this.imagepreview = e.target.result;
            };
        },
        getData(){
            axios.get('/api/user/authData').then((res)=>{
            this.user = res.data;
            })
            .catch((err)=>{
            if (err.response.status==403) {
                this.$router.push({name:'permissError'})
            }
            });
        },
        saveNormal(){
            let data = new FormData;
            data.append('name', this.user.name)
            data.append('img', this.user.img)
            
            axios.put('api/user/users/'+this.$store.state.auth.idUsu, data).then((req) =>{
                this.$router.push({name:"home"});
            }).catch((error) =>{
                //this.errors = error.response.data.errors;
                console.log("Error desde saveFrom de Register.vue")
                console.log(error)
            })
        }
    },
}
</script>