<script>
  import {RouterView} from "vue-router";
  import Sidebar from "./layouts/sidebar/Sidebar.vue";
  import Modal from "./utils/Modal.vue";

  export default {
    components: {
      Sidebar,
      Modal
    }
  }
</script>

<template>
  <div class="app">
    <Sidebar/>
    <RouterView/>
  </div>
  <Modal/>
</template>

<style lang="scss">
  .app{
    display: flex;
    gap: 2rem;
  }
</style>
