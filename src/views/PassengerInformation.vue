//旅客資訊及聯絡方式輸入頁
<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
import Swal from 'sweetalert2'
import axios from 'axios';
export default {
  data() {
    return {
      planeArr: [1],
      MemberInformation: [],
      all: [

      ],

      members: [
        // 初始一筆會員資料
        { title: "1", name: "", birthday: "", contact: "", phone: "" },
      ],
    };
  },
  computed: {
    ...mapState(counter, ["Order", 'userDate'])
  },
  methods: {



    // 送出
    userOrder() {
      if (this.validateFormData()) {
        const newMemberData = this.members.map(member => ({
          selectedTitle: member.title,
          enteredName: member.name,
          enteredBirthday: member.birthday,
          enteredContact: member.contact,
          enteredPhone: member.phone,
        }));
        console.log('人數:', this.members.length); //這個也要存進去
        console.log('所有組數據:', newMemberData);
        // 存入 Pinia 中的 Order store 的 getAddPeople 中
        this.Order.getAddPeople = newMemberData;
        console.log(this.Order.getAddPeople);
        this.$router.push("/ProductDetailed");
        // 這裡可以選擇將 MemberInformation 也更新
        // this.MemberInformation = newMemberData;
      }
    },

    // 驗證表單資料
    validateFormData() {
      for (const member of this.members) {
        if (!member.title || !member.name || !member.birthday || !member.contact || !member.phone) {
          console.log("你有資料尚未填寫");
          Swal.fire({
            icon: "error",
            text: "你有資料尚未填寫",
          });
          return false;
        }
      }
      return true;
    },

    back() {
      this.$router.push("/OutboundConfirm"); //推送至下一頁的路徑
    },


    //新增
    addMember() {
      if (this.validateFormData()) {
        if (this.members.length < 4) {
          this.members.push({ title: "1", name: "", birthday: "", contact: "", phone: "" });
        }
      }
    },


    //刪除
    removeMember(index) {
      if (this.members.length > 1) {
        this.members.splice(index, 1);
      }
    },
    sameDate() {
      this.members[0].name = this.userDate.uuu[0].name;
    }

  },
};
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div class="big">
    <div class="top">
      <i class="fa-solid fa-arrow-left arrow cc" @click="back"></i>
      <h2>旅客資訊</h2>
    </div>
    <div class="mid" v-for="(item, index) in planeArr[0]" :key="index">
      <div class="m1">
        <span>{{ "人數 " + this.members.length + "人" }}</span>
        <br />
        <button @click="addMember" :disabled="members.length >= 4">新增</button>
        <br />
        <button @click="removeMember(index)">刪除</button>

        <br />
      </div>
      <div class="m2">
        <p>請確認輸入的資料與旅客護照上所示資料完全相同</p>
        <button @click="sameDate">v</button>
        <label>同會員資訊</label>
        <br />
        <br />
        <div v-for="(member, index) in members" :key="index">
          <div class="form-floating mb-3">
            <select class="form-select aa" id="titleSelect" aria-label="Floating label select example"
              v-model="member.title">
              <option value="1">先生</option>
              <option value="2">女士</option>
              <option value="3">博士</option>
            </select>
            <label for="titleSelect">稱謂</label>
          </div>
          <!-- v-model="Order.getAddPeople" -->
          <div class="form-floating mb-3 bb">
            <input type="text" class="form-control" id="nameInput" placeholder="" v-model="member.name" />
            <label>姓名</label>
          </div>

          <div class="form-floating mb-3 bb">
            <input type="date" class="form-control" id="birthdayInput" placeholder="" v-model="member.birthday" />
            <label>生日</label>
          </div>
          <div class="form-floating mb-3 bb">
            <input type="text" class="form-control" id="contactInput" placeholder="" v-model="member.contact" />
            <label>聯絡人</label>
          </div>
          <div class="form-floating mb-3 bb">
            <input type="text" class="form-control" id="phoneInput" placeholder="" v-model="member.phone" />
            <label>手機</label>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <br />
    <br />
    <h2>注意事項</h2>
    <br />
    <p>
      1.來回行程之票價產品價格是以各航段分開顯示，各航段之價格並非單程票價，該顯示價格僅為提供計算所購買的票價產品之參考。
    </p>
    <p>
      2.各航段如選擇不同之票價產品組合時，相關收費標準以較嚴格者為主。例如:
      航段中包含全額與基本之票價產品組合時，相關手續費用需依照「基本」票價產品規範收取。
    </p>
    <p>
      3.兒童旅客的改票/退票/未登機手續費為成人旅客收費的75%；嬰兒旅客的改票/退票手續費為成人旅客收費的10%。
    </p>
    <p>
      4.依據臺灣消費者保護法第19條第2項但書所訂之「通訊交易解除權合理例外情事適用準則」規定，網路購買國際航空機票不適用七天解除權。如消費者購買機票後欲退票，將依樂狗航空退票規定辦理。於樂狗航空官方網站/App
      購買機票後，欲辦理機票退費，將按實際已搭乘行程之適用票價計算，相關退票申請條款與規定，詳見「線上退票」。當日購買、申請退票時間點為原訂航班起飛後4小時內或以
      COSMILE 哩程支付之機票不適用此線上退票功能，請透過「退票申請」頁面辦理。
    </p>
    <p>
      5.樂狗航空保留隨時修訂或終止各種票價產品、優惠及相關規則之權利，詳見「運送條款」。
    </p>
    <p>6.以上規定僅適用於搭乘樂狗航空實際營運之航班。</p>
    <p>
      7.因應新型冠狀病毒影響，調整樂狗航空國際航線班機服務內容，詳見「樂狗航空安心防疫措施及服務調整」。
    </p>
    <p>
      8.樂狗航空關心每位旅客的健康，如有發燒、咳嗽、呼吸急促等身體不適，請暫緩搭機。各國入境相關規定及簽證須知，請參考「外交部領事事務局」。
    </p>
    <p>
      9.搭機前，務必先行確認目的地之檢疫和入境規範
      (最新相關規定與法令仍應以各國政府公告為主) ，詳見「最新旅遊限制相關規定」。
    </p>
    <p>
      10.機票折扣僅適用於機票票價，不適用於各項附加費(包含但不限於燃油附加費、兵險、指定日期加價、停留點加價等)、服務費(包含但不限於訂位服務費、機場服務費、旅客服務費等)、手續費(包含但不限於改票、退票、未登機手續費等)與各地機場稅金與政府規費等。
      相關連結
    </p>
  </div>
  <div class="bottom1">
    <button @click="userOrder">送出</button>
  </div>
