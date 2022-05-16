<template>
  <div class="editor">
    <div class="data">
        <h3>{{language}}</h3>
        <img  :src="'/storage/codeIcons/'+language+'.png'" alt="">
    </div>
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
    props: ['lang', 'code', 'language'],
    data: () => ({
        editor:null,
    }),
    mounted() {
        this.editor = CodeMiror.fromTextArea(document.getElementById(this.lang), {
            lineNumbers: true,
            theme: 'dracula',
            mode: this.lang,
        });

        this.editor.setSize("100%", "94%");

        this.editor.on("change", ()=>{
            this.$emit('update', this.lang, this.editorValue());
        });

        setTimeout(this.fillEditor, 1000);
    },
    methods: {
        fillEditor(){
            if (this.code!=null) this.editor.setValue(this.code);
        },
        editorValue(){
            return this.editor.getValue();
        }
    },
}
</script>

<style>

</style>