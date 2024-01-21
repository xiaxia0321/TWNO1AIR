<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
export default {
  data() {
    return {
      planeArr: [],
    }
  },
  methods: {
    ...mapActions(counter, ['setPP',]),
    searchPlane() {
      axios({
        url: 'http://localhost:8080/airplainInfo/search',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          departureDate: this.plane.departureDate,
          arrivalDate: this.plane.arrivalDate,
          departureLocation: this.plane.departureLocation,
          arrivalLocation: this.plane.arrivalLocation,
          classType: this.plane.classType,
          isOneway: this.plane.isOneway
        },
      })
        .then(res => this.planeArr = res.data.airplainInfoList ,)
      console.log(this.planeArr)
    },
  },
  computed: {
    ...mapState(counter, ['plane'])
  },
  components: {
  },
  mounted() { 
    this.setPP(3)
    this.searchPlane()
  }

}
</script>

<template>
  <div class="body">
    <div class="header">
      <span>BackPlane</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="no">
          <span>出發地 : </span>
          <input type="text" name="" placeholder="請輸入出發地" id="" v-model="plane.departureLocation">
        </div>
        <div class="no">
          <span>目的地 : </span>
          <label for="">
            <input type="text" name="" placeholder="請輸入目的地" id="" v-model="plane.arrivalLocation">
          </label>
        </div>
        <!-- <div class="no">
          <span>目的地 : </span>
          <label for="">
            <input type="text" name="" placeholder="請輸入目的地" id="" v-model="plane.arrivalLocation">
          </label>
        </div> -->
        <div class="date">
          <span>出發日期 : </span>
          <input type="date" name="" id="" v-model="plane.departureDate">
        </div>
        <div class="date to">
          <span>抵達日期 : </span>
          <input type="date" name="" id="" v-model="plane.arrivalDate">
        </div>
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
            <th class="date bb">出發日期</th>
            <th class="date bb">抵達日期</th>
            <th class="b7 bb">預計操作</th>
          </tr>
          <tr v-for="(item, index) in planeArr" :key="index">
            <td class="bb"><input type="checkbox"></td>
            <td class="bb">No.{{ item.airplainId }}</td>
            <td class="bb">{{ item.departureLocation }}</td>
            <td class="bb">{{ item.arrivalLocation }}</td>
            <td class="bb">{{ item.departureDate }}</td>
            <td class="bb">{{ item.arriveDate }}</td>
            <td></td>
            <!-- <td class="bb">
              <a href="">修改</a>
              <br>
              <a href="">刪除</a>
            </td> -->
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
    // border: 1px solid black;
    width: 82%;
    height: 90vh;

    .search {
      position: relative;
      box-sizing: border-box;
      flex-wrap: wrap;
      width: 100%;
      // border: 1px solid red;
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

        .b1 {
          width: 50px;
        }

        .no {
          width: 7rem;
        }

        .place {
          width: 15rem;
        }

        .date {
          width: 12rem;
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

