; (function () {
    const btnAjuda = document.querySelector("#btnAjuda");
    btnAjuda.classList.remove("no-js");

    btnAjuda.addEventListener("click", function () {
        /* const ajudas = [
            {conteudo: "Bem Vindo ao Ceep", cor: "#F05450"},
            {conteudo: "Clique no btn Linhas para mudar o Layout", cor: "#92C4EC"}
        ]

        ajudas.forEach(function (ajuda) {
            alert(ajuda);
            cartao.adiciona(ajuda);
        }) */


        /* chamar via AJAX XHR*/

        /* const xhr = new XMLHttpRequest()
        xhr.open("GET", "https://ceep.herokuapp.com/cartoes/instrucoes")
        xhr.responseType = "json"
        xhr.send()

        /* criando evento para recuperar o response

        xhr.addEventListener("load", function () {
            console.log(xhr)
            console.log(xhr.response)
            xhr.response.instrucoes.forEach(ajuda => {
                cartao.adiciona(ajuda)
            });
        }) */


        // usando a lib axios -> adicionado o cdn no index.html
        // Make a request for a user with a given ID
        /* axios.get('https://ceep.herokuapp.com/cartoes/instrucoes')
        .then(function (response) {
            // handle success
            console.log(response);
            response.data.instrucoes.forEach(ajuda => {
                cartao.adiciona(ajuda)
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            cartao.adiciona({conteudo: "Ocorreu um erro ao carregar os cartões de ajuda! :(", cor: "#FF0000"})
        })
        .finally(function () {
            // always executed
        }); */

        // usando jquery Ajax
        /* $.get("https://ceep.herokuapp.com/cartoes/instrucoes", function (response) {
            console.log(response)
            response.instrucoes.forEach(ajuda => {
                cartao.adiciona(ajuda)
            });
        }); */

        // usando fetch()
        fetch('https://ceep.herokuapp.com/cartoes/instrucoes')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.instrucoes.forEach(ajuda => {
                   cartao.adiciona(ajuda) 
                });
            });

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