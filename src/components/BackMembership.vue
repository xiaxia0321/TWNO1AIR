<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
export default {
  data() {
    return {
      user: [],
      accountININ: '',
    }
  },
  methods: {
    ...mapActions(counter, ['setPP',]),
    searchUser() {
      axios({
        url: 'http://localhost:8080/user/search',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          account: this.accountININ,
          password: '',
        },
      })
        .then(res => this.user = res.data.userList)
      console.log(this.user);
    },
    re0(){
      this.accountININ = "";
    }
  },
  components: {
  },
  mounted() {
    this.setPP(2)
    this.searchUser()
  }

}
</script>

<template>
  <div class="body">
    <div class="header">
      <span>會員管理</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="no">
          <span>會員帳號 : </span>
          <input type="text" name="" placeholder="請輸入帳號" id="" v-model="accountININ">
        </div>
        <!-- <div class="no">
          <span>會員編號 : </span>
          <input type="text" name="" placeholder="請輸入ID" id="" v-model="userId">
        </div>
        <div class="no">
          <span>會員信箱 : </span>
          <input type="text" name="" placeholder="請輸入信箱" id="" v-model="userEmail">
        </div> -->
        <!-- <div class="no">
          <span>會員名字 : </span>
          <input type="text" name="" placeholder="請輸入名字" id="" v-model="userName">
        </div> -->
        <!-- <div class="no">
          <span>手機號碼 : </span>
          <input type="text" name="" placeholder="請輸入手機號碼" id="" v-model="userPhone">
        </div> -->
        <button type="submit" @click="re0()">清空搜尋</button>
        <button type="submit" @click="searchUser()">搜尋</button>
      </div>
      <div class="inside">
        <table>
          <tr>
            <th class="b1 bb">ID</th>
            <th class="no bb">帳號</th>
            <th class="place bb">信箱</th>
            <th class="date bb">帳戶名稱</th>
            <th class="date bb">手機號碼</th>
            <th class="b7 bb">點數</th>
          </tr>
          <tr v-for="(item, index) in user" :key="index">
            <td class="bb">{{ item.userId }}</td>
            <td class="bb">{{ item.account }}</td>
            <td class="bb">{{ item.email }}</td>
            <td class="bb">{{ item.name }}</td>
            <td class="bb">{{ item.phone }}</td>
            <td class="bb">{{ item.point }}</td>
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
      justify-content: center;

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
      }

      .to {
        padding-left: 8.2rem;
      }


      button {
        margin-left: 6rem;
        margin-bottom: .6rem;
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
          background-color: rgb(227, 227, 227);
          border-bottom: 1px solid black;
          background-color: rgb(248, 246, 246);
        }
      }

    }
  }
}
</style>

