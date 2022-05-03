<template>
<div id="home">
  <div id="menu"><h1>Menu</h1></div>
  <div id="posts">
    <h1 class="title">Tops Componens</h1>
    <div class="post" v-for="post in posts" :key="post.idPost">
      <img class="post-img" src="" alt="">
      <div>
        <img class="post-user" src="" alt="">
        {{post.idUsu}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user:'',
      posts: ''
    }
  },
  methods:{
    getAllCode(){
        axios.get('/api/code').then(res=>{
            this.posts = res.data;
            console.log(res.data)
        })
        .catch(err=>{
            console.log("Error getAllPost ShhowCode.vue")
        })
    }
  },
  mounted() {
    this.getAllCode(),
    axios.get('/api/athenticated').then((res)=>{
      console.log(res);
      this.user = res.data
    })
    .catch((e)=>{
      console.log("error en Home.vue mounted")
      console.log(e)
    })
  },
}
</script>

<style>

</style>