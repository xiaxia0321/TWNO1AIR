<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default {
  data() {
    return {
      planeArr: [],
      aaa: '',
    }
  },
  methods: {
    openSweetAlert(item, index) {
      Swal.fire({
        title: "修改航班資料",
        html: `
        <span>出發日期:</span>
        <input type="date" id="departureDate" class="swal2-input" value="${item.airplainId}">
        <br>

        <span>抵達日期:</span>
        <input type="date" id="arrivalDate" class="swal2-input">
        <br>
        <br>
        
        <span>出發地:</span>
    <select name="" id="" v-model="plane.arrivalLocation" class="swal2-input">
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
    <br>
    <br>

        <span>抵達地:</span>
    <select name="" id="" v-model="plane.arrivalLocation" class="swal2-input">
      <!-- <option value="台北,臺灣">台北,臺灣</option> -->
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
    <br>
        
    <span>出發機場:</span>
    <select name="" id="" class="swal2-input">
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
    <br>
        
    <span>抵達機場</span>
    <select name="" id="" class="swal2-input">
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
    <br>
        
    <span>出發機場縮寫</span>
    <select name="" id="" v-model="plane.da" class="swal2-input">
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
    <br>
    <br>
        
    <span>抵達機場縮寫</span>
    <select name="" id="" v-model="plane.aa" class="swal2-input">
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
    <br>
        
    <span>艙等</span>
    <select name="" id="" v-model="plane.classType" class="swal2-input">
      <option value="經濟艙">經濟艙</option>
      <option value="商務艙">商務艙</option>
      <option value="頭等艙">頭等艙</option>
    </select>
    <br>
    <br>
        
    <span>是否單程</span>
    <input type="checkbox" style="width: 1rem; height: 1rem;" v-model="plane.isOneway" class="swal2-input">
    <br>
    <br>
        
    <span>出發航廈</span>
    <input type="number" style="width: 4rem;" name="" v-model="plane.depatureTerminal" min="1" max="5" placeholder="1~5"
      id="" class="swal2-input">
      <br>
      <br>
        
    <span>抵達航廈</span>
    <input type="number" style="width: 4rem;" name="" v-model="plane.arriveTerminal" min="1" max="5" placeholder="1~5"
      id="" class="swal2-input">
      <br>
      <br>
        
    <span>出發時間</span>
    <select v-model="plane.depatureTime" class="swal2-input">
      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
    </select>
    <br>
    <br>
        
    <span>抵達時間</span>
    <select v-model="plane.arriveTime" class="swal2-input">
      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
    </select>
    <br>
    <br>
        
    <span>價錢</span>
    <input type="number" v-model="plane.price" class="swal2-input">
    <br>
    <br>
        
    <span>座位</span>
    <input type="text" v-model="plane.seat" class="swal2-input">
    <br>
    <br>
        `,
        showCancelButton: true,
        confirmButtonText: "確定修改",
        cancelButtonText: "取消",
        preConfirm: () => {
          const newData = document.getElementById("swal-input1").value;
          // 在這裡處理資料更新的邏輯，例如使用 API 請求更新後端資料
          console.log("新的資料:", newData);
        },
      });
    },
    ...mapActions(counter, ["setPP"]),
    re0() {
      this.planeSearchArr.departureDate = "",
        this.planeSearchArr.arrivalDate = "",
        this.planeSearchArr.departureLocation = "",
        this.planeSearchArr.arrivalLocation = "",
        this.planeSearchArr.classType = "";
    },
    updatePlane() {
      axios({
        url: 'http://localhost:8080/airplainInfo/update',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          departureDate: this.planeUpdate.departureDate, //出發日期
          arrivalDate: this.planeUpdate.arrivalDate, //抵達日期
          departureLocation: this.planeUpdate.departureLocation, //出發地
          arrivalLocation: this.planeUpdate.arrivalLocation, //抵達地
          departureAirport: this.planeUpdate.departureAirport, //出發機場
          arrivalAirport: this.planeUpdate.arrivalAirport, //抵達機場
          da: this.planeUpdate.da, //出發機場縮寫
          aa: this.planeUpdate.aa, //抵達機場縮寫
          classType: this.planeUpdate.classType,
          isOneway: this.planeUpdate.isOneway, //單程
          depatureTerminal: this.planeUpdate.depatureTerminal, //出發航廈
          arriveTerminal: this.planeUpdate.arriveTerminal,  //抵達航廈
          depatureTime: this.planeUpdate.depatureTime, //出發時間
          arriveTime: this.planeUpdate.arriveTime, //抵達時間
          price: this.planeUpdate.price, //價錢
          seat: this.planeUpdate.seat, //座位
          airplain_type: this.planeUpdate.airplain_type,
          airplain_Id: this.planeUpdate.airplain_Id,
        },
      })
        .then(res => console.log(res));
    },
    searchPlaneAA() {
      axios({
        url: "http://localhost:8080/airplainInfo/search",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          departureDate: "",
          arrivalDate: "",
          departureLocation: "",
          arrivalLocation: "",
          classType: "",
          isOneway: "",
        },
      })
        .then(res => this.planeArr = res.data.airplainInfoList,);
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
          arrivalDate: this.planeSearchArr.arrivalDate,
          departureLocation: this.planeSearchArr.departureLocation,
          arrivalLocation: this.planeSearchArr.arrivalLocation,
          classType: this.planeSearchArr.classType,
          isOneway: this.planeSearchArr.isOneway
        },
      })
        .then(res => this.planeArr = res.data.airplainInfoList,)
      console.log(this.planeArr);
      const arriveDateTime = new Date(`${this.planeArr.arriveDate}T${this.planeArr.arriveTime}`);
      const departureDateTime = new Date(`${this.planeArr.departureDate}T${this.planeArr.depatureTime}`);

      // 取得當前日期和時間
      const currentDate = new Date();

      // 比較當前日期和發出日期
      if (currentDate < departureDateTime) {
        this.aaa = "飛機尚未起飛";
      } else if (currentDate >= departureDateTime && currentDate < arriveDateTime) {
        this.aaa = "飛機已經起飛，但尚未抵達";
      } else {
        this.aaa = "飛機已經抵達目的地";
      }
    },
    //是否抵達
    calculateFlightStatus(lol) {
      const arriveDateTime = new Date(`${lol.arriveDate}T${lol.arriveTime}`);
      const departureDateTime = new Date(`${lol.departureDate}T${lol.depatureTime}`);
      const currentDate = new Date();

      if (currentDate < departureDateTime) {
        return "尚未起飛";
      } else if (currentDate >= departureDateTime && currentDate < arriveDateTime) {
        return "已起飛，尚未抵達";
      } else {
        return "已抵達";
      }
    },
    //創建按鈕
    createFlight() {
      this.$router.push("/BackCreateFlight");
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    backToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    ...mapState(counter, ['plane', 'planeSearchArr', 'planeUpdate'])
  },
  components: {},
  mounted() {
    this.setPP(3);
    this.searchPlaneAA();
  },
};
</script>

