<template>
<div id="home">
  <div id="menu"><h1>Opciones¿?</h1></div>
  <div id="posts">
    <h1 class="title">Your Componens</h1>
    <div class="post" v-for="post in posts" :key="post.idPost" >
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
        axios.get('/api/getPost').then(res=>{
          console.log(res.data)
            this.posts = res.data;
        })
        .catch(err=>{
          console.log("Error CodeProfile.vue getAllCode")
          console.log(err.data)
        })
    },
  },
}
</script>

<style>

</style>