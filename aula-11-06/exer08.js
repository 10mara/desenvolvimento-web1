//Escreva uma função getEvenNumbers(arr) que receba um array de números e 
//retorne um novo array contendo apenas os números pares.

function getEvenNumbers(arr){
    let lista= []
    for (let i = 0; i <= arr.length-1; i++) {
      if (arr[i]%2==0) {
        lista.push(arr[i])
      }
    }return lista
  }
  
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
  console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]