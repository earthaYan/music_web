<template>
    <v-list lines="three">
        <v-list-item v-for="comment in props.commentList" :key="comment.commentId" :title='comment.user.nickname'
            :subtitle="comment.content" :prepend-avatar="comment.user.avatarUrl"></v-list-item>
    </v-list>
</template>
<script setup lang="ts">
import type { IHotComment } from '@/typing/playlist'
const props = defineProps<{
    commentList: IHotComment[]
}>()
</script>
