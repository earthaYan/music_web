import { getSearchSuggest } from '@/api/search'
import type { SearchSuggest } from '@/typing/search.type'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      showSearchView: false,
      searchKeyword: '',
      suggestData: {} as SearchSuggest
    }
  },
  getters: {
    showHot: (state) => state.searchKeyword === ''
  },
  actions: {
    async suggest() {
      const res = await getSearchSuggest(this.searchKeyword)
      this.suggestData = res.result
    }
  }
})
