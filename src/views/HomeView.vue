<script>
import { mapState, mapActions } from 'pinia'
import date from '../stores/date'
export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(date,['setDate']),
    login() {
      this.$router.push('/')
    },

  },
  computed: {
    ...mapState(date,["datew"])
  },

}
</script>

<template>
  <div class="big">
    <div class="header" style="width: 100%;height: 40vh;">
      <div class="top">
        <div class="logo"></div>
        <span>HappyDog</span>
        <div class="user">
          <i class="fa-solid fa-earth-americas ii"></i>
          <i class="fa-solid fa-heart ii"></i>
          <img src="/marine.jpeg" class="ii" alt="" style="width: 20%;height: 100%;" @click="login">
          <i class="fa-solid fa-bars ii"></i>
        </div>
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
    <div class="pic" style="width: 100%; height: 80vh;">
      <!-- ======================= -->

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://img.triplisher.com/PIC/908f/05a6/f9b1/c4c7/5283084_full.jpg" class="d-block w-100"
              alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h1>開拓自身眼界</h1>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.kkday.com/zh-hk/blog/wp-content/uploads/jpg-39-5.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h1>感受每個當下</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://img.triplisher.com/PIC/908f/05a6/f9b1/c4c7/5283084_full.jpg" class="d-block w-100"
              alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h1>體驗異國風情</h1>
              <p>漫步塞納河畔，和你的美，品嘗左岸的咖啡</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- ======================= -->
    </div>
    <div class="air" style="width: 100%; ">
      <p style="font-size: 3.1rem; margin: 2% 0 1% 0; font-weight: 900;">探索景點</p>
      <div class="airIn">
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/246fa4ebad55ce0c252a19705e17514b/hongkong-0304.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>香港</p>
            <span>該吃飯了</span>
          </div>
        </div>
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/m/f1eb4ce78a9bca3/original/Tokyo.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>東京</p>
            <span>天氣還行 很熱</span>
          </div>
        </div>
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/db465e93dcaad614e9bfcaddb5865e36/GettyImages-505777764.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>首爾</p>
            <span>炸醬面+炒年糕</span>
          </div>
        </div>
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/m/288a593f841ac262/original/macau_china.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>澳門</p>
            <span>首家線上賭場上線拉
            </span>
          </div>
        </div>
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/76322ef5ee6ebe445aa45448c323959b/thailand-bangkok-6238.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>曼谷</p>
            <span>人不可貌相</span>
          </div>
        </div>
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/m/13843abc13d27263/original/Singapore.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>新加坡</p>
            <span>八瓜</span>
          </div>
        </div>
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/c10d466e9ded52fcd9d103fa6e7b4e92/stock-photo-shanghai-in-blue-32506683.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>上海</p>
            <span>灘賭聖</span>
          </div>
        </div>
        <div class="block">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/m/14316548b29a2ab3/original/Osaka.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>大阪</p>
            <span>燒</span>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="footBlock">
        <h2 style="text-align: left; padding-bottom: 30px; border-bottom: .2px solid white; font-weight: 600;"><span
            style="padding-left: 10px;">瞭解樂狗</span></h2>
        <ul>
          <li><a href="">認識樂狗</a></li>
          <li><a href="">團隊成員</a></li>
          <li><a href="">加入團隊</a></li>
          <li><a href="">加入團隊</a></li>
          <li><a href="">加入{{ 斗內我 }}團隊</a></li>
        </ul>
      </div>
      <div class="footBlock">
        <h2 style="text-align: left; padding-bottom: 30px; border-bottom: .2px solid white; font-weight: 600;"><span
            style="padding-left: 10px;">接觸樂狗</span></h2>
        <ul>
          <li><a href="">認識樂狗</a></li>
          <li><a href="">團隊成員</a></li>
          <li><a href="">加入團隊</a></li>
          <li><a href="">加入團隊</a></li>
          <li><a href="">加入{{ 斗內我 }}團隊</a></li>
        </ul>
      </div>
      <div class="footBlock">
        <h2 style="text-align: left; padding-bottom: 30px; border-bottom: .2px solid white; font-weight: 600;"><span
            style="padding-left: 10px;">加入樂狗</span></h2>
        <ul>
          <li><a href="">加入我們</a></li>
          <li><a href="">加入我們</a></li>
          <li><a href="">加入我們</a></li>
          <li><a href="">加入我們</a></li>
          <li><a href="">加入{{ '樂狗' }}團隊</a></li>
        </ul>
      </div>

      <div class="under">
        <a href=""><i class="fa-brands fa-square-facebook ii" style="color: #161a30;"></i></a>
        <a href=""><i class="fa-brands fa-square-instagram ii" style="color: #161a30;"></i></a>
        <a href=""><i class="fa-brands fa-square-youtube ii" style="color: #161a30;"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#carouselExampleCaptions {
  width: 100%;
  /* 根據需要設置寬度 */
  height: 80vh;
  /* 根據需要設置高度 */
  margin: auto;
  /* 將輪播置中 */
}

