<template>
  <div>
    <div v-bind:class="bgclass" style="{height:h1}">
      <div :class="title"></div>
    </div>
    <About :style="{height:h2}" id="about"></About>
  </div>
</template>

<script>
import About from "./about";
let state = 1;
export default {
    name: "home",
    components: { About },
    computed: {
        h_screen: function() {
            return document.documentElement.clientHeight;
        },
        h1: function() {
            return this.h_screen + "px";
        },
        h2: function() {
            return this.h_screen + "px";
        },
        bgclass: function() {
            return (
                "pic" + Math.floor(Math.random() * 3 + 1) + " responsive-img"
            );
        },
        lang: function() {
            return localStorage.lang;
        },
        title: function() {
            if (this.lang === "zhCHS") {
                return "homeTitle";
            } else if (this.lang === "en") return "enHomeTitle";
            else return "twHomeTitle";
        }
    }
};
</script>

<style scoped>
body {
    transition: 0.5s;
}
</style>
