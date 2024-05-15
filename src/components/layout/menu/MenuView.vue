<template>
  <v-list class="menu-wrapper">
    <v-divider />
    <v-navigation-drawer permanent class="pt-16">
      <v-list-item link href="/">菜单1 </v-list-item>
      <v-list-item link href="/about">菜单2 </v-list-item>
    </v-navigation-drawer>
  </v-list>

</template>
<script setup lang="ts"></script>
<style lang="scss">
.menu-wrapper {
  background-color: red
}
</style>
