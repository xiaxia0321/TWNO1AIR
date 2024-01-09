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
        <RouterLink to="HomeView" class="routerItem">主頁</RouterLink>
        <RouterLink to="/" class="routerItem">Login</RouterLink>
        <RouterLink to="Submit" class="routerItem">Submit</RouterLink>
        <RouterLink to="AboutView" class="routerItem">AboutView</RouterLink>
        <RouterLink to="Browse" class="routerItem">按下搜尋後ㄉ瀏覽</RouterLink>
        <RouterLink to="AircraftType" class="routerItem">機型介紹</RouterLink>
        <RouterLink to="A330" class="routerItem">A330機型介紹</RouterLink>
        <RouterLink to="A350" class="routerItem">A350機型介紹</RouterLink>
        <RouterLink to="A321neo" class="routerItem">A321neo機型座位</RouterLink>
    </div>
</template>


<style scoped lang="scss">
.headerShow {
    width: 100%;
    height: 100%;
    background-color: #161A30;
    display: flex;
    justify-content: center;
    align-content: center;
    .routerItem { //文字大小
        font-size: 24px;
        text-decoration: none;
    }

    a {
        margin-right: 20px;
        padding-top: 40px;

        &:hover {
            border-radius: 10px;
            background-color: rgba(129, 255, 196, 0.27);
            font-size: 30px;
            color: black;
            box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.2);
        }

        &:active {
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.344);
        }
    }
}
</style>
