<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" >
                </div>
                <div class="item-info">
                    <p class="item-title"> {{item.title}} </p>
                    <p class="item-desc"> {{item.desc}} </p>
                   
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   name:'HomeWeekend',
   props:{
       list : Array
   }
  
}
</script>

<style lang="stylus" scoped>
    .title
        background :#eee
        padding:.2rem
    .item-img-wrapper
        margin-top :.2rem
        overflow :hidden
        height:0
        padding-bottom :37.02%
        .item-img
            width :100%
    .item-info
        margin-left :.1rem
        padding-bottom :.1rem
        .item-title
            margin-top :.2rem
            font-size :.32rem
        .item-desc
            margin-top :.2rem
            margin-bottom:.2rem
            color:#777
          
              


        
   
</style>