import type { Song } from '@/typing/player.type'
import { $get } from './serviceBase'
import type { IHotComment, PlayListDetail } from '@/typing/playlist'

export const getSongList = (id: number): Promise<Song[]> => {
  return $get('playlist/track/all', { id }).then((res) => {
    return res.songs
  })
}
export const getPlayListDetail = (id: number, s: number = 8): Promise<PlayListDetail> => {
  return $get('/playlist/detail', {
    id: id,
    s: s
  }).then((res) => res.playlist)
}
export const getPlayListComment = (id: number): Promise<IHotComment[]> => {
  return $get('/comment/playlist', {
    id: id
  }).then((res) => {
    return res.hotComments
  })
}
