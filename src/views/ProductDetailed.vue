//產品明細最終確認頁
<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import axios from 'axios';
export default {
  data() {
    return {
      DA: "", //出發機場縮寫
      AA: "", //抵達機場縮寫
      departureAirport: "", //出發機場
      arrivalAirport: "", //抵達機場
      classType: "", //艙等
      aircraftNumber: "", //機號
      aircraftType: "", //飛機型號
      departureDate: "", //出發日期
      arrivalDate: "", //抵達日期
      departureTime: "", //出發時間
      arrivalTime: "", //抵達時間
      totalTime: "", //總花費時間
      departureTerminal: "", //出發航廈
      arriveTerminal: "", //抵達航廈
      price: "", //價錢
    };
  },
  computed: {
    ...mapState(counter, ["plane", "planeSearchCheack", "Order", "userDate"]),
  },
  methods: {
    test() {
      console.log(this.depatureTime);

    },
    loginDD() {
      axios({
        url: "http://localhost:8080/api/login",
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          account: "yoyo",
          password: "yoyo",
        },
      }).then(res => {
        // 登录成功后的处理逻辑
        console.log(res);
        console.log(res.data.rtnCode);

      }).catch(error => {
        // 登录失败后的处理逻辑
        console.error("Login failed:", error);
      });
    },
    logoutDD() {
      fetch('http://localhost:8080/api/logout', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include'
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.rtnCode == "SUCCESSFUL") {
            $cookies.remove("account");
            console.log("logout!");
          }
        })
        .catch(error => console.log(error))
    },

    Ordergogo() {

      console.log("測試:", {
    oneway: this.planeSearchCheack.ccc.isOneway,
    numberOfPeople: this.Order.getAddPeople[0].enteredPeople,
    departureDate: this.planeSearchCheack.ccc.departureDate,
    arrivalDate: this.planeSearchCheack.ccc.arriveDate,
    departureLocation: this.planeSearchCheack.ccc.departureLocation,
    arrivalLocation: this.planeSearchCheack.ccc.arrivalLocation,
    classType: this.planeSearchCheack.ccc.classType,
    price: this.Order.getPrice * this.Order.getAddPeople[0].enteredPeople,
    account: this.userDate.uuu[0].account,
    depatureTime: this.planeSearchCheack.ccc.depatureTime,
    arriveTime: this.planeSearchCheack.ccc.arriveTime,
    addPeople: this.Order.getAddPeople,
    seat: this.planeSearchCheack.seat,
    airplainId: this.Order.getAddPeople[0].enteredPeople,
  });
        axios({
          url: 'http://localhost:8080/order/create',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            oneway: this.planeSearchCheack.ccc.isOneway, //單程
            numberOfPeople: this.Order.getAddPeople[0].enteredPeople, //人數
            departureDate: this.planeSearchCheack.ccc.departureDate, //出發日期
            arrivalDate: this.planeSearchCheack.ccc.arriveDate, //抵達日期
            departureLocation: this.planeSearchCheack.ccc.departureLocation, //出發地
            arrivalLocation: this.planeSearchCheack.ccc.arrivalLocation, //抵達地
            classType: this.planeSearchCheack.ccc.classType, //艙等
            price: this.Order.getPrice * this.Order.getAddPeople[0].enteredPeople, //價錢
            account: this.userDate.uuu[0].account, //帳戶名稱有問題
            depatureTime: this.planeSearchCheack.ccc.depatureTime, //出發時間
            arriveTime: this.planeSearchCheack.ccc.arriveTime, //抵達時間
            addPeople: JSON.stringify(this.Order.getAddPeople),
            seat: this.planeSearchCheack.seat, //座位編號
            airplainId: this.Order.getAddPeople[0].enteredPeople,
          },
        })
          .then(res => {
            console.log("成功");
            this.$router.push("/User");
          })
      // console.log(this.Order);
      // this.Order = {
      //   is_oneway: "",
      //   numberOfPeople: 0,
      //   departureDate: "",
      //   arrivalDate: "",
      //   departureLocation: "",
      //   arrivalLocation: "",
      //   classType: "",
      //   price: false,
      //   account: "",
      //   depatureTime: "",
      //   arriveTime: "",
      //   add_people: "",

      // }
    },
   


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
    back() {
      this.$router.push("/PassengerInformation"); //推送至下一頁的路徑
    },
  },
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div class="big">
    <div class="top">
      <i class="fa-solid fa-arrow-left arrow" @click="back"></i>
      <h2>產品明細</h2>
      <h3>航班資訊</h3>
      <!-- <button @click="loginDD">登入</button>
      <button @click="logoutDD">登出</button> -->
      <!-- <button @click="test">測試</button> -->
    </div>
    <div class="mt1"><span>經濟艙</span></div>
    <div class="mid1">
      <div class="m1">
        <p>JX840　<i class="fa-solid fa-plane"></i>　AIRBUS A321NEO</p>
        <p>{{ planeSearchCheack.ccc.departureDate }}</p>
        <p class="time">{{ planeSearchCheack.ccc.depatureTime }}</p>
        <p class="nationbk">{{ planeSearchCheack.ccc.da }}</p>
        <p>{{ planeSearchCheack.ccc.depatureAirport }}</p>
        <p>第{{ planeSearchCheack.ccc.depatureTerminal }}航廈</p>
        <p>座位: {{ this.planeSearchCheack.seat }}</p>
      </div>
      <div class="m2"><i class="fa-solid fa-arrow-right"></i></div>
      <div class="m3">
        <p>{{ calculateDuration(planeSearchCheack.ccc.depatureTime, planeSearchCheack.ccc.arriveTime) }}</p>
        <p>{{ planeSearchCheack.ccc.arriveDate }}</p>
        <p class="time">{{ planeSearchCheack.ccc.arriveTime }}</p>
        <p class="nationbk">{{ planeSearchCheack.ccc.aa }}</p>
        <p>{{ planeSearchCheack.ccc.arriveAirport }}</p>
        <p>第{{ planeSearchCheack.ccc.arriveTerminal }}航廈</p>
      </div>
    </div>
  </div>
  <div class="big1">
    <div class="d1">
      <h3>票價資訊</h3>
    </div>
    <div class="mid2">
      <!-- <div class="m1"><h4>成人</h4></div> -->
      <div class="m2">
        <p>產品票價:{{ this.Order.getPrice }}</p>
        <p>人數:{{ this.Order.getAddPeople[0].enteredPeople }}</p>
        <p>總計:{{ this.Order.getPrice * this.Order.getAddPeople[0].enteredPeople }}</p>

      </div>
    </div>
  </div>
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
    <span>TWD {{ this.Order.getPrice * this.Order.getAddPeople[0].enteredPeople }}</span>
    <button @click="Ordergogo">送出訂單</button>
  </div>
