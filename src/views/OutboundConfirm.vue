// 去程訂票確認頁
<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      selectedPrice: 0,

    };
  },
  methods: {
    calculateDuration(depatureTime, arriveTime) {
      const [depatureHour, depatureMinute] = depatureTime.split(":").map(Number);
      const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

      // 轉換成分鐘
      const depatureTotalMinutes = depatureHour * 60 + depatureMinute;
      const arriveTotalMinutes = arriveHour * 60 + arriveMinute;

      // 計算差距，考慮跨越午夜的情況
      let durationMinutes = arriveTotalMinutes - depatureTotalMinutes;
      if (durationMinutes < 0) {
        durationMinutes += 24 * 60; // 一天的分鐘數
      }

      // 轉換成小時和分鐘
      const hours = Math.floor(durationMinutes / 60);
      const minutes = durationMinutes % 60;

      return `${hours}小時${minutes}分`;
    },
    chooseSeat(xxx) {
      this.selectedPrice = xxx;
      console.log(this.selectedPrice);
    },
    back() {
      this.$router.push("/AirTime"); //推送至下一頁的路徑
    },
    gogo() {
      this.Order.getPrice = this.selectedPrice;
      this.$router.push("/PassengerInformation"); //推送至下一頁的路徑
    },
    consslog() {
      console.log(this.planeSearchCheack);
    },
  },
  computed: {
    ...mapState(counter, ["plane", "planeSearchCheack", 'Order']),
  },
};
</script>

