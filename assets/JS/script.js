function toogleMode() {
    const html = document.documentElement
    html.classList.toggle('clicked')

    const button = document.getElementById('botao')
    if(html.classList.contains('clicked')) {
        button.textContent = 'Close'
    } else {
        button.textContent = 'Open'
    }
}