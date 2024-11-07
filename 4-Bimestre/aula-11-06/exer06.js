//Desenvolva uma função average(arr) que receba um array de números e 
//retorne a média dos elementos.

function average(arr){
    let soma = 0
    for (let i = 0; i <= arr.length-1; i++) {
      soma += arr[i]
      
    } 
    let media = (soma/arr.length)
    return media
  }
  
  console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
  console.log(average([10, 20, 30])); // Deve exibir: 20