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
      path: '/blog1',
      name: 'base',
      component: () => import('../components/Blog1.vue')
    },
    {
      path: '/blog2',
      name: 'base',
      component: () => import('../components/Blog2.vue')
    }
  ]
})

export default router
