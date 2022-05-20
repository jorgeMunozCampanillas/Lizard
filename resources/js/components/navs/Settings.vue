<template>
  <div>
    <div id="setting_nav">
        <nav id="setting_main">
            <ul>
                <li @click="SET_MAIN('css')">CSS</li>
                <li @click="SET_MAIN('js')">JS</li>
                <li @click="SET_MAIN('display')">MODE</li>
            </ul>
        </nav>
        <nav id="setting_options">
            <ul id="setting_options-css" v-if="optionMain=='css'">
                <li @click="changeFramework('bootstrap')">Bootstrap</li>
                <li @click="changeFramework('tailwind')">Tailwind</li>
                <li @click="changeFramework('css')">Pure CSS</li>
            </ul>
            <ul id="setting_options-js" v-if="optionMain=='js'">
                <li @click="changeFramework('jquery')">JQuey</li>
            </ul>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            optionMain:"css",
            frameworks:{
                tailwind:"<script src='https://cdn.tailwindcss.com'><\/script>",
                bootstrap:"<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>",
                css:"",
                jquery:"<script src='https://code.jquery.com/jquery-3.6.0.js' integrity='sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk='' crossorigin='anonymous'><\/script>"
            },
            frameworksToUse:[],
            tags:[],
        }
    },
    methods:{
        // Options 
        SET_MAIN(mode){
            this.optionMain=mode;
        },

        // CSS
        changeFramework(framework){
            //capitalize framework param
            let tag = framework.charAt(0).toUpperCase()+framework.slice(1);

            //Add or delete the framework 
            if (this.frameworksToUse.includes(this.frameworks[framework])) {
                //CDN
                let index = this.frameworksToUse.indexOf(this.frameworks[framework]);
                this.frameworksToUse.splice(index, 1);

                //TAGS
                index = this.tags.indexOf("#"+tag);
                this.tags.splice(index, 1);

            }else{
                //CDN
                this.frameworksToUse.push(this.frameworks[framework]);

                //TAGS
                this.tags.push("#"+tag);
            }
            //send tags and cdns to create code
            let data = {
                'cdns':this.frameworksToUse.join(''),
                'tags':this.tags,
            }
            this.$root.$emit("changeFramework", data);
        },


    }
}
</script>

<style>

</style>