<script setup>
import tabbarData from '@/assets/data/tabbar'
import getAssetUrl from '@/utils/get_assets_img'
import { ref } from 'vue';
const currentIndex = ref(0)

</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" route active-color="#ff9854">
      <van-tabbar-item v-for="item in tabbarData" :key="item" :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? getAssetUrl(item.imageActive) : getAssetUrl(item.image)" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  img {
    transform: scale(1.2);
  }
}
</style>