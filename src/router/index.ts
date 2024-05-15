import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
export const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    redirect: { name: 'discover' },
    meta: {
      title: '在线音乐',
      menu: true
    },
    children: [
      {
        path: '/discover',
        name: 'discover',
        component: () => import('@/views/discover/DiscoverView.vue'),
        meta: {
          title: '推荐',
          menu: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
