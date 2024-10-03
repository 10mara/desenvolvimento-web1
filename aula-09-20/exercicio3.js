//Um triângulo pode ser classificado de acordo com as medidas relativas de seus lados. 
//Um triângulo que todos os lados têm a mesma medida é chamado de equilátero, se dois lados tem a mesma medida
//é chamado de isósceles e com lados de medidas diferentes é chamado de escaleno. 
//Faça uma função que analise os lados de qualquer triângulo e retorne sua classificação ou se as medidas não formam um triângulo.

let lado1=5
let lado2=5
let lado3=3
function triangulo (l1,l2,l3){
    if (l1> l2+l3 || l1< Math.abs(l2-l3)) return false
    if (l2> l1+l3 || l2< Math.abs(l1-l3)) return false
    if (l3> l2+l1 || l3< Math.abs(l2-l1)) return false

    return true
}

function triangulo2(l1,l2,l3){
  let resposta = triangulo(lado1,lado2,lado3) 
  if(resposta == true){
     if(l1 == l2 && l1 == l3){
    console.log(`As medidas ${lado1}, ${lado2} e ${lado3} formam um triângulo equilátero!`)
    }
    else if (l1==l2||l1==l3||l2==l3){
    console.log(`As medidas ${lado1}, ${lado2} e ${lado3} formam um triângulo isósceles!`)
    }
    else{
    console.log(`As medidas ${lado1}, ${lado2} e ${lado3} formam um triângulo escaleno!`)
    }
  }
  else{
    console.log(`As medidas ${lado1}, ${lado2} e ${lado3} não formam um triângulo!`)
  }
  
}
triangulo2(lado1,lado2,lado3)