<script>
export default {
    data() {
        return {
        }
    },
}
</script>
<template>
    <div class="search">
        <div class="searchFor">
            <br>
            <h1>搭乘樂狗航空從台北飛往洛杉磯 ，自 TWD27,052* 起！</h1>
            <br><br>
            <select>
                <option value="">單程</option>
                <option value="">來回</option>
            </select>
            <p></p><input type="search" placeholder="出發地：國家/地區、城市或機場" class="departure">　<i
                class="fa-solid fa-right-left"></i>
            <i class="fa-solid fa-location-dot"></i>
            <input type="search" placeholder="目的地：國家/地區、城市或機場" class="destination">　
            <input type="date" placeholder="出發" class="goTime">　
            <input type="date" placeholder="回程" class="backTime">　
            <button type="button" class="searchBtn">搜尋</button>　
        </div>
    </div>
    <div class="content">
        <div class="ticket">
            <span class="top">去程：臺北-舊金山</span>
            <div class="go">
                <p>　　經濟艙</p>
                <p>　　JX012　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　10小時45分鐘</p>
                <p>　　2024年2月1日　　　　　　　　　　　　　　　　　　　　　　　　　　　　　2024年2月1日</p>
                <h3>　23:30　　　　　　　　　　　　　　　　　　18:15</h3>
                <h3>　TPE　　　　　　　　　　　　　　　　　　　SFO</h3>
                <div class="goBtn">
                    <button type="button">訂購</button>
                </div>
            </div>
            <br>
            <span class="bottom">回程：舊金山-臺北</span>
            <div class="back">
                <p>　　經濟艙</p>
                <p>　　JX011　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　13小時50分鐘</p>
                <p>　　2024年2月24日　　　　　　　　　　　　　　　　　　　　　　　　　　　　　2024年2月26日</p>
                <h3>　23:40　　　　　　　　　　　　　　　　　　05:30</h3>
                <h3>　SFO　　　　　　　　　　　　　　　　　　　TPE</h3>
                <div class="backBtn">
                    <button type="button">訂購</button>
                </div>
            </div>
            <div class="notice">
                <br>
                <h4>注意事項</h4>
                <p>1、來回行程之票價產品價格是以各航段分開顯示，各航段之價格並非單程票價，該顯示價格僅為提供計算所購買的票價產品之參考。</p>
                <p>2、各航段如選擇不同之票價產品組合時，相關收費標準以較嚴格者為主。例如: 航段中包含全額與基本之票價產品組合時，相關手續費用需依照「基本」票價產品規範收取。</p>
                <p>3、兒童旅客的改票/退票/未登機手續費為成人旅客收費的75%；嬰兒旅客的改票/退票手續費為成人旅客收費的10%。</p>
                <p>4、樂狗航空保留隨時修訂或終止各種票價產品、優惠及相關規則之權利，詳見「運送條款」。</p>
                <p>5、以上規定僅適用於搭乘樂狗航空實際營運之航班。</p>
                <p>6、樂狗航空關心每位旅客的健康，如有發燒、咳嗽、呼吸急促等身體不適，請暫緩搭機。各國入境相關規定及簽證須知，請參考「外交部領事事務局」。</p>
                <p>7、搭機前，務必先行確認目的地之檢疫和入境規範 (最新相關規定與法令仍應以各國政府公告為主) ，詳見「最新旅遊限制相關規定」。</p>
                <p>8、機票折扣僅適用於機票票價，不適用於各項附加費(包含但不限於燃油附加費、兵險、指定日期加價、停留點加價等)、服務費(包含但不限於訂位服務費、機場服務費、旅客服務費等)、手續費(包含但不限於改票、退票、未登機手續費等)與各地機場稅金與政府規費等。
                </p>
            </div>
        </div>
        <div class="attraction">
            <br><br><br>
            <img src="/sabrina/舊金山.jpeg" alt="">
            <h4>舊金山，反主流文化與高科技的交會之所</h4>
            <p>在古裡古怪的舊金山，喚霧大賽可能與交響樂、歌劇、芭蕾舞季的開幕盛會一樣吸引人。從聯合廣場 (Union Square) 到北灘 (North Beach) 到日本城
                (Japantown)，隨處都是獨具魅力的街區。這座城市之所以長成今日的模樣，多虧了 1960 年代後期裡垮掉的一代 (Beat Generation) 作者 - 愛之夏 (Summer of Love)
                以及其同伴的嘻哈精神，為這座城市型塑。舊金山也是世界上的美食聖地之一，部分原因在於多元文化的影響和鄰近新鮮的食材。
                它是一個容納多元反差的城市──新與舊，尖端與悠閒，都會與鄉村。這個城市不斷在演變。加上獨特又充滿活力的著名景點，如金門大橋 (Golden Gate Bridge)、漁人碼頭 (Fisherman’s
                Wharf)、惡魔島 (Alcatraz Island) 以及引人入勝的街區，舊金山不只獨一無二，更深具創意，令人神魂顛倒。</p>
        </div>
    </div>
    <div class="footer">

    </div>