</template>

<style scoped lang="scss">
.big {
  width: 100vw;
  height: 100vh;
  background-color: #161a30;

  .top {
    width: 100vw;
    height: 20vh;
    background-color: #31304d;
    text-align: justify;
    color: white;
    padding-left: 40px;

    .arrow {
      font-size: 24px;
      color: #f8c68a;
      margin-bottom: 10px;
    }
  }

  //第一張票區
  .mt1 {
    width: 80vw;
    height: 5vh;
    background-color: rgb(90, 90, 90);
    margin: 0 auto;
    margin-top: 10vh;

    text-align: justify;
    color: white;
    padding-top: 5px;
    border-top-left-radius: 10px;
    /* 設置左上角為圓形導角 */
    border-top-right-radius: 10px;

    /* 設置右上角為圓形導角 */
    span {
      margin-left: 40px;
    }
  }

  .mid1 {
    width: 80vw;
    // height: 25vh;
    height: 50vh;
    background-color: salmon;
    margin: 0 auto;
    display: flex;

    .m1 {
      width: 40%;
      height: 110%;
      text-align: justify;
      background-color: #ffeeda;

      .time {
        font-size: 36px;
        letter-spacing: 2px;
        color: #794425;
      }

      .nationbk {
        font-size: 36px;
        letter-spacing: 2px;
      }

      p {
        margin: 0;
        line-height: 1.1;
        margin-top: 20px;
        margin-bottom: 15px;
        margin-left: 40px;
        font-size: 24px;
      }
    }

    .m2 {
      width: 20%;
      height: 110%;
      background-color: #ffeeda;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 120px;
      // background-color: #161a30;
    }

    .m3 {
      width: 40%;
      height: 110%;
      text-align: right;
      background-color: #ffeeda;

      .time {
        font-size: 36px;
        letter-spacing: 2px;
        color: #794425;
      }

      .nationbk {
        font-size: 36px;
        letter-spacing: 2px;
      }

      p {
        margin: 0;
        line-height: 1.1;
        margin-top: 20px;
        margin-bottom: 15px;
        margin-right: 40px;
        font-size: 24px;
      }
    }
  }

  //第一張票區
}

.big1 {
  width: 100vw;
  height: 45vh;
  background-color: #31304d;

  // margin-top: 20vh;
  .d1 {
    color: white;
    text-align: justify;
    padding-left: 20px;
    width: 100vw;
    height: 15vh;
    padding-top: 5vh;
  }

  .mid2 {
    width: 90vw;
    height: 25vh;
    display: flex;

    margin: 0 auto;

    .m1 {
      width: 25%;
      height: 100%;
      background-color: #3b2641;
      color: white;
      text-align: justify;
      padding-left: 50px;
      padding-top: 50px;
    }

    .m2 {
      width: 100%;
      height: 100%;
      text-align: justify;
      font-size: 24px;
      background-color: #ffeeda;

      p {
        margin-left: 40px;
        margin-top: 20px;
      }
    }
  }
}

.bottom {
  width: 100vw;
  height: 75vh;
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
    right: 280px;
    top: 15px;
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
}
</style>
