<template>
<div>
<table id="table-wrapper">
        <thead>
        <tr>
            <th scope="col">#Post</th>
            <th scope="col">#Usu</th>
            <th scope="col">Name Post</th>
            <th scope="col">Likes</th>
            <th scope="col">Created_at</th>
            <th scope="col">Options</th>
        </tr>
        </thead>
        <tbody id="table-body">
            <tr v-for="post in posts">
                <th :id="'user.'+post.idUsu+'.id'" scope="row">{{post.idPost}}</th>
                <th :id="'user.'+post.idUsu+'.id'" scope="row">{{post.idUsu}}</th>

                <!-- Name -->
                <td :id="'user.'+post.idUsu+'.name'" scope="row">
                  <span v-if="!userEdit || post.idUsu != post.idUsu">{{post.postName}}</span>
                  <input v-model='userEdit.name' v-else />  
                </td>

                <!-- Email -->
                <td :id="'user.'+post.idUsu+'.email'" scope="row">
                <span v-if="!userEdit || userEdit.idUsu != post.idUsu">{{post.likes}}</span>
                <input v-model='userEdit.email' v-else />  
                </td>
                <td>{{post.created_at}}</td>
                <td v-if="post.idUsu != $store.state.auth.permissions.idUsu">
                <button class="button-delete button" @click.prevent="deleteUser(post)" v-if="!userEdit">Delete</button>
                <button class="button-edit button" @click.prevent="edit(post)" v-if="!userEdit">Edit</button>
                <button class="button-susccess button" @click.prevent="editSuccess()" v-if="userEdit.idUsu == post.idUsu">Success</button>
                <button class="button-delete button" @click.prevent="editCancel(post)" v-if="userEdit.idUsu == post.idUsu">Cancel</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    data() {
      return {
        users:[],
        userEdit:false,
        posts:[]
      }
    },
    created() {
      this.getPosts();
    },
    methods: {
      //Getters
      //Get all users
      getUsers(){
        axios.get('/api/user/users').then((res)=>{
          this.users = res.data;
        })
        .catch((err)=>{
          if (err.response.status==403) {
            this.$router.push({name:'permissError'})
          }
        });
      },

      //Crud
      //Delete one user
      deleteUser(userDelete){
        axios.delete('/api/user/users/'+userDelete.idUsu).then((e)=>{
          //Update the array with the users
          this.users = this.users.filter((u) => u.idUsu != userDelete.idUsu);
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue delete")
          console.log(e)
        });
      },

      //Edit one user
      edit(editUser){
        this.userEdit = editUser;
      },
      editSuccess(){
        this.axios.put('/api/user/users/'+this.userEdit.idUsu, this.userEdit).then((e)=>{
          this.users.map((u)=>{
            if (u.idUsu == this.userEdit.idUsu) {
              u = this.userEdit;
            }
          })
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue update");
          console.log(e);
        })
        this.userEdit = false;
      },
      editCancel(){
        let inputName = document.getElementById("user."+this.userEdit.idUsu+".name");
        inputName.innerHTML = this.userEdit.name;
        this.userEdit = false;
      },
      getPosts(){
        axios.get('/api/post/allPosts')
        .then(res => {
            console.log(res.data.data)
            this.posts = res.data.data
        })
      }
    },
}
</script>
<style>

</style>