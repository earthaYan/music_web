<template>
    <v-slider v-model="currentTime" color="green" thumb-size="8" :max="duration" @end="onSliderChange"
        @mousedown="onSliderInput"></v-slider>
</template>
<script setup lang="ts">

import { usePlayerStore } from '@/stores/usePlayerStore';
import { toRefs } from 'vue';
const { duration, currentTime, onSliderInput, onSliderChange } = toRefs(usePlayerStore());
</script>
<style lang="scss"></style>