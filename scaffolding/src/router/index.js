import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../views/index.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  // 测试
  {
    path: '/header',
    name: 'header',
    component: () => import(/* webpackChunkName: "header" */ '../components/mintui/header.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '../components/mintui/button.vue')
  },
  {
    path: '/field',
    name: 'field',
    component: () => import(/* webpackChunkName: "field" */ '../components/mintui/field.vue')
  },
  {
    path: '/checklist',
    name: 'checklist',
    component: () => import(/* webpackChunkName: "checklist" */ '../components/mintui/checklist.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import(/* webpackChunkName: "radio" */ '../components/mintui/radio.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import(/* webpackChunkName: "navbar" */ '../components/mintui/navbar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
