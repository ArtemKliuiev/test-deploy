import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/components/pages/main/MainPage.vue'),
    },
    {
      path: '/shope',
      name: 'shope',
      component: import('@/components/pages/shope/ShopePage.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: import('@/components/pages/product/ProductPage.vue'),
    },
  ],
})

export default router
