/* Manipular arrays com o método push
Um modo fácil de adicionar dados no final de um array é através do método push().

O método push() recebe um ou mais argumentos e os insere no final do array, na ordem em que eles aparecerem. Ele retorna o novo comprimento do array.

Exemplos:

const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 agora tem o valor de [1, 2, 3, 4, 5] e arr2 tem o valor de ["Stimpson", "J", "cat", ["happy", "joy"]].

Empurre ["dog", 3] para o final da variável myArray. */


// Configuração
const myArray = [["John", 23], ["cat", 2]];

// Altere apenas o código abaixo desta linha

myArray.push(["dog", 3]); /* Empurando ["dog", 3] para o final da array */

console.log(myArray); /* Imprimindo os valores */
