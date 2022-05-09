<template>
<div id="dashboard">
  <h1>Madafucking dashBoard 😎</h1>
  <div id="dash-table">
    <div id="dash-options">
      <ul>
        <li>
          <button @click.prevent="manageChange('manageUsers')" href="#">Users</button>
        </li>
        <li >
          <a href="#">Link</a>
        </li>
        <li>
          <a>Disabled</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 v-if="!manage">Do something Mr/s.Admin {{this.$store.state.auth.permissions.name}}</h3>
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
      }
    },
    methods: {
      //MANAGE CHANGE
      manageChange(option){
        this.manage = option;
      },
    },
}
</script>
<style>

</style>