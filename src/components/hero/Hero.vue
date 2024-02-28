<script>
export default {
  mounted(){
    // console.log(this.$store.state.data);
  },
  methods: {
    identifyTheWeekDay: function (time){
      switch(time){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday"
        default:
          return "Sunday"
      }
    },
  }
}
</script>

<template>
  <div class="hero">
    <div class="first-item">
      <div class="weather-icon">
        <img :src="$store.state.data.current?.condition.icon" alt="">
      </div>
      <h2>{{ $store.state.data && $store.state.data.current?.temp_c + " °" }}</h2>

      <ul class="first-item--content">
        <li>
          <strong>City:</strong> <br> <span>{{ $store.state.data.location?.region }}, {{ $store.state.data.location?.country }}</span>
        </li>
        <li>
          <strong>tz_id:</strong> <br> <span>{{ $store.state.data.location?.tz_id }}</span>
        </li>
        <li>
          <strong>Last updatem Time:</strong> <br> <span> {{ $store.state.data.current?.last_updated.split(" ")[1]}}</span>
        </li>
        <li>
          <strong>Forecatday morning:</strong> <br> <span>{{ $store.state.data.forecast?.forecastday[0].astro.sunset }}</span>
        </li>
        <li>
          <strong>Current Weather:</strong> <br> <span> {{ $store.state.data.forecast?.forecastday[0]?.day?.condition.text }}, {{ $store.state.data.current?.condition?.text }}</span>
        </li>
        <li>
          <strong>Day:</strong> <br> <span> {{ identifyTheWeekDay(new Date().getDay()) }}</span>
        </li>
      </ul>
    </div>
    <div class="last-item">

      <div class="map">
        <iframe id="map" :src="'https://maps.google.com/maps?q='+ $store.state.data?.location?.name + '%20Dates%10Products&amp;t=&amp;z=12&amp&output=embed'" width=100% height="250" allowfullscreen frameborder="0"></iframe>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss">
  .hero{
    min-height: calc(100vh - (3rem + 80px));
    height: 100%;
    background-color: #ffffff5e;
    box-sizing: border-box;
    padding: 3rem;
    display: flex;
    gap: 3rem;
    .first-item{
      min-width: 300px;
      background-color: #3a9e26;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      h2{
        text-align: right;
        font-size: 3rem;
      }
      .first-item--content{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        li{
          strong{
            font-size: 1.2rem;
          }
          span{
            font-size: 1rem;
          }
        }
      }
    }
    .last-item{
      padding: 2rem;
      width: 100%;
      color: #333;
      background-color: rgba(255, 255, 255, 0.466);
    }
    .weather-icon{
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.151);
      border-radius: 50%;
      overflow: hidden;
      img{
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 0 30px 5px rgb(151, 175, 255);
      }
    }

  }
</style>