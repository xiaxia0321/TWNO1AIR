<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(counter,['setPP',])
  },
  components: {
  },
  mounted() {
    this.setPP(3)
  } 

}
</script>

<template>
  <div class="body">
    <div class="header">
      <span>BackPlane</span>
    </div>
    <div class="content">
      <div class="inside">
        <table>
          <tr>
            <th class="b1 bb">/</th>
            <th class="b2 bb">編號</th>
            <th class="b3 bb">名稱</th>
            <th class="b4 bb">狀態</th>
            <th class="b5 bb">開始時間</th>
            <th class="b6 bb">結束時間</th>
            <th class="b7 bb">結果</th>
          </tr>
          <tr>
            <td class="bb">1</td>
            <td class="bb">2</td>
            <td class="bb">3</td>
            <td class="bb">4</td>
            <td class="bb">5</td>
            <td class="bb">6</td>
            <td class="bb">7</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  .header {
    width: 82%;
    height: 10vh;
    text-align: center;
    font-size: 3rem;
  }

  .content {
    border: 1px solid black;
    width: 82%;
    height: 90vh;

    .inside {
      width: 100%;
      display: flex;
      justify-content: center;
      // padding: 25px;

      th {
        background-color: gray;
        color: white;
        padding: 10px;
      }

      tr {
        .bb{
          border: 1px solid black;
        }
        .b1{
          width: 50px;
        }

        .b2 {
          width: 50px;
        }

        .b3 {
          width: 220px;
        }

        .b4 {
          width: 70px;
        }

        .b5 {
          width: 120px;
        }

        .b6 {
          width: 120px;
        }

        .b7 {
          width: 50px;
        }

      }

      td {
        background-color: rgb(227, 227, 227);
      }
    }
  }
}
</style>

