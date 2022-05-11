<template>
<div id="home">
  <div id="menu">
    MENU¿?
  </div>
  <div id="posts">
    <h1 class="title">Tops Components</h1>
    <div v-for="post in posts" :key="post.post.idPost" class="post">
      <button @click="showCode(post.post.idPost)">
        <img v-if="post.post.img!=null" :src="'storage/'+post.post.img" class="post-img" alt="">
      </button>
        <div>
          <img :src="'storage/'+post.user[0].img" class="post-user" alt="">
          <h3>{{post.user[0].name}}</h3>
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
          console.log("Error Home.vue getAllCode");
          console.log(err.data);
        })
    },
    showCode(idPost){
      this.$router.push({name:'show-code', params: { id: idPost }})
    },
    showUser($idUsu){
      
    }

  },
}
</script>

<style>

</style>