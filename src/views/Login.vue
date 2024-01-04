<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="big">
    <div class="mid">

      <h1>體驗完整功能</h1>
      <h3>追蹤價格，快速比價，規劃行程</h3>

      <div class="in1">
        <p>帳號</p>
        <input type="text" class="input" />
      </div>

      <div class="in2">
        <p>密碼</p>
        <input type="password" class="input" name="" id="" />
      </div>

      <button type="button" class="in3">登入</button>

    </div>
  </div>
</template>

<style scoped lang="scss">
.big {
  width: 100vw;
  height: 100%;
  border: 1px solid black;
  margin: 0 auto;
  .mid {
    width: 40vw;
    height: 80vh;
    border: 1px solid black;
    margin: 0 auto;
    p{
      margin: 0;
      margin-right: 23vw;

    }
    .in1{ //帳號輸入框
      margin-top: 5%;
      margin-bottom: 5%;
    }
    .in2{ //密碼輸入框
      margin-bottom: 8%;
    }
    .in3{ //登入按鈕
      width: 25vw;
      height: 6vh;
    }
    .input { 
      width: 25vw;
      height: 5vh;
    }
  }
}
</style>
