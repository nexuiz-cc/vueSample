import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/option1',
      name: 'base',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Option1.vue')
    }
  ]
})

export default router
