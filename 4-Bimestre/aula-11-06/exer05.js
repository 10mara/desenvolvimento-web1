//Crie uma função removeDuplicates(arr) que remova todos os elementos 
//duplicados do array e retorne um novo array com apenas elementos únicos.

function removeDuplicates(arr){
    let comparar= arr[0]
    let lista= [comparar]
    
    for (let i = 0; i <= arr.length-1; i++) {
      if (arr[i]!=comparar){
        lista.push(arr[i])
        comparar=arr[i]
      }
    }return lista
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
  console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]