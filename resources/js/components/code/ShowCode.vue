<template>
<div>
    <Editor class="editor" :code="xml" lang="xml" v-on:update="updateCode"/>
    <Editor class="editor" :code="css" lang="css" v-on:update="updateCode"/>
    <Editor class="editor" :code="js" lang="javascript" v-on:update="updateCode"/>
    <div id="code_output">
        <iframe id="code" :srcdoc="src" style="border: 5px solid;"> </iframe>
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
        src:'',
        xml:'',
        css:'',
        js:'',
        test:''
    }
  },
  created(){
    this.getCode();
  },
  methods: {

    getCode(){
        axios.get('/api/code/'+this.$route.params.id)
        .then(res => {
            this.xml = res.data.code.html;
            this.css = res.data.code.css;
            this.js = res.data.code.js;
            this.updateCode('xml', res.data.code.html)
            this.updateCode('css', res.data.code.css)
            this.updateCode('js', res.data.code.js)
        })
        .catch(err => {
            console.log("Error ShowCode.vue getCode");
            console.log(err);
        })
    },

    updateCode(lang, code){
      this[lang] = code;
      this.updateSrc();
    },

    updateSrc(){
        this.src = `
        <html>
            <script src="https://cdn.tailwindcss.com"><\/script>
            <body>${this.xml}</body>
            <style>${this.css}</style>
            <script>${this.js}<\/script>
        </html>`;
    },


    async save(){

      //set the code background the page to screeshot ( z-index -5 )
      //shhh this is our secret...
      let codeScreenArea = document.getElementById("codeScreenArea");
      codeScreenArea.innerHTML = this.post.xml;
      codeScreenArea.innerHTML += '<style>'+this.post.css+'</style>';

      await html2canvas(codeScreenArea, {
        //Set properties of the canvas (720p)
        width:500,
        height:374,


      }).then( async (canvas)=>{

        //convert the canvas to  blob and this to file :)))
        canvas.toBlob((blob)=>{
          this.img = new File([blob], 'prueba.jpg', {type: "image/jpeg"});
        
          let data = new FormData;
          data.append('idUsu', this.user.idUsu);
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
      
    }
  },
}
</script>

<style>

</style>