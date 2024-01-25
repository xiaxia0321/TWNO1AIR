<script>
import Swal from 'sweetalert2'
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
export default {
    data() {
        return {
            OrderArr: {
            },
        }
    },
    computed: {
        ...mapState(counter, ['OrderSearchArr'])
    },
    methods: {
        goOnlineCheckInTwo() {
            console.log(this.OrderSearchArr);
            let account = document.getElementById("account")
            let departureLocation = document.getElementById("departureLocation")
            let arrivalLocation = document.getElementById("arrivalLocation")
            let checkbox = document.getElementById("checkbox")
            console.log(checkbox.value);
            if (account.value == "" || departureLocation.value == "" || arrivalLocation.value == "") {
                console.log("xxx")
                Swal.fire({
                    icon: "error",
                    text: "你有資料尚未填寫"
                })
                return
            }
            if (checkbox.checked == false) {
                Swal.fire({
                    icon: "error",
                    text: "你尚未勾選隱私保護政策"
                })
            } else {
                this.$router.push('/OnlineCheckInTwo')
            }
            // account.value = "";
            // departureLocation.value = "";
            // arrivalLocation.value = "";
            // checkbox.value = "";
        },
        // searchOrder() {
        //     axios({
        //         url: 'http://localhost:8080/order/search',
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         data: {
        //             arrival_date: this.OrderSearchArr.getArrivalDate,
        //             departure_date: this.OrderSearchArr.getDepartureDate,
        //             arrival_location: this.OrderSearchArr.getArrivalLocation,
        //             departure_location: this.OrderSearchArr.getDepartureLocation,
        //             account: this.OrderSearchArr.getAccount,
        //         },
        //     })
        //         .then(res => this.OrderArr = res.data.orderList)
        //     console.log(this.OrderArr);
        // },
    },
    mounted() {
        // this.searchOrder()
    }
}
</script>
<template>
    <div class="body">
        <div class="content">
            <h2>線上報到</h2>
            <div class="checkInBox">
                <label for="">會員帳號</label>
                <input type="text" name="" id="account" placeholder="" v-model="OrderSearchArr.getAccount">　　
                <label for="">出發地</label>
                <select class="selectOne" id="departureLocation" v-model="OrderSearchArr.getDepartureLocation">
                    <option value="台北">台北</option>
                    <option value="澳門,澳門">澳門,澳門</option>
                    <option value="東京,日本">東京,日本</option>
                    <option value="大阪,日本">大阪,日本</option>
                    <option value="函館,日本">函館,日本</option>
                    <option value="沖繩,日本">沖繩,日本</option>
                    <option value="曼谷,泰國">曼谷,泰國</option>
                    <option value="胡志明市,越南">胡志明市,越南</option>
                    <option value="新加坡,新加坡">新加坡,新加坡</option>
                    <option value="洛杉磯,美國">洛杉磯,美國</option>
                    <option value="舊金山,美國">舊金山,美國</option>
                </select>
                <!-- <label for="">出發地</label>
                <input type="text" name="" id="departureLocation" placeholder=""
                    v-model="OrderSearchArr.getDepartureLocation">　　 -->
                　　<label for="">目的地</label>
                <select class="selectTwo" id="arrivalLocation" v-model="OrderSearchArr.getArrivalLocation">
                    <option value="台北">台北</option>
                    <option value="澳門,澳門">澳門,澳門</option>
                    <option value="東京,日本">東京,日本</option>
                    <option value="大阪,日本">大阪,日本</option>
                    <option value="函館,日本">函館,日本</option>
                    <option value="沖繩,日本">沖繩,日本</option>
                    <option value="曼谷,泰國">曼谷,泰國</option>
                    <option value="胡志明市,越南">胡志明市,越南</option>
                    <option value="新加坡,新加坡">新加坡,新加坡</option>
                    <option value="洛杉磯,美國">洛杉磯,美國</option>
                    <option value="舊金山,美國">舊金山,美國</option>
                </select>
                <br><br>
                <hr style="border: 2px solid gray;width: 900px;margin-left: 140px;">
                <br>
                <input type="checkbox" style="width: 20px;height: 20px;position: absolute;top: 62.7%;left: 34%;"
                    id="checkbox">
                <span>提供本人資訊，代表本人確認且接受樂狗航空隱私保護政策</span>
                <button type="button" @click="goOnlineCheckInTwo">確認</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.body {
    width: 100vw;
    height: 100vh;

    .content {
        width: 100vw;
        height: 100vh;
        background-color: rgb(22, 26, 48);
        box-sizing: border-box;
        padding-top: 180px;
        padding-left: 150px;

        h2 {
            color: white;
            position: absolute;
            left: 11%;
            top: 26%;
        }

        .checkInBox {
            width: 80vw;
            height: 40vh;
            background-color: rgb(240, 236, 229);
            border-radius: 20px;
            box-sizing: border-box;
            padding-top: 90px;
            border: 2px solid gray;
            .selectOne{
                width: 200px;
                height: 40px;
                border-radius: 5px;
            }
            .selectTwo{
                width: 200px;
                height: 40px;
            }

            label {
                font-size: 14pt;
            }

            input {
                width: 200px;
                height: 40px;
                border-radius: 5px;
                border: 2px solid gray;
            }

            button {
                box-shadow: none;
                border-radius: 15px;
                width: 120px;
                height: 45px;
                border: none;
                background-color: rgb(108, 95, 91);
                position: absolute;
                left: 75%;
                top: 68%;
                color: white;
            }
        }
    }
}
</style>
