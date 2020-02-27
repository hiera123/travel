<template>
    <div class="icons">
        <div class="icon" v-for="item of list"  :key = item.id>
            <img :src="item.imgUrl" class="icon-img">
            <p class="icon-text">{{item.desc}}</p>
        </div>
       
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data () {
        return {
            list:[{
                "id": "0001",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                "desc": "景点门票"
            }, {
                "id": "0002",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
                "desc": "滑雪季"
            }, {
                "id": "0003",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
                "desc": "泡温泉"
            }, {
                "id": "0004",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
                "desc": "动植园"
            }, {
                "id": "0005",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
                "desc": "游乐园"
            }, {
                "id": "0006",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
                "desc": "必游榜单"
            }, {
                "id": "0007",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
                "desc": "演出"
            }, {
                "id": "0008",
                "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
                "desc": "城市观光"
            }]
            
        }
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