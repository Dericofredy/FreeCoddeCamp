/* Concatenar strings com o operador mais igual

Também podemos usar o operador += para concatenar uma string no final de uma variável string existente. Isso pode ser muito útil para quebrar uma longa string em várias linhas.

Observação: cuidado com os espaços. A concatenação não adiciona espaços entre strings concatenadas, então você mesmo precisará adicioná-los.

Exemplo:

let ourStr = "I come first. ";
ourStr += "I come second.";

ourStr agora deve ter como valor a string I come first. I come second..

Crie myStr em várias linhas concatenando essas duas strings: This is the first sentence. e This is the second sentence. usando o operador +=. Use o operador += de modo semelhante a como ele é mostrado no exemplo e certifique-se de incluir um espaço entre as duas strings. Comece atribuindo o primeiro texto para myStr, e então adicione o segundo texto.
Testes

myStr deve ter um único caractere de espaço entre as duas strings.
myStr deve ter como valor a string This is the first sentence. This is the second sentence.
Você deve usar o operador += para criar myStr. */
//let myStr; variavel a ser alterada
let myStr="This is the first sentence. ";
myStr+="This is the second sentence.";
console.log(myStr);/* isso imprimirá na tela o valor da variável*/