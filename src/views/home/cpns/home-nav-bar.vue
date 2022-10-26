<script setup>

</script>

<template>
  <div class="home-nav-bar">
    <van-nav-bar title="鸿源旅途" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">
        广州
      </div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-nav-bar {

  --van-nav-bar-title-text-color: var(--primary-color);

  .banner {
    img {
      width: 100%;
    }
  }

  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
    }

    .position {
      width: 74px;

      .text {
        font-size: 12px;
      }

      img {
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>