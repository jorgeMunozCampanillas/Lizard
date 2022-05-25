<template>
  <div>
    <div class="user_card-wrapper">
        <img @click="showUser" class="user_card-img" :src="'/storage/'+user.img" alt="">
        <div class="user_card-details">
            <div @click="showUser" class="user_card-name">{{user.name}}</div>
            <div class="user_card-posts">Posts: {{user.posts}}</div>
            <button @click="follow" class="button-Unfollow" v-if="this.$store.state.follows.followings.includes(user.idUsu)">{{$t('profile.unfollow')}}</button>
            <button @click="follow" class="button-follow" v-else>{{$t('profile.follow')}}</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        user:{
            default:''
        }
    },

    methods:{
        follow(){
        let data = {
            idUsu:this.user.idUsu,
        }
        axios.post('/api/user/follow/follow',data)
        .then(res=>{
            if(this.$store.state.follows.followings.includes(this.user.idUsu)){
                //Change button
                let index = this.$store.state.follows.followings.indexOf(this.user.idUsu);
                this.$store.state.follows.followings.splice(index,1);

            }else{
                //Change button
                this.$store.state.follows.followings.push(this.user.idUsu);
            }
        })
        .catch(err=>{
            console.log('Error en CodeProfileOthers.vue follow');
            console.log(err)
        });
        },
        showUser(){
            this.$router.push({name:'code-others', params: { id: this.user.idUsu }})
        }
    }
}
</script>

<style>

</style>