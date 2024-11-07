//Faça uma função que receba um valor numérico representando um ano (por exemplo, 1890) e verifique se o ano é ou não bissexto. 
//Um ano é bissexto se ele for divisível por 400 ou se ele for divisível por 4 e não por 100.

let ano = 2025

function bissexto(data){
  cond1= data%400
  cond2= data%4
  cond3= data%100
  if(cond1===0 || (cond2===0 && cond3 !==0  )){
    console.log(`O ano ${data} é bissexto! `)
  }
  else{
    console.log(`O ano ${data} ñ é bissexto! `)
  }
}
bissexto(ano)