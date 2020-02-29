<template>
    <div class="search">
            <input class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
export default {
   name:'CitySearch' 
}
</script>

<style lang="stylus" scoped>
    .search
        height :.72rem
        background :#00bce4
        color: #fff
        text-align :center
      
        .search-input
            width:98%
            text-align :center
            border-radius :.06rem
            height :.62rem
            color:#666
            padding :.2rem
            box-sizing :border-box
</style>