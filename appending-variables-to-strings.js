
/* Adicionar variáveis para strings

Assim como podemos construir uma string em várias linhas através das strings literais, nós também podemos adicionar as variáveis para a string usando o operador mais igual (+=).

Exemplo:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

ourStr teria o valor freeCodeCamp is awesome!.

Defina someAdjective para uma string de pelo menos 3 caracteres e adicione para myStr usando o operador +=.
Testes

someAdjective deve ser definida para uma string de pelo menos o tamanho de 3 caracteres.
Você deve adicionar someAdjective para myStr usando o operador +=. */
/*Altere o código abaixo desta linha
const someAdjective = "";
let myStr = "Learning to code is ";*/
const someAdjective = " I, Frederico Caldeira, will be the programmer, and I will change my life!";
let myStr = "Learning to code is ";
myStr+=someAdjective;
console.log(myStr);/* isso imprimirá na tela o valor da variável*/
