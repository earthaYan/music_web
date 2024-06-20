import { $get } from './serviceBase'
import type { SongUrl } from '@/typing/songUrl'
export const getSongUrlById = (id: number): Promise<SongUrl> => {
  return $get('/song/url', { id }).then((res) => {
    return res.data[0]
  })
}
export const getSongDetailById = async (id: number) => {
  return $get('/song/detail', { ids: id }).then((res) => {
    return res.songs[0]
  })
}
