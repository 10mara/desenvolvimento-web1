function somaS(cont){
    let soma = 0
    for(let x=1,y=1; x<= cont; x++, y+=2){
        soma = soma + x*y
    }
    return soma
}

function somaSerie(cont){
    let r = 0
    for(let i= 1 ; i <= cont ;i++){
        for(let y=1 ;y%2 != 0 && y<cont;y+=2){
             r += i*y
             console.log(`${i}*${y}`)
         }   
        
    } 
    console.log(r)
    
}
console.log(somaSerie(3)) // 1 + 6 + 15 = 22
console.log(somaSerie(4)) // 1 + 6 + 15 + 28 = 50