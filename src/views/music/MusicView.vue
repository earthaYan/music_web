<template>
    <BlockTitle title="音乐馆" />
    <div class="content">
        <v-tabs v-model="tab" color="red">
            <v-tab value="pick">精选</v-tab>
            <v-tab value="comment">有声电台</v-tab>
            <v-tab>排行</v-tab>
            <v-tab>歌手</v-tab>
            <v-tab>分类歌单</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="song">
                <SongList :songs="songs" />
            </v-tabs-window-item>
            <v-tabs-window-item value="comment">
                <CommentList :comment-list="commentList" />
            </v-tabs-window-item>
        </v-tabs-window>
    </div>
</template>
<script setup>
import BlockTitle from '@/components/common/BlockTitle.vue'; 
</script>