import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCityAll } from '@/services'

const useCityStore = defineStore('city', () => {
  const cities = ref({})
  const currentCity = ref({ cityName: '广州' })
  async function fetchAllCitiesData() {
    const res = await getCityAll()
    cities.value = res.data
  }
  return { cities, currentCity, fetchAllCitiesData }
})

export default useCityStore
