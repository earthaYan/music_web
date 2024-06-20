<template>
    <div>
        <div class="header d-flex justify-space-between align-items-center">

            <v-row>
                <v-col @click="idChange(item.id)" :class="{ 'text-active': pageData.id === item.id }"
                    v-for="item in videoGroup.slice(0, 8)" :key="item.id">{{ item.name }}
                </v-col>
            </v-row>
        </div>
        <v-row>
            <v-col v-for="{ data } in videoList" :key="data.vid" cols="4" @click="handleJumpToMv(data.vid)">
                <CoverPlay :pic-url="data.coverUrl" video />
                <div class="text-xs mt-3 truncate">{{ data.title }}</div>
            </v-col>
        </v-row>

    </div>
</template>
<script setup lang="ts">
import { getVideoGroupOrTimeLine } from '@/api/video';
import CoverPlay from '@/components/common/CoverPlay.vue';
import { useVideoStore } from '@/stores/useVideoStore';
import type { Video } from '@/typing/video';
import { onMounted, reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
const { videoGroup } = toRefs(useVideoStore())
const { getVideoGroup } = useVideoStore()
const videoList = ref<Video[]>([])
const pageData = reactive({
    page: 1,
    id: 0,
})
const getData = async () => {
    videoList.value = await getVideoGroupOrTimeLine(pageData.id, pageData.page - 1)
}

const idChange = (id: number) => {
    console.log(id)
    pageData.id = id
    pageData.page = 1
    getData()
}
onMounted(() => {
    getVideoGroup()
    getData()
})
const router = useRouter()
const handleJumpToMv = (id: string) => {
    router.push({ name: 'mvDetail', query: { id: id } })
}
</script>
<style scoped lang="scss">
.header {
    .text-active {
        color: lightgreen
    }
}
</style>