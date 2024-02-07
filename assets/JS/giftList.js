// zerar o armazenametno local - só tirar o comentário abaixo
// localStorage.clear();

function marcar(x) {
    const id = `gift${x}`
    const item = document.getElementById(id)
    item.style.color = "#A9A9A9"
    const texto = item.innerText
    const palavras = texto.split(" ")
    var textoFormatado = palavras.map(function(palavra) {
        return "<del>" + palavra + "</del>";
    })
    item.innerHTML = textoFormatado.join(" ")
    item.id = `gift1.${x}`
    console.log(id)

    localStorage.setItem(id, "marcado");
}

const numeroDeItens = document.querySelectorAll('.giftList li').length;
console.log(numeroDeItens)

window.onload = function() {
    for (let i = 1; i <= 31; i++) {
        const id = `gift${i}`;
        const estado = localStorage.getItem(id);
        if (estado === "marcado") {
            const item = document.getElementById(id);
            // Aplicar as alterações visuais novamente
            item.style.color = "#A9A9A9";
            const texto = item.innerText;
            const palavras = texto.split(" ");
            var textoFormatado = palavras.map(function(palavra) {
                return "<del>" + palavra + "</del>";
            });
            item.innerHTML = textoFormatado.join(" ");
        }
    }
}