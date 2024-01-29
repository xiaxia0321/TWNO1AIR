<script>
import { RouterLink, RouterView } from 'vue-router'
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
        RouterLink,
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        join() {
            this.$router.push('/Submit')
        },
        login() {
            this.$router.push('/Login')
        },
        goTokyo() {
            this.$router.push('/LocationTokyo')
        },
        goKyoto() {
            this.$router.push('/LocationKyoto')
        },
        goSingapore() {
            this.$router.push('/LocationSingapore')
        },
        goBangkok() {
            this.$router.push('/LocationBangkok')
        },
        goSFO() {
            this.$router.push('/LocationSFO')
        },
        checkInIntro() {
            this.$router.push('/CheckInIntro')
        },
        onlineCheckIn() {
            this.$router.push('/OnlineCheckIn')
        },
        A321() {
            this.$router.push("/A321"); //推送至下一頁的路徑
        },
        A330() {
            this.$router.push("/A330"); //推送至下一頁的路徑
        },
        A350() {
            this.$router.push("/A350"); //推送至下一頁的路徑
        },
        DepartureLocationTime() {
            this.$router.push("/DepartureLocationTime"); //推送至下一頁的路徑
        },
        ArrivalLocationTime() {
            this.$router.push("/ArrivalLocationTime"); //推送至下一頁的路徑
        },
        AirTimeSearch() {
            this.$router.push("/AirTimeSearch"); //推送至下一頁的路徑
        },
        AirTime() {
            this.$router.push("/AirTime"); //推送至下一頁的路徑
        },
        OutboundConfirm() {
            this.$router.push("/OutboundConfirm"); //推送至下一頁的路徑
        },
        ReturnConfirm() {
            this.$router.push("/ReturnConfirm"); //推送至下一頁的路徑
        },
        PassengerInformation() {
            this.$router.push("/PassengerInformation"); //推送至下一頁的路徑
        },
        ProductDetailed() {
            this.$router.push("/ProductDetailed"); //推送至下一頁的路徑
        },
        Refund() {
            this.$router.push("/Refund");
        },
        search() {
            this.$router.push("/AirTimeSearch");
        },
        goLogin() {
            if (this.account == "A01" && this.pwd == "aaa") {
                this.$router.push('/Backstage')
            } else {
                this.$router.push('/Login')
            }
        },
        goUser() {
            this.$router.push('/User')
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },
        isLogin(){
            if (condition) {
                
            }
        }
        
    },
    computed: {
        ...mapState(counter,['userDate'])
    },

}
</script>

