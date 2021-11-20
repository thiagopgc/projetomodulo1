function botaoClicado(){
var olhoAguia1 = prompt("Escolha uma opcao")
if(olhoAguia1 == 1){
    window.location.href = "./fase2.html"
}else if(olhoAguia1 == 2){
    window.location.href = "./gameover.html"
}else{
alert("opcao invalida")
botaoClicado()
}

}


