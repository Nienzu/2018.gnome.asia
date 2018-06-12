// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import en from '../static/lang/en'
import zhCHS from '../static/lang/zhCHS'
import zhCHT from '../static/lang/zhCHT'


Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang,
  messages: {
    'en': en,
    'zhCHS': zhCHS,
    'zhCHT': zhCHT,
  }
})


/* eslint-disable no-new */
var mainVue = new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>',
  methods:{
    test(){
      console.log("hi")
    }
  }
})

$(document).ready(function () {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  //leaflet for OSM s
  var map = L.map('osm-map').setView([25.0138, 121.5413], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([25.0138, 121.5413]).addTo(map)
      .bindPopup(mainVue.$t("About.place1"))
      .openPopup();
});