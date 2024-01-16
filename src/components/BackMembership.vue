<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(counter, ['setPP',])
  },
  components: {
  },
  mounted() {
    this.setPP(2)
  }

}
</script>

<template>
  <div class="body">
    <div class="header">
      <span>BackMembership</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="no">
          <span>會員編號 : </span>
          <input type="text" name="" placeholder="請輸入航班號碼" id="" v-model="planNo">
        </div>
        <div class="no">
          <span>出發地 : </span>
          <input type="text" name="" placeholder="請輸入出發地" id="" v-model="departureLocation">
        </div>
        <div class="no">
          <span>目的地 : </span>
          <input type="text" name="" placeholder="請輸入目的地" id="" v-model="arrivalLocation">
        </div>
        <div class="date">
          <span>出發日期 : </span>
          <input type="date" name="" id="" v-model="departureDate">
        </div>
        <div class="date to">
          <span>抵達日期 : </span>
          <input type="date" name="" id="" v-model="arrivalDate">
        </div>
        <button type="submit">搜尋</button>
      </div>
      <div class="inside">
        <table>
          <tr>
            <th class="b1 bb">/</th>
            <th class="no bb">會員編號</th>
            <th class="place bb">出發地 departureLocation</th>
            <th class="place bb">目的地 arrivalLocation</th>
            <th class="date bb">出發日期</th>
            <th class="date bb">抵達日期</th>
            <th class="b7 bb">操作</th>
          </tr>
          <tr>
            <td class="bb"><input type="checkbox"></td>
            <td class="bb">No.0</td>
            <td class="bb">台北 , 台灣</td>
            <td class="bb">沖繩 , 日本</td>
            <td class="bb">2024-12-48</td>
            <td class="bb">2024-01-32</td>
            <td class="bb">
              <a href="">修改</a>
              <br>
              <a href="">刪除</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>1</td>
            <td>5</td>
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
          background-color: rgb(227, 227, 227);
          border-bottom: 1px solid black;
          background-color: rgb(248, 246, 246);
        }
      }

    }
  }
}
</style>

