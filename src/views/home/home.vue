<script setup>
import homeNavBarVue from './cpns/home-nav-bar.vue';
import homeSerchBoxVue from './cpns/home-serch-box.vue';
import useHomeStore from '@/stores/modules/home'
import homeCategories from './cpns/home-categories.vue'
import homeContent from './cpns/home-content.vue'
import searchBarVue from '@/components/search-bar/search-bar.vue';
import useScroll from '@/hooks/useScroll'
import { computed, watch, ref, onActivated } from 'vue';

const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})


//跳转回home时，保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>
<script>
export default { name: 'home' }
</script>

<template>
  <div class="home" ref="homeRef">
    <homeNavBarVue />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSerchBoxVue></homeSerchBoxVue>
    <homeCategories></homeCategories>
    <div class="search-bar" v-show="isShowSearchBar">
      <searchBarVue />
    </div>
    <homeContent></homeContent>
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-bottom: 46px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>