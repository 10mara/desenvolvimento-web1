//Desenvolva uma função reverseArray(arr) que receba um array e retorne um novo
//array com os elementos em ordem inversa.

function reverseArray(arr){
    let lista=[]
    for (let i = arr.length-1; i >= 0; i--) {
      lista.push(arr[i])
    } return lista
  }
  
  console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
  console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]