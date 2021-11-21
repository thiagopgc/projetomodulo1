function botaoClicado(){
    var resposta = prompt("Escolha uma opcao")
    if(resposta == 1){
        window.location.href = "./ganhador1.html"
    }else if(resposta == 2){
        window.location.href = "./gameover.html"
    }else{
    alert("opcao invalida")
    botaoClicado()
    }
}