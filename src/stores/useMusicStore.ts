import { getPersonalized, getPersonalizedMv, getRecommendedNewSong } from '@/api/recommend'
import type { INewSong, IPlayList, PersonalizedMv } from '@/typing/recommend.type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMusicStore = defineStore('music', () => {
  const personalized = ref<IPlayList[]>([])
  const getPersonalizedData = async () => {
    if (personalized.value.length) return
    personalized.value = await getPersonalized()
  }
  const personalizedNewSong = ref<INewSong[]>([])
  const getPersonalizedNewSongData = async () => {
    if (personalizedNewSong.value.length) return
    personalizedNewSong.value = await getRecommendedNewSong()
  }
  const personalizedMv = ref<PersonalizedMv[]>([])
  const getPersonalizedMvData = async () => {
    if (personalizedMv.value.length) return
    personalizedMv.value = await getPersonalizedMv()
  }
  return {
    personalized,
    getPersonalizedData,
    getPersonalizedNewSongData,
    personalizedNewSong,
    getPersonalizedMvData,
    personalizedMv
  }
})
