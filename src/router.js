import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from './views/index.vue'
if(process.env.NODE_ENV === 'development'){
  Vue.use(Router)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home,
      // children: [
      //   {
      //     path: '/home',
      //     meta: {
      //       title: '首页'
      //     },
      //     component: Home
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
    // ,
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   redirect: '/demo',
    //   component:index,
    //   children: [
    //     {
    //       path: '/demo',
    //       meta: {
    //         title: '首页'
    //       },
    //       component: () => import(/* webpackChunkName: "about" */ './demo/demo.vue')
    //     }
    //   ]
    // }
  ]
})
