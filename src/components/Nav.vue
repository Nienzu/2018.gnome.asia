<template>
   <div>
     <language-switcher id="dropdown1"/>

    <nav class="title1">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo" style="margin-left: 3%">GNOME.Asia<span style="color: #66ccff"> 2018 Summit</span></router-link>
        <router-link to="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></router-link>
        <ul class="right hide-on-med-and-down" style="margin-right: 3%">
          <li>
            <router-link to="/">{{$t("Nav.home")}}</router-link>
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
    <language-switcher id="dropdown2"/>

    <ul class="sidenav" id="mobile-demo">
      <li @click="closeNav">
        <router-link to="/">{{$t("Nav.home")}}</router-link>
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

  </div>


</template>


<script>
import LanguageSwitcher from './widgets/LanguageSwitcher.vue';
export default {
    components: {
      'language-switcher': LanguageSwitcher
    },
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
      }
    },
    mounted() {
      $(".dropdown-trigger").dropdown();
      $('.modal').modal();
    }
  }
</script>

<style scoped>

</style>
