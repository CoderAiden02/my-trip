import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHotSuggests } from '@/services/index'

const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref([])
  async function fetchHotSuggests() {
    const res = await getHotSuggests()
    hotSuggests.value = res.data
  }

  return { hotSuggests, fetchHotSuggests }
})

export default useHomeStore
