import { $get } from './serviceBase'

export const getUserDetail = (params: { uid: string }) => {
  return $get('/user/detail', params)
}

