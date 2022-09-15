var ValorEsquerda = null;
var Sinal = null;
var ValorDireita = null;
    
var botao1 = document.querySelector("#botao1");
var botao2 = document.querySelector("#botao2");
var botao3 = document.querySelector("#botao3");
var botao4 = document.querySelector("#botao4");
var botao5 = document.querySelector("#botao5");
var botao6 = document.querySelector("#botao6");
var botao7 = document.querySelector("#botao7");
var botao8 = document.querySelector("#botao8");
var botao9 = document.querySelector("#botao9");
var botao0 = document.querySelector("#botao0");
//var botaoponto = document.querySelector("#botao");
var botaoMenos = document.querySelector("#botaomenos");
var botaoMais = document.querySelector("#botaomais");
var botaoDiv = document.querySelector("#botaodiv");
var botaoMul = document.querySelector("#botaomul");


botao1.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 1;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+1;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 1; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+1;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }
});
botao2.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 2;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+2;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 2; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+2;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao3.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 3;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+3;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 3; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+3;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao4.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 4;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+4;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 4; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+4;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao5.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 5;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+5;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 5; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+5;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao6.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 6;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+6;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 6; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+6;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao7.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 7;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+7;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 7; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+7;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao8.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 8;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+8;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 8; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+8;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao9.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 9;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10+9;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 9; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10+9;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
botao0.addEventListener("click",function(event){
    if(Sinal == null && ValorEsquerda == null){
        ValorEsquerda = 0;
        console.log(ValorEsquerda);
        demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
    }
    else{
        if(Sinal == null && ValorEsquerda != null){
            ValorEsquerda = ValorEsquerda*10;
            console.log(ValorEsquerda);
            demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
        }
        else{
            if(ValorDireita == null){
                ValorDireita = 0; 
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
            else{
                ValorDireita = ValorDireita*10;
                console.log(ValorDireita);
                demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
            }
        }
    }});
    /*botaoponto.addEventListener("click",function(event){
        if(Sinal == null && ValorEsquerda == null){
            ValorEsquerda = 0.;
            console.log(ValorEsquerda);
        }
        else{
            if(Sinal == null && ValorEsquerda != null){
                ValorEsquerda = ValorEsquerda+0.;
                console.log(ValorEsquerda);
            }
            else{
                if(ValorDireita == null){
                    ValorDireita = 0.; 
                    console.log(ValorDireita);
                }
                else{
                    ValorDireita = ValorDireita+0.;
                    console.log(ValorDireita);
                }
            }
        }});*/
botaoMenos.addEventListener("click",function(event){
    Sinal = "-"; 
    console.log(Sinal);
    demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
});
botaoMais.addEventListener("click",function(event){
    Sinal = "+"; 
    console.log(Sinal);
    demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
});
botaoDiv.addEventListener("click",function(event){
    Sinal = "/"; 
    console.log(Sinal);
    demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
});
botaoMul.addEventListener("click",function(event){
    Sinal = "*"; 
    console.log(Sinal);
    demonstrarValorFinal(ValorEsquerda, Sinal, ValorDireita);
});

function PegarValorE(){
    return ValorEsquerda;
};
function Pegarsinal(){
    return Sinal;
};
function PegarValorD(){
    return ValorDireita;
};

function zerando(){
ValorEsquerda = null;
Sinal = null;
ValorDireita = null;
}


