<script>
import { defineComponent, ref } from 'vue'
import { NDropdown, NButton, NDatePicker } from 'naive-ui'

export default defineComponent({
    data() {
        return {
            start: "",
            end: "",
            options: [
                {
                    label: "台北, 台灣, TPE, Taiwan Taoyuan International Airport",
                    key: "台北, 台灣, TPE",
                    disabled: false
                },
                {
                    label: "洛杉磯, 美國, LAX, Los Angeles International Airport",
                    key: "洛杉磯, 美國, LAX",
                },
                {
                    label: "舊金山, 美國, SFO, San Francisco International Airport",
                    key: "舊金山, 美國, SFO"
                },
                {
                    label: "函館, 日本, HKD, Hakodate Airport",
                    key: "函館, 日本, HKD"
                },
                {
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京, 日本, NRT"
                },
                {
                    label: "大阪, 日本, KIX, Kansai International Airport",
                    key: "大阪, 日本, KIX"
                },
                {
                    label: "沖繩, 日本, OKA, Naha Airport",
                    key: "沖繩, 日本, OKA"
                },
                {
                    label: "胡志明市, 越南, SGN, Tan Son Nhat Int'l Airport",
                    key: "胡志明市, 越南, SGN"
                },
                {
                    label: "曼谷, 泰國, BKK, 素萬那普國際機場",
                    key: "曼谷, 泰國, BKK"
                },
                {
                    label: "新加坡, 新加坡, SIN, Changi Airport",
                    key: "新加坡, 新加坡, SIN"
                },
                {
                    label: "澳門, 澳門, MFM, Macau International Airportn",
                    key: "澳門, 澳門, MFM"
                },
            ],
            range: ""
        }
    },
    methods: {
        handleSelect(key) {
            this.start = key
            if (!key.includes('台灣')) {
                this.options = this.options.filter(option => option.key.includes('台灣'));//當出發地不是台灣的時候，將目的地過濾為台灣
                // this.end = ''; 
            }
            if(key.includes ("洛杉磯, 美國, LA")){
                this.$router.push('/LocationLA')
            }
            if(key.includes ("舊金山, 美國, SFO")){
                this.$router.push('/LocationSFO')
            }
            if(key.includes ("函館, 日本, HKD")){
                this.$router.push('/LocationHakodate')
            }
            if(key.includes ("東京, 日本, NRT")){
                this.$router.push('/LocationTokyo')
            }
            if(key.includes ("大阪, 日本, KIX")){
                this.$router.push('/LocationKyoto')
            }
            if(key.includes ("沖繩, 日本, OKA")){
                this.$router.push('/LocationOkinawa')
            }
            if(key.includes ("胡志明市, 越南, SGN")){
                this.$router.push('/LocationHoChiMinh')
            }
            if(key.includes ("新加坡, 新加坡, SIN")){
                this.$router.push('/LocationSingapore')
            }
            if(key.includes ("澳門, 澳門, MFM")){
                this.$router.push('/LocationMacao')
            }
        },
        handleSelectTwo(key) {
            this.end = key
            if (!key.includes('台灣')) {
                this.options = this.options.filter(option => option.key.includes('台灣'));
            }
            if(key.includes ("洛杉磯, 美國, LAX")){
                this.$router.push('/LocationLAX')
            }
            if(key.includes ("舊金山, 美國, SFO")){
                this.$router.push('/LocationSFO')
            }
            if(key.includes ("函館, 日本, HKD")){
                this.$router.push('/LocationHakodate')
            }
            if(key.includes ("東京, 日本, NRT")){
                this.$router.push('/LocationTokyo')
            }
            if(key.includes ("大阪, 日本, KIX")){
                this.$router.push('/LocationKyoto')
            }
            if(key.includes ("沖繩, 日本, OKA")){
                this.$router.push('/LocationOkinawa')
            }
            if(key.includes ("胡志明市, 越南, SGN")){
                this.$router.push('/LocationHoChiMinh')
            }
            if(key.includes ("新加坡, 新加坡, SIN")){
                this.$router.push('/LocationSingapore')
            }
            if(key.includes ("澳門, 澳門, MFM")){
                this.$router.push('/LocationMacao')
            }
            // console.log(key)
        },
    },
    components: {
        NDropdown,
        NButton,
        NDatePicker,
    },
});
</script>
<template>
    <div class="search">
        <div class="searchFor">
            <br>
            <h1>搭乘樂狗航空從台北飛往曼谷 ，自 TWD9,220* 起！</h1>
        </div>
        <div class="condition">
            <select name="" id="" class="oneway">
                <option value="true">單程</option>
                <option value="false">來回</option>
            </select>
            <select name="" id="" style="" class="classType">
                <option value="">經濟艙</option>
                <option value="">商務艙</option>
                <option value="">頭等艙</option>
            </select>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <!-- <n-button>出發地：國家/地區、城市或機場</n-button> -->
                <n-button>出發地：{{ start }}</n-button>
            </n-dropdown>
            <n-dropdown trigger="hover" :options="options" @select="handleSelectTwo">
                <n-button>目的地：{{ end }}</n-button>
            </n-dropdown>
            <n-date-picker v-model:value="range" type="daterange" clearable />
            <!-- <pre>{{ JSON.stringify(range) }}</pre> -->
            <button type="button" class="searchBtn">搜尋</button>　
        </div>

    </div>
    <div class="content">
        <div class="ticket">
            <span class="top">去程：臺北-曼谷</span>
            <div class="go">
                <p>　　經濟艙</p>
                <p>　　JX741　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　4小時</p>
                <p>　　2024年1月17日　　　　　　　　　　　　　　　　　　　　　　　　　　　　　2024年1月17日</p>
                <h3>　10:40　　　　　　　　　　　　　　　　　　13:40</h3>
                <h3>　TPE　　　　　　　　　　　　　　　　　　　BKK</h3>
                <div class="goBtn">
                    <button type="button">訂購</button>
                </div>
            </div>
            <br>
            <span class="bottom">回程：曼谷-臺北</span>
            <div class="back">
                <p>　　經濟艙</p>
                <p>　　JX746　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　3小時40分鐘</p>
                <p>　　2024年1月24日　　　　　　　　　　　　　　　　　　　　　　　　　　　　　2024年1月24日</p>
                <h3>　16:40　　　　　　　　　　　　　　　　　　21:20</h3>
                <h3>　BKK　　　　　　　　　　　　　　　　　　　TPE</h3>
                <div class="backBtn">
                    <button type="button">訂購</button>
                </div>
            </div>
            <div class="notice">
                <br>
                <h4>注意事項</h4>
                <p>1、來回行程之票價產品價格是以各航段分開顯示，各航段之價格並非單程票價，該顯示價格僅為提供計算所購買的票價產品之參考。</p>
                <p>2、各航段如選擇不同之票價產品組合時，相關收費標準以較嚴格者為主。例如: 航段中包含全額與基本之票價產品組合時，相關手續費用需依照「基本」票價產品規範收取。</p>
                <p>3、兒童旅客的改票/退票/未登機手續費為成人旅客收費的75%；嬰兒旅客的改票/退票手續費為成人旅客收費的10%。</p>
                <p>4、樂狗航空保留隨時修訂或終止各種票價產品、優惠及相關規則之權利，詳見「運送條款」。</p>
                <p>5、以上規定僅適用於搭乘樂狗航空實際營運之航班。</p>
                <p>6、樂狗航空關心每位旅客的健康，如有發燒、咳嗽、呼吸急促等身體不適，請暫緩搭機。各國入境相關規定及簽證須知，請參考「外交部領事事務局」。</p>
                <p>7、搭機前，務必先行確認目的地之檢疫和入境規範 (最新相關規定與法令仍應以各國政府公告為主) ，詳見「最新旅遊限制相關規定」。</p>
                <p>8、機票折扣僅適用於機票票價，不適用於各項附加費(包含但不限於燃油附加費、兵險、指定日期加價、停留點加價等)、服務費(包含但不限於訂位服務費、機場服務費、旅客服務費等)、手續費(包含但不限於改票、退票、未登機手續費等)與各地機場稅金與政府規費等。
                </p>
            </div>
        </div>
        <div class="attraction">
            <br><br><br>
            <img src="/sabrina/曼谷.webp" alt="">
            <h4>曼谷，同時兼具古老氣息和現代風情的東方大城</h4>
            <p>這個同時兼具古老氣息和現代風情的東方大城，是個處處充滿著讚歎與美麗的地方。這個城市是於1782年由卻克里(Chakri)王朝的帝王所建，面積為1,568平方公里，現為首都，也是政治、商業與文化中心。不僅在地理上位居輻轃點，更是旅遊觀光的重要據點。曼谷目前人口約700萬人，湄南河貫穿整個曼谷市，為曼谷市帶來了繁榮與商機，曼谷也因此贏得了『東方威尼斯』的美名。
            </p>
        </div>
    </div>
    <div class="footer">

    </div>
