; (function () {

    const urlSalvar = "https://ceep.herokuapp.com/cartoes/salvar"
    const $btnSync = $("#btnSync")

    // funcao que constrou a div para mostrar a mensagem de acordo com a resposta da api
    const monstrarMensagem = function (msg, classe) {
        const mensagem = document.createElement("div")
        mensagem.classList.add("formNovoCartao-msg", classe)
        mensagem.textContent = msg


        const $form = $(".formNovoCartao")

        const $btnSubmit = $form.find("form").css("formNovoCartao") // ultimo elemento do form

        $form.before(mensagem, $btnSubmit)

        $form.on("animationend", function (event) {
            event.target.remove()
        })
    }

    $btnSync.click(function () {

        $btnSync.addClass("botaoSync--esperando")
        $btnSync.removeClass("botaoSync--sincronizacao")

        const xhr = new XMLHttpRequest()
        xhr.open('POST', urlSalvar)

        // para o post nessa api eh necessario passar o content-type
        xhr.setRequestHeader("Content-Type", "application/json")

        const cartoes = document.querySelectorAll(".cartao")

        const infoDoMural = {
            usuario: "pauluci.cleberson@gmail.com", // usuario
            cartoes: Array.from($(".cartao")).map(function (cartao) {
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").textContent,
                    cor: getComputedStyle(cartao).getPropertyValue("background-color")
                }
            })
        }

        xhr.send(JSON.stringify(infoDoMural))

        xhr.addEventListener("load", function () {
            const response = JSON.parse(xhr.response)
            console.log(`
                ${response.quantidade} cartões salvos em ${response.usuario}
            `)

            $btnSync.removeClass("botaoSync--esperando")
            $btnSync.addClass("botaoSync--sincronizado")

            monstrarMensagem("Cartões salvos com sucesso :)", "formNovoCartao-msg-success")

        })

        xhr.addEventListener("error", function () {
            $btnSync.removeClass("botaoSync--esperando")
            $btnSync.addClass("botaoSync--deuRuim")

            monstrarMensagem("Falha ao salvar os cartões :(", "formNovoCartao-msg-error")
        })

    })

    $btnSync.removeClass("no-js")

})()