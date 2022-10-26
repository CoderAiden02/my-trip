<script setup>
import homeNavBarVue from './cpns/home-nav-bar.vue';
import homeSerchBoxVue from './cpns/home-serch-box.vue';
</script>

<template>
  <div class="home">
    <homeNavBarVue />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSerchBoxVue></homeSerchBoxVue>
  </div>
</template>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>