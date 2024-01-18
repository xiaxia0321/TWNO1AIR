<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        goDagerous(){
            this.$router.push('/Dangerous')
        }
    }
}
</script>
<template>
    <div class="info">
        <div class="tableOne">
            <table>
                <tr>
                    <th>訂位代號</th>
                    <th>姓名</th>
                    <th>報到地點</th>
                </tr>
                <tr>
                    <td>76435</td>
                    <td>周餅倫</td>
                    <td>TPE-臺北(桃園)</td>
                </tr>
            </table>
        </div>
        <div class="tableTwo">
            <table>
                <tr>
                    <th>班機編號</th>
                    <th>日期</th>
                    <th>時間</th>
                    <th>出發地</th>
                    <th>目的地</th>
                </tr>
                <tr>
                    <td>A321</td>
                    <td>2024/04/06</td>
                    <td>10:38</td>
                    <td>TPE-臺北(桃園)</td>
                    <td>BKK-曼谷</td>
                </tr>
            </table>
            <button type="button" @click="goDagerous">確認</button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.info {
    width: 100vw;
    height: 100vh;
    background-color: rgb(22, 26, 48);
    box-sizing: border-box;

    .tableOne {
        width: 100vw;
        height: 40vh;
        padding-left: 500px;
        padding-top: 130px;

        table {
            color: gray;
            background-color: rgb(240, 236, 229);
            width: 400px;
            height: 100px;
            font-size: 16pt;

            th {
                border: 1px solid gray;
                background-color: rgb(182, 187, 196);
            }

            td {
                border: 1px solid gray;
            }
        }
    }

    .tableTwo {
        width: 100vw;
        height: 40vh;
        padding-left: 360px;
        padding-bottom: 60px;

        table {
            color: gray;
            background-color: rgb(240, 236, 229);
            width: 700px;
            height: 100px;
            font-size: 16pt;

            th {
                border: 1px solid gray;
                background-color: rgb(182, 187, 196);
            }

            td {
                border: 1px solid gray;
            }
        }

        button {
            box-shadow: none;
            border-radius: 15px;
            width: 120px;
            height: 50px;
            border: none;
            background-color: rgb(108, 95, 91);
            margin-right: 400px;
            margin-top: 80px;
            font-size: 14pt;
        }
    }
}</style>