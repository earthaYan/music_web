import type { SearchHotDetail, SearchSuggest } from '@/typing/search.type'
import { $get } from './serviceBase'

export const getSearchSuggest = (
  keywords: string
): Promise<{
  result: SearchSuggest
}> => {
  return $get('/search/suggest', { keywords }).then((res) => {
    return {
      result: res.result
    }
  })
}
export const getSearchHotDetail = (): Promise<SearchHotDetail[]> => {
  return $get('/search/hot/detail').then((res) => {
    return res.data
  })
}
