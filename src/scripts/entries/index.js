import * as makeWeather from './makeWeather'
const weather = new makeWeather.Weather()

const process = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, 500)
  })
}

const app = document.getElementById('app')

process(weather.putData()).then(res => {
  app.appendChild(res)
  return process(weather.addSlick())
}).then(adSlick => {
  adSlick
})
