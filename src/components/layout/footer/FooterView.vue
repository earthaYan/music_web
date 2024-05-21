<template>

    <div height="100" class="bg-grey-lighten-1 position-fixed bottom-0 right-0" style="left: 200px;">
        <PlayerSlider />
        <div class="d-flex justify-space-between align-items-cemter  ">
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