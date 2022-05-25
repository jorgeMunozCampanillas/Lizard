<template>
  <div>
    <div id="search_nav">
      <i class="bi bi-search"></i>
      <input @keyup="searchNames" v-model="toSearch" type="text" id="search-input" placeholder="Search Post...">
      <div id="searc_results" v-if="toSearch!=''">
        <div v-for="name in namesSearch" :key="name.idPost" class="searc_result" >{{name.postName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            toSearch:'',
            namesSearch:[]
        }
    },
    mounted(){
        document.getElementById("search-input").addEventListener("keypress", (e)=>{
            if (e.key == "Enter") {
                this.search();
            }
        })
    },
    methods:{
        searchNames(){
            axios.get('/api/post/getPostName/'+this.toSearch)
            .then(res=>{
                this.namesSearch = res.data.data;
            })
            .catch(err => {
                console.log("Error en Home.vue search");
                console.log(err)
            })
        },
        search(){
            this.$router.push({name:'search', params: {name: this.toSearch}})
        }
    }
}
</script>

<style>

</style>