<template>
    <div class="headerShow">
        <div class="happydog" @click="home"></div>
        <div class="icon">
            <i class="fa-solid fa-power-off ii" ii @click="goLogin"></i>
            <i class="fa-solid fa-user ii" @click="goUser"></i>
        </div>
        <ul class="drop-down-menu">
            <li>
                <a href="#" style="color: white;font-size: 20pt;">預訂行程</a>
                <ul>
                    <li>
                        <div class="reservation">
                            <div class="booking">
                                <br>
                                <h5>預訂行程</h5>
                                <button @click="search()">搜尋航班</button>
                                <br><br>
                                <h5>行程內容更改</h5>
                                <button @click="Refund()">線上退票</button>
                            </div>
                            <div class="hot">
                                <br>
                                <h5>熱門航點</h5>
                                <button @click="goTokyo()">前往東京</button>
                                <br>
                                <button @click="goKyoto()">前往大阪</button>
                                <br>
                                <button @click="goSingapore()">前往新加坡</button>
                                <br>
                                <button @click="goBangkok()">前往曼谷</button>
                                <br>
                                <button @click="goSFO()">前往舊金山</button>
                            </div>
                            <div class="seat">
                                <br>
                                <h5>預選座位</h5>
                                <img src="/sabrina/機艙座位.jpeg" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" style="color: white;font-size: 20pt;" @click="AirTimeSearch">班機時刻</a>
            </li>
            <li>
                <a href="#" style="color: white;font-size: 20pt;">準備啟程</a>
                <ul>
                    <li>
                        <div class="prepare">
                            <div class="checkIn">
                                <br>
                                <h5>網路報到</h5>
                                <button @click="this.onlineCheckIn()">線上報到</button>
                                <br>
                                <button @click="this.checkInIntro()">報到方式說明</button>
                                <br>
                                <br>
                                <h5>機艙配置圖</h5>
                                <button @click="A321">A321</button>
                                <br>
                                <button @click="A330">A330</button>
                                <br>
                                <button @click="A350">A350-900</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" style="color: white;font-size: 20pt;">樂狗會員</a>
                <ul>
                    <li>
                        <div class="happyDogMember">
                            <div class="member">
                                <br>
                                <h5>樂狗會員</h5>
                                <button @click="this.login()">會員登入</button>
                                <br>
                                <button @click="this.join()">加入會員</button>
                                <br>
                                <br>
                                <!-- <h5>測試</h5>
                                <button @click="AirTime">飛機時刻</button>
                                <br>
                                <button @click="OutboundConfirm">去程訂票確認</button>
                                <br>
                                <button @click="ReturnConfirm">回程訂票確認</button>
                                <br>
                                <button @click="PassengerInformation">旅客資訊聯絡方式輸入頁面</button>
                                <br>
                                <button @click="ProductDetailed">最終訂票確認頁面</button> -->
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- <RouterLink to="HomeView" class="routerItem">Home</RouterLink>
        <RouterLink to="/" class="routerItem">Login</RouterLink>
        <RouterLink to="Submit" class="routerItem">Submit</RouterLink>
        <RouterLink to="AboutView" class="routerItem">AboutView</RouterLink>
        <RouterLink to="LocationHakodate" class="routerItem">LocationHakodate</RouterLink> -->
    </div>
</template>


