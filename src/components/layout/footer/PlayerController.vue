<template>
    <div class="d-flex align-center justify-center">
        <IconPark :icon="loopType === 0 ? PlayOnce : loopType === 1 ? LoopOnce : ShuffleOne" size="20"
            class="hover-text" @click="toggleLoop" />
        <IconPark :icon="GoStart" size="20" theme="filled" @click="prev" />
        <IconPark :icon="isPause ? PauseOne : Play" size="20" theme="filled" @click="togglePlay" />
        <IconPark :icon="GoEnd" size="20" @click="next" />
    </div>
</template>

<script setup lang="ts">
import { Play, PauseOne, LoopOnce, ShuffleOne, PlayOnce, GoEnd, GoStart } from "@icon-park/vue-next";
import { toRefs } from "vue";
import IconPark from "@/components/common/IconPark.vue";
import { usePlayerStore } from "@/stores/usePlayerStore";


const { toggleLoop, loopType, next, prev, togglePlay, isPause } = toRefs(usePlayerStore())

</script>
