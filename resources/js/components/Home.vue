<template>
<div id="home">
  <div id="menu">
    MENU¿?
  </div>
  <div id="posts">
    <h1 class="title">{{$t('home.top_comopnents')}}</h1>
    <Post 
      v-for="post in posts" :key="post.idPost"
        :data="post"
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
    if (this.$store.state.isAuthenticated) {
      this.getAuthLikes();
    }
    this.getPosts();
  },
  methods:{
    getPosts(){
        axios.get('/api/code').then(res=>{
            console.log(res)
            this.posts = res.data.data;
        })
        .catch(err=>{
          console.log("Error Home.vue getPosts");
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