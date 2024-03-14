let numero1 = parseFloat(prompt('Digite um número'));
let numero2 = parseFloat(prompt('Digite outro número'));
let calculo = prompt('Como você quer calcular? Somar, subtrair, multiplicar ou dividir?').toLowerCase();

let somar = numero1 + numero2;
let subtrair = numero1 - numero2;
let multiplicar = numero1 * numero2;
let dividir = numero1 / numero2;

switch(calculo){
    case 'somar':
        document.write(`O resultado da conta é ${somar}`)
    break;
    case 'subtrair':
        document.write(`O resultado da conta é ${subtrair}`)
    break;
    case 'multiplicar':
        document.write(`O resultado da conta é ${multiplicar}`)
    break;
    case 'dividir':
        document.write(`O resultado da conta é ${dividir}`)
}