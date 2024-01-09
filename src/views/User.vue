<script>
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
                age: null,
                selectedOption: '',
                nation: '',
                phone: '',
                email: '',
                selectedCountry: '',
            },
            countries: [
                { code: 'ab', name: '阿布哈茲' },
                { code: 'af', name: '阿富汗' },
                { code: 'at', name: '亞克羅提利與德凱利亞' },
                { code: 'am', name: '亞美尼亞' },
                { code: 'az', name: '阿爾察赫共和國' },
                { code: 'az', name: '亞塞拜然' },
                { code: 'bh', name: '巴林' },
                { code: 'bd', name: '孟加拉' },
                { code: 'bt', name: '不丹' },
                { code: 'io', name: '英屬印度洋領地' },
                { code: 'bn', name: '汶萊' },
                { code: 'kh', name: '柬埔寨' },
                { code: 'cn', name: '中華人民共和國' },
                { code: 'cx', name: '聖誕島' },
                { code: 'cc', name: '科科斯（基林）群島' },
                { code: 'cy', name: '賽普勒斯' },
                { code: 'eg', name: '埃及' },
                { code: 'ge', name: '喬治亞' },
                { code: 'hk', name: '香港' },
                { code: 'in', name: '印度' },
                { code: 'id', name: '印度尼西亞' },
                { code: 'ir', name: '伊朗' },
                { code: 'iq', name: '伊拉克' },
                { code: 'il', name: '以色列' },
                { code: 'jp', name: '日本' },
                { code: 'jo', name: '約旦' },
                { code: 'kz', name: '哈薩克' },
                { code: 'kp', name: '北韓' },
                { code: 'kr', name: '南韓' },
                { code: 'kw', name: '科威特' },
                { code: 'kg', name: '吉爾吉斯' },
                { code: 'la', name: '寮國' },
                { code: 'lb', name: '黎巴嫩' },
                { code: 'mo', name: '澳門' },
                { code: 'my', name: '馬來西亞' },
                { code: 'mv', name: '馬爾地夫' },
                { code: 'mn', name: '蒙古' },
                { code: 'mm', name: '緬甸' },
                { code: 'np', name: '尼泊爾' },
                { code: 'cy', name: '北賽普勒斯' },
                { code: 'om', name: '阿曼' },
                { code: 'pk', name: '巴基斯坦' },
                { code: 'ps', name: '巴勒斯坦' },
                { code: 'ph', name: '菲律賓' },
                { code: 'qa', name: '卡達' },
                { code: 'ru', name: '俄羅斯' },
                { code: 'sa', name: '沙烏地阿拉伯' },
                { code: 'sg', name: '新加坡' },
                { code: 'os', name: '南奧塞提亞' },
                { code: 'lk', name: '斯里蘭卡' },
                { code: 'sy', name: '敘利亞' },
                { code: 'tw', name: '中華民國' },
                { code: 'tj', name: '塔吉克' },
                { code: 'th', name: '泰國' },
                { code: 'tl', name: '東帝汶' },
                { code: 'tr', name: '土耳其' },
                { code: 'tm', name: '土庫曼' },
                { code: 'ae', name: '阿聯' },
                { code: 'uz', name: '烏茲別克' },
                { code: 'vn', name: '越南' },
                { code: 'ye', name: '葉門' },
                { code: 'fr', name: '法國' },
                { code: 'nl', name: '荷蘭' },
                { code: 'be', name: '比利時' },
                { code: 'lu', name: '盧森堡' },
                { code: 'ch', name: '瑞士' },
                { code: 'li', name: '列支敦斯登' },
                { code: 'at', name: '奧地利' },
                { code: 'mc', name: '摩納哥' },
                { code: 'de', name: '德國' },
                { code: 'pl', name: '波蘭' },
                { code: 'hu', name: '匈牙利' },
                { code: 'sk', name: '斯洛伐克' },
                { code: 'cz', name: '捷克' },
                { code: 'bg', name: '保加利亞' },
                { code: 'ro', name: '羅馬尼亞' },
                { code: 'ru', name: '俄羅斯' },
                { code: 'ua', name: '烏克蘭' },
                { code: 'by', name: '白俄羅斯' },
                { code: 'md', name: '摩爾多瓦' },
                { code: 'gb', name: '英國' },
                { code: 'dk', name: '丹麥' },
                { code: 'no', name: '挪威' },
                { code: 'is', name: '冰島' },
                { code: 'fi', name: '芬蘭' },
                { code: 'se', name: '瑞典' },
                { code: 'lt', name: '立陶宛' },
                { code: 'lv', name: '拉脫維亞' },
                { code: 'ee', name: '愛沙尼亞' },
                { code: 'ie', name: '愛爾蘭' },
                { code: 'pt', name: '葡萄牙' },
                { code: 'es', name: '西班牙' },
                { code: 'gr', name: '希臘' },
                { code: 'it', name: '義大利' },
                { code: 'va', name: '梵蒂岡' },
                { code: 'ad', name: '安道爾' },
                { code: 'mk', name: '北馬其頓' },
                { code: 'sm', name: '聖馬利諾' },
                { code: 'mt', name: '馬爾他' },
                { code: 'si', name: '斯洛維尼亞' },
                { code: 'hr', name: '克羅埃西亞' },
                { code: 'ba', name: '波士尼亞與赫塞哥維納' },
                { code: 'me', name: '蒙特內哥羅' },
                { code: 'rs', name: '塞爾維亞' },
                { code: 'al', name: '阿爾巴尼亞' },
                { code: 'gg', name: '根西' },
                { code: 'je', name: '澤西' },
                { code: 'im', name: '曼島' },
                { code: 'ax', name: '奧蘭' },
                { code: 'fo', name: '法羅群島' },
                { code: 'sj', name: '斯瓦爾巴和揚馬延（斯瓦爾巴）' },
                { code: 'gi', name: '直布羅陀' },
                { code: 'xk', name: '科索沃' },
                { code: 'md', name: '德涅斯特河沿岸' },
                { code: 'us', name: '美國' },
                { code: 'ca', name: '加拿大' },
                { code: 'mx', name: '墨西哥' },
                { code: 'gl', name: '格陵蘭（丹麥）' },
                { code: 'bz', name: '貝里斯' },
                { code: 'gt', name: '瓜地馬拉' },
                { code: 'sv', name: '薩爾瓦多' },
                { code: 'hn', name: '宏都拉斯' },
                { code: 'ni', name: '尼加拉瓜' },
                { code: 'cr', name: '哥斯大黎加' },
                { code: 'pa', name: '巴拿馬' },
                { code: 'bs', name: '巴哈馬' },
                { code: 'cu', name: '古巴' },
                { code: 'jm', name: '牙買加' },
                { code: 'ht', name: '海地' },
                { code: 'do', name: '多明尼加共和國' },
                { code: 'ag', name: '安地卡及巴布達' },
                { code: 'kn', name: '聖克里斯多福及尼維斯' },
                { code: 'dm', name: '多米尼克' },
                { code: 'lc', name: '聖露西亞' },
                { code: 'vc', name: '聖文森及格瑞那丁' },
                { code: 'gd', name: '格瑞那達' },
                { code: 'bb', name: '巴貝多' },
                { code: 'tt', name: '千里達及托巴哥' },
                { code: 'vg', name: '英屬維爾京群島' },
                { code: 'vi', name: '美屬維爾京群島' },
                { code: 'an', name: '荷屬安的列斯' },
                { code: 'pr', name: '波多黎各（美國）' },
                { code: 'ai', name: '安圭拉（英國）' },
                { code: 'ms', name: '蒙特塞拉特（英國）' },
                { code: 'gp', name: '瓜德羅普（法國）' },
                { code: 'mq', name: '馬提尼克（法國）' },
                { code: 'aw', name: '阿魯巴（荷蘭）' },
                { code: 'tc', name: '特克斯和凱科斯群島（英國）' },
                { code: 'ky', name: '開曼群島（英國）' },
                { code: 'bm', name: '百慕大（英國）' },
                { code: 'ar', name: '阿根廷' },
                { code: 'bo', name: '玻利維亞' },
                { code: 'br', name: '巴西' },
                { code: 'cl', name: '智利' },
                { code: 'co', name: '哥倫比亞' },
                { code: 'ec', name: '厄瓜多' },
                { code: 'fk', name: '福克蘭群島' },
                { code: 'gf', name: '法屬圭亞那' },
                { code: 'gy', name: '蓋亞那' },
                { code: 'py', name: '巴拉圭' },
                { code: 'pe', name: '秘魯' },
                { code: 'sr', name: '蘇利南' },
                { code: 'uy', name: '烏拉圭' },
                { code: 've', name: '委內瑞拉' },
                { code: 'dz', name: '阿爾及利亞' },
                { code: 'eg', name: '埃及' },
                { code: 'ly', name: '利比亞' },
                { code: 'ma', name: '摩洛哥' },
                { code: 'tn', name: '突尼西亞' },
                { code: 'eh', name: '西撒哈拉' },
                { code: 'td', name: '查德' },
                { code: 'ml', name: '馬利' },
                { code: 'mr', name: '茅利塔尼亞' },
                { code: 'ne', name: '尼日' },
                { code: 'sd', name: '蘇丹' },
                { code: 'bj', name: '貝南' },
                { code: 'bf', name: '布吉納法索' },
                { code: 'cv', name: '維德角' },
                { code: 'ci', name: '象牙海岸' },
                { code: 'gm', name: '甘比亞' },
                { code: 'gh', name: '加納' },
                { code: 'gn', name: '幾內亞' },
                { code: 'gw', name: '幾內亞比索' },
                { code: 'lr', name: '賴比瑞亞' },
                { code: 'ng', name: '奈及利亞' },
                { code: 'sn', name: '塞內加爾' },
                { code: 'sl', name: '獅子山' },
                { code: 'tg', name: '多哥' },
                { code: 'ao', name: '安哥拉' },
                { code: 'cm', name: '喀麥隆' },
                { code: 'cf', name: '中非共和國' },
                { code: 'cg', name: '剛果共和國' },
                { code: 'cd', name: '剛果民主共和國' },
                { code: 'gq', name: '赤道幾內亞' },
                { code: 'ga', name: '加彭' },
                { code: 'st', name: '聖多美普林西比' },
                { code: 'ss', name: '南蘇丹' },
                { code: 'bi', name: '蒲隆地' },
                { code: 'km', name: '葛摩' },
                { code: 'dj', name: '吉布地' },
                { code: 'er', name: '厄利垂亞' },
                { code: 'et', name: '衣索比亞' },
                { code: 'ke', name: '肯亞' },
                { code: 'mg', name: '馬達加斯加' },
                { code: 'mu', name: '模里西斯' },
                { code: 'rw', name: '盧安達' },
                { code: 'sc', name: '塞席爾' },
                { code: 'so', name: '索馬利亞' },
                { code: 'sl', name: '索馬利蘭' },
                { code: 'tz', name: '坦尚尼亞' },
                { code: 'ug', name: '烏干達' },
                { code: 'bw', name: '波札那' },
                { code: 'ls', name: '賴索托' },
                { code: 'mw', name: '馬拉威' },
                { code: 'mz', name: '莫三比克' },
                { code: 'na', name: '納米比亞' },
                { code: 'za', name: '南非共和國' },
                { code: 'sz', name: '史瓦帝尼' },
                { code: 'zm', name: '尚比亞' },
                { code: 'zw', name: '辛巴威' },
                { code: 'as', name: '美屬薩摩亞' },
                { code: 'au', name: '澳洲' },
                { code: 'ck', name: '庫克群島' },
                { code: 'cl', name: '復活節島' },
                { code: 'fj', name: '斐濟' },
                { code: 'pf', name: '法屬玻里尼西亞' },
                { code: 'gu', name: '關島' },
                { code: 'hi', name: '夏威夷(美國)' },
                { code: 'id', name: '印度尼西亞' },
                { code: 'ki', name: '吉里巴斯' },
                { code: 'mh', name: '馬紹爾群島' },
                { code: 'fm', name: '密克羅尼西亞聯邦' },
                { code: 'nr', name: '諾魯' },
                { code: 'nc', name: '新喀里多尼亞' },
                { code: 'nz', name: '紐西蘭' },
                { code: 'nu', name: '紐埃' },
                { code: 'nf', name: '諾福克島' },
                { code: 'mp', name: '北馬利安納群島' },
                { code: 'pw', name: '帛琉' },
                { code: 'pg', name: '巴布亞紐幾內亞' },
                { code: 'pn', name: '皮特肯群島' },
                { code: 'ws', name: '薩摩亞' },
                { code: 'sb', name: '索羅門群島' },
                { code: 'tk', name: '托克勞' },
                { code: 'to', name: '東加' },
                { code: 'tv', name: '吐瓦魯' },
                { code: 'vu', name: '萬那杜' },
                { code: 'wf', name: '瓦利斯和富圖那' },
            ],
            //表格部分
            flightData: [],
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
    },
    methods: {
        user(im) {
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
    },
}
</script>

