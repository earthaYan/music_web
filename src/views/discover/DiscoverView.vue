<template>
    <div class="my-2">
        <PersonalizedPlayList />
    </div>
    <div class="my-2">
        <RecommendNewMusic />
    </div>
    <div class="my-2">
        <RecommendMV />
    </div>
</template>
<script setup lang="ts">
import PersonalizedPlayList from './PersonalizedPlayList.vue'
import RecommendNewMusic from './RecommendNewMusic.vue'
import RecommendMV from './RecommendMV.vue'
</script>
<style lang="scss" scoped></style>
