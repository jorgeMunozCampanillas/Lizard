<template>
  <div>
    <nav id="nav_profile">
        <ul class="nav_profile-main nav_profile-option">
            <li @click="SET_OPMAIN(1)" :class="{active: optionMain == 1}">Your Work</li>
            <li @click="SET_OPMAIN(2)" :class="{active: optionMain == 2}">Following</li>
        </ul>
        <hr>
        <ul v-if="optionMain == 1" class="nav_profile-work nav_profile-option">
            <li @click="SET_OPSECOND(1)" :class="{active: optionSecond == 1}">Components</li>
            <li @click="SET_OPSECOND(2)" :class="{active: optionSecond == 2}">Collections</li>
            <li @click="SET_OPSECOND(3)" :class="{active: optionSecond == 3}">Deleted</li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
    data() {
        return {
            optionMain: 1,
            optionSecond: 1,
        }
    },
    methods:{
        SET_OPMAIN(id){
            this.optionMain = id;
            console.log(id)
        },
        SET_OPSECOND(id){
            this.optionSecond = id;
        }
    }

}
</script>

<style>

</style>