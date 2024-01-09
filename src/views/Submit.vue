<script>
import counter from "../stores/counter";
import { mapState, mapActions } from 'pinia'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
        }
    },
    methods: {
        login(){
            this.$router.push('/')
        },
        toLogin() {
            this.$router.push('/Submit')
        },
        signUpCheck() {
            let inputAccount = document.getElementById("inputAccount")
            let inputPassword = document.getElementById("inputPassword")
            let inputRepeatPassword = document.getElementById("inputRepeatPassword")
            if (!inputAccount.value || !inputPassword.value || !inputRepeatPassword.value) {
                console.log("xxx")
                Swal.fire({
                    icon: "error",
                    text: "你有資料尚未填寫"
                })
                return
            }
            if (inputPassword.value !== inputRepeatPassword.value) {
                Swal.fire({
                    icon: "error",
                    text: "你輸入的密碼與確認的密碼不相符"
                })
            } else {
                Swal.fire({
                    icon: "success",
                    text: "你已經註冊成功",
                    showConfirmButton: true,
                })
            }
            inputAccount.value = "";
            inputPassword.value = "";
            inputRepeatPassword.value = "";
        },
    },
}
</script>

<template>
    <div class="loginArea">
        <div class="loginInput">
            <h1>會員註冊</h1>
            <div class="loginInputArea">
                <br><br>
                <label for="">信箱：</label>
                <input type="email" placeholder="請輸入信箱" id="inputAccount">
                <br><br><br>
                <label for="">密碼：</label>
                <input type="text" placeholder="請輸入密碼" id="inputPassword">
                <br><br><br><br>
                <label for="">請再次確認密碼：</label>
                <input type="text" placeholder="請再次輸入密碼" id="inputRepeatPassword">
                <br><br><br><br><br>
                <button class="buttonSubmit" @click="signUpCheck()">註冊</button>
                <button class="buttonSubmit" @click="login()" style="margin-left: 10rem;">返回</button>
            </div>
        </div>
    </div>
</template>

<style>
.loginArea {
    width: 100vw;
    height: 100vh;

    .loginInput {
        width: 40vw;
        height: 60vh;
        border: 2px solid black;
        border-radius: 15px;
        margin-left: 30vw;
        margin-top: 15vh;
        text-align: center;

        .loginInputArea {
            text-align: left;
            margin-top: 20px;
            margin-left: 10vw;

            .buttonLoginIn {
                margin-right: 20px;
            }

            .buttonForgotPassword {
                margin-right: 20px;
            }
            .buttonSubmit{
                background-color: none;
                border-radius: 15px;
                width: 5rem;
                height: 2rem;
                font-size: 1.3rem;
            }
        }
    }
}
</style>