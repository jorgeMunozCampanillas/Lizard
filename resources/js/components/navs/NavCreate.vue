<template>
<div>
    <nav id="nav" class="nav-2">
        <ul class="nav-info">
            <img class="button" :src="'/storage/logo2-bueno.png'" id="logo" alt="">
            <div>
                <input id="project-title" type="text" placeholder="Untitled">
                <h6 id="logo-title">{{this.$store.state.auth.name}}</h6>
            </div>
        </ul>

        <!-- Options -->
        <ul class="nav-options">
            <li class="nav-option" @click="exit"><i class="bi bi-house-fill"></i>&nbsp;Home</li>
            <li class="nav-option" @click.prevent="save"><i class="bi bi-cloud-download-fill"></i>&nbsp;Save</li>
            <li class="nav-option" @click="settings"><i class="bi bi-gear-fill"></i>&nbsp;Setting</li>
            <li>
                <button>
                    <i v-if="this.$store.state.isAuthenticated==false" style="font-size:1.6rem" class="bi bi-person-circle"></i>
                    <User-Options v-else></User-Options>
                </button>
            </li>
        </ul>
        <!-- Settings -->
        <div id="settings_wrapper" v-if="settingsMode">
            <div @click="settings" class="settings_back"></div>
            <Settings class="settings"/>
        </div>
    </nav>
</div>
</template>

<script>
import Settings from './Settings.vue';
import UserOptions from './UserOptions.vue';
export default {
    components: { Settings,UserOptions },
    name: "naVue",
    data() {
        return {
            options: false,
            settingsMode:false,
        };
    },
    mounted() {
        document.addEventListener("click", (e) => {
            if (e.target.id == "close") this.settingsMode=!this.settingsMode;
        });
    },
    methods: {
        exit() {
            this.$router.push({ name: "home" });
        },
        save() {
            //Emit to save in Create/Edit code with the name
            let postName = document.getElementById("project-title").value;
            if (!postName)
                postName = "Untitled";
            this.$root.$emit("preview", postName);
        },
        settings(){
            this.settingsMode=!this.settingsMode;
        },
    },
}
</script>

<style>

</style>