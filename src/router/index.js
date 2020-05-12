import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/layout'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('@/views/Home/index.vue')
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    // hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/Home/index.vue'),
      name: 'Home',
      meta: {
        title: '首页'
      }
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
