<template>
    <div class="list" ref="wrapper">
        <div >
            <div class="area"> 
                <div class="title border-topbottom">您的位置</div> 
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div> 
                    </div>
                </div>
            </div>

            <div class="area"> 
                <div class="title border-topbottom">热门城市</div> 
                <div class="button-list" >
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
                    @click="getCityChange"
                    >
                        <div class="button">
                            {{item.name}}
                        </div> 
                    </div>
                </div>
            </div>

            <div class="area"> 
                <div v-for="(item,key) of cities" :key="key" :ref="key">
                
                    <div class="title border-topbottom">{{key}}</div> 
                    <div class="item-list">
                        <div  class="item border-bottom"
                        v-for="innerItem of item" :key="innerItem.id" @click="getCityChange">
                        {{innerItem.name}}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
   name:'CityList' ,
   props:{
       hotCities : Array,
       cities : Object,
       cityArea : String
   },
   data(){
       return{
           city:'123',
          
       }
   },
   
  mounted () {
      this.scroll =  new Bscroll(this.$refs.wrapper)
  },

   
   methods:{
       getCityChange(e){
           this.$router.push({
               path:'/',
               query:{
                   e:e.target.innerText
               }
           })
       },
       
   },
   
   watch : {
       cityArea () {
           if(this.cityArea){
               const element=this.$refs[this.cityArea][0]
               this.scroll.scrollToElement(element)
             
              
               
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