<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import cityGroupVue from './cpns/city-group.vue';

const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}

const tabValue = ref('')

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { cities } = storeToRefs(cityStore)

</script>

<template>
  <div class="city">
    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />
      <van-tabs v-model:active="tabValue" color="#ff9854">
        <template v-for="(value, key, index) in cities">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in cities">
        <cityGroupVue v-show="tabValue === key" :group-data="value"></cityGroupVue>
      </template>

    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>