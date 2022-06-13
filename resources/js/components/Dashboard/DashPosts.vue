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
                    <th :id="'user.'+post.idUsu+'.idPost'" scope="row">{{post.idPost}}</th>
                    <th :id="'user.'+post.idUsu+'.id'" scope="row">{{post.idUsu}}</th>

                    <!-- Name -->
                    <td :id="'user.'+post.idUsu+'.name'" scope="row">
                    <span v-if="post.idPost != postEdit.idPost">{{post.postName}}</span>
                    <input v-model='post.postName' v-else />  
                    </td>

                    <!-- Likes -->
                    <td :id="'user.'+post.idUsu+'.email'" scope="row">
                    <span>{{post.likes}}</span>
                    </td>
                    <td>{{post.created_at}}</td>
                    <td v-if="post.idUsu != $store.state.auth.permissions.idUsu">
                    <button class="button-delete button" @click.prevent="deletePost(post)" v-if="!postEdit">Delete</button>
                    <button class="button-edit button" @click.prevent="edit(post)" v-if="!postEdit">Edit</button>
                    <button class="button-susccess button" @click.prevent="editSuccess()" v-if="postEdit.idPost == post.idPost">Success</button>
                    <button class="button-delete button" @click.prevent="editCancel(post)" v-if="postEdit.idPost == post.idPost">Cancel</button>
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
        postEdit:false,
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
      deletePost(postDelete){
        axios.get('/api/post/deletePostAdmin/'+postDelete.idPost+'/'+postDelete.idUsu).then((e)=>{
          //Update the array with the users
          this.posts = this.posts.filter((u) => u.idPost != postDelete.idPost);
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue delete")
          console.log(e)
        });
      },

      //Edit one user
      edit(postEdit){
        this.postEdit = postEdit;
      },
      editSuccess(){
        let data = {
            idPost:this.postEdit.idPost,
            namePost:this.postEdit.postName
        }
        axios.post('/api/post/editAdmin', data).then((e)=>{
          this.posts.map((u)=>{
            if (u.idPost == this.postEdit.idPost) {
              u = this.postEdit;
            }
          })
        })
        .catch((e)=>{
          console.log("error en Dashboard.vue update");
          console.log(e);
        })
        this.postEdit = false;
      },
      editCancel(){
        this.postEdit = false;
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