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
        <RouterLink to="/" class="routerItem">Home</RouterLink>
        <RouterLink to="AboutView" class="routerItem">AboutView</RouterLink>
    </div>
</template>


<style scoped lang="scss">
.headerShow {
    width: 100%;
    height: 100%;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-content: center;
    letter-spacing: 2px;

    .routerItem {
        font-size: 24pt;
        text-decoration: none;
    }

    a {
        margin-right: 20px;
        padding-top: 40px;

        &:hover {
            border-radius: 10px;
            background-color: rgba(129, 255, 196, 0.27);
            font-size: 40px;
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
