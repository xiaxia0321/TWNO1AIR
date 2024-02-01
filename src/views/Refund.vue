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
        <div class="refund">
            <h2>線上退票</h2>
            <span style="font-size: 14pt;">訂單編號：</span><input id="orderId" v-model="this.orderId" type="number"
                class="input"><br>
            <span style="font-size: 14pt;">會員帳號：</span><input id="account" v-model="this.account" type="text" class="input">
            <input type="checkbox" id="checkbox">
            <!-- <span class="sure">本人已詳閱樂GO航空相關退票規定</span> -->
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal" id="gg">
                本人確認且接受樂go航空隱私保護政策
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">隱私權保護政策</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" style="text-align: left;">
                                樂go為落實個人資料保護及遵循中華民國個人資料保護法、歐盟一般資料保護規則（GDPR）及其他相關之個人資料保護法令之規定，制定本隱私保護政策，以達成個人資料隱私與安全之管理。
                                我們將於授權之特定目的範圍內，以合理安全的方式蒐集和使用您的個人資料，並確保您有查詢、修改、刪除、限制個人資料的利用及撤回您的同意等權利。此外，我們針對個人資料被竊取、竄改、洩漏或毀損等事故，設有資料外洩事故應變策略與計畫，並透過建立與維護完善的個人資料保護機制，承諾保障您個人資料之正確性和安全性。
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">了解</button>
                                <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                            </div>
                        </div>
                    </div>
                </div>
            <button type="button" @click="cancel()" class="comfirm">確認</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.screen {
    width: 100%;
    height: 100%;
    background-color: rgb(22, 26, 48);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .refund {
        width: 540px;
        height: 48vh;
        background-color: rgb(240, 236, 229);
        border-radius: 15px;
        color: black;
        text-align: left;
        padding: 20px;
        position: 50% 50%;
        margin-top: 100px;
        position: relative;

        h2 {
            margin-left: 180px;
        }

        #checkbox {
            width: 20px;
            height: 20px;
            margin-top: 20px;
        }

        .btn-link {
            font-size: 14pt;
            margin-bottom: 13px;
        }

        .input {
            height: 50px;
            width: 500px;
            margin-bottom: 20px;
            border: 1px solid black;
            border-radius: 5px;
            background-color: white;
        }

        .comfirm {
            margin-bottom: 70px;
            margin-left: 400px;
            box-shadow: none;
            border-radius: 15px;
            width: 90px;
            height: 40px;
            border: none;
            background-color: rgb(108, 95, 91);
            color: white;
            position: absolute;
            left: 3%;
            top: 68%;
        }
    }
}
</style>