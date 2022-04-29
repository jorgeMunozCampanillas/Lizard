
export const store = {
    //Data accessible from any component
  state: () => ({
    html: '',
    css:'',
    js:'',
    src:'',
  }),

  //functions charge of updating our store when we indicate it
  mutations: {
    updateHtml(state, html){
        state.html = html;
    },
    updateCss(state, css) {
        state.html = css;
    },
    updateJs(state, js){
        state.html = js;
    },
    updateSrc(state){
        state.src = `
        <html>
            <body>${state.html}</body>
            <style>${state.css}</style>
            <script>${state.js}</script>
        </html>`;
    },

    //Only getters :/
    getters: {
        getSrc(){
            return state.src;
        }
    },

    //Like mutations but this can be async
    actions:{
        updateFrame({commit}, {lang, code}){
            switch(lang) {
                case 'html':
                  commit("updateHtml", code)
                  break;
                case 'css':
                  commit("updateCss", code)
                  break;
                case 'javascript':
                  commit("updateJs", code)
                  break;
                default:
                  break;
              }
        
              commit("updateSrc")
        }
    }
  }
};
