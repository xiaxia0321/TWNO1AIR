<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
export default {
  data() {
    return {
      plane:[],
      order:[],
      user:[],
    }
  },
  methods: {
    searchPlane() {
      axios({
        url: 'http://localhost:8080/airplainInfo/search',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          departureDate: "",
          arrivalDate: "",
          departureLocation: "",
          arrivalLocation: "",
          classType: "",
          isOneway: ""
        },
      })
        .then(res => this.plane = res.data.airplainInfoList)
      console.log(this.plane)
    },
    searchOrder() {
      axios({
        url: 'http://localhost:8080/order/search',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          order_id: "",
          arrival_date: "",
          departure_date: "",
          arrival_location: "",
          departure_location: "",
          account: "",
        },
      })
        .then(res => this.order = res.data.orderList)
      console.log(this.Order);
      console.log(this.order)
    },
    searchUser() {
      axios({
        url: 'http://localhost:8080/user/search',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          account: '',
          password: '',
        },
      })
        .then(res => this.user = res.data.userList)
      console.log(this.user);
    },
    ...mapActions(counter, ['setPP',]),
    goMember() {
      this.$router.push('/Backstage/BackMembership')
    },
    goPlane() {
      this.$router.push('/Backstage/BackPlane')
    },
    goOrder() {
      this.$router.push('/Backstage/BackOrder')
    },
  },
  components: {
  },
  mounted() {
    this.setPP(1)
    this.searchPlane()
    this.searchOrder()
    this.searchUser()
  }

}
</script>

<template>
  <div class="body">
    <div class="header">
      <span>Home</span>
    </div>
    <div class="content">
      <div class="block member" @click="goMember">
        <div class="icon" style="background-image: url(/user.png);">
        </div>
        <p>會員管理</p>
        <p>目前會員數 : {{ this.user.length }} </p>
      </div>
      <div class="block plane" @click="goPlane">
        <div class="icon" style="background-image: url(/planestart.png);">
        </div>
        <p>航班管理</p>
        <p>總航班數量 : {{ this.plane.length }}</p>
      </div>
      <div class="block Order" @click="goOrder">
        <div class="icon" style="background-image: url(/order.png);">
        </div>
        <p>訂單管理</p>
        <p>目前訂單數 : {{ this.order.length }}</p>
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
  }

  .content {
    border: 1px solid black;
    width: 82%;
    height: 90vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(240, 240, 240);

    :hover {
      transition: .5s;
      background-color: rgb(211, 215, 223);
    }

    :active {
      background-color: rgb(182, 187, 196);
    }

    .block {
      border-radius: 2rem;
      width: 30%;
      height: 80%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-weight: 600;
        font-size: 1.5rem;
      }

      .icon {
        width: 4.5rem;
        height: 5rem;
        background-size: contain;
        background-repeat: no-repeat;
      }

    }

    .member {}

    .plane {}

    .order {}
  }
}
</style>
