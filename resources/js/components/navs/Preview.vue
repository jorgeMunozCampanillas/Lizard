<template>
  <div>
    <div class="code_preview-back" @click="preView()"></div>
    <div class="code_preview">
      <div class="code_previw-code">
        <iframe class="code_preview-iframe" :srcdoc="src" frameborder="0"></iframe>
      </div>
      <div class="code_preview-options">

        <!-- name -->
        <div class="preview-name">
          <h3>{{$t('nav.proyectName')}}</h3>
          <input type="text" :value="postName">
        </div>
        <!-- stacks -->
        <div class="preview-stacks">
          <h3>{{$t('nav.stacks')}}</h3>
          <img v-for="name in frameworksName" :key="name" :src="`/storage/codeIcons/`+name+`.png`" width="20px" alt="">
        </div>
        <!-- tags -->
        <div class="preview-tag">
          <div class="tags">
            <div class="tag" v-for="tag in tags" :key="tag">
              {{tag}}<div @click="deleteTag(tag)">&nbsp;x</div>
            </div>
          </div>
          <div class="tag-options">
            <label for="">{{$t('nav.addNewTag')}}</label>
            <input v-model="newTag" type="text">
            <div @click="addTag()">{{$t('nav.add')}}</div>
          </div>
        </div>

      </div>

      <div>
        <button @click="save()">{{$t('nav.save')}}</button>
        <button @click="cancelPreView()">{{$t('nav.cancel')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['src', 'postName', 'frameworksName', 'tags'],
    data() {
        return {
            newTag:'',
        }
    },
    methods:{
        addTag(){
            //Add #
            if (this.newTag.charAt(0) != "#") this.newTag = "#"+this.newTag;

            //Capitalize
            let newTagLower = this.newTag.toLowerCase();
            let cap = newTagLower.charAt(1).toUpperCase();
            this.newTag = this.newTag.charAt(0)+cap+newTagLower.slice(2);

            //Add to tags
            if (!this.tags.includes(this.newTag)) this.tags.push(this.newTag);
            this.newTag = '';
        },
        deleteTag(tag){
            let index = this.tags.indexOf(tag);
            this.tags.splice(index);
        },
        cancelPreView(){
            this.$root.$emit('cancelPreview', "a");
        },
        save(){
            this.$root.$emit('save', this.tags);
        }
    }
}
</script>

<style>

</style>