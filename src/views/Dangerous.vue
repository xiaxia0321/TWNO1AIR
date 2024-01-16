<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        goFinalCheckIn(){
            this.$router.push('/FinalCheckIn')
        }
    }
}
</script>
<template>
    <div class="main">
        <br>
        <h1>基本須知</h1>
        <p>下列物品絕對禁止放置於行李中(包含隨身手提、託運):
            <li>違反行程中各地政府規定者，禁止放置於行李中。</li>
            <li>活生動物：除已事先訂位之寵物外，其他活生動物不得以行李方式載送。</li>
            <li>其性質、重量、體積、和數量的限制經判斷不適合運送者。</li>
        </p>
        <h1>危險物品須知</h1>
        <br>
        <img src="../../public/sabrina/違禁品.webp" alt="">
        <br><br>
        <div class="bettery">
            <h1>可攜式電子裝置及備用電池</h1>
            <p>
                <li>個人使用之可攜式電子裝置，如手錶、計算機、照相機、手機、手提電腦、錄影機及空拍機等，放置於託運行李中時，須確保其不會因未預期情形下啟動而造成損害，並且該電子產品是必須完全關閉的狀態（不是處於睡眠或休眠模式）。鋰電池容量在100瓦特-小時(含)以下，每個人最多可攜帶15個可攜式電子裝置和/或20個備用電池，超過數量需經航空公司同意。
                </li><br>
                <li>攜帶備用電池及行動電源的限制: 電池須個別保護避免短路，如放置於電池保護盒，或於電極上貼上絕緣膠帶或個別放入塑膠保護袋中，不可放置於託運行李中。備用鋰電池必須低於 100 瓦時 (Wh)／ 2 克鋰容量
                    (LC)，行動電源若無明確標示規格或數值則一律禁止攜帶。</li><br>
                <li>須經航空公司同意:
                    備用鋰離子電池超過100瓦特-小時但不超過160瓦特-小時(含)，每個人最多可於手提行李中攜帶兩個備用電池上機，超過160瓦特小時則禁止攜帶。含鋰電池之物品，每個鋰電池必符合聯合國「測試和標準手冊第3部分」，38.3節之每項試驗要求。裝有鋰電池之輪椅或其他電動行動輔助裝置之運送規範，請參考特別需求協助之說明
                    。</li><br>
                <li>基於飛航安全考量，可攜式電子裝置電風扇(內建鋰離子電池)，禁止置於託運行李，僅能以手提或隨身攜帶方式上機。</li><br>
                <li>旅客攜帶電子菸、電熱式菸品、電子菸霧化器或電子尼古丁供應器等物品時，僅可置於手提行李，禁止託運。機內全程禁用電子菸及電熱式菸品。</li><br>
                <li>依照衛生福利部食品藥物管理署及海關規定，旅客不得攜帶電子菸及其電子菸油和電熱式菸品進入台灣。</li><br>
                <li>請勿攜帶或託運任何使用鉛酸電池為電力之產品，在經過機場安全檢查時有很高的可能性被阻擋
                    (例：含有鉛酸電池之充電式LED燈、手電筒及電蚊拍等)。攜帶任何以鉛酸電池為動力來源之醫療器材，請事先聯繫長榮航空訂位中心。</li><br>
            </p>
            <button type="button" @click="goFinalCheckIn">已了解</button>
        </div>
    </div>
</template>
<style>
.main {
    width: 100vw;
    height: 200vh;
    background-color: rgb(22, 26, 48);

    h1 {
        color: white;
    }

    p {
        color: white;

    }

    li {
        color: white;
    }

    .bettery {
        width: 70vw;
        height: 50vh;
        margin-left: 200px;

        li {
            text-align: left;
        }

        button {
            box-shadow: none;
            border-radius: 15px;
            width: 80px;
            height: 40px;
            border: none;
            background-color: rgb(108, 95, 91);
            margin-top: 40px;
        }
    }
}</style>