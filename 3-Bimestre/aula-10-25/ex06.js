//Crie uma função toSnakeCase(str) que receba uma string em formato de frase e converta para o formato "snake_case".

function toSnakeCase(frase){
  
    let lower= frase.toLowerCase()
    let r = lower.replace(/\s+/g, '_')
    return r
  }
  
  console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
  console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"