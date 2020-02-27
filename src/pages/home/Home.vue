<template>
  <div>
    <home-header></home-header>
    <Home-swiper></Home-swiper>
   
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
    HomeHeader,
    HomeSwiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
