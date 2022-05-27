<template>
<div id="home">
  <!-- ---- -->
  <!-- POST -->
  <!-- ---- -->
  <div id="post-wrapper">
    <h2 class="title">{{$t('home.top_comopnents')}} <hr> </h2>
    <!-- BEFORE POSTS -->
    <div id="before_posts">
      <Post 
        v-for="post in beforePosts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
      <Post v-if="!beforeNull" :likes="[0]" class="post"></Post>
      <Post v-if="!beforeNull" :likes="[0]" class="post"></Post>
    </div>
    <div id="posts">
    <!-- ACTUAL POSTS -->
      <div class="post_next" @click="next"><i class="bi bi-arrow-bar-right"></i></div>
      <div v-if="offset>=4" class="post_back" @click="back"><i class="bi bi-arrow-bar-left"></i></div>
      <Post 
        v-for="post in posts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
      <Post v-if="!actualNull" :likes="[0]" class="post"></Post>
    </div>
        <!-- AFTER POSTS -->
    <div id="after_posts">
      <Post 
        v-for="post in afterPosts" :key="post.idPost"
          :data="post"
          :likes="likes"
          class="post" 
      ></Post>
      <Post v-if="!afterNull" :likes="[0]" class="post"></Post>
      <Post v-if="!afterNull" :likes="[0]" class="post"></Post>
    </div>
  </div>

    
  <!-- ----- -->
  <!-- USERS -->
  <!-- ----- -->
  <div id="users_wrapper">
    <div id="users-title">
      <h2>Interesting People to Follow</h2>
      <hr>
    </div>
    <div id="users">
      <User-Card v-for="user in interestingUsers" :key="user.idUsu"
        class="user"
        :user="user"
      />
    </div>
  </div>


  <!-- ------ -->
  <!-- FOOTER -->
  <!-- ------ -->
  <footer id="footer_wrapper">

  </footer>

</div>
</template>

<script>
import Post from './code/OnePost.vue';
import UserCard from './users/UserCard.vue';
export default {
  components:{
    Post,
    UserCard,
  },
  data() {
    return {
      posts: [],
      beforePosts:[],
      afterPosts:[],
      likes: [],
      limit:7,
      offset: 0,
      interestingUsers:[],
    }
  },
  mounted() {
    if (this.$store.state.isAuthenticated) {
      this.getAuthLikes();
    }
    this.getPosts();
    this.getPeople();

  },
  computed:{
    beforeNull(){
      return this.beforePosts.length;
    },
    actualNull(){
      return this.posts.length;
    },
    afterNull(){
      return this.afterPosts.length;
    }
  },
  methods:{
    getPosts(){
      this.afterPosts = [];
      this.posts=[]
        axios.get('/api/code/'+this.offset).then(res=>{
            this.posts = res.data.data.slice(0,4);
            this.afterPosts.push(res.data.data[4]);
            this.afterPosts.push(res.data.data[6]);
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
    },
    next(){
      this.offset+=4;
      this.beforePosts = [];
      this.beforePosts.push(this.posts[1]);
      this.beforePosts.push(this.posts[3]);
      this.getPosts();
    },
    back(){
      this.offset-=4;
      this.getPosts();
    },
    getPeople(){
      axios.get('/api/user/random')
      .then(res => {
        this.interestingUsers = res.data;
      })
      .catch(err=>{
        console.log("Error en Home.vue getPeople");
        console.log(err);
      })
    }


  },
}
</script>

<style>

</style>