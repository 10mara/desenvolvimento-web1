const numeros=[1,2,3]
function multiplica2(elemento){
    return elemento*2
}

const multiplica3 = function(elemento){
    return elemento*3
}
const multiplica4 = (elemento)=>{
    return elemento*3
}
const copia= numeros.map(multiplica2)

const saudacao1=() => console.log(`Olá`)
const saudacao2=nome => console.log(`Olá João ${nome}`)
const soma= (a,b)=> /*return*/ a+b
const soma2= (a,b)=> /*return*/ Math.pow(a,b)


const numeroString=numeros.map(elemento=>`numero ${elemento}`)
console.log(numeros)
console.log(numeroString)