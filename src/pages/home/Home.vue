<template>
  <div>
    <home-header></home-header>
    <Home-swiper :list="swiperList"></Home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
   
   
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed:{
    ...mapState(['city1'])
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city1)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      
    }
  },
  mounted () {
    this.lastCity = this.city1
    this.getHomeInfo()
  },
  //页面重新被显示的时候,actived一定会被重新执行
  //判断当前页面的城市和上次页面城市是否相同,如果不同则重新发送ajax请求
  activated (){
    if(this.lastCity !== this.city1){
        this.lastCity = this.city1
        this.getHomeInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
