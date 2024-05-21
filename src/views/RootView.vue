<template>
    <v-app>
        <MenuView />
        <HeaderView />
        <v-main>
            <router-view />
        </v-main>
        <FooterView />
    </v-app>
</template>
<script setup lang="ts">
import MenuView from '@/components/layout/menu/MenuView.vue'
import HeaderView from '@/components/layout/header/HeaderView.vue'
import FooterView from '@/components/layout/footer/FooterView.vue'
</script>
<style lang="scss"></style>