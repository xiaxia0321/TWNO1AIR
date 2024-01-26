<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
export default {
    data() {
        return {
            //左側
            data: true,
            travel: false,
            city: false,
            shirase: false,
            //資料確認
            confirmationVisible: false,
            question: true,
            //性別
            options: ['男', '女', '以上皆非', '不便提供'],
            userInfo: {
                name: '',
                birthday: null,
                age: "",
                selectedOption: '',
                nation: '',
                phone: '',
                email: '',
                selectedCountry: '中華民國',
            },
            //表格部分
            flightData: [],
            //紅利
            bonus: 0,
            //清單
            checklist: ["護照", "機票", "錢包", "衣服", "空水壺", "個人證件", "手機", "充電線", "行動電源", "耳機", "個人藥品", "清潔用品", "鑰匙"],
            checkedItems: [],
            newItem: "",
            editingItem: null,
            editedItemValue: "",
            editMode: false,
            selectedCity: "",
            suggestedItems: [],
            sensitiveWords: ["刀", "knife", "槍", "gun", "rifle", "火", "lighter", "酒", "棒", "桿", "棍", "架", "彈", "油", "殺", "毒", "酸", "鹼", "炸", "肉", "果", "魚", "蛋", "盜"],
            userArr: [],
        }
    },
    props: {
        flights: Array, // 機票數據陣列
    },
    computed: {
        //表格部分
        totalRows() {
            return this.flights.length;
        },
        totalPages() {
            return Math.ceil(this.totalRows / this.rowsPerPage);
        },
        displayedFlights() {
            const start = (this.currentPage - 1) * this.rowsPerPage;
            const end = start + this.rowsPerPage;
            return this.flights.slice(start, end);
        },
        ...mapState(counter, ['user', 'userDate'])
    },
    methods: {
        // isLogin() {
        //     console.log(this.userDate.uuu);
        //     if (this.userDate.uuu[0].name == '') {

        //     }
        // },
        searchUser() {
            axios({
                url: 'http://localhost:8080/user/search',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    account: this.userDate.account,
                    password: this.userDate.password,
                },
            })
                .then(res => this.uerArr = res.data.userList)
            console.log(this.userArr);
        },
        // search() {
        //     console.log(this.searchData);
        //     fetch('http://localhost:8080/user/search', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             quiz_name: this.searchData.quizName,
        //             startdate: this.searchData.startdate,
        //             enddate: this.searchData.enddate
        //         })
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             this.quizList = data.quizList
        //             console.log(this.quizList)
        //         })
        //         .catch(error => console.log(error))
        // },
        userblock(im) {
            if (im === '旅客資料') {
                this.data = true
                this.travel = false
                this.city = false
                this.shirase = false
            }
            if (im === '旅行紀錄') {
                this.data = false
                this.travel = true
                this.city = false
                this.shirase = false
            }
            if (im === '關注城市') {
                this.data = false
                this.travel = false
                this.city = true
                this.shirase = false
            }
            if (im === '旅遊通知') {
                this.data = false
                this.travel = false
                this.city = false
                this.shirase = true
            }
        },
        confirm(com) {
            if (com === '確認') {
                this.confirmationVisible = true
                this.question = false
            }
            if (com === '修改') {
                this.confirmationVisible = false
                this.question = true
            }
        },
        //表格部分
        cancelBooking(flightId) {
            this.$emit('bookingCancelled', flightId);
        },
        updateFlightList(newFlightData) {
            this.flightData.push(newFlightData);
        },
        cancelBooking(flightId) {
            this.flightData = this.flightData.filter(flight => flight.id !== flightId);
        },
        //清單
        addItem() {
            if (this.newItem.trim() !== "") {
                // 檢查是否包含敏感詞
                if (this.sensitiveWords.some(word => this.newItem.includes(word))) {
                    // 如果包含敏感詞，顯示提醒
                    const confirmed = window.confirm("請注意，此物品包含可能是違禁品的敏感詞。確定要加入清單嗎？");
                    if (!confirmed) {
                        // 如果使用者取消，清空輸入
                        this.newItem = "";
                        return;
                    }
                }

                // 如果不包含敏感詞，加入清單
                this.checklist.push(this.newItem);
                this.checkedItems.push(false);
                this.newItem = "";
            }
        },
        removeItem(index) {
            this.checklist.splice(index, 1);
            this.checkedItems.splice(index, 1);
        },
        clearChecked() {
            this.checkedItems = [];
        },
        toggleEditMode() {
            this.editMode = !this.editMode;
        },
        updateSuggestedItems() {
            // 根据选中的城市更新建议物品列表
            switch (this.selectedCity) {
                case "San Francisco":
                    this.suggestedItems = ["舊金山城市通行證(San Francisco CityPASS)", "舊金山交通卡(Clipper Card)", "外套", "防曬用品"];
                    break;
                case "Los Angeles":
                    this.suggestedItems = ["洛杉磯交通卡(TAP)", "外套", "墨鏡", "防曬用品"];
                    break;
                case "Hakodate":
                    this.suggestedItems = ["保暖物品(春、秋、冬季)", "JR北海道IC晶片卡", "墨鏡"];
                    break;
                case "Tokyo":
                    this.suggestedItems = ["JR東京廣域周遊券", "現金", "東京地鐵遊客乘車指南(APP)"];
                    break;
                case "Osaka":
                    this.suggestedItems = ["大阪周遊卡", "現金", "大阪觀光局旅遊指南"];
                    break;
                case "Okinawa":
                    this.suggestedItems = ["防曬用品", "現金", "OKICA(交通卡)", "泳裝"];
                    break;
                case "Ho Chi Minh City":
                    this.suggestedItems = ["防曬用品", "濕紙巾", "胡志明公車(bus map APP)", "防蚊液"];
                    break;
                case "Bangkok":
                    this.suggestedItems = ["防曬用品", "濕紙巾", "曼谷旅遊地圖-Krung Thep Maha Nakhon", "兔子卡"];
                    break;
                case "Singapore":
                    this.suggestedItems = ["萬國轉接頭", "新加坡旅遊注意事項", "Ez-Link卡"];
                    break;
                case "Macau":
                    this.suggestedItems = ["萬國轉接頭", "澳門通卡"];
                    break;
                // 添加其他城市的建议物品
                default:
                    this.suggestedItems = [];
            }
        },
        addToChecklist(item) {
            // 将建议物品添加到清单
            this.checklist.push(item);
            this.checkedItems.push(false);
        },
    },
}
</script>

