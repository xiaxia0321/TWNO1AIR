<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
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
    ...mapState(counter, ['plane'])
  },
  methods: {
    ccc() {
      console.log(this.plane);
      console.log(typeof (this.plane.isOneway));
      console.log(typeof (this.plane.depatureTerminal));
    },
    updateMinDate() {
      const selectedz = new Date(this.plane.departureDate);
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

    ...mapActions(counter, ['setPP',]),
    createPlane() {
      console.log(this.plane.depatureTime);
      axios({
        url: 'http://localhost:8080/airplainInfo/create',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          departureDate: this.plane.departureDate, //出發日期
          arriveDate: this.plane.arrivalDate, //抵達日期
          departureLocation: this.plane.departureLocation, //出發地
          arrivalLocation: this.plane.arrivalLocation, //抵達地
          price: this.plane.price, //價錢
          classType: this.plane.classType, //艙等
          seat: this.plane.seat, //座位
          isOneway: this.plane.isOneway, //單程
          DA: this.plane.da, //出發機場縮寫
          AA: this.plane.aa, //抵達機場縮寫
          depature_terminal: this.plane.depatureTerminal, //出發航廈
          arrive_terminal: this.plane.arriveTerminal, //抵達航廈
          depature_time: this.plane.depatureTime, //出發時間
          arrive_time: this.plane.arriveTime, //抵達時間
        },
      }).then(res => console.log(res.data),)
      console.log(this.plane);
      this.plane = {
        departureDate: "", //出發日期
        arrivalDate: "", //抵達日期
        departureLocation: "", //出發地
        arrivalLocation: "", //抵達地
        da: "", //出發機場縮寫
        aa: "", //抵達機場縮寫
        classType: "",
        isOneway: false, //單程
        depatureTerminal: 0, //出發航廈
        arriveTerminal: 0,  //抵達航廈
        depatureTime: "", //出發時間
        arriveTime: "", //抵達時間
        price: "", //價錢
        seat: "", //座位

      },
        this.$router.push('/Backstage/BackPlane')
    },
    goBackPlane() {
      this.$router.push('/Backstage/BackPlane')
    }
  },
  components: {
    ...mapState(counter, ["plane"])
  },
  mounted() {

  },
  mounted() {
    this.generateTimeOptions();
  },

}
</script>

<template>
  <div class="big">
    <span>出發日期</span>
    <input type="date" v-model="plane.departureDate" :min="this.today" @change="updateMinDate">
    <span>抵達日期</span>
    <input type="date" v-model="plane.arrivalDate" :min="this.minDate" :disabled="!minDateHave">
    <br>
    <span>出發地</span>
    <select name="" id="" v-model="plane.departureLocation">
      <option value="台北,臺灣">台北,臺灣</option>
      <!-- <option value="澳門">澳門</option>
      <option value="東京">東京</option>
      <option value="大阪">大阪</option>
      <option value="函館">函館</option>
      <option value="沖繩">沖繩</option>
      <option value="曼谷">曼谷</option>
      <option value="胡志明市">胡志明市</option>
      <option value="新加坡">新加坡</option>
      <option value="洛杉磯">洛杉磯</option>
      <option value="舊金山">舊金山</option> -->
    </select>
    <span>抵達地</span>
    <select name="" id="" v-model="plane.arrivalLocation">
      <!-- <option value="台北">台北</option> -->
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
    </select>
    <br>
    <!-- <span>出發機場</span>
    <select name="" id="">
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
    <select name="" id="">
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
    </select> -->
    <br>
    <span>出發機場縮寫</span>
    <select name="" id="" v-model="plane.da">
      <option value="TPE">TPE</option>
      <!-- <option value="MFM">MFM</option>
      <option value="NRT">NRT</option>
      <option value="KIX">KIX</option>
      <option value="HKD">HKD</option>
      <option value="OKA">OKA</option>
      <option value="BKK">BKK</option>
      <option value="SGN">SGN</option>
      <option value="SIN">SIN</option>
      <option value="LAX">LAX</option>
      <option value="SFO">SFO</option> -->
    </select>
    <span>抵達機場縮寫</span>
    <select name="" id="" v-model="plane.aa">
      <!-- <option value="TPE">TPE</option> -->
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
    </select>
    <br>
    <span>艙等</span>
    <select name="" id="" v-model="plane.classType">
      <option value="經濟艙">經濟艙</option>
      <option value="商務艙">商務艙</option>
      <option value="頭等艙">頭等艙</option>
    </select>
    <span>是否單程</span>
    <input type="checkbox" style="width: 1rem; height: 1rem;" v-model="plane.isOneway" @change="ccc">
    <span>出發航廈</span>
    <input type="number" style="width: 4rem;" name="" v-model="plane.depatureTerminal" min="1" max="5" placeholder="1~5"
      id="">
    <span>抵達航廈</span>
    <input type="number" style="width: 4rem;" name="" v-model="plane.arriveTerminal" min="1" max="5" placeholder="1~5"
      id="">
    <br>
    <span>出發時間</span>
    <!-- <select name="" id="">
    <option value="01:00">01:00</option>
    <option value="01:30">01:30</option>
    <option value="02:00">02:00</option>
    <option value="02:30">02:30</option>
    <option value="03:00">03:00</option>
    <option value="03:30">03:30</option>
    <option value="04:00">04:00</option>
    <option value="04:30">04:30</option>
    <option value="05:00">05:00</option>
    <option value="05:30">05:30</option>
    <option value="06:00">06:00</option>
    <option value="06:30">06:30</option>
    <option value="07:00">07:00</option>
    <option value="07:30">07:30</option>
    <option value="08:00">08:00</option>
    <option value="08:30">08:30</option>
    <option value="09:00">09:00</option>
    <option value="09:30">09:30</option>
    <option value="10:00">10:00</option>
    <option value="10:30">10:30</option>
    <option value="11:00">11:00</option>
    <option value="11:30">11:30</option>
    <option value="12:00">12:00</option>
    <option value="12:30">12:30</option>
    <option value="13:00">13:00</option>
    <option value="13:30">13:30</option>
    <option value="14:00">14:00</option>
    <option value="14:30">14:30</option>
    <option value="15:00">15:00</option>
    <option value="15:30">15:30</option>
    <option value="16:00">16:00</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    </select>  -->
    <select v-model="plane.depatureTime">
      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
    </select>
    <span>抵達時間</span>
    <select v-model="plane.arriveTime" @change="ccc">
      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
    </select>
    <br>
    <span>價錢</span>
    <input type="number" v-model="plane.price">
    <span>座位</span>
    <input type="text" v-model="plane.seat" @change="ccc">
    <br>
    <!-- onclick="alert('這是警告文字');" -->
    <button @click="goBackPlane">上一頁</button>
    <button @click="createPlane">創建</button>
  </div>
</template>

<style scoped lang="scss">
.big {
  width: 100vw;
  // height: 50vh;
  // border: 1px solid black;

  // display: flex;
  // flex-direction: column;
  // align-items: start;
  input {
    width: 30%;
    height: 2rem;
  }

  span {
    line-height: 70px;
    margin: 0 5px 0 10px;
  }

  button {
    // position: absolute;
    right: 5rem;
    bottom: .5rem;
    margin-left: 6rem;
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

