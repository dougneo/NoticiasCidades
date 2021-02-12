// INICIO DA FUNÇÃO QUE GERA OS DADOS DINAMICAMENTE NO CARREGAMENTO DA PAGINA
function load() {

    // = INICIO DA FUNÇÃO QUE GERA O OPERADORES =
    var elemClick = document.querySelector("#makeli")
    var domContent = `<li>
    <span id="{0}" data-text="{1}" class="link-canal tooltip">
    <img src="{2}" class="perfil tooltip cursor-mouse" onclick="abrirCadastro('formulario')">
    </span>
    </li>`
    for (let i = 0; i < data.length; i++) {
        var returnHtml = domContent.replace("{0}", data[i].id).replace("{1}", data[i].operador).replace("{2}", data[i].foto)
        elemClick.innerHTML += returnHtml
    }
    // = TERMINO DA FUNÇÃO QUE GERA O OPERADORES =

    // = INICIO DA FUNÇÃO PARA SELECIONAR NOME E FOTO CLICADO =
    elemClick.addEventListener("click", (e) => {

        let foto = e.target.src
        if (typeof foto == 'undefined' || foto === null)

            return;
        var idoperador = e.target.parentNode.getAttribute('id')
        var nomeOperador = e.target.parentNode.getAttribute('data-text')

        var domContentFoto = `<img id="imagem-rosto" class="shadow-xl" src="{0}">`
        var domContentNome = `<Span id="nome"> {0} </Span>`

        var elemClickFoto = document.querySelector("#foto-perfil")
        var returnHtmlFoto = domContentFoto.replace("{0}", foto)
        elemClickFoto.innerHTML = returnHtmlFoto

        var elemClickNome = document.querySelector("#nome-operador")
        var returnHtmlNome = domContentNome.replace("{0}", nomeOperador)
        elemClickNome.innerHTML = returnHtmlNome
        if (idoperador != null) {
        }
        // = TERMINO DA FUNÇÃO PARA SELECIONAR NOME E FOTO CLICADO =

        // = INÍCIO DA FUNÇÃO QUE GERA OS BOTOES =
        data.forEach(obj => {
            if (obj["id"] == idoperador) {
                if (Array.isArray(obj["canais"]) == true) {
                    var domContentButton = `<button type="submit" class="slide_from_left cursor-mouse" id="continuar" required> CONTINUAR </button>`
                    var elemClickButton = document.querySelector("#canal")
                    elemClickButton.innerHTML = domContentButton
                } else {
                    var domContentButton = `<button type='submit' id="enviar" class="slide_from_left cursor-mouse" required> ENVIAR </a> </button>`
                    var elemClickButton = document.querySelector("#canal")
                    elemClickButton.innerHTML = domContentButton
                }
            }
        })
    })
}
// INICIO DA FUNÇÃO QUE GERA OS DADOS DINAMICAMENTE NO CARREGAMENTO DA PAGINA

// INÍCIO DA FUNÇÃO QUE ABRE E FECHA O BOTÃO DO WHATSAPP
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "block") {
        document.getElementById("minhaDiv").style.animationName = 'ocultar-perfis'
        document.getElementById("minhaDiv").style.animationDuration = '0.5s'
        setTimeout(function() {
            document.getElementById("minhaDiv").style.display = 'none'
            document.getElementById("minhaDiv").style.animationName = ''
        }, 400)
    } else {
        document.getElementById('minhaDiv').style.animationName = 'aparecer-perfis'
        document.getElementById('minhaDiv').style.animationDuration = '0.5s'
        document.getElementById(el).style.display = 'block';
    }
}
// TERMINO DA FUNÇÃO QUE ABRE E FECHA O BOTÃO DO WHATSAPP

// INICIO DA CONFIGURAÇÃO INPUT NUMERO-PAIS, RECEBER SIMBOLO E NUMERO
var inputEl = document.getElementById('numero-pais');
var goodKey = '0123456789+';

var checkInputTel = function(e) {
    var key = (typeof e.which == "number") ? e.which : e.keyCode;
    var start = this.selectionStart,
        end = this.selectionEnd;

    var filtered = this.value.split('').filter(filterInput);
    this.value = filtered.join("");

    /* Prevents moving the pointer for a bad character */
    var move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
    this.setSelectionRange(start - move, end - move);
}
var filterInput = function(val) {
    return (goodKey.indexOf(val) > -1);
}
inputEl.addEventListener('input', checkInputTel);
// ===== TERMINO DA CONFIGURAÇÃO INPUT NUMERO-PAIS, RECEBER SIMBOLO E NUMERO ===== 

