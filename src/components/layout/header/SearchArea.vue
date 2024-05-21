<template>
    <v-menu :close-on-content-click="false" location="bottom"><template #activator="{ props }">
            <v-text-field clearable label="" :prepend-inner-icon="Search" variant="solo" v-model="searchKeyword"
                v-bind="props" :width="250" @input="searchInput" @focus="searchFocus" @blur="searchBlur" round />
        </template>
        <v-card width="250" class="overflow-y-auto overflow-x-hidden" max-height="80vh">
            <div v-if="showHot">
                <div class="pa-1">热门搜索</div>
                <div>
                    <div v-for="(item, index) in searchHot" :key="item.searchWord"
                        class="pa-1 d-flex justify-space-between" @click="hotClick(item.searchWord)">
                        <div>
                            <span class="mr-1">{{ index + 1 }}.</span>
                            <span>{{ item.searchWord }}</span>
                        </div>
                        <div class="text-red-darken-2">{{ item.score }}</div>
                    </div>
                </div>
            </div>
            <div v-else>
                <SearchResult />
            </div>
        </v-card>
    </v-menu>
</template>

<script lang="ts" setup>
import { Search } from '@icon-park/vue-next'
import { useSearchStore } from "@/stores/useSearchStore"
import { debounce } from 'lodash'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue'
import { getSearchHotDetail } from '@/api/search'
import type { SearchHotDetail } from '@/typing/search.type';
import SearchResult from '@/components/layout/header/SearchResult.vue'
const { showSearchView, searchKeyword, showHot } = storeToRefs(useSearchStore())
const { suggest } = useSearchStore()
const searchInput = debounce(() => suggest(), 500, { 'maxWait': 1000 })
const searchHot = ref<SearchHotDetail[]>([])
onMounted(async () => {
    searchHot.value = await getSearchHotDetail()
})
const searchFocus = () => {
    showSearchView.value = true
}
const searchBlur = () => {
    showSearchView.value = false
}
const hotClick = (text: string) => {
    searchKeyword.value = text
    suggest()
    showSearchView.value = true
}
</script>
