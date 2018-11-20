; (function () {
    const btnAjuda = document.querySelector("#btnAjuda");
    btnAjuda.classList.remove("no-js");

    btnAjuda.addEventListener("click", function () {
        const ajudas = [
            {conteudo: "Bem Vindo ao Ceep", cor: "#F05450"},
            {conteudo: "Clique no btn Linhas para mudar o Layout", cor: "#92C4EC"}
        ]

        ajudas.forEach(function (ajuda) {
            /* alert(ajuda); */
            cartao.adiciona(ajuda);
        })
    })


    /*
    com jquery
    (function () {
        const btnAjuda = $("#btnAjuda");
        btnAjuda.removeClass("no-js")
        btnAjuda.on("click", function() {
            ...
        })
    })()
    */
})()