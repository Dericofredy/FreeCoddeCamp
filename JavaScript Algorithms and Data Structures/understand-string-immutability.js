/* Entender a imutabilidade das strings

Em JavaScript, valores String são imutáveis, o que significa que elas não podem ser alteradas após serem criadas.

Por exemplo, o código a seguir produzirá um erro porque a letra B na cadeia de caracteres Bob não pode ser alterada para a letra J:

let myStr = "Bob";
myStr[0] = "J";

Observe que isso não significa que myStr não possa ser reatribuída. A única forma de alterar myStr seria atribuindo a ela um novo valor, deste modo:

let myStr = "Bob";
myStr = "Job";

Corrija a atribuição para myStr para que contenha o valor Hello World (string) usando a abordagem mostrada no exemplo acima.
Testes

myStr deve ter o valor da string HelloWorld.
Você não deve alterar o código acima do comentário*/

/* Configuração
let myStr = "Jello World";

// Altere apenas o código abaixo desta linha
myStr[0] = "H"; // Altere esta linha
// Altere apenas o código acima desta linha*/

// Execução da atividade
let myStr = "Jello World";
//myStr[0] = "H"; inserindo esse comentário e atribuindo o valor de Hello World a myStr já 'repara' o código
myStr = "Hello World";
console.log(myStr);/* isso imprimirá na tela o valor da variável*/

