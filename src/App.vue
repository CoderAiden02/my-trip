<script setup>
import TabBar from '@/components/tab-bar/TabBar.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
    <TabBar v-show="!route.meta.isHideTabbar"></TabBar>
  </div>
</template>

<style lang="less" scoped>

</style>