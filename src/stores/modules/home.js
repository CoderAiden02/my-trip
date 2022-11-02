import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHotSuggests, getHomeCategories, getHomeHouselist } from '@/services/index'

const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref([])
  const categories = ref([])
  const houselist = ref([])
  const currentPage = ref(1)
  async function fetchHotSuggests() {
    const res = await getHotSuggests()
    hotSuggests.value = res.data
  }

  async function fetchCategoriesData() {
    const res = await getHomeCategories()
    categories.value = res.data
  }

  async function fetchHouseListData() {
    const res = await getHomeHouselist(currentPage.value)
    houselist.value.push(...res.data)
    currentPage.value++
  }
  return { hotSuggests, categories, houselist, currentPage, fetchHotSuggests, fetchCategoriesData, fetchHouseListData }
})

export default useHomeStore
