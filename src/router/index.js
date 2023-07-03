import { createRouter,createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue';
import Blog1 from '../components/Blog1.vue';
import Blog2 from '../components/Blog2.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/blog1',
      component: Blog1
    },
    {
      path: '/blog2',
      component: Blog2
    },
  ]
})

export default router
