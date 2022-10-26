<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})

const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :sticky="false" :index-list="indexList">

      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.city-group {
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 5px;
    padding-left: 15px;
    padding-right: 20px;


    .city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      text-align: center;
      line-height: 28px;
      background-color: #fff4ec;
      margin-top: 15px;
    }
  }
}
</style>