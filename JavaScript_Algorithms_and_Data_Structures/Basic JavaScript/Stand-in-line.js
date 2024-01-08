/* Ficar na linha
Na Ciência da Computação, uma fila é uma estrutura de dados abstrata onde itens são mantidos em ordem. Novos itens podem ser adicionados no final da fila e itens mais antigos são removidos do início da fila.

Escreva a função nextInLine, que recebe um array (arr) e um número (item) como argumentos.

Adicione o número no final do array e então remova o primeiro elemento do array.

A função nextInLine deve, em seguida, retornar o elemento que foi removido. */
/* INÍCIO EXERCÍCIO */

function nextInLine(arr, item) {
  // Altere apenas o código abaixo desta linha
  arr.push(item);  // Remove o primeiro elemento do array
  let removedElement = arr.shift();

  
  return removedElement;  // Retorna o elemento removido
  // Altere apenas o código acima desta linha
}

// Configuração
let testArr = [1, 2, 3, 4, 5];

// Exibir o código
console.log(nextInLine([], 5));//nextInLine([], 5) deve retornar um número.
console.log(nextInLine([], 1));//nextInLine([], 1) deve retornar 1
console.log(nextInLine([2], 1));//nextInLine([2], 1) deve retornar 2
console.log(nextInLine([5,6,7,8,9], 1));//nextInLine([5,6,7,8,9], 1) deve retornar 5
nextInLine(testArr, 10);//Após nextInLine(testArr, 10), testArr[4] deve ser 10
console.log(testArr[4]);//resultado é 10



console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
