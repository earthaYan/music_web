<template>
    <div class="d-flex align-stretch">
        <img class="flex-shrink-0 image" :src="playlist.coverImgUrl" />
        <div class="pl-4 d-flex justify-space-between py-1 " style="flex-direction: column;">
            <div>
                <h3>{{ playlist.name }}</h3>
                <div class="d-flex align-center pb-2 pt-3 text-dc">
                    <v-avatar :image="playlist.creator.avatarUrl" size="small" />
                    <span class="ml-2">{{ playlist.creator.nickname }}</span>
                    <div>
                        <div class="d-flex text-dc ml-5">
                            <div v-for="tag in playlist.tags" :key="tag">#{{ tag }}</div>

                        </div>
                    </div>
                </div>
                <div class="desc">{{ playlist.description }}</div>
            </div>
            <div class="d-flex align-center align-self-stretch">
                <v-button class="w-32 play d-flex align-center button">
                    <IconPark :icon="PlayOne" size="20" />
                    <span>播放全部</span>
                </v-button>
                <v-button class="w-32 collect button" variant="outlined">
                    <IconPark :icon="Like" size="18" />
                    <span>收藏</span>
                </v-button>
                <v-button class="button w-2 ">
                    <IconPark :icon="More" size="18" />
                </v-button>
            </div>


        </div>
    </div>
</template>
<script setup lang="ts">
import { PlayOne, Like, More } from '@icon-park/vue-next'
import IconPark from '@/components/common/IconPark.vue'
import type { PlayListDetail } from '@/typing/playlist';
defineProps<{
    playlist: PlayListDetail,
}>()
</script>
<style scoped lang="scss">
.text-dc {
    color: rgb(148 163 184 / 1);
    font-size: 0.75rem;
    line-height: 1rem;
}

.desc {
    color: rgb(107 114 128 / 1);
    font-size: 0.75rem;
}

.w-32 {
    width: 8rem;
}

.w-2 {
    width: 2rem;
}

.image {
    height: 11rem;
    width: 11rem
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    margin-right: 30px;
}

.play {
    background-color: rgb(5 150 105 / 1);
    color: #fff;


}

.collect {
    border: 1px dashed#000;
}
</style>
