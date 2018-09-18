export class Render {
    makeElm(area, telop, image) {
        const img = document.createElement('img')
        img.src = image
        img.className = 'weather-img'
        img.setAttribute('alt', '天気画像')

        const p = document.createElement('p')
        p.className = 'label'
        p.textContent = `${area}の天気は${telop}です`

        const div = document.createElement('div')
        div.className = 'forecasts'

        div.appendChild(img)
        div.appendChild(p)

        return div
    }
}