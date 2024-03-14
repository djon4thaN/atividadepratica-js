let dia = prompt("Digite o número de 1 a 7 da semana").toLowerCase()

switch(dia){
    case '1':
        document.write('o dia do final de semana é domingo');
    break;
    case '2':
        document.write('o dia da semana é segunda-feira');
    break;
    case '3':
        document.write('o dia da semana é terça-feira');
    break;
    case '4':
        document.write('o dia da semana é quarta-feira');
    break;
    case '5':
        document.write('o dia da semana é quinta-feira');
    break;
    case '6':
        document.write('o dia da semana é sexta-feira');
    break;
    case '7':
        document.write('o dia do final de semana é sábado');
    default:
        document.write('Digite um dia válido!');
}