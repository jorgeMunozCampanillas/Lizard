<template>
<div>
    <button @click="showCode()">
        <img :src="'/storage/'+data.img" class="post-img" alt="">
        <!-- <iframe :srcdoc="src" frameborder="0" class="post-img"></iframe> -->
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
            </div>
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
            default: "platano"
        },
        likes:{
            default: []
        },

    },
    computed:{
        /*src(){
            let aux = `
            <html>
                <script src="https://cdn.tailwindcss.com"><\/script>
                <body>${this.post.component.html}</body>
                <style>${this.post.component.html}</style>
                <script>${this.post.component.html}<\/script>
            </html>`;
            return aux;
        }*/
    },
    methods: {
        foo(){
            console.log(this.post)
        },
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
            this.$router.push({name:'show-code', params: { id: this.data.idPost }})

        },
        showUser(){
            //Not to view your user like other user
            if (this.data.idUsu != this.$store.state.auth.idUsu) {
                this.$router.push({name:'code-others', params: { id: this.data.idUsu }})
            }else{
                let path = '/show/myCode';
                if (this.$route.path != path) {
                    this.$router.push({name:'my-code', params: { id: this.data.idPost }});
                }
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

    },
}
</script>

<style>

</style>