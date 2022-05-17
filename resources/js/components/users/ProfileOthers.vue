<template>
<div id="profile">
    <div class="profile_header">
    <h1 class="profile_header-name">{{user.name}}</h1>
    <img class="profile_header-img" :src="'/storage/'+user.img" alt="">
    <div class="profile_header-data">
      <ul>
        <li>Components: 0</li>
        <li @click="showFollowers">Followers: {{get_followers}}</li>
        <li @click="showFollowings">Following: {{get_followings}}</li>
        <li>
          <button @click="follow" class="button-Unfollow" v-if="this.$store.state.follows.followings.includes(user.idUsu)"> - Unfollow </button>
          <button @click="follow" class="button-follow" v-else> + Follow </button>
        </li>
      </ul>
    </div>
  </div>

  <div class="profile_main">

    <div id="profile_posts" v-if="optionNav==1">
        <Post 
        v-for="post in posts" :key="post.post.component.idPost"
          :post="post.post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>
    <div v-else-if="optionNav==2">
      <div v-for="user in followersDetails" :key="user.idUsu">
        <img :src="'/storage/'+user.img" alt="">
        <h3>{{user.name}}</h3>
      </div>
    </div>
    <div v-else-if="optionNav==3">
      <div v-for="user in followingsDetails" :key="user.idUsu">
        <img :src="'/storage/'+user.img" alt="">
        <h3>{{user.name}}</h3>
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import Post from '../code/OnePost.vue';
export default {
  components:{
    Post
  },
  data() {
    return {
      posts: '',
      user:{},

      //Follows
      //only ids
      follows:{
        followers:[],
        followings:[],
      },
      //with info
      followersDetails:[],
      followingsDetails:[],

      //Nav Options
      optionNav:1,
    }
  },
  mounted() {
    this.getUser();
    this.getAuthLikes();
    this.getAllCode();
  },
  computed:{
    get_followers(){
      return this.follows.followers.length;
    },
    get_followings(){
      return this.follows.followings.length;
    }
  },
  methods:{
    //Get all code from the user passed
    getAllCode(){
        let idUsu = this.$route.params.id;
        axios.get('/api/post/posts/'+idUsu).then(res=>{
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
      axios.get('/api/user/follow/userData/'+idUsu).then(res =>{
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
      axios.post('/api/user/follow/follow',data)
      .then(res=>{
          if(this.$store.state.follows.followings.includes(this.user.idUsu)){
            //Change button
              let index = this.$store.state.follows.followings.indexOf(this.user.idUsu);
              this.$store.state.follows.followings.splice(index,1);

              //Change count
              index = this.follows.followers.indexOf(this.user.idUsu);
              this.follows.followers.splice(index, 1);

              //For if we are in view followers
              this.followersDetails = this.followersDetails.map(u => u.idUsu != this.$store.state.auth.idUsu);
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
    },
    showFollowers(){
      axios.get('/api/user/follow/followers/'+this.user.idUsu)
      .then(res=>{
        this.optionNav=2;
        this.followersDetails = res.data.data;
      })
      .catch(err=>{
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      })
    },
        //Followings
    showFollowings(){
      axios.get('/api/user/follow/following/'+this.user.idUsu)
      .then(res=>{
        this.optionNav=3;
        this.followingsDetails = res.data.data;
      })
      .catch(err=>{
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      })
    },
  },
}
</script>

<style>

</style>