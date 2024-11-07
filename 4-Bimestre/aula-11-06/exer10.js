//Crie uma função findIndex(arr, element) que receba um array e um elemento, 
//e retorne o índice da primeira ocorrência desse elemento no array. 
//Se o elemento não estiver no array, retorne -1.

function findIndex(arr,element){
    let indice=-1
    for (let i = 0; i <= arr.length-1; i++) {
      if (arr[i]==element) {
        indice=i
      }
    } return indice
  }
  
  console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
  console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1
  console.log(findIndex(["cherry", "cherry"], "cherry")); // Deve exibir: 1
  console.log(findIndex([1, 2, 3, 47,8,5,6], 6)); // Deve exibir: 6