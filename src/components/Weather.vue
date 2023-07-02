<template>
    <!-- typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : '',  -->
    <div id="weather" class="" :class="darkmode == true ? 'dark':''" >
      <main>
        <div class="search-box">
          <LocationMarkerIcon class="h-4 w-4 text-grey-400"/>
          <input 
          v-model="query" 
          @keypress="fetchWeather"
          type="text" 
          class="search-bar border-2 rounded-full p-1" 
          placeholder="Search location.."/>
          <a class="modebtn hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" v-on:click="darkMode">
            <MoonIcon v-if="!darkmode" class="h-4 w-4 text-grey-400"/>
            <SunIcon v-else class="h-4 w-4 text-white-400"/>
            mode
          </a>
        </div>
        <br>
        <div class="weather-wrap text-center" v-if="typeof weather.main != 'undefined'">
          <div class="location-box">
            <div class="location text-center text-3xl dark:text-white">
              <LocationMarkerIcon class="h-6 w-6 text-purple-400"/>
              {{ weather.name }}, {{ weather.sys.country }}
            </div>
            <div class="date italic dark:text-white">{{ dateBuilder() }}</div>
          </div>
          <div class="weather-box dark:bg-gray-200">
            <div class="weather-icon" >
              <div v-html="weatherIcon(weather.weather[0].main)"></div>
              <div class="weather"> {{ weather.weather[0].main }} </div>
            </div>
            <div class="temp text-6xl">{{ Math.round(weather.main.temp) }}°C</div>
          </div>
          <br>
          <button v-on:click="compare_places">Compare</button>
          <div v-for="(weatherlists, index) in weatherlist" :key="weatherlists">
          {{index}} - {{weatherlists.name}}
        </div>
  
        </div>
        
      </main>
    </div>
  
  </template>


<script setup> 

</script>
  <style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    min-height: 100vh;
    padding: 25px;
}

div#weather {
    background-image: radial-gradient(#e6f2ff, #cee6ff);
}

div#weather.dark {
    background-image: radial-gradient(#444444, #000);
}

.search-box {
    margin-bottom: 20px;
    position: relative;
}

input.search-bar {
    text-align: center;
    box-shadow: 1px 1px 2px #00000070;
    text-transform: capitalize;
    padding-left: 100px;
    padding-right: 20px;
    width: calc(100% - 85px);
    display: inline-block
}

.location-box .date {
    font-weight: 600;
}

.search-box>svg {
    position: absolute;
    top: 10px;
    left: 20px;
    opacity: 0.5;
}

.search-box>a>svg {
    display: inline-block;
}

.modebtn {
    cursor: pointer;
    border: 2px solid;
    border-radius: 20px;
    padding: 7px 7px;
    font-size: 12px;
    margin-left: 10px;
    border-color: #000;
    color: #000;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    min-width: 75px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.weather-box {
    background: #ffffff7a;
    display: inline-block;
    padding: 20px 30px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0px 0px 12px #0000003b;
    min-width: 300px;
}

.weather-box .temp {
    font-weight: bold;
    text-shadow: 1px 1px #afafaf;
    margin-top: 8px;
}

.weather-box svg {
    display: inline-block;
}

.weather-icon {
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.weather-icon .weather {
    background: #fff;
    padding: 3px 10px;
    border: 1px solid #c8c8c8;
    line-height: 1;
    border-radius: 10px;
    font-weight: 600;
    margin-left: -10%;
    font-size: 15px;
    margin-bottom: 5%;
}

.location-box .location {
    display: flex;
    align-items: center;
    justify-content: center;
}

.location-box .location svg {
    margin-right: 5px;
}
  </style>