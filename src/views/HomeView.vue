<script>
export default {
  data() {
    return {
    }
  },

}
</script>

<template>
  <div class="big">
    <div class="header" style="width: 100%;height: 35vh;">
      <div class="title"></div>
      <div class="tex"></div>
      <div class="rightbox"></div>
    </div>
    <div class="pic" style="width: 100%; height: 50vh;"></div>
    <div class="air" style="width: 100%; ">
      <p style="font-size: 35px; margin: 0;">目前最熱門的航班</p>
      <p style="margin-top: 5px;">真的ㄇ</p>
      <div class="airIn">
        <div class="block">
          <div class="img"></div>
          <div class="text">
            <p>泰國</p>
            <span>該變性了</span>
          </div>
        </div>
        <div class="block">
          <div class="img"></div>
          <div class="text"></div>
        </div>
        <div class="block">
          <div class="img"></div>
          <div class="text"></div>
        </div>
        <div class="block">
          <div class="img"></div>
          <div class="text"></div>
        </div>
        <div class="block">
          <div class="img"></div>
          <div class="text"></div>
        </div>
        <div class="block">
          <div class="img"></div>
          <div class="text"></div>
        </div>
        <div class="block">
          <div class="img"></div>
          <div class="text"></div>
        </div>
        <div class="block">
          <div class="img"></div>
          <div class="text"></div>
        </div>

      </div>
    </div>
    <div class="foot" style="width: 100%; height: 35vh; background-color: rgba(5, 32, 60);"></div>
  </div>
</template>

<style scoped lang="scss">
.big {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .header {
    background-color: rgba(5, 32, 60);
  }

  .pic {
    background-image: url(https://images5.alphacoders.com/126/thumb-350-1263472.webp);
    background-repeat: repeat-x;
    background-position: 50% 50%;
  }

  .air {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .airIn {
      width: 75%;
      margin-top: 1%;
      border: 1px solid red;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      .block {
        width: 270px;
        height: 13vh;
        border: 1px solid purple;
        display: flex;
        margin-bottom: 20px;


        .img {
          width: 7vw;
          height: 100%;
          background-color: rgba(0, 255, 255, 0.271);
        }

        .text {
          width: 65%;
          height: 100%;
          text-align: left;

          p {
            font-size: 30px;
            margin: 5px 0 10px 0;
          }
        }

      }
    }

    .foot {}
  }
}
</style>