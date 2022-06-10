<template>
<div id="profile">
  <div class="profile_header">
    <h1 class="profile_header-name">{{this.$store.state.auth.name}}</h1>
    <img class="profile_header-img" :src="'/storage/'+this.$store.state.auth.img" alt="">
    <div class="profile_header-data">
      <div>{{$t('profile.components_count', {msg:postsNumber})}}</div>
      <div @click="SET_OPMAIN(4)">{{$t('profile.followers_count', {msg:followers})}}</div>
      <div @click="SET_OPMAIN(5)">{{$t('profile.following_count', {msg:followings})}}</div>
    </div>
  </div>

  <div class="profile_main">

    <nav id="nav_profile">
      <ul class="nav_profile-main nav_profile-option">
          <li @click="SET_OPMAIN('your_work'), SET_OPSECOND('resume')" :class="{active: optionMain == 'your_work'}">{{$t('profile.your_work')}}</li>
          <li @click="SET_OPMAIN('following'), SET_OPSECOND('none')" :class="{active: optionMain == 'following'}">{{$t('profile.following')}}</li>
          <li @click="SET_OPMAIN(3), SET_OPSECOND('none')" :class="{active: optionMain == 3}">{{$t('profile.trending')}}</li>
      </ul>
      <hr>
      <ul v-if="optionMain == 'your_work'" class="nav_profile-work nav_profile-option">
          <li @click="SET_OPMAIN('your_work'), SET_OPSECOND('resume')" :class="{active: optionSecond == 'resume'}">{{$t('profile.components')}}</li>
          <!-- <li @click="SET_OPSECOND(2)" :class="{active: optionSecond == 2}">{{$t('profile.collections')}}</li> -->
          <li @click="SET_OPMAIN('your_work'), SET_OPSECOND('your_work')" :class="{active: optionSecond == 'your_work'}">All posts</li>
          <li @click="SET_OPSECOND(2), SET_OPSECOND('tags')" :class="{active: optionSecond == 'tags'}">Tags</li>
          <li @click="SET_OPSECOND(2), SET_OPSECOND('loved')" :class="{active: optionSecond == 'loved'}">Loved</li>
          <li @click="SET_OPSECOND('your_work'), SET_OPSECOND('deleted')" :class="{active: optionSecond == 'deleted'}">{{$t('profile.delete')}}</li>
      </ul>
    </nav>
    <!-- <<<<<<<<<<<<<<<<< FOLLOWS USERS >>>>>>>>>>>>>> -->
    <!-- Followers -->
    <div v-if="optionMain==4">
      <div v-for="userFollower in followsDetails" :key="userFollower.idUsu">
      {{userFollower}}
        <img :src="'/storage/'+userFollower.img" alt="">
        <h3>{{userFollower.name}}</h3>
      </div>
    </div>
    <!-- Following -->
    <div v-if="optionMain==5">
      <div v-for="user in followsDetails" :key="user.idUsu">
        <img :src="'/storage/'+user.img" alt="">
        <h3>{{user.name}}</h3>
      </div>
    </div>

    <!-- <<<<<<<<<<<<<<<<< MAIN OPTIONS >>>>>>>>>>>>>> -->
        <!-- Components -->
      
    <div id="profile_resume" v-if="optionSecond=='resume'">
      <h1 class="profile_resume-part">Your Best Posts</h1>
      <div class="resume-container resume-container-best">
        <h2 class="profile_resume-title"> First place #1</h2>
        <Post
            :data="posts[0]"
            :likes="likes"
            class="post" 
        ></Post>
      </div>
      <div class="resume-container">
        <h2 class="profile_resume-title"> Second place #2 🥈</h2>
        <Post
            :data="posts[1]"
            :likes="likes"
            class="post" 
        ></Post>
      </div>
      <div class="resume-container">
        <h2 class="profile_resume-title"> Third place #3 🥉</h2>
        <Post
            :data="posts[1]"
            :likes="likes"
            class="post" 
        ></Post>
      </div>

      <h1 class="profile_resume-part">💙 More Likes 💙</h1>
      <div class="resume-container">
        <Post
            :data="posts[1]"
            :likes="likes"
            class="post" 
        ></Post>
      </div>

      <div class="resume-container">
        <h2 class="profile_resume-title">👀 More Views 👀</h2>
        <Post
            :data="posts[2]"
            :likes="likes"
            class="post" 
        ></Post>
                <div class="profile_resume-data">
          <ul>
            <li>Likes: 3</li>
            <li>Views: 90</li>
            <li>Forks: 12</li>
            <li>Date: 12-01-2021</li>
          </ul>
        </div>
      </div>
      <div class="resume-container">
        <h2 class="profile_resume-title"> More Forked</h2>
        <Post
            :data="posts[2]"
            :likes="likes"
            class="post" 
        ></Post>
        <div class="profile_resume-data">
          <ul>
            <li>Likes: 3</li>
            <li>Views: 90</li>
            <li>Forks: 12</li>
            <li>Date: 12-01-2021</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Deleted -->
    <div id="profile_tags" v-if="optionSecond=='deleted'">
      <h2>Deleteds</h2>
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>

    <!-- All posts -->
    <div id="profile_posts" v-if="optionSecond=='your_work'">
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>

    <!-- Loveds -->
    <div id="profile_tags" v-if="optionSecond=='loved'">
      <h2>Last loveds "&lt;3" </h2>
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>

    <!-- Tags -->
    <div id="profile_tags" v-if="optionSecond=='tags'">
      <br>
      <h2 id="">All your tags</h2>
      <ul id="tags">
        <li @click="searchTag(tag.idTag)" class="button-tag tag" v-for="tag in tags">{{tag.tag}}</li>
      </ul>
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>
    
    <!-- Following posts -->
    <div id="profile_posts" v-if="optionMain=='following'">
      <Post 
        v-for="post in followsDetails" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>
  </div>
