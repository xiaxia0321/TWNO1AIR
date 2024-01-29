<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import axios from "axios";
export default {
  data() {
    return {
      planeArr: [],
      ccc: [],

    };
  },
  computed: {
    ...mapState(counter, ['planeSearchCheack', "planeSearchArr", 'plane']),
  },
  methods: {

    bookFlight(num) {
      this.ccc = this.planeArr[num];
      this.planeSearchCheack.ccc = this.ccc;
      console.log(this.planeArr[num]);
      console.log(this.ccc);
      console.log(this.planeSearchCheack);
      console.log('ccc = ' + this.planeSearchCheack.ccc);
      // this.planeSearchCheack = {
      //   departureLocation: selectedFlight.departureLocation,
      //   arrivalLocation: selectedFlight.arrivalLocation,
      //   departureDate: selectedFlight.departureDate,
      //   arriveDate: selectedFlight.arriveDate,
      //   da: selectedFlight.da,
      //   aa: selectedFlight.aa,
      //   depatureTime: selectedFlight.depatureTime,
      //   arriveTime: selectedFlight.arriveTime,
      //   classType: selectedFlight.classType,
      //   isOneway: selectedFlight.isOneway,
      //   depatureTerminal: selectedFlight.depatureTerminal,
      //   arriveTerminal:selectedFlight.arriveTerminal,
      //   depatureTime:selectedFlight.depatureTime,
      //   arriveTime:selectedFlight.arriveTime,
      //   price:selectedFlight.price,
      //   seat:selectedFlight.seat,

      // };

      // 導航至下一頁
      this.$router.push("/OutboundConfirm");
    },
    //抓航班當天是否有飛，有的話就顯示圖案
    isToday(date) {
      const today = new Date().toISOString().split("T")[0]; // 獲取當天日期，格式為 "YYYY-MM-DD"
      return date === today;
    },
    searchPlane() {
      axios({
        url: "http://localhost:8080/airplainInfo/search",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          departureDate: this.planeSearchArr.departureDate,
          arriveDate: this.planeSearchArr.arrivalDate,
          departureLocation: this.planeSearchArr.departureLocation,
          arrivalLocation: this.planeSearchArr.arrivalLocation,
          classType: this.planeSearchArr.classType,
          isOneway: this.planeSearchArr.isOneway,
        },
      }).then((res) => (this.planeArr = res.data.airplainInfoList));
      console.log(this.planeArr);
      console.log(this.planeSearchArr);
    },
    back() {
      this.$router.push("/AirTimeSearch"); //推送至下一頁的路徑
    },
    //時間
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
    // 加減天數的方法
    addDays(dateString, days) {
      const date = new Date(dateString);
      date.setDate(date.getDate() + days);
      return date.toISOString().split("T")[0]; // 格式化為 "YYYY-MM-DD"
    },
    // 獲取星期幾的方法
    calculateDay(dateString, days) {
      const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      const calculateDate = (date, days) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + days);
        return newDate.toISOString().split("T")[0];
      };
      const date = new Date(calculateDate(dateString, days));
      const dayIndex = date.getDay();
      return weekdays[dayIndex];
    },
    //抓航班當天是否有飛，有的話就顯示圖案
    isToday(date) {
      const today = new Date().toISOString().split("T")[0]; // 獲取當天日期，格式為 "YYYY-MM-DD"
      return date === today;
    },
    searchPlane() {
      axios({
        url: "http://localhost:8080/airplainInfo/search",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          departureDate: this.planeSearchArr.departureDate,
          arriveDate: this.planeSearchArr.arrivalDate,
          departureLocation: this.planeSearchArr.departureLocation,
          arrivalLocation: this.planeSearchArr.arrivalLocation,
          classType: this.planeSearchArr.classType,
          isOneway: this.planeSearchArr.isOneway,
          
        },
      })
      .then((res) => (this.planeArr = res.data.airplainInfoList));
    //   const allFlights = res.data.airplainInfoList;
    //   if (this.planeSearchArr.isOneway) {
    //   // 如果是单程航班，只显示出发日期后的航班
    //   this.planeArr = allFlights.filter((flight) => flight.departureDate >= this.planeSearchArr.departureDate);
    // } else {
    //   // 如果是往返航班，显示出发日期和回程日期之间的航班
    //   this.planeArr = allFlights.filter(
    //     (flight) => flight.departureDate >= this.planeSearchArr.departureDate && flight.arriveDate >= this.planeSearchArr.returnDate
    //   );
    // }
      console.log(this.planeArr);
      console.log(this.planeSearchArr);
    },
    back() {
      this.$router.push("/AirTimeSearch"); //推送至下一頁的路徑
    },

    bookFlight(num) {
      this.aaa = this.planeArr[num];
      this.planeSearchCheack.ccc = this.aaa;
      console.log(this.planeArr[num]);
      console.log(this.aaa);
      console.log(this.planeSearchCheack);
      console.log('ccc = ' + this.planeSearchCheack.ccc);
      this.$router.push("/OutboundConfirm");
    },
  },
};
// mounted() {
//
// },
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="body">
    <div class="header1">
      <i class="fa-solid fa-arrow-left arrow" @click="back"></i>
      <h2 @click="searchPlane">查詢結果</h2>
    </div>
    <div class="big" v-for="(item, index) in planeArr" :key="index">
      <!-- <div class="header1">
        <i class="fa-solid fa-arrow-left arrow" @click="back"></i>
        <h2 @click="searchPlane">查詢結果</h2>
      </div> -->
      <div class="header2">
        <h4>{{ item.departureLocation }} - {{ item.arrivalLocation }}</h4>
        <span>以主管機關核定為主</span>
      </div>
      <div class="mid1 mm">
        <div class="a1"></div>
        <div class="a2">
          <div class="a21">
            <h3>{{ item.da }}</h3>
            <span>{{ item.depatureAirport }}</span>
          </div>
          <div class="a22">
            <h3>{{ item.aa }}</h3>
            <span>{{ item.arriveAirport }}</span>
          </div>
        </div>
        <div class="a3 aa">
          <span>{{ addDays(item.departureDate, -3) }}</span><span>{{ calculateDay(item.departureDate, -3) }}</span>
        </div>
        <div class="a4 aa">
          <span>{{ addDays(item.departureDate, -2) }}</span><span>{{ calculateDay(item.departureDate, -2) }}</span>
        </div>
        <div class="a5 aa">
          <span>{{ addDays(item.departureDate, -1) }}</span><span>{{ calculateDay(item.departureDate, -1) }}</span>
        </div>
        <div class="a6 aa">
          <span>{{ addDays(item.departureDate, 0) }}</span><span>{{ calculateDay(item.departureDate, 0) }}</span>
        </div>
        <div class="a7 aa">
          <span>{{ addDays(item.departureDate, 1) }}</span><span>{{ calculateDay(item.departureDate, 1) }}</span>
        </div>
        <div class="a8 aa">
          <span>{{ addDays(item.departureDate, 2) }}</span><span>{{ calculateDay(item.departureDate, 2) }}</span>
        </div>
        <div class="a9 aa">
          <span>{{ addDays(item.departureDate, 3) }}</span><span>{{ calculateDay(item.departureDate, 3) }}</span>
        </div>
      </div>
      <div class="mid2 mm">
        <div class="b1">
          <h3>JX0840</h3>
          <span>由HAPPYDOG</span><span>Airlines</span> <span>執飛</span><span><i class="fa-solid fa-plane"></i>A321neo</span>
        </div>
        <div class="b2">
          <div class="b21">
            <span>{{ item.departureDate }}</span>
            <h2>{{ item.depatureTime }}</h2>
          </div>
          <div class="b22">
            <span>直飛</span>
            <hr />
            <span> {{ calculateDuration(item.depatureTime, item.arriveTime) }}</span>
          </div>
          <div class="b23">
            <span>{{ item.arriveDate }}</span>
            <h2>{{ item.arriveTime }}</h2>
          </div>
        </div>
        <div class="b3 bb">
          <span><i class="fa-solid fa-plane"></i></span>
        </div>
        <div class="b4 bb">
          <!-- <span><i class="fa-solid fa-plane"></i></span> -->
        </div>
        <div class="b5 bb">
          <span><i class="fa-solid fa-plane"></i></span>
        </div>
        <div class="b6 bb" v-if="isToday(item.departureDate)">
          <!-- 當天如果有飛 -->
          <span><i class="fa-solid fa-plane"></i></span>
        </div>
        <div class="b6 bb" v-else>
          <!-- 當天如果沒飛 -->
        </div>
        <div class="b7 bb">
          <span><i class="fa-solid fa-plane"></i></span>
        </div>
        <div class="b8 bb">
          <span><i class="fa-solid fa-plane"></i></span>
        </div>
        <div class="b9 bb">
          <span><i class="fa-solid fa-plane"></i></span>
        </div>
      </div>
      <!-- <div class="mid3 mm"></div> -->
      <button @click="bookFlight(index)">預定行程</button>
    </div>

    <div class="bottom">
      <span style="font-size: 3.5rem">注意事項</span>

      <br />
      <span>航廈資訊以查詢之"搭乘日期"有飛航班機為主。</span>
      <br />
      <span>
        樂狗航空保留對此班機時刻表之時間、機型更新的權利，如有異動恕不另行通知，更多資訊請聯絡樂狗航空客服中心。
      </span>
      <span class="show" @click="searchPlane" style="font-size: 2.5rem">點此顯示搜尋結果</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  height: 100vh;
  overflow-y: auto;

  .header1 {
    width: 100%;
    height: 15vh;
    text-align: justify;
    color: white;
    background-color: #31304d;
    padding-left: 40px;

    .arrow {
      font-size: 24px;
      color: #f8c68a;
    }
  }

  .big {
    width: 100vw;
    height: 90vh;
    background-color: #161a30;

    button {
      width: 20vw;
      height: 7vh;
      margin: 10vh;
      color: white;
      background-color: rgb(60, 60, 60);
      font-size: 24px;
      letter-spacing: 7px;
      border-radius: 7px;
    }

    .header1 {
      width: 100%;
      height: 15vh;
      text-align: justify;
      color: white;
      background-color: #31304d;
      padding-left: 40px;

      .arrow {
        font-size: 24px;
        color: #f8c68a;
      }
    }

    .header2 {
      width: 100%;
      height: 10vh;
      text-align: justify;
      color: white;
      padding: 10px 35px 0px 35px;
      display: flex;
      justify-content: space-between;
    }

    .mid1 {
      width: 95%;
      height: 12vh;
      margin: 0 auto;
      background-color: #f0ece5;
      display: flex;

      .a1 {
        width: 15%;
        height: 100%;
        background-color: #ffeeda;
      }

      .a2 {
        width: 29%;
        height: 100%;
        background-color: #ffeeda;
        color: rgb(60, 60, 60);
        display: flex;
        justify-content: space-between;
        text-align: justify;
        padding: 0px 10px 0px 0px;
      }

      .aa {
        width: 8%;
        height: 100%;
        background-color: #eedfcd;
        color: rgb(60, 60, 60);
        flex-direction: column; //將日期都置中
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .a6 {
        //當天
        background-color: #ffeeda;
      }
    }

    .mid2 {
      width: 95%;
      height: 22vh;
      margin: 0 auto;
      background-color: #ffeeda;
      display: flex;

      .b1 {
        width: 15%;
        height: 100%;
        padding: 20px;
        background-color: #ffeeda;
        color: rgb(60, 60, 60);
        text-align: justify;
        flex-direction: column; //將日期都置中
        display: flex;

        span {
          font-size: 12px;
        }
      }

      .b2 {
        width: 29%;
        height: 100%;
        background-color: #ffeeda;
        color: rgb(60, 60, 60);
        display: flex;

        .b21 {
          width: 33%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .b22 {
          width: 33%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .b23 {
          width: 33%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }

      .bb {
        width: 8%;
        height: 100%;
        background-color: #eedfcd;
        color: rgb(60, 60, 60);
        flex-direction: column; //將日期都置中
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .b6 {
        //當天
        background-color: #ffeeda;
        color: rgb(60, 60, 60);
      }
    }

    .mid3 {
      width: 100%;
      height: 22vh;
      margin: 10px auto;
      background-color: #ffeeda;
    }
  }
}

.bottom {
  width: 100vw;
  height: 30vh;
  padding: 0 0 0 30px;
  background-color: #31304d;
  color: white;
  text-align: justify;

  .show {
    margin: 0 0 0 60px;
    cursor: pointer;

    &:hover {
      color: #f8c68a;
    }
  }
}
</style>
