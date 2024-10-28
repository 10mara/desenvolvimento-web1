//Escreva uma função isPalindrome(str) que verifique se uma string é um palíndromo (ou seja, se ela é a mesma quando lida de trás para frente).

function isPalindrome(p){
    let r =""
    for(i= p.length-1;i>=0;i--){
        r+= (p.charAt(i))
    }
    
    if(r==p){
      return true
    }
    else{
      return false
    }
    
}

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false
console.log(isPalindrome("mirim")); // Deve exibir: true
