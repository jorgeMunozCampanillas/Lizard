<template>
<div>
    <button @click="showCode()">
        <img :src="'/storage/'+post.component.img" class="post-img" alt="">
    </button>
    <div class="post_user">
        <img :src="'/storage/'+post.user.img" class="post_user-img" alt="">
        <div class="post_user-names">
            <div class="post_info">
                <h3>{{post.component.postName}}</h3>
                <ul class="post_info-meta">
                    <!-- Likes -->
                    <li @click="like()" v-if="likes.includes(post.component.idPost)">
                        <i class="bi bi-heart-fill"></i>{{post.likes}}
                    </li>
                    <li @click="like()" v-else>
                        <i class="bi bi-heart"></i>{{post.likes}}
                    </li>

                    <!-- Views -->
                    <li>
                        <i class="bi bi-eye-fill"></i>{{post.component.views}}
                    </li>
                </ul>
            </div>
            <h5 @click="showUser()">{{post.user.name}}</h5>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: "Post",
    props:{
        post:{
            default: "platano"
        },
        usu:{
            default: "platano"
        },
        likes:{
            default: []
        }
    },
    methods: {
        showCode(){
            let data = {
                idPost:this.post.component.idPost
            }
            //+1 view
            axios.post('/api/addView', data).then(res=>{
                console.log("add view")
                console.log(res);
            }).catch(err=>{
                console.log('Error in OnePost.vue showCode');
                console.log(err);
            })
            //Go to code
            this.$router.push({name:'show-code', params: { id: this.post.component.idPost }})

        },
        showUser(){
            //Not to view your user like other user
            if (this.post.user.idUsu != this.$store.state.auth.idUsu) {
                this.$router.push({name:'code-others', params: { id: this.post.user.idUsu }})
            }else{
                let path = '/show/myCode';
                if (this.$route.path != path) {
                    this.$router.push({name:'my-code', params: { id: this.post.component.idPost }});
                }
            }
        },
        like(){
            let data = {
                'idPost': this.post.component.idPost,
            }

            axios.post('/api/like', data).then(res=>{
                //Like action change <3 and number
                if (this.likes.includes(this.post.component.idPost)) {
                    let index = this.likes.indexOf(this.post.component.idPost);
                    this.likes.splice(index, 1);
                    this.post.likes--;
                }else{
                    this.likes.push(this.post.component.idPost)
                    this.post.likes++;;
                }
            })
            .catch(err=>{
                console.log("Error Home.vue like");
                console.log(err.data);
            })
        }
    },
}
</script>

<style>

</style>