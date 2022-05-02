<template>
  <div>
    <h1>Posts</h1>
    {{posts}}
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
    methods: {
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
}
</script>

<style>

</style>