<template>
  <div class="body">
    <div class="header">
      <span id="start">航班管理</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="searchBlock">
          <div class="no">
            <span>出發地 : </span>
            <select name="" id="" v-model="planeSearchArr.departureLocation">
              <option value="">全部地區</option>
              <option value="台北,臺灣">台北,臺灣</option>
              <option value="澳門">澳門</option>
              <option value="東京">東京</option>
              <option value="大阪">大阪</option>
              <option value="函館">函館</option>
              <option value="沖繩">沖繩</option>
              <option value="曼谷">曼谷</option>
              <option value="胡志明市">胡志明市</option>
              <option value="新加坡">新加坡</option>
              <option value="洛杉磯">洛杉磯</option>
              <option value="舊金山">舊金山</option>
            </select>
          </div>
          <div class="no">
            <span>目的地 : </span>
            <label for="">
              <select name="" id="" v-model="planeSearchArr.arrivalLocation">
                <option value="">全部地區</option>
                <option value="台北">台北,臺灣</option>
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
            </label>
          </div>
          <input type="checkbox" name="" v-model="planeSearchArr.isOneway" id="">
        </div>
        <!-- <div class="no">
          <span>目的地 : </span>
          <label for="">
            <input type="text" name="" placeholder="請輸入目的地" id="" v-model="plane.arrivalLocation">
          </label>
        </div> -->
        <div class="searchBlock">
          <div class="date">
            <span>出發日期 : </span>
            <input type="date" name="" id="" v-model="planeSearchArr.departureDate">
          </div>
          <div class="date to">
            <span>抵達日期 : </span>
            <input type="date" name="" id="" v-model="planeSearchArr.arrivalDate">
          </div>
        </div>
        <button type="submit" @click="re0">清空搜尋</button>
        <button type="submit" @click="searchPlane">搜尋</button>
        <button type="submit" @click="createFlight">創建</button>
      </div>
      <div class="inside">
        <table>
          <tr>
            <th class="b1 bb">/</th>
            <th class="no bb">航班編號</th>
            <th class="place bb">出發地</th>
            <th class="place bb">目的地</th>
            <th class="date bb">出發日期 至 抵達日期</th>
            <th class="plane bb">飛機狀態</th>
            <th class="plane bb">是否來回</th>
            <th class="b7 bb">預計操作</th>
          </tr>
          <tr v-for="(item, index) in planeArr" :key="index">
            <td class="bb"><input type="checkbox" /></td>
            <td class="bb">No.{{ item.airplainId }}</td>
            <td class="bb">{{ item.departureLocation }}</td>
            <td class="bb">{{ item.arrivalLocation }}</td>
            <td class="bb">{{ item.departureDate }} {{ item.depatureTime }} <i class="fa-solid fa-right-long"></i> {{
              item.arriveDate }} {{ item.arriveTime }}
            </td>
            <td class="bb">{{ calculateFlightStatus(item) }}
            </td>
            <td class="bb" v-show="!item.isOneway">來回</td>
            <td class="bb" v-show="item.isOneway">單程</td>
            <td class="bb">
              <button @click="openSweetAlert(item, index)">修改</button>
            </td>
          </tr>
          <tr><a href="http://localhost:5173/Backstage/BackPlane#start">BackToTop</a></tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;

  .header {
    width: 82%;
    height: 10vh;
    text-align: center;
    font-size: 3rem;

    span {}
  }

  .content {
    // border: 1px solid black;
    width: 82%;
    height: 90vh;
    background-color: rgb(240, 240, 240);

    .search {
      position: relative;
      display: flex;
      box-sizing: border-box;
      flex-wrap: wrap;
      width: 100%;
      // border: 1px solid red;
      align-items: start;
      justify-content: center;

      .searchBlock {
        width: 100%;
        display: flex;
        justify-content: center;
        // justify-content: space-between;

        .no {
          padding: 2px;
          font-size: 2rem;
          font-weight: 500;

          span {
            margin-left: 1rem;
          }

          select {
            width: 12rem;
            height: 2rem;
            text-align: center;
            font-size: 1.5rem;
            border-radius: .7rem;
          }
        }


        .date {
          margin-top: .8rem;
          margin-bottom: .8rem;
          font-weight: 500;
          font-size: 1.4rem;

          span {
            margin-left: 1rem;
          }

          input {
            width: 13rem;
            height: 2rem;
            border-radius: .5rem;
            text-align: center;
          }
        }

        .to {
          // padding-left: 8.2rem;
        }

      }

      button {
        // position: absolute;
        right: 5rem;
        bottom: 0.5rem;
        margin-left: 6rem;
        border-radius: 0.5rem;
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

    .inside {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: .8rem;
      background-color: white;
      // padding: 25px;

      th {
        background-color: rgb(90, 90, 90);
        color: white;
        padding: 10px;
      }

      tr {
        height: 3rem;
        border: 1px solid black;

        .bb {
          position: relative;

          a {
            text-decoration: none;
          }
        }

        .b1 {
          width: 50px;
        }

        .no {
          width: 7rem;
        }

        .place {
          width: 10rem;
        }

        .date {
          width: 20rem;
        }

        .plane {
          width: 10rem;
        }

        .b7 {
          width: 7rem;
        }

        td {
          background-color: rgb(248, 246, 246);
        }

        a {
          text-decoration: none
        }
      }
    }
  }
}
</style>
