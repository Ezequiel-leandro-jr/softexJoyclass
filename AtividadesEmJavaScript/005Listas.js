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
let nomes = new Array(3);
let idades = new Array(3);
let cores = new Array(3);
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
console.log("    \n");
     console.log('PESSOAS: ', nomes.join(" | "));
     console.log('IDADE:   ', idades.join(" | "));
     console.log('CORES:   ', cores.join(" | "));

//alterando as listas
do{
    console.log('\n\nMENU:\n1.Adicionar Pessoa\n2.Excluir Pessoa\n3.Alterar Pessoa\n');
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
        default:
            console.log('Erro: opção inválida!');
            break;
    }

     console.log("    \n\n");
     console.log('PESSOAS: ', nomes.join(" | "));
     console.log('IDADE:   ', idades.join(" | "));
     console.log('CORES:   ', cores.join(" | "));


    continuar = readline.questionInt('\nDeseja voltar ao MENU? <1-sim 0-não> ');
}while(continuar != 0)

//funções
function addPessoa(){
    let n, i, c;
    n = readline.question('\nDigite o nome da pessoa: ');
    nomes.push(n);
    i = readline.questionInt(`Digite a idade de ${n}: `);
    idades.push(i);
    c = readline.question(`Digite a cor favorita de ${n}: `);
    cores.push(c);

    console.log("\nPessoa adicionada!");
}

function excPessoa(){
    let n;
    console.log("   \n")
    for(let i = 0; i < nomes.length; i++){
        console.log(`${i}.`, nomes[i]);
    }

    do{
        n = readline.questionInt('\nDigite o n° da pessoa a ser excluída: ');

        if(n >= nomes.length){
            console.log('\nErro: opção inválida.');
        }
    }while(n >= nomes.length)
    
    nomes.splice(n, 1);
    idades.splice(n, 1);
    cores.splice(n, 1);

    console.log('\nPessoa removida!');
    
}

function altPessoa(){

    let p, op;

    console.log("   \n");

    for(let i = 0; i < nomes.length; i++){
        console.log(`${i}.`, nomes[i]);
    }

    console.log("   \n");

    do{
        p = readline.questionInt('Digite o n° da pessoa a ser alterada: ');

        if(p >= nomes.length){
            console.log('\nErro: opção inválida.');
        }
    }while(p >= nomes.length)

    do{
        console.log('\nO que você deseja alterar:\n1.Nome\n2.Idade\n3.Cor favorita\n4.Todas as opções\n');
        op = readline.questionInt('R= ');

        switch(op){
            case 1:
                nomes[p] = readline.question('\nDigite o nome: ');
                break;
            case 2:
                idades[p] = readline.questionInt('Digite a idade: ');
                break;
            case 3:
                cores[p] = readline.question('Digite a cor favorita: ');
                break;
            case 4:
                nomes[p] = readline.question('\nDigite o nome: ');
                idades[p] = readline.questionInt('Digite a idade: ');
                cores[p] = readline.question('Digite a cor favorita: ');
                break;
            default:
                console.log('\nErro: opção inválida.');
                break;
        }
    }while(op != 1 && op != 2 && op != 3 && op != 4)

    console.log('\nPessoa alterada.')
}

