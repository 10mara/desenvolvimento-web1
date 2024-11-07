//Crie uma função mergeArrays(arr1, arr2) que receba dois arrays e retorne um novo array 
//contendo todos os elementos de ambos os arrays.

function mergeArrays(arr1,arr2){
    let lista = []
    for (let i = 0; i <= arr1.length-1; i++) {
      lista.push(arr1[i])
    }
     for (let i = 0; i <= arr2.length-1; i++) {
      lista.push(arr2[i])
    } return lista
  }
  
  console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
  console.log(mergeArrays(["apple"], ["banana", "cherry"]));
  // Deve exibir: ["apple", "banana", "cherry"]

  //função alternativa a que fiz
  function mergeArrays2(arr1, arr2) {
    return [...arr1, ...arr2];  // Combina arr1 e arr2 em um novo array
  }