import * as display from '../display'
import $ from "jquery";
import 'slick-carousel';
import axios from 'axios'

class Test {

  constructor() {
    // Promise.then(this.putData()).then(() => this.addSlick())
    this.putData()
    setTimeout(() => this.addSlick(), 1000)
  }

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

    // const area = 'とうきょう'
    // const telop = 'hoge'
    // const image = ''
    // const tokyo = new display.MakeDisplay().makeElm(area, telop, image)
    // const kanagawa = new display.MakeDisplay().makeElm(area, telop, image)
    // app.appendChild(tokyo)
    // app.appendChild(kanagawa)

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

    const result = document.getElementById('result')
    result.appendChild(app)
  }

  addSlick() {
    const elem = document.querySelector('.app')

    $(elem).slick({
      arrows: false,
      autoplay: true,
      speed: 2000
    });
  }
}
const test = new Test()

// test.addSlick()
// putData()

// Promise.resolve().then(putData()).then(addSlick())
