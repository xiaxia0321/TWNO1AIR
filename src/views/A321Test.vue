<script>
export default {
    data() {
        return {
            seatLayout: [],
        }
    },
    mounted() {
        this.generateSeatLayout();
    },
    methods: {
        // generateSeatLayout() {
        //     // 定義行數和每行的座位
        //     const numRows = 30; // 根據需求調整這個數字
        //     const seatsPerRow = ['A', 'B', 'C', 'H', 'J', 'K'];

        //     // 迴圈生成座位標籤
        //     for (let row = 4; row <= numRows + 3; row++) {
        //         const seatRow = seatsPerRow.map(seat => ({
        //             label: `${row}-${seat}`,
        //             disabled: false,
        //             rowNumber: row,
        //         }));

        //         this.seatLayout.push(seatRow);
        //     }
        // },
        generateSeatLayout() {
    const numRows = 30;
    const seatsPerRow = ['A', 'B', 'C', 'H', 'J', 'K'];
    const aisleWidth = 1; // 走道寬度，即 'ABC' 和 'HJK' 之間的間距

    for (let row = 4; row <= numRows + 3; row++) {
        const seatRow = [];

        seatsPerRow.forEach((seat, seatIndex) => {
            const label = `${row}-${seat}`;
            seatRow.push({
                label,
                disabled: false,
                rowNumber: row,
            });

            // 在 'ABC' 和 'HJK' 之間插入間距
            if ((seat === 'C' && seatsPerRow[seatIndex + 1] === 'H') || (seat === 'B' && seatsPerRow[seatIndex + 1] === 'H')) {
                for (let i = 0; i < aisleWidth; i++) {
                    seatRow.push({
                        label: '', // 可以根據需要調整間距的樣式或內容
                        disabled: false,
                        rowNumber: row,
                    });
                }
            }
        });

        this.seatLayout.push(seatRow);
    }
},

        handleSeatChange(selectedSeat) {
    console.log('Selected seat:', selectedSeat);
    // 在這裡你可以進行其他相應的處理，比如更新資料或其他操作
  },
    },
}
</script>

<template>
   <fieldset class="ui-cinema">
        <legend>A321-neo經濟艙座位選擇表</legend>
        <ol>
            <li v-for="(row, rowIndex) in seatLayout" :key="rowIndex">
                <label v-for="(seat, seatIndex) in row" :key="seatIndex">
                    <input
                        type="checkbox"
                        :value="seat.label"
                        :disabled="seat.disabled"
                        @change="handleSeatChange(seat.label)"
                    />
                </label>
                <span>{{ row[0].rowNumber }}</span>
            </li>
        </ol>
    </fieldset>
  </template>

<style scoped lang="scss">
//下面四個是配色
$ButtonBorder: color-mix(in oklab, Canvas 80%, CanvasText 20%);
$ColorError: color-mix(in oklab, hsl(360, 60%, 46%), Canvas 10%);
$ColorSuccess: color-mix(in oklab, hsl(136, 41%, 41%), Canvas 10%);
$GrayCanvas: color-mix(in oklab, Canvas 95%, CanvasText 10%);

legend {
  font-weight: 500;
}

[type=checkbox] {
  $_icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="white" d="M14 2.5l-8.5 8.5-3.5-3.5-1.5 1.5 5 5 10-10z"/></svg>'); //選到後會跳出一個勾勾圖案
  appearance: none;
  height: 2.5em; //每個格子的高度
  margin: 0;
  width: 2em; //每個格子的寬度
  
  &:checked {
    background: $ColorSuccess $_icon no-repeat 50% / 55%; //選到後會變$ColorSuccess這個顏色 還有$_icon這個圖案
  }
}

.ui-cinema {
  all: unset; //清除 .ui-cinema 元素上之前設定的所有樣式，使其返回到瀏覽器的默認樣式。
  direction: ltr; //確保文字的排列方向是從左到右。

  input {
    $_bdc: color-mix(in srgb, var(--ui-cinema-seat-bg, $GrayCanvas), #000 30%);
    // aspect-ratio: 1 / .9; //設定了 <input> 元素的寬高比例。
    background-color: var(--ui-cinema-seat-bg, $GrayCanvas);
    border-color: $_bdc;
    border-radius: .5em .5em .15em .15em; //座位圓角修飾
    border-style: solid; //設定 <input> 元素的邊框樣式為實線，並調整邊框寬度。
    border-width: 0 0 .25em 0;

    &:checked {
      --ui-cinema-seat-bg: $ColorSuccess; //如果 <input> 元素被選中，則改變 --ui-cinema-seat-bg 變數的值為 $ColorSuccess
      --AccentColor: var(--ui-cinema-seat-bg); //，同時改變 --AccentColor 變數的值為 --ui-cinema-seat-bg 的值，並保留原始邊框顏色
      border-color: $_bdc;
    }
    &:disabled { //禁用座位
      --ui-cinema-seat-bg: $ColorError; //<input> 元素被禁用，則改變 --ui-cinema-seat-bg 變數的值為 $ColorError。
      background-color: $ColorError;
    }
    &:is([value=""], :not([value])) { //如果 <input> 元素的值為空或未定義，則設定透明度為 0，並禁用指標事件。
      opacity: 0;
      pointer-events: none;
    }
    &:focus-visible:not(:checked),
    &:hover:not(:checked):not(:disabled) {
      background: color-mix(in srgb, $ColorSuccess, Canvas 80%);
    }
    &:focus-visible:checked {
      outline: 2px solid color-mix(in srgb, $ColorSuccess, Canvas 40%);
    }
    &[inert] {
      --ui-cinema-seat-bg: $ButtonBorder;
    }
  }

  label {
    display: contents;
  }

  li {
    align-items: center;
    // counter-increment: row; //使用計數器，每次遇到 <li> 元素時，增加計數器的值。這在下面的 &::before 和 &::after 中用來顯示行號。
    display: grid; //將<li>元素設置為網格布局
    gap: 0.5ch; //座位間隔
    grid-auto-flow: column;   //指定網格的自動流動方向為列（從左到右）

    &::before{
      
    }
    &::after {
      // content: counter(row); //計數器
      // font-size: small;
      // padding-inline: 1ch;
    }
  }

  ol {
    // counter-reset: row; //重置計數器，確保每個有序列表開始時計數器的值為 0。
    display: grid; //將有序列表設置為一個網格容器，以便使用網格佈局。
    gap: 1ch;
    padding: 0;
 }
}
</style>
