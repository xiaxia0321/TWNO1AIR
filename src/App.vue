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
  height: 10vh;
}

.content {
  width: fill;
  height: 90vh;
  text-align: center;
}
</style>
