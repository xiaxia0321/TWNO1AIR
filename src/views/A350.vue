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
    <h1>星之所向．自在翱翔</h1>
    <h5>樂狗航空．空中巴士 A350-900</h5>
  </div>
  <div class="menu">
    <h3>A321neo</h3>
    <h3>A330neo</h3>
    <h3>A350-900</h3>
  </div>
  <div class="introduce1">
    <h5>AIRBUS A350-900</h5>
    <h2>設計理念</h2>
    <h5>
      A350客機的設計以「舒適、隱私、安全、擁有和歸屬」為主軸，讓無論乘坐何種艙等的旅客都有賓至如歸的感覺。
      全機採用閃亮的色調與材質，為A321客機與A330客機所使用的「雅仕純茶」主題的升級版，
      搭配頭等艙的推出，打造更豐富與極具質感的奢華外觀。
    </h5>
    <div class="img1"></div>
    <div class="introduce2">
      <h2 class="A321">A350-900 客艙配置圖</h2>
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
  background-image: url(https://i.imgur.com/m0Jb40G.jpg);
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
  height: 260vh;
  background-color: #161a30;
  h2 {
    color: white;
    text-align: justify;
    padding: 0 80px;
  }
  h5 {
    color: white;
    text-align: justify;
    padding: 0 80px 0px 80px;
  }
  .img1 {
    //介紹第一張圖片
    width: 75vw;
    height: 95vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/350fleet_overview01_tcm5-7112.jpg);
    margin: 60px auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .img2 {
    width: 90vw;
    height: 40vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/A350_web_CN_01_tcm5-7231.png);
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .img3 {
    width: 90vw;
    height: 70vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/A350_web_CN_02_tcm5-7232.png);
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .introduce2 {
    h2 {
      text-align: center;
    }
  }
}
</style>
