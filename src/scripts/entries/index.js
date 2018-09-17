import $ from "jquery";
import 'slick-carousel';
import axios from 'axios'

$('.weather-wrapper').slick({
  arrows: false,
  autoplay: true,
  speed: 2000
});

function tokyo() {
  getWeather(130010).then((res) => {
    console.log(res)
  })
}
tokyo()

function kanagawa() {
  getWeather(140010).then((res) => {
    console.log(res)
  })
}
kanagawa()

function getWeather(cityId) {
  return axios.get(`http://localhost:8001/sample.php?city_id=${cityId}`).then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })
}