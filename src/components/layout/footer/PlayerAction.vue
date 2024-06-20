<template>
    <div>
        {{ useFormatDuring(currentTime) }} / {{ useFormatDuring(duration) }}
    </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/stores/usePlayerStore";
import { storeToRefs } from "pinia";

const { currentTime, duration } = storeToRefs(usePlayerStore())
import { useFormatDuring } from '@/utils/formatData'
console.log(currentTime.value, duration.value)
</script>

<style lang="scss"></style>