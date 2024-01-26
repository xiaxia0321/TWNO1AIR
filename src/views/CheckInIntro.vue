<script>
import OnlineCheckInTwo from './OnlineCheckInTwo.vue';

export default {
    data() {
        return {
        }
    },
    methods:{
        onlineCheckIn() {
            this.$router.push('/OnlineCheckIn')
        },
    }
}
</script>
<template>
    <div class="tabs">
        <!--   tab group -->
        <input type="radio" id="tab-1" name="tab" checked="checked">
        <label for="tab-1" style="font-size: 26px;">線上報到說明</label>
        <div class="tab-content">
            <p>請點選下方連結進行報到。</p>
            <span @click="onlineCheckIn()">線上報到</span><i class="fa-solid fa-link" @click="onlineCheckIn()"></i><a href=""></a>
            <div class="bigCard">
                <div class="card">
                    <img src="../../public/sabrina/線上報到1.jpeg" class="card-img-top" alt="">
                    <div class="card-body">
                        <p class="card-text">
                            班機起飛前48-1小時透過樂狗航空官方網站可完成報到手續並取得登機證，以節省在機場櫃檯辦理報到手續的時間。
                            註：往返美國之航班受限當地政府規定，於起飛前24-1小時開放線上報到服務。
                            <li>由於航班狀況可能隨時更改，請於機場確認最新之登機門及登機時間等航班相關資訊。</li>
                            <li>若您有託運行李，請於起飛前1小時完成託運。</li>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../public/sabrina/線上報到2.jpeg" class="card-img-top" alt="" style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            若於樂狗航空官方網站未取得登機證，請最遲於班機起飛前1小時至機場報到櫃檯，完成領取登機證、辦理行李託運等手續。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../public/sabrina/線上報到3.jpeg" class="card-img-top" alt="" style="height: 230px;">
                    <div class="card-body">
                        <p class="card-text">
                            若已取得登機證：
                            <li>有託運行李：
                                請最遲於班機起飛前1小時至機場指定櫃台完成行李託運手續。</li>
                            <li>無託運行李：
                                可直接前往安全檢查及證件查驗，並請於班機起飛前至少40分鐘抵達登機門，將旅行證件交由星宇航空人員完成查驗。</li>
                        </p>
                    </div>
                </div>
            </div>
            <div class="notice">
                <br>
                <h3>操作流程</h3>
                <br>
                <p>第一步：搜尋訂位紀錄：輸入訂單編號及搭機旅客英文姓名</p>
                <p>第二步：確認危險品須知</p>
                <p>第三步：確認班機資訊</p>
                <p>第四步：填寫旅客資料</p>
                <p>第五步：領取登機證</p>
                <p>第六步：完成報到</p>
                <br>
                <h3>其他注意事項</h3>
                <br>
                <p>1、視各地機場之程序及規範，部分機場於通關時可能不接受線上報到登機證或行動裝置之電子登機證，或者手持同一電子裝置顯示多名同行者之電子登機證，並要求旅客返回星宇航空報到櫃檯領取紙本登機證。</p>
                <p>2、由於證照查驗、行李託運等因素，線上報到系統目前尚未能完全取代您在機場報到櫃檯所需辦理的手續。但因為您使用本系統先行辦理部份手續，同時可以使用機場專屬報到櫃檯，將能縮短在機場櫃檯的辦理時間。</p>
                <p>3、若無法完成線上／手機報到，請至機場櫃檯辦理。</p>
            </div>
        </div>
        <!--   tab group end -->
        <!--   tab group -->
        <input type="radio" name="tab" id="tab-2">
        <label for="tab-2" style="font-size: 26px;">機場櫃檯報到說明</label>
        <div class="tab-content">
            <div class="bigCard">
                <div class="card">
                    <img src="../../public/sabrina/櫃檯報到1.jpeg" class="card-img-top" alt="" style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            機場報到櫃台於班機起飛前3-2.5小時開始辦理報到劃位及行李託運手續，請最遲於班機起飛前1小時完成報到手續。若於報到時間結束後到達機場櫃台，樂狗航空將取消已預選之座位，或恐無法順利登機，請務必留意報到時間。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../public/sabrina/櫃檯報到2.jpeg" class="card-img-top" alt="">
                    <div class="card-body">
                        <p class="card-text">
                            若需要星宇航空提供協助服務（例如輪椅、孕婦、單獨旅行兒童等），請提早於班機起飛前2小時完成報到手續。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../public/sabrina/櫃檯報到3.jpeg" class="card-img-top" alt="" style="height: 230px;">
                    <div class="card-body">
                        <p class="card-text">因各地機場環境設備不同，機場劃位櫃檯開始辦理報到手續之時間稍有不同，相關資訊請參閱「機場及交通資訊」。</p>
                    </div>
                </div>
            </div>
            <div class="know">
                <br>
                <h3>報到須知</h3>
                <br>
                <p>電子機票<br>
                    1、須持有可搭乘樂狗航空班機之有效電子機票，並確認機票英文姓名與護照英文姓名一致。</p>
                <p>旅行證件<br>
                    2、須持有有效護照，有些國家亦會要求護照效期需具備一定的時限（通常需六個月以上），並請於出發前準備旅程中出境、入境、過境國家所要求之簽證、旅行文件或檢疫證明；未備妥所需文件可能無法順利成行，或於抵達目的地後被拒絕入境。星宇航空對任何旅客因未持有所需且有效之旅行證件，或個人因素而違反相關法令及規範所產生之費用、或造成之結果，將無法承擔任何責任。
                </p>
                <p>3、兒童旅客的改票託運行李及隨身行李</p>
                <li>建議行李掛上識別名牌，並以英文正確填寫。</li>
                <li>樂狗航空各機場櫃台皆提供姓名掛牌取用。</li>
                <li>請參考機票上所註明的免費託運行李額度，若託運行李超出免費額度時，須支付額外費用。</li>
                <li>為符合飛航安全要求及客艙設施限制，攜入客艙之隨身行李有件數、尺寸及重量之限制，詳細資訊請參閱「隨身行李」。應各地區及機場規定，會發生行李須接受海關或政府官員的查驗的情況。</li>
                <li>若有後段接續航班，請告知櫃台人員，以確認您的行李能否直接託運至目的地。</li>
                <br>
                <h3>報到完成後</h3>
                <br>
                <p>1、請確認登機證上姓名、搭乘班機、目的地、座位等資訊正確無誤。 </p>
                <p>2、請確認行李皆正確掛運至目的地。 </p>
                <p>3、請確認櫃台人員已歸還旅行證件、登機證及相關文件。 </p>
                <p>4、請儘早完成安全檢查及證件查驗，並於起飛前30分鐘抵達登機門登機。</p>
            </div>
        </div>
        <!--   tab group end -->
        <!--   tab group -->
        <input type="radio" name="tab" id="tab-3">
        <label for="tab-3" style="font-size: 26px;">機場自助報到機台說明</label>
        <div class="tab-content">
            <div class="bigCard">
                <div class="card">
                    <img src="../../public/sabrina/自動報到1.jpeg" class="card-img-top" alt="" style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            樂狗航空於部分機場出境大廳提供自助報到機台服務，請參考以下服務資訊及使用步驟，透過機台可快速簡便取得登機證，若於操作上有任何問題，請與樂狗航空服務人員聯繫。
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../public/sabrina/自動報到2.jpeg" class="card-img-top" alt="" style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            機台服務時間
                            <li>機台開放時間：
                            航班起飛前6小時開放報到。</li>
                            <li>機台截止時間：
                            航班起飛前1小時截止報到。</li>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <img src="../../public/sabrina/自動報到3.png" class="card-img-top" alt="" style="height: 220px;">
                    <div class="card-body">
                        <p class="card-text">
                            以下情形無法透過自助報到機台完成報到手續：
                            <ol>
                                <li>特殊協助旅客（需求單獨旅行兒童服務、擔架或其他醫療協助）。</li>
                                <li>未滿12歲單獨旅行的兒童旅客。</li>
                                <li>與未滿2歲嬰兒同行的旅客。</li>
                                <li>機位狀態尚未確認，請先確認機位狀態。</li>
                                <li>訂位紀錄尚未開票或機票與訂位紀錄不符之旅客（如：艙位升等之旅客）。</li>
                                <li>因當地機場規範不可於自助報到機台取得登機證。</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
            <div class="sop">
                <br>
                <h3>操作流程</h3>
                <br>
                <p>第一步：首頁點選樂狗航空</p>
                <p>第二步：確認危險品須知</p>
                <p>第三步：搜尋訂位紀錄</p>
                <p>第四步：座位確認</p>
                <p>第五步：旅行證件驗證:將護照含照片之頁面朝下放置於掃描平台讀取</p>
                <p>第六步：列印登機證:請確認登機證上之姓名、搭乘班機、目的地、座位等正確無誤</p>
                <p>第七步：報到完成</p>
            </div>
        </div>
        <!--   tab group end -->
    </div>
