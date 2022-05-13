<template>
<div id="profile">
  
  <div class="profile_header">
    <h1 class="profile_header-name">{{this.$store.state.auth.name}}</h1>
    <img class="profile_header-img" :src="'storage/'+this.$store.state.auth.img" alt="">
    <div class="profile_header-data">
      <div>Components: {{postsNumber}}</div>
      <div>Followers: 0</div>
      <div>Following: 0</div>
    </div>
  </div>

  <div class="profile_main">

    <nav-profile id="nav_profile"></nav-profile>


    <div id="profile_posts">
        <Post 
        v-for="post in posts" :key="post.post.component.idPost"
          :post="post.post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>
    
  </div>
</div>
</template>

<script>
import NavProfile from './../mains/NavProfile.vue';
import Post from './OnePost.vue';
export default {
  components:{
    NavProfile,
    Post
  },
  data() {
    return {
      posts: [],
      postsNumber: '',
    }
  },
  mounted() {
    this.getAuthLikes();
    this.getAllCode();
  },

  methods:{
    getAllCode(){
        axios.get('/api/getPost').then(res=>{
          console.log(res.data.data[0].post);
          if (res.status) {
            this.posts = res.data.data;
            this.postsNumber = res.data.data.length
          }else{
            this.$router.push({name:'permissError', params: {msg: res.data.error}});
          }
        })
        .catch(err=>{
          console.log("Error CodeProfile.vue getAllCode")
          console.log(err)
        })
    },
    getAuthLikes(){
      axios.get('/api/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
        console.log("Error CodeProfile.vue getAutLikes");
        console.log(err.data);
      })
    },
  },
}
</script>

<style>

</style>