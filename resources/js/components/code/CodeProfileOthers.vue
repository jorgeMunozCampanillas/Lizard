<template>
<div id="profile">
  <!-- <div id="menu"><h1>Opciones¿?</h1></div>
  <div id="posts">
    <h1 class="title">Components from {{this.$route.params.id}}</h1>
        <div id="profile_posts">
        <Post 
        v-for="post in posts" :key="post.post.component.idPost"
          :post="post.post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>
  </div> -->
    <div class="profile_header">
    <h1 class="profile_header-name">{{this.$store.state.auth.name}}</h1>
    <img class="profile_header-img" :src="'storage/'+this.$store.state.auth.img" alt="">
    <div class="profile_header-data">
      <div>Components: 0</div>
      <div>Followers: 0</div>
      <div>Following: 0</div>
    </div>
  </div>

  <div class="profile_main">

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
import Post from './OnePost.vue';
export default {
  components:{
    Post
  },
  data() {
    return {
      posts: '',
    }
  },
  mounted() {
    this.getAuthLikes();
    this.getAllCode();
    this.getUser();
  },
  methods:{
    getAllCode(){
        let idUsu = this.$route.params.id;
        let data = new FormData;
        data.append('idUsu', idUsu);
        axios.post('/api/getPostOther', data).then(res=>{
          if (res.status) {
            this.posts = res.data.data;
          }else{
            this.$router.push({name:'permissError', params: {msg: res.data.error}});
          }
        })
        .catch(err=>{
          console.log("Error CodeOthers.vue getAllCode")
          console.log(err)
        })
    },
    getAuthLikes(){
      axios.get('/api/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
        console.log("Error CodeOthers.vue getAutLikes");
        console.log(err.data);
      })
    },
    getUser(){
      let idUsu = this.$route.params.id;
      let data = new FormData;
      data.append('idUsu', idUsu);
      axios.get('/api/getUser', data).then(res =>{
        console.log(res.data)
        //this.user = res.data.data;
      })
      .catch(err=>{
        console.log("Error CodeOthers.vue getAutLikes");
        console.log(err.data);
      })
    }
  },
}
</script>

<style>

</style>