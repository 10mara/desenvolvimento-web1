let vetor= [10,20,30]

console.log(vetor)

vetor[3]= 100
console.log(vetor)
vetor[vetor.length]= 100
console.log(vetor)

vetor[4]=vetor[3]
vetor[3]=vetor[2]
vetor[2]=vetor[1]
vetor[1]=15


function insert(vet,pos,valor){
    if(pos<0) return false
    if(pos>vet.length) return false

    for (let i=vet.length;i>pos;i--){
        vet[i]=vet[i-1]
    }
    vet[pos]=valor
    return true
}


function teste1(){
insert(vetor,0,15)
insert(vetor,vetor.length,45)
insert(vetor,vetor.length-1,65)
insert(vetor,3,50)}