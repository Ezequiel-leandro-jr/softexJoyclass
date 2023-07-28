/*
Faça uma função calculadora de dois números com três parâmetros: 
os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser 
executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão
Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.
*/

//OBS: instale a biblioteca readline-sync pelo node usando o código $ npm install readline-sync

//habilitando o input de dados pelo readline-sync
const readline = require("readline-sync");

//função calculadora
function calculadora(n1,n2,op){
    let res;
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
        default:
            res = 0;
            break;
    }
    return res;
}

//input dos dois números e o operador pelo usuário
let num1 = readline.questionFloat('Digite o primeiro número: ');
let num2 = readline.questionFloat('Digite o segundo número: ');
let operador = readline.questionInt('Digite a operação a ser realizada:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n');

//processamento e impressão dos dados através da função calculadora
switch(operador){
    case 1: 
         console.log(num1,'+',num2,'=',calculadora(num1,num2,operador));
         break;
    case 2:
        console.log(num1,'-',num2,'=',calculadora(num1,num2,operador));
        break;
    case 3:
        console.log(num1,'*',num2,'=',calculadora(num1,num2,operador));
        break;
    case 4:
        console.log(num1,'/',num2,'=',calculadora(num1,num2,operador));
        break;
    default:
        console.log(num1,'?',num2,'= 0');
        break;
}


