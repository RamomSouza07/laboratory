document.addEventListener("DOMContentLoaded", function () {
    // Recupera o contador atual do armazenamento local ou define-o como 0 se for a primeira vez
    let contador = localStorage.getItem("contador") || 0;

    // Atualiza a exibição do contador na página
    document.getElementById("contador").textContent = contador;

    // Adiciona um evento de clique ao botão
    document.getElementById("botao").addEventListener("click", function () {
        // Incrementa o contador
        contador++;
        
        // Atualiza a exibição do contador na página
        document.getElementById("contador").textContent = contador;

        // Armazena o novo valor do contador no armazenamento local
        localStorage.setItem("contador", contador);
    });
});
