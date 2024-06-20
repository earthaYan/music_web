<template>
    <v-table density="compact">
        <thead>
            <tr>
                <th class="text-left" style="width: 200px;">歌曲</th>
                <th class="text-left" style="width: 200px;">歌手</th>
                <th class="text-left">专辑</th>
                <th class="text-left">时长</th>
                <th class="text-left">操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in props.songs" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.ar[0].name }}</td>
                <td>{{ item.al.name }}</td>
                <td>{{ useFormatDuring(item.dt / 1000) }}</td>
                <td></td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup lang="ts">
import type { Song } from '@/typing/player.type';
import { useFormatDuring } from '@/utils/formatData'
const props = defineProps<{
    songs: Song[],
}>()
</script>
<style scoped lang="scss"></style>
