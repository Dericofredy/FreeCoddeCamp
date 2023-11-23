/* Encontrar o tamanho de uma string

Você pode encontrar o tamanho de um valor de String ao escrever .length após a variável de string ou literal de string.

console.log("Alan Peter".length);

O valor 10 seria exibido no console. Observe que o caractere de espaço entre "Alan" e "Peter" também é contado.

Por exemplo, se nós criássemos uma variável const firstName = "Ada", poderíamos descobrir qual o tamanho da string Ada usando a propriedade firstName.length.

Use a propriedade .length para definir lastNameLength como o número de caracteres em lastName.
Testes

Aguardando: Você não deve alterar as declarações de variáveis na seção // Setup.
Aguardando: lastNameLength deve ser igual a oito.
Aguardando: Você deve estar recebendo o tamanho de lastName ao usar .length dessa forma: lastName.length. */
/*Inicio da atividade

// Configuração
let lastNameLength = 0;
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
lastNameLength = lastName;
Final das orientações da atividade*/
//Execução da atividade

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastName.length)// visualizando em console o tamanho da variável
//console.log(lastName.length); Forma direta de aparecer o tamanho "8" da variável lastName
