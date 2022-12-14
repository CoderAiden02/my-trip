import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/favor.vue'),
    },
    {
      path: '/message',
      component: () => import('@/views/message/message.vue'),
      meta: {
        isHideTabbar: true,
      },
    },
    {
      path: '/order',
      component: () => import('@/views/order/order.vue'),
    },
    {
      path: '/city',
      component: () => import('@/views/city/city.vue'),
      meta: {
        isHideTabbar: true,
      },
    },
    {
      path: '/search',
      component: () => import('@/views/search/search.vue'),
      meta: {
        isHideTabbar: true,
      },
    },
    {
      path: '/detail/:id',
      component: () => import('@/views/detail/detail.vue'),
      meta: {
        isHideTabbar: true,
      },
    },
  ],
})

export default router
