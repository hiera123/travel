<template>
  <div>
    <div class="header-content">
      <div class="left">
        <span class="iconfont">&#xe65b;</span>
      </div>
      <div class="input">
        <span class="iconfont icon-search">&#xe723;</span>
        输入城市景点/游玩主题
      </div>  
      <router-link class="right" to="city">
        {{this.city1}}
          <span class="iconfont">&#xe6aa;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data(){
    return {
      city:''
    }
  },
  computed:{
    ...mapState(['city1']),
   
  },
  methods:{
    getChangeCity(){
      const routerCity = this.$route.query.e
     
      this.city = routerCity
      
    }
  },
  created(){
    this.getChangeCity()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header-content
    line-height :.86rem
    display :flex
    background :#00bce4
    color: #fff
    
    .left
      width : .64rem
      float :left
      margin-left :.2rem
    .right
      float :right
      min-width : 1.24rem
      padding: 0 .1rem
      text-align :center
      color:#fff
     
    .input
       flex :1
       background :#fff
       border-radius :.1rem
       margin-top :.12rem
       height :.64rem
       line-height :.64rem
       color:#ccc
       padding-left :.2rem

    
      
     
</style>
 

