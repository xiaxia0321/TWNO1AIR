<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(counter,['setPP',])
  },
  components: {
  },
  mounted() {
    this.setPP(4)
  } 

}
</script>
<template>
  <div class="body">
    <div class="header">
      <span>Order</span>
    </div>
    <div class="content">
      <div class="search"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  .header {
    width: 82%;
    height: 10vh;
    text-align: center;
    font-size: 3rem;
  }

  .content {
    border: 1px solid black;
    width: 82%;
    height: 90vh;
    text-align: center;

    .search {
      height: 20%;
      width: 100%;
      border: 1px solid red;

    }
  }
}
</style>

