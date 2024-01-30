<script>
import { defineComponent, ref } from 'vue'
import { NDropdown, NButton, NDatePicker } from 'naive-ui'

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
                    key: "洛杉磯 (美國), LAX, Los Angeles International Airport",
                },
                {
                    label: "舊金山, 美國, SFO, San Francisco International Airport",
                    key: "舊金山, 美國, SFO, San Francisco International Airport"
                },
                {
                    label: "函館, 日本, HKD, Hakodate Airport",
                    key: "函館, 日本, HKD, Hakodate Airport"
                },
                {
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京, 日本, NRT, Narita Internation"
                },
                {
                    label: "大阪, 日本, KIX, Kansai International Airport",
                    key: "大阪, 日本, KIX, Kansai International Airport"
                },
                {
                    label: "沖繩, 日本, OKA, Naha Airport",
                    key: "沖繩, 日本, OKA, Naha Airport"
                },
                {
                    label: "胡志明市, 越南, SGN, Tan Son Nhat Int'l Airport",
                    key: "胡志明市, 越南, SGN, Tan Son Nhat Int'l Airport"
                },
                {
                    label: "曼谷, 泰國, BKK, 素萬那普國際機場",
                    key: "曼谷, 泰國, BKK, 素萬那普國際機場"
                },
                {
                    label: "新加坡, 新加坡, SIN, Changi Airport",
                    key: "新加坡, 新加坡, SIN, Changi Airport"
                },
                {
                    label: "澳門, 澳門, MFM, Macau International Airportn",
                    key: "澳門, 澳門, MFM, Macau International Airport"
                },
            ],
            range: ""
        }
    },
    methods: {
        handleSelect(key) {
            this.start = key
            console.log(start)
            // console.log(key)
        },
        handleSelectTwo(key) {
            this.end = key
            console.log(start)
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
        background-image: url("/sabrina/澳門.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 1600px;

        h1 {
            margin-top: 60px;
            color: white;
        }

        button {
            width: 160px;
            height: 50px;
            background-color: #a8a29e;
            border: 1px solid black;
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