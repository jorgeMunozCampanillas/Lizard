<template>
<div id="profile">
  <div class="profile_header">
    <h1 class="profile_header-name">{{this.$store.state.auth.name}}</h1>
    <img class="profile_header-img" :src="'/storage/'+this.$store.state.auth.img" alt="">
    <div class="profile_header-data">
      <div>Components: {{postsNumber}}</div>
      <div>Followers: {{followers}}</div>
      <div @click="SET_OPMAIN(2)">Following: {{followings}}</div>
    </div>
  </div>

  <div class="profile_main">

    <nav id="nav_profile">
      <ul class="nav_profile-main nav_profile-option">
          <li @click="SET_OPMAIN(1)" :class="{active: optionMain == 1}">Your Work</li>
          <li @click="SET_OPMAIN(2)" :class="{active: optionMain == 2}">Following</li>
          <li @click="SET_OPMAIN(3)" :class="{active: optionMain == 3}">Followers</li>
      </ul>
      <hr>
      <ul v-if="optionMain == 1" class="nav_profile-work nav_profile-option">
          <li @click="SET_OPSECOND(1)" :class="{active: optionSecond == 1}">Components</li>
          <li @click="SET_OPSECOND(2)" :class="{active: optionSecond == 2}">Collections</li>
          <li @click="SET_OPSECOND(3)" :class="{active: optionSecond == 3}">Deleted</li>
      </ul>
    </nav>

    <!-- Your posts -->
    <div id="profile_posts" v-if="optionMain==1">
        <Post 
        v-for="post in posts" :key="post.post.component.idPost"
          :post="post.post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>

    <!-- Following -->
    <div v-if="optionMain==2">
      <div v-for="user in followingsDetails" :key="user.idUsu">
        <img :src="'/storage/'+user.img" alt="">
        <h3>{{user.name}}</h3>
      </div>
    </div>

    <!-- Followers -->
    <div v-if="optionMain==3">
      <div v-for="userFollower in followersDetails" :key="userFollower.idUsu">
      {{userFollower}}
        <img :src="'/storage/'+userFollower.img" alt="">
        <h3>{{userFollower.name}}</h3>
      </div>
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
      posts: [],
      postsNumber: '',
      optionMain: 1,
      optionSecond: 1,
      followingsDetails: [],
      followersDetails: [],
    }
  },
  mounted() {
    this.getAuthLikes();
    this.getAllCode();
  },
    computed:{
    followers(){
      return this.$store.state.follows.followers.length;
    },
    followings(){
      return this.$store.state.follows.followings.length;
    }
  },
  methods:{
    getAllCode(){
        axios.get('/api/getPost').then(res=>{
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
      axios.get('/api/user/likesGiven').then(res =>{
        this.likes = res.data.data;
      })
      .catch(err=>{
        console.log("Error CodeProfile.vue getAutLikes");
        console.log(err.data);
      })
    },
    //Followings
    getFollowings(){
      axios.get('/api/user/following/'+this.$store.state.auth.idUsu)
      .then(res=>{
        this.followingsDetails = res.data.data
      })
      .catch(err=>{
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      })
    },
    //Followers
    getFollowers(){
      axios.get('/api/user/followers/'+this.$store.state.auth.idUsu)
      .then(res=>{
        console.log(res)
        this.followersDetails = res.data.data
      })
      .catch(err=>{
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      })
    },

    //SETTERS
    SET_OPMAIN(id){
      this.optionMain = id;

      switch (id) {
        case 2:
          this.getFollowings();
          break;
        case 3:
          this.getFollowers();
          break;
      
        default:
          break;
      }
    },
    SET_OPSECOND(id){
      this.optionSecond = id;
    }

  },
}
</script>

<style>

</style>