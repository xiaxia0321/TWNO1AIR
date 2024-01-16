//旅客資訊及聯絡方式輸入頁
<script>
export default {
  data() {
    return {
      selectedYear: "",
      selectedMonth: "",
      selectedDay: "",
      years: Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index),
      months: Array.from({ length: 12 }, (_, index) => index + 1),
      days: Array.from({ length: 31 }, (_, index) => index + 1),
    };
  },
  methods: {},
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div class="big">
    <div class="top"><h2>旅客資訊</h2></div>
    <div class="mid">
      <div class="m1">
        <h3>成人</h3>
      </div>

      <div class="m2">
        <p>請確認輸入的資料與旅客護照上所示資料完全相同</p>
        <div class="form-floating mb-3">
          <select
            class="form-select aa"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option value="1">先生</option>
            <option value="2">女士</option>
            <option value="3">博士</option>
          </select>
          <label for="floatingSelect">稱謂</label>
        </div>

        <div class="form-floating mb-3 bb">
          <input type="text" class="form-control" placeholder="" />
          <label>姓氏</label>
        </div>
        <div class="form-floating mb-3 bb">
          <input type="text" class="form-control" placeholder="" />
          <label>名字</label>
        </div>
       <br>
        <span>年：</span>
        <select v-model="selectedYear" id="year" name="year" class="Birthday">
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>

        <span>月：</span>
        <select v-model="selectedMonth" id="month" name="month" class="Birthday">
          <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
        </select>

        <span>日：</span>
        <select v-model="selectedDay" id="day" name="day" class="Birthday">
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
        <br>
        <br>
        <div class="form-floating mb-3 bb">
          <input type="text" class="form-control" placeholder="" />
          <label>聯絡人</label>
        </div>
        <div class="form-floating mb-3 bb">
          <input type="text" class="form-control" placeholder="" />
          <label>手機</label>
        </div>
        <div class="form-floating mb-3 bb">
          <input type="text" class="form-control" placeholder="" />
          <label>住家電話</label>
        </div>
        <br />
      </div>
    </div>
  </div>
  <div class="bottom">
    <button>送出</button>
  </div>
</template>

<style scoped lang="scss">
.big {
  width: 100vw;
  height: 150vh;
  background-color: cadetblue;
  .top {
    width: 100vw;
    height: 10vh;
    background-color: blue;
  }
  .mid {
    width: 90vw;
    height: 95vh;
    display: flex;
    margin: 5vh auto;

    .m1 {
      width: 25%;
      height: 100%;
      color: white;
      background-color: #3b2641;
      text-align: justify;
      padding: 30px 0px 0px 30px;
    }
    .m2 {
      width: 75%;
      height: 100%;
      background-color: #ffeeda;
      padding: 5vh 5vw 5vh 5vw;
      text-align: justify;
      // display: flex;
      // justify-content: center;
      .aa {
        width: 30%;
      }
      .bb {
        width: 60%;
      }
      .Birthday {
        width: 25%;
        height: 8vh;
      }
    }
  }
}
.bottom {
  width: 100vw;
  height: 10vh;
  background-color: #a79b8d;
  bottom: 0;
  color: white; /* 自行調整文字顏色 */
  z-index: 2;
  position: fixed;
  button {
    position: absolute;
    right: 50px;
    top: 10px;
    width: 15vw;
    height: 7vh;
    background-color: #3b2641;
    color: white;
  }
}
</style>
