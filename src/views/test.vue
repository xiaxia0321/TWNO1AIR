<script>
import { defineComponent, ref } from 'vue'
import { NDropdown, NButton, NDatePicker } from 'naive-ui'
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default defineComponent({
    data() {
        return {
            start: "",
            location: "",
            options: [
                // {
                //     label: "台北, 台灣, TPE, Taiwan Taoyuan International Airport",
                //     key: "台北, 台灣, TPE, Taiwan Taoyuan International Airport",
                //     disabled: false
                // },
                {
                    label: "洛杉磯 (美國), LAX, Los Angeles International Airport",
                    key: "洛杉磯",
                },
                {
                    label: "舊金山, 美國, SFO, San Francisco International Airport",
                    key: "舊金山"
                },
                {
                    label: "函館, 日本, HKD, Hakodate Airport",
                    key: "函館"
                },
                {
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京"
                },
                {
                    label: "大阪, 日本, KIX, Kansai International Airport",
                    key: "大阪"
                },
                {
                    label: "沖繩, 日本, OKA, Naha Airport",
                    key: "沖繩"
                },
                {
                    label: "胡志明市, 越南, SGN, Tan Son Nhat Int'l Airport",
                    key: "胡志明市"
                },
                {
                    label: "曼谷, 泰國, BKK, 素萬那普國際機場",
                    key: "曼谷"
                },
                {
                    label: "新加坡, 新加坡, SIN, Changi Airport",
                    key: "新加坡"
                },
                {
                    label: "澳門, 澳門, MFM, Macau International Airportn",
                    key: "澳門"
                },
            ],
        }
    },
    methods: {
        handleSelect(key) {
            this.start = key
            if (key.includes("洛杉磯")) {
                this.$router.push('/LocationLA')
            }
            if (key.includes("舊金山")) {
                this.$router.push('/LocationSFO')
            }
            if (key.includes("函館")) {
                this.$router.push('/LocationHakodate')
            }
            if (key.includes("大阪")) {
                this.$router.push('/LocationKyoto')
            }
            if (key.includes("沖繩")) {
                this.$router.push('/LocationOkinawa')
            }
            if (key.includes("胡志明市")) {
                this.$router.push('/LocationHoChiMinh')
            }
            if (key.includes("曼谷")) {
                this.$router.push('/LocationBangkok')
            }
            if (key.includes("新加坡")) {
                this.$router.push('/LocationSingapore')
            }
            if (key.includes("澳門")) {
                this.$router.push('/LocationMacao')
            }
            console.log(key);
            // this.end = ""
            // if( this.start !== "台北, 台灣, TPE" ){
            //     this.end == "台北, 台灣, TPE"
            // }
            // console.log(this.data.option);
        },
        // search() {
        //     let departureDate = document.getElementById("departureDate")
        //     let arrivalDate = document.getElementById("arrivalDate")
        //     let departureLocation = document.getElementById("departureLocation")
        //     let arrivalLocation = document.getElementById("arrivalLocation")
        //     let isOneway = document.getElementById("isOneway")
        //     axios({
        //         url: 'http://localhost:8080/airplainInfo/search',
        //         methods: 'POST',
        //         withCredentials: true,
        //         headers: {
        //             'Contect-Type': 'applicatoin/json'
        //         },
        //         data: {
        //             departureDate: this.departureDate,
        //             arrivalDate: this.arrivalDate,
        //             departureLocation: this.departureLocation,
        //             arrivalLocation: this.arrivalLocation,
        //             isOneway: this.isOneway
        //         },
        //     }).then(res => {
        //         console.log(data);
        //     })
        // },
        data() {
            this.$router.push('/AirTime')
        },
        ...mapActions(counter, ['setLocation'])
    },
    computed: {
        ...mapState(counter, ['planeSearchArr'])
    },
    components: {
        NDropdown,
        NButton,
        NDatePicker,
    },
    mounted() {
        this.setLocation("東京")
        console.log(this.planeSearchArr.departureLocation);
    },
});
</script>
<template>
    <div class="main">
        <div class="explore">
            <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <n-button style="background-color: none;" @click="data()">探索：{{ start }}</n-button>
            </n-dropdown>
        </div>
        <div class="ticket">
            <h1>東京 繁華絢麗的東洋之城</h1>
            <button type="button">快速搜索東京機票</button>
        </div>
        <div class="intro">
            <br>
            <p>東京有充滿未來感的摩天大樓、無與倫比的美食和狂野的夜生活，堪稱是座充滿刺激的城市。這座城市以創新而著稱，而城市裡的古老佛教寺廟、傳統茶館和寧靜的花園則可以讓人度過寧靜逍遙的時光，並宣示城市悠久的歷史。前往東京歷史悠久的淺草一日遊，參觀知名的淺草寺，然後沿著隅田川漫步
                (春天的時候這裡有櫻花盛開)。或者也可以去築地場外市場享用吃壽司早餐，狹窄的走道兩側有許多餐廳可供選擇 (由於此處大多數的餐廳會在中午時歇業，因此建議提早抵達)。如果喜歡熱鬧，也想要體驗 Cosplay
                的文化，那就去原宿，或去秋葉原選購電玩和動漫。夜間可以沿著橫丁 (巷弄的意思) 探索，沿途都可以找到氣氛悠閒的居酒屋和小酒吧。當然這裡還有更多精彩的體驗等您探索，請參考以下更多推薦。</p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 26rem;height: 32rem;">
                    <img src="../../public/sabrina/東京鐵塔.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">1958年誕生的東京鐵塔，高333m，當時超過了巴黎的艾菲爾鐵塔，是世界第一高的自立式鐵塔。因為位於東京中心部分的港區，能夠從展望台一覽東京的景色，至今仍然深受東京民眾喜愛的東京地標。令人印象深刻的紅白搭配是依據法律制定的配色，為了讓飛機駕駛在白天能夠清楚地看見鐵塔。而這具有影響力的存在，作為東京地標深受東京民眾喜愛。在2012年東京鐵塔將幾個電波塔機能轉交給東京晴空塔，現在還是有在發送廣播等電波。</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../public/sabrina/明治神宮.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../public/sabrina/淺草寺雷門.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 18rem;">
                    <img src="../../public/sabrina/迪士尼.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../public/sabrina/吉卜力美術館.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../public/sabrina/澀谷天空.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.main {
    background-color: rgb(22, 26, 48);
    width: 100vw;
    height: 200vh;

    .explore {
        width: 100vw;
        height: 10vh;

        button {
            width: 180px;
            height: 40px;
            margin-top: 20px;
        }
    }

    .ticket {
        width: 100vw;
        height: 40vh;
        box-sizing: border-box;
        padding-top: 10px;
        background-image: url("/sabrina/東京.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-color: rgb(22, 26, 48);

        h1 {
            margin-top: 60px;
            margin-left: 440px;
            color: white;
        }

        button {
            width: 160px;
            height: 50px;
            background-color: #a8a29e;
            border: none;
            border-radius: 10px;
            position: absolute;
            left: 60%;
            top: 45%;

            &:hover {
                background-color: #94a3b8;
            }
        }
    }

    .intro {
        width: 70vw;
        height: 20vh;
        background-color: rgb(22, 26, 48);
        color: white;
        margin: 0 auto;
        font-size: 14pt;
        text-align: justify;
    }

    .attractions {
        width: 100vw;
        height: 80vh;
        background-color: rgb(22, 26, 48);
        margin-top: 100px;
        /* display: flex;
        justify-content: center; */

        .attractionsOne {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            margin-bottom: 30px;
        }

        .attractionsTwo {
            /* border: 3px solid white; */
            display: flex;
            justify-content: center;
            width: 100vw;
            height: 40vh;
            /* align-items: center; */
        }
    }
}
</style>