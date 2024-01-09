<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="top">
    <h1>璀璨光芒．蓄勢待發</h1>
    <h5>樂狗航空．空中巴士A321neo</h5>
  </div>
  <div class="menu">
    <h3>A321neo</h3>
    <h3>A330neo</h3>
    <h3>A350-900</h3>
  </div>
  <div class="introduce1">
    <h5>AIRBUS A321neo</h5>
    <h2>機艙設計</h2>
    <h5>
      由BMW集團旗下的Designworks設計團隊操刀，以「舒適如家」為設計主軸，機艙主色調概念名為「雅仕純茶Pure
      Tea」，
      在冰冷的機艙空間營造溫潤的優雅氛圍，享受座艙服務時猶如品茗一杯好茶，餘韻令人回味無窮。
    </h5>
    <div class="img1"></div>
    <div class="introduce2">
      <h2 class="A321">A321neo 客艙配置圖</h2>
    </div>
    <div class="img2"></div>
    <div class="img3"></div>
  </div>
</template>

<style scoped lang="scss">
.top {
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: url(https://s.yimg.com/ny/api/res/1.2/SnCCsBgyUadKSZQf2GsRvQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02Mzk-/https://media.zenfs.com/zh-tw/nownews.com/554a756073e8894a1ece7e4354838e29);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 半透明遮罩，可自行調整透明度 */
  }

  h1 {
    position: absolute;
    bottom: 20%; /* 可根据需要调整字体位置 */
    left: 50%;
    transform: translateX(-50%);
    color: white; /* 设置字体颜色 */
  }
  h5 {
    position: absolute;
    bottom: 10%; /* 可根据需要调整字体位置 */
    left: 50%;
    transform: translateX(-50%);
    color: white; /* 设置字体颜色 */
  }
}
.menu {
  width: 100%;
  height: 20vh;
  background-color: #161a30;
  display: flex;
  justify-content: space-evenly; /* 調整這裡的值，也可以使用 space-between 或 space-around */
  align-items: center; /* 讓內容在垂直方向置中 */
  h3 {
    color: white;
    margin: 0; /* 清除預設的 margin，避免影響排版 */
    transition: color 0.3s; /* 添加變色的平滑過渡效果 */

    &:hover {
      color: #f8c68a; /* 觸碰到時的字體顏色，您可以根據需要調整 */
      cursor: pointer; /* 將游標設置為手型，提供點擊的提示 */
    }
  }
}
.introduce1 {
  width: 100%;
  height: 250vh;
  background-color: #161a30;
  h2 {
    color: white;
    text-align:justify;
    padding: 0 80px;
  }
  h5 {
    color: white;
    text-align:justify;
    padding: 0 80px 0px 80px;
  }
  .img1 {
    //介紹第一張圖片
    width: 70vw;
    height: 90vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/cabin-design2_tcm5-1376_tcm5-1376.jpg);
    margin: 60px auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .img2{
    width: 90vw;
    height: 50vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/A321n_zh-01_tcm5-5052.png);
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .img3{
    width: 90vw;
    height: 60vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/zh2_tcm5-3677.png);
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .introduce2 {
   h2{
    text-align: center; 
   }
  }
}
</style>
