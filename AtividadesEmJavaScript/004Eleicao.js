/*
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. 
Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. 
Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, 
aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 
*/

//habilitando input através da biblioteca readline-sync
const readline = require("readline-sync");

//declaração das variáveis globais
let valido = false;
let op;
let c;
let continuar = 1;
let x = 0;
let y = 0;
let z = 0;
let b = 0;
let n = 0;

//função cabeçalho
function cabec(){
    console.log("\n---------- ELEIÇÃO ----------\n_____________________________\nCandidato X => 889\nCandidato Y => 847\nCandidato Z => 515\nBranco => 0\n_____________________________\n");
}

//função votação
function voto(){
    while(valido == false){
        try {
            op = readline.questionInt('Digite o número do seu candidato: ');
            if(isNaN(op) == false){
                switch(op){
                    case 889:
                        valido = true;
                        x = x+1;
                        break;
                    case 847:
                        valido = true;
                        y = y+1;
                        break;
                    case 515:
                        valido = true;
                        z = z+1;
                        break;
                    case 0:
                        valido = true;
                        b = b+1;
                        break;
                    default:
                        valido = true;
                        n = n+1;
                        break;
                }
        } else{
            throw new Error('tente novamente!\n');
        }
        } catch (error) {
            console.error('\nERRO: ', error.message);
            continue;
        }    
    }
     //valido = false para rodar o input do voto no loop
     valido = false;
     //input da variável continuar, para continuação ou não no loop
     continuar = readline.questionInt('\nDeseja continuar votando? <1-Sim / 0-Não> ');
    }

//função resultado
function resultado(){
    console.log("\n---------- RESULTADO ----------\n___________________\n");
    console.log(`Candidato X = ${x}\nCandidato Y = ${y}\nCandidato Z = ${z}\nBrancos = ${b}\nNulos = ${n}`);
    console.log('___________________');
    if(x > y && x > z){
        console.log('Vencedor: CANDIDATO X');
    }else if(y > x && y > z){
        console.log('Vencedor: CANDIDATO Y');
    }else if(z > x && z > y){
        console.log('Vencedor: CANDIDATO Z');
    }else{
        console.log('Vencedor: NENHUM');
    }
}

//laço de repetição principal
do{
    cabec();

    voto();          

}while(continuar == 1);

//impressão do resultado
resultado();


