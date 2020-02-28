<template>
    <div>

        <div class="area"> 
            <div class="title border-topbottom">您的位置</div> 
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div> 
                </div>
            </div>
        </div>

         <div class="area"> 
            <div class="title border-topbottom">热门城市</div> 
             <div class="button-list" >
                <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                    <div class="button">{{item.name}}</div> 
                </div>
            </div>
        </div>

        <div class="area"> 
            <div v-for="(items,key) of cities" :key="items.id">
              
                <div class="title border-topbottom">{{key}}</div> 
                <div v-for="item of items" :key="item.id">
                    <div class="button button-city border-bottom">{{item.name}}</div> 
                </div>
                
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
   name:'CityList' ,
   props:{
       hotCities : Array,
       cities : Object
   },
    
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
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
    .button-city
        margin:.2rem 0 .2rem .2rem
        padding-bottom :.1rem
       
   
        
           
        
          
   
</style>