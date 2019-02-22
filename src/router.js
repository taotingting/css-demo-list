import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/css1',
      name: 'css1',
      component: () => import(/* webpackChunkName: "about" */ './views/css1.vue')
    },
    {
      path: '/css2',
      name: 'css2',
      component: () => import(/* webpackChunkName: "about" */ './views/css2.vue')
    },
    {
      path: '/css3',
      name: 'css3',
      component: () => import(/* webpackChunkName: "about" */ './views/css3.vue')
    },
    {
      path: '/css4',
      name: 'css4',
      component: () => import(/* webpackChunkName: "about" */ './views/css4.vue')
    },
    {
      path: '/css5',
      name: 'css5',
      component: () => import(/* webpackChunkName: "about" */ './views/css5.vue')
    },
    {
      path: '/css6',
      name: 'css6',
      component: () => import(/* webpackChunkName: "about" */ './views/css6.vue')
    }
  ]
})
