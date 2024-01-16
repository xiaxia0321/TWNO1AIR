<script>
import counter from "../stores/counter"
import { mapState, mapActions } from "pinia"
import Swal from 'sweetalert2'
export default {
    data() {
        return {
        }
    },
    // methods: {
    //     toLogin() {
    //         this.$router.push('/Submit')
    //     },
    //     signUpCheck() {
    //         let inputAccount = document.getElementById("inputAccount")
    //         let inputPassword = document.getElementById("inputPassword")
    //         let inputRepeatPassword = document.getElementById("inputRepeatPassword")
    //         if (!inputAccount.value || !inputPassword.value || !inputRepeatPassword.value) {
    //             console.log("xxx")
    //             Swal.fire({
    //                 icon: "error",
    //                 text: "你有資料尚未填寫"
    //             })
    //             return
    //         }
    //         if (inputPassword.value !== inputRepeatPassword.value) {
    //             Swal.fire({
    //                 icon: "error",
    //                 text: "你輸入的密碼與確認的密碼不相符"
    //             })
    //         } else {
    //             Swal.fire({
    //                 icon: "success",
    //                 text: "你已經註冊成功",
    //                 showConfirmButton: true,
    //             })
    //         }
    //         inputAccount.value = "";
    //         inputPassword.value = "";
    //         inputRepeatPassword.value = "";
    //     },
    // },
}
</script>

<template>
  <!-- ==========登入頁=========== -->
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">登入已獲得更多資訊</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <div class="modal-body">
          <div class="loginArea">
            <div class="loginInput">
              <div class="loginInputArea">
                <h1>會員登入</h1>
                <br /><br />
                <label for="" id="inputAccount">帳號：</label>
                <input type="text" placeholder="請輸入帳號" />
                <br /><br /><br />
                <label for="">密碼：</label>
                <input type="text" placeholder="請輸入密碼" />
                <br /><br /><br /><br />
                <button class="buttonLoginIn" id="buttonLoginIn">登入</button>
                <button class="buttonForgotPassword" id="buttonForgotPassword">
                  忘記密碼
                </button>
                <!-- 增加data-bs-dismiss="modal"代表跳轉頁面後不會灰畫面 -->
              </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">尚未註冊</button>
      </div>
    </div>
  </div>
</div>
<!-- ==========註冊頁========== -->
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">加入樂狗</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="loginArea">
        <div class="loginInput">
            <h1>會員註冊</h1>
            <div class="loginInputArea">
                <br><br>
                <!-- <label for="">信箱：</label> -->
                <p>信箱</p>
                <input type="email" placeholder="請輸入信箱" id="inputAccount">
                <br><br><br>
                <!-- <label for="">密碼：</label> -->
                <p>密碼</p>
                <input type="text" placeholder="請輸入密碼" id="inputPassword">
                <br><br><br>
                <!-- <label for="">確認密碼：</label> -->
                <p>確認密碼</p>
                <input type="text" placeholder="請再次輸入密碼" id="inputRepeatPassword">
                <br><br><br><br><br>
                <button class="buttonSubmit" @click="signUpCheck()">註冊</button>
            </div>
        </div>
    </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">返回登入</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">登入</a>
</template>

<style scoped lang="scss">
</style>
