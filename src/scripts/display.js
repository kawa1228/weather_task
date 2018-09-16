export class MakeDisplay {
    constructor() {
        console.log('makeDom!')
    }
    makeElm(area, telop, image) {
        const img = document.createElement('img')
        img.src = image
        img.setAttribute('alt', '天気画像')

        const p = document.createElement('p')
        p.className = 'label'
        p.textContent = `${area}の天気は${telop}です`

        const div = document.createElement('div')
        div.className = 'wrapper'

        div.appendChild(img)
        div.appendChild(p)

        document.getElementById('result').appendChild(div)
    }
}