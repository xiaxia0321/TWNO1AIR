<script>
export default {
    data() {
        return {
            userId: "",
            name:"",
            account: "",
            password: "",
            age:"",
            birthday:null,
            email:"",
            phone:"",
        };
    }
}
</script>

<template>
<div class="table">
    <span>．編號：</span><input type="number" class="input"><span>．姓名：</span><input type="text" class="input"><br>
    <span>．帳號：</span><input type="text" class="input"><span>．密碼：</span><input type="number" class="input"><br>
    <span>．生日：</span><input type="date" class="input"><span>．年齡：</span><input disabled type="number" class="input"><br>
    <span>．信箱：</span><input type="text" class="input"><span>．年齡：</span><input type="number" class="input"><br>
</div>
</template>

<style scoped lang="scss">
.table{
    text-align:center;
    background-color: rgb(240, 236, 229);
    width: 800px;
    height: 500px;
    border-radius: 5px;

    .input{
        width: 200px;
        height: 50px;
        margin-right: 50px;
        margin-bottom: 20px;
    }
}
</style>