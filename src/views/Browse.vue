<script>

export default {
  data() {
    return {
      date1: "01日",//開始日期
      date2: "30日",//結束日期
      nation: "日本",//國家
    };
  },
  methods: {

  },
};
</script>

<template>
  
  <h1>從{{date1}}到{{date2}}間探索{{nation}}</h1>

  <div class="big"><!-- ======================================================================= -->
  <!-- ======================================================================= -->
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">最便宜航班</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">直航</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">推薦航班</label>
</div>
  <!-- ======================================================================= -->

  <h1>樂狗航空帶你輕鬆旅行</h1>
<div class="row">

  <div class="card" style="width: 18rem;">
  <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/85841/shutterstock_750359194.jpg_1140x855.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{nation}}</h5>
    <p class="card-text text">航班最低只要</p>
    <p class="card-text money">7800元</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/85841/shutterstock_750359194.jpg_1140x855.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{nation}}</h5>
    <p class="card-text text">航班最低只要</p>
    <p class="card-text money">7800元</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/85841/shutterstock_750359194.jpg_1140x855.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{nation}}</h5>
    <p class="card-text text">航班最低只要</p>
    <p class="card-text money">7800元</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/85841/shutterstock_750359194.jpg_1140x855.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{nation}}</h5>
    <p class="card-text text">航班最低只要</p>
    <p class="card-text money">7800元</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/85841/shutterstock_750359194.jpg_1140x855.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{nation}}</h5>
    <p class="card-text text">航班最低只要</p>
    <p class="card-text money">7800元</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/85841/shutterstock_750359194.jpg_1140x855.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{nation}}</h5>
    <p class="card-text text">航班最低只要</p>
    <p class="card-text money">7800元</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>

  </div> <!-- ======================================================================= -->


</template>

<style scoped lang="scss">
.big{
  width: 100vw;
  height: 200vh;
  margin: 0 auto;
  border: 1px solid black;
  background-color: #31304D;
  
  h1{ //標題
    color: white;
    margin-top: 3vw;
  }
  .row{
    display: flex;
    justify-content: center;
  }
  .card{
    margin: 50px;
    height: 400px;
    background-color: #161A30;
    .text{
      color: white;
    }
    .money{
        color: #F8C68A;
      }
    h5{
      color: white;
    }
     
    

  }
}
</style>
