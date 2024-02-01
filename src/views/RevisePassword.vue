<script>
import axios from "axios";
import counter from "../stores/counter"
import { mapState, mapActions } from "pinia"
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            passwordCheck: "",
            password: "",
        }
    },
    computed: {
        ...mapState(counter, ['userPassword'])
    },
    methods: {
        show() {
            this.showPassword = !this.showPassword
        },
        goLogin() {
            this.$router.push('/Login');
        },
        revise() {
            console.log("run");
            if (this.password != "" && this.passwordCheck != "") {
                if (this.password == this.passwordCheck) {
                    axios({
                        url: 'http://localhost:8080/user/update',
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: {
                            userId: this.userPassword.uuu[0].userId,
                            account: this.userPassword.uuu[0].account,
                            password: this.password,
                            email: this.userPassword.uuu[0].email,
                            name: this.userPassword.uuu[0].name,
                            phone: this.userPassword.uuu[0].phone,
                            age: this.userPassword.uuu[0].age,
                            birthday: this.userPassword.uuu[0].birthday,
                        },
                    })
                    Swal.fire({
                        icon: "success",
                        text: "修改成功，將跳轉至登入頁面",
                        showConfirmButton: true,
                    })
                    this.$router.push('/Login');
                    // if (this.email == this.userPassword.uuu[0].email) {
                } else {
                    Swal.fire({
                        icon: "error",
                        text: "兩次輸入的密碼不一樣",
                        showConfirmButton: true,
                    })
                }
            } else {
                Swal.fire({
                    icon: "error",
                    text: "有資料未填寫",
                    showConfirmButton: true,
                })
            }
        }
    },
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
                <h2><b>修改密碼</b></h2>
                <br>
                <span><b>新密碼：</b></span><br>
                <input type="text" class="input" id="account" v-model="this.password"><br>
                <span><b>確認密碼：</b></span><br>
                <input type="password" class="input" v-model="this.passwordCheck">
                <button type="button" class="login" @click="goLogin()">取消</button>
                <button type="button" class="login" @click="revise()">修改</button>
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
    position: relative;
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
    margin: 0 2rem 0 2rem;
    background-color: rgb(49, 48, 77);
    color: white;
    box-shadow: none;
    border-radius: 15px;
    width: 80px;
    height: 40px;
    border: none;
}
</style>