import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/uploaded-file',
    name: 'UploadedFile',
    component: () => import('../views/UploadedFile.vue')
  },
  {
    path: '/print-home',
    name: 'PrintHome',
    component: () => import('../views/PrintHome.vue')
  },
  {
    path: '/print-file',
    name: 'PrintFile',
    component: () => import('../views/PrintFile.vue')
  },
  {
    path: '/projet-home',
    name: 'ProjetHome',
    component: () => import('../views/ProjetHome.vue')
  },
  {
    path: '/projet-file',
    name: 'ProjetFile',
    component: () => import('../views/ProjetFile.vue')
  },
  {
    path: '/devs',
    name: 'Devs',
    component: () => import('../views/devs/Devs.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
