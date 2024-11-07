//Faça uma função para verificar se o uso de álcool compensa mais que o uso de gasolina. 
//Se sim, deve-se retornar True, se não, deve-se retornar False. 
//Sabe-se que álcool compensa se o valor do litro do álcool for abaixo de 70% do valor do litro da gasolina

let al= 6
let gs= 3

function postinho(alcool,gasolina){
  cond1= (alcool/gasolina)*100
  if(cond1<70){
    return true
  }
  else{
    return false
  }
}
let resposta = postinho(al,gs)
if(resposta == true){
    console.log(`O álcool compensa mais! `)
}
else{
    console.log(`A gasolina compensa mais!`)
}