<template>
  <div class="big">
    <div class="top">
      <i class="fa-solid fa-arrow-left arrow cc" @click="back"></i>
      <h1 @click="consslog()">搜尋票價產品</h1>
      <p>
        1.下述所顯示時間皆為當地時間，票價適用於目前選取的日期與航班，且為所有旅客購買的票價產品總價，包含機票票價、各項附加費與各地機場稅金等。
      </p>
      <p>2.樂GO航空其他銷售通路，如官方App，或許能提供更優惠價格。</p>
      <p>
        3.有關各艙等票價產品適用的免費託運行李額度，詳見「票價產品說明」；其他可能隨超額行李或額外服務收取之費用，請參考「超額行李收費標準」。
      </p>
      <p>4.所選擇的艙等可能在部分航段上無提供服務，請於下方搜尋結果確認艙等及票價。</p>
      <p>
        5.如於班機起飛前24小時內購買頭等艙票價產品，餐點可能無法完全滿足，我們仍將盡力協助提供完整之頭等艙餐食。
      </p>
      <h2>
        去程： <span>{{ planeSearchCheack.ccc.departureLocation }}</span> -
        <span>{{ planeSearchCheack.ccc.arrivalLocation }}</span>
      </h2>
    </div>
    <div class="date">
      <span>{{ planeSearchCheack.ccc.departureDate }}</span>
    </div>
    <div class="mid">
      <div class="m1">
        <div class="a1">
          <p class="p1">JX0840</p>
          <p class="p2">{{ planeSearchCheack.ccc.departureDate }}</p>
          <p class="time">{{ planeSearchCheack.ccc.depatureTime }}</p>
          <p class="nation">{{ planeSearchCheack.ccc.da }}</p>
        </div>
        <div class="a2"><i class="fa-solid fa-arrow-right"></i></div>
        <div class="a3">
          <p class="p1">{{ calculateDuration(planeSearchCheack.ccc.depatureTime, planeSearchCheack.ccc.arriveTime) }}</p>
          <p class="p2">{{ planeSearchCheack.ccc.arriveDate }}</p>
          <p class="time">{{ planeSearchCheack.ccc.arriveTime }}</p>
          <p class="nation">{{ planeSearchCheack.ccc.aa }}</p>
        </div>
      </div>
      <div class="m2">
        <h3>經濟艙</h3>
        <span>TWD</span>
        <span class="money">{{ planeSearchCheack.ccc.price }}</span>
        <span>起</span>
      </div>
    </div>
    <div class="choose">
      <div class="c1">
        <!-- <br> -->
        <span class="s1">TWD</span>
        <span class="s2">{{ planeSearchCheack.ccc.price }}</span>
        <br />
        <button type="" @click="chooseSeat(planeSearchCheack.ccc.price)">選擇</button>
        <p>訂位艙等</p>
        <p class="p1">
          {{ planeSearchCheack.ccc.da }}-{{ planeSearchCheack.ccc.aa }}: 經濟艙
        </p>
        <p>預選座位</p>
        <p class="p1">收費選位</p>
        <p>托運行李</p>
        <p class="p1">1件(每件23公斤)</p>
      </div>
      <div class="c2">
        <span class="s1">TWD</span>
        <span class="s2">{{ planeSearchCheack.ccc.price * 3 }}</span>
        <br />
        <button type="" @click="chooseSeat(planeSearchCheack.ccc.price * 3)">選擇</button>
        <p>訂位艙等</p>
        <p class="p1">
          {{ planeSearchCheack.ccc.da }}-{{ planeSearchCheack.ccc.aa }}: 商務艙
        </p>
        <p>預選座位</p>
        <p class="p1">免費選位</p>
        <p>托運行李</p>
        <p class="p1">2件(每件32公斤)</p>
      </div>
      <!-- <div class="c3">
        <span class="s1">TWD</span>
        <span class="s2">{{ planeSearchCheack.ccc.price*10 }}</span>
        <br />
        <button type=""  @click="chooseSeat(planeSearchCheack.ccc.price * 10)">選擇</button>
        <p>訂位艙等</p>
        <p class="p1">
          {{ planeSearchCheack.ccc.da }}-{{ planeSearchCheack.ccc.aa }}: 頭等艙
        </p>
        <p>預選座位</p>
        <p class="p1">免費選位</p>
        <p>托運行李</p>
        <p class="p1">3件(每件32公斤)</p>
      </div> -->
    </div>
  </div>
  <!-- 底部 -->
  <div class="bottom">
    <h2>注意事項</h2>
    <br />
    <p>
      1.來回行程之票價產品價格是以各航段分開顯示，各航段之價格並非單程票價，該顯示價格僅為提供計算所購買的票價產品之參考。
    </p>
    <p>
      2.各航段如選擇不同之票價產品組合時，相關收費標準以較嚴格者為主。例如:
      航段中包含全額與基本之票價產品組合時，相關手續費用需依照「基本」票價產品規範收取。
    </p>
    <p>
      3.兒童旅客的改票/退票/未登機手續費為成人旅客收費的75%；嬰兒旅客的改票/退票手續費為成人旅客收費的10%。
    </p>
    <p>
      4.依據臺灣消費者保護法第19條第2項但書所訂之「通訊交易解除權合理例外情事適用準則」規定，網路購買國際航空機票不適用七天解除權。如消費者購買機票後欲退票，將依樂GO航空退票規定辦理。於樂GO航空官方網站/App
      購買機票後，欲辦理機票退費，將按實際已搭乘行程之適用票價計算，相關退票申請條款與規定，詳見「線上退票」。當日購買、申請退票時間點為原訂航班起飛後4小時內或以
      COSMILE 哩程支付之機票不適用此線上退票功能，請透過「退票申請」頁面辦理。
    </p>
    <p>
      5.樂GO航空保留隨時修訂或終止各種票價產品、優惠及相關規則之權利，詳見「運送條款」。
    </p>
    <p>6.以上規定僅適用於搭乘樂GO航空實際營運之航班。</p>
    <p>
      7.因應新型冠狀病毒影響，調整樂GO航空國際航線班機服務內容，詳見「樂GO航空安心防疫措施及服務調整」。
    </p>
    <p>
      8.樂GO航空關心每位旅客的健康，如有發燒、咳嗽、呼吸急促等身體不適，請暫緩搭機。各國入境相關規定及簽證須知，請參考「外交部領事事務局」。
    </p>
    <p>
      9.搭機前，務必先行確認目的地之檢疫和入境規範
      (最新相關規定與法令仍應以各國政府公告為主) ，詳見「最新旅遊限制相關規定」。
    </p>
    <p>
      10.機票折扣僅適用於機票票價，不適用於各項附加費(包含但不限於燃油附加費、兵險、指定日期加價、停留點加價等)、服務費(包含但不限於訂位服務費、機場服務費、旅客服務費等)、手續費(包含但不限於改票、退票、未登機手續費等)與各地機場稅金與政府規費等。
      相關連結
    </p>
  </div>
  <div class="bottom1">
    <span>TWD {{ selectedPrice }}</span>
    <button @click="gogo">下一步</button>
  </div>
  <!-- 底部 -->
