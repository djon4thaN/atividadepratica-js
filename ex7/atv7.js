let saque = parseFloat (prompt("Digite um valor para retirada"));

let conta = 100;

let valorCobrado = saque + 4.50;

let valorRestante = conta - valorCobrado;

if (saque % 5 === 0 && saque != 0){
    if (saque < conta){
    }
    else {
        document.write("Você nao posui salto suficiente ")
    }
}
else {
    document.write("informe um valor diferente com final 5 ou 0,")
}

if (saque % 5 === 0 && saque < conta){
    document.write(`o valor do saque foi de ${valorCobrado}, e ficou ${valorRestante} na sua conta`)
}