<template>
    <div class="list-alphabet">
         <div v-for="(items,key) of cities" :key="items.id" @click="getAlphabetChange">
              
                <div class="title ">{{key}}</div> 
       </div>
    </div>
</template>

<script>
export default {
    name:'CityAlphabet',
     props:{
       
       cities : Object
   },
   methods:{
       getAlphabetChange(e){
           this.$emit('changeCityArea',e.target.innerText)
           
           
       }
   }
}
</script>

<style lang="stylus" scoped>
  .list-alphabet
    position :fixed
    right:0
    top:1.58rem
    bottom:0
    
    z-index:999
    width: .4rem
    display: flex
    flex-direction:column
    justify-content:center
    text-align center
    .title
        margin-top :.1rem
        color:#00bce4
        
      
       
        

       
       
</style>