<template>
    <div class="cover-play-image" :class="video ? 'aspect-ratio' : 'aspect-square'">
        <v-img :src="picUrl" :alt="name" />
        <div class="mask">
            <IconPark :icon="PlayOne" theme="filled" class="play-icon" size="50" @click="onPlay" />
        </div>
        <div class="play-count">
            <IconPark :icon="video ? Play : Headset" size="12" class="icon" />
            <text>{{ useNumberFormat(playCount || 0) }}</text>
        </div>
    </div>
</template>
<script setup lang="ts">
import IconPark from "@/components/common/IconPark.vue"
import { PlayOne, Play, Headset } from '@icon-park/vue-next'
import { useNumberFormat } from '@/utils/formatData'
defineProps<{
    picUrl: string
    playCount?: number
    name?: string
    showPlayCount?: boolean
    onPlay?: () => void
    video?: boolean
}>()
</script>
<style lang="scss" scoped>
.cover-play-image {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 0.5rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0.2, 1);
    transition-duration: 150ms;


    &.aspect-square {
        aspect-ratio: 1/1;
    }

    &.aspect-ratio {
        aspect-ratio: 16/9;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(0 0 0 / 0);
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
        display: flex;
        justify-content: center;
        align-items: center;

        .play-icon {
            opacity: 0;
            color: #fff;
        }
    }

    .play-count {
        position: absolute;
        bottom: 0.25rem;
        right: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(0.9, 0.9);
        background-color: rgb(0 0 0 / 0.8);
        padding: 0.125rem 0.5rem;
        border-radius: 1000px;
        color: #fff;
        line-height: 1rem;

        .icon {
            margin-right: 0.25rem
        }
    }

    &:hover {
        .mask {
            background: rgba(0, 0, 0, 0.5);

            .play-icon {
                opacity: 1;
            }
        }

        .play-count {
            opacity: 0;
        }
    }
}
</style>