</div>
</template>

<script>
import Post from '../code/OnePost.vue';
export default {
  components:{
    Post,
  },
  data() {
    return {
      posts: [],
      postsNumber: '',
      //Nav options
      optionMain: 'your_work',
      optionSecond: 'resume',

      //followsUsers/Code
      followsDetails: [],

      likes:[],
      tags:[],
      searchTags:[],
    }
  },
  mounted() {
    this.getAuthLikes();
    this.getPosts();
    if (this.$route.params.opmain) this.optionMain = this.$route.params.opmain
    this.SET_OPMAIN(this.optionMain)

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
    getPosts(){
        axios.get('/api/post/posts/'+this.$store.state.auth.idUsu).then(res=>{
          console.log(res.data.data)
          if (res.status) {
            this.posts = res.data.data;
            this.postsNumber = res.data.data.length
          }else{
            this.$router.push({name:'permissError', params: {msg: res.data.error}});
          }
        })
        .catch(err=>{
          console.log("Error CodeProfile.vue getPosts")
          console.log(err)
        })
    },
    getResume(){
      axios.get('/api/post/posts/'+this.$store.state.auth.idUsu).then(res=>{
        console.log(res.data.data)
        if (res.status) {
          this.posts = res.data.data;
          this.postsNumber = res.data.data.length
        }else{
          this.$router.push({name:'permissError', params: {msg: res.data.error}});
        }
      })
      .catch(err=>{
        console.log("Error CodeProfile.vue getPosts")
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
      axios.get('/api/user/follow/following/'+this.$store.state.auth.idUsu)
      .then(res=>{
        console.log(res)
        this.followsDetails = res.data.data
      })
      .catch(err=>{
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      })
    },
    //Followers
    getFollowers(){
      axios.get('/api/user/follow/followers/'+this.$store.state.auth.idUsu)
      .then(res=>{
        this.followsDetails = res.data.data
      })
      .catch(err=>{
        console.log('Error en CodeProfile.vue getFollowings');
        console.log(err);
      })
    },
    getPostFollowings(){
      axios.get('/api/post/following')
      .then(res=>{
        console.log(res.data.data)
        this.followsDetails = res.data.data;
      })
      .catch(err=>{
        console.log('Error en Profile.vue getPostFollowers')
        console.log(err)
      });
    },
    getPostDeleted(){
      axios.get('/api/post/deleted/'+this.$store.state.auth.idUsu)
      .then(res=>{
        console.log(res.data.data)
        this.posts = res.data.data;
      })
      .catch(err=>{
        console.log('Error en Profile.vue getPostFollowers')
        console.log(err)
      });
    },
    getTags(){
      axios.get('/api/tag/own/')
      .then(res=>{
        this.tags = res.data;
      })
      .catch(err=>{
        console.log('Error en Profile.vue getTags')
        console.log(err)
      });
    },
    searchTag(idTag){
      axios.get('/api/tag/getOwnPostByTag/'+idTag)
        .then(res=>{
          console.log(res.data)
          this.posts = res.data;
        })
      .catch(err => {
        console.log("Error en Profile.vue getTags")
        console.log(err);
      })
    },
    getPostLoved(){
      axios.get('/api/post/getLastPostLoved')
      .then(res=>{
        console.log(res)
        this.posts = res.data;
      })
      .catch(err=>{
        console.log('Error en Profile.vue getTags')
        console.log(err)
      });
    },


    //SETTERS
    SET_OPMAIN(id){
      this.optionMain = id;

      switch (id) {
        case 'your_work':
          this.getPosts();
          break;
        case 'following':
          this.getPostFollowings();
          break;
        case 'resume':
          this.getResume();
          break;
        case 4:
          this.getFollowers();
          break;
        case 5:
          this.getFollowings();
          break;
      
        default:
          break;
      }
    },
    SET_OPSECOND(id){
      this.optionSecond = id;
      this.posts = [];

      switch (id) {
        case 'components':
          
          break;
        case 'tags':
          this.getTags();
          break;
        case 'deleted':
          this.getPostDeleted();
          break;
        case 'loved':
          this.getPostLoved();
          break;
      
        default:
          break;
      }
    },

    deletePost(idPost){
      let newPosts = this.posts.filter(p => p.idPost != idPost);
      this.posts = newPosts;
    },

  },
}
</script>

<style>

</style>