<template>
    <div class="screen">
        <div class="user">
            <p>旅途愉快</p>
            <h2>{{ userInfo.name }}</h2><br>
            <button type="button" class="record" @click="userblock('旅客資料')">旅客資料</button><br>
            <button type="button" class="record" @click="userblock('旅行紀錄')">行程管理</button><br>
            <button type="button" class="record" @click="userblock('關注城市')">紅利優惠</button><br>
            <button type="button" class="record" @click="userblock('旅遊通知')">行李清單</button><br>
            <button type="button" class="out">登出</button>
        </div>
        <div class="in" v-if="data">
            <div class="up">
                <h1 class="people">旅客個人資料</h1>
            </div>
            <div class="bottom">
                <div class="right" v-if="question">
                    <span>姓名</span>
                    <input disabled class="data" type="text" id="name" v-model="userDate.uuu[0].name" placeholder="請輸入姓名">
                    <!-- <p>{{ userList.name }}</p> -->
                    <br>
                    <span>生日</span>
                    <input disabled class="data D" type="text" id="birthday" v-model="userDate.uuu[0].birthday"><br>
                    <span>年齡</span>
                    <br>
                    <input disabled type="number" id="age" v-model="userDate.uuu[0].age" style="border-radius: 10px;border: none;">
                    <br>
                    <span>手機</span>
                    <input disabled class="data" type="number" id="phone" v-model="userDate.uuu[0].phone"><br>
                    <span>信箱</span>
                    <input disabled class="data" type="email" id="email" v-model="userDate.uuu[0].email"><br>
                    <br><br>
                    <button type="button" @click="confirm('確認')">確認</button>
                </div>
                <!-- <div class="right" v-if="confirmationVisible">
                    <span>姓名：</span><span class="option">{{ userInfo.name }}</span><br>
                    <hr>
                    <span>生日：</span><span class="option">{{ userInfo.birthday }}</span><br>
                    <hr>
                    <span>年齡：</span><span class="option">{{ userInfo.age }}</span><br>
                    <hr>
                    <span>手機：</span><span class="option">{{ userInfo.phone }}</span><br>
                    <hr>
                    <span>信箱：</span><span class="option">{{ userInfo.email }}</span><br>
                    <hr>
                    <button type="button" @click="confirm('修改')">修改</button>
                </div> -->
                <div class="left1">
                    <img src="./圖片/chikyu_issyuu_travel.png" class="left">
                </div>
            </div>
        </div>
        <div class="in" v-if="travel">
            <h1 class="white">行程管理</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>訂位編號</th>
                        <th>價格</th>
                        <th>出發時間</th>
                        <th>出發地點</th>
                        <th>抵達時間</th>
                        <th>抵達地點</th>
                        <th>人數</th>
                        <th>旅程</th>
                        <th>其他操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ticket in paginatedTickets" :key="ticket.id">
                        <td>{{ ticket.id }}</td>
                        <td>{{ ticket.price }}</td>
                        <td>{{ ticket.departureDate }}</td>
                        <td>{{ ticket.departureLocation }}</td>
                        <td>{{ ticket.arrivalDate }}</td>
                        <td>{{ ticket.arrivalLocation }}</td>
                        <td>{{ ticket.numberOfPeople }}</td>
                        <td>{{ ticket.oneway }}</td>
                        <td><button @click="cancelBooking(ticket.id)">取消</button><button @click="">修改</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="in" v-if="city">
            <div class="red">
                <h2><b>您的紅利</b></h2><br>
                <div class="num">{{ bonus }}</div>
            </div>
        </div>
        <div class="in" v-if="shirase">
            <div class="list">
                <h1><img src="./圖片/calender_aseru_woman.png" class="forget">出發前檢查一下……有什麼東西忘了吧！<img
                        src="./圖片/jikan_tobu_man.png" class="forget"></h1><br>

                <input v-model="newItem" placeholder="Add new item">
                <button @click="addItem">增加選項</button>
                <button @click="toggleEditMode">修改選項</button>
                <button @click="clearChecked">清除勾選</button><br>
                <select v-model="selectedCity" @change="updateSuggestedItems" class="lo">
                    <!-- <i class="fa-solid fa-plus fa-2xl"></i> -->
                    <option value="">請選擇您的目的地</option>
                    <option value="San Francisco">舊金山</option>
                    <option value="Los Angeles">洛杉磯</option>
                    <option value="Hakodate">函館</option>
                    <option value="Tokyo">東京</option>
                    <option value="Osaka">大阪</option>
                    <option value="Okinawa">那霸</option>
                    <option value="Ho Chi Minh City">胡志明市</option>
                    <option value="Bangkok">曼谷</option>
                    <option value="Singapore">新加坡</option>
                    <option value="Macau">澳門</option>
                </select>
                <table class="form">
                    <tr>
                        <td>攜帶物品</td>
                        <td>必須用品</td>
                    </tr>
                    <tr>
                        <td>水壺</td>
                        <td>帽子</td>
                    </tr>
                </table>
                <ul>
                    <li v-for="(item, index) in checklist" :key="index" :class="{ 'edit-mode': editMode }">
                        <input type="checkbox" v-model="checkedItems[index]" v-show="!editMode">
                        <span v-show="!editMode">{{ item }}</span>
                        <input type="text" v-model="checklist[index]" v-show="editMode">
                        <button @click="removeItem(index)">移除</button>
                    </li>
                </ul>

                <h5>想知道有那些東西是違禁品或需要申報請參考以下文章：</h5>
                <a href="https://www.callcarbar.com.tw/10290/departure_0218" target="_blank">違禁品</a>、<a
                    href="https://www.edh.tw/lohas/article/31229" target="_blank">申報</a>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.screen {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgb(49, 48, 77);
}




