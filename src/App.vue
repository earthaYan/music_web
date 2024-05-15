<script setup>
import MenuView from "@/components/layout/menu/MenuView.vue"
</script>
<template>
  <v-app>
    <MenuView />
    <v-app-bar>
      <v-toolbar-title>hader</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
