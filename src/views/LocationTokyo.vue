<script>
import { defineComponent, ref } from 'vue'
import { NDropdown, NButton, NDatePicker } from 'naive-ui'

export default defineComponent({
    data() {
        return {
            departureDate: "",
            arrivalDate: "",
            departureLocation:"",
            arrivalLocation:"",
            isOneway: false,
            options: [
                {
                    label: "台北, 台灣, TPE, Taiwan Taoyuan International Airport",
                    key: "台北, 台灣, TPE",
                    disabled: false
                },
                {
                    label: "洛杉磯 (美國), LAX, Los Angeles International Airport",
                    key: "洛杉磯 (美國), LAX",
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
            // this.end = ""
            // if( this.start !== "台北, 台灣, TPE" ){
            //     this.end == "台北, 台灣, TPE"
            // }
            // console.log(this.data.option);
        },
        handleSelectTwo(key) {
            this.end = key
            if (!key.includes('台灣')) {
                this.options = this.options.filter(option => option.key.includes('台灣'));
            }
        },
        search() {
            let departureDate = document.getElementById("departureDate")
            let arrivalDate = document.getElementById("arrivalDate")
            let departureLocation = document.getElementById("departureLocation")
            let arrivalLocation = document.getElementById("arrivalLocation")
            let isOneway = document.getElementById("isOneway")
            axios({
                url: 'http://localhost:8080/airplainInfo/search',
                methods: 'POST',
                withCredentials: true,
                headers: {
                    'Contect-Type': 'applicatoin/json'
                },
                data: {
                    
                },
            }).then(res => {
                console.log(data);
            })
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
            <h1>搭乘樂狗航空從台北飛往東京 ，自 TWD13,589* 起！</h1>
        </div>
        <div class="condition">
            <select name="" id="oneway" class="oneway">
                <option value="true">單程</option>
                <option value="false">來回</option>
            </select>
            <select name="" id="classType" style="" class="classType">
                <option value="">經濟艙</option>
                <option value="">商務艙</option>
                <option value="">頭等艙</option>
            </select>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect" id="depatureLocation">
                <n-button>出發地：{{ start }}</n-button>
            </n-dropdown>
            <n-dropdown trigger="hover" :options="options" @select="handleSelectTwo" id="arrivalLocation">
                <n-button>目的地：{{ end }}</n-button>
            </n-dropdown>
            <n-date-picker v-model:value="range" type="daterange" clearable id="departureDate"/>
            <!-- <pre>{{ JSON.stringify(range) }}</pre> -->
            <button type="button" class="searchBtn" @click="search()">搜尋</button>　
        </div>

    </div>
    <div class="content">
        <div class="ticket">
            <span class="top">去程：臺北-東京</span>
            <div class="go">
                <p>　　經濟艙</p>
                <p>　　JX800　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　3小時</p>
                <p>　　2024年2月18日　　　　　　　　　　　　　　　　　　　　　　　　　　　　　2024年2月18日</p>
                <h3>　08:30　　　　　　　　　　　　　　　　　　12:15</h3>
                <h3>　TPE　　　　　　　　　　　　　　　　　　　NRT</h3>
                <div class="goBtn">
                    <button type="button">訂購</button>
                </div>
            </div>
            <br>
            <span class="bottom">回程：東京-臺北</span>
            <div class="back">
                <p>　　經濟艙</p>
                <p>　　JX801　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　4小時5分鐘</p>
                <p>　　2024年2月26日　　　　　　　　　　　　　　　　　　　　　　　　　　　　　2024年2月26日</p>
                <h3>　13:40　　　　　　　　　　　　　　　　　　16:45</h3>
                <h3>　NRT　　　　　　　　　　　　　　　　　　　TPE</h3>
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
            <img src="/sabrina/東京.webp" alt="">
            <h4>東京，繁華絢麗的東洋之城</h4>
            <p>東京有充滿未來感的摩天大樓、無與倫比的美食和狂野的夜生活，堪稱是座充滿刺激的城市。這座城市以創新而著稱，而城市裡的古老佛教寺廟、傳統茶館和寧靜的花園則可以讓人度過寧靜逍遙的時光，並宣示城市悠久的歷史。前往東京歷史悠久的淺草一日遊，參觀知名的淺草寺，然後沿著隅田川漫步
                (春天的時候這裡有櫻花盛開)。或者也可以去築地場外市場享用吃壽司早餐，狹窄的走道兩側有許多餐廳可供選擇 (由於此處大多數的餐廳會在中午時歇業，因此建議提早抵達)。如果喜歡熱鬧，也想要體驗 Cosplay
                的文化，那就去原宿，或去秋葉原選購電玩和動漫。夜間可以沿著橫丁 (巷弄的意思) 探索，沿途都可以找到氣氛悠閒的居酒屋和小酒吧。當然這裡還有更多精彩的體驗等您探索，請參考以下更多推薦。</p>
        </div>
    </div>
    <!-- <div class="foot">
        <div class="footBlock">
            <h2 style="text-align: left; padding-bottom: 30px; border-bottom: .2px solid white; font-weight: 600;"><span
                    style="padding-left: 10px;">瞭解樂狗</span></h2>
            <ul>
                <li><a href="">認識樂狗</a></li>
                <li><a href="">團隊成員</a></li>
                <li><a href="">加入團隊</a></li>
                <li><a href="">加入團隊</a></li>
                <li><a href="">加入團隊</a></li>
            </ul>
        </div>
        <div class="footBlock">
            <h2 style="text-align: left; padding-bottom: 30px; border-bottom: .2px solid white; font-weight: 600;"><span
                    style="padding-left: 10px;">接觸樂狗</span></h2>
            <ul>
                <li><a href="">認識樂狗</a></li>
                <li><a href="">團隊成員</a></li>
                <li><a href="">加入團隊</a></li>
                <li><a href="">加入團隊</a></li>
                <li><a href="">加入團隊</a></li>
            </ul>
        </div>
        <div class="footBlock">
            <h2 style="text-align: left; padding-bottom: 30px; border-bottom: .2px solid white; font-weight: 600;"><span
                    style="padding-left: 10px;">加入樂狗</span></h2>
            <ul>
                <li><a href="">加入我們</a></li>
                <li><a href="">加入我們</a></li>
                <li><a href="">加入我們</a></li>
                <li><a href="">加入我們</a></li>
                <li><a href="">加入{{ '樂狗' }}團隊</a></li>
            </ul>
        </div>

        <div class="under">
            <a href=""><i class="fa-brands fa-square-facebook ii" style="color: #161a30;"></i></a>
            <a href=""><i class="fa-brands fa-square-instagram ii" style="color: #161a30;"></i></a>
            <a href=""><i class="fa-brands fa-square-youtube ii" style="color: #161a30;"></i></a>
        </div>
    </div> -->
    <div class="footer">

    </div>
</template>
<style scoped lang="scss">
.search {
    width: 100vw;
    height: 40vh;
    box-sizing: border-box;
    padding-top: 10px;
    background-image: url("/sabrina/東京.webp");
    background-repeat: no-repeat;
    background-position: center;

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
        // border: 1px solid palevioletred;
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

// .foot {
//     position: relative;
//     width: 100%;
//     height: 70vh;
//     background-color: #5e5045;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     flex-direction: row;
//     padding: 20px 50px 120px 50px;

//     .footBlock {
//         width: 26%;
//         height: 100%;
//         // border: 1px solid black;
//         color: white;

//         ul {
//             list-style-type: none;

//             li {
//                 text-align: left;
//                 height: 3rem;
//                 padding-left: 20px;
//                 display: flex;
//                 justify-content: left;
//                 margin: 0 0 5px;
//                 align-items: center;
//                 font-size: 1.3rem;
//                 transition: .5s;

//                 &:hover {
//                     // width: 70%;
//                     background-color: rgba(255, 255, 255, 0.15);
//                     border-left: 10px solid rgba(22, 26, 48, 0.533);
//                     box-shadow: 2px 1px 2px black;
//                     transition: .5s;
//                 }

//                 &:active {
//                     background-color: #372f2a66;
//                     border-left: 12px solid rgb(22, 26, 48);
//                     transition: .4s;
//                 }

//                 a {
//                     text-decoration: none;
//                     color: white;
//                 }
//             }
//         }
//     }

//     .under {
//         position: absolute;
//         bottom: 0;
//         background-color: #4a3f37;
//         width: 100%;
//         height: 20%;
//         display: flex;
//         align-items: center;

//         .ii {
//             margin-left: 15px;
//             font-size: 50px;
//             width: 50px;
//             height: 50px;

//             &:hover {
//                 box-shadow: 2px 2px 5px 0 black;
//                 background-color: rgba(255, 255, 255, 0.2);
//                 border-radius: .5rem;
//             }

//             &:active {
//                 box-shadow: -1px -1px 1px 2px black;
//             }
//         }
//     }
// }

.footer {
    width: 100vw;
    height: 30vh;
    // border: 1px solid blue;
    background-color: rgb(49, 48, 77);
}
</style>