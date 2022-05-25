<template>
<div>
    <button @click="showCode()">
        <!-- <img :src="'/storage/'+data.img" class="post-img" alt=""> -->

        <div class="text" style="background-color:white;">
            <div class="iframe-preview">
                <iframe :srcdoc="src" style="border:0px #FFFFFF none;" name="test" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="2000px" width="250%"></iframe>
            </div>
        </div>

    </button>
    <div class="post_user">
        <img :src="'/storage/'+data.userImg" class="post_user-img" alt="">
        <div class="post_user-names">
            <div class="post_info">
                <h3>{{data.postName}}</h3>
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
                </ul>
                <!-- Options -->
                <div class="post_info-options" v-if="data.idUsu == this.$store.state.auth.idUsu">
                    <ul class="post_options-menu" :class="{'hidden':dropHidden}">
                        <li @click="drop" class="post_options-borrar"><i class="bi bi-trash-fill"></i> Borrar</li>
                        <li v-if="data.deleted_at != null" @click="restore" class="post_options-restore"><i class="bi bi-recycle"></i> Restore</li>
                        <li>Colección</li>
                    </ul>
                    <button @click="dropMenu()" class="post_options-button"><i class="bi bi-three-dots"></i></button>
                </div>
 
            </div>
            {{data.deleted_at}}
            <h5 @click="showUser()">{{data.name}}</h5>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "Post",
    props:{
        data:{
            default: ''
        },
        likes:{
            default: []
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
                this.$router.push({name:'code-others', params: { id: this.data.idUsu }})
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