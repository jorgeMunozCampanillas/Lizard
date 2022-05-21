<template>
<div>
  <!-- EDITOR -->
  <div class="code_enter">
    <Editor class="editor" lang="xml" language="HTML" v-on:update="updateCode"/>
    <Editor class="editor" lang="css" language="CSS" v-on:update="updateCode"/>
    <Editor class="editor" lang="js" language="JS" v-on:update="updateCode"/>
  </div>

  <!-- PREVIEW -->
  <div v-if="previewMode" class="code_preview-wrapper">
    <div class="code_preview-back" @click="preView()"></div>
    <div class="code_preview">
      <div class="code_previw-code">
        <iframe class="code_preview-iframe" :srcdoc="src" frameborder="0"></iframe>
      </div>
      <div class="code_preview-options">

        <!-- name -->
        <div class="preview-name">
          <h3>Nombre de proyecto:</h3>
          <input type="text" :value="postName">
        </div>
        <!-- stacks -->
        <div class="preview-stacks">
          <h3>Stacks</h3>
          <img v-for="name in frameworksName" :key="name" :src="`/storage/codeIcons/`+name+`.png`" width="20px" alt="">
        </div>
        <!-- tags -->
        <div class="preview-tag">
          <div class="tags">
            <div class="tag" v-for="tag in tags" :key="tag">
              {{tag}}<div @click="deleteTag(tag)">&nbsp;x</div>
            </div>
          </div>
          <div class="tag-options">
            <label for="">Add new Tag</label>
            <input v-model="newTag" type="text">
            <div @click="addTag()">Add</div>
          </div>
        </div>

      </div>

      <div>
        <button @click="save()">Save</button>
        <button @click="preView()">Cancel</button>
      </div>
    </div>
  </div>

  <!-- OUTPUT -->
  <div class="code_output">
    <iframe id="code" :srcdoc="src" class="code-represent"> </iframe>
    <div style="position:absolute;top:0;z-index:-5;" id="codeScreenArea"></div>
  </div>
</div>
</template>

<script>

//Code mirror
import * as CodeMiror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';

import 'codemirror/mode/gfm/gfm.js';

//Editor
import Editor from './Editor.vue';

//Html2canvas
import html2canvas from 'html2canvas';

export default {
  components: { 
    Editor,
  },

  data() {
    return {
      xml:'',
      css:'',
      js:'',
      src:'',
      img:'',
      frameworksCDN:'',
      frameworksName:'',
      idPost:'',
      element:'',
      previewMode: false,
      postName:'',
      tags:[],
      newTag:'',
    }
  },
  mounted(){
    //this come from nav
    //this.$root.$on('save', (postName) => this.save(postName));
    this.$root.$on('save', (postName) => this.preView(postName));
    //this come from settings
    this.$root.$on('changeFramework', newFrameworks =>{
      this.frameworksCDN=newFrameworks.cdns;
      this.tags=newFrameworks.tags;
      this.frameworksName=newFrameworks.name
      this.updateSrc();
    });
  },
  methods: {

    updateCode(lang, code){
      this[lang] = code;
      this.updateSrc();
    },

    updateSrc(){
        this.src = `
        <head>
            ${this.frameworksCDN}
        </head>
        <body>
            <body>${this.xml}</body>
            <style>${this.css}</style>
            <script>${this.js}<\/script>
        </body>`;
    },

    preView(postName){
      this.postName = postName;
      this.previewMode = !this.previewMode;
    },

    addTag(){

      //Add #
      if (this.newTag.charAt(0) != "#") this.newTag = "#"+this.newTag;

      //Capitalize
      let newTagLower = this.newTag.toLowerCase();
      let cap = newTagLower.charAt(1).toUpperCase();
      this.newTag = this.newTag.charAt(0)+cap+newTagLower.slice(2);

      //Add to tags
      if (!this.tags.includes(this.newTag)) this.tags.push(this.newTag);
      this.newTag = '';

    },

    deleteTag(tag){
      let index = this.tags.indexOf(tag);
      this.tags.splice(index);

    },


    async save(){
      //set the code background the page to screeshot ( z-index -5 )
      //shhh this is our secret...
      let codeScreenArea = document.getElementById("codeScreenArea");
      codeScreenArea.innerHTML += this.frameworksCDN;
      codeScreenArea.innerHTML += this.xml;
      codeScreenArea.innerHTML += '<style>'+this.css+'</style>';
      
      await html2canvas(codeScreenArea, {
        //Set properties of the canvas
        width:500,
        height:374,
      })
      //POST
      .then( async (canvas)=>{
        //convert the canvas to  blob and this to file :)))
        canvas.toBlob((blob)=>{
          this.img = new File([blob], 'prueba.jpg', {type: "image/jpeg"});
        
          let data = new FormData;
          data.append('idUsu', this.$store.state.auth.idUsu);
          data.append('postName', this.postName);
          data.append('html', this.xml);
          data.append('css', this.css);
          data.append('js', this.js);
          data.append('img', this.img);
          data.append('script', this.frameworksCDN);

          axios.post('/api/post/code', data).then(res=>{
            this.idPost = res.data.post.idPost;
            this.$router.push({name:'my-code'});

            //Delete this function to bug send multiples createCode
            this.save =()=>{};
          })
          //TAGS
          .then(()=>{
            let data = {
              tags:["#cacaa"],
              idPost:this.idPost,
            }
            axios.post('/api/tag/tag', data);
          })

        });
      })
      .catch((err)=>{
        console.log("Error save desde CreateCode.vue");
        console.log(err)
        this.errors = error.response.data.errors;
      });
    },
  },

}
</script>

<style>

</style>