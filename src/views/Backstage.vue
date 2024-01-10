<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components:{
    RouterLink,RouterView,
  }

}
</script>

<template>
  <div class="body">
    <div class="left">
      <div class="title">
        <div class="img"></div>
        <span>後臺管理系統</span>
      </div>
      <div class="menu">
        <ul>
          <li><RouterLink to="/Backstage/BackHome" class="routerItem">首頁</RouterLink></li>
          <li><RouterLink to="/Backstage/BackMembership" class="routerItem">會員管理</RouterLink></li>
          <li><RouterLink to="/Backstage/BackPlane" class="routerItem">航班管理</RouterLink></li>
          <li><RouterLink to="/Backstage/BackOrder" class="routerItem">查看訂單</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="right">
      <RouterView />
    </div>

  </div>
</template>

<style lang="scss">
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: row;
  z-index: 999;

  .left {
    width: 18%;
    height: 100%;
    background-color: #304156;
    color: rgb(240, 236, 229);

    .title {
      width: 100%;
      height: 12%;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .img {
        width: 50px;
        height: 3rem;
        background-image: url(/01.png);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    .menu {
      width: 100%;
      height: 88%;
      border: 1px solid white;
      ul{
        list-style-type: none;
        text-align: center;
        padding: 0;
        li{
          transition: 0.5s;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          &:hover{
            background-color: rgba(255, 255, 255, 0.277);
          }
          a{
            text-decoration: none;
            color: white;
          }
        }
      }
    }
  }

  .right {
    width: 82%;
    height: 100%;
    background-color: white;

  }
}
</style>
