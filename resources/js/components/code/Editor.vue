<template>
  <div>
    <textarea :id="lang"></textarea>
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
    name:'Editor',
    props: ['lang'],
    data: () => ({
        editor:null
    }),
    mounted() {
        this.editor = CodeMiror.fromTextArea(document.getElementById(this.lang), {
            lineNumbers: true,
            theme: 'dracula',
            mode: this.lang,
        })

        this.editor.on("change", ()=>{
            this.$emit('update', this.lang, this.editorValue());
        })

    },
    methods: {
        editorValue(){
            return this.editor.getValue();
        },
    },
}
</script>

<style>

</style>