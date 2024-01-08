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
    <div class="header" style="width: 100%;height: 40vh;">
      <div class="top">
        <div class="logo"></div>
        <span>HappyDog</span>
        <div class="user"></div>
      </div>
      <div class="title">
        <p style="margin: 0; font-size: 2.5em; color: white;
      ">即刻搜尋，數個便宜航班等待您發現。</p>
      </div>
      <div class="search" style="width: 90%; height: 30%; ">
        <div class="place" name="出發地" style="border-radius: 15px 0 0 15px ;">
          <label for="" class="lab">
            <div class="placeIn">
              <span style="color: rgb(98 105 113); font-size: 1.2rem;">出發地</span>
              <input type="text" class="input" value="台北桃園 (TPE)" placeholder="輸入國家/地區">
            </div>
          </label>
          <div class="meme">
            <ul></ul>
          </div>
        </div>
        <div class="place" name="目的地">
          <label for="" class="lab">  
            <div class="placeIn">
              <span style="color: rgb(98 105 113); font-size: 1.2rem;">目的地</span>
              <input type="text" class="input" value="日本 (JP)" placeholder="輸入國家/地區">
            </div>
          </label>
          <div class="meme">
            <ul></ul>
          </div>
        </div>
        <div class="program" name="出發">
          <button type="button">
            <span class="span1">出發</span>
            <span class="span2">新增日期</span>
          </button>
        </div>
        <div class="program" name="回程">
          <button type="button">
            <span class="span1">回程</span>
            <span class="span2">新增日期</span>
          </button>
        </div>
        <div class="program" name="旅客與艙等">
          <button type="button" style="border-radius:0 15px 15px 0;">
            <span class="span1">旅客與艙等</span>
            <span style="font-size: 1.3rem;">1成人,經濟艙</span>
          </button>
        </div>
        <button class="gogo">搜尋</button>
      </div>

    </div>
    <div class="pic" style="width: 90%; height: 50vh;"></div>
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
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .top {
      width: 90%;
      height: 15%;
      // background-color: rgb(196, 46, 136);
      margin-top: 10px;
      margin-bottom: 40px;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row;
      color: rgb(240, 236, 229);
      font-size: 3vw;

      .logo {
        background-image: url(/01.png);
        background-size: cover;
        background-size: contain;
        background-repeat: no-repeat;
        height: 100%;
        width: 5%;
        // background-color: black;
      }

      .user {
        width: 20%;
        height: 100%;
        background-color: green;
        position: absolute;
        right: 0;
      }
    }

    .title {
      width: 80%;
      height: 20%;
      margin-bottom: 10px;
      text-align: left;

    }

    .search {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      div {
        margin-left: 6px;
      }

      .place {
        width: 18%;
        height: 90%;
        background-color: whitesmoke;
        display: inline-block;
        text-align: left;
        align-items: flex-start;
        cursor: default;
        box-sizing: border-box;
        padding-block: 1px;
        padding-inline: 5px;
        border-width: 2px;
        border-style: outset;

        .lab {
          padding: 0.2rem;


          .placeIn {
            span {
              line-height: 1.25rem;
              font-weight: 700;
            }

            .input {
              width: 90%;
              height: 1.25rem;
              padding: 0 1rem 0 0;
              font-size: 1.3rem;
              border: none;
              outline: none !important;
              outline-offset: unset !important;
              background-color: initial;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }

        }
      }

      .program {
        width: 18%;
        height: 90%;

        button {
          width: 100%;
          height: 100%;
          background-color: whitesmoke;
          padding: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;

          span {}

          .span1 {
            color: #626971;
            white-space: nowrap;
            font-size: 1.2rem;
            line-height: 1.25rem;
            font-weight: 700;
          }

          .span2 {
            font-size: 1.3rem;
            color: gray;
          }
        }
      }

      .gogo {
        width: 7%;
        height: 90%;
        background-color: #0062e3;
        margin-left: 20px;
        border-radius: 20%;
        color: white;
        font-size: 1.3rem;
        font-weight: 700;
      }
    }

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