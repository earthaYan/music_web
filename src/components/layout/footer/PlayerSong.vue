<template>
    <div class="d-flex">
        <v-img alt="" width="100px" height="50px" :src="song.al?.picUrl || OpticalDisk" />
        <div class="cursor-pointer">
            <div class="d-flex">
                <span>{{ song.name || 'demo' }}</span>
                <span class="ml-2">- {{ song.ar?.[0].name || `singer` }}</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/stores/usePlayerStore";
import { OpticalDisk } from '@/assets/img/index';
import { toRefs } from "vue";
const { song } = toRefs(usePlayerStore())
</script>