/*
・index.js 各ファイルの実行
・makeWeather.js 天気情報の作成
・render.js DOMの生成
APIはWeather Hacksを利用　http://weather.livedoor.com/weather_hacks/webservice
*/

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
