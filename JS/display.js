function demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita){
    var txtE = ValorEsquerda;
    var txtS = Sinal;
    var txtD = ValorDireita;
    if(txtE == null){
       return 0; 
    }
    else{
        if(txtS == null){
            var mostrando = document.getElementById("ValoresDaConta").innerHTML = txtE;
            console.log("aqui esta o teste:"+mostrando);
        }
        else{
            if(txtD == null){
                var mostrando = document.getElementById("ValoresDaConta").innerHTML = txtE+txtS;
                console.log("aqui esta o teste:"+mostrando);
            }
            else{
                var mostrando = document.getElementById("ValoresDaConta").innerHTML = txtE+txtS+txtD;
                console.log("aqui esta o teste:"+mostrando);
            }
        }
    }
}

function ValorCalulado(Result){
    var mostrando = document.getElementById("ValoresDaConta").innerHTML = Result;
    console.log("aqui esta o teste:"+mostrando);
}