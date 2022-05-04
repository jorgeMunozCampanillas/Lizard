<template>
<div>
    <Editor class="editor" lang="xml" v-on:update="updateCode"/>
    <Editor class="editor" lang="css" v-on:update="updateCode"/>
    <Editor class="editor" lang="javascript" v-on:update="updateCode"/>
  <div id="code_output">
    <iframe id="code" :srcdoc="src" style="border: 5px solid;"> </iframe>
    <div style="position:absolute;top:0;z-index:-5;" id="code2"></div>
  </div>
  
  <button @click="save">Guardar</button>
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
      xml:'<h1>Hello World!!</h1>',
      css:'h1{color:red}',
      js:'',
      src:'',
    }
  },
  mounted() {
    axios.get('/api/athenticated').then((res)=>{
      this.user = res.data
    })
    .catch((e)=>{
      console.log("error en CreateCode.vue mounted")
      console.log(e)
    })
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


    save(){
      document.getElementById("code2").innerHTML = this.xml;
      document.getElementById("code2").innerHTML += '<style>'+this.css+'</style>';

      html2canvas(document.getElementById('code2')).then((canvas)=>{
        document.getElementById("code_output").appendChild(canvas);
      })
      let send = {
        'idUsu': this.user.idUsu,
        'html': this.xml,
        'css': this.css,
        'js': this.js,
      }

      /*axios.post('api/code', send).then(res=>{
        console.log(res)
        console.log("añadido :))");
      })
      .catch((error)=>{
        console.log("Error save desde CreateCode.vue")
        this.errors = error.response.data.errors;
      })*/
    }
  },

}
</script>

<style>
.editor{
  width: 26rem;
  height: 20rem;
  display: inline-block;
}
</style>