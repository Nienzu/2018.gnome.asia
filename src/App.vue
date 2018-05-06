<template>
  <div id="app">
    <Nav ></Nav>
    <transition :name=transitionName>
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>

  import Nav from "./components/Nav";
  //判断语言
  var currnetLang = navigator.language;
  console.log(currnetLang);
  //localStorage.lang = 'en';
  console.log(navigator.language);
  if(!localStorage.lang) {
    if (!currnetLang || currnetLang=="zh-CN") {
      localStorage.lang = 'zhCHS'
    }
    else if (currnetLang == "zh-HK" || currnetLang == "zh-TW") {
      localStorage.lang = 'zhCHT'
    }
    else {
      localStorage.lang = 'en'
    }
  }

  export default {
    name: 'App',
    components: {Nav},
    data(){
      return {
        transitionName:'fade',
        name : 'none'
      }
    },
    methods:{
      Login(name){
        this.name = name
      },
    },
  }
</script>

<style>
  [target=_blank]{
    display: none;
  }
  ::-webkit-scrollbar{
    display: none;
  }
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 1s cubic-bezier(.55,0,.1,1);
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