// ===== INICIO DO REGEX PARA NUMERO FICAR NO PADRAO BR ======
document.getElementById('numero').addEventListener('input', function(e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
// ===== TERMINO DO REGEX PARA NUMERO FICAR NO PADRAO BR ======


// ===== INICIO DA FUNÇÃO QUE FECHA O POPUP AO CLICAR FORA DA DIV DO BOTÕES =====
document.addEventListener("click", (evt) => {
    const popupWhats = document.getElementById("popup");
    let targetElement = evt.target;
    do {
        if (targetElement == popupWhats) {

            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);

    document.getElementById("minhaDiv").style.animationName = 'ocultar-perfis'
    document.getElementById("minhaDiv").style.animationDuration = '0.5s'
    setTimeout(function() {
        document.getElementById("minhaDiv").style.display = 'none'
        document.getElementById("minhaDiv").style.animationName = ''
    }, 500)
});
// ===== TERMINO DA FUNÇÃO QUE FECHA O POPUP AO CLICAR FORA DA DIV DO BOTÕES =====

// ===== INÍCIO DA FUNÇÃO QUE ABRE O MODAL DE FORMULARIO =====
function abrirCadastro(mn) {
    let modal = document.getElementById(mn);
    if (typeof modal == 'undefined' || modal === null)
        return;
    document.getElementById('popup').style.display = 'none'
    modal.style.display = 'block';
    document.getElementById("minhaDiv").style.display = 'none'
}
// ===== TERMINO DA FUNÇÃO QUE ABRE O MODAL DE FORMULARIO =====


// ===== INÍCIO DA FUNÇÃO QUE FECHA O MODAL FORMULARIO =====
function fecharCadastro(id_Seletor) {
    let modal = document.getElementById(id_Seletor);
    var xis = document.getElementById('botao-xis')
    if (typeof modal == 'undefined' || modal === null)
        return;
    else {
        xis.addEventListener('click', (evt) => {
            modal.style.animationName = 'fechar_modal'

            setTimeout(function() {
                modal.style.display = 'none'
                modal.style.animationName = ''
            }, 400)
        })
    }
    document.getElementById('popup').style.display = 'block'
    document.getElementById("formZap").reset()   
}
// ===== TERMINO DA FUNÇÃO QUE FECHA O MODAL FORMULARIO =====

// ==== JSON UTILIZADO PARA PODER CARREGAR OS DADOS =====
var data = [{
        "id": "1",
        "operador": "Recursos Humanos",
        "foto": "imagens/rosto1.jpeg",
        "canais": ["+5527987654321", "+5527123456789", "+552732524241", "+5527981316077", "+5527999338990"]
    },

    {
        "id": "2",
        "operador": "João",
        "foto": "imagens/rosto2.jpeg",
        "canais": "+5527987654321"
    },

    {
        "id": "3",
        "operador": "Paulo",
        "foto": "imagens/rosto3.jpeg",
        "canais": "+5527987654321"
    },

    {
        "id": "4",
        "operador": "Silvana",
        "foto": "imagens/rosto4.jpeg",
        "canais": ["+5527987654321", "+5527123456789"]
    },

    {
        "id": "5",
        "operador": "Emiliy",
        "foto": "imagens/rosto5.jpeg",
        "canais": "+5527987654321"
    },

    {
        "id": "6",
        "operador": "Juliana",
        "foto": "imagens/rosto6.jpeg",
        "canais": ["+5527987654321", "+5527123456789"]
    },

    {
        "id": "7",
        "operador": "Denise",
        "foto": "imagens/rosto7.jpeg",
        "canais": "+5527987654321"
    },

    {
        "id": "8",
        "operador": "Carla",
        "foto": "imagens/rosto8.jpeg",
        "canais": ["+5527987654321", "+5527123456789"]
    },

    {
        "id": "9",
        "operador": "Castiel",
        "foto": "imagens/rosto9.jpeg",
        "canais": "+5527987654321"
    }
]

// TERMINO JSON UTILIZADO PARA PODER CARREGAR OS DADOS DE MODO EXTERNO

//  INICIO DA FUNÇÃO QUE FECHA O MINIMODAL AO SUBMIT
function fecharMiniModalSend(mm) {
    var miniModal = document.getElementById(mm)
    miniModal.style.display = 'none'
    document.getElementById('popup').style.display = 'block'
}
// TERMINO DA FUNÇÃO QUE FECHA O MINIMODAL AO SUBMIT

// INICIO DA FUNÇÃO QUE FECHA O MINIMODAL
function fecharMiniModal(mn) {
    var aparecer_iconezap = document.getElementById("popup")
    let modal = document.getElementById(mn);
    var xis = document.getElementById('segundo_xis')
    if (typeof modal == 'undefined' || modal === null)

        return;
    else {
        xis.addEventListener('click', (evt) => {

            modal.style.animationName = 'fechar_mini_modal'

            setTimeout(function() {
                modal.style.display = 'none'
                modal.style.animationName = ''
            }, 300)
            aparecer_iconezap.style.display = 'block'
        })
    }
}
// TERMINO DA FUNÇÃO QUE FECHA O MINIMODAL

// INICIO DA FUNÇÃO QUE BUSCAR O ID DENTRO DO JSON
function buscaID() {
    var buscaId = document.querySelector("#makeli")
    buscaId.addEventListener("click", (busca) => {
        let foto = busca.target.src
        if (typeof foto == 'undefined' || foto === null)
            return
        idoperador = busca.target.parentNode.getAttribute('id')
    })
}
// TERMINO DA FUNÇÃO QUE BUSCAR O ID DENTRO DO JSON

// INICIO DA FUNÇÃO QUE VALIDA E ALTERA OS BOTÕES
function validar() {
    var buscaElemento = document.getElementById("canal")
    let testBotao = buscaElemento.querySelector("button")
    if (testBotao.id == 'enviar') {
        data.forEach(idObj => {
            if (idObj["id"] == idoperador) {
                var api = `https://api.whatsapp.com/send?phone={0}`
                var numeroCanal = idObj["canais"]
                var linkCanal = api.replace("{0}", numeroCanal)
                window.open(linkCanal, "_blank")
            }
        })
        document.getElementById("formZap").reset()
        document.getElementById("formulario").style.display = "none"
        document.getElementById("popup").style.display = "block"
    }
    if (testBotao.id == 'continuar') {
        document.getElementById("formulario").style.display = "none"
        document.getElementById("seletor_canal").style.display = "block"
        document.getElementById("formZap").reset()
        data.forEach(idObj => {
            if (idObj["id"] == idoperador) {
                var fechar = document.querySelector("#input_seletor")
                for (var y = 1; y < fechar.length; y) {
                    fechar.remove(1)
                }
                var domContentSeletor = `<option value="{0}">{1}</option>`
                var elemClickSeletor = document.querySelector("#input_seletor")
                for (let i = 0; i < idObj["canais"].length; i++) {
                    var returnHtmlSeletor = domContentSeletor.replace("{0}", idObj["canais"][i]).replace("{1}", idObj["canais"][i])
                    elemClickSeletor.innerHTML += returnHtmlSeletor
                }
                var selecionado = document.querySelector("#input_seletor")
                var domContentButton = `<button type='submit' onClick="window.open('https://api.whatsapp.com/send?phone={0}');fecharMiniModal('seletor_canal');fecharMiniModalSend('seletor_canal'); btnDefault()" class="slide_from_left cursor-mouse"> ENVIAR </button>`
                selecionado.addEventListener("change", (sel) => {
                    var numeroCanal = sel.target.value
                    var elemClickButton = document.querySelector(".conteudo_seletor3")
                    var returnHtmlButton = domContentButton.replace("{0}", numeroCanal)
                    elemClickButton.innerHTML = returnHtmlButton
                })
            }
        })
    }
    return false
}
// TERMINO DA FUNÇÃO QUE VALIDA E ALTERA OS BOTÕES

// INICIO DA FUNÇÃO QUE DEIXA O BOTAO DO MINIMODAL NO ESTADO INICIAL
function btnDefault(){
    var domContentButton = `<button type="button" class="slide_from_left " id="checkBotao botao_canal" required> ENVIAR </button>`
    var botaoDefault = document.querySelector(".conteudo_seletor3")
    botaoDefault.innerHTML = domContentButton
}
// INICIO DA FUNÇÃO QUE DEIXA O BOTAO DO MINIMODAL NO ESTADO INICIAL