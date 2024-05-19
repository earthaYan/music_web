<template>
    <v-app>
        <MenuView />
        <HeaderView />
        <v-main>
            <router-view />
        </v-main>
        <v-footer app height="100" border="lg">
            底部播放器
        </v-footer>
    </v-app>
</template>
<script setup lang="ts">
import MenuView from '@/components/layout/menu/MenuView.vue'
import HeaderView from '@/components/layout/header/HeaderView.vue'
</script>
<style lang="scss"></style>