<template>
    <div class="screen">
        <div class="user">
            <p>歡迎登機</p>
            <img class="img"><br>
            <button type="button" class="record" @click="user('旅客資料')">旅客資料</button><br>
            <button type="button" class="record" @click="user('旅行紀錄')">機票預訂</button><br>
            <button type="button" class="record" @click="user('關注城市')">紅利優惠</button><br>
            <button type="button" class="record" @click="user('旅遊通知')">旅遊通知</button><br>
            <button type="button" class="out">登出</button>
        </div>
        <div class="in" v-if="data">
            <div class="up">
                <h1 class="people">旅客個人資料</h1>
            </div>
            <div class="bottom">
                <div class="right" v-if="question">
                    <span>姓名</span><br>
                    <input class="data" type="text" id="name" v-model="userInfo.name"><br>
                    <span>生日</span><br>
                    <input class="data D" type="date" id="age" v-model="userInfo.age"><br>
                    <span>性別</span><br>
                    <label v-for="(option, index) in options" :key="index" class="option">
                        <input type="radio" :value="option" v-model="userInfo.selectedOption" name="gender">
                        {{ option }}
                    </label>
                    <br>
                    <span>國家</span><br>
                    <select class="data" id="nation" v-model="userInfo.selectedCountry">
                        <option v-for="country in countries" :key="country.code" :value="country.name">{{ country.name }}
                        </option>
                    </select><br>
                    <span>手機</span><br>
                    <input class="data" type="number" id="phone" v-model="userInfo.phone"><br>
                    <span>信箱</span><br>
                    <input class="data" type="email" id="email" v-model="userInfo.email"><br>
                    <button type="button" @click="confirm('確認')">確認</button>
                </div>
                <div class="right" v-if="confirmationVisible">
                    <span>姓名：</span><span class="option">{{ userInfo.name }}</span><br>
                    <hr>
                    <span>生日：</span><span class="option">{{ userInfo.age }}</span><br>
                    <hr>
                    <span>性別：</span><span class="option">{{ userInfo.selectedOption }}</span><br>
                    <hr>
                    <span>國家：</span><span class="option">{{ userInfo.selectedCountry }}</span><br>
                    <hr>
                    <span>手機：</span><span class="option">{{ userInfo.phone }}</span><br>
                    <hr>
                    <span>信箱：</span><span class="option">{{ userInfo.email }}</span><br>
                    <hr>
                    <button type="button" @click="confirm('修改')">修改</button>
                </div>
                <div class="left1">
                    <img src="./圖片/chikyu_issyuu_travel.png" class="left">
                </div>
            </div>
        </div>
        <div class="in" v-if="travel">
            <h1 class="white">機票預訂</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>價格</th>
                        <th>出發時間</th>
                        <th>出發地點</th>
                        <th>抵達時間</th>
                        <th>抵達地點</th>
                        <th>客艙等級</th>
                        <th>人數</th>
                        <th>旅程</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ticket in paginatedTickets" :key="ticket.id">
                        <td>{{ ticket.price }}</td>
                        <td>{{ ticket.departureDate }}</td>
                        <td>{{ ticket.departureLocation }}</td>
                        <td>{{ ticket.arrivalDate }}</td>
                        <td>{{ ticket.arrivalLocation }}</td>
                        <td>{{ ticket.classType }}</td>
                        <td>{{ ticket.numberOfPeople }}</td>
                        <td>{{ ticket.oneway }}</td>
                        <td><button @click="cancelBooking(ticket.id)">取消預約</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="in" v-if="city">
            <div class="red">
                <p>您的紅利</p>
            </div>
        </div>
        <div class="in" v-if="shirase">
            <p>旅遊通知</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.screen {
    width: fill;
    height: 90vh;
    display: flex;
    background-color: darkblue;
}




.user {
    width: 300px;
    height: 600px;
    margin: 10px;
    background-color:darkblue;
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





.in {
    width: 1100px;
    height: 600px;

    margin: 10px;
}

.up {
    width: 1100px;
    height: 100px;
    background-color: blue;
    color: white;
    text-align: left;
    align-items: center;
}

.bottom {
    width: 1100px;
    height: 500px;
    background-color: lightgray;
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
    font-size: 30px;
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

tr{
    background-color:brown;
}
.white{
    color: white;
}

.red{
    width: 300px;
    height: 300px;
    background-color:coral;
    border-radius: 50%;
    margin-left: 400px;

}
</style>