/* Criar strings com variáveis

Às vezes, você precisará criar uma string. Usando o operador de concatenação (+), você pode inserir uma ou mais variáveis em uma string que você está criando.

Exemplo:

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

ourStr teria o valor da string Hello, our name is freeCodeCamp, how are you?.

Defina myName para uma string igual ao seu nome e construa myStr com myName em duas strings: My name is e and I am well!
Testes

myName deve ser definido para uma string de pelo menos 3 caracteres.
Você deve usar dois operadores + para criar myStr com myName dentro dela. */

/*Altere apenas o código abaixo desta linha
const myName = "";
const myStr = "";*/
const myName = "Frederico";
const myStr = "My name is "+myName+" and I am well!";
console.log(myStr);/* isso imprimirá na tela o valor da variável*/