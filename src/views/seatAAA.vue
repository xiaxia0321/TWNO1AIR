<script>
import axios from "axios";
import Cookies from "js-cookie";
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      row: 30,
      col: 6,
      selectedSeats: [],
      movieInfo: {},
      userLoggedIn: false,
      account: "",
      lockedSeats: ["1A", "3C"], // 鎖定的座位
    };
  },
  computed: {
    ...mapState(counter, ["plane", "planeSearchCheack", "Order"]),

    test() {
      console.log(this.planeSearchCheack.ccc.departureLocation);
    },
    formattedSelectedSeatsString() {
      return this.selectedSeats
        .map((seat) => {
          const rowChar = seat.row; // 将行数转换为字母
          const colNum = String.fromCharCode(65 + seat.col - 1); // 列数保持不变
          return `${rowChar}${colNum}`;
        })
        .join(", "); // 使用逗号和空格连接座位信息字符串
    },
    totalPrice() {
      const basePrice = parseFloat(this.movieInfo.price); // 电影票基础价格，确保是数字类型
      const numberOfSeats = this.selectedSeats.length; // 选中座位的数量
      const totalPrice = basePrice * numberOfSeats; // 计算总价
      return totalPrice; // 返回保留两位小数的字符串形式
    },
  },
  methods: {
    isSeatLocked(row, col) {
      // 将座位信息转换为字母和数字的形式
      const seat = `${row}${String.fromCharCode(65 + col - 1)}`;

      // 检查座位是否在已购买的座位列表中，如果在就锁定
      return this.lockedSeats.includes(seat);
    },
    getCheckboxImage(row, col) {
      // 根据座位是否锁定和是否被选中返回不同的图像路径
      if (this.isSeatLocked(row, col)) {
        return "/3.jpg"; // 锁定状态的图像路径
      } else if (
        this.selectedSeats.some((seat) => seat.row === row && seat.col === col)
      ) {
        return "/2.jpg"; // 选中状态的图像路径
      } else {
        return "/1.jpg"; // 默认图像路径
      }
    },

    selectSeat(row, col) {
  // 检查座位是否已锁定
  if (this.isSeatLocked(row, col)) {
  return;
}

// 检查座位是否已经被选择
const existingSeatIndex = this.selectedSeats.findIndex(
  (seat) => seat.row === row && seat.col === col
);

if (existingSeatIndex !== -1) {
  // 如果座位已经被选择，则取消选择
  this.selectedSeats.splice(existingSeatIndex, 1);
} else {
  // 如果座位未被选择，且未达到最大选择人数，则添加到已选择的座位列表中
  if (this.selectedSeats.length < this.Order.getAddPeople[0].enteredPeople) {
    this.selectedSeats.push({ row, col });
  }
}
},

    goinTicket() {
      this.$router.push("/ticket");
    },
    gogo() {
    this.planeSearchCheack.seat = this.formattedSelectedSeatsString
      this.$router.push("/ProductDetailed");
    },
    // buyTicket() {
    //   axios({
    //     url: "http://localhost:8080/movie/buyinfo/create",
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: {
    //       account: this.account,
    //       movie: this.movieInfo.movieName,
    //       movieId: this.movieInfo.movieId,
    //       cinema: this.movieInfo.cinema,
    //       area: this.movieInfo.area,
    //       price: this.totalPrice,
    //       onDate: this.movieInfo.playDate,
    //       onTime: this.movieInfo.playTime,
    //       seat: this.formattedSelectedSeatsString,
    //     },
    //   }).then((res) => {
    //     console.log(res);
    //     console.log(res.data.rtnCode);
    //     if (res.data.rtnCode == "Successful!") {
    //       alert("恭喜購票成功");
    //       this.$router.push("/Ticket");
    //     }
    //   });
    // },
    // ticketSearch() { //搜尋此航班已購票位置去進行鎖定
    //     axios({
    //         url: 'http://localhost:8080/movie/buyinfo/searchseat',
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         data: {
    //             movieId: this.movieInfo.movieId,
    //             cinema: this.movieInfo.cinema,
    //             area: this.movieInfo.area,
    //             onDate: this.movieInfo.playDate,
    //             onTime: this.movieInfo.playTime,
    //         },
    //     }).then(res => {
    //         const seats = res.data.buyInfoList.map(item => item.seat);
    //         console.log(seats); // 这里是包含所有座位的数组

    //         // 如果座位信息是以逗号分隔的，你可以使用 split 方法进行拆分
    //         const splitSeats = seats.flatMap(seat => seat.split(','));

    //         console.log(splitSeats); // 这里是包含所有座位的数组（每个座位分开）
    //         this.lockedSeats = splitSeats
    //     }
    //     )
    // },
    logincheck() {
      this.userLoggedIn = Cookies.get("userLoggedIn");
      if (this.userLoggedIn) {
        this.account = Cookies.get("account");
        Cookies.set("userLoggedIn", true, { expires: 7, path: "/" });
        Cookies.set("account", this.account, { expires: 7, path: "/" });
      }
      console.log(this.userLoggedIn);
    },
  },
  async mounted() {
    this.movieInfo = this.$route.query;
    console.log("Movie Details:", this.movieInfo);
    this.ticketSearch();
    this.logincheck();
  },
  watch: {
    selectedSeats() {
      // 当 selectedSeats 数组发生变化时，强制组件重新渲染
      this.$forceUpdate();
    },
  },
};
</script>

<template>
  <div class="movieSeat">
    <div class="seat">
      <!-- <div class="screen">
                <div class="movieScreen">
                    <div class="circle">
                        螢幕
                    </div>
                </div>
            </div> -->
      <button @click="test">測試</button>
      <div class="postion">
        <div class="rowTitle">
          <ul v-for="i in row" :key="i">
            <ol>
              {{
                i
              }}
            </ol>
          </ul>
        </div>
        <div class="choseSeat">
          <label v-for="i in row" :key="i" class="row-label">
            <label v-for="j in col" :key="j" class="col-label">
              <input
                class="forCheckbox"
                type="checkbox"
                :id="'seat_' + i + '_' + j"
                v-model="selectedSeats"
                :value="{ row: i, col: j }"
                :disabled="
                  isSeatLocked(i, j) ||
                  selectedSeats.length >= Order.getAddPeople[0].enteredPeople
                "
              />
              <img
                :src="getCheckboxImage(i, j)"
                alt="Checkbox Image"
                class="picCheckbox"
              />
              <!-- <img v-if="!isSeatLocked(i, j)" :src="getCheckboxImage(i, j)" alt="Checkbox Image"
                                class="picCheckbox"> -->
            </label>
          </label>
          <!-- <div class="colTitle">
                        <ul v-for=" j in col" :key="j">
                            <ol>{{ j }}</ol>
                        </ul>
                    </div> -->
          <div class="colTitle">
            <ul v-for="j in col" :key="j">
              <ol>
                {{
                  String.fromCharCode(65 + j - 1)
                }}
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="ticketInfo">
      <h1>{{ this.movieInfo.movieName }}</h1>

      <ul>
        <!-- <li>機型:{{ this.planeSearchArr.airplainType }}</li> -->
        <li>艙等:{{ this.planeSearchCheack.ccc.classType }}</li>
        <li>人數:{{ this.Order.getAddPeople[0].enteredPeople }}</li>
        <li>出發日期:{{ this.planeSearchCheack.ccc.departureDate }}</li>
        <li>出發時間:{{ this.planeSearchCheack.ccc.depatureTime }}</li>
        <li>出發機場:{{ this.planeSearchCheack.ccc.depatureAirport }}</li>
        <li>抵達日期:{{ this.planeSearchCheack.ccc.arriveDate }}</li>
        <li>抵達時間:{{ this.planeSearchCheack.ccc.arriveTime }}</li>
        <li>抵達機場:{{ this.planeSearchCheack.ccc.arriveAirport }}</li>
        <li>票價:{{ this.Order.getPrice }}</li>
        <li>座位:{{ this.formattedSelectedSeatsString }}</li>
      </ul>
      <hr class="separator" />
      <h2>總共價格</h2>
      <h3>${{ this.Order.getPrice * this.Order.getAddPeople[0].enteredPeople }}</h3>
      <button type="button" @click="goinTicket()">返回</button>
      <button type="button" @click="gogo">下一步</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.forCheckbox {
  opacity: 0;
}

.picCheckbox {
  /* 根據需要設定圖片的樣式，例如寬度、高度等 */
  width: 40px;
  height: 40px;
  /* 可以隱藏原生 checkbox，但保留其功能 */
  opacity: 1;
  // position: absolute;
  z-index: 20;
  /* 調整 z-index 以確保 img 覆蓋在 input 上面 */
}

.movieSeat {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; // 使内容水平居中
  align-items: center; // 使内容垂直居中

  .seat {
    width: 70vw;
    height: 100vh;
    border-right: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    // overflow-y: auto;
    // overflow-x: hidden;
    .screen {
      display: flex;
      justify-content: center;
      width: 70vw;
      height: 14vh;

      .movieScreen {
        width: 80vw;
        height: 10vh;
        height: auto;
        overflow: hidden;

        .circle {
          width: 70vw;
          height: 200px;
          border-radius: 100%;
          border: 10px solid;
          font-size: 24pt;
        }
      }
    }

    .postion {
      display: flex;
      margin-top: 50px;

      .rowTitle {
        ol {
          width: 40px;
          height: 40px;
          margin-top: 10px;
          margin-bottom: 30px;
        }
      }

      .choseSeat {
        margin-right: 70px;

        .colTitle {
          display: flex;

          ul {
            width: 50px;
            height: 40px;
            padding: 0;

            ol {
              margin-left: 15px;
              padding: 0;
            }
          }
        }

        .row-label {
          //row是向右(排)
          display: flex;
          // flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
          /* 設定行之間的底部間距 */
        }

        .col-label {
          //col是向下(欄)
          display: flex;
          margin-right: 10px;
          /* 設定列之間的右側間距 */
          width: 40px;
          /* 根據你的需求設定寬度 */
          height: 40px;
          /* 根據你的需求設定高度 */
        }
      }
    }
  }

  .ticketInfo {
    width: 30vw;
    height: 90vh;
    // border: 1px solid;
    color: white;

    li {
      list-style: none;
      text-align: left;
      font-size: 16pt;
      margin-bottom: 30px;
    }

    .separator {
      border: 5px solid black;
      /* 分隔線的顏色和樣式，你可以根據需要更改 */
      // margin-bottom: 50px;
      /* 調整分隔線上下的邊距，根據需要更改 */
    }

    button {
      margin-top: 30px;
    }
  }
}
</style>
