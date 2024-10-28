//Crie uma função countOccurrences(str, char) que receba uma string e um caractere, e conte quantas vezes esse caractere aparece na string.

function countOccurrences(p,letra){
    let r=0
    let l=""
    for(i=0; i< p.length;i++){
        l = (p.charAt(i)) 
        if (letra.includes(l)== true) {
            r+=1
        }
    }
    return r
}

console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3
console.log(countOccurrences("samara oliveira da silva", "a")); // Deve exibir: 6
