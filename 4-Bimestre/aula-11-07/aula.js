
function samara(elemento){
    return elemento*2
}
function marjory(elemento){
    return elemento/2
}
function bruno(elemento){
    return elemento-2
}
function map(vetor,funcao){
    let novoVetor=[]
    for (elemento of vetor){
        novoVetor.push(funcao(elemento))
    }
    return novoVetor
}

let vetor = [10,20,30]
let v1 = map(vetor,samara) // é uma cópia
//let v2 = vetor , só o vetor referencia
let v2 = map(vetor,marjory)
let v3 = map(vetor, bruno)
let v4 = vetor.map(samara)
let v5 = vetor.map(marjory)
let v6 = vetor.map(bruno)

let v7 = vetor.map(elemento => elemento +1)
function somaUm (elemento){
    return elemento+=1
}


//v1[0]=50
//v2[0]=90



console.log(vetor)
console.log(v1)
console.log(v2)
console.log(v3)