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
                    label: "東京, 日本, NRT, Narita Internation",
                    key: "東京"
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
            if (key.includes("東京")) {
                this.$router.push('/LocationTokyo')
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
            <h1>舊金山 反主流文化與高科技的交會之所</h1>
            <button type="button" @click="data()">快速搜索東京機票</button>
        </div>
        <div class="intro">
            <br>
            <p>在古裡古怪的舊金山，喚霧大賽可能與交響樂、歌劇、芭蕾舞季的開幕盛會一樣吸引人。從聯合廣場 (Union Square) 到北灘 (North Beach) 到日本城
                (Japantown)，隨處都是獨具魅力的街區。這座城市之所以長成今日的模樣，多虧了 1960 年代後期裡垮掉的一代 (Beat Generation) 作者 - 愛之夏 (Summer of Love)
                以及其同伴的嘻哈精神，為這座城市型塑。舊金山也是世界上的美食聖地之一，部分原因在於多元文化的影響和鄰近新鮮的食材。
                它是一個容納多元反差的城市──新與舊，尖端與悠閒，都會與鄉村。這個城市不斷在演變。加上獨特又充滿活力的著名景點，如金門大橋 (Golden Gate Bridge)、漁人碼頭 (Fisherman’s
                Wharf)、惡魔島 (Alcatraz Island) 以及引人入勝的街區，舊金山不只獨一無二，更深具創意，令人神魂顛倒。</p>
        </div>
        <div class="attractions">
            <div class="attractionsOne">
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/金門大橋.jpeg" class="card-img-top" alt="..." style="height: 240px;">
                    <div class="card-body">
                        <p class="card-text">
                            1937年興建的金門大橋，曾是世界上最大的單孔吊橋，現在已是舊金山的代表性地標。紅色的橋身，連接了舊金山灣和金門海峽，知名電影《猩球崛起》、《X戰警：最後戰役》、《加州大地震》等，都曾來此取景。你可以在橋上欣賞整個舊金山市區，也可以找一個好地點遠觀金門大橋，僅舊金山是美國著名的霧都，來舊金山能不能看到金門大橋也需要一點緣分呀！
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/加州科學院.jpeg" class="card-img-top" alt="..." style="height: 240px;">
                    <div class="card-body">
                        <p class="card-text">
                            加州科學院是全美第一座綜合海陸空生物的自然博物館，館內設有水族館、世界上最大的天文館、自然歷史博物館和熱帶雨林。整個巨大的建築包括四個展館，從熱帶雨林、海底世界、宇宙星空到自然歷史。你可以在天文館體驗沉浸式的太空展覽，探索地球之外的神奇宇宙；在水族館探究2000多種魚類生活的水底珊瑚礁世界；在自然歷史博物館裡觀賞數以千計的動物標本；在現場觀看科學家視頻，通過數字技術領略自然界的種種奇蹟。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 32rem;">
                    <img src="../../public/sabrina/惡魔島監獄.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">
                            阿爾卡特拉斯島曾經是監禁美國兇惡罪犯的聯邦監獄，今日監獄與牢房都已重新修整，成為舊金山受歡迎的觀光景點。旅程從你搭上渡輪的那一刻開始，你將航向阿爾卡特拉斯島，印地安原住民曾將之視為不祥之島，敬而遠之，該島因而有「惡魔島」之稱，持著語音導覽，獲獎內容為你細細解說島嶼的精彩故事。
                        </p>
                    </div>
                </div>
            </div>
            <br><br><br><br>
            <div class="attractionsTwo">
                <div class="card" style="width: 24rem;height: 27rem;">
                    <img src="../../public/sabrina/現代藝術博物館.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            舊金山現代藝術博物館，是美國西海岸最大的珍藏現代藝術品的展館，也是世界上最有影響力的藝術館之一。館藏超過3.3萬件，範圍涵蓋攝影、繪畫雕塑、建築設計及媒體藝術多個領域，典藏許多大師級藝術家作品，例如歐美知名畫家亨利·馬蒂斯、安迪·沃荷、保羅·克利等；同時還有許多加州當地畫家的著作，讓你盡情徜徉在現代藝術的氛圍中，領略舊金山前衛的藝術精髓。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 27rem;">
                    <img src="../../public/sabrina/渡輪大廈.webp" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            渡輪大廈位在內河碼頭與市場街的交會處，是一個結合渡輪站和市集商場的地方，時尚的建築設計，從市場街你可以看到建築上方仿天主教堂的大型鐘樓，整點你可以聽到鐘聲。每的週二、週四、週六，都有農夫市集，可以挑選新鮮的當地食材，品嚐舊金山街頭小吃，已成舊金山人週六必去場所。
                        </p>
                    </div>
                </div>
                <div class="card" style="width: 24rem;height: 27rem;">
                    <img src="../../public/sabrina/金門公園.jpeg" class="card-img-top" alt="..." style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">金門國家休閒公園是位在舊金山海邊的一個森林公園，也是全世界最大的人工公園，一大片的生態森林，裡頭有日式茶園、植物園、美術館、博物館，還可以划船、騎馬、打網球和高爾夫球，和紐約中央公園並列為美國東岸和西岸最具代表性的兩大綠地。每年八月Outside Lands音樂藝術節皆在此舉辦，為期三天的盛會，吸引世界各地的樂迷前來朝聖。</p>
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
        background-image: url("/sabrina/舊金山.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

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
            left: 45%;
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