<script>//航班時刻搜尋頁面
import DepartureLocationTime from "./DepartureLocationTime.vue";
import ArrivalLocationTime from "./ArrivalLocationTime.vue";
export default {
  data() {
    return {};
  },
  methods: {

  } ,
  components: {
    DepartureLocationTime,
    ArrivalLocationTime,
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
    <!-- <ArrivalLocationTime /> -->
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
      <div class="b1"><DepartureLocationTime /></div>
      <div class="b2"><i class="fa-solid fa-arrow-right"></i></div>
      <div class="b3"><ArrivalLocationTime /></div>
      <div class="b4">
        <input type="date" id="start" name="trip-start" max="2050-12-31" />
      </div>
    </div>
    <div class="mid3"><button class="bu">查詢</button></div>
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
.push{
  height: 10vh;
}
.big {
  width: 100vw;
  height: 75vh;
  background-color: #161a30;
  .header {
    width: 100%;
    height: 20vh;
    padding: 30px;
    text-align: justify;
    color: white;
    background-color: rgb(6, 33, 33);
  }
  .mid1 {
    width: 95vw;
    height: 15vh;
    margin: 0 auto;
    padding: 30px;
    text-align: justify;
    background-color: #eedfcd;
  }
  .mid2 {
    width: 95vw;
    height: 15vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    // align-items: center;
    background-color: #ffeeda;
    .b1{
      margin: 5vh auto;
    }
    .b2{
      margin: 6vh auto;
      font-size: 30px;

    }
    .b3{
      margin: 5vh auto;

    }
    .b4{
      margin: 7vh auto;
      input{
        width: 15vw;
        height: 7vh;
      }
    }
  }
  .mid3{
    width: 95vw;
    height: 10vh;
    margin: 0 auto;
    display: flex;
   justify-content: center;
    align-items: center;
    background-color: #ffeeda;
    // background-color: red;
    .bu{
      width: 10vw;
    height: 6vh;
    margin: 10px 0px 10px 960px;
    color: white;
    background-color: rgb(60, 60, 60);
    font-size: 24px;
    letter-spacing: 5px;
    border-radius: 7px;
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
