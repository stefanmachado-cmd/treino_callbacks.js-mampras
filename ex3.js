function operar (a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}
function somar (x, y) {
    return x + y;
}
function multiplicar (x, y) {
    return x * y;
}
console.log(operar(10, 4, somar));
console.log(operar(10, 4, multiplicar)); 