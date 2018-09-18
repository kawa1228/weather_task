import * as render from '../render'
import $ from "jquery";
import 'slick-carousel';
import axios from 'axios'

export class Weather {
    getWeather(cityId) {
        return axios.get(`http://localhost:8001/sample.php?city_id=${cityId}`).then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        })
    }
    getData(res) {
        let area = res.location.prefecture
        let telop = res.forecasts[0].telop
        let image = res.forecasts[0].image.url

        return new render.Render().makeElm(area, telop, image)
    }
    putData() {
        const wrapper = document.createElement('div')
        wrapper.className = 'wrapper'

        //東京
        this.getWeather(130010).then((res => {
            const tokyo = this.getData(res)
            wrapper.appendChild(tokyo)
        }))

        //神奈川
        this.getWeather(140010).then((res => {
            const kanagawa = this.getData(res)
            wrapper.appendChild(kanagawa)
        }))
        return wrapper
    }
    addSlick() {
        const elem = document.querySelector('.wrapper')

        $(elem).slick({
            arrows: false,
            autoplay: true,
            speed: 2000
        });
        return elem
    }
}