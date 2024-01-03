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
      <div class="in1">
        <label for="">帳號</label>
        <input type="text" class="input" />
      </div>

      <div class="in2">
        <label for="">密碼</label>
        <input type="password" class="input" name="" id="" />
      </div>
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
    height: 60vh;
    border: 1px solid black;
    margin: 0 auto;
    .in1{
      margin: 10vh  auto;
    }
    .input {
      width: 25vw;
      height: 5vh;
    }
  }
}
</style>
