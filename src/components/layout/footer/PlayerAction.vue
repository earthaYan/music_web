<template>
    <div>
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
    </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/stores/usePlayerStore";
import { storeToRefs } from "pinia";

const { currentTime, duration } = storeToRefs(usePlayerStore())
const formatTime = (during: number) => {
    const s = Math.floor(during) % 60;
    during = Math.floor(during / 60);
    const i = during % 60;

    const ii = i < 10 ? `0${i}` : i;
    const ss = s < 10 ? `0${s}` : s;

    return ii + ':' + ss;
}
</script>

<style lang="scss"></style>