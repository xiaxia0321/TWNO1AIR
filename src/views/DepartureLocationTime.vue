<script>//出發地時刻頁面
export default {
  data() {
    return {
      selectedDeparture: "", // 新增變數，用於存儲所選擇的出發地
      airport: "", // 機場縮寫

    };
  },
  methods: {
    selectDeparture(x,y) {
      this.airport = x;
      this.selectedDeparture = y;
    },
  }
};
</script>

<template>
<!-- ===============按鈕=========== -->
<button
    type="button"
    class="btn btn-primary dd"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    v-if="this.selectedDeparture === ''"
  >
    <span style="font-size: 26px; color:#794425">出發地　</span>
    <span style="font-size: 0.75rem; color:#08202D;">請選擇出發地</span>
  </button>
<!-- ===============按鈕=========== -->
  <button
    type="button"
    class="btn btn-primary dd"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    v-else
  >
    <span style="font-size: 2.25rem; color:#794425;">{{this.airport}}</span>
    <span style="font-size: 0.75rem; color:#08202D;">{{this.selectedDeparture}}</span>
  </button>
<!-- ===============按鈕=========== -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content aa">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">請選擇出發地</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body bb">
          <div class="tw">
            <span>臺灣</span>
          </div>
          <div class="twAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('TPE　','台北,臺灣')">
              <span>臺北，臺灣　　　　　　　　　　　　　　　　　　　　　　TPE</span>
              <br />
              <small class="sm">台北桃園國際機場</small>
            </button>
          </div>

          <div class="ma">
            <span>港澳大陸地區</span>
          </div>
          <div class="maAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('MFM　','澳門,澳門')">
              <span>澳門，澳門　　　　　　　　　　　　　　　　　　　　　MFM</span>
              <br />
              <small>澳門國際機場</small>
            </button>
          </div>

          <div class="jp">
            <span>日本</span>
          </div>
          <div class="jpAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('NRT　','東京,日本')">
              <span>東京，日本　　　　　　　　　　　　　　　　　　　　　　NRT</span>
              <br />
              <small>成田國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('KIX　','大阪,日本')">
              <span>大阪，日本　　　　　　　　　　　　　　　　　　　　　　KIX</span>
              <br />
              <small>關西國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('HKD　','函館,日本')">
              <span>函館，日本　　　　　　　　　　　　　　　　　　　　　　HKD</span>
              <br />
              <small>涵館機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('OKA　','沖繩,日本')">
              <span>沖繩，日本　　　　　　　　　　　　　　　　　　　　　　OKA</span>
              <br />
              <small>那霸國際機場</small>
            </button>
          </div>

          <div class="sa">
            <span>東南亞</span>
          </div>
          <div class="saAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('BKK　','曼谷,泰國')">
              <span>曼谷，泰國　　　　　　　　　　　　　　　　　　　　　　BKK</span>
              <br />
              <small>蘇凡納布國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('SGN　','胡志明市,越南')">
              <span>胡志明市，越南　　　　　　　　　　　　　　　　　　　　SGN</span>
              <br />
              <small>新山一國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('SIN　','新加坡,新加坡')">
              <span>新加坡，新加坡　　　　　　　　　　　　　　　　　　　　SIN</span>
              <br />
              <small>樟宜機場</small>
            </button>
          </div>

          <div class="na">
            <span>北美洲</span>
          </div>
          <div class="naAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('LAX　','洛杉磯,美國')">
              <span>洛杉磯，美國　　　　　　　　　　　　　　　　　　　　　LAX</span>
              <br />
              <small>洛杉磯國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('SFO　','舊金山,美國')">
              <span>舊金山，美國　　　　　　　　　　　　　　　　　　　　　SFO</span>
              <br />
              <small>舊金山國際機場</small>
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dd{
  width: 17vw;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: 0px;

}
.aa {
  //彈跳視窗高度
  height: 80%;
  .modal-title {
    font-weight: bold;
  }
}
.bb {
  //彈跳視窗padding
  padding: 0;
  background-color: #b6bbc4;
  font-weight: bold; //加粗
  .cc {
    //所有按鈕
    width: 100%;
    border: 0;
    text-align: justify;
    transition: background-color 0.3s ease;
  }
  .cc:hover {
    // transition: background-color 0.3s ease;
    background-color: #cfccc7; /* 更改為你想要的顏色 */
    // color: #f8c68a; /* 更改為你想要的顏色 */
  }
}
</style>
