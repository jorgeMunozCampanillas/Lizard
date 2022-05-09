<template>
<div id="home">
  <div id="menu"><h1>Menu</h1></div>
  <div id="posts">
    <h1 class="title">Tops Componens</h1>
    <div class="post" v-for="post in posts" :key="post.idPost" @click.prevent="showCode(post.idPost)">
      <img v-if="post.img!=null" :src="'storage/'+post.img" class="post-img" alt="">
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
      posts: '',
    }
  },
  methods:{
    getAllCode(){
        axios.get('/api/code').then(res=>{
            this.posts = res.data;
        })
        .catch(err=>{
          console.log("Error Home.vue getAllCode")
          console.log(err.data)
        })
    },
    showCode(post){
      this.$router.push({name:"show-code", params: { id: post }})
    }
  },
  mounted() {
    this.getAllCode(),
    axios.get('/api/athenticated').then((res)=>{
      this.user = res.data
    })
    .catch((e)=>{
      console.log("error en Home.vue mounted")
    })
  },
}
</script>

<style>

</style>