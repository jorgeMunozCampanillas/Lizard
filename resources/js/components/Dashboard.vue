<template>
<div id="dashboard">
  <h1 id="dash-title">DashBoard </h1>
  <div id="dash-table">
    <div id="dash-options">
      <ul>
        <li>
          <button @click.prevent="manageChange('manageUsers')"><h3 :class="{'select':select('manageUsers')}" class="button dash-option">Users</h3></button>
        </li>
        <li >
          <button @click.prevent="manageChange('managePosts')"><h3 :class="{'select':select('managePosts')}" class="button dash-option">Posts</h3></button>
        </li>
        <li>
          <button @click.prevent="manageChange('manageTags')"><h3 :class="{'select':select('manageTags')}" class="button dash-option">Tags</h3></button>
        </li>
      </ul>
    </div>
    <div>
        <h3 v-if="!manage">Do something Mr/s.Admin {{this.$store.state.auth.permissions.name}}</h3>
        <dash-users id="table" v-if="manage == 'manageUsers'"></dash-users>
        <dash-posts id="table" v-if="manage == 'managePosts'"></dash-posts>
        <dash-tag id="table" v-if="manage == 'manageTags'"></dash-tag>
    </div>
  </div>
</div>
</template>

<script>
import DashUsers from './Dashboard/DashUsers.vue';
import DashPosts from './Dashboard/DashPosts.vue';
import DashTag from './Dashboard/DashTag.vue';
export default {
  components: { DashUsers, DashPosts, DashTag },
    data() {
      return {
        //users
        manage:'manageUsers',
        aa:true,
      }
    },
    methods: {
      //MANAGE CHANGE
      manageChange(option){
        this.manage = option;
      },
      select(manage){
        return this.manage == manage;
      }
    },
}
</script>
<style>

</style>