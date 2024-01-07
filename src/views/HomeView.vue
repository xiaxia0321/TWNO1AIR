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
    <!-- ======================= -->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.triplisher.com/PIC/908f/05a6/f9b1/c4c7/5283084_full.jpg" class="d-block w-100" alt="...">
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
      <img src="https://img.triplisher.com/PIC/908f/05a6/f9b1/c4c7/5283084_full.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>體驗異國風情</h1>
        <p>漫步塞納河畔，和你的美，品嘗左岸的咖啡</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <!-- ======================= -->
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
#carouselExampleCaptions {
  width: 100%; /* 根據需要設置寬度 */
  height: 80vh; /* 根據需要設置高度 */
  margin: auto; /* 將輪播置中 */
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
  object-fit: cover; /* 保持圖片比例並填滿整個輪播項目 */
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
    background-color: #161A30;
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