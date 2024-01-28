<script>
import axios from "axios";
import counter from "../stores/counter"
import { mapState, mapActions } from "pinia"
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      account: "",
      password: "",
      isEntityAccount: true,
      isEntityPassword: true,
      showPassword: false,
      user: []
    }
  },
  computed: {
    ...mapState(counter, ['user', 'userDate'])
  },
  methods: {
    login() {
      //確認輸入帳號 + 密碼
      this.isEntityAccount = !!this.account
      this.isEntityPassword = !!this.password
      //確認輸入正確帳號 + 密碼
      if (this.account && this.password) {
        if (this.account == "a789521" && this.password == "789521") {
          this.$router.push('/Backstage');
          return;
        }
        fetch('http://localhost:8080/user/search',
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
              account: this.account,
              password: this.password,
            })
          }).then(response => response.json())
          .then(res => {
            console.log(res)
            if (res.code == "200") {
              console.log("登入成功");
              Swal.fire({
                icon: "success",
                text: "登入成功",
                showConfirmButton: true,
              })
              console.log(res.userList);
              this.userDate.uuu = res.userList,
                console.log(this.userDate);
              console.log(this.userDate.uuu);
              this.$router.push('/User');
              // $cookies.set("account", this.account)
            }
            else {
              Swal.fire({
                icon: "error",
                text: "帳號或密碼有誤",
              })
            }
          })
      }
      else {
        Swal.fire({
          icon: "error",
          text: "帳號或密碼未輸入",
        })
      }
    },
    show() {
      this.showPassword = !this.showPassword
    },
    // search() {
    //   console.log(this.userData);
    //   fetch('http://localhost:8080/user/search', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       account: this.userData.account,
    //       password: this.userData.password,
    //     })
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       this.userList = data.userList
    //       console.log(this.userList)
    //     })
    //     .catch(error => console.log(error))
    // },
    // toLogin() {
    //   this.search();
    //   axios({
    //     url: 'http://localhost:8080/api/login',
    //     method: 'POST',
    //     withCredentials: true,
    //     headers: {
    //       'Contect-Type': 'applicatoin/json'
    //     },
    //     data: {
    //       account: this.account,
    //       password: this.password,
    //     },
    //   }).then(res => {
    //     // console.log(this.data);
    //     let account = document.getElementById("account")
    //     let password = document.getElementById("password")
    //     if (account.value == "" || password.value == "") {
    //       Swal.fire({
    //         icon: "error",
    //         text: "你有資料尚未填寫"
    //       })
    //       return
    //     }
    //     else {
    //       Swal.fire({
    //         icon: "success",
    //         text: "登入成功",
    //         showConfirmButton: true,
    //       })
    //       this.$router.push('/User')
    //     }
    //   })
    // },
  }
}
</script>

<template>
  <div class="screen">
    <div class="main">
      <div class="left">
        <h4>登機吧！世界就在你的眼前！</h4>
        <img src="./圖片/Lovepik_com-610599676-Cartoon hand drawn air travel around the world.png" class="img">
      </div>
      <div class="right">
        <h2><b>登入</b></h2>
        <br>
        <span><b>會員帳號：</b></span><br>
        <input type="text" class="input" id="account" v-model="this.account"><br>
        <span><b>密碼：</b></span><br>
        <!-- <input type="password" class="input" id="password" :type="showPassword ? 'text' : 'password'" v-model="password"><br>
        <i class="fa-solid fa-eye eye" @click="show()" v-show="showPassword"></i>
        <i class="fa-solid fa-eye-slash eye" v-show="!showPassword" @click="show()"></i> -->
        <input class="input" :type="showPassword ? 'text' : 'password'" v-model="password">
        <i class="fa-solid fa-eye-slash eye" v-show="!showPassword" @click="show()"></i>
        <i class="fa-solid fa-eye eye" v-show="showPassword" @click="show()"></i>
        <button type="button" class="login" @click="login()">登入</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen {
  width: 100%;
  height: 100%;
  background-color: rgb(22, 26, 48);
  box-sizing: border-box;
  padding-top: 90px;
}

.main {
  width: 100%;
  height: 500px;
  background-color: rgb(240, 236, 229);
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  width: 500px;
  height: 500px;
  padding: 50px;
}

.img {
  width: 400px;
}

.right {
  width: 400px;
  height: 400px;
  padding: 50px;
  background-color: rgb(182, 187, 196);
  border-radius: 5%;
  color: white;
  text-align: left;
}

.input {
  width: 300px;
  height: 30px;
  border: 0px;
  background-color: rgb(240, 236, 229);
  margin-bottom: 20px;
  border-radius: 5px;
}

.login {
  margin-left: 220px;
  margin-top: 50px;
  background-color: rgb(49, 48, 77);
  color: white;
  box-shadow: none;
  border-radius: 15px;
  width: 80px;
  height: 40px;
  border: none;
}

.fa-eye {
  position: absolute;
  left: 75%;
  top: 59%;
  color: rgb(49, 48, 77);
}

.fa-eye-slash {
  position: absolute;
  left: 75%;
  top: 59%;
  color: rgb(49, 48, 77);
}

.fa-eye {
  position: absolute;
  left: 75%;
  top: 59%;
  color: rgb(49, 48, 77);
}

.fa-eye-slash {
  position: absolute;
  left: 75%;
  top: 59%;
  color: rgb(49, 48, 77);
}
</style>