
document.addEventListener("DOMContentLoaded", function () {

    const produtos = document.querySelectorAll(".produto");
    const informacoes = document.getElementById("informacoes");
    const fecharInfo = document.getElementById("fecharInfo");
    const textos = document.querySelectorAll(".texto-alimento");

    produtos.forEach(function (produto) {
        produto.addEventListener("click", function () {

            const tipo = produto.dataset.alimento;

            // Esconde todos os textos
            textos.forEach(function (texto) {
                texto.hidden = true;
            });

            // Encontra o texto do alimento selecionado
            const textoSelecionado = document.querySelector(
                '.texto-alimento[data-info="' + tipo + '"]'
            );

            if (!textoSelecionado) return;

            // Mostra o conteúdo escolhido
            textoSelecionado.hidden = false;

            // Abre a tela de informações
            informacoes.hidden = false;
            document.body.classList.add("modal-aberto");

            // Reinicia a animação
            informacoes.classList.remove("abrindo");
            void informacoes.offsetWidth;
            informacoes.classList.add("abrindo");

        });
    });

    // Fecha a tela de informações
    fecharInfo.addEventListener("click", function () {
        informacoes.classList.remove("abrindo");
        informacoes.hidden = true;

        document.body.classList.remove("modal-aberto");

        textos.forEach(function (texto) {
            texto.hidden = true;
        });
    });

    // Também permite fechar apertando ESC
    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && !informacoes.hidden) {
            fecharInfo.click();
        }
    });

});
