import { defineStore } from "pinia";

export default defineStore("counter", {
    //data(){}
    state() {
        return {
            pp: 1,
            Order: {
                getOrderId: '',
                getArrivalDate: '',
                getDepartureDate: '',
                getArrivalLocation: '',
                getDepartureLocation: '',
                getAccount:'',
            },
            plane: {
                departureDate: "",
                arrivalDate: "",
                departureLocation: "",
                arrivalLocation: "",
                classType: "經濟艙;商務艙;頭等艙",
                isOneway: false,
                depatureTerminal: 0,
                arriveTerminal: 0,
                depatureTime: "",
                arriveTime: "",
                aa: "",
                da: ""
            },
        }

    },
    //computed
    getters: {
        locationInfo(state) {
            return `現在位置:${this.location}`
        }
    },
    //methods
    actions: {
        setPP(num) {
            this.pp = num;
        },
        goHome() {
            this.$router.push('/HomeView')
        },
        goSubmit() {
            this.$router.push('/Submit')
        },
        goLogin() {
            this.$router.push('/')
        },
        goTokyo() {
            this.$router.push('/LocationTokyo')
        },
        goKyoto() {
            this.$router.push('/LocationKyoto')
        },
        goSingapore() {
            this.$router.push('/LocationSingapore')
        },
        goBangkok() {
            this.$router.push('/LocationBangkok')
        },
        goSFO() {
            this.$router.push('/LocationSFO')
        }
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