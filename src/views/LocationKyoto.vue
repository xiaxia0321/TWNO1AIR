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
                    key: "東京, 日本, NRT, Narita Internation"
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
            if (key.includes("東京")) {
                this.$router.push('/LocationTokyo')
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
        this.setLocation("大阪,日本")
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
            <h1>大阪 歡樂、華麗，又熱鬧有趣</h1>
            <button type="button" @click="data()">快速搜索大阪機票</button>
        </div>
        <div class="intro">
            <br>
            <p>雖然從東京乘坐新幹線到大阪只是很短的一段車程，但大阪卻與日本的首都有著截然不同的風情。大阪，一個民風淳樸、民眾坦率的地方。這裡夜生活豐富多彩，美食讓人流連忘返。
                除了購物血拼和現代景點外，大阪還有歷史的一面，其中最引人注目的就是大阪城。這座城堡是進一步探尋日本歷史的理想之地，也是在風景優美的街區漫步的好地方，尤其是在 4 月賞櫻季，此時櫻花盛開，氣候宜人。</p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/黑門市場.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            黑門市場可以說是道地美食的聚集地，不僅有CP值超高的海鮮、生魚片，連專人幫你現烤的日本和牛也可以在這裡找到！日本的和牛真的是入口即化，如果你是愛尋訪美食的旅者，就千萬別錯過這裡！
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/通天閣.webp" class="card-img-top" alt="..." style="height: 250px;">
                    <div class="card-body">
                        <p class="card-text">
                            通天閣始建於二戰時期，之後被大火燒毀，殘存的部分也被拿去給戰爭時使用，現今的的通天閣為1956年重建而成，通天閣有又被暱稱為「大阪艾菲爾鐵塔」，這棟鋼筋外觀的建築物以曾擁有全世界最早的圓形電梯和日本最大時鐘而聞名。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/天守閣.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            若提到大阪城內重要的象徵，天守閣絕對是其中之一。過去它曾遭受火災等因素毀損，後經由民間集資重建後，才能以現在的面貌與大家重見，並被列為重要的文化財。而現在的天守閣主要被規劃成歷史博物館，並且開放民眾們參觀，主要有與豐臣秀吉時代及生涯相關史料介紹、大阪城及城堡資訊、大坂夏之陣圖屏風的世界等。
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 28rem;">
                    <img src="../../public/sabrina/環球影城.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            日本環球影城距離大阪市中心非常近，交通非常方便，若從大阪站坐JR出發，只要20分鐘就可以到達，因此是到大阪旅遊的必去行程，自從2014年哈利波特樂園進駐後，更是吸引了大批的遊客。2022年全新開幕的任天堂世界園區更是解封後，大家爭相朝聖的園區。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 28rem;">
                    <img src="../../public/sabrina/道頓崛.webp" class="card-img-top" alt="..." style="height: 250px;">
                    <div class="card-body">
                        <p class="card-text">
                            道頓堀的逛街則是比較適合喜歡吃美食的朋友，包含台灣人很愛逛的日本商店：唐吉軻德也在這裡。大家很愛拍的日本奔跑人廣告看板，也就是日本糖果點心大牌：固力果的商標喔～算是知名的打卡地標了！愛買、愛吃日本美食的就不能錯過啦～
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 28rem;">
                    <img src="../../public/sabrina/海遊館.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">大阪海遊館場館內，有「北極圏」「福克蘭群島」「馬爾地夫群島」三個區，構成可以體驗「看、聽、聞、摸」的新體感型展示區域，除了可以近距離接觸生物之外，還可以感受北極圈的生活情景。千萬別小看這間位於天保山的海遊館，他可是堪稱全世界最大的水族館喔！</p>
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
        background-image: url("/sabrina/大阪1.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        h1 {
            margin-top: 60px;
            color: white;
        }

        button {
            width: 160px;
            height: 50px;
            background-color: rgb(255, 176, 176);
            border: 1px solid black;
            border-radius: 10px;
            position: absolute;
            left: 45%;
            top: 45%;

            &:hover {
                background-color: rgb(239, 236, 236);
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