import type { INewSong, IPlayList, PersonalizedMv } from '@/typing/recommend.type'
import { $get } from './serviceBase'

export const getPersonalized = (): Promise<IPlayList[]> => {
  return $get('/personalized').then((res) => {
    return res.result
  })
}
export const getRecommendedNewSong = (): Promise<INewSong[]> => {
  return $get('/personalized/newsong').then((res) => {
    return res.result
  })
}
export const getPersonalizedMv = (): Promise<PersonalizedMv[]> => {
  return $get('personalized/mv').then((res) => {
    return res.result
  })
}
