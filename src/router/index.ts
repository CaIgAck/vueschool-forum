import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ThreadShowView from '@/views/ThreadShowView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/thread/:id',
      name: 'Thread',
      component: ThreadShowView,
      props: true
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Not found',
      component: NotFoundView
    }
  ]
})

export default router
