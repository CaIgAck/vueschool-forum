import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/HomeView.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'Thread',
      component: PageThreadShow,
      props: true
    }
  ]
})

export default router
