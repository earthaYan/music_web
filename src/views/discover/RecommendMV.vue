<template>
    <BlockTitle title="推荐MV" />
    <v-row class="px-3">
        <v-col v-for="(item, index) in personalizedMv" :key="index" cols="3" @click="() => jumpToMVDetail(item.id)">
            <CoverPlay :name="item.name" :pic-url="item.picUrl" :play-count="item.playCount" :show-play-count="true"
                video />
            <div class="mt-1 title">{{ item.name }}</div>
            <div class="mt-1 artist">
                <small>
                    {{ item.artistName }}
                </small>
            </div>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import BlockTitle from '@/components/common/BlockTitle.vue';
import CoverPlay from '@/components/common/CoverPlay.vue';
import { onMounted, toRefs } from 'vue';
import { useMusicStore } from '@/stores/useMusicStore';
import { useRouter } from 'vue-router';
const { personalizedMv } = toRefs(useMusicStore())
const { getPersonalizedMvData } = useMusicStore()
const router = useRouter()
const jumpToMVDetail = (id: number) => {
    router.push({ name: 'mvDetail', query: { id: id } })
}
onMounted(() => {
    getPersonalizedMvData()
})
</script>
<style scoped lang="scss">
.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.75rem;
    line-height: 1rem;
}

.artist {
    color: rgb(148 163 184 / 1);
}
</style>