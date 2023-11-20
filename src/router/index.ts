import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ThreadShowView from '@/views/ThreadShowView.vue'
import ForumView from '@/views/ForumView.vue'
import CategoryView from '@/views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: ForumView,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'Thread',
      component: ThreadShowView,
      props: true
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: CategoryView,
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
