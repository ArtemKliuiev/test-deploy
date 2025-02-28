import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/pages/main/MainPage.vue'
import ProductPage from '@/components/pages/product/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/pages/product/ProductPage.vue'),
    },
  ],
})

export default router
