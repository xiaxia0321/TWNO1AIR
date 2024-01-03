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
    <div class="header" style="width: 100%; height: 25%; background-color: rgba(5, 32, 60);"></div>
    <div class="pic" style="width: 100%; height: 25%;"></div>
    <div class="air" style="width: 100%; height: 25%;">
    <p>目前最熱門的航班</p>
    <div class="airIn"></div>
    <div class="airIn"></div>
    </div>
    <div class="foot" style="width: 100%; height: 25%; background-color: rgba(5, 32, 60);"></div>
  </div>
</template>

<style>
.big {
  position: relative;
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;	
  .header{

  }
  .pic{
    background-image: url(https://images5.alphacoders.com/126/thumb-350-1263472.webp);
    background-repeat:repeat-x;
    background-position: 50% 50%;
  }
  .air{
    border: 1px solid black;
    .airIn{
      width: 100%;
      height: 30%;
      margin-top: 1%;
      border: 1px solid red;
    }
  }
  .foot{

  }
}
</style>