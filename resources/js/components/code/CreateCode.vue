<template>
<div>
  <textarea v-model="content" id="editor"></textarea>
  <textarea id="html"></textarea>
  <textarea id="css"></textarea>

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

}
</script>

<style>

</style>