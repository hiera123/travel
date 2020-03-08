<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-alphabet :cities="cities" @changeCityArea="changeCityArea"></city-alphabet>
        <city-list :hotCities="hotCities" :cities="cities" :cityArea="cityArea"></city-list>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name:'City',
    data () {
        return {
        hotCities:[],
        cities:{},
        cityArea:''
        }
  },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo () {
            axios.get('/api/city.json').then(this.getCityInfoSucc)
        },
        getCityInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.hotCities = data.hotCities
                this.cities = data.cities
            
            }
        },
        changeCityArea(cityArea){
            this.cityArea = cityArea
         
            
           
            
            
        }
  },
    mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>