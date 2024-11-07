//Escreva uma função findMax(arr) que receba um array de números e 
//retorne o maior número do array.

function findMax(arr){
    let maior=0
    for (let i = 0; i <= arr.length-1; i++) {
      if (maior<= arr[i]){
        maior= arr[i]
      }
    }
    return maior
  }
  
  console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
  console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10
  console.log(findMax([10, 2899, 10, 100])); // Deve exibir: 2899