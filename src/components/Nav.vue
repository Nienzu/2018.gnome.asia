<template>
   <div>
    <ul id="dropdown1" class="dropdown-content tit1">
      <li>
        <a @click="toEN">English</a>
      </li>
      <li>
        <a @click="toZHCHS">简体中文</a>
      </li>
      <li>
        <a @click="toZHCHT">繁体中文</a>
      </li>
    </ul>


    <nav class="title1">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo" style="margin-left: 3%">GNOME.Asia<span style="color: #66ccff"> 2018 Summit</span></router-link>
        <router-link to="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></router-link>
        <ul class="right hide-on-med-and-down" style="margin-right: 3%">
          <li>
            <router-link to="/">{{$t("Nav.home")}}</router-link>
          </li>
          <li>
            <router-link to="apply">{{$t("Nav.apply")}}</router-link>
          </li>
          <li class="t1">
            <router-link to="">{{$t("Nav.agenda")}}</router-link>
          </li>
          <li class="t1">
            <router-link to="">{{$t("Nav.news")}}</router-link>
          </li>
          <li class="t1">
            <router-link to="">{{$t("Nav.thanks")}}</router-link>
          </li>
          <li ><a class="dropdown-trigger"  data-target="dropdown1">{{$t("Nav.lang")}}<i
            class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
    </nav>
    <ul id="dropdown2" class="dropdown-content tit1">
      <li>
        <a @click="toEN">English</a>
      </li>
      <li>
        <a @click="toZHCHS">简体中文</a>
      </li>
      <li>
        <a @click="toZHCHT">繁体中文</a>
      </li>
    </ul>
    <ul class="sidenav" id="mobile-demo">
      <li @click="closeNav">
        <router-link to="/">{{$t("Nav.home")}}</router-link>
      </li>
      <li @click="closeNav">
        <router-link to="/apply">{{$t("Nav.apply")}}</router-link>
      </li>
      <li>
        <router-link to="" class="t1">{{$t("Nav.agenda")}}</router-link>
      </li>
      <li>
        <router-link to="" class="t1">{{$t("Nav.news")}}</router-link>
      </li>
      <li class="t3" @click="closeNav">
        <router-link to="/community">{{$t("Nav.community")}}</router-link>
      </li>
      <li>
        <router-link to="" class="t1">{{$t("Nav.thanks")}}</router-link>
      </li>
      <li><a class="dropdown-trigger" data-target="dropdown2">{{$t("Nav.lang")}}<i class="material-icons right">arrow_drop_down</i></a>
      </li>

    </ul>

     <!--登录模态框
     <div id="modalLogin" class="modal">

       <div class="modal-content">
         <h4 style="color: black">登录</h4>
         <form id="login">
           <div class="row">
             <div class="input-field col s12">
               <input value="email" id="email1" type="email" class="validate">
               <label for="email1">邮箱</label>
             </div>
           </div>

           <div class="row">
             <div class="input-field col s12">
               <input id="password2" type="password" class="validate">
               <label for="password2">密码</label>
             </div>
           </div>

           <div>
             <p></p>
           </div>
         </form>

           <div class="modal-footer">
             <router-link to="" class="btn waves-effect waves-light" >注册
             </router-link>
             <button class="btn waves-effect waves-light" @click="subLogin">登录
             </button>
           </div>

       </div>
     </div>
     -->
  </div>


</template>


<script>
export default {
    name: "nav",
    props: ['name'],
    methods: {

      open1() {
        $('#modalLogin').modal('open');
      },
      open() {
        $('.modal').modal();
        $('#modalRegister').modal('open');
      },
      closeNav() {
        $('.sidenav').sidenav('close');
      },
      toZHCHS(){
        localStorage.lang='zhCHS'
        this.$i18n.locale='zhCHS'
        window.location.reload()
      },
      toZHCHT(){
        localStorage.lang='zhCHT'
        this.$i18n.locale='zhCHT'
        window.location.reload()
      },
      toEN(){
        localStorage.lang='en'
        this.$i18n.locale='en'
        window.location.reload()
      }

    },

  }
  window.onload = function () {
    $(".dropdown-trigger").dropdown();
    $('.modal').modal();
  }
</script>

<style scoped>

</style>
