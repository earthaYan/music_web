import { $get } from './serviceBase'

export const getSongUrlById = (id: number) => {
  return $get('/song/url', { id }).then((res) => {
    return res
  })
}
export const getSongDetailById = async (id: number) => {
  return $get('/song/detail', { ids: id }).then((res) => {
    return res.data[0]
  })
}
