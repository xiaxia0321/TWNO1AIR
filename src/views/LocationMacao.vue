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
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京"
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
            if (key.includes("東京")) {
                this.$router.push('/LocationTokyo')
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
        this.setLocation("澳門,澳門")
        console.log(this.planeSearchArr.departureLocation);
    },
});
</script>
<template>
    <div class="main">
        <div class="explore">
            <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <n-button style="background-color: white;" @click="handleSelect()">探索：{{ start }}</n-button>
            </n-dropdown>
        </div>
        <div class="ticket">
            <h1>澳門 超乎想像之旅</h1>
            <button type="button" @click="data()">快速搜索澳門機票</button>
        </div>
        <div class="intro">
            <br>
            <p>澳門充滿了無限的驚喜，市容金碧輝煌，隱含著無限的魅力。雖然這個城市小巧，卻融合了多種多樣的體驗，融合了中國傳統和葡萄牙文化的影響，吸引著遊客的目光。現代建築與歷史悠久的地標交相輝映，繁華的街道生機勃勃。
                澳門是世界旅遊和休閒的中心，任何遊覽行程都可以輕鬆融合美食、體育賽事、藝術節、創意活動等等。澳門各方面都引人的魅力，是一個令人嚮往的旅遊勝地，喜愛探索的人們可以發現它真正的魅力所在。</p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 31rem;">
                    <img src="../../public/sabrina/大三巴牌坊.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            澳門地標性建築大三巴牌坊，前身是聖保祿大教堂，經歷三次大火後只剩下前壁和石階，因此被稱為牌坊。2005年成功申報為聯合國世界文化遺產，是旅客遊澳門的必去景點之一。牌坊後方是天主教藝術博物館與墓室，不少澳門教會的珍貴文物都會在此展出。牌坊前方的一整條斜路則是著名的手信街和美食街，不僅買齊澳門必買伴手禮，還提供試吃！葡撻、雞蛋仔、木糠布丁等澳葡小吃也可以在這裏找到唷！
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 31rem;">
                    <img src="../../public/sabrina/玫瑰聖母堂.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            參觀完龍環葡韻住宅式博物館，一定要記得沿路上坡走，在山丘頂端有一座外觀呈現馬卡龍黃的教堂，看起來相當典雅浪漫，這座教堂就是氹仔唯一的天主教堂——嘉模聖母堂。嘉模聖母堂樓高三層，佔地約兩千多平方公尺，最頂端為鐘樓，面臨大海，在周圍大量植物襯托之下顯得更加美麗莊嚴。當年嘉模聖母堂是為了氹仔當地的信徒們建造而成，至今除了觀光客外，仍有許多居民會來這裡舉行婚禮。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 31rem;">
                    <img src="../../public/sabrina/議事亭前地.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            被列入世界文化遺產的議事亭前地，是澳門繁華的中心地段。特色的葡國石磚拼出來的波浪地舖滿整個廣場，四周都是顏色清新的葡萄牙建築物，除了觀光外，這裏也有著眾多品牌專賣店和澳門特色美食，是來到澳門一定不能錯過的特色景點。
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/東望洋燈塔.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            真澳門八景之一，位於東望洋山上的東望洋燈塔，是世界文化遺產、東望洋山的三大名勝古蹟之一，也是中國沿海地區最古老的現代燈塔。東望洋燈塔19世紀末就開始被使用，至今仍屹立不搖，是航海人士的照明燈，且還能夠於危急時刻向大眾發布風暴消息。因為地勢極具優勢，來到這裡，可以眺望整個澳門美景。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/澳門旅遊塔.webp" class="card-img-top" alt="..." style="height: 230px;">
                    <div class="card-body">
                        <p class="card-text">
                            澳門旅遊塔是澳門最知名的景點之一，高度為338米，共有61層樓，為全球排名第十高的獨立式觀光塔。澳門旅遊塔座落在南灣新填海區與珠江口，這裡不僅能自高處俯瞰澳門與珠江三角洲的風景，更因為它是結合了旅遊觀光、購物、展演、會議、餐飲娛樂於一處的綜合設施，塔內應有盡有的多樣化服務提供觀景外更多元的選擇。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/澳門巴黎人.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">要說澳門的酒店有多浮誇，澳門巴黎人將巴黎艾菲爾鐵塔以1/2等比例縮小復刻而成的巴黎人鐵塔絕對榜上有名，可說是澳門巴黎人標誌性的地標！巴黎人鐵塔分為兩個觀景台，7樓觀景台為免費入場，37樓則需要購票，上去之後路氹金光大道的夜景盡收眼底，真的不會讓人後悔！</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.main {
    background-color: rgb(22, 26, 48);
    width: 100vw;
    height: 210vh;

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
        background-image: url("/sabrina/澳門.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 1600px;
        position: relative;

        h1 {
            margin-top: 60px;
            color: white;
        }

        button {
            width: 160px;
            height: 50px;
            background-color: rgb(253, 240, 209);
            border: 1px solid black;
            border-radius: 10px;
            position: absolute;
            left: 45%;
            top: 45%;
            // color: white;

            &:hover {
                background-color: rgb(255, 176, 176);
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
        height: 100vh;
        background-color: rgb(22, 26, 48);
        margin-top: 70px;

        .attractionsOne {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            box-sizing: border-box;
            padding-bottom: 200px;
            text-align: left;
        }

        .attractionsTwo {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            box-sizing: border-box;
            padding-top: 180px;
            text-align: left;
        }
    }
}
</style>