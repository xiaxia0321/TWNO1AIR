<script>
import axios from "axios";
import counter from "../stores/counter"
import { mapState, mapActions } from "pinia"
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            account: "",
            email: "",
            showPassword: false,
        }
    },
    computed: {
        ...mapState(counter, ['userPassword'])
    },
    methods: {
        show() {
            this.showPassword = !this.showPassword
        },
        goSubmit() {
            this.$router.push('/Submit');
        },
        goLogin() {
            this.$router.push('/Login');
        },
        revise() {
            console.log("run");
            if (this.account != "" || this.email != "") {
                axios({
                    url: 'http://localhost:8080/user/search',
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        account: this.account,
                        password: '',
                    },
                })
                    .then(res => this.userPassword.uuu = res.data.userList)
                console.log("this.userPassword.uuu");
                console.log(this.userPassword.uuu);
                if (this.email == this.userPassword.uuu[0].email) {
                    Swal.fire({
                        icon: "success",
                        text: "資料正確，將跳轉頁面",
                        showConfirmButton: true,
                    })
                    this.$router.push('/RevisePassword');
                } else {
                    Swal.fire({
                        icon: "error",
                        text: "資料錯誤",
                        showConfirmButton: true,
                    })
                }
            } else {
                Swal.fire({
                    icon: "error",
                    text: "資料未填寫",
                    showConfirmButton: true,
                })
            }
        }
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
                <h2><b>忘記密碼</b></h2>
                <br>
                <span><b>會員帳號：</b></span><br>
                <input type="text" class="input" v-model="this.account"><br>
                <span><b>會員信箱：</b></span><br>
                <input type="email" class="input" v-model="this.email">
                <button type="button" class="login" @click="goLogin()">取消</button>
                <button type="button" class="login" @click="revise()">確認</button>
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