<style scoped lang="scss">
.headerShow {
    position: absolute;
    width: 100vw;
    height: 15vh;
    background-color: rgb(49, 48, 77);
    box-sizing: border-box;
    padding-left: 500px;
    padding-top: 20px;
    letter-spacing: 2px;

    .happydog {
        position: absolute;
        left: 10%;
        top: 25%;
        background-image: url(/noBack.png);
        background-size: contain;
        background-repeat: no-repeat;
        width: 4rem;
        height: 4rem;
        border-radius: 1rem;
        transition: .2s;
        .ii{
            
        }

        &:hover {
            box-shadow: 2px 2px 5px 0 black;
            background-color: rgba(255, 255, 255, 0.063);
        }

        &:active {
            box-shadow: -1px -1px 1px 2px black;
        }
    }

    .icon{
        .fa-power-off{
            font-size: 25pt;
            color: white;
            position: absolute;
            left: 83%;
            top: 33%;
        }
        .fa-user{
            font-size: 25pt;
            color: white;
            position: absolute;
            left: 87%;
            top: 33%;
            
        }
        .ii{
            border-radius: 5px;
            &:hover {
              background-color: rgba(255, 255, 255, 0.354);
            }
        }
        
    }
    ul {
        /* 取消ul預設的內縮及樣式 */
        margin: 0;
        padding: 0;
        list-style: none;
        .reservation {
            width: 60vw;
            height: 40vh;
            display: flex;
            background-color: rgb(240, 240, 240);
            position: absolute;
            left: -120px;
            border-radius: 20px;
            text-align: center;

            h5 {
                color: rgb(118, 69, 59);
            }

            button {
                box-shadow: none;
                border: 0px;
                font-size: 12pt;

                &:hover {
                    transition: .3s;
                    background-color: rgba(0, 0, 0, 0.128);
                    border-radius: 3rem;
                }
            }

            .booking {
                width: 15vw;
                height: 40vh;
            }

            .hot {
                width: 15vw;
                height: 40vh;
                border-left: 2px solid rgb(118, 69, 59);
                border-right: 2px solid rgb(118, 69, 59);

            }

            .seat {
                width: 30vw;
                height: 40vh;

                img {
                    width: 300px;
                    height: 200px;
                    border-radius: 10px;
                }
            }
        }

        .prepare {
            width: 20vw;
            height: 40vh;
            background-color: rgb(240, 240, 240);
            position: absolute;
            left: -34%;
            border-radius: 20px;
            text-align: center;

            h5 {
                color: rgb(118, 69, 59);
            }

            .checkIn {
                width: 20vw;
                height: 30vh;
            }

            button {
                box-shadow: none;
                border: 0px;
                font-size: 12pt;

                &:hover {
                    transition: .3s;
                    background-color: rgba(0, 0, 0, 0.128);
                    border-radius: 3rem;
                }
            }
        }

        .happyDogMember {
            width: 20vw;
            height: 30vh;
            background-color: rgb(240, 240, 240);
            position: absolute;
            left: -36%;
            border-radius: 20px;
            text-align: center;

            h5 {
                color: rgb(118, 69, 59);
            }

            .member {
                width: 20vw;
                height: 30vh;
            }

            button {
                box-shadow: none;
                border: 0px;
                font-size: 12pt;
                border-radius: 3rem;

                &:hover {
                    transition: .3s;
                    background-color: rgb(154, 154, 154);
                }
            }
        }
    }

    ul.drop-down-menu {
        display: inline-block;
        font-size: 16px;
        color: rgb(49, 48, 77);
        margin-top: 20px;
        margin-left: -120px;
    }

    ul.drop-down-menu li {
        position: relative;
        white-space: nowrap;
        border-right: rgb(49, 48, 77) 1px solid;
    }

    ul.drop-down-menu>li:last-child {
        border-right: none;
    }

    ul.drop-down-menu>li {
        float: left;
        /* 只有第一層是靠左對齊*/
    }

    ul.drop-down-menu a {
        border-radius: 2rem;
        background-color: rgb(49, 48, 77);
        color: #333;
        display: block;
        padding: 0 30px;
        text-decoration: none;
        line-height: 40px;

        &:hover {
            background-color: rgba(255, 255, 255, 0.23);
        }

    }

    // ul.drop-down-menu a:hover {
    //     /* 滑鼠滑入按鈕變色*/
    //     background-color: #ef5c28;
    //     color: #fff;
    // }

    // ul.drop-down-menu li:hover>a {
    //     /* 滑鼠移入次選單上層按鈕保持變色*/
    //     background-color: #ef5c28;
    //     color: #fff;
    // }

    ul.drop-down-menu ul {
        border: #ccc 1px solid;
        position: absolute;
        z-index: 99;
        left: -1px;
        top: 100%;
        min-width: 180px;
    }

    ul.drop-down-menu ul li {
        border-bottom: #ccc 1px solid;
    }

    ul.drop-down-menu ul li:last-child {
        border-bottom: none;
    }

    ul.drop-down-menu ul ul {
        /*第三層以後的選單出現位置與第二層不同*/
        z-index: 999;
        top: 10px;
        left: 90%;
    }

    ul.drop-down-menu ul {
        /*隱藏次選單*/
        left: 2000px;
        opacity: 0;
        -webkit-transition: opacity 0.3s;
        transition: opacity 1s;
    }

    ul.drop-down-menu li:hover>ul {
        /* 滑鼠滑入展開次選單*/
        opacity: 1;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        left: -1px;
        border-right: 5px;
    }

    // ul.drop-down-menu li:hover>ul ul {
    //     /* 滑鼠滑入之後、次選單之後的選單依舊隱藏*/
    //     left: 99999px;
    // }

    // ul.drop-down-menu ul li:hover>ul {
    //     /* 第二層之後的選單展開位置*/
    //     left: 90%;
    // }

    // .routerItem {
    //     font-size: 24px;
    //     text-decoration: none;
    // }

    // a {
    //     margin-right: 20px;
    //     padding-top: 40px;

    //     &:hover {
    //         border-radius: 10px;
    //         background-color: rgba(129, 255, 196, 0.27);
    //         font-size: 30px;
    //         color: black;
    //         box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.2);
    //     }

    //     &:active {
    //         border-radius: 10px;
    //         background-color: rgba(0, 0, 0, 0.344);
    //     }
    // }
}
</style>
