<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
import Swal from "sweetalert2";
export default {
  data() {
    return {
      planeArr: [],
      timeOptions: [],
      // 定義變數，表示今天的日期，格式為 "YYYY-MM-DD"
      today: new Date().toISOString().split('T')[0],
      // 使用 v-model 綁定選擇的日期
      selectedDate: '',
      tomorrowDate: '',
      minDate: '',
      minDateHave: false,
    }
  },
  computed: {
    ...mapState(counter, ['plane', 'planeUpdateArr'])
  },
  methods: {
    zzz() {
      console.log(this.planeUpdateArr.ccc);
    },
    updateMinDate() {
      const selectedz = new Date(this.planeUpdateArr.ccc.departureDate);
      selectedz.setDate(selectedz.getDate() + 1);
      this.minDate = selectedz.toISOString().split('T')[0];
      this.minDateHave = true;
    },
    //時間select
    generateTimeOptions() {
      for (let hour = 0; hour <= 23; hour++) {
        for (let minute = 0; minute <= 30; minute += 30) {
          const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          this.timeOptions.push(time);
        }
      }
    },
    updataPlane() {
      console.log(this.planeUpdateArr.ccc);
      axios({
        url: 'http://localhost:8080/airplainInfo/update',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          airplainId: this.planeUpdateArr.ccc.airplainId,
          departureDate: this.planeUpdateArr.ccc.departureDate, //出發日期
          arriveDate: this.planeUpdateArr.ccc.arriveDate, //抵達日期
          departureLocation: this.planeUpdateArr.ccc.departureLocation, //出發地
          arrivalLocation: this.planeUpdateArr.ccc.arrivalLocation, //抵達地
          price: this.planeUpdateArr.ccc.price, //價錢
          classType: this.planeUpdateArr.ccc.classType, //艙等
          seat: this.planeUpdateArr.ccc.seat, //座位
          isOneway: this.planeUpdateArr.ccc.isOneway, //單程
          DA: this.planeUpdateArr.ccc.da, //出發機場縮寫
          AA: this.planeUpdateArr.ccc.aa, //抵達機場縮寫
          depature_terminal: this.planeUpdateArr.ccc.depatureTerminal, //出發航廈
          arrive_terminal: this.planeUpdateArr.ccc.arriveTerminal, //抵達航廈
          depature_time: this.planeUpdateArr.ccc.depatureTime, //出發時間
          arrive_time: this.planeUpdateArr.ccc.arriveTime, //抵達時間
          depature_airport: this.planeUpdateArr.ccc.depatureAirport,
          arrive_airport: this.planeUpdateArr.ccc.arriveAirport,
          airplain_type: this.planeUpdateArr.ccc.airplainType,
        },
      }).then((res) => {
        if (
          this.planeUpdateArr.ccc.departureDate == "" ||
          this.planeUpdateArr.ccc.arriveDate == "" ||
          this.planeUpdateArr.ccc.departureLocation == "" ||
          this.planeUpdateArr.ccc.arrivalLocation == "" ||
          this.planeUpdateArr.ccc.price == "" ||
          this.planeUpdateArr.ccc.classType == "" ||
          this.planeUpdateArr.ccc.seat == "" ||
          this.planeUpdateArr.ccc.isOneway == "" ||
          this.planeUpdateArr.ccc.da == "" ||
          this.planeUpdateArr.ccc.aa == "" ||
          this.planeUpdateArr.ccc.depatureTerminal == "" ||
          this.planeUpdateArr.ccc.arriveTerminal == "" ||
          this.planeUpdateArr.ccc.depatureTime == "" ||
          this.planeUpdateArr.ccc.arriveTime == "" ||
          this.planeUpdateArr.ccc.arriveAirport == "" ||
          this.planeUpdateArr.ccc.depatureAirport == "" ||
          this.planeUpdateArr.ccc.airplain_type == ""
        ) {
          console.log("xxx");
          Swal.fire({
            icon: "error",
            text: "你有資料尚未填寫",
          });
          return;
        }
        if (this.planeUpdateArr.ccc.depatureAirport == this.planeUpdateArr.ccc.arriveAirport) {
          Swal.fire({
            icon: "question",
            text: "出發地及目的地重複，請重新填寫",
            showConfirmButton: true,
          });
          return;
        }
        if ((res)) {
          Swal.fire({
            icon: "success",
            text: "修改成功",
            showConfirmButton: true,
          });
          this.planeUpdateArr.ccc.departureDate = "",
            this.planeUpdateArr.ccc.arrivalDate = "",
            this.planeUpdateArr.ccc.departureLocation = "",
            this.planeUpdateArr.ccc.arrivalLocation = "",
            this.planeUpdateArr.ccc.price = "",
            this.planeUpdateArr.ccc.classType = "",
            this.planeUpdateArr.ccc.seat = "",
            this.planeUpdateArr.ccc.isOneway = false,
            this.planeUpdateArr.ccc.da = "",
            this.planeUpdateArr.ccc.aa = "",
            this.planeUpdateArr.ccc.depatureTerminal = "",
            this.planeUpdateArr.ccc.arriveTerminal = "",
            this.planeUpdateArr.ccc.depatureTime = "",
            this.planeUpdateArr.ccc.arriveTime = "",
            this.planeUpdateArr.ccc.departureAirport = "",
            this.planeUpdateArr.ccc.arrivalAirport = "",
            this.planeUpdateArr.ccc.airplain_type = "",
            console.log(this.planeUpdateArr.ccc);
          this.$router.push('/Backstage/BackPlane')
        };
      })
    },
    goBackPlane() {
      this.$router.push('/Backstage/BackPlane')
    },
    updateDepartureAirport() {
      // 在出發地改變時更新機場縮寫
      this.updateAirportAbbreviation('da', this.planeUpdateArr.ccc.depatureAirport, 'departureLocation');
    },
    updateArrivalAirport() {
      // 在抵達地改變時更新機場縮寫
      this.updateAirportAbbreviation('aa', this.planeUpdateArr.ccc.arriveAirport, 'arrivalLocation');
    },
    //更新成對應的國家以及縮寫
    updateAirportAbbreviation(property, airport, location) {
      // 根據機場選項更新相應的機場縮寫
      switch (airport) {
        case '桃園國際機場':
          this.planeUpdateArr.ccc[property] = 'TPE';
          this.planeUpdateArr.ccc[location] = '台北,臺灣';
          break;
        case '澳門國際機場':
          this.planeUpdateArr.ccc[property] = 'MFM';
          this.planeUpdateArr.ccc[location] = '澳門,澳門';
          break;
        case '成田國際機場':
          this.planeUpdateArr.ccc[property] = 'NRT';
          this.planeUpdateArr.ccc[location] = '東京,日本';
          break;
        case '關西國際機場':
          this.planeUpdateArr.ccc[property] = 'KIX';
          this.planeUpdateArr.ccc[location] = '大阪,日本';
          break;
        case '函館機場':
          this.planeUpdateArr.ccc[property] = 'HKD';
          this.planeUpdateArr.ccc[location] = '函館,日本';
          break;
        case '那霸國際機場':
          this.planeUpdateArr.ccc[property] = 'OKA';
          this.planeUpdateArr.ccc[location] = '沖繩,日本';
          break;
        case '蘇凡納布國際機場':
          this.planeUpdateArr.ccc[property] = 'BKK';
          this.planeUpdateArr.ccc[location] = '曼谷,泰國';
          break;
        case '新山一國際機場':
          this.planeUpdateArr.ccc[property] = 'SGN';
          this.planeUpdateArr.ccc[location] = '胡志明市,越南';
          break;
        case '樟宜機場':
          this.planeUpdateArr.ccc[property] = 'SIN';
          this.planeUpdateArr.ccc[location] = '新加坡,新加坡';
          break;
        case '洛杉磯國際機場':
          this.planeUpdateArr.ccc[property] = 'LAX';
          this.planeUpdateArr.ccc[location] = '洛杉磯,美國';
          break;
        case '舊金山國際機場':
          this.planeUpdateArr.ccc[property] = 'SFO';
          this.planeUpdateArr.ccc[location] = '舊金山,美國';
          break;
      }
    },
  },
  components: {
    ...mapState(counter, ["plane"])
  },
  mounted() {
    this.generateTimeOptions();
  },

}
</script>

