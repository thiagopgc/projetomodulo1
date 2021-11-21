function botaoClicado(){
    var olhoAguia = prompt("Escolha uma opcao")
    if(olhoAguia == 1){
        window.location.href = "./ganhador1.html"
    }else if(olhoAguia == 2){
        window.location.href = "./gameover.html"
    }else{
    alert("opcao invalida")
    botaoClicado()
    }
}