.carousel-inner {
  width: 100%;
  height: 100%;
}

.carousel-item {
  width: 100%;
  height: 100%;
}

.carousel-item img {
  object-fit: cover;
  /* 保持圖片比例並填滿整個輪播項目 */
}

.carousel-caption {
  position: absolute;
  bottom: 0%;
  transform: translateY(-50%);
}

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
        width: 18%;
        height: 100%;
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        //   button {
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     border-radius: 0.5rem;
        //     padding: 0;
        //     border: none;
        //     background: none;

        // }
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
        padding: 5px 0.1rem 5px 0.1rem;

        .lab {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          .placeIn {
            span {
              line-height: 1.2rem;
              font-weight: 700;
            }

            .input {
              width: 90%;
              height: 1.3rem;
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
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

  }

  .pic {
    // background-position: 50% 50%;
    box-sizing: border-box;
  }

  .air {
    background-color: #0F2D3C;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    .airIn {
      width: 80%;
      margin: 2% 0 3% 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;


      .block {
        width: 280px;
        height: 14vh;
        // border: 1px solid rgb(231, 0, 231);
        box-shadow: 1.2px 2px 3px 1px #000000;
        display: flex;
        margin: 0 0% 5% 0;
        &:hover {
            // width: 70%;
            background-color: rgba(255, 255, 255, 0.15);
            box-shadow: 2px 1px 2px black;
            transition: .5s;
          }


        .img {
          width: 7vw;
          height: 100%;
          background-color: rgba(0, 255, 255, 0.271);
          background-size: cover;
        }

        .text {
          width: 55%;
          height: 100%;
          text-align: left;
          margin-left: 10px;

          p {
            font-size: 1.5rem;
            margin: 12px 0 5px 0;
            font-weight: 600;
          }

          span {
            font-size: 0.9rem;
          }
        }

      }
    }

  }

  .foot {
    position: relative;
    width: 100%;
    height: 70vh;
    background-color: #5e5045;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 20px 50px 120px 50px;

    .footBlock {
      width: 26%;
      height: 100%;
      // border: 1px solid black;
      color: white;

      ul {
        list-style-type: none;
        li {
          text-align: left;
          height: 3rem;
          padding-left: 20px;
          display: flex;
          justify-content: left;
          margin: 0 0 5px;
          align-items: center;
          font-size: 1.3rem;
          transition: .5s;
          
          &:hover {
            // width: 70%;
            background-color: rgba(255, 255, 255, 0.15);
            border-left: 10px solid rgba(22, 26, 48, 0.533);
            box-shadow: 2px 1px 2px black;
            transition: .5s;
          }
          &:active{
            background-color: #372f2a66;
            border-left: 12px solid rgb(22, 26, 48);
            transition: .4s;
          }
          
          a {
            text-decoration: none;
            color: white;
          }
        }
      }
    }

    .under {
      position: absolute;
      bottom: 0;
      background-color: #4a3f37;
      width: 100%;
      height: 20%;
      display: flex;
      align-items: center;

      .ii{
        margin-left: 15px;
        font-size: 50px;
        width: 50px;
        height: 50px;
      }
    }
  }
}</style>