<template>
    <v-app-bar height="50">
        <slot>
            <div id="header-wrapper" class="px-4 d-flex justify-space-between align-center">
                <div class="left">
                    <SearchArea />
                </div>
                <div class="right">
                    <UserInfo />
                </div>
            </div>
        </slot>
    </v-app-bar>
</template>
<script setup lang="ts">
import UserInfo from '@/components/layout/header/UserInfo.vue'
import SearchArea from '@/components/layout/header/SearchArea.vue'
</script>
<style>
#header-wrapper {
    width: 100%;
}
</style>