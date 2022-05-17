<template>
<div>
    <div class="code_enter">
      <Editor class="editor" :code="xml" lang="xml" language="HTML" v-on:update="updateCode"/>
      <Editor class="editor" :code="css" lang="css" language="CSS" v-on:update="updateCode"/>
      <Editor class="editor" :code="js" lang="javascript" language="JS" v-on:update="updateCode"/>
    </div>
    <div class="code_output">
        <iframe id="code" class="code-represent" :srcdoc="src"> </iframe>
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
        axios.get('/api/post/code/'+this.$route.params.id)
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
  },
}
</script>

<style>

</style>