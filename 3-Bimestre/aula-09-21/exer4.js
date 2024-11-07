//Um número primo é um número positivo maior que 1 com apenas dois divisores: 1 e o próprio número.
//Faça uma função para determinar se um número é primo ou não. A função deve devolver true ou false
let n=71
function primo (num){
   if (num <= 1) return false; 
    if (num === 2) return true;  
    if (num % 2 === 0) return false; 
    
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

let resposta = primo(n)
if(resposta == true){
    console.log(`primo `)
}
else{
    console.log(`ñ é`)
}
