<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
        }
    },
    components: {
        RouterLink,
    },
}
</script>

<template>
    <div class="headerShow">
        <ul class="drop-down-menu">
            <li>
                <a href="#" style="color: white;font-size: 16pt;">預訂行程</a>
                <ul>
                    <li>
                        <div class="reservation">
                            <div class="booking">
                                <br>
                                <h5>預訂行程</h5>
                                <button>搜尋航班</button>
                                <br><br>
                                <h5>行程內容更改</h5>
                                <button>行程管理</button>
                                <br>
                                <button>更改航班</button>
                                <br>
                                <button>線上退票</button>
                            </div>
                            <div class="hot">
                                <br>
                                <h5>熱門航點</h5>
                                <button>前往東京</button>
                                <br>
                                <button>前往大阪</button>
                                <br>
                                <button>前往新加坡</button>
                                <br>
                                <button>前往曼谷</button>
                                <br>
                                <button>前往舊金山</button>
                            </div>
                            <div class="seat">
                                <br>
                                <h5>預選座位</h5>
                                <img src="../../public/sabrina/機艙座位.jpeg" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" style="color: white;font-size: 16pt;">班機時刻</a>
            </li>
            <li>
                <a href="#" style="color: white;font-size: 16pt;">準備啟程</a>
                <ul>
                    <li>
                        <div class="prepare">
                            <div class="checkIn">
                                <h5>網路報到</h5>
                                <p>線上報到</p>
                                <p>報到方式說明</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" style="color: white;font-size: 16pt;">樂狗會員</a>
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
    width: 100vw;
    height: 30vh;
    background-color: rgb(49, 48, 77);
    box-sizing: border-box;
    padding-left: 500px;
    padding-top: 20px;
    // display: flex;
    // justify-content: center;
    // align-content: center;
    letter-spacing: 2px;

    ul {
        /* 取消ul預設的內縮及樣式 */
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        // padding-top: 60px;
        // padding-left: 200px;

        .reservation {
            width: 60vw;
            height: 40vh;
            display: flex;
            background-color: rgb(240, 240, 240);
            position: absolute;
            left: -120px;
            border-radius: 20px;
            text-align: center;
            h5{
                color: rgb(118, 69, 59);
            }
            button{
                box-shadow: none;
                border: 0px;
                font-size: 12pt;
            }
            .booking {
                width: 15vw;
                height: 40vh;
            }

            .hot {
                width: 15vw;
                height: 40vh;
                border-left:2px solid rgb(118, 69, 59);
                border-right:2px solid rgb(118, 69, 59);
            }
            .seat {
                width: 30vw;
                height: 40vh;
                img{
                    width: 300px;
                    height: 200px;
                    border-radius: 10px;
                }
            }
        }
        .prepare{
            width: 20vw;
            height: 30vh;
            display: flex;
            background-color: rgb(240, 240, 240);
            position: absolute;
            left: -70px;
            border-radius: 20px;
            text-align: center;
            .checkIn{
                width: 20vw;
                height: 30vh;
            }
        }
    }

    ul.drop-down-menu {
        display: inline-block;
        font-size: 16px;
        color: rgb(49, 48, 77);
        position: absolute;
        left: 400px;
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
        background-color: rgb(49, 48, 77);
        color: #333;
        display: block;
        padding: 0 30px;
        text-decoration: none;
        line-height: 40px;
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
        left: 99999px;
        opacity: 0;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
    }

    ul.drop-down-menu li:hover>ul {
        /* 滑鼠滑入展開次選單*/
        opacity: 1;
        -webkit-transition: opacity 0.3s;
        transition: opacity 0.3s;
        left: -1px;
        border-right: 5px;
    }

    ul.drop-down-menu li:hover>ul ul {
        /* 滑鼠滑入之後、次選單之後的選單依舊隱藏*/
        left: 99999px;
    }

    ul.drop-down-menu ul li:hover>ul {
        /* 第二層之後的選單展開位置*/
        left: 90%;
    }

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
