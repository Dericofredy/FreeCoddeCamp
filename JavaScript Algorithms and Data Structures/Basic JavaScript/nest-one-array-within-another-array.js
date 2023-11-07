/* Aninhar um array em outro array

Você também pode aninhar arrays dentro de outros arrays, como abaixo:

const teams = [["Bulls", 23], ["White Sox", 45]];
Isso é chamado um array multidimensional.

Crie um array aninhado chamado de myArray.

// Altere apenas o código abaixo desta linha
const myArray = [];
*/

const myAarray = [1,2];
const myBarray = [3,4];
const myArray = [myAarray,myBarray];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);