<template>
    <BlockTitle title="推荐新音乐" />
    <v-row>
        <v-col v-for="(item, index) in personalizedNewSong" :key="index" cols="6" class="hover-bg-view"
            @click="() => play(item.id)">
            <v-img :src="item.picUrl" width="45" :rounded="111" height="45" />
            <div class='info-wrapper px-2'>
                <div class="song-name">
                    {{ item.name }}
                </div>
                <div class="singer">
                    {{ item.song.artists[0].name }}
                </div>
            </div>
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import BlockTitle from '@/components/common/BlockTitle.vue'
import { useMusicStore } from '@/stores/useMusicStore';
import { usePlayerStore } from '@/stores/usePlayerStore'
import { onMounted, toRefs } from 'vue';
const { personalizedNewSong } = toRefs(useMusicStore())
const { getPersonalizedNewSongData } = useMusicStore()
onMounted(() => { getPersonalizedNewSongData() })
const { play } = usePlayerStore()
</script>
<style scoped lang="scss">
.hover-bg-view {
    display: flex;
    cursor: pointer;

    .song-img {
        img {
            border-radius: 0.25rem;
        }

        flex-shrink: 0;
    }

    .info-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        width: 60%;
        font-size: 0.75rem;

        .song-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            flex: 1 1 0%;
        }

        .singer {
            color: rgb(148 163 184 / 1);
        }
    }

    &:hover {
        background-color: rgba($color: lightgray, $alpha: 0.5)
    }


}
</style>
