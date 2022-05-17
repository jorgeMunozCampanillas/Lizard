<template>
<div id="home">
  <div id="menu">
    MENU¿?
  </div>
  <div id="posts">
    <h1 class="title">Tops Components</h1>

    <Post 
      v-for="post in posts" :key="post.component.idPost"
        :post="post"
        :likes="likes"
        class="post" 
    ></Post>

  </div>
</div>
</template>

<script>
import Post from './code/OnePost.vue';
export default {
  components:{
    Post
  },
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
        axios.get('/api/post/code').then(res=>{
            this.posts = res.data;
        })
        .catch(err=>{
          console.log("Error Home.vue getAllCode");
          console.log(err.data);
        })
    },
    getAuthLikes(){
      axios.get('/api/user/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
        console.log("Error Home.vue getAutLikes");
        console.log(err.data);
      })
    }


  },
}
</script>

<style>

</style>