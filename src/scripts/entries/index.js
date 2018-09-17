import * as display from '../display'
import $ from "jquery";
import 'slick-carousel';
import axios from 'axios'

class Weather {
  getWeather(cityId) {
    return axios.get(`http://localhost:8001/sample.php?city_id=${cityId}`).then((res) => {
      return res.data
    }).catch((err) => {
      console.log(err)
    })
  }

  putData() {
    const app = document.createElement('div')
    app.className = 'app'

    //東京
    this.getWeather(130010).then((res => {
      const area = res.location.prefecture
      const telop = res.forecasts[0].telop
      const image = res.forecasts[0].image.url

      const tokyo = new display.MakeDisplay().makeElm(area, telop, image)
      app.appendChild(tokyo)
    }))

    //神奈川
    this.getWeather(140010).then((res => {
      const area = res.location.prefecture
      const telop = res.forecasts[0].telop
      const image = res.forecasts[0].image.url

      const kanagawa = new display.MakeDisplay().makeElm(area, telop, image)
      app.appendChild(kanagawa)
    }))
    return app
  }

  addSlick() {
    const elem = document.querySelector('.app')

    $(elem).slick({
      arrows: false,
      autoplay: true,
      speed: 2000
    });
    return elem
  }
}
const weather = new Weather()

function process(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, 500)
  })
}

const result = document.getElementById('result')

process(weather.putData()).then(res => {
  result.appendChild(res)
  return process(weather.addSlick())
}).then(adSlick => {
  adSlick
})
