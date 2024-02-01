<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      showPassword: false,
      showPasswordTwo: false,
    };
  },
  computed: {
    ...mapState(counter, ["user", 'userDate']),
  },
  methods: {
    //返回登入頁面
    login() {
      this.$router.push("/");
    },

    show() {
      this.showPassword = !this.showPassword;
    },
    showTwo() {
      this.showPasswordTwo = !this.showPasswordTwo;
    },
    //創建帳號用
    signUpCheck() {
      let inputAccount = document.getElementById("inputAccount");
      let inputPhone = document.getElementById("inputPhone");
      let inputEmail = document.getElementById("inputEmail");
      let inputPassword = document.getElementById("inputPassword");
      let inputRepeatPassword = document.getElementById("inputRepeatPassword");
      let inputUser = document.getElementById("inputUser");
      let inputBirthday = document.getElementById("inputBirthday");
      let inputAge = document.getElementById("inputAge");
      axios({
        url: "http://localhost:8080/user/create",
        method: "POST",
        withCredentials: true,
        headers: {
          "Contect-Type": "applicatoin/json",
        },
        data: {
          account: this.user.account,
          password: this.user.password,
          user_name: this.user.userName,
          birthday: this.user.birthday,
          age: this.user.age,
          phone: this.user.phone,
          emails: this.user.email,
        },
      }).then((res) => {
        if (
          this.user.account == "" ||
          this.user.password == "" ||
          inputRepeatPassword.value == "" ||
          this.user.phone == "" ||
          this.user.email == "" ||
          this.user.birthday == "" ||
          this.user.age == ""
        ) {
          console.log("xxx");
          Swal.fire({
            icon: "error",
            text: "你有資料尚未填寫",
          });
          return;
        }
        if (inputPassword.value !== inputRepeatPassword.value) {
          Swal.fire({
            icon: "error",
            text: "你輸入的密碼與確認的密碼不相符",
          });
          return;
        }
        if (res.data.rtnCode === "ACCOUNT_EXISTED") {
          Swal.fire({
            icon: "question",
            text: "帳號已重複，請使用其他帳號進行註冊",
            showConfirmButton: true,
          });
          console.log("user");
          console.log(this.user);
          console.log("rtnCode");
          console.log(res.data.rtnCode);
          return;
        }
        if (res.data.rtnCode === "SUCCESSFUL") {
          Swal.fire({
            icon: "success",
            text: "你已經註冊成功,已發送測試信件",
            showConfirmButton: true,
          });
          console.log(res.data.rtnCode);
          console.log(this.user);
          this.$router.push("/Login"); //先註解
        }
        this.user.account = "",
          this.user.password = "",
          this.user.userName = "",
          inputRepeatPassword.value = "",
          this.user.phone = "",
          this.user.email = "",
          this.user.birthday = "",
          this.user.age = ""
      });
    },
    calculateAge() {
      const birthDate = new Date(this.user.birthday);
      const currentDate = new Date();

      let age = currentDate.getFullYear() - birthDate.getFullYear();

      if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
          currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      this.user.age = age;
    },
  },
};
</script>

