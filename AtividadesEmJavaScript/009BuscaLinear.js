/*
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] 
Precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária 
de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação do array da questão
const lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

//função de busca linear
function buscaLinear(list, elemento){
    for(let i = 0; i < lista.length; i++){
        if(list[i] === elemento){
            return i;
        }
    }
    return -1;
}

//comando que pede o elemento procurado pelo usuário
const procurado = readline.questionInt('Digite o valor do elemento procurado: ');

//criação da constante que armazenará o return da função de busca linear
const encontrado = buscaLinear(lista, procurado);

//condicional que imprimirá o resultado da busca, indicando o índice ou não
if(encontrado !== -1){
    console.log(`O elemento ${procurado} foi encontrado no índice ${encontrado}.`);
}else{
    console.log(`O elemento ${procurado} não foi encontrado na lista.`);
}

