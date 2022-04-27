<template>
<div>
  <h1>Madafucking dashBoard 😎</h1>

<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <button @click.prevent="manage('manageUsers')" class="nav-link active" href="#">Users</button>
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
    <h3 v-if="!manageUsers" class="card-title">Do something Mr/s.Admin {{userAuth.name}}</h3>
    <table v-if="manageUsers" class="table">
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
              <tr v-for="user in users" :key="user.id">
                  <th :id="'user.'+user.id+'.id'" scope="row">{{user.id}}</th>

                  <!-- Name -->
                  <td :id="'user.'+user.id+'.name'" scope="row">
                    <span v-if="!userEdit || userEdit.id != user.id">{{user.name}}</span>
                    <input v-model='userEdit.name' v-else></input>  
                  </td>

                  <!-- Email -->
                  <td :id="'user.'+user.id+'.email'" scope="row">
                    <span v-if="!userEdit || userEdit.id != user.id">{{user.email}}</span>
                    <input v-model='userEdit.email' v-else></input>  
                  </td>
                  <td>{{user.permissions}}</td>
                  <td>{{user.created_at.substr(0,10)}}</td>
                  <td v-if="user.id != userAuth.id">
                    <button class="btn btn-danger" @click.prevent="deleteUser(user)" v-if="!userEdit">Delete</button>
                    <button class="btn btn-warning" @click.prevent="edit(user)" v-if="!userEdit">Edit</button>
                    <button class="btn btn-success" @click.prevent="editSuccess()" v-if="userEdit.id == user.id">Success</button>
                    <button class="btn btn-danger" @click.prevent="editCancel(user)" v-if="userEdit.id == user.id">Cancel</button>
                  </td>
              </tr>
          </tbody>
        </table>
  </div>
</div>

  

</div>
</template>

<script>
export default {
    data() {
      return {
        //users
        manageUsers:false,
        users:[],
        userAuth: '',
        userEdit:false,
      }
    },
    created() {
      this.getUsers();
      this.getUserAuth();
    },
    methods: {
      //USERS
      manage(option){
        this[option] = true;
      },
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
      //Get the user auth
      getUserAuth(){
        axios.get('api/athenticated').then((res)=>{
          this.userAuth = res.data;
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue getUserAuth");
          console.log(e);
        })
      },


      //Crud
      //Delete one user
      deleteUser(userDelete){
        console.log("voy a borrar el user: "+userDelete.name+" : "+userDelete.id)
        axios.delete('api/users/'+userDelete.id).then((e)=>{
          //Update the array with the users
          this.users = this.users.filter((u) => u.id != userDelete.id);
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
        axios.put('api/users/'+this.userEdit.id, this.userEdit).then((e)=>{
          this.users.map((u)=>{
            if (u.id == this.userEdit.id) {
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
        let inputName = document.getElementById("user."+this.userEdit.id+".name");
        inputName.innerHTML = this.userEdit.name;
        this.userEdit = false;
      }
    },
}
</script>
<style>

</style>