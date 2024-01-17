<script>
export default {
    data() {
        return {
            ticket: {
                id: ''
            },
            userInfo: {
                name: ''
            },
            agreementChecked: false
        }
    },
    methods: {
        concel() {
            if (!this.ticket.id || !this.userInfo.name || !this.agreementChecked) {
                alert('請填寫所有必要訊息並同意退票規定！');
                return;
            }else{
            this.performCancellation();
            }
        },
        performCancellation() {
            alert('取消訂票成功。');
        }
    }
}
</script>

<template>
    <div class="screen">
        <h1>線上退票</h1>
        <div class="refund">
            <span>機票號碼：</span><input v-model="ticket.id" type="number" class="input"><br>
            <span>會員名稱：</span><input v-model="userInfo.name" type="text" class="input">
            <input v-model="agreementChecked" type="checkbox"><span>本人已詳閱樂狗航空相關退票規定</span><br>
            <button type="button" @click="concel" class="comfirm">確認</button>
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