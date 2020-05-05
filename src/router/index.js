import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import FlokkurParent from '../views/FlokkurParent.vue'
import FlokkurChild from '../components/FlokkurChild.vue';
import Preview from '../views/Preview.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flokkur',
    name: 'FlokkurParent',
    component: FlokkurParent,
    children: [
      {
        path: ':uid',
        name: 'FlokkurChild',
        component: FlokkurChild
      },
    ]
  },
  {
    path: '/preview',
    name: 'preview',
    component: Preview
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
