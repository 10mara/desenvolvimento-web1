//Faça uma função que aceite como entrada uma medida em centímetros e uma string: “m” (metros), “mm” (milímetros)
//ou “km” (quilômetros). 
//A função deve converter e devolver a medida em centímetros conforme a string fornecida: m, mm ou km.

let cm= 2.2
let med= "m"

function conversor(cent,medida){
  if (medida==="m"){
    r= cent*100
    console.log(` Esse valor convertido de cm para ${medida} é de ${r}`)
  }
  else if(medida==="mm"){
    r= cent/10
    console.log(` Esse valor convertido de cm para ${medida} é de ${r}`)
  }
  else if(medida==="km"){
    r= cent*100000
    console.log(` Esse valor convertido de cm para ${medida} é de ${r}`)
  }
}
conversor(cm,med)