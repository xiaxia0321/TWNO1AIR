<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import { NDropdown, NButton, NDatePicker } from 'naive-ui'
export default {
  data() {
    return {
      // 定義變數，表示今天的日期，格式為 "YYYY-MM-DD"
      today: new Date().toISOString().split('T')[0],
      // 使用 v-model 綁定選擇的日期
      selectedDate: '',
      tomorrowDate: '',
      minDate: '',
      minDateHave: false,
      start: '',
      end: '',
      options: [
        {
          label: "台北, 台灣, TPE, Taiwan Taoyuan International Airport",
          key: "TPE, 台北, 台灣",
          disabled: false
        },
        {
          label: "洛杉磯 (美國), LAX, Los Angeles International Airport",
          key: "LAX , 洛杉磯 , 美國 ",
        },
        {
          label: "舊金山, 美國, SFO, San Francisco International Airport",
          key: "SFO , 舊金山 , 美國"
        },
        {
          label: "函館, 日本, HKD, Hakodate Airport",
          key: "HKD , 函館 , 日本  "
        },
        {
          label: "東京, 日本, NRT, Narita Internation",
          key: "NRT , 東京 , 日本   "
        },
        {
          label: "大阪, 日本, KIX, Kansai International Airport",
          key: " KIX , 大阪 , 日本 "
        },
        {
          label: "沖繩, 日本, OKA, Naha Airport",
          key: "OKA , 沖繩, 日本 "
        },
        {
          label: "胡志明市, 越南, SGN, Tan Son Nhat Int'l Airport",
          key: "SGN , 胡志明市 , 越南 "
        },
        {
          label: "曼谷, 泰國, BKK, 素萬那普國際機場",
          key: "BKK , 曼谷, 泰國 "
        },
        {
          label: "新加坡, 新加坡, SIN, Changi Airport",
          key: "SIN , 新加坡 , 新加坡 "
        },
        {
          label: "澳門, 澳門, MFM, Macau International Airportn",
          key: "MFM , 澳門 , 澳門 "
        },
      ],
    }
  },
  methods: {
    goSearch() {
      this.planeSearchArr.departureLocation = this.start
      this.planeSearchArr.arrivalLocation = this.end

      this.$router.push('/AirTimeSearch')
      this.$nextTick(() => {
        '/AirTimeSearch'
        window.scrollTo(0, 0);
      });
    },
    handleSelect(key) {
      console.log(this.start)
      this.start = key
      if (this.start == "TPE, 台北, 台灣") {
        this.start = key
        this.end = "請選擇目的地"
      } else {
        this.start = key
        this.end = "請選擇目的地 : 台灣"
      }
    },
    handleSelectTwo(key) {
      this.end = key
      if (this.end != this.start) {
        if (this.start != "TPE, 台北, 台灣") {
          this.end = "TPE, 台北, 台灣"
        }
      } else {
        this.end = "請重新選擇不同的城市"
      }
    },
    ...mapActions(counter, ['goBangkok', 'goHome', 'goKyoto', 'goLogin', 'goSFO', 'goSingapore', 'goSubmit',]),
    goLogin() {
      if (this.account == "A01" && this.pwd == "aaa") {
        this.$router.push('/Backstage')
      } else {
        this.$router.push('/Login')
      }
    },
    goTokyo() {
      this.$router.push('/LocationTokyo')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    goKyoto() {
      this.$router.push('/LocationKyoto')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    goSingapore() {
      this.$router.push('/LocationSingapore')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    goBangkok() {
      this.$router.push('/LocationBangkok')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    goSFO() {
      this.$router.push('/LocationSFO')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    goUser() {
      this.$router.push('/User')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    backStage() {
      this.$router.push('/Backstage')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    goMacao() {
      this.$router.push('/LocationMacao')
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    // updateMinDate() {
    //   const selected = new Date(this.selectedDate);
    //   selected.setDate(selected.getDate() + 1);
    //   this.minDate = selected.toISOString().split('T')[0];
    //   this.minDateHave = true;
    // },

  },
  computed: {
    ...mapState(counter, ['planeSearchArr'])
  },
  created() {
  },
  components: {
    NDropdown,
    NButton,
    NDatePicker,
  },

}
</script>

<template>
  <div class="big">
    <div class="header" style="width: 100%;height: 40vh;">
      <div class="top">
        <span>Happy Dog 樂狗航空</span>
        <div class="user">
          <div class="oo">
            <!--    右上角     -->
            <!-- <i class="fa-solid fa-earth-americas ii"></i> -->
            <i class="fa-solid fa-power-off ii" ii @click="goLogin"></i>
            <i class="fa-solid fa-user ii" @click="goUser"></i>
            <!-- <i class="fa-solid fa-bars ii"></i> -->
          </div>
        </div>
      </div>
      <div class="title">
        <p style="margin: 0; font-size: 2.5em; color: white;
      ">即刻搜尋，數個航班等待您發現。</p>
      </div>
      <div class="search" style="width: 90%; height: 30%; ">
        <!-- <div class="place gogo" name="出發地" style="border-radius: 15px 0 0 15px ;">
          <label for="" class="lab">
            <n-dropdown trigger="hover" :options="options" @select="handleSelect">
              <n-button style="font-size: 1.4rem;">出發地 : {{ this.start }}</n-button>
            </n-dropdown>
          </label>
        </div>
        <div class="place onon" name="目的地">
          <label for="" class="lab">
            <n-dropdown trigger="hover" :options="options" @select="handleSelectTwo">
              <n-button style="font-size: 1.4rem;">目的地：{{ this.end }}</n-button>
            </n-dropdown>
          </label>
          <div class="meme">
            <ul></ul>
          </div>
        </div>
        <div class="program" name="出發">
          <label type="button">
            <span class="span1">出發日期</span>
            <input type="date" name="" v-model="selectedDate" :min="this.today" @change="updateMinDate" class="span2"
              :v-model="planeSearchArr.departureDate">
          </label>
        </div> -->
        <!-- <div class="program" name="抵達日期">
          <label type="button" style="border-radius:0 15px 15px 0;">
            <span class="span1">抵達日期</span>
            <input type="date" name="" v-model="tomorrowDate" :min="this.minDate" :disabled="!minDateHave" class="span2"
              :v-model="planeSearchArr.arrivalDate">
          </label>
        </div> -->
        <button class="searchBu" @click="goSearch">前往搜尋</button>
      </div>

    </div>
    <div class="pic" style="width: 100%; height: 80vh;">
      <!-- ============輪播=========== -->

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
            <div class="carousel-caption d-none d-md-block wwc">
              <h1>開拓自身眼界</h1>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.kkday.com/zh-hk/blog/wp-content/uploads/jpg-39-5.jpeg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block wwc">
              <h1>感受每個當下</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://image.cdn-eztravel.com.tw/3sYW0R-LNq_O4QjEnyAjz97HzYw4CPMHKSmMdP8Ea9E/g:ce/aHR0cDovL3ZhY2F0aW9uLmNkbi1lenRyYXZlbC5jb20udHcvaW1nL1ZEUi9USF8xMDIzMjkxMTk2LmpwZw.jpg"
              class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block wwc">
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
        <div class="block blockN" @click="">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/246fa4ebad55ce0c252a19705e17514b/hongkong-0304.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text ">
            <p>香港</p>
            <span>是講法律的地方</span>
          </div>
        </div>
        <div class="block" @click="goTokyo">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/m/f1eb4ce78a9bca3/original/Tokyo.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>東京</p>
            <span>很熱</span>
          </div>
        </div>
        <div class="block blockN">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/db465e93dcaad614e9bfcaddb5865e36/GettyImages-505777764.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>首爾</p>
            <span>炒年糕</span>
          </div>
        </div>
        <div class="block" @click="goMacao">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/m/288a593f841ac262/original/macau_china.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>澳門</p>
            <span>首家線上賭場上線拉
            </span>
          </div>
        </div>
        <div class="block" @click="goBangkok">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/76322ef5ee6ebe445aa45448c323959b/thailand-bangkok-6238.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>曼谷</p>
            <span>人不可貌相</span>
          </div>
        </div>
        <div class="block" @click="goSingapore">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/m/13843abc13d27263/original/Singapore.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>新加坡</p>
            <span>八瓜</span>
          </div>
        </div>
        <div class="block blockN">
          <div class="img"
            style="background-image: url(https://content.skyscnr.com/c10d466e9ded52fcd9d103fa6e7b4e92/stock-photo-shanghai-in-blue-32506683.jpg?crop=100px:100px&quality=90);">
          </div>
          <div class="text">
            <p>上海</p>
            <span>灘賭聖</span>
          </div>
        </div>
        <div class="block" @click="goKyoto">
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
          <li><a href="">加入團隊</a></li>
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
          <li><a href="">加入團隊</a></li>
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
        width: 10%;
        height: 100%;
        position: absolute;
        right: 0;

        //   button {
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     border-radius: 0.5rem;
        //     padding: 0;
        //     border: none;
        //     background: none;
        // }
        .oo {
          //樂狗航空右側 使用者圖示
          display: flex;
          align-items: center;
          // justify-content: space-between;
          flex-direction: row;
          padding: 0;
          margin: 0;
          .ii {
            margin-left: 1rem;
            &:hover {
              background-color: rgba(255, 255, 255, 0.354);
            }
            
            &:active {
              background-color: rgba(161, 29, 29, 0.861);
            }
          }
        }
      }
    }

    .title {
      width: 80%;
      height: 20%;
      margin-bottom: 10px;
      text-align: left;

    }

    .search {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: left;
      margin-top: 20px;

      div {
        margin-left: 6px;
      }

      .place {
        width: 25%;
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
          box-sizing: border-box;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          // .placeIn {
          //   span {
          //     line-height: 1.2rem;
          //     font-weight: 700;
          //   }

          //   .input {
          //     width: 90%;
          //     height: 1.3rem;
          //     padding: 0 1rem 0 0;
          //     font-size: 1.3rem;
          //     border: none;
          //     outline: none !important;
          //     outline-offset: unset !important;
          //     background-color: initial;
          //     text-overflow: ellipsis;
          //     white-space: nowrap;
          //     overflow: hidden;
          //   }
          // }

        }
      }

      // .gogo {
      //   width: 500px;
      // }

      .onon {}

      .program {
        width: 20%;
        height: 90%;

        label {
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

          .span1 {
            color: #626971;
            white-space: nowrap;
            font-size: 1.2rem;
            line-height: 1.25rem;
            font-weight: 700;
          }

          .span2 {
            width: 80%;
            font-size: 1.4rem;
            color: gray;
          }
        }
      }

      .searchBu {
        position: absolute;
        right: 5rem;
        width: 10rem;
        height: 100%;
        background-color: #0062e374;
        border-radius: 3rem;
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        &:hover{
          font-size: 2rem;
          background-color: rgba(255, 255, 255, 0.401);
        }
        &:active{
          background-color: rgba(0, 0, 0, 0.194);

        }
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
        border-radius: 10px;
        transition: .5s;

        &:hover {
          // width: 70%;
          background-color: rgba(130, 157, 238, 0.15);
          box-shadow: 2px 1px 2px black;
        }

        &:active {
          background-color: rgba(48, 71, 139, 0.15);

        }


        .img {
          width: 7vw;
          height: 100%;
          background-color: rgba(0, 255, 255, 0.271);
          background-size: cover;
          border-radius: 10px 0 0 10px;
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

      .blockN {

        &:hover {
          background-color: #0F2D3C;
          // width: 70%;
          transition: .5s;

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

          &:active {
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

      .ii {
        margin-left: 15px;
        font-size: 50px;
        width: 50px;
        height: 50px;

        &:hover {
          box-shadow: 2px 2px 5px 0 black;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: .5rem;
        }

        &:active {
          box-shadow: -1px -1px 1px 2px black;
        }
      }
    }
  }
}
</style>