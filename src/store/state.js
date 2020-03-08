let defaultCity = '上海'
try {
    if(localStorage.city1){
        defaultCity = localStorage.city1
    }
} catch(e){}

export default {
    city1 : defaultCity
  }