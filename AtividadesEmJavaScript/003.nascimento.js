/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, 
o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, 
o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/

//habilitando o input através da biblioteca readline-sync
const readline = require('readline-sync');

//declaração e atribuição da variável condicional
let anoCorreto = false;

//input do nome do usuário
let nome = readline.question('Digite seu nome completo: ');

//laço de repetição while para o input de ano do usuário
while(anoCorreto == false){
    try {
         let ano = readline.questionInt('Digite seu ano de nascimento, entre 1922 e 2022: ');

         if(isNaN(ano) == false){
            if(ano >= 1922 && ano <= 2022){
                anoCorreto = true;
                console.log('\nNOME:',nome,'\nIDADE:', 2023-ano);
            }else{
            throw new Error('não é um ano válido!\n')
         }
        }    
    } catch (error) {
        console.error('\nERRO: ', error.message);
        continue;
    }
    

}
