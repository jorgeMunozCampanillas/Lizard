<template>
<div>
  <textarea v-model="content" id="editor"></textarea>
  <textarea id="html"></textarea>
  <textarea id="css"></textarea>

  <div id="code_output">
    <iframe id="code"></iframe>
  </div>
</div>
</template>

<script>
import * as CodeMiror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/css/css';

import 'codemirror/mode/gfm/gfm.js';

export default {
  data() {
    return {
      content: 'let a=0;\n#hello world'
    }
  },
  mounted() {
    CodeMiror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
    });

    CodeMiror.fromTextArea(document.getElementById('html'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'htmlmixed',
    });

    CodeMiror.fromTextArea(document.getElementById('css'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'css',
    });

  },

  methods:{

  }

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