//Crie uma função countVowels(str) que conte o número de vogais (a, e, i, o, u) em uma string e retorne esse valor.

function countVowels(p){
    let r=0
    let l=""
    for(i=0; i< p.length;i++){
        l = (p.charAt(i)) 
        if ("aeiouAEIOU".includes(l)== true) {
            r+=1
        }
    }
    return r
}

console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3