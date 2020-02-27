<template>
  <div>
    <home-header></home-header>
    <Home-swiper></Home-swiper>
    <home-icons></home-icons>
    text
   
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
