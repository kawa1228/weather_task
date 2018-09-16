import axios from 'axios'

import * as display from '../display'

const id = 140010

axios.get(`http://localhost:8001/sample.php?city_id=${id}`).then((res) => {
  console.log(res.data)

  const area = res.data.location.city
  const telop = res.data.forecasts[0].telop
  const image = res.data.forecasts[0].image.url

  const content = []
  content.push({
    areas: area,
    telops: telop,
    images: image
  })

  setInterval(turn, 2000)
  function turn() {
    let shiftData = content.shift()
    content.push(shiftData)
    console.log(content)

    console.log(content[0].areas)

    new display.MakeDisplay().makeElm(content[0].areas, content[0].telops, content[0].images)
  }
}).catch((err) => {
  console.log(err)
})
