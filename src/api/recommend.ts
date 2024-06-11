import type { IPlayList } from '@/typing/recommend.type'
import { $get } from './serviceBase'

export const getRecommendPlayList = (): Promise<{
  data: IPlayList[]
}> => {
  return $get('/personalized').then((res) => {
    return {
      data: res.result
    }
  })
}
