//Crie uma função countOccurrences(arr, element) que receba um array e
//um elemento, e retorne o número de vezes que o elemento aparece no array.

function countOccurrences(arr,element){
    let repete=0
    for (let i = 0; i <= arr.length; i++) {
      if(arr[i]==element){
        repete+=1
      }
    }
    return repete
  }
  
  console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
  console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2