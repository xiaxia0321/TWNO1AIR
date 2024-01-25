<script>
import axios from "axios";
import counter from "../stores/counter";
import { mapState, mapActions } from 'pinia'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            account: "",
            password: "",
            emails: "",
            user_name: "",
            phone: "",
        }
    },
    methods: {
        login() {
            this.$router.push('/')
        },
        toLogin() {
            this.$router.push('/Submit')
        },
        signUpCheck() {
            let inputName = document.getElementById("inputName")
            let inputPhone = document.getElementById("inputPhone")
            let inputEmail = document.getElementById("inputEmail")
            let inputPassword = document.getElementById("inputPassword")
            let inputRepeatPassword = document.getElementById("inputRepeatPassword")
            let inputUser = document.getElementById("inputUser")
            axios({
                url: 'http://localhost:8080/user/create',
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Contect-Type': 'applicatoin/json'
                },
                data: {
                    account: this.account,
                    password: this.password,
                    emails: this.emails,
                    user_name: this.user_name,
                    phone: this.phone
                },
            }).then(res => {
                if (inputPassword.value == "" || inputRepeatPassword.value == "" ||
                    inputName.value == "" || inputPhone.value == "" || inputEmail.value == "") {
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
                    this.$router.push('/User')
                }
                inputName.value = "";
                inputPhone.value = "";
                inputEmail.value = "";
                inputPassword.value = "";
                inputRepeatPassword.value = "";
                inputUser = "";
            })
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
                <label for="" style="font-size: 14pt;">姓名：</label>　　　
                <input type="text" placeholder="請輸入正確的姓名" id="inputName" class="name" v-model="this.account" style="margin-left: 5px;">
                <br><br>
                <label for="" style="font-size: 14pt;">密碼：</label>　　　
                <input type="password" placeholder="請輸入密碼" id="inputPassword" class="password" v-model="this.password" style="margin-left: 5px;width: 298px;">
                <br><br>
                <label for="" style="font-size: 14pt;">確認密碼：</label>　
                <input type="password" placeholder="請再次輸入密碼" id="inputRepeatPassword" class="repeatPassword" style="width: 298px;">
                <br><br>
                <label for="" style="font-size: 14pt;">信箱：</label>　　　
                <input type="email" placeholder="請輸入信箱" id="inputEmail" class="email" v-model="this.emails" style="margin-left: 5px;">
                <br><br>
                <label for="" style="font-size: 14pt;">使用者名稱：</label>
                <input type="text" placeholder="請輸入使用者名稱(非必填)" id="inputUser" class="user" v-model="this.user_name">
                <br><br>
                <label for="" style="font-size: 14pt;">電話：</label>　　　
                <input type="number" placeholder="請輸入手機號碼" id="inputPhone" class="phone" v-model="this.phone" style="width: 303px;margin-left: 4px;">
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
        height: 70vh;
        border: 2px solid black;
        border-radius: 15px;
        margin-left: 15vw;
        text-align: center;
        background-color: rgb(240, 236, 229);
        margin-bottom: 60px;

        .loginInputArea {
            text-align: left;
            margin-top: 10px;
            margin-left: 10vw;

            .name {
                width: 300px;
                height: 35px;
                // background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }

            .phone {
                width: 300px;
                height: 35px;
                // background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }

            .email {
                width: 300px;
                height: 35px;
                // background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }

            .password {
                width: 300px;
                height: 35px;
                // background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }

            .repeatPassword {
                width: 300px;
                height: 35px;
                // background-color: rgb(240, 236, 229);
                border: 2px gray solid;
                border-radius: 5px;
            }

            .user {
                width: 300px;
                height: 35px;
                // background-color: rgb(240, 236, 229);
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
            }
        }
    }
}
</style>