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
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京"
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
            if (key.includes("胡志明市")) {
                this.$router.push('/LocationHoChiMinh')
            }
            if (key.includes("東京")) {
                this.$router.push('/LocationTokyo')
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
        this.setLocation("曼谷,泰國")
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
            <h1>曼谷 同時兼具古老氣息和現代風情的東方大城</h1>
            <button type="button" @click="data()">快速搜索曼谷機票</button>
        </div>
        <div class="intro">
            <br>
            <p>這個同時兼具古老氣息和現代風情的東方大城，是個處處充滿著讚歎與美麗的地方。這個城市是於1782年由卻克里(Chakri)王朝的帝王所建，面積為1,568平方公里，現為首都，也是政治、商業與文化中心。不僅在地理上位居輻轃點，更是旅遊觀光的重要據點。曼谷目前人口約700萬人，湄南河貫穿整個曼谷市，為曼谷市帶來了繁榮與商機，曼谷也因此贏得了『東方威尼斯』的美名。
            </p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/鄭王廟.jpeg" class="card-img-top" alt="..." style="height: 240px;">
                    <div class="card-body">
                        <p class="card-text">
                            鄭王廟(Wat Arun)位於泰國中部地區曼谷市艾縣、湄南河支流昭披耶河西岸，又稱為「鄭王寺」、「黎明寺」或「曉廟」，供奉印度教中的黎明神－鄭王，是泰國規模最大的大乘舍利式塔，擁有「泰國艾菲爾鐵塔」的美稱；鄭王廟豐富的歷史文化，是孟庫國王時代最令人讚嘆的文化遺產，也是昭披耶河畔最古老的建築、參觀人數最多的寺廟，鄭王廟的建築特色和人文歷史，更是來到泰國曼谷旅遊的民眾不可不去的景點之一。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/曼谷大皇宮.jpeg" class="card-img-top" alt="..." style="height: 300px;">
                    <div class="card-body">
                        <p class="card-text">
                            曼谷大皇宮（英文：The Grand Palace）始建於1782年，曾經是泰國君主的官方住所，自18世紀拉瑪一世王朝以來一直作為皇家宮殿。皇宮位於昭披耶河畔，占地面積達218,400平方公尺，宮殿內含了許多政府辦公室、寺廟和博物館，以及最著名的玉佛寺。大皇宮的建築風格主要源於大城時期，而後在拉瑪五世時期，開始引入混合歐洲和泰國傳統元素的風格，為了適應不同的泰王的需求，宮殿經過了多次的擴建與改造，形成了今天我們所看到的壯麗景象。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/金湯普森博物館.jpeg" class="card-img-top" alt="..." style="height: 240px;">
                    <div class="card-body">
                        <p class="card-text">
                            金湯普森博物館，如果你喜歡泰國絲綢製品質感，那絕對不能不認識Jim Thompson(金。湯普森)這個人，因為把泰國絲綢帶入國際舞台的就是他，從軍中退伍後就定居曼谷經營手工絲綢生意，因此也有泰絲商人、藝品收藏家及建築師等多重身分，而Jim Thompson House就是他位於曼谷的住宅，這些傳統木造建築都超過百年以上歲月，加上裡面擺放非常多的藝術收藏品，推薦對建築及藝術品感興趣的朋友前來。
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 24rem;">
                    <img src="../../public/sabrina/恰圖恰.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            恰圖恰市集是超多人曼谷自由行絕對會去挖寶的地方，甚至為了恰圖恰週末市集旅程才特別跨假日，市集約有15個足球場大，約有15000個攤位，涵蓋了很多泰國曼谷必買、必吃的各種商品，累了裏頭也有泰式按摩店。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 24rem;">
                    <img src="../../public/sabrina/河濱夜市.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            泰國曼谷的Asiatique河濱碼頭夜市，地點就位在昭皮耶河畔，也是個曼谷超熱門人氣景點之一，超推薦可以來這裡看夜景逛夜市吃美食，而且一旁還有摩天輪，更增添了一份浪漫的氣氛。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 24rem;">
                    <img src="../../public/sabrina/星羅百麗宮.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">Siam Paragon（暹羅百麗宮），又被稱作是每個購物狂的天堂，座落於曼谷捷運BTS旁，也是OneSiam暹羅商圈三大購物中心的其中之一，為一個熱鬧的購物、美食及旅遊目的地。</p>
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
        background-image: url("/sabrina/曼谷.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 1600px;
        position: relative;

        h1 {
            margin-top: 60px;
            margin-left: 440px;
            color: white;
        }

        button {
            width: 160px;
            height: 50px;
            background-color: rgb(243, 215, 202);
            border: 1px solid black;
            border-radius: 10px;
            position: absolute;
            left: 60%;
            top: 45%;

            &:hover {
                background-color: rgb(230, 164, 180);
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
        margin-top: 25px;

        .attractionsOne {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            .card-text{
                text-align: left;
            }
        }

        .attractionsTwo {
            display: flex;
            justify-content: space-evenly;
            width: 100vw;
            height: 40vh;
            box-sizing: border-box;
            padding-top: 180px;
            .card-text{
                text-align: left;
            }
        }
    }
}
</style>