/*
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da classe Nó
class No{
    constructor(n, i){
        this.nome = n;
        this.idade = i;
        this.proximo = null;
    }
}

//criação da lista encadeada
class listaEncadeada{
    constructor(){
        this.cabeca = null;
    }

    //método para adicionar nó ao fim da fila
    addNoFim(n, i){
        const novoNo = new No(n, i);
        if(!this.cabeca){
            this.cabeca = novoNo;
        }else{
            let noAtual = this.cabeca;
            while(noAtual.proximo){
                noAtual = noAtual.proximo;
            }
            noAtual.proximo = novoNo;
        }
    }
}

//criação da constante para nova lista encadeada e das variáveis globais do nome e idade e continuar
const lista = new listaEncadeada();
let nome, idade, continuar;

//comando de repetição para criação dos nós da lista encadeada
do{
    nome = readline.question('Digite o nome: ');
    idade = readline.questionInt('Digite a idade: ');

    lista.addNoFim(nome, idade);

    do{
        continuar = readline.questionInt('Deseja adicionar novo nó? <1-Sim / 2-Não> ');
        if(continuar != 1 && continuar !=2){
            console.log('valor incorreto!');
        }
    }while(continuar != 1 && continuar !=2);
    
}while(continuar != 2);

//impressão da lista encadeada
console.log(JSON.stringify(lista, null, 2));
