import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCityStore = defineStore('city', () => {
  const cities = ref([])
  return { cities }
})

export default useCityStore
