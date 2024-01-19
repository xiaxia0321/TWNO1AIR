<script>
export default {
  data() {
    
    return {
      departureLocation:"",//出發地點
      arrivalLocation:"",//抵達地點
      DA:"",//出發機場縮寫
      AA:"",//抵達機場縮寫
      departureAirport:"",//出發機場
      arrivalAirport:"",//抵達機場 
      depatureTime:"",//出發時間
      arriveTime:"",//抵達時間
      // totalTime:"",//總花費時間
      // d1:"",//前三天
      // d2:"",//前兩天
      // d3:"",//前一天
      // d4:"",//當天
      // d5:"",//後一天
      // d6:"",//後兩天
      // d7:"",//後三天
    };
  },

  methods: {
    back() {
            this.$router.push("/AirTimeSearch"); //推送至下一頁的路徑
        },
        gogo() {
            this.$router.push("/OutboundConfirm"); //推送至下一頁的路徑
        },
  },
  mounted() {
    this.departureLocation = this.$route.params.departureLocation;
    this.arrivalLocation = this.$route.params.arrivalLocation;
    // const departureLocation = this.$route.params.departureLocation;
    // const arrivalLocation = this.$route.params.arrivalLocation;
    const DA = this.$route.params.DA;
    const AA = this.$route.params.AA;
    const departureAirport = this.$route.params.departureAirport;
    const arrivalAirport = this.$route.params.arrivalAirport;
    const departureTime = this.$route.params.departureTime;
    const arrivalTime = this.$route.params.arrivalTime;
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
  
    <div class="header1">
      <i class="fa-solid fa-arrow-left arrow" @click="back"></i>
      <h2>查詢結果</h2>
    </div>
    <div class="header2">
      <h4>{{ departureLocation  }} - {{ arrivalLocation }}</h4>
      <span>以主管機關核定為主</span>
    </div>
    <div class="mid1 mm">
      <div class="a1"></div>
      <div class="a2">
        <div class="a21">
          <h3>TPE</h3>
          <span>臺灣桃園國際機場</span>
        </div>
        <div class="a22">
          <h3>FUK</h3>
          <span>福岡機場</span>
        </div>
      </div>
      <div class="a3 aa"><span>1月13號</span><span>周六</span></div>
      <div class="a4 aa"><span>1月14號</span><span>周日</span></div>
      <div class="a5 aa"><span>1月15號</span><span>周一</span></div>
      <div class="a6 aa"><span>1月16號</span><span>周二</span></div>
      <div class="a7 aa"><span>1月17號</span><span>周三</span></div>
      <div class="a8 aa"><span>1月18號</span><span>周四</span></div>
      <div class="a9 aa"><span>1月19號</span><span>周五</span></div>
    </div>
    <div class="mid2 mm">
      <div class="b1">
        <h3>JX0840</h3>
        <span>由HAPPYDOG</span><span>Airlines</span> <span>執飛</span
        ><span><i class="fa-solid fa-plane"></i>A321neo</span>
      </div>
      <div class="b2">
        <div class="b21"><h2>14:45</h2></div>
        <div class="b22">
          <span>直飛</span>
          <hr />
          <span>2小時15分鐘</span>
        </div>
        <div class="b23"><h2>18:00</h2></div>
      </div>
      <div class="b3 bb" v-if="d3">
        <span><i class="fa-solid fa-plane"></i></span>
        </div>
      <div class="b4 bb" v-if="d4">
        <span><i class="fa-solid fa-plane"></i></span>
      </div>
      <div class="b5 bb" v-if="d5">
        <span><i class="fa-solid fa-plane"></i></span>
      </div>
      <div class="b6 bb" v-if="d6"> 
      <!-- 當天 -->
        <span><i class="fa-solid fa-plane"></i></span> 
      </div>
      <div class="b7 bb" v-if="d7">
        <span><i class="fa-solid fa-plane"></i></span>
      </div>
      <div class="b8 bb" v-if="d8">
        <span><i class="fa-solid fa-plane"></i></span>
      </div>
      <div class="b9 bb" v-if="d9">
        <span><i class="fa-solid fa-plane"></i></span>
      </div>
    </div>
    <!-- <div class="mid3 mm"></div> -->
    <button @click="gogo">預定行程</button>
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
.bottom {
  width: 100vw;
  height: 30vh;
  padding: 30px;
  background-color: #31304d;
  color: white;
  text-align: justify;
}
</style>