</template>

<style scoped lang="scss">
.big {
  width: 100vw;
  height: 100vh;
  background-color: #161a30;

  .top {
    width: 100vw;
    height: 10vh;
    padding: 0px 40px 0px 40px;

    background-color: #31304d;
    color: white;
    text-align: justify;

    .cc {
      font-size: 24px;
      color: #f8c68a;
    }
  }

  .mid {
    width: 90vw;
    // height: 95vh;
    display: flex;
    margin: 10vh auto 0 auto;

    button {
      width: 100px;
      height: 50px;
    }

    .m1 {
      width: 25%;
      // height: 100%;
      color: white;
      // background-color: #3b2641;
      background-color: #0f2d3c;
      text-align: justify;
      padding: 30px 0px 0px 30px;
    }

    .m2 {
      width: 75%;
      height: 70vh;
      overflow: auto;
      background-color: #ffeeda;
      padding: 5vh 5vw 5vh 5vw;
      text-align: justify;
      font-size: 18px;

      // display: flex;
      // justify-content: center;
      span {
        font-size: 24px;
      }

      .aa {
        width: 30%;
      }

      .bb {
        width: 60%;
      }
    }
  }
}

.bottom {
  width: 100vw;
  height: 85vh;
  text-align: justify;
  padding: 0px 40px 0px 40px;
  background-color: #31304d;
  color: white;
  font-size: 14px;
}

.bottom1 {
  width: 100vw;
  height: 10vh;
  background-color: #a79b8d;
  bottom: 0;
  color: white;
  /* 自行調整文字顏色 */
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
