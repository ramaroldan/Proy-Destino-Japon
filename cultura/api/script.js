
const {createApp} = Vue;

createApp({
    data(){
        return {
            weatherDescription: "",
            currentWeather: "",
            time: "",
            temperaturaMaxima: "",
            temperaturaMinima: "",
            

        }
    },
    created(){
        
        fetch("https://api.open-meteo.com/v1/jma?latitude=-34.54&longitude=-58.73&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&past_days=1&timezone=Asia%2FTokyo")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.weatherDescription = data.timezone;
            this.currentWeather = data.current_weather;
            this.time = data.current_weather.time;
            this.temperaturaMaxima = data.daily.temperature_2m_max[0];
            this.temperaturaMinima = data.daily.temperature_2m_min[0];
            
        })
        .catch(error => console.log(error));
    }

}).mount("#app");