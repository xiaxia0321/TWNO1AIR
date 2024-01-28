<script>//目的地時刻頁面
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return {
      arrivalLocation: "", // 目的地
      AA: "", // 機場縮寫例如TPE
      arrivalAirport:"",
    };
  },
  computed: {
    ...mapState(counter,['planeSearchArr'])
  },
  methods: {
    selectDeparture(x,y,z) {
      this.AA = x;
      this.arrivalLocation = y;
      this.arrivalAirport = z;
      console.log("選擇的目的地:", this.AA, this.arrivalLocation, this.arrivalAirport);
      this.planeSearchArr.aa = this.AA
      this.planeSearchArr.arrivalLocation = this.arrivalLocation
      this.planeSearchArr.arrivalAirport = this.arrivalAirport
      // console.log('aa ='+ this.planeSearchArr.aa);
      // console.log('arrivalLocation ='+ this.planeSearchArr.arrivalLocation);
      // console.log('arrivalAirport ='+ this.planeSearchArr.arrivalAirport);
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
    data-bs-target="#exampleModal1"
    v-if="this.arrivalLocation === ''"
  >
  <span style="font-size: 2.75rem; color:#794425"></span>
    <span style="font-size: 1.75rem; color:#08202D;">請選擇目的地</span>
  </button>
<!-- ===============按鈕=========== -->
<button
    type="button"
    class="btn btn-primary dd"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal1"
    v-else
  >
    <span style="font-size: 3rem; color:#794425;">{{this.AA}}</span>
    <span style="font-size: 1.75rem; color:#08202D;">{{this.arrivalLocation}}</span>
  </button>
<!-- ===============按鈕=========== -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content aa">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">請選擇目的地</h4>
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
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('TPE　','台北,臺灣','台灣桃園國際機場')">
              <span>臺北，臺灣　　　　　　　　　　　　　　　　　　　　　　TPE</span>
              <br />
              <small class="sm">台灣桃園國際機場</small>
            </button>
          </div>

          <div class="ma">
            <span>港澳大陸地區</span>
          </div>
          <div class="maAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('MFM　','澳門,澳門','澳門國際機場')">
              <span>澳門，澳門　　　　　　　　　　　　　　　　　　　　　MFM</span>
              <br />
              <small>澳門國際機場</small>
            </button>
          </div>

          <div class="jp">
            <span>日本</span>
          </div>
          <div class="jpAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('NRT　','東京,日本','成田國際機場')">
              <span>東京，日本　　　　　　　　　　　　　　　　　　　　　　NRT</span>
              <br />
              <small>成田國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('KIX　','大阪,日本','關西國際機場')">
              <span>大阪，日本　　　　　　　　　　　　　　　　　　　　　　KIX</span>
              <br />
              <small>關西國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('HKD　','函館,日本','函館機場')">
              <span>函館，日本　　　　　　　　　　　　　　　　　　　　　　HKD</span>
              <br />
              <small>函館機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('OKA　','沖繩,日本','那霸國際機場')">
              <span>沖繩，日本　　　　　　　　　　　　　　　　　　　　　　OKA</span>
              <br />
              <small>那霸國際機場</small>
            </button>
          </div>

          <div class="sa">
            <span>東南亞</span>
          </div>
          <div class="saAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('BKK　','曼谷,泰國','蘇凡納布國際機場')">
              <span>曼谷，泰國　　　　　　　　　　　　　　　　　　　　　　BKK</span>
              <br />
              <small>蘇凡納布國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('SGN　','胡志明市,越南','新山一國際機場')">
              <span>胡志明市，越南　　　　　　　　　　　　　　　　　　　　SGN</span>
              <br />
              <small>新山一國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('SIN　','新加坡,新加坡','樟宜機場')">
              <span>新加坡，新加坡　　　　　　　　　　　　　　　　　　　　SIN</span>
              <br />
              <small>樟宜機場</small>
            </button>
          </div>

          <div class="na">
            <span>北美洲</span>
          </div>
          <div class="naAll">
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('LAX　','洛杉磯,美國','洛杉磯國際機場')">
              <span>洛杉磯，美國　　　　　　　　　　　　　　　　　　　　　LAX</span>
              <br />
              <small>洛杉磯國際機場</small>
            </button>
            <br />
            <button class="cc" data-bs-dismiss="modal" @click="selectDeparture('SFO　','舊金山,美國','舊金山國際機場')">
              <span>舊金山，美國　　　　　　　　　　　　　　　　　　　　　SFO</span>
              <br />
              <small>舊金山國際機場</small>
            </button>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dd{
  width: 27vw;
  height: 12vh;
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
