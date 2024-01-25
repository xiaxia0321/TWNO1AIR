<script>
//航班時刻搜尋頁面
import DepartureLocationTime from "./DepartureLocationTime.vue";
import ArrivalLocationTime from "./ArrivalLocationTime.vue";
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import axios from "axios";

export default {
  data() {
    return {
      // 定義變數，表示今天的日期，格式為 "YYYY-MM-DD"
      today: new Date().toISOString().split("T")[0],
      // 使用 v-model 綁定選擇的日期
      selectedDate: "",
      tomorrowDate: "",
      minDate: "",
      minDateHave: false,
      isRoundTrip: false,
      planeArr: [], //planeArr裡面塞資料庫所有航班
    };
  },
  methods: {
    searchPlane() {
      // axios({
      //   url: "http://localhost:8080/airplainInfo/search",
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: {},
      // }).then((res) => {
      //   this.planeArr = res.data.airplainInfoList; //planeArr裡面塞資料庫所有航班
      //   console.log(this.planeArr);
      //   // 在請求完成後執行路由導航
      // });
      this.$router.push({
        name: "AirTime",
        params: {
          // 可以根據需要傳遞其他參數
        },
      });
    },
    updateMinDate() {
      const selected = new Date(this.selectedDate);
      selected.setDate(selected.getDate() + 1);
      this.minDate = selected.toISOString().split("T")[0];
      this.minDateHave = true;
    },
    setRoundTrip(value) {
      this.isRoundTrip = value;
    },
  },

  components: {
    DepartureLocationTime,
    ArrivalLocationTime,
  },
  computed: {
    ...mapState(counter, ["planeSearchArr", "planeArr"]),
  },
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <!-- <div class="push"></div> -->
  <div class="big">
    <div class="header">
      <h2>班機時刻表</h2>
      <span>提供前後3天可預訂機位的班機時刻</span>
    </div>
    <div class="mid1">
      <span
        >使用班機查詢功能，查詢您要的日期以及前後和未來兩天樂狗航空最新的班機資訊</span
      >
    </div>
    <div class="mid2">
      <!-- 裡面塞出發地目的地的按鈕 -->
      <div class="b1">
        <span style="font-size: 2rem; color: #794425">出發地</span>
        <DepartureLocationTime @departure-selected="handleDepartureSelected" />
      </div>
      <div class="b2" style="font-size: 3rem">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="b3">
        <span style="font-size: 2rem; color: #794425">目的地</span>
        <ArrivalLocationTime @arrival-selected="handleArrivalSelected" />
      </div>
    </div>
    <div class="mid3">
      <div class="b3">
        <button @click="setRoundTrip(false)">單程</button>
        <button @click="setRoundTrip(true)">來回</button>
      </div>
      <div class="b4">
        <div class="form-floating mb-3 bb" v-if="!isRoundTrip">
          <input
            type="date"
            class="form-control"
            placeholder=""
            id="start"
            name="trip-start"
            max="2050-12-31"
            :min="this.today"
            @click="updateMinDate"
          />
          <label>出發日期</label>
        </div>

        <div v-else style="display: flex">
          <div class="form-floating mb-3 bb">
            <input
              type="date"
              class="form-control"
              placeholder=""
              id="start"
              name="trip-start"
              max="2050-12-31"
              :min="this.today"
              @click="updateMinDate"
            />
            <label>出發日期</label>
          </div>
          <div class="form-floating mb-3 bb">
            <input
              type="date"
              class="form-control"
              placeholder=""
              id="start"
              name="trip-start"
              max="2050-12-31"
              :min="this.today"
              @click="updateMinDate"
            />
            <label>回程日期</label>
          </div>
        </div>
      </div>
      <div class="b5">
        <button class="bu" @click="searchPlane">查詢</button>
      </div>
    </div>
  </div>
  <div class="bottom">
    <h2>注意事項</h2>
    <br />
    <p>航廈資訊以查詢之"搭乘日期"有飛航班機為主。</p>
    <p>
      樂狗航空保留對此班機時刻表之時間、機型更新的權利，如有異動恕不另行通知，更多資訊請聯絡樂狗航空客服中心。
    </p>
  </div>
</template>

<style scoped lang="scss">
.push {
  height: 10vh;
}

.big {
  width: 100vw;
  height: 66vh;
  background-color: #161a30;

  .header {
    width: 100%;
    height: 13vh;
    padding: 10px 0 0 30px;
    text-align: justify;
    color: white;
    background-color: #31304d;
  }

  .mid1 {
    width: 95vw;
    height: 10vh;
    margin: 4vh auto 0 auto;
    padding: 20px;
    font-size: 18px;
    text-align: justify;
    background-color: #eedfcd;
  }

  .mid2 {
    width: 95vw;
    height: 20vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    // align-items: center;
    background-color: #ffeeda;

    .b1 {
      margin: 2vh auto;
    }

    .b2 {
      margin: 6vh auto;
      font-size: 30px;
    }

    .b3 {
      margin: 2vh auto;
    }
  }

  .mid3 {
    width: 95vw;
    height: 15vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffeeda;

    .bb {
    }
    .bu {
      width: 10vw;
      height: 7vh;
      // margin: 10px 0px 10px 00px;
      color: white;
      background-color: rgb(60, 60, 60);
      font-size: 24px;
      letter-spacing: 5px;
      border-radius: 7px;
    }
    .b3 {
      // background-color: red;
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        margin-right: 20px; /* 調整按鈕之間的間距 */
        width: 60px;
        letter-spacing: 3px;
        border-radius: 7px;
      }
    }
    .b4 {
      // margin: 0 30px 0 400px;
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // background-color: #31304d;
      input {
        width: 15vw;
        height: 7vh;
      }
      .bb{
        
      }
    }
    .b5 {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.bottom {
  width: 100vw;
  height: 30vh;
  padding: 30px;
  background-color: #31304d;
  color: white;
  text-align: justify;
}
</style>
