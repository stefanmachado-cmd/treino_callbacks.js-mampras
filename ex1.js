function saudacao() {
    console.log("Olá! Bem-vindo ao Back-End com Node.js!");
}
function executar(callback) {
    console.log("Iniciando processo...");
    callback(); 
}
executar(saudacao);
