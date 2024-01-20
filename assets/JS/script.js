const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minEL = document.getElementById('min')
const secsEL = document.getElementById('secs')
const html = document.documentElement
const wedding = '2024-09-13'

function countdow () {
    const weddingDate = new Date(wedding)
    const currentDate = new Date()
    const totalSeconds = (weddingDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEL.innerHTML = days
    hoursEL.innerHTML = formatTime(hours)
    minEL.innerHTML = formatTime(mins)
    secsEL.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countdow()
setInterval(countdow, 1000)


function toogleMode() {
    html.classList.toggle('clicked')

    const button = document.getElementById('botao')
    if(html.classList.contains('clicked')) {
        button.textContent = 'Close'
    } else {
        button.textContent = 'Open'
    }
}

function copiarTexto() {
    const texto = document.getElementById("textocopy")
    const areaDeTextoTemp = document.createElement("textarea")
    areaDeTextoTemp.value = texto.innerText
    document.body.appendChild(areaDeTextoTemp)
    areaDeTextoTemp.select()
    document.execCommand("copy")
    document.body.removeChild(areaDeTextoTemp)
    alert("Texto copiado: " + texto.innerText)
  }
  