<template>
    <div>
      <div v-bind:class="bgclass" style="{height:h1}">
        <home-image></home-image>
      </div>
      <About :style="{height:h2}" id="about"></About>
    </div>
</template>

<script>
import About from "./about";
import homeImage from "./homeImage";
let state = 1;
export default {
  name: "home",
  components: { homeImage, About },
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
    bgclass: function(){
        return "pic"+Math.floor(Math.random()*3+1);
    }
  }

  // methods:{
  //   scrollFunc(){
  //     let e = e || window.event
  //
  //     if(e.wheelDelta> 0) {
  //       this.mt = 0
  //     }
  //     else if(e.wheelDelta<0 ){
  //       this.mt = -h_screen
  //      }
  //   }
  // },
  // mounted(){
  //     window.addEventListener("mousewheel", this.scrollFunc)
  // }
};
</script>

<style scoped>
body {
  transition: 0.5s;
}
</style>
