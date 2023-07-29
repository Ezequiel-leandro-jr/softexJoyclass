//habilitando input através do readline-sync
const readline = require('readline-sync');

//função calculadora
function calculadora(op,n1,n2){
    let res = 0;
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
    return res;
}

let operador;

do{
    console.log("---------------------------------------\n         C A L C U L A D O R A         \n---------------------------------------\n\n");
    console.log("1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n0. Sair\n");

    let operador = readline.questionInt('Escolha uma opção do menu: ');

    if(operador == 0){
        console.log('\nSaindo da calculadora...');
    }else if(operador != 1 || operador != 2 || operador != 3 || operador != 4 || operador != 0){
        console.log('\nEssa opção não existe!\n\n');
    } else{
        let num1 = readline.questionFloat('Digite o primeiro número: ');
        let num2 = readline.questionFloat('Digite o segundo número: ');

        console.log(calculadora(operador,num1,num2));
    }
    

}while(operador != 0);