</template>
<style scoped lang="scss">
.search {
    width: 100vw;
    height: 40vh;
    box-sizing: border-box;
    padding-top: 10px;
    background-image: url("/sabrina/曼谷.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1600px;

    .searchFor {
        width: 70vw;
        height: 10vh;
        background-color: rgb(7, 102, 7);
        opacity: 0.8;
        margin: 0 auto;
        margin-top: 30px;

        h1 {
            color: white;
        }
    }

    .condition {
        width: 70vw;
        height: 20vh;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgb(7, 102, 7);
        box-sizing: border-box;
        padding-top: 50px;
        .oneway {
            position: absolute;
            left: 17%;
            top: 38%;
            width: 100px;
            height: 30px;
            border-radius: 5px;
        }
        .classType{
            position: absolute;
            left: 25%;
            top: 38%;
            width: 120px;
            height: 30px;
            border-radius: 5px;
        }

        .n-button {
            width: 230px;
            height: 60px;
            border-radius: 10px;
            background-color: white;
        }

        .n-date-picker {
            width: 300px;
            border-radius: 10px;
        }

        .searchBtn {
            width: 120px;
            height: 45px;
            box-shadow: none;
            border-radius: 10px;
            background-color: rgb(155, 190, 200);
            border: 0px;
            color: black;
            font-size: 16px;
        }
    }
}

.content {
    width: 100vw;
    height: 200vh;
    background-color: rgb(22, 26, 48);

    .ticket {
        width: 100vw;
        height: 80vh;
        box-sizing: border-box;
        padding-top: 20px;

        .top {
            font-size: 26px;
            margin-right: 800px;
            color: white;
        }

        .go {
            width: 70vw;
            height: 25vh;
            background-color: rgb(240, 236, 229);
            border-radius: 10px;
            margin-left: 220px;
            text-align: left;

            .goBtn {
                margin-left: 850px;
                position: absolute;
                bottom: 18%;

                button {
                    width: 100px;
                    height: 40px;
                    border-radius: 10px;
                    background-color: rgb(108, 95, 91);
                    border: 0px;
                    color: white;
                }
            }
        }

        .bottom {
            font-size: 26px;
            margin-right: 800px;
            color: white;
        }

        .back {
            width: 70vw;
            height: 25vh;
            background-color: rgb(240, 236, 229);
            border-radius: 10px;
            margin-left: 220px;
            text-align: left;

            .backBtn {
                margin-left: 850px;
                position: absolute;
                bottom: -15%;

                button {
                    width: 100px;
                    height: 40px;
                    border-radius: 10px;
                    background-color: rgb(108, 95, 91);
                    border: 0px;
                    color: white;
                }
            }
        }

        .notice {
            width: 70vw;
            height: 40vh;
            color: white;
            text-align: left;
            margin-left: 220px;
        }
    }

    .attraction {
        width: 70vw;
        height: 100vh;
        margin-top: 250px;
        margin-left: 220px;

        img {
            width: 800px;
            height: 500px;
        }

        p {
            color: white;
            text-align: left;
        }

        h4 {
            color: white;
        }
    }
}

.footer {
    width: 100vw;
    height: 30vh;
    background-color: rgb(49, 48, 77);
}
</style>