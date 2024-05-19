<template>
    <v-navigation-drawer width="200" permanent>
        <v-list>
            <v-list-item v-for="menuItem in menus" :key="menuItem.name">
                <v-list-subheader>{{ menuItem.name }}</v-list-subheader>
                <V-list-item v-for="menu in menuItem.menus" :key="menu.key" :active="currentKey === menu.key"
                    @click="click(menu)" color="green">
                    <IconPark :icon="menu.icon" size="18" :theme="menu.theme" />
                    <span class="ml-4">{{ menu.name }}</span>
                </V-list-item>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useMenu, type IMenu, type IMenus } from '@/components/layout/menu/useMenu'
import IconPark from "@/components/common/IconPark.vue";
import type { Ref } from 'vue';
const { menus, currentKey, click } = useMenu() as {
    menus: IMenus[],
    currentKey: Ref<string>,
    click: (menu: IMenu) => Promise<void>
}
</script>