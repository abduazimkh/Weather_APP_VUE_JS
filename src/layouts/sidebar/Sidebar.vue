<script>
</script>

<template>  
  <aside class="sidebar">
    <ul class="sidebar-list">
      <li>
        <router-link to="/">
          <i>H</i>
          <span>home</span>
        </router-link>
      </li>

      <li>
        <router-link to="/a">
          <i>A</i>
          <span>A</span>
        </router-link>
      </li>

      <li>
        <router-link to="/c">
          <i>C</i>
          <span>C</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.sidebar{
  background-color: #ffffff5e;
  height: 100vh;
  padding: 2rem;
}

.sidebar-list{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  li, a{
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    i{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: green;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5rem;
  }
}
</style>