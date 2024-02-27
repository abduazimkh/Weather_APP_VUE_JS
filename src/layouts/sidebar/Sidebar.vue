<script>
</script>

<template>  
  <aside class="sidebar">
    <ul class="sidebar-list">
      <li>
        <i>DD</i>
        <span>home</span>
      </li>

      <li>
        <i>DD</i>
        <span>home</span>
      </li>

      <li>
        <i>DD</i>
        <span>home</span>
      </li>

      <li>
        <i>DD</i>
        <span>home</span>
      </li>
      
      <li>
        <i>DD</i>
        <span>home</span>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.sidebar{
  background-color: dodgerblue;
  height: 100vh;
  padding: 2rem;
}

.sidebar-list{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  li{
    i{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: red;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5rem;
  }
}
</style>