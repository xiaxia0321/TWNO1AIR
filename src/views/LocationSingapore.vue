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
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京"
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
            if (key.includes("東京")) {
                this.$router.push('/LocationTokyo')
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
            <h1>新加坡 魅力獅城</h1>
            <button type="button" @click="data()">快速搜索新加坡機票</button>
        </div>
        <div class="intro">
            <br>
            <p>於1819年由英國人開拓發展的新加坡在獨立後已成為世上其中一個富裕的國家，港口吞吐量位處世界前列。新加坡的食物使人稱奇，您可以在當地熙攘的小販中心和全日開放的咖啡店中品嚐亞洲各地的廉價美食。新加坡是一個繁榮的現代化都市，高樓星羅棋布，地鐵四通八達，中國、馬來、印度文化共冶一爐。這個花園城市擁有熱帶氣候、美食豐富、購物方便，夜生活多姿多彩，值得您去遊覽；您也可以從這裡出發，繼續到東南亞其他地方出遊。
            </p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 31rem;">
                    <img src="../../public/sabrina/新加坡環球影城.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            台灣人對環球影城這幾個字應該不陌生，新加坡也有個東南亞首座也是唯一的環球影城，而且相較其他環球影城的票價是最便宜的，它位於聖淘沙名勝世界裡，環境充滿著新加坡風情，有各式精彩表演和刺激有趣的遊樂設施，共有「科幻城市」、「古埃及」、「失落的世界」、「遙遠王國」、「馬達加斯加」、「好萊塢」、 「紐約」這7大區塊，
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 31rem;">
                    <img src="../../public/sabrina/新加坡海洋館.jpeg" class="card-img-top" alt="..." style="height: 250px;">
                    <div class="card-body">
                        <p class="card-text">
                            同樣位於聖淘沙名勝世界中，它是世界上最大海洋館之一，高達49個生物棲息地，物種也多達1,000，總共有十萬多隻海洋生物，按照各個海洋地理位置分佈，完整跨越了全世界，同時也能看到接近80種瀕臨絕種的生物，例如：鬼蝠魟、曲紋唇魚和繽紛的海底珊瑚，來這個景點玩，不只是欣賞美麗的海底世界，更希望提倡注重海洋環境的維護。
                        </p>
                    </div>
                </div> 
                <div class="card" style="width: 24rem;height: 31rem;">
                    <img src="../../public/sabrina/動物園.jpeg" class="card-img-top" alt="..." style="height: 250px;">
                    <div class="card-body">
                        <p class="card-text">
                            園區面積為26公頃，園內有超過300種，約2,800隻動物，其中34%是面臨瀕臨絕種的危機，可無數次搭乘遊園車進行區域探索，再者園區規畫很完善，指示牌都是立體動物頭像，而且有非常多的互動類活動，可深入體驗了解新知，還有動物表演跟餵食秀都很精彩，不可錯過一睹珍貴稀有的白老虎，甚至是和紅毛猩猩一起吃早餐的活動！
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/新加坡國家博物館.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            園區面積為26公頃，園內有超過300種，約2,800隻動物，其中34%是面臨瀕臨絕種的危機，可無數次搭乘遊園車進行區域探索，再者園區規畫很完善，指示牌都是立體動物頭像，而且有非常多的互動類活動，可深入體驗了解新知，還有動物表演跟餵食秀都很精彩，不可錯過一睹珍貴稀有的白老虎，甚至是和紅毛猩猩一起吃早餐的活動！
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/新加坡美術館.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            利用新加坡最高法院與政府大廈之間的空間，成為第一個展示並研究19世紀到現在的東南亞藝術文化的美術館，建築本身就是一件藝術品，見證了歷史的痕跡，透過巧妙的改造，以樹枝狀撐起包覆的玻璃天頂，光線充沛，靜謐舒適，館內超過8,000件的藝術藏品，包含繪畫、水彩、版畫、雕塑、當代裝置藝術和錄像等，如果你自詡文青，那麼一定要來薰陶一番！
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 30rem;">
                    <img src="../../public/sabrina/濱海花園.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">整個「濱海灣花園」是由濱海東花園、濱海南花園以及濱海中心花園相結合的城市花園地帶，因為是政府支持，才有辦法發展得如此完善、具規劃姓，整個花園有兩個臨海的建築，分別是「花之穹頂」和「雲霧森林」，使用鋼鐵與玻璃建造，共有38萬株來自世界各地的珍奇花卉，另外在夜晚燈光秀下的「天空樹」，更是美輪美奐，這個由18個高大樹狀環繞的區域，猶如電影阿凡達的幻境般不可思議！</p>
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
        background-image: url("/sabrina/新加坡.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 1600px;
        position: relative;

        h1 {
            margin-top: 60px;
            margin-right: 660px;
            color: white;
        }

        button {
            width: 160px;
            height: 50px;
            background-color: rgb(230, 164, 180);
            border: 1px solid black;
            border-radius: 10px;
            position: absolute;
            left: 22%;
            top: 45%;

            &:hover {
                background-color: rgb(243, 215, 202);
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