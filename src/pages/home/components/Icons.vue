<template>
    <div class="icons">
        <div class="icon" v-for="item of list"  :key = "item.id">
            <img :src="item.imgUrl" class="icon-img">
            <p class="icon-text">{{item.desc}}</p>
        </div>
       
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    }
   
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow :hidden
        height:0
        padding-bottom:50%
        .icon
            float :left 
            width :25%  
            margin-top :.3rem 
            text-align :center
            .icon-img
                width:50%
            .icon-text
                margin-top:.15rem
        

           
</style>