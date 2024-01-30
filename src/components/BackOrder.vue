<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from 'axios';
export default {
  data() {
    return {
      OrderArr: {
      },
    }
  },
  computed: {
    ...mapState(counter, ['OrderSearchArr', 'OrderDelete'])
  },
  methods: {
    ...mapActions(counter, ['setPP',]),
    re0() {
      this.OrderSearchArr.getOrderId = "",
        this.OrderSearchArr.getArrivalDate = "",
        this.OrderSearchArr.getDepartureDate = "",
        this.OrderSearchArr.getArrivalLocation = "",
        this.OrderSearchArr.getDepartureLocation = "",
        this.OrderSearchArr.getAccount = "";
    },
    searchOrder() {
      axios({
        url: 'http://localhost:8080/order/search',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          order_id: this.OrderSearchArr.getOrderId,
          arrival_date: this.OrderSearchArr.getArrivalDate,
          departure_date: this.OrderSearchArr.getDepartureDate,
          arrival_location: this.OrderSearchArr.getArrivalLocation,
          departure_location: this.OrderSearchArr.getDepartureLocation,
          account: this.OrderSearchArr.getAccount,
        },
      })
        .then(res => this.OrderArr = res.data.orderList)
      console.log(this.OrderArr);
    },
    goDelete(num) {
      this.OrderDelete.ccc = this.OrderArr[num];
      console.log(this.OrderDelete.ccc);
      Swal.fire({
        title: "請問是否刪除?",
        text: "資料將被刪除?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "取消",
        confirmButtonText: "刪除!!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "已刪除!!",
            icon: "success"
          })
          console.log(this.OrderDelete.ccc.orderId);
          console.log(this.OrderDelete.ccc.account);
          axios({
            url: 'http://localhost:8080/order/delete',
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              orderId: this.OrderDelete.ccc.orderId,
              account: this.OrderDelete.ccc.account,
            },
          })
            .then(res => { console.log(this.res) },
            );
          setTimeout(this.reLoad, 3000);
        }
      })
    },
    reLoad() {
      this.$router.go(0);
    }
  },
  components: {
  },
  mounted() {
    this.setPP(4)
    this.searchOrder()
  }

}
</script>

<template>
  <div class="body">
    <div class="header">
      <span>訂單管理</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="bbc">
          <div class="no">
            <span>訂單ID : </span>
            <input type="text" name="" placeholder="請輸入訂單ID" id="" v-model="OrderSearchArr.getOrderId">
          </div>
          <div class="no">
            <span>出發地 : </span>
            <select name="" id="" v-model="OrderSearchArr.getDepartureLocation">
              <option value="">全部地區</option>
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
            </select>
          </div>
          <div class="no">
            <span>目的地 : </span>
            <select name="" id="" v-model="OrderSearchArr.getArrivalLocation">
              <!-- <option value="台北">台北</option> -->
              <option value="">全部地區</option>
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
            </select>
          </div>
        </div>
        <div class="bbc">
          <div class="no">
            <span>帳戶 : </span>
            <input type="text" name="" placeholder="請輸入帳號" id="" v-model="OrderSearchArr.getAccount">
          </div>
          <div class="date">
            <span>出發日期 : </span>
            <input type="date" name="" id="" v-model="OrderSearchArr.getDepartureDate">
          </div>
          <div class="date to">
            <span>抵達日期 : </span>
            <input type="date" name="" id="" v-model="OrderSearchArr.getArrivalDate">
          </div>
        </div>
        <div class="bbc" style="justify-content: center;">
          <button type="submit" @click="re0">清空搜尋</button>
          <button type="submit" @click="searchOrder">搜尋</button>
        </div>
      </div>
      <div class="inside">
        <table>
          <tr>
            <th class="account bb">帳戶帳號</th>
            <th class="no bb">編號</th>
            <th class="place bb">出發地</th>
            <th class="place bb">目的地</th>
            <th class="date bb">出發日期</th>
            <th class="date bb">抵達日期</th>
            <th class="peo bb">人數</th>
            <th class="money bb">金額</th>
            <th class="b7 bb">操作</th>
          </tr>
          <tr v-for="(item, index) in OrderArr" :key="index">
            <td>{{ item.account }}</td>
            <td>{{ item.orderId }}</td>
            <td>{{ item.departureLocation }}</td>
            <td>{{ item.arrivalLocation }}</td>
            <td>{{ item.departureDate }}</td>
            <td>{{ item.arrivalDate }}</td>
            <td>{{ item.numberOfPeople }}</td>
            <td>{{ item.price }}</td>
            <td>
              <p @click="goDelete(index)">刪除</p>
            </td>
            <!-- <td class="bb"><span href="" @click="delect">刪除</span></td> -->
            <!-- {{ item.orderId } -->
          </tr>
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
      box-sizing: border-box;
      flex-wrap: wrap;
      width: 100%;
      // border: 1px solid red;
      display: flex;
      align-items: baseline;
      justify-content: left;

      .bbc {
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: row;

        // justify-content: center;
        .no {
          padding: 2px;
          font-size: 2rem;
          font-weight: 500;

          span {
            margin-left: 1rem;
          }

          input {
            width: 15rem;
            height: 2rem;
            font-size: 1.5rem;
            border-radius: .7rem;
            text-align: center;
          }

          select {
            width: 15rem;
            height: 2rem;
            font-size: 1.5rem;
            border-radius: .7rem;
            text-align: center;
          }
        }


        .date {
          margin-top: .8rem;
          margin-bottom: .8rem;
          font-weight: 500;
          font-size: 1.4rem;
          padding-left: 1.1rem;

          span {}

          input {
            text-align: center;
            width: 11rem;
            height: 2rem;
            border-radius: .5rem;
          }
        }

        // .to {
        //   padding-left: 2.2rem;
        // }


        button {
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
    }

    .inside {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: .8rem;
      background-color: white;

      th {
        background-color: rgb(90, 90, 90);
        color: white;
        padding: 10px;
      }

      tr {
        height: 3rem;
        border: 1px solid black;

        .bb {

          a {
            text-decoration: none;
          }
        }

        .account {
          width: 8rem;
        }

        .no {
          width: 5rem;
        }

        .place {
          width: 7rem;
        }

        .date {
          width: 9rem;
        }

        .peo {
          width: 4rem;
        }

        .money {
          width: 4rem;
        }

        .b7 {
          width: 7rem;

        }

        td {
          background-color: rgb(248, 248, 246);
        }
      }

    }
  }
}
</style>