</template>

<style scoped lang="scss">
.big {
  width: 100vw;
  // height: 81vh;
  // background-color: cadetblue;
  background-color: #31304d;

  .top {
    text-align: justify;
    padding: 0px 40px 0px 40px;
    background-color: #31304d;
    color: white;
    font-size: 14px;

    .cc {
      font-size: 24px;
      color: #f8c68a;
    }
  }

  .date {
    width: 95vw;
    height: 10vh;
    background-color: #ffeeda;
    margin: 0 auto;
    text-align: justify;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 20px;
    font-size: 28px;
  }

  .mid {
    width: 95vw;
    height: 27vh;
    background-color: #ffeeda;
    margin: 15px auto;
    display: flex;

    .time {
      font-size: 36px;
      color: #794425;
    }

    .p1 {
      font-size: 28px;
    }

    .p2 {
      font-size: 32px;
    }

    .m1 {
      width: 70%;
      height: 100%;
      background-color: #ffeeda;
      display: flex;

      p {
        margin: 0;
      }

      .a1 {
        width: 30%;
        height: 100%;
        text-align: justify;
        padding: 10px 0px 10px 20px;
        background-color: #ffeeda;

        // background-color: #794425;
        .nation {
          font-size: 32px;
        }

      }

      .a2 {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 60px;
      }

      .a3 {
        width: 30%;
        height: 100%;
        text-align: right;
        padding: 5px 20px 5px 0px;
        background-color: #ffeeda;

        .nation {
          font-size: 32px;
        }
      }
    }

    .m2 {
      width: 30%;
      height: 100%;
      background-color: #eedfcd;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        margin: 0;
      }

      span {
        font-size: 16px;
        margin: 0;
      }

      .money {
        font-size: 28px;
        color: #794425;
      }
    }
  }

  .choose {
    width: 95vw;
    height: 50vh;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eedfcd;

    button {
      margin-top: 10px;
      width: 250px;
      height: 40px;
      border-radius: 7px;
      font-size: 20px;
    }

    .s1 {}

    .s2 {
      font-size: 32px;
      color: #794425;
    }

    .p1 {
      font-size: 20px;
      color: #794425;
    }

    .c1 {
      width: 25%;
      height: 100%;
      // background-color: cadetblue;
    }

    .c2 {
      width: 25%;
      height: 100%;
      // background-color: #796052;
    }

    .c3 {
      width: 25%;
      height: 100%;
      // background-color: blue;
    }
  }
}

.bottom {
  width: 100vw;
  height: 85vh;
  text-align: justify;
  padding: 0px 40px 0px 40px;
  background-color: #31304d;
  color: white;
  font-size: 14px;
}

.bottom1 {
  width: 100vw;
  height: 10vh;
  background-color: #a79b8d;
  bottom: 0;
  color: #794425;
  z-index: 2;
  position: fixed;

  span {
    position: absolute;
    font-size: 24px;
    right: 340px;
    top: 20px;
  }

  button {
    position: absolute;
    right: 50px;
    top: 10px;
    width: 15vw;
    height: 7vh;
    background-color: #3b2641;
    color: white;
  }
}</style>
