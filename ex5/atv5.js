let altura = parseFloat(prompt("digite sua altura"));

let peso = parseFloat(prompt("digite seu peso"));

imc = peso / (altura * altura)

if (imc < 18,5)
    document.write('Você está abaixo da faixa de peso ideal ')
    else if (imc >= 18.5 && imc <= 24.99){
        document.write("Você está dentro da faixa de peso ideal")
    }
    else if (imc > 24.99){
        document.write("Você está acima da faixa de peso ideal")
    }