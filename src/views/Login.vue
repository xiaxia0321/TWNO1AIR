<script>
import counter from "../stores/counter";
import { mapState, mapActions } from 'pinia'
export default {
    data() {
        return {
        }
    },
    methods: {
        toLogin() {
            this.$router.push('/Submit')
        }
    },
}
</script>

<template>
    <div class="loginArea">
        <div class="loginInput">
            <div class="loginInputArea">
                <h1>會員登入</h1>
                <br><br>
                <label for="" id="inputAccount">帳號：</label>
                <input type="text" placeholder="請輸入帳號">
                <br><br><br>
                <label for="">密碼：</label>
                <input type="text" placeholder="請輸入密碼">
                <br><br><br><br>
                <button class="buttonLoginIn" id="buttonLoginIn">登入</button>
                <button class="buttonForgotPassword" id="buttonForgotPassword">忘記密碼</button>
                <button class="buttonSubmit" @click="toLogin()">註冊</button>
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

        /* text-align: center; */
        .loginInputArea {
            margin-top: 20px;

            .buttonLoginIn {
                margin-right: 20px;
            }

            .buttonForgotPassword {
                margin-right: 20px;
            }
        }
    }
}</style>