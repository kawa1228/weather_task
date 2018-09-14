import axios from 'axios'

import * as forecasts from '../weather_data'
const weatherData = forecasts.weatherData()

class Interval {
  execute() {
    const id = this.doInterval()
    this.stopInterval(id)
  }
  doInterval() {
    return setInterval(this.turnData, 2000)
  }
  turnData() {
    let shiftData = weatherData.shift()

    weatherData.push(shiftData)
    console.log(weatherData)
  }
  stopInterval(id) {
    document.getElementById('stop').addEventListener('click', () => {
      window.clearInterval(id)
    })
  }
}

new Interval().execute()

axios.get('http://localhost:8000/sample.php').then((res) => {
  console.log(res.data)
}).catch((err) => {
  console.log(err)
})