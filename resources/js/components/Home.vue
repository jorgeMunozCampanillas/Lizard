<template>
<div>
  <h1>Home 😁</h1>
  <h3>Welcome {{user.name}}</h3>
  <!-- <button @click.prevent="logout">Logout</button> -->
</div>
</template>

<script>
export default {
  data() {
    return {
      user:''
    }
  },
  methods:{
    logout(){
      axios.post('/api/logout').then(()=>{
        this.$router.push({name:"login"})
      })
      .catch((e)=>{
        console.log("error en Home.vue logout")
        console.log(e)
      })
    }
  },
  mounted() {
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