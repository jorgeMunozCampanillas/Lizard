<template>
<div>
    <Editor
      editorLang="HTML"
      lang="xml"
    />
  <div id="code_output">
    <iframe id="code" ></iframe>
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
import EventBus from './../../bus';
export default {
  components: { Editor },

  data() {
    return {
      html:'',
      css:'',
      js:'',
      src:'',
    }
  },
  created(){
    EventBus.$on('update')
  },
  methods: {
    updateHtml(html){
      this.html = html;
    },
    updateCss(css) {
      this.html = css;
    },
    updateJs(js){
      this.html = js;
    },
    updateSrc(state){
        this.src = `
        <html>
            <body>${state.html}</body>
            <style>${state.css}</style>
            <script>${state.js}<\/script>
        </html>`;
    },
    hola(){
      console.log("holaaaaa")
    },
    updateFrame(lang, code){
      console.log("BIENNNN")
      switch(lang) {
          case 'html':
            this.updateSrc("updateHtml", code)
            break;
          case 'css':
            this.updateSrc("updateCss", code)
            break;
          case 'javascript':
            this.updateSrc("updateJs", code)
            break;
          default:
            break;
        }
    }
  },

}
</script>

<style>
iframe#code {
  bottom: 0;
  position: relative;
  width: 100%;
  height: 40vh;
  border: unset;
  background: #f2f4f6;
}
.prism-live {
  min-height: 350px;
  overflow-x: hidden;
  width: 100%;
}
div#coding_area > div {
  width: 100%;
  border-left: 15px solid #555865;
}
div#coding_area > div:first-child {
  border-left: none;
}
div#coding_area {
  width: 100%;
  height: calc(60vh - 60px);
  min-height: 125px;
  display: flex;
  overflow: hidden;
  border-bottom: 15px solid #555865;
}
div#code_output {
  height: 100%;
}
</style>