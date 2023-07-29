//habilitando input através do readline-sync
const readline = require('readline-sync');

//função título
function titulo(){
    console.log("\n------------------------------\n     C A L C U L A D O R A    \n------------------------------\n");
}

//função menu
function menu(){
    console.log('1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n0. Sair\n');
}

//função calculadora
function calc(n1,n2,op){
    let res;
    let msg = "  ";
    switch(op){
        case 1:
            res = n1+n2; 
            console.log("\n",n1,'+',n2,'=',res,);
            break;
        case 2:
            res = n1-n2;
            console.log("\n",n1,'-',n2,'=',res);
            break;
        case 3:
            res = n1*n2;
            console.log("\n",n1,'*',n2,'=',res);
            break;
        case 4:
            res = n1/n2;
            console.log("\n",n1,'/',n2,'=',res);
            break;
    }
    return msg;
}

//declaração da variável operador, num1 e num2
let operador;
let num1;
let num2;

//loop para calculadora
do{
    titulo();
    menu();

    operador = readline.questionInt("Selecione uma opção: ");

    if(operador == 0){
        console.log("\nSaindo da calculadora...");
        break;
    }else if(operador > 4 || operador < 0){
        console.log("\nEssa opção não existe!");
    }else{
        num1 = readline.questionFloat("\nDigite o primeiro número: ");
        num2 = readline.questionFloat("Digite o segundo número: ");

        calc(num1,num2,operador);
    }

}while (operador != 0);
