var visor = document.form_calc.visor;
var myop = "";

function adicionar (valor){
    var salvo = visor.value;
    if(salvo == 0){
        salvo = "";
    }

    visor.value = salvo + valor;
    myop = "";
}

function myreset(){
    visor.value = "0";
    myop = "";
}

function operador (op){
    if(myop == ""){
        adicionar(op);
        myop = op;
    }
}

function calcular(){
    visor.value = eval(visor.value)
}