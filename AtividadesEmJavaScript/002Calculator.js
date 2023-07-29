//habilitando input através do readline-sync
const readline = require('readline-sync');

//função título
function titulo(){
    console.log("------------------------------\n     C A L C U L A D O R A    \n------------------------------\n");
}

//função menu
function menu(){
    console.log('1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\nR= ');
}

//função calculadora
function calc(n1,n2,op){
    var res;
    switch(op){
        case 1:
            res = n1+n2;
            break;
        case 2:
            res = n1-n2;
            break;
        case 3:
            res = n1*n2;
            break;
        case 4:
            res = n1/n2;
            break;
    }
}

//declaração da variável operador, menu, num1 e num2
let operador;
let me;
let num1;
let num2;

//loop para calculadora
do{
    titulo();
    menu();

    me = readline.questionInt("\nSelecione uma opção: ");

    if(me == 0){
        console.log("\nSaindo da calculadora...");
    }else if(me != 1 || me != 2 || me != 3 || me != 4 || me != 0){
        console.log("\nEssa opção não existe!");
    }else{
        operador = me;
        num1 = readline.questionFloat("\nDigite o primeiro número: ");
        num2 = readline.questionFloat("\nDigite o segundo número: ");

        console.log(calc(num1,num2,operador));
    }

}while (me != 0);
