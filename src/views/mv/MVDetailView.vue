<template>
    <div v-if="mvUrl?.url">
        <div class="d-flex">
            <div>
                <video class="aspect-video" :src="mvUrl?.url" autoplay controls />
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { getMVUrl } from "@/api/mv";
import { MvUrl } from '@/types/mv'
import { useRoute } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";
import { usePlayerStore } from '@/stores/usePlayerStore'
const route = useRoute()
const id = Number(route.query.id)
const mvUrl = ref<MvUrl>()
const { setPlay, setPause } = usePlayerStore()
onMounted(async () => {
    mvUrl.value = await getMVUrl(id)
    setPlay()

})
onUnmounted(() => {
    setTimeout(() => {
        setPause()
    }, 1000)
})
</script>
<style scoped lang="scss">
.aspect-video {
    aspect-ratio: 16/9;
    width: 100%;
}
</style>