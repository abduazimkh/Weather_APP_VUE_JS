<script>




export default {
  data(){
    return {
      xValues: [100,200,300,400,500,600,700,800,900,1000]

    }
  },
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
  },
  // data: () => ({
  //   options: {
  //     chart: {
  //       id: 'vuechart-example'
  //     },
  //     xaxis: {
  //       categories: [
  //        "Jan",
  //        "Feb",
  //        "Mar",
  //        "Apr",
  //        "May",
  //        "Jun",
  //        "Jul",
  //        "Aug",
  //        "Sep",
  //        "Oct",
  //        "Nov",
  //        "Dec"
  //       ]
  //     }
  //   },
  //   series: [{
  //     name: 'series-1',
  //     data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
  //   }]
  // })
  a: () => {
    new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
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
        <h2>{{ $store.state.data.location?.region }}, {{ $store.state.data.location?.country }}</h2>

        <iframe id="map" :src="'https://maps.google.com/maps?q='+ $store.state.data?.location?.name + '%20Dates%10Products&amp;t=&amp;z=12&amp&output=embed'" width=100% height="250" allowfullscreen frameborder="0"></iframe>
      </div>
      
      <div class="cart-js">
        <canvas id="myChart" style="width:100%;"></canvas>
        <!-- <div>
          <apexchart 
            width="500" type="bar" 
            :options="options" :series="series">
          </apexchart>  
      </div> -->
      </div>

      <div class="day" >
        <div v-for="day in $store.state.data?.forecast?.forecastday">
          <h4>{{identifyTheWeekDay(+new Date(day.date).getDay()).slice(0, 3).toUpperCase()}}</h4>
          <img  :src="day.day.condition.icon"/>
          <p>{{day.day.avgtemp_c}}°</p>
        </div>
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

  .map{
    color: #333;
    background-color: #fff;
    padding: 1rem;
    h2{
      margin-bottom: 1rem;
    }
  }

  .day{
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    margin: 1rem 0;
    padding: 1rem 1rem;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 150px;
    }
  }
</style>