function botaoClicado(){
    var resposta
    while(resposta != 1 || resposta != 2)
    {
        
        resposta = prompt ('digite uma opção')
        if(resposta == 1){
            window.location.href = "./gameover.html"
            break
        }else if(resposta == 2){
            window.location.href = "./verdadesecreta2.html"
            break
        }else{
        alert("Digite 1 ou 2")
        break
       }
    
    
    }
    }