function botaoClicado(){
    var resposta = prompt("Escolha uma opcao")
    if(resposta == 1){
        window.location.href = "./gameover.html"
    }else if(resposta == 2){
        window.location.href = "./verdadesecreta2.html"
    }else{
    alert("opcao invalida")
    botaoClicado()
    }
    
}