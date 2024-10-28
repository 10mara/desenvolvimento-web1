//Desenvolva uma função capitalizeWords(str) que transforme a primeira letra de cada palavra em uma frase para maiúscula.

function capitalizeWords(r) {
    return r
      .split(" ")               // Divide a string em uma lista de palavras
      .map(word =>               // Itera sobre cada palavra
        word.charAt(0).toUpperCase() + word.slice(1)  // Capitaliza a primeira letra
      )
      .join(" ");                // Junta as palavras de volta em uma string
  }
  console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
  console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"
  