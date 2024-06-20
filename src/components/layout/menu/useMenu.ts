import {
  Planet,
  Music,
  VideoOne,
  Fm,
  Like,
  Computer,
  DownloadThree,
  PlayTwo
} from '@icon-park/vue-next'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export interface IMenu {
  name: string
  key: string
  icon: any
  theme: 'outline' | 'filled' | 'two-tone' | 'multi-color'
}
export interface IMenus {
  name: string
  menus: IMenu[]
}
export const useMenu = () => {
  const menus: IMenus[] = [
    {
      name: '在线音乐',
      menus: [
        {
          name: '推荐',
          key: 'discover',
          icon: Planet,
          theme: 'outline'
        },
        {
          name: '音乐馆',
          key: 'music',
          icon: Music,
          theme: 'outline'
        },
        {
          name: '视频',
          key: 'video',
          icon: VideoOne,
          theme: 'outline'
        },
        {
          name: '电台',
          key: 'dj',
          icon: Fm,
          theme: 'outline'
        }
      ]
    }
  ]
  const route = useRoute()
  const currentKey = ref(route.meta.menu)
  const router = useRouter()
  watch(
    () => route.meta.menu,
    (menu) => {
      currentKey.value = menu
    }
  )
  const click = async (menu: IMenu) => {
    await router.push({ name: menu.key, replace: true })
  }
  return {
    menus,
    click,
    currentKey
  }
}
