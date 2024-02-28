<script>
  import axios from "axios"

  export default {
    data(){
      return{
        inputValue: "",
      }
    },
    methods: {
      reelData: function (data) {
        this.$store.commit("weatherData", data)
      },
    },
    mounted(){
        axios(`https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${this.inputValue ? this.inputValue : "Tashkent"}&days=7&aqi=yes&alerts=yes`)
        .then(res =>  this.reelData(res.data))
        .catch(err => console.log(err)) 
    },
    updated(){
      axios(`https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${this.inputValue ? this.inputValue : "Tashkent"}&days=7&aqi=yes&alerts=yes`)
        .then(res =>  this.reelData(res.data))
        .catch(err => console.log(err)) 
    }
  };
</script>

<template>
  <div class="navigation">
    <nav>
      <form @submit="e => e.preventDefault()">
        <input v-model="inputValue" type="text" placeholder="Search city...">
        <button>search</button>
      </form>
      <button>Settings</button>
    </nav>
  </div>
</template>

<style lang="scss">
  .navigation{
    background-color: rgba(255, 255, 255, 0.555);
    padding: 1rem;
  }

  nav{
      display: flex;
      align-items: center;
      gap: 2rem;
      form{
        display: flex;
        align-items: center;
        flex-grow: 1;
        height: 40px;
        gap: 10px;
        background-color: #fff;
        input{
          height: 100%;
          text-indent: 15px;
          border: none;
          outline: none;
          font-size: 1rem;
          flex: 1;
        }
        button{
          height: 100%;
          width: 70px;
          border: none;
          background-color: dodgerblue;
          color: #fff;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      button{
        height: 40px;
        width: 100px;
        border: none;
        background-color: dodgerblue;
        color: #fff;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  }
</style>