<script>
export default {
    data() {
        return {
        }
    },

}
</script>
<template>
    <div class="boardingPass">
        <h2>登機證</h2>
        <div class="left">
            <img src="../../public/01.png" alt="">
            <span style="color: gray;font-size: 14pt;">HappyDog Airline</span>
            <img src="../../public/sabrina/登機證.png" alt="" style="width: 280px;height: 260px;" class="scan">
            <p>CHOU/COOKIE MR</p>
            <h3>A321</h3>
            <p>06APR　　　　TPE->BKK</p>
            <div class="gate">
                <p>GATE　　　　BOARDING TIME　　　　ZONE</p>
                <br>
                <h3>B1R　　　　08:50　　　　1</h3>
            </div>
        </div>
        <div class="right">
            <img src="../../public/01.png" alt="">
            <span style="color: gray;font-size: 14pt;">HappyDog Airline</span>
            <p>CHOU/COOKIE MR</p>
            <p>A321　　06APR</p>
            <div class="seat">
                <p>SEAT</p>
                <br>
                <h3>2C</h3>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.boardingPass {
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    background-color: rgb(22, 26, 48);
    box-sizing: border-box;
    padding-top: 200px;
    padding-left: 230px;

    h2 {
        position: absolute;
        left: 45%;
        top: 30%;
        color: white;
    }

    .left {
        height: 40vh;
        width: 45vw;
        background-color: rgb(240, 236, 229);
        border-radius: 13px 0px 0px 13px;

        img {
            width: 40px;
            height: 40px;
        }

        h2 {
            color: white;
        }

        p {
            color: black;
        }

        .scan {
            position: absolute;
            left: 8%;
            top: 50%;
        }

        .gate {
            width: 400px;
            height: 100px;
            background-color: white;
            border-radius: 10px;
            position: absolute;
            left: 27%;
        }
    }

    .right {
        height: 40vh;
        width: 20vw;
        background-color: rgb(240, 236, 229);
        border-radius: 0px 13px 13px 0px;
        border-left: 2px dotted black;

        img {
            width: 40px;
            height: 40px;
        }

        p {
            color: black;
        }

        .seat {
            width: 240px;
            height: 100px;
            background-color: white;
            border-radius: 10px;
            position: absolute;
            left: 62.5%;
            top: 58.9%;
        }
    }
}</style>