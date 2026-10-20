function dividir (y, a) {
    return y /(2*a);
    
}
function baskara (a,b,c,callbackDividir) {
    const x = b * (-1) + Math.sqrt(b**2 - 4*a*c);
    const x1 = b * (-1) - Math.sqrt(b**2 - 4*a*c);
    return [dividir(x,a), dividir(x1, a)];
}
console.log(baskara(1, 5, 6, dividir));