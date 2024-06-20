import type { PersonalizedPrivateContent, Video, VideoGroup } from '@/typing/video'
import { $get } from './serviceBase'

export const getPersonalizedPrivateContentList = (
  limit: number = 10,
  offset: number = 0
): Promise<PersonalizedPrivateContent[]> => {
  return $get('personalized/privatecontent/list', {
    limit,
    offset
  }).then((res) => {
    return res.result
  })
}

export const getVideoGroupList = (): Promise<VideoGroup[]> => {
  return $get('video/group/list').then((res) => {
    return res.data
  })
}

export const getVideoTimelineRecommend = (offset: number = 0): Promise<Video[]> => {
  return $get('video/timeline/recommend', {
    offset: offset
  }).then((res) => {
    return res.datas
  })
}
export const getVideoGroupOrTimeLine = (id?: number, offset?: number): Promise<Video[]> => {
  return $get(id ? 'video/group' : 'video/timeline/all', {
    id: id,
    offset: offset
  }).then((res) => {
    return res.datas
  })
}
