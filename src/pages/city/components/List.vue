<template>
    <div class="list" ref="wrapper">
        <div >
            <div class="area"> 
                <div class="title border-topbottom">您的位置</div> 
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city1}}</div> 
                    </div>
                </div>
            </div>

            <div class="area"> 
                <div class="title border-topbottom">热门城市</div> 
                <div class="button-list" >
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
                   
                    >
                        <div class="button" @click="getChangeCity(item.name)">
                            {{item.name}}
                        </div> 
                    </div>
                </div>
            </div>

            <div class="area"> 
                <div v-for="(item,key) of cities" :key="key" :ref="key">
                
                    <div class="title border-topbottom">{{key}}</div> 
                    <div class="item-list" >
                        <div  class="item border-bottom"
                        v-for="innerItem of item" :key="innerItem.id" @click="getChangeCity(innerItem.name)">
                        {{innerItem.name}}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Bscroll from 'better-scroll'
export default {
   name:'CityList' ,
   props:{
       hotCities : Array,
       cities : Object,
       cityArea : String
   },
    computed:{
    ...mapState(['city1']),
   
  },
   
   
  mounted () {
      this.scroll =  new Bscroll(this.$refs.wrapper)
  },

   
   methods:{
       
       //添加一个点击事件,把热门城市里的数据和公用存储里的store关联起来,并改变
       getChangeCity(city){
           this.$store.commit('changeCity',city)
           this.$router.push('/')
           
       }
       
   },
   
   watch : {
       cityArea () {
           if(this.cityArea){
               const element=this.$refs[this.cityArea][0]
               this.scroll.scrollToElement(element)
             
              0   
               
           }
           
       }
   } 



  
    
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
    .list
        position :absolute
        overflow :hidden
        top:1.58rem
        left:0
        right :0
        bottom :0
    .title
        background :#eee
        padding:.16rem
        line-height:.44rem
        color:#666
    .button-list
        overflow :hidden
        padding:.1rem
        margin-right :.4rem
       
      
        .button-wrapper
            width :33%
            float :left
            .button
               text-align :center
               border :.02rem solid #ccc
               padding :.16rem
               margin :.2rem
               border-radius :.06rem
    .item
        margin:.2rem 0 .2rem .2rem
        padding-bottom :.1rem
    
   
        
           
        
          
   
</style>