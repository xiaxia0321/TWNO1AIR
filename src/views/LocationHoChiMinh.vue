<script>
import { defineComponent, ref } from 'vue'
import { NDropdown, NButton, NDatePicker } from 'naive-ui'
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default defineComponent({
    data() {
        return {
            start: "",
            end: "",
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
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京"
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
            range: ""
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
            if (key.includes("東京")) {
                this.$router.push('/LocationTokyo')
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
        },
        // handleSelectTwo(key) {
        //     this.end = key
        //     console.log(start)
        //     console.log(key)
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
        this.setLocation("胡志明,越南")
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
            <h1>胡志明市 東方小巴黎</h1>
            <button type="button" @click="data()">快速搜索胡志明機票</button>
        </div>
        <div class="intro">
            <br>
            <p>東方小巴黎-胡志明市在十八世紀時在法國人經營殖民下，生活習慣深受影響，市容更是十足的法國風味。西貢是法國在越南最早的殖民地，處處可見法式基礎建築架構融入當地文化色彩，更因歷經戰事、革新運動等重大變化，今天的胡志明市除了接受外來文化薰陶之外
                仍保有自我風格強烈的民族情懷。法國人在這裡用心經營，建造了無數美麗的法式藝術建築，也把法國式的生活習慣和情趣烙印在西貢的舉手投足之間，至今南越人仍然習慣稱它為西貢。</p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/聖母大教堂.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            這座大家稱為紅教堂的西貢聖母大教堂，是遊客必到的景點之一！紅教堂是胡志明市最大的教堂，教堂的設計充滿法國哥特式建築風格，而內部亦內部宏偉壯觀，以高大的拱頂和華麗的彩色玻璃窗聞名，融合法國和越南文化，記得要在這裡打個卡留念。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/粉紅教堂.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            除了紅教堂，胡志明市另一個最有名的教堂便是粉紅教堂。粉紅教堂原名是耶穌聖心堂，因為它粉紅色的外表經常被大家稱為粉紅教堂。教堂的粉紅色十分鮮豔，少女心滿滿，是很夢幻的打卡點，完全不像現實世界會出現的建築！
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 26rem;">
                    <img src="../../public/sabrina/西貢歌劇院.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            西貢歌劇院是胡志明市標誌性的法國殖民時期建築，採用法國華麗的建築風格，因此是胡志明市必到的景點之一。歌劇院內仍然會舉辦各式娛樂表演，而最具特色的表演便是 AO Show。AO Show 是竹藝馬戲團節目，高品質的表演、部落音樂、令人難以置信的雜技為大家展現迷人故事，還可以藉此了解越南文化，非常值得看！
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 28rem;" >
                    <img src="../../public/sabrina/咖啡公寓.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            在胡志明市這棟老舊的建築裡，開滿了現代裝潢的咖啡店。咖啡公寓最大的特色是它的外觀，可以看看一格格像盒子一樣的店鋪，看到每間風格各異的咖啡店。大家亦可以進不同咖啡店打卡，順道喝杯飲料歇腳。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 28rem;">
                    <img src="../../public/sabrina/濱城市場.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            濱城市場是胡志明的大型傳統市場，裡面有多達1600個攤位，販賣各式各樣的產品，包括乾貨、鮮花、零食、衣服、鞋、紀念品等，亦有很多小食攤檔，可以一嚐胡志明的街頭小吃。附近有不少可以唱錢，而且匯率不錯的銀樓，大家可以安排第一站先到濱城市場。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 28rem;">
                    <img src="../../public/sabrina/西貢河.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">西貢河是胡志明市主要的河流之一，在不少熱門景點例如摩天觀景台、濱城市場、粉紅教堂等都在西貢河附近。在日間，大家可以坐船遊覽西貢河，欣賞沿路風景，亦可以參與SUP體驗；而在晚上，大家則可以參加晚餐遊船， 一邊品嚐越南的地道菜式如竹筍蝦、烤帶子、烤豬肉等，一邊欣賞船上的表演，還可以看到胡志明的夜景，是必試的體驗！</p>
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
        background-image: url("/sabrina/胡志明市.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 2000px;

        h1 {
            margin-top: 60px;
            color: white;
        }

        button {
            width: 160px;
            height: 50px;
            background-color: rgb(153, 188, 133);
            border: 1px solid black;
            border-radius: 10px;
            position: absolute;
            left: 43%;
            top: 45%;

            &:hover {
                background-color: rgb(224, 204, 190);
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
        margin-top: 50px;

        .attractionsOne {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            text-align: left;
        }

        .attractionsTwo {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            box-sizing: border-box;
            padding-top: 90px;
            text-align: left;
        }
    }
}
</style>