<template>
    <v-app-bar>
        <slot>
            <div id="header-wrapper" class="px-4 d-flex justify-space-between">
                <div class="left">1</div>
                <div class="right">
                    <UserInfo />
                </div>
            </div>
        </slot>


    </v-app-bar>
</template>
<script setup lang="ts">
import UserInfo from '@/components/layout/header/UserInfo.vue'
</script>
<style>
#header-wrapper {
    width: 100%;
}
</style>