.user {
    width: 300px;
    height: 600px;
    margin: 10px;
    background-color: rgb(49, 48, 77);
    color: white;
}

.record {
    width: 200px;
    height: 50px;
    margin: 10px;
    border: 0px;
}

.img {
    width: 100px;
    height: 100px;
}

.age {
    border-radius: 10px;
}



.in {
    width: 1100px;
    height: 600px;

    margin: 10px;
}

.up {
    width: 1100px;
    height: 100px;
    background-color: rgb(22, 26, 48);
    color: white;
    text-align: left;
    align-items: center;
}

.bottom {
    width: 1100px;
    height: 500px;
    background-color: rgb(182, 187, 196);
    display: flex;
}

.right {
    width: 760px;
    height: 460px;
    border: 1px dashed #000;
    // background-color:lightgoldenrodyellow;
    margin: 10px;
    border-radius: 10px;
    text-align: left;
    padding: 10px;
}

.data {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 730px;
    height: 30px;
    border: 0px;
    border-radius: 10px;
}

.option {
    margin-top: 10px;
    margin-bottom: 10px;
    // font-size: 25px;
}

.left1 {
    width: 300px;
    height: 500px;
    display: flex;
    align-items: center;
}

.left {
    width: 300px;
    height: 255px;
}

h1 {
    margin: 0px;
}

.table {
    border: 1px solid black;
    width: 1100px;
    height: 550px;
    overflow-y: auto;
    border-collapse: collapse;
    color: white;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

tr {
    background-color: white;
    border: 2px solid black;
}

.white {
    color: white;
}

.red {
    width: 300px;
    height: 300px;
    background-color: coral;
    border-radius: 50%;
    margin-left: 400px;
    padding: 50px;
    color: brown;
    text-shadow: 0.1em 0.1em 0.2em yellow
}

.num {
    font-size: 100px;
}

.ben {
    margin-top: 100px;
    width: 1100px;
    height: 100px;
    border-radius: 10px;
    background-color: rgb(240, 236, 229);
}

.bonus {
    width: 200px;
    height: 50px;
    margin: 10px;
    border: 0px;
    background-color: rgb(240, 236, 229);
}

.icon {
    height: 50px;
}

.list {
    background-color: rgb(240, 236, 229);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
    //display: inline-block;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

li {
    display: flex;
    align-items: center;
    margin: 5px;
    justify-content: space-between;
    flex-basis: 22.5%;
}

input[type="checkbox"] {
    margin-right: 5px;
    /* 可根据需要调整复选框与文本之间的间距 */
}

.forget {
    height: 50px;
}

.result {
    display: flex;
    text-align: center;
    width: 1100px;

    .checked {
        border-right: 5px;
    }
}

.Contraband {
    width: 1080px;
}

.lo {
    margin-top: 5px;
}
</style>