<template>
<div>
  <h1>Madafucking dashBoard 😎</h1>
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <button @click.prevent="manageChange('manageUsers')" class="nav-link active" href="#">Users</button>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h3 v-if="!manage" class="card-title">Do something Mr/s.Admin {{userAuth.name}}</h3>
      <dash-users v-if="manage == 'manageUsers'"></dash-users>
  </div>
</div>

  

</div>
</template>

<script>
import DashUsers from './Dashboard/DashUsers.vue';
export default {
  components: { DashUsers },
    data() {
      return {
        //users
        manage:false,
        userAuth:'',
      }
    },
    beforeMount() {
      this.getUserAuth()
    },
    methods: {
      //MANAGE CHANGE
      manageChange(option){
        this.manage = option;
      },
      //Get the user auth
      getUserAuth(){
        axios.get('api/athenticated').then((res)=>{
          this.userAuth = res.data;
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue getUserAuth");
          console.log(e);
        })
      }
    },
}
</script>
<style>

</style>