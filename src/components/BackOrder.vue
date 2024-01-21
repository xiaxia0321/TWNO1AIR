<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
export default {
  data() {
    return {
      order: [],
    }
  },
  computed: {
    ...mapState(counter, ['Order'])
  },
  methods: {
    ...mapActions(counter, ['setPP',]),
    searchOrder() {
      axios({
        url: 'http://localhost:8080/order/search',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          order_id: this.Order.getOrderId,
          arrival_date: this.Order.getArrivalDate,
          departure_date: this.Order.getDepartureDate,
          arrival_location: this.Order.getArrivalLocation,
          departure_location: this.Order.getDepartureLocation,
          account: this.Order.getAccount,
        },
      })
        .then(res => this.order = res.data.orderList)
      console.log(this.Order);
      console.log(this.order)
    },
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
      <span>BackOrder</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="no">
          <span>訂單編號 : </span>
          <input type="text" name="" placeholder="請輸入航班號碼" id="">
        </div>
        <div class="no">
          <span>出發地 : </span>
          <input type="text" name="" placeholder="請輸入出發地" id="" v-model="Order.getDepartureLocation">
        </div>
        <div class="no">
          <span>目的地 : </span>
          <input type="text" name="" placeholder="請輸入目的地" id="" v-model="Order.getArrivalLocation">
        </div>
        <div class="date">
          <span>出發日期 : </span>
          <input type="date" name="" id="" v-model="Order.getDepartureDate">
        </div>
        <div class="date to">
          <span>抵達日期 : </span>
          <input type="date" name="" id="" v-model="Order.getArrivalDate">
        </div>
        <button type="submit" @click="searchOrder">搜尋</button>
      </div>
      <div class="inside">
        <table>
          <tr>
            <th class="account bb">account</th>
            <th class="no bb">編號</th>
            <th class="place bb">出發地</th>
            <th class="place bb">目的地</th>
            <th class="date bb">出發日期</th>
            <th class="date bb">抵達日期</th>
            <th class="peo bb">人數</th>
            <th class="money bb">金額</th>
            <th class="b7 bb">操作</th>
          </tr>
          <tr v-for="(item, index) in order" :key="index">
            <td>{{ item.account }}</td>
            <td>{{ item.orderId }}</td>
            <td>{{ item.departureLocation }}</td>
            <td>{{ item.arrivalLocation }}</td>
            <td>{{ item.departureDate }}</td>
            <td>{{ item.arrivalDate }}</td>
            <td>{{ item.numberOfPeople }}</td>
            <td>{{ item.price }}</td>
            <td class="bb"><a href="">修改&刪除</a></td>
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

  .header {
    width: 82%;
    height: 10vh;
    text-align: center;
    font-size: 3rem;

    span {}
  }

  .content {
    border: 1px solid black;
    width: 82%;
    height: 90vh;

    .search {
      position: relative;
      box-sizing: border-box;
      flex-wrap: wrap;
      width: 100%;
      border: 1px solid red;
      display: flex;
      align-items: baseline;
      justify-content: left;

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
        }
      }


      .date {
        margin-top: 10px;
        margin-bottom: 5px;
        font-weight: 500;
        font-size: 1.4rem;
        padding-left: 1.1rem;

        span {}

        input {
          width: 11rem;
          height: 2rem;
          border-radius: .5rem;
        }
      }

      .to {
        padding-left: 8.2rem;
      }


      button {
        position: absolute;
        right: 5rem;
        bottom: .5rem;
        border-radius: .5rem;
        width: 5rem;
        height: 2rem;
        background-color: #0062e3;
        color: white;
      }

    }

    .inside {
      width: 100%;
      display: flex;
      justify-content: center;
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

          a {
            text-decoration: none;
          }
        }

        .account {
          width: 3rem;
        }

        .no {
          width: 5rem;
        }

        .place {
          width: 7rem;
        }

        .date {
          width: 10rem;
        }

        .peo {
          width: 2rem;
        }

        .money {
          width: 4rem;
        }

        .b7 {
          width: 7rem;

        }

        td {
          background-color: rgb(248, 246, 246);
        }
      }

    }
  }
}
</style>

