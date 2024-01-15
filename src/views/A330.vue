<script>
export default {
  data() {
    return {};
  },
  methods: {
    A321() {
      this.$router.push("/A321"); //推送至下一頁的路徑
    },
    A330() {
      this.$router.push("/A330"); //推送至下一頁的路徑
    },
    A350() {
      this.$router.push("/A350"); //推送至下一頁的路徑
    },
  },
};
</script>

<template>
  <div class="top">
    <h1>璀璨光芒．蓄勢待發</h1>
    <h5>樂狗航空．空中巴士 A330neo</h5>
  </div>
  <div class="menu">
    <h3 @click="A321">A321neo</h3>
    <h3 @click="A330">A330neo</h3>
    <h3 @click="A350">A350-900</h3>
  </div>
  <div class="introduce1">
    <h5>AIRBUS A330neo</h5>
    <h2>設計理念</h2>
    <h5>
      客艙內部的設計帶有先進豪華感，給人輕鬆的回家氛圍，喚起備受呵護的陪伴感，
      創造難忘的舒適體驗，讓乘客感到賓至如歸。如此一來，乘客才能安心並真正地放鬆。
    </h5>
    <div class="img1"></div>
    <div class="introduce2">
      <h2 class="A321">A330neo 客艙配置圖</h2>
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
  background-image: url(https://v3-statics.mirrormedia.mg/images/20220531183241-4f7baab00f275b485ed20bf6fd952d11.jpg);
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
    width: 70vw;
    height: 90vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/330cabin1010px674_tcm5-5195.jpg);
    margin: 60px auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .img2 {
    width: 90vw;
    height: 40vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/A330_CN_tcm5-4999.png);
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .img3 {
    width: 90vw;
    height: 60vh;
    background-image: url(https://webassets.starlux-airlines.com/zh-TW/Images/8_tcm5-5014.png);
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
