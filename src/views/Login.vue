<script>
import counter from "../stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {};
  },
  methods: {
    toLogin() {
      this.$router.push("/Submit");
    },
  },
};
</script>

<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    登入
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">登入已獲得更多資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
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
                <button class="buttonSubmit" data-bs-dismiss="modal" @click="toLogin()">
                  註冊
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// .loginArea {
//   width: 100vw;
//   height: 100vh;

//   .loginInput {
//     width: 40vw;
//     height: 60vh;
//     border: 2px solid black;
//     border-radius: 15px;
//     margin-left: 30vw;
//     margin-top: 15vh;

//     /* text-align: center; */
//     .loginInputArea {
//       margin-top: 20px;

//       .buttonLoginIn {
//         margin-right: 20px;
//       }

//       .buttonForgotPassword {
//         margin-right: 20px;
//       }
//     }
//   }
// }
</style>
