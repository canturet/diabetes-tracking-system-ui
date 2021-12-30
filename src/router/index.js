import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./../views/Home'),
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('./../views/Result'),
    beforeEnter: (to, from, next) => {
			let bool=false;
			bool !==localStorage.getItem('token');
			if (localStorage.getItem('token')!=null) {
				next()
			} else {
				next("/login")
			}
		}
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('./../views/Test'),
    beforeEnter: (to, from, next) => {
			let bool=false;
			bool !==localStorage.getItem('token');
			if (localStorage.getItem('token')!=null) {
				next()
			} else {
				next("/login")
			}
		}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./../views/Register')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./../views/Login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router