<template>
  <div class="loginArea">
    <div class="loginInput">
      <br />
      <h1>會員註冊</h1>
      <br />
      <div class="loginInputArea">
        <label for="" style="font-size: 14pt">帳號：</label>　　　
        <input type="text" placeholder="請輸入帳號" id="inputAccount" class="name" v-model="user.account"
          style="margin-left: 5px" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" />
        <br /><br />
        <label for="" style="font-size: 14pt">密碼：</label>　　　
        <!-- <input class="input" :type="showPassword ? 'text' : 'password'" v-model="password">
                <i class="fa-solid fa-eye-slash eye" v-show="!showPassword" @click="show()"></i>
                <i class="fa-solid fa-eye eye" v-show="showPassword" @click="show()"></i> -->
        <!-- <i class="fa-solid fa-eye" @click="show()" style="position: absolute;left: 51%;top: 49.5%;"></i> -->
        <input :type="showPassword ? 'text' : 'password'" placeholder="請輸入密碼" id="inputPassword" class="password"
          style="margin-left: 5px; width: 298px" v-model="user.password" />
        <i class="fa-solid fa-eye-slash eye" v-show="!showPassword" @click="show()"
          style="position: absolute; left: 43%; top: 16%"></i>
        <i class="fa-solid fa-eye eye" v-show="showPassword" @click="show()"
          style="position: absolute; left: 43%; top: 16%"></i>
        <br /><br />
        <label for="" style="font-size: 14pt">確認密碼：</label>　
        <input :type="showPasswordTwo ? 'text' : 'password'" placeholder="請再次輸入密碼" id="inputRepeatPassword"
          class="repeatPassword" style="width: 298px;" />
        <i class="fa-solid fa-eye-slash eye" v-show="!showPasswordTwo" @click="showTwo()"
          style="position: absolute; left: 43%; top: 30%"></i>
        <i class="fa-solid fa-eye eye" v-show="showPasswordTwo" @click="showTwo()"
          style="position: absolute; left: 43%; top: 30%"></i>
        <!-- <i class="fa-solid fa-eye" @click="show()" style="position: absolute;left: 51%;top: 56.5%;"></i>
                <input type="password" placeholder="請再次輸入密碼" id="inputRepeatPassword" class="repeatPassword"
                    style="width: 298px;"> -->
        <br /><br />
        <label for="" style="font-size: 14pt">姓名：</label>
        <input type="text" placeholder="請輸入正確姓名" id="inputUser" class="user" v-model="user.userName"
          style="margin-left: 58px" />
        <br /><br />
        <label for="" style="font-size: 14pt">出生年月日：</label>　　　
        <input type="date" @change="calculateAge" placeholder="請輸入西元生日(ex:20000101)" id="inputBirthday" class="birthday"
          v-model="user.birthday" style="margin-right: 3rem;" />
        <label for="" style="font-size: 14pt">年齡 :</label>　　　
        <input type="number" style="width: 3rem; text-align: center;" placeholder="請輸入實際年齡" id="inputAge" class="age"
          v-model="user.age" disabled />
        <br /><br />
        <label for="" style="font-size: 14pt">電話：</label>　　　
        <input type="number" placeholder="請輸入手機號碼" id="inputPhone" class="phone" v-model="user.phone"
          style="width: 303px; margin-left: 4px" />
        <br /><br />
        <label for="" style="font-size: 14pt">信箱：</label>　　　
        <input type="email" placeholder="請輸入信箱" id="inputEmail" class="email" v-model="user.email"
          style="margin-left: 5px" />
        <button class="buttonSubmit" @click="signUpCheck()">註冊</button>
        <button class="buttonSubmit" @click="login()" style="margin-left: 40px">
          返回
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loginArea {
  width: 100vw;
  height: 100vh;
  background-color: rgb(22, 26, 48);
  box-sizing: border-box;
  padding-top: 100px;

  .loginInput {
    width: 70vw;
    height: 75vh;
    border: 2px solid black;
    border-radius: 15px;
    margin-left: 15vw;
    text-align: center;
    background-color: rgb(240, 236, 229);
    margin-bottom: 60px;

    .loginInputArea {
      text-align: left;
      margin-top: 5px;
      margin-left: 10vw;
      position: relative;

      .name {
        width: 300px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
      }

      .phone {
        width: 300px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
      }

      .email {
        width: 298px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
      }

      .password {
        width: 300px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
      }

      .birthday {
        width: 300px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
        margin-left: -50px;
      }

      .age {
        width: 300px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
        margin-left: 5px;
      }

      .repeatPassword {
        width: 300px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
      }

      .user {
        width: 300px;
        height: 35px;
        border: 2px gray solid;
        border-radius: 5px;
      }

      .buttonLoginIn {
        margin-right: 20px;
      }

      .buttonForgotPassword {
        margin-right: 20px;
      }

      .buttonSubmit {
        box-shadow: none;
        border-radius: 15px;
        width: 80px;
        height: 40px;
        margin-left: 560px;
        border: none;
        background-color: rgb(108, 95, 91);
        color: white;
      }
    }
  }
}
</style>
