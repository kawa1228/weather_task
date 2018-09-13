import * as forecasts from '../weather_data'
const weatherData = forecasts.weatherData()
const newWeatherData = []

for(let i = 0; i < weatherData.length; i++) {
    newWeatherData.push(weatherData[i])
}

let interval
const dataChange = ()=> {
    let shiftData = newWeatherData.shift()
    newWeatherData.push(shiftData)
    console.log(newWeatherData)
}

interval = setInterval(dataChange, 2000)

document.getElementById('stop').addEventListener('click', ()=> {
    clearInterval(interval)
})
