function botaoClicado(){
    var verdadesecreta = prompt("Escolha uma opcao")
    if(verdadesecreta == 1){
        window.location.href = "./gameover.html"
    }else if(verdadesecreta == 2){
        window.location.href = "./verdadesecreta2.html"
    }else{
    alert("opcao invalida")
    botaoClicado()
    }
    
}