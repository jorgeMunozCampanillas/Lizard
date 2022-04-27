<template>
<div>
  <h1>Madafucking dashBoard</h1>
  <p>ns</p>
  {{users}}
</div>
</template>

<script>
export default {
    data() {
      return {
        users:''
      }
    },
    created() {
      this.getUsers()
    },
    methods: {
      getUsers(){
        axios.get('/api/users').then((res)=>{
          this.users = res;
          console.log(res.data)
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue getUser")
          console.log(e)
        });
      }
    },
}
</script>
<style>

</style>