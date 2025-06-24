function verificarNumero() {
    const valor = parseFloat(document.getElementById("numero").value);
    let mensagem = "";

  if (isNaN(valor)) {
        mensagem = "Por favor, digite um número válido.";
        resultado.style.background = "transparent";
    } else if (valor > 0) {
        mensagem = "O número é positivo.";
        resultado.style.color = "green";
    } else if (valor < 0) {
        mensagem = "O número é negativo.";
        resultado.style.color = "red";
    } else {
        mensagem = "O número é zero.";
        resultado.style.color = "black";
    }

    document.getElementById("resultado").innerText = mensagem;
}
