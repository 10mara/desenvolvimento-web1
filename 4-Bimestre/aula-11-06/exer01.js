//Crie uma função sumArray(arr) que receba um array de números e
//retorne a soma de todos os elementos.

function sumArray(arr){
    let total= 0 
    for (let i=0; i<= arr.length -1;i++){
      total+=arr[i]
    }
    return total
  }
  
  console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
  console.log(sumArray([10, -10, 10])); // Deve exibir: 10