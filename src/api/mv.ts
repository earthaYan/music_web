import type { MvUrl } from '@/typing/mv'
import { $get } from './serviceBase'

export const getMVUrl = (id: number): Promise<MvUrl> => {
  return $get('mv/url', {
    id: id
  }).then((res) => {
    return res.data
  })
}
