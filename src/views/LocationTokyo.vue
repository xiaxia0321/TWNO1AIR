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
        this.setLocation("東京,日本")
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
            <h1>東京 繁華絢麗的東洋之城</h1>
            <button type="button" @click="data()">快速搜索東京機票</button>
        </div>
        <div class="intro">
            <br>
            <p>東京有充滿未來感的摩天大樓、無與倫比的美食和狂野的夜生活，堪稱是座充滿刺激的城市。這座城市以創新而著稱，而城市裡的古老佛教寺廟、傳統茶館和寧靜的花園則可以讓人度過寧靜逍遙的時光，並宣示城市悠久的歷史。前往東京歷史悠久的淺草一日遊，參觀知名的淺草寺，然後沿著隅田川漫步
                (春天的時候這裡有櫻花盛開)。或者也可以去築地場外市場享用吃壽司早餐，狹窄的走道兩側有許多餐廳可供選擇 (由於此處大多數的餐廳會在中午時歇業，因此建議提早抵達)。如果喜歡熱鬧，也想要體驗 Cosplay
                的文化，那就去原宿，或去秋葉原選購電玩和動漫。夜間可以沿著橫丁 (巷弄的意思) 探索，沿途都可以找到氣氛悠閒的居酒屋和小酒吧。當然這裡還有更多精彩的體驗等您探索，請參考以下更多推薦。</p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/東京鐵塔.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            1958年誕生的東京鐵塔，高333m，當時超過了巴黎的艾菲爾鐵塔，是世界第一高的自立式鐵塔。因為位於東京中心部分的港區，能夠從展望台一覽東京的景色，至今仍然深受東京民眾喜愛的東京地標。令人印象深刻的紅白搭配是依據法律制定的配色，為了讓飛機駕駛在白天能夠清楚地看見鐵塔。而這具有影響力的存在，作為東京地標深受東京民眾喜愛。在2012年東京鐵塔將幾個電波塔機能轉交給東京晴空塔，現在還是有在發送廣播等電波。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/明治神宮.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            在新宿與澀谷之間，有一片綠樹林立的明治神宮占地。循著林木間的步道前進，便可抵達位於中央的神社。走在煙霧瀰漫的森林小道上，必能讓您忘卻自己正置身於東京最紛擾的兩個區域之間。明治神宮是為了供奉於19世紀後半，領導日本現代化的明治天皇與其皇后昭憲太后所建。相當於15個東京巨蛋那麼大的森林裡中種植著日本各地捐贈的10萬棵樹。明治神宮將於2020年迎接鎮座百年。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/淺草寺雷門.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            雷門原本是由平公雅於天慶5年（942年）所建，後來才重建於目前的位置。它在大火災中燒毀以後曾經多次重建，而目前的雷門是由Panasonic的創辦人松下幸之助先生捐贈經費，於1960年重建而成。象徵雷門的巨大紅色燈籠由京都的燈籠製造商所製作，上面刻有讓人第一眼就會注意到的漢字「雷門」。這個紅色燈籠高3.9公尺、寬3.3公尺，重量更有約700公斤，它的雄偉無庸置疑。也千萬別錯過其底部精細的龍形雕刻。
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/迪士尼.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            真正的迪士尼迷都知道，東京迪士尼樂園和東京迪士尼海洋是所有迪士尼樂園中的巔峰之作。即使不是迪士尼的狂熱愛好者，也能在這裡享受快樂而難忘的時光。樂園內擁有專為日本迪士尼樂園獨家打造的眾多景點，能為遊客帶來獨一無二的體驗，去東京遊玩時，這兩大樂園都是必去的打卡景點。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/吉卜力美術館.webp" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            宮崎駿美術館內收藏許多宮崎駿動畫的珍貴畫面，每年都有來自各地的東京旅遊客到訪，只為了一睹宮崎駿美術館的風采。三鷹之森吉卜力美術館坐落於幽靜的叢林裡，以在樹林中「一起來迷路」為建館概念，當您行走在美術館中會驚見許多電影中曾經出現過的場景，立體呈現出最夢幻的童話王國，非常引人入勝。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/澀谷天空.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">澀谷天空，澀谷再開發計畫持續進化中，「SHIBUYA SCRAMBLE SQUARE」（第一期
                            東棟）2019年11月1日正式開幕。建築設計由隈研吾建築都市設計事務所、SANAA事務所等負責監造。「SHIBUYA SCRAMBLE
                            SQUARE」樓高將近230公尺，遠遠超越澀谷HIKARIE和澀谷STREAM的180公尺，成為澀谷最高峰。</p>
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
    height: 220vh;

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
            border:1px solid black;
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
        height: 100vh;
        background-color: rgb(22, 26, 48);
        margin-top: 100px;

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