<template>
  <div>
    <div id="search_nav">
        <div id="search_bar">
            <i class="bi bi-search"></i>
            <input @keyup="searchNames" v-model="toSearch" type="text" id="search-input" placeholder="Search Post...">
            <div id="search_options">
                <div :class="{'search_option-select': existOption('tags')}" @click="changeOptionSearch('tags')" class="search_option">#tags</div>
                <div :class="{'search_option-select': existOption('component')}" @click="changeOptionSearch('component')" class="search_option">#component</div>
                <div :class="{'search_option-select': existOption('profile')}" @click="changeOptionSearch('profile')" class="search_option">#profile</div>
            </div>
        </div>
      <div id="searc_results" v-if="toSearch!=''">
        <div @click="search()" v-for="search in namesSearch" :key="search.id" class="searc_result" >{{search.namee}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            toSearch:'',
            namesSearch:[],
            optionsSearch:['component'],
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
            axios.get('/api/getSearchName/'+this.toSearch+'/'+this.optionsSearch)
            .then(res=>{
                console.log(res.data.data)
                this.namesSearch = res.data.data;
            })
            .catch(err => {
                console.log("Error en Home.vue search");
                console.log(err)
            })
        },
        search(){

            this.$router.push({name:'search', params: {name: this.toSearch}})
            this.toSearch = '';
        },
        changeOptionSearch(option){
            this.optionsSearch = option;
            this.searchNames();
        },
        existOption(option){
            return this.optionsSearch.includes(option);
        }
    }
}
</script>

<style>

</style>