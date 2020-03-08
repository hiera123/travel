<template>
  <!-- 轮播图 -->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
        background : #fff !important
.wrapper
    height :0
    width :100%
    overflow :hidden
    padding-bottom:31.25%
    background :#eee
    .swiper-img
        width:100%
</style>
