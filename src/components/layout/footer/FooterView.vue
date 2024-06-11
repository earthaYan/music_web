<template>
    <div class="bg-grey-lighten-1 position-fixed bottom-0 right-0 left-200 px-4 pb-1">
        <PlayerSlider />
        <div class="d-flex justify-space-between align-items-center">
            <PlayerSong />
            <PlayerController />
            <PlayerAction />
        </div>
    </div>
</template>
<script setup lang="ts">
import PlayerSlider from '@/components/layout/footer/PlayerSlider.vue'
import PlayerSong from '@/components/layout/footer/PlayerSong.vue'
import PlayerController from '@/components/layout/footer/PlayerController.vue'
import PlayerAction from '@/components/layout/footer/PlayerAction.vue'
</script>
<style lang="scss" scoped>
.left-200 {
    left: 200px;
}
</style>