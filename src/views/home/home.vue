<script setup>
import homeNavBarVue from './cpns/home-nav-bar.vue';
import homeSerchBoxVue from './cpns/home-serch-box.vue';
import useHomeStore from '@/stores/modules/home'
import homeCategories from './cpns/home-categories.vue'
import homeContent from './cpns/home-content.vue'
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const moreBtnClick = () => {
  homeStore.fetchHouseListData()
}
</script>

<template>
  <div class="home">
    <homeNavBarVue />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSerchBoxVue></homeSerchBoxVue>
    <homeCategories></homeCategories>
    <homeContent></homeContent>
    <button @click="moreBtnClick">加载更多</button>
  </div>
</template>

<style lang="less" scoped>
.home {
  margin-bottom: 46px;
}

.banner {
  img {
    width: 100%;
  }
}
</style>