import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/RootView.vue'),
    redirect: { name: 'discover' },
    children: [
      {
        path: 'discover',
        name: 'discover',
        component: () => import('@/views/discover/DiscoverView.vue'),
        meta: {
          menu: 'discover',
          KeepAlive: true
        }
      },
      {
        path: 'music',
        name: 'music',
        component: () => import('@/views/music/MusicView.vue'),
        redirect: { name: 'picked' },
        meta: {
          menu: 'music'
        },
        children: [
          {
            path: 'picked',
            name: 'picked',
            component: () => import('@/views/music/picked/PickedView.vue'),
            meta: {
              menu: 'music',
              KeepAlive: true
            }
          },
          {
            path: 'top',
            name: 'top',
            component: () => import('@/views/music/top/TopView.vue'),
            meta: {
              menu: 'music',
              KeepAlive: true
            }
          },
          {
            path: 'artist',
            name: 'artist',
            component: () => import('@/views/music/artist/ArtistView.vue'),
            meta: {
              menu: 'music',
              title: '歌手',
              KeepAlive: true
            }
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/music/category/CategoryView.vue'),
            meta: {
              menu: 'music',
              title: '分类歌单',
              keepAlive: true
            }
          }
        ]
      },
      {
        path: 'playlist',
        name: 'playlist',
        component: () => import('@/views/playlist/PlayList.vue')
      },
      {
        path: 'artistDetail',
        name: 'artistDetail',
        component: () => import('@/views/artist/ArtistDetail.vue')
      },
      {
        path: 'album',
        name: 'album',
        component: () => import('@/views/album/AlbumView.vue')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video/VideoView.vue'),
        meta: {
          menu: 'video',
          title: '视频',
          KeepAlive: true
        }
      },
      {
        path: 'dj',
        name: 'dj',
        component: () => import('@/views/dj/DJ.vue'),
        meta: {
          menu: 'dj',
          title: '电台',
          KeepAlive: true
        }
      },
      {
        path: 'mvDetail',
        name: 'mvDetail',
        component: () => import('@/views/mv/MVDetailView.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
