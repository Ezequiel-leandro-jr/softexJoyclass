/*
Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando 
o array mencionado?
*/

//habilitando a biblioteca readline-sync
const readline = require('readline-sync');

//criação da função "está vazia"
function estaVazia(n){
    return n.length === 0;
}

//criação da função "desenfileirar"
function desenfileirar(n){
    if(estaVazia(n)){
        return null;
    }else{
        return n.shift();
    }
}

//criação da função "remover"
function remover(elemento){
    const indice = lista.indexOf(elemento);
    if(indice !== -1){
        lista.splice(indice, 1);
        return true;
    }else{
        return false;
    }
}

//criação da função "desempilhar"
function desempilhar(k){
    if(estaVazia(k)){
        return null;
    }else{
        return k.pop();
    }
}

/*
FILA: como esta estrutura segue o princípio "primeiro a entrar, primeiro a sair",
a sequência de remoção seria "3 -> 7 -> 9 -> 1 -> 0", como podemos observar no exemplo abaixo.
*/

//criação do array fila
const fila = [3, 7, 9, 1, 0];

//REMOÇÃO em estrutura tipo FILA
console.log(fila);

for(let i = 4; i >= 0; i--){
    desenfileirar(fila);
    console.log(fila);
}


/*
LISTA: a lista é dinâmica, e permite a remoção de elementos específicos através de seu índice.
Vejamos o exemplo abaixo.
*/

//criação do array lista e variável auxiliar
const lista = [3, 7, 9, 1, 0];
let aux = 0;

//REMOÇÃO em estrutura tipo LISTA
console.log(lista);
for(let i = 4; i >= 0; i--){
    aux = readline.questionInt(`Digite o elemento que você quer remover do array [${lista}]: `);
    remover(aux);
    console.log(lista);   
}

/*
PILHA: esta estrutura de dados segue o princípio "primeiro a entrar, último a sair".
Logo, a sequência de remoção seria "0 -> 1 -> 9 -> 7 -> 3", como podemos ver no exemplo abaixo.
*/

//criação do array pilha
const pilha = [3, 7, 9, 1, 0];

//REMOÇÃO em estrutura tipo PILHA
console.log(pilha);
for(let i = 4; i >= 0; i--){
    desempilhar(pilha);
    console.log(pilha);   
}



