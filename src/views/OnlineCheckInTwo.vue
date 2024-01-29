<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
export default {
    data() {
        return {
            OrderArr: {
            },
            orderId: "",
            account: "",
            plainId: "",
            departureDate: "",
            depatureTime: "",
            departureLocation: "",
            arrivalDate: "",
            arriveTime: "",
            arrivalLocation: "",
        }
    },
    computed: {
        ...mapState(counter, ['OrderSearchArr', 'plane'])
    },
    methods: {
        goDagerous() {
            this.$router.push('/Dangerous')
        },
        ...mapActions(counter, ['setPP',]),
        searchOrder() {
            axios({
                url: 'http://localhost:8080/order/search',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    order_id: this.OrderSearchArr.getOrderId,
                    arrival_date: this.OrderSearchArr.getArrivalDate,
                    departure_date: this.OrderSearchArr.getDepartureDate,
                    arrival_location: this.OrderSearchArr.getArrivalLocation,
                    departure_location: this.OrderSearchArr.getDepartureLocation,
                    account: this.OrderSearchArr.getAccount,
                    arrive_time: this.OrderSearchArr.getArriveTime,
                    depature_time: this.OrderSearchArr.getDepatureTime,
                },
            })
                .then(res => this.OrderArr = res.data.orderList)
            console.log(this.OrderArr);
        },
        // searchPlane(){
        //     axios({
        //         url: 'http://localhost:8080/airplainInfo/search',
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         data: {
        //             airplain_Id: this.planeArr.airplain_Id
        //         },
        //     })
        //         .then(res => this.planeArr = res.data.planeList)
        //         console.log(this.planeArr);
        // }
    },
    mounted() {
        this.searchOrder()
        // this.searchPlane()
    }
}
</script>
<template>
    <div class="info">
        <div class="tableOne">
            <table>
                <tr>
                    <th>訂單編號</th>
                    <th>姓名</th>
                    <!-- <th>報到地點</th> -->
                    <!-- <th>班機編號</th> -->
                    <th>出發日期</th>
                    <th>出發時間</th>
                    <th>出發地</th>
                    <th>回程日期</th>
                    <th>回程時間</th>
                    <th>目的地</th>
                </tr>
                <tr v-for="(item, index) in OrderArr" :key="index">
                    <td>{{ item.orderId }}</td>
                    <td>{{ item.account }}</td>
                    <!-- <td>TPE-臺北(桃園)</td>
                    <td>{{ item.airplain_Id }}</td> -->
                    <td>{{ item.departureDate }}</td>
                    <td>{{ item.depatureTime }}</td>
                    <td>{{ item.departureLocation }}</td>
                    <td>{{ item.arrivalDate }}</td>
                    <td>{{ item.arriveTime }}</td>
                    <td>{{ item.arrivalLocation }}</td>
                </tr>
            </table>
            <button type="button" @click="goDagerous">確認</button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.info {
    width: 100vw;
    height: 100vh;
    background-color: rgb(22, 26, 48);
    box-sizing: border-box;

    .tableOne {
        width: 100vw;
        height: 80vh;
        margin: 0;
        padding-left: 120px;
        padding-top: 150px;

        table {
            color: gray;
            background-color: rgb(240, 236, 229);
            width: 90%;
            height: 30%;
            font-size: 16pt;

            th {
                border: 1px solid gray;
                background-color: rgb(182, 187, 196);
            }

            td {
                border: 1px solid gray;
            }
        }

        button {
            box-shadow: none;
            border-radius: 15px;
            width: 120px;
            height: 50px;
            border: none;
            background-color: rgb(108, 95, 91);
            position: absolute;
            left: 66%;
            top: 60%;
            // margin-left: 770px;
            // margin-top: 200px;
            font-size: 14pt;
            color: white;
        }
    }
}
</style>