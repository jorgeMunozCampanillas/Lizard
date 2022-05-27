<template>
  <div>
    <div id="menu">
        <ul id="menu_options">

            <!-- Options -->
            <div>
              <ul id="nav-logo">
                  <router-link :to="{name:'home'}" id="nav_logo-home">
                      <img :src="'/storage/logo2-bueno.png'" id="logo" alt="">
                      <h2 id="logo-title">Lizard</h2>
                  </router-link>
              </ul>
              <div class="menu_options-stack menu_option-center">
                <li class="menu_options-option menu_options-create">
                <i class="bi bi-postage"></i> Create Post <i class="bi bi-chevron-down"></i>
                </li>
              </div>
              <div class="menu_options-stack">
                <li class="menu_options-option">Your Work</li>
                <li class="menu_options-option">Activity</li>
              </div>
              <div class="menu_options-stack">
                <li class="menu_options-option">Following</li>
                <li class="menu_options-option">Trending</li>
                <li class="menu_options-option">Loved</li>
              </div>
            </div>

            <!-- Featured post -->
            <div>
              <div class="menu_options-stack">
                <h3 class="menu_options-title">Featured Week Post:</h3>
                <p>{{featuredPost.namePost}}</p>
                <div id="menu_options-container-featured">
                  <div>
                    <p>Likes: {{featuredPost.likes}}</p>
                  </div>
                  <iframe id="menu_options-featured" :srcdoc="srcdoc" frameborder="0"></iframe>
                  <p>By: {{featuredPost.name}}</p>
                </div>
              </div>
            </div>
        </ul>
    </div>
  </div>
</template>

<script>
import Post from './../code/OnePost.vue';
export default {
  components:{
    Post,
  },
  data() {
    return {
      featuredPost:{},
    }
  },
  computed:{
    srcdoc(){
      let src = `<html>
                ${this.featuredPost.script}
                <body>${this.featuredPost.html}</body>
                <style>${this.featuredPost.css}body{transform:scale(.4);transform-origin:0 0;overflow:hidden;}</style>
            </html>`;
      return src;
    }
  },
  mounted(){
    this.getPostFeatured();
  },
  methods:{
    getPostFeatured(){
      axios.get('/api/getPostFeatured')
      .then(res => {
        console.log(res)
        this.featuredPost = res.data.data[0];
      })
      .catch(err => {
        console.log("Error en NavLateral.vue");
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>