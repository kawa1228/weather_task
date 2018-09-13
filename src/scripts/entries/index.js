import * as forecasts from '../weather_data'

class weatherAry {
  makeAry() {
    const weatherData = forecasts.weatherData()
    const newAry = []

    for (let i = 0; i < weatherData.length; i++) {
      newAry.push(weatherData[i])
    }
    return newAry
  }
}

const getData = new weatherAry().makeAry()

class Interval {
  execute() {
    const id = this.doInterval()
    this.stopInterval(id)
  }
  doInterval() {
    return setInterval(this.turnData, 2000)
  }
  turnData() {
    let shiftData = getData.shift()

    getData.push(shiftData)
    console.log(getData)
  }
  stopInterval(id) {
    document.getElementById('stop').addEventListener('click', () => {
      window.clearInterval(id)
    })
  }
}

new Interval().execute()
