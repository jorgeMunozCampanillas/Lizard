<template>
  <div id="error">
    <h2>{{msg}}</h2>
    <button @click="foo" class="button-err">Back to home</button>
  </div>
</template>

<script>
export default {
    props: {
      'msg': {
        default: 'You dont have permiss here 😈'
      }
    },
    methods:{
        foo(){
            this.$router.push({name:'home'});
        }
    }
}
</script>

<style>

</style>