
document.addEventListener("DOMContentLoaded", function () {

    const produtos = document.querySelectorAll(".produto");
    const informacoes = document.getElementById("informacoes");
    const fecharInfo = document.getElementById("fecharInfo");
    const textos = document.querySelectorAll(".texto-alimento");

    // Abrir informações do alimento
    produtos.forEach(function (produto) {

        produto.addEventListener("click", function () {

            const tipo = produto.dataset.alimento;

            textos.forEach(function (texto) {
                texto.hidden = true;

                // Reseta para as informações iniciais
                const inicial = texto.querySelector(".conteudo-inicial");
                const alternativas = texto.querySelector(".conteudo-alternativas");

                if (inicial) inicial.hidden = false;
                if (alternativas) alternativas.hidden = true;
            });

            const textoSelecionado = document.querySelector(
                '.texto-alimento[data-info="' + tipo + '"]'
            );

            if (!textoSelecionado) return;

            textoSelecionado.hidden = false;

            informacoes.hidden = false;
            document.body.classList.add("modal-aberto");

            informacoes.classList.remove("abrindo");
            void informacoes.offsetWidth;
            informacoes.classList.add("abrindo");

        });

    });

    // Alternar entre informações e alternativas
    informacoes.addEventListener("click", function (evento) {

        const botaoAlternativas = evento.target.closest(".btn-alternativas");
        const botaoVoltar = evento.target.closest(".btn-voltar-alimento");

        if (botaoAlternativas) {

            const artigo = botaoAlternativas.closest(".texto-alimento");

            const inicial = artigo.querySelector(".conteudo-inicial");
            const alternativas = artigo.querySelector(".conteudo-alternativas");

            if (inicial && alternativas) {
                inicial.hidden = true;
                alternativas.hidden = false;
            }

        }

        if (botaoVoltar) {

            const artigo = botaoVoltar.closest(".texto-alimento");

            const inicial = artigo.querySelector(".conteudo-inicial");
            const alternativas = artigo.querySelector(".conteudo-alternativas");

            if (inicial && alternativas) {
                alternativas.hidden = true;
                inicial.hidden = false;
            }

        }

    });

    // Fechar informações
    fecharInfo.addEventListener("click", function () {

        informacoes.classList.remove("abrindo");
        informacoes.hidden = true;

        document.body.classList.remove("modal-aberto");

        textos.forEach(function (texto) {
            texto.hidden = true;
        });

    });

    // Fechar com ESC
    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape" && !informacoes.hidden) {
            fecharInfo.click();
        }

    });

});
