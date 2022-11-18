<script setup>
import TabBar from '@/components/tab-bar/TabBar.vue'
import loadingVue from './components/loading/loading.vue';
import { RouterView, useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="app">
    <RouterView v-slot="props">
      <KeepAlive include="home">
        <component :is="props.Component"></component>
      </KeepAlive>
    </RouterView>
    <TabBar v-show="!route.meta.isHideTabbar"></TabBar>
    <loadingVue />
  </div>
</template>

<style lang="less" scoped>

</style>