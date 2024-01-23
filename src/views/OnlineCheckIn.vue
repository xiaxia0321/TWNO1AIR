<script>
import Swal from 'sweetalert2'
export default {
    data() {
        return {
        }
    },
    methods:{
        goOnlineCheckInTwo() {
            let ticketNumber = document.getElementById("ticketNumber")
            let surname = document.getElementById("surname")
            let givenName = document.getElementById("givenName")
            let checkbox = document.getElementById("checkbox")
            console.log(checkbox.value);
            if (ticketNumber.value == "" || surname.value == "" || givenName.value == "" ) {
                console.log("xxx")
                Swal.fire({
                    icon: "error",
                    text: "你有資料尚未填寫"
                })
                return
            }
            if ( checkbox.value == "on" ) {
                Swal.fire({
                    icon: "error",
                    text: "你尚未勾選隱私保護政策"
                })
            } else {
                // Swal.fire({
                //     icon: "success",
                //     text: "你已經註冊成功",
                //     showConfirmButton: true,
                // })
                this.$router.push('/OnlineCheckInTwo')
            }
            ticketNumber.value = "";
            surname.value = "";
            givenName.value = "";
            checkbox.value = "";
        },
    }
}
</script>
<template>
    <div class="body">
        <div class="content">
            <h2>線上報到</h2>
            <div class="checkInBox">
                <label for="">姓名</label>
                <input type="text" name="" id="ticketNumber" placeholder="請輸入正確名稱">　　　　
                <label for="">姓氏</label>
                <input type="text" name="" id="surname">　　　　
                <label for="">名字</label>
                <input type="text" name="" id="givenName">
                <br><br>
                <hr style="border: 2px solid gray;width: 900px;margin-left: 140px;">
                <br>
                <input type="checkbox" style="width: 20px;height: 20px;position: absolute;top: 54.5%;left: 34%;" id="checkbox">
                <span>提供本人資訊，代表本人確認且接受樂狗航空隱私保護政策</span>
                <button type="button" @click="goOnlineCheckInTwo">確認</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.body {
    width: 100vw;
    height: 100vh;

    .content {
        width: 100vw;
        height: 100vh;
        background-color: rgb(22, 26, 48);
        box-sizing: border-box;
        padding-top: 100px;
        padding-left: 150px;

        h2 {
            color: white;
            position: absolute;
            left: 11%;
            top: 24%;
        }

        .checkInBox {
            width: 80vw;
            height: 40vh;
            background-color: rgb(240, 236, 229);
            border-radius: 20px;
            box-sizing: border-box;
            padding-top: 60px;
            border: 2px solid gray;

            label {
                font-size: 14pt;
            }

            input {
                width: 200px;
                height: 40px;
                background-color: rgb(240, 236, 229);
                border-radius: 5px;
                border: 2px solid gray;
            }
            button{
                box-shadow: none;
                border-radius: 15px;
                width: 120px;
                height: 45px;
                border: none;
                background-color: rgb(108, 95, 91);
                position: absolute;
                left: 75%;
                top: 63%;
            }
        }
    }
}</style>
