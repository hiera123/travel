<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.title
    background :#eee
    padding:.2rem
.item
    display :flex
    height :1.9rem
    margin-top :.2rem
    margin-bottom :.2rem

    .item-img
        width :1.7rem
        height :1.7rem
        padding:.1rem
    .item-info
        flex:1
        margin-left :.2rem
        .item-title
            margin-top :.2rem
            font-size :.32rem
        .item-desc
            margin-top :.2rem
            margin-bottom:.2rem
            color:#777
        .item-button
           background :#ff9300
           border-radius : .16rem
           padding:.02rem
           font-size:.3rem
           color: #fff
           width: 1.6rem
</style>
