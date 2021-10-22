function somar(numero1, numero2) {
    let result = numero1 + numero2;
    return 'A soma dos dois números é: ' + result;
}
function subtrair(numero1, numero2) {
    let  result = numero1 - numero2;
    return 'A subtração dos dois números é: ' + result;
}
function multiplicar(numero1, numero2) {
    let result = numero1 * numero2;
    return 'A multiplicação dos dois números é: ' + result;
}
function dividir(numero1, numero2) {
    let result = numero1 / numero2;
    return 'A divisão dos dois números é: ' + result;
}

let numero1 = 10;
let numero2 = 5;
console.log(`Os números são ${numero1} e ${numero2}`)
let soma  = somar(numero1, numero2);
let subtracao  = subtrair(numero1, numero2);
let multiplicacao  = multiplicar(numero1, numero2);
let divisao  = dividir(numero1, numero2);

console.log(soma,'\n', subtracao, '\n', multiplicacao,'\n', divisao);