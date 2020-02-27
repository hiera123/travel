<template>
    <!-- 轮播图 -->
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key = "item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        
        
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper", 
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination:'.swiper-pagination',
          loop:true
        },
        list:[{
            "id": "0001",
            "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
            },{
            "id": "0002",
            "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
            },{
            "id": "0003",
            "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
            },{
            "id": "0004",
            "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
        }]
      }
    }
   
}
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