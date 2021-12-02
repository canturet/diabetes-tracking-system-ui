import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./../views/Home')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('./../views/Result')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('./../views/Test')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router