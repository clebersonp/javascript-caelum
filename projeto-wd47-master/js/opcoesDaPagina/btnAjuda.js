; (function () {
    const btnAjuda = document.querySelector("#btnAjuda");
    btnAjuda.classList.remove("no-js");

    btnAjuda.addEventListener("click", function () {
        const ajudas = [
            "Bem Vindo ao Ceep", "Clique no btn Linhas para mudar o Layout"
        ]

        ajudas.forEach(function (ajuda) {
            alert(ajuda);
        })
    })
})()