/* Retornar um valor de uma função com return
Nós podemos passar valores para uma função com argumentos. Você pode usar uma instrução return para enviar um valor para fora de uma função.

Exemplo

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer tem o valor de 8.

plusThree recebe um argumento para num e retorna um valor igual a num + 3.

Crie uma função timesFive que aceita um argumento, multiplica ele por 5 e retorna o novo valor.

 */
function timesFive (num){
  return num*5;
}

const tela = timesFive(0); //Atribuindo o valor retornado a uma constante
console.log(tela);//Imprimindo o valor atribuido a tela
// Imprimindo diretamente a função atribuindo um valor a ela
//Geramos a tabuada de 5
console.log(timesFive(1));
console.log(timesFive(2));
console.log(timesFive(3));
console.log(timesFive(4));
console.log(timesFive(5));
console.log(timesFive(6));
console.log(timesFive(7));
console.log(timesFive(8));
console.log(timesFive(9));
console.log(timesFive(10));
