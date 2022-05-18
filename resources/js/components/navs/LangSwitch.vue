<template>
  <div>
    <select v-model="$i18n.locale">
        <option
            v-for="(lang, i) in $i18n.availableLocales"
            :key="`lang-${i}`"
            :value="lang"
            @click="setLocale(lang)">
            {{ lang }}
        </option>
    </select>
  </div>
</template>

<script>
export default {
    methods:{
        setLocale(locale){
            this.$i18n.locale = locale
            localStorage.setItem('language', locale);
            this.$router.push({params: {lang: locale}})
        }
    }
}
</script>

<style>

</style>