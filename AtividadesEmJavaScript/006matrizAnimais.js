/*
Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar 
informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, 
como nome, espécie e idade.

*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criando a matriz e variável n
let animais = new Array(0);
let n = 0;

//comando para saber quanto animais o usuário irá listar
n = readline.questionInt('Digite o n° de animais a serem listados: ');

for(let i = 0; i < n; i++){
    animais.push(new Array(3));
}

//comandos para listagem dos animais
for(let i = 0; i < animais.length; i++){
       for(let j = 0; j < animais[i].length; j++){
        switch(j){
            case 0:
                animais[i][j] = readline.question(`\nDigite o nome do ${i+1} animal: `);
                break;
            case 1:
                animais[i][j] = readline.question(`Digite a espécie do ${i+1} animal: `);
                break;
            case 2:
                animais[i][j] = readline.question(`Digite a idade do ${i+1} animal: `);
                break;
        }
       }
}

//impressão da lista
for(let i = 0; i < animais.length; i++){
    console.log(`\n=== ANIMAL ${i+1} ===`)
    for(let j = 0; j < animais[i].length; j++){
     switch(j){
         case 0:
             console.log(`NOME: ${animais[i][j]}`);
             break;
         case 1:
             console.log(`ESPÉCIE: ${animais[i][j]}`);
             break;
         case 2:
             console.log(`IDADE: ${animais[i][j]}`);
             break;
     }
    }
}


