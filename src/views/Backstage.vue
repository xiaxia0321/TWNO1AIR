<script>
import { RouterLink, RouterView } from 'vue-router';
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    RouterLink, RouterView,
  },
  computed:{
    ...mapState(counter, ["pp"])
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
          <div class="liu" @click="ppc1">
            <RouterLink to="/Backstage/BackHome" class="routerItem">
              <li :class="{ 'planB': this.pp == 1 }">首頁</li>
            </RouterLink>
          </div>
          <!-- <div class="liu" @click="ppc2">
            <RouterLink to="/Backstage/BackMembership" class="routerItem">
              <li :class="{ 'planB': this.pp == 2 }">會員管理</li>
            </RouterLink>
          </div> -->
          <div class="liu" @click="ppc3">
            <RouterLink to="/Backstage/BackPlane" class="routerItem">
              <li :class="{ 'planB': this.pp == 3 }">航班管理</li>
            </RouterLink>
          </div>
          <div class="liu" @click="ppc4">
            <RouterLink to="/Backstage/BackOrder" class="routerItem">
              <li :class="{ 'planB': this.pp == 4 }">查看訂單</li>
            </RouterLink>
          </div>
        </ul>
      </div>
    </div>
    <div class="right">
      <RouterView />
    </div>

  </div>
</template>

<style scoped lang="scss">
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
        background-image: url(/02B.png);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    .menu {
      width: 100%;
      height: 88%;
      // border: 1px solid white;

      ul {
        list-style-type: none;
        text-align: center;
        padding: 0;

        a {
          text-decoration: none;
          color: white;
        }

        li {
          transition: 0.5s;
          margin-bottom: 1rem;
          font-size: 1.4rem;

          &:hover {
            background-color: rgba(255, 255, 255, 0.277);
          }
        }

        .planB {
          background-color: rgba(11, 8, 43, 0.673);
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
