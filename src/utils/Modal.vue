<script>
</script>


<template>
  <div class="modal">
    <button class="modal-btn">close</button>
    <div class="modal-box">
      <div>
        
      </div>
    </div>
  </div>
</template>

<style>
.modal{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.507);
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  .modal-btn{
    position: absolute;
    top: 2rem;
    right: 2rem;
    padding: .4rem 1rem;
    font-size: 1rem;
  }
}
.modal-box{
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 700px;
  height: 500px;
}
</style>