<template>
    <div class="header">
        <div class="header-text"> 
            <router-link to='./'>
                <span class="iconfont header-icon">&#xe65b;</span>
            </router-link>
            城市选择
        </div>    
       
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        height :.86rem
        line-height :.86rem
        background :#00bce4
        color: #fff
        text-align :center
        position :relative
        overflow :hidden
        .header-text
            font-size :.4rem
            .header-icon
                left:0
                position :absolute
                font-size :.4rem
                color:#fff
      
</style>