<template>
  <div class="big">
    <span>出發日期</span>
    <input type="date" v-model="planeUpdateArr.ccc.departureDate" style="width: 10rem; height: 2rem;" :min="this.today"
      @change="updateMinDate">
    <span>抵達日期</span>
    <input type="date" v-model="planeUpdateArr.ccc.arriveDate" style="width: 10rem; height: 2rem;" :min="this.minDate">
    <br>

    <span>出發機場</span>
    <select name="" id="" v-model="planeUpdateArr.ccc.depatureAirport" @change="updateDepartureAirport"
      style="height: 2rem;">
      <option value="桃園國際機場">桃園國際機場</option>
      <option value="澳門國際機場">澳門國際機場</option>
      <option value="成田國際機場">成田國際機場</option>
      <option value="關西國際機場">關西國際機場</option>
      <option value="函館機場">函館機場</option>
      <option value="那霸國際機場">那霸國際機場</option>
      <option value="蘇凡納布國際機場">蘇凡納布國際機場</option>
      <option value="新山一國際機場">新山一國際機場</option>
      <option value="樟宜機場">樟宜機場</option>
      <option value="洛杉磯國際機場">洛杉磯國際機場</option>
      <option value="舊金山國際機場">舊金山國際機場</option>
    </select>
    <span>抵達機場</span>
    <select name="" id="" @change="updateArrivalAirport" v-model="planeUpdateArr.ccc.arriveAirport" style="height: 2rem;">
      <option value="桃園國際機場">桃園國際機場</option>
      <option value="澳門國際機場">澳門國際機場</option>
      <option value="成田國際機場">成田國際機場</option>
      <option value="關西國際機場">關西國際機場</option>
      <option value="函館機場">函館機場</option>
      <option value="那霸國際機場">那霸國際機場</option>
      <option value="蘇凡納布國際機場">蘇凡納布國際機場</option>
      <option value="新山一國際機場">新山一國際機場</option>
      <option value="樟宜機場">樟宜機場</option>
      <option value="洛杉磯國際機場">洛杉磯國際機場</option>
      <option value="舊金山國際機場">舊金山國際機場</option>
    </select>
    <br>
    <span>出發地</span>
    <input type="text" style="width: 9rem; " disabled v-model="planeUpdateArr.ccc.departureLocation">
    <!-- <select name="" id="" v-model="plane.departureLocation">
      <option value="台北,臺灣">台北,臺灣</option>
      <option value="澳門,澳門">澳門,澳門</option>
      <option value="東京,日本">東京,日本</option>
      <option value="大阪,日本">大阪,日本</option>
      <option value="函館,日本">函館,日本</option>
      <option value="沖繩,日本">沖繩,日本</option>
      <option value="曼谷,泰國">曼谷,泰國</option>
      <option value="胡志明市,越南">胡志明市,越南</option>
      <option value="新加坡,新加坡">新加坡,新加坡</option>
      <option value="洛杉磯,美國">洛杉磯,美國</option>
      <option value="舊金山,美國">舊金山,美國</option>
    </select> -->
    <span>抵達地</span>
    <input type="text" style="width: 9rem;" disabled v-model="planeUpdateArr.ccc.arrivalLocation">
    <!-- <select name="" id="" v-model="plane.arrivalLocation">
      <option value="台北,臺灣">台北,臺灣</option>
      <option value="澳門,澳門">澳門,澳門</option>
      <option value="東京,日本">東京,日本</option>
      <option value="大阪,日本">大阪,日本</option>
      <option value="函館,日本">函館,日本</option>
      <option value="沖繩,日本">沖繩,日本</option>
      <option value="曼谷,泰國">曼谷,泰國</option>
      <option value="胡志明市,越南">胡志明市,越南</option>
      <option value="新加坡,新加坡">新加坡,新加坡</option>
      <option value="洛杉磯,美國">洛杉磯,美國</option>
      <option value="舊金山,美國">舊金山,美國</option>
    </select> -->
    <br>
    <span>出發機場縮寫</span>
    <input type="text" v-model="planeUpdateArr.ccc.da" style="width: 3rem;" disabled>
    <!-- <select name="" id="" v-model="plane.da" disabled>
      <option value="TPE">TPE</option>
      <option value="MFM">MFM</option>
      <option value="NRT">NRT</option>
      <option value="KIX">KIX</option>
      <option value="HKD">HKD</option>
      <option value="OKA">OKA</option>
      <option value="BKK">BKK</option>
      <option value="SGN">SGN</option>
      <option value="SIN">SIN</option>
      <option value="LAX">LAX</option>
      <option value="SFO">SFO</option>
    </select> -->
    <span>抵達機場縮寫</span>
    <input type="text" v-model="planeUpdateArr.ccc.aa" style="width: 3rem;" disabled>
    <!-- <select name="" id="" v-model="plane.aa" disabled>
      <option value="TPE">TPE</option>
      <option value="MFM">MFM</option>
      <option value="NRT">NRT</option>
      <option value="KIX">KIX</option>
      <option value="HKD">HKD</option>
      <option value="OKA">OKA</option>
      <option value="BKK">BKK</option>
      <option value="SGN">SGN</option>
      <option value="SIN">SIN</option>
      <option value="LAX">LAX</option>
      <option value="SFO">SFO</option>
    </select> -->
    <br>
    <span>飛機型號</span>
    <select name="" id="" v-model="planeUpdateArr.ccc.airplainType">
      <option value="A321">A321</option>
      <option value="A330">A330</option>
      <option value="A350-900">A350-900</option>
    </select>
    <span>艙等</span>
    <select name="" id="" v-model="planeUpdateArr.ccc.classType">
      <option value="經濟艙">經濟艙</option>
      <option value="商務艙">商務艙</option>
      <option value="頭等艙">頭等艙</option>
    </select>
    <span style="margin-left: 3rem;">旅程 : </span>
    <span v-show="planeUpdateArr.ccc.isOneway">單程</span>
    <span v-show="!planeUpdateArr.ccc.isOneway">來回</span>
    <input type="checkbox" style="width: 1rem; height: 1rem;" v-model="planeUpdateArr.ccc.isOneway" @change="zzz">
    <br>
    <span>出發航廈</span>
    <select name="" id="" v-model="planeUpdateArr.ccc.depatureTerminal">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <!-- <input type="number" value="1" style="width: 4rem;" name="" v-model="plane.depatureTerminal" min="1" max="5" placeholder="1~5"
      id=""> -->
    <span>抵達航廈</span>
    <!-- <input type="number" value="1" style="width: 4rem;" name="" v-model="plane.arriveTerminal" min="1" max="5" placeholder="1~5"
      id=""> -->
    <select name="" id="" v-model="planeUpdateArr.ccc.arriveTerminal">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <br>
    <span>出發時間</span>
    <select v-model="planeUpdateArr.ccc.depatureTime">
      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
    </select>
    <span>抵達時間</span>
    <select v-model="planeUpdateArr.ccc.arriveTime" @change="ccc">
      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
    </select>
    <br>
    <span>價錢</span>
    <input type="number" v-model="planeUpdateArr.ccc.price">
    <span>座位</span>
    <input type="text" v-model="planeUpdateArr.ccc.seat" @change="ccc">
    <br>
    <!-- onclick="alert('這是警告文字');" -->
    <button @click="goBackPlane">上一頁</button>
    <button @click="updataPlane">修改</button>
  </div>
</template>

<style scoped lang="scss">
.big {
  width: 100vw;
  background-color: whitesmoke;
  // height: 50vh;
  // border: 1px solid black;

  // display: flex;
  // flex-direction: column;
  // align-items: start;
  input {
    border-radius: 7px;
    width: 10rem;
    height: 2rem;
    text-align: center;
  }

  select {
    border-radius: 7px;
    text-align: center;
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 70px;
    margin: 0 5px 0 10px;
  }

  button {
    // position: absolute;
    right: 5rem;
    bottom: .5rem;
    margin-left: 6rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    width: 5rem;
    height: 2rem;
    background-color: #3472c2;
    color: white;

    &:hover {
      background-color: rgba(144, 27, 27, 0.499);
    }

    &:active {
      background-color: rgba(144, 27, 27, 0.811);

    }
  }
}
</style>

