<template>
<div>
  <div id="seach_wrapper">
    <div id="posts">
    <h1 class="title">{{$t('search.resultMsg')}} '<i>{{$route.params.name}}</i>'</h1>
      <div id="post_search">
        <Post 
          v-for="post in posts" :key="post.idPost"
            :data="post"
            :likes="likes"
            class="post" 
        ></Post>
      </div>
    </div>
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
    console.log("Busco en:")
    console.log(this.$route.params.route)
    if (this.$route.params.route==undefined) {
      this.$router.push({name:'home'})
    }
    if (this.$store.state.isAuthenticated) {
      this.getAuthLikes();
    }
    this.getPosts();
  },
  methods:{
    getPosts(){
        axios.get(this.$route.params.route)
        .then(res=>{
          console.log(res)
            this.posts = res.data.data;
        })
        .catch(err => {
            console.log("Error en Search.vue getPosts");
            console.log(err)
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
  }
}
</script>

<style>

</style>