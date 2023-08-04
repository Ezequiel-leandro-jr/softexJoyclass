/*
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. 
Ao terminar, imprima novamente todas as informações das três listas.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação das listas
let nomes = new Array(10);
let idades = new Array(10);
let cores = new Array(10);
let continuar = 1;
let op = 0;

//preenchimento dos valores
for(let i = 0; i < nomes.length; i++){
    nomes[i] = readline.question(`Digite o nome da pessoa n°${i+1}: `);
    idades[i] = readline.question(`Digite a idade de ${nomes[i]}: `);
    cores[i] = readline.question(`Qual a cor favotira de ${nomes[i]}: `);
    console.log("     \n");
}

//impressão das listas
console.log(`PESSOAS: ${nomes[0]}  ${nomes[1]}  ${nomes[2]}  ${nomes[3]}  ${nomes[4]}  ${nomes[5]}  ${nomes[6]}  ${nomes[7]}  ${nomes[8]}  ${nomes[9]}`);
console.log(`IDADE:   ${idades[0]}           ${idades[1]}           ${idades[2]}           ${idades[3]}           ${idades[4]}           ${idades[5]}           ${idades[6]}           ${idades[7]}           ${idades[8]}           ${idades[9]}`);
console.log(`CORES: ${cores[0]}         ${cores[1]}       ${cores[2]}         ${cores[3]}         ${cores[4]}         ${cores[5]}         ${cores[6]}         ${cores[7]}         ${cores[8]}         ${cores[9]}`);

//alterando as listas
do{
    console.log('MENU:\n\n1.Adicionar Pessoa\n2.Excluir Pessoa\n3.Alterar Pessoa\n');
    op = readline.questionInt("R= ");

    switch(op){
        case 1:
           addPessoa();
           break;
        case 2:
            excPessoa();
            break;
        case 3:
            altPessoa();
            break;
        Default:
            console.log('Erro: opção inválida!');
            break;
    }

     console.log("    \n\n");
     console.log(`PESSOAS: ${nomes[0]}  ${nomes[1]}  ${nomes[2]}  ${nomes[3]}  ${nomes[4]}  ${nomes[5]}  ${nomes[6]}  ${nomes[7]}  ${nomes[8]}  ${nomes[9]}`);
     console.log(`IDADE:   ${idades[0]}           ${idades[1]}           ${idades[2]}           ${idades[3]}           ${idades[4]}           ${idades[5]}           ${idades[6]}           ${idades[7]}           ${idades[8]}           ${idades[9]}`);
     console.log(`CORES: ${cores[0]}         ${cores[1]}       ${cores[2]}         ${cores[3]}         ${cores[4]}         ${cores[5]}         ${cores[6]}         ${cores[7]}         ${cores[8]}         ${cores[9]}`);


    continuar = questionInt('Deseja voltar ao MENU? <1-sim 0-não> ');
}while(continuar != 0)

//funções
function addPessoa(){
    let n, i, c;
    n = readline.question('Digite o nome da pessoa: ');
    nomes.push(n);
    i = readline.questionInt(`Digite a idade de ${n}: `);
    idades.push(i);
    c = readline.questionInt(`Digite a cor favorita de ${n}: `);
    cores.push(c);
}