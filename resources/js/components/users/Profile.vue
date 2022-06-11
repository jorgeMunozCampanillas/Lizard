<template>
<div id="profile">
  <div class="profile_header">
    <h1 class="profile_header-name">{{this.$store.state.auth.name}}</h1>
    <img class="profile_header-img" :src="'/storage/'+this.$store.state.auth.img" alt="">
    <div class="profile_header-data">
      <div class="follows-button" @click="SET_OPMAIN(4), SET_OPSECOND('none')">{{$t('profile.followers_count', {msg:followers})}}</div>
      <div class="follows-button" @click="SET_OPMAIN(5), SET_OPSECOND('none')">{{$t('profile.following_count', {msg:followings})}}</div>
    </div>
  </div>

  <div class="profile_main">

    <nav id="nav_profile">
      <ul class="nav_profile-main nav_profile-option">
          <li @click="SET_OPMAIN('your_work'), SET_OPSECOND('profile')" :class="{active: optionMain == 'your_work'}">{{$t('profile.your_work')}}</li>
          <li @click="SET_OPMAIN('following'), SET_OPSECOND('none')" :class="{active: optionMain == 'following'}">{{$t('profile.following')}}</li>
          <li @click="SET_OPMAIN(5), SET_OPSECOND('none')" :class="{active: optionMain == 4 || optionMain == 5}">Friends</li>
      </ul>
      <hr>
      <ul v-if="optionMain == 'your_work'" class="nav_profile-work nav_profile-option">
          <li @click="SET_OPMAIN('your_work'), SET_OPSECOND('profile')" :class="{active: optionSecond == 'profile'}">Profile</li>
          <li @click="SET_OPMAIN('your_work'), SET_OPSECOND('all')" :class="{active: optionSecond == 'all'}">All posts</li>
          <li @click="SET_OPSECOND(2), SET_OPSECOND('tags')" :class="{active: optionSecond == 'tags'}">Tags</li>
          <li @click="SET_OPSECOND(2), SET_OPSECOND('loved')" :class="{active: optionSecond == 'loved'}">Loved</li>
          <li @click="SET_OPSECOND('your_work'), SET_OPSECOND('deleted')" :class="{active: optionSecond == 'deleted'}">{{$t('profile.delete')}}</li>
      </ul>
    </nav>
    <!-- <<<<<<<<<<<<<<<<< FOLLOWS USERS >>>>>>>>>>>>>> -->
    <!-- Followers -->
    <div class="profile_main-follows" v-if="optionMain==4">
      <User-Card v-for="user in followsDetails" :key="user.idUsu"
        class="user"
        :user="user"
      />
      <div v-if="followsDetails[0]==null" class="profile_follows-msg"><h3>You dont follow to any</h3></div>
    </div>
    <!-- Following -->
    <div class="profile_main-follows" v-if="optionMain==5">
      <User-Card v-for="user in followsDetails" :key="user.idUsu"
        class="user"
        :user="user"
      />
    </div>

    <!-- <<<<<<<<<<<<<<<<< MAIN OPTIONS >>>>>>>>>>>>>> -->
        <!-- Components -->
      
    <div id="profile_resume" v-if="optionSecond=='profile'">

      <div id="profile_resume-month">
        <h2>📅 Your work this month 📅</h2>
        <h4>June</h4>
        <table id="month_table">
          <thead>
            <th>Lu</th>
            <th>Ma</th>
            <th>Mi</th>
            <th>Ju</th>
            <th>Vi</th>
            <th>Sa</th>
            <th>Do</th>
          </thead>
          <tr v-for="semana in 4">
            <td v-for="dia in 7" :class="{'month_table-work':dayWork(semana*7+dia-7)}"></td>
          </tr>
        </table>
      </div>

      <div id="profile_resume-statics">
        <h2>Total statistics 📈</h2>
        <div id="statics-container">
          <div class="static">
            <p>Views 👀</p>
            <p>{{statistics.views}}</p>
          </div>
          <div class="static">
            <p>Likes 💙</p>
            <p>{{statistics.likes}}</p>
          </div>
          <div class="static">
            <p>Follows 🙍‍♂️</p>
            <p>{{statistics.followers}}</p>
          </div>
          <div class="static">
            <p>Forks 📤</p>
            <p>5</p>
          </div>
        </div>
      </div>

      <div class="resume-container resume-container-best">
        <h1 class="profile_resume-title"> Your Best Posts </h1>
        <Post
            :data="posts[0]"
            :likes="likes"
            class="post" 
        ></Post>
      </div>
    </div>

    <!-- Deleted -->
    <div id="profile_tags" v-if="optionSecond=='deleted'">
      <h2>Deleted <i class="bi bi-trash-fill"></i></h2>
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
    </div>

    <!-- All posts -->
    <div id="profile_tags" v-if="optionSecond=='all'">
      <h2>All your posts</h2>
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
      <button @click="load()" class="profile_load button-load">Load</button>
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
      <div v-if="posts[0]==null" class="profile_tags-msg"><h3>You dont love any post &lt;/3</h3></div>
    </div>

    <!-- Tags -->
    <div id="profile_tags" v-if="optionSecond=='tags'">
      <br>
      <h2>All your tags <hr></h2>
      <ul id="tags">
        <li @click="searchTag(tag.idTag, tag.tag)" class="button-tag tag" v-for="tag in tags">{{tag.tag}}</li>
      </ul>
      <h3 class="profile_tags-title">{{nameTagSearch}}</h3>
        <Post 
          v-for="post in posts" :key="post.idPost"
            :data="post"
            :likes="likes"
            class="post" 
        ></Post>
      <div v-if="nameTagSearch==''" class="profile_tags-msg"><h1>👆 Select one #Tag 👆</h1></div>
      <div v-if="posts[0]==null && nameTagSearch!=''" class="profile_tags-msg"><h3>You dont have any post :/</h3></div>
    </div>
    
    <!-- Following posts -->
    <div id="profile_tags" v-if="optionMain=='following'">
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
      <div v-if="posts[0]==null" class="profile_tags-msg"><h3>Have you friends?? 🤔</h3></div>
    </div>
  </div>
