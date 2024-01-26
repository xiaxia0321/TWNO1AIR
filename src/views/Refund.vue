<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import axios from 'axios';
import Swal from "sweetalert2";
export default {
    data() {
        return {
            orderId: "",
            account: "",
            delete: {
            },
            // ticket: {
            //     id: ''
            // },
            // userInfo: {
            //     name: ''
            // },
            // agreementChecked: false
        }
    },
    computed: {
        ...mapState(counter, ['deleteArr'])
    },
    methods: {
        cancel() {
            let orderId = document.getElementById("orderId")
            let account = document.getElementById("account")
            let checkbox = document.getElementById("checkbox")

            axios({
                url: "http://localhost:8080/order/delete",
                method: "POST",
                withCredentials: true,
                headers: {
                    "Contect-Type": "applicatoin/json",
                },
                data: {
                    orderId: this.orderId,
                    account: this.account,
                },
            }).then((res) => {
                if (
                    orderId.value == "" ||
                    account.value == ""
                ) {
                    Swal.fire({
                        icon: "error",
                        text: "你有資料尚未填寫",
                    });
                    return;
                }
                if (checkbox.checked == false) {
                    Swal.fire({
                        icon: "error",
                        text: "你尚未勾選隱私保護政策"
                    })
                } else {
                    Swal.fire({
                        icon: "success",
                        text: "你已退票成功",
                        showConfirmButton: true,
                    });
                }
                console.log(res);
                console.log(this.account);
                console.log(this.orderId);
                orderId.value = "",
                account.value = ""
            });
        }
    },
    // concel() {
    //     if (!this.ticket.id || !this.userInfo.name || !this.agreementChecked) {
    //         alert('請填寫所有必要訊息並同意退票規定！');
    //         return;
    //     } else {
    //         this.performCancellation();
    //     }
    // },
    // performCancellation() {
    //     alert('取消訂票成功。');
    // }
}
</script>

<template>
    <div class="screen">
        <h1>線上退票</h1>
        <div class="refund">
            <span>訂單編號：</span><input id="orderId" v-model="this.orderId" type="number" class="input"><br>
            <span>會員名稱：</span><input id="account" v-model="this.account" type="text" class="input">
            <input type="checkbox" id="checkbox"><span>本人已詳閱樂狗航空相關退票規定</span><br>
            <button type="button" @click="cancel()" class="comfirm">確認</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.screen {
    width: 100%;
    height: 100%;
    background-color: rgb(49, 48, 77);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .refund {
        width: 540px;
        height: 48vh;
        background-color: rgb(240, 236, 229);
        border-radius: 15px;
        // margin-left: 15vw;
        color: black;
        text-align: left;
        padding: 20px;
        position: 50% 50%;
    }

    .input {
        height: 50px;
        width: 500px;
        margin-bottom: 20px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(240, 236, 229);
    }

    .comfirm {
        margin-left: 400px;
    }
}
</style>