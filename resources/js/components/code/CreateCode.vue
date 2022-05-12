<template>
<div>
  <div class="code_enter">
    <Editor class="editor" lang="xml" language="HTML" v-on:update="updateCode"/>
    <Editor class="editor" lang="css" language="CSS" v-on:update="updateCode"/>
    <Editor class="editor" lang="javascript" language="JS" v-on:update="updateCode"/>
  </div>
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
  components: { Editor },

  data() {
    return {
      xml:'',
      css:'',
      js:'',
      src:'',
      img:'',
    }
  },
  mounted(){
    //this come to nav
    this.$root.$on('save', (postName) => this.save(postName));
  },
  methods: {

    updateCode(lang, code){
      this[lang] = code;
      this.updateSrc();
    },

    updateSrc(){
        this.src = `
        <html>
            <body>${this.xml}</body>
            <style>${this.css}</style>
            <script>${this.js}<\/script>
        </html>`;
    },


    async save(postName){
      //set the code background the page to screeshot ( z-index -5 )
      //shhh this is our secret...
      let codeScreenArea = document.getElementById("codeScreenArea");
      codeScreenArea.innerHTML += '<script src="https://cdn.tailwindcss.com"><\/script>';
      codeScreenArea.innerHTML += this.xml;
      codeScreenArea.innerHTML += '<style>'+this.css+'</style>';

      await html2canvas(codeScreenArea, {
        //Set properties of the canvas
        width:500,
        height:374,


      }).then( async (canvas)=>{

        //convert the canvas to  blob and this to file :)))
        canvas.toBlob((blob)=>{
          this.img = new File([blob], 'prueba.jpg', {type: "image/jpeg"});
        
          let data = new FormData;
          data.append('idUsu', this.$store.state.auth.idUsu);
          data.append('postName', postName);
          data.append('html', this.xml);
          data.append('css', this.css);
          data.append('js', this.js);
          data.append('img', this.img);

          axios.post('/api/code', data).then(res=>{
            console.log(res)
            console.log("añadido :))");
          })
          .catch((error)=>{
            console.log("Error save desde CreateCode.vue")
            this.errors = error.response.data.errors;
          })

        });
      });
      
    },
  },

}
</script>

<style>

</style>