</template>
<style scoped lang="scss">
.search {
    width: 100vw;
    height: 40vh;
    box-sizing: border-box;
    padding-top: 10px;
    background-image: url("/sabrina/舊金山.jpeg");
    background-repeat: no-repeat;
    background-size: cover;

    .searchFor {
        width: 70vw;
        height: 30vh;
        background-color: rgb(7, 102, 7);
        opacity: 0.8;
        margin: 0 auto;
        margin-top: 30px;

        h1 {
            color: white;
        }

        .departure {
            width: 200px;
            height: 60px;
        }

        .destination {
            width: 200px;
            height: 60px;
        }

        .goTime {
            width: 110px;
            height: 60px;
        }

        .backTime {
            width: 110px;
            height: 60px;
        }
    }

    .fa-location-dot {
        position: absolute;
        left: 200px;
    }

}

.content {
    width: 100vw;
    height: 200vh;
    // border: 1px solid green;
    background-color: rgb(22, 26, 48);

    .ticket {
        width: 100vw;
        height: 80vh;
        // border: 1px solid orange;
        box-sizing: border-box;
        padding-top: 20px;

        .top {
            font-size: 26px;
            margin-right: 800px;
            color: white;
        }

        .go {
            width: 70vw;
            height: 25vh;
            background-color: rgb(240, 236, 229);
            border-radius: 10px;
            margin-left: 220px;
            text-align: left;

            .goBtn {
                margin-left: 850px;
                position: absolute;
                bottom: 18%;

                button {
                    width: 100px;
                    height: 40px;
                    border-radius: 10px;
                    background-color: rgb(108, 95, 91);
                    border: 0px;
                    color: white;
                }
            }
        }

        .bottom {
            font-size: 26px;
            margin-right: 800px;
            color: white;
        }

        .back {
            width: 70vw;
            height: 25vh;
            background-color: rgb(240, 236, 229);
            border-radius: 10px;
            margin-left: 220px;
            text-align: left;

            .backBtn {
                margin-left: 850px;
                position: absolute;
                bottom: -15%;

                button {
                    width: 100px;
                    height: 40px;
                    border-radius: 10px;
                    background-color: rgb(108, 95, 91);
                    border: 0px;
                    color: white;
                }
            }
        }

        .notice {
            width: 70vw;
            height: 40vh;
            color: white;
            text-align: left;
            margin-left: 220px;
        }
    }

    .attraction {
        width: 70vw;
        height: 100vh;
        // border: 1px solid palevioletred;
        margin-top: 250px;
        margin-left: 220px;

        img {
            width: 800px;
            height: 500px;
        }

        p {
            color: white;
            text-align: left;
        }

        h4 {
            color: white;
        }
    }
}

.footer {
    width: 100vw;
    height: 30vh;
    // border: 1px solid blue;
    background-color: rgb(49, 48, 77);
}</style>