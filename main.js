let mensagemUsuario = document.querySelector('.mensagem_usuario');

let btnCriptografar = document.querySelector('.btn_criptografar');
let btnDescriptografar = document.querySelector('.btn_descriptografar')

let containerEsquerdo = document.querySelector('.container_esquerdo')
let btnLimpar = document.querySelector('.btn_limpar')

function criptografar(){
    document.querySelector('.informacao').style.display='none;'

    let mensagem = mensagemUsuario.value;
    let mensagemCriptografada = mensagem

    .replaceAll("e" , "enter")
    .replaceAll("i" , "imes")
    .replaceAll("a" , "ai")
    .replaceAll("o" , "ober")
    .replaceAll("u" , "ufat")


    containerEsquerdo.classList.add('campo_cripto');
    containerEsquerdo.innerHTML = `<textarea class="campo_mensagem" onkeyup="return forceLower(this)">${mensagemCriptografada}</textarea><button class="btn_copiar" onclick="copiar()">Copiar</button><button class='btn_limpar' onclick='limpar()'>Limpar</button>`;

}

function descriptografar() {
    let mensagem = mensagemUsuario.value;
    let mensagemDescriptografada = mensagem
    .replaceAll("enter" , "e")
    .replaceAll("imes" , "i")
    .replaceAll("ai" , "a")
    .replaceAll("ober" , "o")
    .replaceAll("ufat" , "u")

    containerEsquerdo.classList.add('campo_cripto');
    document.querySelector('.campo_mensagem').value = mensagemDescriptografada;
   
}

function forceLower(strInput) {
strInput.value=strInput.value.toLowerCase();

}

function copiar() {
    let copiarMensagem = document.querySelector('.campo_mensagem');
    copiarMensagem.select();
    document.execCommand('copy')
    alert('Mensagem Copiada')
  
}

function limpar() {
    window.location.reload()

}

btnCriptografar.onclick = criptografar
btnDescriptografar.onclick = descriptografar






