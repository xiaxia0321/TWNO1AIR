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
                <input type="checkbox" style="width: 20px;height: 20px;position: absolute;top: 65%;left: 22%;"
                    id="checkbox">
                <!-- <span>提供本人資訊，代表本人確認且接受樂GO航空隱私保護政策</span> -->
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal" id="gg">
                    提供本人資訊，代表本人確認且接受樂go航空隱私保護政策
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">隱私權保護政策</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" style="text-align: left;">
                                樂go為落實個人資料保護及遵循中華民國個人資料保護法、歐盟一般資料保護規則（GDPR）及其他相關之個人資料保護法令之規定，制定本隱私保護政策，以達成個人資料隱私與安全之管理。
                                我們將於授權之特定目的範圍內，以合理安全的方式蒐集和使用您的個人資料，並確保您有查詢、修改、刪除、限制個人資料的利用及撤回您的同意等權利。此外，我們針對個人資料被竊取、竄改、洩漏或毀損等事故，設有資料外洩事故應變策略與計畫，並透過建立與維護完善的個人資料保護機制，承諾保障您個人資料之正確性和安全性。
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">了解</button>
                                <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="check" @click="goOnlineCheckInTwo">確認</button>
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
            position: relative;

            #gg{
            margin-top: -9px;
            margin-right: 180px;
            }
            .selectOne {
                width: 200px;
                height: 40px;
                border-radius: 5px;
            }

            .selectTwo {
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

            .check {
                box-shadow: none;
                border-radius: 15px;
                width: 120px;
                height: 45px;
                border: none;
                background-color: rgb(108, 95, 91);
                position: absolute;
                left: 78%;
                top: 63%;
                color: white;
            }
        }
    }
}
</style>
