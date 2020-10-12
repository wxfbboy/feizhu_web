import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue';
import Personal from '@/pages/personal/personal.vue';
import Container from '@/pages/container/container.vue';

Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/',
        name:'home',
        component:Home
      },
      {
        path:'/personal',
        name:'personal',
        component:Personal
      },
      {
        path:'/container',
        name:'container',
        component:Container
      }
  ]
})
