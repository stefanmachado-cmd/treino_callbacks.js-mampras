function simularDownload(nomeArquivo, callbackConclusao) {
    console.log(`Iniciando download de [${nomeArquivo}]...`);

    setTimeout(function() {
        callbackConclusao();
    }, 1500);
}
simularDownload("dados_clientes.csv", function() {
    console.log(" ✅ Download finalizado com sucesso no disco!");
});
