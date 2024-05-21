<template>
    <template v-if="suggestData">
        <div v-for="order in suggestData.order" :key="order">
            <div class="px-2 py-3">{{ getTitle(order) }}</div>
            <template v-if="order === 'songs'">
                <div v-for="item in suggestData.songs" :key="item.id" class="px-2 cursor-pointer"
                    @click="play(item.id)">
                    <span class="text-green">{{ item.name }}</span>
                    <span class="pl-1"> - {{ item.artists?.[0]?.name }}</span>
                </div>
            </template>
            <template v-if="order === 'albums'">
                <div v-for="item in suggestData.albums" :key="item.id" class="px-2 cursor-pointer"
                    @click="routerPush('album', item.id)">
                    <span class="text-green">{{ item.name }}</span>
                    <span class="pl-1"> - {{ item.artist.name }}</span>
                </div>
            </template>
            <template v-if="order === 'artists'">
                <div v-for="item in suggestData.artists" :key="item.id" class="px-2  cursor-pointer d-flex items-center"
                    @click="routerPush('artistDetail', item.id)">
                    <v-avatar size="small" :image="item.img1v1Url" />
                    <span class="text-green">{{ item.name }}</span>
                </div>
            </template>
            <template v-if="order === 'playlists'">
                <div v-for="item in suggestData.playlists" :key="item.id"
                    class="px-2 cursor-pointer d-flex items-center" @click="routerPush('playlist', item.id)">
                    <v-avatar size="small" :image="item.coverImgUrl" />
                    <div class="text-green ml-2">{{ item.name }}</div>
                </div>
            </template>
        </div>
    </template>

</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSearchStore } from "@/stores/useSearchStore";
import { useRouter } from "vue-router";
import { usePlayerStore } from "@/stores/usePlayerStore";

const { suggestData, showSearchView } = storeToRefs(useSearchStore())
const router = useRouter()

const routerPush = (name: string, id: number) => {
    router.push({ name: name, query: { id: id } }).then(() => {
        showSearchView.value = false;
    })
}
const { play } = usePlayerStore()
const getTitle = (name: string) => {
    switch (name) {
        case 'songs':
            return '单曲';
        case 'albums':
            return '专辑';
        case 'artists':
            return '歌手';
        case 'playlists':
            return '歌单';
        default:
            return name;
    }
}


</script>
<style lang="scss"></style>