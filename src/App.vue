<script>
  import {RouterView} from "vue-router";
  import Sidebar from "./layouts/sidebar/Sidebar.vue";
  export default {
    components: {
      Sidebar
    }
  }
</script>

<template>
  <div class="app">
    <Sidebar/>
    <RouterView/>
  </div>
</template>

<style lang="scss">
  .app{
    display: flex;
    gap: 2rem;
  }
</style>
