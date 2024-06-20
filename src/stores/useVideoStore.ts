import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PersonalizedPrivateContent, Video, VideoGroup } from '@/typing/video'
import { getPersonalizedMv as getPersonalizedMvData } from '@/api/recommend'
import {
  getPersonalizedPrivateContentList,
  getVideoGroupList,
  getVideoTimelineRecommend as getVideoTimelineRecommendData
} from '@/api/video'

import type { PersonalizedMv } from '@/typing/personalized'

export const useVideoStore = defineStore('video', () => {
  const videoTimelineRecommend = ref<Video[]>([])
  const getVideoTimelineRecommend = async () => {
    if (videoTimelineRecommend.value.length) return
    videoTimelineRecommend.value = await getVideoTimelineRecommendData()
  }

  const personalizedPrivateContent = ref<PersonalizedPrivateContent[]>([])
  const getPersonalizedPrivateContent = async () => {
    if (personalizedPrivateContent.value.length) return
    personalizedPrivateContent.value = await getPersonalizedPrivateContentList(4)
  }

  const personalizedMv = ref<PersonalizedMv[]>([])
  const getPersonalizedMv = async () => {
    if (personalizedMv.value.length) return
    personalizedMv.value = await getPersonalizedMvData()
  }

  const videoGroup = ref<VideoGroup[]>([])
  const getVideoGroup = async () => {
    if (videoGroup.value.length) return
    videoGroup.value = await getVideoGroupList()
  }

  return {
    videoTimelineRecommend,
    getVideoTimelineRecommend,

    personalizedPrivateContent,
    getPersonalizedPrivateContent,

    personalizedMv,
    getPersonalizedMv,

    videoGroup,
    getVideoGroup
  }
})
