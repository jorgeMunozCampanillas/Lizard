<template>
<div id="profile">
  <div id="menu"><h1>Opciones¿?</h1></div>
  <div id="posts">
    <h1 class="title">Components from {{this.$route.params.id}}</h1>
    <div class="post" v-for="post in posts" :key="post.idPost" >
      <button @click="showCode(post.post.idPost)">
        <img v-if="post.img!=null" :src="'storage/'+post.img" class="post-img" alt="">
      </button>
       <div class="post_data">
          <div class="post_data-name">
            <h3>{{post.postName}}</h3>
          </div>
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
    foo(){
        console.log("Usuario ver: "+this.$route.params.id)
    },
    getAllCode(){
        let idUsu = this.$route.params.id;
        let data = new FormData;
        data.append('idUsu', this.$route.params.id)
        axios.post('/api/getPostOther', data).then(res=>{
            console.log(res)
          if (res.status) {
            this.posts = res.data.data;
          }else{
            this.$router.push({name:'permissError', params: {msg: res.data.error}});
          }
        })
        .catch(err=>{
          console.log("Error CodeProfile.vue getAllCode")
          console.log(err)
        })
    },
  },
}
</script>

<style>

</style>