import { defineStore } from "pinia";

export default defineStore("counter", {
    //data(){}
    state() {
        return {
        }

    },
    //computed
    getters: {

    },
    //methods
    actions: {
    }
}
)
// 要用pinia複製下面import
// import { mapState, mapActions } from 'pinia'
// import counter from '../stores/counter'

// 存入問卷的陣列到 f12應用程式的本機儲存空間
//  data為key值
//localStorage.setItem("data",JSON.stringify(this.userData))

//取出obj並印出陣列
//let obj = localStorage.getItem("data")
// console.log(JSON.parse(obj));