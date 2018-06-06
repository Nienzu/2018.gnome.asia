import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import aboutUs from '@/components/aboutUs'
import apply from '@/components/apply'


Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        Num: 0
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component:about,
    //   meta:{
    //     Num:0
    //   }
    // },
    {
      path: '/aboutUs',
      name: '/aboutUs',
      component: aboutUs,
      meta: {
        Num: 1
      }
    },
    {
      path: '/apply',
      name: '/apply',
      component: apply,
      meta: {
        Num: 1
      }
    },
    
  ]
})