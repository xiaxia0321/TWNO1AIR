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
            <br>
            <h1>會員註冊</h1>
            <br>
            <div class="loginInputArea">
                <label for="" style="font-size: 14pt;">信箱：</label>
                <input type="email" placeholder="請輸入信箱" id="inputAccount" class="email">
                <br><br>
                <label for="" style="font-size: 14pt;">密碼：</label>
                <input type="text" placeholder="請輸入密碼" id="inputPassword" class="password">
                <br><br>
                <label for="" style="font-size: 14pt;">請再次確認密碼：</label>
                <input type="text" placeholder="請再次輸入密碼" id="inputRepeatPassword" class="repeatPassword">
                <br><br><br>
                <button class="buttonSubmit" @click="signUpCheck()">註冊</button>
                <button class="buttonSubmit" @click="login()" style="margin-left: 40px;">返回</button>
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
    padding-top: 150px;
    .loginInput {
        width: 70vw;
        height: 48vh;
        border: 2px solid black;
        border-radius: 15px;
        margin-left: 15vw;
        text-align: center;
        background-color: rgb(240, 236, 229);

        .loginInputArea {
            text-align: left;
            margin-top: 10px;
            margin-left: 10vw;
            .email{
                width: 300px;
                height: 35px;
                background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }

            .password{
                width: 300px;
                height: 35px;
                background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }
            .repeatPassword{
                width: 300px;
                height: 35px;
                background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }
            .buttonLoginIn {
                margin-right: 20px;
            }

            .buttonForgotPassword {
                margin-right: 20px;
            }
            .buttonSubmit{
                box-shadow: none;
                border-radius: 15px;
                width: 80px;
                height: 40px;
                margin-left: 560px;
                border: none;
                background-color: rgb(108, 95, 91);
            }
        }
    }
}
</style>