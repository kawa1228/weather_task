import axios from 'axios'
import * as display from '../display'

let id = 140010
function cid() {
  (id === 140010) ? id = 130010 : id = 140010
  make()
}
setInterval(cid, 2000)

function make() {
  axios.get(`http://localhost:8001/sample.php?city_id=${id}`).then((res) => {
    const area = res.data.location.prefecture
    const telop = res.data.forecasts[0].telop
    const image = res.data.forecasts[0].image.url

    const content = []
    content.push({
      areas: area,
      telops: telop,
      images: image
    })

    new display.MakeDisplay().makeElm(content[0].areas, content[0].telops, content[0].images)

  }).catch((err) => {
    console.log(err)
  })
}
