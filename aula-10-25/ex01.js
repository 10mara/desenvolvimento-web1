//Crie uma função reverseString(str) que receba uma string como parâmetro e retorne a string invertida.


function reverseString(p){
    let r =""
    for(i= p.length-1;i>=0;i--){
        r+= (p.charAt(i))
    }
    return r
}
console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"

