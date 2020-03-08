export default {
    changeCity(state,city1){
        state.city1 = city1
        //本地存储:需要用try catch包裹localStorage防止用户用了隐身模式,不包裹会导致代码报错,运行失效
        try { 
            localStorage.city1 = city1
        } catch(e) {}
       
     }
}