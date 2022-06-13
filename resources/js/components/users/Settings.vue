<template>
    <div id="setting-wrapper">
        <h1 class="settings-title">Settings Profile</h1> 
        <div id="nor-wrapper">
            <div id="settings-options" class="settings-normal">
                <div class="option nor-zone">
                    <h3>Info zone</h3>
                </div>
                <div class="option">
                    <p>Email: &nbsp;&nbsp;</p>
                    <p>{{user.email}}</p>
                </div>
                <div class="option">
                    <p>Created date: &nbsp;&nbsp;</p>
                    <p>{{user.created.split('T')[0]}}</p>
                </div>
            </div>
            <div id="settings-options" class="settings-normal">
                <div class="option nor-zone">
                    <h3>Normal zone</h3>
                    <p><i>(You can change this properties, you will be logged out)</i></p>
                </div>
                <div class="option">
                    <p>Name: &nbsp;&nbsp;</p>
                    <input class="input-data" type="text" name="name" :placeholder="$t('log.holder_name')" v-model="user.name">
                </div>
                <div class="option">
                    <p>Avatar&nbsp;&nbsp;</p>
                    <img v-if="imagepreview==null" class="option-img" :src="'/storage/'+user.img" alt="">
                    <img v-else class="option-img" :src="imagepreview" alt="">
                    <label for="img">Change avatar</label>
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
                    <p>⚠ To change your password you must write the new one twice, notice, once it is changed, the change cannot be reversed ⚠</p>
                </div>
                <div class="option option-password">
                    <p>Password: </p>
                    <input v-model="pass1" class="input-data" type="password" name="password" :placeholder="$t('log.holder_pass')">
                    <input v-model="pass2" class="input-data" type="password" name="password" :placeholder="$t('log.holder_pass')">
                    <button @click="changePass" class="button">Change Password</button>
                </div>
                <div class="option">
                    <button @click="drop" class="button">
                        <h3>Drop Account</h3>
                    </button>
                </div>
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
            user:{
                created:''
            },
            imagepreview:null,
            pass1:'',
            pass2:'',
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        imgSelected(e){
            this.user.img = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.user.img);
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
            console.log("SII")
            axios.post('/api/user/updateUser', data)
            .then((res) =>{
                //Logout
                axios.post('/api/logout').then(()=>{
                    this.$store.dispatch('logout');
                    this.$router.push({name:"login"});
                })
                .catch((e)=>{
                    console.log("Error en logout Nav.vue")
                    console.log(e)
                })
            }).catch((error) =>{
                //this.errors = error.response.data.errors;
                console.log("Error desde saveFrom de Register.vue")
                console.log(error)
            })
        },
        changePass(){
            if (this.pass1.length>7) {
                if (this.pass1==this.pass2) {
                    let data = {
                        'pass1':this.pass1,
                        'pass2':this.pass2,
                    }
                    axios.post('/api/user/updatePassUser', data)
                    .then(()=>{
                        this.$store.dispatch('logout');
                        this.$router.push({name:"login"});
                    })
                }
            }
        },
        drop(){
            if (confirm('Are you sure?')) {
                axios.post('/api/user/deleteUser')
                    .then(()=>{
                    this.$store.dispatch('logout');
                    this.$router.push({name:"login"});
                });
            }
        }
    },
}
</script>