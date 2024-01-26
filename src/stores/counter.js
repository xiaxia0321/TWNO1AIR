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
                getArriveTime:'',
                getDepatureTime:'',
            },
            OrderArr: {
            },
            OrderSearchArr: {
                getOrderId: '',
                getArrivalDate: '',
                getDepartureDate: '',
                getArrivalLocation: '',
                getDepartureLocation: '',
                getAccount:'',
                getArriveTime:'',
                getDepatureTime:'',
            },
            OrderSearchArrCheck:{
                ccc:[],
            },
            plane: {
                departureDate: "", //出發日期
                arrivalDate: "", //抵達日期
                departureLocation: "", //出發地
                arrivalLocation: "", //抵達地
                departureAirport: "", //出發機場
                arrivalAirport: "", //抵達機場
                da: "", //出發機場縮寫
                aa: "", //抵達機場縮寫
                classType: "經濟艙;商務艙;頭等艙",
                isOneway: false, //單程
                depatureTerminal: 0, //出發航廈
                arriveTerminal: 0,  //抵達航廈
                depatureTime: "", //出發時間
                arriveTime: "", //抵達時間
                price: "", //價錢
                seat: "", //座位
                airplain_type: ""
            },
            planeArr: {

            },
            planeSearchArr: {
                departureDate: "", //出發日期
                arrivalDate: "", //抵達日期
                departureLocation: "", //出發地
                arrivalLocation: "", //抵達地
                classType: "經濟艙;商務艙;頭等艙",
                isOneway: false, //單程
            },
            planeSearchCheack: {
                ccc: [],
            },
            MemberInformation: {

            },
            userDate: {
                uuu:[],
            },
            user: {
                userId: 0,
                account: '',
                password: '',
                userName: '', //用戶名稱
                birthday: '',//生日
                age: '',//年齡
                phone: '', //手機
                email: '', //信箱
                point: '', //點數
                // title:'', //缺少稱謂
                // lastName:'',//缺少用戶姓氏(先不用)
                // name:'',//缺少用戶名字(先不用)
                // contactPerson:'',//缺少聯絡人 可能不一定是自己
                // homePhone:'',//缺少住家電話(先不用)
            },
            userArr:{

            }
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
        },
        setLocation(num){
            this.planeSearchArr.departureLocation = num ;
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