<template>
<div>
    <button @click="showCode()">
        <!-- <img :src="'/storage/'+data.img" class="post-img" alt=""> -->

        <div class="iframe">
            <div class="iframe-preview">
                <iframe :srcdoc="src" name="test" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" width="250%"></iframe>
            </div>
        </div>

    </button>
    <div class="post_user">
        <img :src="'/storage/'+data.userImg" class="post_user-img" alt="">
            <div class="post_info">
                <!-- Names -->
                <div class="post_info-names">
                    <button class="button-text"><h3>{{postName}}</h3></button>
                    <button class="button-text"><h5 @click="showUser()">{{data.name}}</h5></button>
                </div>


                <ul class="post_info-meta">
                    <!-- Likes -->
                    <li @click="like()" v-if="likes.includes(data.idPost)">
                        <i class="bi bi-heart-fill"></i>{{data.likes}}
                    </li>
                    <li @click="like()" v-else>
                        <i class="bi bi-heart"></i>{{data.likes}}
                    </li>
                    <!-- Views -->
                    <li>
                        <i class="bi bi-eye-fill"></i>{{data.views}}
                    </li>
                    <!-- Options -->
                    <li class="post_info-options" v-if="data.idUsu == this.$store.state.auth.idUsu">
                        <ul class="post_options-menu" :class="{'hidden':dropHidden}">
                            <li @click="drop" class="post_options-borrar"><i class="bi bi-trash-fill"></i> Borrar</li>
                            <li v-if="data.deleted_at != null" @click="restore" class="post_options-restore"><i class="bi bi-recycle"></i> Restore</li>
                            <li>Colección</li>
                        </ul>
                        <button @click="dropMenu()" class="post_options-button"><i class="bi bi-three-dots"></i></button>
                    </li>
                </ul>

 
            </div>
            {{data.deleted_at}}
    </div>
</div>
</template>

<script>
import { stringify } from 'querystring';


export default {
    name: "Post",
    props:{
        data:{
            type: Object,
            default() {
                return {
                    postName:''
                }
            }
        },
        likes:{
            type: Array,
            default() {
                return {
                    postName:''
                }
            }
        },

    },
    data() {
        return {
            dropHidden:true,
        }
    },
    computed:{
        src(){
            let aux = `
            <html>
                ${this.data.script}
                <body>${this.data.html}</body>
                <style>${this.data.css}</style>
            </html>`;
            return aux;
        },
        postName(){
            console.log(this.data.postName.length)
            if (this.data.postName.length > 15) {
                return this.data.postName.slice(0, 12)+"...";
            }
            return this.data.postName;
        }
    },
    methods: {
        showCode(){
            let data = {
                idPost:this.data.idPost
            }
            //+1 view
            axios.post('/api/post/view', data).then(res=>{

            }).catch(err=>{
                console.log('Error in OnePost.vue showCode');
                console.log(err);
            })
            //Go to code
            if (this.data.idUsu == this.$store.state.auth.idUsu) {
                this.$router.push({name:'update-code', params: { id: this.data.idPost }})             
            }else{
                this.$router.push({name:'show-code', params: { id: this.data.idPost }})
            }

        },
        showUser(){
            //Not to view your user like other user
            if (this.data.idUsu != this.$store.state.auth.idUsu) {
                this.$router.push({name:'code-others', params: { idUsu: this.data.idUsu }})
            }else{
                this.$router.push({name:'my-code', params: { id: this.data.idPost }});
            }
        },
        like(){
            let data = {
                'idPost': this.data.idPost,
            }

            axios.post('/api/post/like', data).then(res=>{
                //Like action change <3 and number
                if (this.likes.includes(this.data.idPost)) {
                    let index = this.likes.indexOf(this.data.idPost);
                    this.likes.splice(index, 1);
                    this.data.likes--;
                }else{
                    this.likes.push(this.data.idPost)
                    this.data.likes++;;
                }
            })
            .catch(err=>{
                console.log("Error Home.vue like");
                console.log(err.data);
            })
        },
        dropMenu(){
            this.dropHidden = !this.dropHidden; 
        },
        drop(){
            let idPost = this.data.idPost;
            let idUsu = this.$store.state.auth.idUsu;
            axios.get('/api/post/delete/'+idPost+'/'+idUsu)
            .then(res=>{
                console.log(res)
                this.$parent.deletePost(idPost);
            })
            .catch(err =>{
                if (err.response.status == 403) {
                    this.$router.push({name:'permissError', params: {msg: err.response.data.error}})
                }
            })
        },
        restore(){
            axios.get('/api/post/restore/'+this.data.idPost)
            .then(res=>{
                this.$parent.deletePost(this.data.idPost);
            })
            .catch(err=>{
                console.log("Error en OnePost.vue restore");
                console.log(err);
            })
        }

    },
}
</script>

<style>

</style>