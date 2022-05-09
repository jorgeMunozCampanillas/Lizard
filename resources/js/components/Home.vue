<template>
<div id="home">
  <div id="menu"><h1>Menu</h1></div>
  <div id="posts">
    <h1 class="title">Tops Componens</h1>
    <div v-for="post in posts" :key="post.idPost" class="post">
      <router-link :to="{name:'show-code', params: { id: post.idPost }}">
        <img v-if="post.img!=null" :src="'storage/'+post.img" class="post-img" alt="">
      </router-link>
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
      posts: '',
    }
  },
  mounted() {
    this.getAllCode();
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

  },
}
</script>

<style>

</style>