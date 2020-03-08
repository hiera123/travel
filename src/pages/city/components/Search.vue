<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="请输入城市名或拼音"
      />
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li
          class="city-area border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="getChangeCity(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="city-area border-bottom" v-show="hasNoData">
          未找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  methods: {
    getChangeCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/");
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(v => {
            if (
              v.spell.indexOf(this.keyword) > -1 ||
              v.name.indexOf(this.keyword) > -1
            ) {
              result.push(v);
            }
          });
        }

        this.list = result;
      }, 100);
    }
  },

  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
.search
    height .72rem
    background #00bce4
    color #fff
    text-align center
    .search-input
        width:98%
        text-align center
        border-radius .06rem
        height .62rem
        color #666
        padding .2rem
        box-sizing border-box
.search-content
    position absolute
    top: 1.58rem
    background #eee
    height 20rem
    overflow hidden
    z-index 2
    left 0
    right 0
    .city-area
        padding : .2rem
        background #fff
</style>
