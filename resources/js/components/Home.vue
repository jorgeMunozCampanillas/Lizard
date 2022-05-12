<template>
<div id="home">
  <div id="menu">
    MENU¿?
  </div>
  <div id="posts">
    <h1 class="title">Tops Components</h1>
    <div v-for="post in posts" :key="post.post.idPost" class="post">
      <button @click="showCode(post.post.idPost)">
        <img v-if="post.post.img!=null" :src="'storage/'+post.post.img" class="post-img" alt="">
      </button>
        <div class="post_user">
          <img :src="'storage/'+post.user[0].img" class="post_user-img" alt="">
          <div class="post_user-names">
            <div class="post_info">
              <h3>{{post.post.postName}}</h3>
              <ul class="post_info-meta">
                <!-- Likes -->
                <li @click="like(post.post.idPost)" v-if="likes.includes(post.post.idPost)" :id="'like-'+post.post.idPost">
                  <i class="bi bi-heart-fill"></i>{{post.likes}}
                </li>
                <li @click="like(post.post.idPost)" v-else :id="'like-'+post.post.idPost">
                  <i class="bi bi-heart"></i>{{post.likes}}
                </li>
              </ul>
            </div>
            <h5 @click="showUser(post.user[0].idUsu)">{{post.user[0].name}}</h5>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      posts: '',
      likes: [],
    }
  },
  mounted() {
    this.getAuthLikes();
    this.getAllCode();
  },
  methods:{
    getAllCode(){
        axios.get('/api/code').then(res=>{
            this.posts = res.data;
        })
        .catch(err=>{
          console.log("Error Home.vue getAllCode");
          console.log(err.data);
        })
    },
    getAuthLikes(){
      axios.get('/api/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
        console.log("Error Home.vue getAutLikes");
        console.log(err.data);
      })
    },
    like(idPost){
      let data = {
        'idPost': idPost,
      }

      axios.post('/api/like', data).then(res=>{
        //Like action change <3 and number
        if (this.likes.includes(idPost)) {
          let index = this.likes.indexOf(idPost);
          this.likes.splice(index, 1);
          this.posts[idPost-1].likes--;
        }else{
          this.likes.push(idPost)
          this.posts[idPost-1].likes++;
        }
      })
      .catch(err=>{
        console.log("Error Home.vue like");
        console.log(err.data);
      })
    },
    showCode(idPost){
      this.$router.push({name:'show-code', params: { id: idPost }})
    },
    showUser(idUsu){
      this.$router.push({name:'codeOthers', params: { id: idUsu }})
    }

  },
}
</script>

<style>

</style>