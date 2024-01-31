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
                {
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京"
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
            if (key.includes("東京")) {
                this.$router.push('/LocationTokyo')
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
        this.setLocation("函館,日本")
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
            <h1>函館 令人心動不已的城市街景、自然風光與特色景點</h1>
            <button type="button" @click="data()">快速搜索函館機票</button>
        </div>
        <div class="intro">
            <br>
            <p>同時擁有人文薈萃的街道景觀與雄奇靈秀的自然風光，便是函館的最大特色。搭乘有軌電車遊覽函館45分鐘，觸目所及皆是最吸引您的魅力景點。在此，您可自由自在輕鬆漫遊，隨意參訪一處歷史古跡，或是享受溫泉樂趣，眺望壯闊美景…。從市區搭乘JR列車約30分鐘，抵達大沼國定公園，感受雄偉大自然的輕柔包圍。
            </p>
            <p>不管春、夏、秋、冬，函館總是準備各種特色慶典活動等候您前往：春天櫻花盛開，櫻花樹下落英繽紛，充滿浪漫情懷；夏天是煙火大會及遊行活動，函館最大型的熱鬧祭典接力登場；時至秋日，楓葉轉紅，請細細品味；入冬後，皚皚白雪覆蓋大地，搭配聖誕節慶及燈光饗宴鮮豔奪目，美不勝收。請盡情享受函館隨四季更迭的不同風貌。
            </p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/函館山觀景臺.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            函館山觀景台，標高334公尺的函館山山頂展望台為函館必訪的名勝景點。由展望台可見函館港與津輕海峽之間的函館市區夜景、座落遠方的駒岳和橫津岳等山景。想目睹日落時刻夢幻美景的遊客多不勝數，因此如想確保最佳拍照地點，建議日落半小時前先抵達展望台。山頂地區即使夏季期間仍稍顯冷涼，建議攜帶薄外套禦寒。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/立待岬.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            立町岬位於函館山東南部，面向津輕海峽，周圍環繞著大海，海拔約30公尺的斷崖峭壁巍然聳立，景色蔚為壯觀。天氣晴朗時，可遙望津輕海峽對面的下北半島，還能將函館街景盡收眼底。這片壯闊的景觀不僅是許多小說和故事的背景，也因日本近代文學知名的歌人與謝野寬和與謝野晶子夫婦曾造訪而立有歌碑，而成為文學迷的聖地。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/五稜郭公園.webp" class="card-img-top" alt="..." style="height: 260px;">
                    <div class="card-body">
                        <p class="card-text">
                            五稜郭是函館的主要觀光景點之一。它於 1864 年建造做為中央政府的地方辦事處。幾年後封建時代結束。在日本星形的西式要塞相當罕見。現在五稜郭是得天獨厚的緑色公園，人們會到這裡放鬆、享受愉快時光。五稜郭有許多迷人之處，例如，歷史、櫻花、散步，以及冬季的點燈盛事。來這裡觀光，您會有個美好的日式體驗。
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/湯倉神社.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            函館最有名的溫泉區－湯川溫泉，其發源地就是位於溫泉街口的「湯倉神社」。湯倉神社中祭祀的神有「大己貴神」和「少彥名神」。據說此二神並肩協力建造和經營了日本國土，給人類和家畜制定了治病的療法。神社內還提供非常有特色的釣烏賊抽籤，以及向神兔求籤活動。特色的求詩籤活動以外，現場也有販售許多可愛的御守、伴手禮。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/金森紅磚倉庫.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            「金森紅磚倉庫」的前身起源於日本明治末期，是當時於函館成立的營業倉庫群改建而成的綜合休閒設施。所有的金森紅磚倉庫面向美麗的港灣整齊排列，是函館的代表風景之一。外觀保留著古典風味；內部經過裝潢，十分時髦具現代感，現作為啤酒廣場、美食餐館、及大型購物中心。夜晚透過燈光裝飾，呈現與白天不同的風情，適合散步徜徉。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/函館公民會所.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">北海道函館地區有著濃濃的異國風情，還有各式的西方建築可以欣賞。而舊函館區公會堂（旧函館区公会堂），就坐落在俯瞰函館港的山丘上，具有左右對稱的殖民地建築風格，以藍灰色和黃色為特色，是國家的重要文化財產。由於從函館具有代表性的坡道之一「基坂」下方，往上眺望的景色相當壯觀，因此成為元町的地標。將具有代表性的和洋元素融合進建築設計，在貴賓室和130坪大廳等處，至今仍保留了當時華麗的氣氛，是完美的將日本和西洋風格融合的重要文化財產。</p>
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
        background-image: url("../../public/sabrina/函館.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;

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
            left: 45%;
            top: 45%;

            &:hover {
                background-color: rgb(127, 199, 217);
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
            text-align: left;
        }

        .attractionsTwo {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            box-sizing: border-box;
            padding-top: 150px;
            text-align: left;
        }
    }
}
</style>