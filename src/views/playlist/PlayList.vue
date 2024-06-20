<template>
    <div class="playlist" v-if="playlist">
        <div>
            <ListInfo :playlist="playlist" />
            <v-tabs v-model="tab" color="red">
                <v-tab value="song">歌曲 {{ songs.length }}</v-tab>
                <v-tab value="comment">评论 {{ commentList?.length }}</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="song">
                    <SongList :songs="songs" />
                </v-tabs-window-item>
                <v-tabs-window-item value="comment">
                    <CommentList :comment-list="commentList" />
                </v-tabs-window-item>
            </v-tabs-window>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ListInfo from './ListInfo.vue'
import SongList from './SongList.vue'
import CommentList from './CommentList.vue';
import { useRoute } from 'vue-router';
import type { Song } from '@/typing/player.type';
import type { IHotComment, PlayListDetail } from '@/typing/playlist';
import { getPlayListComment, getPlayListDetail, getSongList } from '@/api/playlist';
const tab = ref<string>('song')
const playlist = ref<PlayListDetail>();
const songs = ref<Song[]>([]);
const commentList = ref<IHotComment[]>()
const getData = () => {
    let id: number = Number(route.query.id)
    getPlayListDetail(id).then(res => {
        playlist.value = res
    })
    getSongList(id).then(res => {
        songs.value = res
    })
    getPlayListComment(id).then((res) => {
        commentList.value = res
    })
}
onMounted(() => {
    getData()
})
const route = useRoute()
</script>
