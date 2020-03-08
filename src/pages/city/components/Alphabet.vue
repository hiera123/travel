<template>
  <ul class="list-alphabet">
    <li
      class="title"
      v-for="item of letters"
      :key="item"
      :ref = "item"
      @touchstart = "handleTouchStart"
      @touchmove = "handleTouchMove"
      @touchend = "handleTouchEnd"
      @click="getAlphabetChange"

    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
        touchStatus:false,
        timer:null,
        startY:0

    };
  },
  computed: {
      letters(){
          const letters = []
          for(let i in this.cities){
            //   let obj  = {}
            //   obj.key = i;
            //   obj.value = this.cities[i]
              letters.push(i)
              
          }
          return letters
      }
  },
  methods: {
    getAlphabetChange(e) {
      this.$emit("changeCityArea", e.target.innerText);
    },
    handleTouchStart(){
        this.touchStatus= true
    },
    handleTouchMove(e){
        if(this.touchStatus){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                const startY= this.$refs['A'][0].offsetTop
                // console.log($refs);
                // 定义手指距离顶部的距离
                const touchY = e.touches[0].clientY -79
                const index = Math.floor((touchY-startY) / 20)

                // console.log(index); 第几个字母,像外触发事件
            if(index>=0 && index<this.letters.length){
                this.$emit('changeCityArea',this.letters[index])
            }
            },16)
        }
    },
    handleTouchEnd(){
         this.touchStatus= false
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-alphabet
  position :fixed
  right:0
  top:1.58rem
  bottom:0

  z-index:1
  width: .4rem
  display: flex
  flex-direction:column
  justify-content:center
  text-align center
  .title
      margin-top :.1rem
      color:#00bce4
</style>
