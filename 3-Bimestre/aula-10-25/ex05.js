//Escreva uma função getInitials(name) que receba o nome completo de uma pessoa e retorne suas iniciais em maiúsculas.

function getInitials(p){
    let r=""
     let l=""
     for(i=0; i< p.length;i++){
         l = (p.charAt(i)) 
         if (l==(l.toUpperCase())) {
             r+=l
         }
     }
     return r
 }
 
 
 console.log(getInitials("João Silva")); // Deve exibir: "JS"
 console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"
 console.log(getInitials("Samara Oliveira da Silva")); // Deve exibir: "SOS"