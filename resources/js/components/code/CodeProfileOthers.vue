<template>
<div id="profile">
    <div class="profile_header">
    <h1 class="profile_header-name">{{user.name}}</h1>
    <img class="profile_header-img" :src="'/storage/'+user.img" alt="">
    <div class="profile_header-data">
      <ul>
        <li>Components: 0</li>
        <li>Followers: {{followers}}</li>
        <li>Following: {{followings}}</li>
        <li>
          <button @click="follow" class="button-Unfollow" v-if="this.$store.state.follows.followings.includes(user.idUsu)"> - Unfollow </button>
          <button @click="follow" class="button-follow" v-else> + Follow </button>
        </li>
      </ul>
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
      user:{},
      follows:{
        followers:[],
        followings:[],
      },
    }
  },
  mounted() {
    this.getUser();
    this.getAuthLikes();
    this.getAllCode();
  },
  computed:{
    followers(){
      return this.follows.followers.length;
    },
    followings(){
      return this.follows.followings.length;
    }
  },
  methods:{
    //Get all code from the user passed
    getAllCode(){
        let idUsu = this.$route.params.id;
        axios.get('/api/getPostOther/'+idUsu).then(res=>{
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
    //Get your likes
    getAuthLikes(){
      axios.get('/api/user/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
        console.log("Error CodeOthers.vue getAutLikes");
        console.log(err.data);
      })
    },
    //Get data from the user passed
    getUser(){
      let idUsu = this.$route.params.id;
      axios.get('/api/user/getUser/'+idUsu).then(res =>{
        this.user = res.data.data;
        this.follows = res.data.follows;
        console.log(this.follows)
      })
      .catch(err=>{
        console.log("Error CodeOthers.vue getAutLikes");
        console.log(err.data);
      })
    },
    follow(){
      let data = {
        idUsu:this.user.idUsu,
      }
      axios.post('/api/user/follow',data)
      .then(res=>{
          if(this.$store.state.follows.followings.includes(this.user.idUsu)){
            //Change button
              let index = this.$store.state.follows.followings.indexOf(this.user.idUsu);
              this.$store.state.follows.followings.splice(index,1);

              //Change count
              index = this.follows.followers.indexOf(this.user.idUsu);
              this.follows.followers.splice(index, 1);
          }else{
            //Change button
            this.$store.state.follows.followings.push(this.user.idUsu);

            //Change count
            this.follows.followers.push(this.user.idUsu);
          }
      })
      .catch(err=>{
        console.log('Error en CodeProfileOthers.vue follow');
        console.log(err)
      });
    }
  },
}
</script>

<style>

</style>