<template>
  <div>
    <div id="coding_playground_outer">
      <header id="playground_header">
        <h1>live Coding Playground</h1>
      </header>
      <div class="page-wrap twilight">
        <div class="boxes">
          <div id="coding_area">
            <textarea id="html" placeholder="HTML" class="prism-live language-html"></textarea> 
            <textarea id="css" placeholder="CSS" class="prism-live language-css"></textarea> 
            <textarea id="js" placeholder="javascript" class="prism-live language-js"></textarea> 
          </div>
          
          <div id="code_output">
            <iframe id="code"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import 'prismjs/components/prism-javascript'


import 'prismjs/components/prism-livescript.js';
import 'prismjs/themes/prism-tomorrow.css';
export default {

    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        Prism.highlightAll();
     

        let html = document.getElementById("html");
        let css = document.getElementById("css");
        let js = document.getElementById("js");
        let code = document.getElementById("code").contentWindow.document;

        document.body.onkeyup = function(){
            console.log("a")
            code.open();
            code.writeln(html.value+"<style>"+css.value+"</style>" + "<script>"+js.value +"<\/script>");
            code.close();
        }
    
    },

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  outline: 0;
}
header#playground_header {
  background: #1e1f26;
  height: 65px;
}
header#playground_header > h1 {
  padding: 0;
  text-align: center;
  color: #fff;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  line-height: 35px;
  font-family: 'IBM Plex Sans', sens-serif;
}
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