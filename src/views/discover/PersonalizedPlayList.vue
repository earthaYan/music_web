<template>
    <h3>你的专属歌单</h3>
    <v-row no-gutters>
        <v-col v-for="n in 12" :key="n" cols="12" sm="4">
            <v-sheet class="ma-2 pa-2">
                One of three columns
            </v-sheet>
        </v-col>
    </v-row>
</template>
<script setup>
import { getRecommendPlayList } from '@/api/recommend'
import { onMounted } from 'vue';
onMounted(() => {
    getRecommendPlayList()
})
</script>