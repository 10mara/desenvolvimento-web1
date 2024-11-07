//Escreva uma função allEquals(arr) que verifique se todos os elementos de 
//um array são iguais. Retorne true se forem e false caso contrário.

function allEquals(arr){
    let elemento= arr[0]
    let verifique= true
    for (let i = 0; i <= arr.length-1; i++) {
      if (arr[i]!= elemento) {
        verifique=false
      }
    }
    return verifique
  }
  
  console.log(allEquals([1, 1, 1])); // Deve exibir: true
  console.log(allEquals([1, 2, 1])); // Deve exibir: false
  console.log(allEquals([2, 2, 1])); // Deve exibir: false
  console.log(allEquals([1, 2, 2])); // Deve exibir: false
  console.log(allEquals([2, 2, 2])); // Deve exibir: true