</div>
</template>

<script>
import Post from '../code/OnePost.vue';
import UserCard from './UserCard.vue';
export default {
  components:{
    Post,
    UserCard,
  },
  data() {
    return {
      posts: [],
      postsNumber: '',
      //Nav options
      optionMain: 'your_work',
      optionSecond: 'profile',

      //followsUsers/Code
      followsDetails: [],

      likes:[],
      tags:[],
      searchTags:[],
      nameTagSearch:'',
      limit:0,
      work:[],
      statistics:[],
    }
  },
  mounted() {
    this.getWork();
    this.getAuthLikes();
    if (this.$route.params.opmain) this.optionMain = this.$route.params.opmain
    this.SET_OPMAIN(this.optionMain)

  },
  computed:{
    followers(){
      return this.$store.state.follows.followers.length;
    },
    followings(){
      return this.$store.state.follows.followings.length;
    },
    dayWorkl(day){
      for (const i of this.work) {
        if (i.day==day) {
          console.log(i.count)
          return true;
        }
      }
      console.log(false)
      return false;
    },
  },
  methods:{
    dayWork(day){
      for (const i of this.work) {
        if (i.day==day) {
          console.log(i.count)
          return true;
        }
      }
      console.log(false)
      return false;
    },
    getPosts(){
        axios.get('/api/post/posts/'+this.$store.state.auth.idUsu+'/'+this.limit).then(res=>{
          if (res.status) {
            res.data.data.map(p=>this.posts.push(p))
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
        console.log(res)
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
        this.posts = res.data.data;
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
    searchTag(idTag, nameTag){
      axios.get('/api/tag/getOwnPostByTag/'+idTag)
        .then(res=>{
          this.posts = res.data;
          this.nameTagSearch = nameTag;
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
    getWork(){
      //Month work
      axios.get('/api/user/getWork')
      .then(res=>{
        this.work = res.data;
      })
      .catch(err=>{
        console.log("Error en Profile.vue getWork");
        console.log(err);
      })
      //Statics
      axios.get('/api/post/statistics')
      .then(res => {
        this.statistics = res.data;
      })
     
    },


    //SETTERS
    SET_OPMAIN(id){
      this.optionMain = id;
      this.posts = [];

      switch (id) {
        case 'your_work':
          this.getPosts();
          break;
        case 'following':
          this.getPostFollowings();
          break;
        case 'profile':
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
      console.log("Voy a ponser: "+id)
      this.optionSecond = id;
      this.posts = [];
      this.limit = 0;

      switch (id) {
        case 'profile':
          this.getWork();
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
    load(){
      this.limit+=6;
      this.getPosts();
    },

  },
}
</script>

<style>

</style>