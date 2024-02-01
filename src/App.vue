<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
   <div class="header">
    <Header />
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.header {
  width: fill;
  height: 15vh;
  overflow-x: hidden;
}

.content {
  width: fill;
  height: 90vh;
  overflow-y: auto;
  text-align: center;
  background-color: #161a30;
  overflow-x: hidden;
}
</style>
