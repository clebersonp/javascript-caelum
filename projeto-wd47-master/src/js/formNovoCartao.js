;(function () {

    const $form = $(".formNovoCartao")
    $form.removeClass("no-js"); // remove essa classe para mostrar o componente na tela

    $form.on("submit", function (event) {
        event.preventDefault() // funcao para nao submeter o botao ainda

        const $textArea = $form.find(".formNovoCartao-conteudo")
        const isTextAreaVazio = $textArea.val().trim().length === 0; // ou ! textArea.value.trim().length

        if (isTextAreaVazio) {
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulário inválido. Não digite vários nada! :)"

            // const btnSubmit = form.find(".formNovoCartao-salvar") // ultimo elemento do form
            
            $form.before(msgErro)

            // $form.insertBefore(msgErro, btnSubmit) // vai adicionar a div antes do btn somente se estiver usando o DOM
            $form.on("animationend", function (event) {

                // animationend eh um css transition event ----https://developer.mozilla.org/en-US/docs/Web/Events

                // na classe .formNovoCartao-msg existe a propriedade animation
                event.target.remove() // o filho div executou esse evento e o pai form ouviu e a partir disso executa algo
            })
        } else {
            cartao.adiciona({ conteudo: $textArea.val().trim() })
            $textArea.val("")
        }
    })


    /* $nomeVariavel eh somente para ficar visivel quando estamos usando elemento jquery */
})()