/* Usar notação de colchetes para encontrar o último caractere em uma string

Para pegar a última letra de uma string, você pode subtrair um do tamanho da string.

Por exemplo, se const firstName = "Ada", você pode pegar o valor da última letra da string ao usar firstName[firstName.length - 1].

Exemplo:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

lastLetter teria o valor da string a.

Use notação de colchetes para descobrir o último caractere na variável lastName.

Dica: tente olhar o exemplo acima se você ficar travado.
Testes

Aguardando: lastLetterOfLastName deve ser a letra e.
Aguardando: Você deve usar .length para pegar a última letra.




// Configuração
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
const lastLetterOfLastName = lastName; // Altere esta linha */

//Execução da atividade
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
const lastLetterOfLastName =lastName[lastName.length-1]; // Altere esta linha
console.log(lastLetterOfLastName);/* isso imprimirá na tela o valor da variável lastLetterOfLastName*/