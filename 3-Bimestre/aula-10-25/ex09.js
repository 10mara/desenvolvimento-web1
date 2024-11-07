//Escreva uma função replaceChar(str, oldChar, newChar) que substitua todas as ocorrências de um caractere específico em uma string por outro caractere.

function replaceChar(p, letra1, letra2){
    let r= ""
    for(i=0; i< p.length;i++){
        let l = (p.charAt(i)) 
        if (letra1===l) {
          r += l.replace(l , letra2)
        }
        else{
          r+= l
        }
    }
    return r
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"