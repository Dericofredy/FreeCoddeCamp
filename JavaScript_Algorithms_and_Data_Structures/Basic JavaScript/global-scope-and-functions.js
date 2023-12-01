/* Conhecer o escopo global e funções
Em JavaScript, escopo refere-se à visibilidade de variáveis. Variáveis que são definidas fora de um bloco de função tem o escopo Global. Isso significa que elas podem ser vistas em qualquer lugar no seu código JavaScript.

Variáveis que são declaradas sem a palavra-chave let ou const são automaticamente criadas no escopo global. Isso pode criar consequências indesejadas em outro lugar no seu código ou quando executar uma função novamente. Você sempre deve declarar suas variáveis com let ou const.

Usando let ou const, declare uma variável global chamada myGlobal fora de qualquer função. Inicialize-a com o valor de 10.

Dentro da função fun1, atribua 5 para oopsGlobal sem usar as palavras-chave var, let ou const.

 */

// Declare a variável myGlobal abaixo desta linha

let myGlobal = 10;
function fun1() {
  // Atribua 5 a oopsGlobal aqui
  // uma variavel global pode ser usada dentro de uma função
oopsGlobal=myGlobal/2; 
}

// Altere apenas o código acima desta linha

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
