<template>
  <BlockTitle title="你的专属歌单" />
  <v-row>
    <v-col v-for="(item, index) in personalized.splice(0, 12)" :key="index" cols="2"
      @click="() => jumpToPlayList(item.id)">
      <CoverPlay :name="item.name" :pic-url="item.picUrl" :play-count="item.playCount" :show-play-count="true" />
      <div class="text-main">{{ item.name }}</div>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import CoverPlay from '@/components/common/CoverPlay.vue'
import BlockTitle from '@/components/common/BlockTitle.vue'
import { onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useMusicStore } from '@/stores/useMusicStore'
const { personalized } = toRefs(useMusicStore())
const { getPersonalizedData } = useMusicStore()
onMounted(() => {
  getPersonalizedData()
})

const router = useRouter()
const jumpToPlayList = (id: number) => {
  router.push({
    name: 'playlist',
    query: {
      id: id
    }
  })
}
</script>
<style lang="scss" scoped>
.text-main {
  font-size: 0.75rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.5rem;
}
</style>
