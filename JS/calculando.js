function calculando(){
    
    var ValorL = null;
    var Sign = null;
    var ValorR = null;
    var Result;
    
    ValorL = PegarValorE();
    if(ValorL == null){
        console.log("invalido");
        return 0;
    }
    Sign = Pegarsinal();
    if(Sign == null){
        console.log("invalido");
        zerando();
        return 0;
    }
    ValorR = PegarValorD();
    if(ValorR == null){
        console.log("invalido");
        zerando();
        return 0;
    }

    switch(Sign){
        case '+':
            Result = ValorL+ValorR;
            console.log(Result);
            ValorCalulado(Result);
            zerando();
            break;
        
        case '-':
            Result = ValorL-ValorR;
            console.log(Result);
            ValorCalulado(Result);
            zerando();
            break;
        
        case '*':
            Result = ValorL*ValorR;
            console.log(Result);
            ValorCalulado(Result);
            zerando();
            break;
        
        case '/':
            Result = ValorL/ValorR;
            console.log(Result);
            ValorCalulado(Result);
            zerando();
            break;
    }
}