<template>
    <v-slider v-model="currentTime" color="green" :max="duration" @end="onSliderChange" @mousedown="onSliderInput" />
</template>
<script setup lang="ts">

import { usePlayerStore } from '@/stores/usePlayerStore';
import { toRefs } from 'vue';
const { duration, currentTime, onSliderInput, onSliderChange } = toRefs(usePlayerStore());
</script>
<style lang="scss"></style>