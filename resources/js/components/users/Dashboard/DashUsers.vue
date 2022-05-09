<template>
<div>
<table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Permissions</th>
            <th scope="col">Created_at</th>
            <th scope="col">Options</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.idUsu">
                <th :id="'user.'+user.idUsu+'.id'" scope="row">{{user.idUsu}}</th>

                <!-- Name -->
                <td :id="'user.'+user.idUsu+'.name'" scope="row">
                  <span v-if="!userEdit || userEdit.idUsu != user.idUsu">{{user.name}}</span>
                  <input v-model='userEdit.name' v-else />  
                </td>

                <!-- Email -->
                <td :id="'user.'+user.idUsu+'.email'" scope="row">
                <span v-if="!userEdit || userEdit.idUsu != user.idUsu">{{user.email}}</span>
                <input v-model='userEdit.email' v-else />  
                </td>
                <td>{{user.permissions}}</td>
                <td>{{user.created_at.substr(0,10)}}</td>
                <td v-if="user.idUsu != $store.state.auth.permissions.idUsu">
                <button class="btn btn-danger" @click.prevent="deleteUser(user)" v-if="!userEdit">Delete</button>
                <button class="btn btn-warning" @click.prevent="edit(user)" v-if="!userEdit">Edit</button>
                <button class="btn btn-success" @click.prevent="editSuccess()" v-if="userEdit.idUsu == user.idUsu">Success</button>
                <button class="btn btn-danger" @click.prevent="editCancel(user)" v-if="userEdit.idUsu == user.idUsu">Cancel</button>
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
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      //Getters
      //Get all users
      getUsers(){
        axios.get('/api/users').then((res)=>{
          this.users = res.data;
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue getUser")
          console.log(e)
        });
      },

      //Crud
      //Delete one user
      deleteUser(userDelete){
        console.log("voy a borrar el user: "+userDelete.name+" : "+userDelete.idUsu)
        axios.delete('api/users/'+userDelete.idUsu).then((e)=>{
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
        axios.put('api/users/'+this.userEdit.idUsu, this.userEdit).then((e)=>{
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
      }
    },
}
</script>
<style>

</style>