</template>
<style scoped lang="scss">
.tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    -moz-column-gap: 5px;
    column-gap: 5px;
    width: 100vw;
    background-color: rgb(22, 26, 48);
}
.tabs input[type=radio] {
    display: none;
}

.tabs input[type=radio]:checked+label {
    color: white;
    background-color: rgb(22, 26, 48);
    transform: translatey(1px);
}

.tabs input[type=radio]:checked+label+.tab-content {
    display: block;
}

.tabs label {
    padding: 0.5em 0.75em;
    color: #ccc;
    /* border: 1px solid #ccc; */
    border-bottom: unset;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
    /* order: 0; */
    /* width: 120px; */
}

.tabs label:hover {
    color: rgb(172, 135, 197);
}

.tabs .tab-content {
    display: none;
    padding: 1em;
    width: 100vw;
    height: 150vh;
    /* border: 1px solid #ccc; */
    /* border-radius: 5px; */
    order: 1;
    background-color: rgb(22, 26, 48);
    color: white;

    .bigCard {
        width: 100vw;
        height: 60vh;
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;

        .card {
            width: 420px;
            height: 500px;

            .card-text {
                text-align: left;
            }
        }
    }

    .notice {
        margin: auto;
        width: 80vw;
        height: 30vh;
        text-align: left;
    }

    .know {
        margin: auto;
        width: 80vw;
        height: 30vh;
        text-align: left;
    }
    .sop {
        margin: auto;
        width: 80vw;
        height: 30vh;
        text-align: left;
    }
}
</style>